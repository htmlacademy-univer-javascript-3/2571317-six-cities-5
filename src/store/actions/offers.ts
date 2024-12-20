import { createAsyncThunk } from '@reduxjs/toolkit';
import { ErrorResponse, ThunkConfig } from '../types.ts';
import { Offer } from '../../types/offer.ts';
import { Actions } from '../../constants/actions.ts';
import { Paths } from '../../api/constants.ts';
import { handleApiError } from '../utils/handle-api-error.ts';
import api from '../../api';

export const fetchOffers = createAsyncThunk<Offer[], void, ThunkConfig<ErrorResponse>>(
  Actions.FETCH_OFFERS,
  async (_, { rejectWithValue, getState }) => {
    const city = getState().common.city;

    try {
      const response = await api.get<Offer[]>(Paths.OFFERS);
      const filteredOffers = response.data.filter((offer) => offer.city.name === city);

      return filteredOffers;
    } catch (error) {
      return rejectWithValue(handleApiError(error));
    }
  }
);
