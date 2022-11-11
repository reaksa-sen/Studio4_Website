import { MembersResponse } from 'api/interface';
import { MemberList } from 'components/Member/MemberList';
import { Heading } from 'components/Heading';
import { useLanguageModalContext } from 'hooks/LanguageModalContext';
import Khmer from 'public/languages/khmer/translation.json';
import English from 'public/languages/english/translation.json';

export const HomeMembers: React.FC<{ res: MembersResponse }> = ({ res }) => {
  if (!(res?.data || []).length) return null;

  const { lang } = useLanguageModalContext();
  const TITLE = lang === 'km' ? Khmer['members'] : English['members'];

  return (
    <div className="container py-4">
      <Heading text={TITLE} link="/members" />

      <MemberList res={res.data} />
    </div>
  );
};
