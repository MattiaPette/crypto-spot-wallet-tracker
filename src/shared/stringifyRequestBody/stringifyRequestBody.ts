import { StringifyRequestBody } from './stringifyRequestBody.model';

const stringifyRequestBody: StringifyRequestBody = params => {
  return Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
};

export default stringifyRequestBody;
