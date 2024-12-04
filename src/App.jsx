import React, { useState } from 'react';
import { Header } from './Components/Header';
import { Content } from './Components/Content';
import { Testimonios } from './Components/Testimonios';
import { test } from './info/testimonios';
import { Footer } from './Components/Footer';
import { products } from './info/products';
import { ProductCard } from './Components/ProductsCard';
import { Comprar } from './Components/Comprar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export function App() {
  const [currentpath, setCurrentPath] = useState(window.location.pathname)
  const [cart, setCart] = useState([]); // Estado del carrito

  // Función para añadir productos al carrito
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]); // Agrega el producto al carrito
  };
  const total = cart.reduce((sum, product) => sum + product.price, 0)

  return (
    <div className="d-flex flex-column vh-100">
      <Header HeaderCart={cart} HeaderTotal={total} />
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Content />
              <main className='flex-grow-1'>
                <div className="container my-4">
                  <h1 className="text-center m-4">Nuestros Productos</h1>
                  <div className="row g-4">
                    {products.map((product, index) => (
                      <ProductCard
                        key={index}
                        name={product.name}
                        description={product.desc}
                        price={product.price}
                        onAddToCart={addToCart} // Pasa la función al componente
                      />
                    ))}
                  </div>
                </div>
                <div className="container my-4">
                  <h1 className="text-center m-4">Testimonios</h1>
                  <div className="row g-4">
                    {test.map((testimonio, index) => (
                      <Testimonios
                        key={index}
                        img={testimonio.img}
                        desc={testimonio.desc}
                        name={testimonio.name}
                        cargo={testimonio.cargo}
                      />
                    ))}
                  </div>
                </div>
              </main>
            </>
          }
        />
        <Route
          path='/comprar'
          element={<Comprar cart={cart} total={total} />}
        />
      </Routes>

      <Footer />
    </div>
  );
}