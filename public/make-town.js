function storeNewTown(pagesess,pagecamp,
		infoInputName,
  		infoInputAlignment,
      infoInputGovernment,
  		infoInputDanger,
  		infoInputPopulation,
  		infoInputEconomy,
  		infoInputLaw,
  		infoInputCrime,
  		infoInputQualities,
  		infoInputNotes) {
  var postUrl = '/session/'+pagesess+'/'+pagecamp+'/towns/add-town';

  var postRequest = new XMLHttpRequest();
  postRequest.open('POST', postUrl);
  postRequest.setRequestHeader('Content-Type', 'application/json');
  postRequest.send(JSON.stringify({
  		name:infoInputName,
      alignment:infoInputAlignment,
      government:infoInputGovernment,
      danger:infoInputDanger,
      population:infoInputPopulation,
      economy:infoInputEconomy,
      law:infoInputLaw,
      crime:infoInputCrime,
      qualities:infoInputQualities,
      notes:infoInputNotes
  }));
}

function generateTownHTML(remove,pagesess,pagecamp){
  if(remove){
    alert('Town has been deleted');
  }else{
    alert('New town created');
}
	window.location.href = '/session/'+pagesess+'/'+pagecamp+'/towns';
}