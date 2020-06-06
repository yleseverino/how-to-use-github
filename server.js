const express = require('express');
const app = express();
const routes = express.Router();
routes.get('/', (req, res) => {
    return res.send('hello world');
});

app.use(routes);

const port = process.env.PORT || 3333;
app.listen(port);
