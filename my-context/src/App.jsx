import { useState } from 'react'
import './App.css'
import Layout from './components/layout'
import ProductList from './components/ProductList'
import Header from './components/Header'
import CartContext from './context/CartContext'

function App() {

  const [cartItemCount , setCartItemCount] = useState(0) ;
  const cartValue = {cartItemCount , setCartItemCount}
  return (
    <>
      <CartContext.Provider value={cartValue}>
        <Layout>
          <Header />
          <ProductList />
        </Layout>
      </CartContext.Provider>

    </>
  )
}

export default App
