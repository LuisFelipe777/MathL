import "./styles.css";

import CalculadoraLink from "../../components/calculadoraLink";
import ConversorMoedaLink from "../../components/ConversorMoedaLink";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="home-container">
            <Link to="/calculadora" >
                <CalculadoraLink />
            </Link>
            <Link to="/conversor-de-moedas">
                <ConversorMoedaLink />
            </Link>
        </div >
    )
}