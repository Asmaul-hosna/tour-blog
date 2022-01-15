import React from 'react';
import { Link } from 'react-router-dom';
import './SinglePost.css';

const SinglePost = () => {
    return (
        <div className='singlePost'>
          <div className='singlePostWrapper'>
          <img className='singlePostImg' 
          src="https://images.unsplash.com/photo-1541110729715-84eeda8be2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFuZHNjYXBlJTIwdmlld3xlbnwwfHwwfHw%3D&w=1000&q=80" 
          alt=""
          />
          <h1 className='singlePostTitle'>
              Lorum espum dollar emet
              <div className='singlePostIcons'>
              <i className="singlePostIcon far fa-edit"></i>
              <i className="singlePostIcon fas fa-trash-alt"></i>
              </div>
              </h1>
              <div className='singlePostInfo'>
                  <span> 
                      Author:
                      <b className='singlePostAuthor'>
                          <Link className='link' to="post?username=m.lisa">M.Lisa
                              </Link>
                              </b>
                              </span>
                         <span className='singlePostHour'>1 hour ago</span>
              </div>
              <p className='singlePostDes'>
              Sometimes it is hard to introduce yourself because you know yourself 
                so well that you do not know where to start with. Let me give a try 
                to see what kind of image youhave about me through my self-description.
                I hope that my impression about myself and your impression about me are
                 not so different. Here it goes. Sometimes it is hard to introduce yourself 
                so well that you do not know where to start with. Let me give a try 
                to see what kind of image youhave about me through my self-description.
                I hope that my impression about myself and your impression about me are
                 not so different. Here it goes. Sometimes it is hard to introduce yourself 
                so well that you do not know where to start with. Let me give a try 
                to see what kind of image youhave about me through my self-description.
                I hope that my impression about myself and your impression about me are
                 not so different. Here it goes. Sometimes it is hard to introduce yourself 
                so well that you do not know where to start with. Let me give a try 
                to see what kind of image youhave about me through my self-description.
                I hope that my impression about myself and your impression about me are
                 not so different. Here it goes.

              </p>
        </div>
        </div>
    );
};

export default SinglePost;