// 'use client';

import { poolEquipmentRepairData } from 'data/pages/services/pool-equipment-repair';
import { getServiceData, constructServiceTabsData } from 'helper'
import { HeroSection } from 'components/HeroSection';
import { RenderComponents } from 'components/RenderComponents';
    
export default async function Services({ params }:any) {
    const { slug } = params;
    const data = await getServiceData(slug);
    const heroData = data.data.service.hero;

    const components = [
        {
            componentType:"fullWidthSection",
            data:data.data.service.serviceContent.fullWidthSection
        },
        {
            componentType:"serviceTabsSection",
            data:constructServiceTabsData(data.data.service.serviceContent.serviceTabsSection)
        }
    ];
    console.log("components: ", components)
  return (
    <>
      <HeroSection hero={heroData} />
      <RenderComponents pageComponent={components} />
    </>
  );
}
