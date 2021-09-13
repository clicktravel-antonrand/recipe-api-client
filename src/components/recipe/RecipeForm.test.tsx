import React from 'react'

import { MemoryRouter } from 'react-router-dom'

import { render, fireEvent, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import RecipeForm from './RecipeForm'

import { pepperoniPizza } from '../../test/data/recipes'

const recipe = pepperoniPizza

const handleSubmit = jest.fn()

describe('<RecipeForm>', () => {
  test('it should display the recipe when supplied', async () => {
    const { getByLabelText, getAllByTestId } = render(
      <MemoryRouter>
        <RecipeForm recipe={recipe} handleSubmit={handleSubmit} />
      </MemoryRouter>
    )

    const nameInput = getByLabelText('Name:')
    expect(nameInput.value).toBe(recipe.name)

    const descriptionInput = getByLabelText('Description:')
    expect(descriptionInput.value).toBe(recipe.description)

    const renderedIngredients = await getAllByTestId(
      'ingredients-list_ingredient-element'
    )
    expect(renderedIngredients.length).toEqual(4)

    renderedIngredients.forEach((item, index) => {
      const expectedName = recipe.ingredients[index].name
      expect(item.textContent).toContain(expectedName)
    })
  })

  test('it should allow a recipe to be submitted', async () => {
    const { getByLabelText, getByTestId } = render(
      <MemoryRouter>
        <RecipeForm handleSubmit={handleSubmit} />
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
    expect(handleSubmit).toHaveBeenCalledWith(expectedRecipe)
  })
})
