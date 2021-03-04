import createHmacSecret from '../shared/createHmacSecret/createHmacSecret';
import makeRequest from '../shared/makeRequest/makeRequest';
import stringifyRequestBody from '../shared/stringifyRequestBody/stringifyRequestBody';

import { Binance, BinanceAllOrders, ServerTime } from './binance.model';

const binance = (baseUrl: string, apikey: string, secret: string): Binance => {
  // eslint-disable-next-line @typescript-eslint/ban-types
  const ping = () => makeRequest<{}>(`${baseUrl}/ping`, { method: 'GET' });

  const time = () =>
    makeRequest<ServerTime>(`${baseUrl}/time`, { method: 'GET' });

  const allOrders: BinanceAllOrders = params => {
    const body = stringifyRequestBody(params);

    return makeRequest(
      `${baseUrl}/allOrders?${body}&signature=${createHmacSecret(
        secret,
        body,
      )}`,
      {
        method: 'GET',
        headers: {
          'X-MBX-APIKEY': apikey,
        },
      },
    );
  };

  return {
    ping,
    time,
    allOrders,
  };
};

export default binance;
