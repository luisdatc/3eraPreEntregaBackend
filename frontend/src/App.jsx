import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginRegister from "./components/LoginRegister/LoginRegister";
import NewProduct from "./components/NewProduct/NewProduct";
import NavBar from "./components/NavBar/NavBar";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<LoginRegister />} />
        <Route path="/" element={<NewProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
