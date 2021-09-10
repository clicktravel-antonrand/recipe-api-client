import React from "react";

import { MemoryRouter } from 'react-router-dom';

import { render, fireEvent, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event';

import {IngredientsList} from "./IngredientsList";

const ingredients = [
    { 'name': 'dough' },
    { 'name': 'tomato' },
    { 'name': 'cheese' },
    { 'name': 'pepperoni' },
];

const onUpdate = jest.fn();

describe('<RecipeCard>', () => {

    test('it should display the current ingredients', async () => {
        const { getAllByTestId } = render(
            <MemoryRouter>
                <IngredientsList ingredients={ingredients} onUpdate={onUpdate} />
            </MemoryRouter>
        )

        const renderedIngredients = await getAllByTestId('ingredients-list_ingredient-element')
        expect(renderedIngredients.length).toEqual(4);

        renderedIngredients.forEach((item, index) => {
            const expectedName = ingredients[index].name;
            expect(item.textContent).toContain(expectedName)
        });
    })

    test('it should call the update handler when an ingredient is added', async () => {
        const { getAllByTestId, getByTestId } = render(
            <MemoryRouter>
                <IngredientsList ingredients={ingredients} onUpdate={onUpdate} />
            </MemoryRouter>
        )

        const ingredientNameInput = getByTestId('add-ingredient-input')
        const newIngredientName = 'Pineapple';

        await act((async () => {
            await userEvent.type(ingredientNameInput, newIngredientName, { delay: 1 })
        }))

        fireEvent.click(screen.getByTestId('add-ingredient-button'))

        const renderedIngredients = await getAllByTestId('ingredients-list_ingredient-element')
        expect(renderedIngredients.length).toEqual(5);

        expect(onUpdate).toHaveBeenCalledTimes(1)
        expect(onUpdate).toHaveBeenCalledWith([...ingredients, { name: newIngredientName}])
    })

    test('it should call the update handler when an ingredient is deleted', async () => {
        const { getAllByTestId } = render(
            <MemoryRouter>
                <IngredientsList ingredients={ingredients} onUpdate={onUpdate} />
            </MemoryRouter>
        )

        fireEvent.click(screen.getAllByTestId('delete-ingredient-button')[0])

        const renderedIngredients = await getAllByTestId('ingredients-list_ingredient-element')
        expect(renderedIngredients.length).toEqual(3);

        const expectedIngredients = ingredients.slice(1);
        renderedIngredients.forEach((item, index) => {
            const expectedName = expectedIngredients[index].name;
            expect(item.textContent).toContain(expectedName)
        });

        expect(onUpdate).toHaveBeenCalledTimes(1)
        expect(onUpdate).toHaveBeenCalledWith(expectedIngredients)
    })

})
