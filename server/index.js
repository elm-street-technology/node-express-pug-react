const express = require("express");
const path = require("path");
const glob = require("glob");

const app = express();

// 📦 Static assets served from `/public` directory
// can be accessed like this: `/icons/favicon.png`
app.use(express.static("public"));

// 🐕 We'll use Pug as our templating engine–
// Pug templates are served from the `/views` directory
app.set("view engine", "pug");

// 🗺 Our routes
glob("server/controllers/**/*.js", (err, files = []) => {
  files.forEach((file) => {
    require(`${file}`).routes(app);
  });
});

// 🖥 Serve it up
app.listen(3000, () => console.log("Example app listening on port 3000!"));
