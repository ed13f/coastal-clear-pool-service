export type Footer = any;
export type Header = any;

export type CTA = {
  link: string;
  title: string;
  openInNewWindow?:boolean;
};

export type Image = {
  url: string;
  altText: string;
}

export type SettingsInput = {
  topSpacing?: 'Remove' | 'Small' | 'Medium' | 'Large' | undefined;
  bottomSpacing?: 'Remove' | 'Small' | 'Medium' | 'Large' | undefined;
  backgroundColor?: 'Grey' | 'Blue' | undefined;
  heroType?:string;
  contentAlignment?: 'Left' | 'Center' | 'Right' | undefined;
  maxWidth?: 'Small' | 'Medium' | 'Large' | undefined;
}