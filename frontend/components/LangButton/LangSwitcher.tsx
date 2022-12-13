/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
interface Language {
  key: string;
  name: string;
  img: string;
}

const languages: Language[] = [
  { key: 'en', name: 'English', img: '/images/united-kingdom.png' },
  { key: 'km', name: 'ខ្មែរ', img: '/images/cambodia.png' }
];

export const LangSwitcher = () => {
  const router = useRouter();
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(router.locale === 'en' ? languages[0] : languages[1]);

  function handleChangeLang(lng: Language) {
    i18n.changeLanguage(lng.key);
    router.push(router.asPath, router.asPath, { locale: lng.key });
    setLang(lng);
  }

  useEffect(() => {
    i18n.changeLanguage(router.locale);
  }, []);

  return (
    <div
      onClick={() => handleChangeLang(lang.key === 'en' ? languages[1] : languages[0])}
      className="flex items-center"
    >
      <img
        className="h-8 w-auto cursor-pointer"
        src={lang.key === 'en' ? languages[0].img : languages[1].img}
        alt={lang.name}
      />
    </div>
  );
};
