const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");
let server;

const http = require("http");
/******************************************************************************/
/******************* DO NOT CHANGE THE CODE ABOVE THIS LINE *******************/

// Your code here
server = http.createServer((req,res) => {
    console.log(req.method, req.url);
}) 

const port = 8000;

server.listen(port, () => console.log(`Server is listening on port ${port}`));

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };
