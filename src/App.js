import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Product from "./Product";
import Contact from "./Contact";
import Cart from "./Cart";
import SingleProduct from "./SingleProduct";
import ErrorPage from "./ErrorPage";
import { GlobalStyle } from "./GlobalStyle"; 
import { ThemeProvider } from "styled-components";

const App = () => {
  const theme = {
    colors: {
      bg: "#fff",
    },
  };

  return (
    <ThemeProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
