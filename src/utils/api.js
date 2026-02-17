export const loadIngredientsRequest = () => {
  return fetch("http://localhost:2000/ingredients")
    .then((response) => response.json())
    .then((data) => data);
};
