import NextImage from '../Image';

interface Props {
  image: any;
  tag?: string;
  title: string;
  url: string;
  onClick?: (url: string) => void;
}

export const VideoListItem: React.FC<Props> = ({ image, title, url, tag, onClick }) => {
  return (
    <li className="group cursor-pointer">
      <div onClick={() => onClick(url)}>
        <div className="relative cursor-pointer overflow-hidden">
          <NextImage
            alt={title}
            className="transition duration-150 group-hover:scale-105"
            image={image}
            height={9}
            width={16}
            size={'M'}
            layout={'responsive'}
          />
        </div>
        <div className="flex flex-col pt-2">
          <span className="pb-1 font-bold text-gray-500 group-hover:text-yellow-600">{tag}</span>
          <span className="text-stone-900 line-clamp-2 group-hover:text-yellow-600 group-hover:underline">
            {title}
          </span>
        </div>
      </div>
    </li>
  );
};
