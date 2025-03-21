import NextAuth, { NextAuthOptions } from "next-auth";
import { Session } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";
import { prisma } from "./prisma";
import bcrypt from "bcryptjs";
import { Role } from "@prisma/client";

export const authOptions: NextAuthOptions = {
	providers: [
		// Gmail Authentication
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
		}),
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				email: { label: "Email", type: "email" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials) {
				if (!credentials?.email || !credentials?.password) {
					throw new Error("Email and password are required");
				}

				// Find user in database
				const user = await prisma.user.findUnique({
					where: { email: credentials.email },
				});

				if (!user) {
					throw new Error("No user found with this email");
				}

				// Verify password
				const isValidPassword = await bcrypt.compare(
					credentials.password,
					user.password
				);
				if (!isValidPassword) {
					throw new Error("Invalid password");
				}

				return user; // Return user object on successful authentication
			},
		}),
	],
	callbacks: {
		async signIn({ user }) {
			// Check if user already exists in the database
			const existingUser = await prisma.user.findUnique({
				where: {
					email: user.email!,
				},
			});

			// If user doesn't exist, create a new record
			if (!existingUser) {
				return "/register";
			}

			if (existingUser.personalDetailsId) {
				return "/dashboard";
			} else {
				return "/register/personal-details";
			}
		},
		async jwt({ token, user }) {
			// Add user information to the token
			if (user && user.email) {
				const res = await prisma.user.findFirst({
					where: {
						email: user.email,
					},
				});
				token.id = res?.id;
				token.role = res?.role;
			}
			return token;
		},
		async session({ session, token }: { session: Session; token: JWT }) {
			if (session.user && token) {
				session.user.id = token.id as string;
				session.user.role = token.role as Role;
			}
			return session;
		},
	},
	secret: process.env.NEXTAUTH_SECRET!,
};

export default NextAuth(authOptions);
