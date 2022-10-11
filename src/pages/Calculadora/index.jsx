import { useState } from "react";
import "./styles.css";

export default function Calculadora() {
    const [valueDisplay, setValueDisplay] = useState("");
    const [operacao, setOperacao] = useState("");
    const [numeroNovo, setNumeroNovo] = useState(true);
    const operacoes = ["+", "-", "*", "/"];

    function atualizaDisplay() {
        setValueDisplay(eval(operacao));
    }
    function removeDigitosAtuais() {
        let displayLength = valueDisplay.length;
        setOperacao(operacao.slice(0, -displayLength));
        setValueDisplay(valueDisplay.slice(0, -displayLength));
    }
    function removeTodosDigitos() {
        setOperacao("");
        setValueDisplay("");
    }
    function removeUltimoDigito() {
        if (operacoes.includes(operacao[operacao.length - 1])) return;
        setValueDisplay(valueDisplay.slice(0, -1));
        setOperacao(operacao.slice(0, -1));
    }

    function adicionaValorInput(e) {
        if ((valueDisplay == "" && e.target.innerText == ".")
            || (valueDisplay[valueDisplay.length - 1] == "." && e.target.innerText == "."))
            return;
        if (valueDisplay == "" && operacoes.includes(e.target.innerText)) return;
        else {
            if (operacoes.includes(e.target.innerText)) {
                setNumeroNovo(true);
                setValueDisplay(eval(operacao));
            } else if (numeroNovo) {
                setValueDisplay(e.target.innerText);
                setNumeroNovo(false);
            } else {
                setValueDisplay(valueDisplay + e.target.innerText);
            }
            setOperacao(operacao + e.target.innerText)
        }
    }
    return (
        <div className="calculadora-container">
            <div className="calculadora">
                <div className="input-calculadora">
                    <span>{valueDisplay}</span>
                </div>
                <div className="buttons">
                    <div className="primeira-fileira">
                        <button className="btn btn-apaga-todos-digitos-atuais" onClick={removeDigitosAtuais}>CE</button>
                        <button className="btn btn-apaga-todos-digitos" onClick={removeTodosDigitos}>C</button>
                        <button className="btn btn-apagar-ultimo-digito" onClick={removeUltimoDigito}>←</button>
                        <button className="btn btn-/" onClick={adicionaValorInput}>/</button>
                    </div>
                    <div className="segunda-fileira">
                        <button className="btn btn-7" onClick={adicionaValorInput}>7</button>
                        <button className="btn btn-8" onClick={adicionaValorInput}>8</button>
                        <button className="btn btn-9" onClick={adicionaValorInput}>9</button>
                        <button className="btn btn-*" onClick={adicionaValorInput}>*</button>
                    </div>
                    <div className="terceira-fileira">
                        <button className="btn btn-4" onClick={adicionaValorInput}>4</button>
                        <button className="btn btn-5" onClick={adicionaValorInput}>5</button>
                        <button className="btn btn-6" onClick={adicionaValorInput}>6</button>
                        <button className="btn btn--" onClick={adicionaValorInput}>-</button>
                    </div>
                    <div className="quarta-fileira">
                        <button className="btn btn-1" onClick={adicionaValorInput}>1</button>
                        <button className="btn btn-2" onClick={adicionaValorInput}>2</button>
                        <button className="btn btn-3" onClick={adicionaValorInput}>3</button>
                        <button className="btn btn-+" onClick={adicionaValorInput}>+</button>
                    </div>
                    <div className="quinta-fileira">
                        <button className="btn btn-0" onClick={adicionaValorInput}>0</button>
                        <button className="btn btn-." onClick={adicionaValorInput}>.</button>
                        <button className="btn-igual" onClick={atualizaDisplay}>=</button>

                    </div>
                </div>
            </div>
        </div >
    )
}