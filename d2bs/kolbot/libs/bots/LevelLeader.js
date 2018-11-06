/**
*	@filename	LevelingLeader.js
*	@author		Zer
*	@desc		Create a party and move through acts based on the leader
*/

function LevelLeader(){
	var ActNumber,QuestNumber,LevelArea,WaitingLimit;
	var LevelingAreas=[[2,8,3,17,18,19,4,5,6,27,28,29,32,35,36],
	[47,48,41,42,56,57,43,44,50,52,54,46,72,71,70,66,67,68,69],
	[76,77,78,79,80,81,82,100,101],
	[104,105,106,107],
	[110,111,112,113,114,115,116,117,121,122,123,118,128,129,130]];	
	var WaypointAreas=[1,3,4,5,6,27,29,32,35,
	40,48,42,57,43,44,52,74,46,
	75,76,77,78,79,80,81,83,101,
	103,106,107,
	109,111,112,113,115,123,117,118,129];

	this.CheckQuests=function(ClearedArea){
		var Stones,Gibbet,Countess,Andariel
		,Summoner,SummonerSpot={},Journal
		,CouncilCoord
		,Alter
		,i;
		switch(ClearedArea){
			case 8://Back to town after den to sell items and buy tome
				Pather.journeyTo(1);
				Town.doChores();
			break;
			case 17://BloodRaven
				this.killQuestBoss(775);
				Pather.journeyTo(1);
				Town.doChores();
			break;
			case 5://Tristram
				if(!me.getQuest(4,4)&& !me.getItem(525)){
					if(!me.getItem(524)){
						Pather.moveToPreset(5,2,30,2,2,true,true);
						this.getQuestItem(524,30);
					}
				}
				this.talkToNPC("Akara");
				Pather.useWaypoint(4);
				this.clearToQuestLocation(4,1,737);
				if(!me.getQuest(4,4)){
					Stones=[getUnit(2,17),getUnit(2,18),getUnit(2,19),getUnit(2,20),getUnit(2,21)];
				}
				while(!me.getQuest(4,4)){
					Stones.forEach(function(stone){
						if(!stone.mode){
							Attack.securePosition(stone.x,stone.y,10,250);
							Misc.click(0,0,stone);
						}
					});
				}
				while(!Pather.getPortal(38)){
					delay(500);
				}
				Pather.usePortal(38);
				try{
					Pather.makePortal();
				}catch(err){
					say("Failed to make portal");					
				}
				if(getUnit(2,26)){
					Gibbet=getUnit(2,26);
					this.clearToQuestLocation(38,2,26);
					Misc.openChest(Gibbet);
				}
				Attack.clearLevel(0);
				Town.doChores();
			break;
			case 6://Countess
				Pather.journeyTo(6);
				Pather.moveToExit([20,21,22,23,24,25],true,true);
				Attack.clearLevel(0);
				// this.clearToQuestLocation(28,2,580);
				// this.killQuestBoss(710);
				Town.doChores();
			break;
			case 27://Smith
				Pather.journeyTo(28);
				this.clearToQuestLocation(28,2,108);
				this.killQuestBoss(724);
				this.getQuestItem(89,108);
				Town.doChores();
			break;
			case 36://Andariel
				Pather.moveToExit(37,true,true);
				Pather.moveTo(22582,9612,2,true,true);
				Pather.makePortal();
				Pather.moveTo(22480,9570,2,true,true);
				Pather.moveTo(22549,9520,2,true,true);
				this.killQuestBoss(156);
				Pickit.pickItems();
				delay(5000);
				Pather.usePortal(null);
				Town.doChores();
			break;
			case 48://Radament
				Pather.moveToExit(49,true,true);
				this.clearToQuestLocation(49,2,355);
				this.killQuestBoss(229);
				this.getQuestItem(552,20);
				Pickit.pickItems();
				Town.doChores();
			break;
			case 57://Cube
				Pather.moveToExit(60,true,true);
				Pather.makePortal();
				this.clearToQuestLocation(60,2,354);
				this.getQuestItem(549,354);
				Pickit.pickItems();
				Town.doChores();
			break;
			case 43://Staff
				while(true){try{if(Pather.moveToExit(62,true,true)){Pather.makePortal();break;}}catch(err){say("Retry enter MaggotLvl1");}}
				while(true){try{if(Pather.moveToExit(63,true,true)){Pather.makePortal();break;}}catch(err){say("Retry enter MaggotLvl2");}}
				while(true){try{if(Pather.moveToExit(64,true,true)){Pather.makePortal();break;}}catch(err){say("Retry enter MaggotLvl3");}}
				this.clearToQuestLocation(64,2,356);
				this.getQuestItem(92,356);
				Pickit.pickItems();
				Town.doChores();
			break;
			case 44://Amulet
				Pather.moveToExit([45,58,61],true,true);
				this.clearToQuestLocation(61,2,716);
				Pather.moveTo(15044,14045,2,true,true);
				this.getQuestItem(521,149);
				Pickit.pickItems();
				Town.doChores();
				this.cubeStaff();
				this.talkToNPC("Drognan");
				this.talkToNPC("Jerhyn");
			break;
			case 54://Summoner
				try{
					Pather.moveToExit(74,true,true);
				}catch(err){
					Pather.journeyTo(74);
				}
				Pather.makePortal();
				Pather.getWP(74);
				this.clearToQuestLocation(74,2,357);
				this.killQuestBoss(250);
				Pickit.pickItems();
				Pather.journeyTo(46);
			break;
			case 69://Duriel
				Pather.journeyTo(getRoom().correcttomb);
				this.clearToQuestLocation(getRoom().correcttomb,2,152);
				this.placeStaff();
				while(!getUnit(2,100)){
					delay(500);
				}
				Pather.useUnit(2,100,73);
				Pather.makePortal();
				this.killQuestBoss(211);
				Pather.teleport=false;
				Pather.moveTo(22579,15706);
				Pather.moveTo(22577,15649,10);
				Pather.moveTo(22577,15609,10);
				this.talkToNPCWild("Tyrael");
				Pather.getPortal(null);
				Town.doChores();
			break;
			case 76://Khalim Eye
				Pather.journeyTo(76);
				Pather.moveToExit(85,true,true);
				while(!this.playerClose()){
					say("Waiting for Party Quest");
					delay(15000);
				}
				Attack.clearLevel(0x7);
				this.getQuestItem(553,405);
				Town.doChores();
			break;
			case 78://Khalim Brain
				Pather.journeyTo(78);
				this.clearToQuestLocation(78,2,86);
				Attack.clear(20);
				this.getQuestItem(87,86);
				Town.doChores();
				Pather.useWaypoint(78);
				Pather.moveToExit([88,89,91],true,true);
				this.clearToQuestLocation(91,2,406);
				this.killQuestBoss(726);
				this.getQuestItem(555,406);
				Town.doChores();
			break;
			case 80://Black Book and Khalim Heart
				Pather.journeyTo(80);
				Pather.moveToExit(94,true,true);
				Pather.makePortal();
				this.clearToQuestLocation(94,2,193);
				this.getQuestItem(548,193);
				Pather.journeyTo(80);
				Pather.moveToExit([92,93],true,true);
				Attack.clearLevel(0);
				this.talkToNPC("Alkor");
				Town.doChores();
			break;
			case 82://Khalim Flail
				Pather.moveToExit(83,true,true);
				Pather.getWP(83);
				Pather.makePortal();
				while(!this.playerClose()){
					say("Waiting for Party Quest");
					delay(15000);
				}
				this.clearToQuestLocation(83,2,404);
				this.getQuestItem(173);
				Town.goToTown();
				this.cubeFlail();
				Pather.usePortal(83,null);
				this.clearToQuestLocation(83,2,404);
				this.smashOrb();
				Town.goToTown();
				this.talkToNPC("Deckard Cain");				
				Pather.usePortal(83,null);
				Pather.makePortal();
				while(!this.playerClose()){
					say("Waiting for Party Quest");
					delay(15000);
				}
				Pather.moveToExit(100,true);
			break;
			case 101://Mephisto
				Pather.moveToExit(102,true,true);
				Pather.makePortal();
				while(!this.playerClose()){
					say("Waiting for Party Quest");
					delay(15000);
				}
				CouncilCoord=[17600,8125,17600,8015,17643,8068];
				for(i=0; i<CouncilCoord.length; i += 2){
					Pather.moveTo(CouncilCoord[i],CouncilCoord[i + 1],1,true,true);
					Attack.clearList(Attack.getMob([345,346,347],0,40));
				}
				Pather.moveTo(17566,8069,1,true,true);
				this.killQuestBoss(242);
				Pather.moveTo(17590,8068,1,true,true);
				Pather.moveTo(17572,8031,1,true,true);
				Attack.openChests(25);
				Pather.moveTo(17601,8070,2);
				Pather.usePortal(null);
				delay(2000);
				Town.doChores();
			break;
			case 104://Izual
				Pather.moveToExit(105,true,true);
				this.clearToQuestLocation(105,1,256);
				this.killQuestBoss(256);
				Attack.clearLevel(0);
				Town.doChores();
				this.talkToNPC("Tyrael");
			break;
			case 107://Diablo
				Pather.moveToExit(108,true,true);
				Pather.moveTo(7774,5305,10,true,true);
				Pather.makePortal();
				try{
					this.openSeal(395);
					this.openSeal(396);
					while(!getUnit(1,742)){
						delay(500);
					}
					Attack.clear(40,0,742);
				}catch(err){
					say("Vizier failed");
				}
				Pather.makePortal();
				try{
					this.openSeal(394);
					while(!getUnit(1,741)){
						delay(500);
					}
					Attack.clear(40,0,741);
				}catch(err){
					say("De Sies failed");
				}
				Pather.makePortal();
				try{
					this.openSeal(392);
					this.openSeal(393);
					while(!getUnit(1,740)){
						delay(500);
					}
					Attack.clear(40,0,740);
				}catch(err){
					say("Infector failed");
				}
				Pather.moveTo(7763,5267,true,true);
				Pather.makePortal();
				Pather.moveTo(7727,5267,true,true);
				while(!getUnit(1,243)){
					delay(500);
				}
				this.killQuestBoss(243);
				Pickit.pickItems();
				Town.doChores();
			break;
			case 111://Prisoners
				
				Town.doChores();
			break;
			case 113://Anya
				Pather.moveToExit(114,true,true);
				this.clearToQuestLocation(114,2,460);
				Anya=getUnit(2,558);
				if(Anya){
					this.talkToNPCWild("Anya");
					this.talkToNPC("Malah");
					Pather.usePortal(114,me);
					this.talkToNPCWild("Anya");
					this.talkToNPC("Malah");
					this.talkToNPC("Anya");
					me.cancel();
				}
				Town.doChores();
			break;
			case 123://Nihlathak
				Pather.moveToExit(124,true,true);
				this.clearToQuestLocation(124,2,462);
				this.killQuestBoss(526);
				Town.doChores();
			break;
			case 118://Ancients
				Pather.moveToExit(120,true,true);
				this.clearToQuestLocation(120,2,546);
				// Pather.moveTo(10048,12628);
				// Pather.makePortal();				
				// while(!this.playerClose()){
					// say("Waiting");
					// delay(20000);
				// }
				Altar=getUnit(2,546);
				if(Altar){
					while(Altar.mode !== 2){
						Pather.moveToUnit(Altar);
						Altar.interact();
						delay(3000);
						me.cancel();
					}
				}
				while(!getUnit(1,542)){
					delay(250);
				}				
				Attack.clear(50);
				Pather.openExit(128);
				Pather.journeyTo(128);
			break;
			case 130://Baal
				
				Town.doChores();
			break;
		}
		return true;
	};
	
	this.ChangeAct=function(DestinationAct){
		var NPC,preArea=me.area;
		try{
			switch(DestinationAct){
			case 2:
				Town.move("Warriv");
				NPC=getUnit(1,"Warriv");
				if(NPC.openMenu()){
					Misc.useMenu(0x0D36);
				}
				delay(2000);
				this.getA2Merc();
				break;
			case 3:
				Pather.journeyTo(40);
				this.talkToNPC("Jerhyn");
				Town.move("portalspot");
				Town.move("Meshif");
				NPC=getUnit(1,"Meshif");
				if(NPC.openMenu()){
					Misc.useMenu(0x0D38);
				}
				break;
			case 4:
				if(me.area != 102){
					Pather.journeyTo(102);
				}
				Pather.moveTo(17591,8070,2,true,true);
				Pather.usePortal(null);
				break;
			case 5:
				Pather.journeyTo(103);
				this.talkToNPC("Tyrael");			
				delay(1000);
				if(getUnit(2,566)){
					me.cancel();
					Pather.useUnit(2,566,109);
				}else{
					Misc.useMenu(0x58D2);
				}
				break;
			}
			while(!me.area){
				delay(500);
			}
			if(me.area==preArea){
				me.cancel();
				say("Act change failed.");
				return false;
			}
			say("Act change done.");
			Town.doChores();
			Town.move("portalspot");
		}catch(err){
			return false;
		}
		return true;
	};
	
	this.clearToQuestLocation=function(QuestArea,UnitType,UnitId){
		var count=0;
		while(count<20){
			try{
				if(Pather.moveToPreset(QuestArea,UnitType,UnitId,0,0,true,true)){
					Pather.makePortal();
					while(!this.playerClose()){
						say("Waiting for Party Quest");
						delay(15000);
					}
					break;
				}
			}catch(err){say("Failed clearing to Unit"+UnitId+" in Area"+QuestArea);}
			count++;
		}
		return true;
	};
	
	this.killQuestBoss=function(BossId){
		try{
			Attack.clear(20,0,BossId);
		}catch(err){
			say("Boss "+BossId+" Failed");
		}
	};
	
	this.getQuestItem=function(ItemId,ChestId){
		var Chest,Item,Tick=getTickCount();
		me.getItem(ItemId);
		Chest=getUnit(2,ChestId);
		try{
			Misc.openChest(Chest);
		}catch(err){
			say("Failed to open Chest");
			return false;
		}
		delay(1000);
		Item=getUnit(4,ItemId);
		try{
			Pickit.pickItem(Item);
		}catch(err){
			say("Failed to pick Item");
			return false;
		}
		delay(1000);
		return true;
	};
	
	this.talkToNPC=function(NPCName){
		var NPC;
		Town.doChores();
		Town.move(NPCName);
		NPC=getUnit(1,NPCName);
		if(NPC && NPC.openMenu()){
			me.cancel();
		}else{
			say("Failed talking to "+NPCName);
		}
		if(NPCName=="Alkor"){
			Town.move("Asheara");
			Town.move("Ormus");
		}
	};
	
	this.talkToNPCWild=function(NPCName){
		var i,NPC=getUnit(1,NPCName);
		if(!NPC){
			return false;
		}
		for(i=0; i<3; i += 1){
			if(getDistance(me,NPC)>3){
				Pather.moveToUnit(NPC);
			}
			NPC.interact();
			delay(2000);
			me.cancel();
		}
		return true;
	};
	
	this.playerClose=function(){
		var MyParty=getParty();
		if(MyParty){
			do{
				if(MyParty.name != me.name && MyParty.area==me.area){//MyParty.area==me.area
					return true;
				}
			}while(MyParty.getNext());
		}
		return false;
	};
	
	this.openSeal=function(SealId){
		var i,Seal;
		for(i=0; i<5; i += 1){
			Pather.moveToPreset(108,2,SealId,SealId==394 ? 5 : 2,SealId==394 ? 5 : 0,true,true);
			Seal=getUnit(2,SealId);
			if(!Seal){
				return false;
			}
			if(SealId==394){
				Misc.click(0,0,Seal);
			}else{
				Seal.interact();
			}			
			delay(SealId==394 ? 1000 : 500);
			if(!Seal.mode){
				if(SealId==394 && Attack.validSpot(Seal.x + 15,Seal.y)){
					Pather.moveTo(Seal.x + 15,Seal.y,1,true,true);
				}else{
					Pather.moveTo(Seal.x - 5,Seal.y - 5,1,true,true);
				}
				delay(500);
			}else{
				return true;
			}
		}
		delay(250);
		return false;
	};

	this.smashOrb=function(){
		var Orb=getUnit(2,404);
		try{
			while(Orb){
				Orb.interact();
			}
			weaponSwitch();
		}catch(err){
			say("Failed to Kill Orb");
			return false;
		}
		return true;
	};

	this.cubeFlail=function(){
		var Flail=me.getItem(173),Eye=me.getItem(553),Heart=me.getItem(554),Brain=me.getItem(555);		
		if(Eye){Storage.Cube.MoveTo(Eye);}else{this.CheckQuests(76);}
		if(Brain){Storage.Cube.MoveTo(Brain);}else{this.CheckQuests(78);}
		if(Heart){Storage.Cube.MoveTo(Heart);}else{this.CheckQuests(80);}
		if(Flail){Storage.Cube.MoveTo(Flail);}else{return false;}
		Cubing.openCube();
		say("Making Khalim Flail");
		transmute();
		delay(1000);
		Flail=me.getItem(174);
		if(!Flail){
			return false;
		}		
		Storage.Inventory.MoveTo(Flail);
		me.cancel();
		weaponSwitch();
		Town.doChores();
		return true;
	};
	
	this.placeStaff=function(){
		var Staff=me.getItem(91),item,Orifice=getUnit(2,152);
		if(!Orifice){
			return false;
		}
		Misc.openChest(Orifice);
		if(!Staff){
			Town.doChores();
			this.cubeStaff();
		}
		Staff.toCursor();
		submitItem();
		delay(1000);
		item=me.findItem(-1,0,3);
		if(item && item.toCursor()){
			Storage.Inventory.MoveTo(item);
		}
		return true;
	};
	
	this.cubeStaff=function(){
		var Staff=me.getItem(521),Amulet=me.getItem(92);
		if(Staff){Storage.Cube.MoveTo(Staff);}else{this.CheckQuests(43);}
		if(Amulet){Storage.Cube.MoveTo(Amulet);}else{this.CheckQuests(44);}
		Cubing.openCube();
		say("Making Horadric Staff");
		transmute();
		delay(1000);
		Staff=me.getItem(91);
		if(!Staff){
			return false;
		}		
		Storage.Inventory.MoveTo(Staff);
		me.cancel();
		return true;
	};
		
	this.getA2Merc=function(){
		var Griez=getUnit(1,"Greiz"),Lines,i,Type;
		var MercTypes=["Combat","Defensive","Offensive"];
		Town.doChores();
		if(!me.getMerc() && !me.mercrevivecost){
			Town.move("Griez");
			if(Griez && Griez.openMenu()){
				Misc.useMenu(0x0D45);
				Lines=getDialogLines();
				if(!Lines){
					say("No Dailog Lines");
					return false;
				}
				for(Type=0; Type<MercTypes.length; Type++){
					for(i=0; i<Lines.length; i++){
						say("Selectable:"+Lines[i].selectable+" Text:"+Lines[i].text);
						if(Lines[i].selectable && Lines[i].text.indexOf(MercTypes[Type])>-1){
							getDialogLines()[i].handler();
							delay(750);
							break;
						}else{
							say("No "+MercTypes[Type]+" Merc");
						}
					}
				}
			}else{
				say("Failed talking to Griez");
				return false;
			}
		}
		return true;
	};
	
	this.checkProgress=function(){
		var i,UpToArea;
		for(i=0; i<WaypointAreas.length; i++){
			if(!getWaypoint(i)){
				i--;
				if(WaypointAreas[i]==74){UpToArea=54;}
				else if(WaypointAreas[i]==83){UpToArea=82;}
				else{UpToArea=WaypointAreas[i];}
				break;
			}
			if(WaypointAreas[i]<40){ActNumber=0;}
			else if(WaypointAreas[i]<75){ActNumber=1;}
			else if(WaypointAreas[i]<103){ActNumber=2;}
			else if(WaypointAreas[i]<109){ActNumber=3;}
			else{ActNumber=4;}
		}
		LevelingAreas[ActNumber].splice(0,LevelingAreas[ActNumber].indexOf(UpToArea));
		say("Up to Act:"+(ActNumber+1)+" Area:"+LevelingAreas[ActNumber][0]);
		return true;
	};

	Town.move("portalspot");
	delay(7000);
	Pather.getWP(me.area);
	delay(1000);
	Town.doChores();
	delay(1000);
	this.checkProgress();
	delay(1000);
	
	for(ActNumber; ActNumber<LevelingAreas.length; ActNumber++){
		if(me.act!=ActNumber+1){
			try{
				Pather.useWaypoint(LevelingAreas[ActNumber][0]);
			}catch(err){
				this.ChangeAct(ActNumber+1);
			}
		}
		for(LevelArea=0; LevelArea<LevelingAreas[ActNumber].length; LevelArea++){
			if(Pather.journeyTo(LevelingAreas[ActNumber][LevelArea])){
				try{
					Pather.makePortal();
				}catch(err){
					say("Failed to make portal");
				}
				WaitingLimit=0;
				while(!this.playerClose() && WaitingLimit<7){
					say("Waiting");
					delay(10000);
					WaitingLimit++;
				}
				Pather.getWP(LevelingAreas[ActNumber][LevelArea],true);
				Attack.clearLevel(0);
			}
			this.CheckQuests(LevelingAreas[ActNumber][LevelArea]);
		}
	}
	return true;
}