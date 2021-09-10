import React from "react";

import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { render, fireEvent, screen } from '@testing-library/react'
import Navbar from './Navbar';

describe('<Navbar>', () => {

  test('it should take the user to the acknowledgements page when the link is clicked', async () => {
    const history = createMemoryHistory()
    history.push = jest.fn();

    render(
      <Router history={history}>
        <Navbar />
      </Router>
    )

    fireEvent.click(screen.getByText('Acknowledgements'))

    expect(history.push).toHaveBeenCalledWith('/acknowledgements');
  })

})
