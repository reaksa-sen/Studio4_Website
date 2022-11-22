import Image from 'next/image';
import Link from 'next/link';

interface Props {
  id: number;
  title: string;
  description: string;
  slug: string;
  image: any;
}

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

export const NewsList: React.FC<Props> = ({ id, title, image, description, slug }) => {
  return (
    <div>
      <Link href={`/news/${id}`}>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {items.map((a, i) => (
            <div key={i} className="flex h-full cursor-pointer flex-col overflow-hidden">
              <div className="group cursor-pointer ">
                <Image
                  className="transition duration-300 group-hover:scale-105"
                  src={a.img}
                  width={1.2}
                  height={1}
                  alt={'M'}
                  layout={'responsive'}
                  objectFit="cover"
                />

                <div className="flex flex-1 flex-col  bg-[#1E1E1E] p-3 hover:bg-stone-800">
                  <div className="mt-2 block">
                    <div>
                      <p className="font-heading text-lg leading-loose text-gray-200">{a.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Link>
    </div>
  );
};
