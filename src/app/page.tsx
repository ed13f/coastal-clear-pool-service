import React  from 'react';

import { homeData } from '../../data/pages/home';
import { HeroSection } from '../../components/HeroSection';

import { RenderComponents } from '../../components/RenderComponents';

export default function Home() {
  return (
    <>
      <HeroSection hero={homeData.hero} />
      <RenderComponents pageComponent={homeData.components} />
    </>
  );
}
