var teamMembers =
    {"Colin Bromley":
        {"photo":"<img src='resources/photos/colinbromley.jpg'>",
        "text":"Colin is originally from Pennsylvania and has been racing bikes in Central Texas for 5 years"
        },
     "Jason Baker":
        {"photo":"<img src='resources/photos/jasonbaker.jpg'>",
        "text":"Jason is from Austin and has been racing for 4 years."
        },
     "Michael Orsow":{"text":"Mike is a total baller from Oregon."},
    };

$.each(teamMembers, function(key){
    $("#NameButtons").append("<li>"+key+"</li>");
    });

$(document).ready(function(){
    $("#NameButtons li").click(function(){
      var fullid = $(this).text();
      $("#roster-content").replaceWith('<div id="roster-content"><p>'+teamMembers[fullid].text+"</p></div>");
      });
});