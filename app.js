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
  res.render('register');
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  users.forEach((user) => {
    if (user.email === email) {
      if (user.password === password) {
        return res.render('index', { firstName: user.firstName });
      }
    }
  });
  const error = 'Username 或 Password 錯誤';
  return res.render('register', { error });
});

app.listen(port, () =>
  console.log(`This is server is start on http://localhost:${port}`)
);
