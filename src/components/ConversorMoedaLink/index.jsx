import "./styles.css";
import dolar from "../../assets/imgs/dolar.png";

export default function ConversorMoedaLink() {
    return (
        <div className="conversor-moeda">
            <img src={dolar}></img>
            <h3>Conversor De Moedas</h3>
        </div>
    );
}