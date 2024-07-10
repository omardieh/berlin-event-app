import Link from "next/link";

export default function HeaderNavbar() {
  return (
    <nav className="container mx-auto flex items-center justify-between p-4">
      <div className="flex items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Logo
        </Link>
      </div>
      <ul className="flex items-center space-x-4">
        <li>
          <Link href="/" className="text-gray-600 hover:text-gray-800">
            Home
          </Link>
        </li>
        <li className="h-6 border-l border-gray-300"></li>
        <li>
          <Link href="/about" className="text-gray-600 hover:text-gray-800">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
