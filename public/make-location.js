function storeNewLocation(pagesess,pagecamp,pagetow,
	infoInputName,
	infoInputTerrain,
	infoInputAlignment,
	infoInputInventory,
	infoInputNotes){
	var postUrl;
	if(pagetow)
	{
		postUrl = '/session/'+pagesess+'/'+pagecamp+'/towns/'+pagetow+'/locations/add-location';
	}
	else{
		postUrl = '/session/'+pagesess+'/'+pagecamp+'/locations/add-location';
	}

	var postRequest = new XMLHttpRequest();
	postRequest.open('POST',postUrl);
	postRequest.setRequestHeader('Content-Type', 'application/json');
  	postRequest.send(JSON.stringify({
  		name:infoInputName,
  		terrain:infoInputTerrain,
        alignment:infoInputAlignment,
        inventory:infoInputInventory,
        notes:infoInputNotes
  }));
}

function generateLocationHTML(remove,pagesess,pagecamp,pagetow){
	if(pagetow){
		if(remove){
			alert('Location has been deleted');
		}else{
			alert('New location created');
	}
		window.location.href = '/session/'+pagesess+'/'+pagecamp+'/towns/'+pagetow+'/locations';
	}
	else{
		if(remove){
			alert('Location has been deleted');
		}else{
			alert('New location created');
	}
		window.location.href = '/session/'+pagesess+'/'+pagecamp+'/locations';
	}
}