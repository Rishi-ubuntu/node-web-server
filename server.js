const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;

var app = express();
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => new Date().getFullYear());
hbs.registerHelper('screamIt', (text) => text.toUpperCase());


// app.use((req, res, next) => {
//     res.render('maintainance.hbs')
//     })

app.get('/', (req, res) => {
    // res.send('<h1>Hello Express!</h1>');
    res.render('home.hbs', {
        pageTitle: 'HomePage',
        message: 'Welcome to Hambrebirds',
    });
});



app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page',
    });
});

app.get('/bad', (req, res) => {
    res.send({
        Error: 'Error Occured'
    });
})

app.listen(port, () => {
    console.log(`server is up in port ${port}`);
});