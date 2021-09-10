import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import PageContainer from '../components/atoms/PageContainer'
import RecipeForm from '../components/recipe/RecipeForm'

import { getRecipeById, patchRecipe } from '../data/recipes/api'

import { BaseRecipe, Recipe } from '../data/recipes/types'

type EditRecipeParams = {
  recipeId: string
}

export default () => {
  const { recipeId } = useParams<EditRecipeParams>()
  const [recipe, setRecipe] = useState<Recipe>()

  useEffect(() => {
    const getRecipeWithId = async () => {
      const result = await getRecipeById({
        recipeId: parseInt(recipeId, 10),
      })
      setRecipe(result)
    }

    getRecipeWithId()
  }, [])

  const handleSubmit = async ({
    name,
    description,
    ingredients,
  }: BaseRecipe) => {
    await patchRecipe({
      recipeId: parseInt(recipeId, 10),
      name,
      description,
      ingredients,
    })
  }

  return (
    <PageContainer>
      <h1>Edit Recipe</h1>
      <Link to="/">Back to Recipes</Link>
      {recipe && <RecipeForm recipe={recipe} handleSubmit={handleSubmit} />}
    </PageContainer>
  )
}
