import { Avatar } from '@mui/material';
import style from './UserInfo.module.scss';

export const UserInfo = ({ username, image, name }) => (
  <div className={style.userInfo}>
    <Avatar
      alt={`Аватар ${username}`}
      src={image}
      title={username}
      sx={{ width: 24, height: 24 }}
    />
    <a
      className={style.name}
      target='_blank'
      href={`https://unsplash.com/@${username}`}
      rel='noreferrer'>
      {name}
    </a>
  </div>
);
