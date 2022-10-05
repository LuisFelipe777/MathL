import "./styles.css";
import calculadoraImg from "../../assets/imgs/calculadora.png";

export default function CalculadoraLink() {
    return (
        <div className="calculadora-link">
            <img src={calculadoraImg}></img>
            <h3>Calculadora</h3>
        </div>
    );
}