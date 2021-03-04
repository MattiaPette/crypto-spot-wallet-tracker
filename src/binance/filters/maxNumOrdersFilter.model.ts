import { BinanceSymbolFilterType } from '../enums/filterType.model';

export type BinanceMaxNumOrdersFilter = {
  readonly filterType: BinanceSymbolFilterType.MAX_NUM_ORDERS;
  readonly maxNumOrders: number;
};
