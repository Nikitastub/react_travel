import React, { useState } from 'react';
import { LoginForm } from '../../components/Modal/LoginFormModal/LoginForm';
import { Modal } from '../../components/Modal';
import headerLogo from '../../img/odigo-logo.svg'

export const Header = () => {
    const [modal, setModal] = useState(false);
    return(
        <>
    {modal && <Modal title="Sign In" onClose={() => setModal(false)}>
    <LoginForm switchModal={() => setModal(false)}/>
    </Modal>}
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
                        <a onClick={() => setModal(true)} href="#" className="header__link">Sign in</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  </div>
  </>
  )
}

const headerPlace = () => {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        window.pageYOffset > 50 ? header?.classList.add('header_active') : header?.classList.remove('header_active');
    };
}

headerPlace();

