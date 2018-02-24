import React, { Component } from 'react';
import TextEllipsis from 'react-text-ellipsis';

import './index.scss';

import Services from '../Services';
import Images from '../../static/img';

class Main extends Component {
    render() {
        return (
            <main className="main">
                <div className="wrap">


                    <aside className="sidebar sidebar--left">

                        <nav className="navigation">
                            <ul className="navigation__list">
                                <li className="navigation__list__item">
                                    <a href="" className="link">
                                        <img className="link__img" src={Images.feed} alt=""/>
                                        <span className="link__text">Feed</span>    
                                    </a>
                                </li>
                                <li className="navigation__list__item">
                                    <a href="" className="link">
                                        <img className="link__img" src={Images.ask} alt=""/>
                                        <span className="link__text">Ask a Colleague</span>  
                                    </a>
                                </li>
                                <li className="navigation__list__item">
                                    <a href="" className="link">
                                        <img className="link__img" src={Images.companies} alt=""/>
                                        <span className="link__text">Companies</span>                                          
                                    </a>
                                </li>
                                <li className="navigation__list__item">
                                    <a href="" className="link">
                                        <img className="link__img" src={Images.services} alt=""/>
                                        <span className="link__text">Service Directory</span>  
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        <Advertisement image={Images.ad1} link={'http://google.com'}/>
                        <Companies/>

                        <div className="copyrights">
                            <p className="copyrights__title">Denteez Copyright 2015</p>
                            <div className="copyrights__block"><a className="copyrights__block__link" href="">Terms of use</a><a className="copyrights__block__link" href="">Privacy Policy</a></div>
                        </div>

                    </aside>


                    <Services/>


                    <aside className="sidebar sidebar--right">
                        <Peoples/>
                        <Products/>
                        <Advertisement image={Images.ad2} link={'http://google.com'}/>
                    </aside>


                </div>
            </main>
        );
    }
}


const Advertisement = (props) => {
    return (
        <div className="advertisement">
            <p className="sidebar__title">Advertisement</p>
            <a href={props.link}>
                <img src={props.image} alt="Ad" className="advertisement__img"/>   
            </a>
            <span className="advertisement__description">Ads By Denteez.com</span>
        </div>
    );
};

class Products extends Component {
    render() {
        return (
            <div className="featured products">
                <p className="sidebar__title">Featured Products<a href="" className="featured__action">See All</a></p>


                <p className="featured__item__title">Product Name</p>
                <div className="featured__item">
                    <img src={Images.dentist} alt="" className="featured__item__img"/>
                    
                    <div className="featured__item__description">
                        <TextEllipsis tag={'p'} tagClass={'featured__item__description__text'} lines={5}>{'Product Short Description. The quick brown fox jumps over the lazy dog.'}</TextEllipsis>
                    </div>
                </div>


                <p className="featured__item__title">Product Name</p>
                <div className="featured__item">
                    <img src={Images.doctor} alt="" className="featured__item__img"/>
                    
                    <div className="featured__item__description">
                        <TextEllipsis tag={'p'} tagClass={'featured__item__description__text'} lines={5}>{'Product Short Description. The quick brown fox jumps over the lazy dog.'}</TextEllipsis>
                        {/* <p className="featured__item__description__text">Product Short Description. The quick brown fox jumps over the lazy dog.</p> */}
                    </div>
                </div>
                

            </div>
        );
    }
};

class Peoples extends Component {
    render() {
        return (
            <div className="featured peoples">
                <p className="sidebar__title">People you may know<a href="" className="featured__action">See All</a></p>


                <p className="featured__item__title">Dennis Adams</p>
                <div className="featured__item">
                    <img src={Images.denis} alt="" className="featured__item__img"/>
                    <div className="featured__item__description">
                        <p className="featured__item__description__text">Dentist (Practice Owner)</p>
                        <p className="featured__item__description__text">Belgrade, Serbia</p>
                        <a href="" className="featured__item__description__action">Add friend</a>
                    </div>
                </div>


                <p className="featured__item__title">Dennis Adams</p>
                <div className="featured__item">
                    <img src={Images.denis} alt="" className="featured__item__img"/>
                    <div className="featured__item__description">
                        <p className="featured__item__description__text">Dentist (Practice Owner)</p>
                        <p className="featured__item__description__text">Belgrade, Serbia</p>
                        <a href="" className="featured__item__description__action">Add friend</a>
                    </div>
                </div>


                <p className="featured__item__title">Dennis Adams</p>
                <div className="featured__item">
                    <img src={Images.mary} alt="" className="featured__item__img"/>  
                    <div className="featured__item__description">
                        <p className="featured__item__description__text">Dentist (Practice Owner)</p>
                        <p className="featured__item__description__text">Belgrade, Serbia</p>
                        <a href="" className="featured__item__description__action">Add friend</a>
                    </div>
                </div>

                
            </div>
        );
    }
};

class Companies extends Component {
    render() {
        return (
            <div className="featured companies">
                <p className="sidebar__title">Featured Companies<a href="" className="featured__action">See All</a></p>


                <div className="featured__item">
                    <img src={Images.firstCompany} alt="" className="featured__item__img"/>
                    <div className="featured__item__description">
                        <p className="featured__item__title">Company Name</p>
                        <p className="featured__item__description__text">Manufacturer</p>
                        <p className="featured__item__description__text">Belgrade, Serbia</p>
                        <a href="" className="featured__item__description__action">Follow Now</a>
                    </div>
                </div>


                <div className="featured__item">
                    <img src={Images.secondCompany} alt="" className="featured__item__img"/>
                    <div className="featured__item__description">
                        <p className="featured__item__title">Company Name</p>
                        <p className="featured__item__description__text">Supplier</p>
                        <p className="featured__item__description__text">London, England</p>
                        <a href="" className="featured__item__description__action">Follow Now</a>
                    </div>
                </div>


                <div className="featured__item">
                    <img src={Images.thirdCompany} alt="" className="featured__item__img"/>
                    <div className="featured__item__description">
                        <p className="featured__item__title">Company Name</p>
                        <p className="featured__item__description__text">Supplier</p>
                        <p className="featured__item__description__text">London, England</p>
                        <a href="" className="featured__item__description__action">Follow Now</a>
                    </div>
                </div>
                

            </div>
        );
    }
};


export default Main;