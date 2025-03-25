import React from 'react';

import styles from './HeroSingleColumn.module.scss';
import { CTAButton } from 'components/CTAButton';
import { SettingsInput, CTA as CTAType, Image } from 'typescript/GlobalComponent';
import {modifyComponentClassBGColor, modifyComponentClassTopSpace, modifyComponentClassBottomSpace} from 'helper';

/* Checks Input settings and assigns root level classes to manupulate the component */
const modifyClassName = (
    {
        topSpacing,
        bottomSpacing,
        backgroundColor,
    }: SettingsInput) => {
    let modifiedClasses = '';
    modifiedClasses = backgroundColor ? modifyComponentClassBGColor(modifiedClasses,backgroundColor[0]) : modifiedClasses;
    modifiedClasses = topSpacing ? modifyComponentClassTopSpace(modifiedClasses,topSpacing[0]): modifiedClasses;
    modifiedClasses = bottomSpacing ? modifyComponentClassBottomSpace(modifiedClasses,bottomSpacing[0]): modifiedClasses;
    return modifiedClasses;
}

export type HeroSingleColumnType = {
    settings: SettingsInput;
    header:string;
    description:string;
    cta?:CTAType;
    image?: Image
}

export const HeroSingleColumn = ({ settings, header, description, cta }: HeroSingleColumnType) => {
  return (
    <section className={`hero ${styles.hero} ${styles.singleColumn} ${modifyClassName(settings)}`}>
        <div className={`container`}>
            <div className={`row`}>
                <div className={`col-12`}>
                    <div className={`${styles.contentWrapper} contentWrapper`} >
                        {header &&  <h1 className={`${styles.header}`} dangerouslySetInnerHTML={{ __html: header }}></h1> }
                        {description &&  <div className={` ${styles.description}`} dangerouslySetInnerHTML={{ __html: description }}></div> }
                       {cta && <CTAButton cta={cta}></CTAButton> }
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
