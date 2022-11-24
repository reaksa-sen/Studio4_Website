/* eslint-disable @next/next/no-img-element */
import { StaticImageData } from 'next/image';
import classNames from 'classnames';
import { ClientsResponse } from 'api/interface';
import Link from 'next/link';

interface Props {
  clients: ClientsResponse;
}

interface IClientItem {
  name: string;
  link?: string;
  image?: string;
  moreHeight?: boolean;
  moreWidth?: boolean;
  ordering: number;
  isInverted?: boolean;
  className?: string;
}

export const ClientItem: React.FC<IClientItem> = props => {
  const { name, link, moreHeight, moreWidth, image, isInverted, className } = props;
  const imgHighClass = moreHeight ? 'gold-logo--high' : '';
  const imgWidthClass = moreWidth ? 'gold-logo--wide' : '';
  return (
    <div className="flex min-h-[100px] items-center">
      <Link href={link ?? ''}>
        <a target="_blank">
          <img
            src={image}
            alt={name}
            className={classNames(
              `transition duration-150 ease-in-out hover:scale-105 ${imgHighClass} ${imgWidthClass}`,
              className,
              isInverted ? 'invert' : 'gold-logo'
            )}
          />
        </a>
      </Link>
    </div>
  );
};

export const ClientItems: React.FC<Props> = ({ clients }) => {
  return (
    <>
      <div>
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center justify-center ">
            {clients.data.map((item, i) => (
              <ClientItem
                key={i}
                name={item.attributes.name}
                link={item.attributes.link}
                image={item.attributes.image?.data?.attributes.url}
                moreHeight={item.attributes.moreHeight ?? false}
                moreWidth={item.attributes.moreWidth ?? false}
                ordering={0}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
