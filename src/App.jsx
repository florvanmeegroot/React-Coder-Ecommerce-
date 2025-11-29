import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StrictMode } from "react";
import "./App.css";
import Header from "./componentes/header";
import Main from "./componentes/Main";
import Footer from "./componentes/Footer";
import ProductoVista from "./componentes/ProductoVista";
import { CartProvider } from "./componentes/CartContext";
import Carrito from "./componentes/Carrito";

function App() {
  return (
    <CartProvider>
      <StrictMode>
        <BrowserRouter>
          <Header />

          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/producto/:id" element={<ProductoVista />} />
            <Route exact path="/carrito" element={<Carrito />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </StrictMode>
    </CartProvider>
  );
}

export default App;
