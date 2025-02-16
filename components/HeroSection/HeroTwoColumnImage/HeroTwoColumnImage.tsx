import React from 'react';
import Image from 'next/image';

import { CTAButton } from '../../CTAButton';
import styles from './HeroTwoColumnImage.module.scss'

import { CTA as CTAType, Image as ImageType, SettingsInput } from '../../../typescript/GlobalComponent';

import  {modifyComponentClassBGColor, modifyComponentClassTopSpace, modifyComponentClassBottomSpace } from '../../../helper'

const modifyClassName = ({
    topSpacing,
    bottomSpacing,
    backgroundColor,
  }: SettingsInput) => {
    let modifiedClasses = '';
    modifiedClasses += ' ' + styles.twoColumnImage;
    modifiedClasses = backgroundColor ? modifyComponentClassBGColor(modifiedClasses,backgroundColor) : modifiedClasses;
    modifiedClasses = topSpacing ? modifyComponentClassTopSpace(modifiedClasses,topSpacing) : modifiedClasses;
    modifiedClasses = bottomSpacing ? modifyComponentClassBottomSpace(modifiedClasses,bottomSpacing) : modifiedClasses;
    return modifiedClasses;
}

type HeroTwoColumnImage = {
    settings: SettingsInput;
    preheader:string;
    header:string;
    subheader:string;
    description:string;
    cta:CTAType;
    image: ImageType;
}

export const HeroTwoColumnImage = ({ settings, preheader='', header,subheader,description,cta,image}: HeroTwoColumnImage) => {
  return (
    <section className={`hero ${styles.hero} ${modifyClassName(settings)}`}>
        <div className={`container`}>
            <div className={`${styles.row} row ${(image && !image.url) && styles.noFeaturedImageBackground}`}>
                <div className={`col-12 col-md-6 order-2 order-md-1`}>
                    <div className={`${styles.contentWrapper}`}>
                        {preheader && <p className={`${styles.preheader} h3`} dangerouslySetInnerHTML={{ __html: preheader }}></p> }  
                        <div className={styles.headerWrapper}>
                            {header && <h1 className={`${styles.header}`} dangerouslySetInnerHTML={{ __html: header }}></h1> }
                        </div>  
                        {subheader && <h2 className={`${styles.subheader} h3`} dangerouslySetInnerHTML={{ __html: subheader }}></h2> }
                        {description && <div className={`${styles.description} largeText`} dangerouslySetInnerHTML={{ __html: description }}></div> }
                        <div className={`${styles.ctaWrapper}`}>
                            <CTAButton cta={cta}></CTAButton>
                        </div>
                    </div>
                </div>
                <div className={`col-12 col-md-6  order-1 order-md-2 ${styles.imageColumn}`}>
                    {image.url && (
                        <div className={`imageBorderWrapper ${styles.imageWrapper}`}>
                                <div className={`imageBorder ${styles.imageBorder}`}>
                                    <Image  priority={true} src={`${image.url}?auto=webp`} alt={image.altText} fill sizes="100%" style={{objectFit:"cover"}}/>
                                </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </section>
  );
}