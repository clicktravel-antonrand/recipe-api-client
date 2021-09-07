import styled from 'styled-components';

import { RecipeCard } from './RecipeCard';


const RecipeContainer = styled.div`
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const RecipeList = (props) => {

  return (
    <RecipeContainer>
       {
        props.recipes &&
        props.recipes.map((recipe) =>
          <RecipeCard key={recipe.id} recipe={recipe} deleteHandler={props.deleteHandler} />
        )
      }
      {
        (!props.recipes || !props.recipes.length)  && <h3>There are no recipes</h3>
      }
    </RecipeContainer>
  )
}
