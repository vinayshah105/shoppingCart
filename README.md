Steps from scretch
- install create react app in front-end folder
- Now in Front-end folder add all libraries
- Than, create components like Home, Men, Female,onSale, checkout page
- Than use Routing to router each page
- for routing use Router, Routes, Route than in Route add path and component 
- note: In latest Router-dom componant not work while render so use elementinstead of component and in that define each component in element = {<Zxc />} 
- Also, This routing prop define in app.js and all component should be inside <Router></Router>
- Than in path define how we gonna search that page.Ex:- path = './men';
- element define component name
- than whatever component render in that component keep it in <Link> tag and define path in to="/men" it will be same as Route path
- In SPA page should not load if its load than keep than link in <Link> tag not in <a>
- create all module pages for this website
- now connect with backend

-Backend
-create backend folder than install npm init.
-now in package.js file after 'name' write "type": "module" because we use import instead of require in es6 so ...
-Also move data.js file in backend folder and create server.js file
-now install express server in backend : npm install express
-create server on given port than save it and in terminal type : node file-name that will start server
-you can check it on given URL
-for every change need to update server for that install nodemon: npm install nodemon --save-dev
-than in package.json : in script section: define "start": "nodemon server.js"
-That wil listen all changes and update it.

-Fetch Data from backend:
-
