const express = require('express')
const app = express()
app.set('view engine', 'ejs')

app.listen(5000, function (err) {
    if (err)
        console.log(err)
})

app.use(express.static('./public'))

app.get('/', function (req, res) {
    res.send('GET request to homepage')
})

app.get('/profile/:id', function (req, res) {
    res.write(`<h1> Hi! This pokemon has the id: ${req.params.id} </h1>`)
//     res.send()
//     res.render('profile.ejs', {
//         'id': req.params.id
//     })
    // res.json({
    //     'k1': 'v1',
    //     'k2': 'v2',
    //     'k3': 'v3'
    // })
})