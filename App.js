import './App.css'
import React from "react";
import { useEffect , useState } from "react";

const App = () =>{

    const [temp , Settemp] = useState("");
    const [word , Setword] = useState("");
    const [size , Setsize] = useState(400);
    const [bgColor , setbgcolor] = useState('ffffff');
    const [qr , Setqr] = useState("");


    useEffect(()=>{
        
        Setqr(`http://api.qrserver.com/v1/create-qr-code/?data=${word}!&size=${size}x${size}&bgcolor=${bgColor}`);

         },[word ,size , bgColor])

    const handleClick = () =>{
        Setword(temp);
    }


         return(
            <div className="App">
                <h1>QR Code Generator</h1>
                <div className="input-box">
                    <div className="gen">
                        <input type="text" onChange={(e)=>{
                            Settemp(e.target.value)
                        }} placeholder="Enter the text to encode:"/>

                        <button className="button" onClick={handleClick}>Generate</button>


                    </div>

                    <div className="extra">
                        <h5>Background Color</h5>
                        <input type="color" onChange={(e)=>{setbgcolor(e.target.value.substring(1))}} />
                        <h5>Dimension</h5>
                        <input type="range" value={size} min="200"  max = "600" onChange={(e) =>{Setsize(e.target.value)}}/>
                    </div>
                </div>

                <div className="output-box">
                    <img src={qr} alt=""/>
                    <a href={qr} download="QRCode">
                    <button type="button">Download</button>
        </a>
                </div>
            

            
            
            </div>
         )

}

export default App;