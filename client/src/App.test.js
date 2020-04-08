// External imports
import React from 'react'
import { render, findAllByTestId } from '@testing-library/react'

// Local imports
import App from './App'


test('App renders without crashing', () => {
    render(<App />)
})