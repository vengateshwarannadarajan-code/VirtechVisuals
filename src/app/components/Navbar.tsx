import { useState } from 'react';
import { NavLink, useLocation } from 'react-router';
import { Menu, X, Camera, MessageCircle } from 'lucide-react';
import { useI18n } from '../i18n/context';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const { t } = useI18n();

  const navLinks = [
    { labelKey: 'nav.home',       to: '/' },
    { labelKey: 'nav.creative',   to: '/creative-studio' },
    { labelKey: 'nav.factory',    to: '/smart-factory' },
    { labelKey: 'nav.products',   to: '/products' },
    { labelKey: 'nav.services',   to: '/services' },
    { labelKey: 'nav.technologies', to: '/technologies' },
    { labelKey: 'nav.ai',         to: '/ai' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isHome ? 'bg-black/40 backdrop-blur-md' : 'bg-[#111]/95 backdrop-blur-md'
    } border-b border-white/5`}>
      <nav className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 group" onClick={() => setOpen(false)}>
          <Camera className="w-5 h-5 text-[#d4af37]" />
          <span className="font-display text-lg tracking-wide">Virtech Visuals</span>
        </NavLink>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm transition-all duration-200 ${
                    isActive ? 'text-[#d4af37] bg-white/5' : 'text-[#a0a0a0] hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {t(link.labelKey)}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop right — language + contact */}
        <div className="hidden lg:flex items-center gap-2">
          <LanguageSwitcher />
          <a
            href="https://wa.me/33780843487"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="p-2 text-[#a0a0a0] hover:text-[#25D366] transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
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
            {t('nav.contact')}
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
                      isActive ? 'text-[#d4af37] bg-white/5' : 'text-[#a0a0a0] hover:text-white'
                    }`
                  }
                >
                  {t(link.labelKey)}
                </NavLink>
              </li>
            ))}
            <li className="pt-3 border-t border-white/5 mt-2 flex items-center justify-between">
              <a
                href="https://wa.me/33780843487"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#a0a0a0] hover:text-white"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                +33 7 80 84 34 87
              </a>
              <LanguageSwitcher compact />
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={() => setOpen(false)}
                className="block mt-1 px-4 py-3 rounded-md text-sm text-center bg-[#d4af37] text-[#1a1a1a] font-medium"
              >
                {t('nav.contact')}
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
