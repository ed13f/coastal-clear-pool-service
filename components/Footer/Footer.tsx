import Style from './Footer.module.scss';
import {Footer as FooterType } from '../../typescript/GlobalComponent'

export const Footer = ({}:FooterType) => {
  return (
    <footer className={`${Style.footer}`}>
      <div className={`container`}>
        <div className={'row align-itmes-center gap-lg remove-margin'}>
            <div className={`col ${Style.leftColumm}`}>
                <p className={`col ${Style.copyright}`}>Coastal Clear Pools &copy; {new Date().getFullYear()}</p>
            </div>
            <div className={`col ${Style.rightColumm}`}>
                <address className={`${Style.address}`}>Palm Beach County</address>
            </div>
        </div>
      </div>
    </footer>
  );
}

