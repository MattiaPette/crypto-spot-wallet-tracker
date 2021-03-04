import { BinanceSymbolFilterType } from '../enums/filterType.model';

export type BinanceLotSizeFilter = {
  readonly filterType: BinanceSymbolFilterType.LOT_SIZE;
  readonly minQty: string;
  readonly maxQty: string;
  readonly stepSize: string;
};
