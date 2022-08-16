
## A Newsletter SignUp Page

Its a news letter signup page, just input your first name , second name and email and its running on express server and using mailchimp api

### Key Points

-npm init
- installed express, body-parser, request
-used the express server, https, body-parser
- Used bootstrap for the signup page.
- Created a public folder to show our css and img folder on the site.
- For the href = 'css/signup.css' not 'public/css/sig...' and same for the img
- used app.use(express.static('public')) to render these local files to the server.
- used body-parser i.e firstName = req.body.fName.
- req.use(bodyParser.urlencoded);
- used the get and post app method
- signed up for mail chimp
- got the list id and api key (list audience- post/lists/{listid})
- list id{setting id} is a unique id to get a unique list for our audience
- data object with key of members - having email address,status and merge fields{fname, lname}
- converted the data object to a stringify json format(flat format)
- created a response back to mailchimp with http.response(url, options, func(response))
- created the failure and successful page so if d request wa successful you get a success page or otherwise
- the option parameter contains a method i.e to post our data and auth: user and apikey
- url had d server, mailchimp url and list id
- request will write our jsondata
- request will end
- on the failure page we wanted to redirect back to d root route from failure route from d button action*
- connected to a heroku server in our app.listen
- connected to process.env.PORT to get the heroku port
- heroku create on d dir
- created a procfile with web: npm start
- npm starts d script so in our script on package.json add "start": node app.js
- pushed the site on heroku using hit push heroku master