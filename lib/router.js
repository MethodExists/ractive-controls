var router          = require("connect-route"),
    templateRender  = require("./templateRender");



exports.routes = function(config){

  return router(function(r){

    r.get('/', function(req, res, next){
      var layout = templateRender.renderLayout(config, "index.html");
      //server the layout.
      console.log("Serving Template: ", layout);
      res.end(layout);
    });

    r.get('/grid', function(req, res, next){
      var layout = templateRender.renderLayout(config, "grid.html");
      //server the layout.
      console.log("Serving Template: ===============================");
      console.log(layout);
      console.log("=================================================");
      res.end(layout);
    });

    r.get('/controls', function(req, res, next){
      var layout = templateRender.renderLayout(config, "controls.html");
      //server the layout.
      console.log("Serving Template: ===============================");
      console.log(layout);
      console.log("=================================================");
      res.end(layout);
    });

  });

};


