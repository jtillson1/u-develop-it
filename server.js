const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();


// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Default response for any other request(Not Found) Catch all
app.use((req, res) => {
    res.status(404).end();
  });

app.get('/', (req, res) => {
    res.json({
        message: 'hello bitch'
    });
});


app.listen(PORT, () => {
    console.log(`Server now zippin around on port ${PORT}`)
});