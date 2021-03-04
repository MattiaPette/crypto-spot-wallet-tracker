import { BinanceExchangeMaxNumAlgoOrdersFilter } from './exchangeMaxNumAlgoOrdersFilter.model';
import { BinanceExchangeMaxNumOrdersFilter } from './exchangeMaxNumOrdersFilter.model';
import { BinanceIcebergPartsFilter } from './icebergPartsFilter.model';
import { BinanceLotSizeFilter } from './lotSizeFilter.model';
import { BinanceMarketLotSizeFilter } from './marketLotSizeFilter.model';
import { BinanceMaxNumAlgoOrdersFilter } from './maxNumAlgoOrdersFilter.model';
import { BinanceMaxNumIcebergOrdersFilter } from './maxNumIcebergOrdersFilter.model';
import { BinanceMaxNumOrdersFilter } from './maxNumOrdersFilter.model';
import { BinanceMaxPositionFilter } from './maxPositionFilter.model';
import { BinanceMinNotionalFilter } from './minNotionalFilter.model';
import { BinancePercentFilter } from './percentFilter.model';
import { BinancePriceFilter } from './priceFilter.model';

export type BinanceSymbolsFilter =
  | BinanceIcebergPartsFilter
  | BinanceLotSizeFilter
  | BinanceMarketLotSizeFilter
  | BinanceMaxNumAlgoOrdersFilter
  | BinanceMaxNumIcebergOrdersFilter
  | BinanceMaxNumOrdersFilter
  | BinanceMaxPositionFilter
  | BinanceMinNotionalFilter
  | BinancePercentFilter
  | BinancePriceFilter;

export type BinanceExchangeFilter =
  | BinanceExchangeMaxNumAlgoOrdersFilter
  | BinanceExchangeMaxNumOrdersFilter;
