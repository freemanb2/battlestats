

function updatePage(responseText){
    $('#json').html(responseText + '<hr>');
    var jsondata = JSON.parse(responseText);
	addMatch(jsondata);
}

function addMatch(data){
	$("#games").append("<div class='match'>\
						<h2 class='title'>2v2 Matchmaking</h2>\
						<hr><div class='team1'>\
						<h3>Team 1</h3>\
						</div>\
						<div class='team2'>\
						<h3>Team 2</h3>\
						</div>");
	for(var i = 0; i < data.included.length; i++){
        if(data.included[i].type == "participant"){
			if(data.included[i].attributes.stats.side == 1){
				addPlayer(data.included[i], ".team1");
			}
			else{
				addPlayer(data.included[i], ".team2");
			}
		}
    }
	$("#games").append("</div>"); //closing match div
}

function addPlayer(data, team, player){
	$(team).append("<div class='player'>");
	$(team).append("Player ID: " + data.attributes.stats.userID + "<br>");
	$(team).append("Character: " + data.attributes.actor + "<br>");
	$(team).append("Kills: " + data.attributes.stats.kills + "<br>");
	$(team).append("Deaths: " + data.attributes.stats.deaths + "<br>");
	$(team).append("Damage Done: " + data.attributes.stats.damageDone + "<br>");
	$(team).append("Damage Taken: " + data.attributes.stats.damageReceived + "<br>");
	$(team).append("</div>");
}


$( function() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		   updatePage(xhttp.responseText);
		}
	};
	xhttp.open("GET", "https://api.dc01.gamelockerapp.com/shards/global/matches/AB9C81FABFD748C8A7EC545AA6AF97CC", true);
	xhttp.setRequestHeader('Authorization', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxYWU3OTI2MC1iNjAxLTAxMzUtMDllYS0wYTU4NjQ2MGYwOTUiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTExODI4OTYyLCJwdWIiOiJzdHVubG9jay1zdHVkaW9zIiwidGl0bGUiOiJiYXR0bGVyaXRlIiwiYXBwIjoiYmF0dGxlc3RhdHMtNGFlMjUwMjctMjgzMS00YzViLThmZTktNWFhMDRiYmIzYmZiIiwic2NvcGUiOiJjb21tdW5pdHkiLCJsaW1pdCI6MTB9.iweLw8k1BkH1lrSlsfKAo3nwbWwNu-Y9lmDSTeJ_qZA');
	xhttp.setRequestHeader('Accept', 'application/vnd.api+json');
	xhttp.send();
    $( "#accordion" ).accordion({
      collapsible: true
    });
  } );