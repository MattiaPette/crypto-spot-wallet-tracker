import { config } from 'dotenv';
config();

import { binance } from './binance';

const {
  env: { APIKEY: apikey = '', SECRET: secret = '', ENDPOINT: baseUrl = '' },
} = process;

if (!apikey || !secret || !baseUrl) {
  throw new Error('SERVER_MISCONFIGURATION');
}

const api = binance(baseUrl);

async function main() {
  // TODO: make sure this throws
  const alive = await api.ping();

  if (!alive) {
    throw new Error('SERVER_STARTUP_ERROR');
  }

  // TODO: make a better logging utility
  console.log('Server startup completed');
}

main();
