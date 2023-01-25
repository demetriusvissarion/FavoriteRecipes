import { selectSearchTerm } from "../searchTerm/searchTermSlice.js";

// The favoriteRecipes slice will contain the following initial recipes.
import biscuits from "../../img/biscuits.jpg";
import bulgogi from "../../img/bulgogi.jpg";
import calamari from "../../img/calamari.jpg";

const initialState = [
  { id: 0, name: "Biscuits", img: biscuits },
  { id: 1, name: "Bulgogi", img: bulgogi },
  { id: 2, name: "Calamari", img: calamari },
];
export const favoriteRecipesReducer = (
  favoriteRecipes = initialState,
  action
) => {
  switch (action.type) {
    case "favoriteRecipes/addRecipe":
      return [...favoriteRecipes, action.payload];
    case "favoriteRecipes/removeRecipe":
      return favoriteRecipes.filter(
        (recipe) => recipe.id !== action.payload.id
      );
    default:
      return favoriteRecipes;
  }
};

export function addRecipe(recipe) {
  return {
    type: "favoriteRecipes/addRecipe",
    payload: recipe,
  };
}

export function removeRecipe(recipe) {
  return {
    type: "favoriteRecipes/removeRecipe",
    payload: recipe,
  };
}

export const selectFavoriteRecipes = (state) => state.favoriteRecipes;

export const selectFilteredFavoriteRecipes = (state) => {
  const favoriteRecipes = selectFavoriteRecipes(state);
  const searchTerm = selectSearchTerm(state);

  return favoriteRecipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};
