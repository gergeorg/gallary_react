import { Container } from '../Container/Container';
import style from './Header.module.scss';
import { LoginIcon } from './LoginIcon/LoginIcon';
import { Logo } from './Logo/Logo';

export const Header = () => {
  console.log();
  return (
    <header className={style.header}>
      <Container className={style.container}>
        <a href='/'>
          <Logo />
        </a>
        <button className={style.loginButton} aria-label='Авторизация'>
          <span className={style.name}>login</span>
          <LoginIcon className={style.loginImg} />
        </button>
      </Container>
    </header>
  );
};
