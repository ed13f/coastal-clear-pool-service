import { poolEquipmentRepairData } from '../../../../data/pages/services/pool-equipment-repair';
import { HeroSection } from '../../../../components/HeroSection';
import { RenderComponents } from '../../../../components/RenderComponents';

export default function PoolEquipmentRepairs() {
  return (
    <>
      <HeroSection hero={poolEquipmentRepairData.hero} />
      <RenderComponents pageComponent={poolEquipmentRepairData.components} />
    </>
  );
}
