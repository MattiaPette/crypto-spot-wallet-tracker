export type ServerTime = {
  readonly serverTime: number;
};

export type BinanceTime = () => Promise<ServerTime>;

// eslint-disable-next-line @typescript-eslint/ban-types
export type BinancePing = () => Promise<{}>;

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
};
