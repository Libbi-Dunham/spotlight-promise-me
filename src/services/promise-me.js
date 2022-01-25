//   TODO: write a fetch request to an api url using .then()
export const getCharacters = () => {
  const data = fetch(`https://rickandmortyapi.com/api/character`)
    .then((data) => data.json())
    .then((charactersData) => {
      console.log(charactersData);
    });
};

//  TODO: write a fetch request using async/await (log both results)
// export async function getCharacters() {
//   const response = await fetch(`https://rickandmortyapi.com/api/character`);
//   const charactersData = await response.json();
//   return charactersData;
// }

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
