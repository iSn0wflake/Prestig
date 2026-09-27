import './footer.scss';
export default function Footer() {
    return (
        <div className="footer">
            {' '}
            <div className="container">
                {' '}
                <div className="footer__content">
                    {' '}
                    <div className="footer__content__socials">
                        {' '}
                        <a href="https://www.youtube.com" className="footer__content__social" target="_blank" rel="noreferrer">
                            {' '}
                            <i className="fa-brands fa-youtube"></i>{' '}
                        </a>{' '}
                        <a href="https://www.instagram.com" className="footer__content__social" target="_blank" rel="noreferrer">
                            {' '}
                            <i className="fa-brands fa-instagram"></i>{' '}
                        </a>{' '}
                        <a href="https://web.telegram.org" className="footer__content__social" target="_blank" rel="noreferrer">
                            {' '}
                            <i className="fa-brands fa-telegram"></i>{' '}
                        </a>{' '}
                        <a href="https://www.tiktok.com" className="footer__content__social" target="_blank" rel="noreferrer">
                            {' '}
                            <i className="fa-brands fa-tiktok"></i>{' '}
                        </a>{' '}
                    </div>{' '}
                    <p className="footer__text"> Copyright © ООО «Prestige Tuning» 2024. All rights reserved. </p>{' '}
                </div>{' '}
            </div>{' '}
        </div>
    );
}
