import { createHmac } from 'crypto';

// TEMP
export const getSecret = (secret: string, body: string): string =>
  createHmac('sha256', secret).update(body).digest('hex');
