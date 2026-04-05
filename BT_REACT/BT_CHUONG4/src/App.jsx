import { useState } from 'react'
import './App.css'
import CartContext from './context/CartContext'
import Layout from './components/Layout/Layout'
import ProductItem from './components/Product/ProductItem/ProductItem'
import Stopwatch from './components/Stopwatch/Stopwatch'
import ElementSizeMeasurer from './components/ElementSizeMeasurer/ElementSizeMeasurer'
function CartProvider({ children }) {
  const [cartItemCount, setCartItemCount] = useState(0);
  const cartValue = { cartItemCount, setCartItemCount }
  return (
    <>
      <CartContext.Provider value={cartValue}>
        {children}
      </CartContext.Provider>
    </>
  )
}

function App() {
  return (
    <>
      <h1>Bai 1 : C </h1>
      <h1>Bai 2 : C </h1>
      <h1>Bai 3 : C </h1>
      <h1>Bai 4 : B </h1>
      <h1>Bai 5 : C </h1>
      <h1>Bai 6 : C </h1>
      <h1>Bai 7 : D </h1>
      <h1>Bai 8 : D </h1>
      <br />

      <h1>Bai 9 : </h1>
      <br />
      <CartProvider>
          <Layout/>
          <ProductItem/>
      </CartProvider>

      <br />
      <h1>Bai 10 : </h1>
      <Stopwatch/>
      <br />
      <h1>Bai 11 :  </h1>
      <ElementSizeMeasurer/>
    </>
  )
}

export default App
