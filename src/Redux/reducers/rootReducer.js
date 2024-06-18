import { combineReducers } from 'redux';

import { getSellerIdFromAuthentication} from './getSellerIdFromAuthReducer';
import { getPayIdfromUser } from './getPayIdRoot';
import { getBLOGIdfromUser } from './getBlogRoot';

const rootReducer = combineReducers({
    
    get_seller_profile_id: getSellerIdFromAuthentication,
    get_pay_id:getPayIdfromUser,
    get_blog_id:getBLOGIdfromUser

});
export default rootReducer;