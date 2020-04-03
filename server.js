const express = require('express');
const path = require('path');

const app = express();

const hbs = require('express-handlebars');
app.engine('.hbs', hbs());
app.set('view engine', '.hbs');


app.use(express.static(path.join(__dirname + '/public')));

app.use(express.urlencoded({ extended: false }));

app.use(express.json());



app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/contact', (req, res) => {
  res.render('contact', { layout: 'dark' });
});

app.get('/info', (req, res) => {
  res.render('info');
});

app.get('/history', (req, res) => {
  res.render('history');
});

app.get('/hello/:name', (req, res) => {
  res.render('hello', { name: req.params.name });
});

app.post('/contact/send-message', (req, res) => {
  const { author, sender, title, message } = req.body;

  if(author && sender && title && message) {
    res.send('The message has been sent!');
  }
  else {
    res.send('You can\'t leave fields empty!')
  }
});



app.use((req, res) => {
  res.status(404).send('404 not found...');
})

app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});
