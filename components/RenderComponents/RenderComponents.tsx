import React from 'react';

import { SettingsInput, CTA, Image} from 'typescript/GlobalComponent';
import { ServiceTabsSection } from 'components/ServiceTabsSection';
import { FullWidthSection } from 'components/FullWidthSection';
import { LogoCarouselSection } from 'components/LogoCarouselSection';
import { TwoColumnImageSection } from 'components/TwoColumnImageSection';
import { FAQsSection } from 'components/FAQsSection';

export type RenderComponentsType = {
    pageComponent:{
        componentType:'twoColumnImageSection' | "fullWidthSection" | "serviceTabsSection" | "logoCarouselSection" | "faqsSection";
        data:{
            settings:SettingsInput;
            header?:string;
            description?:string;
            cta?:CTA;
            image?:Image;
            images:Image[];
            cards:any;
            logos:any;
            faqs:{
                question:string;
                answer:string;
            }[]
        }
    }[]
}

// Used to consolidate the way components are added to the page dynamically based on he json
export function RenderComponents({pageComponent}: RenderComponentsType) {
  return (
    <>
        { pageComponent?.map((component, key: number) => {
            if (component.componentType == 'twoColumnImageSection') {
                return (
                    <TwoColumnImageSection
                        settings={component.data.settings}
                        header={component.data.header}
                        description={component.data.description}
                        cta={component.data.cta}
                        images={component.data.images}
                        key={`component-${key}`}
                    />
                );
            } else if(component.componentType == 'fullWidthSection'){
                return (
                    <FullWidthSection
                        settings={component.data.settings}
                        header={component.data.header}
                        description={component.data.description}
                        cta={component.data.cta}
                        image={component.data.image}
                        key={`component-${key}`}
                    />
                )
            } else if(component.componentType == 'serviceTabsSection'){
                return (
                    <ServiceTabsSection 
                        settings={component.data.settings}
                        header={component.data.header}
                        description={component.data.description}
                        cards={component.data.cards}
                        key={`component-${key}`}
                    />
                )
            } else if(component.componentType == 'logoCarouselSection'){
                return (
                    <LogoCarouselSection 
                        settings={component.data.settings}
                        header={component.data.header}
                        description={component.data.description}
                        logos={component.data.logos}
                        cta={component.data.cta}
                        key={`component-${key}`}
                    />
                )
            } else if(component.componentType == 'faqsSection'){
                return (
                    <FAQsSection
                        settings={component.data.settings}
                        header={component.data.header}
                        description={component.data.description}
                        faqs={component.data.faqs}
                        key={`component-${key}`}
                    /> 
                )
            }
        })}
    </>
  );
}