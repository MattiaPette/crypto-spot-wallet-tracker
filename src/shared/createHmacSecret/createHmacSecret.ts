import { createHmac } from 'crypto';
import { CreateHmacSecret } from './createHmacSecret.model';

const createHmacSecret: CreateHmacSecret = (secret, body) =>
  createHmac('sha256', secret).update(body).digest('hex');

export default createHmacSecret;
