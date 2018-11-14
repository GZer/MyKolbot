/**
*	@filename	LevelingLeader.js
*	@author		Zer
*	@desc		Create a party and move through acts based on the leader
*/

function LevelLeader(){
	var ActNumber,QuestNumber,LevelArea,WaitingLimit,ClearType;
	var LevelingAreas=[[2,8,3,17,18,19,4,5,6,27,29,32,34,35,36],
	[47,48,41,42,56,57,43,44,50,52,54,46],
	[76,77,78,79,80,81,82,100,101],
	[104,105,106,107],
	[110,111,112,113,115,121,122,123,117,118,128,129,130]];	
	var WaypointAreas=[1,3,4,5,6,27,29,32,35,
	40,48,42,57,43,44,52,74,46,
	75,76,77,78,79,80,81,83,101,
	103,106,107,
	109,111,112,113,115,123,117,118,129];

	this.CheckQuests=function(ClearedArea){
		var Stones,Gibbet
		,CouncilCoord
		,Altar,BaalPortal
		,i;
		switch(ClearedArea){
			case 8://Walk to Town after Den
				this.logProgress("Complete","Den");
				if(Pather.getWP(3,true) && Pather.useWP(1)){delay(250);}else{Pather.journeyTo(1)}
				Town.doChores();
			break;
			case 17://BloodRaven
				this.logProgress("Started","BloodRaven");
				this.killQuestBoss(775);
				if(Pather.getWP(3,true) && Pather.useWP(1)){delay(250);}else{Pather.journeyTo(1)}
				Town.doChores();
				this.logProgress("Complete","BloodRaven");
			break;
			case 5://Tristram
				this.logProgress("Started","Tristram");
				if(!me.getQuest(4,4)&& !me.getItem(525)){
					if(!me.getItem(524)){
						Pather.moveToPreset(5,2,30,2,2,true,true);
						this.getQuestItem(524,30);
					}
				}
				this.talkToNPC("Akara");
				Pather.useWaypoint(4);
				this.clearToQuestLocation(4,1,737);
				if(!me.getQuest(4,4)){Stones=[getUnit(2,17),getUnit(2,18),getUnit(2,19),getUnit(2,20),getUnit(2,21)];}
				while(!me.getQuest(4,4)){
					Stones.forEach(function(stone){
						if(!stone.mode){
							Attack.securePosition(stone.x,stone.y,10,250);
							Misc.click(0,0,stone);
						}
					});
				}
				while(!Pather.getPortal(38)){delay(500);}
				Pather.usePortal(38);
				Pather.makePortal();
				if(getUnit(2,26)){
					Gibbet=getUnit(2,26);
					this.clearToQuestLocation(38,2,26);
					Misc.openChest(Gibbet);
				}
				Attack.clearLevel(0);
				Town.doChores();
				this.logProgress("Complete","Tristram");
			break;
			case 6://Countess
				this.logProgress("Started","Countess");
				if(Pather.moveToExit([20,21,22,23,24,25],true,true)){Pather.makePortal();}
				Pather.makePortal();
				Attack.clearLevel(0);
				Town.doChores();
				this.logProgress("Complete","Countess");
			break;
			case 27://Smith
				this.logProgress("Started","Smith");
				Pather.journeyTo(28);
				this.clearToQuestLocation(28,2,108);
				this.killQuestBoss(724);
				this.getQuestItem(89,108);
				Town.doChores();
				this.logProgress("Complete","Smith");
			break;
			case 36://Andariel
				this.logProgress("Started","Andariel");
				if(Pather.moveToExit(37,true,true)){Pather.makePortal();}
				Pather.moveTo(22480,9570,2,true,true);
				Pather.moveTo(22549,9520,2,true,true);
				Pather.makePortal();
				this.killQuestBoss(156);
				Pickit.pickItems();
				delay(5000);
				Pather.usePortal(null);
				Town.doChores();
				this.logProgress("Complete","Andariel");
			break;
			case 48://Radament
				this.logProgress("Started","Radament");
				if(Pather.moveToExit(49,true,true)){Pather.makePortal();}
				this.clearToQuestLocation(49,2,355);
				this.killQuestBoss(229);
				this.getQuestItem(552,20);
				Pickit.pickItems();
				Town.doChores();
				this.logProgress("Complete","Radament");
			break;
			case 57://Cube
				this.logProgress("Started","Cube");
				if(Pather.moveToExit(60,true,true)){Pather.makePortal();}
				this.clearToQuestLocation(60,2,354);
				this.getQuestItem(549,354);
				Pickit.pickItems();
				Town.doChores();
				this.logProgress("Complete","Cube");
			break;
			case 43://Staff
				this.logProgress("Started","Staff of Kings");
				Pather.journeyTo(43);
				while(true){try{if(Pather.moveToExit(62,true,true)){Pather.makePortal();break;}}catch(err){print("Retry enter MaggotLvl1");}}
				while(true){try{if(Pather.moveToExit(63,true,true)){Pather.makePortal();break;}}catch(err){print("Retry enter MaggotLvl2");}}
				while(true){try{if(Pather.moveToExit(64,true,true)){Pather.makePortal();break;}}catch(err){print("Retry enter MaggotLvl3");}}
				this.clearToQuestLocation(64,2,356);
				this.getQuestItem(92,356);
				Pickit.pickItems();
				Town.doChores();
				this.logProgress("Complete","Staff of Kings");
			break;
			case 44://Amulet
				this.logProgress("Started","Amulet of Viper");
				Pather.journeyTo(44);
				if(Pather.moveToExit([45,58,61],true,true)){Pather.makePortal();}
				this.clearToQuestLocation(61,2,716);
				Pather.moveTo(15044,14045,2,true,true);
				this.getQuestItem(521,149);
				Pickit.pickItems();
				Town.doChores();
				this.cubeStaff();
				this.talkToNPC("Drognan");
				this.talkToNPC("Jerhyn");
				this.logProgress("Complete","Amulet of Viper");
			break;
			case 54://Summoner
				this.logProgress("Started","Summoner");
				try{if(Pather.moveToExit(74,true,true)){Pather.makePortal();}}catch(err){Pather.journeyTo(74);Pather.makePortal();}
				Pather.getWP(74);
				this.clearToQuestLocation(74,2,357);
				this.killQuestBoss(250);
				Pather.journeyTo(46);
				this.logProgress("Complete","Summoner");
			break;
			case 46://Duriel
				this.logProgress("Started","Duriel");
				Pather.journeyTo(getRoom().correcttomb);
				Pather.makePortal();
				this.clearToQuestLocation(getRoom().correcttomb,2,152);
				this.clearToQuestLocation(getRoom().correcttomb,2,100);
				this.placeStaff();
				while(!getUnit(2,100)){delay(500);}
				Pather.useUnit(2,100,73);
				Pather.makePortal();
				this.killQuestBoss(211);
				Pather.teleport=false;
				Pather.moveTo(22579,15706);
				Pather.moveTo(22577,15649,10);
				Pather.moveTo(22577,15609,10);
				this.talkToNPCWild("Tyrael");
				Pather.getPortal(null);
				this.logProgress("Complete","Duriel");
			break;
			case 76://Khalim Eye
				this.logProgress("Started","Khalim Eye");
				Pather.journeyTo(76);
				if(Pather.moveToExit(85,true,true)){Pather.makePortal();}
				say("Waiting for Party Quest");
				delay(15000);
				Attack.clearLevel(0x7);
				this.getQuestItem(553,405);
				Town.doChores();
				this.logProgress("Complete","Khalim Eye");
			break;
			case 78://Gidbinn and Khalim Brain
				this.logProgress("Started","Gidbinn");
				Pather.journeyTo(78);
				this.clearToQuestLocation(78,2,86);
				Attack.clear(20);
				this.getQuestItem(87,86);
				Town.doChores();
				this.logProgress("Complete","Gidbinn");
				this.logProgress("Started","Khalim Brain");
				Pather.useWaypoint(78);
				while(true){try{if(Pather.moveToExit(88,true,true)){Pather.makePortal();break;}}catch(err){print("Retry enter FlayerLvl1");}}
				while(true){try{if(Pather.moveToExit(89,true,true)){Pather.makePortal();break;}}catch(err){print("Retry enter FlayerLvl2");}}
				while(true){try{if(Pather.moveToExit(91,true,true)){Pather.makePortal();break;}}catch(err){print("Retry enter FlayerLvl3");}}
				this.clearToQuestLocation(91,2,406);
				this.killQuestBoss(726);
				this.getQuestItem(555,406);
				Town.doChores();
				this.logProgress("Complete","Khalim Brain");
			break;
			case 80://Black Book and Khalim Heart
				this.logProgress("Started","Black Book");
				Pather.journeyTo(80);
				if(Pather.moveToExit(94,true,true)){Pather.makePortal();}
				this.clearToQuestLocation(94,2,193);
				this.getQuestItem(548,193);
				this.logProgress("Complete","Black Book");
				this.logProgress("Started","Khalim Heart");
				Pather.journeyTo(80);
				if(Pather.moveToExit([92,93],true,true)){Pather.makePortal();}
				Attack.clearLevel(0);
				this.talkToNPC("Alkor");
				Town.doChores();
				this.logProgress("Complete","Khalim Heart");
			break;
			case 82://Khalim Flail
				this.logProgress("Started","Khalim Flail");
				Pather.journeyTo(83);
				Pather.getWP(83);
				Town.doChores();
				Pather.useWaypoint(83);
				Pather.makePortal();
				say("Waiting for Party Quest");
				delay(15000);
				this.clearToQuestLocation(83,2,404);
				this.getQuestItem(173);
				Town.doChores();
				this.cubeFlail();
				Pather.usePortal(83,null);
				this.clearToQuestLocation(83,2,404);
				this.smashOrb();
				Town.doChores();
				Pather.usePortal(83,null);
				if(Pather.moveToExit(100,true,true)){Pather.makePortal();}
				this.logProgress("Complete","Khalim Flail");
			break;
			case 101://Mephisto
				this.logProgress("Started","Mephisto");
				if(Pather.moveToExit(102,true,true)){Pather.makePortal();}
				say("Waiting for Party Quest");
				delay(15000);
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
				this.logProgress("Complete","Mephisto");
			break;
			case 104://Izual
				this.logProgress("Started","Izual");
				if(Pather.moveToExit(105,true,true)){Pather.makePortal();}
				this.clearToQuestLocation(105,1,256);
				this.killQuestBoss(256);
				this.logProgress("Complete","Izual");
			break;
			case 107://Diablo
				this.logProgress("Started","Diablo");
				if(Pather.moveToExit(108,true,true)){Pather.makePortal();}
				this.openSeal(395);this.openSeal(396);
				this.openSeal(395);this.openSeal(396);
				delay(1000);
				this.killQuestBoss(742);
				this.openSeal(394);this.openSeal(394);
				delay(1000);
				this.killQuestBoss(741);
				this.openSeal(392);this.openSeal(393);
				this.openSeal(392);this.openSeal(393);
				this.killQuestBoss(740);
				Pather.moveTo(7769,5263,5,true,true);
				Pather.makePortal();
				Pather.moveTo(7788,5293,5,true,true);
				while(!getUnit(1,243)){delay(500);}
				this.killQuestBoss(243);
				Town.doChores();
				this.logProgress("Complete","Diablo");
			break;
			case 111://Shenk and Prisoners
				this.logProgress("Started","Shenk and Prisoners");
				Pather.journeyTo(110);
				Pather.moveTo(3883,5113,2,true,true);
				this.killQuestBoss(760);
				this.talkToNPC("Qual-Kehk");
				Town.doChores();
				this.logProgress("Complete","Shenk and Prisoners");
			break;
			case 113://Anya
				this.logProgress("Started","Anya");
				if(Pather.moveToExit(114,true,true)){Pather.makePortal();}
				this.clearToQuestLocation(114,2,460);
				delay(1000);
				this.talkToAnya();
				this.talkToNPC("Malah");
				Town.move("portalspot");
				Pather.usePortal(114,me.name);
				this.talkToAnya();
				this.talkToNPC("Malah");
				delay(5000);
				this.talkToNPC("Anya");
				me.cancel();
				Town.doChores();
				this.logProgress("Complete","Anya");
			break;
			case 123://Nihlathak
				this.logProgress("Started","Nihlathak");
				if(Pather.moveToExit(124,true,true)){Pather.makePortal();}
				this.clearToQuestLocation(124,2,462);
				this.killQuestBoss(526);
				Town.doChores();
				this.logProgress("Complete","Nihlathak");
			break;
			case 118://Ancients
				this.logProgress("Started","Ancients");
				if(Pather.moveToExit(120,true,true)){Pather.makePortal();}
				this.clearToQuestLocation(120,2,546);
				Altar=getUnit(2,546);
				if(Altar){
					while(Altar.mode !== 2){
						Pather.moveToUnit(Altar);
						Altar.interact();
						delay(2000);
						me.cancel();
					}
				}
				while(!getUnit(1,542)){delay(250);}				
				Attack.clear(50);
				Pather.openExit(128);
				Pather.journeyTo(128);
				this.logProgress("Complete","Ancients");
			break;
			case 130://Baal
				this.logProgress("Started","Baal");
				if(Pather.moveToExit(131,true,true)){Pather.makePortal();}
				Attack.clearLevel(0);
				Pather.moveTo(15095,5029,true,true);
				while(getUnit(1,543)){
					Attack.clear(20);
					delay(500);
				}
				BaalPortal=getUnit(2,563);
				if(BaalPortal && Pather.usePortal(null,null,BaalPortal)){					
					quit();
					// Pather.moveTo(15134,5923,true,true);
					// this.killQuestBoss(544);
				}
				Town.doChores();
				this.logProgress("Complete","Baal");
			break;
		}
		return true;
	};
	
	this.logProgress=function(Progress,Quest){
		var date=new Date(),h=date.getHours(),m=date.getMinutes(),s=date.getSeconds(),
		dateString="["+(h<10?"0"+h:h)+":"+(m<10?"0"+m:m)+":"+(s<10?"0"+s:s)+"]";

		try{FileTools.appendText("logs/ScriptErrorLog.txt",dateString+" "+Quest+" - "+Progress+"\n");
		}catch(err){D2Bot.printToConsole("Failed to Log Progress",10);return false;}
		return true;
	};
	
	this.ChangeAct=function(DestinationAct){
		var NPC,preArea=me.area;
		try{
			switch(DestinationAct){
			case 2:
				Town.move("Warriv");
				NPC=getUnit(1,"Warriv");
				if(NPC && NPC.openMenu()){
					Misc.useMenu(0x0D36);
				}
				delay(2000);
				//this.getA2Merc();
				break;
			case 3:
				Pather.journeyTo(40);
				this.talkToNPC("Jerhyn");
				Pather.journeyTo(50);
				Town.goToTown();
				Town.move("Meshif");
				NPC=getUnit(1,"Meshif");
				if(NPC && NPC.openMenu()){
					Misc.useMenu(0x0D38);
				}
				break;
			case 4:
				if(me.area != 102){Pather.journeyTo(102);}
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
			if(preArea==me.area){
				say("Act change failed");
				this.logProgress("Failed","Change to Act "+DestinationAct);
			}else{
				say("Act change done");
				this.logProgress("Complete","Change to Act "+DestinationAct);
			}
		}catch(err){me.cancel();this.logProgress("Failed","Change to Act "+DestinationAct);return false;}
		return true;
	};
	
	this.clearToQuestLocation=function(QuestArea,UnitType,UnitId){
		var count=0;
		while(count<30){
			try{
				if(Pather.moveToPreset(QuestArea,UnitType,UnitId,0,0,true,true)){
					Pather.makePortal();
					while(!this.playerClose()){
						say("Waiting for Party Quest");
						delay(15000);
					}
					this.logProgress("Complete","Clear to Unit:"+UnitId+" in Area:"+QuestArea);
					break;
				}
			}catch(err){this.logProgress("Failed","Clear to Unit:"+UnitId+" in Area:"+QuestArea);return false;}
			count++;
		}
		return true;
	};
	
	this.killQuestBoss=function(BossId){
		try{
			Attack.clear(20,0,BossId);
			this.logProgress("Complete","Kill Boss:"+BossId);
		}catch(err){this.logProgress("Failed","Kill Boss:"+BossId);return false;}
		return true;
	};
	
	this.getQuestItem=function(ItemId,ChestId){
		var Chest,Item,Tick=getTickCount();
		me.getItem(ItemId);
		Chest=getUnit(2,ChestId);
		try{Misc.openChest(Chest);
		}catch(err){this.logProgress("Failed","OpenChestId:"+ChestId);return false;}
		delay(1000);
		Item=getUnit(4,ItemId);
		try{Pickit.pickItem(Item);
		}catch(err){this.logProgress("Failed","GetQuestItem:"+ItemId);return false;}
		delay(1000);
		this.logProgress("Complete","Get QuestItem:"+ItemId+",ChestId:"+ChestId);
		return true;
	};
	
	this.talkToNPC=function(NPCName){
		var NPC;
		Town.doChores();
		Pather.getWP(me.area);
		Town.move(NPCName);
		NPC=getUnit(1,NPCName);
		if(NPC && NPC.openMenu()){me.cancel();this.logProgress("Complete","Talk to NPC"+NPCName);}
		else{this.logProgress("Failed","Talk to NPC"+NPCName);return false;}
		if(NPCName=="Alkor"){
			Town.move("Asheara");
			Town.move("Ormus");
		}
		return true;
	};
	
	this.talkToNPCWild=function(NPCName){
		var i,NPC=getUnit(1,NPCName);
		if(!NPC){this.logProgress("Failed","Talk to WildNPC"+NPCName);return false;}
		for(i=0; i<3; i += 1){
			if(getDistance(me,NPC)>3){Pather.moveToUnit(NPC);}
			NPC.interact();
			delay(2000);
			me.cancel();
		}
		this.logProgress("Complete","Talk to WildNPC"+NPCName);
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
	
	this.talkToAnya=function(){
		var Anya=getUnit(2,558);
		if(!Anya){this.logProgress("Failed","Talk to Anya");return false;}
		Pather.moveToUnit(Anya);
		Anya.interact();
		delay(250);
		me.cancel();
		this.logProgress("Complete","Talk to Anya");
		return true;
	};
	
	this.openSeal=function(SealId){
		this.clearToQuestLocation(108,2,SealId);
		var i,tick,Seal=getUnit(2,SealId);
		if(Seal){
			for(i=0; i<3; i++){
				if(SealId==394){Misc.click(0,0,Seal);}
				else{Seal.interact();}
				tick=getTickCount();
				while(getTickCount()-tick<500){
					if(Seal.mode){
						delay(1000);
						return true;
					}
					delay(100);
				}
			}
		}
		this.logProgress("Failed","Opening Seal ID:"+SealId);
		return false;
	};

	this.smashOrb=function(){
		var Orb=getUnit(2,404),orbTimeout=0;
		this.logProgress("Started","Smash Compelling Orb");
		try{
			while(Orb && orbTimeout<10){
				Orb.interact();
				delay(500);
				orbTimeout++;
			}
			weaponSwitch();
		}catch(err){this.logProgress("Failed","Smash Compelling Orb");return false;}
		this.logProgress("Complete","Smash Compelling Orb");
		return true;
	};

	this.cubeFlail=function(){
		var Flail=me.getItem(173),Eye=me.getItem(553),Heart=me.getItem(554),Brain=me.getItem(555);
		this.logProgress("Started","Make Khalim Flail");
		if(!me.getQuest(21,0)){
			if(Eye){Storage.Cube.MoveTo(Eye);}else{this.CheckQuests(76);}
			if(Brain){Storage.Cube.MoveTo(Brain);}else{this.CheckQuests(78);}
			if(Heart){Storage.Cube.MoveTo(Heart);}else{this.CheckQuests(80);}
			if(Flail){Storage.Cube.MoveTo(Flail);}else{quit();}
		}
		Cubing.openCube();
		transmute();
		delay(1000);
		Flail=me.getItem(174);
		if(!Flail){
			this.logProgress("Failed","Make Khalim Flail");
			return false;
		}		
		Storage.Inventory.MoveTo(Flail);
		me.cancel();
		weaponSwitch();
		Town.doChores();
		this.logProgress("Complete","Make Khalim Flail");
		return true;
	};
	
	this.placeStaff=function(){
		var HoradricStaff=me.getItem(91),item,Orifice=getUnit(2,152);
		this.logProgress("Started","Placing Horadric Staff");
		if(!me.getQuest(10,0)){
			if(!Orifice){quit();}
			if(!HoradricStaff){
				this.logProgress("Failed","Placing Horadric Staff");
				this.cubeStaff();
				Pather.journeyTo(getRoom().correcttomb,null);
				this.clearToQuestLocation(getRoom().correcttomb,2,152);
				HoradricStaff=me.getItem(91);
			}
			Misc.openChest(Orifice);
			HoradricStaff.toCursor();
			submitItem();
			delay(1000);
			item=me.findItem(-1,0,3);
			if(item && item.toCursor()){Storage.Inventory.MoveTo(item);}
			this.logProgress("Complete","Placing Horadric Staff");
		}
		return true;
	};
	
	this.cubeStaff=function(){
		var HoradricStaff,Staff=me.getItem(92),Amulet=me.getItem(521);
		this.logProgress("Started","Make Horadric Staff");
		if(Staff){Storage.Cube.MoveTo(Staff);}else{this.CheckQuests(43);}
		if(Amulet){Storage.Cube.MoveTo(Amulet);}else{this.CheckQuests(44);}
		Town.doChores();
		Cubing.openCube();
		transmute();
		delay(1000);
		HoradricStaff=me.getItem(91);
		if(!HoradricStaff){this.logProgress("Failed","Make Horadric Staff");quit();}		
		Storage.Inventory.MoveTo(HoradricStaff);
		me.cancel();
		this.logProgress("Complete","Make Horadric Staff");
		return true;
	};
		
	this.getA2Merc=function(){
		this.logProgress("Started","Hiring A2 Merc");
		Pather.getWP(me.area);
		Town.move("Griez");
		var Griez=getUnit(1,"Greiz");
		if(!me.getMerc()&& !me.mercrevivecost){
			if(Griez && Griez.openMenu()){
				Misc.useMenu(0x0D45);
				for(i=0x0; i<0xFFFF; i++){
					try{if(Griez.useMenu(i)){print(i+" worked");delay(10000);break;}}
					catch(err){delay(50);print(i+" failed");}
				}
				// Lines=getDialogLines();
				// if(!Lines){
					// print("No Dailog Lines");
					// return false;
				//}
				// for(Type=0; Type<MercTypes.length; Type++){
					// for(i=0; i<Lines.length; i++){
						// print("Selectable:"+Lines[i].selectable+" Text:"+Lines[i].text);
						// if(Lines[i].selectable && Lines[i].text.indexOf(MercTypes[Type])>-1){
							// getDialogLines()[i].handler();
							// delay(750);
							// break;
						//}else{
							// print("No "+MercTypes[Type]+" Merc");
						//}
					//}
				//}
			}
		}
		this.logProgress("Complete","Hiring A2 Merc");
		return true;
	};
	
	this.checkProgress=function(){
		var i,UpToArea;
		for(i=0; i<WaypointAreas.length; i++){
			if(getWaypoint(38)){
				UpToArea=129;
			}else if(!getWaypoint(i)){
				i--;
				if(WaypointAreas[i]==74){UpToArea=52;}
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
	
	this.areaClearCheck=function(Area){
		switch(Area){
			case 110:
				ClearType=0xF;
			break;
			case 111:
				ClearType=0xF;
			break;
			case 112:
				ClearType=0xF;
			break;
			case 115:
				ClearType=0xF;
			break;
			case 117:
				ClearType=0xF;
			break;
			default:
				ClearType=0;
			break;
		}
		return true;
	};
	
	Town.move("portalspot");
	delay(7000);
	Pather.getWP(me.area);
	delay(1000);
	// this.getA2Merc();
	Town.doChores();
	delay(1000);
	this.checkProgress();
	delay(1000);
	
	for(ActNumber; ActNumber<LevelingAreas.length; ActNumber++){
		if(me.act!=ActNumber+1){this.ChangeAct(ActNumber+1);}
		this.logProgress("Started","Act "+(ActNumber+1));
		for(LevelArea=0; LevelArea<LevelingAreas[ActNumber].length; LevelArea++){
			if(Pather.journeyTo(LevelingAreas[ActNumber][LevelArea])){
				try{
					Pather.makePortal();
				}catch(err){print("Failed to make portal");}
				WaitingLimit=0;
				this.areaClearCheck(LevelingAreas[ActNumber][LevelArea]);
				while(!this.playerClose()&& WaitingLimit<6){
					say("Waiting");
					delay(10000);
					WaitingLimit++;
				}
				Pather.getWP(LevelingAreas[ActNumber][LevelArea],true);
				Attack.clearLevel(ClearType);
			}
			this.CheckQuests(LevelingAreas[ActNumber][LevelArea]);
		}
		this.logProgress("Complete","Act "+(ActNumber+1));
	}
	return true;
}