import { Link } from 'react-router-dom';
import style from './PhotoCard.module.scss';
import { UserInfo } from '../../../UserInfo/UserInfo';
import { Date } from '../../../Date/Date';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import { LikeButton } from '../../../LikeButton/LikeButton';
import DownloadIcon from '@mui/icons-material/Download';

export const PhotoCard = ({ data, likes }) => (
  <div className={style.wrapper}>
    <Link to={`/photo/${data.id}`}>
      <img
        className={style.img}
        src={data.urls.small}
        alt={data.alt_description}
      />
    </Link>

    <a
      className={style.download}
      href={data.links.download}
      target='_blank'
      rel='noreferrer'>
      <DownloadIcon color='primary' />
    </a>

    {/* <LikeButton className={style.like} likes={likes} id={data.id} /> */}
    <div className={style.like}>
      <FavoriteBorderIcon />
      {likes}
    </div>

    <div className={style.info}>
      <UserInfo
        username={data.user.username}
        image={data.user.profile_image.small}
        name={data.user.name}
      />

      <Date date={data.created_at} />
    </div>
  </div>
);
