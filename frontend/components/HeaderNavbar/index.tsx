import { headerLinks } from "@/constants/headerLinks";
import { IHeaderLink } from "@/types";
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
      {headerLinks.map(( {href, className, text} : IHeaderLink, index: number) => (
          <li key={index}>
          <Link href={href} className={className}>
            {text}
          </Link>
        </li>
        ))}
      </ul>
    </nav>
  );
}
