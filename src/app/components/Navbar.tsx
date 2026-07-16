import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router';
import { Menu, X, Zap } from 'lucide-react';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Creative Studio', to: '/creative-studio' },
  { label: 'Smart Factory', to: '/smart-factory' },
  { label: 'Products', to: '/products' },
  { label: 'Services', to: '/services' },
  { label: 'AI', to: '/ai' },
  { label: 'Case Studies', to: '/case-studies' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled || !isHome ? 'bg-[#0d0d0d]/95 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 group" onClick={() => setOpen(false)}>
          <div className="w-7 h-7 bg-[#d4af37] rounded-md flex items-center justify-center">
            <Zap className="w-4 h-4 text-[#1a1a1a]" />
          </div>
          <span className="font-display text-lg tracking-wide text-white">Virtech Visuals</span>
        </NavLink>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm transition-all duration-200 ${
                    isActive
                      ? 'text-[#d4af37] bg-white/5'
                      : 'text-[#a0a0a0] hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Contact CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://wa.me/33780843487" aria-label="Chat on WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 text-sm text-[#a0a0a0] hover:text-white transition-colors"
          >
            WhatsApp
          </a>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `px-4 py-2 rounded-md text-sm border transition-all duration-200 ${
                isActive
                  ? 'bg-[#d4af37] text-[#1a1a1a] border-[#d4af37]'
                  : 'border-[#d4af37]/60 text-[#d4af37] hover:bg-[#d4af37] hover:text-[#1a1a1a]'
              }`
            }
          >
            Contact Us
          </NavLink>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#0d0d0d]/98 border-t border-white/5 px-4 pb-6">
          <ul className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-3 rounded-md text-sm transition-colors ${
                      isActive ? 'text-[#d4af37] bg-white/5' : 'text-[#a0a0a0] hover:text-white hover:bg-white/5'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-2 border-t border-white/5 mt-2">
              <a
                href="https://wa.me/33780843487" aria-label="Chat on WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-3 text-sm text-[#a0a0a0] hover:text-white"
              >
                💬 WhatsApp: +33 7 80 84 34 87
              </a>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={() => setOpen(false)}
                className="block mt-1 px-4 py-3 rounded-md text-sm text-center bg-[#d4af37] text-[#1a1a1a] font-medium"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
