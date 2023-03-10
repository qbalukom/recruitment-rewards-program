import { useParams } from 'react-router-dom';

import { Spinner } from '../components/Spinner';
import { Error } from '../components/Error';
import { useGet } from '../api/useData';
import { TransactionList } from '../components/TransactionList';

export function Transactions() {
  const { userId } = useParams();
  const { data, loading, error } = useGet(`transactions/${userId}`);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return <>
    <h2 className='transactions-header'>{userId} transactions</h2>
    <TransactionList transactions={data} />
  </>;
}
