import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';

import { getToken } from './api/token';
import { useDispatch } from 'react-redux';
import { updateToken } from './store/token/tokenReducer';

export const App = () => {
  const dispatch = useDispatch();
  dispatch(updateToken(getToken()));

  return (
    <>
      <Header />
      <Main />
    </>
  );
};
