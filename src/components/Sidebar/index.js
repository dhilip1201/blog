import React, { useState, useEffect } from 'react';
import './style.css';
import Card from '../UI/Card';

import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {
    const date = new Date();
    const blog = useSelector(state => state.blog)
    console.log(blog)
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const posts = blog.blogs;
        setPosts(posts);
    }, [posts]);



  return(
      <div className="sidebarContainer" style={{
          width: props.width
      }}>
            

            {/* <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <span>Social Network</span>
                </div>
            </Card> */}

            <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <span>Recent Posts</span>
                </div>

                <div className="recentPosts">

                    {
                        posts.map(post => {
                            return (
                                <NavLink key={post.id} to={`/post/${post.slug}`}>
                                    <div className="recentPost">
                                        <h3>{post.blogTitle}</h3>
                                        <span>{date.toDateString(post.createdAt)}</span>
                                    </div>
                                </NavLink>
                                
                            );
                        })
                    }
                </div>

            </Card>
      </div>
    
   )

 }

export default Sidebar