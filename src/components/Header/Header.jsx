import style from './Header.module.scss';

import { Container } from '../Container/Container';
import { Logo } from './Logo/Logo';
import { Auth } from './Auth/Auth';
import { Link } from 'react-router-dom';

export const Header = () => (
  <header className={style.header}>
    <Container className={style.container}>
      <Link to='/' className={style.logo}>
        <Logo />
      </Link>
      <Auth />
    </Container>
  </header>
);
