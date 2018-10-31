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
				Config.PickitFiles.push("AutoEquip/Summoner.xpac.nip");
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
				Config.PickRange=60;
				Config.BossPriority=true;
				Config.Leader="Zer_Shout";
				Scripts.LevelLeader=false;
				Scripts.LevelFollower=true;
				Config.ActiveSummon=true;
			}
		},

	2: 	{
			SkillPoints: [70],//Raise Skeleton
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.Skeletons="max";
			}
		},

	3: 	{
			SkillPoints: [66],//Amplify Damage
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.Curse[0]=66;
				Config.Curse[1]=66;				
			}
		},

	4: 	{
			SkillPoints: [68],//Bone Armor
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	5: 	{
			SkillPoints: [69],//Skeletal Mastery
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	6: 	{
			SkillPoints: [70],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	7: 	{
			SkillPoints: [75],//Clay Golem
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.Golem="Clay";
			}
		},

	8: 	{
			SkillPoints: [70],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	9: 	{
			SkillPoints: [70],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	10: 	{
			SkillPoints: [70],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	11: 	{
			SkillPoints: [70],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.MinColumn=[3,3,3,3];
			}
		},

	12: 	{
			SkillPoints: [80],//Raise Skeletal Mage
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.SkeletonMages="max";
			}
		},

	13: 	{
			SkillPoints: [80],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	14: 	{
			SkillPoints: [80],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	15: 	{
			SkillPoints: [70],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.PickitFiles.splice(Config.PickitFiles.indexOf("Pre15.nip"), 1);
			}
		},

	16: 	{
			SkillPoints: [70],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	17: 	{
			SkillPoints: [70],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	18: 	{
			SkillPoints: [70],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	19: 	{
			SkillPoints: [70],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	20: 	{
			SkillPoints: [70],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.UseMerc=true;
			}
		},

	21: 	{
			SkillPoints: [70],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	22: 	{
			SkillPoints: [70],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	23: 	{
			SkillPoints: [72],//Weaken
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	24: 	{
			SkillPoints: [89],//Summon Resist
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.Dodge=true;
				Config.DodgeRange=15;
				Config.DodgeHP=100;
			}
		},

	25: 	{
			SkillPoints: [90],//Iron Golem
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	26: 	{
			SkillPoints: [76],//Iron Maiden
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	27: 	{
			SkillPoints: [77],//Terror
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.Curse[0]=66;
				Config.Curse[1]=77;	
			}
		},

	28: 	{
			SkillPoints: [82],//Life Tap
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.Curse[0]=82;
				Config.Curse[1]=82;	
			}
		},

	29: 	{
			SkillPoints: [87],//Decrepify
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.Curse[0]=87;
				Config.Curse[1]=82;
			}
		},

	30: 	{
			SkillPoints: [95],//Revive
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.Revives="max";
				Config.ReviveUnstackable=true;
			}
		},

	31: 	{
			SkillPoints: [91],//Lower Resist
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.Curse[0]=91;
				Config.Curse[1]=91;
			}
		},

	32: 	{
			SkillPoints: [70],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	33: 	{
			SkillPoints: [70],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	34: 	{
			SkillPoints: [70],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	35: 	{
			SkillPoints: [70],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	36: 	{
			SkillPoints: [70],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	37: 	{
			SkillPoints: [70],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	38: 	{
			SkillPoints: [80],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	39: 	{
			SkillPoints: [80],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	40: 	{
			SkillPoints: [80],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.PickitFiles.splice(Config.PickitFiles.indexOf("Pre40.nip"), 1);
			}
		},

	41: 	{
			SkillPoints: [80],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	42: 	{
			SkillPoints: [80],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	43: 	{
			SkillPoints: [80],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	44: 	{
			SkillPoints: [80],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	45: 	{
			SkillPoints: [80],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	46: 	{
			SkillPoints: [80],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	47: 	{
			SkillPoints: [80],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	48: 	{
			SkillPoints: [80],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	49: 	{
			SkillPoints: [80],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	50: 	{
			SkillPoints: [80],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	51: 	{
			SkillPoints: [80],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	52: 	{
			SkillPoints: [80],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	53: 	{
			SkillPoints: [80],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	54: 	{
			SkillPoints: [80],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	55: 	{
			SkillPoints: [69],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	56: 	{
			SkillPoints: [69],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	57: 	{
			SkillPoints: [69],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	58: 	{
			SkillPoints: [69],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	59: 	{
			SkillPoints: [69],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	60: 	{
			SkillPoints: [69],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	61: 	{
			SkillPoints: [69],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	62: 	{
			SkillPoints: [69],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	63: 	{
			SkillPoints: [69],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	64: 	{
			SkillPoints: [69],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	65: 	{
			SkillPoints: [69],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	66: 	{
			SkillPoints: [69],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	67: 	{
			SkillPoints: [69],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	68: 	{
			SkillPoints: [69],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	69: 	{
			SkillPoints: [69],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	70: 	{
			SkillPoints: [69],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	71: 	{
			SkillPoints: [69],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	72: 	{
			SkillPoints: [69],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	73: 	{
			SkillPoints: [69],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	74: 	{
			SkillPoints: [95],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	75: 	{
			SkillPoints: [95],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	76: 	{
			SkillPoints: [95],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	77: 	{
			SkillPoints: [95],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	78: 	{
			SkillPoints: [95],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	79: 	{
			SkillPoints: [95],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	80: 	{
			SkillPoints: [95],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	81: 	{
			SkillPoints: [95],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	82: 	{
			SkillPoints: [95],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	83: 	{
			SkillPoints: [95],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	84: 	{
			SkillPoints: [95],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	85: 	{
			SkillPoints: [95],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	86: 	{
			SkillPoints: [95],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	87: 	{
			SkillPoints: [95],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	88: 	{
			SkillPoints: [95],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	89: 	{
			SkillPoints: [95],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	90: 	{
			SkillPoints: [95],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	91: 	{
			SkillPoints: [95],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	92: 	{
			SkillPoints: [95],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	93: 	{
			SkillPoints: [75],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	94: 	{
			SkillPoints: [75],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	95: 	{
			SkillPoints: [75],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	96: 	{
			SkillPoints: [75],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	97: 	{
			SkillPoints: [75],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	98: 	{
			SkillPoints: [75],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		},

	99: 	{
			SkillPoints: [75],
			StatPoints: [0,3,3,3,3],
			Update: function (){
				Config.AttackSkill=[70,70,70,70,70,70,70];
			}
		}
};
