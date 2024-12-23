import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { OfferRequestStatus, type Offer } from '../../types/offer.ts';
import type { OfferInfo } from '../../types/offer-info.ts';
import { changeFavoriteStatus, fetchFavoritesOffers } from '../actions';
import { convertOfferInfoToOffer } from '../../utils/convert-offer-info-into-offer.ts';
import {ErrorResponse, RequestStatus} from '../types.ts';

export type FavoritesOffersState = {
  favoritesOffers: Offer[];
  fetchStatus: RequestStatus;
  postStatus: RequestStatus;
};

export const initialState: FavoritesOffersState = {
  favoritesOffers: [],
  fetchStatus: {
    loading: false
  },
  postStatus: {
    loading: false
  }
};

const favoriteOffersSlice = createSlice({
  name: 'favoriteOffers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavoritesOffers.pending, (state) => {
        state.fetchStatus.loading = true;
        state.fetchStatus.error = null;
      })
      .addCase(fetchFavoritesOffers.fulfilled, (state, action: PayloadAction<Offer[]>) => {
        state.favoritesOffers = action.payload;
        state.fetchStatus.loading = false;
        state.fetchStatus.error = null;
      })
      .addCase(fetchFavoritesOffers.rejected, (state, { payload }: PayloadAction<ErrorResponse | undefined>) => {
        state.fetchStatus.loading = false;
        state.fetchStatus.error = payload?.message;
      })

      .addCase(changeFavoriteStatus.pending, (state) => {
        state.postStatus.loading = true;
        state.postStatus.error = null;
      })
      .addCase(changeFavoriteStatus.fulfilled, (state, action: PayloadAction<OfferInfo, string, { arg: { offerId: string; status: OfferRequestStatus } }>) => {
        const { status } = action.meta.arg;
        const updatedOffer = convertOfferInfoToOffer(action.payload);

        if (status === OfferRequestStatus.ADD) {
          state.favoritesOffers.push(updatedOffer);
        } else {
          state.favoritesOffers = state.favoritesOffers.filter((offer) => offer.id !== updatedOffer.id);
        }

        state.postStatus.loading = false;
        state.postStatus.error = null;
      })
      .addCase(changeFavoriteStatus.rejected, (state, { payload }: PayloadAction<ErrorResponse | undefined>) => {
        state.postStatus.loading = false;
        state.postStatus.error = payload?.message;
      });
  }
});

export const { reducer: favoriteOffersReducer } = favoriteOffersSlice;

