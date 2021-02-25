export type ServerTime = {
  readonly serverTime: number;
};

export type BinanceTime = () => Promise<ServerTime>;

// eslint-disable-next-line @typescript-eslint/ban-types
export type BinancePing = () => Promise<{}>;

export type Binance = {
  readonly ping: BinancePing;
  readonly time: BinanceTime;
};
