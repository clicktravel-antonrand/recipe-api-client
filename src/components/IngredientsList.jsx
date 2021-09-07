import styled from 'styled-components'

import { useState } from 'react'
import { Input } from './atoms/Input'
import { Button } from './atoms/Button'

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

export const IngredientsList = (props) => {
  const [ingredients, setIngredients] = useState(props.ingredients)

  const [additionalIngredientName, setAdditionalIngredientName] = useState('')

  const addIngredient = () => {
    if (!additionalIngredientName) {
      return
    }

    const existingIngredientWithMatchingName = ingredients.find(
      (ingredient) => {
        return ingredient.name === additionalIngredientName
      }
    )

    if (!existingIngredientWithMatchingName) {
      setIngredients([...ingredients, { name: additionalIngredientName }])
      setAdditionalIngredientName('')
      props.onUpdate([...ingredients, { name: additionalIngredientName }])
    }
  }

  const deleteIngredient = (ingredientToRemove) => {
    const ingredientsWithRemovedItem = ingredients.filter(
      (ingredient) => ingredient.name !== ingredientToRemove.name
    )
    setIngredients(ingredientsWithRemovedItem)
    props.onUpdate(ingredientsWithRemovedItem)
  }

  return (
    <div>
      <label>
        <p>Add an ingredient:</p>
        <Input
          value={additionalIngredientName}
          placeholder="Ingredient name"
          onChange={(event) => setAdditionalIngredientName(event.target.value)}
        />
        <Button
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
            <li key={ingredient.name}>
              <p>
                {ingredient.name} -{' '}
                <ButtonLink
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
