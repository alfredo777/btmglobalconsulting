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