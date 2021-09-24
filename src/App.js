import './App.css';
import React, {useEffect, useState} from 'react';
// ES6 import or TypeScript
import { io } from "socket.io-client";

function App() {

  const [id, setId ] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const socket = io("https://api.insertmendoza.com.ar/", {
      transports: ['websocket'],
      jsonp: false,
    });

    setTimeout(()=> {
      console.log(socket.id);
      if(socket.connected){
        setId(socket.id);
      }else setError ("No estas conectado...");

    }, 500)
  }, [])
  return (
    <div >
    {id ? <p>WS: {id} </p> :<p>{error}</p>  }
    </div>
  );
}

export default App;
