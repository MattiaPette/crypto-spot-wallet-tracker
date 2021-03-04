import { BinanceSymbolFilterType } from '../enums/filterType.model';

export type BinanceMaxPositionFilter = {
  readonly filterType: BinanceSymbolFilterType.MAX_POSITION;
  readonly maxPosition: string;
};
