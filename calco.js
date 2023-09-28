import { useState } from "react";

export default function Calco(){

  const [valeur, setValeur] = useState() ;

  function handleChange(chiffre){
    setValeur( parseInt(valeur + chiffre) ) ;
  }

  return(
    <div className="main" style={{magrin : "0px", backgroundColor : "gray", height : "100vh" ,width : "100vw", display: "fex", justifyContent : "center", alignItems : "center", paddingTop : "30px"} }>
        <div className="container" style={{ width : "400px", boxSizing : "border-box", padding : "0px" }}>
          <div className="afficheur" style={{ marginBottom : "5px" }}>
            <input type="text" placeholder="0" style={{width : "400px", height : "50px", borderRadius : "5px", border : "none"}} />
          </div>
          
          <div className="clavier">
            <div style={{ boxSizing : "border-box", }}>
              <span onClick={ ()=>handleChange(7) } style={{display : "inline-block" , width : "98px", height : "70px", color : "white", backgroundColor : "black", textAlign: "center",  borderRadius : "5px", margin : "1px" }}>7</span>
              <span style={{display : "inline-block" , width : "98px", height : "70px", color : "white", backgroundColor : "black", textAlign: "center",  borderRadius : "5px", margin : "1px" }}>8</span>
              <span style={{display : "inline-block" , width : "98px", height : "70px", color : "white", backgroundColor : "black", textAlign: "center",  borderRadius : "5px", margin : "1px" }}>9</span>
              <span style={{display : "inline-block" , width : "98px", height : "70px", color : "white", backgroundColor : "red", textAlign: "center",  borderRadius : "5px", margin : "1px" }}>AC</span>
            </div>

            <div>
              <span>4</span>
              <span>5</span>
              <span>6</span>
              <span>/</span>
            </div>

            <div>
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>*</span>
            </div>

            <div>
              <span>0</span>
              <span>.</span>
              <span>=</span>
              <span>+</span>
            </div>

          </div>
        </div>
    </div>
  ) ;
}