import React from 'react'

import { Router, Route } from 'react-router-dom'

import { act, fireEvent, render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import EditRecipe from './EditRecipe'
import { pepperoniPizza } from '../test/data/recipes'

import { getRecipeById, patchRecipe } from '../data/recipes/api'

jest.mock('../data/recipes/api')

describe('<EditRecipe>', () => {
  test('it should patch the updated recipe to the api', async () => {
    getRecipeById.mockResolvedValue(pepperoniPizza)

    const history = createMemoryHistory({
      initialEntries: ['/edit-recipe/1'],
    })

    const { getByLabelText, getByTestId } = render(
      <Router history={history}>
        <Route path="/edit-recipe/:recipeId" component={EditRecipe} />
      </Router>
    )

    expect(getRecipeById).toHaveBeenCalledWith({
      recipeId: pepperoniPizza.id,
    })

    await waitFor(() => getByLabelText('Name:'))

    const nameInput = await getByLabelText('Name:')
    const descriptionInput = await getByLabelText('Description:')
    const ingredientsInput = await getByLabelText('Add an ingredient:')

    const newIngredient = {
      name: 'sweetcorn',
    }

    const expectedRecipe = {
      name: 'Pepperoni and Sweetcorn Pizza',
      description: 'Wonderful',
      ingredients: [...pepperoniPizza.ingredients, newIngredient],
      recipeId: pepperoniPizza.id,
    }

    fireEvent.change(nameInput, { target: { value: expectedRecipe.name } })
    fireEvent.change(descriptionInput, {
      target: { value: expectedRecipe.description },
    })

    await act(async () => {
      await userEvent.type(ingredientsInput, newIngredient.name, { delay: 1 })
    })
    fireEvent.click(getByTestId('add-ingredient-button'))

    fireEvent.click(getByTestId('submit-recipe-form-button'))

    expect(patchRecipe).toHaveBeenCalledWith(expectedRecipe)
  })
})
