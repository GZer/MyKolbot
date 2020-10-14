/**
*	@filename	LevelLeader.js
*	@author		Zer
*	@desc		Create a party and move through acts based on the leader
*/

function LevelLeader(){
	var ActNumber,QuestNumber,LevelArea,WaitingLimit,TalRashaTomb=getRoom().correcttomb;
	var TeleSorcs=["Zer_Fire","Zer_Light","Zer_Cold"];
	var MercId=[],MyMercDiff=0,MercAuraName,HiredMercAura;
	var MercAuraSkills=[103,104,98,114,99,108,103];
	var MercAuraNames=["$","Defiance","Might","Holy Freeze","Prayer","Blessed Aim","$"];
	var WaypointAreas=[1,3,4,5,6,27,29,32,35,
	40,48,42,57,43,44,52,74,46,
	75,76,77,78,79,80,81,83,101,
	103,106,107,
	109,111,112,113,115,123,117,118,129];
	var LevelingAreas=[[2,3,17,8,4,5,6,27,28,29,32,34,35,36,37],
	[47,48,49,42,56,57,43,62,44,45,52,54,74,46,TalRashaTomb],
	[76,77,78,79,80,94,81,83,100,101,102],
	[104,105,106,107,108],
	[110,111,112,113,114,115,121,122,123,124,117,118,120,128,129,130,131]];	

	this.CheckQuests=function(CurrentArea){
		var Stones,Gibbet,Altar,BaalPortal,i=0;
		if(me.area != CurrentArea){
			try{Pather.useWaypoint(CurrentArea);}
			catch(err){Pather.journeyTo(CurrentArea);}
		}
		switch(CurrentArea){
			case 3: //Cold Plains
				Attack.clearLevel(0xF);
				Pather.getWP(3,true);
				Pather.useWaypoint(1);
				Town.doChores();
			break;
			case 17: //Blood Raven
				if(me.getQuest(2,0)){break;}
				Attack.clearLevel(0xF);
				Pather.journeyTo(3);
				Pather.getWP(3,true);
				Pather.useWaypoint(1);
				Town.doChores();
				this.talkToNPC("Kashya");
				this.logProgress(me.getQuest(2,0),"Blood Raven");
			break;
			case 8: //Clear Den of Evil
				if(me.getQuest(1,3)){break;}
				Attack.clearLevel(0);
				this.logProgress(me.getQuest(1,3),"Den");
			break;
			case 5: //Tristram
				if(me.getQuest(4,0)){break;}
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
				Town.doChores();
				while(me.getItem(524) && i < 10){
					this.talkToNPC("Akara");
					i++;
				}
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
				while(!Pather.getPortal(38) && i < 20){
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
				this.talkToNPC("Cain");
				this.logProgress(me.getQuest(4,0),"Tristram");
			break;
			case 6: //Countess
				if(me.getQuest(5,0)){break;}
				if(Pather.moveToExit([20,21,22,23,24,25],true,true)){
					this.tryMakePortal();
				}
				Attack.clearLevel(0xF);
				Town.doChores();
				this.logProgress(me.getQuest(5,0),"Countess");
			break;
			case 28: //Smith
				if(me.getQuest(3,3)){break;}
				this.clearToQuestLocation(28,2,108);
				this.killQuestBoss(402);
				this.getQuestItem(89,108);
				Town.doChores();
				this.talkToNPC("Charsi");
				this.logProgress(me.getQuest(3,3),"Smith");
			break;
			case 37: //Andariel
				Pather.moveTo(22535,9653,2,true);
				delay(5000);
				this.tryMakePortal();
				this.killImportantQuestBoss(156,22549,9577);
				Town.doChores();
				this.logProgress(me.getQuest(6,3),"Andariel");
			break;
			case 49: //Radament
				if(me.getQuest(9,0)){break;}
				this.clearToQuestLocation(49,2,355);
				this.killQuestBoss(229);
				this.getQuestItem(552,20);
				delay(5000);
				this.talkToNPC("Atma");
				this.logProgress(me.getQuest(9,0),"Radament");
			break;
			case 57: //Cube
				if(me.getItem(549)){break;}
				this.clearToQuestLocation(60,2,354);
				this.getQuestItem(549,354);
				Town.doChores();
				this.logProgress(me.getItem(549),"Cube");
			break;
			case 62: //Staff
				if(me.getItem(92) || me.getItem(91)){break;}
				if(!this.waitForTeleporter(64)){break;}
				this.killQuestBoss(284);
				this.getQuestItem(92,356);
				Town.doChores();
				this.logProgress(me.getItem(92),"Staff of Kings");
			break;
			case 45: //Amulet
				if(me.getItem(521) || me.getItem(91)){break;}
				Pather.moveToExit([58,61],true,true);
				this.clearToQuestLocation(61,2,149);
				Pather.moveTo(15044,14045,2,true);
				this.getQuestItem(521,149);
				Town.doChores();
				if(this.cubeStaff()){
					this.talkToNPC("Drognan");
					this.talkToNPC("Jerhyn");
				}else{
					this.logProgress(false,"Quit CubingStaff");delay(5000);quit();
				}
				this.logProgress(me.getQuest(11,0),"Amulet of Viper");
			break;
			case 74: //Summoner
				if(!this.waitForTeleporter(74)){
					Pather.journeyTo(74);
					this.clearToQuestLocation(74,2,357);
				}
				this.killImportantQuestBoss(250);
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
				this.killImportantQuestBoss(211);
				Pather.teleport=false;
				Pather.moveTo(22579,15706);
				Pather.moveTo(22577,15649,10);
				Pather.moveTo(22577,15609,10);
				this.talkToTyrael();
				Pather.usePortal(null);
				this.logProgress(me.getQuest(14,0),"Duriel");
			break;
			case 76: //Skip Act3 Jungles
				if(me.diff == 2){
					Attack.clearLevel(0);
					if(!this.getKhalimEye()){quit();}
					Pather.useWaypoint(76);
				}
				if(!this.skipAreas(76,77)){delay(5000);quit();}
			break;
			case 77: //Skip Act3 Jungles
				if(!this.skipAreas(77,78)){delay(5000);quit();}
			break;
			case 78: //Skip Act3 Jungles
				if(!this.skipAreas(78,79)){delay(5000);quit();}
			break;
			case 80: //Khalim Heart
				this.getKhalimHeart();
			break;
			case 94: //Black Book
				if(me.getQuest(17,0)){break;}
				this.clearToQuestLocation(94,2,193);
				this.getQuestItem(548,193);
				this.talkToNPC("Alkor");
				this.logProgress(me.getQuest(17,3),"Black Book");
			break;
			case 83: //Khalim Flail
				Pather.getWP(83,true);
				Town.doChores();
				this.checkOrgans();
				if(me.diff == 2){
					this.tauntCouncil();
				}else{
					this.clearToQuestLocation(83,2,404);
					this.killImportantQuestBoss([345,346,347]);
				}
				this.getQuestItem(173);
				Town.doChores();
				Pather.journeyTo(75);
				this.cubeFlail();
				Pather.journeyTo(83);
				this.clearToQuestLocation(83,2,404);
				this.smashOrb();
				Town.doChores();
				this.logProgress(me.getQuest(21,0),"Travincal");
				Pather.journeyTo(83);
			break;
			case 102: //Mephisto
				Pather.moveTo(17606,8127,1,true);
				Pather.moveTo(17653,8075,1,true);
				Pather.moveTo(17641,8037,1,true);
				Pather.moveTo(17606,8013,1,true);
				this.killImportantQuestBoss(242,17549,8067);
				this.logProgress(me.getQuest(22,0),"Mephisto");
				Attack.clearLevel(0xF);
				Pather.moveTo(17590,8068,2,true);
				Pather.moveTo(17601,8070,2,true);
				Pather.usePortal(null);
			break;
			case 105: //Izual
				this.clearToQuestLocation(105,1,256);
				this.killQuestBoss(256);
				this.talkToNPC("Tyrael");
				this.logProgress(me.getQuest(25,0),"Izual");
				Pather.usePortal(105,null);
			break;
			case 108: //Diablo
				if(Pather.moveTo(7791,5293,5,true)){
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
				Pather.moveTo(7769,5263,5,true);
				this.tryMakePortal();
				this.waitForUnit(1,243);
				this.killImportantQuestBoss(243,7788,5293);
				this.talkToNPC("Tyrael");
				this.logProgress(me.getQuest(26,0),"Diablo");
			break;
			case 111: //Shenk & Prisoners
				Pather.moveTo(3883,5113,15,true);
				this.killQuestBoss(760);
				this.talkToNPC("Larzuk");
				this.logProgress(me.getQuest(35,5),"Shenk");
				if(me.getQuest(36,0)){break;}
				Pather.journeyTo(111);
				Attack.clearLevel(0);
				this.talkToNPC("Qual-Kehk");
				this.logProgress(me.getQuest(36,0),"Prisoners");
			break;
			case 114: //Anya
				if(me.getQuest(37,0)){break;}
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
				this.talkToNPC(NPC.Anya);
				Town.doChores();
				this.logProgress(me.getQuest(37,0),"Anya");
			break;
			case 124: //Nihlathak
				if(me.getQuest(38,0)){break;}
				if(!me.getQuest(37,0)){this.CheckQuests(114);}
				this.clearToQuestLocation(124,2,462);
				this.killQuestBoss(526);
				this.talkToNPC("Anya");
				this.logProgress(me.getQuest(38,0),"Nihlathak");
			break;
			case 118: //Ancients Way
				Attack.clearLevel(0);
				Town.doChores();
			break;
			case 120: //Ancients
				if(me.getQuest(39,0)){break;}
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
				this.killImportantQuestBoss([540,541,542]);
				try{Pather.moveToExit(128,true,true);}
				catch(err){Pather.journeyTo(128);}
				this.logProgress(me.getQuest(39,0),"Ancients");
			break;
			case 129: //Worldstone Keep 2
				Pather.getWP(129,true);
				Attack.clearLevel(0);
				Town.doChores();
			break;
			case 130: //Worldstone Keep 3
				Attack.clearLevel(0);
				Town.doChores();
			break;
			case 131: //Baal
				Attack.clearLevel(0);
				Pather.moveTo(15095,5029,true);
				this.tryMakePortal();
				while(getUnit(1,543)){
					Pather.moveTo(15095,5029,true);
					Attack.clear(150);
					delay(500);
				}
				BaalPortal=getUnit(2,563);
				if(BaalPortal && Pather.usePortal(null,null,BaalPortal)){
					if((me.diff == 0 && me.charlvl > 35) || me.charlvl > 75){
						Pather.moveTo(15134,5923,true);
						this.killImportantQuestBoss(544);
						this.logProgress(me.getQuest(40,0),"Baal");
					}
					Town.doChores();
				}
			break;
		}
		return true;
	};
		
//==============COMMON FUNCTIONS==============//

	this.logProgress=function(Completed,Quest){
		var date=new Date(),day=date.getDate(),month=date.getMonth(),h=date.getHours(),m=date.getMinutes(),s=date.getSeconds(),Progress="Failed",
		dateString="["+(day < 10?"0"+day:day)+"/"+(month < 10?"0"+month:month)+" "+(h < 10?"0"+h:h)+":"+(m < 10?"0"+m:m)+":"+(s < 10?"0"+s:s)+"]";
		
		if(Completed){Progress="Completed";}		
		try{FileTools.appendText("logs/ProgressLog.txt",dateString+" "+Quest+" "+Progress+"\n");}
		catch(err){
			D2Bot.printToConsole("Failed to Log Progress",10);
			return false;
		}
		return true;
	};
	
	this.tryMakePortal=function(){
		if(!Pather.getPortal(null,me.name)){
			try{Pather.makePortal();}
			catch(err){print("Failed to make portal");}
		}
		return Pather.getPortal(null,me.name);
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
		this.tryMakePortal();
		while(count < 25){
			try{
				while(!this.playerClose() && count < 3){
					Pather.moveTo(me.x+rand(-10,10),me.y+rand(-10,10),5,true);
					delay(5000);
					count++;
				}
				Precast.doPrecast(true);
				if(Pather.moveToPreset(QuestArea,UnitType,UnitId,0,0,true)){
					return true;
				}
			}catch(err){
				this.logProgress(false,"Clear to Unit:"+UnitId+" in "+Pather.getAreaName(QuestArea));
				return false;
			}
			count++;
		}
		return false;
	};
	
	this.clearToNextArea=function(DestinationArea){
		var count=0,DestinationReached=false,CurrentArea=me.area;
		while(count < 25 && !DestinationReached){
			try{Pather.moveToExit(DestinationArea,true,true);}
			catch(err){Pather.journeyTo(DestinationArea);}
			count++;
			DestinationReached=(me.area == DestinationArea);
		}
		this.tryMakePortal();
		return DestinationReached;
	};
	
	this.skipAreas=function(FromArea,ToArea){
		if(!getWaypoint(WaypointAreas.indexOf(ToArea))){
			Pather.useWaypoint(FromArea);
			delay(5000);
			if(this.waitForTeleporter(ToArea)){
				Pather.getWP(ToArea);
			}
		}else{
			Pather.useWaypoint(ToArea);
		}
		return (me.area == ToArea);
	};
	
	this.getPlayerCount=function(){
		var Count=0,Party=getParty(),PlayerAct,MyPartyId;
		if(Party){
			MyPartyId=Party.partyid;
			do{
				if(Party.area == 0){PlayerAct=me.act;}
				else if(Party.area > 108){PlayerAct=5;}
				else if(Party.area > 102){PlayerAct=4;}
				else if(Party.area > 74){PlayerAct=3;}
				else if(Party.area > 39){PlayerAct=2;}
				else{PlayerAct=1;}
				if(me.act != PlayerAct){return 0;}
				if(Party.partyflag == 4){return 0;}
				Count++;
			}while(Party.getNext());
		}
		return Count;
	};
	
	this.killImportantQuestBoss=function(TargetBoss,XCoord,YCoord){
		var Bosses=[],Boss,Party=getParty(),i;
		if(XCoord > 0 && YCoord > 0){Pather.moveTo(XCoord,YCoord,2);}
		if(TargetBoss instanceof Array){Bosses=TargetBoss;}
		else{Bosses.push(TargetBoss);}
		for(i=0; i < Bosses.length; i++){
			Boss=getUnit(1,Bosses[i]);
			if(Boss){
				while(Party && !Boss.dead){
					Skill.cast(132,0,Boss.x,Boss.y);
					if(this.getPlayerCount() < 8 && (Boss.hp*100/Boss.hpmax) < 50){
						this.logProgress(false,"Important Boss in "+Pather.getAreaName(me.area));
						quit();
					}
				}
			}
		}
		Pickit.pickItems();
		return this.getPlayerCount() == 8;
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
		if(NPC && NPC.openMenu()){me.cancel();}
		else{
			this.logProgress(false,"Talk to NPC "+NPCName);
			return false;
		}
		return true;
	};
	
	this.getQuestItem=function(ItemId,ChestId){
		var Chest=getUnit(2,ChestId),Item,Tick=getTickCount();
		if(me.getItem(ItemId)){return true;}
		if(Chest){
			try{Misc.openChest(Chest);}
			catch(err){return false;}
		}
		delay(1000);
		Item=getUnit(4,ItemId);
		try{Pickit.pickItem(Item);}
		catch(err){return false;}
		delay(1000);
		Pickit.pickItems();
		this.logProgress(me.getItem(ItemId),"GetQuestItem: "+ItemId);
		return me.getItem(ItemId);
	};
	
	this.waitForUnit=function(ClassId,UnitId){
		var timeOut=0;
		while(!getUnit(ClassId,UnitId) && timeOut < 30){
			delay(1000);
			timeOut++;
		}
	};
	
	this.ChangeAct=function(DestinationAct){
		if(me.act == DestinationAct){return true;}
		var NPC,preArea=me.area,TownWaypoints=[0,40,75,103,109];
		if(Pather.accessToAct(DestinationAct) && getWaypoint(WaypointAreas.indexOf(TownWaypoints[DestinationAct-1]))){
			try{Pather.journeyTo(TownWaypoints[DestinationAct-1]);}
			catch(err){print("Failed using Waypoint to change acts")}
			return (me.act == DestinationAct);
		}
		try{
			switch(DestinationAct){
			case 2:
				//Make sure we have cain before moving out of Act1
				if(!me.getQuest(4,0)){this.CheckQuests(5);}
				Pather.journeyTo(0);
				Pather.moveTo(4862,5662,5);
				NPC=getUnit(1,"Warriv");
				if(NPC && NPC.openMenu()){
					Misc.useMenu(0x0D36);
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
				Pather.moveTo(17590,8068,2,true);
				delay(2000);
				Pather.moveTo(17601,8070,2,true);
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
				print("Act change failed");
			}
		}catch(err){
			me.cancel();
		}
		if(Config.useMerc){this.checkMerc();}
		this.logProgress((me.act == DestinationAct),"Change to Act "+DestinationAct);
		return (me.act == DestinationAct);
	};
	
	this.waitForTeleporter=function(DestinationArea){
		var i,WaitingLimit=0,PortalTown=2;
		this.tryMakePortal();
		if(DestinationArea > 75){
			PortalTown=3;
		}
		while(!this.teleporterClose() && WaitingLimit < 120){
			delay(1000);
			Pather.moveTo(me.x+rand(-10,10),me.y+rand(-10,10),5,true);
			Attack.clear(5);
			WaitingLimit++;
		}
		delay(5000);
		Precast.doPrecast(true);
		if(DestinationArea == 74){Pather.useWaypoint(40);}
		else{
			Town.doChores();
			Town.goToTown(PortalTown);
		}
		Town.move("portalspot");
		while(WaitingLimit < 120){
			for(i=0; i < TeleSorcs.length; i++){
				if(Pather.getPortal(DestinationArea,TeleSorcs[i])){
					Pather.usePortal(DestinationArea,TeleSorcs[i]);
					this.tryMakePortal();
					Attack.clear(5);
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
	
//==============ACT V FUNCTIONS==============//
	
	this.FreeAnya=function(){
		var Anya=getUnit(2,558),i;
		if(!Anya){
			this.logProgress(false,"Freeing Anya");
			return false;
		}
		for(i=0; i<3; i++){
			Pather.moveToUnit(Anya);
			Anya.interact();
			delay(250);
			me.cancel();
		}
		return true;
	};
	
//==============ACT IV FUNCTIONS==============//
	
	this.openSeal=function(SealId){
		this.clearToQuestLocation(108,2,SealId);
		var i,tick,Seal=getUnit(2,SealId);
		if(Seal){
			for(i=0; i < 5; i++){
				if(SealId == 394){Misc.click(0,0,Seal);}
				else{Seal.interact();}
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
	
//==============ACT III FUNCTIONS==============//

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
		if(me.getQuest(18,0)){return true;}
		else if(this.checkOrgans() && !me.getItem(174)){
			Storage.Cube.MoveTo(Eye);
			Storage.Cube.MoveTo(Brain);
			Storage.Cube.MoveTo(Heart);
			if(Flail){Storage.Cube.MoveTo(Flail);}
			else{this.logProgress(false,"Quit No Khalims Flail");delay(5000);quit();}
			Cubing.openCube();
			transmute();
			delay(1000);
		}
		Will=me.getItem(174);
		if(Will){
			if(Will.toCursor() && clickItem(0,4)){
				delay(500);
				if(Will.bodylocation == 4 && getCursorType() == 3){
					PrevWeapon=getUnit(100);
					if(PrevWeapon && Storage.Inventory.CanFit(PrevWeapon)){
						Storage.Inventory.MoveTo(PrevWeapon);
					}
				}
			}else{
				Storage.Inventory.MoveTo(Will);
			}
		}else{
			this.logProgress(false,"Quit No Khalims Will");
			delay(5000);
			quit();
		}
		me.cancel();
		this.logProgress(me.getItem(174),"Making Khalim Will");
		return me.getItem(174);
	};

	this.checkOrgans=function(){
		var GotOrgans=((me.getItem(553) && me.getItem(554) && me.getItem(555)) || me.getItem(174));
		if(!GotOrgans){
			this.getKhalimBrain();
			this.getKhalimHeart();
			this.getKhalimEye();
			GotOrgans=((me.getItem(553) && me.getItem(554) && me.getItem(555)) || me.getItem(174));
		}
		this.logProgress(GotOrgans,"Khalims Organs or Will");
		if(!GotOrgans){
			print("Quitting");
			delay(5000);
			Town.doChores();
			quit();
		}
		return GotOrgans;
	};

	this.tauntCouncil=function(){
		var SafeX,SafeY,i=0;
		Pather.journeyTo(83);
		Pather.moveToPreset(83,2,404,16,99,true);
		this.tryMakePortal();
		SafeX=me.x,SafeY=me.y;
		while(i < 10){
			Pather.moveToPreset(83,2,404,16,13);
			Skill.cast(155,0);Skill.cast(149,0);Skill.cast(138,0);
			Skill.cast(137,0,me.x+rand(-25,25),me.y+rand(-25,25));
			Attack.securePosition(SafeX,SafeY,20,1000);
			Skill.cast(155,0);Skill.cast(149,0);Skill.cast(138,0);
			i++;
		}
		this.clearToQuestLocation(83,2,404);
		return true;
	};
	
	this.getKhalimEye=function(){
		if(me.getItem(553) || me.getItem(174)){return true;}
		this.clearToNextArea(85);
		this.clearToQuestLocation(85,2,405);
		Attack.clearLevel(0);
		this.getQuestItem(553,405);
		Town.doChores();
		this.logProgress(me.getItem(553),"Khalim Eye");
		return me.getItem(553);
	};
	
	this.getKhalimHeart=function(){
		if(me.getItem(554) || me.getItem(174)){return true;}
		this.clearToNextArea(80);
		if(Pather.moveToExit([92,93],true,true)){
			this.tryMakePortal();
		}
		Attack.clearLevel(0);
		this.getQuestItem(554);
		Town.doChores();
		this.logProgress(me.getItem(554),"Khalim Heart");
		return me.getItem(554);
	};
	
	this.getKhalimBrain=function(){
		if(me.getItem(555) || me.getItem(174)){return true;}
		Pather.useWaypoint(78);
		this.clearToNextArea(88);
		if(!this.waitForTeleporter(91)){
			Pather.moveToExit([89,91],true,true);
		}
		this.clearToQuestLocation(91,2,406);
		this.killQuestBoss(726);
		this.getQuestItem(555,406);
		Town.doChores();
		this.logProgress(me.getItem(555),"Khalim Brain");
		return me.getItem(555);
	};
	
//==============ACT II FUNCTIONS==============//
		
	this.talkToTyrael=function(){
		var i,NPC=getUnit(1,"Tyrael");
		if(!NPC){this.logProgress(false,"Free Tyrael");return false;}
		for(i=0; i < 3; i++){
			if(getDistance(me,NPC) > 3){
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
			if(!Orifice){this.logProgress(false,"Quit Orifice");delay(5000);quit();}
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
		
		if(!HoradricStaff && me.getItem(549)){
			if(Staff){Storage.Cube.MoveTo(Staff);}
			else{this.CheckQuests(62);Storage.Cube.MoveTo(Staff);}
			if(Amulet){Storage.Cube.MoveTo(Amulet);}
			else{this.CheckQuests(45);Storage.Cube.MoveTo(Amulet);}
		}else{this.CheckQuests(57);}
		Cubing.openCube();
		transmute();
		delay(1000);
		HoradricStaff=me.getItem(91);
		if(HoradricStaff){Storage.Inventory.MoveTo(HoradricStaff);}
		else{delay(5000);quit();}
		me.cancel();
		this.logProgress(me.getItem(91),"Make Horadric Staff");
		return me.getItem(91);
	};
	
	this.checkMerc=function(){
		var ReplaceMerc=false,MyMerc=me.getMerc();
		//If we have a Merc check its within level,otherwise get free one
		if(me.mercrevivecost > 0){
			if(me.gold < me.mercrevivecost){
				this.logProgress(me.getMerc(),"Not enough gold for Merc - "+me.name);
				return false;
			}else{
				//Revive and Assign Merc
				Town.reviveMerc();
				MyMerc=me.getMerc();
			}
		}
		if(MyMerc){if(Math.abs(me.charlvl-MyMerc.charlvl) > 10){ReplaceMerc=true;}}
		else{
			Town.goToTown(1);
			this.talkToNPC("Kashya");
			this.logProgress(me.getMerc(),"Got free Merc - "+me.name);
		}		
		if(ReplaceMerc && me.act >= 2){
			this.unEquipMerc();
			delay(1000);
			this.unEquipMerc();
			this.hireA2Merc();
			try{Item.autoEquipMerc();delay(1000);Item.autoEquipMerc();}
			catch(err){print("Failed to AutoEquip Merc");}
			this.logProgress(me.getMerc(),"Replace Merc with "+HiredMercAura+" Merc - "+me.name);
		}		
		return true;
	};
	
	this.unEquipMerc=function(){
		var cursorItem,i;		
		for(i=1; i < 5; i++){
			//2 Handed Weapons fix
			if(i == 2){i=3;}
			clickItem(4,i);
			delay(1000);
			if(me.itemoncursor){
				delay(1000);
				cursorItem=getUnit(100);
				if(cursorItem){
					Storage.Inventory.MoveTo(cursorItem);
					delay(1500);					
					if(me.itemoncursor){
						Misc.click(0,0,me);
						delay(1000);
					}
				}
			}
		}
		return true;
	};
	
	this.hireA2Merc=function(){
		var i,Count=0,MyMerc,MercAuraName=MercAuraNames[me.classid];
		//Nightmare Auras instead of Norm Auras
		if(me.classid == 2 || me.classid == 3){MyMercDiff=1;}
		Town.goToTown(2);
		Pather.getWP(me.area);
		Pather.moveTo(5041,5055);
		addEventListener("gamepacket",gamePacket);
		var Greiz=getUnit(1,Town.tasks[1].Merc);
		if(Greiz && Greiz.openMenu()){
			while(MercId.length > 0 && Count < 8){
				Pather.moveTo(5031+rand(-3,3),5048+rand(-3,3));
				Greiz.openMenu();
				Misc.useMenu(0x0D45);
				sendPacket(1,0x36,4,Greiz.gid,4,MercId[0]);
				delay(rand(100,1000));
				MyMerc=me.getMerc();
				for(i=0; i < MercAuraSkills.length; i++){
					if(MyMerc.getSkill(MercAuraSkills[i],1)){
						HiredMercAura=MercAuraNames[i];
					}
				}
				//If it's the wrong difficulty or we have the right aura stop
				if(me.diff != MyMercDiff || HiredMercAura == MercAuraName){
					return me.getMerc();
				}
				Count++;
			}
		}
		return me.getMerc();
	};
	
	this.gamePacket=function(bytes){
		 switch(bytes[0]){
			case 0x4e:
				var id=(bytes[2] << 8) + bytes[1];
				if(MercId.indexOf(id) != -1){
					MercId.length=0;
				}
				MercId.push(id);
				break;
		}
	};

//==============START & END FUNCTIONS==============//
	
	this.finalCheck=function(){
		FileTools.appendText("logs/ProgressLog.txt","Starting FinalCheck \n");
		if(!me.getQuest(1,0)){print("Den");this.CheckQuests(8);}
		if(!me.getQuest(3,3)){print("Malus");this.CheckQuests(28);}
		if(!me.getQuest(5,0)){print("Countess");this.CheckQuests(6);}
		if(!me.getQuest(9,0)){print("Radament");this.CheckQuests(49);}
		if(!me.getQuest(17,0)){print("Black Book");this.CheckQuests(94);}
		if(!me.getQuest(25,0)){print("Izual");this.CheckQuests(105);}
		if(!me.getQuest(35,5)){print("Shenk");this.CheckQuests(111);}
		if(!me.getQuest(37,0)){print("Anya");this.CheckQuests(114);}
		if(!me.getQuest(38,3)){print("Nihlathak");this.CheckQuests(124);}
		FileTools.appendText("logs/ProgressLog.txt","Finished FinalCheck \n");
		Town.doChores();
		say("New Game Son");
		delay(10000);
		quit();
	};
	
	this.checkProgress=function(){
		var i,UpToArea;
		for(i=0; i < WaypointAreas.length; i++){
			if(getWaypoint(38)){UpToArea=129;}
			else if(!getWaypoint(i)){
				i--;
				UpToArea=WaypointAreas[i];
				// //Cains Scroll
				// if(me.getItem(525) && UpToArea < 40){UpToArea=5;}
				// //Horadric Staff
				// if(me.getItem(91) && UpToArea < 74){UpToArea=74;}
				// //Khalims Will
				// if(me.getItem(174)){UpToArea=83;}
				break;
			}
			if(WaypointAreas[i] < 40){ActNumber=0;}
			else if(WaypointAreas[i] < 75){ActNumber=1;}
			else if(WaypointAreas[i] < 103){ActNumber=2;}
			else if(WaypointAreas[i] < 109){ActNumber=3;}
			else{ActNumber=4;}
		}
		LevelingAreas[ActNumber].splice(0,LevelingAreas[ActNumber].indexOf(UpToArea));
		print("Up to Act:"+(ActNumber+1)+" "+Pather.getAreaName(LevelingAreas[ActNumber][0]));
		return true;
	};
	
	this.assignTeleSorcs=function(){
		var Party=getParty(),TeleSorcs=[],PartyCount=0,RunCount=0;
		while(PartyCount<8 && RunCount<10){do{PartyCount++;}while(Party.getNext());delay(3000);RunCount++;}
		do{TeleSorcs.push(Party.name);}while(Party.getNext() && Party.classid == 1);
		return PartyCount == 8;
	};
	
	this.configCharacter=function(CharacterLevel){
		var i;
		Town.move("portalspot");
		delay(500);
		Pather.getWP(me.area);
		Town.heal();
		this.checkMerc();
		this.assignTeleSorcs();
		return true;
	};
	
	//Start Script
	// while(true){if(me.getQuest(17,3)){say("Got");}say(me.x+","+me.y);delay(2000);}
	this.configCharacter(me.charlvl);
	this.checkProgress();
	
	for(ActNumber; ActNumber < LevelingAreas.length; ActNumber++){
		var UptoAct=ActNumber+1;
		if(!this.ChangeAct(UptoAct)){this.ChangeAct(UptoAct);say("Quitting");quit();}
		for(LevelArea=0; LevelArea < LevelingAreas[ActNumber].length; LevelArea++){
			var UpToArea=LevelingAreas[ActNumber][LevelArea],NextArea=0;
			if(LevelArea < LevelingAreas[ActNumber].length-1){
				NextArea=LevelingAreas[ActNumber][LevelArea+1];
			}
			//Act3 Jungle/Marsh stupidity
			if(UpToArea == 78){Pather.useWaypoint(78);}
			else{Pather.journeyTo(UpToArea);}
			if(me.area == UpToArea){
				this.tryMakePortal();
				WaitingLimit=15;
				while(!this.playerClose() && WaitingLimit > 0){
					Pather.moveTo(me.x+rand(-10,10),me.y+rand(-10,10),5,true);
					delay(250*WaitingLimit--);
				}
				Precast.doPrecast(true);
				Pather.getWP(UpToArea,true);
				this.tryMakePortal();
				this.CheckQuests(UpToArea);
				if(NextArea > 0){
					this.clearToNextArea(NextArea);
				}
			}
		}
		this.logProgress("Completed","Act "+(ActNumber+1));
	}
	this.finalCheck();
	return true;
}