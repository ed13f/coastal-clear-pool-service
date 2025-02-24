import React from 'react';
import Image from 'next/image'

import { CTAButton } from '../CTAButton'
import styles from './TwoColumnImageSection.module.scss';
import { SettingsInput, CTA, Image as ImageType } from '../../typescript/GlobalComponent';
import {modifyComponentClassBGColor, modifyComponentClassTopSpace, modifyComponentClassBottomSpace} from '../../helper'

/* Checks Input settings and assigns root level classes to manupulate the component */
const modifyClassName = ({
    topSpacing,
    bottomSpacing,
    backgroundColor,
    reverseColumns,
  }: SettingsInput) => {
    let modifiedClasses = '';
    modifiedClasses = modifyComponentClassBGColor(modifiedClasses,backgroundColor);
    modifiedClasses = modifyComponentClassTopSpace(modifiedClasses,topSpacing);
    modifiedClasses = modifyComponentClassBottomSpace(modifiedClasses,bottomSpacing);
    if(reverseColumns){modifiedClasses += ' ' + styles.reverse;}
    return modifiedClasses;
} 

export type TwoColumnImageSectionType = {
    settings: SettingsInput;
    header:string;
    description:string;
    cta:CTA;
    image:ImageType;
  }

export const TwoColumnImageSection = ({ settings,header,description,cta,image}: TwoColumnImageSectionType) => {
    
    return (
    <section className={`${styles.root} ${modifyClassName(settings)}`}>
        <div className={`container`}>
            <div className={`${styles.rowWrapper}`}>
                <div className={`${styles.row} row`}>
                    <div className={`${styles.contentColumn} col-12 col-md-6`}>
                        <div className={`${styles.contentWrapper}`}>
                            {header &&  <h2 className={`${styles.header}`} dangerouslySetInnerHTML={{ __html: header }}></h2> }
                            {description &&  <div className={`${styles.description}`} dangerouslySetInnerHTML={{ __html: description }}></div> }
                            {(cta && cta.title) && <CTAButton cta={cta}></CTAButton> }
                        </div>
                    </div>
                    <div className={`${styles.imageColumn} col-12 col-md-6`}>
                        <div className={styles.imageWrapper}>
                            <div className={`${styles.imageBorder} boxBorder`}>
                                {image.url && <Image className={`boxBorderInner`} src={`${image.url}?auto=webp`} alt={image.altText}  fill sizes="100%" style={{objectFit:"cover"}}/>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
