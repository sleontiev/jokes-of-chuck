import React from 'react';
import { ILayout } from './layout.props';
import classes from './layout.module.css';
import { IFavourite } from 'App';
import { format } from 'date-fns';
import StarIcon from '../joke/like.svg';

const Layout = ({ children, favourite, ...props }: ILayout): JSX.Element => {
  return (
    <>
      <div className={classes.layout} {...props}>
        {children}
      </div>
      <div className={classes.favourite_wrapper}>
        {favourite.length !== 0 &&
          favourite.map((item: IFavourite) => (
            <div className={classes.favourite}>
              <span>{item.title}</span>
              <div className={classes.favourite_created}>
                {format(new Date(item.created), 'dd.MM.yyyy')}
                <StarIcon className={classes.carbage_icon} />
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Layout;
