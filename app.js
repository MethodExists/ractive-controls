var connect         = require('connect'),
    serveStatic     = require('serve-static'),
    app             = connect(),
    routes          = null,
    config          = {
                        layout      : "./client/",
                        templates   : "./client/ractive/templates/*.html",
                        pattern     : /\.html/gi,
                        replacement : "Template"
                      },
    templateRender  = require("./lib/templateRender");

var layout = templateRender.renderLayout(config, "index.html");
console.log("========", layout);

app.
  use( serveStatic('client') ).
  // use(routes).
  listen(3000);
