const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 3000;


const app = express();


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});


app.listen(PORT, () => {
    //if (err) console.log(err)
    console.log(`Server is running on port http://localhost:${PORT}`);
});



 