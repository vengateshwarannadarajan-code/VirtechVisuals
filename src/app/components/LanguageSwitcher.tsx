import { useState, useRef, useEffect } from 'react';
import { useI18n, Language } from '../i18n/context';
import { ChevronDown } from 'lucide-react';

const languages: { code: Language; label: string; flag: string; native: string }[] = [
  { code: 'en', label: 'English', flag: '🇬🇧', native: 'EN' },
  { code: 'fr', label: 'Français', flag: '🇫🇷', native: 'FR' },
  { code: 'ta', label: 'தமிழ்',   flag: '🇮🇳', native: 'TA' },
  { code: 'de', label: 'Deutsch',  flag: '🇩🇪', native: 'DE' },
];

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = languages.find(l => l.code === lang) ?? languages[0];

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1.5 text-sm transition-colors hover:text-white ${
          compact
            ? 'text-[#a0a0a0] px-2 py-1.5'
            : 'text-[#a0a0a0] px-3 py-1.5 border border-[#2a2a2a] rounded-md hover:border-[#d4af37]/40'
        }`}
        aria-label="Select language"
      >
        <span>{current.flag}</span>
        <span className="font-medium tracking-wide">{current.native}</span>
        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1.5 w-40 bg-[#111] border border-[#2a2a2a] rounded-xl shadow-2xl shadow-black/50 overflow-hidden z-50">
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => { setLang(l.code); setOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-[#1e1e1e] ${
                lang === l.code
                  ? 'text-[#d4af37] bg-[#d4af37]/5'
                  : 'text-[#a0a0a0]'
              }`}
            >
              <span className="text-base">{l.flag}</span>
              <span>{l.label}</span>
              {lang === l.code && (
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
