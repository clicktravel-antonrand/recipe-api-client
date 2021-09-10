import React from "react";

import { Link } from 'react-router-dom'

import PageContainer from '../components/atoms/PageContainer'
import RecipeForm from '../components/recipe/RecipeForm'

import { postRecipe } from '../data/recipes/api'
import { BaseRecipe } from '../data/recipes/types'

export default () => {
  const handleSubmit = async ({
    name,
    description = '',
    ingredients,
  }: BaseRecipe) => {
    await postRecipe({
      name,
      description,
      ingredients,
    })
  }

  return (
    <PageContainer>
      <h1>Add Recipe</h1>
      <Link to="/">Back to Recipes</Link>
      <RecipeForm handleSubmit={handleSubmit} />
    </PageContainer>
  )
}
