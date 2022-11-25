import { render, screen } from '@testing-library/react';
import App from './App';

test('title should display Counter', () => {
  render(<App />);
  const title = screen.getByText(/counter/i);
  expect(title).toBeInTheDocument();
});
