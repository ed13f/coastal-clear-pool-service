import React from 'react';
import Image from 'next/image'

import { CTAButton } from 'components/CTAButton';
import styles from './FullWidthSection.module.scss';
import { SettingsInput, CTA, Image as ImageType } from 'typescript/GlobalComponent';
import {modifyComponentClassBGColor, modifyComponentClassTopSpace, modifyComponentClassBottomSpace, modifyComponentClassMaxWidth, modifyComponentClassAlignContent} from 'helper'

/* Checks Input settings and assigns root level classes to manupulate the component */
const modifyClassName = ({
    topSpacing,
    bottomSpacing,
    backgroundColor,
    contentAlignment,
    maxWidth,
  }: SettingsInput) => {
    let modifiedClasses = '';
    modifiedClasses = topSpacing ? modifyComponentClassTopSpace(modifiedClasses,topSpacing[0]): modifiedClasses;
    modifiedClasses = bottomSpacing ? modifyComponentClassBottomSpace(modifiedClasses,bottomSpacing[0]) : modifiedClasses;
    modifiedClasses = backgroundColor ? modifyComponentClassBGColor(modifiedClasses,backgroundColor[0]) : modifiedClasses;
    modifiedClasses = contentAlignment ? modifyComponentClassAlignContent(modifiedClasses,contentAlignment[0]) : modifiedClasses;
    modifiedClasses = maxWidth ? modifyComponentClassMaxWidth(modifiedClasses,maxWidth[0]) : modifiedClasses;
    return modifiedClasses;
} 

export type FullWidthSectionType = {
    settings: SettingsInput;
    header?:string;
    description?:string;
    cta?: CTA;
    image?: ImageType;
}

export const FullWidthSection = ({ settings,header,description, cta, image }: FullWidthSectionType) => {
    return (
        <section className={`${styles.root} ${modifyClassName(settings)}`}>
            <div className={`container ${styles.container}`}>
                <div className={`row ${styles.row}`}>
                    <div className={`col-12`}>
                        <div className={`contentWrapper`}>
                            {header &&  <h2 className={`header`} dangerouslySetInnerHTML={{ __html: header }}></h2> }
                            {description &&  <div className={`description`} dangerouslySetInnerHTML={{ __html: description }}></div> }
                            {(image && image.node.sourceUrl) && (
                                <div className={`${styles.imageWithBorder} imageBorder`}>
                                    <Image className={styles.featuredImage} src={`${image.node.sourceUrl}?auto=webp`} alt={image.node.altText} width={900} height={500}/>
                                </div>
                            )}
                            { cta && <div className={`cta-wrapper`}><CTAButton cta={cta}></CTAButton></div> }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}