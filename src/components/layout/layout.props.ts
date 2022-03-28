import { IFavourite } from 'App';
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ILayout
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  favourite: IFavourite[];
}
