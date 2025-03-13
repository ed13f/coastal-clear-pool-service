import { aboutUsData } from '../../../../data/pages/company/about-us';
import { HeroSection } from '../../../../components/HeroSection';
import { RenderComponents } from '../../../../components/RenderComponents';

export default function About() {
  return (
    <>
      <HeroSection hero={aboutUsData.hero} />
      <RenderComponents pageComponent={aboutUsData.components} />
    </>
  );
}
