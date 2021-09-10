import React from "react";

import styled from 'styled-components'

import RecipeCard from './RecipeCard'
import { Recipe } from '../../data/recipes/types'

const RecipeContainer = styled.div`
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
`

type RecipeListProps = {
  recipes: Recipe[]
  deleteHandler: (recipeId: number) => void
}

export default ({recipes, deleteHandler} : RecipeListProps) => (
    <RecipeContainer>
      {recipes &&
        recipes.map((recipe) => (
          <RecipeCard
            key={Number(recipe.id)}
            recipe={recipe}
            deleteHandler={deleteHandler}
          />
        ))}
      {(!recipes || !recipes.length) && (
        <h3>There are no recipes</h3>
      )}
    </RecipeContainer>
  )
