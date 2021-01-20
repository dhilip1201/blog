import React, { useEffect, useState } from 'react';
import './style.css';
import Card from '../../components/UI/Card';
import BlogPost from '../../components/BlogPost';
import Sidebar from '../../components/Sidebar';
import Layout from '../../components/Layout';
import { useDispatch, useSelector } from "react-redux";
import { getAllBlog } from '../../actions';

/**
* @author
* @function Post
**/

const Post = (props) => {

  // const blog = useSelector((state) => state.blog);
  // const dispatch = useDispatch()
  // const [blogDetail, setBlogDetail] = useState([])
  // useEffect(() => {
  //   setBlogDetail(blog)
  // }, [])
  //   console.log(blog);
  //   useEffect(() => {
  //     dispatch(getAllBlog())
  //   }, [])

  return(
    

        <Layout>
          <BlogPost {...props} />
        </Layout>
   )

 }

export default Post;