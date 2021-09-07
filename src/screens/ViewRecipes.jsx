import React, { useState, useEffect } from 'react'

import { PageContainer } from '../components/atoms/PageContainer'
import { Input } from '../components/atoms/Input'

import { RecipeList } from '../components/RecipeList'

import { getRecipes, deleteRecipe } from '../data/recipes/api'

import { Button } from '../components/atoms/Button'
import { Link } from 'react-router-dom'

export const ViewRecipes = () => {
  const [recipes, setRecipes] = useState([])
  const [filter, setFilter] = useState('')

  const fetchRecipes = async () => {
    const result = await getRecipes(filter)
    setRecipes(result)
  }

  const removeRecipe = async (recipeId) => {
    await deleteRecipe(recipeId)
    await fetchRecipes()
  }

  useEffect(async () => {
    await fetchRecipes()
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
