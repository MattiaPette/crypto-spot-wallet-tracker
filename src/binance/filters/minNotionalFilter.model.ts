import { BinanceSymbolFilterType } from '../enums/filterType.model';

export type BinanceMinNotionalFilter = {
  readonly filterType: BinanceSymbolFilterType.MIN_NOTIONAL;
  readonly minNotional: string;
  readonly applyToMarket: boolean;
  readonly avgPriceMins: number;
};
