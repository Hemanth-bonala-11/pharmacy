// uploadActions.js
import axios from 'axios';
import {
  UPLOAD_FILE_REQUEST,
  UPLOAD_FILE_SUCCESS,
  UPLOAD_FILE_FAILURE,
} from './uploadActionTypes';

const uploadFileRequest = () => ({
  type: UPLOAD_FILE_REQUEST,
});

const uploadFileSuccess = (file) => ({
  type: UPLOAD_FILE_SUCCESS,
  payload: { file },
});

const uploadFileFailure = (error) => ({
  type: UPLOAD_FILE_FAILURE,
  payload: { error },
});

export const uploadFile = (file) => async (dispatch) => {
  dispatch(uploadFileRequest());

  try {
    // Dispatch an API request to upload the file and get the response
    const response = await axios.post('YOUR_DJANGO_UPLOAD_API_ENDPOINT', file);

    // Assuming your Django server responds with a success message and the file details
    dispatch(uploadFileSuccess(response.data.file));

    // Return the file details in case you need them in the component
    return response.data.file;
  } catch (error) {
    dispatch(uploadFileFailure(error.message));
  }
};
