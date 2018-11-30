import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const FETCH_RELATED = 'fetch_related';
export const FETCH_POST = 'fetch_post';
export const FETCH_PREVIOUS = 'fetch_previous';

const ROOT_URL = 'https://www.techinasia.com/wp-json/techinasia/2.0';

export function fetchPosts(page, max) {
  const PARAM = `?page=${page}&per_page=${max}`;
  const request = axios.get(`${ROOT_URL}/posts${PARAM}`);
  
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function fetchPrevious(id){
  const request = axios.get(`${ROOT_URL}/posts/${id}/previous`);

  return {
    type: FETCH_PREVIOUS,
    payload: request
  };
}

export function fetchRelated(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}/related`);

  return { 
    type: FETCH_RELATED,
    payload: request
  };
}

export function fetchPost(slug) {
  const request = axios.get(`${ROOT_URL}/posts/${slug}`);
  
  return {
    type: FETCH_POST,
    payload: request
  };
}
