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
				Config.PickitFiles.push("TornadoRunes.nip");
				Config.PickitFiles.push("AutoEquip/Tornado.xpac.nip");
				Config.PickitFiles.push("AutoEquip/PreMerc.xpac.nip");
				Config.PickitFiles.push("AutoEquip/Merc.xpac.nip");
				Config.Inventory[0]=[1,1,1,1,1,1,1,1,1,1];
				Config.Inventory[1]=[1,1,1,1,1,1,1,1,1,1];
				Config.Inventory[2]=[1,1,1,1,1,1,1,1,1,1];
				Config.Inventory[3]=[1,1,1,1,1,1,1,1,1,1];
				Config.AutoEquip=true;
				Config.OpenChests=false;
				Config.ClearType=0;//Monster spectype to kill in level clear scripts(0=all)
				Config.LogExperience=true;//Print experience statistics in the manager.
				Config.ItemInfo=true;//Log stashed, skipped (due to no space) or sold items.
				Config.StashGold=200;//Minimum amount of gold to stash.
				Config.AttackSkill=[0,0,0,0,0,0,0];
				Config.LowManaSkill=[0,0];
				Config.PublicMode=2;
				Config.ScanShrines=[17,1,2,3,15,13,12,8,9,10,11];
				Config.BeltColumn=["hp","hp","hp","hp"];//Keep tons of health potions!
				Config.MinColumn=[2,2,2,2];
				Config.HealHP=99;
				Config.HealMP=99;
				Config.LifeChicken=15;
				Config.ManaChicken=0;
				Config.MercChicken=0;
				Config.TownHP=30;
				Config.UseHP=60;
				Config.UseMP=3;
				Config.UseRejuvHP=35;
				Config.PickRange=60;
				Config.BossPriority=true;
				Config.Leader="Zer_Shout";
				Scripts.LevelLeader=false;
				Scripts.LevelFollower=true;
			}
		},
		
	2: 	{
			SkillPoints: [221],//Raven
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[0,0,0,0,0,0,0];
			}
		},
	3: 	{
			SkillPoints: [222],//Poison Creeper
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.SummonVine=1;
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
			SkillPoints: [226],//Oak Sage
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.SummonSpirit=1;
			}
		},

	7: 	{
			SkillPoints: [230,226],//Arctic Blast
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[230,230,0,230,0,0,0];
			}
		},

	8: 	{
			SkillPoints: [226],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[230,230,0,230,0,0,0];
			}
		},

	9: 	{
			SkillPoints: [226],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[230,230,0,230,0,0,0];
			}
		},

	10: 	{
			SkillPoints: [226],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[230,230,0,230,0,0,0];
			}
		},

	11: 	{
			SkillPoints: [226],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.MinColumn=[3,3,3,3];
			}
		},

	12: 	{
			SkillPoints: [235,226],//Cyclone Armor
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[230,230,0,230,0,0,0];
			}
		},

	13: 	{
			SkillPoints: [226],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[230,230,0,230,0,0,0];
			}
		},

	14: 	{
			SkillPoints: [226],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[230,230,0,230,0,0,0];
			}
		},

	15: 	{
			SkillPoints: [226],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.MakeRunewords=true;
				Config.UseMerc=true;
				//Weapon
				Config.Runewords.push([Runeword.Spirit,"Crystal Sword"]);
				Config.Runewords.push([Runeword.Spirit,"Broad Sword"]);
				Config.Runewords.push([Runeword.HeartoftheOak,"Flail"]);
				//Armor
				Config.Runewords.push([Runeword.Stealth,"Quilted Armor"]);
				Config.Runewords.push([Runeword.Stealth,"Leather Armor"]);
				Config.Runewords.push([Runeword.Stealth,"Hard Leather Armor"]);
				Config.Runewords.push([Runeword.Stealth,"Studded Leather"]);
				Config.Runewords.push([Runeword.Stealth,"Ring Mail"]);
				Config.Runewords.push([Runeword.Stealth,"Breast Plate"]);
				Config.Runewords.push([Runeword.Stealth,"Light Plate"]);
				Config.Runewords.push([Runeword.Enigma,"Mage Plate"]);
				Config.Runewords.push([Runeword.Enigma,"Archon Plate"]);
				//Helm
				Config.Runewords.push([Runeword.Lore,"Wolf Head"]);
				Config.Runewords.push([Runeword.Lore,"Hawk Helm"]);
				Config.Runewords.push([Runeword.Lore,"Antlers"]);
				Config.Runewords.push([Runeword.Lore,"Falcon Mask"]);
				Config.Runewords.push([Runeword.Lore,"Spirit Mask"]);
				Config.Runewords.push([Runeword.Lore,"Alpha Helm"]);
				Config.Runewords.push([Runeword.Lore,"Griffon Headdress"]);
				Config.Runewords.push([Runeword.Lore,"Hunter's Guise"]);
				Config.Runewords.push([Runeword.Lore,"Sacred Feathers"]);
				Config.Runewords.push([Runeword.Lore,"Totemic Mask"]);
				Config.Runewords.push([Runeword.Lore,"Blood Spirit"]);
				Config.Runewords.push([Runeword.Lore,"Sun Spirit"]);
				Config.Runewords.push([Runeword.Lore,"Earth Spirit"]);
				Config.Runewords.push([Runeword.Lore,"Sky Spirit"]);
				Config.Runewords.push([Runeword.Lore,"Dream Spirit"]);
				//Shield
				Config.Runewords.push([Runeword.Splendor,"Round Shield"]);
				Config.Runewords.push([Runeword.Splendor,"Grim Shield"]);
				Config.Runewords.push([Runeword.Spirit,"Monarch"]);
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

	16: 	{
			SkillPoints: [226],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[230,230,0,230,0,0,0];
			}
		},

	17: 	{
			SkillPoints: [226],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[230,230,0,230,0,0,0];
			}
		},

	18: 	{
			SkillPoints: [240,226],//Twister
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[0,240,0,240,0,0,0];
			}
		},

	19: 	{
			SkillPoints: [226],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[0,240,0,240,0,0,0];
			}
		},

	20: 	{
			SkillPoints: [226],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[0,240,0,240,0,0,0];
			}
		},

	21: 	{
			SkillPoints: [226],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.BeltColumn=["hp","hp","hp","rv"];
			}
		},

	22: 	{
			SkillPoints: [226],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[0,240,0,240,0,0,0];
			}
		},

	23: 	{
			SkillPoints: [226],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[0,240,0,240,0,0,0];
			}
		},

	24: 	{
			SkillPoints: [245],//Tornado
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	25: 	{
			SkillPoints: [245],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.PickitFiles.splice(Config.PickitFiles.indexOf("AutoEquip/PreMerc.xpac.nip"),1);
			}
		},

	26: 	{
			SkillPoints: [245],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	27: 	{
			SkillPoints: [245],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	28: 	{
			SkillPoints: [245],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	29: 	{
			SkillPoints: [245],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.MinColumn=[4,4,4,4];
			}
		},

	30: 	{
			SkillPoints: [250,245],//Hurricane
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	31: 	{
			SkillPoints: [245],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	32: 	{
			SkillPoints: [245],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	33: 	{
			SkillPoints: [245],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	34: 	{
			SkillPoints: [245],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	35: 	{
			SkillPoints: [245],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	36: 	{
			SkillPoints: [245],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	37: 	{
			SkillPoints: [245],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	38: 	{
			SkillPoints: [245],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	39: 	{
			SkillPoints: [245],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	40: 	{
			SkillPoints: [245],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.PickitFiles.splice(Config.PickitFiles.indexOf("EarlyGame.nip"),1);
			}
		},

	41: 	{
			SkillPoints: [245],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	42: 	{
			SkillPoints: [245],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	43: 	{
			SkillPoints: [245],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	44: 	{
			SkillPoints: [245],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	45: 	{
			SkillPoints: [226],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	46: 	{
			SkillPoints: [226],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	47: 	{
			SkillPoints: [250],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	48: 	{
			SkillPoints: [250],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	49: 	{
			SkillPoints: [250],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	50: 	{
			SkillPoints: [250],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.UseHP=80;
				Config.UseMP=50;
			}
		},

	51: 	{
			SkillPoints: [250],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	52: 	{
			SkillPoints: [250],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	53: 	{
			SkillPoints: [250],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	54: 	{
			SkillPoints: [250],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	55: 	{
			SkillPoints: [250],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	56: 	{
			SkillPoints: [250],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	57: 	{
			SkillPoints: [250],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	58: 	{
			SkillPoints: [250],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	59: 	{
			SkillPoints: [250],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	60: 	{
			SkillPoints: [250],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	61: 	{
			SkillPoints: [250],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	62: 	{
			SkillPoints: [250],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	63: 	{
			SkillPoints: [250],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	64: 	{
			SkillPoints: [250],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	65: 	{
			SkillPoints: [250],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	66: 	{
			SkillPoints: [235],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	67: 	{
			SkillPoints: [235],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	68: 	{
			SkillPoints: [235],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	69: 	{
			SkillPoints: [235],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.UseRejuvHP=40;
				Config.TownHP=0;
				Config.LifeChicken=30;
			}
		},

	70: 	{
			SkillPoints: [235],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.PickitFiles.splice(Config.PickitFiles.indexOf("MidGame.nip"),1);
				//Eth Merc Weapon
				Config.Recipes.push([Recipe.Socket.Weapon,"Bill",Roll.Eth]);
				Config.Recipes.push([Recipe.Socket.Weapon,"Partizan",Roll.Eth]);
				Config.Recipes.push([Recipe.Socket.Weapon,"Battle Scythe",Roll.Eth]);
				Config.Recipes.push([Recipe.Socket.Weapon,"Bec De Corbin",Roll.Eth]);
				Config.Recipes.push([Recipe.Socket.Weapon,"Grim Scythe",Roll.Eth]);
				Config.Recipes.push([Recipe.Socket.Weapon,"Colossus Voulge",Roll.Eth]);
				Config.Recipes.push([Recipe.Socket.Weapon,"Thresher",Roll.Eth]);
				Config.Recipes.push([Recipe.Socket.Weapon,"Cryptic Axe",Roll.Eth]);
				Config.Recipes.push([Recipe.Socket.Weapon,"Great Poleaxe",Roll.Eth]);
				Config.Recipes.push([Recipe.Socket.Weapon,"Giant Thresher",Roll.Eth]);
				//Enlightenment or Chains of Honor
				Config.Recipes.push([Recipe.Socket.Armor,"Mage Plate",Roll.NonEth]);
				Config.Recipes.push([Recipe.Socket.Armor,"Archon Plate",Roll.NonEth]);
				//Spirit base
				Config.Recipes.push([Recipe.Socket.Armor,"Monarch",Roll.NonEth]);
				//Misc
				Config.Recipes.push([Recipe.Reroll.Magic,"Grand Charm"]);
				Config.Recipes.push([Recipe.Caster.Amulet]);
				Config.Recipes.push([Recipe.Caster.Ring]);
			}
		},

	71: 	{
			SkillPoints: [235],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	72: 	{
			SkillPoints: [235],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	73: 	{
			SkillPoints: [235],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	74: 	{
			SkillPoints: [235],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	75: 	{
			SkillPoints: [235],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	76: 	{
			SkillPoints: [235],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	77: 	{
			SkillPoints: [235],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	78: 	{
			SkillPoints: [235],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	79: 	{
			SkillPoints: [235],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	80: 	{
			SkillPoints: [235],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	81: 	{
			SkillPoints: [235],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	82: 	{
			SkillPoints: [235],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	83: 	{
			SkillPoints: [235],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	84: 	{
			SkillPoints: [235],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	85: 	{
			SkillPoints: [240],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	86: 	{
			SkillPoints: [240],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	87: 	{
			SkillPoints: [240],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	88: 	{
			SkillPoints: [240],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	89: 	{
			SkillPoints: [240],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	90: 	{
			SkillPoints: [240],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	91: 	{
			SkillPoints: [240],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	92: 	{
			SkillPoints: [240],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	93: 	{
			SkillPoints: [240],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	94: 	{
			SkillPoints: [240],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	95: 	{
			SkillPoints: [240],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	96: 	{
			SkillPoints: [240],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	97: 	{
			SkillPoints: [240],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	98: 	{
			SkillPoints: [240],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		},

	99: 	{
			SkillPoints: [240],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[240,245,245,245,245,230,230];
			}
		}
};
