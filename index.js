const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path')

let user = {
    id: 0,
    name: 'Lucas',
    phone: "985830961"
}


app.get('/', (req, res) => {

    fs.readFile('./templates/user.html', 'UTF8', (erro, data) => {
        if (erro) {
            throw erro
        } else {
            data = data.replace('Nome', user.name);
            data = data.replace('Telefone', user.phone)

            res.send(data)
        }
    })

});


app.listen(3000, () => {
    console.log("Server running on port 3000")
})