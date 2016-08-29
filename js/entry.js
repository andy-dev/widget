// require("./style.css");
require("../styles/menuV2.css");
// require("../styles/myPBS-pill-menu.css");
require("./bootstrap.js");
// require("./bootstrapTab.js");
require("./handleBarsHelpers.js");



var PbsPillWidget = (function(){

	var PbsPillWidget = {};
	PbsPillWidget.$ = PbsPillWidget.jQuery = jQuery.noConflict(true);

	function getPillData(){
	  var pbsUrl = "http://dev.mypbs.org/z/components/webservices/Pbsextensionservice.asmx/GetMenuData";
	  
	  PbsPillWidget.$.ajax({
      method: 'GET',
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      url: pbsUrl
    })
    .done(function(response) {
     	renderPbsPill(response);    
    })
    .error(function (error) {
      console.log(error);
    });
	}

	function getHandleBarsPartials(){
		var Handlebars = require('handlebars-template-loader/runtime');
		var watchVideosPartial       = require('../templates/_watchVideosPartial.hbs'),
		 		programmingPartial       = require('../templates/_programmingPartial.hbs'),
				engagePromotePartial     = require('../templates/_engagePromotePartial.hbs'),
				developmentPartial       = require('../templates/_developmentPartial.hbs'),
				stationManagementPartial = require('../templates/_stationManagementPartial.hbs'),
				feedsPartial             = require('../templates/_feedsPartial.hbs');

		Handlebars.registerPartial({
			watchVideosPartial         :watchVideosPartial,
			programmingPartial         :programmingPartial,
			engagePromotePartial       :engagePromotePartial,
			developmentPartial         :developmentPartial,
			stationManagementPartial   :stationManagementPartial,
			feedsPartial               :feedsPartial
		});
	}

	function renderPbsPill(serverResponse){
	  
	  var template = require('../templates/mainTemplate.hbs');
	  var menuServerResponseMock = require('../response.json');
	
	  var div = document.createElement('div');
	  div.innerHTML = template({
	  	WatchVideos         :menuServerResponseMock.d[0],
			Programming         :menuServerResponseMock.d[1],
			EngagePromote       :menuServerResponseMock.d[2],
			Development         :menuServerResponseMock.d[3],
			StationManagement   :menuServerResponseMock.d[4],
			Feeds               :menuServerResponseMock.d[5]
	  });

	  var appendTo = document.getElementById('pbs-pill-widget'); 
	  appendTo.parentNode.insertBefore(div, appendTo);
	  require("./pill.js");
	}

	function renderBrandonPill(serverResponse){
	  
	  var template = require('../templates/test.hbs');
	  
	
	  var div = document.createElement('div');
	  div.innerHTML = template();

	  var appendTo = document.getElementById('pbs-pill-widget'); 
	  appendTo.parentNode.insertBefore(div, appendTo);
	  require("./pill.js");
	}


	
	getHandleBarsPartials();
	renderPbsPill();
	// getPillData();

	// renderBrandonPill();
	
	return {};
})();








// function getImages(){
// 	var img = document.createElement('img');
// 	img.style.height = "25%";
// 	img.style.width = "25%";
// 	img.src = require('./images/pbs_menu_icons/DashboardWatch.png');
// 	document.getElementById('img_container').appendChild(img);
// }



// Stork.navBarResponsive = function navBarResponsive(){
// 		Stork.$(".icon-hamburguer").click(function(){
// 		var x = document.getElementById("myTopnav");
// 		    if (x.className === "topnav") {
// 		        x.className += " responsive";
// 		    } else {
// 		        x.className = "topnav";
// 		    }
// 		})	 
// 	}


//get json response object
// var results = require("./menuParser.js");

// console.log(results);
	

// function loadScript(url, cb){
// 	var script = document.createElement('script');

// 	script.async = true;
// 	script.src=url;

// 	var entry = document.getElementsByTagName('script')[0];
// 	entry.parentNode.insertBefore(script, entry);

// 	script.onload = script.onreadystatechange = function(){
// 		var rdyState = script.readyState;

// 		if(!rdyState || /complete|loaded/.test(script.readyState)){
// 			cb();


			//after cb we detach event handlers to avoid memory leaks
// 			script.onload = null;
// 			script.onreadystatechange = null;
// 		}
// 	};
// }


//how it works now

// require("./menus.css");




// var PbsPillWidget = (function(){

// 	function getPartials(){
// 		var Handlebars = require('handlebars-template-loader/runtime');
// 		var partial = require('./templates/_topMenuPartial.hbs');
// 		Handlebars.registerPartial('my_partial', partial);
// 	}

// 	function getPillJsonData(){

// 		$.ajax({
// 			url: "http://dev.mypbs.org/z/components/webservices/Pbsextensionservice.asmx/GetMenuData",
// 			method: 'GET',
// 			contentType: 'application/json; charset=utf-8',
// 			dataType: 'json'
// 		})
// 		.done(function(response){
// 			console.log("success we got a response")
// 			console.log(reponse);
// 			var response = response;
// 		})
// 		.error(function(err){
// 			console.log("ERROR!")
// 			console.log(err);
// 		})

// 		return response;
// 	}


// 	function handleB(){
// 		// Pass mockServerResponse to compiled template  
// 		var template = require('./templates/pill.hbs');
// 		var menuServerResponseMock = require('./response.json');

// 		var menuServer = getPillJsonData();
// 		var el_html = template(menuServerResponseMock);
		
// 		// Append to publisher avoid using jquery at all costs
// 		var div = document.createElement('div');
// 		div.innerHTML = el_html;
// 		var appendTo = document.getElementById('pbs-pill-widget'); 
// 		appendTo.parentNode.insertBefore(div, appendTo);
// 	}

// 	function getImages(){
// 		var img = document.createElement('img');
// 		img.style.height = "25%";
// 		img.style.width = "25%";
// 		img.src = require('./images/pbs_menu_icons/DashboardWatch.png');
// 		document.getElementById('img_container').appendChild(img);
// 	}




// 	getPartials();
// 	handleB();
// 	getImages();
	

// 	return {handleB: handleB};
// })();
	

	