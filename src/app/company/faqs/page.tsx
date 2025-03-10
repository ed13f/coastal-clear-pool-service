import { heroData, faqsSectionData } from '../../../../data/pages/company/faqs';

import { HeroSection } from '../../../../components/HeroSection';
import { FAQsSection } from '../../../../components/FAQsSection/FAQsSection';


export default function Home() {
  return (
    <>
      <HeroSection hero={heroData} />
      <FAQsSection
        settings={faqsSectionData.settings}
        header={faqsSectionData.header}
        description={faqsSectionData.description}
        faqs={faqsSectionData.faqs}
      />

    </>
  );
}
