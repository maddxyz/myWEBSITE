
$( document ).ready(function(){
	$("#send").click(function(e){
	e.preventDefault();
	$.post("../htbin/chatsend.py",{ msg: $("#msg").val() }, function(data,status){
	            	if (data['num'] !== 0) {
	                alert(data['msg']); 
	            	}
	            	$("#msg").val('');
	            });
		setTimeout(function(){
			$.getJSON('../htbin/chatget.py', function(data){
		        var items = [];
		        for (i = 0; i < data.length; i++) {
		        	
		            items.push("<li> ("+data[i].date+") at "+data[i].time+" "+data[i].user+" wrote : "+ changeSmiley(data[i].msg) +"</li>");
		        };
		        $("#chatmsg").empty();
		        $("<ul/>", { html: items.join( "" ) }).appendTo("#chatmsg");
	   		});
		},400)

	});

;

function changeSmiley(dmsg) {
	var map = {
	    ':)': '<img class="emo" src="imgs/Smile.png" alt="Smile" />',
		':D': '<img class="emo" src="imgs/Laugh.png" alt="Laugh" />',
		'XD': '<img class="emo" src="imgs/XD.png" alt="XD" />',
		';)': '<img class="emo" src="imgs/Wink.png" alt="Wink" />',
		':P': '<img class="emo" src="imgs/Silly.png" alt="Silly" />',
		':O': '<img class="emo" src="imgs/Surprised.png" alt="Surprised" />'
		};

    var regex = /(:|X|;)-?[()PDO]/gi;
    return dmsg.replace(regex, function (match) {
        return typeof map[match] != 'undefined' ?
           map[match] :
           match;
    });
}
});


