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
if(!isIncluded("common/LevelTown.js")){include("common/LevelTown.js");};

var AutoBuildTemplate={

	1: 	{
			Update: function(){
				Config.PickitFiles.push("LateGame.nip");
				Config.PickitFiles.push("MidGame.nip");
				Config.PickitFiles.push("EarlyGame.nip");
				Config.PickitFiles.push("SingerRunes.nip");
				Config.PickitFiles.push("AutoEquip/Singer.xpac.nip");
				//Don't Gamble low level Rings/Amulets
				Config.GambleItems.splice(Config.GambleItems.indexOf("Amulet"),1);
				Config.GambleItems.splice(Config.GambleItems.indexOf("Ring"),1);
				//High Resistance or Skill Uniques
				Config.GambleItems.push("SkullCap");
				Config.GambleItems.push("AncientArmor");
				Config.GambleItems.push("GothicShield");
				Config.GambleItems.push("LightPlate");
				Config.GambleItems.push("Sash");
				Config.GambleItems.push("Belt");
				//Life Steal Merc Uniques				
				Config.GambleItems.push("Brandistock");
				Config.GambleItems.push("Poleaxe");
				Config.GambleItems.push("Crown");
				Config.GambleItems.push("BoneHelm");
				Config.GambleItems.push("QuiltedArmor");
				Config.GambleItems.push("PlateMail");
				//Build Specific
				Config.GambleItems.push("LightGauntlets");
				Config.GambleItems.push("Claymore");
				Config.GambleItems.push("HeavyBoots");
				Config.PickitFiles.push("AutoEquip/PreMercLance.xpac.nip");
				Config.PickitFiles.push("AutoEquip/Merc.xpac.nip");
				Config.PickitFiles.push("AutoEquip/MercLance.xpac.nip");
				Config.Inventory[0]=[1,1,1,1,1,1,1,1,1,1];
				Config.Inventory[1]=[1,1,1,1,1,1,1,1,1,1];
				Config.Inventory[2]=[1,1,1,1,1,1,1,1,1,1];
				Config.Inventory[3]=[1,1,1,1,1,1,1,1,1,1];
				Config.AutoEquip=true;
				Config.MiniShopBot=true;
				Config.LowGold=250000;
				Config.UseMerc=true;
				Config.OpenChests=true;
				Config.ClearType=0;//Monster spectype to kill in level clear scripts(0=all)
				Config.LogExperience=true;//Print experience statistics in the manager.
				Config.ItemInfo=true;//Log stashed,skipped (due to no space) or sold items.
				Config.StashGold=200;//Minimum amount of gold to stash.
				Config.AttackSkill=[0,0,0,0,0,0,0];
				Config.LowManaSkill=[0,0];
				Config.PublicMode=3;
				Config.ScanShrines=[17,1,2,15,6,7,12,14,8,9,10,11];
				Config.BeltColumn=["hp","hp","hp","hp"];//Keep tons of health potions!
				Config.MinColumn=[2,2,2,2];
				Config.HealHP=99;
				Config.HealMP=99;
				Config.LifeChicken=15;
				Config.ManaChicken=0;
				Config.MercChicken=0;
				Config.TownHP=30;
				Config.UseHP=60;
				Config.UseMP=10;
				Config.UseRejuvHP=35;
				Config.PickRange=30;
				Config.MaxGameTime=3600;//Only run for an hour in case of failure
				Config.BossPriority=true;
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
			SkillPoints: [131],//Find Potion
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[131,0,0,0,0,0,0];
			}
		},
		
	4: 	{
			SkillPoints: [-1],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[131,0,0,0,0,0,0];
			}
		},

	5: 	{
			SkillPoints: [-1],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[131,0,0,0,0,0,0];
			}
		},

	6: 	{
			SkillPoints: [132],//Leap
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[131,132,0,0,0,0,0];
			}
		},

	7: 	{
			SkillPoints: [138],//Shout
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[131,132,0,0,0,0,0];
			}				
		},

	8: 	{
			SkillPoints: [137],//Taunt
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[131,132,0,0,0,0,0];
			}	
		},

	9: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.BeltColumn=["hp","hp","mp","rv"];
			}
		},

	10: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[131,132,0,0,0,0,0];
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
			SkillPoints: [142],//Find Item
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}
		},

	13: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}	
		},

	14: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}	
		},

	15: 	{
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

	16: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];	
			}	
		},

	17: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}	
		},

	18: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}	
		},

	19: 	{
			SkillPoints: [145],//Iron Skin
			StatPoints: [0,3,3,3,3],	
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}
		},

	20: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.Cubing=true;
			}
		},

	21: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}	
		},

	22: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}	
		},

	23: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}	
		},

	24: 	{
			SkillPoints: [149],//Battle Orders
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.Gamble=false;
				Config.Gamble=false;
				Config.FindItem=true;
			}
		},

	25: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.Recipes.push([Recipe.Rune,"Ral Rune"]);
				Config.Recipes.push([Recipe.Rune,"Ort Rune"]);
				Config.Recipes.push([Recipe.Rune,"Thul Rune"]);
				Config.Recipes.push([Recipe.Rune,"Amn Rune"]);
				Config.Recipes.push([Recipe.Rune,"Sol Rune"]);
				Config.Recipes.push([Recipe.Rune,"Lum Rune"]);
			}	
		},

	26: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.BeltColumn=["hp","hp","hp","rv"];
			}	
		},

	27: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}	
		},

	28: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
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
			SkillPoints: [155],//Battle Command
			StatPoints: [0,3,3,3,3],	
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}
		},

	31: 	{
			SkillPoints: [153],//Natural Resistance
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.LowManaSkill=[132,132];
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}
		},

	32: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}
		},

	33: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}
		},

	34: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}
		},

	35: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}
		},

	36: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}
		},

	37: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}
		},

	38: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}
		},

	39: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}
		},

	40: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.LowGold=500000;
				Config.Gamble=true;
				Config.GambleGoldStart=500000;
				Config.GambleGoldStop=200000;
			}
		},

	41: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}
		},

	42: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}
		},

	43: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}
		},

	44: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}
		},

	45: 	{
			SkillPoints: [130],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.PickitFiles.splice(Config.PickitFiles.indexOf("EarlyGame.nip"),1);
				Config.PickitFiles.splice(Config.PickitFiles.indexOf("AutoEquip/PreMercLance.xpac.nip"),1);
			}
		},

	46: 	{
			SkillPoints: [130],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}
		},

	47: 	{
			SkillPoints: [130],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}
		},

	48: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}
		},

	49: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}
		},

	50: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.UseHP=85;
				Config.UseMP=35;
			}
		},

	51: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}
		},

	52: 	{
			SkillPoints: [153],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}
		},

	53: 	{
			SkillPoints: [153],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}
		},

	54: 	{
			SkillPoints: [153],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}
		},

	55: 	{
			SkillPoints: [132],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}
		},

	56: 	{
			SkillPoints: [132],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}
		},

	57: 	{
			SkillPoints: [132],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}
		},

	58: 	{
			SkillPoints: [132],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}
		},

	59: 	{
			SkillPoints: [132],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}
		},

	60: 	{
			SkillPoints: [132,138,149,153],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}
		},

	61: 	{
			SkillPoints: [132,138,149,153],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}
		},

	62: 	{
			SkillPoints: [132,138,149,153],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}
		},

	63: 	{
			SkillPoints: [132,138,149,153],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}
		},

	64: 	{
			SkillPoints: [132,138,149,153],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}
		},

	65: 	{
			SkillPoints: [132,138,149,153],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}
		},

	66: 	{
			SkillPoints: [132,138,149,153],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}
		},

	67: 	{
			SkillPoints: [132,138,149,153],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}
		},

	68: 	{
			SkillPoints: [132,138,149,153],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}
		},

	69: 	{
			SkillPoints: [132,138,149,153],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.UseRejuvHP=45;
				Config.TownHP=35;
				Config.LifeChicken=25;
			}
		},

	70: 	{
			SkillPoints: [132,138,149,153],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.Gamble=false;
				//Make Eth Insight base Weapon
				Config.Recipes.push([Recipe.Socket.Weapon,"Colossus Voulge",Roll.Eth]);
				Config.Recipes.push([Recipe.Socket.Weapon,"Thresher",Roll.Eth]);
				Config.Recipes.push([Recipe.Socket.Weapon,"Cryptic Axe",Roll.Eth]);
				Config.Recipes.push([Recipe.Socket.Weapon,"Great Poleaxe",Roll.Eth]);
				Config.Recipes.push([Recipe.Socket.Weapon,"Giant Thresher",Roll.Eth]);
				//Make Spirit or Enigma base
				Config.Recipes.push([Recipe.Socket.Armor,"Light Plate",Roll.NonEth]);
				Config.Recipes.push([Recipe.Socket.Armor,"Mage Plate",Roll.NonEth]);
				Config.Recipes.push([Recipe.Socket.Armor,"Archon Plate",Roll.NonEth]);
				//Misc
				Config.Recipes.push([Recipe.Reroll.Magic,"Grand Charm"]);
				Config.Recipes.push([Recipe.Caster.Amulet]);
				Config.Recipes.push([Recipe.Caster.Ring]);
			}
		},

	71: 	{
			SkillPoints: [132],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}
		},

	72: 	{
			SkillPoints: [132],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}
		},

	73: 	{
			SkillPoints: [132],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}
		},

	74: 	{
			SkillPoints: [132],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}
		},

	75: 	{
			SkillPoints: [132],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}
		},

	76: 	{
			SkillPoints: [132],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}
		},

	77: 	{
			SkillPoints: [132],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}
		},

	78: 	{
			SkillPoints: [132],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}
		},

	79: 	{
			SkillPoints: [132],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}
		},

	80: 	{
			SkillPoints: [132],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.KeepRunewords.push("[Type] == Shield || [Type] == AuricShields # [FCR] == 35");
				Config.KeepRunewords.push("[Type] == Sword # [FCR] == 35");
			}
		},

	81: 	{
			SkillPoints: [132],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}
		},

	82: 	{
			SkillPoints: [132],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}
		},

	83: 	{
			SkillPoints: [132],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}
		},

	84: 	{
			SkillPoints: [153],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}
		},

	85: 	{
			SkillPoints: [146],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.PickitFiles.splice(Config.PickitFiles.indexOf("MidGame.nip"),1);
				Config.LowGold=1000000;
				Config.GambleGoldStart=600000;
				Config.GambleGoldStop=200000;
			}
		},

	86: 	{
			SkillPoints: [146],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}
		},

	87: 	{
			SkillPoints: [146],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}
		},

	88: 	{
			SkillPoints: [146],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}
		},

	89: 	{
			SkillPoints: [146],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}
		},

	90: 	{
			SkillPoints: [146],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}
		},

	91: 	{
			SkillPoints: [146],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}
		},

	92: 	{
			SkillPoints: [146],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}
		},

	93: 	{
			SkillPoints: [146],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}
		},

	94: 	{
			SkillPoints: [146],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}
		},

	95: 	{
			SkillPoints: [146],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}
		},

	96: 	{
			SkillPoints: [146],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}
		},

	97: 	{
			SkillPoints: [146],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}
		},

	98: 	{
			SkillPoints: [146],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}
		},

	99: 	{
			SkillPoints: [146],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill=[130,132,132,132,132,132,132];
			}
		}
};
