import fetch from 'node-fetch';

import { MakeRequest } from './makeRequest.model';

const makeRequest: MakeRequest = async (url, params) => {
  const response = await fetch(url, params);

  const data = await response.json();

  return data;
};

export default makeRequest;
