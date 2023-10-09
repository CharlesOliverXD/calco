import React, { useEffect, useState } from "react";

export default function App() {

    const [nombre, setNombre] = useState("");
    const [result, setResult] = useState();

    let Operators = ["+", "*", "/", "-"] ;

    function handleChange(value) {
        setNombre(`${nombre}` + value)

    }

    function Initial() {
        setNombre("");
        setResult("");
    }

    useEffect(() => { Initial() }, []);

    useEffect(() => {
        if (Operators.includes(nombre[nombre.length - 1])) {

        } else {
            setResult(eval(nombre));

        }
    }, [nombre]);



    function putDote() {
        if (nombre === 0) {
            setNombre('0.');
        } else {
            const Doted = nombre.includes(".");
            Doted ? setNombre(nombre) : setNombre(`${nombre}` + '.');
        }

    }

    function Delete() {

        let len = parseInt(nombre.length - 1);
        if (nombre === 0) { }

        if (len <= 0) {
            setNombre("");
        } else {
            setNombre(nombre.slice(0, -1));
        }

    }

    function AddOperator(operator){
        if (!nombre.endsWith(operator)) {

            if (Operators.includes(operator)) {
                let indice = Operators.indexOf(operator);
                Operators.splice(Operators.indexOf(operator), 1);
            }

            if (Operators.includes(nombre[nombre.length - 1])) {
                // On remplace l'opérateur par "+"
                let nombreRemp = nombre.slice(0, nombre.length-1)+ operator;
                console.log(nombreRemp);
                setNombre(nombreRemp);

            } else {
                setNombre(nombre + operator);

            }

        }

        Operators = ["+", "*", "/", "-"] ;
    }

    function Operations(operator) {
        switch (operator) {
            case "+":

                AddOperator("+") ;

                break;
            case "-":
                AddOperator("-") ;

                break;
            case "*":
                AddOperator("*") ;

                break;

            case "/":

                AddOperator("/") ;

                break;


        }


    }

    return (

        <div id="main" className="">
            <div className="claco ">
                <div className="ecran mb-2">
                    <input name="ecran" value={nombre} disabled />
                    <input name="result" className="result" value={result} disabled />
                </div>

                <div className="touches">
                    <table>
                        <tbody>
                            <tr>
                                <th id="init" onClick={() => Initial()} >AC</th>
                                <th onClick={() => Operations("/")} className="manip">/</th>
                                <th onClick={() => Operations("*")} className="manip">X</th>
                                <th onClick={() => Delete()} className="manip">Del.</th>
                            </tr>

                            <tr>
                                <th onClick={() => handleChange(7)}>7</th>
                                <th onClick={() => handleChange(8)}>8</th>
                                <th onClick={() => handleChange(9)}>9</th>
                                <th onClick={() => Operations("-")} className="manip">-</th>
                            </tr>

                            <tr>
                                <th onClick={() => handleChange(4)}>4</th>
                                <th onClick={() => handleChange(5)}>5</th>
                                <th onClick={() => handleChange(6)}>6</th>
                                <th onClick={() => { Operations("+") }} className="manip">+</th>
                            </tr>

                            <tr>
                                <th onClick={() => handleChange(1)}>1</th>
                                <th onClick={() => handleChange(2)}>2</th>
                                <th onClick={() => handleChange(3)}>3</th>
                                <th onClick={() => setNombre(result.toString())} id="egal">=</th>
                            </tr>

                            <tr>
                                <th onClick={() => setNombre(`${(nombre / 100)}`)}>%</th>
                                <th onClick={() => handleChange(0)}>0</th>
                                <th onClick={() => putDote()}>.</th>
                            </tr>
                        </tbody>

                    </table>

                </div>
            </div>
        </div>
    );
}