import { useState } from 'react';
import { Outlet, NavLink, Link } from 'react-router';
import { Menu, X, Cpu } from 'lucide-react';

const navLinks = [
  { label: 'Smart Factory', to: '/tech/smart-factory' },
  { label: 'Products', to: '/tech/products' },
  { label: 'Services', to: '/tech/services' },
  { label: 'Technologies', to: '/tech/technologies' },
  { label: 'AI', to: '/tech/ai' },
  { label: 'Case Studies', to: '/tech/case-studies' },
];

export default function TechLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0f1e] text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0f1e]/95 backdrop-blur-sm border-b border-[#1e2a4a]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
          <Link to="/tech" className="flex items-center gap-3">
            <img src="/logo.png" alt="Virtech Visuals" className="h-8 w-auto" />
            <span className="text-sm text-[#f0c030] font-semibold tracking-widest uppercase">Tech Solutions</span>
          </Link>

          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map(link => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `text-sm transition-colors duration-200 ${isActive ? 'text-[#f0c030]' : 'text-[#a0b0cc] hover:text-white'}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-4">
            <Link to="/" className="text-sm text-[#a0b0cc] hover:text-[#f0c030] transition-colors">
              ← Photography
            </Link>
            <a href="mailto:business@virtechvisuals.com" className="px-4 py-2 bg-[#f0c030] text-[#0a0f1e] text-sm font-semibold rounded-lg hover:bg-white transition-all duration-300">
              Contact Us
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-[#0a0f1e]/95 px-4 pb-6 pt-2 border-t border-[#1e2a4a]">
            <ul className="flex flex-col gap-4">
              {navLinks.map(link => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `text-sm ${isActive ? 'text-[#f0c030]' : 'text-[#a0b0cc]'}`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
              <li>
                <Link to="/" className="text-sm text-[#a0b0cc] hover:text-[#f0c030]">← Photography</Link>
              </li>
            </ul>
          </div>
        )}
      </nav>

      <div className="pt-16">
        <Outlet />
      </div>

      <footer className="bg-[#050810] py-8 px-4 border-t border-[#1e2a4a] mt-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Virtech Visuals" className="h-8 w-auto" />
            <span className="text-[#a0b0cc] text-sm">Tech Solutions — Paris, France</span>
          </div>
          <p className="text-[#a0b0cc] text-sm">© 2026 Virtech Visuals. All rights reserved.</p>
          <a href="mailto:business@virtechvisuals.com" className="text-[#f0c030] text-sm hover:text-white transition-colors">
            business@virtechvisuals.com
          </a>
        </div>
      </footer>
    </div>
  );
}
