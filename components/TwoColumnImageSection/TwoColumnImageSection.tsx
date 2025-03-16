"use client"

import React, { useState } from 'react';
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, A11y  } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/pagination';

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
    header?:string;
    description?:string;
    cta?:CTA;
    images:ImageType[];
  }

export const TwoColumnImageSection = ({ settings,header,description,cta,images}: TwoColumnImageSectionType) => {
    const [swiper, setSwiper] = useState<any>();
    const hasNavigation = images && images.length > 1;

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
                        <Swiper
                            slidesPerView={1}
                            loop={true}
                            className={`${styles.swiper} ${styles.hasNavigation}`}
                            modules={[Autoplay, Pagination, Navigation, A11y]}
                            autoHeight={true}
                            pagination={{
                            bulletActiveClass: styles.bulletActive,
                            bulletClass: styles.sliderBullet,
                            clickable: true,
                            clickableClass: styles.pagination,
                            enabled: hasNavigation,
                            }}
                            onSwiper={(swiperInstance:any) => setSwiper(swiperInstance)}
                        >
                            {/* A slider added for each image, the image will be static if only one is assigned */}
                            {images?.map((image) => (
                                <SwiperSlide key={`${image.altText}`}>
                                    <div className={styles.imageWrapper}>
                                        <div className={`${styles.imageBorder} boxBorder`}>
                                            {image.url && <Image className={`boxBorderInner`} src={`${image.url}?auto=webp`} alt={image.altText}  fill sizes="100%" style={{objectFit:"cover"}}/>}
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        {/* Optional navigation when more than one image is added */}
                        {hasNavigation && (
                            <>
                                <button
                                    aria-label="Go to prev slide"
                                    className={styles.prevButton}
                                    onClick={() => swiper?.slidePrev()}
                                />
                                <button
                                    aria-label="Go to next slide"
                                    className={styles.nextButton}
                                    onClick={() => swiper?.slideNext()}
                                />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
