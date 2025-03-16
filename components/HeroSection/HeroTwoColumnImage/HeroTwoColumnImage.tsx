import React from 'react';
import Image from 'next/image';

import { CTAButton } from '../../CTAButton';
import styles from './HeroTwoColumnImage.module.scss'
import { CTA as CTAType, Image as ImageType, SettingsInput } from '../../../typescript/GlobalComponent';
import  {modifyComponentClassBGColor, modifyComponentClassTopSpace, modifyComponentClassBottomSpace } from '../../../helper'

/* Checks Input settings and assigns root level classes to manupulate the component */
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

export type HeroTwoColumnImageType = {
    settings: SettingsInput;
    header:string;
    description:string;
    cta?:CTAType;
    image?: ImageType;
}

export const HeroTwoColumnImage = ({ settings, header, description,cta,image}: HeroTwoColumnImageType) => {
  return (
    <section className={`hero ${styles.hero} ${modifyClassName(settings)}`}>
        <div className={`container`}>
            <div className={`${styles.row} row ${(image && !image.url) && styles.noFeaturedImageBackground}`}>
                 {/* Content Column */}
                <div className={`col-12 col-md-6 order-2 order-md-1`}>
                    <div className={`${styles.contentWrapper}`}>
                        <div className={styles.headerWrapper}>
                            {header && <h1 className={`${styles.header} rico`} dangerouslySetInnerHTML={{ __html: header }}></h1> }
                        </div>  
                        {description && <p className={`${styles.description} largeText`} dangerouslySetInnerHTML={{ __html: description }}></p> }
                        {cta?.link && (
                            <div className={`${styles.ctaWrapper}`}>
                                <CTAButton cta={cta}></CTAButton>
                            </div>
                        )}
                    </div>
                </div>
                {/* Image Column */}
                <div className={`col-12 col-md-6  order-1 order-md-2 ${styles.imageColumn}`}>
                    {image && image.url && (
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