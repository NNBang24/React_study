import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ProductCard from './components/ProductCard/ProductCard'
import ProductList from './components/ProductList/ProductList'
import Dashboard from './components/Dashboard/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Bai 1 : B </h1>
      <h1>Bai 3 : B </h1>
      <h1>Bai 4 : </h1>
      <br />
      <ProductList />
      <br />
      <h1>Bai 5 : </h1>
      <br />
      <Dashboard />
      <br />
      <h1>Bai 6 : C </h1>
      <h1>Bai 7 : B </h1>
      <h1>Bai 8 : A </h1>
      <h1>Bai 9 : B </h1>
      <h1>Bai 10 : C </h1>
      <h1>Bai 11 : C </h1>
      <h1>Bai 12 : D </h1>
      <h1>Bai 13 : B </h1>
      <h1>Bai 14 : B </h1>
      <h1>Bai 15 : A </h1>

    </>

  )
}

export default App
