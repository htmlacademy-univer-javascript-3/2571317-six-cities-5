import ProtectedRoute from './components/protected-route';
import Favorites from './pages/favorites';
import Home from './pages/home';
import Login from './pages/login';
import Offer from './pages/offer';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/offer/:id',
    element: <Offer/>
  },
  {
    path: '/favorites',
    element: <ProtectedRoute user={null}>
      <Favorites/>
    </ProtectedRoute>
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
