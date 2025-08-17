"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  Users,
  BookOpen,
  FileText,
  FlaskConical,
  Image as ImageIcon,
  Video,
  Download,
  Book,
  Menu,
  X,
} from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "#autores", label: "Autores", icon: <Users className="w-4 h-4" /> },
    { href: "#introducao", label: "Introdução", icon: <BookOpen className="w-4 h-4" /> },
    { href: "#projeto", label: "Projeto", icon: <FileText className="w-4 h-4" /> },
    { href: "#producao", label: "Produção", icon: <FlaskConical className="w-4 h-4" /> },
    { href: "#galeria", label: "Galeria", icon: <ImageIcon className="w-4 h-4" /> },
    { href: "#video", label: "Vídeo", icon: <Video className="w-4 h-4" /> },
    { href: "#guia", label: "Guia", icon: <Download className="w-4 h-4" /> },
    { href: "#documentacao", label: "Documentação", icon: <Book className="w-4 h-4" /> },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-3 py-3 flex justify-between items-center">
        {/* Logo + Nome */}
        <div className="flex items-center gap-3">
          <Image src="/Logo.png" alt="Logo do Projeto" width={40} height={40} />
          <h1 className="text-green-700 font-bold text-xl">Ceará Científico</h1>
        </div>

        {/* Menu Desktop */}
        <ul className="hidden lg:flex gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="flex items-center gap-1 text-gray-700 hover:text-green-600 transition"
              >
                {link.icon}
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Botão Mobile */}
        <button
          className="lg:hidden text-green-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md absolute top-16 left-0 w-full p-6 space-y-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition"
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
