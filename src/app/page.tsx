import { HeroSection } from '../../components/HeroSection';
import { ServiceTabsSection } from '../../components/ServiceTabsSection';
import { heroData, serviceTabsData } from '../../data/pages/Home';

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
    </>
  );
}
