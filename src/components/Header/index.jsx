import React, { Component } from 'react';

import './index.scss';

import Images from '../../static/img';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="wrap">

                    <a href="" className="header__logo">
                        <img src={Images.logo} alt="Logo" className="header__logo__img"/>
                    </a>

                    <div className="bar">
                        <input type="text" placeholder="Company name" className="bar__search"/>
                        <div className="bar__notifications">
                            <a href="" className="bar__notifications__item">
                                <img src={Images.chat} alt="Chat" className="bar__notifications__item__icon"/>
                            </a>
                            <a href="" className="bar__notifications__item">
                                <img src={Images.notifications} alt="Notofocations" className="bar__notifications__item__icon"/>
                            </a>
                        </div>
                    </div>

                    <a href="" className="header__user">
                        <img src={Images.user} alt="User photo" className="header__user__photo"/>
                        <span className="header__user__name">Maximillian Beekeeper</span>
                    </a>

                </div>
            </div>
        );
    }
}

export default Header;