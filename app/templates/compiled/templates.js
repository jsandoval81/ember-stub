Ember.TEMPLATES["about"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  data.buffer.push("<h2 id=\"title\">This is the About page</h2>");
  },"useData":true});

Ember.TEMPLATES["application"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  data.buffer.push("Logo");
  },"3":function(depth0,helpers,partials,data) {
  data.buffer.push("<a href=\"#\">Home</a>");
  },"5":function(depth0,helpers,partials,data) {
  data.buffer.push("<a href=\"#\">About</a>");
  },"7":function(depth0,helpers,partials,data) {
  data.buffer.push("<a href=\"#\">Products</a>");
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("<div>\r\n    <!-- Top Navbar -->\r\n    <div class=\"navbar navbar-default navbar-fixed-top\">\r\n        <div class=\"container\">\r\n            <div class=\"navbar-header\">\r\n                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\r\n                    <span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span>\r\n                </button>\r\n                ");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "index", {"name":"link-to","hash":{
    'class': ("navbar-brand")
  },"hashTypes":{'class': "STRING"},"hashContexts":{'class': depth0},"fn":this.program(1, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </div>\r\n            <div class=\"navbar-collapse collapse\">\r\n                <ul class=\"nav navbar-nav\">\r\n                    ");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "index", {"name":"link-to","hash":{
    'tagName': ("li")
  },"hashTypes":{'tagName': "STRING"},"hashContexts":{'tagName': depth0},"fn":this.program(3, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                    ");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "about", {"name":"link-to","hash":{
    'tagName': ("li")
  },"hashTypes":{'tagName': "STRING"},"hashContexts":{'tagName': depth0},"fn":this.program(5, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                    ");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "products", {"name":"link-to","hash":{
    'tagName': ("li")
  },"hashTypes":{'tagName': "STRING"},"hashContexts":{'tagName': depth0},"fn":this.program(7, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n</div>");
  return buffer;
},"useData":true});

Ember.TEMPLATES["index"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  data.buffer.push("<h2 id=\"title\">Welcome to Ember.js...</h2>");
  },"useData":true});

Ember.TEMPLATES["product"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("            <li>");
  stack1 = helpers._triageMustache.call(depth0, "review.text", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</li>\r\n");
  return buffer;
},"3":function(depth0,helpers,partials,data) {
  data.buffer.push("            <li>No reviews yet</li>\r\n");
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("\r\n<div>\r\n    <h3>");
  stack1 = helpers._triageMustache.call(depth0, "title", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</h3>\r\n</div>\r\n<div>\r\n    <strong>Price:</strong> ");
  stack1 = helpers._triageMustache.call(depth0, "price", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\r\n</div>\r\n<div>\r\n    <h4>Reviews</h4>\r\n    <ul>\r\n");
  stack1 = helpers.each.call(depth0, "review", "in", "reviews", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.program(3, data),"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("    </ul>\r\n</div>\r\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["products"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "product", "product", {"name":"link-to","hash":{
    'classNames': ("list-group-item")
  },"hashTypes":{'classNames': "STRING"},"hashContexts":{'classNames': depth0},"fn":this.program(2, data),"inverse":this.noop,"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("                    ");
  stack1 = helpers._triageMustache.call(depth0, "product.title", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\r\n");
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("<h2 id=\"title\">This is the sandbox</h2>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-md-2\">\r\n        <div id=\"sidebar\" class=\"list-group\">\r\n");
  stack1 = helpers.each.call(depth0, "product", "in", "model", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("        </div>\r\n    </div>\r\n    <div class=\"col-md-10\">\r\n        ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\r\n    </div>\r\n</div>\r\n\r\n\r\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["products/index"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  data.buffer.push("\r\n<h4>Select a product to view details</h4>\r\n");
  },"useData":true});