import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FavoriteButton from "../../components/FavoriteButton";
import Recipe from "../../components/Recipe";
import {
  selectFilteredFavoriteRecipes,
  removeFavoriteRecipe,
} from "./favoriteRecipesSlice";
import Spinner from "../../components/Spinner";

import unfavoriteIconUrl from "../../img/unfavorite.svg";

const FavoriteRecipes = () => {
  const dispatch = useDispatch();
  const favoriteRecipes = useSelector(selectFilteredFavoriteRecipes);
  const { isLoading } = useSelector((state) => state.allRecipes);

  const onRemoveFavoriteRecipeHandler = (recipe) => {
    dispatch(removeFavoriteRecipe(recipe));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="recipes-container">
      {favoriteRecipes.map((recipe) => (
        <Recipe recipe={recipe} key={recipe.id}>
          <FavoriteButton
            onClickHandler={() => onRemoveFavoriteRecipeHandler(recipe)}
            icon={unfavoriteIconUrl}
          >
            Remove Favorite
          </FavoriteButton>
        </Recipe>
      ))}
    </div>
  );
};

export default FavoriteRecipes;
