//import express package
const { text } = require('body-parser')
let express = require('express')
const { contentType } = require('mime-types')
const { functionsHaveConfigurableLengths } = require('set-function-length/env')

// initialize express app
let app = express()

// configure express app to use JSON encoding/format
app.use(express.json())

let allstars = [
    {
        "id":1,
        "name":"nowi",
        "active": true,
        "location":"JB"
    },
    {
        "id":2,
        "name":"ogy",
        "active": true,
        "location":"KL"
    },
    {
        "id":3,
        "name":"yaya",
        "active": false,
        "location":"SG"
    }

]

function processRequest(incomingRequest, outgoingResponse){
    console.log("Request received....")
    outgoingResponse.writeHead(200, {"content-Type":"text/html"})
    // write something to response which will be sent back to the client
    outgoingResponse.write("<h1>hello from server</h1>")
    // end tge response so that it is sent
    outgoingResponse.end()
}

function processAllStars(request, response){
    console.log("received request for /allstars")
    response.json(allstars)
}

//create first api
// http:localhost:portnumber/welcome
app.get("/welcome", processRequest)


app.get("/allstars", processAllStars)


function listeningOnPort(){
    console.log("Listening on port 1234");
}


// expose express app on port
let port = 1234
app.listen(port, listeningOnPort)


