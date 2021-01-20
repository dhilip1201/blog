import React, { useState, useEffect } from "react";
import "./style.css";
import Card from "../UI/Card";
import { useDispatch, useSelector } from "react-redux";
import {Container, Row, Col,Form, Button} from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import { addComment } from "../../actions";

/**
 * @author
 * @function BlogPost
 **/

const BlogPost = (props) => {
  const blog = useSelector(state => state.blog);
  const dispatch = useDispatch()
  const date = new Date();
  const [buttonOpen, setButtonOpen] = useState(false);

  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");
  const [blogId, setBlogId] = useState("");
  const commentForm =(e)=>{
    e.preventDefault();
    const user ={
      email, comments, blogId
    }
    
    dispatch(addComment(user));

    setEmail("");
    setComments("");
  }
  const setIdValue = (id) =>{
    console.log(id)
    setButtonOpen(true);
    setBlogId(id)
  }
  const [post, setPost] = useState({
    id: "",
    blogCategory: "",
    blogTitle: "",
    postedOn: "",
    author: "",
    blogImage: "",
    blogText: "",
  });
  
  const [slug, setSlug] = useState("");
  useEffect(() => {
    const slug = props.match.params.slug;
    const post = blog.blogs.find((post) => post.slug == slug);
    setPost(post);
    setSlug(slug);
  }, [post, props.match.params.slug]);
  

  console.log(slug)
  console.log(post)
  
  const renderGetAllPost =()=>{
    return(
      <>
      { blog.blogs.map((post, index)=>
      <Card>
        <div className="blogHeader">
          <span className="blogCategory">{post.blogCategory}</span>
          <h1 className="postTitle">{post.blogTitle}</h1>
          <span className="postedBy">
            posted on  {post.author}{date.toDateString(post.createdAt)}
          </span>
        </div>

        <div className="postImageContainer">
          <img
            src={post.blogImage}
            alt="Post Image"
          />
        </div>

        <div className="postContent">
          <h3>{post.blogTitle}</h3>
          <p>{post.blogText}</p>
        </div>
        <div className="comment_button">
        
        <button onClick={()=>setIdValue(post._id)}>Comments</button>
         </div>
         {
          buttonOpen ? 
          <>
          <div className="comments_box">
            <p className="closeButton" onClick={()=> setButtonOpen(false)}>X</p>
            <Container style={{display:"flex",flexDirection:"column"}}>
            <Form onSubmit={commentForm}>
  <Form.Group >
    <Form.Control type="text" value={blogId} onClick={(e)=>setBlogId(post._id)} disabled />
    {/* <p>{post._id}</p> */}
  </Form.Group>
  <Form.Group >
    <Form.Control type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Enter your email" />
  </Form.Group>       
  <Form.Group >
  <Form.Control as="textarea" value={comments} onChange={(e)=> setComments(e.target.value)} placeholder="Enter your comments..." rows={3} />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
            </Container>
            
            
            
            
          </div>
          </>
          : null
        }

      </Card>
  )}
      </>
    
    
 

    
    )
  }

  const getId =(ids)=>{
    setBlogId(ids);
  }
const renderGetAllSlugPost =()=>{
    return(
      <>
      <Card>
        <div className="blogHeader">
          <span className="blogCategory">{post.blogCategory}</span>
          <h1 className="postTitle">{post.blogTitle}</h1>
          <span className="postedBy">
            posted on  {post.author}{date.toDateString(post.createdAt)}
          </span>
        </div>

        <div className="postImageContainer">
          <img
            src={post.blogImage}
            alt="Post Image"
          />
        </div>

        <div className="postContent">
          <h3>{post.blogTitle}</h3>
          <p>{post.blogText}</p>
        </div>


        <div className="comment_button">
        <button onClick={()=>setIdValue(post._id)}>Comments</button>
        </div>
        {
          buttonOpen ? 
          <>
          <div className="comments_box">
            <p className="closeButton" onClick={()=> setButtonOpen(false)}>X</p>
            <Container style={{display:"flex",flexDirection:"column"}}>
            <Form onSubmit={commentForm}>
  <Form.Group >
    <Form.Control type="text" value={blogId} onClick={(e)=>setBlogId(post._id)} disabled />
    {/* <p>{post._id}</p> */}
  </Form.Group>
  <Form.Group >
    <Form.Control type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Enter your email" />
  </Form.Group>       
  <Form.Group >
  <Form.Control as="textarea" value={comments} onChange={(e)=> setComments(e.target.value)} placeholder="Enter your comments..." rows={3} />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
            </Container>
            
            
            
            
          </div>
          </>
          : null
        }
        
      </Card>
  
    
 

    </>
    )
  }
  return (
    <div className="blogPostContainer">
    {
      slug ? renderGetAllSlugPost() : renderGetAllPost()
    }
    
    </div>

    
    

    
  );
};

export default BlogPost;
