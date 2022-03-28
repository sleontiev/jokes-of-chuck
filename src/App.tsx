import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';

import Button from './components/button/button';
import Joke from './components/joke/joke';
import Layout from './components/layout/layout';

interface IData {
  categories: string[];
  created_at: Date;
  icon_url: string;
  id: string;
  updated_at: Date;
  url: string;
  value: string;
}

export interface IFavourite {
  title: string;
  categorie: string;
  created: string;
}

export const App = hot(_App);
export function _App(): JSX.Element | null {
  const [joke, setJoke] = useState<IData | null>(null);
  const [favourite, setFavourite] = useState<IFavourite[]>([]);
  const getJoke = () => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then((response) => response.json())
      .then((result) => setJoke(result));
  };
  return (
    <Layout favourite={favourite}>
      <Joke
        joke_value={joke?.value}
        created={joke?.created_at}
        img={joke?.icon_url}
        categories={joke?.categories[0]}
        setLike={setFavourite}
        likedJoke={favourite}
      />
      <Button onClick={getJoke} text='клац 👆' />
    </Layout>
  );
}
