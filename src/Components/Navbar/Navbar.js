import React from 'react';
import { FaBars } from 'react-icons/fa';
import {Link} from 'react-router-dom'


const Navbar = () => {
    return (
        <div>
            <div className="hamburger">
                <FaBars/>
            </div>
            <nav className="main-navigation">
                <ul className="main-navigation__list">
                    <li className="main-navigation__item"><Link className="main-navigation__link" to="/">Ogłoszenia</Link></li>
                    <li className="main-navigation__item"><Link className="main-navigation__link" to="/events/add">Dodaj Ogłoszenie</Link>
                    </li>
                    <li className="main-navigation__item"><Link className="main-navigation__link" to="/user/events">Twoje imprezy</Link>
                    </li>
                    <li className="main-navigation__item"><Link className="main-navigation__link" to="/archive/events">Archiwum
                        Imprez</Link>
                    </li>
                    <li className="main-navigation__item"><Link className="main-navigation__link" to="/user/account">Logowanie</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;