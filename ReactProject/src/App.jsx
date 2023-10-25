import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/Navbar/Navbar'
import ItemListContainer from './components/Navbar/ItemListContainer/ItemListContainer'

function App() {

  const greeting = "Bienvenidos a mi Ecommerce"

  return (
    <>
      <NavBar/>
      <ItemListContainer mensaje={greeting}/>
    </>
  )
}

export default App
