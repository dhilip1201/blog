import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Card from '../../components/UI/Card';
import './style.css'

/**
* @author
* @function Home
**/

const Home = (props) => {
  const date = new Date();
  const blog = useSelector(state => state.blog);
  
  const [posts, setPosts] = useState([]);
  useEffect(() => {
      const posts = blog.blogs;
      setPosts(posts);
  }, []);
  console.log(blog)
  return(
    <>
    <div style={{display:"flex"}}>
    <div style={{width:"70%"}}>
      <div >
      {
      blog.blogs.map((post,index) => 
      <NavLink key={post.id} to={`/post/${post.slug}`}>
      <div className="responsive">
      <div className="gallery" >
        
          <img src={post.blogImage} alt="Forest" width="300" height="200" />
        
        <div className="desc" >{post.blogTitle}</div>
        <p className="desc_date">{date.toString(post.createdAt)}</p>
      </div>
      
    </div>
    </NavLink>


      

      )
    }
      </div>
   
    </div>
    <div style={{width:"30%"}}>
    <Card style={{ marginTop: '30px', padding: '20px', boxSizing: 'border-box' }}>
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
    </div>
    
    
    </>
    
    
      
    
   )

 }

export default Home