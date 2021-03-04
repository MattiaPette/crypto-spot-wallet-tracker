import {
  BinanceRateLimiterInterval,
  BinanceRateLimiterType,
} from '../enums/rateLimiter.model';

export type BinanceRateLimiter = {
  readonly rateLimitType: BinanceRateLimiterType;
  readonly interval: BinanceRateLimiterInterval;
  readonly intervalNum: number;
  readonly limit: number;
};
