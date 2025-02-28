import { FullWidthSectionType } from '../../components/FullWidthSection/FullWidthSection';
import { ServiceTabsSectionType } from '../../components/ServiceTabsSection/ServiceTabsSection';
import { HeroTwoColumnImageType } from '../../components/HeroSection/HeroTwoColumnImage/HeroTwoColumnImage';
import { LogoCarouselSectionType } from '../../components/LogoCarouselSection/LogoCarouselSection';
import { TwoColumnImageSectionType } from '../../components/TwoColumnImageSection/TwoColumnImageSection';
import { FAQsSectionType } from '../../components/FAQsSection/FAQsSection';



export const heroData: HeroTwoColumnImageType = {
    settings:{
        topSpacing:"Medium",
        bottomSpacing:"Medium",
        heroType: "Two Column (Image)",
    },
    header:"this is a header. this is a header. ",
    description: "This is a description. This is a description. This is a description. This is a description. This is a description. This is a description.",
    cta: {
        link:"/home",
        title:"Test CTA",
        openInNewWindow:false
    },
    image:{
        url:"/images/hayward-brands.png",
        altText:"alt text"
    }
}

export const serviceTabsData: ServiceTabsSectionType = {
    settings:{
        topSpacing:"Medium",
        bottomSpacing:"Medium",
    },
    header:"this is a header. this is a header.",
    description: "This is a description. This is a description. This is a description. This is a description. This is a description. This is a description.",
    cards:[
        {
            tab:{
                image:{
                    url:"/images/hayward-brands.png",
                    altText:"alt text"
                },
                header:"this is a sub header",
                intro:"This is an intro"
            },
            card:{
                image:{
                    url:"/images/hayward-brands.png",
                    altText:"alt text"
                },
                header:"this is a sub header",
                description: "This is a description. This is a description. This is a description. This is a description. This is a description. This is a description.",
                cta: {
                    link:"/test-2",
                    title:"Test 2",
                    openInNewWindow:false
                },
            }
        },
        {
            tab:{
                image:{
                    url:"/images/hayward-brands.png",
                    altText:"alt text"
                },
                header:"2this is a sub header",
                intro:"2This is an intro"
            },
            card:{
                image:{
                    url:"/images/hayward-brands.png",
                    altText:"alt text"
                },
                header:"2 this is a sub header",
                description: "2 This is a description. This is a description. This is a description. This is a description. This is a description. This is a description.",
                cta: {
                    link:"/test-2",
                    title:"Test 2",
                    openInNewWindow:false
                },
            }
        },
        {
            tab:{
                image:{
                    url:"/images/hayward-brands.png",
                    altText:"alt text"
                },
                header:"3this is a sub header",
                intro:"3This is an intro"
            },
            card:{
                image:{
                    url:"/images/hayward-brands.png",
                    altText:"alt text"
                },
                header:"3 this is a sub header",
                description: "3 This is a description. This is a description. This is a description. This is a description. This is a description. This is a description.",
                cta: {
                    link:"/test-3",
                    title:"Test 3",
                    openInNewWindow:false
                },
            }
        },
        {
            tab:{
                image:{
                    url:"/images/hayward-brands.png",
                    altText:"alt text"
                },
                header:"4this is a sub header",
                intro:"4This is an intro"
            },
            card:{
                image:{
                    url:"/images/hayward-brands.png",
                    altText:"alt text"
                },
                header:"4 this is a sub header",
                description: "4 This is a description. This is a description. This is a description. This is a description. This is a description. This is a description.",
                cta: {
                    link:"/test-4",
                    title:"Test 4",
                    openInNewWindow:false
                },
            }
        }
    ]
}

export const fullWidthSectionData : FullWidthSectionType = {
    settings:{
        // topSpacing:"Small",
        // bottomSpacing:"Small",
        backgroundColor:"Blue",
        contentAlignment:"Center",
    },
    header:"this is a header. this is a header. ",
    description: "This is a description. This is a description. This is a description. This is a description. This is a description. This is a description.",
    cta: {
        link:"/home",
        title:"Test CTA",
        openInNewWindow:false
    },
    image:{
        url:"/images/hayward-brands.png",
        altText:"alt text"
    }
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
    header:"this is a header. this is a header. ",
    description: "This is a description. This is a description. This is a description. This is a description. This is a description. This is a description.",
    cta: {
        link:"/home",
        title:"Test CTA",
        openInNewWindow:false
    },
    logos:[
        {
            url:"/images/hayward-brands.png",
            altText:"alt text1"
        },
        {
            url:"/images/hayward-brands.png",
            altText:"alt text2"
        },
        {
            url:"/images/hayward-brands.png",
            altText:"alt text3"
        },
        {
            url:"/images/hayward-brands.png",
            altText:"alt text4"
        },
        {
            url:"/images/hayward-brands.png",
            altText:"alt text5"
        },
        {
            url:"/images/hayward-brands.png",
            altText:"alt text6"
        },
        {
            url:"/images/hayward-brands.png",
            altText:"alt text7"
        },
        {
            url:"/images/hayward-brands.png",
            altText:"alt text8"
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
    header:"this is a header. this is a header. ",
    description: "This is a description. This is a description. This is a description. This is a description. This is a description. This is a description.",
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
        {
            url:"/images/jandy-brands.png",
            altText:"alt text2"
        },
    ]
} 

export const faqsSectionData : FAQsSectionType = {
    settings:{
        topSpacing:"Medium",
        bottomSpacing:"Medium",
        // backgroundColor:"Blue",
        contentAlignment:"Center",
    },
    header:"this is a header. this is a header. ",
    description: "This is a description. This is a description. This is a description. This is a description. This is a description. This is a description.",
    faqs:[
        {
            question:"This is a question? This is a question? This is a question? This is a question?",
            answer:"This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer."
        },
        {
            question:"1This is a question? This is a question? This is a question? This is a question?",
            answer:"1This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer."
        },
        {
            question:"2This is a question? This is a question? This is a question? This is a question?",
            answer:"2This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer."
        },
        {
            question:"3This is a question? This is a question? This is a question? This is a question?",
            answer:"3This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer."
        },
        {
            question:"4This is a question? This is a question? This is a question? This is a question?",
            answer:"4This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer."
        },
        {
            question:"5This is a question? This is a question? This is a question? This is a question?",
            answer:"5This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer."
        },
        {
            question:"6This is a question? This is a question? This is a question? This is a question?",
            answer:"6This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer."
        },
        {
            question:"7This is a question? This is a question? This is a question? This is a question?",
            answer:"7This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer. This is an answer."
        },

    ]
} 
