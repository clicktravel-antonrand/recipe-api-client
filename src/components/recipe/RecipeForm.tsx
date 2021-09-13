import React, { useState } from 'react'
import styled from 'styled-components'

import Label from '../atoms/Label'
import Input from '../atoms/Input'
import Button from '../atoms/Button'
import TextArea from '../atoms/TextArea'

import IngredientsList from './IngredientsList'

import { BaseRecipe, Ingredient } from '../../data/recipes/types'

const RecipeFormContainer = styled.div`
  width: 50%;
  padding-top: 20px;
`

type RecipeFormProps = {
  recipe?: BaseRecipe
  handleSubmit: ({ name, description, ingredients }: BaseRecipe) => void
}

const RecipeForm = ({ recipe, handleSubmit }: RecipeFormProps) => {
  const [name, setName] = useState(recipe?.name || '')
  const [description, setDescription] = useState(recipe?.description || '')
  const [ingredients, setIngredients] = useState(recipe?.ingredients || [])

  return (
    <RecipeFormContainer>
      <form
        name="recipe-form"
        onSubmit={() =>
          handleSubmit({
            name,
            description,
            ingredients,
          })
        }
      >
        <Label htmlFor="recipe-name">
          <p>Name:</p>
          <Input
            id="recipe-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />
        </Label>
        <Label htmlFor="recipe-description">
          <p>Description:</p>
          <TextArea
            id="recipe-description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={6}
          />
        </Label>

        <IngredientsList
          ingredients={ingredients}
          onUpdate={(updatedIngredients: Ingredient[]) =>
            setIngredients(updatedIngredients)
          }
        />
        <Button
          data-testid="submit-recipe-form-button"
          id="submit-recipe"
          type="submit"
          value="Submit"
        >
          Submit
        </Button>
      </form>
    </RecipeFormContainer>
  )
}

RecipeForm.defaultProps = {
  recipe: undefined,
}

export default RecipeForm
