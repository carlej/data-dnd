function storeNewPicture(pagesess,pagecamp,pagetow,pageloca,pagenp,infoInputUrl,infoInputCaption) {
  var postUrl;

  if(pagetow){
		if(pageloca){
			if(pagenp){
				postUrl = '/session/'+pagesess+'/'+pagecamp+'/towns/'+pagetow+'/locations/'+pageloca+'/npcs/'+pagenp+'/pictures/add-picture';
			}else{
				postUrl = '/session/'+pagesess+'/'+pagecamp+'/towns/'+pagetow+'/locations/'+pageloca+'/pictures/add-picture';
			}
		}else if(pagenp){
			postUrl = '/session/'+pagesess+'/'+pagecamp+'/towns/'+pagetow+'/npcs/'+pagenp+'/pictures/add-picture';
		}else{
			postUrl = '/session/'+pagesess+'/'+pagecamp+'/towns/'+pagetow+'/pictures/add-picture';
		}
	}else if(pageloca){
		if(pagenp){
			postUrl = '/session/'+pagesess+'/'+pagecamp+'/locations/'+pageloca+'/npcs/'+pagenp+'/pictures/add-picture';
		}else{
			postUrl = '/session/'+pagesess+'/'+pagecamp+'/locations/'+pageloca+'/pictures/add-picture';
		}
	}else if(pagenp){
		postUrl = '/session/'+pagesess+'/'+pagecamp+'/npcs/'+pagenp+'/pictures/add-picture';
	}else{
		postUrl = '/session/'+pagesess+'/'+pagecamp+'/pictures/add-picture';
	}

  var postRequest = new XMLHttpRequest();
  postRequest.open('POST', postUrl);
  postRequest.setRequestHeader('Content-Type', 'application/json');
  postRequest.send(JSON.stringify({

    url: infoInputUrl,
    caption: infoInputCaption,
  }));
}

function generatePictureHTML(remove,pagesess,pagecamp,pagetow,pageloca,pagenp){
	if(pagetow){
		if(pageloca){
			if(pagenp){
				if(remove){
					alert('Picture has been deleted');
				}else{
					alert('New picture created');
				}
				window.location.href = '/session/'+pagesess+'/'+pagecamp+'/towns/'+pagetow+'/locations/'+pageloca+'/npcs/'+pagenp+'/pictures';
			}else{
				if(remove){
					alert('Picture has been deleted');
				}else{
					alert('New picture created');
				}
				window.location.href = '/session/'+pagesess+'/'+pagecamp+'/towns/'+pagetow+'/locations/'+pageloca+'/pictures';
			}
		}else if(pagenp){
			if(remove){
				alert('Picture has been deleted');
			}else{
				alert('New picture created');
			}
			window.location.href = '/session/'+pagesess+'/'+pagecamp+'/towns/'+pagetow+'/npcs/'+pagenp+'/pictures';
		}else{
			if(remove){
				alert('Picture has been deleted');
			}else{
				alert('New picture created');
			}
			window.location.href = '/session/'+pagesess+'/'+pagecamp+'/towns/'+pagetow+'/pictures';
		}
	}else if(pageloca){
		if(pagenp){
			if(remove){
				alert('Picture has been deleted');
			}else{
				alert('New picture created');
			}
			window.location.href = '/session/'+pagesess+'/'+pagecamp+'/locations/'+pageloca+'/npcs/'+pagenp+'/pictures';
		}else{
			if(remove){
				alert('Picture has been deleted');
			}else{
				alert('New picture created');
			}
			window.location.href = '/session/'+pagesess+'/'+pagecamp+'/locations/'+pageloca+'/pictures';
		}
	}else if(pagenp){
		if(remove){
			alert('Picture has been deleted');
		}else{
			alert('New picture created');
		}
			window.location.href = '/session/'+pagesess+'/'+pagecamp+'/npcs/'+pagenp+'/pictures';
	}else{
		if(remove){
			alert('Picture has been deleted');
		}else{
			alert('New picture created');
		}
		window.location.href = '/session/'+pagesess+'/'+pagecamp+'/pictures';
	}
}