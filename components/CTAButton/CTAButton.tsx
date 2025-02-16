import React from 'react';
import Link from 'next/link'

import { CTA } from '../../typescript/GlobalComponent';

type CTAComponent = {
  cta:CTA
};

const renderCTA = ( cta: CTA) => {
  if(cta.openInNewWindow){
    return <a className={`cta`} href={cta.link} target="_blank" rel="noopener noreferrer">{cta.title}</a>
  } else {
    {/* TODO: Fix <link></link> */}
    return <Link className={`cta`} href={cta.link}>{cta.title}</Link>
  }
}

export const CTAButton = ( { cta } : CTAComponent) => {
  return (
    <>
      {renderCTA(cta)}
    </>
  );
}