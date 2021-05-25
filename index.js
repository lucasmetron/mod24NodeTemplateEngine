const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path')

let users = [
    {
        id: 0,
        nome: 'Lucas Rosa',
        tel: 985830961
    },
    {
        id: 1,
        nome: 'Lais Rosa',
        tel: 984939563
    },
    {
        id: 2,
        nome: 'Camila Rosa',
        tel: 985999887
    }
]


app.set('views', path.join(__dirname, 'views')) //parameto 1 fala em qual página estão os templates (sempre vai ser views). Parme 2 é a pasta
app.set('view engine', 'ejs'); //informa node qual é o template engine que estamos utilizando.

app.get('/', (req, res) => {

    res.render('users', { users: users }) // Método que redenriza uma view atraves do template engine que estamos utilizando.
    // res.render('users', user) // também podemos passar um objeto, que da a mesma coisa
});

app.get('/about', (req, res) => {
    res.render('about')
})


app.listen(3000, () => {
    console.log("Server running on port 3000");
})