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
    header:"Service Hours of Operation",
    description: `
        <p>Coastal Clear Pool Repair operates Monday through Friday from 9:00 AM to 5:00 PM. Call for a free estimate today!<p>
        <ul>
        <li>Phone: <a href"tel:15613333333"=>(561)-333-3333</a></li>
        <li>Email: <a href"mailto:service@coastalclearpoolrepair.com"=>service@coastalclearpoolrepair.com</a></li>
        <li>Emergency service available after hours</li>
        </ul>
    
    `,
    // cta: {
    //     link:"/home",
    //     title:"Test CTA",
    //     openInNewWindow:false
    // },
    images:[
        {
            url:"/images/pool-contact-us-page.jpg",
            altText:"alt text"
        },
]
} 