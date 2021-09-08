import axios, { AxiosResponse } from 'axios'

import {
  DeleteRecipeParams,
  GetRecipeByIdParams,
  PatchRecipeParams,
  PostRecipeParams,
  Recipe,
} from './types'

export const getRecipes = async (nameFilter = ''): Promise<Recipe[]> => {
  const url = nameFilter.length ? `/recipes/?name=${nameFilter}` : '/recipes/'

  const response = await axios(url)

  return response.data
}

export const getRecipeById = async ({
  recipeId,
}: GetRecipeByIdParams): Promise<Recipe> => {
  const response = await axios(`/recipes/${recipeId}/`)
  return response.data
}

export const postRecipe = async ({
  name,
  description,
  ingredients,
}: PostRecipeParams): Promise<Recipe> => {
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
}: PatchRecipeParams): Promise<Recipe> => {
  if (!recipeId) {
    throw Error('Recipe ID is required')
  }

  const payload = {
    name,
    description,
    ingredients,
  }

  return axios.patch(`/recipes/${recipeId}/`, payload)
}

export const deleteRecipe = async ({
  recipeId,
}: DeleteRecipeParams): Promise<AxiosResponse> => {
  return axios.delete(`recipes/${recipeId}/`)
}
