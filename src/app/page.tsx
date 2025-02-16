import { HeroSection } from '../../components/HeroSection';
import { heroData } from '../../data/pages/Home';

export default function Home() {
  return (
      <HeroSection hero={heroData} />
  );
}
