const express = require('express');
const bodyParser = require('body-parser');
const mc = require('./controllers/messages_controller')

const app = express();

app.use(bodyParser.json());

const baseUrl = '/api/messages';

app.post(baseUrl, mc.create);
app.get(baseUrl, mc.read);
app.put(`${baseUrl}/:id`, mc.update);
app.delete(`${baseUrl}/:id`, mc.delete);


const port = 3000;
app.listen(port, console.log(`Ye olde server doth lend an ear at port ${port}`));
