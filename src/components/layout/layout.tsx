import React from 'react';
import { ILayout } from './layout.props';
import classes from './layout.module.css';
import { IFavourite } from 'App';
import { format } from 'date-fns';
import StarIcon from '../joke/like.svg';
import { motion } from 'framer-motion';

const Layout = ({ children, favourite, ...props }: ILayout): JSX.Element => {
  return (
    <>
      <div className={classes.layout} {...props}>
        {children}
      </div>
      <div className={classes.favourite_wrapper}>
        {favourite.length !== 0 &&
          favourite.map((item: IFavourite) => (
            <motion.div
              className={classes.favourite}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              drag
              dragConstraints={{
                top: -750,
                left: -750,
                right: 750,
                bottom: 750,
              }}
            >
              <span>{item.title}</span>
              <div className={classes.favourite_created}>
                {format(new Date(item.created), 'dd.MM.yyyy')}
                <StarIcon className={classes.star_icon} />
              </div>
            </motion.div>
          ))}
      </div>
    </>
  );
};

export default Layout;
