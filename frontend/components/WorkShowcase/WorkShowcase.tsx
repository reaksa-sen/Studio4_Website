import Image from 'next/image';
import NextImage from 'components/Image';
import { CiYoutube } from 'react-icons/ci';
import { useVideoModalContext } from 'hooks/videoModalHook';
import { WorkShowcasesResponse } from 'api/interface';

interface IWorkShowcaseItem {
  title: string;
  image: any;
  link: string;
}

export const WorkShowcaseItem: React.FC<IWorkShowcaseItem> = ({ title, image, link }) => {
  const { onModalOpen } = useVideoModalContext();
  return (
    <div key={title} className="relative cursor-pointer " onClick={() => onModalOpen(link)}>
      <div className="group cursor-pointer overflow-hidden">
        <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
          <CiYoutube className="h-14 w-auto text-primary-500 group-hover:text-primary-600" />
        </div>
        <NextImage
          className="transition duration-300 group-hover:scale-105"
          image={image}
          alt={title}
          height={1.1}
          width={1.7}
          layout="responsive"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export const WorkShowcase: React.FC<{ data: WorkShowcasesResponse }> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
      {data?.data.map((item, i) => (
        <WorkShowcaseItem
          key={item.id}
          title={item.attributes.title}
          image={item.attributes.image}
          link={item.attributes.link}
        />
      ))}
    </div>
  );
};
