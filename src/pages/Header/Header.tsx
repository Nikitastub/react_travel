import React from 'react';
import headerLogo from '../../img/odigo-logo.svg'

export const Header = () =>
    <div className="header">
    <div className="wrapper">
        <div className="header__wrapper">
            <div className="header__logo">
                <a href="#">
                    <img src={headerLogo} alt="odigo" />
                </a>
            </div>
            <nav className="header__nav">
                <ul className="header__list">
                    <li className="header__item">
                        <a href='#articles' className="header__link">Articles</a>
                    </li>
                    <li className="header__item">
                        <a href='#locations' className="header__link">Locations</a>
                    </li>
                    <li className="header__item">
                        <a href='#videos' className="header__link">Videos</a>
                    </li>
                    <li className="header__item">
                        <a href="#" className="header__link">Sign in</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  </div>
