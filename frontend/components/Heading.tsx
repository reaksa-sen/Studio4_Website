import Link from 'next/link';
import Khmer from 'public/languages/khmer/translation.json';
import English from 'public/languages/english/translation.json';
import { useLanguageModalContext } from 'hooks/LanguageModalContext';
interface HeadingProps {
  text: string;
  link?: string;
}

export const Heading: React.FC<HeadingProps> = ({ text, link }) => {
  const { lang } = useLanguageModalContext();
  return (
    <div className="my-4 flex items-center justify-between pb-2">
      <div>
        <h1 className="text-2xl font-extrabold uppercase text-stone-900 md:text-3xl">{text}</h1>
        <div className="w-24 border-b-4 border-[#F8931D] pt-2"></div>
      </div>
      {link && (
        <Link href={link}>
          <a className="font-semibold text-stone-900 hover:text-[#F8931D]">
            {lang === 'km' ? Khmer['see-more'] : English['see-more']}
          </a>
        </Link>
      )}
    </div>
  );
};
