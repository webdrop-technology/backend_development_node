npm init //to initialize project create empty project with package.json with required configuration 
node filename (filename to run that file) // node index.js // output: WD
// we can create self command inside this 
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },

  like start
  "scripts": {
  "start" : "node index.js"
  },

  install express js from  https://expressjs.com/
  npm install express --save

//console.log("WD");

const express=require('express');
const app=express();
const port=3000;

app.get('/',(req,res)=>{
    res.send("WD");
});

app.get('/twitter',(req,res)=>{
    res.send("Twitter");
});

app.get('/login',(req,res)=>{
    res.send("Login");
});

app.listen(port,()=>{
    console.log(`Example on listening on port ${port}`);
});




  // environmental package (for environment configuration)
  https://www.npmjs.com/package/dotenv

  npm i dotenv

  create new file .env for environmental configuration

  // host your application
  cloud ocean    https://cloud.digitalocean.com/
  digitalocean
heroku
railway.app
seenode
render
cyclic.sh