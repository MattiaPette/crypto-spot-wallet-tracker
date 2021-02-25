import { RequestInit } from 'node-fetch';

export type MakeRequest = <T>(url: string, params: RequestInit) => Promise<T>;
