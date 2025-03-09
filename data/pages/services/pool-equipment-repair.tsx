import { FullWidthSectionType } from '../../../components/FullWidthSection/FullWidthSection';
import { ServiceTabsSectionType } from '../../../components/ServiceTabsSection/ServiceTabsSection';
import { HeroTwoColumnImageType } from '../../../components/HeroSection/HeroTwoColumnImage/HeroTwoColumnImage';



export const heroData: HeroTwoColumnImageType = {
    settings:{
        topSpacing:"Medium",
        bottomSpacing:"Medium",
        heroType: "Two Column (Image)",
    },
    header:"Professional Pool Equipment Repair Services",
    description: "Ensure your pool operates flawlessly with our expert equipment repair services, fixing pumps, filters, heaters, and more for optimal performance.",

    image:{
        url:"/images/pool-equipment-repair-hero.jpeg",
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
    header:"Keep Your Pool Equipment Running Smoothly",
    description: "Ensure optimal performance and longevity of your pool equipment with our expert repair services. We specialize in diagnosing and resolving issues with pumps, filters, and more, keeping your pool system running efficiently and reliably.",
} 

export const serviceTabsData: ServiceTabsSectionType = {
    settings:{
        topSpacing:"Medium",
        bottomSpacing:"Medium",
    },
    header:"View Our Pool Equipment Repair Services",
    description: "Explore our expert pool equipment repair services, ensuring your pumps, filters, lighting function efficiently for a well-maintained swimming experience.",
    cards:[
        {
            tab:{
                image:{
                    url:"/images/pool-pump-repair-image.jpg",
                    altText:"alt text"
                },
                header:"Pool Pumps",
                intro:""
            },
            card:{
                image:{
                    url:"/images/pool-pump-repair-image.jpg",
                    altText:"alt text"
                },
                header:"Reliable Pool Pump Services",
                description: "Our reliable pool pump services ensure optimal performance and efficiency. From repairs and maintenance to new installations, we keep your pump running smoothly, improving water circulation and filtration for a cleaner, healthier, and more enjoyable swimming experience.",
            }
        },
        {
            tab:{
                image:{
                    url:"/images/pool-filter-repair-image.jpg",
                    altText:"alt text"
                },
                header:"Pool Filters",
                intro:""
            },
            card:{
                image:{
                    url:"/images/pool-filter-repair-image.jpg",
                    altText:"alt text"
                },
                header:"Professional Pool Filter Maintenance & Repair",
                description: "Our professional pool filter maintenance and repair services ensure clean, clear water by removing debris and contaminants. We specialize in inspecting, cleaning, and repairing all types of pool filters, improving efficiency and extending the lifespan of your filtration system.",
            }
        },
        {
            tab:{
                image:{
                    url:"/images/swimming-pool-lights-repair-2.jpg",
                    altText:"alt text"
                },
                header:"Pool Lighting ",
                intro:""
            },
            card:{
                image:{
                    url:"/images/swimming-pool-lights-repair-2.jpg",
                    altText:"alt text"
                },
                header:"Enhance Your Pool with Expert Lighting Services",
                description: "Transform your pool area with our expert lighting services. We design and install custom lighting solutions that highlight your pool's beauty, create a relaxing ambiance, and improve safety, allowing you to enjoy your outdoor space day and night.",
            }
        },
        {
            tab:{
                image:{
                    url:"/images/salt-water-pool-system-repair.jpg",
                    altText:"alt text"
                },
                header:"Salt Cell Systems",
                intro:""
            },
            card:{
                image:{
                    url:"/images/salt-water-pool-system-repair.jpg",
                    altText:"alt text"
                },
                header:"Pool Salt Cell System Installation & Maintenance",
                description: "Our pool salt system installation and maintenance services provide a more eco-friendly and low-maintenance alternative to traditional chlorine. We ensure optimal performance, enhancing water quality while reducing chemical use, and offer regular maintenance for long-lasting results.",
            }
        }
    ]
}

