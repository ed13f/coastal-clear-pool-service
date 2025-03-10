import { HeroSingleColumnType } from '../../../components/HeroSection/HeroSingleColumn/HeroSingleColumn';
import { HeroTwoColumnImageType } from '../../../components/HeroSection/HeroTwoColumnImage/HeroTwoColumnImage';
import { FAQsSectionType } from '../../../components/FAQsSection/FAQsSection';

export const heroData: HeroTwoColumnImageType | HeroSingleColumnType = {
    settings:{
        topSpacing:"Medium",
        bottomSpacing:"Medium",
        heroType: "Two Column (Image)",
    },
    header:"Answers to Your Pool Maintenance & Repair Questions",
    description: "Get expert answers to common pool maintenance and repair questions, ensuring your pool stays clean, efficient, and in top condition year-round.",
    image:{
        url:"/images/Pool-Heater-After.png.webp",
        altText:"alt text"
    }
}

export const faqsSectionData : FAQsSectionType = {
    settings:{
        topSpacing:"Medium",
        bottomSpacing:"Medium",
        // backgroundColor:"Blue",
        contentAlignment:"Center",
    },
    header:"FAQs About Our Pool Services",
    description: "Learn how we keep your pool in top condition with expert care and professional solutions.",
    faqs:[
        {
            question:"What types of pool repairs do you offer?",
            answer:"We provide repairs for pumps, filters, heaters, salt systems, plumbing, leaks, lighting, automation controls, tile, coping, and resurfacing."
        },
        {
            question:"How do I know if my pool pump needs repair or replacement?",
            answer:"Signs include loud noises, reduced water flow, frequent cycling, or leaks. We inspect and recommend the best solution."
        },
        {
            question:"How often should I have my pool equipment serviced?",
            answer:"Routine maintenance is recommended every 3-6 months to ensure optimal performance and prevent costly repairs."
        },
        {
            question:"What are the signs of a pool leak?",
            answer:"Common signs include unexplained water loss, high water bills, soggy spots around the pool, or air bubbles in the pump."
        },
        {
            question:"Do you offer emergency pool repairs?",
            answer:"Yes, we provide emergency repair services for critical issues such as pump failures, major leaks, and equipment malfunctions."
        },
        {
            question:"Can you upgrade my pool to an energy-efficient system?",
            answer:"Absolutely! We offer energy-efficient pumps, heaters, LED lighting, and automation systems to reduce costs and enhance convenience."
        },
        {
            question:"How long does a typical pool repair take?",
            answer:"Minor repairs may take a few hours, while major repairs, like resurfacing or tile replacement, can take several days."
        },
        {
            question:"Do you offer warranties on pool repairs?",
            answer:"Yes, we provide warranties on most repairs and equipment installations. Specific warranty details depend on the service and product used."
        },
        {
            question:"Can you convert my chlorine pool to a saltwater system?",
            answer:"Yes, we specialize in converting chlorine pools to saltwater systems, offering a more natural and low-maintenance swimming experience."
        },
        {
            question:"How can I schedule a service appointment?",
            answer:"You can schedule an appointment by calling us, filling out our online form, or visiting our office. We offer flexible scheduling options."
        },
    ]
} 