const express = require('express');
const app = express();
const cors = require('cors');
const port =  5000; 

app.use(cors());

const categories = require('./Category/Category.json')

app.get('/', (req, res) =>{
    res.send('New API Running');
});

app.get('/news-categories', (req, res) =>{
    res.send(categories);
});

app.listen(port, () => {
    console.log('Dragon new server running on port', port);
})

// const express =  require('express');
// const app = express();
// const port = process.env.PORT || 5000;

// const categories = get('./Category/Category.json');

// app.get('/', (req, res) =>{
//     res.send('New API running');
// });

// app.get('/news-categories', (req, res)=>{
//     res.send(categories);
// })

// app.listen(port, (req, res)=>{
//     console.log('Dragon new server running on port');
// })