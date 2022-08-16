const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https');


const app = express();
//to make the server run a static website with css nd img file
//add d folder to keep as our static folder in d parenthesis
app.use(express.static("public")); 
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html")
})

app.post("/", function(req, res){
    const firstName = req.body.firstName;
    const secondName = req.body.secondName;
    const email = req.body.email;

    //create a data to send to mailchimp
    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME : firstName,
                    LNAME : secondName
                }
            }
        ]
    };

    //the data has to be converted to json flat pack format
    const jsonData = JSON.stringify(data);
    //the us12 is the server provided by mailchimp for us
    const url = "https://us12.api.mailchimp.com/3.0/lists/edf1aa0bec"
    //options a http request parameter
    const options = {
        method: "POST",
        auth: "oluwatuyi1:3c041551acece01dff8c7d638ce87463-us12"
    } 
    //send a response back to mailchimp unlike requesting in the weather app
    const request =  https.request(url, options, function(response){

        if(response.statusCode === 200){
            res.sendFile(__dirname + "/success.html");
        }else{
            res.sendFile(__dirname + "/failure.html");
        }
        response.on("data", function(data){
            console.log(JSON.parse(data));
        })
    })

    request.write(jsonData);
    request.end();


})


app.post("/failure", function(req, res){
    res.redirect("/");
})





app.listen(process.env.PORT || 3000, function(){
    console.log("Server is live at port 3000");
})

// Api key = 3c041551acece01dff8c7d638ce87463-us12

//list id = edf1aa0bec
