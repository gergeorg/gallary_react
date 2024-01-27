import { PuffLoader } from 'react-spinners';
import style from './Spinner.module.scss';

export const Spinner = ({ size, color }) => (
  <PuffLoader className={style.spinner} color={color} size={size} />
);
