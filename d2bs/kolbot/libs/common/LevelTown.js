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
var MercId=[];

var LevelTown={
	// Do Chores and Specific Quest Tasks
	doChores: function(){
		Town.doChores();
		/*Malahs Potion*/
		if(me.getItem(644)){
			var Anya,i;
			Pather.usePortal(114,null);
			Pather.teleport=true;
			Pather.moveToPreset(114,2,460,0,0);
			Anya=getUnit(2,558);
			for(i=0; i<3; i++){
				Pather.moveToUnit(Anya);
				Anya.interact();
				delay(250);
				me.cancel();
			}
		}
		/*Check Merc Status*/
		if(Config.useMerc){
			this.checkMerc();
		}
		/*Kashya for Free Merc*/
		if(me.getQuest(2,1)){
			this.talkToNPC(NPC.Kashya,1);
		}
		/*Atma for Discount*/
		if(me.getQuest(9,1)){
			this.talkToNPC(NPC.Atma,2);
		}
		/*Atma for Access to Magi Canyon*/
		if(me.getQuest(13,1) && !me.getQuest(13,0)){
			this.talkToNPC(NPC.Atma,2);
		}
		/*Cain for Access to Durance*/
		if(me.getQuest(21,2) && !me.getQuest(22,0)){
			this.talkToNPC(NPC.Cain,3);
		}
		/*Black Book*/
		if(me.getItem(548)){
			this.talkToNPC(NPC.Alkor,3);
		}
		/*Book Of Skill*/
		if(me.getItem(552)){
			this.useItem(552);
		}
		/*Scroll Of Resistance*/
		if(me.getItem(646)){
			this.useItem(646);
		}
	},
	
	logProgress: function(Completed,Task){
		var Progress="Failed",date=new Date(),day=date.getDate(),month=date.getMonth(),h=date.getHours(),m=date.getMinutes(),s=date.getSeconds(),
		dateString="["+(day < 10?"0"+day:day)+"/"+(month < 10?"0"+month:month)+" "+(h < 10?"0"+h:h)+":"+(m < 10?"0"+m:m)+":"+(s < 10?"0"+s:s)+"]";
		if(Completed){Progress="Completed";}		
		try{FileTools.appendText("logs/ProgressLog.txt",dateString+" "+Task+" "+Progress+"\n");}
		catch(err){D2Bot.printToConsole("Failed to Log Progress",10);}
	},
	
	useItem: function(ItemId){
		var Item=me.getItem(ItemId);
		if(Item.location > 3){Town.openStash();}
		Item.interact();
	},
	
	talkToNPC: function(NPCName,ActTown,Function){
		if(ActTown){Town.goToTown(ActTown);}
		Town.move(NPCName);
		var NPC=getUnit(1,NPCName);
		if(NPC && NPC.openMenu()){
			if(Function){Misc.useMenu(Function);}
			else{me.cancel();}
		}
		else{
			this.logProgress(false,"Talk to NPC "+NPCName+" - "+me.name);
		}
	},
	
	checkMerc: function(){
		var ReplaceMerc=false,MyMerc=me.getMerc();
		//If we have a Merc check its within level,otherwise get free one
		if(me.mercrevivecost > 0){
			if(me.gold < me.mercrevivecost){
				this.logProgress(me.getMerc(),"Not enough gold for Merc - "+me.name);
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
			if(this.hireA2Merc()){
				try{Item.autoEquipMerc();}
				catch(err){print("Failed to AutoEquip Merc");}
			}
		}
	},
	
	unEquipMerc: function(){
		var CursorItem,i,Count;
		/*Unequip Merc twice*/		
		for(Count=0; i < 2; Count++){
			for(i=1; i < 5; i++){
				//2 Handed Weapons fix
				if(i == 2){i=3;}
				clickItem(4,i);
				delay(1000);
				if(me.Itemoncursor){
					delay(1000);
					CursorItem=getUnit(100);
					if(CursorItem){
						Storage.Inventory.MoveTo(CursorItem);
						delay(1500);					
						if(me.Itemoncursor){
							Misc.click(0,0,me);
							delay(1000);
						}
					}
				}
			}
		}
	},
	
	hireA2Merc: function(){
		var i,Count=0,HiredMercAura,MyMercDiff=0;
		//Adjust merc aura based on Class/Difficulty
		var MercAuraSkills=[103,104,98,114,99,108,103];
		var MercAuraNames=["$","Defiance","Might","Holy Freeze","Prayer","Blessed Aim","$"];
		var MercAuraName=MercAuraNames[me.classid]
		if(me.classid == 2 || me.classid == 3){MyMercDiff=1;}
		//Hire an act 2 Merc
		Town.goToTown(2);
		Pather.getWP(me.area);
		Pather.moveTo(5041,5055);
		addEventListener("gamepacket",gamePacket);
		var Greiz=getUnit(1,NPC.Greiz);
		if(Greiz && Greiz.openMenu()){
			while(MercId.length > 0 && Count < 8){
				Pather.moveTo(5031+rand(-3,3),5048+rand(-3,3));
				Greiz.openMenu();
				Misc.useMenu(0x0D45);
				sendPacket(1,0x36,4,Greiz.gid,4,MercId[0]);
				delay(rand(100,1000));
				var MyMerc=me.getMerc();
				for(i=0; i < MercAuraSkills.length; i++){
					if(MyMerc.getSkill(MercAuraSkills[i],1)){
						HiredMercAura=MercAuraNames[i];
					}
				}
				//If it's the wrong difficulty or we have the right aura stop
				if(me.diff != MyMercDiff || HiredMercAura == MercAuraName){
					this.logProgress(me.getMerc(),"Replace Merc with "+HiredMercAura+" Merc - "+me.name);
					return true;
				}
				Count++;
			}
		}
		return false;
	},
	
	changeAct: function(DestinationAct){
		var Count=0,ActChanged=false;
		if(Pather.accessToAct(DestinationAct)){
			try{Town.goToTown(DestinationAct);return true;}
			catch(err){print("Failed using Waypoint to change acts");}
		}
		while(!ActChanged && Count < 3){
			try{
				switch(DestinationAct){
					case 2:
						Town.goToTown(1);
						Pather.moveTo(4862,5662,5);
						this.talkToNPC(NPC.Warriv,null,0x0D36);
					break;
					case 3:
						Town.goToTown(2);
						Pather.moveTo(5091,5155,5);
						this.talkToNPC(NPC.Jerhyn);
						Pather.moveTo(5202,5056,5);
						this.talkToNPC(NPC.Meshif,null,0x0D38);
					break;
					case 4:
						if(me.area != 102){Pather.journeyTo(102);}
						Pather.moveTo(17590,8068,2,true,true);
						delay(2000);
						Pather.moveTo(17601,8070,2,true,true);
						Pather.usePortal(null);
					break;
					case 5:
						this.talkToNPC(NPC.Tyrael,4);			
						delay(1000);
						if(getUnit(2,566)){
							me.cancel();
							Pather.useUnit(2,566,109);
						}else{
							this.talkToNPC(NPC.Tyrael,null,0x58D2);
						}
					break;
				}
				while(!me.area){
					delay(500);
				}
				if(me.act == DestinationAct){
					ActChanged=true;
				}
			}catch(err){
				me.cancel();
				return false;
			}
			Count++;
		}
		this.logProgress(ActChanged,"Change to Act"+DestinationAct+" failed - "+me.name);
		return ActChanged;
	},
	
	configCharacter: function(){
		Town.heal();
		Town.initNPC("Shop","BuyPotions");
		me.cancel();
		delay(150);
		Pickit.pickItems();
		Pather.getWP(me.area);
		this.checkMerc();
	}
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