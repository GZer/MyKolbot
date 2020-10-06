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
				Config.PickitFiles.push("ColdRunes.nip");
				Config.PickitFiles.push("AutoEquip/Cold.xpac.nip");
				//Config.PickitFiles.push("AutoEquip/PreMerc.xpac.nip");
				Config.PickitFiles.push("AutoEquip/Merc.xpac.nip");
				Config.Inventory[0]=[1,1,1,1,1,1,1,1,1,1];
				Config.Inventory[1]=[1,1,1,1,1,1,1,1,1,1];
				Config.Inventory[2]=[1,1,1,1,1,1,1,1,1,1];
				Config.Inventory[3]=[1,1,1,1,1,1,1,1,1,1];
				Config.AutoEquip=true;
				Config.MiniShopBot=true;
				Config.LowGold=15000;
				Config.UseMerc=true;
				Config.OpenChests=false;
				Config.ClearType=0;//Monster spectype to kill in level clear scripts(0=all)
				Config.LogExperience=true;//Print experience statistics in the manager.
				Config.ItemInfo=true;//Log stashed, skipped (due to no space) or sold items.
				Config.StashGold=200;//Minimum amount of gold to stash.
				Config.AttackSkill=[36,36,36,36,36,0,0];
				Config.LowManaSkill=[0,0];
				Config.PublicMode=2;
				Config.ScanShrines=[17,1,2,3,15,13,12,8,9,10,11];
				Config.BeltColumn=["hp","mp","mp","mp"];//Keep tons of health potions!
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
			SkillPoints: [37],//Warmth
			StatPoints: [0,1,1,3,3],//Str,Vit + 1 & Energy +2
			Update: function(){
				Config.StaticList=["Countess","Andariel","Radament","Duriel","Mephisto","Izual","Diablo","Shenk","Baal"];
			}
		},
		
	3: 	{
			SkillPoints: [40],//Frozen Armor
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[36,36,36,36,36,0,0];
			}
		},
		
	4: 	{
			SkillPoints: [39],//Ice Bolt
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[39,36,36,39,39,39,39];
			}
		},

	5: 	{
			SkillPoints: [38],//Charged Bolt
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[39,36,36,39,39,38,38];
				Config.Dodge=true;
				Config.DodgeRange=10;
				Config.DodgeHP=50;
			}
		},

	6: 	{
			SkillPoints: [42],//Static
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[39,36,36,39,39,38,38];
			}
		},

	7: 	{
			SkillPoints: [43],//Telekinesis
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[39,36,36,39,39,38,38];		
			}				
		},

	8: 	{
			SkillPoints: [45],//Ice Blast
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[39,45,45,45,45,38,38];
			}	
		},

	9: 	{
			SkillPoints: [45],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.CastStatic=20;
			}
		},

	10: 	{
			SkillPoints: [45],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.DodgeRange=15;
				Config.DodgeHP=40;
			}
		},

	11: 	{
			SkillPoints: [45],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.MinColumn=[3,3,3,3];
			}
		},

	12: 	{
			SkillPoints: [49],//Lightning
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[39,45,45,45,45,49,49];
			}
		},

	13: 	{
			SkillPoints: [45],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[42,45,45,45,45,49,49];
			}	
		},

	14: 	{
			SkillPoints: [45],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[42,45,45,45,45,49,49];
			}	
		},

	15: 	{
			SkillPoints: [45],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.MakeRunewords=true;
				Config.MercWatch=false;
				//Weapon
				Config.Runewords.push([Runeword.Spirit,"Crystal Sword"]);
				Config.Runewords.push([Runeword.Spirit,"Broad Sword"]);
				//Armor
				Config.Runewords.push([Runeword.Stealth,"Quilted Armor"]);
				Config.Runewords.push([Runeword.Stealth,"Leather Armor"]);
				Config.Runewords.push([Runeword.Stealth,"Hard Leather Armor"]);
				Config.Runewords.push([Runeword.Stealth,"Studded Leather"]);
				Config.Runewords.push([Runeword.Stealth,"Ring Mail"]);
				Config.Runewords.push([Runeword.Stealth,"Breast Plate"]);
				Config.Runewords.push([Runeword.Stealth,"Light Plate"]);
				Config.Runewords.push([Runeword.Enlightenment,"Light Plate"]);
				Config.Runewords.push([Runeword.Enlightenment,"Mage Plate"]);
				Config.Runewords.push([Runeword.ChainsofHonor,"Archon Plate"]);
				//Helm
				Config.Runewords.push([Runeword.Lore,"Cap"]);
				Config.Runewords.push([Runeword.Lore,"Skull Cap"]);
				Config.Runewords.push([Runeword.Lore,"Helm"]);
				Config.Runewords.push([Runeword.Lore,"Mask"]);
				Config.Runewords.push([Runeword.Lore,"Bone Helm"]);
				Config.Runewords.push([Runeword.Lore,"War Hat"]);
				Config.Runewords.push([Runeword.Lore,"Sallet"]);
				Config.Runewords.push([Runeword.Lore,"Casque"]);
				Config.Runewords.push([Runeword.Lore,"Death Mask"]);
				Config.Runewords.push([Runeword.Lore,"Grim Helm"]);
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
			SkillPoints: [45],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.UseMP=20;
			}	
		},

	17: 	{
			SkillPoints: [45],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[42,45,45,45,45,49,49];
			}	
		},

	18: 	{
			SkillPoints: [54],//Teleport
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.LowManaSkill=[39,39];
				Config.DodgeRange=20;
				Config.DodgeHP=75;
			}	
		},

	19: 	{
			SkillPoints: [55],//Glacial Spike
			StatPoints: [0,1,1,3,3],	
			Update: function(){
				Config.AttackSkill=[42,45,45,55,55,53,49];
			}
		},

	20: 	{
			SkillPoints: [53],//Chain Lightning
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[42,45,45,55,55,53,49];
			}
		},

	21: 	{
			SkillPoints: [55],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[42,45,45,55,55,53,49];
			}	
		},

	22: 	{
			SkillPoints: [55],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[42,45,45,55,55,53,49];
			}	
		},

	23: 	{
			SkillPoints: [44],//Frost Nova
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[42,45,45,55,55,53,49];
			}	
		},

	24: 	{
			SkillPoints: [59],//Blizzard
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[42,59,45,59,55,53,49];
				Config.DodgeRange=20;
				Config.DodgeHP=95;
			}
		},

	25: 	{
			SkillPoints: [58],//Energy Shield
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.PickitFiles.splice(Config.PickitFiles.indexOf("AutoEquip/PreMerc.xpac.nip"),1);
			}	
		},

	26: 	{
			SkillPoints: [59],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[42,59,45,59,55,53,49];
			}	
		},

	27: 	{
			SkillPoints: [59],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.BeltColumn=["hp","rv","mp","mp"];
			}	
		},

	28: 	{
			SkillPoints: [59],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[42,59,45,59,55,53,49];
			}	
		},

	29: 	{
			SkillPoints: [59],
			StatPoints: [0,1,1,3,3],	
			Update: function(){
				Config.MinColumn=[4,4,4,4];
			}
		},

	30: 	{
			SkillPoints: [65],//Cold Mastery
			StatPoints: [0,1,1,3,3],	
			Update: function(){
				Config.AttackSkill=[42,59,45,59,55,53,49];
			}
		},

	31: 	{
			SkillPoints: [64],//Frozen Orb
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[64,59,45,59,55,53,49];
			}
		},

	32: 	{
			SkillPoints: [59],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[64,59,45,59,55,53,49];
			}
		},

	33: 	{
			SkillPoints: [59],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[64,59,45,59,55,53,49];
			}
		},

	34: 	{
			SkillPoints: [59],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[64,59,45,59,55,53,49];
			}
		},

	35: 	{
			SkillPoints: [59],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[64,59,45,59,55,53,49];
			}
		},

	36: 	{
			SkillPoints: [59],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[64,59,45,59,55,53,49];
			}
		},

	37: 	{
			SkillPoints: [59],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[64,59,45,59,55,53,49];
			}
		},

	38: 	{
			SkillPoints: [59],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[64,59,45,59,55,53,49];
			}
		},

	39: 	{
			SkillPoints: [59],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[64,59,45,59,55,53,49];
			}
		},

	40: 	{
			SkillPoints: [59],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.LowGold=30000;
			}
		},

	41: 	{
			SkillPoints: [59],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[64,59,45,59,55,53,49];
			}
		},

	42: 	{
			SkillPoints: [59],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[64,59,45,59,55,53,49];
			}
		},

	43: 	{
			SkillPoints: [59],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[64,59,45,59,55,53,49];
			}
		},

	44: 	{
			SkillPoints: [59],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[64,59,45,59,55,53,49];
			}
		},

	45: 	{
			SkillPoints: [59],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.PickitFiles.splice(Config.PickitFiles.indexOf("EarlyGame.nip"),1);
			}
		},

	46: 	{
			SkillPoints: [65],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[64,59,45,59,55,53,49];
			}
		},

	47: 	{
			SkillPoints: [65],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[64,59,45,59,55,53,49];
			}
		},

	48: 	{
			SkillPoints: [65],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[64,59,45,59,55,53,49];
			}
		},

	49: 	{
			SkillPoints: [65],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[64,59,45,59,55,53,49];
			}
		},

	50: 	{
			SkillPoints: [65],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.UseHP=80;
				Config.UseMP=50;
			}
		},

	51: 	{
			SkillPoints: [65],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.CastStatic=50;
			}
		},

	52: 	{
			SkillPoints: [65],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[64,59,45,59,55,53,49];
			}
		},

	53: 	{
			SkillPoints: [65],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[64,59,45,59,55,53,49];
			}
		},

	54: 	{
			SkillPoints: [65],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[64,59,45,59,55,53,49];
			}
		},

	55: 	{
			SkillPoints: [65],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[64,59,45,59,55,53,49];
			}
		},

	56: 	{
			SkillPoints: [65],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[64,59,45,59,55,53,49];
			}
		},

	57: 	{
			SkillPoints: [65],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[64,59,45,59,55,53,49];
			}
		},

	58: 	{
			SkillPoints: [65],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[64,59,45,59,55,53,49];
			}
		},

	59: 	{
			SkillPoints: [65],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[64,59,45,59,55,53,49];
			}
		},

	60: 	{
			SkillPoints: [65,59,45,55],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[64,59,45,59,55,53,49];
			}
		},

	61: 	{
			SkillPoints: [65,59,45,55],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[64,59,45,59,55,53,49];
			}
		},

	62: 	{
			SkillPoints: [65,59,45,55],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[64,59,45,59,55,53,49];
			}
		},

	63: 	{
			SkillPoints: [65,59,45,55],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[64,59,45,59,55,53,49];
			}
		},

	64: 	{
			SkillPoints: [65,59,45,55],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[64,59,45,59,55,53,49];
			}
		},

	65: 	{
			SkillPoints: [65,59,45,55],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[64,59,45,59,55,53,49];
			}
		},

	66: 	{
			SkillPoints: [65,59,45,55],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[64,59,45,59,55,53,49];
			}
		},

	67: 	{
			SkillPoints: [65,59,45,55],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[64,59,45,59,55,53,49];
			}
		},

	68: 	{
			SkillPoints: [65,59,45,55],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[64,59,45,59,55,53,49];
			}
		},

	69: 	{
			SkillPoints: [65,59,45,55],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.UseRejuvHP=40;
				Config.LifeChicken=20;
			}
		},

	70: 	{
			SkillPoints: [65,59,45,55],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.PickitFiles.splice(Config.PickitFiles.indexOf("MidGame.nip"),1);
				Config.Cubing=true;
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
				Config.Recipes.push([Recipe.Socket.Armor,"Light Plate",Roll.NonEth]);
				Config.Recipes.push([Recipe.Socket.Armor,"Mage Plate",Roll.NonEth]);
				Config.Recipes.push([Recipe.Socket.Armor,"Archon Plate",Roll.NonEth]);
				//Spirit or Splendor base
				Config.Recipes.push([Recipe.Socket.Armor,"Monarch",Roll.NonEth]);
				//Misc
				Config.Recipes.push([Recipe.Reroll.Magic,"Grand Charm"]);
				Config.Recipes.push([Recipe.Caster.Amulet]);
				Config.Recipes.push([Recipe.Caster.Ring]);
			}
		},

	71: 	{
			SkillPoints: [55],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[64,59,45,59,55,53,49];
			}
		},

	72: 	{
			SkillPoints: [55],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[64,59,45,59,55,53,49];
			}
		},

	73: 	{
			SkillPoints: [55],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[64,59,45,59,55,53,49];
			}
		},

	74: 	{
			SkillPoints: [55],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[64,59,45,59,55,53,49];
			}
		},

	75: 	{
			SkillPoints: [55],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[64,59,45,59,55,53,49];
			}
		},

	76: 	{
			SkillPoints: [55],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[64,59,45,59,55,53,49];
			}
		},

	77: 	{
			SkillPoints: [55],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[64,59,45,59,55,53,49];
			}
		},

	78: 	{
			SkillPoints: [55],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[64,59,45,59,55,53,49];
			}
		},

	79: 	{
			SkillPoints: [55],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[64,59,45,59,55,53,49];
			}
		},

	80: 	{
			SkillPoints: [55],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.KeepRunewords.push("[Type] == Shield || [Type] == AuricShields # [FCR] == 35");
				Config.KeepRunewords.push("[Type] == Sword # [FCR] == 35");
			}
		},

	81: 	{
			SkillPoints: [45],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[64,59,45,59,55,53,49];
			}
		},

	82: 	{
			SkillPoints: [45],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[64,59,45,59,55,53,49];
			}
		},

	83: 	{
			SkillPoints: [45],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[64,59,45,59,55,53,49];
			}
		},

	84: 	{
			SkillPoints: [45],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[64,59,45,59,55,53,49];
			}
		},

	85: 	{
			SkillPoints: [45],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.LowGold=50000;
			}
		},

	86: 	{
			SkillPoints: [45],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[64,59,45,59,55,53,49];
			}
		},

	87: 	{
			SkillPoints: [45],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[64,59,45,59,55,53,49];
			}
		},

	88: 	{
			SkillPoints: [45],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[64,59,45,59,55,53,49];
			}
		},

	89: 	{
			SkillPoints: [45],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[64,59,45,59,55,53,49];
			}
		},

	90: 	{
			SkillPoints: [45],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[64,59,45,59,55,53,49];
			}
		},

	91: 	{
			SkillPoints: [45],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[64,59,45,59,55,53,49];
			}
		},

	92: 	{
			SkillPoints: [45],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[64,59,45,59,55,53,49];
			}
		},

	93: 	{
			SkillPoints: [39],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[64,59,45,59,55,53,49];
			}
		},

	94: 	{
			SkillPoints: [39],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[64,59,45,59,55,53,49];
			}
		},

	95: 	{
			SkillPoints: [39],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[64,59,45,59,55,53,49];
			}
		},

	96: 	{
			SkillPoints: [39],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[64,59,45,59,55,53,49];
			}
		},

	97: 	{
			SkillPoints: [39],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[64,59,45,59,55,53,49];
			}
		},

	98: 	{
			SkillPoints: [39],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[64,59,45,59,55,53,49];
			}
		},

	99: 	{
			SkillPoints: [39],
			StatPoints: [0,1,1,3,3],
			Update: function(){
				Config.AttackSkill=[64,59,45,59,55,53,49];
			}
		}
};
