import './styles/post.scss';

const Post = ({ title, message }) => {
    return(
        <div className='post-wrapper'>
            <div className='post-content'>
                <div className='post-content__header'>
                    <span>{title}</span>
                </div>
                <div className='post-content__body'>
                    <span>{message}</span>
                </div>
            </div>
        </div>
    );
};


export default Post;