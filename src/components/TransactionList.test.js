import { render, screen } from '@testing-library/react';

import { addBonuses, groupByMonth, totalBonus } from '../helpers/calculator';
import { TransactionList } from './TransactionList';

jest.mock('../helpers/calculator');

it('should call calculator functions', () => {
  addBonuses.mockReturnValue([]);
  groupByMonth.mockReturnValue([]);
  totalBonus.mockReturnValue(123);

  render(<TransactionList transactions={[]} />);

  expect(addBonuses).toHaveBeenCalled();
  expect(groupByMonth).toHaveBeenCalled();
  expect(totalBonus).toHaveBeenCalled();
});

it('should display total value', () => {
  addBonuses.mockReturnValue([]);
  groupByMonth.mockReturnValue([]);
  totalBonus.mockReturnValue(123);

  render(<TransactionList transactions={[]} />);

  expect(screen.getByText(/^total bonus/)).toHaveTextContent('total bonus: $123');
});

it('should display grouped months', () => {
  addBonuses.mockReturnValue([]);
  groupByMonth.mockReturnValue([
    {
      month: '2023-01',
      bonus: 0,
      transactions: [],
    },
    {
      month: '2023-02',
      bonus: 0,
      transactions: [],
    },
  ]);
  totalBonus.mockReturnValue(123);

  render(<TransactionList transactions={[]} />);

  expect(screen.getByText(/^2023-01$/)).toBeInTheDocument();
  expect(screen.getByText(/^2023-02$/)).toBeInTheDocument();
});
