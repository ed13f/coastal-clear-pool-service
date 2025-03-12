import { faqsData } from '../../../../data/pages/company/faqs';
import { HeroSection } from '../../../../components/HeroSection';
import { RenderComponents } from '../../../../components/RenderComponents';

export default function Home() {
  return (
    <>
      <HeroSection hero={faqsData.hero} />
      <RenderComponents pageComponent={faqsData.components} />
    </>
  );
}
