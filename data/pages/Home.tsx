import { FullWidthSectionType } from '../../components/FullWidthSection/FullWidthSection';
import { ServiceTabsSectionType } from '../../components/ServiceTabsSection/ServiceTabsSection';
import { HeroTwoColumnImageType } from '../../components/HeroSection/HeroTwoColumnImage/HeroTwoColumnImage';
import { HeroSingleColumnType } from '../../components/HeroSection/HeroSingleColumn/HeroSingleColumn';
import { LogoCarouselSectionType } from '../../components/LogoCarouselSection/LogoCarouselSection';
import { TwoColumnImageSectionType } from '../../components/TwoColumnImageSection/TwoColumnImageSection';
import { FAQsSectionType } from '../../components/FAQsSection/FAQsSection';



export const heroData: HeroTwoColumnImageType | HeroSingleColumnType = {
    settings:{
        topSpacing:"Medium",
        bottomSpacing:"Medium",
        heroType: "Two Column (Image)",
    },
    header:"Coastal Clear Pool Repair Service",
    description: "Reliable pool repairs in Palm Beach County! We fix heaters, pumps, filters, and more—fast, affordable, and professional service guaranteed.",
    cta: {
        link:"/contact-us",
        title:"Contact Us Today",
        openInNewWindow:false
    },
    image:{
        url:"/images/swimming-pool-hero.jpeg",
        altText:"Residential Swimming Pool"
    }
}

export const fullWidthSectionData : FullWidthSectionType = {
    settings:{
        topSpacing:"Remove",
        bottomSpacing:"Small",
        // backgroundColor:"Blue",
        contentAlignment:"Center",
    },
    header:"Family-owned and operated since 2020.",
    description: "We are a proud family-owned business serving Palm Beach County with dedication and expertise. Committed to quality service and customer satisfaction, we treat every project with care, ensuring reliable solutions and a personal touch for our community.",
    cta: {
        link:"/home",
        title:"Learn more about us",
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
        bottomSpacing:"Large",
    },
    header:"Explore the range of services we provide.",
    description: "Expert pool repair services to keep your pool in top condition. We provide reliable, professional solutions for all your pool needs in Palm Beach.",
    cards:[
        {
            tab:{
                image:{
                    url:"/images/pool-remodeling.png",
                    altText:"Pool Remodeling Thumbnail"
                },
                header:"Pool Renovations",
                intro:""
            },
            card:{
                image:{
                    url:"/images/pool-remodeling.png",
                    altText:"Pool Remodeling Card Thumbnail"
                },
                header:"Make your pool look brand-new again",
                description: "Transform your pool with expert renovations! From resurfacing and new tile to upgraded decking and lighting, we restore beauty and functionality. Enjoy a modern, refreshed pool with our professional Palm Beach County services!",
                cta: {
                    link:"/services/pool-renovations",
                    title:"View All Pool Renovations",
                    openInNewWindow:false
                },
            }
        },
        {
            tab:{
                image:{
                    url:"/images/pool-equipment-image.jpg",
                    altText:"Pool Equipment Thumbnail"
                },
                header:"Pool Equipment Repairs",
                intro:""
            },
            card:{
                image:{
                    url:"/images/pool-equipment-image.jpg",
                    altText:"Pool Equipment Card Thumbnail"
                },
                header:"Uninterrupted pool days with dependable equipment repairs.",
                description: "Keep your pool running smoothly with expert equipment repairs! We fix pumps, filters, heaters, and more to ensure optimal performance. Reliable service to keep your pool clean and efficient!",
                cta: {
                    link:"/test-2",
                    title:"View All Equipment Repairs",
                    openInNewWindow:false
                },
            }
        },
        {
            tab:{
                image:{
                    url:"/images/Pool-Heater-After.png.webp",
                    altText:"Pool Heater Thumbnail"
                },
                header:"Pool Heaters",
                intro:""
            },
            card:{
                image:{
                    url:"/images/Pool-Heater-After.png.webp",
                    altText:"Pool Equipment Card Thumbnail"
                },
                header:"Reliable Pool Heater Services for Year-Round Comfort",
                description: "Stay comfortable year-round with our expert pool heater services. We offer installation, repairs, and maintenance to ensure efficient heating, so you can enjoy your pool in any season.",
                cta: {
                    link:"/test-3",
                    title:"View Pool Heater services",
                    openInNewWindow:false
                },
            }
        },
        {
            tab:{
                image:{
                    url:"/images/power-washing-image.jpg",
                    altText:"Pool Power Washing Thumbnail"
                },
                header:"Power Washing",
                intro:""
            },
            card:{
                image:{
                    url:"/images/power-washing-image.jpg",
                    altText:"Pool Power Washing Card Thumbnail"
                },
                header:"Restore & Refresh with Expert Power Washing",
                description: "Revitalize your surfaces with our professional power washing services. We remove dirt, grime, and stains from driveways, patios, and pool decks, restoring their original beauty with safe and effective cleaning techniques.",
                cta: {
                    link:"/test-4",
                    title:"View Power washing service",
                    openInNewWindow:false
                },
            }
        }
    ]
}

export const logoCarouselSectionData : LogoCarouselSectionType = {
    settings:{
        
        topSpacing:"Medium",
        bottomSpacing:"Medium",
        contentAlignment:"Center",
        fullWidthContainer:true,
        displayBackgroundSquare:true,
        maxWidth:'Medium'
    },
    header:"Trusted Brands We Service and Maintain",
    description: "Explore the trusted brands we service, showcasing our expertise and commitment to quality. We proudly maintain and repair top-tier pool equipment, ensuring reliable performance and customer satisfaction for every project we undertake.",
    cta: {
        link:"/home",
        title:"Check out our services",
        openInNewWindow:false
    },
    logos:[
        {
            url:"/images/partner-logos/hayward-brands.png",
            altText:"Hayward Logo"
        },
        {
            url:"/images/partner-logos/jandy-brands.png",
            altText:"Jandy Logo"
        },
        {
            url:"/images/partner-logos/pentair-brands.png",
            altText:"Pentair Logo"
        },
        {
            url:"/images/partner-logos/polaris-brands.png",
            altText:"Polaris Logo"
        },
        {
            url:"/images/partner-logos/raypack-brand.png",
            altText:"Raypack Logo"
        },
        {
            url:"/images/partner-logos/zodiac-brands.png",
            altText:"Zodiac Logo"
        },
        {
            url:"/images/partner-logos/intex-1.webp",
            altText:"Intex Logo"
        },
        {
            url:"/images/partner-logos/coast.webp",
            altText:"Coast Logo"
        },
    ]
} 

export const twoColumnImageSectionData : TwoColumnImageSectionType = {
    settings:{
        topSpacing:"Medium",
        bottomSpacing:"Medium",
        backgroundColor:"Grey",
        contentAlignment:"Center",
    },
    header:"Take a Look at Our Work",
    description: "Browse our showcased projects, highlighting our expertise in pool repairs, renovations, and equipment services. Questioning if we are the right people to help? Check out Frequently asked questions by our customers.",
    cta: {
        link:"/home",
        title:"Check out FAQs",
        openInNewWindow:false
    },
    images:[
        {
            url:"/images/swiming-pool-image.jpeg",
            altText:"Swimming Pool Image 1"
        },
        {
            url:"/images/swimming-pool-image-2.webp",
            altText:"Swimming Pool Image 2"
        },
        {
            url:"/images/swimming-pool-image-3.webp",
            altText:"Swimming Pool Image 3"
        },
    ]
} 

// export const faqsSectionData : FAQsSectionType = {
//     settings:{
//         topSpacing:"Medium",
//         bottomSpacing:"Medium",
//         // backgroundColor:"Blue",
//         contentAlignment:"Center",
//     },
//     header:"this is a header. this is a header. ",
//     description: "This is a description. This is a description. This is a description. This is a description. This is a description. This is a description.",
//     faqs:[
//         {
//             question:"This is a question? This is a question? This is a question? This is a question?",
//             answer:"This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer."
//         },
//         {
//             question:"1This is a question? This is a question? This is a question? This is a question?",
//             answer:"1This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer."
//         },
//         {
//             question:"2This is a question? This is a question? This is a question? This is a question?",
//             answer:"2This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer."
//         },
//         {
//             question:"3This is a question? This is a question? This is a question? This is a question?",
//             answer:"3This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer."
//         },
//         {
//             question:"4This is a question? This is a question? This is a question? This is a question?",
//             answer:"4This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer."
//         },
//         {
//             question:"5This is a question? This is a question? This is a question? This is a question?",
//             answer:"5This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer."
//         },
//         {
//             question:"6This is a question? This is a question? This is a question? This is a question?",
//             answer:"6This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer."
//         },
//         {
//             question:"7This is a question? This is a question? This is a question? This is a question?",
//             answer:"7This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer."
//         },

//     ]
// } 
