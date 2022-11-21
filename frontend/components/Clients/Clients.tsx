/* eslint-disable @next/next/no-img-element */
import { StaticImageData } from 'next/image';
import classNames from 'classnames';

interface Props {
  src: StaticImageData | string;
  alt?: string;
  isInverted?: boolean;
  className?: string;
  link?: string;
}

const items = [
  {
    img: '/images/11.png',
    name: 'client6',
    link: 'https://advan-auto.com/'
  },
  {
    img: '/images/10.png',
    name: 'client7',
    link: 'https://ldentertainmentkh.com/'
  },
  {
    img: '/images/9.png',
    name: 'client8',
    link: 'https://news.sabay.com.kh/'
  },
  {
    img: '/images/Mono.png',
    name: 'client5',
    link: 'https://oneworldsoftware.com/'
  }
];

const PartnerItem: React.FC<Props> = ({ src, alt, className, isInverted, link }) => (
  <div className="flex min-h-[100px] items-center">
    <img
      src={src as never}
      alt={alt}
      className={classNames(
        'transition duration-150 ease-in-out hover:scale-105 ',
        className,
        isInverted ? 'invert' : 'gold-logo'
      )}
    />
  </div>
);

export const ClientItems: React.FC = () => {
  return (
    <>
      <div>
        <div className="mx-auto max-w-7xl">
          <div>
            <div className="flex flex-wrap items-center justify-center ">
              <a href="https://advan-auto.com/" target="_blank" rel="noreferrer">
                <PartnerItem src="/images/11.png" alt="client1" />
              </a>
              <a href="https://ldentertainmentkh.com/" target="_blank" rel="noreferrer">
                <PartnerItem src="/images/10.png" alt="client2" />
              </a>
              <a href="https://news.sabay.com.kh/" target="_blank" rel="noreferrer">
                <PartnerItem src="/images/9.png" alt="client3" />
              </a>
              <a href="https://oneworldsoftware.com/" target="_blank" rel="noreferrer">
                <PartnerItem src="/images/Mono.png" alt="client4" className="gold-logo--wide" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        {items.map((a, i) => (
          <a key={i} href={a.link} target="_blank" rel="noreferrer">
            <img
              src={a.img}
              alt={a.name}
              className="inline-block h-24 w-auto cursor-pointer py-4 px-5" />
          </a>
        ))}
      </div> */}
    </>
  );
};
