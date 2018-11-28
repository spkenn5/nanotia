import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ArticleReducer from './article_reducer';

const rootReducer = combineReducers({
  posts: ArticleReducer,
  form: formReducer
});

export default rootReducer;
