import { UserList as UserListComponent } from '../components/UserList';
import { Spinner } from '../components/Spinner';
import { Error } from '../components/Error';
import { useGet } from '../api/useData';

export function UserList() {
  const { data, loading, error } = useGet('users');

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return <>
    <h2>users</h2>
    <UserListComponent users={data} />
  </>;
}
