function storeNewCampaign(pagesess,infoInputName,infoInputNotes) {
  var postUrl = '/session/'+pagesess+'/add-campaign';

  var postRequest = new XMLHttpRequest();
  postRequest.open('POST', postUrl);
  postRequest.setRequestHeader('Content-Type', 'application/json');
  postRequest.send(JSON.stringify({

    name: infoInputName,
    notes: infoInputNotes,
  }));
}

function generateCampaignHTML(remove,pagesess){
  if(remove){
    alert('Campaign has been deleted');
  }else{
	 alert('New campaign created');
}
	window.location.href = '/session/'+pagesess;
}


