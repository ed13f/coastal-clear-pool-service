import React from 'react';

import { HeroTwoColumnImage } from './HeroTwoColumnImage';

function dispalyHeroOption(hero:any){
    switch(hero.settings.hero_type) {
        case 'Two Column (Image)':
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
}

export const HeroSection = ({ heroProps }: any) => {
    return dispalyHeroOption(heroProps);
}