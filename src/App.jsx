import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddProductForm from './pages/Form'
import Products from './pages/Products'
import Home from './pages/Home'
import Product from './pages/Product'
import {Toaster} from 'react-hot-toast'
import Layout from './components/Layout'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
              <Route path="/" element={<Layout/>}>
                      <Route path='/form' element={<AddProductForm/>}/>
                      <Route path='/products' element={<Products/>}/>
                      <Route path='/products/:id' element={<Product/>}/>
                      <Route path='/' element={<Home/>}/>
              </Route>
        </Routes>
      </BrowserRouter>
      
      <Toaster
      position = 'top-center'
      reverseOrder = {false}
    />

    </>
  )
}

export default App
