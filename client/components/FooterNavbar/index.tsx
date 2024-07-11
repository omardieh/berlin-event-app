import Link from "next/link";

export default function FooterNavbar() {
  return (
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
      <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
        <Link href="/" className="text-2xl font-bold mb-2">
          Logo
        </Link>
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
      <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mb-4 md:mb-0">
        <li>
          <Link href="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:underline">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </li>
        <li>
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link href="/terms" className="hover:underline">
            Terms of Service
          </Link>
        </li>
      </ul>
    </div>
  );
}
