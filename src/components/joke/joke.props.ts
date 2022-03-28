import { IFavourite } from 'App';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IJoke
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  joke_value: string | undefined;
  created: Date | undefined;
  img: string | undefined;
  categories: string | undefined;
  likedJoke: IFavourite[];
  setLike: any;
}
