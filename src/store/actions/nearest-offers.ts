import { createAsyncThunk } from '@reduxjs/toolkit';
import { Offer } from '../../types/offer.ts';
import { Actions } from '../../constants/actions.ts';
import { Paths } from '../../api/constants.ts';
import { ErrorResponse, ThunkConfig } from '../types.ts';
import { handleApiError } from '../utils/handle-api-error.ts';
import api from '../../api';

export const fetchNearestOffers = createAsyncThunk<Offer[], { offerId: string }, ThunkConfig<ErrorResponse>>(
  Actions.FETCH_NEAREST_OFFERS,
  async ({ offerId }, { rejectWithValue }) => {
    try {
      const response = await api.get<Offer[]>(Paths.OFFERS_NEARBY.replace('{offerId}', offerId));

      return response.data;
    } catch (error) {
      return rejectWithValue(handleApiError(error));
    }
  }
);
