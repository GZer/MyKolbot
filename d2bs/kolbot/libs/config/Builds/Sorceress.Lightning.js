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
				Config.PickitFiles.push("Pre50.nip");
				Config.PickitFiles.push("Pre40.nip");
				Config.PickitFiles.push("Pre30.nip");
				Config.PickitFiles.push("Pre15.nip");
				Config.PickitFiles.push("AutoEquip/Lightning.xpac.nip");
				Config.PickitFiles.push("AutoEquip/Merc.xpac.nip");
				Config.Inventory[0] = [1,1,1,1,1,1,1,1,1,1];
				Config.Inventory[1] = [1,1,1,1,1,1,1,1,1,1];
				Config.Inventory[2] = [1,1,1,1,1,1,1,1,1,1];
				Config.Inventory[3] = [1,1,1,1,1,1,1,1,1,1];
				Config.AutoEquip = true;
				Config.OpenChests=false;
				Config.ClearType=0;//Monster spectype to kill in level clear scripts (0=all)
				Config.LogExperience=true;//Print experience statistics in the manager.
				Config.StashGold=200;//Minimum amount of gold to stash.
				Config.AttackSkill=[36,36,36,36,36,0,0];
				Config.LowManaSkill=[0,0];
				Config.PublicMode=2;
				Config.ScanShrines=[17,1,2,3,15,13,12,8,9,10,11];
				Config.BeltColumn=["hp","hp","mp","mp"];//Keep tons of health potions!
				Config.MinColumn=[2,2,2,2];
				Config.HealHP=99;
				Config.HealMP=99;
				Config.LifeChicken=20;
				Config.ManaChicken=0;
				Config.MercChicken=0;
				Config.UseHP=60;
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
			SkillPoints: [37],//Warmth
			StatPoints: [0,1,1,3,3],//Str,Vit + 1 & Energy +3
			Update: function (){
				Config.StaticList=[250,704,705,706,707,708,709,710,711,712,713,714,715,716,717,718,719,720,721,723,724,725,726,727
				,728,729,730,731,732,733,734,735,736,737,738,739,740,741,742,743,744,745,746,747,748,749,750,751,752,753,754,755,756
				,757,758,759,760,761,762,763,764,765,766,767,768,769];
			}
		},
		
	3: 	{
			SkillPoints: [40],//Frozen Armor
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[36,36,36,36,36,0,0];
			}
		},
		
	4: 	{
			SkillPoints: [38],//Charged Bolt
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[38,36,36,38,38,36,36];
			}
		},

	5: 	{
			SkillPoints: [38],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.Dodge=true;
				Config.DodgeRange=10;
				Config.DodgeHP=50;
			}
		},

	6: 	{
			SkillPoints: [42],//Static
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[38,36,36,38,38,36,36];
			}
		},

	7: 	{
			SkillPoints: [43],//Telekinesis
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[38,36,36,38,38,36,36];			
			}				
		},

	8: 	{
			SkillPoints: [38],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[38,36,36,38,38,36,36];
			}	
		},

	9: 	{
			SkillPoints: [38],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[38,38,38,38,38,36,36];
			}
		},

	10: 	{
			SkillPoints: [38],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.DodgeRange=15;
				Config.DodgeHP=40;
			}
		},

	11: 	{
			SkillPoints: [38],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.MinColumn=[3,3,3,3];
			}
		},

	12: 	{
			SkillPoints: [49],//Lightning
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,38,38,36,36];
			}
		},

	13: 	{
			SkillPoints: [49],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,38,38,36,36];
			}	
		},

	14: 	{
			SkillPoints: [48],//Nova
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,38,38,36,36];
			}	
		},

	15: 	{
			SkillPoints: [49],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.PickitFiles.splice(Config.PickitFiles.indexOf("Pre15.nip"),1);
			}	
		},

	16: 	{
			SkillPoints: [49],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.UseMP=10;
			}	
		},

	17: 	{
			SkillPoints: [49],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,38,38,36,36];
			}	
		},

	18: 	{
			SkillPoints: [54],//Teleport
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.LowManaSkill=[38,38];
				Config.DodgeRange=20;
				Config.DodgeHP=75;
			}	
		},

	19: 	{
			SkillPoints: [49],
			StatPoints: [0,1,1,3,3],	
			Update: function (){
				Config.BeltColumn=["hp","rv","rv","mp"];
			}
		},

	20: 	{
			SkillPoints: [53],//Chain Lightning
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
				Config.UseMerc=true;
			}
		},

	21: 	{
			SkillPoints: [49],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}	
		},

	22: 	{
			SkillPoints: [49],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}	
		},

	23: 	{
			SkillPoints: [49],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}	
		},

	24: 	{
			SkillPoints: [57],//Thunder Storm
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.DodgeRange=20;
				Config.DodgeHP=95;
			}
		},

	25: 	{
			SkillPoints: [49,58],//Energy Shield
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}	
		},

	26: 	{
			SkillPoints: [49],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}	
		},

	27: 	{
			SkillPoints: [49],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}	
		},

	28: 	{
			SkillPoints: [49],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}	
		},

	29: 	{
			SkillPoints: [49],
			StatPoints: [0,1,1,3,3],	
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	30: 	{
			SkillPoints: [49,63],//Lightning Mastery
			StatPoints: [0,1,1,3,3],	
			Update: function (){
				Config.MinColumn=[4,4,4,4];
			}
		},

	31: 	{
			SkillPoints: [49],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	32: 	{
			SkillPoints: [49],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	33: 	{
			SkillPoints: [49],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	34: 	{
			SkillPoints: [49],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	35: 	{
			SkillPoints: [49],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	36: 	{
			SkillPoints: [49],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	37: 	{
			SkillPoints: [49],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	38: 	{
			SkillPoints: [49],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	39: 	{
			SkillPoints: [63],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	40: 	{
			SkillPoints: [63],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.PickitFiles.splice(Config.PickitFiles.indexOf("Pre40.nip"),1);
			}
		},

	41: 	{
			SkillPoints: [63],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	42: 	{
			SkillPoints: [63],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	43: 	{
			SkillPoints: [63],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	44: 	{
			SkillPoints: [63],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	45: 	{
			SkillPoints: [63],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	46: 	{
			SkillPoints: [63],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	47: 	{
			SkillPoints: [63],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	48: 	{
			SkillPoints: [63],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	49: 	{
			SkillPoints: [63],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	50: 	{
			SkillPoints: [63],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	51: 	{
			SkillPoints: [63],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	52: 	{
			SkillPoints: [63],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	53: 	{
			SkillPoints: [63],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	54: 	{
			SkillPoints: [63],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	55: 	{
			SkillPoints: [63],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	56: 	{
			SkillPoints: [63],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	57: 	{
			SkillPoints: [63],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	58: 	{
			SkillPoints: [38],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	59: 	{
			SkillPoints: [38],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	60: 	{
			SkillPoints: [38],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	61: 	{
			SkillPoints: [38],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	62: 	{
			SkillPoints: [38],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	63: 	{
			SkillPoints: [38],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	64: 	{
			SkillPoints: [38],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	65: 	{
			SkillPoints: [38],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	66: 	{
			SkillPoints: [38],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	67: 	{
			SkillPoints: [38],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	68: 	{
			SkillPoints: [38],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	69: 	{
			SkillPoints: [38],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	70: 	{
			SkillPoints: [38],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	71: 	{
			SkillPoints: [53],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	72: 	{
			SkillPoints: [53],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	73: 	{
			SkillPoints: [53],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	74: 	{
			SkillPoints: [53],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	75: 	{
			SkillPoints: [53],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	76: 	{
			SkillPoints: [53],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	77: 	{
			SkillPoints: [53],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	78: 	{
			SkillPoints: [53],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	79: 	{
			SkillPoints: [53],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	80: 	{
			SkillPoints: [53],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	81: 	{
			SkillPoints: [53],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	82: 	{
			SkillPoints: [53],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	83: 	{
			SkillPoints: [53],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	84: 	{
			SkillPoints: [53],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	85: 	{
			SkillPoints: [53],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	86: 	{
			SkillPoints: [53],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	87: 	{
			SkillPoints: [53],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	88: 	{
			SkillPoints: [53],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	89: 	{
			SkillPoints: [53],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	90: 	{
			SkillPoints: [48],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	91: 	{
			SkillPoints: [48],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	92: 	{
			SkillPoints: [48],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	93: 	{
			SkillPoints: [48],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	94: 	{
			SkillPoints: [48],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	95: 	{
			SkillPoints: [48],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	96: 	{
			SkillPoints: [48],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	97: 	{
			SkillPoints: [48],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	98: 	{
			SkillPoints: [48],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		},

	99: 	{
			SkillPoints: [48],
			StatPoints: [0,1,1,3,3],
			Update: function (){
				Config.AttackSkill=[42,49,49,49,49,53,53];
			}
		}
};
