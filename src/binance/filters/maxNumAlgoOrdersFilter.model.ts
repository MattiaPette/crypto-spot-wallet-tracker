import { BinanceSymbolFilterType } from '../enums/filterType.model';

export type BinanceMaxNumAlgoOrdersFilter = {
  readonly filterType: BinanceSymbolFilterType.MAX_NUM_ALGO_ORDERS;
  readonly maxNumAlgoOrders: number;
};
