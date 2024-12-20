import { createAsyncThunk } from '@reduxjs/toolkit';
import { Offer, OfferRequestStatus } from '../../types/offer.ts';
import { ErrorResponse, ThunkConfig } from '../types.ts';
import { Actions } from '../../constants/actions.ts';
import { handleApiError } from '../utils/handle-api-error.ts';
import { OfferInfo } from '../../types/offer-info.ts';
import { Paths } from '../../api/constants.ts';
import api from '../../api';

export const fetchFavoritesOffers = createAsyncThunk<Offer[], void, ThunkConfig<ErrorResponse>>(
  Actions.FETCH_FAVORITES_OFFERS,
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get<Offer[]>(Paths.FAVORITE);

      return response.data;
    } catch (error) {
      return rejectWithValue(handleApiError(error));
    }
  }
);

export const changeFavoriteStatus = createAsyncThunk<OfferInfo, { offerId: string; status: OfferRequestStatus }, ThunkConfig<ErrorResponse>>(
  Actions.CHANGE_FAVORITE_STATUS,
  async ({ offerId, status }, { rejectWithValue }) => {
    try {
      const response = await api.post<OfferInfo>(`${Paths.FAVORITE}/${offerId}/${status}`);

      return response.data;
    } catch (error) {
      return rejectWithValue(handleApiError(error));
    }
  }
);
