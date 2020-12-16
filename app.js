const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const port = process.env.PORT || 3000;
const users = [
  {
    firstName: 'Tony',
    email: 'tony@stark.com',
    password: 'iamironman',
  },
  {
    firstName: 'Steve',
    email: 'captain@hotmail.com',
    password: 'icandothisallday',
  },
  {
    firstName: 'Peter',
    email: 'peter@parker.com',
    password: 'enajyram',
  },
  {
    firstName: 'Natasha',
    email: 'natasha@gamil.com',
    password: '*parol#@$!',
  },
  {
    firstName: 'Nick',
    email: 'nick@shield.com',
    password: 'password',
  },
];

//set template engine
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', 'hbs');

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  console.log('start');
  res.render('register');
});

app.listen(port, () =>
  console.log(`This is server is start on http://localhost:${port}`)
);
