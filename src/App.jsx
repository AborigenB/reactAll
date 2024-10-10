import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home/home.jsx'
import { CardPage } from './pages/cardpage/cardpage.jsx'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/:id' element={<CardPage/>}/>
      </Routes>
    </>
  )
}

export default App
