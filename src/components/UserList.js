import { Link } from 'react-router-dom';

import './UserList.scss';

export function UserList({ users }) {
  return <ul className='user-list'>
    {users.map(user => <li key={user}>
      <Link to={`/${user}`}>{user}</Link>
    </li>)}
  </ul>;
}
