import React, { useState, useEffect } from 'react';
import { createPost, updatePost } from './postHandler';
import './styles/form.scss';

const Form = ({ modalHandler, userId, setPost, currentData, isUpdate, getData }) => {
    const date = new Date();
    const FORM_SCHEMA = currentData ? currentData : {
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
        if(isUpdate) {
            const result = updatePost(fromData);
            if(!result) return;

            if(result) {
                getData();
                return modalHandler();
            }
        }

        const result = await createPost(fromData);
        if(!result) return
        setPost(currentValue => [...currentValue, result])

        if(result) {
            return modalHandler();
        }
    }

    useEffect(() => {
        isUpdate && onFormChange(currentValue => ({
            ...currentValue,
            updated: true
        }));
    }, []);

    return(
        <div className='form-wrapper'>
            <div className='publication-form__input-container'>
                <span>Title</span>
                <input 
                    onChange={(evt) => onChangeInput(evt, 'title')} 
                    placeholder="Choose a title"
                    value={fromData.title}
                />
            </div>
            <div className='publication-form__input-container'>
                <span>Message content</span>
                <textarea 
                    onChange={(evt) => onChangeInput(evt, 'message')} 
                    placeholder="Your text here"
                    value={fromData.message}
                />
            </div>
            <div className='publication-form__button-container'>
                <button onClick={() => sendPublication()}>
                    {isUpdate ? 'Update Publication': 'Create Post'}
                </button>
            </div>
        </div>
    );
};

export default Form;