import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

import style from './LikeButton.module.scss';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { handlerLike } from '../../api/handlerLike';
import { changeLike } from '../../store/photo/photoSlice';

export const LikeButton = ({ id, likes, className }) => {
  console.log('likes: ', likes);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.token);
  const { likedByUser } = useSelector((state) => state.photo);

  const handleLiked = () => {
    if (token) {
      const method = likedByUser ? 'DELETE' : 'POST';
      handlerLike(id, token, method);
      dispatch(changeLike());
    }
  };

  return (
    <button
      className={cn(style.likes, className)}
      onClick={() => handleLiked()}
      id={id}>
      {likedByUser ? <FavoriteIcon /> : <FavoriteBorderIcon />}

      {likes}
    </button>
  );
};
