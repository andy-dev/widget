var Handlebars = require('handlebars-template-loader/runtime');

Handlebars.registerHelper('listItem', function(from, to, context,options){
	var item = "";
	for(var i = from, j=to; i < j; i++){
		item += options.fn(context[i]);
	}
	return item;
})

Handlebars.registerHelper('generatePages', function(rightMenu){
	var pages = [],    
	    pageCount = rightMenu.length;

	for(var i=1; i<= pageCount; i++){
		pages.push({
			number: i
		})
		return pages;
	}
})

Handlebars.registerHelper('getHtmlElements', function(contentsArray){
	var parser = new DOMParser;
	var htmlContents =[];
	  
  for (var i = 0; i < contentsArray.length; i++) {   
    var xmlString    = contentsArray[i].Html;
    var doc          = parser.parseFromString(xmlString, "text/xml");

    htmlContents.push({
      Link        : doc.firstChild.childNodes[0].getAttribute("href"),
      Image       : doc.firstChild.childNodes[0].getElementsByTagName("img")[0].getAttribute("src"),
      Header      : doc.firstChild.childNodes[0].getElementsByTagName("h4")[0].innerHTML,
      Description : doc.firstChild.childNodes[0].getElementsByTagName("p")[0].innerHTML
    })
  }
	return htmlContents;
})


Handlebars.registerHelper("incIndex", function(value, options){
	return parseInt(value) + 1;
})

Handlebars.registerHelper("math", function(lvalue, operator, rvalue, options){
	lvalue = parseFloat(lvalue);
	rvalue = parseFloat(rvalue);

	return {
		"+": lvalue + rvalue,
		"-": lvalue - rvalue,
		"*": lvalue * rvalue,
		"/": lvalue / rvalue,
		"%": lvalue % rvalue
	}[operator];
})