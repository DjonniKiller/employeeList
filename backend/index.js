const express = require('express');
const apiRoutes = require('./routes/api');
const app = express();

const PORT = 8080;

app.use('/api', apiRoutes);

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
})
