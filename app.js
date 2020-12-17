const express = require('express');
const exphbs = require('express-handlebars');
const cookieParser = require('cookie-parser');
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
const session = {};

app.use(cookieParser());

//set template engine
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', 'hbs');

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  const getCookie = req.cookies.test;
  if (session.getCookie) {
    //判斷是否於session
    return res.render('index', { firstName: session.getCookie });
  }
  return res.render('login');
});
//res.cookie('user',`001`) 後端給前端的cookie
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  //確認使用者在註冊名單中
  users.forEach((user) => {
    if (user.email === email && user.password === password) {
      //產生cookie
      const cookie = user.firstName;
      //建立session
      session.cookie = user.email;
      //存入client
      res.cookie('test', cookie);
      return res.render('index', { firstName: user.firstName });
    }
  });
  const error = 'Username 或 Password 錯誤';
  return res.render('login', { error });
});

app.listen(port, () =>
  console.log(`This is server is start on http://localhost:${port}`)
);
