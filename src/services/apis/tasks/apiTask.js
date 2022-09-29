import axios from 'axios';
import buildRequest from '../buildRequest';
import { typesEndpoint } from '../../../common/types';

export const apiGetTasks = async params => {
  const url = `${process.env.REACT_APP_api}${typesEndpoint.getTareas}`;
  const method = 'get';
  const dataResponse = {
    success: false,
    statusCode: 0,
    message: '',
    data: [],
  };

  const request = {};

  try {
    const response = await axios[method](url, buildRequest(request));
    const { status, data } = response;
    dataResponse.success = true;
    dataResponse.data = data.data;
    dataResponse.statusCode = status;
  } catch (error) {
    dataResponse.message =
      'No se pudieron cargar las tareas, intentelo más tarde.';
    dataResponse.data = error;
    dataResponse.statusCode = error.response?.status;
  }
  return dataResponse;
};
