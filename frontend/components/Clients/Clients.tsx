/* eslint-disable @next/next/no-img-element */

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

export const ClientItems: React.FC = () => {
  return (
    <div>
      {items.map((a, i) => (
        <a key={i} href={a.link} target="_blank" rel="noreferrer">
          <img
            src={a.img}
            alt={a.name}
            className="inline-block h-24 w-auto cursor-pointer py-4 px-5"
          />
        </a>
      ))}
    </div>
  );
};
