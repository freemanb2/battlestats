

function updatePage(responseText){
    $('#json').html(responseText + '<hr>');
    var jsondata = JSON.parse(responseText);
	for(var i = 0; i < jsondata.data.length; i++){
		addMatch(jsondata, i);
	}
}

function addMatch(data, matchnum, matchid){
	$("#wrapper").append("<div class='match-"+matchnum+"'>\
						<h2 class='title'>Match "+(matchnum+1)+"</h2>\
						<hr><div class='team1' id='team1-"+matchnum+"'>\
						<h3>Team 1</h3>\
						</div>\
						<div class='team2' id='team2-"+matchnum+"'>\
						<h3>Team 2</h3>\
						</div>");
	for(var i = 0; i < data.included.length; i++){
        if(data.included[i].type == "participant" && data.included[i].attributes.stats.userID){
			if(data.included[i].attributes.stats.side == 1){
				addPlayer(data.included[i], "#team1-"+matchnum);
			}
			else{
				addPlayer(data.included[i], "#team2-"+matchnum);
			}
		}
    }
	$("#wrapper").append("</div>"); //closing match div
}

function addPlayer(data, team){
	alert("adding to "+team);
	$(team).append("<div class='player'>\
	Player ID: " + data.attributes.stats.userID + "<br>\
	Character: " + data.attributes.actor + "<br>\
	Kills: " + data.attributes.stats.kills + "<br>\
	Deaths: " + data.attributes.stats.deaths + "<br>\
	Damage Done: " + data.attributes.stats.damageDone + "<br>\
	Damage Taken: " + data.attributes.stats.damageReceived + "<br>\
	</div>");
}


$( function() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		   updatePage(xhttp.responseText);
		}
	};
	xhttp.open("GET", "https://api.dc01.gamelockerapp.com/shards/global/matches?filter[playerIds]=785877916079755264&page[limit]=2", true);
	xhttp.setRequestHeader('Authorization', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxYWU3OTI2MC1iNjAxLTAxMzUtMDllYS0wYTU4NjQ2MGYwOTUiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTExODI4OTYyLCJwdWIiOiJzdHVubG9jay1zdHVkaW9zIiwidGl0bGUiOiJiYXR0bGVyaXRlIiwiYXBwIjoiYmF0dGxlc3RhdHMtNGFlMjUwMjctMjgzMS00YzViLThmZTktNWFhMDRiYmIzYmZiIiwic2NvcGUiOiJjb21tdW5pdHkiLCJsaW1pdCI6MTB9.iweLw8k1BkH1lrSlsfKAo3nwbWwNu-Y9lmDSTeJ_qZA');
	xhttp.setRequestHeader('Accept', 'application/vnd.api+json');
	xhttp.send();
    $( "#accordion" ).accordion({
      collapsible: true,
	  active: false
    });
  } );