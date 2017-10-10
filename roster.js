var teamMembers =
    {"Colin Bromley":
        {"photo":"<img src='resources/photos/colinbromley.jpg'>",
        "text":"Colin is originally from Pennsylvania and has been racing bikes in Central Texas for 5 years Blah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah Blah"
        },
     "Jason Baker":
        {"photo":"<img src='resources/photos/jasonbaker.jpg'>",
        "text":"Jason is from Austin and has been racing for 4 years. Blah Blah Blah Blah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah Blah"
        }
    };

var cList = $('ul');

$.each(teamMembers, function(key,value)){
    var li = $('<li/>')
        .addClass('ui-menu-item')
        .attr('role', 'menuitem')
        .innerHTML(key)
        .appendTo(cList);
};

("#IDbuttons").innerHTML = cList;

$(document).ready(function(){
    $(".click").click(function(){
		var fullid = $(this).text();
        $("#roster-content").replaceWith('<div id="roster-content">'+teamMembers[fullid].photo+"<br>"+
        teamMembers[fullid].text+"</div>")
    });
});