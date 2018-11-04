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
				Config.PickitFiles.push("Runes.nip");
				Config.PickitFiles.push("AutoEquip/Hammerdin.xpac.nip");
				Config.Inventory[0] = [1,1,1,1,1,1,1,1,1,1];
				Config.Inventory[1] = [1,1,1,1,1,1,1,1,1,1];
				Config.Inventory[2] = [1,1,1,1,1,1,1,1,1,1];
				Config.Inventory[3] = [1,1,1,1,1,1,1,1,1,1];
				Config.AutoEquip = true;
				Config.OpenChests=false;
				Config.ClearType=0;//Monster spectype to kill in level clear scripts (0=all)
				Config.LogExperience=true;//Print experience statistics in the manager.
				Config.StashGold=200;//Minimum amount of gold to stash.
				Config.AttackSkill=[0,0,0,0,0,0,0];
				Config.LowManaSkill=[0,0];
				Config.PublicMode=2;
				Config.ScanShrines=[17,1,2,15,6,7,12,14,8,9,10,11];
				Config.BeltColumn=["hp","hp","hp","mp"];//Keep tons of health potions!
				Config.MinColumn=[2,2,2,2];
				Config.HealHP=99;
				Config.HealMP=99;
				Config.LifeChicken=20;
				Config.ManaChicken=0;
				Config.MercChicken=0;
				Config.UseHP=50;
				Config.UseMP=3;
				Config.UseRejuvHP=25;
				Config.PickRange=60;
				Config.BossPriority=true;
				Config.Leader="Zer_Shout";
				Scripts.LevelLeader=true;
				Scripts.LevelFollower=false;
			}
		},

	2: 	{
			SkillPoints: [99],//Prayer
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[0,0,99,0,99,0,0];
			}
		},

	3: 	{
			SkillPoints: [98],//Might
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[0,0,98,0,99,0,0];
			}
		},

	4: 	{
			SkillPoints: [97],//Smite
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[0,97,98,97,99,0,0];
			}
		},

	5: 	{
			SkillPoints: [99],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[0,97,98,97,99,0,0];
			}
		},

	6: 	{
			SkillPoints: [104],//Defiance
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[0,97,98,97,99,0,0];
			}
		},

	7: 	{
			SkillPoints: [101],//Holy Bolt
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[0,97,98,97,99,0,0];
			}
		},

	8: 	{
			SkillPoints: [99],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[0,97,98,97,99,0,0];
			}
		},

	9: 	{
			SkillPoints: [99],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[0,97,98,97,99,0,0];
			}
		},

	10: 	{
			SkillPoints: [99],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[0,97,98,97,99,0,0];
			}
		},

	11: 	{
			SkillPoints: [99],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.MinColumn=[3,3,3,3];
			}
		},

	12: 	{
			SkillPoints: [108],//Blessed Aim
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[0,97,98,97,99,0,0];
			}
		},

	13: 	{
			SkillPoints: [107],//Charge
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[0,97,98,97,99,0,0];
			}
		},

	14: 	{
			SkillPoints: [109],//Cleansing
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[0,97,98,97,99,0,0];
			}
		},

	15: 	{
			SkillPoints: [99],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.PickitFiles.splice(Config.PickitFiles.indexOf("Pre15.nip"), 1);
			}
		},

	16: 	{
			SkillPoints: [99],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[0,97,98,97,99,0,0];
				Config.MakeRunewords=true;
				Config.Runewords.push([Runeword.Insight,"Voulge"]);
				Config.Runewords.push([Runeword.AncientsPledge,"Large Shield"]);
			}
		},

	17: 	{
			SkillPoints: [99],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[0,97,98,97,99,0,0];
			}
		},

	18: 	{
			SkillPoints: [112],//Blessed Hammer
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,99,112,99,97,98];
			}
		},

	19: 	{
			SkillPoints: [115],//Vigor
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,99,112,99,97,98];
			}
		},

	20: 	{
			SkillPoints: [113],//Concentration
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.UseMerc=true;
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	21: 	{
			SkillPoints: [112],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.LowManaSkill=[0,113];
			}
		},

	22: 	{
			SkillPoints: [112],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	23: 	{
			SkillPoints: [112],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	24: 	{
			SkillPoints: [117],//Holy Shield
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	25: 	{
			SkillPoints: [112],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	26: 	{
			SkillPoints: [112],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	27: 	{
			SkillPoints: [112],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	28: 	{
			SkillPoints: [112],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	29: 	{
			SkillPoints: [112],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	30: 	{
			SkillPoints: [124],//Redemption
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.Redemption = [50, 15];
			}
		},

	31: 	{
			SkillPoints: [112],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	32: 	{
			SkillPoints: [112],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	33: 	{
			SkillPoints: [112],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	34: 	{
			SkillPoints: [112],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	35: 	{
			SkillPoints: [112],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	36: 	{
			SkillPoints: [112],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	37: 	{
			SkillPoints: [112],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	38: 	{
			SkillPoints: [113],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	39: 	{
			SkillPoints: [113],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	40: 	{
			SkillPoints: [113],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.PickitFiles.splice(Config.PickitFiles.indexOf("Pre40.nip"), 1);
			}
		},

	41: 	{
			SkillPoints: [113],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	42: 	{
			SkillPoints: [113],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	43: 	{
			SkillPoints: [113],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	44: 	{
			SkillPoints: [113],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	45: 	{
			SkillPoints: [113],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	46: 	{
			SkillPoints: [113],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	47: 	{
			SkillPoints: [113],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	48: 	{
			SkillPoints: [113],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	49: 	{
			SkillPoints: [113],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	50: 	{
			SkillPoints: [113],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	51: 	{
			SkillPoints: [113],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	52: 	{
			SkillPoints: [113],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	53: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	54: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	55: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	56: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	57: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	58: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	59: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	60: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	61: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	62: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	63: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	64: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	65: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	66: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	67: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	68: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	69: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	70: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	71: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	72: 	{
			SkillPoints: [115],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	73: 	{
			SkillPoints: [115],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	74: 	{
			SkillPoints: [115],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	75: 	{
			SkillPoints: [115],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	76: 	{
			SkillPoints: [115],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	77: 	{
			SkillPoints: [115],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	78: 	{
			SkillPoints: [115],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	79: 	{
			SkillPoints: [115],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	80: 	{
			SkillPoints: [115],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	81: 	{
			SkillPoints: [115],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	82: 	{
			SkillPoints: [115],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	83: 	{
			SkillPoints: [115],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	84: 	{
			SkillPoints: [115],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	85: 	{
			SkillPoints: [115],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	86: 	{
			SkillPoints: [115],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	87: 	{
			SkillPoints: [115],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	88: 	{
			SkillPoints: [115],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	89: 	{
			SkillPoints: [115],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	90: 	{
			SkillPoints: [115],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	91: 	{
			SkillPoints: [117],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	92: 	{
			SkillPoints: [117],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	93: 	{
			SkillPoints: [117],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	94: 	{
			SkillPoints: [117],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	95: 	{
			SkillPoints: [117],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	96: 	{
			SkillPoints: [117],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	97: 	{
			SkillPoints: [117],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	98: 	{
			SkillPoints: [117],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		},

	99: 	{
			SkillPoints: [117],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,98];
			}
		}
};
