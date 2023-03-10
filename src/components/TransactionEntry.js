import './TransactionEntry.scss';

export function TransactionEntry({ transaction }) {
  return <li className='transaction-entry'>
    <span className='date'>{transaction.date}</span>
    <span className='amount'>${transaction.amount}</span>
    <span className='bonus'>bonus: ${transaction.bonus}</span>
  </li>;
}
