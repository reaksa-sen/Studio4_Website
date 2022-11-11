import { useRouter } from 'next/router';
import { createContext, useContext, useState } from 'react';

export type Language = 'en' | 'km';

interface LanguageModelContextType {
  lang: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageModalContext = createContext<LanguageModelContextType>(null!);

export const useLanguageModalContext = () => useContext(LanguageModalContext);

export const LanguageModalProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const router = useRouter();
  const [lang, setLang] = useState<Language>(
    router.locale === 'kh' ? 'km' : (router.locale as Language)
  );

  function setLanguage(lang: Language) {
    setLang(lang);
  }

  return (
    <LanguageModalContext.Provider value={{ lang, setLanguage }}>
      {children}
    </LanguageModalContext.Provider>
  );
};
