import _ from 'lodash';
import { FETCH_POST, FETCH_POSTS, FETCH_RELATED } from '../actions';

export default function(state={}, action) {
  switch(action.type){    
    case FETCH_POSTS: {       
      console.log('DEBUG -> ', action);               
      const { posts, current_page, total_pages } = action.payload.data;
      const prevData = state.data ? state.data : [];
      return {
        data: [
          ...prevData,
          ...posts
        ],
        totalPage: total_pages,
        currentPage: current_page,
        hasMore: current_page < total_pages,
        loading: false
      };
      return {
        data: [
          ...prevData,
          ...posts
        ],
        totalPage: total_pages,
        currentPage: current_page,
        hasMore: current_page < total_pages,
        loading: false
      };
    }
    case FETCH_POST: {
      const { posts, current_page, total_pages } = action.payload.data;
      const prevData = state.data ? state.data : []; 
      console.log('DEBUG --> ', action.payload);
      return { ...state, [action.payload.data.posts[0].slug]: action.payload.data.posts[0] };     
      return {  
        data: posts[0],
        currentPage: current_page,
        totalPage: total_pages,
        hasMore: true,
        loading: false,
        error: false
      };
    }
    case FETCH_RELATED: {
      const { posts, current_page, total_pages } = action.payload.data;
      const prevData = state.data ? state.data : [];      

      return {  
        related: posts,
        currentPage: current_page,
        totalPage: total_pages,
        hasMore: true,
        loading: false,
        error: false
      };
    }
    default:
      return state;
  }
}
