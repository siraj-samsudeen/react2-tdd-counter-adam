import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

test('should display an initial value 7', () => {
  render(<Counter initialValue={7} />);
  const counter = screen.queryByText('7');
  expect(counter).toBeVisible();
});
test('should display an initial value 0, by default', () => {
  render(<Counter />);
  const counter = screen.queryByText('0');
  expect(counter).toBeVisible();
});
test('clicking add button once should increment by 1 ', () => {
  render(<Counter />);
  const addButton = screen.getByRole('button', { name: /add/i });
  userEvent.click(addButton);
  const counter = screen.queryByText('1');
  expect(counter).toBeVisible();
});
test('clicking add button twice should increment by 2 ', () => {
  render(<Counter />);
  const addButton = screen.getByRole('button', { name: /add/i });
  userEvent.click(addButton);
  userEvent.click(addButton);
  const counter = screen.queryByText('2');
  expect(counter).toBeVisible();
});
test('clicking remove button once should reduce by 1 ', () => {
  render(<Counter initialValue={3} />);
  const removeButton = screen.getByRole('button', { name: /remove/i });
  userEvent.click(removeButton);
  const counter = screen.queryByText('2');
  expect(counter).toBeVisible();
});
test('clicking remove button twice should reduce by 2 ', () => {
  render(<Counter initialValue={3} />);
  const removeButton = screen.getByRole('button', { name: /remove/i });
  userEvent.click(removeButton);
  userEvent.click(removeButton);
  const counter = screen.queryByText('1');
  expect(counter).toBeVisible();
});
test('counter should not become negative', () => {
  render(<Counter initialValue={1} />);
  const removeButton = screen.getByRole('button', { name: /remove/i });
  userEvent.click(removeButton);
  userEvent.click(removeButton);
  const counter = screen.queryByText('0');
  expect(counter).toBeVisible();
});
