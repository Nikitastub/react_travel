import React from 'react';
import headerLogo from '../../img/odigo-logo.svg'

interface HeaderFormProps {
    switchModal: () => void
}

export const Header = ({ switchModal }: HeaderFormProps) => {
    const [modalImg, setModalImg] = useState(false);
    return(
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
                        <a onClick={() => switchModal()} href="#" className="header__link">Sign in</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  </div>
  )
}
function useState(arg0: boolean): [any, any] {
    throw new Error('Function not implemented.');
}

