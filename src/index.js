import express from 'express';
import handlebars from 'express-handlebars';

import routes from './routes.js';

const app = express();

//handlebars setup
app.set('view engine', 'handlebars');
app.set('views', './src/views')

//express setup
app.use(express.static('src/public'));
app.use(express.urlencoded({extended:false}));
app.use(routes);

//routes






app.listen(3000, () => console.log('Server is listening on http://localhost:3000...'));