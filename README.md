# Assignment-Mobilicis India Private Limited
This is Web App Dashboard with two main section My profile and My connection with login/signup and Authentication service this assignment given by Mobilicis India Private Limited

## Technology Used
Next Js,Tailwind Css,Ant Design,MongoDb Atlas,Node,Express.Json Web Token,Bcrypt Js etc.

# Frontend - Next Js
# Backend- Express with Node

## How To use deployed project
1. Open this Link- https://user-profile-mobilicis-india-pvt-ltd-assignment.vercel.app/ 
2. Go To Login Page 
3. Use demo account (advantage prefilled data to check UI accuracy),You can also Sign Up as a new user(no prefilled data you have to add it manually)
   Email-  hanzala@gmail.com
   Password- 123
4. Enjoy

## How project was deployed
Front-end is is developed through Next Js and Backend with Express Js and Mongo Db Atlas.
Front-end is deployed through Vercel and Backend is deploy throught Render.
In root directory there are two folders one named client(frontend) second named server(backend).
Both are sync through my github account to push updates just push changes to github repo.

# How to run the code
## For Github user
1. Clone Repo into a specific location on you local machine.
2. open that folder in your code editor.
3. open terminal run cd .\server\ to move into server folder.
4. run npm install to install node modules in server folder.
5. run  nodemon .\index.js or node .\index.js to run the server on your local machine.
6. open another terminal run cd .\client\ to move into client folder.
7. run npm install to install node modules in client folder.
8. run npm run dev to start devloment server on you local machine.
9. Enjoy

# Issues
## Things need to be fixed  

1. Upload photo feature not implemented using cloudinary (updated soon)
2. By default there is dummy data uses as a intial state for myProfileData so if your internet slow down and you focely reload the page you can can se maybe dummy data for mliseconds.
3. In login/signup uncontrolled form is used through use form hook for error handling so there is minor bug on focusing on input field. It can be fixed through Controller provided by use form hook or convert it into controlled form.
