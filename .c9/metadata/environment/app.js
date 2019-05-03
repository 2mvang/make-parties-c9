{"filter":false,"title":"app.js","tooltip":"/app.js","undoManager":{"mark":10,"position":10,"stack":[[{"start":{"row":0,"column":0},"end":{"row":15,"column":2},"action":"insert","lines":["// Initialize express","const express = require('express')","const app = express()","","// Tell our app to send the \"hello world\" message to our home page","app.get('/', (req, res) => {","  res.send('Hello World!')","})","","// Choose a port to listen on","const port = process.env.PORT || 3000;","","// Tell the app what port to listen on","app.listen(port, () => {","  console.log('App listening on port 3000!')","})"],"id":1}],[{"start":{"row":3,"column":0},"end":{"row":4,"column":43},"action":"insert","lines":["// require handlebars","var exphbs = require('express-handlebars');"],"id":2}],[{"start":{"row":4,"column":43},"end":{"row":5,"column":0},"action":"insert","lines":["",""],"id":3}],[{"start":{"row":10,"column":0},"end":{"row":11,"column":0},"action":"insert","lines":["",""],"id":4}],[{"start":{"row":11,"column":0},"end":{"row":14,"column":37},"action":"insert","lines":["// Use \"main\" as our default layout","app.engine('handlebars', exphbs({ defaultLayout: 'main' }));","// Use handlebars to render","app.set('view engine', 'handlebars');"],"id":5}],[{"start":{"row":14,"column":37},"end":{"row":15,"column":0},"action":"insert","lines":["",""],"id":6}],[{"start":{"row":16,"column":0},"end":{"row":17,"column":38},"action":"remove","lines":["// Choose a port to listen on","const port = process.env.PORT || 3000;"],"id":7}],[{"start":{"row":5,"column":0},"end":{"row":6,"column":38},"action":"insert","lines":["// Choose a port to listen on","const port = process.env.PORT || 3000;"],"id":8}],[{"start":{"row":6,"column":38},"end":{"row":7,"column":0},"action":"insert","lines":["",""],"id":9}],[{"start":{"row":18,"column":0},"end":{"row":21,"column":2},"action":"insert","lines":["// Render the \"home\" layout for the main page and send the following msg","app.get('/', (req, res) => {","  res.render('home', { msg: 'Handlebars are Cool!' });","})"],"id":10}],[{"start":{"row":8,"column":0},"end":{"row":11,"column":2},"action":"remove","lines":["// Tell our app to send the \"hello world\" message to our home page","app.get('/', (req, res) => {","  res.send('Hello World!')","})"],"id":13},{"start":{"row":7,"column":0},"end":{"row":8,"column":0},"action":"remove","lines":["",""]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":18,"column":0},"end":{"row":18,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1556899731791,"hash":"f53cc78d3158d267aa7bbe2d078e87de5aec606e"}