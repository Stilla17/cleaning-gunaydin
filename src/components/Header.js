import React, { useState } from 'react';
import Logo from '../img/Logo.svg'
import Rus from '../img/RUS.png'
import Uzb from '../img/flag uzb.png'
import Arrow from '../img/line.svg'
import Girl from '../img/girl.png'
import { getText } from "./Locales";

const Header = () => {

    const [language, setLanguage] = useState('ru');

    const handleLanguageChange = (newLanguage) => {
        if (newLanguage === 'uz' || newLanguage === 'ru') {
            setLanguage(newLanguage);
            localStorage.setItem('language', newLanguage);
            window.location.reload();
        }
    }

    return (
        <div>
            <header>
                <div className='container'>
                    <nav className="navbar navbar-expand-md">

                        <a className="navbar-brand" href="#"><img src={Logo} alt='Logo' /></a>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse mobile" id="navbarSupportedContent">
                            <div></div>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#uslug">{getText('nav1')}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#about">{getText('nav2')}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#team">{getText('nav3')}</a>
                                </li>
                                <li className="nav-item item_call">
                                    <a className="nav-link" href="#call">{getText('nav4')}</a>
                                    <div className='ms-4 arrow_nav'>
                                        <img src={Arrow} alt='Logo' />
                                        <button className='btn_call'>333000057</button>
                                    </div>
                                </li>

                            </ul>
                            <div className='language-btn'>
                                <button className='btn' onClick={() => handleLanguageChange('ru')}><img src={Rus} alt='Rus' /></button>
                                <button className='btn' onClick={() => handleLanguageChange('uz')}><img src={Uzb} alt='Uzb' /></button>
                            </div>

                        </div>
                    </nav>

                    <div className='header-wrap mt-5'>
                        <div className='header-left'>
                            <h1>{getText('title')}</h1>
                            <p className='subtitle'>{getText('subtitle')}</p>
                            <div className='button_center'>
                                <button className='call_button'>{getText('nav4')}</button>
                            </div>
                        </div>
                        <div className='header-right'>
                            <img src={Girl} alt='Rus' />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;