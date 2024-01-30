import { formatDate } from '../../utils/formatDate';
import style from './Date.module.scss';

export const Date = ({ date }) => (
  <time className={style.date} dateTime={date}>
    {formatDate(date)}
  </time>
);
