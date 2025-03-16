import React from 'react';
import Link from 'next/link'

import { CTA } from '../../typescript/GlobalComponent';

type CTAComponent = {
  cta?:CTA
};

const renderCTA = ( cta: CTA) => {
  // Conditionally use next link tag for intnal pages and anchor tag for external pages
  if(cta.openInNewWindow){
    return <a className={`cta`} href={cta.link} target="_blank" rel="noopener noreferrer">{cta.title}</a>
  } else {
    return <Link className={`cta`} href={cta.link}>{cta.title}</Link>
  }
}

export const CTAButton = ( { cta } : CTAComponent) => {
  return (
    <>
      {cta && renderCTA(cta)}
    </>
  );
}