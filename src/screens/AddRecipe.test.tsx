import React from 'react'

import { MemoryRouter } from 'react-router-dom'

import { act, fireEvent, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AddRecipe from './AddRecipe'

import { postRecipe } from '../data/recipes/api'

jest.mock('../data/recipes/api')

describe('<AddRecipe>', () => {
  test('it should post the new recipe to the API', async () => {
    const { getByLabelText, getByTestId } = render(
      <MemoryRouter>
        <AddRecipe />
      </MemoryRouter>
    )

    const nameInput = getByLabelText('Name:')
    const descriptionInput = getByLabelText('Description:')
    const ingredientsInput = getByLabelText('Add an ingredient:')

    const expectedRecipe = {
      name: 'Chocolate Chip Muffins',
      description: 'A sweet treat',
      ingredients: [{ name: 'Chocolate' }, { name: 'Flour' }],
    }

    fireEvent.change(nameInput, { target: { value: expectedRecipe.name } })
    fireEvent.change(descriptionInput, {
      target: { value: expectedRecipe.description },
    })

    await act(async () => {
      await userEvent.type(
        ingredientsInput,
        expectedRecipe.ingredients[0].name,
        { delay: 1 }
      )
    })
    fireEvent.click(getByTestId('add-ingredient-button'))

    await act(async () => {
      await userEvent.type(
        ingredientsInput,
        expectedRecipe.ingredients[1].name,
        { delay: 1 }
      )
    })
    fireEvent.click(getByTestId('add-ingredient-button'))

    fireEvent.click(getByTestId('submit-recipe-form-button'))

    expect(postRecipe).toHaveBeenCalledWith(expectedRecipe)
  })
})
