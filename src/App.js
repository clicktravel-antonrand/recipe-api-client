import { Fragment } from 'react';

import GlobalStyle from './GlobalStyle';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { ViewRecipes } from './screens/ViewRecipes';
import { AddRecipe } from './screens/AddRecipe';
import { EditRecipe } from './screens/EditRecipe';

import { Navbar } from './components/Navbar';
import { Acknowledgements } from './screens/Acknowledgements';


function App() {
  return (
    <Fragment>
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
    </Fragment>
  );
}

export default App;
