/**
*	@filename	LevelingFollower.js
*	@author		Zer
*	@desc		Follow the leader through acts
*/

function LevelFollower(){
	var LeaderUnit,WhereIsLeader,ClearType;
		
	this.ChangeAct=function(DestinationAct){
		var NPC,preArea=me.area;
		try{
			switch(DestinationAct){
			case 2:
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
			say("Act change done");
		}catch(err){me.cancel();print("Act change failed");return false;}
		return true;
	};
	
	this.goFindLeader=function(LeaderArea){
		var LeaderAct,BaalPortal,TownWaypoints=[0,40,75,103,109];
		if(LeaderArea){
			if(LeaderArea <= 39){LeaderAct=1;}
			else if(LeaderArea >= 40 && LeaderArea <= 74){LeaderAct=2;}
			else if(LeaderArea >= 75 && LeaderArea <= 102){LeaderAct=3;}
			else if(LeaderArea >= 103 && LeaderArea <= 108){LeaderAct=4;}
			else{LeaderAct=5;}
			if(LeaderAct != me.act){														//Make sure we are in the same act
				if(Pather.journeyTo(TownWaypoints[LeaderAct-1])){say("Act change done");}
				else{this.ChangeAct(LeaderAct);}
			}
			if(LeaderArea != me.area){
				Pather.teleport=true;
				delay(2000);
				if(LeaderArea==73){
					try{Pather.useUnit(2,100,73);											//Try duriels hole
					}catch(err){Town.goToTown();}
				}
				if(LeaderArea==132){
					BaalPortal=getUnit(2,563);
					if(BaalPortal && Pather.usePortal(null,null,BaalPortal)){delay(250);}
				}
				if(Pather.getPortal(LeaderArea,null)){Pather.usePortal(LeaderArea,null);}	//Check portals to area
				else{Pather.journeyTo(LeaderArea);}											//Otherwise walk to leader
				delay(200);
				Pather.teleport=false;
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
	
	this.talkToNPC=function(NPCName){
		var NPC;
		Town.goToTown();
		Town.move(NPCName);
		NPC=getUnit(1,NPCName);
		if(NPC && NPC.openMenu()){
			me.cancel();
		}else{
			print("Failed talking to "+NPCName);
		}
	};
	
	this.getLeaderUnit=function(name){														//Get Leader's unit
		var Player=getUnit(0,name);
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
	
	Town.doChores();
	Town.move("portalspot");
	Pather.getWP(me.area);
	Town.move("portalspot");
	WhereIsLeader=getParty(Config.Leader);
	var partyTimeout=0;
	while(!this.getLeaderUnit(Config.Leader)){									//Loop to ensure leader is assigned
		delay(1000);
		say("Finding Leader "+partyTimeout++);
		this.goFindLeader(WhereIsLeader.area);
		if(partyTimeout>5){
			quit();
		}
	}	
	LeaderUnit=this.getLeaderUnit(Config.Leader);

	while(LeaderUnit){
		if(copyUnit(LeaderUnit).x){
			if(getDistance(me,LeaderUnit)>5){
				Pather.teleport=false;
				Pather.moveToUnit(LeaderUnit,rand(-4,4),rand(-4,4),true,true);
				Attack.clear(20,ClearType);
				delay(500);
			}
		}else{
			this.goFindLeader(WhereIsLeader.area);
		}
		delay(1000);
	}
	return true;
}