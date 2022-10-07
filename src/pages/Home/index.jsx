import "./styles.css";

import CalculadoraLink from "../../components/calculadoraLink";
import ConversorMedidasLink from "../../components/ConversorMedidasLink";
import ConversorMoedaLink from "../../components/ConversorMoedaLink";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="home-container">
            <Link to="/calculadora" style={{ margin: "1rem", textDecoration: "none", color: "#000" }}>
                <CalculadoraLink />
            </Link>
            <Link to="/conversor-de-moedas" style={{ margin: "1rem", textDecoration: "none", color: "#000" }}>
                <ConversorMoedaLink />
            </Link>
            <Link to="/conversor-de-medidas" style={{ margin: "1rem", textDecoration: "none", color: "#000" }}>
                <ConversorMedidasLink />
            </Link>

        </div >
    )
}