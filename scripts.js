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

function updatePage(responseText){
    $('#games').html(responseText + '<hr>');
    var jsondata = JSON.parse(responseText);
    for(var i = 0; i < jsondata.data.relationships.rosters.data.length; i++){
        $('#games').append(jsondata.data.relationships.rosters.data[i].id + "<br>");
    }
    
}