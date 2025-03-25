import React from 'react';

import { HeroTwoColumnImage } from './HeroTwoColumnImage';
import { HeroSingleColumn } from './HeroSingleColumn';
import { CTA as CTAType, Image as ImageType, SettingsInput } from 'typescript/GlobalComponent';

export type HeroType = {
    hero:{
        settings: SettingsInput;
        header:string;
        description:string;
        cta?:CTAType;
        image?: {
            node:{
                sourceUrl:string;
                altText:string;
            }
        };
    }
}

 {/* Conditionally assign hero component based on hero type option */}
export const HeroSection = ({hero} : HeroType) => {
    console.log('hero: ', hero.image && hero.image.node);
    return (
        <>
            {hero.settings.heroType == "Two Column (Image)" && (
                <HeroTwoColumnImage 
                    settings={hero.settings} 
                    header={hero.header}
                    description={hero.description} 
                    cta={hero.cta} 
                    image={hero.image}
                /> 
            )}
            {hero.settings.heroType == "Single Column" && (
                <HeroSingleColumn
                    settings={hero.settings} 
                    header={hero.header}
                    description={hero.description} 
                    cta={hero.cta} 
                /> 
            )}
        </>
    )
}