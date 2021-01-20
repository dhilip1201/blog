import axiosInstance from "../helpers/axios"
import { blogConstants } from "./constants";

export const getAllBlog= () =>{
    return async (dispatch) =>{
        dispatch({type: blogConstants.GET_ALL_BLOG_REQUEST});
        const res = await axiosInstance.get('/blog/getBlogs');
        console.log(res)
        if(res.status === 200){
            const {blogs} = res.data
            // console.log({blogs})
            
            dispatch({
                type:blogConstants.GET_ALL_BLOG_SUCCESS,
                payload:{
                    blogs: blogs
                }
            })
        }else{
            dispatch({
                type:blogConstants.GET_ALL_BLOG_FAILURE,
                payload:{
                    error: res.data.error
                }
            })
        }
    }
}
