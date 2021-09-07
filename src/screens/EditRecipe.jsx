import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import { PageContainer } from '../components/atoms/PageContainer'
import { RecipeForm } from '../components/RecipeForm'

import { getRecipeById, patchRecipe } from '../data/recipes/api'

export const EditRecipe = () => {
  const { recipeId } = useParams()
  const [recipe, setRecipe] = useState()

  useEffect(async () => {
    const result = await getRecipeById(recipeId)
    setRecipe(result)
  }, [])

  const handleSubmit = async (name, description, ingredients) => {
    await patchRecipe({
      recipeId,
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
