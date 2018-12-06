//	/d2bs/kolbot/libs/Builds/Sorceress.ExampleBuild.js

/**
*
* Instructions: 	See /d2bs/kolbot/libs/config/Builds/README.txt
*
* Skill IDs: 	See /d2bs/kolbot/sdk/skills.txt for a list of skill IDs.
*
* Stat IDs: 
*
* 	Strength=0
* 	Energy=1
* 	Dexterity=2
* 	Vitality=3
*
*/
js_strict(true);

if(!isIncluded("common/Cubing.js")){include("common/Cubing.js");};
if(!isIncluded("common/Prototypes.js")){include("common/Prototypes.js");};
if(!isIncluded("common/Runewords.js")){include("common/Runewords.js");};

var AutoBuildTemplate={

	1: 	{
			Update: function(){
				Config.PickitFiles.push("LateGame.nip");
				Config.PickitFiles.push("MidGame.nip");
				Config.PickitFiles.push("EarlyGame.nip");
				Config.PickitFiles.push("SingerRunes.nip");
				Config.PickitFiles.push("AutoEquip/Singer.xpac.nip");
				Config.PickitFiles.push("AutoEquip/PreMerc.xpac.nip");
				Config.PickitFiles.push("AutoEquip/Merc.xpac.nip");
				Config.Inventory[0]=[1,1,1,1,1,1,1,1,1,1];
				Config.Inventory[1]=[1,1,1,1,1,1,1,1,1,1];
				Config.Inventory[2]=[1,1,1,1,1,1,1,1,1,1];
				Config.Inventory[3]=[1,1,1,1,1,1,1,1,1,1];
				Config.AutoEquip=true;
				Config.OpenChests=true;
				Config.ClearType=0;//Monster spectype to kill in level clear scripts(0=all)
				Config.LogExperience=true;//Print experience statistics in the manager.
				Config.StashGold=200;//Minimum amount of gold to stash.
				Config.AttackSkill=[0,0,0,0,0,0,0];
				Config.LowManaSkill=[0,0];
				Config.PublicMode=3;
				Config.ScanShrines=[17,1,2,15,6,7,12,14,8,9,10,11];
				Config.BeltColumn=["hp","hp","hp","hp"];//Keep tons of health potions!
				Config.MinColumn=[2,2,2,2];
				Config.HealHP=99;
				Config.HealMP=99;
				Config.LifeChicken=30;
				Config.ManaChicken=0;
				Config.MercChicken=0;
				Config.UseHP=65;
				Config.UseMP=3;
				Config.UseRejuvHP=35;
				Config.PickRange=30;
				Config.MaxGameTime=3600;//Only run for an hour in case of failure
				Config.BossPriority=true;
				//Config.Leader="PapaBear";
				Scripts.LevelLeader=true;
				Scripts.LevelFollower=false;
			}
		},
		
	2: 	{
			SkillPoints: [130],//Howl
			StatPoints: [0,3,3,3,3],//Str+1,Vitality+4
			Update: function(){
				Config.AttackSkill=[0,0,0,0,0,0,0];
			}
		},
		
	3: 	{
			SkillPoints: [-1],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[0,0,0,0,0,0,0];
			}
		},
		
	4: 	{
			SkillPoints: [-1],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[0,0,0,0,0,0,0];
			}
		},

	5: 	{
			SkillPoints: [-1],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[0,0,0,0,0,0,0];
			}
		},

	6: 	{
			SkillPoints: [138],//Shout
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[0,0,0,0,0,0,0];
			}
		},

	7: 	{
			SkillPoints: [132,138],//Leap
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[0,132,0,0,0,0,0];
			}				
		},

	8: 	{
			SkillPoints: [137,138],//Taunt
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[0,132,0,0,0,0,0];
			}	
		},

	9: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.BeltColumn=["hp","hp","hp","rv"];
			}
		},

	10: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.MakeRunewords=true;
				//Weapon
				Config.Runewords.push([Runeword.Spirit,"Crystal Sword"]);
				Config.Runewords.push([Runeword.Spirit,"Broad Sword"]);
				Config.Runewords.push([Runeword.Spirit,"Claymore"]);
				Config.Runewords.push([Runeword.Spirit,"Bastard Sword"]);
				Config.Runewords.push([Runeword.Spirit,"Dacian Falx"]);
				Config.Runewords.push([Runeword.Spirit,"Gothic Sword"]);
				Config.Runewords.push([Runeword.HeartoftheOak,"Flail"]);
				//Armor
				Config.Runewords.push([Runeword.Myth,"Ring Mail"]);
				Config.Runewords.push([Runeword.Myth,"Breast Plate"]);
				Config.Runewords.push([Runeword.Myth,"Light Plate"]);
				Config.Runewords.push([Runeword.Myth,"Linked Mail"]);
				Config.Runewords.push([Runeword.Myth,"Cuirass"]);
				Config.Runewords.push([Runeword.Enigma,"Mage Plate"]);
				Config.Runewords.push([Runeword.Enigma,"Archon Plate"]);
				//Helm
				Config.Runewords.push([Runeword.Lore,"Jawbone Cap"]);
				Config.Runewords.push([Runeword.Lore,"Fanged Helm"]);
				Config.Runewords.push([Runeword.Lore,"Horned Helm"]);
				Config.Runewords.push([Runeword.Lore,"Assault Helmet"]);
				Config.Runewords.push([Runeword.Lore,"Avenger Guard"]);
				Config.Runewords.push([Runeword.Lore,"Jawbone Visor"]);
				Config.Runewords.push([Runeword.Lore,"Lion Helm"]);
				Config.Runewords.push([Runeword.Lore,"Rage Mask"]);
				Config.Runewords.push([Runeword.Lore,"Savage Helmet"]);
				Config.Runewords.push([Runeword.Lore,"Slayer Guard"]);
				Config.Runewords.push([Runeword.Lore,"Carnage Helm"]);
				Config.Runewords.push([Runeword.Lore,"Fury Visor"]);
				Config.Runewords.push([Runeword.Lore,"Destroyer Helm"]);
				Config.Runewords.push([Runeword.Lore,"Conqueror Crown"]);
				Config.Runewords.push([Runeword.Lore,"Guardian Crown"]);
				//Merc Gear
				Config.Runewords.push([Runeword.Insight,"Voulge"]);
				Config.Runewords.push([Runeword.Insight,"Poleaxe"]);
				Config.Runewords.push([Runeword.Insight,"Scythe"]);
				Config.Runewords.push([Runeword.Insight,"Halberd"]);
				Config.Runewords.push([Runeword.Insight,"War Scythe"]);
				Config.Runewords.push([Runeword.Insight,"Bill"]);
				Config.Runewords.push([Runeword.Insight,"Battle Scythe"]);
				Config.Runewords.push([Runeword.Insight,"Partizan"]);
				Config.Runewords.push([Runeword.Insight,"Bec De Corbin"]);
				Config.Runewords.push([Runeword.Insight,"Grim Scythe"]);
				Config.Runewords.push([Runeword.Insight,"Colossus Voulge"]);
				Config.Runewords.push([Runeword.Insight,"Thresher"]);
				Config.Runewords.push([Runeword.Insight,"Cryptic Axe"]);
				Config.Runewords.push([Runeword.Insight,"Great Poleaxe"]);
				Config.Runewords.push([Runeword.Insight,"Giant Thresher"]);
			}
		},

	11: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.MinColumn=[3,3,3,3];
			}
		},

	12: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[0,132,0,0,0,0,0];
			}
		},

	13: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[0,132,0,0,0,0,0];
			}	
		},

	14: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[0,132,0,0,0,0,0];
			}	
		},

	15: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[0,132,0,0,0,0,0];
			}	
		},

	16: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[0,132,0,0,0,0,0];	
			}	
		},

	17: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function(){
			}	
		},

	18: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[0,132,0,0,0,0,0];
			}	
		},

	19: 	{
			SkillPoints: [145],//Iron Skin
			StatPoints: [0,3,3,3,3],	
			Update: function(){
				Config.AttackSkill=[0,132,0,0,0,0,0];
			}
		},

	20: 	{
			SkillPoints: [146],//Battle Cry
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[0,132,0,0,0,0,0];
				Config.UseMerc=true;
			}
		},

	21: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.FindItem=true;
				Config.FindItemSwitch=1;
			}	
		},

	22: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[0,132,0,0,0,0,0];
			}	
		},

	23: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[0,132,0,0,0,0,0];
			}	
		},

	24: 	{
			SkillPoints: [149],//Battle Orders
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.Cubing=true;
			}
		},

	25: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.PickitFiles.splice(Config.PickitFiles.indexOf("AutoEquip/PreMerc.xpac.nip"),1);
			}	
		},

	26: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function(){
			}	
		},

	27: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[0,132,0,0,0,0,0];
			}	
		},

	28: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[0,132,0,0,0,0,0];
			}	
		},

	29: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],	
			Update: function(){
				Config.MinColumn=[4,4,4,4];
			}
		},

	30: 	{
			SkillPoints: [155,153,154,149],//Battle Command,Natural Resistance,War Cry
			StatPoints: [0,3,3,3,3],	
			Update: function(){
				Config.AttackSkill=[130,154,0,132,0,132,0];
			}
		},

	31: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.LowManaSkill=[132,132];
				Config.AttackSkill=[130,154,0,154,0,154,0];
			}
		},

	32: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,154,0,154,0,154,0];
			}
		},

	33: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,154,0,154,0,154,0];
			}
		},

	34: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,154,0,154,0,154,0];
			}
		},

	35: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,154,0,154,0,154,0];
			}
		},

	36: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,154,0,154,0,154,0];
			}
		},

	37: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,154,0,154,0,154,0];
			}
		},

	38: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,154,0,154,0,154,0];
			}
		},

	39: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,154,0,154,0,154,0];
			}
		},

	40: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.PickitFiles.splice(Config.PickitFiles.indexOf("EarlyGame.nip"),1);
			}
		},

	41: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,154,0,154,0,154,0];
			}
		},

	42: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,154,0,154,0,154,0];
			}
		},

	43: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,154,0,154,0,154,0];
			}
		},

	44: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,154,0,154,0,154,0];
			}
		},

	45: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,154,0,154,0,154,0];
			}
		},

	46: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,154,0,154,0,154,0];
			}
		},

	47: 	{
			SkillPoints: [154],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,154,0,154,0,154,0];
			}
		},

	48: 	{
			SkillPoints: [154],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,154,0,154,0,154,0];
			}
		},

	49: 	{
			SkillPoints: [154],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,154,0,154,0,154,0];
			}
		},

	50: 	{
			SkillPoints: [154],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.UseHP=80;
				Config.UseMP=50;
			}
		},

	51: 	{
			SkillPoints: [154],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,154,0,154,0,154,0];
			}
		},

	52: 	{
			SkillPoints: [154],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,154,0,154,0,154,0];
			}
		},

	53: 	{
			SkillPoints: [154],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,154,0,154,0,154,0];
			}
		},

	54: 	{
			SkillPoints: [154],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,154,0,154,0,154,0];
			}
		},

	55: 	{
			SkillPoints: [154],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,154,0,154,0,154,0];
			}
		},

	56: 	{
			SkillPoints: [154],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,154,0,154,0,154,0];
			}
		},

	57: 	{
			SkillPoints: [154],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,154,0,154,0,154,0];
			}
		},

	58: 	{
			SkillPoints: [154],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,154,0,154,0,154,0];
			}
		},

	59: 	{
			SkillPoints: [154],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,154,0,154,0,154,0];
			}
		},

	60: 	{
			SkillPoints: [154],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,154,0,154,0,154,0];
			}
		},

	61: 	{
			SkillPoints: [154],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,154,0,154,0,154,0];
			}
		},

	62: 	{
			SkillPoints: [154],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,154,0,154,0,154,0];
			}
		},

	63: 	{
			SkillPoints: [154],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,154,0,154,0,154,0];
			}
		},

	64: 	{
			SkillPoints: [154],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,154,0,154,0,154,0];
			}
		},

	65: 	{
			SkillPoints: [154],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,154,0,154,0,154,0];
			}
		},

	66: 	{
			SkillPoints: [130],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,154,0,154,0,154,0];
			}
		},

	67: 	{
			SkillPoints: [130],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,154,0,154,0,154,0];
			}
		},

	68: 	{
			SkillPoints: [130],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,154,0,154,0,154,0];
			}
		},

	69: 	{
			SkillPoints: [130],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.UseRejuvHP=40;
				Config.LifeChicken=35;
			}
		},

	70: 	{
			SkillPoints: [130],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.PickitFiles.splice(Config.PickitFiles.indexOf("MidGame.nip"),1);
				//Make Eth Insight base Weapon
				Config.Recipes.push([Recipe.Socket.Weapon,"Bill",Roll.Eth]);
				Config.Recipes.push([Recipe.Socket.Weapon,"Battle Scythe",Roll.Eth]);
				Config.Recipes.push([Recipe.Socket.Weapon,"Partizan",Roll.Eth]);
				Config.Recipes.push([Recipe.Socket.Weapon,"Bec De Corbin",Roll.Eth]);
				Config.Recipes.push([Recipe.Socket.Weapon,"Grim Scythe",Roll.Eth]);
				Config.Recipes.push([Recipe.Socket.Weapon,"Colossus Voulge",Roll.Eth]);
				Config.Recipes.push([Recipe.Socket.Weapon,"Thresher",Roll.Eth]);
				Config.Recipes.push([Recipe.Socket.Weapon,"Cryptic Axe",Roll.Eth]);
				Config.Recipes.push([Recipe.Socket.Weapon,"Great Poleaxe",Roll.Eth]);
				Config.Recipes.push([Recipe.Socket.Weapon,"Giant Thresher",Roll.Eth]);
				//Make Spirit or Enigma base
				Config.Recipes.push([Recipe.Socket.Armor,"Light Plate",Roll.NonEth]);
				Config.Recipes.push([Recipe.Socket.Armor,"Mage Plate",Roll.NonEth]);
				Config.Recipes.push([Recipe.Socket.Armor,"Archon Plate",Roll.NonEth]);
				Config.Recipes.push([Recipe.Reroll.Magic,"Grand Charm"]);
				Config.Recipes.push([Recipe.Caster.Amulet]);
				Config.Recipes.push([Recipe.Caster.Ring]);
			}
		},

	71: 	{
			SkillPoints: [130],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,154,0,154,0,154,0];
			}
		},

	72: 	{
			SkillPoints: [130],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,154,0,154,0,154,0];
			}
		},

	73: 	{
			SkillPoints: [130],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,154,0,154,0,154,0];
			}
		},

	74: 	{
			SkillPoints: [130],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,154,0,154,0,154,0];
			}
		},

	75: 	{
			SkillPoints: [130],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,154,0,154,0,154,0];
			}
		},

	76: 	{
			SkillPoints: [130],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,154,0,154,0,154,0];
			}
		},

	77: 	{
			SkillPoints: [130],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,154,0,154,0,154,0];
			}
		},

	78: 	{
			SkillPoints: [130],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,154,0,154,0,154,0];
			}
		},

	79: 	{
			SkillPoints: [130],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,154,0,154,0,154,0];
			}
		},

	80: 	{
			SkillPoints: [130],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,154,0,154,0,154,0];
			}
		},

	81: 	{
			SkillPoints: [130],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,154,0,154,0,154,0];
			}
		},

	82: 	{
			SkillPoints: [130],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,154,0,154,0,154,0];
			}
		},

	83: 	{
			SkillPoints: [130],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,154,0,154,0,154,0];
			}
		},

	84: 	{
			SkillPoints: [130],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,154,0,154,0,154,0];
			}
		},

	85: 	{
			SkillPoints: [146],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,154,0,154,0,154,0];
			}
		},

	86: 	{
			SkillPoints: [146],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,154,0,154,0,154,0];
			}
		},

	87: 	{
			SkillPoints: [146],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,154,0,154,0,154,0];
			}
		},

	88: 	{
			SkillPoints: [146],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,154,0,154,0,154,0];
			}
		},

	89: 	{
			SkillPoints: [146],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,154,0,154,0,154,0];
			}
		},

	90: 	{
			SkillPoints: [146],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,154,0,154,0,154,0];
			}
		},

	91: 	{
			SkillPoints: [146],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,154,0,154,0,154,0];
			}
		},

	92: 	{
			SkillPoints: [146],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,154,0,154,0,154,0];
			}
		},

	93: 	{
			SkillPoints: [146],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,154,0,154,0,154,0];
			}
		},

	94: 	{
			SkillPoints: [146],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,154,0,154,0,154,0];
			}
		},

	95: 	{
			SkillPoints: [146],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,154,0,154,0,154,0];
			}
		},

	96: 	{
			SkillPoints: [146],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,154,0,154,0,154,0];
			}
		},

	97: 	{
			SkillPoints: [146],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,154,0,154,0,154,0];
			}
		},

	98: 	{
			SkillPoints: [146],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,154,0,154,0,154,0];
			}
		},

	99: 	{
			SkillPoints: [146],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,154,0,154,0,154,0];
			}
		}
};
