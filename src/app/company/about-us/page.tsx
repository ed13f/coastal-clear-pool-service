import { heroData, twoColumnImageSectionData, fullWidthSectionData } from '../../../../data/pages/company/about-us';

import { HeroSection } from '../../../../components/HeroSection';
import { TwoColumnImageSection } from '../../../../components/TwoColumnImageSection';
import { FullWidthSection } from '../../../../components/FullWidthSection/FullWidthSection';


export default function Home() {
  return (
    <>
      <HeroSection hero={heroData} />
      <FullWidthSection
        settings={fullWidthSectionData.settings}
        header={fullWidthSectionData.header}
        description={fullWidthSectionData.description}
        cta={fullWidthSectionData.cta}
        image={fullWidthSectionData.image}
      />
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
