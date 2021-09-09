import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import { PageContainer } from '../components/atoms/PageContainer'
import { RecipeForm } from '../components/recipe/RecipeForm'

import { getRecipeById, patchRecipe } from '../data/recipes/api'

import { BaseRecipe, Recipe } from '../data/recipes/types'

type EditRecipeParams = {
  recipeId: string
}

export const EditRecipe = () => {
  const { recipeId } = useParams<EditRecipeParams>()
  const [recipe, setRecipe] = useState<Recipe>()

  useEffect(() => {
    const getRecipeWithId = async () => {
      const result = await getRecipeById({
        recipeId: parseInt(recipeId),
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
    console.log('Patch Recipe')
    await patchRecipe({
      recipeId: parseInt(recipeId),
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
