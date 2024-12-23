import { createAsyncThunk } from '@reduxjs/toolkit';
import { Actions } from '../../constants/actions.ts';
import { ErrorResponse, ThunkConfig } from '../types.ts';
import { Paths } from '../../api/constants.ts';
import { sortCommentsByDate } from '../../utils/sort-by-date.ts';
import { handleApiError } from '../utils/handle-api-error.ts';
import { Comment, CommentFormState } from '../../types/comment.ts';
import api from '../../api';

export const fetchOfferComments = createAsyncThunk<Comment[], { offerId: string }, ThunkConfig<ErrorResponse>>(
  Actions.FETCH_OFFER_COMMENTS,
  async ({ offerId }, { rejectWithValue }) => {
    try {
      const response = await api.get<Comment[]>(Paths.COMMENTS.replace('{offerId}', offerId));

      return sortCommentsByDate(response.data);
    } catch (error) {
      return rejectWithValue(handleApiError(error));
    }
  }
);

export const postOfferComment = createAsyncThunk<Comment, { offerId: string } & CommentFormState, ThunkConfig<ErrorResponse>>(
  Actions.POST_OFFER_COMMENT,
  async ({ offerId, comment, rating }, { rejectWithValue }) => {
    try {
      const response = await api.post<Comment>(Paths.COMMENTS.replace('{offerId}', offerId), { comment, rating });

      return response.data;
    } catch (error) {
      return rejectWithValue(handleApiError(error));
    }
  }
);
