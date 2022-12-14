import { WorkShowcasesResponse } from 'api/interface';
import { Heading } from 'components/Heading';
import { WorkShowcase } from 'components/WorkShowcase/WorkShowcase';
import { useTranslation } from 'react-i18next';

export const HomeWorkShowcase: React.FC<{ data: WorkShowcasesResponse }> = ({ data }) => {
  const { t } = useTranslation();
  return (
    <div className="container py-4 md:px-8">
      <Heading text={t('works-showcase')} link="/works" />
      <WorkShowcase data={data} />
    </div>
  );
};
