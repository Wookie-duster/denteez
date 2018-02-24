import React, { Component } from 'react';
import Select, { Async } from 'react-select';
import 'react-select/dist/react-select.css';

import './index.scss';

import ModalWindow from '../Modal';

class Form extends Component {

    state = {
        modal: {
            opened: false,
            msg: ''
        },

        other: true,
        value: 'Other',

        type: '',
        email: '',
        name: '',
        subject: '',
        description: '',
        image: '',
        formErrors: { email: '', name: '', type: '', subject: '', description: `(0/1000)`, image: '' },
        emailValid: false,
        nameValid: false,
        typeValid: false,
        subjectValid: false,
        descriptionValid: false,
        imageValid: false,
        formValid: false,
    }

    getOptions = () => {
        return fetch(`https://504080.com/api/v1/directories/enquiry-types`)
            .then((response) => {
                return response.json();
            }).then((result) => {
                //form valid data for react-select
                let options = result.data.map((item) => {
                    return { value: item.name, label: item.name }
                });
                return { options: options };
            });
    }

    onSelectChange = (val) => {

        if (val.value == 'Other') {
            this.state.other = true;
            this.state.value = val.label;

            this.state.type = '';
            this.state.typeValid = false;

            this.setState(this.state);

            this.validateForm();
        } else {
            this.state.value = val.label;
            this.state.other = false;

            this.state.type = val.label;
            this.state.typeValid = true;
            this.state.formErrors.type = '';

            this.setState(this.state);

            this.validateForm();
        }

    }

    handleUserInput = (event) => {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value }, () => { this.validateField(name, value) });
    }

    validateField = (fieldName, value) => {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let nameValid = this.state.nameValid;
        let typeValid = this.state.typeValid;
        let subjectValid = this.state.subjectValid;
        let descriptionValid = this.state.descriptionValid;

        switch (fieldName) {
            case 'email':
                emailValid = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(value);
                fieldValidationErrors.email = emailValid ? '' : 'Email in not valid';
                break;
            case 'name':
                nameValid = value.length >= 2;
                fieldValidationErrors.name = nameValid ? '' : 'Name is empty';
                break;
            case 'type':
                typeValid = value.length >= 2;
                fieldValidationErrors.type = typeValid ? '' : 'Type is empty';
                break;
            case 'subject':
                subjectValid = value.length >= 2;
                fieldValidationErrors.subject = subjectValid ? '' : 'Subject is empty';
                break;
            case 'description':
                descriptionValid = value.length <= 1000 && value.length >= 2;
                fieldValidationErrors.description = `(${value.length}/1000)`;
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            nameValid: nameValid,
            typeValid: typeValid,
            descriptionValid: descriptionValid,
            subjectValid: subjectValid
        }, this.validateForm);
    }

    clearState = () => {
        document.getElementsByName('name')[0].value = '';
        document.getElementsByName('email')[0].value = '';
        document.getElementsByName('subject')[0].value = '';
        document.getElementsByName('description')[0].value = '';


        this.setState({
            other: true,
            value: 'Other',
            type: '',
            email: '',
            name: '',
            subject: '',
            description: '',
            image: '',
            formErrors: { email: '', name: '', type: '', subject: '', description: `(0/1000)`, image: '' },
            emailValid: false,
            nameValid: false,
            typeValid: false,
            subjectValid: false,
            descriptionValid: false,
            imageValid: false,
            formValid: false,
        });
    }

    validateForm = () => {
        this.setState({
            formValid:
                this.state.emailValid &&
                this.state.nameValid &&
                this.state.typeValid &&
                this.state.subjectValid &&
                this.state.descriptionValid &&
                this.state.imageValid
        });
    }

    handleSubmit = () => {
        let form = new FormData();
        form.append('enquiry_type', this.state.type);
        form.append('user_name', this.state.name);
        form.append('email', this.state.email);
        form.append('subject', this.state.subject);
        form.append('description', this.state.description);

        fetch('https://504080.com/api/v1/support', {
            body: form,
            method: 'POST'
        }).then(res => {
            if (res.status >= 400 && res.status < 600) {
                this.state.modal.msg = `Response status ${res.status}. ${res.statusText}`;
                this.state.modal.opened = true;
                this.setState(this.state);
            }
            return res.json()
        }).then(result => {

            if (result.success) {
                this.clearState();
                this.state.modal.opened = true;
                this.state.modal.msg = result.data.message;
            } else {
                this.state.modal.opened = true;
                this.state.modal.msg = 'Something went wrong :(';
            }

            this.setState(this.state);
        }).catch((error) => {
            console.log(error);
        })

    }

    handleCloseModal = () => {
        this.state.modal.opened = false;
        this.setState(this.state);
        document.documentElement.style.overflow = 'auto';
    }
    handleImageUpload = (event) => {
        event.preventDefault();

        let _URL = window.URL || window.webkitURL;
        let file = event.target.files[0];
        let image;

        if (file) {
            image = new Image();
            image.src = _URL.createObjectURL(file);

            image.onload = () => {
                // document.getElementById('image').src = image.src;

                if(image.width <= 300 && image.height <= 300 ) {
                    
                    this.state.formErrors.image = '';
                    this.state.image = file.name;
                    this.state.imageValid = true;

                    this.setState(this.state);

                    this.validateForm();
                     
                } else {
                    document.getElementsByName("image")[0].value = '';

                    this.state.formErrors.image = 'The image does not meet the requirements.';
                    this.state.image = '';
                    this.state.imageValid = false;

                    this.setState(this.state);

                    this.validateForm();
                }
            };
        }

    }

    render() {
        return (
            <div>
                <div className="form">
                    <div className="form__background">
                        <p className="form__requirement">Fields marked “*“ are required</p>

                        <div className="form__group">
                            <label className="form__group__label" htmlFor="">Enquiry Type *</label>
                            <span className="form__group__validation">{this.state.formErrors.type}</span>
                            <Async
                                className="form__group__select"
                                loadOptions={this.getOptions}
                                value={this.state.value}
                                onChange={this.onSelectChange}
                                searchable={false} />
                        </div>

                        {this.state.other ? <div className="form__group">
                            <input onChange={(event) => this.handleUserInput(event)} className="form__group__input" placeholder="Other" name="type" type="text" />
                        </div> : ''}


                        <div className="form__flex">
                            <div className="form__group">
                                <label className="form__group__label" htmlFor="name">Name *</label>
                                <span className="form__group__validation">{this.state.formErrors.name}</span>
                                <input onChange={(event) => this.handleUserInput(event)} className="form__group__input" type="name" name="name" />
                            </div>

                            <div className="form__group">
                                <label className="form__group__label" htmlFor="email">Email *</label>
                                <span className="form__group__validation">{this.state.formErrors.email}</span>
                                <input onChange={(event) => this.handleUserInput(event)} className="form__group__input" type="email" name="email" />
                            </div>
                        </div>

                        <div className="form__group">
                            <label className="form__group__label" htmlFor="subject">Subject *</label>
                            <span className="form__group__validation">{this.state.formErrors.subject}</span>
                            <input onChange={(event) => this.handleUserInput(event)} className="form__group__input" type="subject" name="subject" />
                        </div>

                        <div className="form__group">
                            <label className="form__group__label" htmlFor="description">Description *</label>
                            <span className="form__group__count">{this.state.formErrors.description}</span>
                            <textarea onChange={(event) => this.handleUserInput(event)} className="form__group__textarea" type="description" name="description"></textarea>
                        </div>
                        <div className="form__file">
                            <div className="form__file__zone">
                                {!this.state.image && !this.state.formErrors.image ? <div>
                                    <p className="form__file__zone__title">Add photo</p>
                                    <p className="form__file__zone__description">Maximum size of 300x300 jpeg ipg png 5 MB</p>
                                </div> : ''}

                                {this.state.image ? <div><p className="form__file__zone__description">Image name: {this.state.image}</p></div> : ''}

                                {this.state.formErrors.image ? <div><p className="form__file__zone__title">Error:</p><p className="form__file__zone__description">{this.state.formErrors.image}</p><p className="form__file__zone__description">Maximum size of 300x300 jpeg ipg png 5 MB</p></div> : ''}
                                
                                
                            </div>
                            <input onChange={(event) => this.handleImageUpload(event)} type="file" name="image" accept=".png, .jpg, .jpeg" />
                        </div>
                    </div>

                    <button onClick={this.handleSubmit} disabled={!this.state.formValid} className="form__submit" type="submit">Submit</button>

                </div>
                {this.state.modal.opened ? <ModalWindow close={this.handleCloseModal} msg={this.state.modal.msg} /> : ''}
            </div>
        );
    }
}

export default Form;