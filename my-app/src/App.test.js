import { render, screen } from '@testing-library/react';
import App from './App';
import AircraftSeating from './Aircraft.js';

test('renders learn react link', () => {
  render(<App />);
  const initialApp = screen.getByText("Seating Plan");
  expect(initialApp).toBeInTheDocument();
});
