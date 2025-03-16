'use client'

import React, { useState } from 'react';
import Head from 'next/head';

import styles from './FAQsSection.module.scss';
import { SettingsInput} from '../../typescript/GlobalComponent';
import {modifyComponentClassBGColor, modifyComponentClassTopSpace, modifyComponentClassBottomSpace } from '../../helper'

/* Checks Input settings and assigns root level classes to manupulate the component */
const modifyClassName = ({
    topSpacing,
    bottomSpacing,
    backgroundColor
  }: SettingsInput) => {
    let modifiedClasses = '';
    modifiedClasses = modifyComponentClassTopSpace(modifiedClasses,topSpacing);
    modifiedClasses = modifyComponentClassBottomSpace(modifiedClasses,bottomSpacing);
    modifiedClasses = modifyComponentClassBGColor(modifiedClasses,backgroundColor);
    return modifiedClasses;
} 

export type FAQsSectionType = {
    settings: SettingsInput;
    header?:string;
    description?:string;
    faqs:{
        question:string;
        answer:string;
    }[];
}

export const FAQsSection = ({ settings,header, description='', faqs }: FAQsSectionType) => {

    /* Sets initial state value to the first FAQ instance */
    const [activeFaqIndex, setActiveFaqIndex] = useState(0);

    /* toggle function to update state using the buttons data attributes */
    const toggleDataAttributes = (event:React.MouseEvent<HTMLButtonElement>) => {
        let dataAttributes = event.currentTarget.dataset;
        if(dataAttributes.index == activeFaqIndex.toString()){
            setActiveFaqIndex(-1);
        } else {
            dataAttributes.index ? setActiveFaqIndex(+dataAttributes.index) : null;
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };
    
    return (
        <>
        {/* Add FAQs structure data schema to the page head */}
        <Head>
            <script type="application/ld+json">
                {JSON.stringify(faqSchema)}
            </script>
        </Head>
        <section id={`faqs`} className={`${styles.root} ${settings && modifyClassName(settings)}`}>
            <div className={`container ${styles.container}`}>
                <div className={`row ${styles.row}`}>
                    <div className={`col-12`}>
                        <div className={`contentWrapper`}>
                            {header &&  <h2 className={`${styles.header}`} dangerouslySetInnerHTML={{ __html: header }}></h2> }
                            {description &&  <div className={`${styles.description} description`} dangerouslySetInnerHTML={{ __html: description }}></div> }
                            {faqs && <div className={`${styles.faqsContainer}`}>
                                <div className={`${styles.faqWrapper}`}>
                                    {/* Loop through FAQs Repeater */}
                                    {faqs?.map((faq, index) => (
                                        <div key={`faq-${faq.question}`} className={`${styles.buttonWrapper} ${activeFaqIndex == index ? styles.activeButton : '' }`}>
                                            {/* Button used to change the acitve/expanded FAQ Card  */}
                                            <button 
                                                className={`${styles.faqButton}`}
                                                onClick={toggleDataAttributes}
                                                data-index={ index }
                                            >
                                                {faq.question &&  <h3 className={`${styles.faqQuestion} h5`} dangerouslySetInnerHTML={{ __html: faq.question }}></h3> }
                                                {faq.answer && <div className={`${styles.faqAnswer} paragraph`} dangerouslySetInnerHTML={{ __html: faq.answer }} ></div> }
                                                <div className={`${styles.buttonToggle}`}></div>
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}