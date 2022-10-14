import "./styles.css";
import imgSeta from "../../assets/imgs/icons8-flecha-80.png"
import { useEffect, useState } from "react";
import axios from "axios";

export default function ConversorDeMoedas() {
    const url = "http://economia.awesomeapi.com.br/json/last/";
    const [valueInput, setValueInput] = useState("");
    const [selectCoinOne, setSelectCoinOne] = useState("BRL");
    const [selectCoinTwo, setSelectCoinTwo] = useState("USD");
    const [convertedCoin, setConvertedCoin] = useState(0.00);

    const options = [
        { id: 1, code: "BRL", name: "Real" },
        { id: 2, code: "USD", name: "Dolar" },
        { id: 3, code: "EUR", name: "Euro" }
    ]
    function setSelectedCoinOne(e) {
        setSelectCoinOne(e.target.value);
    }
    function setSelectedCoinTwo(e) {
        setSelectCoinTwo(e.target.value);
    }

    useEffect(() => {
        function convertCoins() {
            if (selectCoinOne == selectCoinTwo) {
                alert("Selecione duas moedas diferentes!");
                return;
            }
            axios.get(`${url}${selectCoinOne}-${selectCoinTwo}`)
                .then(response => {
                    const data = response.data;
                    const objData = Object.values(data);
                    setConvertedCoin((objData[0].ask * valueInput).toFixed(2));
                    console.log(convertedCoin);
                }).catch(error => {
                    console.log(error)
                });
        }
        convertCoins();
    }, [valueInput, selectCoinOne, selectCoinTwo]);

    return (
        <div className="conversor-contain">
            <div className="input-contain">
                <input type="number" className="input-valor" onChange={e => setValueInput(e.target.value)} value={valueInput} />
                <select className="select-coin-one" value={selectCoinOne} onChange={setSelectedCoinOne}>
                    {options.map(e => (
                        <option id={e.id} key={e.id} value={e.code}>{e.name}</option>
                    ))}
                </select>
                <img src={imgSeta} className="setImg" />
                <select className="select-coin-two" value={selectCoinTwo} onChange={setSelectedCoinTwo}>
                    {options.map(e => (
                        <option id={e.id} key={e.id} value={e.code}>{e.name}</option>
                    ))}
                </select>
            </div>
            <div className="result-cotain">
                <div className="box-result">
                    <div className="cod-coin">
                        <span>{selectCoinOne}</span>
                        <span>{selectCoinTwo}</span>
                    </div>
                    <div className="coin-result">
                        <span style={{ "overflow": "hidden" }}>{valueInput ? parseFloat(valueInput).toFixed(2) : "0.00"}</span>
                        <span>=</span>
                        <span style={{ "overflow": "hidden" }}>{convertedCoin ? parseFloat(convertedCoin).toFixed(2) : "0.00"}</span>
                    </div>
                </div>
            </div>
        </div >
    )
}