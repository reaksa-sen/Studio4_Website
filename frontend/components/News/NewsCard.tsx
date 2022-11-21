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
    names: 'showcase1'
  },
  {
    img: '/images/2.jpg',
    names: 'showcase2'
  },
  {
    img: '/images/3.jpg',
    names: 'showcase3'
  },
  {
    img: '/images/4.jpg',
    names: 'showcase4'
  },

  {
    img: '/images/5.jpg',
    names: 'showcase5'
  },
  {
    img: '/images/6.png',
    names: 'showcase6'
  },
  {
    img: '/images/7.png',
    names: 'showcase6'
  },
  {
    img: '/images/8.png',
    names: 'showcase6'
  }
];

const titles = [
  {
    title: 'តួអង្គ សុភារិទ្ធ ប្រាប់ពីចរឹកពិតនៅក្នុងសាច់រឿងដែលខ្លួនសម្ដែង។​​',
    description:
      ' ពាក់ព័ន្ធទៅនឹងវីដេអូ ​ដែល​កំពុង​ទទួល​បាន​ការចាប់អារម្មណ៍​ច្រើន​នៅ​លើ​បណ្តាញ​សង្គម​នេះផងដែរ លោក ទេរិនដារ៉ូ​​ បានថ្លែងថា៖ «ខ្ញុំពិត​ជា​មានកិត្តិយសយ៉ាងខ្លាំងនិងសូម​​កោត​សរសើរអំពីសាច់រឿង​'
  }
];

export const NewsCard: React.FC<Props> = ({ id, title, image, description, slug }) => {
  return (
    <div>
      <Link href={`/news/${id}`}>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {items.map((a, i) => (
            <div key={i} className="flex h-full cursor-pointer flex-col overflow-hidden">
              <div className="group cursor-pointer overflow-hidden">
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
                    {titles.map((a, i) => (
                      <div key={i}>
                        <p className="font-heading text-lg leading-loose text-gray-200">
                          {a.title}
                        </p>
                        {/* <p className="mt-3 text-base leading-7 text-gray-200 line-clamp-3">
                        {a.description}
                      </p> */}
                      </div>
                    ))}
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
