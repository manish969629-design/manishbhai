"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Search, User } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#" },
  { name: "PDF Tools", href: "#" },
  { name: "Image Tools", href: "#" },
  { name: "Government", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <Link href="/" className="flex items-center gap-3">

         <Image
  src="/images/logo.png"
  alt="Digital Desk"
  width={70}
  height={70}
  priority
  className="h-16 w-auto object-contain"
/>

          <div>
            <h1 className="text-xl font-bold text-slate-900">
              Digital Desk
            </h1>

            <p className="text-xs text-gray-500">
              One Platform For Every Digital Service
            </p>
          </div>

        </Link>

        <nav className="hidden lg:flex items-center gap-8">

          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              {item.name}
            </Link>
          ))}

        </nav>

        <div className="hidden lg:flex items-center gap-3">

          <button className="w-11 h-11 rounded-xl border flex items-center justify-center hover:bg-slate-100">
            <Search size={20} />
          </button>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl flex items-center gap-2 font-medium">
            <User size={18} />
            Login
          </button>

        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden"
        >
          <Menu />
        </button>

      </div>

      {open && (
        <div className="lg:hidden border-t bg-white">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block px-6 py-4 border-b"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
} 