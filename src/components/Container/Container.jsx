/* eslint-disable no-confusing-arrow */
import cn from 'classnames';

import style from './Container.module.scss';

export const Container = ({ className, children }) =>
  className ? (
    <div className={cn(style.container, className)}>{children}</div>
  ) : (
    <div className={style.container}>{children}</div>
  );
