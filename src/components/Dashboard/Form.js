import React, { useState, useEffect } from 'react';
import { createPost } from './postHandler';
import './styles/form.scss';

const Form = ({ modalHandler, userId, setPost }) => {
    const date = new Date();
    const FORM_SCHEMA = {
        title: '',
        message: '',
        date: date.toISOString(),
        updated: false,
        userId
    }

    const [fromData, onFormChange] = useState(FORM_SCHEMA);

    const onChangeInput = (evt, field) => {
        onFormChange(currentValue => ({
            ...currentValue,
            [field]: evt.target.value
        }));
    };

    const sendPublication = async () => {
        const result = await createPost(fromData);
        setPost(currentValue => [...currentValue, result])

        if(result) {
            return modalHandler();
        }
    }

    return(
        <div className='form-wrapper'>
            <div className='publication-form__input-container'>
                <span>Title</span>
                <input onChange={(evt) => onChangeInput(evt, 'title')} placeholder="Your text here"/>
            </div>
            <div className='publication-form__input-container'>
                <span>Message content</span>
                <textarea onChange={(evt) => onChangeInput(evt, 'message')} placeholder="Message"/>
            </div>
            <div className='publication-form__button-container'>
                <button onClick={() => sendPublication()}>Create Post</button>
            </div>
        </div>
    );
};

export default Form;