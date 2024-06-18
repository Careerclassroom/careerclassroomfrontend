import { getBlogId } from "../actions/actionTypes";

const initialState = {};

export const getBLOGIdfromUser = (state = initialState, action) => {
    switch(action.type){
        case getBlogId.GET_BLOG_ID :
            return action.payload
        case getBlogId.REMOVE_BLOG_ID:
            return action.payload
        default :
            return state
    }
        
};