const http = require('http')

const server = http.createServer((req, res) => {
  console.log('new connection\n')
  if(req.url === '/favicon.ico') {
    console.log('I am in favi')
    res.end();
  }
  else if(req.url === '/') {
    res.end('Welcome to Homepage')
  }
  else if(req.url === '/blog') {
    res.end('It is blog page')
  } else {
    res.end(
      `<h1>Oops!</h1>

      <p>We can't seem to find the page you are looking for</p>
      <a href="/">back home</a>`
      )
  }

})

server.listen(5000)
