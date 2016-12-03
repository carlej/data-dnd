function handleTowns(event){
  var pagesess = getSession();
  var pagecamp = getCampaign();
  window.location.href = '/session/'+pagesess+'/'+pagecamp+'/towns';
}

function handleLocations(event){
  var pagesess = getSession();
  var pagecamp = getCampaign();
  var pagetow = getTown();
  if(pagetow)
  {
    window.location.href = '/session/'+pagesess+'/'+pagecamp+'/towns/'+pagetow+'/locations';
  }
  else
  {
    window.location.href = '/session/'+pagesess+'/'+pagecamp+'/locations';
  }
}

function handleNpcs(event){
  var pagesess = getSession();
  var pagecamp = getCampaign();
  var pagetow = getTown();
  var pageloca = getLocation();
  if(pagetow)
  {
    if(pageloca)
    {
      window.location.href = '/session/'+pagesess+'/'+pagecamp+'/towns/'+pagetow+'/locations/'+pageloca+'/npcs';
    }
    else
    {
      window.location.href = '/session/'+pagesess+'/'+pagecamp+'/towns/'+pagetow+'/npcs';
    }
  }
  else
  {
    window.location.href = '/session/'+pagesess+'/'+pagecamp+'/npcs';
  }
}

function handlePictures(event){
  var pagesess = getSession();
  var pagecamp = getCampaign();
  var pagetow = getTown();
  var pageloca = getLocation();
  var pagenpc = getNpc();
  
  if(pagecamp)
  {
    if(pagetow)
    {
      if(pageloca)
      {
        if(pagenpc)
        {
          window.location.href = '/session/'+pagesess+'/'+pagecamp+'/towns/'+pagetow+'/locations/'+pageloca+'/npcs/'+pagenpc+'/pictures';
        }
        else
        {
          window.location.href = '/session/'+pagesess+'/'+pagecamp+'/towns/'+pagetow+'/locations/'+pageloca+'/pictures';
        }
      }
      else if(pagenpc)
      {
        window.location.href = '/session/'+pagesess+'/'+pagecamp+'/towns/'+pagetow+'/npcs/'+pagenpc+'/pictures';
      }
      else
      {
        window.location.href = '/session/'+pagesess+'/'+pagecamp+'/towns/'+pagetow+'/pictures';
      }
    }
    else if(pageloca)
    {
      if(pagenpc)
      {
        window.location.href = '/session/'+pagesess+'/'+pagecamp+'/locations/'+pageloca+'/npcs/'+pagenpc+'/pictures';
      }
      else
      {
        window.location.href = '/session/'+pagesess+'/'+pagecamp+'/locations/'+pageloca+'/pictures';
      }
    }
    else if(pagenpc)
    {
      window.location.href = '/session/'+pagesess+'/'+pagecamp+'/npcs/'+pagenpc+'/pictures';
    }
    else
    {
      window.location.href = '/session/'+pagesess+'/'+pagecamp+'/pictures';
    }
  }
}

function handleSessionSelect(event){
  var sessionSelect = event.target.value;
  if(sessionSelect)
  {
    window.location.href = '/session/' + sessionSelect;
  }
}

function handleCampaignSelect(event){
  var pagesess = getSession();
  var campaignSelect = event.target.value;
  if(campaignSelect)
  {
    window.location.href = '/session/'+pagesess+'/'+campaignSelect;
  }
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

function handleLocationSelect(event){
  var pagesess = getSession();
  var pagecamp = getCampaign();
  var pagetow = getTown();
  var locationSelect = event.target.value;
  if(pagetow)
  {
    if(locationSelect)
    {
      window.location.href = '/session/'+pagesess+'/'+pagecamp+'/towns/'+pagetow+'/locations/'+locationSelect;
    }
  }
  else if(locationSelect)
  {
    window.location.href = '/session/'+pagesess+'/'+pagecamp+'/locations/'+locationSelect;
  }
}

function handleNpcSelect(event){
  var pagesess = getSession();
  var pagecamp = getCampaign();
  var pagetow = getTown();
  var pageloca = getLocation();
  var npcSelect = event.target.value;
  if(pagetow)
  {
    if(pageloca)
    {
      window.location.href = '/session/'+pagesess+'/'+pagecamp+'/towns/'+pagetow+'/locations/'+locationSelect+'/npcs/'+npcSelect;
    }
    else
    {
      window.location.href = '/session/'+pagesess+'/'+pagecamp+'/towns/'+townSelect+'/npcs/'+npcSelect;
    }
  }
  else if(pageloca)
  {
    window.location.href = '/session/'+pagesess+'/'+pagecamp+'/locations/'+locationSelect+'/npcs/'+npcSelect;
  }
  else if(npcSelect)
  {
    window.location.href = '/session/'+pagesess+'/'+pagecamp+'/npcs/'+npcSelect;
  }
}

function removeOnDismiss(event){
  var clickedElem = event.target;
  var clickedElemParent = event.target.parentNode;
  var ElemParent= clickedElemParent.parentNode;
  ElemParent.removeChild(clickedElemParent);
}

function displayAddSession(){
  var addSessionModal = documnet.getElementById('add-session-modal');
  addSessionModal.classList.remove('hidden');
  displayAddModal();
}

function closeAddSession(){
  var addSessionModal = document.getElementById('add-session-modal');
  addSessionModal.classList.add('hidden');
  closeAddModal();
}

function displayAddCampaign(){
  var addCampaignModal = documnet.getElementById('add-campaign-modal');
  addCampaignModal.classList.remove('hidden');
  displayAddModal();
}

function closeAddCampaign(){
  var addCampaignModal = document.getElementById('add-campaign-modal');
  addCampaignModal.classList.add('hidden');
  closeAddModal();
}

function displayAddTown(){
  var addTownModal = documnet.getElementById('add-Town-modal');
  addNpcModal.classList.remove('hidden');
  displayAddModal();
}

function closeAddTown(){
  var addTownModal = document.getElementById('add-town-modal');
  addTownModal.classList.add('hidden');
  closeAddModal();
}

function displayAddLocation(){
  var addLocationModal = documnet.getElementById('add-location-modal');
  addLocationModal.classList.remove('hidden');
  displayAddModal();
}

function closeAddLocation(){
  var addLocationModal = document.getElementById('add-location-modal');
  addLocationModal.classList.add('hidden');
  closeAddModal();
}

function displayAddNpc(){
  var addNpcModal = documnet.getElementById('add-npc-modal');
  addNpcModal.classList.remove('hidden');
  displayAddModal();
}

function closeAddNpc(){
  var addNpcModal = document.getElementById('add-npc-modal');
  addNpcModal.classList.add('hidden');
  closeAddModal();
}

function displayAddPicture(){
  var addPictureModal = documnet.getElementById('add-picture-modal');
  addPictureModal.classList.remove('hidden');
  displayAddModal();
}

function closeAddPicture(){
  var addPictureModal = document.getElementById('add-picture-modal');
  addPictureModal.classList.add('hidden');
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

function getSession(){
  var pathComp = window.location.pathname.split('/');
  for(var x=0; x<pathComp.length; x++)
  {
    if(pathComp[x]=="sessions")
    {return pathComp[(x+1)];}
  }
  return 0;
}

function getCampaign(){
  var pathComp = window.location.pathname.split('/');
  for(var x=0; x<pathComp.length; x++)
  {
    if(pathComp[x]=="sessions")
    {return pathComp[(x+2)];}
  }
  return 0;
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

function getLocation(){
  var pathComp = window.location.pathname.split('/');
  for(var x=0; x<pathComp.length; x++)
  {
    if(pathComp[x]=="locations")
    {return pathComp[(x+1)];}
  }
  return 0;
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

function insertNewNpc() {
  var pagesess = getSession();
  var pagecamp = getCampaign();
  var pagetow = getTown();
  var pageloca = getLocation();

  var infoInputId = document.getElementById('input-id').value || '';
  var infoInputIdi = document.getElementById('input-idi').value || '';
  var infoInputName = document.getElementById('input-name').value || '';
  var infoInputClass = document.getElementById('input-class').value || '';
  var infoInputStr = document.getElementById('input-str').value || '';
  var infoInputDex = document.getElementById('input-dex').value || '';
  var infoInputCon = document.getElementById('input-con').value || '';
  var infoInputInt = document.getElementById('input-int').value || '';
  var infoInputWis = document.getElementById('input-wis').value || '';
  var infoInputCha = document.getElementById('input-cha').value || '';
  var infoInputDescription = document.getElementById('input-description').value || '';
  var infoInputRace = document.getElementById('input-race').value || '';
  var infoInputAlignment = document.getElementById('input-alignment').value || '';
  var infoInputAc = document.getElementById('input-ac').value || '';
  var infoInputAttacks = document.getElementById('input-attacks').value || '';
  var infoInputSkills = document.getElementById('input-skills').value || '';
  var infoInputFeats = document.getElementById('input-feats').value || '';
  var infoInputHp = document.getElementById('input-hp').value || '';
  var infoInputHd = document.getElementById('input-hd').value || '';
  var infoInputClothing = document.getElementById('input-clothing').value || '';
  var infoInputGear = document.getElementById('input-gear').value || '';
  var infoInputPlatinum = document.getElementById('input-platinum').value || '';
  var infoInputGold = document.getElementById('input-gold').value || '';
  var infoInputSilver = document.getElementById('input-silver').value || '';
  var infoInputCopper = document.getElementById('input-copper').value || '';
  var infoInputIron = document.getElementById('input-iron').value || '';
  var infoInputPositive = document.getElementById('input-positive').value || '';
  var infoInputNegative = document.getElementById('input-negative').value || '';
  var infoInputGoal = document.getElementById('input-goal').value || '';
  var infoInputLanguage = document.getElementById('input-language').value || '';
  var infoInputTraits = document.getElementById('input-traits').value || '';
  var infoInputNotes = document.getElementById('input-notes').value || '';

  if (infoInputName.trim()) {
    storeNewNPC(pagesess,pagecamp,pagetow,pageloca,
      infoInputId,
      infoInputIdi,
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
      infoInputCopper,
      infoInputIron,
      infoInputPositive,
      infoInputNegative,
      infoInputGoal,
      infoInputLanguage,
      infoInputTraits,
      infoInputNotes)
    
    var newNPCHTML = generateNPCHTML(
      infoInputId.trim(),
      infoInputIdi.trim(),
      infoInputName.trim(),
      infoInputClass.trim(),
      infoInputStr.trim(),
      infoInputDex.trim(),
      infoInputCon.trim(),
      infoInputInt.trim(),
      infoInputWis.trim(),
      infoInputCha.trim(),
      infoInputDescription.trim(),
      infoInputRace.trim(),
      infoInputAlignment.trim(),
      infoInputAc.trim(),
      infoInputAttacks.trim(),
      infoInputSkills.trim(),
      infoInputFeats.trim(),
      infoInputHp.trim(),
      infoInputHd.trim(),
      infoInputClothing.trim(),
      infoInputGear.trim(),
      infoInputPlatinum.trim(),
      infoInputGold.trim(),
      infoInputSilver.trim(),
      infoInputCopper.trim(),
      infoInputIron.trim(),
      infoInputPositive.trim(),
      infoInputNegative.trim(),
      infoInputGoal.trim(),
      infoInputLanguage.trim(),
      infoInputTraits.trim(),
      infoInputNotes.trim(),
    );
    var mainElement = document.querySelector('main');
    mainElement.insertAdjacentHTML('beforeend', newNPCHTML);
    closeAddModal();
  } else {
    alert('You must specify a value for the "name" field.');
  }
}

function insertNewCampaign() {
  var pagesess = getSession();

  var infoInputId = document.getElementById('input-id').value || '';
  var infoInputIdi = document.getElementById('input-idi').value || '';
  var infoInputName = document.getElementById('input-name').value || '';
  var infoInputNotes = document.getElementById('input-notes').value || '';

  if (infoInputName.trim()) {
    storeNewCampaign(pagesess,
      infoInputId,
      infoInputIdi,
      infoInputName,
      infoInputNotes)
    
    var newCampaignHTML = generateCampaignHTML(
      infoInputId.trim(),
      infoInputIdi.trim(),
      infoInputName.trim(),
      infoInputNotes.trim(),
    );
    var mainElement = document.querySelector('main');
    mainElement.insertAdjacentHTML('beforeend', newCampaignHTML);
    closeAddModal();
  } else {
    alert('You must specify a value for the "name" field.');
  }
}

function insertNewLocation() {
  var pagesess = getSession();
  var pagecamp = getCampaign();
  var pagetow = getTown();

  var infoInputId = document.getElementById('input-id').value || '';
  var infoInputIdi = document.getElementById('input-idi').value || '';
  var infoInputName = document.getElementById('input-name').value || '';
  var infoInputTerrainType = document.getElementById('input-terraintype').value || '';
  var infoInputAlignmnet = document.getElementById('input-alignment').value || '';
  var infoInputNotes = document.getElementById('input-notes').value || '';

  if (infoInputName.trim()) {
    storeNewLocation(pagesess,pagecamp,pagetow,
      infoInputId,
      infoInputIdi,
      infoInputName,
      infoInputTerrainType,
      infoInputAlignmnet,
      infoInputNotes)
    
    var newLocationHTML = generateLocationHTML(
      infoInputId.trim(),
      infoInputIdi.trim(),
      infoInputName.trim(),
      infoInputTerrainType.trim(),
      infoInputAlignmnet.trim(),
      infoInputNotes.trim(),
    );
    var mainElement = document.querySelector('main');
    mainElement.insertAdjacentHTML('beforeend', newLocationHTML);
    closeAddModal();
  } else {
    alert('You must specify a value for the "name" field.');
  }
}

function insertNewTown() {
  var pagesess = getSession();
  var pagecamp = getCampaign();

  var infoInputId = document.getElementById('input-id').value || '';
  var infoInputIdi = document.getElementById('input-idi').value || '';
  var infoInputName = document.getElementById('input-name').value || '';
  var infoInputAlignment = document.getElementById('input-alignment').value || '';
  var infoInputDanger = document.getElementById('input-danger').value || '';
  var infoInputGovernment = document.getElementById('input-government').value || '';
  var infoInputPopulation = document.getElementById('input-population').value || '';
  var infoInputEconomy = document.getElementById('input-economy').value || '';
  var infoInputLaw = document.getElementById('input-law').value || '';
  var infoInputCrime = document.getElementById('input-crime').value || '';
  var infoInputQualities = document.getElementById('input-qualties').value || '';
  var infoInputNotes = document.getElementById('input-notes').value || '';

  if (infoInputName.trim()) {
    storeNewTown(pagesess,pagecamp,
      infoInputId,
      infoInputIdi,
      infoInputName,
      infoInputAlignment,
      infoInputDanger,
      infoInputGovernment,
      infoInputPopulation,
      infoInputEconomy,
      infoInputLaw,
      infoInputCrime,
      infoInputQualities,
      infoInputNotes)
    
    var newTownHTML = generateTownHTML(
      infoInputId.trim(),
      infoInputIdi.trim(),
      infoInputName.trim(),
      infoInputAlignment.trim(),
      infoInputDanger.trim(),
      infoInputGovernment.trim(),
      infoInputPopulation.trim(),
      infoInputEconomy.trim(),
      infoInputLaw.trim(),
      infoInputCrime.trim(),
      infoInputQualities.trim(),
      infoInputNotes.trim(),
    );
    var mainElement = document.querySelector('main');
    mainElement.insertAdjacentHTML('beforeend', newTownHTML);
    closeAddModal();
  } else {
    alert('You must specify a value for the "name" field.');
  }
}

function insertNewSession() {

  var infoInputId = document.getElementById('input-id').value || '';
  var infoInputIdi = document.getElementById('input-idi').value || '';
  var infoInputName = document.getElementById('input-name').value || '';

  if (infoInputName.trim()) {
    storeNewSession(
      infoInputId,
      infoInputIdi,
      infoInputName)
    var newSessionHTML = generateSessionHTML(
      infoInputId.trim(),
      infoInputIdi.trim(),
      infoInputName.trim(),
    );
    var mainElement = document.querySelector('main');
    mainElement.insertAdjacentHTML('beforeend', newSessionHTML);
    closeAddModal();
  } else {
    alert('You must specify a value for the "name" field.');
  }
}

function insertNewPicture() {
  var pagesess = getSession();
  var pagecamp = getCampaign();
  var pagetow = getTown();
  var pagenp = getNpc();

  var infoInputId = document.getElementById('input-id').value || '';
  var infoInputIdi = document.getElementById('input-idi').value || '';
  var infoInputCaption = document.getElementById('input-caption').value || '';
  var infoInputUrl = document.getElementById('input-url').value || '';

  if (infoInputUrl.trim()) {
    storeNewNpc(pagesess,pagecamp,pagetow,pagenp,
      infoInputId,
      infoInputIdi,
      infoInputCaption,
      infoInputUrl)
    
    var newPictureHTML = generatePictureHTML(
      infoInputId.trim(),
      infoInputIdi.trim(),
      infoInputCaption.trim(),
      infoInputUrl.trim(),
    );
    var mainElement = document.querySelector('main');
    mainElement.insertAdjacentHTML('beforeend', newPictureHTML);
    closeAddModal();
  } else {
    alert('You must specify a value for the "URL" field.');
  }
}

window.addEventListener('DomContentLoaded',function(event){
  var addSession = document.getElementById('add-session-button');
  if (addSession){
    addSession.addEventListener('click',displayAddSession);
  }
  
  var addCampaign = document.getElementById('add-campaign-button');
  if (addCampaign){
    addCampaign.addEventListener('click',displayAddCampaign);
  }
  
  var addTown = document.getElemetById('add-town-button');
  if (addTown){
    addTown.addEventListener('click',displayAddTown);
  }
  
  var addLocation = document.getElemetById('add-location-button');
  if (addLocation){
    addLocation.addEventListener('click',displayAddLocation);
  }
  
  var addNpc = document.getElemetById('add-npc-button');
  if (addNpc){
    addNpc.addEventListener('click',displayAddNpc);
  }
  
  var addPicture = document.getElementById('add-picture-button');
  if (addPicture){
    addPicture.addEventListener('click',displayAddPicture);
  }
  
  var showSession = document.getElenentById('session-select');
  if (showSession){
    showSession.addEventListener('change',handleSessionSelect);
  }
  
  var showCampaign = document.getElenentById('campaign-select');
  if (showCampaign){
    showCampaign.addEventListener('change',handleCampaignSelect);
  }
  var showTown = document.getElenentById('town-select');
  if (showTown){
    showTown.addEventListener('change',handleTownSelect);
  }
  
  var showLocation = document.getElenentById('location-select');
  if (showLocation){
    showLocation.addEventListener('change',handleLocationSelect);
  }
  
  var showNpc = document.getElenentById('npc-select');
  if (showNpc){
    showNpc.addEventListener('change',handleNpcSelect);
  }
  
  var showTowns = document.getElementById('select-town');
  if (showTowns)
  {
    showTowns.addEventListener('click',handleTowns);
  }
  
  var showLocations = document.getElementById('select-location');
  if (showLocations)
  {
    showLocations.addEventListener('click',handleLocations);
  }
  
  var showNpcs = document.getElementById('select-npc');
  if (showNpcs)
  {
    showNpcs.addEventListener('click',handleNpcs);
  }
  
  var showPictures = document.getElementById('select-picture');
  if (showPictures)
  {
    showPictures.addEventListener('click',handlePictures);
  }
  
  var modalAcceptSession = document.querySelector('#add-session-modal .modal-accept-button');
  if(modalAcceptSession){
    modalAcceptSession.addEventListener('click',insertNewSession);
  }
  
  var modalAcceptCampaign = document.querySelector('#add-campaign-modal .modal-accept-button');
  if(modalAcceptCampaign){
    modalAcceptCampaign.addEventListener('click',insertNewCampaign);
  }
  
  var modalAcceptTown = document.querySelector('#add-town-modal .modal-accept-button');
  if(modalAcceptTown){
    modalAcceptTown.addEventListener('click',insertNewTown);
  }
  
  var modalAcceptLocation = document.querySelector('#add-location-modal .modal-accept-button');
  if(modalAcceptLocation){
    modalAcceptLocation.addEventListener('click',insertNewLocation);
  }
});
