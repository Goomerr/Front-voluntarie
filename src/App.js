import './App.css';
import React, { useEffect, useState } from 'react';
// ES6 import or TypeScript
import { io } from "socket.io-client";
import CardUser from "carduser";
import Playlist from "playlist";

function App() {

  const handleOnDelete = props => {

    let { name } = props;

    console.log(name)
  }
  const handleOnCallUser = props => {
    let { phone } = props;
    console.log(phone)

  }

  const [id, setId] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const socket = io("https://api.insertmendoza.com.ar/", {
      transports: ['websocket'],
      jsonp: false,
    });

    setTimeout(() => {
      console.log(socket.id);
      if (socket.connected) {
        setId(socket.id);
      } else setError("No estas conectado...");

    }, 500)
  }, []);

  const dataPlayList = [
    {
      uuid: 1,
      name: "Alan Walker - Fade [NCS Release]",
      channel: "NoCopyrightSounds",
      image: "https://i.ytimg.com/vi/bM7SZ5SBzyY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDWNgRYHOIjP-dZjgrJpJmG964R6g"
    },
    {
      uuid: 2,
      name: "Cartoon - On & On (feat. Daniel Levi) [NCS Release]",
      channel: "NoCopyrightSounds",
      image: "https://i.ytimg.com/vi/bM7SZ5SBzyY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDWNgRYHOIjP-dZjgrJpJmG964R6g"
    },
    {
      uuid: 3,
      name: "Janji - Heroes Tonight (feat. Johnning) [NCS Release]",
      channel: "NoCopyrightSounds",
      image: "https://i.ytimg.com/vi/bM7SZ5SBzyY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDWNgRYHOIjP-dZjgrJpJmG964R6g"
    },
    {
      uuid: 4,
      name: "Spektrem - Shine [NCS Release]",
      channel: "NoCopyrightSounds",
      image: "https://i.ytimg.com/vi/bM7SZ5SBzyY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDWNgRYHOIjP-dZjgrJpJmG964R6g"
    },
    {
      uuid: 5,
      name: "Robin Hustin x TobiMorrow - Light It Up (feat. Jex) [NCS Release]",
      channel: "NoCopyrightSounds",
      image: "https://i.ytimg.com/vi/bM7SZ5SBzyY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDWNgRYHOIjP-dZjgrJpJmG964R6g"
    },
    {
      uuid: 6,
      name: "Elektronomia - Energy [NCS Release]",
      channel: "NoCopyrightSounds",
      image: "https://i.ytimg.com/vi/bM7SZ5SBzyY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDWNgRYHOIjP-dZjgrJpJmG964R6g"
    },

  ]

  const dataCardUser = [
    {
      name: "Jose",
      phone: "65437637877",
      src: "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/06/04/15912219730543.jpg"
    },
    {
      name: "Javier",
      phone: "65437637877",
      src: "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/06/04/15912219730543.jpg"
    },
    
    {
      name: "Pedro",
      phone: "65437637877",
      src: "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/06/04/15912219730543.jpg"
    },
    
    {
      name: "Maria",
      phone: "65437637877",
      src: "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/06/04/15912219730543.jpg"
    },
    
  ]
  return (
    <div >
      {id ? <p>WS: {id} </p> : <p>{error}</p>}
      <Playlist data={dataPlayList} />
      
      {
        dataCardUser.map((v, i) => (
          <CardUser
            key={i} name={v.name} phone={v.phone}
            src={v.src}
            onDelete={handleOnDelete}
            onCallUser={handleOnCallUser}
          />

        ))
      }    </div>
  );
}

export default App;
