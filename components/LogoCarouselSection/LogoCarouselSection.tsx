"use client"

import React from 'react';
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/scss';

import { CTAButton } from '../CTAButton';
import styles from './LogoCarouselSection.module.scss';
import { SettingsInput, CTA, Image as ImageType, Styles } from '../../typescript/GlobalComponent';
import {modifyComponentClassBGColor, modifyComponentClassTopSpace, modifyComponentClassBottomSpace,modifyComponentClassMaxWidth} from '../../helper'

/* Checks Input settings and assigns root level classes to manupulate the component */
const modifyClassName = ({
  topSpacing,
  bottomSpacing,
  backgroundColor,
  fullWidthContainer,
  displayBackgroundSquare,
  maxWidth
}: SettingsInput, styles: Styles) => {
    let modifiedClasses = '';
    modifiedClasses = modifyComponentClassTopSpace(modifiedClasses,topSpacing);
    modifiedClasses = modifyComponentClassBottomSpace(modifiedClasses,bottomSpacing);
    modifiedClasses = modifyComponentClassBGColor(modifiedClasses,backgroundColor);
    modifiedClasses = modifyComponentClassMaxWidth(modifiedClasses,maxWidth);
    
    if(fullWidthContainer == true){
      modifiedClasses += ' ' + styles.fullWidthContainer;
    }
    if(displayBackgroundSquare == true){
      modifiedClasses += ' ' + styles.displayBackgroundSquare;
    }
  
    return modifiedClasses;
} 

export type LogoCarouselSectionType = {
  settings: SettingsInput;
  header:string;
  description:string;
  cta:CTA;
  logos:ImageType[];
}

export const LogoCarouselSection = ({ settings,header,description,logos, cta }: LogoCarouselSectionType) => {
  return (
    <section className={`${styles.root} ${modifyClassName(settings, styles)}`}>
        <div className={`${styles.container} container`}>
        <div className={`row`}>
            <div className={`col-12 ${styles.headerContainer}`}>
              {header && <h2 className={`${styles.header}`} dangerouslySetInnerHTML={{ __html: header }}></h2> }
            </div>
          </div>
          <div>
            <div className={`col-12 ${styles.backgroundContainer}`}>
            {settings.displayBackgroundSquare && <div className={`${styles.backgroundSquare}`}></div>}
              {description && (
                <div className={`${styles.contentContainer}`} >
                  <div className={`description`} dangerouslySetInnerHTML={{ __html: description }}></div>
                </div>
              )}
              <Swiper
                slidesPerView={2}
                loop={true}
                className={`${styles.swiper}`}
                speed={5000}
                autoplay={{ delay: 0, disableOnInteraction: false, waitForTransition: true }}
                modules={[Autoplay]}
                autoHeight={true}
                breakpoints={{
                  400: {
                    slidesPerView: 3,
                  },
                  576: {
                    slidesPerView: 4,
                  },
                  768: {
                    slidesPerView: 4,
                  },
                  992: {
                    slidesPerView: 5,
                  },
                  1200: {
                    slidesPerView: 6,
                  },
                }}
              >
                {logos?.map((logo) => (
                  <SwiperSlide key={logo.altText} className={`${styles.swiperSlide}`}>
                    <div className={`${styles.cardWrapper} boxShadow border-radius`}>
                      {( logo && logo.url ) && <Image className={`${styles.logoImage}`} src={`${logo.url}?auto=webp`} alt={logo.altText} fill sizes="100%" style={{objectFit:"contain"}}/> }
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              {cta && (
                <div className={`${styles.ctaContainer}`} >
                  <CTAButton cta={cta}></CTAButton>
                </div>
              )}
            </div>
          </div>
        </div>
    </section>
  );
}