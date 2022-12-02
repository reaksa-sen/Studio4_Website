/* eslint-disable @next/next/no-img-element */
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
  ordering?: number;
  isInverted?: boolean;
  className?: string;
}

export const ClientItem: React.FC<IClientItem> = props => {
  const { name, link, moreHeight, moreWidth, image, isInverted, className } = props;
  const imgHighClass = moreHeight ? 'gold-logo--high' : '';
  const imgWidthClass = moreWidth ? 'gold-logo--wide' : '';
  return (
    <div className="flex items-center">
      <Link href={link || ''}>
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

export const ClientList: React.FC<Props> = ({ clients }) => {
  return (
    <div className="flex flex-wrap items-center justify-center">
      {clients.data.map(item => (
        <ClientItem
          key={item.attributes.name}
          name={item.attributes.name}
          link={item.attributes.link}
          image={item.attributes.image?.data?.attributes.url}
          moreHeight={item.attributes.moreHeight ?? false}
          moreWidth={item.attributes.moreWidth ?? false}
        />
      ))}
    </div>
  );
};
