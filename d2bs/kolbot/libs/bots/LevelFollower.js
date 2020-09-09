/**
*	@filename	LevelingFollower.js
*	@author		Zer
*	@desc		Follow the leader through acts
*/

function LevelFollower(){
	var LeaderUnit,WhereIsLeader,MercId=[];
		
	this.ChangeAct = function(DestinationAct){
		var NPC,preArea = me.area,TownWaypoints = [0,40,75,103,109];
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
				NPC = getUnit(1,"Warriv");
				if(NPC && NPC.openMenu()){
					Misc.useMenu(0x0D36);
				}
				delay(2000);
				if(Config.UseMerc){this.getA2Merc();}
				break;
			case 3:
				Pather.journeyTo(40);
				Pather.moveTo(5091,5155,5);
				this.talkToNPC("Jerhyn");
				Pather.moveTo(5202,5056,5);
				Town.move("Meshif");
				NPC = getUnit(1,"Meshif");
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
		return me.act == DestinationAct;
	};
	
	this.goFindLeader = function(LeaderArea){
		var LeaderAct,BaalPortal;
		if(LeaderArea){
			if(LeaderArea <= 39){LeaderAct = 1;}
			else if(LeaderArea >= 40 && LeaderArea <= 74){LeaderAct = 2;}
			else if(LeaderArea >= 75 && LeaderArea <= 102){LeaderAct = 3;}
			else if(LeaderArea >= 103 && LeaderArea <= 108){LeaderAct = 4;}
			else{LeaderAct = 5;}
			if(LeaderAct != me.act){														//Make sure we are in the same act
				this.ChangeAct(LeaderAct);
			}
			if(this.isImportantQuest(LeaderArea)){
				say("Important Quest Area");
				Config.LifeChicken=0;
				Config.TownHP=15;
			}else{
				Config.LifeChicken=30;
			}
			if(me.classid == 1 && (me.area == 62 || me.area == 74 || me.area == 88)){
				this.teleportToLocation(me.area);
			}
			if(LeaderArea != me.area){
				Pather.teleport = true;
				delay(1500);
				if(LeaderArea == 73){
					try{Pather.useUnit(2,100,73);											//Try duriels hole
					}catch(err){Town.goToTown();}
				}
				if(LeaderArea == 132){
					BaalPortal = getUnit(2,563);
					if(BaalPortal && Pather.usePortal(null,null,BaalPortal)){delay(250);}
				}
				if(Pather.getPortal(LeaderArea,null)){Pather.usePortal(LeaderArea,null);}	//Check portals to area
				else{Pather.journeyTo(LeaderArea);}											//Otherwise walk to leader
				delay(200);
				Pather.teleport = false;
				Pather.getWP(me.area,true);
			}
			if(!me.inTown){
				Pather.moveTo(WhereIsLeader.x-2,WhereIsLeader.y-2,2,true);					//Find leader if not in Town
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
	
	this.isImportantQuest = function(LeaderArea){
		var QuestAreas=[37,73,74,83,102,108,120],i;
		if(me.mode == 17){me.revive();}
		for(i = 0; i < QuestAreas.length; i++){if(LeaderArea == QuestAreas[i]){return true;}}
		return false;
	};
	
	this.talkToNPC = function(NPCName){
		var NPC;
		Town.goToTown();
		Town.move(NPCName);
		NPC = getUnit(1,NPCName);
		if(NPC && NPC.openMenu()){
			me.cancel();
		}else{
			print("Failed talking to "+NPCName);
			return false;
		}
		return true;
	};
	
	this.teleportToLocation = function(CurrentArea){											//Teleport to hard destinations
		var DestinationReached = false;
		Pather.teleport = true;
		switch(CurrentArea){
			case 62:																			//Maggot Lair
				this.teleportHeal(63,64);
				if(Pather.moveToPreset(64,2,356)){DestinationReached = true;}
			break;
			case 74:																			//Arcane Sanctuary
				if(Pather.moveToPreset(74,2,357)){DestinationReached = true;}
			break;
			case 88:																			//Flayer Dungeon
				this.teleportHeal(89,91);
				if(Pather.moveToPreset(91,2,406)){DestinationReached = true;}
			break;
		}
		Town.doChores();
		Town.move("portalspot");
		return DestinationReached;
	};
	
	this.teleportHeal = function(FirstLevel,SecondLevel){
		Pather.journeyTo(FirstLevel);
		Town.heal();Town.move("portalspot");Pather.usePortal(FirstLevel, me.name);Pather.moveToExit(SecondLevel,false,false);
		Town.heal();Town.move("portalspot");Pather.usePortal(FirstLevel, me.name);Pather.moveToExit(SecondLevel,true,false);
	}
	
	this.getLeaderUnit = function(name){														//Get Leader's unit
		var Player = getUnit(0,name);
		if(Player){
			do{
				if(Player.mode != 0 && Player.mode != 17){
					say("Found Leader");
					return Player;
				}
			}while(Player.getNext(WhereIsLeader.area));
		}
		return false;
	};
	
	this.getA2Merc = function(){
		var MyMercType,MyMercDiff,MyMercAura,MyMerc;
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
		//If we have the right aura merc stop function
		if(me.getMerc() || me.mercrevivecost){
			MyMerc=me.getMerc();
			if(MyMerc.getSkill(MyMercType,1)){
				return true;
			}
		}
		Town.goToTown(2);
		Pather.getWP(me.area);
		Pather.moveTo(5041,5055);
		addEventListener("gamepacket", gamePacket);
		var Greiz = getUnit(1,Town.tasks[1].Merc);
		if(Greiz && Greiz.openMenu()){
			while(MercId.length>0){
				Pather.moveTo(5031+rand(-3,3),5048+rand(-3,3));
				Greiz.openMenu();
				Misc.useMenu(0x0D45);
				sendPacket(1,0x36,4,Greiz.gid,4,MercId[0]);
				//If it's the wrong difficulty just hire a random merc
				if(me.diff != MyMercDiff){
					return true;
				}
				delay(2500);
				MyMerc=me.getMerc();
				if(MyMerc.getSkill(MyMercType,1)){
					return true;
				}
			}
		}
		return false;
	};
	
	this.gamePacket = function (bytes) {
		 switch(bytes[0]) {
			case 0x4e:
				var id = (bytes[2] << 8) + bytes[1];
				if(MercId.indexOf(id) !== -1) {
						MercId.length = 0;
				}
				MercId.push(id);
				break;
		}
	};
	
	Town.doChores();
	Town.move("portalspot");
	Pather.getWP(me.area);
	Town.move("portalspot");
	WhereIsLeader = getParty(Config.Leader);
	var partyTimeout = 0;
	while(!this.getLeaderUnit(Config.Leader)){												//Loop to ensure leader is assigned
		delay(1000);
		partyTimeout++;
		this.goFindLeader(WhereIsLeader.area);
		if(partyTimeout>5){quit();}
	}
	LeaderUnit = this.getLeaderUnit(Config.Leader);

	while(LeaderUnit){
		if(copyUnit(LeaderUnit).x){
			if(getDistance(me,LeaderUnit)>5){
				Pather.teleport = false;
				Pather.moveToUnit(LeaderUnit,rand(-4,4),rand(-4,4),true,true);
				Attack.clear(20);
				delay(500);
			}
		}else{
			this.goFindLeader(WhereIsLeader.area);
		}
		delay(1000);
	}
	return true;
}