import { createStore, combineReducers } from "redux";
import { favoriteRecipesSlice } from "../features/favoriteRecipes/favoriteRecipesSlice.js";
import { searchTermReducer } from "../features/searchTerm/searchTermSlice.js";
import { allRecipesReducer } from "../features/allRecipes/allRecipesSlice.js";

export const store = createStore(
  combineReducers({
    favoriteRecipes: favoriteRecipesSlice.reducer,
    searchTerm: searchTermReducer,
    allRecipes: allRecipesReducer,
  })
);
