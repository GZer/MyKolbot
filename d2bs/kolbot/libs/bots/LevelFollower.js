/**
*	@filename	LevelingFollower.js
*	@author		Zer
*	@desc		Follow the leader through acts
*/

function LevelFollower(){	
	var LeaderUnit,WhereIsLeader;
		
	this.ChangeAct=function (DestinationAct){
		var NPC,preArea=me.area;
		try{
			switch (DestinationAct){
			case 2:
				Town.move("Warriv");
				NPC=getUnit(1,"Warriv");
				if (NPC && NPC.openMenu()){
					Misc.useMenu(0x0D36);
				}
				break;
			case 3:
				Pather.journeyTo(40);
				this.talkToNPC("Jerhyn");
				Town.move("portalspot");
				Town.move("Meshif");
				NPC=getUnit(1,"Meshif");
				if (NPC && NPC.openMenu()){
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
				if (getUnit(2,566)){
					me.cancel();
					Pather.useUnit(2,566,109);
				}else{
					Misc.useMenu(0x58D2);
				}
				break;
			}
			while (!me.area){
				delay(500);
			}
			if (me.area==preArea){
				me.cancel();
				say("Act change failed.");
				return false;
			}
			say("Act change done.");
			Town.doChores();
			Town.move("portalspot");
		}catch (err){
			return false;
		}
		return true;
	};
	
	this.goFindLeader=function(LeaderArea){
		var LeaderAct;
		if(LeaderArea) {
			if(LeaderArea <= 39){LeaderAct=1;}
			else if(LeaderArea >= 40 && LeaderArea <= 74){LeaderAct=2;}
			else if(LeaderArea >= 75 && LeaderArea <= 102){LeaderAct=3;}
			else if(LeaderArea >= 103 && LeaderArea <= 108){LeaderAct=4;}
			else{LeaderAct=5;}
			if(LeaderAct != me.act){												//Make sure we are in the same act
				try{
					if(Pather.useWaypoint(LeaderArea)){
						delay(200);
					}
				}catch(er){
					this.ChangeAct(LeaderAct);
				}
			}
			if(LeaderArea != me.area){
				Pather.teleport=true;
				delay(2000);
				if(LeaderArea==73){
					try{
						Pather.useUnit(2,100,73);									//Try duriels hole
					}catch(err){
						Town.goToTown();
					}
				}
				if(Pather.getPortal(LeaderArea,null)){								//Check portals to area
					delay(200);
					Pather.usePortal(LeaderArea,null);
				}else{
					Pather.journeyTo(LeaderArea);									//Otherwise walk to leader
				}
				Pather.teleport=false;
				Pather.getWP(me.area,true);
			}
			if(!me.inTown){
				Pather.moveTo(WhereIsLeader.x-2,WhereIsLeader.y-2,2,true);			//Find leader if not in town
			}else{
				Town.doChores();
				this.talkToNPC("Deckard Cain");
				delay(500);
				Town.move("portalspot");
			}
		}else{
			say("Leader not partied");
			delay(1500);
		}
		return true;
	};
	
	this.talkToNPC=function (NPCName){
		var NPC;
		Town.doChores();
		Town.move(NPCName);
		NPC=getUnit(1,NPCName);
		if (NPC && NPC.openMenu()){
			me.cancel();
		}else{
			say("Failed talking to "+NPCName);
		}
	};
	
	this.getLeaderUnit=function(name){												//Get Leader's unit
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
	WhereIsLeader=getParty(Config.Leader);
	
	while(!this.getLeaderUnit(Config.Leader)){										//Loop to ensure leader is assigned
		delay(500);
		say("Finding Leader");
		this.goFindLeader(WhereIsLeader.area);
	}	
	LeaderUnit=this.getLeaderUnit(Config.Leader);

	while(LeaderUnit){
		if (copyUnit(LeaderUnit).x){
			if(getDistance(me,LeaderUnit) > 6){
				// var moveX=copyUnit(LeaderUnit).x-me.x, moveY=copyUnit(LeaderUnit).y-me.y;
				// say("x:"+moveX+" y:"+moveY);
				Pather.teleport=false;
				if(me.classid==1){													//Sorc keep distance
					delay(250);
					Pather.moveToUnit(LeaderUnit,rand(-5,5),rand(-5,5),true,true);
				}else{
					Pather.moveToUnit(LeaderUnit,rand(-3,3),rand(-3,3),true,true);	//Otherwise copy Leader's movements
				}
				Attack.clear(20);
				delay(500);
			}
		}else {
			this.goFindLeader(WhereIsLeader.area);
		}
		delay(1000);
	}
	return true;
}