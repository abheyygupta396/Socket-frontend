import React, { useEffect , useState} from 'react';
import './App.css';
// import socketClient  from "socket.io-client";

// const SERVER = "http://localhost:4000";
function App() {
  //    const [response, setResponse] = useState([]);
     
  

  //  var socket = socketClient (SERVER);

//    socket.on("FromAPI", data => {
//     setResponse(data.responseData);
//     console.log(data)

// });

// socket.on("FromAPI", data => {
//     setResponse(data.responseData[data.responseData.length-1]);
//     console.log(data)

// });
    


// socket.on('Connected', () => {
// console.log('Hello from client');

       
//  socket.on("Backend", data => {
//     setResponse(data);
//     console.log(data)
// });
  
     
      

       
//  });

    // socket.emit("Connected", "Test")

   
            
    return (
    
        <div>
          {/* Its <time dateTime={response}> {response} </time> */}
            <body>
            <h1 style={{color: 'green'}}>
        Hello Boss
    </h1>
      
    <b>
        How to create fade-in effect
        on page load using CSS
    </b>
      
    <p>
        This page will fade in
        after loading
    </p>
           {/* {response.blockNumber}
            </div>

            <div>
            {response.gas}
            </div>

            <div>
            {response.gasPrice} */}
            </body>

          {/* {response.map(item => (
             
                <div key={item.gasPrice}>
                    {item.gasPrice}
                </div>
            ))} */}
          
       
          </div>
     
    );
}

export default App;
         
// import React, { useEffect, useState } from 'react';
// import io from "socket.io-client";
 
// function App() {
//   const [socket, setSocket] = useState(null);
 
//   // establish socket connection
//   useEffect(() => {
//     setSocket(io('http://localhost:4000'));
//   }, []);

//    // subscribe to the socket event
//    useEffect(() => {
//     if (!socket) return;
 
//     socket.on('connect', () => {
//       setSocketConnected(socket.connected);
//     });
//     socket.on('disconnect', () => {
//       setSocketConnected(socket.connected);
//     });
 
//   }, [socket]);
 
//   // manage socket connection
//   const handleSocketConnection = () => {
//     if (socketConnected)
//       socket.disconnect();
//     else {
//       socket.connect();
//     }
//   }
 
//   return (
//     <div>
    //   <h2>Welcome to Socket.IO App! - <a href="https://www.cluemediator.com/" target="_blank">Clue Mediator</a></h2>
    //   <div>
    //     <b>Connection status:</b> {socketConnected ? 'Connected' : 'Disconnected'}
    //   </div>
    //   <input
    //     type="button"
    //     style={{ marginTop: 10 }}
    //     value={socketConnected ? 'Disconnect' : 'Connect'}
    //     onClick={handleSocketConnection} />
//     </div>
//   );
// }

// export default App;
