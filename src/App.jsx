import {
  getCharacters,
  fetchCharacters,
  getStatus,
  fetchStatus,
} from './services/promise-me';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    fetchCharacters();
  });

  useEffect(() => {
    getCharacters();
  });

  useEffect(() => {
    const fetchData = async () => {
      const charactersData = await getStatus();
      getStatus(charactersData);
    };
    fetchData();
  });

  useEffect(() => {
    fetchStatus();
  });
  return <h1>Hello World</h1>;
}
