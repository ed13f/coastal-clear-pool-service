import { poolRemodelingData } from '../../../../data/pages/services/pool-remodeling';
import { HeroSection } from '../../../../components/HeroSection';
import { RenderComponents } from '../../../../components/RenderComponents';

export default function Home() {
  return (
    <>
      <HeroSection hero={poolRemodelingData.hero} />
      <RenderComponents pageComponent={poolRemodelingData.components} />
    </>
  );
}
