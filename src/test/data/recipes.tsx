import { Recipe } from '../../data/recipes/types'

export const pepperoniPizza: Recipe = {
  id: 1,
  name: 'Pepperoni Pizza',
  description: 'Mouth watering',
  ingredients: [
    { name: 'dough' },
    { name: 'tomato' },
    { name: 'cheese' },
    { name: 'pepperoni' },
  ],
}

export const margheritaPizza: Recipe = {
  id: 2,
  name: 'Margherita Pizza',
  description: 'Mouth watering',
  ingredients: [{ name: 'dough' }, { name: 'tomato' }, { name: 'cheese' }],
}
