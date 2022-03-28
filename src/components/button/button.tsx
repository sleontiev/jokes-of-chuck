import React from 'react';
import { IButton } from './button.props';
import classes from './button.module.css';

const Button = ({ text, ...props }: IButton): JSX.Element => {
  return <button className={classes.button} {...props}>{text}</button>;
};

export default Button;
