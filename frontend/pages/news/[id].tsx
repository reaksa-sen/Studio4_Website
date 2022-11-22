import { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import released from '../../public/images/released.jpg';
import { BiTimeFive } from 'react-icons/bi';
import team from '../../public/images/3.jpg';
import Header from 'components/Header';
import { NewsCategoryList } from 'components/News/NewsCategoryList';

const NewsList: NextPage = () => {
  return (
    <>
      <Header title={'News'} />
      <div className="container mt-16 md:mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="col-span-2 py-4 md:p-4 md:py-8">
            <h2 className="font-heading text-xl leading-relaxed text-white">
              «ជួបស៊យ វគ្គ៣» សម្ពោធចាក់បញ្ចាំងជាផ្លូវការ ជាមួយសាច់រឿងមិនធម្មតា សើចផ្អើលរោងកុន
            </h2>
            <p className="flex items-center gap-x-1.5 py-4 text-sm text-white">
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
            <p className="py-5 font-sans !leading-relaxed text-white">
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
            <p className="py-5 font-sans !leading-relaxed text-white">
              ពេល​វេលាដ៏រីករាយនោះ ក៏មាន​ការចូលរួមពីសំណាក់តារា​ប្រុស​ស្រីជា​ច្រើននាក់
              ពិសេស​គឺតួអង្គក្នុងរឿង​នេះ​ផ្ទាល់រួមមាន លោក វុធ ថុង, កញ្ញា ឈិន មុន្នីនាថ, អ្នកនាង
              ប៊ីរីយ៉ា និង​តារា​ប្រុសស្រីជា​ច្រើនរូបទៀត។វគ្គ ៣ នេះ គឺការត្រឡប់មកវិញ
              របស់រឿង​ក្រោយចេញវគ្គ ២ កាលពី ៣ឆ្នាំមុន ពោលគឺឆ្នាំ ២០១៩។
            </p>
          </div>
          <div className="col-span-1 py-4 font-heading md:p-4 md:py-8">
            <NewsCategoryList />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsList;
