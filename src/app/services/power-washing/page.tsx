import { powerWashingData } from '../../../../data/pages/services/power-washing';
import { HeroSection } from '../../../../components/HeroSection';
import { RenderComponents } from '../../../../components/RenderComponents';

export default function Home() {
  return (
    <>
      <HeroSection hero={powerWashingData.hero} />
      <RenderComponents pageComponent={powerWashingData.components} />
    </>
  );
}
