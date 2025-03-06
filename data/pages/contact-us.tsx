import { HeroSingleColumnType } from '../../components/HeroSection/HeroSingleColumn/HeroSingleColumn';
import { HeroTwoColumnImageType } from '../../components/HeroSection/HeroTwoColumnImage/HeroTwoColumnImage';
import { TwoColumnImageSectionType } from '../../components/TwoColumnImageSection/TwoColumnImageSection';

export const heroData: HeroTwoColumnImageType | HeroSingleColumnType = {
    settings:{
        topSpacing:"Medium",
        bottomSpacing:"Medium",
        heroType: "Single Column",
    },
    header:"Contact Coatal Clear Pools Today ",
    description: "Get in touch with us for all your pool repair needs. Our team is ready to assist with fast, reliable service. Whether it's a repair, installation, or maintenance, contact us today for expert solutions and exceptional customer care.",
}

export const twoColumnImageSectionData : TwoColumnImageSectionType = {
    settings:{
        topSpacing:"Medium",
        bottomSpacing:"Medium",
        // backgroundColor:"Grey",
        contentAlignment:"Center",
    },
    header:"Check out some of our pool heater projects",
    description: "Providing professional pool heater services in Palm Beach County since 2020.",
    cta: {
        link:"/home",
        title:"Test CTA",
        openInNewWindow:false
    },
    images:[
        {
            url:"/images/hayward-brands.png",
            altText:"alt text"
        },
]
} 