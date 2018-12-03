//	/d2bs/kolbot/libs/Builds/Sorceress.ExampleBuild.js

/**
*
* Instructions: 	See /d2bs/kolbot/libs/config/Builds/README.txt
*
* Skill IDs: 	See /d2bs/kolbot/sdk/skills.txt for a list of skill IDs.
*
* Stat IDs: 
*
* 	Strength = 0
* 	Energy = 1
* 	Dexterity = 2
* 	Vitality = 3
*
*/
js_strict(true);

if(!isIncluded("common/Cubing.js")){include("common/Cubing.js");};
if(!isIncluded("common/Prototypes.js")){include("common/Prototypes.js");};
if(!isIncluded("common/Runewords.js")){include("common/Runewords.js");};

var AutoBuildTemplate = {

	1: 	{
			Update: function(){
				Config.PickitFiles.push("LateGame.nip");
				Config.PickitFiles.push("Pre50.nip");
				Config.PickitFiles.push("Pre40.nip");
				Config.PickitFiles.push("Pre30.nip");
				Config.PickitFiles.push("Pre15.nip");
				Config.PickitFiles.push("EarlyRunes.nip");
				Config.PickitFiles.push("LateRunes.nip");
				Config.PickitFiles.push("AutoEquip/Singer.xpac.nip");
				Config.PickitFiles.push("AutoEquip/PreMerc.xpac.nip");
				Config.PickitFiles.push("AutoEquip/Merc.xpac.nip");
				Config.Inventory[0] = [1,1,1,1,1,1,1,1,1,1];
				Config.Inventory[1] = [1,1,1,1,1,1,1,1,1,1];
				Config.Inventory[2] = [1,1,1,1,1,1,1,1,1,1];
				Config.Inventory[3] = [1,1,1,1,1,1,1,1,1,1];
				Config.AutoEquip = true;
				Config.OpenChests = true;
				Config.ClearType = 0;//Monster spectype to kill in level clear scripts(0 = all)
				Config.LogExperience = true;//Print experience statistics in the manager.
				Config.StashGold = 200;//Minimum amount of gold to stash.
				Config.AttackSkill = [0,0,0,0,0,0,0];
				Config.LowManaSkill = [0,0];
				Config.PublicMode = 3;
				Config.ScanShrines = [17,1,2,15,6,7,12,14,8,9,10,11];
				Config.BeltColumn = ["hp","hp","hp","hp"];//Keep tons of health potions!
				Config.MinColumn = [2,2,2,2];
				Config.HealHP = 99;
				Config.HealMP = 99;
				Config.LifeChicken = 20;
				Config.ManaChicken = 0;
				Config.MercChicken = 0;
				Config.UseHP = 65;
				Config.UseMP = 3;
				Config.UseRejuvHP = 25;
				Config.PickRange = 30;
				Config.MaxGameTime = 3600;//Only run for an hour in case of failure
				Config.BossPriority = true;
				//Config.Leader = "PapaBear";
				Scripts.LevelLeader = true;
				Scripts.LevelFollower = false;
			}
		},
		
	2: 	{
			SkillPoints: [130],//Howl
			StatPoints: [0,3,3,3,3],//Str+1,Vitality+4
			Update: function(){
				Config.AttackSkill = [0,0,0,0,0,0,0];
			}
		},
		
	3: 	{
			SkillPoints: [-1],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [0,0,0,0,0,0,0];
			}
		},
		
	4: 	{
			SkillPoints: [-1],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [0,0,0,0,0,0,0];
			}
		},

	5: 	{
			SkillPoints: [-1],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [0,0,0,0,0,0,0];
			}
		},

	6: 	{
			SkillPoints: [138],//Shout
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [0,0,0,0,0,0,0];
			}
		},

	7: 	{
			SkillPoints: [132,138],//Leap
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [0,132,0,0,0,0,0];
			}				
		},

	8: 	{
			SkillPoints: [137,138],//Taunt
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [0,132,0,0,0,0,0];
			}	
		},

	9: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				// Config.Recipes.push([Recipe.Rune,"El Rune"]);
				// Config.Recipes.push([Recipe.Rune,"Eld Rune"]);
				// Config.Recipes.push([Recipe.Rune,"Tir Rune"]);
				// Config.Recipes.push([Recipe.Rune,"Nef Rune"]);
				// Config.Recipes.push([Recipe.Rune,"Eth Rune"]);
				// Config.Recipes.push([Recipe.Rune,"Ith Rune"]);
				// Config.Recipes.push([Recipe.Rune,"Tal Rune"]);
				// Config.Recipes.push([Recipe.Rune,"Ral Rune"]);
				// Config.Recipes.push([Recipe.Rune,"Ort Rune"]);
				// Config.Recipes.push([Recipe.Rune,"Thul Rune"]);
				Config.Recipes.push([Recipe.Rune,"Amn Rune"]);
			}
		},

	10: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.BeltColumn = ["hp","hp","hp","rv"];
				Config.MakeRunewords = true;
				//Weapon
				Config.Runewords.push([Runeword.Leaf,"Short Staff"]);
				Config.Runewords.push([Runeword.Leaf,"Long Staff"]);
				Config.Runewords.push([Runeword.Leaf,"Gnarled Staff"]);
				Config.Runewords.push([Runeword.Leaf,"Battle Staff"]);
				Config.Runewords.push([Runeword.Leaf,"War Staff"]);
				Config.Runewords.push([Runeword.Strength,"War Scepter"]);
				Config.Runewords.push([Runeword.Spirit,"Crystal Sword"]);
				Config.Runewords.push([Runeword.Spirit,"Broad Sword"]);
				Config.Runewords.push([Runeword.Spirit,"Long Sword"]);
				Config.Runewords.push([Runeword.Spirit,"Claymore"]);
				Config.Runewords.push([Runeword.Spirit,"Bastard Sword"]);
				Config.Runewords.push([Runeword.Spirit,"Dacian Falx"]);
				Config.Runewords.push([Runeword.Spirit,"Gothic Sword"]);
				Config.Runewords.push([Runeword.Grief,"Phase Blade"]);
				Config.Runewords.push([Runeword.HeartoftheOak,"Flail"]);
				//Armor
				Config.Runewords.push([Runeword.Stealth,"Hard Leather Armor"]);
				Config.Runewords.push([Runeword.Stealth,"Studded Leather"]);
				Config.Runewords.push([Runeword.Stealth,"Ring Mail"]);
				Config.Runewords.push([Runeword.Stealth,"Breast Plate"]);
				Config.Runewords.push([Runeword.Stealth,"Light Plate"]);
				Config.Runewords.push([Runeword.Myth,"Ring Mail"]);
				Config.Runewords.push([Runeword.Myth,"Breast Plate"]);
				Config.Runewords.push([Runeword.Myth,"Light Plate"]);
				Config.Runewords.push([Runeword.Myth,"Linked Mail"]);
				Config.Runewords.push([Runeword.Myth,"Cuirass"]);
				Config.Runewords.push([Runeword.Myth,"Mage Plate"]);
				Config.Runewords.push([Runeword.Enlightenment,"Mage Plate"]);
				Config.Runewords.push([Runeword.Bone,"Mage Plate"]);
				Config.Runewords.push([Runeword.Enigma,"Mage Plate"]);
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
				Config.Runewords.push([Runeword.Lore,"Wolf Head"]);
				Config.Runewords.push([Runeword.Lore,"Hawk Helm"]);
				Config.Runewords.push([Runeword.Lore,"Antlers"]);
				Config.Runewords.push([Runeword.Lore,"Falcon Mask"]);
				Config.Runewords.push([Runeword.Lore,"Spirit Mask"]);
				Config.Runewords.push([Runeword.Lore,"Jawbone Cap"]);
				Config.Runewords.push([Runeword.Lore,"Fanged Helm"]);
				Config.Runewords.push([Runeword.Lore,"Horned Helm"]);
				Config.Runewords.push([Runeword.Lore,"Assault Helmet"]);
				Config.Runewords.push([Runeword.Lore,"Avenger Guard"]);
				//Shield
				Config.Runewords.push([Runeword.Splendor,"Round Shield"]);
				Config.Runewords.push([Runeword.Splendor,"Grim Shield"]);
				Config.Runewords.push([Runeword.Splendor,"Preserved Head"]);
				Config.Runewords.push([Runeword.Splendor,"Zombie Head"]);
				Config.Runewords.push([Runeword.Splendor,"Unraveller Head"]);
				Config.Runewords.push([Runeword.Splendor,"Gargoyle Head"]);
				Config.Runewords.push([Runeword.Splendor,"Demon Head"]);
				Config.Runewords.push([Runeword.Spirit,"Monarch"]);
				Config.Runewords.push([Runeword.Spirit,"Targe"]);
				Config.Runewords.push([Runeword.Spirit,"Rondache"]);
				Config.Runewords.push([Runeword.Spirit,"Heraldic Shield"]);
				Config.Runewords.push([Runeword.Spirit,"Aerin Shield"]);
				Config.Runewords.push([Runeword.Spirit,"Crown Shield"]);
				//Merc Gear
				Config.Runewords.push([Runeword.Insight,"Poleaxe"]);
				Config.Runewords.push([Runeword.Insight,"Halberd"]);
				Config.Runewords.push([Runeword.Insight,"War Scythe"]);
				Config.Runewords.push([Runeword.Insight,"Partizan"]);
				Config.Runewords.push([Runeword.Insight,"Bec De Corbin"]);
				Config.Runewords.push([Runeword.Insight,"Grim Scythe"]);
				Config.Runewords.push([Runeword.Insight,"Ogre Axe"]);
				Config.Runewords.push([Runeword.Insight,"Colossus Voulge"]);
				Config.Runewords.push([Runeword.Insight,"Cryptic Axe"]);
				Config.Runewords.push([Runeword.Insight,"Great Poleaxe"]);
			}
		},

	11: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.MinColumn = [3,3,3,3];
			}
		},

	12: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [0,132,0,0,0,0,0];
			}
		},

	13: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [0,132,0,0,0,0,0];
			}	
		},

	14: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [0,132,0,0,0,0,0];
			}	
		},

	15: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.PickitFiles.splice(Config.PickitFiles.indexOf("Pre15.nip"),1);
			}	
		},

	16: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [0,132,0,0,0,0,0];	
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
				Config.AttackSkill = [0,132,0,0,0,0,0];
			}	
		},

	19: 	{
			SkillPoints: [145],//Iron Skin
			StatPoints: [0,3,3,3,3],	
			Update: function(){
				Config.AttackSkill = [0,132,0,0,0,0,0];
			}
		},

	20: 	{
			SkillPoints: [146],//Battle Cry
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [0,132,0,0,0,0,0];
				Config.UseMerc = true;
			}
		},

	21: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.FindItem = true;
				Config.FindItemSwitch = 1;
			}	
		},

	22: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [0,132,0,0,0,0,0];
			}	
		},

	23: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [0,132,0,0,0,0,0];
			}	
		},

	24: 	{
			SkillPoints: [149],//Battle Orders
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.Cubing = true;
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
				//Make Eth Insight base Weapon
				Config.Recipes.push([Recipe.Socket.Weapon, "Poleaxe", Roll.Eth]);
				Config.Recipes.push([Recipe.Socket.Weapon, "Halberd", Roll.Eth]);
				Config.Recipes.push([Recipe.Socket.Weapon, "War Scythe", Roll.Eth]);
				Config.Recipes.push([Recipe.Socket.Weapon, "Partizan", Roll.Eth]);
				Config.Recipes.push([Recipe.Socket.Weapon, "Bec De Corbin", Roll.Eth]);
				Config.Recipes.push([Recipe.Socket.Weapon, "Grim Scythe", Roll.Eth]);
				Config.Recipes.push([Recipe.Socket.Weapon, "Ogre Axe", Roll.Eth]);
				Config.Recipes.push([Recipe.Socket.Weapon, "Colossus Voulge", Roll.Eth]);
				Config.Recipes.push([Recipe.Socket.Weapon, "Cryptic Axe", Roll.Eth]);
				Config.Recipes.push([Recipe.Socket.Weapon, "Great Poleaxe", Roll.Eth]);
				//Make Spirit, Enigma and Splendor base Armor
				Config.Recipes.push([Recipe.Socket.Armor, "Light Plate", Roll.NonEth]);
				Config.Recipes.push([Recipe.Socket.Armor, "Mage Plate", Roll.NonEth]);
				Config.Recipes.push([Recipe.Socket.Armor, "Archon Plate", Roll.NonEth]);
				Config.Recipes.push([Recipe.Socket.Armor, "DuskShroud", Roll.NonEth]);
				Config.Recipes.push([Recipe.Socket.Armor, "Wyrmhide", Roll.NonEth]);
				Config.Recipes.push([Recipe.Socket.Armor, "ScarabHusk", Roll.NonEth]);
				Config.Recipes.push([Recipe.Socket.Armor, "Round Shield", Roll.NonEth]);
				Config.Recipes.push([Recipe.Socket.Armor, "Grim Shield", Roll.NonEth]);
				Config.Recipes.push([Recipe.Socket.Armor, "Monarch", Roll.NonEth]);
				Config.Recipes.push([Recipe.Socket.Armor, "Targe", Roll.NonEth]);
				Config.Recipes.push([Recipe.Socket.Armor, "Rondache", Roll.NonEth]);
				Config.Recipes.push([Recipe.Socket.Armor, "Heraldic Shield", Roll.NonEth]);
				Config.Recipes.push([Recipe.Socket.Armor, "Aerin Shield", Roll.NonEth]);
				Config.Recipes.push([Recipe.Socket.Armor, "Crown Shield", Roll.NonEth]);
			}	
		},

	27: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [0,132,0,0,0,0,0];
			}	
		},

	28: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [0,132,0,0,0,0,0];
			}	
		},

	29: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],	
			Update: function(){
				Config.MinColumn = [4,4,4,4];
			}
		},

	30: 	{
			SkillPoints: [155,153,154,149],//Battle Command,Natural Resistance,War Cry
			StatPoints: [0,3,3,3,3],	
			Update: function(){
				Config.AttackSkill = [130,154,0,132,0,132,0];
				Config.PickitFiles.splice(Config.PickitFiles.indexOf("Pre30.nip"),1);
			}
		},

	31: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.LowManaSkill = [132,132];
				Config.AttackSkill = [130,154,0,154,0,154,0];
			}
		},

	32: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [130,154,0,154,0,154,0];
			}
		},

	33: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [130,154,0,154,0,154,0];
			}
		},

	34: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [130,154,0,154,0,154,0];
			}
		},

	35: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [130,154,0,154,0,154,0];
			}
		},

	36: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [130,154,0,154,0,154,0];
			}
		},

	37: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [130,154,0,154,0,154,0];
			}
		},

	38: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [130,154,0,154,0,154,0];
			}
		},

	39: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [130,154,0,154,0,154,0];
			}
		},

	40: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.PickitFiles.splice(Config.PickitFiles.indexOf("Pre40.nip"),1);
			}
		},

	41: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [130,154,0,154,0,154,0];
			}
		},

	42: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [130,154,0,154,0,154,0];
			}
		},

	43: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [130,154,0,154,0,154,0];
			}
		},

	44: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [130,154,0,154,0,154,0];
			}
		},

	45: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.PickitFiles.splice(Config.PickitFiles.indexOf("EarlyRunes.nip"),1);
				Config.PickitFiles.push("MidRunes.nip");
			}
		},

	46: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [130,154,0,154,0,154,0];
			}
		},

	47: 	{
			SkillPoints: [154],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [130,154,0,154,0,154,0];
			}
		},

	48: 	{
			SkillPoints: [154],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [130,154,0,154,0,154,0];
			}
		},

	49: 	{
			SkillPoints: [154],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [130,154,0,154,0,154,0];
			}
		},

	50: 	{
			SkillPoints: [154],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.PickitFiles.splice(Config.PickitFiles.indexOf("Pre50.nip"),1);
				// Config.PickitFiles.splice(Config.PickitFiles.indexOf([Recipe.Rune,"El Rune"]),1);
				// Config.PickitFiles.splice(Config.PickitFiles.indexOf([Recipe.Rune,"Eld Rune"]),1);
				// Config.PickitFiles.splice(Config.PickitFiles.indexOf([Recipe.Rune,"Tir Rune"]),1);
				// Config.PickitFiles.splice(Config.PickitFiles.indexOf([Recipe.Rune,"Nef Rune"]),1);
				// Config.PickitFiles.splice(Config.PickitFiles.indexOf([Recipe.Rune,"Eth Rune"]),1);
				// Config.PickitFiles.splice(Config.PickitFiles.indexOf([Recipe.Rune,"Ith Rune"]),1);
				// Config.PickitFiles.splice(Config.PickitFiles.indexOf([Runeword.Leaf,"Short Staff"]),1);
				// Config.PickitFiles.splice(Config.PickitFiles.indexOf([Runeword.Leaf,"Long Staff"]),1);
				// Config.PickitFiles.splice(Config.PickitFiles.indexOf([Runeword.Leaf,"Gnarled Staff"]),1);
				// Config.PickitFiles.splice(Config.PickitFiles.indexOf([Runeword.Leaf,"Battle Staff"]),1);
				// Config.PickitFiles.splice(Config.PickitFiles.indexOf([Runeword.Leaf,"War Staff"]),1);
				// Config.PickitFiles.splice(Config.PickitFiles.indexOf([Runeword.Strength,"War Scepter"]),1);
				// Config.PickitFiles.splice(Config.PickitFiles.indexOf([Runeword.Spirit,"Long Sword"]),1);
				Config.UseHP = 90;
				Config.UseMP = 50;
			}
		},

	51: 	{
			SkillPoints: [154],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [130,154,0,154,0,154,0];
			}
		},

	52: 	{
			SkillPoints: [154],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [130,154,0,154,0,154,0];
			}
		},

	53: 	{
			SkillPoints: [154],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [130,154,0,154,0,154,0];
			}
		},

	54: 	{
			SkillPoints: [154],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [130,154,0,154,0,154,0];
			}
		},

	55: 	{
			SkillPoints: [154],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [130,154,0,154,0,154,0];
			}
		},

	56: 	{
			SkillPoints: [154],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [130,154,0,154,0,154,0];
			}
		},

	57: 	{
			SkillPoints: [154],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [130,154,0,154,0,154,0];
			}
		},

	58: 	{
			SkillPoints: [154],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [130,154,0,154,0,154,0];
			}
		},

	59: 	{
			SkillPoints: [154],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [130,154,0,154,0,154,0];
			}
		},

	60: 	{
			SkillPoints: [154],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [130,154,0,154,0,154,0];
			}
		},

	61: 	{
			SkillPoints: [154],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [130,154,0,154,0,154,0];
			}
		},

	62: 	{
			SkillPoints: [154],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [130,154,0,154,0,154,0];
			}
		},

	63: 	{
			SkillPoints: [154],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [130,154,0,154,0,154,0];
			}
		},

	64: 	{
			SkillPoints: [154],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [130,154,0,154,0,154,0];
			}
		},

	65: 	{
			SkillPoints: [154],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [130,154,0,154,0,154,0];
			}
		},

	66: 	{
			SkillPoints: [130],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [130,154,0,154,0,154,0];
			}
		},

	67: 	{
			SkillPoints: [130],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [130,154,0,154,0,154,0];
			}
		},

	68: 	{
			SkillPoints: [130],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [130,154,0,154,0,154,0];
			}
		},

	69: 	{
			SkillPoints: [130],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.UseHP = 70;
				Config.UseMP = 30;
				Config.UseRejuvHP = 35;
				Config.LifeChicken = 30;
			}
		},

	70: 	{
			SkillPoints: [130],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.PickitFiles.splice(Config.PickitFiles.indexOf("MidRunes.nip"),1);
				// Config.PickitFiles.splice(Config.PickitFiles.indexOf([Recipe.Rune,"Tal Rune"]),1);
				// Config.PickitFiles.splice(Config.PickitFiles.indexOf([Recipe.Rune,"Ral Rune"]),1);
				// Config.PickitFiles.splice(Config.PickitFiles.indexOf([Recipe.Rune,"Ort Rune"]),1);
				// Config.PickitFiles.splice(Config.PickitFiles.indexOf([Recipe.Rune,"Thul Rune"]),1);
				// Config.PickitFiles.splice(Config.PickitFiles.indexOf([Recipe.Rune,"Amn Rune"]),1);
				// Config.PickitFiles.splice(Config.PickitFiles.indexOf([Recipe.Rune,"Sol Rune"]),1);
				// Config.PickitFiles.splice(Config.PickitFiles.indexOf([Runeword.Insight,"Poleaxe"]),1);
				// Config.PickitFiles.splice(Config.PickitFiles.indexOf([Runeword.Insight,"Halberd"]),1);
				// Config.PickitFiles.splice(Config.PickitFiles.indexOf([Runeword.Insight,"War Scythe"]),1);
				// Config.Recipes.push([Recipe.Gem,"Flawless Amethyst"]);
				// Config.Recipes.push([Recipe.Gem,"Flawless Topaz"]);
				// Config.Recipes.push([Recipe.Gem,"Flawless Sapphire"]);
				// Config.Recipes.push([Recipe.Gem,"Flawless Emerald"]);
				// Config.Recipes.push([Recipe.Gem,"Flawless Ruby"]);
				// Config.Recipes.push([Recipe.Gem,"Flawless Diamond"]);
				// Config.Recipes.push([Recipe.Gem,"Flawless Skull"]);
				Config.Recipes.push([Recipe.Reroll.Magic,"Grand Charm"]);
				Config.Recipes.push([Recipe.Reroll.Rare,"Diadem"]);
				// Config.Recipes.push([Recipe.Caster.Amulet]);
				// Config.Recipes.push([Recipe.Caster.Ring]);
			}
		},

	71: 	{
			SkillPoints: [130],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [130,154,0,154,0,154,0];
			}
		},

	72: 	{
			SkillPoints: [130],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [130,154,0,154,0,154,0];
			}
		},

	73: 	{
			SkillPoints: [130],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [130,154,0,154,0,154,0];
			}
		},

	74: 	{
			SkillPoints: [130],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [130,154,0,154,0,154,0];
			}
		},

	75: 	{
			SkillPoints: [130],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [130,154,0,154,0,154,0];
			}
		},

	76: 	{
			SkillPoints: [130],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [130,154,0,154,0,154,0];
			}
		},

	77: 	{
			SkillPoints: [130],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [130,154,0,154,0,154,0];
			}
		},

	78: 	{
			SkillPoints: [130],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [130,154,0,154,0,154,0];
			}
		},

	79: 	{
			SkillPoints: [130],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [130,154,0,154,0,154,0];
			}
		},

	80: 	{
			SkillPoints: [130],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [130,154,0,154,0,154,0];
			}
		},

	81: 	{
			SkillPoints: [130],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [130,154,0,154,0,154,0];
			}
		},

	82: 	{
			SkillPoints: [130],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [130,154,0,154,0,154,0];
			}
		},

	83: 	{
			SkillPoints: [130],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [130,154,0,154,0,154,0];
			}
		},

	84: 	{
			SkillPoints: [130],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [130,154,0,154,0,154,0];
			}
		},

	85: 	{
			SkillPoints: [146],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [130,154,0,154,0,154,0];
			}
		},

	86: 	{
			SkillPoints: [146],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [130,154,0,154,0,154,0];
			}
		},

	87: 	{
			SkillPoints: [146],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [130,154,0,154,0,154,0];
			}
		},

	88: 	{
			SkillPoints: [146],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [130,154,0,154,0,154,0];
			}
		},

	89: 	{
			SkillPoints: [146],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [130,154,0,154,0,154,0];
			}
		},

	90: 	{
			SkillPoints: [146],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [130,154,0,154,0,154,0];
			}
		},

	91: 	{
			SkillPoints: [146],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [130,154,0,154,0,154,0];
			}
		},

	92: 	{
			SkillPoints: [146],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [130,154,0,154,0,154,0];
			}
		},

	93: 	{
			SkillPoints: [146],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [130,154,0,154,0,154,0];
			}
		},

	94: 	{
			SkillPoints: [146],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [130,154,0,154,0,154,0];
			}
		},

	95: 	{
			SkillPoints: [146],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [130,154,0,154,0,154,0];
			}
		},

	96: 	{
			SkillPoints: [146],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [130,154,0,154,0,154,0];
			}
		},

	97: 	{
			SkillPoints: [146],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [130,154,0,154,0,154,0];
			}
		},

	98: 	{
			SkillPoints: [146],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [130,154,0,154,0,154,0];
			}
		},

	99: 	{
			SkillPoints: [146],
			StatPoints: [0,3,3,3,3],
			Update: function(){
				Config.AttackSkill = [130,154,0,154,0,154,0];
			}
		}
};
