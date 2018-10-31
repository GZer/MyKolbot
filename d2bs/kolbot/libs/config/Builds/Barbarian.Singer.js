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

if (!isIncluded("common/Cubing.js")){include("common/Cubing.js");};
if (!isIncluded("common/Prototypes.js")){include("common/Prototypes.js");};
if (!isIncluded("common/Runewords.js")){include("common/Runewords.js");};

var AutoBuildTemplate={

	1: 	{
			Update: function (){
				Config.PickitFiles.push("Pre40.nip");
				Config.PickitFiles.push("Pre30.nip");
				Config.PickitFiles.push("Pre15.nip");
				Config.PickitFiles.push("AutoEquip/Singer.xpac.nip");
				Config.Inventory[0] = [1,1,1,1,1,1,1,1,1,1];
				Config.Inventory[1] = [1,1,1,1,1,1,1,1,1,1];
				Config.Inventory[2] = [1,1,1,1,1,1,1,1,1,1];
				Config.Inventory[3] = [1,1,1,1,1,1,1,1,1,1];
				Config.AutoEquip = true;
				Config.OpenChests=true;
				Config.ClearType=0;//Monster spectype to kill in level clear scripts (0=all)
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
				Config.LifeChicken=20;
				Config.ManaChicken=0;
				Config.MercChicken=0;
				Config.UseHP=50;
				Config.UseMP=3;
				Config.UseRejuvHP=25;
				Config.PickRange=30;
				Config.MaxGameTime=10800;
				Config.BossPriority=true;
				//Config.Leader="PapaBear";
				Scripts.LevelLeader=true;
				Scripts.LevelFollower=false;
			}
		},
		
	2: 	{
			SkillPoints: [130],//Howl
			StatPoints: [0,3,3,3,3],//Str + 1,Vitality + 4
			Update: function (){
				Config.AttackSkill=[0,0,0,0,0,0,0];
			}
		},
		
	3: 	{
			SkillPoints: [130],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[0,0,0,0,0,0,0];
			}
		},
		
	4: 	{
			SkillPoints: [130],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[0,0,0,0,0,0,0];
			}
		},

	5: 	{
			SkillPoints: [130],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[0,0,0,0,0,0,0];
			}
		},

	6: 	{
			SkillPoints: [138],//Shout
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[0,0,0,0,0,0,0];
			}
		},

	7: 	{
			SkillPoints: [132],//Leap
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[0,132,0,0,0,0,0];
			}				
		},

	8: 	{
			SkillPoints: [137],//Taunt
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.PickitFiles.push("Runes.nip");
			}	
		},

	9: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.Recipes.push([Recipe.Gem, "Flawless Amethyst"]);
				Config.Recipes.push([Recipe.Gem, "Flawless Topaz"]);
				Config.Recipes.push([Recipe.Gem, "Flawless Sapphire"]);
				Config.Recipes.push([Recipe.Gem, "Flawless Emerald"]);
				Config.Recipes.push([Recipe.Gem, "Flawless Ruby"]);
				Config.Recipes.push([Recipe.Gem, "Flawless Diamond"]);
				Config.Recipes.push([Recipe.Gem, "Flawless Skull"]);
				Config.Recipes.push([Recipe.Rune, "El Rune"]);
				Config.Recipes.push([Recipe.Rune, "Eld Rune"]);
				Config.Recipes.push([Recipe.Rune, "Tir Rune"]);
				Config.Recipes.push([Recipe.Rune, "Nef Rune"]);
				Config.Recipes.push([Recipe.Rune, "Eth Rune"]);
				Config.Recipes.push([Recipe.Rune, "Ith Rune"]);
				Config.Recipes.push([Recipe.Rune, "Tal Rune"]);
				Config.Recipes.push([Recipe.Rune, "Ral Rune"]);
				Config.Recipes.push([Recipe.Rune, "Ort Rune"]);
				Config.Recipes.push([Recipe.Rune, "Thul Rune"]);
				Config.Recipes.push([Recipe.Rune, "Amn Rune"]);
				Config.Recipes.push([Recipe.Rune, "Sol Rune"]);
				Config.Recipes.push([Recipe.Rune, "Shael Rune"]);
				Config.Recipes.push([Recipe.Rune, "Dol Rune"]);
				Config.Recipes.push([Recipe.Rune, "Hel Rune"]);
				Config.Recipes.push([Recipe.Rune, "Io Rune"]);
				Config.Recipes.push([Recipe.Rune, "Lum Rune"]);
				Config.Recipes.push([Recipe.Rune, "Ko Rune"]);
				Config.Recipes.push([Recipe.Rune, "Fal Rune"]);
				Config.Recipes.push([Recipe.Rune, "Lem Rune"]);
				Config.Recipes.push([Recipe.Rune, "Pul Rune"]);
			}
		},

	10: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.BeltColumn=["hp","hp","hp","rv"];
				Config.MakeRunewords=true;
				Config.Runewords.push([Runeword.Leaf,"Short Staff"]);
				Config.Runewords.push([Runeword.Leaf,"Long Staff"]);
				Config.Runewords.push([Runeword.Leaf,"Gnarled Staff"]);
				Config.Runewords.push([Runeword.Leaf,"Battle Staff"]);
				Config.Runewords.push([Runeword.Leaf,"War Staff"]);
				Config.Runewords.push([Runeword.Memory,"Gnarled Staff"]);
				Config.Runewords.push([Runeword.Memory,"Battle Staff"]);
				Config.Runewords.push([Runeword.Memory,"War Staff"]);
				Config.Runewords.push([Runeword.Stealth,"Quilted Armor"]);
				Config.Runewords.push([Runeword.Stealth,"Leather Armor"]);
				Config.Runewords.push([Runeword.Stealth,"Hard Leather Armor"]);
				Config.Runewords.push([Runeword.Stealth,"Studded Leather"]);
				Config.Runewords.push([Runeword.Lore,"Cap"]);
				Config.Runewords.push([Runeword.Lore,"Skull Cap"]);
				Config.Runewords.push([Runeword.Lore,"Helm"]);
				Config.Runewords.push([Runeword.Rhyme,"Small Shield"]);
				Config.Runewords.push([Runeword.Rhyme,"Spiked Shield"]);
				Config.Runewords.push([Runeword.Rhyme,"Bone Shield"]);
				Config.Runewords.push([Runeword.AncientsPledge,"Large Shield"]);
				Config.Runewords.push([Runeword.AncientsPledge,"Kite Shield"]);
				Config.Runewords.push([Runeword.AncientsPledge,"Targe"]);
				Config.Runewords.push([Runeword.AncientsPledge,"Rondache"]);
				Config.Runewords.push([Runeword.AncientsPledge,"Heraldic Shield"]);
				Config.Runewords.push([Runeword.AncientsPledge,"Aerin Shield"]);
				Config.Runewords.push([Runeword.AncientsPledge,"Crown Shield"]);
				// Config.Runewords.push([Runeword.Spirit,"Crystal Sword"]);
				// Config.Runewords.push([Runeword.Spirit,"Broad Sword"]);
				// Config.Runewords.push([Runeword.Spirit,"Long Sword"]);
				// Config.Runewords.push([Runeword.Spirit,"Monarch"]);
				// Config.Runewords.push([Runeword.Spirit,"Targe"]);
				// Config.Runewords.push([Runeword.Spirit,"Rondache"]);
				// Config.Runewords.push([Runeword.Spirit,"Heraldic Shield"]);
				// Config.Runewords.push([Runeword.Spirit,"Aerin Shield"]);
				// Config.Runewords.push([Runeword.Spirit,"Crown Shield"]);
				// Config.Runewords.push([Runeword.Insight,"Voulge"]);
				// Config.Runewords.push([Runeword.Insight,"Scythe"]);
				// Config.Runewords.push([Runeword.Insight,"Poleaxe"]);
				// Config.Runewords.push([Runeword.Insight,"Halberd"]);
				// Config.Runewords.push([Runeword.Insight,"War Scythe"]);
			}
		},

	11: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.MinColumn=[3,3,3,3];
			}
		},

	12: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[0,132,0,0,0,0,0];
			}
		},

	13: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[0,132,0,0,0,0,0];
			}	
		},

	14: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[0,132,0,0,0,0,0];
			}	
		},

	15: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.PickitFiles.splice(Config.PickitFiles.indexOf("Pre15.nip"), 1);
			}	
		},

	16: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[0,132,0,0,0,0,0];	
			}	
		},

	17: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function (){
			}	
		},

	18: 	{
			SkillPoints: [143],//Leap Attack
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[0,132,0,0,0,0,0];
			}	
		},

	19: 	{
			SkillPoints: [145],//Iron Skin
			StatPoints: [0,3,3,3,3],	
			Update: function (){
				Config.AttackSkill=[0,132,0,0,0,0,0];
			}
		},

	20: 	{
			SkillPoints: [146],//Battle Cry
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,132,0,0,0,0,0];
				Config.Cubing=true;
				Config.UseMerc=true;
			}
		},

	21: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,132,0,0,0,0,0];
			}	
		},

	22: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,132,0,0,0,0,0];
			}	
		},

	23: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,132,0,0,0,0,0];
			}	
		},

	24: 	{
			SkillPoints: [149],//Battle Orders
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,132,0,0,0,0,0];
			}
		},

	25: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,132,0,0,0,0,0];
			}	
		},

	26: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,132,0,0,0,0,0];
			}	
		},

	27: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,132,0,0,0,0,0];
			}	
		},

	28: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,132,0,0,0,0,0];
			}	
		},

	29: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],	
			Update: function (){
				Config.AttackSkill=[146,132,0,0,0,0,0];
			}
		},

	30: 	{
			SkillPoints: [155],//Battle Command
			StatPoints: [0,3,3,3,3],	
			Update: function (){
				Config.MinColumn=[4,4,4,4];
			}
		},

	31: 	{
			SkillPoints: [153],//Natural Resistance
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,132,0,0,0,0,0];
			}
		},

	32: 	{
			SkillPoints: [154],//War Cry
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,154,0,132,0,0,0];
			}
		},

	33: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,154,0,132,0,0,0];
			}
		},

	34: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,154,0,132,0,0,0];
			}
		},

	35: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,154,0,132,0,0,0];
			}
		},

	36: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,154,0,132,0,0,0];
			}
		},

	37: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,154,0,132,0,0,0];
			}
		},

	38: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,154,0,132,0,0,0];
			}
		},

	39: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,154,0,132,0,0,0];
			}
		},

	40: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.PickitFiles.splice(Config.PickitFiles.indexOf("Pre40.nip"), 1);
			}
		},

	41: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,154,0,132,0,0,0];
			}
		},

	42: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,154,0,132,0,0,0];
			}
		},

	43: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,154,0,132,0,0,0];
			}
		},

	44: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,154,0,132,0,0,0];
			}
		},

	45: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,154,0,132,0,0,0];
			}
		},

	46: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,154,0,132,0,0,0];
			}
		},

	47: 	{
			SkillPoints: [149],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,154,0,132,0,0,0];
			}
		},

	48: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,154,0,132,0,0,0];
			}
		},

	49: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,154,0,132,0,0,0];
			}
		},

	50: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,154,0,132,0,0,0];
			}
		},

	51: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,154,0,132,0,0,0];
			}
		},

	52: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,154,0,132,0,0,0];
			}
		},

	53: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,154,0,132,0,0,0];
			}
		},

	54: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,154,0,132,0,0,0];
			}
		},

	55: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,154,0,132,0,0,0];
			}
		},

	56: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,154,0,132,0,0,0];
			}
		},

	57: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,154,0,132,0,0,0];
			}
		},

	58: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,154,0,132,0,0,0];
			}
		},

	59: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,154,0,132,0,0,0];
			}
		},

	60: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,154,0,132,0,0,0];
			}
		},

	61: 	{
			SkillPoints: [138],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,154,0,132,0,0,0];
			}
		},

	62: 	{
			SkillPoints: [146],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,154,0,132,0,0,0];
			}
		},

	63: 	{
			SkillPoints: [146],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,154,0,132,0,0,0];
			}
		},

	64: 	{
			SkillPoints: [146],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,154,0,132,0,0,0];
			}
		},

	65: 	{
			SkillPoints: [146],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,154,0,132,0,0,0];
			}
		},

	66: 	{
			SkillPoints: [146],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,154,0,132,0,0,0];
			}
		},

	67: 	{
			SkillPoints: [146],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,154,0,132,0,0,0];
			}
		},

	68: 	{
			SkillPoints: [146],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,154,0,132,0,0,0];
			}
		},

	69: 	{
			SkillPoints: [146],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,154,0,132,0,0,0];
			}
		},

	70: 	{
			SkillPoints: [146],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,154,0,132,0,0,0];
			}
		},

	71: 	{
			SkillPoints: [146],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,154,0,132,0,0,0];
			}
		},

	72: 	{
			SkillPoints: [146],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,154,0,132,0,0,0];
			}
		},

	73: 	{
			SkillPoints: [146],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,154,0,132,0,0,0];
			}
		},

	74: 	{
			SkillPoints: [146],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,154,0,132,0,0,0];
			}
		},

	75: 	{
			SkillPoints: [146],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,154,0,132,0,0,0];
			}
		},

	76: 	{
			SkillPoints: [146],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,154,0,132,0,0,0];
			}
		},

	77: 	{
			SkillPoints: [146],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,154,0,132,0,0,0];
			}
		},

	78: 	{
			SkillPoints: [146],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,154,0,132,0,0,0];
			}
		},

	79: 	{
			SkillPoints: [130],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,154,0,132,0,0,0];
			}
		},

	80: 	{
			SkillPoints: [130],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,154,0,132,0,0,0];
			}
		},

	81: 	{
			SkillPoints: [130],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,154,0,132,0,0,0];
			}
		},

	82: 	{
			SkillPoints: [130],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,154,0,132,0,0,0];
			}
		},

	83: 	{
			SkillPoints: [130],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,154,0,132,0,0,0];
			}
		},

	84: 	{
			SkillPoints: [130],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,154,0,132,0,0,0];
			}
		},

	85: 	{
			SkillPoints: [130],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,154,0,132,0,0,0];
			}
		},

	86: 	{
			SkillPoints: [130],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,154,0,132,0,0,0];
			}
		},

	87: 	{
			SkillPoints: [130],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,154,0,132,0,0,0];
			}
		},

	88: 	{
			SkillPoints: [130],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,154,0,132,0,0,0];
			}
		},

	89: 	{
			SkillPoints: [130],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,154,0,132,0,0,0];
			}
		},

	90: 	{
			SkillPoints: [130],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,154,0,132,0,0,0];
			}
		},

	91: 	{
			SkillPoints: [130],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,154,0,132,0,0,0];
			}
		},

	92: 	{
			SkillPoints: [130],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,154,0,132,0,0,0];
			}
		},

	93: 	{
			SkillPoints: [130],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,154,0,132,0,0,0];
			}
		},

	94: 	{
			SkillPoints: [130],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,154,0,132,0,0,0];
			}
		},

	95: 	{
			SkillPoints: [130],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,154,0,132,0,0,0];
			}
		},

	96: 	{
			SkillPoints: [130],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,154,0,132,0,0,0];
			}
		},

	97: 	{
			SkillPoints: [130],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,154,0,132,0,0,0];
			}
		},

	98: 	{
			SkillPoints: [137],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,154,0,132,0,0,0];
			}
		},

	99: 	{
			SkillPoints: [137],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[146,154,0,132,0,0,0];
			}
		}
};
