
## A Newsletter SignUp Page

Its a news letter signup page, just input your first name , second name and email and its running on express server ang usinf=g mailchimp api

### Key Points

- Used bootstrap for the signup page.
- Created a public folder to show our css and img folder on the site.
- For the href = 'css/signup.css' not 'public/css/sig...' and same for the img
- used app.use(express.static('public')) to render these local files to the server.
- used body-parser i.e firstName = req.body.fName.
- req.use(bodyParser.urlencoded);
- used the get and post app method