import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#0E1828]/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <div className="h-20 w-20 bg-[#58F0B8] flex items-center justify-center">
            <span className="text-black text-3xl font-extrabold">
              ///
            </span>
          </div>

          <h1 className="ml-4 text-white text-2xl font-bold tracking-wide">
            PORTFOLIO
          </h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white text-sm font-semibold uppercase tracking-wider hover:text-[#58F0B8] transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden bg-[#58F0B8] p-3"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X size={24} className="text-black" />
          ) : (
            <Menu size={24} className="text-black" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0E1828] border-t border-white/10">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-6 py-4 text-white hover:bg-white/5 hover:text-[#58F0B8]"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;