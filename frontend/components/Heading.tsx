import Link from 'next/link';
import { IoPlaySkipForwardSharp } from 'react-icons/io5';
interface HeadingProps {
  text: string;
  link?: string;
}

export const Heading: React.FC<HeadingProps> = ({ text, link }) => {
  return (
    <div className="my-4 flex items-center justify-between pb-2">
      <div>
        <h1 className="text-xl font-extrabold text-white md:text-2xl">{text}</h1>
        <div className="w-16 border-b-4 border-primary-500 pt-2"></div>
      </div>
      {link && (
        <Link href={link}>
          <a className=" flex items-center gap-x-1 font-semibold text-white hover:text-primary-500">
            More <IoPlaySkipForwardSharp className="text-primary-600" />
          </a>
        </Link>
      )}
    </div>
  );
};
