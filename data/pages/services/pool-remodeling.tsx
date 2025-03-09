import { FullWidthSectionType } from '../../../components/FullWidthSection/FullWidthSection';
import { ServiceTabsSectionType } from '../../../components/ServiceTabsSection/ServiceTabsSection';
import { HeroTwoColumnImageType } from '../../../components/HeroSection/HeroTwoColumnImage/HeroTwoColumnImage';
import { LogoCarouselSectionType } from '../../../components/LogoCarouselSection/LogoCarouselSection';
import { TwoColumnImageSectionType } from '../../../components/TwoColumnImageSection/TwoColumnImageSection';



export const heroData: HeroTwoColumnImageType = {
    settings:{
        topSpacing:"Medium",
        bottomSpacing:"Medium",
        heroType: "Two Column (Image)",
    },
    header:"Expert Pool Renovation Services",
    description: "Revitalize your pool with our expert renovation services, enhancing its design, functionality, and value for a refreshing, modern experience.",
    // cta: {
    //     link:"/home",
    //     title:"Test CTA",
    //     openInNewWindow:false
    // },
    image:{
        url:"/images/pool-remodel-hero.jpg",
        altText:"alt text"
    }
}

export const fullWidthSectionData : FullWidthSectionType = {
    settings:{
        // topSpacing:"Small",
        // bottomSpacing:"Small",
        // backgroundColor:"Blue",
        contentAlignment:"Center",
    },
    header:"Transform Your Pool Today",
    description: "Revamp your pool with our professional renovation services. Whether you want to refresh the design, enhance functionality, or increase safety, we offer personalized solutions that meet your specific needs. Design the ultimate pool oasis that fits your home and lifestyle.",
} 

export const serviceTabsData: ServiceTabsSectionType = {
    settings:{
        topSpacing:"Medium",
        bottomSpacing:"Medium",
    },
    header:"View Our Pool Renovation Services",
    description: "Explore our pool renovation services to enhance your pool’s design, functionality, and safety, creating a perfect outdoor retreat.",
    cards:[
        {
            tab:{
                image:{
                    url:"/images/pool-resurfacing-image.jpg",
                    altText:"alt text"
                },
                header:"Pool Resurfacing",
                intro:""
            },
            card:{
                image:{
                    url:"/images/pool-resurfacing-image.jpg",
                    altText:"alt text"
                },
                header:"High-Quality Pool Resurfacing Services",
                description: "Our high-quality pool resurfacing services restore the beauty and durability of your pool. We use top-grade materials to repair cracks, smooth surfaces, and enhance the overall appearance, ensuring your pool remains attractive, functional, and safe for years to come.",
            }
        },
        {
            tab:{
                image:{
                    url:"/images/pool-aujtomation-service-image.jpg",
                    altText:"alt text"
                },
                header:"Automation Control System",
                intro:""
            },
            card:{
                image:{
                    url:"/images/pool-aujtomation-service-image.jpg",
                    altText:"alt text"
                },
                header:"Advanced Pool Automation Control Systems",
                description: "Our advanced pool automation control systems provide seamless management of your pool’s functions, including lighting, heating, cleaning, and filtration. Control everything effortlessly from your smartphone or tablet, enhancing convenience, energy efficiency, and overall enjoyment of your pool experience.",
            }
        },
        {
            tab:{
                image:{
                    url:"/images/new-tile-coping-mage.jpg",
                    altText:"alt text"
                },
                header:"New Tile and Coping",
                intro:""
            },
            card:{
                image:{
                    url:"/images/new-tile-coping-mage.jpg",
                    altText:"alt text"
                },
                header:"Premium Pool Tile and Coping Installation",
                description: "Our premium pool tile and coping installation services enhance the aesthetic appeal and durability of your pool. We offer a wide selection of high-quality tiles and coping materials, ensuring a customized look that complements your style while improving your pool's longevity.",
            }
        }
    ]
}