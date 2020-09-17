/**
*	@filename	LevelLeader.js
*	@author		Zer
*	@desc		Create a party and move through acts based on the leader
*/

function LevelLeader(){
	var ActNumber,QuestNumber,LevelArea,WaitingLimit;
	var MercId=[],TeleSorcs=[];
	var FullClearAreas=[8,3,4,5,6,34,35,
	43,44,
	104,105,106,
	111,113,124,120,128,129];
	var LevelingAreas=[[2,8,3,4,10,5,6,27,29,32,34,35,36,37],
	[47,48,49,42,56,57,60,43,44,52,54,46],
	[76,85,77,78,88,79,80,94,81,82,83,100,101,102],
	[104,105,106,107,108],
	[110,111,112,113,115,121,122,123,124,117,118,120,128,129,130,131]];	
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
				Pather.useWaypoint(1);
				Town.doChores();
				this.logProgress(me.getQuest(1,0),"Den");
			break;
			case 5://Tristram
				Pather.getWP(5);
				Pather.useWaypoint(1);
				Town.doChores();
				Pather.journeyTo(5);
				Pather.makePortal();
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
				if(me.getQuest(5,0)){
					break;
				}
				Pather.journeyTo(6);
				if(Pather.moveToExit([20,21,22,23,24,25],true,true)){
					Pather.makePortal();
				}
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
				Pather.journeyTo(37);
				// if(Pather.moveToExit(37,true,true)){
					// Pather.makePortal();
				// }
				Pather.moveTo(22535,9653,2,true,true);
				delay(5000);
				Pather.moveTo(22480,9570,2,true,true);
				Pather.moveTo(22549,9520,2,true,true);
				Pather.makePortal();
				this.killQuestBoss(156);
				Town.doChores();
				this.logProgress(me.getQuest(6,3),"Andariel");
			break;
			case 48://Radament
				Pather.journeyTo(49);
				// if(Pather.moveToExit(49,true,true)){
					// Pather.makePortal();
				// }
				this.clearToQuestLocation(49,2,355);
				this.killQuestBoss(229);
				this.getQuestItem(552,20);
				delay(5000);
				this.talkToNPC("Atma");
				this.logProgress(me.getQuest(9,0),"Radament");
			break;
			case 57://Cube
				Pather.journeyTo(60);
				// if(Pather.moveToExit(60,true,true)){
					// Pather.makePortal();
				// }
				this.clearToQuestLocation(60,2,354);
				this.getQuestItem(549,354);
				Town.doChores();
				this.logProgress(me.getItem(549),"Cube");
			break;
			case 43://Staff
				Pather.journeyTo(62);
				if(me.getItem(92)){
					break;
				}
				if(!this.waitForTeleporter(64)){
					Pather.journeyTo(62);
					while(me.area != 63){
						try{
							Pather.moveToExit(63,true,true);
						}catch(err){
							print("Retry enter MaggotLvl2");
						}
					}
					Pather.makePortal();
					while(me.area != 64){
						try{
							Pather.moveToExit(64,true,true);
						}catch(err){
							print("Retry enter MaggotLvl3");
						}
					}
					Pather.makePortal();
					this.clearToQuestLocation(64,2,356);
				}
				this.killQuestBoss(284);
				this.getQuestItem(92,356);
				Town.doChores();
				this.logProgress(me.getItem(92),"Staff of Kings");
			break;
			case 44://Amulet
				Pather.journeyTo(45);
				if(me.getItem(521)){break;}
				if(Pather.moveToExit([58,61],true,true)){
					Pather.makePortal();
				}
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
			case 54://Summoner
				Pather.journeyTo(74);
				Pather.getWP(74);
				if(!this.waitForTeleporter(74)){
					Pather.journeyTo(74);
					this.clearToQuestLocation(74,2,357);
				}
				this.killQuestBoss(250);
				Pather.makePortal();
				Pather.journeyTo(46);
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
				Pather.journeyTo(85);
				// while(me.area != 85){
					// try{
						// Pather.moveToExit(85,true,true);
					// }catch(err){
						// print("Retry enter SpiderCavern");
					// }
				// }
				// Pather.makePortal();
				// say("Waiting for Party Quest");
				// delay(5000);
				// Attack.clear(5);
				// delay(10000);
				Pather.makePortal();
				Attack.clearLevel(0x7);
				this.getQuestItem(553,405);
				Town.doChores();
				this.logProgress(me.getItem(553),"Khalim Eye");
			break;
			case 78://Gidbinn and Khalim Brain
				// Pather.journeyTo(78);
				// if(!me.getQuest(19,0)){
					// this.clearToQuestLocation(78,2,86);
					// this.getQuestItem(87,86);
					// delay(3000);
					// Attack.clear(35);
					// delay(2000);
					// Attack.clear(35);
					// Town.doChores();
					// this.logProgress(me.getQuest(19,0),"Gidbinn");
				// }
				Pather.journeyTo(88);
				// while(me.area != 88){
					// try{
						// Pather.moveToExit(88,true,true);
					// }catch(err){
						// print("Retry enter FlayerLvl1");
					// }
				// }
				Pather.makePortal();
				if(!this.waitForTeleporter(91)){
					while(me.area != 89){
						try{
							Pather.moveToExit(89,true,true);
						}catch(err){
							print("Retry enter FlayerLvl2");
						}
					}
					Pather.makePortal();
					while(me.area != 91){
						try{
							Pather.moveToExit(91,true,true);
						}catch(err){
							print("Retry enter FlayerLvl3");
						}
					}
					Pather.makePortal();
					this.clearToQuestLocation(91,2,406);
				}
				this.killQuestBoss(726);
				this.getQuestItem(555,406);
				Town.doChores();
				this.logProgress(me.getItem(555),"Khalim Brain");
			break;
			case 80://Black Book and Khalim Heart
				Pather.journeyTo(94);
				if(!me.getQuest(17,0)){
					// if(Pather.moveToExit(94,true,true)){
						// Pather.makePortal();
					// }
					this.clearToQuestLocation(94,2,193);
					this.getQuestItem(548,193);
					this.talkToNPC("Alkor");
					this.logProgress(me.getQuest(17,0),"Black Book");
				}
				Pather.journeyTo(80);
				if(Pather.moveToExit([92,93],true,true)){
					Pather.makePortal();
				}
				Attack.clearLevel(0);
				delay(1000);
				this.getQuestItem(554);
				this.logProgress(me.getItem(554),"Khalim Heart");
			break;
			case 82://Khalim Flail
				Pather.journeyTo(83);
				while(true){
					if(Pather.getWP(83,true)){
						break;
					}
				}
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
				// if(Pather.moveToExit(100,true,true)){
					// Pather.makePortal();
				// }
			break;
			case 101://Mephisto
				Pather.journeyTo(102);
				// if(Pather.moveToExit(102,true,true)){
					// Pather.makePortal();
				// }
				// say("Waiting for Party Quest");
				// delay(5000);
				// Attack.clear(5);
				// delay(10000);
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
				if(Pather.moveToExit(105,true,true)){
					Pather.makePortal();
				}
				this.clearToQuestLocation(105,1,256);
				this.killQuestBoss(256);
				this.talkToNPC("Tyrael");
				this.logProgress(me.getQuest(25,0),"Izual");
				Pather.usePortal(105,null);
			break;
			case 107://Diablo
				Pather.journeyTo(108);
				// if(Pather.moveToExit(107,true,true)){
					// Pather.makePortal();
				// }
				// while(true){
					// if(Pather.getWP(107,true)){
						// break;
					// }
				// }
				// if(Pather.moveToExit(108,true,true)){
					// Pather.makePortal();
				// }
				if(Pather.moveTo(7791,5293,5,true,true)){
					Pather.makePortal();
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
				Pather.makePortal();
				Pather.moveTo(7788,5293,5,true,true);
				this.waitForUnit(1,243);
				this.killQuestBoss(243);
				this.talkToNPC("Tyrael");
				this.logProgress(me.getQuest(26,0),"Diablo");
			break;
			case 110://Shenk
				Pather.journeyTo(110);
				Pather.moveTo(3883,5113,15,true,true);
				this.killQuestBoss(760);
				this.talkToNPC("Larzuk");
				this.logProgress(me.getQuest(35,0),"Shenk");
			break;
			case 111://Prisoners
				this.talkToNPC("Qual-Kehk");
				this.logProgress(me.getQuest(36,0),"Prisoners");
			break;
			case 113://Anya
				Pather.journeyTo(113);
				if(Pather.moveToExit(114,true,true)){
					Pather.makePortal();
				}
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
			case 123://Nihlathak
				if(!me.getQuest(37,0)){
					this.CheckQuests(113);
				}
				Pather.journeyTo(124);
				// if(Pather.moveToExit(124,true,true)){
					// Pather.makePortal();
				// }
				this.clearToQuestLocation(124,2,462);
				this.killQuestBoss(526);
				this.talkToNPC("Anya");
				this.logProgress(me.getQuest(38,0),"Nihlathak");
			break;
			case 118://Ancients
				Pather.journeyTo(120);
				// if(Pather.moveToExit(120,true,true)){
					// Pather.makePortal();
				// }
				Pather.makePortal();
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
			case 131://Baal
				Pather.journeyTo(131);
				// if(Pather.moveToExit(131,true,true)){
					// Pather.makePortal();
				// }
				// Attack.clearLevel(0);
				Pather.moveTo(15095,5029,true,true);
				while(getUnit(1,543)){
					Pather.moveTo(15095,5029,true,true);
					Attack.clear(25);
					delay(1000);
				}
				BaalPortal=getUnit(2,563);
				if(BaalPortal && Pather.usePortal(null,null,BaalPortal)){
					if((me.diff == 0 && me.charlvl > 40) || (me.diff == 1 && me.charlvl > 70) || me.charlvl > 85){
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
		
// == == == == == == == = COMMON FUNCTIONS == == == == == == == = //

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
		var count=0, monster=getUnit(1,UnitId);
		while(count < 45){
			try{
				Pather.makePortal();
				while(!this.playerClose() && count < 3){
					say("Waiting for Party Quest");
					Attack.clear(5);
					delay(5000);
					count++;
				}
				Precast.doPrecast(true);
				if(Pather.moveToPreset(QuestArea,UnitType,UnitId,0,0,true,true)){
					return true;
				}
			}catch(err){
				this.logProgress(null,"Clear to Unit:"+monster.name+" in "+Pather.getAreaName(QuestArea));
				return false;
			}
			count++;
		}
		return false;
	};
	
	this.clearToNextArea=function(CurrentArea,DestinationArea){
		var count=0, DestinationReached=false, GotWP=true;
		if(WaypointAreas.indexOf(CurrentArea)>-1){
			GotWP=getWaypoint(WaypointAreas.indexOf(CurrentArea));
		}
		while(count < 45 && !DestinationReached){
			try{
				if(!GotWP){
					Pather.getWP(CurrentArea,true);
					GotWP=getWaypoint(WaypointAreas.indexOf(CurrentArea));
				}
				if(Pather.moveToExit(DestinationArea,true,true)){
					Pather.makePortal();
					DestinationReached=(me.area == DestinationArea);
				}
			}catch(err){
				Pather.journeyTo(DestinationArea);
				DestinationReached=(me.area == DestinationArea);
			}
			count++;
		}
		this.logProgress(DestinationReached,"Clear to "+Pather.getAreaName(DestinationArea)+" from "+Pather.getAreaName(CurrentArea));
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
			this.logProgress(Boss.dead,"Kill Boss:"+BossId.name);
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
			this.logProgress(null,"GetQuestItem:"+Item.name);
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
		if(Pather.accessToAct(DestinationAct)){
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
					this.getA2Merc();
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
	
// == == == == == == == = ACT V FUNCTIONS == == == == == == == = //
	
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
	
// == == == == == == == = ACT IV FUNCTIONS == == == == == == == = //
	
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
	
// == == == == == == == = ACT III FUNCTIONS == == == == == == == = //

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
		var Will, PrevWeapon, Flail=me.getItem(173),Eye=me.getItem(553),Heart=me.getItem(554),Brain=me.getItem(555);
		if(!me.getQuest(18,0) && !me.getItem(174)){
			if(Eye){Storage.Cube.MoveTo(Eye);}else{this.CheckQuests(76);}
			if(Brain){Storage.Cube.MoveTo(Brain);}else{this.CheckQuests(78);}
			if(Heart){Storage.Cube.MoveTo(Heart);}else{this.CheckQuests(80);}
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
	
// == == == == == == == = ACT II FUNCTIONS == == == == == == == = //
		
	this.talkToTyrael=function(){
		var i,NPC=getUnit(1,"Tyrael");
		if(!NPC){this.logProgress(null,"Free Tyrael");return false;}
		for(i=0; i < 3; i += 1){
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
		var HoradricStaff=me.getItem(91),item,Orifice=getUnit(2,152);
		if(!me.getQuest(10,0)){
			if(!Orifice){this.logProgress(null,"Quit Orifice");quit();}
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
			if(item && item.toCursor()){
				Storage.Inventory.MoveTo(item);
			}
			this.logProgress(me.getQuest(10,0),"Placing Horadric Staff");
		}
		return true;
	};
	
	this.cubeStaff=function(){
		var HoradricStaff=me.getItem(91),Staff=me.getItem(92),Amulet=me.getItem(521);
		if(Staff){
			Storage.Cube.MoveTo(Staff);
		}else if(!HoradricStaff){
			this.CheckQuests(43);
		}
		if(Amulet){
			Storage.Cube.MoveTo(Amulet);
		}else if(!HoradricStaff){
			this.CheckQuests(44);
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
			case 0://Amazon
				break;
			case 1://Sorcerer
				MyMercType=99,MyMercDiff=0,MyMercAura="Prayer";
				break;
			case 2://Necromancer
				MyMercType=98,MyMercDiff=1,MyMercAura="Might";
				break;
			case 3://Paladin
				MyMercType=114,MyMercDiff=1,MyMercAura="Holy Freeze";
				break;
			case 4://Barbarian
				MyMercType=104,MyMercDiff=0,MyMercAura="Defiance";
				break;
			case 5://Druid
				MyMercType=108,MyMercDiff=0,MyMercAura="Blessed Aim";
				break;
			case 6://Assassin
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
		addEventListener("gamepacket", gamePacket);
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

// == == == == == == == = START & END FUNCTIONS == == == == == == == = //
	
	this.finalCheck=function(){
		FileTools.appendText("logs/ProgressLog.txt","Starting FinalCheck \n");
		if(!me.getQuest(1,0)){say("Den");Pather.journeyTo(8);Attack.clearLevel(0);}
		if(!me.getQuest(3,3)){say("Malus");this.CheckQuests(27);}
		if(!me.getQuest(4,0)){say("Cain");this.CheckQuests(5);}
		if(!me.getQuest(5,0)){say("Countess");this.CheckQuests(6);}
		if(!me.getQuest(9,0)){say("Radament");this.CheckQuests(48);}
		if(!me.getQuest(17,0)){say("Black Book");this.CheckQuests(80);}
		if(!me.getQuest(25,0)){say("Izual");this.CheckQuests(104);}
		if(!me.getQuest(35,3)){say("Shenk");this.CheckQuests(111);}
		if(!me.getQuest(37,0)){say("Anya");this.CheckQuests(113);}
		if(!me.getQuest(38,3)){say("Nihlathak");this.CheckQuests(123);}
		FileTools.appendText("logs/ProgressLog.txt","Finished FinalCheck \n");
	}
	
	this.checkProgress=function(){
		var i,UpToArea;
		for(i=0; i < WaypointAreas.length; i++){
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
	
	//while(true){say(me.x+","+me.y);delay(2000);}
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
		if(me.act != ActNumber+1){this.ChangeAct(ActNumber+1);}
		for(LevelArea=0; LevelArea < LevelingAreas[ActNumber].length; LevelArea++){
			if(Pather.journeyTo(LevelingAreas[ActNumber][LevelArea])){
				try{
					Pather.makePortal();
				}catch(err){
					print("Failed to make portal");
				}
				WaitingLimit=3;
				while(!this.playerClose() && WaitingLimit > 0){
					say("Waiting for Party");
					Attack.clear(10);
					delay(7000*WaitingLimit--);
				}
				Precast.doPrecast(true);
				Pather.getWP(LevelingAreas[ActNumber][LevelArea],true);
				try{
					Pather.makePortal();
				}catch(err){
					print("Failed to make portal");
				}
				if(LevelArea<LevelingAreas[ActNumber].length-1 && !(FullClearAreas.indexOf(LevelingAreas[ActNumber][LevelArea])>-1)){
					say("Clearing to "+Pather.getAreaName(LevelingAreas[ActNumber][LevelArea+1]));
					clearToNextArea(LevelingAreas[ActNumber][LevelArea],LevelingAreas[ActNumber][LevelArea+1]);
				}else{
					say("Full Clear");
					Attack.clearLevel(0);
				}
			}
			this.CheckQuests(LevelingAreas[ActNumber][LevelArea]);
		}
		this.logProgress("Completed","Act "+(ActNumber+1));
	}
	this.finalCheck();
	return true;
}