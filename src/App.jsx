import './App.css'
import { Route, Routes, useParams } from 'react-router-dom'
import { Home } from './pages/home/home'
import { CardPage } from './pages/cardpage/cardpage'
import { UserPage } from './pages/userpage/userpage'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/:id' element={<CardPage/>}/>
        <Route path='/users' element={<UserPage/>}/>
      </Routes>
    </>
  )
}

export default App
