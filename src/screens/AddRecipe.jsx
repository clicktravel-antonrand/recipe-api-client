import { Link } from 'react-router-dom'

import { PageContainer } from '../components/atoms/PageContainer'
import { RecipeForm } from '../components/RecipeForm'

import { postRecipe } from '../data/recipes/api'

export const AddRecipe = () => {
  const handleSubmit = async (name, description, ingredients) => {
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
