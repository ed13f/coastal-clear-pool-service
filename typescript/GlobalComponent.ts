export type CTA = {
  link: string;
  title: string;
  openInNewWindow?:boolean;
};

export type Image = {
  node:{
      sourceUrl:string;
      altText:string;
  }
};

export type SettingsInput = {
  topSpacing?: ['Remove'] | ['Small'] | ['Medium'] | ['Large'] | undefined;
  bottomSpacing?: ['Remove'] | ['Small'] | ['Medium'] | ['Large'] | undefined;
  backgroundColor?: ['Grey'] | ['Blue'] | undefined;
  heroType?: 'Two Column (Image)' | 'Single Column';
  contentAlignment?: 'Left' | 'Center' | 'Right' | undefined;
  maxWidth?: 'Small' | 'Medium' | 'Large' | undefined;
  fullWidthContainer?:boolean;
  displayBackgroundSquare?:boolean;
  reverseColumns?:boolean;
}
export type Styles = {
  fullWidthContainer?:string;
  displayBackgroundSquare?:string;
}