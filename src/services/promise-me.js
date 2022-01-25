//   TODO: write a fetch request to an api url using .then()
export const fetchCharacters = () => {
  const data = fetch(`https://rickandmortyapi.com/api/character`)
    .then((data) => data.json())
    .then((charactersData) => {
      console.log(charactersData);
    });
};

//  TODO: write a fetch request using async/await (log both results)
export async function getCharacters() {
  const response = await fetch(`https://rickandmortyapi.com/api/character`);
  const charactersData = await response.json();
  return charactersData;
}
// more practice
export async function getStatus() {
  const response = await fetch(`https://rickandmortyapi.com/api/character`);
  const charactersData = await response.json();
  const charactersList = charactersData.results;
  console.log(charactersData);
  return charactersList.map((item) => item.status);
}

export const fetchStatus = () => {
  const data = fetch(`https://rickandmortyapi.com/api/character`)
    .then((data) => data.json())
    .then((charactersData) => {
      console.log(charactersData);
    });
};

/**
 * TODO:
 */

/**
 * TODO:
 */

/**
 * TODO:
 */

/**
 * TODO:
 */

/**
 * TODO:
 */

/**
 * TODO:
 */

/**
 * TODO:
 */
