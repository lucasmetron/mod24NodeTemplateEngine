const express = require('express');
const fs = require('fs');
const app = express();

let user = {
    id: 0,
    name: 'Lucas',
    phone: "985830961"
}

function render(data, obj) {

    for (let key in obj) {
        data = data.replace(`{{{${key}}}}`, obj[key]);
    }


    return data;
}


app.get('/', (req, res) => {

    fs.readFile('./templates/user.html', 'UTF8', (erro, data) => {
        if (!erro) {

            res.send(render(data, user));
            console.log(data)

        }
    })

});


app.listen(3000, () => {
    console.log("Server running on port 3000")
})