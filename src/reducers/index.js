import { combineReducers } from "redux";
import { authReducers } from "./auth.reducers";
import { blogReducers } from "./blog.reducers";
import { commentReducers } from "./comment.reducers";


const rootReducer = combineReducers({
    comment:commentReducers,
    blog:blogReducers,
    auth: authReducers
})

export default rootReducer;