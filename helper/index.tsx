
import getConfig from "next/config";

// import { Styles } from '../typescript/component';


/* Global BGColor option that adds background color class to the root element in the Component */
export const modifyComponentClassBGColor = (originalString:string, setting:string) => {
  switch(setting) {
    case 'Grey':
      originalString += ' bg bgGrey'; break;
    case 'Green':
      originalString += ' bg bgGreen'; break;
    case 'Blue':
      originalString += ' bg bgBlue'; break;
    case 'Purple':
      originalString += ' bg bgPurple'; break;
  }
  return originalString;
};

/* Global TopSpace option that adds top space class to the root element in the Component */
export const modifyComponentClassTopSpace = (originalString:string, setting:string) => {
  switch(setting) {
    case 'Remove':
      originalString += ' removeGapTop'; break;
      case 'Extra Small':
        originalString += ' gapTopXs'; break;
    case 'Small':
      originalString += ' gapTopSm'; break;
    case 'Large':
      originalString += ' gapTopLg'; break;
    case 'Extra Large':
      originalString += ' gapTopXl'; break;
  }
  return originalString;
};

/* Global BottomSpace option that adds bottom space class to the root element in the Component */
export const modifyComponentClassBottomSpace = (originalString:string, setting:string) => {
  switch(setting) {
    case 'Remove':
      originalString += ' removeGapBottom'; break;
    case 'Extra Small':
        originalString += ' gapBottomXs'; break;
    case 'Small':
      originalString += ' gapBottomSm'; break;
    case 'Large':
      originalString += ' gapBottomLg'; break;
    case 'Extra Large':
      originalString += ' gapBottomXl'; break;
  }
  return originalString;
};

/* Global Reverse option that adds reverse class to the root element in the Component */
export const modifyComponentClassReverse = (originalString:string, setting:string) => {
  if(setting){originalString += ' reverse';}
  return originalString;
};

/* Global AlignContent option that adds align content class to the root element in the Component */
export const modifyComponentClassAlignContent = (originalString:string, setting:string) => {
  switch(setting) {
    case 'Left':
      originalString += ' alignLeft'; break;
    case 'Center':
      originalString += ' alignCenter'; break;
    case 'Right':
      originalString += ' alignRight'; break;
  }
  return originalString;
};

/* Global MaxWidth option that adds max width class to the root element in the Component */
export const modifyComponentClassMaxWidth = (originalString:string, setting:string) => {
  switch(setting) {
    case 'Extra Small':
      originalString += ' containerWidthXs'; break;
    case 'Small':
      originalString += ' containerWidthSm'; break;
    case 'Medium':
      originalString += ' containerWidthMd'; break;
    case 'Large':
      originalString += ' containerWidthLg'; break;
    case 'Extra Large':
      originalString += ' containerWidthXl'; break;
  }
  return originalString;
};


// /*Format final Date */
export const formatDate = (dateString:string) => {
  try {
  let splitDate = dateString.split('-');
  let finalDate = `${splitDate[1]}-${splitDate[2]}-${splitDate[0]}`;
  const date = new Date(finalDate);
  if (isNaN(date.valueOf())) {
    throw new Error('Invalid date');
  }
  return date.toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
  });
  } catch (error) {
    return dateString; // or return a default value or error message
  }
};