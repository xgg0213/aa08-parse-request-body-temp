const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");
let server;

const http = require("http");
const { send } = require("process");
/******************************************************************************/
/******************* DO NOT CHANGE THE CODE ABOVE THIS LINE *******************/

// Your code here
server = http.createServer((req,res) => {
    console.log(req.method, req.url);

    let reqBody = '';

    req.on('data', (data) => {
        reqBody += data;
    })

    
    req.on('end', () => {
        console.log(reqBody);
        if (reqBody) {
            const resBody = parseBody(reqBody);
            req.body = resBody;
        }

        sendFormPage(req, res);
        
    })
}) 

const port = 8000;

server.listen(port, () => console.log(`Server is listening on port ${port}`));

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };
