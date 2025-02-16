export type Footer = any;
export type Header = any;

export type CTA = {
  link: string;
  title: string;
  open_in_new_window?:boolean;
};

export type Image = {
  url:string;
  alt_text:string;
}

export type SettingsInput = {
  top_spacing?:string;
  bottom_spacing?:string;
  background_color?:string;
}