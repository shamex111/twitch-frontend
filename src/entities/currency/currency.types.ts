export interface CreateCurrency {
  name: string;
}
export interface EditCurrencyName {
  name: string;
}
export interface CreateCurrencyBalance {
  streamerCurrencyId: string;
}
export interface ICurrency {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  image: string;
  userId: string;
}
export interface ICurrencyBalance {
  id: string;
  createdAt: string;
  updatedAt: string;
  streamerCurrencyId: string;
  count: number;
  userId: string;
}
