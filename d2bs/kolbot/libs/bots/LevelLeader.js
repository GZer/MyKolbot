/**
*	@filename	LevelingLeader.js
*	@author		Zer
*	@desc		Create a party and move through acts based on the leader
*/

function LevelLeader(){
	var ActNumber,QuestNumber,LevelArea,WaitingLimit;
	var LevelingAreas=[[2,8,3,4,5,6,27,29,32,34,35,36],
	[47,48,42,56,57,43,44,52,54,46],
	[76,77,78,79,80,81,82,100,101],
	[104,105,106],
	[111,112,113,115,121,122,123,117,118,128,129,130]];	
	var WaypointAreas=[1,3,4,5,6,27,29,32,35,
	40,48,42,57,43,44,52,74,46,
	75,76,77,78,79,80,81,83,101,
	103,106,107,
	109,111,112,113,115,123,117,118,129];

	this.CheckQuests=function(ClearedArea){
		var Stones,Gibbet,CouncilCoord,Altar,BaalPortal,i=0;
		switch(ClearedArea){
			case 8://Waypoint to Town after Den
				Pather.getWP(3);
				Pather.journeyTo(1);
				Town.doChores();
				this.logProgress(me.getQuest(1,0),"Den");
			break;
			case 3://BloodRaven
				Pather.journeyTo(17);
				this.killQuestBoss(775);
				Pather.getWP(3);
				Pather.journeyTo(1);
				Town.doChores();
				this.logProgress(me.getQuest(2,3),"BloodRaven");
			break;
			case 5://Tristram
				if(!me.getQuest(4,4) && !me.getItem(525)){
					if(!me.getItem(524)){
						Pather.moveToPreset(5,2,30,2,2,true,true);
						this.getQuestItem(524,30);
					}
				}
				this.talkToNPC("Akara");
				Pather.useWaypoint(4);
				this.clearToQuestLocation(4,1,737);
				if(!me.getQuest(4,4)){Stones=[getUnit(2,17),getUnit(2,18),getUnit(2,19),getUnit(2,20),getUnit(2,21)];}
				while(!me.getQuest(4,4) && me.getItem(525)){
					Stones.forEach(function(stone){
						if(!stone.mode){
							Attack.securePosition(stone.x,stone.y,10,250);
							Misc.click(0,0,stone);
						}
					});
				}
				while(!Pather.getPortal(38) && i<10){delay(1000);i++;}
				Pather.usePortal(38);
				Pather.makePortal();
				if(getUnit(2,26)){
					Gibbet=getUnit(2,26);
					this.clearToQuestLocation(38,2,26);
					Misc.openChest(Gibbet);
				}
				Attack.clearLevel(0);
				Town.doChores();
				this.talkToNPC("Deckard Cain");
				this.logProgress(me.getQuest(4,0),"Tristram");
			break;
			case 6://Countess
				Pather.journeyTo(6);
				if(Pather.moveToExit([20,21,22,23,24,25],true,true)){Pather.makePortal();}
				Attack.clearLevel(0);
				Town.doChores();
				this.logProgress(me.getQuest(5,0),"Countess");
			break;
			case 27://Smith
				Pather.journeyTo(28);
				this.clearToQuestLocation(28,2,108);
				this.killQuestBoss(724);
				this.getQuestItem(89,108);
				Town.doChores();
				this.talkToNPC("Charsi");
				this.logProgress(me.getQuest(3,3),"Smith");
			break;
			case 36://Andariel
				if(Pather.moveToExit(37,true,true)){Pather.makePortal();}
				Pather.moveTo(22480,9570,2,true,true);
				Pather.moveTo(22549,9520,2,true,true);
				Pather.makePortal();
				this.killQuestBoss(156);
				Town.doChores();
				this.logProgress(me.getQuest(6,3),"Andariel");
			break;
			case 48://Radament
				Pather.journeyTo(48);
				if(Pather.moveToExit(49,true,true)){Pather.makePortal();}
				this.clearToQuestLocation(49,2,355);
				this.killQuestBoss(229);
				this.getQuestItem(552,20);
				delay(5000);
				this.talkToNPC("Atma");
				this.logProgress(me.getQuest(9,0),"Radament");
			break;
			case 57://Cube
				if(Pather.moveToExit(60,true,true)){Pather.makePortal();}
				this.clearToQuestLocation(60,2,354);
				this.getQuestItem(549,354);
				Town.doChores();
				this.logProgress(me.getItem(549),"Cube");
			break;
			case 43://Staff
				Pather.journeyTo(43);
				while(me.area != 62){try{Pather.moveToExit(62,true,true);}catch(err){print("Retry enter MaggotLvl1");}}Pather.makePortal();
				while(me.area != 63){try{Pather.moveToExit(63,true,true);}catch(err){print("Retry enter MaggotLvl2");}}Pather.makePortal();
				while(me.area != 64){try{Pather.moveToExit(64,true,true);}catch(err){print("Retry enter MaggotLvl3");}}Pather.makePortal();
				this.clearToQuestLocation(64,2,356);
				this.getQuestItem(92,356);
				Town.doChores();
				this.logProgress(me.getItem(92),"Staff of Kings");
			break;
			case 44://Amulet
				Pather.journeyTo(44);
				if(Pather.moveToExit([45,58,61],true,true)){Pather.makePortal();}
				this.clearToQuestLocation(61,2,716);
				Pather.moveTo(15044,14045,2,true,true);
				this.getQuestItem(521,149);				
				Town.doChores();
				if(this.cubeStaff()){
					this.talkToNPC("Drognan");
					this.talkToNPC("Jerhyn");
				}else{quit();}
				this.logProgress(me.getQuest(11,0),"Amulet of Viper");
			break;
			case 54://Summoner
				Pather.journeyTo(74);
				Pather.getWP(74);
				Pather.makePortal();
				this.clearToQuestLocation(74,2,357);
				this.killQuestBoss(250);
				while(me.area != 46){try{Pather.journeyTo(46);}catch(err){print("Retry enter MagiCanyon");}}
				Pather.getWP(46);
				this.talkToNPC("Atma");
				this.logProgress(me.getQuest(11,0),"Summoner");
			break;
			case 46://Duriel
				Pather.journeyTo(getRoom().correcttomb);
				Pather.makePortal();
				this.clearToQuestLocation(getRoom().correcttomb,2,152);
				this.clearToQuestLocation(getRoom().correcttomb,2,100);
				this.placeStaff();
				this.waitForUnit(2,100);
				Pather.useUnit(2,100,73);
				Pather.makePortal();
				this.killQuestBoss(211);
				Pather.teleport=false;
				Pather.moveTo(22579,15706);
				Pather.moveTo(22577,15649,10);
				Pather.moveTo(22577,15609,10);
				this.talkToTyrael();
				Pather.usePortal(null);
				this.logProgress(me.getQuest(14,0),"Duriel");
			break;
			case 76://Khalim Eye
				Pather.journeyTo(76);
				if(Pather.moveToExit(85,true,true)){Pather.makePortal();}
				say("Waiting for Party Quest");
				delay(15000);
				Attack.clearLevel(0x7);
				this.getQuestItem(553,405);
				Town.doChores();
				this.logProgress(me.getItem(553),"Khalim Eye");
			break;
			case 78://Gidbinn and Khalim Brain
				Pather.journeyTo(78);
				if(!me.getQuest(19,0)){
					this.clearToQuestLocation(78,2,86);
					delay(1000);
					Attack.clear(35);
					this.getQuestItem(87);
					Town.doChores();
					this.logProgress(me.getQuest(19,0),"Gidbinn");
				}
				Pather.journeyTo(78);
				while(me.area != 88){try{Pather.moveToExit(88,true,true);}catch(err){print("Retry enter FlayerLvl1");}}Pather.makePortal();
				while(me.area != 89){try{Pather.moveToExit(89,true,true);}catch(err){print("Retry enter FlayerLvl2");}}Pather.makePortal();
				while(me.area != 91){try{Pather.moveToExit(91,true,true);}catch(err){print("Retry enter FlayerLvl3");}}Pather.makePortal();
				this.clearToQuestLocation(91,2,406);
				this.killQuestBoss(726);
				this.getQuestItem(555,406);
				Town.doChores();
				this.logProgress(me.getItem(555),"Khalim Brain");
			break;
			case 80://Black Book and Khalim Heart
				Pather.journeyTo(80);
				if(!me.getQuest(17,0)){
					if(Pather.moveToExit(94,true,true)){Pather.makePortal();}
					this.clearToQuestLocation(94,2,193);
					this.getQuestItem(548,193);
					this.talkToNPC("Alkor");
					this.logProgress(me.getQuest(17,0),"Black Book");
					Pather.journeyTo(80);
				}
				if(Pather.moveToExit([92,93],true,true)){Pather.makePortal();}
				Attack.clearLevel(0);
				delay(1000);
				this.getQuestItem(554);
				this.logProgress(me.getItem(554),"Khalim Heart");
			break;
			case 82://Khalim Flail
				Pather.journeyTo(83);
				while(true){if(Pather.getWP(83,true)){break;}}
				Town.doChores();
				Pather.journeyTo(83);
				this.clearToQuestLocation(83,2,404);
				this.getQuestItem(173);
				Town.doChores();
				this.cubeFlail();
				Pather.usePortal(83,null);
				this.clearToQuestLocation(83,2,404);
				this.smashOrb();
				this.talkToNPC("Deckard Cain");
				this.logProgress(me.getQuest(21,0),"Travincal");
				Pather.usePortal(83,null);
				if(Pather.moveToExit(100,true,true)){Pather.makePortal();}
			break;
			case 101://Mephisto
				if(Pather.moveToExit(102,true,true)){Pather.makePortal();}
				say("Waiting for Party Quest");
				delay(15000);
				CouncilCoord=[17600,8125,17600,8015,17643,8068];
				for(i=0; i < CouncilCoord.length; i += 2){
					Pather.moveTo(CouncilCoord[i],CouncilCoord[i + 1],1,true,true);
					Attack.clearList(Attack.getMob([345,346,347],0,40));
				}
				Pather.moveTo(17566,8069,1,true,true);
				this.killQuestBoss(242);
				this.logProgress(me.getQuest(22,0),"Mephisto");
				Pather.moveTo(17590,8068,1,true,true);
			break;
			case 104://Izual
				Pather.journeyTo(104);
				if(Pather.moveToExit(105,true,true)){Pather.makePortal();}
				this.clearToQuestLocation(105,1,256);
				this.killQuestBoss(256);
				this.talkToNPC("Tyrael");
				this.logProgress(me.getQuest(25,0),"Izual");
				Pather.usePortal(105,null);
			break;
			case 106://Diablo
				if(Pather.moveToExit(107,true,true)){Pather.makePortal();}
				while(true){if(Pather.getWP(107,true)){break;}}
				if(Pather.moveToExit(108,true,true)){Pather.makePortal();}
				this.openSeal(395);this.openSeal(396);
				this.openSeal(395);this.openSeal(396);
				this.killQuestBoss(742);
				this.openSeal(394);this.openSeal(394);
				this.killQuestBoss(741);
				this.openSeal(392);this.openSeal(393);
				this.openSeal(392);this.openSeal(393);
				this.killQuestBoss(740);
				Pather.moveTo(7769,5263,5,true,true);
				Pather.makePortal();
				Pather.moveTo(7788,5293,5,true,true);
				this.waitForUnit(1,243);
				this.killQuestBoss(243);
				this.talkToNPC("Tyrael");
				this.logProgress(me.getQuest(26,0),"Diablo");
			break;
			case 111://Shenk
				Pather.journeyTo(110);
				Pather.moveTo(3883,5113,15,true,true);
				this.killQuestBoss(760);
				this.talkToNPC("Larzuk");
				this.logProgress(me.getQuest(35,0),"Shenk");
				this.talkToNPC("Qual-Kehk");
				this.logProgress(me.getQuest(36,0),"Prisoners");
			break;
			case 113://Anya
				Pather.journeyTo(113);
				if(Pather.moveToExit(114,true,true)){Pather.makePortal();}
				this.clearToQuestLocation(114,2,460);
				delay(1000);
				this.talkToAnya();
				this.talkToNPC("Malah");
				Town.move("portalspot");
				Pather.usePortal(114,me.name);
				this.talkToAnya();
				this.talkToNPC("Malah");
				Pather.moveTo(17590,8068);
				delay(15000);
				this.talkToNPC("Anya");
				Town.doChores();
				this.logProgress(me.getQuest(37,0),"Anya");
			break;
			case 123://Nihlathak
				Pather.journeyTo(123);
				if(Pather.moveToExit(124,true,true)){Pather.makePortal();}
				this.clearToQuestLocation(124,2,462);
				this.killQuestBoss(526);
				this.talkToNPC("Anya");
				this.logProgress(me.getQuest(38,0),"Nihlathak");
			break;
			case 118://Ancients
				if(Pather.moveToExit(120,true,true)){Pather.makePortal();}
				this.clearToQuestLocation(120,2,546);
				Altar=getUnit(2,546);
				if(Altar){
					while(Altar.mode != 2){
						Pather.moveToUnit(Altar);
						Altar.interact();
						delay(2000);
						me.cancel();
					}
				}
				this.waitForUnit(1,542);			
				Attack.clear(50);
				try{Pather.moveToExit(128,true,true);
				}catch(err){Pather.journeyTo(128);}
				this.logProgress(me.getQuest(39,0),"Ancients");
			break;
			case 130://Baal
				if(Pather.moveToExit(131,true,true)){Pather.makePortal();}
				Attack.clearLevel(0);
				Pather.moveTo(15095,5029,true,true);
				while(getUnit(1,543)){
					Pather.moveTo(15095,5029,true,true);
					Attack.clear(20);
					delay(1000);
				}
				BaalPortal=getUnit(2,563);
				if(BaalPortal && Pather.usePortal(null,null,BaalPortal)){
					if((me.diff == 0 && me.charlvl > 60) || (me.diff == 1 && me.charlvl > 80) || me.diff == 3){
						Pather.moveTo(15134,5923,true,true);
						this.killQuestBoss(544);
					}
					Town.doChores();
				}
				this.logProgress(me.getQuest(40,0),"Baal");
			break;
		}
		return true;
	};
		
// ===============COMMON FUNCTIONS ===============//

	this.logProgress=function(Completed,Quest){
		var date=new Date(),h=date.getHours(),m=date.getMinutes(),s=date.getSeconds(),Progress="Failed",
		dateString="["+(h < 10?"0"+h:h)+":"+(m < 10?"0"+m:m)+":"+(s < 10?"0"+s:s)+"]";
		
		if(Completed){Progress="Completed";}
		
		try{FileTools.appendText("logs/ProgressLog.txt",dateString+" "+Quest+" - "+Progress+"\n");
		}catch(err){D2Bot.printToConsole("Failed to Log Progress",10);return false;}
		return true;
	};
	
	this.playerClose=function(){
		var MyParty=getParty();
		if(MyParty){
			do{
				if(MyParty.name != me.name && MyParty.area == me.area){
					return true;
				}
			}while(MyParty.getNext());
		}
		return false;
	};
	
	this.clearToQuestLocation=function(QuestArea,UnitType,UnitId){
		var count=0;
		while(count < 50){
			try{
				if(Pather.moveToPreset(QuestArea,UnitType,UnitId,0,0,true,true)){
					Pather.makePortal();
					while(!this.playerClose()){
						say("Waiting for Party Quest");
						delay(15000);
					}
					return true;
				}
			}catch(err){this.logProgress(null,"Clear to Unit:"+UnitId+" in Area:"+QuestArea);return false;}
			count++;
		}
		return false;
	};
	
	this.killQuestBoss=function(BossId){
		try{Attack.clear(20,0,BossId);delay(500);Pickit.pickItems();
		}catch(err){this.logProgress(null,"Kill Boss:"+BossId);return false;}
		return true;
	};
	
	this.talkToNPC=function(NPCName){
		var NPC;
		Town.move(NPCName);
		NPC=getUnit(1,NPCName);
		if(NPC && NPC.openMenu()){me.cancel();}
		else{this.logProgress(null,"Talk to NPC "+NPCName);return false;}
		return true;
	};
	
	this.getQuestItem=function(ItemId,ChestId){
		var Chest=getUnit(2,ChestId),Item,Tick=getTickCount();
		if(me.getItem(ItemId)){return true;}
		if(Chest){
			try{Misc.openChest(Chest);
			}catch(err){this.logProgress(null,"GetQuestItem Chest:"+ChestId);return false;}
		}
		delay(1000);
		Item=getUnit(4,ItemId);
		try{Pickit.pickItem(Item);
		}catch(err){this.logProgress(null,"GetQuestItem Item:"+ItemId);return false;}
		delay(1000);
		Pickit.pickItems();
		return true;
	};
	
	this.waitForUnit=function(ClassId,UnitId){
		var timeOut=0;
		while(!getUnit(ClassId,UnitId) && timeOut < 30){
			delay(1000);
			timeOut++;
		}
	};
	
	this.ChangeAct=function(DestinationAct){
		var NPC,preArea=me.area,TownWaypoints=[0,40,75,103,109];
		if(Pather.accessToAct(DestinationAct)){
			// say("Using Waypoint "+TownWaypoints[DestinationAct-1]+" to change to Act "+DestinationAct);
			try{Pather.journeyTo(TownWaypoints[DestinationAct-1]);}catch(err){print("Failed using Waypoint to change acts")}
			return true;
		}
		try{
			switch(DestinationAct){
			case 2:
				Pather.journeyTo(0);
				Pather.moveTo(4862,5662,5);
				NPC=getUnit(1,"Warriv");
				if(NPC && NPC.openMenu()){
					Misc.useMenu(0x0D36);
				}
				delay(2000);
				//this.getA2Merc();
				break;
			case 3:
				Pather.journeyTo(40);
				Pather.moveTo(5091,5155,5);
				this.talkToNPC("Jerhyn");
				Pather.moveTo(5202,5056,5);
				Town.move("Meshif");
				NPC=getUnit(1,"Meshif");
				if(NPC && NPC.openMenu()){
					Misc.useMenu(0x0D38);
				}
				break;
			case 4:
				if(me.area != 102){Pather.journeyTo(102);}
				Pather.moveTo(17590,8068,2,true,true);
				delay(2000);
				Pather.moveTo(17601,8070,2,true,true);
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
			if(preArea == me.area){
				say("Act change failed");
			}
		}catch(err){me.cancel();return false;}
		this.logProgress(me.act == DestinationAct,"Change to Act "+DestinationAct);
		return me.act == DestinationAct;
	};
	
// ===============ACT V FUNCTIONS ===============//
	
	this.talkToAnya=function(){
		var Anya=getUnit(2,558);
		if(!Anya){this.logProgress(null,"Talk to Anya");return false;}
		Pather.moveToUnit(Anya);
		Anya.interact();
		delay(250);
		me.cancel();
		Pather.moveToUnit(Anya);
		Anya.interact();
		delay(250);
		me.cancel();
		return true;
	};
	
// ===============ACT IV FUNCTIONS ===============//
	
	this.openSeal=function(SealId){
		this.clearToQuestLocation(108,2,SealId);
		var i,tick,Seal=getUnit(2,SealId);
		if(Seal){
			for(i=0; i < 3; i++){
				if(SealId == 394){Misc.click(0,0,Seal);}
				else{Seal.interact();}
				tick=getTickCount();
				while(getTickCount()-tick < 500){
					if(Seal.mode){
						delay(500);
						return true;
					}
					delay(150);
				}
			}
		}
		this.logProgress(Seal.mode,"Opening Seal ID:"+SealId);
		return false;
	};
	
// ===============ACT III FUNCTIONS ===============//

	this.smashOrb=function(){
		var Orb=getUnit(2,404),orbTimeout=0,Flail=me.getItem(174);
		if(Flail){
			try{while(Orb && orbTimeout < 4){
					Orb.interact();
					delay(250);
					orbTimeout++;
				}
				weaponSwitch();
			}catch(err){return false;}
		}else{return false;}
		this.logProgress(me.getQuest(18,3),"Smash Compelling Orb");
		return true;
	};

	this.cubeFlail=function(){
		var Flail=me.getItem(173),Eye=me.getItem(553),Heart=me.getItem(554),Brain=me.getItem(555);
		if(!me.getQuest(18,0)){
			if(Eye){Storage.Cube.MoveTo(Eye);}else{this.CheckQuests(76);}
			if(Brain){Storage.Cube.MoveTo(Brain);}else{this.CheckQuests(78);}
			if(Heart){Storage.Cube.MoveTo(Heart);}else{this.CheckQuests(80);}
			if(Flail){Storage.Cube.MoveTo(Flail);}else{quit();}
		}
		Cubing.openCube();
		transmute();
		delay(1000);
		Flail=me.getItem(174);
		Storage.Inventory.MoveTo(Flail);
		me.cancel();
		weaponSwitch();
		Town.doChores();
		this.logProgress(me.getItem(174),"Making Khalim Will");
		return me.getItem(174);
	};
	
	this.talkToTyrael=function(){
		var i,NPC=getUnit(1,"Tyrael");
		if(!NPC){this.logProgress(null,"Free Tyrael");return false;}
		for(i=0; i < 3; i += 1){
			if(getDistance(me,NPC) > 3){Pather.moveToUnit(NPC);}
			NPC.interact();
			delay(2000);
			me.cancel();
		}
		return true;
	};
	
// ===============ACT II FUNCTIONS ===============//
	
	this.placeStaff=function(){
		var HoradricStaff=me.getItem(91),item,Orifice=getUnit(2,152);
		if(!me.getQuest(10,0)){
			if(!Orifice){quit();}
			if(!HoradricStaff){
				Town.doChores();
				this.cubeStaff();
				Pather.journeyTo(getRoom().correcttomb,null);
				this.clearToQuestLocation(getRoom().correcttomb,2,152);
				this.clearToQuestLocation(getRoom().correcttomb,2,100);
				HoradricStaff=me.getItem(91);
			}
			Misc.openChest(Orifice);
			HoradricStaff.toCursor();
			submitItem();
			delay(1000);
			item=me.findItem(-1,0,3);
			if(item && item.toCursor()){Storage.Inventory.MoveTo(item);}
			this.logProgress(me.getQuest(10,0),"Placing Horadric Staff");
		}
		return true;
	};
	
	this.cubeStaff=function(){
		var HoradricStaff=me.getItem(91),Staff=me.getItem(92),Amulet=me.getItem(521);
		if(Staff){Storage.Cube.MoveTo(Staff);}else if(!HoradricStaff){this.CheckQuests(43);}
		if(Amulet){Storage.Cube.MoveTo(Amulet);}else if(!HoradricStaff){this.CheckQuests(44);}
		Cubing.openCube();
		transmute();
		delay(1000);
		HoradricStaff=me.getItem(91);
		Storage.Inventory.MoveTo(HoradricStaff);
		me.cancel();
		this.logProgress(me.getItem(91),"Make Horadric Staff");
		return me.getItem(91);
	};
		
	this.getA2Merc=function(){
		var Lines,Type,x,y,MercTypes=["Combat","Offensive","Defensive"];
		Pather.getWP(me.area);
		Pather.moveTo(5031,5048);
		var Griez=getUnit(1,"Greiz");
		if(!me.getMerc() && !me.mercrevivecost){
			if(Griez && Griez.openMenu()){
				Misc.useMenu(0x0D45);
				for(x=0; x < 5000; x++){
					for(y=0; y < 5000; y++){
						try{
							print("Clicking x:"+x+", y:"+y);
							clickItem(0, x, y, 2);
							clickItem(1, x, y, 2);
						}catch(err){print("Failed to click");}
					}
				}
				// Lines=getDialogLines();
				// if(!Lines){
					// print("No Dailog Lines");
					// return false;
				// }
				// for(Type=0; Type < MercTypes.length; Type++){
					// for(i=0; i < Lines.length; i++){
						// print("Selectable:"+Lines[i].selectable+" Text:"+Lines[i].text);
						// if(Lines[i].selectable && Lines[i].text.indexOf(MercTypes[Type]) > -1){
							// getDialogLines()[i].handler();
							// delay(750);
							// break;
						// }else{
							// print("No "+MercTypes[Type]+" Merc");
						// }
					// }
				// }
			}
		}
		say("Merc Hiring over");
		this.logProgress(me.getMerc(),"Hiring A2 Merc");
		return true;
	};

// ===============START & END FUNCTIONS ===============//
	
	this.finalCheck=function(){
		FileTools.appendText("logs/ProgressLog.txt","Starting Final Quest Check \n");
		if(!me.getQuest(1,0)){say("Den");Pather.journeyTo(8);Attack.clearLevel(0);}
		if(!me.getQuest(3,3)){say("Malus");this.CheckQuests(27);}
		if(!me.getQuest(5,0)){say("Countess");this.CheckQuests(6);}
		if(!me.getQuest(9,0)){say("Radament");this.CheckQuests(48);}
		if(!me.getQuest(17,0)){say("Black Book");this.CheckQuests(80);}
		if(!me.getQuest(25,0)){say("Izual");this.CheckQuests(104);}
		if(!me.getQuest(35,0)){say("Shenk");this.CheckQuests(111);}
		if(!me.getQuest(37,0)){say("Anya");this.CheckQuests(113);}
		if(!me.getQuest(38,0)){say("Nihlathak");this.CheckQuests(123);}
		FileTools.appendText("logs/ProgressLog.txt","Finished Final Quest Check \n");
	}
	
	this.checkProgress=function(){
		var i,UpToArea;
		for(i=0; i < WaypointAreas.length; i++){
			//say("GetWP "+WaypointAreas[i]+" "+getWaypoint(i));
			if(getWaypoint(38)){UpToArea=129;}
			else if(!getWaypoint(i)){
				i--;
				if(WaypointAreas[i] == 74){UpToArea=52;}
				else if(WaypointAreas[i] == 83){UpToArea=82;}
				else if(WaypointAreas[i] == 107){UpToArea=106;}
				else{UpToArea=WaypointAreas[i];}
				break;
			}
			if(WaypointAreas[i] < 40){ActNumber=0;}
			else if(WaypointAreas[i] < 75){ActNumber=1;}
			else if(WaypointAreas[i] < 103){ActNumber=2;}
			else if(WaypointAreas[i] < 109){ActNumber=3;}
			else{ActNumber=4;}
		}
		LevelingAreas[ActNumber].splice(0,LevelingAreas[ActNumber].indexOf(UpToArea));
		say("Up to Act:"+(ActNumber+1)+" Area:"+LevelingAreas[ActNumber][0]);
		return true;
	};
	
	// while(true){say(me.x+","+me.y);delay(2000);}
	// this.getA2Merc();
	Town.move("portalspot");
	delay(4500);
	Pather.getWP(me.area);
	delay(500);
	Town.doChores();
	delay(500);
	this.checkProgress();
	delay(500);
	
	for(ActNumber; ActNumber < LevelingAreas.length; ActNumber++){
		if(me.act != ActNumber+1){this.ChangeAct(ActNumber+1);}
		for(LevelArea=0; LevelArea < LevelingAreas[ActNumber].length; LevelArea++){
			if(Pather.journeyTo(LevelingAreas[ActNumber][LevelArea])){
				try{Pather.makePortal();
				}catch(err){print("Failed to make portal");}
				WaitingLimit=3;
				while(!this.playerClose() && WaitingLimit > 0){
					say("Waiting for Party");
					Attack.clear(5);
					delay(7000*WaitingLimit--);
				}
				Precast.doPrecast(true);
				Pather.getWP(LevelingAreas[ActNumber][LevelArea],true);
				Pather.makePortal();
				Attack.clearLevel(0);
			}
			this.CheckQuests(LevelingAreas[ActNumber][LevelArea]);
		}
		this.logProgress("Completed","Act "+(ActNumber+1));
	}
	this.finalCheck();	
	return true;
}