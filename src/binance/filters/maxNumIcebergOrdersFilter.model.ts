import { BinanceSymbolFilterType } from '../enums/filterType.model';

export type BinanceMaxNumIcebergOrdersFilter = {
  readonly filterType: BinanceSymbolFilterType.MAX_NUM_ICEBERG_ORDERS;
  readonly maxNumIcebergOrders: number;
};
