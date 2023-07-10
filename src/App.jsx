import './App.css'
import UsersList from './UsersList.jsx'
import UserDetail from './UserDetail.jsx'
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<UsersList />}></Route>
      <Route path='/detail/:id' element={<UserDetail />}></Route>
    </Routes>
  )
}
