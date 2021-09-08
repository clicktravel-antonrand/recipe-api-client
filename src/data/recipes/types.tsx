export interface Ingredient {
  name: string
}

export interface BaseRecipe {
  name: string
  description?: string
  ingredients: Ingredient[]
}

export interface Recipe extends BaseRecipe {
  id: bigint
}

export interface GetRecipeByIdParams {
  recipeId: bigint
}

export interface PostRecipeParams {
  name: string
  description: string
  ingredients: Ingredient[]
}

export interface PatchRecipeParams {
  recipeId: bigint
  name?: string
  description?: string
  ingredients?: Ingredient[]
}

export interface DeleteRecipeParams {
  recipeId: bigint
}
