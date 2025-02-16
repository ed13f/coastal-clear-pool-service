export type Footer = any;
export type Header = any;

export type CTA = {
  link: string;
  title: string;
  openInNewWindow?:boolean;
};

export type Image = {
  url:string;
  altText:string;
}

export type SettingsInput = {
  topSpacing?:string;
  bottomSpacing?:string;
  backgroundColor?:string;
  heroType?:string;
}