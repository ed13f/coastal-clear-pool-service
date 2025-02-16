import React from 'react';

import { HeroTwoColumnImage } from './HeroTwoColumnImage';
import { CTA as CTAType, Image as ImageType, SettingsInput } from '../../typescript/GlobalComponent';

type HeroType = {
    hero:{
        settings: SettingsInput;
        preheader:string;
        header:string;
        subheader:string;
        description:string;
        cta:CTAType;
        image: ImageType;
    }
    
}



export const HeroSection = ({hero} : HeroType) => {
    console.log("hero: ", hero);
    return (
        <HeroTwoColumnImage 
            settings={hero.settings} 
            preheader={hero.preheader}
            header={hero.header} 
            subheader={hero.subheader} 
            description={hero.description} 
            cta={hero.cta} 
            image={hero.image}
        /> 
    )
}