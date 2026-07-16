import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'fr' | 'ta' | 'de';

interface I18nContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType>({
  lang: 'en',
  setLang: () => {},
  t: (key) => key,
});

export function useI18n() {
  return useContext(I18nContext);
}

export function I18nProvider({ children, translations }: { children: ReactNode; translations: Record<Language, Record<string, string>> }) {
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem('vv-lang') as Language;
    return saved && ['en', 'fr', 'ta', 'de'].includes(saved) ? saved : 'en';
  });

  const setLang = (l: Language) => {
    setLangState(l);
    localStorage.setItem('vv-lang', l);
  };

  const t = (key: string): string => {
    return translations[lang]?.[key] ?? translations['en']?.[key] ?? key;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}
