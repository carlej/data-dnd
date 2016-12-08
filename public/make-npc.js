function storeNewNpc(pagesess,pagecamp,pagetow,pageloca,
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
			infoInputNotes){
	var postUrl;
	if(pagetow)
	{
		if(pageloca){
			postUrl = '/session/'+pagesess+'/'+pagecamp+'/towns/'+pagetow+'/locations/'+pageloca+'/npcs/add-npc';
		}
		else{
			postUrl = '/session/'+pagesess+'/'+pagecamp+'/towns/'+pagetow+'/npcs/add-npc';
		}
	}
	else if(pageloca){
		postUrl = '/session/'+pagesess+'/'+pagecamp+'/locations/'+pageloca+'/npcs/add-npc';
	}
	else{
		postUrl = '/session/'+pagesess+'/'+pagecamp+'/npcs/add-npc';
	}
	var postRequest = new XMLHttpRequest();
	postRequest.open('POST',postUrl);
	postRequest.setRequestHeader('Content-Type', 'application/json');
  	postRequest.send(JSON.stringify({
  		name:infoInputName,
		class:infoInputClass,
		str:infoInputStr,
		dex:infoInputDex,
		con:infoInputCon,
		int:infoInputInt,
		wis:infoInputWis,
		cha:infoInputCha,
		description:infoInputDescription,
		race:infoInputRace,
		alignment:infoInputAlignment,
		ac:infoInputAc,
		attacks:infoInputAttacks,
		skills:infoInputSkills,
		feats:infoInputFeats,
		hp:infoInputHp,
		hd:infoInputHd,
		clothing:infoInputClothing,
		gear:infoInputGear,
		platinum:infoInputPlatinum,
		gold:infoInputGold,
		silver:infoInputSilver,
		iron:infoInputIron,
		positive:infoInputPositive,
		negative:infoInputNegative,
		goal:infoInputGoal,
		language:infoInputLanguage,
		traits:infoInputTraits,
		notes:infoInputNotes
  }));
};

function generateNpcHTML(remove,pagesess,pagecamp,pagetow,pageloca){
	if(pagetow){
		if(pageloca){
			if(remove){
				alert('NPC has been deleted');
			}else{
				alert('New NPC created');
			}
			window.location.href = '/session/'+pagesess+'/'+pagecamp+'/towns/'+pagetow+'/locations/'+pageloca+'/npcs';
		}else{
			if(remove){
				alert('NPC has been deleted');
			}else{
				alert('New NPC created');
			}
			window.location.href = '/session/'+pagesess+'/'+pagecamp+'/towns/'+pagetow+'/npcs';
		}
	}
	else if(pageloca){
		if(remove){
				alert('NPC has been deleted');
			}else{
				alert('New NPC created');
			}
		window.location.href = '/session/'+pagesess+'/'+pagecamp+'/locations/'+pageloca+'/npcs';
	}else{
		if(remove){
				alert('NPC has been deleted');
			}else{
				alert('New NPC created');
			}
		window.location.href = '/session/'+pagesess+'/'+pagecamp+'/npcs';
	}
};