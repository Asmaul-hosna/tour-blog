import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css';

const Post = () => {
    return (
        <div className='post'>
            <img
             className='postImg'
              src="https://wallpaperaccess.com/full/14736.jpg" 
              alt=""
              />
              <div className='postInfo'>
                  <div className='postCats'>
                      <div className='postCat'>
                      <Link className='link' to="/posts?cat=music"> 
                      Music
                      </Link>
                    <Link className='link' to="/posts?cat=life"> Life
                      </Link>
                      </div>
                     
                      <div className='postTitle'>
                          <Link className='link' to="/posts?cat=life"> 
                          lorum ispum dollar sit amet</Link>
                          </div>
                    <div className='postDate'>1 hour ago</div>
                      </div>
                     <p className='postDes'>
                Sometimes it is hard to introduce yourself because you know yourself 
                so well that you know where to start.</p>
                <button className='postBtn'>Read More</button>
            </div>
        </div>
    );
};

export default Post;