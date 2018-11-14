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
				Config.PickitFiles.push("EndGame.nip");
				Config.PickitFiles.push("Pre50.nip");
				Config.PickitFiles.push("Pre40.nip");
				Config.PickitFiles.push("Pre30.nip");
				Config.PickitFiles.push("Pre15.nip");
				Config.PickitFiles.push("AutoEquip/Hammerdin.xpac.nip");
				Config.PickitFiles.push("AutoEquip/PreMerc.xpac.nip");
				Config.PickitFiles.push("AutoEquip/Merc.xpac.nip");
				Config.Inventory[0]=[1,1,1,1,1,1,1,1,1,1];
				Config.Inventory[1]=[1,1,1,1,1,1,1,1,1,1];
				Config.Inventory[2]=[1,1,1,1,1,1,1,1,1,1];
				Config.Inventory[3]=[1,1,1,1,1,1,1,1,1,1];
				Config.AutoEquip=true;
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
				Scripts.LevelLeader=false;
				Scripts.LevelFollower=true;
			}
		},

	2: 	{
			SkillPoints: [98],//Might
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[0,0,98,0,98,0,0];
			}
		},

	3: 	{
			SkillPoints: [97],//Smite
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[0,97,98,97,98,0,98];
			}
		},

	4: 	{
			SkillPoints: [99],//Prayer
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[0,97,98,97,98,0,98];
			}
		},

	5: 	{
			SkillPoints: [-1],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[0,97,98,97,98,0,98];
			}
		},

	6: 	{
			SkillPoints: [104],//Defiance
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[0,97,98,97,98,0,98];
			}
		},

	7: 	{
			SkillPoints: [101],//Holy Bolt
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[0,97,98,97,98,0,98];
			}
		},

	8: 	{
			SkillPoints: [-1],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[0,97,98,97,98,0,98];
			}
		},

	9: 	{
			SkillPoints: [-1],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[0,97,98,97,98,0,98];
			}
		},

	10: 	{
			SkillPoints: [-1],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[0,97,98,97,98,0,98];
			}
		},

	11: 	{
			SkillPoints: [-1],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.MinColumn=[3,3,3,3];
			}
		},

	12: 	{
			SkillPoints: [108],//Blessed Aim
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[0,97,98,97,98,0,98];
			}
		},

	13: 	{
			SkillPoints: [107],//Charge
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[0,97,98,97,98,0,98];
			}
		},

	14: 	{
			SkillPoints: [109],//Cleansing
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[0,97,98,97,98,0,98];
			}
		},

	15: 	{
			SkillPoints: [-1],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.PickitFiles.splice(Config.PickitFiles.indexOf("Pre15.nip"),1);
			}
		},

	16: 	{
			SkillPoints: [-1],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[0,97,98,97,98,0,98];
			}
		},

	17: 	{
			SkillPoints: [-1],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[0,97,98,97,98,0,98];
			}
		},

	18: 	{
			SkillPoints: [115,112,113],//Vigor,Blessed Hammer,Concentration
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	19: 	{
			SkillPoints: [112,113],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.LowManaSkill=[0,113];
			}
		},

	20: 	{
			SkillPoints: [112,113],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.UseMerc=true;
				Config.PickitFiles.splice(Config.PickitFiles.indexOf("AutoEquip/PreMerc.xpac.nip"),1);
			}
		},

	21: 	{
			SkillPoints: [112,113],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	22: 	{
			SkillPoints: [112,113],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	23: 	{
			SkillPoints: [112,113],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	24: 	{
			SkillPoints: [117,112,113],//Holy Shield
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	25: 	{
			SkillPoints: [112],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	26: 	{
			SkillPoints: [112],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	27: 	{
			SkillPoints: [112],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	28: 	{
			SkillPoints: [112],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	29: 	{
			SkillPoints: [112],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.MinColumn=[4,4,4,4];
			}
		},

	30: 	{
			SkillPoints: [112],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.Redemption=[50,0];
				Config.PickitFiles.splice(Config.PickitFiles.indexOf("Pre30.nip"),1);
			}
		},

	31: 	{
			SkillPoints: [112],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	32: 	{
			SkillPoints: [112],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	33: 	{
			SkillPoints: [112],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	34: 	{
			SkillPoints: [112],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	35: 	{
			SkillPoints: [112],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	36: 	{
			SkillPoints: [112],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	37: 	{
			SkillPoints: [112],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	38: 	{
			SkillPoints: [112],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	39: 	{
			SkillPoints: [113],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	40: 	{
			SkillPoints: [113],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.PickitFiles.splice(Config.PickitFiles.indexOf("Pre40.nip"),1);
			}
		},

	41: 	{
			SkillPoints: [113],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	42: 	{
			SkillPoints: [113],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	43: 	{
			SkillPoints: [113],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	44: 	{
			SkillPoints: [113],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	45: 	{
			SkillPoints: [113],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	46: 	{
			SkillPoints: [113],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	47: 	{
			SkillPoints: [113],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	48: 	{
			SkillPoints: [113],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	49: 	{
			SkillPoints: [113],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	50: 	{
			SkillPoints: [113],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.PickitFiles.splice(Config.PickitFiles.indexOf("Pre50.nip"),1);
			}
		},

	51: 	{
			SkillPoints: [113],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	52: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	53: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	54: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	55: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	56: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	57: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	58: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	59: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	60: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	61: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	62: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	63: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	64: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	65: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	66: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	67: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	68: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	69: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	70: 	{
			SkillPoints: [115],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	71: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	72: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	73: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	74: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	75: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	76: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	77: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	78: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	79: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	80: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	81: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	82: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	83: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	84: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	85: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	86: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	87: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	88: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	89: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	90: 	{
			SkillPoints: [108],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	91: 	{
			SkillPoints: [117],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	92: 	{
			SkillPoints: [117],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	93: 	{
			SkillPoints: [117],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	94: 	{
			SkillPoints: [117],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	95: 	{
			SkillPoints: [117],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	96: 	{
			SkillPoints: [117],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	97: 	{
			SkillPoints: [117],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	98: 	{
			SkillPoints: [117],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		},

	99: 	{
			SkillPoints: [117],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[112,112,113,112,113,97,113];
			}
		}
};
