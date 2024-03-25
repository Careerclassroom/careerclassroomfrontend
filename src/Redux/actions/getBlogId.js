import { getBlogId} from "./actionTypes";

export const getBlog = (blog_id) => {
    return {
        type: getBlogId.GET_BLOG_ID,
        payload: {
            blog_id,
            
      
        }
        
    };
};

export const removeBlog = (removed) => {
    return {
        type: getBlogId.REMOVE_BLOG_ID,
        payload: removed
    };
};