import { heroData, serviceTabsData, fullWidthSectionData, logoCarouselSectionData } from '../../data/pages/Home';

import { HeroSection } from '../../components/HeroSection';
import { ServiceTabsSection } from '../../components/ServiceTabsSection';
import { FullWidthSection } from '../../components/FullWidthSection';
import { LogoCarouselSection } from '../../components/LogoCarouselSection';

export default function Home() {
  return (
    <>
      <HeroSection hero={heroData} />
      <ServiceTabsSection 
        settings={serviceTabsData.settings}
        header={serviceTabsData.header}
        description={serviceTabsData.description}
        cards={serviceTabsData.cards}
      />
      <FullWidthSection
        settings={fullWidthSectionData.settings}
        header={fullWidthSectionData.header}
        description={fullWidthSectionData.description}
        cta={fullWidthSectionData.cta}
        image={fullWidthSectionData.image}
      />
      <LogoCarouselSection 
        settings={logoCarouselSectionData.settings}
        header={logoCarouselSectionData.header}
        description={logoCarouselSectionData.description}
        logos={logoCarouselSectionData.logos}
        cta={logoCarouselSectionData.cta}
      />
    </>
  );
}
