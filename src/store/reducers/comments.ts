import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { fetchOfferComments, postOfferComment } from '../actions';
import type { Comment } from '../../types/comment.ts';
import {ErrorResponse, RequestStatus} from '../types.ts';

type CommentsState = {
  comments: Comment[];
  fetchStatus: RequestStatus;
  postStatus: RequestStatus;
};

export const initialState: CommentsState = {
  comments: [],
  fetchStatus: {
    loading: false,
    error: null
  },
  postStatus: {
    loading: false,
    error: null
  }
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOfferComments.pending, (state) => {
        state.fetchStatus.loading = true;
        state.fetchStatus.error = null;
      })
      .addCase(fetchOfferComments.fulfilled, (state, action) => {
        state.fetchStatus.loading = false;
        state.comments = action.payload;
      })
      .addCase(fetchOfferComments.rejected, (state, { payload }) => {
        state.fetchStatus.loading = false;
        state.fetchStatus.error = payload?.message;
      })

      .addCase(postOfferComment.pending, (state) => {
        state.postStatus.loading = true;
        state.postStatus.error = null;
      })
      .addCase(postOfferComment.fulfilled, (state, action) => {
        state.postStatus.loading = false;
        state.comments.unshift(action.payload);
      })
      .addCase(postOfferComment.rejected, (state, { payload }: PayloadAction<ErrorResponse | undefined>) => {
        state.postStatus.loading = false;
        state.postStatus.error = payload?.message;
      });
  }
});

export const { reducer: commentsReducer } = commentsSlice;
