import styled from 'styled-components'

import { RecipeCard } from './RecipeCard'
import { Recipe } from '../../data/recipes/types'

const RecipeContainer = styled.div`
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
`

type RecipeListProps = {
  recipes: Recipe[]
  deleteHandler: (recipeId: number) => void
}

export const RecipeList = (props: RecipeListProps) => {
  return (
    <RecipeContainer>
      {props.recipes &&
        props.recipes.map((recipe) => (
          <RecipeCard
            key={Number(recipe.id)}
            recipe={recipe}
            deleteHandler={props.deleteHandler}
          />
        ))}
      {(!props.recipes || !props.recipes.length) && (
        <h3>There are no recipes</h3>
      )}
    </RecipeContainer>
  )
}
