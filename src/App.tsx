import React, { Fragment } from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GlobalStyle from './GlobalStyle'


import ViewRecipes from './screens/ViewRecipes'
import AddRecipe from './screens/AddRecipe'
import EditRecipe from './screens/EditRecipe'
import Acknowledgements from './screens/Acknowledgements'

import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Navbar />
        <Switch>
          <Route path="/add-recipe">
            <AddRecipe />
          </Route>
          <Route path="/edit-recipe/:recipeId">
            <EditRecipe />
          </Route>
          <Route path="/acknowledgements">
            <Acknowledgements />
          </Route>
          <Route path="/">
            <ViewRecipes />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
