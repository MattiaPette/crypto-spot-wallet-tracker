import { BinanceSymbolFilterType } from '../enums/filterType.model';

export type BinanceMarketLotSizeFilter = {
  readonly filterType: BinanceSymbolFilterType.MARKET_LOT_SIZE;
  readonly minQty: string;
  readonly maxQty: string;
  readonly stepSize: string;
};
