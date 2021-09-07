import axios from 'axios'

export const getRecipes = async (nameFilter = '') => {
  const url = nameFilter.length ? `/recipes/?name=${nameFilter}` : '/recipes/'

  const response = await axios(url)

  return response.data
}

export const getRecipeById = async (recipeId) => {
  const response = await axios(`/recipes/${recipeId}/`)
  return response.data
}

export const postRecipe = async ({ name, description, ingredients }) => {
  const payload = {
    name,
    description,
    ingredients,
  }

  return axios.post('/recipes/', payload)
}

export const patchRecipe = async ({
  recipeId,
  name,
  description,
  ingredients,
}) => {
  if (!recipeId) {
    throw Error('Recipe ID is required')
  }

  const payload = {
    id: recipeId,
    name,
    description,
    ingredients,
  }

  return axios.patch(`/recipes/${recipeId}/`, payload)
}

export const deleteRecipe = async (recipeId) => {
  return axios.delete(`recipes/${recipeId}/`)
}
