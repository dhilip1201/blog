import { blogConstants, commentConstants } from "../actions/constants";
const initState = {
  comments: [],
  loading: false,
  error: "",
};
export const commentReducers = (state = initState, action) => {


  const buildNewComments = (parentId, comments, comment) => {
    let myComments = [];
    if (parentId == undefined) {
      return [
        ...comments,
        {
          _id: comment._id,
          email: comment.email,
          comments: comment.comments,
          blogId: comment.blogId
        },
      ];
    }
    for (let cat of comments) {
      if (cat._id == parentId) {
        myComments.push({
          ...cat,
          children:
            cat.children 
              ? buildNewComments(
                  parentId,
                  [
                    ...cat.children,
                    {
                        _id: comment._id,
                        email: comment.email,
                        comments: comment.comments,
                        blogId: comment.blogId
                    },
                  ],
                  comment
                )
              : [],
        });
      } else {
        myComments.push({
          ...cat,
          children:
            cat.children
              ? buildNewComments(parentId, cat.children, comment)
              : [],
        });
      }
    }
    return myComments;
  };

  switch (action.type) {
    case commentConstants.GET_ALL_COMMENT_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case commentConstants.GET_ALL_COMMENT_SUCCESS:
      state = {
        ...state,
        comments: action.payload.comments,
        loading: false,
      };
      break;
    case commentConstants.GET_ALL_COMMENT_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
      };
      break;

    case commentConstants.ADD_COMMENT_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case commentConstants.ADD_COMMENT_SUCCESS:
      const comment = action.payload.comment;
      const updatedComments = buildNewComments(
        comment.parentId,
        state.comments,
        comment
      );
      console.log(updatedComments);
      state = {
        ...state,
        comments: updatedComments,
        loading: false,
      };
      break;
    case commentConstants.ADD_COMMENT_FAILURE:
      state = {
        ...initState,
        error: action.payload.error,
      };
      break;

      


  }
  return state;
};
