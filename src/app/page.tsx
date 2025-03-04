import { heroData, serviceTabsData, fullWidthSectionData, logoCarouselSectionData, twoColumnImageSectionData } from '../../data/pages/Home';

import { HeroSection } from '../../components/HeroSection';
import { ServiceTabsSection } from '../../components/ServiceTabsSection';
import { FullWidthSection } from '../../components/FullWidthSection';
import { LogoCarouselSection } from '../../components/LogoCarouselSection';
import { TwoColumnImageSection } from '../../components/TwoColumnImageSection';
// import { FAQsSection } from '../../components/FAQsSection';


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
      <TwoColumnImageSection
        settings={twoColumnImageSectionData.settings}
        header={twoColumnImageSectionData.header}
        description={twoColumnImageSectionData.description}
        images={twoColumnImageSectionData.images}
        cta={twoColumnImageSectionData.cta}
      />
      <LogoCarouselSection 
        settings={logoCarouselSectionData.settings}
        header={logoCarouselSectionData.header}
        description={logoCarouselSectionData.description}
        logos={logoCarouselSectionData.logos}
        cta={logoCarouselSectionData.cta}
      />
      
      {/* <FAQsSection
        settings={faqsSectionData.settings}
        header={faqsSectionData.header}
        description={faqsSectionData.description}
        faqs={faqsSectionData.faqs}
      /> */}
    </>
  );
}
