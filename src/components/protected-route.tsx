import {Navigate} from 'react-router-dom';
import { TUser } from '../types';
import {ReactElement} from 'react';

const ProtectedRoute = ({ user, children }: {user: TUser | null; children: ReactElement}) => {
  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
