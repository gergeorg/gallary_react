import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { photosRequestAsync } from '../../../store/photos/photosAction';

// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DownloadIcon from '@mui/icons-material/Download';
import { Avatar, ImageList } from '@mui/material';

import style from './PhotosList.module.scss';
import { firstPhotos } from '../../../store/photos/photosSlice';
import { formatDate } from '../../../utils/formatDate';
import { Spinner } from '../../../UI/Spinner/Spinner';
import { generateRandomId } from '../../../utils/generateRandomId';
import { LikeButton } from '../../LikeButton/LikeButton';
import { Link } from 'react-router-dom';

export const PhotosList = () => {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photos.photos);
  const loading = useSelector((state) => state.photos.loading);
  const error = useSelector((state) => state.photos.error);
  const page = useSelector((state) => state.photos.page);
  const endList = useRef(null);

  useEffect(() => {
    dispatch(firstPhotos());
    dispatch(photosRequestAsync());
  }, [dispatch]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          dispatch(photosRequestAsync());
        }
      },
      {
        rootMargin: '100px',
      },
    );

    observer.observe(endList.current);

    return () => {
      if (endList.current) {
        endList.current && observer.unobserve(endList.current);
      }
    };
  }, [dispatch]);

  if (error) return <div className={style.error}>{error}</div>;

  return (
    <>
      {loading && <Spinner size={100} color='#c0f0f0' />}

      <ImageList variant='masonry' cols={4} gap={8}>
        {photos.map((item) => (
          <div
            key={`${item.id}${generateRandomId()}`}
            className={style.wrapper}>
            <Link to='/photo'>
              <img src={item.urls.small} alt={item.alt_description} />
            </Link>
            {/* <img src={item.urls.small} alt={item.alt_description} /> */}
            <a
              className={style.download}
              href={item.links.download}
              target='_blank'
              rel='noreferrer'>
              <DownloadIcon color='primary' />
            </a>

            <LikeButton likes={item.likes} />

            <div className={style.info}>
              <div className={style.userInfo}>
                <Avatar
                  alt={`Аватар ${item.user.username}`}
                  src={item.user.profile_image.small}
                  title={item.user.username}
                  sx={{ width: 24, height: 24 }}
                />
                <a
                  className={style.name}
                  target='_blank'
                  href={`https://unsplash.com/@${item.user.username}`}
                  rel='noreferrer'>
                  {item.user.name}
                </a>
              </div>
              <time className={style.date} dateTime={item.date}>
                {formatDate(item.created_at)}
              </time>
            </div>
          </div>
        ))}
      </ImageList>

      {page !== 1 && loading && <Spinner size={50} color='#36d7b7' />}

      <div ref={endList} />
    </>
  );
};