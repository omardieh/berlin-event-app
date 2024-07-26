import { FOOTER_LINKS } from "@/common";
import { IFOOTER_LINKS } from "@/types";
import Link from "next/link";

export const FooterNavbar = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
      <div className="flex items-center content-center md:items-start mb-4 md:mb-0">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
      <ul className="flex space-x-4">
        {FOOTER_LINKS.map(
          ({ href, className, text }: IFOOTER_LINKS, index: number) => (
            <li key={index + href}>
              <Link href={href} className={className}>
                {text}
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
};
