/**
*	@filename	LevelingFollower.js
*	@author		Zer
*	@desc		Follow the leader through acts
*/

function LevelFollower(){
	var LeaderUnit,WhoIsLeader,MercId=[],TalRashaTomb=getRoom().correcttomb;
	var TownWaypoints=[0,40,75,103,109];
	var TeleportAreas=[62,74,76,77,78,88];
	var WaypointAreas=[1,3,4,5,6,27,29,32,35,
	40,48,42,57,43,44,52,74,46,
	75,76,77,78,79,80,81,83,101,
	103,106,107,
	109,111,112,113,115,123,117,118,129];
	
	this.logProgress=function(Completed,Quest){
		var date=new Date(),day=date.getDate(),month=date.getMonth(),h=date.getHours(),m=date.getMinutes(),s=date.getSeconds(),Progress="Failed",
		dateString="["+(day < 10?"0"+day:day)+"/"+(month < 10?"0"+month:month)+" "+(h < 10?"0"+h:h)+":"+(m < 10?"0"+m:m)+":"+(s < 10?"0"+s:s)+"]";
		
		if(Completed){
			Progress="Completed";
		}		
		try{
			FileTools.appendText("logs/ProgressLog.txt",dateString+" "+Quest+" - "+Progress+"\n");
		}catch(err){
			D2Bot.printToConsole("Failed to Log Progress",10);
			return false;
		}
		return true;
	};
	
	this.logGame=function(Details){
		var date=new Date(),day=date.getDate(),month=date.getMonth(),h=date.getHours(),m=date.getMinutes(),s=date.getSeconds(),
		dateString="["+(day < 10?"0"+day:day)+"/"+(month < 10?"0"+month:month)+" "+(h < 10?"0"+h:h)+":"+(m < 10?"0"+m:m)+":"+(s < 10?"0"+s:s)+"]";
		
		try{
			FileTools.appendText("logs/JoinLog.txt",dateString+" "+Details+"\n");
		}catch(err){
			D2Bot.printToConsole("Failed to Log Join",10);
			return false;
		}
		return true;
	};
	
	this.ChangeAct=function(DestinationAct){
		var NPC,preArea=me.area;
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
		return me.act == DestinationAct;
	};
	
	this.goFindLeader=function(LeaderArea){
		var LeaderAct,BaalPortal,HaveWaypoint=getWaypoint(WaypointAreas.indexOf(me.area));
		if(LeaderArea){
			if(LeaderArea <= 39){LeaderAct=1;}
			else if(LeaderArea >= 40 && LeaderArea <= 74){LeaderAct=2;}
			else if(LeaderArea >= 75 && LeaderArea <= 102){LeaderAct=3;}
			else if(LeaderArea >= 103 && LeaderArea <= 108){LeaderAct=4;}
			else{LeaderAct=5;}
			
			if(LeaderAct != me.act){
				this.ChangeAct(LeaderAct);																//Make sure we are in the same act
			}
			if(me.getItem(644)){
				var MalahPotion=me.getItem(644);
				MalahPotion.drop();																		//Only leader should carry Potion
			}			
			if(me.classid == 1 && (TeleportAreas.indexOf(me.area)>-1)){
				if(WhoIsLeader.inTown){
					this.teleportFromLocation(me.area);													//Act3 Jungle fix
				}else{
					Town.doChores();
				}
			}
			
			if(LeaderArea != me.area){
				Pather.teleport=true;
				delay(1000);
				switch(LeaderArea){
					//Act1
					//Act2
					case 46:
					case TalRashaTomb:
						if(!me.getQuest(13,0) && me.inTown){
							this.talkToNPC("Atma");
							try{Pather.useWaypoint(46);}catch(err){Pather.journeyTo(46);}
						}
					break;
					case 62:
						Town.doChores();
					break;
					case 73:
						if(me.area == TalRashaTomb){
							try{Pather.useUnit(2,100,73);}catch(err){Town.doChores();}
						}
					break;
					case 74:
						Pather.journeyTo(74);
					break;
					//Act3
					case 76:
					case 77:
					case 78:
					case 88:
						Town.doChores();
					break;
					case 102:
						if(!me.getQuest(21,0) && me.inTown){
							this.talkToNPC("Cain");
							try{Pather.useWaypoint(101);}catch(err){Pather.journeyTo(102);}
						}
					break;
					//Act4
					//Act5
					case 129:
					case 130:
					case 131:
						if(!me.getQuest(39,0) && me.inTown){
							this.talkToNPC("Malah");
							try{Pather.useWaypoint(129);}catch(err){Pather.journeyTo(129);}
						}
					break;
					case 132:
						if(me.area == 131){
							BaalPortal=getUnit(2,563);
							if(BaalPortal && Pather.usePortal(null,null,BaalPortal)){
								delay(250);
							}
						}
					break;
				}
				
				if(Pather.getPortal(LeaderArea,Config.Leader)){
					Pather.usePortal(LeaderArea,Config.Leader);											//Check leader portals to area
				}else if(Pather.getPortal(LeaderArea,null)){
					Pather.usePortal(LeaderArea,null);													//Else if any portals to area
				}else{
					Pather.journeyTo(LeaderArea);														//Otherwise walk to leader
				}
				
				delay(200);
				Pather.teleport=false;
				if(!HaveWaypoint){Pather.getWP(me.area,true);}
			}
			if(!me.inTown){
				Pather.moveTo(WhoIsLeader.x-2,WhoIsLeader.y-2,2,true);									//Find leader if not in Town
			}else{
				Town.doChores();
				delay(500);
				Town.move("portalspot");
			}
		}else{
			print("Leader not partied");
			delay(1500);
		}
		return true;
	};
	
	this.talkToNPC=function(NPCName){
		var NPC;
		Town.goToTown();
		Town.move(NPCName);
		NPC=getUnit(1,NPCName);
		if(NPC && NPC.openMenu()){
			me.cancel();
		}else{
			print("Failed talking to "+NPCName);
			return false;
		}
		return true;
	};
	
	this.teleportFromLocation=function(CurrentArea){													//Teleport to hard destinations
		var DestinationReached=false;
		Pather.teleport=true;
		while(!DestinationReached){
			switch(CurrentArea){
				case 62:																				//Maggot Lair
					Pather.journeyTo(63);
					Pather.journeyTo(64);
					if(Pather.moveToPreset(64,2,356)){DestinationReached=true;}
				break;
				case 74:																				//Arcane Sanctuary
					if(Pather.moveToPreset(74,2,357)){DestinationReached=true;}
				break;
				case 76:																				//Spider Forest
					if(Pather.getWP(77)){DestinationReached=true;}
				break;
				case 77:																				//Great Marsh
					if(Pather.getWP(78)){DestinationReached=true;}
				break;
				case 78:																				//Flayer Jungle
					if(Pather.getWP(79)){DestinationReached=true;}
				break;
				case 88:																				//Flayer Dungeon
					Pather.journeyTo(89);
					Pather.journeyTo(91);
					if(Pather.moveToPreset(91,2,406)){DestinationReached=true;}
				break;
			}
		}
		Town.doChores();
		Town.move("portalspot");
		return DestinationReached;
	};
	
	this.getLeaderUnit=function(name){																	//Get Leader's unit
		var Player=getUnit(0,name);
		if(Player){
			do{
				if(Player.mode != 0 && Player.mode != 17){
					say("Found Leader");
					return Player;
				}
			}while(Player.getNext(WhoIsLeader.area));
		}
		return false;
	};
	
	this.getA2Merc=function(){
		var MyMercType,MyMercDiff,MyMercAura,MyMerc;
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
		if((me.getMerc() || me.mercrevivecost > 0) && me.diff != MyMercDiff){
			this.logProgress(me.getMerc(),"Didn't hire Merc - "+me.name);
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
					this.logProgress(me.getMerc(),"Hired Random Merc - "+me.name);
					return me.getMerc();
				}
				delay(rand(100,15000));
				MyMerc=me.getMerc();
				if(MyMerc.getSkill(MyMercType,1)){
					this.logProgress(me.getMerc(),"Hired "+MyMercAura+" Merc - "+me.name);
					return me.getMerc();
				}
			}
		}
		return me.getMerc();
	};
	
	this.gamePacket=function (bytes) {
		 switch(bytes[0]) {
			case 0x4e:
				var id=(bytes[2] << 8) + bytes[1];
				if(MercId.indexOf(id) !== -1) {
					MercId.length=0;
				}
				MercId.push(id);
				break;
		}
	};
	
	this.configCharacter=function(CharacterLevel){
		var i,Party=getParty(),partyTimeout=0;
		Town.move("portalspot");
		delay(500);
		Pather.getWP(me.area);
		delay(500);
		Town.move("portalspot");
		if(CharacterLevel > 7){
			Town.doChores();
		}else{
			Town.heal();
		}
		WhoIsLeader=getParty(Config.Leader);
		while(!this.getLeaderUnit(Config.Leader)){														//Loop to ensure leader is assigned
			delay(1000);
			partyTimeout++;
			this.goFindLeader(WhoIsLeader.area);
			if(partyTimeout>5){
				quit();
			}
		}
		LeaderUnit=this.getLeaderUnit(Config.Leader);
		this.logGame("Level:"+me.charlvl+" Gold:"+me.gold+" Char:"+me.name);
	};
	this.configCharacter(me.charlvl);
	
	while(LeaderUnit){
		if(copyUnit(LeaderUnit).x){
			if(getDistance(me,LeaderUnit)>5){
				Pather.teleport=false;
				if(me.inTown){
					Town.move("portalspot");
				}else{
					Pather.moveToUnit(LeaderUnit,rand(-4,4),rand(-4,4),true,true);
					Attack.clear(20);
				}
			}
			delay(500);
		}else{
			this.goFindLeader(WhoIsLeader.area);
		}
		delay(1000);
	}
	return true;
}