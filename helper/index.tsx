/* Global BGColor option that adds background color class to the root element in the Component */
export const modifyComponentClassBGColor = (originalString: string, setting: "Grey" | "Blue" | undefined ) => {
  switch(setting) {
    case 'Grey':
      originalString += ' bg bgGrey'; break;
    case 'Blue':
      originalString += ' bg bgBlue'; break;
  }
  return originalString;
};

/* Global TopSpace option that adds top space class to the root element in the Component */
export const modifyComponentClassTopSpace = (originalString:string, setting: "Remove" | "Small" | "Medium" | "Large" | undefined ) => {
  switch(setting) {
    case 'Remove':
      originalString += ' removeGutterTop'; break;
    case 'Small':
      originalString += ' gutterTopSm'; break;
    case 'Large':
      originalString += ' gutterTopLg'; break;
  }
  return originalString;
};

/* Global BottomSpace option that adds bottom space class to the root element in the Component */
export const modifyComponentClassBottomSpace = (originalString:string, setting: "Remove" | "Small" | "Medium" | "Large" | undefined ) => {
  switch(setting) {
    case 'Remove':
      originalString += ' removeGapBottom'; break;
    case 'Small':
      originalString += ' gutterBottomSm'; break;
    case 'Large':
      originalString += ' gutterBottomLg'; break;
  }
  return originalString;
};

/* Global AlignContent option that adds align content class to the root element in the Component */
export const modifyComponentClassAlignContent = (originalString:string, setting: "Left" | "Center" | "Right" | undefined ) => {
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
export const modifyComponentClassMaxWidth = (originalString:string, setting:"Small" | "Medium" | "Large" | undefined ) => {
  switch(setting) {
    case 'Small':
      originalString += ' containerWidthSm'; break;
    case 'Medium':
      originalString += ' containerWidthMd'; break;
    case 'Large':
      originalString += ' containerWidthLg'; break;
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