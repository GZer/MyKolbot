/**
*	@filename	Town.js
*	@author		Zer
*	@desc		Regular Town.js but added Leveling Quest things
*/

var NPC={
	Akara: getLocaleString(2892).toLowerCase(),
	Gheed: getLocaleString(2891).toLowerCase(),
	Charsi: getLocaleString(2894).toLowerCase(),
	Kashya: getLocaleString(2893).toLowerCase(),
	Warriv: getLocaleString(2895).toLowerCase(),

	Fara: getLocaleString(3025).toLowerCase(),
	Drognan: getLocaleString(3023).toLowerCase(),
	Elzix: getLocaleString(3030).toLowerCase(),
	Greiz: getLocaleString(3031).toLowerCase(),
	Lysander: getLocaleString(3026).toLowerCase(),
	Jerhyn: getLocaleString(3027).toLowerCase(),
	Meshif: getLocaleString(3032).toLowerCase(),
	Atma: getLocaleString(3024).toLowerCase(),

	Ormus: getLocaleString(1011).toLowerCase(),
	Alkor: getLocaleString(1010).toLowerCase(),
	Hratli: getLocaleString(1009).toLowerCase(),
	Asheara: getLocaleString(1008).toLowerCase(),

	Jamella: getLocaleString(1016).toLowerCase(),
	Halbu: getLocaleString(1017).toLowerCase(),
	Tyrael: getLocaleString(1013).toLowerCase(),

	Malah: getLocaleString(22478).toLowerCase(),
	Anya: getLocaleString(22477).toLowerCase(),
	Larzuk: getLocaleString(22476).toLowerCase(),
	Qual_Kehk: getLocaleString(22480).toLowerCase(),
	Nihlathak: getLocaleString(22483).toLowerCase(),

	Cain: getLocaleString(2890).toLowerCase()
};

var LevelTown={
	// Do Chores and Specific Quest tasks
	doChores: function(){
		var Item,NPC
		Town.doChores();
		
		/*Kashya for Free Merc*/
		if(me.getQuest(2,1)){
			Town.goToTown(1);
			Town.move(NPC.Kashya);
			NPC=getUnit(1,NPC.Kashya);
			if(NPC && NPC.openMenu()){me.cancel();}
		}

		/*Atma for Discount*/
		if(me.getQuest(9,1)){
			Town.goToTown(2);
			Town.move(NPC.Atma);
			NPC=getUnit(1,NPC.Atma);
			if(NPC && NPC.openMenu()){me.cancel();}
		}
		
		/*Cain for Access to Durance*/
		if(me.getQuest(21,2) && !me.getQuest(22,0)){
			Town.goToTown(3);
			Town.move(NPC.Cain);
			NPC=getUnit(1,NPC.Cain);
			if(NPC && NPC.openMenu()){me.cancel();}
		}

		/*Book Of Skill*/
		if(me.getItem(552)){
			Item=me.getItem(552);
			if(Item.location > 3){Town.openStash();}
			Item.interact();
		}

		/*Black Book*/
		if(me.getItem(548)){
			Town.goToTown(3);
			Town.move(NPC.Alkor);
			NPC=getUnit(1,NPC.Alkor);
			if(NPC && NPC.openMenu()){me.cancel();}
		}
		
		/*Scroll Of Resistance*/
		if(me.getItem(646)){
			Item=me.getItem(646);
			if(Item.location > 3){Town.openStash();}
			Item.interact();
		}
	},
	
	talkToNPC: function(NPCName){
		var NPC;
		Town.goToTown();
		Town.move(NPCName);
		NPC=getUnit(1,NPCName);
		if(NPC && NPC.openMenu()){me.cancel();}
		else{print("Failed talking to "+NPCName);return false;}
		return true;
	},
	
	ChangeAct: function(DestinationAct){
		var NPC,preArea=me.area;
		if(Pather.accessToAct(DestinationAct)){
			try{Pather.journeyTo(TownWaypoints[DestinationAct-1]);}
			catch(err){print("Failed using Waypoint to change acts");}
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
				print("Act change failed");
			}
		}catch(err){
			me.cancel();
			return false;
		}
		if(Config.useMerc){this.checkMerc();}
		return me.act == DestinationAct;
	},
	
	logProgress: function(Completed,Quest){
		var date=new Date(),day=date.getDate(),month=date.getMonth(),h=date.getHours(),m=date.getMinutes(),s=date.getSeconds(),Progress="Failed",
		dateString="["+(day < 10?"0"+day:day)+"/"+(month < 10?"0"+month:month)+" "+(h < 10?"0"+h:h)+":"+(m < 10?"0"+m:m)+":"+(s < 10?"0"+s:s)+"]";
		if(Completed){Progress="Completed";}else{Progress="Failed";}		
		try{FileTools.appendText("logs/ProgressLog.txt",dateString+" "+Quest+" "+Progress+"\n");}
		catch(err){D2Bot.printToConsole("Failed to Log Progress",10);return false;}
		return true;
	},
	
	
	
	checkMerc: function(){
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
		if(MyMerc){
			if(Math.abs(me.charlvl-MyMerc.charlvl)> 10){
				ReplaceMerc=true;
			}
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
	},
	
	unEquipMerc: function(){
		var cursorItem,i;		
		for(i=1; i < 5; i++){
			//2 Handed Weapons fix
			if(i == 2){i=3;}
			clickItem(4,i);
			delay(1000);
			if(me.Itemoncursor){
				delay(1000);
				cursorItem=getUnit(100);
				if(cursorItem){
					Storage.Inventory.MoveTo(cursorItem);
					delay(1500);					
					if(me.Itemoncursor){
						Misc.click(0,0,me);
						delay(1000);
					}
				}
			}
		}
		return true;
	},
	
	hireA2Merc: function(){
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
	},
	
	gamePacket: function(bytes){
		 switch(bytes[0]){
			case 0x4e:
				var id=(bytes[2] << 8)+ bytes[1];
				if(MercId.indexOf(id)!= -1){
					MercId.length=0;
				}
				MercId.push(id);
				break;
		}
	};
};