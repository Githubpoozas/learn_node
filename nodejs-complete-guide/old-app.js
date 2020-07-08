const http = require('http')

const routes = require('./routes')

console.log(routes.someText)

const server = http.createServer(routes.handler)

const port = process.env.PORT || 3000

server.listen(port)
