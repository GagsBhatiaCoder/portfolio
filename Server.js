import express from 'express';

const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const App = require('./src/App.jsx'); // Replace with the path to your main React component

const app = express();
const port = 3000;

// Serve static files (like your bundled JS and CSS files)
app.use(express.static('build'));

// Define a route for SSR
app.get('/', (req, res) => {
  // Render your React component to HTML
  const html = ReactDOMServer.renderToString(React.createElement(App));

  // Send the rendered HTML to the client
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Your React App</title>
    </head>
    <body>
      <div id="root">${html}</div>
      <script src="/path-to-your-bundle.js"></script>
    </body>
    </html>
  `);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});