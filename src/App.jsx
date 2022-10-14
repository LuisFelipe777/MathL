import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Calculadora from "./pages/Calculadora";
import ConversorDeMoedas from "./pages/ConversorDeMoedas";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {

  return (
    <div className="app">
      <Header />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/calculadora" element={<Calculadora />} />
        <Route path="/conversor-de-moedas" element={<ConversorDeMoedas />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
