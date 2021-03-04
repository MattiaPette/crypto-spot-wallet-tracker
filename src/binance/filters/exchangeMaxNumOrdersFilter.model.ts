import { BinanceExchangeFilterType } from '../enums/filterType.model';

export type BinanceExchangeMaxNumOrdersFilter = {
  readonly filterType: BinanceExchangeFilterType.EXCHANGE_MAX_NUM_ORDERS;
  readonly maxNumOrders: number;
};
