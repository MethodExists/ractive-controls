var handlebars  = require('handlebars'),
    fs          = require('fs'),
    glob        = require('glob'),
    path        = require('path');


exports.readDirectory = function(dirpath) {
  var templates     = [],
      templateFiles = glob.sync(dirpath);

  templates = templateFiles.map(function(e){
    var str = fs.readFileSync( 
      e,
      {encoding: 'utf8'}
    );
    return {
      file: path.basename(e),
      content: str
    };
  });
  return templates;
};

exports.parseTemplateFile = function(filepath, data){
  var template, fn, result;
  template = fs.readFileSync(filepath, 'utf8');
  fn = handlebars.compile(template);
  return fn(data);
};

exports.renderLayout = function(config, layout){
  var templates, result;
  //first, read templates from config.templates expression,
  templates = exports.readDirectory(config.templates);
  //second, transform data by replacing filenames accord to pattern
  templates = templates.map(function(e){
    return {
      file: e.file.replace(config.pattern, config.replacement),
      content: e.content
    };
  });
  //third, inject data into layout file
  result = exports.parseTemplateFile(
      path.join(config.layout + layout),
      {templates: templates}
    );
  return result;
};