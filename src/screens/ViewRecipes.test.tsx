import React from 'react'

import { MemoryRouter } from 'react-router-dom'
import { render, waitFor } from '@testing-library/react'
import ViewRecipes from './ViewRecipes'

import { pepperoniPizza } from '../test/data/recipes'
import { getRecipes } from '../data/recipes/api'

jest.mock('../data/recipes/api')

describe('<ViewRecipes>', () => {
  test('it should make a request to retrieve recipes', async () => {
    getRecipes.mockResolvedValue([pepperoniPizza])

    const { findByText } = render(
      <MemoryRouter>
        <ViewRecipes />
      </MemoryRouter>
    )

    expect(getRecipes).toHaveBeenCalledWith('')

    await waitFor(async () => findByText(pepperoniPizza.name))

    const nameInput = await findByText(pepperoniPizza.name)
    expect(nameInput.textContent).toEqual(pepperoniPizza.name)
  })
})
