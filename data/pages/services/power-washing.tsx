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
    header:"Professional Power Washing Services",
    description: "Revitalize your home with our professional power washing services, removing dirt, grime, and mold for a cleaner, refreshed exterior.",
    // cta: {
    //     link:"/home",
    //     title:"Test CTA",
    //     openInNewWindow:false
    // },
    image:{
        url:"/images/Pool-Deck-Patio-Cleaning.jpg",
        altText:"alt text"
    }
}

export const fullWidthSectionData : FullWidthSectionType = {
    settings:{
        // topSpacing:"Small",
        // bottomSpacing:"Small",
        // backgroundColor:"",
        contentAlignment:"Center",
    },
    header:"Restore & Protect Your Pool Deck",
    description: "Regular deck cleaning is a crucial aspect of home maintenance. As an extension of your living space, your deck serves as a central gathering place during the summer months. To maintain its appearance and longevity, it requires the same level of care and attention as the interior of your home. Without proper upkeep, a wood deck can quickly appear significantly older than its actual age.",
    // cta: {
    //     link:"/home",
    //     title:"Test CTA",
    //     openInNewWindow:false
    // },
    // image:{
    //     url:"/images/hayward-brands.png",
    //     altText:"alt text"
    // }
} 

export const serviceTabsData: ServiceTabsSectionType = {
    settings:{
        topSpacing:"Medium",
        bottomSpacing:"Medium",
    },
    header:"View Our Complete Power Washing Services",
    description: "Discover our full range of professional power washing services, designed to enhance and protect your home’s exterior with expert care.",
    cards:[
        {
            tab:{
                image:{
                    url:"/images/pressure-washing-before-after.jpg",
                    altText:"alt text"
                },
                header:"Deck Power Washing",
                intro:""
            },
            card:{
                image:{
                    url:"/images/pressure-washing-before-after.jpg",
                    altText:"alt text"
                },
                header:"Professional Deck Cleaning & Power Washing",
                description: "Restore the beauty of your deck with our professional cleaning and power washing services. We remove dirt, grime, mold, and mildew, protecting your deck from damage while enhancing its appearance. Trust our experts to keep your outdoor space looking its best.",
                // cta: {
                //     link:"/test-2",
                //     title:"Test 2",
                //     openInNewWindow:false
                // },
            }
        },
        {
            tab:{
                image:{
                    url:"/images/residential-pressure-washing.jpg",
                    altText:"alt text"
                },
                header:"Residential Home Exterior Cleaning",
                intro:""
            },
            card:{
                image:{
                    url:"/images/residential-pressure-washing.jpg",
                    altText:"alt text"
                },
                header:"Comprehensive Exterior Cleaning for Homes",
                description: "Our comprehensive exterior cleaning services enhance the curb appeal of your home by removing dirt, stains, mold, and mildew. We use advanced techniques to clean all surfaces, ensuring your home’s exterior looks refreshed and well-maintained for years to come.",
            }
        },
        {
            tab:{
                image:{
                    url:"/images/Acid-washing-power-washing.png",
                    altText:"alt text"
                },
                header:"Acid Washing",
                intro:""
            },
            card:{
                image:{
                    url:"/images/Acid-washing-power-washing.png",
                    altText:"alt text"
                },
                header:"Expert Acid Washing for Pool Decks",
                description: "Our expert acid washing service restores the appearance of your pool deck by effectively removing stains, mineral deposits, and discoloration. Using specialized techniques, we ensure a clean, smooth surface, enhancing both the aesthetics and safety of your outdoor space.",
            }
        }
    ]
}

