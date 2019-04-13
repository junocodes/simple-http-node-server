const http = require("http");
const port = 3000;
const fs = require("fs");

// Create HTTP handler
const requestHandler = (request, response) => {
  // Create and write file.
  fs.writeFile("hello-world.txt", "Hello to this great world", err => {
    if (err) {
      return console.error(err);
    }
    return console.log(`hello-world.txt has been created.`);
  });
  // Create file and verify in local browser that message displays.
  response.end(`Handling a request on port ${port}`);
};

// Create server and pass handler
const server = http.createServer(requestHandler);

// Start server and listen (Port: 3000)
server.listen(port, err => {
  if (err) {
    return console.log(`You have an error:  ${err}`);
  }
  console.log(`server is listening on ${port}`);
});
