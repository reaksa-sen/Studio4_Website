import { Wrapper } from 'components/Wrapper';
import { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import released from '../../public/images/released.jpg';
import { BiTimeFive } from 'react-icons/bi';
import team from '../../public/images/3.jpg';
import Header from 'components/Header';

const NewsList: NextPage = () => {
  return (
    <>
      <Header title={'News'} />
      <div className="container mt-12 md:mt-20">
        <Link href={''}>
          <div className="mx-auto max-w-4xl pb-8 pt-8 md:p-4">
            <p className="text-xl font-bold leading-relaxed text-white">
              «ជួបស៊យ វគ្គ៣» សម្ពោធចាក់បញ្ចាំងជាផ្លូវការ ជាមួយសាច់រឿងមិនធម្មតា សើចផ្អើលរោងកុន
            </p>
            <p className="flex items-center gap-x-1 pt-5 pb-2 font-semibold text-white">
              <BiTimeFive /> November 4, 2022
            </p>
            <Image
              alt={'image'}
              height={8}
              width={16}
              layout="responsive"
              objectFit="cover"
              src={released}
            />
            <p className="py-5 font-semibold text-white">
              ពេល​វេលាដ៏រីករាយនោះ ក៏មាន​ការចូលរួមពីសំណាក់តារា​ប្រុស​ស្រីជា​ច្រើននាក់
              ពិសេស​គឺតួអង្គក្នុងរឿង​នេះ​ផ្ទាល់រួមមាន លោក វុធ ថុង, កញ្ញា ឈិន មុន្នីនាថ, អ្នកនាង
              ប៊ីរីយ៉ា និង​តារា​ប្រុសស្រីជា​ច្រើនរូបទៀត។វគ្គ ៣ នេះ គឺការត្រឡប់មកវិញ
              របស់រឿង​ក្រោយចេញវគ្គ ២ កាលពី ៣ឆ្នាំមុន ពោលគឺឆ្នាំ ២០១៩។ ដោយពេល​នេះ​ គឺ​ដល់ពេល កូនប្រុស
              របស់នាយ ស៊យ គឺ នាយ ចង្រៃ បញ្ចេញឬទ្ធិម្ដងហើយ។ ម្យ៉ាងទៀតនោះ បើតាមការបញ្ជាក់ពីលោក លៀក
              លីដា បាន​ឲ្យដឹង នាយ គ្រឿន បង្ហើបមកថានឹងមាន វគ្គ ៤ ជាបន្តទៀត។
            </p>
            <Image
              alt={'image'}
              height={8}
              width={16}
              layout="responsive"
              objectFit="cover"
              src={team}
            />
            <p className="py-5 font-semibold text-white">
              ពេល​វេលាដ៏រីករាយនោះ ក៏មាន​ការចូលរួមពីសំណាក់តារា​ប្រុស​ស្រីជា​ច្រើននាក់
              ពិសេស​គឺតួអង្គក្នុងរឿង​នេះ​ផ្ទាល់រួមមាន លោក វុធ ថុង, កញ្ញា ឈិន មុន្នីនាថ, អ្នកនាង
              ប៊ីរីយ៉ា និង​តារា​ប្រុសស្រីជា​ច្រើនរូបទៀត។វគ្គ ៣ នេះ គឺការត្រឡប់មកវិញ
              របស់រឿង​ក្រោយចេញវគ្គ ២ កាលពី ៣ឆ្នាំមុន ពោលគឺឆ្នាំ ២០១៩។
            </p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default NewsList;
