import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginRegister from "./components/LoginRegister/LoginRegister";
import NewProduct from "./components/NewProduct/NewProduct";
import NavBar from "./components/NavBar/NavBar";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./components/Products/Products";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/usuario" element={<LoginRegister />} />
        <Route path="/new-product" element={<NewProduct />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
