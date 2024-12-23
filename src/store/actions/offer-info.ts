import { createAsyncThunk } from '@reduxjs/toolkit';
import { OfferInfo } from '../../types/offer-info.ts';
import { ErrorResponse, ThunkConfig } from '../types.ts';
import { Actions } from '../../constants/actions.ts';
import { handleApiError } from '../utils/handle-api-error.ts';
import { Paths } from '../../api/constants.ts';
import api from '../../api';

export const fetchOfferInfo = createAsyncThunk<OfferInfo, { offerId: string }, ThunkConfig<ErrorResponse>>(
  Actions.FETCH_OFFER,
  async ({ offerId }, { rejectWithValue }) => {
    try {
      const response = await api.get<OfferInfo>(Paths.OFFER.replace('{offerId}', offerId));

      return response.data;
    } catch (error) {
      return rejectWithValue(handleApiError(error));
    }
  }
);
