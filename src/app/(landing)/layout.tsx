import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div>
			<Navbar />
			{children}
			<Footer />
		</div>
	);
}
