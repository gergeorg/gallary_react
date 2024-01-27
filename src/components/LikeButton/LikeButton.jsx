import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import style from './LikeButton.module.scss';

export const LikeButton = ({ likes }) => (
  <button className={style.likes}>
    <FavoriteBorderIcon />
    {likes}
  </button>
);
