// uploadReducer.js
import {
    UPLOAD_FILE_REQUEST,
    UPLOAD_FILE_SUCCESS,
    UPLOAD_FILE_FAILURE,
  } from './uploadActionTypes';
  
  const initialState = {
    uploading: false,
    uploadedFile: null,
    error: null,
  };
  
  const uploadReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPLOAD_FILE_REQUEST:
        return {
          ...state,
          uploading: true,
          error: null,
        };
      case UPLOAD_FILE_SUCCESS:
        return {
          ...state,
          uploading: false,
          uploadedFile: action.payload.file,
          error: null,
        };
      case UPLOAD_FILE_FAILURE:
        return {
          ...state,
          uploading: false,
          error: action.payload.error,
        };
      default:
        return state;
    }
  };
  
  export default uploadReducer;
  