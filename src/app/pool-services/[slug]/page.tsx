// 'use client';

import { poolEquipmentRepairData } from 'data/pages/services/pool-equipment-repair';
import { getServiceData } from 'helper'
import { HeroSection } from 'components/HeroSection';
import { RenderComponents } from 'components/RenderComponents';
    
export default async function Services({ params }:any) {
    const { slug } = params;
    const data = await getServiceData(slug);
    console.log('data: ', data.data.service.serviceContent);
    const heroData = data.data.service.hero;
    const serviceContentData = data.data.service.hero;
  return (
    <>
      <HeroSection hero={heroData} />
      <RenderComponents pageComponent={poolEquipmentRepairData.components} />
    </>
  );
}
