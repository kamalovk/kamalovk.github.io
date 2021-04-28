import axios from 'axios';

const moduleName = 'photos';

let main_url = 'https://jsonplaceholder.typicode.com/photos';
const GET_PHOTOS = `${moduleName}/GET_PHOTOS`;

export const defaultState = {
  photos: [],
};

export default (state = defaultState, { type, payload}) => {
  switch (type) {
    case GET_PHOTOS:
      return {...state, photos: payload.data};
    default:  
      return state;
      
  }
};

export const getPhotos = () => async (dispatch) => {
  try{
    await axios.get(main_url)
      .then((res) => dispatch({type: GET_PHOTOS, payload: res}))
  }
  catch(error){
    console.log(error);
  }
}
