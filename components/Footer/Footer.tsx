import Style from './Footer.module.scss';
import footer from 'data/footer';

export type FooterType = {
  copyRight:string;
  tagLine:string;
}

export const Footer = (FooterData:FooterType) => {
  return (
    <footer className={`${Style.footer}`}>
      <div className={`container`}>
        <div className={'row align-itmes-center gap-lg remove-margin'}>
            <div className={`col ${Style.leftColumm}`}>
                <p className={`col ${Style.copyright}`}>{footer.copyRight} &copy; {new Date().getFullYear()}</p>
            </div>
            <div className={`col ${Style.rightColumm}`}>
                <div className={`${Style.address}`}>{footer.tagLine}</div>
            </div>
        </div>
      </div>
    </footer>
  );
}

