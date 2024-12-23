import { AxiosResponse } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthorizationRequestDto } from '../../types/auth.ts';
import { UserData } from '../../types/user.ts';
import { handleTokenInLocalStorage, removeToken } from '../utils';
import { Actions } from '../../constants/actions.ts';
import { ErrorResponse, ThunkConfig } from '../types.ts';
import { Paths } from '../../api/constants.ts';
import { handleApiError } from '../utils/handle-api-error.ts';
import api from '../../api';

export const checkAuthStatus = createAsyncThunk<UserData, void, ThunkConfig<ErrorResponse>>(
  Actions.CHECK_AUTH_STATUS,
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get<void, AxiosResponse<UserData>>(Paths.LOGIN);
      handleTokenInLocalStorage(response.data.token);

      return response.data;
    } catch (error) {
      return rejectWithValue(handleApiError(error));
    }
  }
);

export const authorize = createAsyncThunk<UserData, AuthorizationRequestDto, ThunkConfig<ErrorResponse>>(
  Actions.AUTHORIZE,
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await api.post<UserData>(Paths.LOGIN, { email, password });
      handleTokenInLocalStorage(response.data.token);

      return response.data;
    } catch (error) {
      return rejectWithValue(handleApiError(error));
    }
  }
);

export const logout = createAsyncThunk<void, void, ThunkConfig<ErrorResponse>>(
  Actions.LOGOUT,
  async (_, { rejectWithValue }) => {
    try {
      await api.delete(Paths.LOGOUT);
      removeToken();
    } catch (error) {
      return rejectWithValue(handleApiError(error));
    }
  }
);
