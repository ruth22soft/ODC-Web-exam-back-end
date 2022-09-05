const http = require('http');
const app = require('./app');
const port = 3000;

const server = http.createServer(app);
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

server.listen(port);