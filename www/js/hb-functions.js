function loadView(data, tpln, divloadtpl){
    getTemplate(tpln, data, function(output, err) {
    	$('#'+divloadtpl).addClass('animated fadeOut');
    	setTimeout(function(){
    		$("#"+divloadtpl).html(output);
        $('#'+divloadtpl).addClass('animated slideInDown');
    	}, 1200);
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
  string_date = year +' '+ month[mont] +' '+ day + ' At ' + time;
  return string_date;
});

Handlebars.registerHelper("parsedPretyHour", function(date) {
  var string_date = date;
  var string_date = string_date.split("T");
  var hour = string_date[1].split(':',2);
  console.log("Hora recortada --->" + hour[0] + ":" + hour[1]);
  var time = hour[0] + ":" + hour[1];
  return time;
});


Handlebars.registerHelper("compareDate", function(date){
  var dateaccess;
  var string_date = date;
  var string_date = string_date.split("T");
  var hour = string_date[1].split(':',2);
  var date_hiper_parsed = string_date[0].split('-',3);
  var year = date_hiper_parsed[0];
  var month = date_hiper_parsed[1];
  var day = date_hiper_parsed[2];
  
  var datex = year + "-" + month + "-" + day;

  var parse = new Date();
  var day2 = parse.getDate();
  var year2 = parse.getFullYear();
  var month2 = parse.getMonth();
  var dateclass = year2 + "-" + month2 + "-" + day2;
  console.log(dateclass);

  if(dateclass == datex){
    dateaccess = 'cyan today-s';
  } else {
    dateaccess = 'green no-today';
  }
  return dateaccess;
});

