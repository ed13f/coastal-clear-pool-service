"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Head from "next/head";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, A11y  } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/pagination';

import { modifyComponentClassTopSpace, modifyComponentClassBottomSpace } from 'helper';
import { SettingsInput, CTA, Image as ImageType } from 'typescript/GlobalComponent';
import { CTAButton } from 'components/CTAButton';
import styles from './ServiceTabsSection.module.scss';
    
/* Checks Input settings and assigns root level classes to manupulate the component */
const modifyClassName = ({
    topSpacing,
    bottomSpacing,
  }: SettingsInput) => {
    let modifiedClasses = '';
    modifiedClasses = topSpacing ? modifyComponentClassTopSpace(modifiedClasses,topSpacing) : modifiedClasses;
    modifiedClasses = bottomSpacing ? modifyComponentClassBottomSpace(modifiedClasses,bottomSpacing) : modifiedClasses;
    return modifiedClasses;
} 

export type ServiceTabsSectionType = {
    settings: SettingsInput;
    header?:string;
    description?:string;
    cards:{
        tab:{
            image: ImageType;
            header:string;
            intro:string;
        }
        card:{
            image: ImageType;
            header:string;
            description:string;
            cta?: CTA;
        }
    }[];
}

type swiper = {
    slidePrev: () => void;
    slideNext: () => void;
}
export const ServiceTabsSection = ({ settings,header,description,cards }: ServiceTabsSectionType) => {
    const [activeCard, setActiveCard] = useState(0);
    const [swiper, setSwiper] = useState<swiper>()
    // const [swiper, setSwiper] = useState<Swiper | null>(null);

    const toggleDataAttributes = (event:React.MouseEvent<HTMLButtonElement>) => {
        const index = event.currentTarget.dataset.index;
        setActiveCard(Number(index));
    };
    console.log('cards: ', cards[0].card.image.url);
    return (
        <>
        {/* Preload all images that are used in the hidden tab content */}
        <Head>
            {cards?.map((card) => (
                (card.card.image && card.card.image.url) && <link key={card.card.image.url} rel="preload" href={`${card.card.image.url}`} as="image" />
            ))}
        </Head>
    <section className={`${styles.serviceTabsSection} ${modifyClassName(settings)}`}>
        <div className={`container ${styles.container}`}>
            <div className={`row ${styles.row} ${styles.mainContentWrapper}`}>
                <div className={`col-12 col-md-6`}>
                    <div className={`contentWrapper`}>
                        {header  && <h2 className={`header ${styles.header}`} dangerouslySetInnerHTML={{ __html: header }}></h2> }
                    </div>
                </div>
                <div className={`col-12 col-md-6`}>
                    <div className={`contentWrapper`}>
                        {description  &&  <div className={`${styles.description}`} dangerouslySetInnerHTML={{ __html: description }}></div> }
                    </div>
                </div>
            </div>
            {/* Desktop tabs */}
            <div className={`row ${styles.row} ${styles.desktopTabs}`}>
                <div className={`col-12`}>
                    <div className={`${styles.cardsWrapperRow}`}>
                        <div className={`contentWrapper`}>
                            <div className={`${styles.cardsWrapper}`}>
                                {cards?.map((card, index) => (
                                    <div className={`${styles.card} ${index == activeCard ? styles.cardActive : ''}`} key={card.card.header}>
                                        <div className={`${styles.contentWrapper}`}>
                                            <button 
                                            className={`${styles.contentCard}`} 
                                            onClick={toggleDataAttributes} 
                                            data-index={ index }
                                            >
                                                {/* {index == activeCard && <div className={`${styles.progressBarWrapper}`}><TimerProgressBar duration={card.active_time_duration}/></div> } */}
                                                {(card.tab.image && card.tab.image.url) && <Image className={styles.tabImage} src={`${card.tab.image.url}?auto=webp`} alt={card.tab.image.altText} width={300} height={100}/>}
                                                <h3 className={`${styles.cardHeader}`}>{card.tab.header}</h3>
                                                <div className={`${styles.cardDescription}`}>{card.tab.intro}</div>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.expandedInfoWrapper} ${activeCard} ${activeCard == 0 ? styles.firstCard: ''} ${(activeCard == (cards?.length - 1) && cards?.length >= 4) ? styles.lastCard: ''}`}>
                        {cards && (
                            <div className={`${styles.expandedInfoRow}`}>
                            <div className={`${styles.expandedInfoContentColumn}`}>
                                <h3 className={`${styles.expandedInfoHeader}`} dangerouslySetInnerHTML={{ __html: cards[activeCard]?.card.header }}></h3>
                                <div className={`${styles.expandedInfoDescription}`} dangerouslySetInnerHTML={{ __html: cards[activeCard]?.card.description }}></div>
                                {(cards[activeCard] && cards[activeCard].card.cta && cards[activeCard].card.cta?.link) && <div className={`${styles.expandedInfoCTAWrapper}`}><CTAButton cta={cards[activeCard] && cards[activeCard].card.cta}/></div>}
                            </div>
                            <div className={`${styles.expandedInfoImageColumn}`}>
                            {(cards[activeCard] && cards[activeCard].card.image && cards[activeCard].card.image.url) && <Image className={`boxShadow ${styles.cardImage}`} src={`${cards[activeCard].card.image.url}?auto=webp`} alt={cards[activeCard].card.image.altText} width={1000} height={1000} priority/>}
                            </div>
                        </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile tabs */}
            <div className={`row  ${styles.mobileTabs}`}>
                <div className={`col-12 ${styles.mobileTabsWrapper}`}>
                <Swiper
                    slidesPerView={1.2}
                    loop={true}
                    // autoplay={{ delay: 10000, disableOnInteraction: false, waitForTransition: true }}
                    className={`${styles.swiper} ${styles.hasNavigation}`}
                    modules={[Autoplay, Pagination, Navigation, A11y]}
                    autoHeight={false}
                    pagination={{
                    bulletActiveClass: styles.bulletActive,
                    bulletClass: styles.sliderBullet,
                    clickable: true,
                    clickableClass: styles.pagination,
                    enabled: true,
                    }}
                    onSwiper={(swiperInstance) => setSwiper(swiperInstance)}
                >
                    {/* Loop through all testimonial cards */}
                    {cards?.map((slide) => (
                    <SwiperSlide key={slide.tab.header} className={`${styles.mobileSlider}`}>
                        <div className={`${styles.mobileCardContainer}`}>
                            <div className={`${styles.mobileTab}`}>
                                <h3  className={`${styles.mobileTabHeader}`}>{slide.tab.header}</h3>
                                <p  className={`${styles.mobileTabIntro}`}>{slide.tab.intro}</p>
                            </div>
                            <div className={`${styles.mobileContent}`}>
                                {(slide.card.image && slide.card.image.url) && <Image className={` ${styles.mobileCardImage}`} src={`${slide.card.image.url}?auto=webp`} alt={slide.card.image.altText} width={900} height={450} priority/>}
                                <h4 className={`${styles.mobileExpandedInfoHeader}`} dangerouslySetInnerHTML={{ __html: slide?.card.header }}></h4>
                                <div className={`${styles.mobileExpandedInfoDescription}`} dangerouslySetInnerHTML={{ __html: slide?.card.description }}></div>
                                {(slide.card && slide.card.cta?.link) && <div className={`${styles.mobileExpandedInfoCTAWrapper}`}><CTAButton cta={slide && slide.card.cta}/></div>}
                            </div>
                        </div>
                    </SwiperSlide>
                    ))}
                    </Swiper>
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
                </div>
            </div>
        </div>
    </section>
    </>
  );
}