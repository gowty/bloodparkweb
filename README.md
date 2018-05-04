# Bloodpark Project
1.clone the repository<br/> 
  `git clone https://github.com/gowty/bloodpark`

2.change directory to cloned repo<br/>
  `cd bloodpark`

3.install all the dependencies<br/>
  `npm i` or `yarn install`

4.start the server by running <br/>
  `npm start` or `yarn start`

## Api endpoints for auth 
1. "/signup"<br/>
   - method(post)<br/>
   creates user account with following credentials and serves token and authenticates user<br/>
   - username
   - password
   - email

2. "/signin"<br/>
   - method(post)<br/>
   allows user to sign in and serves token and user credentials with following details<br/>
   - username or email
   - password

3. "/auth"<br/>
   - method(get)<br/>
   verifies jwt token and authenticates user with token in header
   - header
     -authorization(token)
     
4. "/create-forgot-password-link"<br/>
   - method(post)<br/>
   allows user to generate forgot password link and sends to email id<br/>
   - email