import { contactUsData } from 'data/pages/contact-us';
import { HeroSection } from 'components/HeroSection';
import { RenderComponents } from 'components/RenderComponents';

export default function ContactUs() {
  return (
    <>
      <HeroSection hero={contactUsData.hero} />
      <RenderComponents pageComponent={contactUsData.components} />
    </>
  );
}
