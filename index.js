const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path')

app.set('views', path.join(__dirname, 'views')) //parameto 1 fala em qual página estão os templates (sempre vai ser views). Parme 2 é a pasta
app.set('view engine', 'ejs'); //informa node qual é o template engine que estamos utilizando.

app.get('/', (req, res) => {

    res.render('users') // Método que redenriza uma view atraves do template engine que estamos utilizando.

});


app.listen(3000, () => {
    console.log("Server running on port 3000");
})