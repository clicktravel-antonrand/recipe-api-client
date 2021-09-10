import React, { useState } from 'react'
import styled from 'styled-components'

import Input from '../atoms/Input'
import Button from '../atoms/Button'
import { Ingredient } from '../../data/recipes/types'

const ButtonLink = styled.button`
  background: none;
  border: none;
  padding: 0;
  color: rgb(33, 150, 243);
  text-decoration: none;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`

type IngredientsListProps = {
  ingredients: Ingredient[]
  onUpdate: (ingredients: Ingredient[]) => void
}

export default ({
  ingredients: initialIngredients,
  onUpdate,
}: IngredientsListProps) => {
  const [ingredients, setIngredients] = useState(initialIngredients)

  const [additionalIngredientName, setAdditionalIngredientName] = useState('')

  const addIngredient = () => {
    if (!additionalIngredientName) {
      return
    }

    const existingIngredientWithMatchingName = ingredients.find(
      (ingredient) => ingredient.name === additionalIngredientName
    )

    if (!existingIngredientWithMatchingName) {
      setIngredients([...ingredients, { name: additionalIngredientName }])
      setAdditionalIngredientName('')
      onUpdate([...ingredients, { name: additionalIngredientName }])
    }
  }

  const deleteIngredient = (ingredientToRemove: Ingredient) => {
    const ingredientsWithRemovedItem = ingredients.filter(
      (ingredient) => ingredient.name !== ingredientToRemove.name
    )
    setIngredients(ingredientsWithRemovedItem)
    onUpdate(ingredientsWithRemovedItem)
  }

  return (
    <div>
      <label htmlFor="add-ingredient-input">
        <p>Add an ingredient:</p>
        <Input
          id="add-ingredient-input"
          data-testid="add-ingredient-input"
          value={additionalIngredientName}
          placeholder="Ingredient name"
          onChange={(event) => setAdditionalIngredientName(event.target.value)}
        />
        <Button
          data-testid="add-ingredient-button"
          secondary
          onClick={(event) => {
            event.preventDefault()
            addIngredient()
          }}
        >
          Add
        </Button>
      </label>

      <label>
        <p>Existing ingredients:</p>
        {!ingredients.length && <i>No ingredients</i>}
        <ul>
          {ingredients.map((ingredient) => (
            <li
              key={ingredient.name}
              data-testid="ingredients-list_ingredient-element"
            >
              <p>
                {ingredient.name} -{' '}
                <ButtonLink
                  data-testid="delete-ingredient-button"
                  onClick={(event) => {
                    event.preventDefault()
                    deleteIngredient(ingredient)
                  }}
                >
                  Remove
                </ButtonLink>
              </p>
            </li>
          ))}
        </ul>
      </label>
    </div>
  )
}
