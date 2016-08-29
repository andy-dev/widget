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