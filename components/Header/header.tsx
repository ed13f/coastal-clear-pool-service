'use client'
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import type {StaticImageData} from 'next/image';

import styles from './Header.module.scss';
import headerData from 'data/header/navigation';

export type HeaderType = {
  logo:{
    url:string;
    altText:string;
  };
  primaryNav:{
      settings:{
          hasSubMenu:boolean;
      };
      topLevelLink:{
          text:string;
          link:string;
          targetBlank:boolean;
          addCtaStyle:boolean;
      }
      subNav?:{
          header:string;
          dropdownItems:{
              text:string;
              link:string;
              targetBlank:boolean;
          }[]
      }
  }[]
}

export function Header({ header}: {header: HeaderType}) {
  // const [buttonFocused, setButtonFocus] = useState<boolean>(false);
  //   const buttonReference = useRef<HTMLButtonElement>(null);

  const [activebutton, setActivebutton] = useState('-1');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Updates the active button state when a main nav item is clicked on mobile.
  const toggleSubMenuDisplay = (event:React.MouseEvent<HTMLButtonElement>) => {
    let dataAttributes = event.currentTarget.dataset;
    if(dataAttributes.index == activebutton){
      setActivebutton('-1');
    } else{
      dataAttributes.index ? setActivebutton(dataAttributes.index) : null;
    }
  };

  // Used to open/close the mobile nav menu.
  const toggleMenuDisplay = () => {
    if(mobileMenuOpen){
      setMobileMenuOpen(false);
    } else {
      setMobileMenuOpen(true);
    }
  };

  // Used to reset menu on mobile by closing it when a link is clicked.
  const resetToggleMenu = () => {
    setMobileMenuOpen(false);
    setActivebutton('-1');
  };

  // Used to conditionally add a key based on the main nav item type option.
  const createUniqueItemKey = (item:any) => {
    let uniqueID = "";
    if(item.header){
      uniqueID = item.header;
    } else if (item.topLevelLink.text){
      uniqueID = item.topLevelLink.text;
    }
    return uniqueID;
  }

  // Converts umber to a string.
  const convertNumberToString = (number:number) => {
    return number.toString();
  }
  
  useEffect(() => {
    // prevent the page body from scrolling when the mobile nave is open.
    if (mobileMenuOpen == true) {
      setTimeout(function() {
        document.body.style.position = 'fixed';
      }, 350);
    } else {
      setTimeout(function() {
        document.body.style.position = '';
      }, 350);
    }
    function handleResize() {
      // Reset body style when screen width changes to desktop. This hides the mobile nav if the screen resizes above the mobile width.
      if(window.innerWidth >= 992){
        document.body.style.position = '';
      } else if(mobileMenuOpen == true && window.innerWidth <= 992){
        document.body.style.position = 'fixed';
      } else {
        document.body.style.position = '';
      }
    }
    window.addEventListener("resize", handleResize);

    // Cleanup function to reset body style
    return () => {
      document.body.style.position = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header className={`header ${styles.root}`}>
      {/*  -- Primary Navigation 1 -- */}
      <div className={`${styles.primaryNavRow}`}>
        <div className={`container ${styles.container}`}>
          <div className={`row ${styles.row}`}>
            {/* Logo Row */}
            <div className={`col-12 col-lg-2  ${styles.logoColumn}`}>
              <div className={`${styles.logoWrapper}`}>
                <Link className={`${styles.logoLink}`} href={'/'}>{headerData.logo.url && <Image className={`${styles.logoImage}`} src={`${headerData.logo.url}?format=webp`} alt={headerData?.logo.altText} fill sizes="100%" style={{objectFit:"cover"}}/> }</Link>
              </div>
              <div className={`${styles.menuToggleWrapper}`}>
                <button aria-label="Toggle Mobile Menu" className={`${styles.menuToggleButton} ${mobileMenuOpen ? styles.menuToggleButtonActive : '' }`} onClick={toggleMenuDisplay}></button>
              </div>
            </div>
            <div className={`col-12 col-lg-9 ${styles.mobileMenuContainer} ${mobileMenuOpen ? styles.mobileMenuOpenTrue : '' }`}>
              <div className={`${styles.primaryNavWrapper}`}>
                <div className={`${styles.primaryNav}`}>  
                  {headerData.primaryNav && headerData.primaryNav?.map((item, index) => (
                    <div key={createUniqueItemKey(item)} className={`${styles.primaryItem} ${item.settings.hasSubMenu && styles.hasSubMenu} ${activebutton == convertNumberToString(index) ? styles.activeButton : '' }`}>
                      
                      {/* Option 1: Top level link Option: Displays top level link with no drop down */}
                      {/* Link WITHOUT target='_blank' */}
                      {(!item.settings.hasSubMenu && item.topLevelLink && !item.topLevelLink.targetBlank) && <Link className={`${item.topLevelLink.addCtaStyle ? styles.primaryCtaSecondaryLink + " cta" : styles.primaryLink }`} href={item.topLevelLink.link} onClick={resetToggleMenu}>{item.topLevelLink.text}</Link>}
                      {/* Link WITH target='_blank' */}
                      {(!item.settings.hasSubMenu && item.topLevelLink && item.topLevelLink.targetBlank) && <a className={`${item.topLevelLink.addCtaStyle ? styles.primaryCtaSecondaryLink + " cta" : styles.primaryLink }`} target="_blank" href={item.topLevelLink.link} onClick={resetToggleMenu}>{item.topLevelLink.text}</a>}

                      
                      {/* Option 3: Has Sub Nav option - uses a button/a with dropdown menu */}
                      {(item.settings.hasSubMenu && item.subNav && item.subNav.header) && <button className={`${styles.primaryHeader}`}  onClick={toggleSubMenuDisplay} data-index={ convertNumberToString(index) }>{item.subNav.header}</button> }
                      {item.settings.hasSubMenu  && (
                        <div className={`${styles.primarySubNavWrapper}`}>
                          <div className={`${styles.primarySubNav}`}>
                            <div className={`${styles.subItemRow}`}>
                                <div className={`${styles.subItemColumn}`}>
                                    <ul className={`${styles.navList}`}>
                                      {item.subNav && item.subNav.dropdownItems && item.subNav.dropdownItems?.map((subItem) => (
                                        <li key={`${subItem.text}`} className={`${styles.primarySubItem}`}>
                                          {/* Link WITHOUT target='_blank' */}
                                          {!subItem.targetBlank && (
                                            <Link className={`${styles.primarySubLink}`} href={subItem.link} onClick={resetToggleMenu}>
                                              {subItem.text}
                                             </Link>
                                          )}
                                          {/* Link WITH target='_blank' */}
                                          {subItem.targetBlank && (
                                            <a className={`${styles.primarySubLink}`} target="_blank" href={subItem.link} onClick={resetToggleMenu}>
                                              {subItem.text}
                                            </a>
                                          )}
                                        </li>
                                      ))}
                                    </ul>
                                </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </header>
  );
}