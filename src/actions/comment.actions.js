import axiosInstance from "../helpers/axios"
import {  commentConstants } from "./constants";

export const getAllComments= () =>{
    return async (dispatch) =>{
        dispatch({type: commentConstants.GET_ALL_COMMENT_REQUEST});
        const res = await axiosInstance.get('/comment/getcomments');
        console.log(res)
        if(res.status === 200){
            const {comments} = res.data
            
            dispatch({
                type:commentConstants.GET_ALL_COMMENT_SUCCESS,
                payload:{
                    comments: comments
                }
            })
        }else{
            dispatch({
                type:commentConstants.GET_ALL_COMMENT_FAILURE,
                payload:{
                    error: res.data.error
                }
            })
        }
    }
}

export const addComment = (user)=>{
    return async dispatch =>{
        
        dispatch({type: commentConstants.ADD_COMMENT_REQUEST});
        const res = await axiosInstance.post('/comment/create',{
            ...user
        });
        if(res.status === 201){
            dispatch({
                type: commentConstants.ADD_COMMENT_SUCCESS,
                payload: {
                    comment:res.data.comment
                }
            })
        }else{
            dispatch({
                type: commentConstants.ADD_COMMENT_FAILURE,
                payload:{
                    error: res.data.error
                }
            })
        }
    }
}
