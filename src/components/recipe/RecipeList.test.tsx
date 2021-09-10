import React from 'react'

import { MemoryRouter } from 'react-router-dom'

import { render } from '@testing-library/react'
import RecipeList from './RecipeList'

import { pepperoniPizza, margheritaPizza } from '../../test/data/recipes'

// I would replace this with random instances using Fabricator in TK project.
const recipes = [pepperoniPizza, margheritaPizza]

const deleteHandler = jest.fn()

describe('<RecipeList>', () => {
  test('it should render multiple recipe card components', async () => {
    const { findByText } = render(
      <MemoryRouter>
        <RecipeList recipes={recipes} deleteHandler={deleteHandler} />
      </MemoryRouter>
    )

    const {
      0: { name: recipeOneName },
      1: { name: recipeTwoName },
    } = recipes

    expect(findByText(recipeOneName)).toBeDefined()
    expect(findByText(recipeTwoName)).toBeDefined()
  })
})
