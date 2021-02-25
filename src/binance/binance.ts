import makeRequest from '../shared/makeRequest/makeRequest';
import { Binance, ServerTime } from './binance.model';

const binance = (baseUrl: string): Binance => {
  // eslint-disable-next-line @typescript-eslint/ban-types
  const ping = () => makeRequest<{}>(`${baseUrl}/ping`, { method: 'GET' });

  const time = () =>
    makeRequest<ServerTime>(`${baseUrl}/time`, { method: 'GET' });

  return {
    ping,
    time,
  };
};

export default binance;
