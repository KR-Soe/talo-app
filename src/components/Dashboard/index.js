import './styles/dashboard.scss';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Post from './Post';
import Modal from './../Modal';
import Form from './Form';
const { getPosts } = require('./postHandler');
const logo = require('./../../assets/images/logo-blanco.png');
const contactLogo = require('./../../assets/images/contact-mail.png');
const userLogo = require('./../../assets/images/user.png');
const emailLogo = require('./../../assets/images/email.png');

function Dashboard() {
  const [userData, setUser] = useState({});
  const [shouldBeShown, openModal] = useState(false);
  const [userPosts, setPost] = useState([]);
  const navigate = useNavigate();

  const getData = async () => {
    const data = await getPosts(userData.id);
    setPost(await data)
  }

  useEffect(() => {
    const userLogged = localStorage.getItem('user');

    if(!userLogged) navigate('/')

    if(userLogged) {
      const user = JSON.parse(userLogged)
      setUser(user);
    };

  }, []);

  useEffect(() => {
    getData();
  }, [userData])

  const logoutHandler = () => {
    setUser({});
    localStorage.clear();
    navigate('/');
  }

  const modalHandler = () => {
    openModal(!shouldBeShown);
  }
  
  return (
    <div className="dashboard-wrapper">
      {
        shouldBeShown && (
          <Modal 
            title={'Create new publication'}
            modalHandler={modalHandler} 
            shouldBeShown={shouldBeShown}
          >
              <Form modalHandler={modalHandler} userId={userData.id} setPost={setPost}/>
          </Modal>
        )
      }
      <div className='dashboard-aside'>
        <div className='aside-content'>
          <div className='aside-content__image-container'>
            <img className='aside-content__image-container__logo' src={logo}/>
          </div>
          <div className='aside-content__field'>
            <img className='aside-content__field__logo' src={userLogo} />
            <p>{userData.username}</p>
          </div>
          <div className='aside-content__field'>
            <img className='aside-content__field__logo' src={emailLogo} />
            <p>{userData.email}</p>
          </div>
          <div className='aside-content__field'>
            <img className='aside-content__field__logo' src={contactLogo}/>
            <a href='https://www.talo.cl' target='_blank'>Contact us</a>
          </div>
          <div className='aside-content__logout'>
            <button onClick={() => logoutHandler()}>LOG OUT</button>
          </div>
        </div>
      </div>
      <div className='dashboard-content'>
        <div className='dashboard-content__wrapper'>
          <div className='dashboard-content__nav-bar'>
            <div className='dashboard-content__nav-bar__title'>
              <h1>YOUR PERSONAL CONTENT</h1>
            </div>
            <div className='dashboard-content__nav-bar__post-wrapper'>
              <button className='dashboard-content__nav-bar__post-wrapper__post-button' onClick={() => modalHandler()}>
                New Post
              </button>
            </div>
          </div>
          <div 
            className='dashboard-content__publication-wrapper'
            style={{
              gridTemplateColumns: 'repeat(3, 1fr)',
              gridTemplateRows: `repeat(${Math.ceil(userPosts.length/3)}, 260px)`
            }}
          >
            {
              userPosts.map((post, i) => {
                return (
                  <Post 
                    key={`post-${i}`}
                    title={post.title}
                    message={post.message}
                  />
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}
  
export default Dashboard;