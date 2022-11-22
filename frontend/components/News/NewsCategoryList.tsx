import Image from 'next/image';
import Link from 'next/link';

const items = [
  {
    img: '/images/1.jpg',
    names: 'showcase1',
    title: 'តួអង្គ សុភារិទ្ធ ប្រាប់ពីចរឹកពិតនៅក្នុងសាច់រឿងដែលខ្លួនសម្ដែង។​​'
  },
  {
    img: '/images/2.jpg',
    names: 'showcase2',
    title: 'តួអង្គ សុភារិទ្ធ ប្រាប់ពីចរឹកពិតនៅក្នុងសាច់រឿងដែលខ្លួនសម្ដែង។​​'
  },
  {
    img: '/images/3.jpg',
    names: 'showcase3',
    title: 'តួអង្គ សុភារិទ្ធ ប្រាប់ពីចរឹកពិតនៅក្នុងសាច់រឿងដែលខ្លួនសម្ដែង។​​'
  },
  {
    img: '/images/4.jpg',
    names: 'showcase4',
    title: 'តួអង្គ សុភារិទ្ធ ប្រាប់ពីចរឹកពិតនៅក្នុងសាច់រឿងដែលខ្លួនសម្ដែង។​​'
  },

  {
    img: '/images/5.jpg',
    names: 'showcase5',
    title: 'តួអង្គ សុភារិទ្ធ ប្រាប់ពីចរឹកពិតនៅក្នុងសាច់រឿងដែលខ្លួនសម្ដែង។​​'
  },
  {
    img: '/images/6.png',
    names: 'showcase6',
    title: 'តួអង្គ សុភារិទ្ធ ប្រាប់ពីចរឹកពិតនៅក្នុងសាច់រឿងដែលខ្លួនសម្ដែង។​​'
  },
  {
    img: '/images/7.png',
    names: 'showcase6',
    title: 'តួអង្គ សុភារិទ្ធ ប្រាប់ពីចរឹកពិតនៅក្នុងសាច់រឿងដែលខ្លួនសម្ដែង។​​'
  },
  {
    img: '/images/8.png',
    names: 'showcase6',
    title: 'តួអង្គ សុភារិទ្ធ ប្រាប់ពីចរឹកពិតនៅក្នុងសាច់រឿងដែលខ្លួនសម្ដែង។​​'
  }
];

export const NewsCategoryList: React.FC = () => {
  return (
    <ul className="divide-y divide-primary-600">
      <div className=" pb-2 font-sans text-lg uppercase text-white">lists news</div>
      {items.map((x, i) => (
        <li className="grid grid-cols-3 gap-2 py-3" key={i}>
          <div className="col-span-1 cursor-pointer">
            <Image
              alt={x.names}
              src={x.img}
              width="16"
              height="9"
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <div className="col-span-2">
            <Link href={``} passHref>
              <a className="font-heading text-sm leading-normal text-white line-clamp-2 hover:text-primary-500 hover:underline">
                {x.title}
              </a>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
};
