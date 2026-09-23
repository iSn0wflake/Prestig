import React, { useState } from 'react';
import './footer.scss';

export default function footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className='footer__content__socials'>
                        <a href="https://www.youtube.com" target="_blank" className='footer__content__social'>
                            <i class="fa-brands fa-youtube"></i>
                        </a>
                        <a href="https://www.instagram.com" target="_blank" className='footer__content__social'>
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                        <a href="https://web.telegram.org" target="_blank" className='footer__content__social'>
                            <i class="fa-brands fa-telegram"></i>
                        </a>
                        <a href="https://www.tiktok.com" target="_blank" className='footer__content__social'>
                            <i class="fa-brands fa-tiktok"></i>
                        </a>
                    </div>
                    <p className='footer__text'>Copyright © ООО «Prestige Tuning» 2024. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
}
