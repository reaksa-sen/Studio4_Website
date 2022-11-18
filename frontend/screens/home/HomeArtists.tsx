import { ArtistsListItem } from 'components/Artists/ArtistsList';
import { Heading } from 'components/Heading';
import Link from 'next/link';

//   return (
//     <Link href={''}>
//       <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
//         {items.map((a, i) => (
//           <div key={i} className="p-3 px-5">
//             <Image
//               className="cursor-pointer rounded-full "
//               src={a.img}
//               alt={a.name}
//               height={1}
//               width={1}
//               layout="responsive"
//               objectFit="cover"
//             />
//           </div>
//         ))}
//       </div>
//     </Link>
//   );
// };

export const HomeArtists: React.FC = () => {
  return (
    <div>
      <div className="container py-4 md:px-8">
        <Heading text={'Artists'} link="/artists" />
        <ArtistsListItem id={0} fullname={''} image={undefined} roles={''} />
      </div>
    </div>
  );
};
