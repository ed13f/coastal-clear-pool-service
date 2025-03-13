import { poolHeaterData } from '../../../../data/pages/services/pool-heaters';
import { HeroSection } from '../../../../components/HeroSection';
import { RenderComponents } from '../../../../components/RenderComponents';

export default function PoolHeaters() {
  return (
    <>
      <HeroSection hero={poolHeaterData.hero} />
      <RenderComponents pageComponent={poolHeaterData.components} />
    </>
  );
}
