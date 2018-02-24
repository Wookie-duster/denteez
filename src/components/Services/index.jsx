import React, { Component } from 'react';
import TextEllipsis from 'react-text-ellipsis';

import './index.scss';

import Images from '../../static/img';

import ModalWindow from '../Modal';

class Services extends Component {
    
    AUTH_TOKEN = 'a4c8494b2766f315c89fa367cdc779f317f624e1';

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
                            <TextEllipsis tag={'p'} tagClass={'content__service__title'} lines={2}>{item.title}</TextEllipsis>
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