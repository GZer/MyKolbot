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
				Config.PickitFiles.push("HammerdinRunes.nip");
				Config.PickitFiles.push("AutoEquip/Hammerdin.xpac.nip");
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
				Config.GambleItems.push("KiteShield");
				Config.GambleItems.push("Greaves");
				Config.PickitFiles.push("AutoEquip/PreMerc.xpac.nip");
				Config.PickitFiles.push("AutoEquip/Merc.xpac.nip");
				Config.Inventory[0]=[1,1,1,1,1,1,1,1,1,1];
				Config.Inventory[1]=[1,1,1,1,1,1,1,1,1,1];
				Config.Inventory[2]=[1,1,1,1,1,1,1,1,1,1];
				Config.Inventory[3]=[1,1,1,1,1,1,1,1,1,1];
				Config.AutoEquip=true;
				Config.MiniShopBot=true;
				Config.LowGold=200000;
				Config.UseMerc=true;
				Config.OpenChests=false;
				Config.ClearType=0;//Monster spectype to kill in level clear scripts(0=all)
				Config.LogExperience=true;//Print experience statistics in the manager.
				Config.ItemInfo=true;//Log stashed,skipped (due to no space) or sold items.
				Config.StashGold=200;//Minimum amount of gold to stash.
				Config.AttackSkill=[0,0,0,0,0,0,0];
				Config.LowManaSkill=[0,0];
				Config.PublicMode=2;
				Config.ScanShrines=[17,1,2,15,6,7,12,14,8,9,10,11];
				Config.BeltColumn=["hp","hp","hp","mp"];//Keep tons of health potions!
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
			SkillPoints: [98],//Might
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[0,0,98,0,98,0,0];
			}
		},

	3: 	{
			SkillPoints: [97],//Smite
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[0,97,98,97,98,0,98];
			}
		},

	4: 	{
			SkillPoints: [99],//Prayer
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[0,97,98,97,98,0,98];
			}
		},

	5: 	{
			SkillPoints: [-1],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[0,97,98,97,98,0,98];
			}
		},

	6: 	{
			SkillPoints: [104],//Defiance
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[0,97,98,97,98,0,98];
			}
		},

	7: 	{
			SkillPoints: [101],//Holy Bolt
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[0,97,98,97,98,0,98];
			}
		},

	8: 	{
			SkillPoints: [-1],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[0,97,98,97,98,0,98];
			}
		},

	9: 	{
			SkillPoints: [-1],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[0,97,98,97,98,0,98];
			}
		},

	10: 	{
			SkillPoints: [-1],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[0,97,98,97,98,0,98];
			}
		},

	11: 	{
			SkillPoints: [-1],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.MinColumn=[3,3,3,3];
			}
		},

	12: 	{
			SkillPoints: [108],//Blessed Aim
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[0,97,98,97,98,0,98];
			}
		},

	13: 	{
			SkillPoints: [107],//Charge
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[0,97,98,97,98,0,98];
			}
		},

	14: 	{
			SkillPoints: [109],//Cleansing
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[0,97,98,97,98,0,98];
			}
		},

	15: 	{
			SkillPoints: [-1],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.MakeRunewords=true;
				//Weapon
				Config.Runewords.push([Runeword.Spirit,"Crystal Sword"]);
				Config.Runewords.push([Runeword.Spirit,"Broad Sword"]);
				Config.Runewords.push([Runeword.Spirit,"Long Sword"]);
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
				Config.Runewords.push([Runeword.Spirit,"Targe"]);
				Config.Runewords.push([Runeword.Spirit,"Rondache"]);
				Config.Runewords.push([Runeword.Spirit,"Heraldic Shield"]);
				Config.Runewords.push([Runeword.Spirit,"Aerin Shield"]);
				Config.Runewords.push([Runeword.Spirit,"Crown Shield"]);
				Config.Runewords.push([Runeword.Spirit,"Akaran Targe"]);
				Config.Runewords.push([Runeword.Spirit,"Akaran Rondache"]);
				Config.Runewords.push([Runeword.Spirit,"Protector Shield"]);
				Config.Runewords.push([Runeword.Spirit,"Gilded Shield"]);
				Config.Runewords.push([Runeword.Spirit,"Royal Shield"]);
				Config.Runewords.push([Runeword.Spirit,"Sacred Targe"]);
				Config.Runewords.push([Runeword.Spirit,"Sacred Rondache"]);
				Config.Runewords.push([Runeword.Spirit,"Kurast Shield"]);
				Config.Runewords.push([Runeword.Spirit,"Zakarum Shield"]);
				Config.Runewords.push([Runeword.Spirit,"Vortex Shield"]);
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
			SkillPoints: [-1],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[0,97,98,97,98,0,98];
			}
		},

	17: 	{
			SkillPoints: [-1],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[0,97,98,97,98,0,98];
			}
		},

	18: 	{
			SkillPoints: [115,112,113],//Vigor,Blessed Hammer,Concentration
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	19: 	{
			SkillPoints: [112,113],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.LowManaSkill=[0,113];
			}
		},

	20: 	{
			SkillPoints: [112,113],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	21: 	{
			SkillPoints: [112,113],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.BeltColumn=["hp","hp","hp","rv"];
			}
		},

	22: 	{
			SkillPoints: [112,113],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	23: 	{
			SkillPoints: [112,113],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	24: 	{
			SkillPoints: [117,112,113],//Holy Shield
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	25: 	{
			SkillPoints: [112],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.Cubing=true;
				Config.Recipes.push([Recipe.Rune,"Ral Rune"]);
				Config.Recipes.push([Recipe.Rune,"Ort Rune"]);
				Config.Recipes.push([Recipe.Rune,"Thul Rune"]);
				Config.Recipes.push([Recipe.Rune,"Amn Rune"]);
				Config.Recipes.push([Recipe.Rune,"Sol Rune"]);
				Config.Recipes.push([Recipe.Rune,"Lum Rune"]);
			}
		},

	26: 	{
			SkillPoints: [112],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	27: 	{
			SkillPoints: [112],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	28: 	{
			SkillPoints: [112],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	29: 	{
			SkillPoints: [112],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.MinColumn=[4,4,4,4];
			}
		},

	30: 	{
			SkillPoints: [112],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.Redemption=[50,0];
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	31: 	{
			SkillPoints: [112],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	32: 	{
			SkillPoints: [112],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	33: 	{
			SkillPoints: [112],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	34: 	{
			SkillPoints: [112],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	35: 	{
			SkillPoints: [112],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	36: 	{
			SkillPoints: [112],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	37: 	{
			SkillPoints: [112],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	38: 	{
			SkillPoints: [112],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	39: 	{
			SkillPoints: [113],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	40: 	{
			SkillPoints: [113],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.LowGold=400000;
				Config.Gamble=true;
				Config.GambleGoldStart=400000;
				Config.GambleGoldStop=200000;
			}
		},

	41: 	{
			SkillPoints: [113],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	42: 	{
			SkillPoints: [113],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	43: 	{
			SkillPoints: [113],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	44: 	{
			SkillPoints: [113],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	45: 	{
			SkillPoints: [113],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.PickitFiles.splice(Config.PickitFiles.indexOf("EarlyGame.nip"),1);
				Config.PickitFiles.splice(Config.PickitFiles.indexOf("AutoEquip/PreMerc.xpac.nip"),1);
			}
		},

	46: 	{
			SkillPoints: [113],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	47: 	{
			SkillPoints: [113],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	48: 	{
			SkillPoints: [113],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	49: 	{
			SkillPoints: [113],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	50: 	{
			SkillPoints: [113],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.UseHP=80;
				Config.UseMP=50;
			}
		},

	51: 	{
			SkillPoints: [113],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	52: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	53: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	54: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	55: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	56: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	57: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	58: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	59: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	60: 	{
			SkillPoints: [108,112,113,115],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	61: 	{
			SkillPoints: [108,112,113,115],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	62: 	{
			SkillPoints: [108,112,113,115],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	63: 	{
			SkillPoints: [108,112,113,115],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	64: 	{
			SkillPoints: [108,112,113,115],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	65: 	{
			SkillPoints: [108,112,113,115],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	66: 	{
			SkillPoints: [108,112,113,115],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	67: 	{
			SkillPoints: [108,112,113,115],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	68: 	{
			SkillPoints: [108,112,113,115],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	69: 	{
			SkillPoints: [108,112,113,115],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.UseRejuvHP=40;
				Config.LifeChicken=20;
			}
		},

	70: 	{
			SkillPoints: [108,112,113,115],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.Gamble=false;
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
				//Enigma
				Config.Recipes.push([Recipe.Socket.Armor,"Mage Plate",Roll.NonEth]);
				Config.Recipes.push([Recipe.Socket.Armor,"Archon Plate",Roll.NonEth]);
				//Misc
				Config.Recipes.push([Recipe.Reroll.Magic,"Grand Charm"]);
				Config.Recipes.push([Recipe.Caster.Amulet]);
				Config.Recipes.push([Recipe.Caster.Ring]);
			}
		},

	71: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	72: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	73: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	74: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	75: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	76: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	77: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	78: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	79: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	80: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.KeepRunewords.push("[Type] == Shield || [Type] == AuricShields # [FCR] == 35");
				Config.KeepRunewords.push("[Type] == Sword # [FCR] == 35");
			}
		},

	81: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	82: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	83: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	84: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	85: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.PickitFiles.splice(Config.PickitFiles.indexOf("MidGame.nip"),1);
				Config.LowGold=800000;
				Config.GambleGoldStart=600000;
				Config.GambleGoldStop=400000;
			}
		},

	86: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	87: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	88: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	89: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	90: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	91: 	{
			SkillPoints: [117],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	92: 	{
			SkillPoints: [117],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	93: 	{
			SkillPoints: [117],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	94: 	{
			SkillPoints: [117],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	95: 	{
			SkillPoints: [117],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	96: 	{
			SkillPoints: [117],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	97: 	{
			SkillPoints: [117],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	98: 	{
			SkillPoints: [117],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	99: 	{
			SkillPoints: [117],
			StatPoints: [0,2,3,3,3],
			Update: function(){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		}
};
