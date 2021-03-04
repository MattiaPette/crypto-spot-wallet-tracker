import { BinanceExchangeFilter, BinanceSymbolsFilter } from './filters/filters';
import { BinanceRateLimiter } from './rateLimiter/rateLimiter.model';

export type ServerTime = {
  readonly serverTime: number;
};

export type BinanceTime = () => Promise<ServerTime>;

// eslint-disable-next-line @typescript-eslint/ban-types
export type BinancePing = () => Promise<{}>;

export enum BinancePermission {
  SPOT = 'SPOT',
  MARGIN = 'MARGIN',
  LEVERAGED = 'LEVERAGED',
}

export enum BinanceOrderType {
  LIMIT = 'LIMIT',
  LIMIT_MAKER = 'LIMIT_MAKER',
  MARKET = 'MARKET',
  STOP_LOSS = 'STOP_LOSS',
  STOP_LOSS_LIMIT = 'STOP_LOSS_LIMIT',
  TAKE_PROFIT = 'TAKE_PROFIT',
  TAKE_PROFIT_LIMIT = 'TAKE_PROFIT_LIMIT',
}

export type BinanceSymbol = {
  readonly symbol: string;
  readonly status: string;
  readonly baseAsset: string;
  readonly baseAssetPrecision: number;
  readonly quoteAsset: string;
  readonly quotePrecision: number;
  readonly quoteAssetPrecision: number;
  readonly baseCommissionPrecision: number;
  readonly quoteCommissionPrecision: number;
  readonly rderTypes: readonly BinanceOrderType[];
  readonly icebergAllowed: boolean;
  readonly ocoAllowed: boolean;
  readonly quoteOrderQtyMarketAllowed: boolean;
  readonly isSpotTradingAllowed: boolean;
  readonly isMarginTradingAllowed: boolean;
  readonly filters: readonly BinanceSymbolsFilter[];
  readonly permissions: readonly BinancePermission[];
};

export type BinanceExchangeInfoData = {
  readonly timezone: string;
  readonly serverTime: number;
  readonly rateLimits: readonly BinanceRateLimiter[];
  readonly exchangeFilters: readonly BinanceExchangeFilter[];
  readonly symbols: readonly BinanceSymbol[];
};

export type BinanceExchangeInfo = () => Promise<BinanceExchangeInfoData>;

export type BinanceOrder = {
  readonly symbol: string;
  readonly orderId: number;
  readonly orderListId: number;
  readonly clientOrderId: string;
  readonly price: string;
  readonly origQty: string;
  readonly executedQty: string;
  readonly cummulativeQuoteQty: string;
  readonly status: string;
  readonly timeInForce: string;
  readonly type: string;
  readonly side: string;
  readonly stopPrice: string;
  readonly icebergQty: string;
  readonly time: number;
  readonly updateTime: number;
  readonly isWorking: true;
  readonly origQuoteOrderQty: string;
};

export type BinanceAllOrdersParams = {
  readonly symbol: string;
  readonly timestamp: number;
  readonly orderId?: number;
  readonly startTime?: number;
  readonly endTime?: number;
  readonly limit?: number;
  readonly recvWindow?: number;
};

export type BinanceAllOrders = (
  params: BinanceAllOrdersParams,
) => Promise<readonly BinanceOrder[]>;

export type Binance = {
  readonly ping: BinancePing;
  readonly time: BinanceTime;
  readonly allOrders: BinanceAllOrders;
  readonly exchangeInfo: BinanceExchangeInfo;
};
