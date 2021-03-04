import createHmacSecret from '../shared/createHmacSecret/createHmacSecret';
import makeRequest from '../shared/makeRequest/makeRequest';
import stringifyRequestBody from '../shared/stringifyRequestBody/stringifyRequestBody';

import {
  Binance,
  BinanceAllOrders,
  BinanceExchangeInfo,
  BinancePing,
  BinanceTime,
} from './binance.model';

const binance = (baseUrl: string, apikey: string, secret: string): Binance => {
  const ping: BinancePing = () =>
    makeRequest(`${baseUrl}/ping`, { method: 'GET' });

  const time: BinanceTime = () =>
    makeRequest(`${baseUrl}/time`, { method: 'GET' });

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

  const exchangeInfo: BinanceExchangeInfo = () =>
    makeRequest(`${baseUrl}/exchangeInfo`, {
      method: 'GET',
    });

  return {
    ping,
    time,
    exchangeInfo,
    allOrders,
  };
};

export default binance;
