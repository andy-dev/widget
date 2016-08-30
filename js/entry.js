require("../styles/myPBS-pill-menu.css");
require("./bootstrap.js");
require("./handleBarsHelpers.js");

var getPartials = require("./handleBarsPartials")
var setOpenClosePillHandlers = require("./pill.js")

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
	  setOpenClosePillHandlers();
	}
 
	getPartials();
	renderPbsPill();
	// getPillData();
	
})();








// function getImages(){
// 	var img = document.createElement('img');
// 	img.style.height = "25%";
// 	img.style.width = "25%";
// 	img.src = require('./images/pbs_menu_icons/DashboardWatch.png');
// 	document.getElementById('img_container').appendChild(img);
// }






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





	

	