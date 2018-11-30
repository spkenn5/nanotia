import _ from 'lodash';
import { FETCH_PREVIOUS, FETCH_POST, FETCH_POSTS, FETCH_RELATED } from '../actions';

export default function(state={}, action) {
  switch(action.type){    
    case FETCH_POSTS: {             
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
    }
    case FETCH_PREVIOUS: {      
      const nextData = _.mapKeys(action.payload.data.posts, 'slug');      
      return { ...state, ...nextData };
    }
    case FETCH_POST: {        
      const nextData = _.mapKeys(action.payload.data.posts, 'slug');
      return { ...nextData };
    }
    case FETCH_RELATED: {
      const { posts, current_page, total_pages } = action.payload.data;
      const prevData = state.data ? state.data : [];     
      const nextData = _.mapKeys(action.payload.data.posts, 'slug');
      return { ...state, ...nextData };        
    }
    default:
      return state;
  }
}
