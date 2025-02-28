export default function Navbar() {
	return (
		<nav className="bg-white shadow-md p-4 flex justify-between items-center">
			<div className="text-xl font-bold text-gray-900">Bizz Network</div>
			<ul className="flex space-x-6">
				<li>
					<a href="#" className="text-gray-700 hover:text-gray-900">
						Home
					</a>
				</li>
				<li>
					<a href="#" className="text-gray-700 hover:text-gray-900">
						Network
					</a>
				</li>
				<li>
					<a href="#" className="text-gray-700 hover:text-gray-900">
						Profile
					</a>
				</li>
				<li>
					<a href="#" className="text-gray-700 hover:text-gray-900">
						Contact
					</a>
				</li>
			</ul>
		</nav>
	);
}
