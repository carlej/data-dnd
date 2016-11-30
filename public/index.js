function removeOnDismiss(event){
  var clickedElem = event.target;
  var clickedElemParent = event.target.parentNode;
  
  var ElemParent= clickedElemParent.parentNode;
  ElemParent.removeChild(clickedElemParent);
}

function displayAddModal(){
  var backdrop = document.getElementById('modal-backdrop');
  var addNpcModal = document.getElementById('add-info-modal');
  
  backdrop.classList.remove('hidden');
  addNpcModal.classList.remove('hidden');
}

function closeAddModal(){
  var backdrop = document.getElementById('modal-backdrop');
  var addNpcModal = document.getElementById('add-info-modal');
  
  backdrop.classList.add('hidden');
  addNpcModal.classList.add('hidden');
  
  clearInput();
}

function clearInput(){
  var inputElem = document.getElementsByClassName('info-input-element');
  for (var x=0; x<inputElem.length; x++){
    var input = inputElem[x].querySelector('input, textarea');
    input.value = '';
  }
}

function insertNewNpc() {

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
