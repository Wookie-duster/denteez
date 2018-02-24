import React, { Component } from 'react';

import './index.scss'

import Images from '../../static/img';

import Form from '../Form';
import About from '../About';
import Footer from '../Footer';

class Contact extends Component {
    render() {
        return (
            <div className="contact">

                <div className="jumbotron">
                    <header className="jumbotron__header">
                        <a href="" className="jumbotron__header__link"><img src={Images.logo} alt="" className="jumbotron__header__logo"/></a>
                        
                        <a href="" className="jumbotron__header__btn">Log In Now</a>
                    </header>
                    <div className="jumbotron__content">
                        <div className="jumbotron__content__wrap">
                            <p className="jumbotron__content__title">Home of Dentistry</p>
                            <p className="jumbotron__content__description">Denteez was created by dentists for dentistry in order to make the life of everyone involved in dentistry easier.</p>
                        </div>
                        
                    </div>
                </div>

                <section className="main">
                    <Form/>
                </section>

                <About/>
                <Footer/>
            </div>
        );
    }
}

export default Contact;