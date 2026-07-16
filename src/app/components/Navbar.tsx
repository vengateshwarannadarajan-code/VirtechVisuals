import { useState } from 'react';
import { NavLink, useLocation } from 'react-router';
import { Menu, X, Camera } from 'lucide-react';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Creative Studio', to: '/creative-studio' },
  { label: 'Smart Factory', to: '/smart-factory' },
  { label: 'Products', to: '/products' },
  { label: 'Services', to: '/services' },
  { label: 'Technologies', to: '/technologies' },
  { label: 'AI', to: '/ai' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Contact', to: '/contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isHome ? 'bg-black/40 backdrop-blur-md' : 'bg-[#111]/95 backdrop-blur-md'} border-b border-white/5`}>
      <nav className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <NavLink to="/" className="flex items-center gap-2 group" onClick={() => setOpen(false)}>
          <Camera className="w-5 h-5 text-[#d4af37]" />
          <span className="font-display text-lg tracking-wide">Virtech Visuals</span>
        </NavLink>

        {/* Desktop */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.to}>
              {link.to === '/contact' ? (
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-md text-sm transition-all duration-200 border ${
                      isActive
                        ? 'bg-[#d4af37] text-[#1a1a1a] border-[#d4af37]'
                        : 'border-[#d4af37]/50 text-[#d4af37] hover:bg-[#d4af37] hover:text-[#1a1a1a]'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ) : (
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
              )}
            </li>
          ))}
        </ul>

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
        <div className="lg:hidden bg-[#111]/98 border-t border-white/5 px-4 pb-4">
          <ul className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-md text-sm transition-all duration-200 ${
                      isActive
                        ? 'text-[#d4af37] bg-white/5'
                        : 'text-[#a0a0a0] hover:text-white'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
