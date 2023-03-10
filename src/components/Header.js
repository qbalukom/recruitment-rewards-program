import { Link } from "react-router-dom";

import './Header.scss';

export function Header() {
  return <header className='app-header'>
    <h1>Rewards Program</h1>
    <Link className='home' to='/'>home</Link>
  </header>
}
