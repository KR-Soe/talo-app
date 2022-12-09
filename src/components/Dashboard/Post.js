import './styles/post.scss';
import Modal from './../Modal';
import { deletePublication } from './postHandler';
import React, { useState } from 'react';
import From from './Form';
const editLogo = require('./../../assets/images/edit.png');

const Post = ({ post, setPost, getData }) => {
    const [shouldBeShown, openModal] = useState(false);
    const [editModal, onEdit] = useState(false);
    const { title, message, date, userId, updated } = post;
    const postData = {
        title,
        message,
        date,
        updated,
        userId,
        id: post['_id']
    }

    const modalHandler = () => {
        openModal(!shouldBeShown);
    }

    const deleteHandler = async () => {
        await deletePublication(postData.id);
        setPost((currentValue) => {
            const posts = [...currentValue];
            return posts.filter(item => item['_id'] !== postData.id);
        });
        modalHandler();
    }

    return(
        <div className='post-wrapper'>
            {
                shouldBeShown && (
                    <Modal
                        title={'Delete post'}
                        modalHandler={modalHandler} 
                        shouldBeShown={shouldBeShown}
                    >
                        <div className='delete-section'>
                            <span>Are you sure to delete this post?</span>
                            <div className='delete-section__button-container'>
                                <button className='delete-section__button-container__yes-button' onClick={() => deleteHandler()}>Yes</button>
                                <button className='delete-section__button-container__no-button' onClick={() => modalHandler()}>No</button>
                            </div>
                        </div>
                    </Modal>
                )
            }
            {
                editModal && (
                    <Modal
                        title={'Edit post'}
                        modalHandler={onEdit} 
                        shouldBeShown={editModal}
                    >
                        <From 
                            modalHandler={onEdit} 
                            userId={userId} 
                            setPost={setPost}
                            currentData={postData}
                            isUpdate={true}
                            getData={getData}
                        />
                    </Modal>
                )
            }
            <div className='post-content'>
                <div className='post-content__header'>
                    <span>{title}</span>
                    <div className='edit-post'>
                        <img src={editLogo} onClick={() => onEdit(true)}/>
                    </div>
                    <div className='trash-can' onClick={() => modalHandler(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                        </svg>
                    </div>
                </div>
                <div className='post-content__body'>
                    <span>{message}</span>
                </div>
            </div>
        </div>
    );
};


export default Post;