import { getCharacters } from './services/promise-me';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    getCharacters();
  });
  return <h1>Hello World</h1>;
}
