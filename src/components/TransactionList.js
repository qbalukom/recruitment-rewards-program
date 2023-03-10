import { useMemo } from 'react';

import { addBonuses, groupByMonth, totalBonus } from '../helpers/calculator';
import { THRESHOLDS } from '../config';
import { TransactionMonth } from './TransactionMonth';

import './TransactionList.scss';

export function TransactionList({ transactions }) {
  const groupedTransactions = useMemo(() => {
    const withBonuses = addBonuses(transactions, THRESHOLDS);
    return groupByMonth(withBonuses);
  }, [transactions]);
  const bonus = useMemo(() => totalBonus(groupedTransactions), [groupedTransactions]);

  return <>
    <div className='total-bonus'>total bonus: ${bonus}</div>
    <ul className='transaction-list'>
      {groupedTransactions.map(item => <TransactionMonth key={item.month} {...item} />)}
    </ul>
  </>;
}
