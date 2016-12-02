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

  var todoInputId = document.getElementById('todo-input-id').value || '';
  var todoInputIdi = document.getElementById('todo-input-idi').value || '';
  var todoInputName = document.getElementById('todo-input-name').value || '';
  var todoInputClass = document.getElementById('todo-input-class').value || '';
  var todoInputStr = document.getElementById('input-str').value || '';
  var todoInputDex = document.getElementById('input-dex').value || '';
  var todoInputCon = document.getElementById('input-con').value || '';
  var todoInputInt = document.getElementById('input-int').value || '';
  var todoInputWis = document.getElementById('input-wis').value || '';
  var todoInputCha = document.getElementById('input-cha').value || '';
  var todoInputDescription = document.getElementById('input-description').value || '';
  var todoInputRace = document.getElementById('input-race').value || '';
  var todoInputAlignment = document.getElementById('input-alignment').value || '';
  var todoInputAc = document.getElementById('input-ac').value || '';
  var todoInputAttacks = document.getElementById('input-attacks').value || '';
  var todoInputSkills = document.getElementById('input-skills').value || '';
  var todoInputFeats = document.getElementById('input-feats').value || '';
  var todoInputHp = document.getElementById('input-hp').value || '';
  var todoInputHd = document.getElementById('input-hd').value || '';
  var todoInputClothing = document.getElementById('input-clothing').value || '';
  var todoInputGear = document.getElementById('input-gear').value || '';
  var todoInputPlatinum = document.getElementById('input-platinum').value || '';
  var todoInputGold = document.getElementById('input-gold').value || '';
  var todoInputSilver = document.getElementById('input-silver').value || '';
  var todoInputCopper = document.getElementById('input-copper').value || '';
  var todoInputIron = document.getElementById('input-iron').value || '';
  var todoInputPositive = document.getElementById('input-positive').value || '';
  var todoInputNegative = document.getElementById('input-negative').value || '';
  var todoInputGoal = document.getElementById('input-goal').value || '';
  var todoInputLanguage = document.getElementById('input-language').value || '';
  var todoInputTraits = document.getElementById('input-traits').value || '';
  var todoInputNotes = document.getElementById('input-notes').value || '';

  if (todoInputName.trim()) {
    storeNewNPC(pagesess,pagecamp,pagetow,pageloca,
      todoInputId,
      todoInputIdi,
      todoInputName,
      todoInputClass,
      todoInputStr,
      todoInputDex,
      todoInputCon,
      todoInputInt,
      todoInputWis,
      todoInputCha,
      todoInputDescription,
      todoInputRace,
      todoInputAlignment,
      todoInputAc,
      todoInputAttacks,
      todoInputSkills,
      todoInputFeats,
      todoInputHp,
      todoInputHd,
      todoInputClothing,
      todoInputGear,
      todoInputPlatinum,
      todoInputGold,
      todoInputSilver,
      todoInputCopper,
      todoInputIron,
      todoInputPositive,
      todoInputNegative,
      todoInputGoal,
      todoInputLanguage,
      todoInputTraits,
      todoInputNotes)
    
    var newNPCHTML = generateNPCHTML(
      todoInputId.trim(),
      todoInputIdi.trim(),
      todoInputName.trim(),
      todoInputClass.trim(),
      todoInputStr.trim(),
      todoInputDex.trim(),
      todoInputCon.trim(),
      todoInputInt.trim(),
      todoInputWis.trim(),
      todoInputCha.trim(),
      todoInputDescription.trim(),
      todoInputRace.trim(),
      todoInputAlignment.trim(),
      todoInputAc.trim(),
      todoInputAttacks.trim(),
      todoInputSkills.trim(),
      todoInputFeats.trim(),
      todoInputHp.trim(),
      todoInputHd.trim(),
      todoInputClothing.trim(),
      todoInputGear.trim(),
      todoInputPlatinum.trim(),
      todoInputGold.trim(),
      todoInputSilver.trim(),
      todoInputCopper.trim(),
      todoInputIron.trim(),
      todoInputPositive.trim(),
      todoInputNegative.trim(),
      todoInputGoal.trim(),
      todoInputLanguage.trim(),
      todoInputTraits.trim(),
      todoInputNotes.trim(),
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

  var todoInputId = document.getElementById('todo-input-id').value || '';
  var todoInputIdi = document.getElementById('todo-input-idi').value || '';
  var todoInputName = document.getElementById('todo-input-name').value || '';
  var todoInputNotes = document.getElementById('input-notes').value || '';

  if (todoInputName.trim()) {
    storeNewCampaign(pagesess,
      todoInputId.trim(),
      todoInputIdi,
      todoInputName,
      todoInputNotes)
    
    var newCampaignHTML = generateCampaignHTML(
      todoInputId.trim(),
      todoInputIdi.trim(),
      todoInputName.trim(),
      todoInputNotes.trim(),
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

  var todoInputId = document.getElementById('todo-input-id').value || '';
  var todoInputIdi = document.getElementById('todo-input-idi').value || '';
  var todoInputName = document.getElementById('todo-input-name').value || '';
  var todoInputTerrainType = document.getElementById('input-terraintype').value || '';
  var todoInputAlignmnet = document.getElementById('input-alignment').value || '';
  var todoInputNotes = document.getElementById('input-notes').value || '';

  if (todoInputName.trim()) {
    storeNewLocation(pagesess,pagecamp,pagetow,
      todoInputId,
      todoInputIdi,
      todoInputName,
      todoInputTerrainType,
      todoInputAlignmnet,
      todoInputNotes)
    
    var newLocationHTML = generateLocationHTML(
      todoInputId.trim(),
      todoInputIdi.trim(),
      todoInputName.trim(),
      todoInputTerrainType.trim(),
      todoInputAlignmnet.trim(),
      todoInputNotes.trim(),
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

  var todoInputId = document.getElementById('todo-input-id').value || '';
  var todoInputIdi = document.getElementById('todo-input-idi').value || '';
  var todoInputName = document.getElementById('todo-input-name').value || '';
  var todoInputAlignment = document.getElementById('todo-input-alignment').value || '';
  var todoInputDanger = document.getElementById('todo-input-danger').value || '';
  var todoInputGovernment = document.getElementById('todo-input-government').value || '';
  var todoInputPopulation = document.getElementById('todo-input-population').value || '';
  var todoInputEconomy = document.getElementById('todo-input-economy').value || '';
  var todoInputLaw = document.getElementById('todo-input-law').value || '';
  var todoInputCrime = document.getElementById('todo-input-crime').value || '';
  var todoInputQualities = document.getElementById('todo-input-qualties').value || '';
  var todoInputNotes = document.getElementById('input-notes').value || '';

  if (todoInputName.trim()) {
    storeNewTown(pagesess,pagecamp,
      todoInputId,
      todoInputIdi,
      todoInputName,
      todoInputAlignment,
      todoInputDanger,
      todoInputGovernment,
      todoInputPopulation,
      todoInputEconomy,
      todoInputLaw,
      todoInputCrime,
      todoInputQualities,
      todoInputNotes)
    
    var newTownHTML = generateTownHTML(
      todoInputId.trim(),
      todoInputIdi.trim(),
      todoInputName.trim(),
      todoInputAlignment.trim(),
      todoInputDanger.trim(),
      todoInputGovernment.trim(),
      todoInputPopulation.trim(),
      todoInputEconomy.trim(),
      todoInputLaw.trim(),
      todoInputCrime.trim(),
      todoInputQualities.trim(),
      todoInputNotes.trim(),
    );
    var mainElement = document.querySelector('main');
    mainElement.insertAdjacentHTML('beforeend', newTownHTML);
    closeAddModal();
  } else {
    alert('You must specify a value for the "name" field.');
  }
}

function insertNewSession() {

  var todoInputId = document.getElementById('todo-input-id').value || '';
  var todoInputIdi = document.getElementById('todo-input-idi').value || '';
  var todoInputName = document.getElementById('todo-input-name').value || '';

  if (todoInputName.trim()) {
    storeNewSession(
      todoInputId,
      todoInputIdi,
      todoInputName)
    var newSessionHTML = generateSessionHTML(
      todoInputId.trim(),
      todoInputIdi.trim(),
      todoInputName.trim(),
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

  var todoInputId = document.getElementById('todo-input-id').value || '';
  var todoInputIdi = document.getElementById('todo-input-idi').value || '';
  var todoInputCaption = document.getElementById('todo-input-caption').value || '';
  var todoInputUrl = document.getElementById('input-url').value || '';

  if (todoInputUrl.trim()) {
    storeNewNpc(pagesess,pagecamp,pagetow,pagenp,
      todoInputId,
      todoInputIdi,
      todoInputCaption,
      todoInputUrl)
    
    var newPictureHTML = generatePictureHTML(
      todoInputId.trim(),
      todoInputIdi.trim(),
      todoInputCaption.trim(),
      todoInputUrl.trim(),
    );
    var mainElement = document.querySelector('main');
    mainElement.insertAdjacentHTML('beforeend', newPictureHTML);
    closeAddModal();
  } else {
    alert('You must specify a value for the "URL" field.');
  }
}

window.addEventListener('DomContentLoaded',function(event){
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
});
