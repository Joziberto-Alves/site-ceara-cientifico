"use client";

import Link from "next/link";

const Navbar = () => {
  const links = [
    { href: "#projeto", label: "Projeto" },
    { href: "#video", label: "Vídeo" },
    { href: "#guia", label: "Guia" },
    { href: "#documentacao", label: "Documentação" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        <h1 className="text-green-700 font-bold text-xl">Ceará Científico</h1>
        <ul className="flex gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-gray-700 hover:text-green-600 transition">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
