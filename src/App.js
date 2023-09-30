import React, { useState } from "react";

export default function App() {

    const [nombre, setNombre] = useState(parseFloat(0));

    function handleChange(value) {
        setNombre(`${parseFloat(nombre)}` + value)
    }

    function putDot() {
        const Doted = nombre.includes(",");

        // Doted ? setNombre(`${parseFloat(nombre)}`) : setNombre(`${parseFloat(nombre)}` + ',0') ;
    }

    function Delete() {

        let len = parseInt(nombre.length) ;
        console.log("avant "+len);

        // if (len === 0) {
        //     setNombre(0);
        // } else {
        //     setNombre(nombre.slice(0, -1));

        // }

        console.log(nombre.length-1);
    }

    return (

        <div id="main" className="">
            <div className="claco ">
                <div className="ecran mb-2">
                    <input value={nombre} disabled />
                </div>

                <div className="touches">
                    <table>
                        <tbody>
                            <tr>
                                <td id="init" onClick={() => setNombre(0)} >AC</td>
                                <td className="manip">/</td>
                                <td className="manip">X</td>
                                <td onClick={() => Delete()} className="manip">Del.</td>
                            </tr>

                            <tr>
                                <td onClick={() => handleChange(7)}>7</td>
                                <td onClick={() => handleChange(8)}>8</td>
                                <td onClick={() => handleChange(9)}>9</td>
                                <td className="manip">-</td>
                            </tr>

                            <tr>
                                <td onClick={() => handleChange(4)}>4</td>
                                <td onClick={() => handleChange(5)}>5</td>
                                <td onClick={() => handleChange(6)}>6</td>
                                <td className="manip">+</td>
                            </tr>

                            <tr>
                                <td onClick={() => handleChange(1)}>1</td>
                                <td onClick={() => handleChange(2)}>2</td>
                                <td onClick={() => handleChange(3)}>3</td>
                                <td id="egal">=</td>
                            </tr>

                            <tr>
                                <td onClick={() => setNombre(`${parseFloat(nombre / 100)}`)}>%</td>
                                <td onClick={() => handleChange(0)}>0</td>
                                <td onClick={() => putDot()}>.</td>
                            </tr>
                        </tbody>

                    </table>

                </div>
            </div>
        </div>
    );
}