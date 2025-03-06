import { heroData, twoColumnImageSectionData } from '../../../data/pages/contact-us';

import { HeroSection } from '../../../components/HeroSection';
import { TwoColumnImageSection } from '../../../components/TwoColumnImageSection';


export default function Home() {
  return (
    <>
      <HeroSection hero={heroData} />
      <TwoColumnImageSection
        settings={twoColumnImageSectionData.settings}
        header={twoColumnImageSectionData.header}
        description={twoColumnImageSectionData.description}
        images={twoColumnImageSectionData.images}
        cta={twoColumnImageSectionData.cta}
      />

    </>
  );
}
