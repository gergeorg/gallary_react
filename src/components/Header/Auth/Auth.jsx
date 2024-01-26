import { useDispatch } from 'react-redux';
import style from './Auth.module.scss';
import { useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { deleteToken } from '../../../store/token/tokenReducer';
import { LoginIcon } from './LoginIcon/LoginIcon';
import { urlAuth } from '../../../api/auth';
import { Spinner } from '../../../UI/Spinner/Spinner';

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
      ) : auth.data.name ? (
        <div className={style.info}>
          <button className={style.login} type='button' onClick={getOut}>
            <img
              className={style.img}
              src={auth.data.img}
              title={auth.data.name}
              alt={`Аватар ${auth.data.name}`}
            />
            <p>{auth.data.name}</p>
          </button>
          {showLogout && (
            <button className={style.logout} onClick={logout}>
              Выйти
            </button>
          )}
        </div>
      ) : (
        <button type='button' className={style.auth} onClick={login}>
          <LoginIcon />
        </button>
      )}
    </>
  );
};
