export type FooterTest = {
    disclaimer: string;
    show: boolean;
    logo?: {
        file:string;
        alt_text:string;
    }
    logo_image:Image;
    logo_images:[Image];
    services: 'test' | 'test2';
}
export type Footer = any;
export type Header = any;
export type HeroTwoColumn = any;
export type TwoColumnImageWithTabs = any;
export type IconCarouselSection = any;
export type FullWidthBannerSection = any;
export type TwoColumnImageWithTextSection = any;
export type InteractiveImageCarousel = any;






export type Image = {
    file:string;
        alt_text:string;
}