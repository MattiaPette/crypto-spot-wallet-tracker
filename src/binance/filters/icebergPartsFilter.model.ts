import { BinanceSymbolFilterType } from '../enums/filterType.model';

export type BinanceIcebergPartsFilter = {
  readonly filterType: BinanceSymbolFilterType.ICEBERG_PARTS;
  readonly limit: number;
};
