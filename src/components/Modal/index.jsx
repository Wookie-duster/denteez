import React from 'react';

import './index.scss';

import Images from '../../static/img';

const ModalWindow = (props) => {
    document.documentElement.style.overflow = 'hidden';
    
    return (
        <div className="modal">
            <div className="modal__body">
                <div onClick={props.close} className="modal__body__close"><img src={Images.cross} alt="" className="modal__body__close__img"/></div>
                <p className="modal__body__title">Result</p>
                <p className="modal__body__text">{props.msg}</p>
            </div>
            
        </div>
    );
};

export default ModalWindow;