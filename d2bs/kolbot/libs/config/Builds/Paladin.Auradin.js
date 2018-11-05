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
				Config.PickitFiles.push("AutoEquip/Auradin.xpac.nip");
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
				Config.AttackSkill=[0,97,98,97,98,0,0];
			}
		},

	4: 	{
			SkillPoints: [99],//Prayer
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[0,97,99,97,99,0,0];
			}
		},

	5: 	{
			SkillPoints: [99],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[0,97,99,97,99,0,0];
			}
		},

	6: 	{
			SkillPoints: [99],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[0,97,99,97,99,0,0];
			}
		},

	7: 	{
			SkillPoints: [99],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[0,97,99,97,99,0,0];
			}
		},

	8: 	{
			SkillPoints: [99],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[0,97,99,97,99,0,0];
			}
		},

	9: 	{
			SkillPoints: [99],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[0,97,99,97,99,0,0];
			}
		},

	10: 	{
			SkillPoints: [99],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[0,97,99,97,99,0,0];
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
			SkillPoints: [107],//Charge
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[0,97,99,97,99,0,0];
			}
		},

	13: 	{
			SkillPoints: [109],//Cleansing
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[0,97,99,97,99,0,0];
			}
		},

	14: 	{
			SkillPoints: [99],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[0,97,99,97,99,0,0];
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
				Config.AttackSkill=[0,97,99,97,99,0,0];
			}
		},

	17: 	{
			SkillPoints: [99],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[0,97,99,97,99,0,0];
			}
		},

	18: 	{
			SkillPoints: [99],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[0,97,99,97,99,0,0];
			}
		},

	19: 	{
			SkillPoints: [99],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[0,97,99,97,99,0,0];
			}
		},

	20: 	{
			SkillPoints: [99],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.UseMerc=true;
			}
		},

	21: 	{
			SkillPoints: [99],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[0,97,99,97,99,0,0];
			}
		},

	22: 	{
			SkillPoints: [101],//Holy Bolt
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[0,97,99,97,99,0,0];
			}
		},

	23: 	{
			SkillPoints: [112],//Blessed Hammer
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[0,97,99,97,99,0,0];
			}
		},

	24: 	{
			SkillPoints: [120],//Meditation
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,120,101,120,0,120];
				Config.LowManaSkill=[0,120];
			}
		},

	25: 	{
			SkillPoints: [117],//Holy Shield
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,120,101,120,0,120];
			}
		},

	26: 	{
			SkillPoints: [120],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,120,101,120,0,120];
			}
		},

	27: 	{
			SkillPoints: [120],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,120,101,120,0,120];
			}
		},

	28: 	{
			SkillPoints: [104],//Defiance
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,120,101,120,0,120];
			}
		},

	29: 	{
			SkillPoints: [115],//Vigor
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,120,101,120,0,120];
			}
		},

	30: 	{
			SkillPoints: [124,125],//Redemption,Salvation
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,120,101,120,0,120];
			}
		},

	31: 	{
			SkillPoints: [120],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		},

	32: 	{
			SkillPoints: [120],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		},

	33: 	{
			SkillPoints: [120],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		},

	34: 	{
			SkillPoints: [120],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		},

	35: 	{
			SkillPoints: [120],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		},

	36: 	{
			SkillPoints: [120],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		},

	37: 	{
			SkillPoints: [120],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		},

	38: 	{
			SkillPoints: [120],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		},

	39: 	{
			SkillPoints: [120],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		},

	40: 	{
			SkillPoints: [120],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.PickitFiles.splice(Config.PickitFiles.indexOf("Pre40.nip"), 1);
			}
		},

	41: 	{
			SkillPoints: [120],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		},

	42: 	{
			SkillPoints: [120],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		},

	43: 	{
			SkillPoints: [120],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		},

	44: 	{
			SkillPoints: [120],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		},

	45: 	{
			SkillPoints: [120],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		},

	46: 	{
			SkillPoints: [120],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		},

	47: 	{
			SkillPoints: [120],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		},

	48: 	{
			SkillPoints: [120],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		},

	49: 	{
			SkillPoints: [99],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		},

	50: 	{
			SkillPoints: [99],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		},

	51: 	{
			SkillPoints: [99],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		},

	52: 	{
			SkillPoints: [99],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		},

	53: 	{
			SkillPoints: [125],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		},

	54: 	{
			SkillPoints: [125],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		},

	55: 	{
			SkillPoints: [125],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		},

	56: 	{
			SkillPoints: [125],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		},

	57: 	{
			SkillPoints: [125],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		},

	58: 	{
			SkillPoints: [125],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		},

	59: 	{
			SkillPoints: [125],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		},

	60: 	{
			SkillPoints: [125],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		},

	61: 	{
			SkillPoints: [100],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		},

	62: 	{
			SkillPoints: [100],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		},

	63: 	{
			SkillPoints: [100],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		},

	64: 	{
			SkillPoints: [100],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		},

	65: 	{
			SkillPoints: [100],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		},

	66: 	{
			SkillPoints: [100],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		},

	67: 	{
			SkillPoints: [100],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		},

	68: 	{
			SkillPoints: [100],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		},

	69: 	{
			SkillPoints: [100],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		},

	70: 	{
			SkillPoints: [100],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		},

	71: 	{
			SkillPoints: [100],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		},

	72: 	{
			SkillPoints: [100],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		},

	73: 	{
			SkillPoints: [100],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		},

	74: 	{
			SkillPoints: [100],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		},

	75: 	{
			SkillPoints: [100],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		},

	76: 	{
			SkillPoints: [115],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		},

	77: 	{
			SkillPoints: [115],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		},

	78: 	{
			SkillPoints: [115],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		},

	79: 	{
			SkillPoints: [115],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		},

	80: 	{
			SkillPoints: [115],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		},

	81: 	{
			SkillPoints: [115],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		},

	82: 	{
			SkillPoints: [115],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		},

	83: 	{
			SkillPoints: [115],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		},

	84: 	{
			SkillPoints: [115],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		},

	85: 	{
			SkillPoints: [115],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		},

	86: 	{
			SkillPoints: [115],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		},

	87: 	{
			SkillPoints: [115],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		},

	88: 	{
			SkillPoints: [115],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		},

	89: 	{
			SkillPoints: [115],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		},

	90: 	{
			SkillPoints: [115],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		},

	91: 	{
			SkillPoints: [117],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		},

	92: 	{
			SkillPoints: [117],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		},

	93: 	{
			SkillPoints: [117],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		},

	94: 	{
			SkillPoints: [117],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		},

	95: 	{
			SkillPoints: [117],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		},

	96: 	{
			SkillPoints: [117],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		},

	97: 	{
			SkillPoints: [117],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		},

	98: 	{
			SkillPoints: [117],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		},

	99: 	{
			SkillPoints: [117],
			StatPoints: [0,2,3,3,3],
			Update: function (){
				Config.AttackSkill=[101,101,125,101,120,0,120];
			}
		}
};
