import React from 'react';

import { HeroTwoColumnImage } from './HeroTwoColumnImage';
import { CTA as CTAType, Image as ImageType, SettingsInput } from '../../typescript/GlobalComponent';

type HeroType = {
    hero:{
        settings: SettingsInput;
        header:string;
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
            header={hero.header}
            description={hero.description} 
            cta={hero.cta} 
            image={hero.image}
        /> 
    )
}