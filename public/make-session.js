function storeNewSession(infoInputName) {
  var postUrl = '/session/add-session';

  var postRequest = new XMLHttpRequest();
  postRequest.open('POST', postUrl);
  postRequest.setRequestHeader('Content-Type', 'application/json');
  postRequest.send(JSON.stringify({

    name: infoInputName,
  }));
}

function generateSessionHTML(){
	alert('New session created');
    window.location.href = '/';
}


