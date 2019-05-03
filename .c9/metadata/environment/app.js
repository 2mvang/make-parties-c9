{"filter":false,"title":"app.js","tooltip":"/app.js","undoManager":{"mark":18,"position":18,"stack":[[{"start":{"row":0,"column":0},"end":{"row":15,"column":2},"action":"insert","lines":["// Initialize express","const express = require('express')","const app = express()","","// Tell our app to send the \"hello world\" message to our home page","app.get('/', (req, res) => {","  res.send('Hello World!')","})","","// Choose a port to listen on","const port = process.env.PORT || 3000;","","// Tell the app what port to listen on","app.listen(port, () => {","  console.log('App listening on port 3000!')","})"],"id":1}],[{"start":{"row":3,"column":0},"end":{"row":4,"column":43},"action":"insert","lines":["// require handlebars","var exphbs = require('express-handlebars');"],"id":2}],[{"start":{"row":4,"column":43},"end":{"row":5,"column":0},"action":"insert","lines":["",""],"id":3}],[{"start":{"row":10,"column":0},"end":{"row":11,"column":0},"action":"insert","lines":["",""],"id":4}],[{"start":{"row":11,"column":0},"end":{"row":14,"column":37},"action":"insert","lines":["// Use \"main\" as our default layout","app.engine('handlebars', exphbs({ defaultLayout: 'main' }));","// Use handlebars to render","app.set('view engine', 'handlebars');"],"id":5}],[{"start":{"row":14,"column":37},"end":{"row":15,"column":0},"action":"insert","lines":["",""],"id":6}],[{"start":{"row":16,"column":0},"end":{"row":17,"column":38},"action":"remove","lines":["// Choose a port to listen on","const port = process.env.PORT || 3000;"],"id":7}],[{"start":{"row":5,"column":0},"end":{"row":6,"column":38},"action":"insert","lines":["// Choose a port to listen on","const port = process.env.PORT || 3000;"],"id":8}],[{"start":{"row":6,"column":38},"end":{"row":7,"column":0},"action":"insert","lines":["",""],"id":9}],[{"start":{"row":18,"column":0},"end":{"row":21,"column":2},"action":"insert","lines":["// Render the \"home\" layout for the main page and send the following msg","app.get('/', (req, res) => {","  res.render('home', { msg: 'Handlebars are Cool!' });","})"],"id":10}],[{"start":{"row":8,"column":0},"end":{"row":11,"column":2},"action":"remove","lines":["// Tell our app to send the \"hello world\" message to our home page","app.get('/', (req, res) => {","  res.send('Hello World!')","})"],"id":13},{"start":{"row":7,"column":0},"end":{"row":8,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":6,"column":38},"end":{"row":7,"column":0},"action":"insert","lines":["",""],"id":14}],[{"start":{"row":7,"column":0},"end":{"row":13,"column":0},"action":"insert","lines":["// OUR MOCK ARRAY OF PROJECTS","var events = [","  { title: \"I am your first event\", desc: \"A great event that is super fun to look at and good\", imgUrl: \"https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA4OC85MTEvb3JpZ2luYWwvZ29sZGVuLXJldHJpZXZlci1wdXBweS5qcGVn\" },","  { title: \"I am your second event\", desc: \"A great event that is super fun to look at and good\", imgUrl: \"https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA4OC85MTEvb3JpZ2luYWwvZ29sZGVuLXJldHJpZXZlci1wdXBweS5qcGVn\" },","  { title: \"I am your third event\", desc: \"A great event that is super fun to look at and good\", imgUrl: \"https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA4OC85MTEvb3JpZ2luYWwvZ29sZGVuLXJldHJpZXZlci1wdXBweS5qcGVn\" }","]",""],"id":15}],[{"start":{"row":13,"column":0},"end":{"row":14,"column":0},"action":"remove","lines":["",""],"id":16},{"start":{"row":12,"column":1},"end":{"row":13,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":23,"column":0},"end":{"row":24,"column":0},"action":"insert","lines":["",""],"id":17},{"start":{"row":24,"column":0},"end":{"row":25,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":24,"column":0},"end":{"row":26,"column":2},"action":"insert","lines":["app.get('/events', (req, res) => {","  res.render('events-index', { events: events });","})"],"id":18}],[{"start":{"row":24,"column":10},"end":{"row":24,"column":15},"action":"remove","lines":["event"],"id":19},{"start":{"row":24,"column":10},"end":{"row":24,"column":11},"action":"insert","lines":["\\"]}],[{"start":{"row":24,"column":11},"end":{"row":24,"column":12},"action":"remove","lines":["s"],"id":20},{"start":{"row":24,"column":10},"end":{"row":24,"column":11},"action":"remove","lines":["\\"]}],[{"start":{"row":19,"column":0},"end":{"row":22,"column":2},"action":"remove","lines":["// Render the \"home\" layout for the main page and send the following msg","app.get('/', (req, res) => {","  res.render('home', { msg: 'Handlebars are Cool!' });","})"],"id":21},{"start":{"row":18,"column":0},"end":{"row":19,"column":0},"action":"remove","lines":["",""]}]]},"ace":{"folds":[],"scrolltop":27.5,"scrollleft":0,"selection":{"start":{"row":20,"column":11},"end":{"row":20,"column":11},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1556900161765,"hash":"1c9fdd59717db47fa9e2264dc0b4bf41817a40ea"}