const express = require('express')// loads the express package
const app = express() // create the express server
const port = 3000 // define the express port

app.use(express.static('public')) // tells express where the static files are located



// Homepage Route
app.get('/', (req, res) => {
    console.log(__dirname)
    res.sendFile(__dirname + '/views/index.html');
})


// Gallery Route
app.get('/gallery', (req, res) => {
    console.log(__dirname)
    res.sendFile(__dirname + '/views/gallery.html');
})

// About Route
app.get('/about', (req, res) => {
    console.log(__dirname)
    res.sendFile(__dirname + '/views/about.html');
})

// Works Route
app.get('/works', (req, res) => {
    console.log(__dirname)
    res.sendFile(__dirname + '/views/works.html');
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
