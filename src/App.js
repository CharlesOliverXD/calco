import React, { useEffect, useState } from "react";

export default function App() {

    const [nombre, setNombre] = useState("0");
    const [result, setResult] = useState();

    let elements=[] ;

    function handleChange(value) {
        setNombre(`${nombre}` + value)

    }

    function Initial() {
        setNombre("0");
        setResult("0");
    }

    useEffect(()=>{Initial()} , []) ;

    useEffect((){
        
    },[]) ;

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
            setNombre("0");
        } else {
            setNombre(nombre.slice(0, -1));
        }

    }

    function Operations(operande) {
        switch (operande) {
            case "+":
                setResult(parseFloat(nombre));
                if (nombre[nombre.length - 1] === "+") {

                } else {
                   
                    elements.push(nombre.split("+")) ;
                    elements.push("+") ;

                    let somme =0;
                    elements[0].forEach( (item)=>{
                        somme = parseFloat(somme) + parseFloat(item) ;
                        // console.log( item );
                    } );
                    
                    setResult( parseFloat(somme) ) ;
                    console.log( elements );

                    setNombre(nombre + "+");

                }

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
                                <th className="manip">/</th>
                                <th className="manip">X</th>
                                <th onClick={() => Delete()} className="manip">Del.</th>
                            </tr>

                            <tr>
                                <th onClick={() => handleChange(7)}>7</th>
                                <th onClick={() => handleChange(8)}>8</th>
                                <th onClick={() => handleChange(9)}>9</th>
                                <th className="manip">-</th>
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
                                <th id="egal">=</th>
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