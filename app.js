const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('./public'));

app.listen(3000, () => console.log('Server running at http://localhost:3000'));

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, '/views/home.html'));
});
/* agregue esto al app para mi register.html */
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'));
});

/*Product Detail*/ 
app.get('/productDetail', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/productDetail.html'));
});
