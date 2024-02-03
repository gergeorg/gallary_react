import style from './PhotosList.module.scss';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { photosRequestAsync } from '../../../store/photos/photosAction';
import { firstPhotos } from '../../../store/photos/photosSlice';
import { ImageList } from '@mui/material';
import { Spinner } from '../../../UI/Spinner/Spinner';
import { UpBtn } from '../../../UI/UpBtn/UpBtn';
import { generateRandomId } from '../../../utils/generateRandomId';
import { PhotoCard } from './PhotoCard/PhotoCard';

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
          <PhotoCard
            data={item}
            key={`${item.id}${generateRandomId()}`}
            likes={item.likes}
          />
        ))}

        <UpBtn />
      </ImageList>

      {page !== 1 && loading && <Spinner size={50} color='#36d7b7' />}

      <div ref={endList} />
    </>
  );
};
