import { heroData, serviceTabsData, fullWidthSectionData } from '../../../../data/pages/services/pool-heaters';

import { HeroSection } from '../../../../components/HeroSection';
import { ServiceTabsSection } from '../../../../components/ServiceTabsSection';
import { FullWidthSection } from '../../../../components/FullWidthSection';
import { TwoColumnImageSection } from '../../../../components/TwoColumnImageSection';


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
      <ServiceTabsSection 
        settings={serviceTabsData.settings}
        header={serviceTabsData.header}
        description={serviceTabsData.description}
        cards={serviceTabsData.cards}
      />
      {/* <TwoColumnImageSection
        settings={twoColumnImageSectionData.settings}
        header={twoColumnImageSectionData.header}
        description={twoColumnImageSectionData.description}
        images={twoColumnImageSectionData.images}
        cta={twoColumnImageSectionData.cta}
      /> */}
      
      
      
    </>
  );
}
