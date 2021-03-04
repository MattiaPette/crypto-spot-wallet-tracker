import { BinanceSymbolFilterType } from '../enums/filterType.model';

export type BinancePercentFilter = {
  readonly filterType: BinanceSymbolFilterType.PERCENT_PRICE;
  readonly multiplierUp: string;
  readonly multiplierDown: string;
  readonly avgPriceMins: number;
};
