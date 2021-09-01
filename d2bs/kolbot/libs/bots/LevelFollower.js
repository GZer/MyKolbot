/**
*	@filename	LevelingFollower.js
*	@author		Zer
*	@desc		Follow the leader through acts clearing
*/

function LevelFollower(){
	var TheLeader,LeaderUnit,TalRashaTomb=getRoom().correcttomb;
	var TownWaypoints=[0,40,75,103,109],TeleportAreas=[62,74,76,77,78,88];
	
	this.goFindLeader=function(LeaderArea){
		var LeaderAct,BaalPortal;
		Pather.teleport=true;
		if(LeaderArea){
			if(LeaderArea < 40){LeaderAct=1;}
			else if(LeaderArea < 75){LeaderAct=2;}
			else if(LeaderArea < 103){LeaderAct=3;}
			else if(LeaderArea < 109){LeaderAct=4;}
			else{LeaderAct=5;}
			//Make sure we are in the same act
			if(LeaderAct != me.act){
				LevelTown.changeAct(LeaderAct);
			}
			//Act3 Jungle fix			
			if(me.classid == 1 && (TeleportAreas.indexOf(me.area) > -1) && (TownWaypoints.indexOf(LeaderArea) > -1)){
				this.teleportFromLocation(me.area);
			}
			if(LeaderArea != me.area){
				//Check leader or any portals to area otherwise walk to leader
				if(Pather.getPortal(LeaderArea,Config.Leader)){Pather.usePortal(LeaderArea,Config.Leader);}
				else if(Pather.getPortal(LeaderArea,null)){Pather.usePortal(LeaderArea,null);}
				else if(Pather.getPortal(LeaderArea,me.name)){Pather.usePortal(LeaderArea,me.name);}
				else{
					switch(LeaderArea){
						//Go To Town
						case 1:
						case 40:
						case 75:
						case 103:
						case 109:
							try{LevelTown.doChores();}
							catch(err){print("Failed going to town");}
						break;
						//Tals Tomb
						case 46:
						case TalRashaTomb:
							if(me.inTown){
								try{Pather.useWaypoint(46);}
								catch(err){print("Find Leader Failed");}
							}
						break;
						//Enter Duriels Lair
						case 73:
							if(me.area == TalRashaTomb){
								try{Pather.useUnit(2,100,73);}
								catch(err){LevelTown.doChores();}
							}
						break;
						//Flayer Jungle BS
						case 78:
							if(me.inTown){
								try{Pather.useWaypoint(78);}
								catch(err){print("Find Leader Failed");}
							}
						break;
						case 102:
							if(me.inTown){
								try{Pather.useWaypoint(101);}
								catch(err){print("Find Leader Failed");}
							}
						break;
						case 129:
						case 130:
						case 131:
							if(me.inTown){
								try{Pather.useWaypoint(129);}
								catch(err){print("Find Leader Failed");}
							}
						break;
						case 132:
							if(me.area == 131){
								BaalPortal=getUnit(2,563);
								if(BaalPortal && Pather.usePortal(null,null,BaalPortal)){
									delay(150);
								}
							}
						break;
					}
				}
				Pather.journeyTo(LeaderArea);
			}
			Pather.teleport=(me.diff == 2);
			delay(250);
			Pather.getWP(me.area,true);
			//Go to leader if not in Town
			if(!me.inTown && me.area == LeaderArea){Pather.moveTo(LeaderUnit.x-2,LeaderUnit.y-2,2,true);}
			else{LevelTown.doChores();Town.move("portalspot");}
		}else{
			print("Leader not partied");
			delay(500);
		}
		return true;
	};
	
	this.teleportFromLocation=function(CurrentArea){
		//Teleport to hard destinations
		var DestinationReached=false;
		Pather.teleport=true;
		while(!DestinationReached){
			switch(CurrentArea){
				//Maggot Lair
				case 62:
					Pather.journeyTo(63);
					Pather.journeyTo(64);
					if(Pather.moveToPreset(64,2,356)){DestinationReached=true;}
				break;
				//Arcane Sanctuary
				case 74:
					Pather.useWaypoint(40);
					LevelTown.doChores();
					Pather.journeyTo(74);
					if(Pather.moveToPreset(74,2,357)){DestinationReached=true;}else{Pather.useWaypoint(40);}
				break;
				//Spider Forest
				case 76:
					try{if(getWaypoint(77) && Pather.useWaypoint(77)){DestinationReached=true;}}
					catch(err){if(Pather.getWP(77)){DestinationReached=true;}}
				break;
				//Great Marsh
				case 77:
					try{if(getWaypoint(78) && Pather.useWaypoint(78)){DestinationReached=true;}}
					catch(err){if(Pather.getWP(78)){DestinationReached=true;}}
				break;
				//Flayer Jungle
				case 78:
					try{if(getWaypoint(79) && Pather.useWaypoint(79)){DestinationReached=true;}}
					catch(err){if(Pather.getWP(79)){DestinationReached=true;}}
				break;
				//Flayer Dungeon
				case 88:
					Pather.journeyTo(89);
					Pather.journeyTo(91);
					if(Pather.moveToPreset(91,2,406)){DestinationReached=true;}
				break;
			}
		}
		LevelTown.doChores();
		Town.move("portalspot");
		return DestinationReached;
	};
	
	//Get Leader's unit identifier
	this.getTheLeader=function(name){
		var Player=getUnit(0,name);
		if(Player){
			do{if(Player.mode != 0 && Player.mode != 17){return Player;}}
			while(Player.getNext(LeaderUnit.area));
		}
		return false;
	};
	
	this.assignTheLeader=function(){
		var partyTimeout=0;
		LeaderUnit=getParty(Config.Leader);
		//Loop to ensure leader is assigned
		while(!this.getTheLeader(Config.Leader)){
			delay(1000);
			partyTimeout++;
			this.goFindLeader(LeaderUnit.area);
			if(partyTimeout > 5){
				quit();
			}
		}
		TheLeader=this.getTheLeader(Config.Leader);
	};
	
	//Start Script
	/*var q;while(true){for(q=0;q<13;q++){print(q+" - "+me.getQuest(20,q));delay(1000);}}*/
	LevelTown.doChores();
	Town.move("portalspot");
	this.assignTheLeader();
	
	while(TheLeader){
		if(copyUnit(TheLeader).x){
			if(getDistance(me,TheLeader) > 4){
				Pather.teleport=false;
				if(me.inTown){Town.move("portalspot");}
				else{Pather.moveToUnit(TheLeader,rand(-4,4),rand(-4,4),true,true);}
			}
			Attack.clear(30);
			delay(250);
		}else{
			this.goFindLeader(LeaderUnit.area);
		}
		delay(250);
	}
	return true;
}