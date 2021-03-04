import { BinanceExchangeFilterType } from '../enums/filterType.model';

export type BinanceExchangeMaxNumAlgoOrdersFilter = {
  readonly filterType: BinanceExchangeFilterType.EXCHANGE_MAX_NUM_ALGO_ORDERS;
  readonly maxNumAlgoOrders: number;
};
