import React from "react";

import { Link } from 'react-router-dom'

import styled from 'styled-components'
import Button from '../atoms/Button'

import { Recipe } from '../../data/recipes/types'

const RecipeHeader = styled.h3`
  color: #4eb6ee;
`

const RecipeSubtitle = styled.h4`
  margin-bottom: 0;
`

const IngredientsList = styled.ul`
  margin-top: 0;
  margin-block-start: 0;
  padding-inline-start: 20px;
`

const RecipeContainer = styled.div`
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  transition: 0.3s;

  :hover {
    box-shadow: 0 8px 15px 0 rgba(0, 0, 0, 0.3);
  }

  margin: 10px;
  padding: 0 15px;

  min-width: 300px;
  flex: 1 1 0;
`

type RecipeProps = {
  recipe: Recipe
  deleteHandler: (recipeId: number) => void
}

export default ({recipe, deleteHandler}: RecipeProps) => (
  <RecipeContainer>
    <RecipeHeader>{recipe.name}</RecipeHeader>
    <div>
      <RecipeSubtitle>Description</RecipeSubtitle>
      <p>{recipe.description}</p>
    </div>
    <div>
      <RecipeSubtitle>Ingredients</RecipeSubtitle>
      <IngredientsList>
        {recipe.ingredients.map((ingredient) => (
          <li data-testid="ingredient-list-element" key={ingredient.name}>{ingredient.name}</li>
        ))}
      </IngredientsList>
    </div>
    <div>
      <Button
        danger
        onClick={() => {
          deleteHandler(recipe.id)
        }}
        data-testid="delete-button"
      >
        Delete Recipe
      </Button>
      <Link to={`/edit-recipe/${recipe.id}`}>
        <Button data-testid="edit-button">Edit Recipe</Button>
      </Link>
    </div>
  </RecipeContainer>
)
