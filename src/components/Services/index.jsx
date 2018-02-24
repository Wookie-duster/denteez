import React, { Component } from 'react';
import Dotdotdot from 'react-dotdotdot';

import './index.scss';

import Images from '../../static/img';

import ModalWindow from '../Modal';

class Services extends Component {
    
    AUTH_TOKEN = '788f7b202758c18bad684c4876a30b720d8da798';

    state = {
        categories: [],
        errorModal: {
            opened: false,
            msg: '',
        }
    }

    fetchCategories = () => {
        fetch('http://504080.com/api/v1/services/categories', {
            headers: {
                'Authorization': this.AUTH_TOKEN
            },
            method: 'GET'
        }).then(res => {
            if (res.status >= 400 && res.status < 600) {
                this.state.errorModal.msg = `Response status ${res.status}. ${res.statusText}`;
                this.state.errorModal.opened = true;
                this.setState(this.state);         
            }
            return res.json()
         }).then(result => {
            result.data ? this.state.categories = result.data : '';
            
            this.setState(this.state);
        }).catch((error) => {
            console.log(error);
        })
    }

    closeErrorModal = () => {
        this.state.errorModal.opened = false;
        this.setState(this.state);
    }

    componentDidMount() {
        this.fetchCategories();
    }
    

    render() {
        return (
            <section className="services">

                <div className="services__add">
                    <p className="services__add__title">Service Directory</p>
                    <button className="services__add__btn">Add New Service</button>
                </div>

                <div className="services__content">
                    {this.state.categories.map((item, i) => {
                        
                        return <a key={i} href="" className="content__service">
                            <div className="content__service__img"><img src={'http://' + item.icon} alt=""/></div>
                            <Dotdotdot tagName={'p'} clamp={2} className="content__service__title">{item.title}</Dotdotdot>
                        </a>
                    })}
                </div>
                {this.state.errorModal.opened ? <ModalWindow close={this.closeErrorModal} msg={this.state.errorModal.msg}/> : ''}
            </section>
        );
    }
}


// const ModalWindow = (props) => {
//     return (
//         <div className="modal">
//             <div className="modal__body">
//                 <div onClick={props.close} className="modal__body__close"><img src={Images.cross} alt="" className="modal__body__close__img"/></div>
//                 <p className="modal__body__title">Error</p>
//                 <p className="modal__body__text">{props.msg}</p>
//             </div>
            
//         </div>
//     );
// };

export default Services;