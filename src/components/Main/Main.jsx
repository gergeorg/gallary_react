import { Container } from '../Container/Container';
import style from './Main.module.scss';
import { PhotoPage } from './PhotoPage/PhotoPage';
import { PhotosList } from './PhotosList/PhotosList';
import { Route, Routes } from 'react-router-dom';

export const Main = () => {
  console.log();

  return (
    <main className={style.main}>
      <Container>
        <Routes>
          <Route path='/' element={<PhotosList />} />
          <Route path='/photo/:id' element={<PhotoPage />} />
        </Routes>
      </Container>
    </main>
  );
};
