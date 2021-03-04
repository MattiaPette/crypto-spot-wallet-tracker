import { BinanceSymbolFilterType } from '../enums/filterType.model';

export type BinancePriceFilter = {
  readonly filterType: BinanceSymbolFilterType.PRICE_FILTER;
  readonly minPrice: string;
  readonly maxPrice: string;
  readonly tickSize: string;
};
