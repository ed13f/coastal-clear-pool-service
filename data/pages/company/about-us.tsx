import { FullWidthSectionType } from '../../../components/FullWidthSection/FullWidthSection';
import { ServiceTabsSectionType } from '../../../components/ServiceTabsSection/ServiceTabsSection';
import { HeroTwoColumnImageType } from '../../../components/HeroSection/HeroTwoColumnImage/HeroTwoColumnImage';
import { HeroSingleColumnType } from '../../../components/HeroSection/HeroSingleColumn/HeroSingleColumn';
import { LogoCarouselSectionType } from '../../../components/LogoCarouselSection/LogoCarouselSection';
import { TwoColumnImageSectionType } from '../../../components/TwoColumnImageSection/TwoColumnImageSection';



export const heroData: HeroTwoColumnImageType | HeroSingleColumnType = {
    settings:{
        topSpacing:"Medium",
        bottomSpacing:"Medium",
        heroType: "Two Column (Image)",
    },
    header:"Get To Konw  Us",
    description: "At Coastal Clear Pool Ca, we are dedicated to providing top-quality pool repair and maintenance services. With expert technicians and a commitment to excellence, we ensure your pool remains safe, efficient, and enjoyable year-round.",
    // cta: {
    //     link:"/contact-us",
    //     title:"Contact Us",
    //     openInNewWindow:false
    // },
    image:{
        url:"/images/Pool-Heater-After.png.webp",
        altText:"alt text"
    }
}

export const fullWidthSectionData : FullWidthSectionType = {
    settings:{
        // topSpacing:"Small",
        // bottomSpacing:"Small",
        backgroundColor:"Grey",
        contentAlignment:"Center",
        maxWidth:"Medium"
    },
    header:"Trusted Pool Repairs Since 2020",
    description: "Since 2020, Coastal Clean Pools has been committed to excellence, providing top-quality pool repair and maintenance services with reliability, professionalism, and expert care to keep your pool pristine and running smoothly year-round.",
    cta: {
        link:"/contact-us",
        title:"Contact us Today",
        openInNewWindow:false
    },
    // image:{
    //     url:"/images/hayward-brands.png",
    //     altText:"alt text"
    // }
} 

export const twoColumnImageSectionData : TwoColumnImageSectionType = {
    settings:{
        topSpacing:"Medium",
        bottomSpacing:"Medium",
        // backgroundColor:"Grey",
        contentAlignment:"Center",
        reverseColumns:true
    },
    header:"Explore Our Most Proudly Completed Projects",
    description: "Discover a selection of our most notable projects, showcasing our commitment to quality, attention to detail, and expertise in pool repair and maintenance. Each project reflects our dedication to customer satisfaction and excellence.",
    // cta: {
    //     link:"/home",
    //     title:"Test CTA",
    //     openInNewWindow:false
    // },
    images:[
        {
            url:"/images/hayward-brands.png",
            altText:"alt text"
        },
        {
            url:"/images/jandy-brands.png",
            altText:"alt text2"
        },
]
} 