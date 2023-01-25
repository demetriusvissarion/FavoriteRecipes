import { createSlice } from "@reduxjs/toolkit";
import { selectSearchTerm } from "../searchTerm/searchTermSlice.js";

import biscuits from "../../img/biscuits.jpg";
import bulgogi from "../../img/bulgogi.jpg";
import calamari from "../../img/calamari.jpg";

/* Create your Slice object here. */
const options = {
  name: "favoriteRecipes",
  initialState: [
    { id: 0, name: "Biscuits", img: biscuits },
    { id: 1, name: "Bulgogi", img: bulgogi },
    { id: 2, name: "Calamari", img: calamari },
  ],
  reducers: {
    addRecipe: (state, action) => {
      state.push(action.payload);
    },
    removeRecipe: (state, action) => {
      return state.filter((recipe) => recipe.id !== action.payload.id);
    },
  },
};

export const favoriteRecipesSlice = createSlice(options);

/* Do not delete the code below...*/

export const selectFavoriteRecipes = (state) => state.favoriteRecipes;

export const selectFilteredFavoriteRecipes = (state) => {
  const favoriteRecipes = selectFavoriteRecipes(state);
  const searchTerm = selectSearchTerm(state);

  return favoriteRecipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

// console.log(favoriteRecipesSlice.name);
// for (const action in favoriteRecipesSlice.actions) {
//   console.log(action);
// }

export const { addRecipe, removeRecipe } = favoriteRecipesSlice.actions;
