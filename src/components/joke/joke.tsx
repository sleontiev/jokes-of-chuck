import React, { useState } from 'react';
import { IJoke } from './joke.props';
import classes from './joke.module.css';
import { format } from 'date-fns';
import LikeIcon from './like.svg';

const Joke = ({
  joke_value,
  created,
  img,
  categories,
  likedJoke,
  setLike,
  ...props
}: IJoke): JSX.Element => {
  return (
    <div className={classes.joke} {...props}>
      <div className={classes.joke_value}>
        {joke_value}
        {categories === undefined ? null : (
          <div className={classes.joke_e}>E</div>
        )}
      </div>
      {joke_value && (
        <LikeIcon
          className={classes.star}
          onClick={() =>
            setLike([
              ...likedJoke,
              {
                title: joke_value,
                categorie: categories,
                created: created,
              }
            ])
          }
        />
      )}
      {created === undefined ? null : (
        <div className={classes.joke_created}>
          {format(new Date(created), 'dd.MM.yyyy')}
        </div>
      )}
    </div>
  );
};

export default Joke;
