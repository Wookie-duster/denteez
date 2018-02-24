import React, { Component } from 'react';

import './index.scss';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer__wrap">
                    <div className="footer__copyright">Denteez Copyright 2015</div>
                    <ul className="footer__nav">
                        <li className="footer__nav__item">
                            <a href="" className="footer__nav__item__link">Support</a>
                        </li>
                        <li className="footer__nav__item">
                            <a href="" className="footer__nav__item__link">Privacy Policy</a>
                        </li>
                        <li className="footer__nav__item">
                            <a href="" className="footer__nav__item__link">Terms of use</a>
                        </li>
                    </ul>
                </div>
            </footer>
        );
    }
}

export default Footer;