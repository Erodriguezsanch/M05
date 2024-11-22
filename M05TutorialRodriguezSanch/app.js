const express = require('express');
const morgan = require('morgan');
// Express app
const app = express();

// Register view engine
app.set('view engine', 'ejs');

// Listen for requests
app.listen(3000);

// Middleware & static files
app.use(express.static('public'));
app.use(morgan('dev'));

app.get('/', (req, res) => {
    const blogs = [
        {title: 'How to use chopsticks', snippet: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, odit.'},
        {title: 'How to run backwards', snippet: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, odit.'},
        {title: 'How to tie shoes with one hand', snippet: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, odit.'}
    ]
res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Creat a new Blog' });
})

// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});