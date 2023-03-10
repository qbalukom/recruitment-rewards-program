import { useState } from 'react';
import classNames from 'classnames';

import { TransactionEntry } from './TransactionEntry';

import './TransactionMonth.scss';

export function TransactionMonth({ month, bonus, transactions }) {
  const [expanded, setExpanded] = useState(false);

  return <li className={classNames('transaction-month', { expanded })}>
    <header onClick={() => setExpanded(!expanded)}>
      <span className='month'>{month}</span>
      <span className='bonus'>bonus: ${bonus}</span>
    </header>
    {expanded && <ul>
      {transactions?.map(item => <TransactionEntry key={item.id} transaction={item} />)}
    </ul>}
  </li>;
}
