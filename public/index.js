/******************************************************
Session Page Functions
******************************************************/

function handleSessionSelection(event) {

  var sessionSelection = event.target.value;

  if (sessionSelection) {
    window.location.href = '/session/' + sessionSelection;
  }

}

function getSession(){
  var pathComp = window.location.pathname.split('/');
  for(var x=0; x<pathComp.length; x++)
  {
    if(pathComp[x]=="session")
    {return pathComp[(x+1)];}
  }
  return 0;
}

// Functions to make buttons work.
function displayAddSession(){
  var addSessionModal = document.getElementById('add-session-modal');
  addSessionModal.classList.remove('hidden');
  displayAddModal();
}

function closeAddSession(){
  var addSessionModal = document.getElementById('add-session-modal');
  addSessionModal.classList.add('hidden');
  closeAddModal();
}

function displayAddModal(){
  var backdrop = document.getElementById('modal-backdrop');  
  backdrop.classList.remove('hidden');
}

function closeAddModal(){
  var backdrop = document.getElementById('modal-backdrop');
  backdrop.classList.add('hidden'); 
  clearInput();
}

function clearInput(){
  var inputElem = document.getElementsByClassName('info-input-element');
  for (var x=0; x<inputElem.length; x++){
    var input = inputElem[x].querySelector('input, textarea');
    input.value = '';
  }
}

function insertNewSession() {

  var infoInputName = document.getElementById('input-name').value;

  if (infoInputName.trim()) {
    storeNewSession(
		infoInputName)

	closeAddSession()

    generateSessionHTML();
    
  } else {
    alert('You must specify a value for the "name" field.');
  }
}

/*End of functions to make buttons work.
************************************************************
End of Sessions page functions
************************************************************
Campaign page functions
*************************************************************/

function handleCampaignSelect(event){
  var pagesess = getSession();
  var campaignSelect = event.target.value;
  if(campaignSelect)
  {
    window.location.href = '/session/'+pagesess+'/'+campaignSelect;
  }
}

function getCampaign(){
  var pathComp = window.location.pathname.split('/');
  for(var x=0; x<pathComp.length; x++)
  {
    if(pathComp[x]=="session")
    {return pathComp[(x+2)];}
  }
  return 0;
}

// Functions to make buttons work.
function displayAddCampaign(){
  var addCampaignModal = document.getElementById('add-campaign-modal');
  addCampaignModal.classList.remove('hidden');
  displayAddModal();
}

function closeAddCampaign(){
  var addCampaignModal = document.getElementById('add-campaign-modal');
  addCampaignModal.classList.add('hidden');
  closeAddModal();
}

function insertNewCampaign() {

  var pagesess = getSession();
  var infoInputName = document.getElementById('input-name').value;
  var infoInputNotes = document.getElementById('input-notes').value;


  if (infoInputName.trim()) {
  	storeNewCampaign(pagesess,infoInputName,infoInputNotes);

    closeAddCampaign();
    
    generateCampaignHTML(0,pagesess);
    
  } else {
    alert('You must specify a value for the "name" field.');
  }
}

function removeCampaign(){
	var pagesess = getSession();
	var pagecamp = getCampaign();
	var postUrl = '/session/'+pagesess+'/'+pagecamp+'/remove';
	if(confirm("Are you sure you want to delete this campaign. All data for it will be lost!")){
		var postRequest = new XMLHttpRequest();
		postRequest.open('POST',postUrl);
		postRequest.setRequestHeader('Content-Type', 'application/json');
		postRequest.send(JSON.stringify({
			name:'cahnge'
  }));
		generateCampaignHTML(1,pagesess);
	}else{alert("Nothing has been deleted")}
}

/*End of functions to make buttons work.
************************************************************
End of Campaign page functions
************************************************************
Town page functions
*************************************************************/

function openTowns()
{
	var pagesess = getSession();
	var pagecamp = getCampaign();

	window.location.href = '/session/'+pagesess+'/'+pagecamp+'/towns';
}

function getTown(){
  var pathComp = window.location.pathname.split('/');
  for(var x=0; x<pathComp.length; x++)
  {
    if(pathComp[x]=="towns")
    {return pathComp[(x+1)];}
  }
  return 0;
}

function handleTownSelect(event){
	var pagesess = getSession();
	var pagecamp = getCampaign();
	var townSelect = event.target.value;
	if(townSelect)
	{
		window.location.href = '/session/'+pagesess+'/'+pagecamp+'/towns/'+townSelect;
	}
}

function displayAddTown(){
  var addTownModal = document.getElementById('add-town-modal');
  addTownModal.classList.remove('hidden');
  displayAddModal();
}


function closeAddTown(){
  var addTownModal = document.getElementById('add-town-modal');
  addTownModal.classList.add('hidden');
  closeAddModal();
}

function insertNewTown() {

  var pagesess = getSession();
  var pagecamp =getCampaign();
  var infoInputName = document.getElementById('input-name').value;
  var infoInputAlignment = document.getElementById('input-alignment').value;
  var infoInputGovernment = document.getElementById('input-government').value;
  var infoInputDanger = document.getElementById('input-danger').value;
  var infoInputPopulation = document.getElementById('input-population').value;
  var infoInputEconomy = document.getElementById('input-economy').value;
  var infoInputLaw = document.getElementById('input-law').value;
  var infoInputCrime = document.getElementById('input-crime').value;
  var infoInputQualities = document.getElementById('input-qualities').value;
  var infoInputNotes = document.getElementById('input-notes').value;


  if (infoInputName.trim()) {
  	storeNewTown(pagesess,pagecamp,
  		infoInputName,
  		infoInputAlignment,
  		infoInputGovernment,
  		infoInputDanger,
  		infoInputPopulation,
  		infoInputEconomy,
  		infoInputLaw,
  		infoInputCrime,
  		infoInputQualities,
  		infoInputNotes);

    closeAddTown();
    
    generateTownHTML(0,pagesess,pagecamp);
    
  } else {
    alert('You must specify a value for the "name" field.');
  }
}

function removeTown(){
	var pagesess = getSession();
	var pagecamp = getCampaign();
	var pagetow = getTown();
	var postUrl = '/session/'+pagesess+'/'+pagecamp+'/towns/'+pagetow+'/remove';
	if(confirm("Are you sure you want to delete this town. All data for it will be lost!")){
		var postRequest = new XMLHttpRequest();
		postRequest.open('POST',postUrl);
		postRequest.setRequestHeader('Content-Type', 'application/json');
		postRequest.send(JSON.stringify({
  }));
		generateTownHTML(1,pagesess,pagecamp);
	}else{alert("Nothing has been deleted")}
}

/*End of functions to make buttons work.
************************************************************
End of Town page functions
************************************************************
Location page functions
*************************************************************/
function openLocations()
{
	var pagesess = getSession();
	var pagecamp = getCampaign();
	var pagetow = getTown();
	if(pagetow){
	window.location.href = '/session/'+pagesess+'/'+pagecamp+'/towns/'+pagetow+'/locations';
	}
	else{
		window.location.href = '/session/'+pagesess+'/'+pagecamp+'/locations';
	}
}

function getLocation(){
  var pathComp = window.location.pathname.split('/');
  for(var x=0; x<pathComp.length; x++)
  {
    if(pathComp[x]=="locations")
    {return pathComp[(x+1)];}
  }
  return 0;
}

function handleLocationSelect(event){
	var pagesess = getSession();
	var pagecamp = getCampaign();
	var pagetow = getTown();
	var locationSelect = event.target.value;
	if(locationSelect){
		if(pagetow){
			window.location.href = '/session/'+pagesess+'/'+pagecamp+'/towns/'+pagetow+'/locations/'+locationSelect;
		}else{
			window.location.href = '/session/'+pagesess+'/'+pagecamp+'/locations/'+locationSelect;}
		
	}
}

function displayAddLocation(){
  var addLocationModal = document.getElementById('add-location-modal');
  addLocationModal.classList.remove('hidden');
  displayAddModal();
}

function closeAddLocation(){
  var addLocationModal = document.getElementById('add-location-modal');
  addLocationModal.classList.add('hidden');
  closeAddModal();
}

function insertNewLocation(){
	var pagesess = getSession();
	var pagecamp = getCampaign();
	var pagetow = getTown();
	var infoInputName = document.getElementById('input-name').value;
	var infoInputTerrain = document.getElementById('input-terrain').value;
	var infoInputAlignment = document.getElementById('input-alignment').value;
	var infoInputInventory = document.getElementById('input-inventory').value;
	var infoInputNotes = document.getElementById('input-notes').value;

	if(infoInputName.trim()){
		storeNewLocation(pagesess,pagecamp,pagetow,
			infoInputName,
			infoInputTerrain,
			infoInputAlignment,
			infoInputInventory,
			infoInputNotes);

		closeAddLocation();

		generateLocationHTML(0,pagesess,pagecamp,pagetow);
	}else{
		alert('You must specify a value for the "name" field.');
	}
}

function removeLocation(){
	var pagesess = getSession();
	var pagecamp = getCampaign();
	var pagetow = getTown();
	var pageloca = getLocation();
	var postUrl;
	if(pagetow)
	{
		postUrl = '/session/'+pagesess+'/'+pagecamp+'/towns/'+pagetow+'/locations/'+pageloca+'/remove';
	}
	else{
		postUrl = '/session/'+pagesess+'/'+pagecamp+'/locations/'+pageloca+'/remove';
	}
	if(confirm("Are you sure you want to delete this location. All data for it will be lost!")){
		var postRequest = new XMLHttpRequest();
		postRequest.open('POST',postUrl);
		postRequest.setRequestHeader('Content-Type', 'application/json');
		postRequest.send(JSON.stringify({
  }));
		generateLocationHTML(1,pagesess,pagecamp);
	}else{alert("Nothing has been deleted")}
}

/*End of functions to make buttons work.
************************************************************
End of Location page functions
************************************************************
NPC page functions
*************************************************************/
function openNpcs()
{
	var pagesess = getSession();
	var pagecamp = getCampaign();
	var pagetow = getTown();
	var pageloca = getLocation();
	if(pagetow){
		if(pageloca){
			window.location.href = '/session/'+pagesess+'/'+pagecamp+'/towns/'+pagetow+'/locations/'+pageloca+'/npcs';
		}else{
			window.location.href = '/session/'+pagesess+'/'+pagecamp+'/towns/'+pagetow+'/npcs';
		}
	}
	else if(pageloca){
		window.location.href = '/session/'+pagesess+'/'+pagecamp+'/locations/'+pageloca+'/npcs';
	}
	else{
		window.location.href = '/session/'+pagesess+'/'+pagecamp+'/npcs';
	}
}

function getNpc(){
  var pathComp = window.location.pathname.split('/');
  for(var x=0; x<pathComp.length; x++)
  {
    if(pathComp[x]=="npcs")
    {return pathComp[(x+1)];}
  }
  return 0;
}

function handleNpcSelect(event){
	var pagesess = getSession();
	var pagecamp = getCampaign();
	var pagetow = getTown();
	var pageloca = getLocation();
	var npcSelect = event.target.value;
	if(pagetow){
		if(pageloca){
			window.location.href = '/session/'+pagesess+'/'+pagecamp+'/towns/'+pagetow+'/locations/'+pageloca+'/npcs/'+npcSelect;
		}else{
			window.location.href = '/session/'+pagesess+'/'+pagecamp+'/towns/'+pagetow+'/npcs/'+npcSelect;
		}
	}
	else if(pageloca){
		window.location.href = '/session/'+pagesess+'/'+pagecamp+'/locations/'+pageloca+'/npcs/'+npcSelect;
	}
	else{
		window.location.href = '/session/'+pagesess+'/'+pagecamp+'/npcs/'+npcSelect;
	}
}

function displayAddNpc(){
  var addNpcModal = document.getElementById('add-npc-modal');
  addNpcModal.classList.remove('hidden');
  displayAddModal();
}

function closeAddNpc(){
  var addNpcModal = document.getElementById('add-npc-modal');
  addNpcModal.classList.add('hidden');
  closeAddModal();
}

function insertNewNpc(){
	var pagesess = getSession();
	var pagecamp = getCampaign();
	var pagetow = getTown();
	var pageloca = getLocation();
	var infoInputName = document.getElementById('input-name').value;
	var infoInputClass = document.getElementById('input-class').value;
	var infoInputStr = document.getElementById('input-str').value;
	var infoInputDex = document.getElementById('input-dex').value;
	var infoInputCon = document.getElementById('input-con').value;
	var infoInputInt = document.getElementById('input-int').value;
	var infoInputWis = document.getElementById('input-wis').value;
	var infoInputCha = document.getElementById('input-cha').value;
	var infoInputDescription = document.getElementById('input-description').value;
	var infoInputRace = document.getElementById('input-race').value;
	var infoInputAlignment = document.getElementById('input-alignment').value;
	var infoInputAc = document.getElementById('input-ac').value;
	var infoInputAttacks = document.getElementById('input-attacks').value;
	var infoInputSkills = document.getElementById('input-skills').value;
	var infoInputFeats = document.getElementById('input-feats').value;
	var infoInputHp = document.getElementById('input-hp').value;
	var infoInputHd = document.getElementById('input-hd').value;
	var infoInputClothing = document.getElementById('input-clothing').value;
	var infoInputGear = document.getElementById('input-gear').value;
	var infoInputPlatinum = document.getElementById('input-platinum').value;
	var infoInputGold = document.getElementById('input-gold').value;
	var infoInputSilver = document.getElementById('input-silver').value;
	var infoInputIron = document.getElementById('input-iron').value;
	var infoInputPositive = document.getElementById('input-positive').value;
	var infoInputNegative = document.getElementById('input-negative').value;
	var infoInputGoal = document.getElementById('input-goal').value;
	var infoInputLanguage = document.getElementById('input-language').value;
	var infoInputTraits = document.getElementById('input-traits').value;
	var infoInputNotes = document.getElementById('input-notes').value;

	if(infoInputName.trim()){
		storeNewNpc(pagesess,pagecamp,pagetow,pageloca,
			infoInputName,
			infoInputClass,
			infoInputStr,
			infoInputDex,
			infoInputCon,
			infoInputInt,
			infoInputWis,
			infoInputCha,
			infoInputDescription,
			infoInputRace,
			infoInputAlignment,
			infoInputAc,
			infoInputAttacks,
			infoInputSkills,
			infoInputFeats,
			infoInputHp,
			infoInputHd,
			infoInputClothing,
			infoInputGear,
			infoInputPlatinum,
			infoInputGold,
			infoInputSilver,
			infoInputIron,
			infoInputPositive,
			infoInputNegative,
			infoInputGoal,
			infoInputLanguage,
			infoInputTraits,
			infoInputNotes);

		closeAddNpc();

		generateNpcHTML(0,pagesess,pagecamp,pagetow,pageloca);
	}else{
		alert('You must specify a value for the "name" field.');
	}
}

function removeNpc(){
	var pagesess = getSession();
	var pagecamp = getCampaign();
	var pagetow = getTown();
	var pageloca = getLocation();
	var pagenp = getNpc();
	var postUrl;
	if(pagetow)
	{
		if(pageloca){
			postUrl = '/session/'+pagesess+'/'+pagecamp+'/towns/'+pagetow+'/locations/'+pageloca+'/npcs/'+pagenp+'/remove';
		}
		else{
			postUrl = '/session/'+pagesess+'/'+pagecamp+'/towns/'+pagetow+'/npcs/'+pagenp+'/remove';
		}
	}
else if(pageloca){
		postUrl = '/session/'+pagesess+'/'+pagecamp+'/locations/'+pageloca+'/npcs/'+pagenp+'/remove';
	}
	else{
		postUrl = '/session/'+pagesess+'/'+pagecamp+'/npcs/'+pagenp+'/remove';
	}
	if(confirm("Are you sure you want to delete this NPC. All data for it will be lost!")){
		var postRequest = new XMLHttpRequest();
		postRequest.open('POST',postUrl);
		postRequest.setRequestHeader('Content-Type', 'application/json');
		postRequest.send(JSON.stringify({
  }));
		generateNpcHTML(1,pagesess,pagecamp,pagetow,pageloca);
	}else{alert("Nothing has been deleted")}
}

/*End of functions to make buttons work.
************************************************************
End of NPC page functions
************************************************************
Picture page functions
*************************************************************/
function openPictures()
{
	var pagesess = getSession();
	var pagecamp = getCampaign();
	var pagetow = getTown();
	var pageloca = getLocation();
	var pagenp = getNpc();
	if(pagetow){
		if(pageloca){
			if(pagenp){
				window.location.href = '/session/'+pagesess+'/'+pagecamp+'/towns/'+pagetow+'/locations/'+pageloca+'/npcs/'+pagenp+'/pictures';
			}else{
				window.location.href = '/session/'+pagesess+'/'+pagecamp+'/towns/'+pagetow+'/locations/'+pageloca+'/pictures';
			}
		}else if(pagenp){
			window.location.href = '/session/'+pagesess+'/'+pagecamp+'/towns/'+pagetow+'/npcs/'+pagenp+'/pictures';
		}else{
			window.location.href = '/session/'+pagesess+'/'+pagecamp+'/towns/'+pagetow+'/pictures';
		}
	}else if(pageloca){
		if(pagenp){
			window.location.href = '/session/'+pagesess+'/'+pagecamp+'/locations/'+pageloca+'/npcs/'+pagenp+'/pictures';
		}else{
			window.location.href = '/session/'+pagesess+'/'+pagecamp+'/locations/'+pageloca+'/pictures';
		}
	}else if(pagenp){
		window.location.href = '/session/'+pagesess+'/'+pagecamp+'/npcs/'+pagenp+'/pictures';
	}else{
		window.location.href = '/session/'+pagesess+'/'+pagecamp+'/pictures';
	}
}

function displayAddPicture(){
  var addPictureModal = document.getElementById('add-picture-modal');
  addPictureModal.classList.remove('hidden');
  displayAddModal();
}

function closeAddPicture(){
  var addPictureModal = document.getElementById('add-picture-modal');
  addPictureModal.classList.add('hidden');
  closeAddModal();
}

function insertNewPicture() {

  var pagesess = getSession();
  var pagecamp = getCampaign();
  var pagetow = getTown();
  var pageloca = getLocation();
  var pagenp = getNpc();
  var infoInputUrl = document.getElementById('input-url').value;
  var infoInputCaption = document.getElementById('input-caption').value;


  if (infoInputUrl.trim()) {
  	storeNewPicture(pagesess,pagecamp,pagetow,pageloca,pagenp,infoInputUrl,infoInputCaption);

    closeAddPicture();
    
    generatePictureHTML(0,pagesess,pagecamp,pagetow,pageloca,pagenp);
    
  } else {
    alert('You must specify a value for the "url" field.');
  }
}

function removePicture(event){
	var pagesess = getSession();
	var pagecamp = getCampaign();
	var pagetow = getTown();
	var pageloca = getLocation();
	var pagenp = getNpc();
	var pagepic = event.target.value;
	var postUrl;
	if(pagetow){
		if(pageloca){
			if(pagenp){
				postUrl = '/session/'+pagesess+'/'+pagecamp+'/towns/'+pagetow+'/locations/'+pageloca+'/npcs/'+pagenp+'/pictures/'+pagepic+'/remove';
			}else{
				postUrl = '/session/'+pagesess+'/'+pagecamp+'/towns/'+pagetow+'/locations/'+pageloca+'/pictures/'+pagepic+'/remove';
			}
		}else if(pagenp){
			postUrl = '/session/'+pagesess+'/'+pagecamp+'/towns/'+pagetow+'/npcs/'+pagenp+'/pictures/'+pagepic+'/remove';
		}else{
			postUrl = '/session/'+pagesess+'/'+pagecamp+'/towns/'+pagetow+'/pictures/'+pagepic+'/remove';
		}
	}else if(pageloca){
		if(pagenp){
			postUrl = '/session/'+pagesess+'/'+pagecamp+'/locations/'+pageloca+'/npcs/'+pagenp+'/pictures/'+pagepic+'/remove';
		}else{
			postUrl = '/session/'+pagesess+'/'+pagecamp+'/locations/'+pageloca+'/pictures/'+pagepic+'/remove';
		}
	}else if(pagenp){
		postUrl = '/session/'+pagesess+'/'+pagecamp+'/npcs/'+pagenp+'/pictures/'+pagepic+'/remove';
	}else{
		postUrl = '/session/'+pagesess+'/'+pagecamp+'/pictures/'+pagepic+'/remove';
	}

	if(confirm("Are you sure you want to delete this Picture. All data for it will be lost!")){
		var postRequest = new XMLHttpRequest();
		postRequest.open('POST',postUrl);
		postRequest.setRequestHeader('Content-Type', 'application/json');
		postRequest.send(JSON.stringify({
  }));
		generatePictureHTML(1,pagesess,pagecamp,pagetow,pageloca,pagenp);
	}else{alert("Nothing has been deleted")}
}

/*End of functions to make buttons work.
************************************************************
End of picture page functions
************************************************************/

window.addEventListener('DOMContentLoaded', function (event) {
//Session
  var sessionSelect = document.getElementById('session-select');
  if (sessionSelect) {
    sessionSelect.addEventListener('change', handleSessionSelection);
  }
  
  var addSession = document.getElementById('add-session-button');
  if (addSession) {
    addSession.addEventListener('click',displayAddSession);
  }

  var sessionCloseButton = document.querySelector('#add-session-modal .modal-close-button');
  if (sessionCloseButton) {
    sessionCloseButton.addEventListener('click', closeAddSession);
  }

  var sessionCancelButton = document.querySelector('#add-session-modal .modal-cancel-button');
  if (sessionCancelButton) {
    sessionCancelButton.addEventListener('click', closeAddSession);
  }

  var sessionAcceptButton = document.querySelector('#add-session-modal .modal-accept-button');
  if (sessionAcceptButton) {
    sessionAcceptButton.addEventListener('click', insertNewSession);
  }
 //Campaign

  var campaignSelect = document.getElementById('campaign-select');
  if(campaignSelect){
  campaignSelect.addEventListener('change',handleCampaignSelect);
}

  var addCampaign = document.getElementById('add-campaign-button');
  if(addCampaign){
  	addCampaign.addEventListener('click',displayAddCampaign);
}

  var campaignCloseButton = document.querySelector('#add-campaign-modal .modal-close-button');
  if (campaignCloseButton) {
    campaignCloseButton.addEventListener('click', closeAddCampaign);
  }

  var campaignCancelButton = document.querySelector('#add-campaign-modal .modal-cancel-button');
  if (campaignCancelButton) {
    campaignCancelButton.addEventListener('click', closeAddCampaign);
  }

  var campaignAcceptButton = document.querySelector('#add-campaign-modal .modal-accept-button');
  if (campaignAcceptButton) {
    campaignAcceptButton.addEventListener('click', insertNewCampaign);
  }

  var campaignRemoveButton = document.getElementById('campaign-remove-button');
  if(campaignRemoveButton){
  	campaignRemoveButton.addEventListener('click',removeCampaign);
  }
  //towns
  var showTowns = document.getElementById('select-town');
  if(showTowns){
  	showTowns.addEventListener('click',openTowns)
  }

  var addTown = document.getElementById('add-town-button');
  if(addTown){
  	addTown.addEventListener('click',displayAddTown);
  }

  var townCloseButton = document.querySelector('#add-town-modal .modal-close-button');
  if (townCloseButton) {
    townCloseButton.addEventListener('click', closeAddTown);
  }

  var townCancelButton = document.querySelector('#add-town-modal .modal-cancel-button');
  if (townCancelButton) {
    townCancelButton.addEventListener('click', closeAddTown);
  }

  var townAcceptButton = document.querySelector('#add-town-modal .modal-accept-button');
  if (townAcceptButton) {
    townAcceptButton.addEventListener('click', insertNewTown);
  }

  var townSelect = document.getElementById('town-select');
  if(townSelect){
  	townSelect.addEventListener('change',handleTownSelect);
  }

  var townRemoveButton = document.getElementById('town-remove-button');
  if(townRemoveButton){
  	townRemoveButton.addEventListener('click',removeTown);
  }
  //locations
  var showLocations = document.getElementById('select-location');
  if(showLocations){
  	showLocations.addEventListener('click',openLocations);
  }

  var addLocation = document.getElementById('add-location-button');
  if(addLocation){
  	addLocation.addEventListener('click',displayAddLocation);
  }

  var locationCloseButton = document.querySelector('#add-location-modal .modal-close-button');
  if (locationCloseButton) {
    locationCloseButton.addEventListener('click', closeAddLocation);
  }

  var locationCancelButton = document.querySelector('#add-location-modal .modal-cancel-button');
  if(locationCancelButton){
	locationCancelButton.addEventListener('click',closeAddLocation);
  }

  var locationAcceptButton = document.querySelector('#add-location-modal .modal-accept-button');
  if(locationAcceptButton){
	locationAcceptButton.addEventListener('click',insertNewLocation);
  }

  var locationSelect = document.getElementById('location-select');
  if(locationSelect){
	locationSelect.addEventListener('change',handleLocationSelect);
  }

  var locationRemoveButton = document.getElementById('location-remove-button');
  if(locationRemoveButton){
  	locationRemoveButton.addEventListener('click',removeLocation);
  }
//NPCs
  var showNpcs = document.getElementById('select-npc');
  if(showNpcs){
	showNpcs.addEventListener('click',openNpcs);
  }

  var addNpc = document.getElementById('add-npc-button');
  if(addNpc){
	addNpc.addEventListener('click',displayAddNpc);
  }

  var npcCloseButton = document.querySelector('#add-npc-modal .modal-close-button');
  if(npcCloseButton){
	npcCloseButton.addEventListener('click',closeAddNpc);
  }

  var npcCancelButton = document.querySelector('#add-npc-modal .modal-cancel-button');
  if(npcCancelButton){
	npcCancelButton.addEventListener('click',closeAddNpc);
  }

  var npcAcceptButton = document.querySelector('#add-npc-modal .modal-accept-button');
  if(npcAcceptButton){
	npcAcceptButton.addEventListener('click',insertNewNpc);
  }

  var npcSelect = document.getElementById('npc-select');
  if(npcSelect){
  	npcSelect.addEventListener('change',handleNpcSelect);
  }

  var npcRemoveButton = document.getElementById('npc-remove-button');
  if(npcRemoveButton){
  	npcRemoveButton.addEventListener('click',removeNpc);
  }
  //picture
  var showPicture = document.getElementById('select-picture');
  if(showPicture){
    showPicture.addEventListener('click',openPictures);
  }

  var addPicture = document.getElementById('add-picture-button');
  if(addPicture){
	addPicture.addEventListener('click',displayAddPicture);
  }

  var pictureCloseButton = document.querySelector('#add-picture-modal .modal-close-button');
  if (pictureCloseButton) {
    pictureCloseButton.addEventListener('click', closeAddPicture);
  }

  var pictureCancelButton = document.querySelector('#add-picture-modal .modal-cancel-button');
  if (pictureCancelButton) {
    pictureCancelButton.addEventListener('click', closeAddPicture);
  }

  var pictureAcceptButton = document.querySelector('#add-picture-modal .modal-accept-button');
  if (pictureAcceptButton) {
    pictureAcceptButton.addEventListener('click', insertNewPicture);
  }

  var pictureRemoveButton = document.getElementById('picture-remove-button');
  if(pictureRemoveButton){
  	pictureRemoveButton.addEventListener('click',removePicture);
  }

});