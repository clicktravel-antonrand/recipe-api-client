export interface Ingredient {
  name: string
}

export interface BaseRecipe {
  name: string
  description?: string
  ingredients: Ingredient[]
}

export interface Recipe extends BaseRecipe {
  id: number
}

export interface GetRecipeByIdParams {
  recipeId: number
}

export interface PostRecipeParams {
  name: string
  description: string
  ingredients: Ingredient[]
}

export interface PatchRecipeParams {
  recipeId: number
  name?: string
  description?: string
  ingredients?: Ingredient[]
}

export interface DeleteRecipeParams {
  recipeId: number
}
