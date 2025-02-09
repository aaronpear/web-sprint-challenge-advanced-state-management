import axios from 'axios';

export const FETCH_SMURFS = "FETCH_SMURFS";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAIL = "FETCH_SMURFS_FAIL";
export const ADD_SMURF = "ADD_SMURF";
export const SET_ERROR_MSG = "ADD_ERROR_MSG";

export const fetchSmurfs = () => dispatch => {
    dispatch({ type: FETCH_SMURFS });
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        console.log(res)
        dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data })})
      .catch(err => dispatch({ type: FETCH_SMURFS_FAIL, payload: err }));
  };

export const addSmurf = (smurf) => {
    return ({ type: ADD_SMURF, payload: smurf })
}

export const setError = (msg) => {
    return ({ type: SET_ERROR_MSG, payload: msg })
}
//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.