import axios from 'axios';

const moduleName = 'profile';

let main_url = 'https://jsonplaceholder.typicode.com/users/1';
const GET_PROFILE = `${moduleName}/GET_PROFILE`;

export const defaultState = {
  profile: [],
};

export default (state = defaultState, { type, payload}) => {
  switch (type) {
    case GET_PROFILE:
      return {...state, profile: payload.data};
    default:  
      return state;
      
  }
};

export const getProfile = () => async (dispatch) => {
  try{
    await axios.get(main_url)
      .then((res) => dispatch({type: GET_PROFILE, payload: res}))
  }
  catch(error){
    console.log(error);
  }
}
