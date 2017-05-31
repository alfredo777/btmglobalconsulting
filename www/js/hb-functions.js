function loadView(data, tpln, divloadtpl){
    getTemplate(tpln, data, function(output, err) {
    	$('#'+divloadtpl).addClass('animated fadeOut');
    	setTimeout(function(){
    		$("#"+divloadtpl).html(output);
        $('#'+divloadtpl).addClass('animated slideInDown');
    	}, 1200);
    });  
}


function appendView(data, tpl, divloadtpl){
    getTemplate(tpln, data, function(output, err) {
      setTimeout(function(){
        $("#"+divloadtpl).append(output);
      }, 200);
    });  
}

function getTemplate(name, context, callback) {
  $.ajax({
    url: 'views/'+name + '.hbs',
    cache: true,
    success: function (data) {
      var tpl = Handlebars.compile(data),
      output = tpl(context);
      callback(output, null);
    },
    error: function(err) {
      callback(null, err);
    }
  });
}

Handlebars.registerHelper('reverse', function (arr) {
    arr.reverse();
});


Handlebars.registerHelper('hbTPL', function(tpln, data, divloadtpl, options) {
  data = JSON.parse(data);
  console.log(data);

  getTemplate(tpln, data, function(output, err) {
    $("#"+divloadtpl).append(output);
  });
});

Handlebars.registerHelper('json', function(context) {
    return JSON.stringify(context);
});


Handlebars.registerHelper("prettifyDate", function(date) {
    var parse = new Date(date);
    var day = parse.getDate();
    var year = parse.getFullYear();
    var month = parse.getMonth();
    var hour = parse.getHours();
    var parsedDate = year +"-"+ month +"-"+ day + "   At " + hour + "  hour(s)" ;
    return parsedDate;
});


Handlebars.registerHelper("parsedPretyDate", function(date) {
  var string_date = date;
  var string_date = string_date.split("T");
  var hour = string_date[1].split(':',2);
  var date_hiper_parsed = string_date[0].split('-',3);
  var year = date_hiper_parsed[0];
  var mont = date_hiper_parsed[1];
  var day = date_hiper_parsed[2];
  var time = hour[0] + ":" + hour[1];
  var month = new Array();
  month[1] = "January";
  month[2] = "February";
  month[3] = "March";
  month[4] = "April";
  month[5] = "May";
  month[6] = "June";
  month[7] = "July";
  month[8] = "August";
  month[9] = "September";
  month[10] = "October";
  month[11] = "November";
  month[12] = "December";
  string_date = year +' '+ month[parseInt(mont)] +' '+ day + ' At ' + time;
  return string_date;
});


Handlebars.registerHelper("parsedPretyDate2", function(date) {
  var string_date = date;
  var string_date = string_date.split("T");
  var hour = string_date[1].split(':',2);
  var date_hiper_parsed = string_date[0].split('-',3);
  var year = date_hiper_parsed[0];
  var mont = date_hiper_parsed[1];
  var day = date_hiper_parsed[2];
  var time = hour[0] + ":" + hour[1];
  var month = new Array();
  month[1] = "January";
  month[2] = "February";
  month[3] = "March";
  month[4] = "April";
  month[5] = "May";
  month[6] = "June";
  month[7] = "July";
  month[8] = "August";
  month[9] = "September";
  month[10] = "October";
  month[11] = "November";
  month[12] = "December";
  string_date = year +' '+ month[parseInt(mont)] +' '+ day + ' At ' + time;
  return string_date;
});

Handlebars.registerHelper("parsedPretyHour", function(date) {
  var string_date = date;
  var string_date = string_date.split("T");
  var hour = string_date[1].split(':',2);
  var time = hour[0] + ":" + hour[1];
  return time;
});

Handlebars.registerHelper("parsedPretyDateDayMonth", function(date) {
  var string_date = date;
  var string_date = string_date.split("T");
  var hour = string_date[1].split(':',2);
  var date_hiper_parsed = string_date[0].split('-',3);
  var year = date_hiper_parsed[0];
  var mont = date_hiper_parsed[1];
  var day = date_hiper_parsed[2];
  var time = hour[0] + ":" + hour[1];
  var month = new Array();
  month[1] = "Ja";
  month[2] = "Feb";
  month[3] = "Mar";
  month[4] = "Apr";
  month[5] = "May";
  month[6] = "Jun";
  month[7] = "Jul";
  month[8] = "Aug";
  month[9] = "Sept";
  month[10] = "Oct";
  month[11] = "Nov";
  month[12] = "Dec";
  string_date = '<div style="margin-left:-15px;"><br/><center>' + day +'<br/>'+ month[parseInt(mont)] +'</center></div>';
  return string_date;
});


Handlebars.registerHelper("staticMapByGoogleData", function(place1, place2) {

var key = "AIzaSyDSMHCossdNQkJm9YJpw8-PQyWSSLHMiLU"; 
var place = place1+"+"+place2;
var urlGoogle = "https://maps.googleapis.com/maps/api/staticmap?visible="+place+"maptype=roadmap&zoom=16&size=600x400&markers=color:blue&format=pnge&key="+key;
console.log(urlGoogle);
return urlGoogle;

});


Handlebars.registerHelper("staticLinkByGoogleData", function(place1, place2) {
  var place = htmlEntities(place1) +"+"+ htmlEntities(place2);
  place = place.split(' ').join('+')
  return place;
});




Handlebars.registerHelper("compareDate", function(date){
  var dateaccess;
  var string_date = date;
  var string_date = string_date.split("T");
  var hour = string_date[1].split(':',2);
  var date_hiper_parsed = string_date[0].split('-',3);
  var year = date_hiper_parsed[0];
  var month = parseInt(date_hiper_parsed[1]);
  var day = date_hiper_parsed[2];
  var datex = year + "-" + month + "-" + day;
  var dFormat = moment().format();
  dFormat = dFormat.split("T");
  var date_hiper_parsed_2 = dFormat[0].split('-',3);
  var year2 = date_hiper_parsed_2[0];
  var month2 = parseInt(date_hiper_parsed_2[1]);
  var day2 = date_hiper_parsed_2[2];
  var dateclass = year2 + "-" + month2 + "-" + day2;
  if(dateclass == datex){
    dateaccess = 'green today-s';
  } else {
    dateaccess = 'standar no-today';
  }
  return dateaccess;
});

function htmlEntities(str) {
    return String(str).replace('&amp;','').replace('&lt;','').replace('&gt;','').replace('&quot;','').replace('undefined','');
}



