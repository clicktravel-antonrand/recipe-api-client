import React from "react";

import { Router, MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { render, fireEvent, waitFor, screen, within } from '@testing-library/react'
import {RecipeCard} from "./RecipeCard";

const recipe = {
    id: 1,
    name: 'Pepperoni Pizza',
    description: 'Mouth watering',
    ingredients: [
        { 'name': 'dough' },
        { 'name': 'tomato' },
        { 'name': 'cheese' },
        { 'name': 'pepperoni' },
    ]
};

const deleteHandler = jest.fn();

describe('<RecipeCard>', () => {

    test('it should display the recipe name', async () => {
        const { getByPlaceholderText, findByText } = render(
            <MemoryRouter>
                <RecipeCard recipe={recipe} deleteHandler={deleteHandler} />
            </MemoryRouter>
        )

        const name = await findByText(recipe.name);

        expect(name).toBeDefined();
    })

    test('it should display the recipe name, description and title', async () => {
        const { getByPlaceholderText, findByText, getAllByTestId } = render(
            <MemoryRouter>
                <RecipeCard recipe={recipe} deleteHandler={deleteHandler} />
            </MemoryRouter>
        )

        const name = await findByText(recipe.name);
        const description = await findByText(recipe.description);
        const ingredients = await getAllByTestId('ingredient-list-element')

        expect(name).toBeDefined();
        expect(description).toBeDefined();
        expect(ingredients).toHaveLength(4);
        ingredients.forEach((item, index) => {
           const { getByText } = within(item);
           const expectedName = recipe.ingredients[index].name;
           expect(getByText(expectedName)).toBeDefined()
        });
    })

    test('it should call the deleteHandler when the delete recipe button is clicked', async () => {
        const { getByPlaceholderText, findByText, getAllByTestId } = render(
            <MemoryRouter>
                <RecipeCard recipe={recipe} deleteHandler={deleteHandler} />
            </MemoryRouter>
        )

        fireEvent.click(screen.getByTestId('delete-button'))

        expect(deleteHandler).toHaveBeenCalledTimes(1)
        expect(deleteHandler).toHaveBeenCalledWith(recipe.id)
    })

    test('it should take the user to the edit page when the edit recipe button is clicked', async () => {
        const history = createMemoryHistory()
        history.push = jest.fn();

        render(
            <Router history={history}>
                <RecipeCard recipe={recipe} deleteHandler={deleteHandler} />
            </Router>
        )

        fireEvent.click(screen.getByTestId('edit-button'))

        expect(history.push).toHaveBeenCalledWith(`/edit-recipe/${recipe.id}`);
    })

})
