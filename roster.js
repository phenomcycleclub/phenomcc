var teamMembers =
    {"Colin Bromley":
        {photo:"<img-src=resources/colin.jpg",
        text: "Colin is originally from Pennsylvania and has been racing bikes in Central Texas for 5 years"
        }
     "Jason Baker":
        {photo:"<img-src=resources/jason.jpg",
        text: "Jason is from Austin and has been racing for 4 years."
        }
    }

function $(document).ready(function(){
    $("#content").click(function(event){
        var fullid = $(this).attr(id);
        $("button").show(teamMembers.fullid.photo);
        $("button").show(teamMembers.fullid.text);
    });
});