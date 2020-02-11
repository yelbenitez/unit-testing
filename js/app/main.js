// var main = {};


// (function(exports){
//     "use strict";

//     function Main(data){    
//         this.data = data
//     }
//     exports.Main = Main;


// })(this);


var url = new URLSearchParams(window.location.search);


class AmazonServices{
    
    constructor(urlParams){
        this.ws = new WebSocket(`wss://0qplh5wgmg.execute-api.ap-northeast-1.amazonaws.com/Test?auth=${urlParams.get("auth")}`)
    }
    
    connect(){
        if ("WebSocket" in window) {
            // alert("WebSocket is supported by your Browser!");
    
            // Let us open a web socket
            this.ws.onopen = function () {
                console.log("connect to socket")
                // Web Socket is connected, send data using send()
                //   ws.send("Message to send");
                //   alert("Message is sent...");
            };
    
            this.ws.onmessage = function (evt) {
                //fucntion ng pag create ng objects
                var received_msg = evt.data;
                console.log(evt)
                console.log(received_msg)
            };
    
            this.ws.onclose = function () {
                // websocket is closed.
                 alert("Connection is closed...");
       //         window.location.replace(window.location.origin)
            };
    
        } else {
    
            // The browser doesn't support WebSocket
            alert("WebSocket NOT supported by your Browser!");
        }
    }

    getData(){
        this.ws.send(JSON.stringify({ action: "OnMessage", "message": "MOMMY" }))
    }
}


aws = new AmazonServices(url);
aws.connect();

// get truck1

// get truck2

// get truck3 
