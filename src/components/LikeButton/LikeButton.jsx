import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import style from './LikeButton.module.scss';
import cn from 'classnames';

export const LikeButton = ({ likes, className }) => (
  <button className={cn(style.likes, className)}>
    <FavoriteBorderIcon />
    {likes}
  </button>
);
