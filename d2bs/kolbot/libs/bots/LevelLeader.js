/**
*	@filename	LevelLeader.js
*	@author		Zer
*	@desc		Create a party and move through acts based on the leader
*/

function LevelLeader(){
	var ActNumber,QuestNumber,LevelArea,WaitingLimit,TalRashaTomb=getRoom().correcttomb;
	var MercId=[],TeleSorcs=[];
	var FullClearAreas=[3,4,5,6,7,35,36,
	43,44,
	78,
	105,106,
	111,113,115,118,129,130];
	var WaypointAreas=[1,3,4,5,6,27,29,32,35,
	40,48,42,57,43,44,52,74,46,
	75,76,77,78,79,80,81,83,101,
	103,106,107,
	109,111,112,113,115,123,117,118,129];
	var LevelingAreas=[[2,8,3,4,5,6,27,28,29,32,34,35,36,37],
	[47,48,49,42,56,57,60,43,62,44,45,52,54,74,46,TalRashaTomb],
	[76,85,77,78,88,79,80,94,81,83,100,101,102],
	[104,105,106,107,108],
	[110,111,112,113,114,115,121,122,123,124,117,118,120,128,129,130,131]];	

	this.CheckQuests=function(CurrentArea){
		var Stones,Gibbet,Altar,BaalPortal,i=0;
		Pather.journeyTo(CurrentArea);
		switch(CurrentArea){
			case 8: //Clear Den of Evil
				Attack.clearLevel(0);
				this.logProgress(me.getQuest(1,0),"Den");
			break;
			case 3: //Waypoint to Town before Cold Plains
				Pather.useWaypoint(1);
				Town.doChores();
			break;
			case 4: //Waypoint to Town before Stony Field
				Pather.useWaypoint(1);
				Town.doChores();
			break;
			case 5: //Tristram
				Pather.useWaypoint(1);
				Town.doChores();
				Pather.journeyTo(5);
				this.tryMakePortal();
				if(!me.getQuest(4,4) && !me.getItem(525)){
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
				while(!me.getQuest(4,4) && me.getItem(525)){
					Stones.forEach(function(stone){
						if(!stone.mode){
							Attack.securePosition(stone.x,stone.y,10,250);
							Misc.click(0,0,stone);
						}
					});
				}
				while(!Pather.getPortal(38) && i<10){
					delay(1000);i++;
				}
				Pather.usePortal(38);
				this.tryMakePortal();
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
			case 6: //Countess
				if(me.getQuest(5,0)){break;}
				if(Pather.moveToExit([20,21,22,23,24,25],true,true)){
					this.tryMakePortal();
				}
				Attack.clearLevel(0);
				Town.doChores();
				this.logProgress(me.getQuest(5,0),"Countess");
			break;
			case 28: //Smith
				this.clearToQuestLocation(28,2,108);
				this.killQuestBoss(724);
				this.getQuestItem(89,108);
				Town.doChores();
				this.talkToNPC("Charsi");
				this.logProgress(me.getQuest(3,3),"Smith");
			break;
			case 37: //Andariel
				Pather.moveTo(22535,9653,2,true,true);
				delay(5000);
				Pather.moveTo(22480,9570,2,true,true);
				Pather.moveTo(22549,9520,2,true,true);
				this.tryMakePortal();
				this.killQuestBoss(156);
				Town.doChores();
				this.logProgress(me.getQuest(6,3),"Andariel");
			break;
			case 49: //Radament
				this.clearToQuestLocation(49,2,355);
				this.killQuestBoss(229);
				this.getQuestItem(552,20);
				delay(5000);
				this.talkToNPC("Atma");
				this.logProgress(me.getQuest(9,0),"Radament");
			break;
			case 60: //Cube
				if(me.getItem(549)){break;}
				this.clearToQuestLocation(60,2,354);
				this.getQuestItem(549,354);
				Town.doChores();
				this.logProgress(me.getItem(549),"Cube");
			break;
			case 62: //Staff
				if(me.getItem(92)){break;}
				if(!this.waitForTeleporter(64)){quit();}
				this.killQuestBoss(284);
				this.getQuestItem(92,356);
				Town.doChores();
				this.logProgress(me.getItem(92),"Staff of Kings");
			break;
			case 45: //Amulet
				if(me.getItem(521)){break;}
				Pather.moveToExit([58,61],true,true);
				this.clearToQuestLocation(61,2,149);
				Pather.moveTo(15044,14045,2,true,true);
				this.getQuestItem(521,149);
				Town.doChores();
				if(this.cubeStaff()){
					this.talkToNPC("Drognan");
					this.talkToNPC("Jerhyn");
				}else{
					this.logProgress(null,"Quit CubingStaff");quit();
				}
				this.logProgress(me.getQuest(11,0),"Amulet of Viper");
			break;
			case 74: //Summoner
				if(!this.waitForTeleporter(74)){
					this.clearToQuestLocation(74,2,357);
				}
				this.killQuestBoss(250);
				Pather.journeyTo(46);
				Pather.getWP(46,true);
				this.talkToNPC("Atma");
				this.logProgress(me.getQuest(13,0),"Summoner");
			break;
			case TalRashaTomb: //Duriel
				if(!me.getQuest(13,0)){this.CheckQuests(74);}
				this.clearToQuestLocation(TalRashaTomb,2,152);
				this.clearToQuestLocation(TalRashaTomb,2,100);
				this.placeStaff();
				this.waitForUnit(2,100);
				Pather.useUnit(2,100,73);
				this.tryMakePortal();
				this.killQuestBoss(211);
				Pather.teleport=false;
				Pather.moveTo(22579,15706);
				Pather.moveTo(22577,15649,10);
				Pather.moveTo(22577,15609,10);
				this.talkToTyrael();
				Pather.usePortal(null);
				this.logProgress(me.getQuest(14,0),"Duriel");
			break;
			case 85: //Khalim Eye
				if(me.getItem(553)){break;}
				this.clearToQuestLocation(85,2,405);
				Attack.clearLevel(0);
				this.getQuestItem(553,405);
				Town.doChores();
				this.logProgress(me.getItem(553),"Khalim Eye");
			break;
			case 88: //Khalim Brain
				if(me.getItem(555)){break;}
				if(!this.waitForTeleporter(91)){
					Pather.moveToExit([89,91],true,true);
					this.clearToQuestLocation(91,2,406);
				}
				this.killQuestBoss(726);
				this.getQuestItem(555,406);
				Town.doChores();
				this.logProgress(me.getItem(555),"Khalim Brain");
			break;
			case 80: //Khalim Heart
				if(me.getItem(554)){break;}
				if(Pather.moveToExit([92,93],true,true)){
					this.tryMakePortal();
				}
				Attack.clearLevel(0);
				delay(1000);
				this.getQuestItem(554);
				this.logProgress(me.getItem(554),"Khalim Heart");
			break;
			case 94: //Black Book
				if(me.getQuest(17,0)){break;}
				this.clearToQuestLocation(94,2,193);
				this.getQuestItem(548,193);
				this.talkToNPC("Alkor");
				this.logProgress(me.getQuest(17,0),"Black Book");
			break;
			case 83: //Khalim Flail
				Pather.useWaypoint(75);
				Town.doChores();
				Pather.journeyTo(83);
				this.clearToQuestLocation(83,2,404);
				this.killQuestBoss(256);
				this.getQuestItem(173);
				Town.doChores();
				this.cubeFlail();
				Pather.journeyTo(83);
				this.clearToQuestLocation(83,2,404);
				this.smashOrb();
				Town.doChores();
				this.logProgress(me.getQuest(21,0),"Travincal");
				Pather.journeyTo(83);
			break;
			case 102: //Mephisto
				Pather.moveTo(17606,8127,1,true,true);
				Pather.moveTo(17653,8075,1,true,true);
				Pather.moveTo(17641,8037,1,true,true);
				Pather.moveTo(17606,8013,1,true,true);
				Pather.moveTo(17549,8067,1,true,true);
				this.killQuestBoss(242);
				this.logProgress(me.getQuest(22,0),"Mephisto");
				Attack.clearLevel(0x7);
				Pather.moveTo(17590,8068,2,true,true);
				Pather.moveTo(17601,8070,2,true,true);
			break;
			case 105: //Izual
				this.clearToQuestLocation(105,1,256);
				this.killQuestBoss(256);
				this.talkToNPC("Tyrael");
				this.logProgress(me.getQuest(25,0),"Izual");
				Pather.usePortal(105,null);
			break;
			case 108: //Diablo
				if(Pather.moveTo(7791,5293,5,true,true)){
					this.tryMakePortal();
				}
				this.openSeal(395);this.openSeal(396);
				this.openSeal(395);this.openSeal(396);
				this.killQuestBoss(742);
				this.openSeal(394);this.openSeal(394);
				this.killQuestBoss(741);
				this.openSeal(392);this.openSeal(393);
				this.openSeal(392);this.openSeal(393);
				this.killQuestBoss(740);
				Pather.moveTo(7769,5263,5,true,true);
				this.tryMakePortal();
				Pather.moveTo(7788,5293,5,true,true);
				this.waitForUnit(1,243);
				this.killQuestBoss(243);
				this.talkToNPC("Tyrael");
				this.logProgress(me.getQuest(26,0),"Diablo");
			break;
			case 111: //Shenk & Prisoners
				Pather.moveTo(3883,5113,15,true,true);
				this.killQuestBoss(760);
				this.talkToNPC("Larzuk");
				this.logProgress(me.getQuest(35,5),"Shenk");
				this.talkToNPC("Qual-Kehk");
				this.logProgress(me.getQuest(36,0),"Prisoners");
			break;
			case 114: //Anya
				this.clearToQuestLocation(114,2,460);
				delay(1000);
				this.FreeAnya();
				this.talkToNPC("Malah");
				Town.move("portalspot");
				Pather.usePortal(114,me.name);
				this.FreeAnya();
				this.talkToNPC("Malah");
				Pather.moveTo(17590,8068);
				delay(15000);
				this.talkToNPC("Anya");
				Town.doChores();
				this.logProgress(me.getQuest(37,0),"Anya");
			break;
			case 124: //Nihlathak
				if(!me.getQuest(37,0)){
					this.CheckQuests(114);
				}
				// Pather.journeyTo(124);
				this.clearToQuestLocation(124,2,462);
				this.killQuestBoss(526);
				this.talkToNPC("Anya");
				this.logProgress(me.getQuest(38,0),"Nihlathak");
			break;
			case 120: //Ancients
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
				try{
					Pather.moveToExit(128,true,true);
				}catch(err){
					Pather.journeyTo(128);
				}
				this.logProgress(me.getQuest(39,0),"Ancients");
			break;
			case 131: //Baal
				Attack.clearLevel(0);
				Pather.moveTo(15095,5029,true,true);
				while(getUnit(1,543)){
					Pather.moveTo(15095,5029,true,true);
					Attack.clear(25);
					delay(1000);
				}
				BaalPortal=getUnit(2,563);
				if(BaalPortal && Pather.usePortal(null,null,BaalPortal)){
					if((me.diff == 0 && me.charlvl > 45) || (me.diff == 1 && me.charlvl > 70) || me.charlvl > 80){
						Pather.moveTo(15134,5923,true,true);
						this.killQuestBoss(544);
						this.logProgress(me.getQuest(40,0),"Baal");
					}
					Town.doChores();
				}
			break;
		}
		return true;
	};
		
// ==  ==  ==  ==  ==  ==  == =COMMON FUNCTIONS ==  ==  ==  ==  ==  ==  == =//

	this.logProgress=function(Completed,Quest){
		var date=new Date(),day=date.getDate(),month=date.getMonth(),h=date.getHours(),m=date.getMinutes(),s=date.getSeconds(),Progress="Failed",
		dateString="["+(day < 10?"0"+day:day)+"/"+(month < 10?"0"+month:month)+" "+(h < 10?"0"+h:h)+":"+(m < 10?"0"+m:m)+":"+(s < 10?"0"+s:s)+"]";
		
		if(Completed){
			Progress="Completed";
		}		
		try{
			FileTools.appendText("logs/ProgressLog.txt",dateString+" "+Quest+" "+Progress+"\n");
		}catch(err){
			D2Bot.printToConsole("Failed to Log Progress",10);return false;
		}
		return true;
	};
	
	this.tryMakePortal=function(){
		try{
			Pather.makePortal();
		}catch(err){
			print("Failed to make portal");
		}
		return true;
	};
	
	this.playerClose=function(){
		var Party=getParty();
		if(Party){
			do{
				if(Party.name != me.name && Party.area == me.area){
					return true;
				}
			}while(Party.getNext());
		}
		return false;
	};
	
	this.clearToQuestLocation=function(QuestArea,UnitType,UnitId){
		var count=0;
		Pather.journeyTo(QuestArea);
		while(count < 20){
			try{
				while(!this.playerClose() && count < 3){
					say("Waiting for Party Quest");
					Pather.moveTo(me.x+rand(-10,10),me.y+rand(-10,10),5,true,true);
					delay(5000);
					count++;
				}
				Precast.doPrecast(true);
				if(Pather.moveToPreset(QuestArea,UnitType,UnitId,0,0,true,true)){
					return true;
				}
			}catch(err){
				this.logProgress(null,"Clear to Unit:"+UnitId+" in "+Pather.getAreaName(QuestArea));
				return false;
			}
			count++;
		}
		return false;
	};
	
	this.clearToNextArea=function(DestinationArea){
		var count=0,DestinationReached=false,CurrentArea=me.area;
		say("Clearing to "+Pather.getAreaName(DestinationArea));
		while(count < 20 && !DestinationReached){
			try{
				if(Pather.moveToExit(DestinationArea,true,true)){
					this.tryMakePortal();
					DestinationReached=(me.area == DestinationArea);
				}
			}catch(err){
				Pather.journeyTo(DestinationArea);
				this.tryMakePortal();
				DestinationReached=(me.area == DestinationArea);
			}
			count++;
		}
		this.logProgress(DestinationReached,"Clear from "+Pather.getAreaName(CurrentArea)+" to "+Pather.getAreaName(DestinationArea));
		return DestinationReached;
	};
	
	this.killQuestBoss=function(BossId){
		var Boss=getUnit(1,BossId);		
		try{
			Attack.clear(20,0,BossId);
			delay(500);
			Pickit.pickItems();
		}catch(err){
			print("Boss not found");
		}
		if(Boss){
			this.logProgress(Boss.dead,"Kill Boss:"+Boss.name);
			return Boss.dead;
		}
		return false;
	};
	
	this.talkToNPC=function(NPCName){
		var NPC;
		Town.goToTown();
		Town.move(NPCName);
		NPC=getUnit(1,NPCName);
		if(NPC && NPC.openMenu()){
			me.cancel();
		}
		else{
			this.logProgress(null,"Talk to NPC "+NPCName);
			return false;
		}
		return true;
	};
	
	this.getQuestItem=function(ItemId,ChestId){
		var Chest=getUnit(2,ChestId),Item,Tick=getTickCount();
		if(me.getItem(ItemId)){
			return true;
		}
		if(Chest){
			try{
				Misc.openChest(Chest);
			}catch(err){
				this.logProgress(null,"GetQuestChest:"+ChestId);
				return false;
			}
		}
		delay(1000);
		Item=getUnit(4,ItemId);
		try{
			Pickit.pickItem(Item);
		}catch(err){
			this.logProgress(null,"GetQuestItem:"+ItemId);
			return false;
		}
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
		if(Pather.accessToAct(DestinationAct) && getWaypoint(WaypointAreas.indexOf(TownWaypoints[DestinationAct-1]))){
			try{
				Pather.journeyTo(TownWaypoints[DestinationAct-1]);
			}catch(err){
				print("Failed using Waypoint to change acts")
			}
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
				if(Config.UseMerc){
					if(!this.getA2Merc()){this.getA2Merc();}
				}
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
				if(me.area != 102){
					Pather.journeyTo(102);
				}
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
		}catch(err){
			me.cancel();
			return false;
		}
		this.logProgress(me.act == DestinationAct,"Change to Act "+DestinationAct);
		return me.act == DestinationAct;
	};
	
	this.waitForTeleporter=function(DestinationArea){
		var i,WaitingLimit=0,PortalTown=2;
		this.tryMakePortal();
		if(DestinationArea > 75){
			PortalTown=3;
		}
		while(!teleporterClose() && WaitingLimit < 120){
			delay(1000);
			Pather.moveTo(me.x+rand(-10,10),me.y+rand(-10,10),5,true,true);
			WaitingLimit++;
		}
		Precast.doPrecast(true);
		delay(5000);
		if(DestinationArea == 74){
			Pather.useWaypoint(40);
		}else{
			Town.goToTown(PortalTown);
		}
		Town.move("portalspot");
		while(WaitingLimit < 120){
			for(i=0; i < TeleSorcs.length; i++){
				if(Pather.getPortal(DestinationArea,TeleSorcs[i])){
					Pather.usePortal(DestinationArea,TeleSorcs[i]);
					this.tryMakePortal();
					Attack.clear(10);
					delay(500);
					WaitingLimit=120;
				}
			}
			delay(1000);
			WaitingLimit++;
		}
		this.logProgress(DestinationArea == me.area,"Waiting for Teleporter to "+Pather.getAreaName(DestinationArea));
		return DestinationArea == me.area;
	};
	
	this.teleporterClose=function(){
		var Party=getParty();
		if(Party){
			do{
				if(Party.classid == 1 && Party.area == me.area){
					return true;
				}
				delay(150);
			}while(Party.getNext());
		}
		return false;
	};
	
// ==  ==  ==  ==  ==  ==  == =ACT V FUNCTIONS ==  ==  ==  ==  ==  ==  == =//
	
	this.FreeAnya=function(){
		var Anya=getUnit(2,558);
		if(!Anya){
			this.logProgress(null,"Freeing Anya");
			return false;
		}
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
	
// ==  ==  ==  ==  ==  ==  == =ACT IV FUNCTIONS ==  ==  ==  ==  ==  ==  == =//
	
	this.openSeal=function(SealId){
		this.clearToQuestLocation(108,2,SealId);
		var i,tick,Seal=getUnit(2,SealId);
		if(Seal){
			for(i=0; i < 5; i++){
				if(SealId == 394){
					Misc.click(0,0,Seal);
				}
				else{
					Seal.interact();
				}
				tick=getTickCount();
				while(getTickCount()-tick < 500){
					if(Seal.mode){
						return true;
					}
					delay(500);
				}
			}
			this.logProgress(Seal.mode,"Opening Seal ID:"+SealId);
		}
		return false;
	};
	
// ==  ==  ==  ==  ==  ==  == =ACT III FUNCTIONS ==  ==  ==  ==  ==  ==  == =//

	this.smashOrb=function(){
		var Orb=getUnit(2,404),orbTimeout=0,Will=me.getItem(174);
		if(Will && Orb){
			try{
				while(Orb && orbTimeout < 12){
					Orb.interact();
					delay(200);
					orbTimeout++;
				}
			}catch(err){
				print("Hit Orb Failed");
			}
		}else{
			return false;
		}
		this.logProgress(me.getQuest(18,0),"Smash Compelling Orb");
		return true;
	};

	this.cubeFlail=function(){
		var Will,PrevWeapon,Flail=me.getItem(173),Eye=me.getItem(553),Heart=me.getItem(554),Brain=me.getItem(555);
		if(!me.getQuest(18,0) && !me.getItem(174)){
			if(Eye){Storage.Cube.MoveTo(Eye);}else{this.CheckQuests(85);Storage.Cube.MoveTo(getItem(553));}
			if(Brain){Storage.Cube.MoveTo(Brain);}else{this.CheckQuests(88);Storage.Cube.MoveTo(getItem(555));}
			if(Heart){Storage.Cube.MoveTo(Heart);}else{this.CheckQuests(80);Storage.Cube.MoveTo(getItem(554));}
			if(Flail){Storage.Cube.MoveTo(Flail);}else{this.logProgress(null,"Quit CubingFlail");quit();}
			Cubing.openCube();
			transmute();
			delay(1000);
		}
		Will=me.getItem(174);
		if(Will){
			Storage.Inventory.MoveTo(Will);
			if(Will.toCursor()){
				clickItem(0,4);
				delay(1500);
				if(Will.bodylocation == 4 && getCursorType() == 3){
					PrevWeapon=getUnit(100);
					if(PrevWeapon && Storage.Inventory.CanFit(PrevWeapon)){
						Storage.Inventory.MoveTo(PrevWeapon);
					}
				}
			}
		}
		me.cancel();
		// weaponSwitch();
		this.logProgress(me.getItem(174),"Making Khalim Will");
		return me.getItem(174);
	};
	
// ==  ==  ==  ==  ==  ==  == =ACT II FUNCTIONS ==  ==  ==  ==  ==  ==  == =//
		
	this.talkToTyrael=function(){
		var i,NPC=getUnit(1,"Tyrael");
		if(!NPC){this.logProgress(null,"Free Tyrael");return false;}
		for(i=0; i < 3; i +=1){
			if(getDistance(me,NPC)> 3){
				Pather.moveToUnit(NPC);
			}
			NPC.interact();
			delay(2000);
			me.cancel();
		}
		return true;
	};
	
	this.placeStaff=function(){
		var HoradricStaff=me.getItem(91),Item,Orifice=getUnit(2,152);
		if(!me.getQuest(10,0)){
			if(!Orifice){this.logProgress(null,"Quit Orifice");quit();}
			if(!HoradricStaff){
				Town.doChores();
				this.cubeStaff();
				Pather.usePortal(TalRashaTomb,null);
				this.clearToQuestLocation(TalRashaTomb,2,152);
				this.clearToQuestLocation(TalRashaTomb,2,100);
				HoradricStaff=me.getItem(91);
			}
			Misc.openChest(Orifice);
			HoradricStaff.toCursor();
			submitItem();
			delay(1000);
			Item=me.findItem(-1,0,3);
			if(Item && Item.toCursor()){
				Storage.Inventory.MoveTo(Item);
			}
			this.logProgress(me.getQuest(10,0),"Placing Horadric Staff");
		}
		return true;
	};
	
	this.cubeStaff=function(){
		var HoradricStaff=me.getItem(91),Staff=me.getItem(92),Amulet=me.getItem(521);
		if(!HoradricStaff){
			if(Staff){Storage.Cube.MoveTo(Staff);}else{this.CheckQuests(62);Storage.Cube.MoveTo(getItem(92));}
			if(Amulet){Storage.Cube.MoveTo(Amulet);}else {this.CheckQuests(45);Storage.Cube.MoveTo(getItem(521));}
		}
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
		var MyMercType,MyMercDiff,MyMercAura,MyMerc=me.getMerc();
		switch(me.classid){			
			case 0: //Amazon
				break;
			case 1: //Sorcerer
				MyMercType=104,MyMercDiff=0,MyMercAura="Defiance";
				break;
			case 2: //Necromancer
				MyMercType=98,MyMercDiff=1,MyMercAura="Might";
				break;
			case 3: //Paladin
				MyMercType=114,MyMercDiff=1,MyMercAura="Holy Freeze";
				break;
			case 4: //Barbarian
				MyMercType=99,MyMercDiff=0,MyMercAura="Prayer";
				break;
			case 5: //Druid
				MyMercType=108,MyMercDiff=0,MyMercAura="Blessed Aim";
				break;
			case 6: //Assassin
				break;
		}
		//If we have a Merc and it's the wrong difficulty stop function
		if((MyMerc || me.mercrevivecost > 0) && me.diff != MyMercDiff){
			this.logProgress(me.getMerc(),"Didn't hire Merc "+me.name);
			return true;
		}
		Town.goToTown(2);
		Pather.getWP(me.area);
		Pather.moveTo(5041,5055);
		addEventListener("gamepacket",gamePacket);
		var Greiz=getUnit(1,Town.tasks[1].Merc);
		if(Greiz && Greiz.openMenu()){
			while(MercId.length>0){
				Pather.moveTo(5031+rand(-3,3),5048+rand(-3,3));
				Greiz.openMenu();
				Misc.useMenu(0x0D45);
				sendPacket(1,0x36,4,Greiz.gid,4,MercId[0]);
				//If it's the wrong difficulty just hire a random merc
				if(me.diff != MyMercDiff){
					this.logProgress(me.getMerc(),"Hired Random Merc "+me.name);
					return true;
				}
				delay(500);
				MyMerc=me.getMerc();
				if(MyMerc.getSkill(MyMercType,1)){
					this.logProgress(me.getMerc(),"Hired "+MyMercAura+" Merc "+me.name);
					return true;
				}
			}
		}
		return false;
	};
	
	this.gamePacket=function (bytes) {
		 switch(bytes[0]) {
			case 0x4e:
				var id=(bytes[2] << 8) + bytes[1];
				if(MercId.indexOf(id) != -1) {
						MercId.length=0;
				}
				MercId.push(id);
				break;
		}
	};

// ==  ==  ==  ==  ==  ==  == =START & END FUNCTIONS ==  ==  ==  ==  ==  ==  == =//
	
	this.finalCheck=function(){
		FileTools.appendText("logs/ProgressLog.txt","Starting FinalCheck \n");
		if(!me.getQuest(1,0)){say("Den");Pather.journeyTo(8);Attack.clearLevel(0);}
		if(!me.getQuest(3,3)){say("Malus");this.CheckQuests(28);}
		if(!me.getQuest(4,0)){say("Cain");this.CheckQuests(5);}
		if(!me.getQuest(5,0)){say("Countess");this.CheckQuests(6);}
		if(!me.getQuest(9,0)){say("Radament");this.CheckQuests(49);}
		if(!me.getQuest(17,0)){say("Black Book");this.CheckQuests(94);}
		if(!me.getQuest(25,0)){say("Izual");this.CheckQuests(105);}
		if(!me.getQuest(35,5)){say("Shenk");this.CheckQuests(111);}
		if(!me.getQuest(37,0)){say("Anya");this.CheckQuests(114);}
		if(!me.getQuest(38,3)){say("Nihlathak");this.CheckQuests(124);}
		FileTools.appendText("logs/ProgressLog.txt","Finished FinalCheck \n");
	}
	
	this.checkProgress=function(){
		var i,UpToArea;
		for(i=0; i < WaypointAreas.length; i++){
			if(getWaypoint(38)){UpToArea=129;}
			else if(!getWaypoint(i)){
				i--;
				UpToArea=WaypointAreas[i];
				break;
			}
			if(WaypointAreas[i] < 40){ActNumber=0;}
			else if(WaypointAreas[i] < 75){ActNumber=1;}
			else if(WaypointAreas[i] < 103){ActNumber=2;}
			else if(WaypointAreas[i] < 109){ActNumber=3;}
			else{ActNumber=4;}
		}
		LevelingAreas[ActNumber].splice(0,LevelingAreas[ActNumber].indexOf(UpToArea));
		say("Up to Act:"+(ActNumber+1)+" "+Pather.getAreaName(LevelingAreas[ActNumber][0]));
		return true;
	};
	
	this.assignTeleSorcs=function(){
		var i,Party=getParty();
		if(Party){
			do{
				if(Party.classid == 1){
					TeleSorcs.push(Party.name);
				}
			}while(Party.getNext());
		}
		return true;
	};
	
	// while(true){say(me.x+","+me.y);delay(2000);}
	Town.move("portalspot");
	delay(500);
	Pather.getWP(me.area);
	delay(500);
	Town.doChores();
	delay(500);
	this.checkProgress();
	this.assignTeleSorcs();
	delay(500);
	
	for(ActNumber; ActNumber < LevelingAreas.length; ActNumber++){
		var UpToArea=0,NextArea=0,UptoAct=ActNumber+1;
		if(me.act != UptoAct){
			this.ChangeAct(UptoAct);
		}
		for(LevelArea=0; LevelArea < LevelingAreas[ActNumber].length; LevelArea++){
			UpToArea=LevelingAreas[ActNumber][LevelArea];
			if(LevelArea<LevelingAreas[ActNumber].length-1){
				NextArea=LevelingAreas[ActNumber][LevelArea+1];
			}
			if(Pather.journeyTo(UpToArea)){
				this.tryMakePortal();
				WaitingLimit=15;
				while(!this.playerClose() && WaitingLimit > 0){
					say("Waiting for Party");
					Pather.moveTo(me.x+rand(-10,10),me.y+rand(-10,10),5,true,true);
					delay(250*WaitingLimit--);
				}
				Precast.doPrecast(true);
				Pather.getWP(UpToArea,true);
				this.tryMakePortal();
				this.CheckQuests(UpToArea);
				if(FullClearAreas.indexOf(UpToArea)>-1){
					Pather.journeyTo(UpToArea);
					say("Full Clear");
					Attack.clearLevel(0);
				}else if(NextArea>0){
					this.clearToNextArea(NextArea);
				}
			}
		}
		this.logProgress("Completed","Act "+(ActNumber+1));
	}
	this.finalCheck();
	return true;
}