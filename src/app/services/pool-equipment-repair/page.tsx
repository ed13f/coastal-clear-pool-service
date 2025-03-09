import { heroData, serviceTabsData, fullWidthSectionData } from '../../../../data/pages/services/pool-equipment-repair';

import { HeroSection } from '../../../../components/HeroSection';
import { ServiceTabsSection } from '../../../../components/ServiceTabsSection';
import { FullWidthSection } from '../../../../components/FullWidthSection';


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
      
    </>
  );
}
