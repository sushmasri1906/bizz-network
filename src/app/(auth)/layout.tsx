export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<nav className="flex justify-center items-center w-full h-16 bg-white shadow-md border-b">
				<p className="text-xl font-bold text-red-600">Bizz - Network</p>
			</nav>
			{children}
		</div>
	);
}
