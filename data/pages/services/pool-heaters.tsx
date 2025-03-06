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
    header:"Pool Heaters ",
    description: "Keep your pool warm and comfortable year-round with professional pool heater services. <br><br>From installation to repairs and maintenance, we ensure efficient heating solutions for optimal swimming conditions in any season.",
    // cta: {
    //     link:"/home",
    //     title:"Test CTA",
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
    header:"Experience the convenience of a heated pool anytime you desire.",
    description: "Coastal Clear Pools is dedicated to ensuring customers enjoy their pools year-round, no matter where they live. Contact us today for professional pool heater installation or maintenance services.",
    cta: {
        link:"/contact-us",
        title:"Contact us for Pool Heater Services",
        openInNewWindow:false
    },
    // image:{
    //     url:"/images/hayward-brands.png",
    //     altText:"alt text"
    // }
} 

export const serviceTabsData: ServiceTabsSectionType = {
    settings:{
        topSpacing:"Medium",
        bottomSpacing:"Medium",
        backgroundColor:"Grey"
    },
    header:"Explore Our Pool Heater Services",
    description: "Providing professional pool heater services in Palm Beach County since 2020.",
    cards:[
        {
            tab:{
                image:{
                    url:"/images/pool-heaters-installation-1.jpg",
                    altText:"alt text"
                },
                header:"New Heater installation",
                intro:""
            },
            card:{
                image:{
                    url:"/images/pool-heaters-installation-1.jpg",
                    altText:"alt text"
                },
                header:"Enjoy a new Pool Heater",
                description: "Our professional pool heater installation service ensures your pool stays at the perfect temperature year-round. With expert installation, energy-efficient solutions, and reliable performance, we guarantee optimal heating for your swimming enjoyment. Contact us for a hassle-free, efficient installation.",
            }
        },
        {
            tab:{
                image:{
                    url:"/images/pool-heater-installation-2.webp",
                    altText:"alt text"
                },
                header:"Used Heater installation",
                intro:""
            },
            card:{
                image:{
                    url:"/images/pool-heater-installation-2.webp",
                    altText:"alt text"
                },
                header:"Some you budge with a used pool heater",
                description: "Discover affordable, high-quality used pool heater installation. Our budget-friendly solutions provide efficient heating without compromising performance. With expert installation and reliable service, you can enjoy a comfortable pool experience year-round, all while staying within your budget.",
            }
        },
        {
            tab:{
                image:{
                    url:"/images/Pool-Heater-Repair-3.jpg",
                    altText:"alt text"
                },
                header:"Current Heater Maintnance",
                intro:""
            },
            card:{
                image:{
                    url:"/images/Pool-Heater-Repair-3.jpg",
                    altText:"alt text"
                },
                header:"Keep your pool heater at peak perfrmance",
                description: "Keep your pool heater running efficiently with our expert maintenance service. We provide thorough inspections, cleaning, and tune-ups to ensure optimal performance and extend the lifespan of your heater. Trust us to maintain your system for year-round comfort and reliability.",
            }
        }
    ]
}



// export const twoColumnImageSectionData : TwoColumnImageSectionType = {
//     settings:{
//         topSpacing:"Medium",
//         bottomSpacing:"Medium",
//         // backgroundColor:"Grey",
//         contentAlignment:"Center",
//     },
//     header:"Check out some of our pool heater projects",
//     description: "Providing professional pool heater services in Palm Beach County since 2020.",
//     cta: {
//         link:"/home",
//         title:"Test CTA",
//         openInNewWindow:false
//     },
//     images:[
//         {
//             url:"/images/hayward-brands.png",
//             altText:"alt text"
//         },
//         {
//             url:"/images/jandy-brands.png",
//             altText:"alt text2"
//         },
// ]
// } 