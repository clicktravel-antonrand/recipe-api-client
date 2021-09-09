import React, { useState, useEffect } from 'react'

import { PageContainer } from '../components/atoms/PageContainer'
import { Input } from '../components/atoms/Input'

import { RecipeList } from '../components/recipe/RecipeList'

import { getRecipes, deleteRecipe } from '../data/recipes/api'

import { Button } from '../components/atoms/Button'
import { Link } from 'react-router-dom'
import { Recipe } from '../data/recipes/types'

export const ViewRecipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [filter, setFilter] = useState<string>('')

  const fetchRecipes = async () => {
    const result = await getRecipes(filter)
    setRecipes(result)
  }

  const removeRecipe = async (recipeId: number) => {
    await deleteRecipe({
      recipeId,
    })
    await fetchRecipes()
  }

  useEffect(() => {
    // I have wrapped in an anonymous function as without this TypeScript
    // complained about the method signature of useEffect returning a promise.
    const getAllRecipes = async () => {
      await fetchRecipes()
    }

    getAllRecipes()
  }, [])

  return (
    <PageContainer>
      <h1>
        Take a look for recipe inspiration, or{' '}
        <Link to="/add-recipe">add your own</Link>...
      </h1>
      <div>
        <label>
          <p>Search for a recipe:</p>
          <Input
            id="recipe-filter"
            value={filter}
            placeholder="Recipe name"
            onChange={(event) => setFilter(event.target.value)}
          />
          <Button secondary onClick={() => fetchRecipes()}>
            Search
          </Button>
        </label>
      </div>
      <RecipeList recipes={recipes} deleteHandler={removeRecipe} />
    </PageContainer>
  )
}
