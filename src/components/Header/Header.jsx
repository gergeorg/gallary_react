import style from './Header.module.scss';

import { Container } from '../Container/Container';
import { Logo } from './Logo/Logo';
import { Auth } from './Auth/Auth';

export const Header = () => (
  <header className={style.header}>
    <Container className={style.container}>
      <a href='/' className={style.logo}>
        <Logo />
      </a>
      <Auth />
    </Container>
  </header>
);
