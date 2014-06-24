var connect         = require('connect'),
    serveStatic     = require('serve-static'),
    app             = connect(),
    config          = {
                        layout      : "./client/layouts/",
                        templates   : [
                                        "./client/ractive/templates/*.html",
                                        "./client/templates/*.html"
                                      ],
                        pattern     : /\.html/gi,
                        replacement : "Template"
                      },
    router  = require("./lib/router");

app.
  use( serveStatic('client') ).
  use( router.routes(config) ).
  listen(3000);
