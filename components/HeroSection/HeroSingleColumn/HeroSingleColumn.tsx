import React from 'react';
import styles from './HeroSingleColumn.module.scss';

import { CTAButton } from '../../CTAButton';
import { SettingsInput, CTA as CTAType, Image } from '../../../typescript/GlobalComponent';
import {modifyComponentClassBGColor, modifyComponentClassTopSpace, modifyComponentClassBottomSpace} from '../../../helper';

const modifyClassName = (
    {
        topSpacing,
        bottomSpacing,
        backgroundColor,
    }: SettingsInput) => {
    let modifiedClasses = '';
    modifiedClasses = modifyComponentClassBGColor(modifiedClasses,backgroundColor);
    modifiedClasses = modifyComponentClassTopSpace(modifiedClasses,topSpacing);
    modifiedClasses = modifyComponentClassBottomSpace(modifiedClasses,bottomSpacing);
    return modifiedClasses;
}

export type HeroSingleColumnType = {
    settings: SettingsInput;
    header:string;
    description:string;
    cta:CTAType;
    image: Image
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
                        <CTAButton cta={cta}></CTAButton>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
