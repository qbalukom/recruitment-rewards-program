import { Routes, Route } from "react-router-dom";

import { UserList } from './routes/UserList';
import { Transactions } from './routes/Transactions';
import { Header } from './components/Header';

import './App.scss';

export function App() {
  return <>
    <Header />
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="/:userId" element={<Transactions />} />
    </Routes>
  </>;
}
