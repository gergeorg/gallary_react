import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authRequest } from '../store/auth/authAction';
import { authLogout } from '../store/auth/authSlice';

export const useAuth = () => {
  const auth = useSelector((state) => state.auth);
  const token = useSelector((state) => state.token.token);
  const loading = useSelector((state) => state.auth.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authRequest());
  }, [dispatch, token]);

  const clearAuth = () => dispatch(authLogout());

  return [auth, loading, clearAuth];
};
