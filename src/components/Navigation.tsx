import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (href: string) => {
    setActive(href);
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/95 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => handleClick('#hero')}
          className="text-white font-bold text-xl tracking-widest hover:text-blue-400 transition-colors duration-300"
        >
          SAADHYA
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className={`text-sm font-medium tracking-wider transition-all duration-300 relative group ${
                active === link.href ? 'text-blue-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-400 transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
          <a
            href="mailto:saadhya98@gmail.com"
            className="ml-4 px-5 py-2 text-sm font-semibold border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300 rounded-sm tracking-wider"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-400 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-black/98 border-t border-white/10`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="text-left text-gray-300 hover:text-white text-sm font-medium tracking-wider py-2 border-b border-white/5"
            >
              {link.label}
            </button>
          ))}
          <a
            href="mailto:saadhya98@gmail.com"
            className="mt-2 px-5 py-2 text-sm font-semibold border border-blue-500 text-blue-400 text-center hover:bg-blue-500 hover:text-white transition-all duration-300"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}
