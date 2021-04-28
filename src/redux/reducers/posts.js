import axios from 'axios';

const moduleName = 'posts';

let main_url = 'https://jsonplaceholder.typicode.com/posts';
const GET_POSTS = `${moduleName}/GET_POSTS`;

export const defaultState = {
  posts: [],
};

export default (state = defaultState, { type, payload}) => {
  switch (type) {
    case GET_POSTS:
      return {...state, posts: payload.data};
    default:  
      return state;
      
  }
};

export const getPosts = () => async (dispatch) => {
  try{
    await axios.get(main_url)
      .then((res) => dispatch({type: GET_POSTS, payload: res}))
  }
  catch(error){
    console.log(error);
  }
}
