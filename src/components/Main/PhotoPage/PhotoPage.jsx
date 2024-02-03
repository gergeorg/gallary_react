import { useDispatch, useSelector } from 'react-redux';
import style from './PhotoPage.module.scss';
import { photoRequestAsync } from '../../../store/photo/photoAction';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Chip, Container } from '@mui/material';
import { UserInfo } from '../../UserInfo/UserInfo';
import { LikeButton } from '../../LikeButton/LikeButton';
import { Date } from '../../Date/Date';
import { Spinner } from '../../../UI/Spinner/Spinner';
import DownloadIcon from '@mui/icons-material/Download';

export const PhotoPage = () => {
  const dispatch = useDispatch();
  const photo = useSelector((state) => state.photo.photo);
  const loading = useSelector((state) => state.photo.loading);
  const { likes } = useSelector((state) => state.photo);
  const { id } = useParams();

  console.log('photo: ', photo);

  useEffect(() => {
    dispatch(photoRequestAsync(id));
  }, [dispatch, id]);

  if (loading) return <Spinner size={100} color='#c0f0f0' />;

  return (
    <section>
      <Container>
        <div className={style.card}>
          <img
            className={style.img}
            src={photo?.urls?.regular}
            alt={photo?.alt_description}
          />
          <div className={style.info}>
            <div className={style.control}>
              <LikeButton likes={likes} id={id} />

              <a
                className={style.download}
                href={photo?.links?.download}
                target='_blank'
                rel='noreferrer'>
                <DownloadIcon color='primary' />
              </a>
            </div>

            <div className={style.userInfo}>
              <UserInfo
                username={photo?.user?.username}
                image={photo?.user?.profile_image.small}
                name={photo?.user?.name}
              />

              <Date date={photo?.created_at} />
            </div>
          </div>
        </div>
        {photo?.tags && (
          <ul className={style.list}>
            {photo?.tags.map((item) => (
              <li className={style.item} key={item.title}>
                <Chip
                  label={item.title}
                  variant='outlined'
                  size='small'
                  color='info'
                />
              </li>
            ))}
          </ul>
        )}
      </Container>
    </section>
  );
};
