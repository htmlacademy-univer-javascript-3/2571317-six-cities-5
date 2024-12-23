import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Router } from './router';
import { store } from '../store';

export const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>
);
