import { axiosAPI } from '@/shared/config';
import { SERVER_ROUTES } from '@/shared/routes';
import { IResponse } from '@/shared/types';

import {
  CreateCurrency,
  CreateCurrencyBalance,
  EditCurrencyName,
  ICurrency,
  ICurrencyBalance
} from './currency.types';

class CurrencyService {
  public async createCurrency(data: CreateCurrency, file: File) {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('file', file);

    return axiosAPI.post<ICurrency>(
      SERVER_ROUTES.currenciesCreate(),
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );
  }

  public async deleteCurrency() {
    return axiosAPI.delete<IResponse>(SERVER_ROUTES.currenciesDelete());
  }

  public async editCurrencyName(data: EditCurrencyName) {
    return axiosAPI.patch<ICurrency>(SERVER_ROUTES.currenciesEdit(), data);
  }

  public async editCurrencyImage(file: File) {
    const formData = new FormData();

    formData.append('file', file);

    return axiosAPI.patch<ICurrency>(
      SERVER_ROUTES.currenciesEditImage(),
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );
  }
  public async createCurrencyBalance(data: CreateCurrencyBalance) {
    return axiosAPI.post<ICurrencyBalance>(
      SERVER_ROUTES.currenciesCreateBalance(),
      data
    );
  }
}

export const currencyService = new CurrencyService();
