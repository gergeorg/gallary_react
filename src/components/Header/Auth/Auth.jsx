import { useDispatch } from 'react-redux';
import style from './Auth.module.scss';
import { useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { deleteToken } from '../../../store/token/tokenReducer';

import { urlAuth } from '../../../api/auth';
import { Spinner } from '../../../UI/Spinner/Spinner';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';

export const Auth = () => {
  const dispatch = useDispatch();

  const [auth, loading, clearAuth] = useAuth();
  const [showLogout, setShowLogout] = useState(false);

  const login = () => {
    location.href = urlAuth;
  };

  const getOut = () => {
    setShowLogout(!showLogout);
  };

  const logout = () => {
    dispatch(deleteToken());
    clearAuth();
  };

  return (
    <>
      {loading ? (
        <Spinner size={34} color='#36d7b7' />
      ) : auth?.data?.name ? (
        <div className={style.info}>
          <a
            className={style.link}
            target='_blank'
            href={`https://unsplash.com/@${auth?.data?.username}`}
            rel='noreferrer'>
            <Avatar
              alt={`Аватар ${auth.data.name}`}
              src={auth?.data?.img}
              title={auth?.data?.name}
            />
          </a>

          <Button variant='contained' onClick={getOut}>
            {auth?.data?.name}
          </Button>

          {showLogout && (
            <Button variant='outlined' onClick={logout}>
              <LogoutIcon />
              Выйти
            </Button>
          )}
        </div>
      ) : (
        <Button
          variant='outlined'
          onClick={login}
          aria-label='Войти в приложение'>
          <LoginIcon />
        </Button>
      )}
    </>
  );
};
