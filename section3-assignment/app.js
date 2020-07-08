const http = require('http')

const server = http.createServer((req, res) => {
  const url = req.url
  const method = req.method

  if (url === '/') {
    res.write(
      '<html><head>This is New Node.js</head><body><h1>Hello world</h1>'
    )
    res.write('<ul><li>User1</li><li>User2</li><li>User3</li></ul>')
    res.write(
      '<br><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Submit</button></form>'
    )
    res.write('</body></html>')
    return res.end()
  }
  if (url === '/create-user' && method === 'POST') {
    const body = []
    req.on('data', chunk => {
      body.push(chunk)
    })
    return req.on('end', () => {
      const parseBody = Buffer.concat(body).toString()
      const username = parseBody.split('=')[1]
      res.write('<p>New user: </p>' + username)
      console.log(username)
      return res.end()
    })
  }
})

const port = process.env.PORT || 3000

server.listen(port)
