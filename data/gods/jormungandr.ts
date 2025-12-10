import { God, DamageType } from '../../types';

export const JORMUNGANDR: God = {
  id: 'jormungandr',
  name: 'Jormungandr',
  title: 'The World Serpent',
  pantheon: 'Norse',
  role: 'Guardian',
  lanes: ['Solo', 'Support'],
  damageType: DamageType.Magical,
  image: 'https://static.smite2.live/smite2/GODS/Jormungandr/Default/t_GodCard_Jormungandr.webp',
  videoGuideUrl: '',
  goodAgainst: [],
  badAgainst: [],
  levelingOrder: [],
  statsByLevel: [
    // Level 1
    { strength: 0, intelligence: 0, inhandPower: 20, baseAttackSpeed: 1, attackSpeedPercent: 1, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 20.5, magicalProtection: 29.7, damageMitigation: 0, maxHealth: 672.3, healthRegen: 1.77, maxMana: 296, manaRegen: 2.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 0 },
    // Level 2
    { strength: 0, intelligence: 0, inhandPower: 24, baseAttackSpeed: 1, attackSpeedPercent: 2, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 23.8, magicalProtection: 31.3, damageMitigation: 0, maxHealth: 777.6, healthRegen: 1.98, maxMana: 338, manaRegen: 2.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 308 },
    // Level 3
    { strength: 0, intelligence: 0, inhandPower: 28, baseAttackSpeed: 1, attackSpeedPercent: 3, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 27, magicalProtection: 32.9, damageMitigation: 0, maxHealth: 882.9, healthRegen: 2.18, maxMana: 380, manaRegen: 2.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 32, baseAttackSpeed: 1, attackSpeedPercent: 4, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 30.2, magicalProtection: 34.6, damageMitigation: 0, maxHealth: 988.2, healthRegen: 2.39, maxMana: 422, manaRegen: 3, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 36, baseAttackSpeed: 1, attackSpeedPercent: 5, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 33.5, magicalProtection: 36.2, damageMitigation: 0, maxHealth: 1093.5, healthRegen: 2.6, maxMana: 464, manaRegen: 3.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 40, baseAttackSpeed: 1, attackSpeedPercent: 6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 36.7, magicalProtection: 37.8, damageMitigation: 0, maxHealth: 1198.8, healthRegen: 2.81, maxMana: 506, manaRegen: 3.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 44, baseAttackSpeed: 1, attackSpeedPercent: 7, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 40, magicalProtection: 39.4, damageMitigation: 0, maxHealth: 1304.1, healthRegen: 3.02, maxMana: 548, manaRegen: 3.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 48, baseAttackSpeed: 1, attackSpeedPercent: 8, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 43.2, magicalProtection: 41, damageMitigation: 0, maxHealth: 1409.4, healthRegen: 3.22, maxMana: 590, manaRegen: 4, cooldownRate: 0, movementSpeed: 375, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 52, baseAttackSpeed: 1, attackSpeedPercent: 9, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 46.4, magicalProtection: 42.7, damageMitigation: 0, maxHealth: 1514.7, healthRegen: 3.43, maxMana: 632, manaRegen: 4.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 58, baseAttackSpeed: 1, attackSpeedPercent: 10, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 49.7, magicalProtection: 44.3, damageMitigation: 0, maxHealth: 1620, healthRegen: 3.64, maxMana: 674, manaRegen: 4.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 60, baseAttackSpeed: 1, attackSpeedPercent: 11, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 52.9, magicalProtection: 45.9, damageMitigation: 0, maxHealth: 1725.3, healthRegen: 3.85, maxMana: 716, manaRegen: 4.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 64, baseAttackSpeed: 1, attackSpeedPercent: 12, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 56.2, magicalProtection: 47.5, damageMitigation: 0, maxHealth: 1830.6, healthRegen: 4.06, maxMana: 758, manaRegen: 5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 68, baseAttackSpeed: 1, attackSpeedPercent: 13, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 59.4, magicalProtection: 49.1, damageMitigation: 0, maxHealth: 1935.9, healthRegen: 4.26, maxMana: 800, manaRegen: 5.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 72, baseAttackSpeed: 1, attackSpeedPercent: 14, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 62.6, magicalProtection: 50.8, damageMitigation: 0, maxHealth: 2041.2, healthRegen: 4.47, maxMana: 842, manaRegen: 5.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 76, baseAttackSpeed: 1, attackSpeedPercent: 15, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 65.9, magicalProtection: 52.4, damageMitigation: 0, maxHealth: 2146.5, healthRegen: 4.68, maxMana: 884, manaRegen: 5.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 80, baseAttackSpeed: 1, attackSpeedPercent: 16, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 69.1, magicalProtection: 54, damageMitigation: 0, maxHealth: 2251.8, healthRegen: 4.89, maxMana: 926, manaRegen: 6, cooldownRate: 0, movementSpeed: 375, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 84, baseAttackSpeed: 1, attackSpeedPercent: 17, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 72.4, magicalProtection: 55.6, damageMitigation: 0, maxHealth: 2357.1, healthRegen: 5.1, maxMana: 968, manaRegen: 6.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 88, baseAttackSpeed: 1, attackSpeedPercent: 18, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 75.6, magicalProtection: 57.2, damageMitigation: 0, maxHealth: 2462.4, healthRegen: 5.3, maxMana: 1010, manaRegen: 6.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 92, baseAttackSpeed: 1, attackSpeedPercent: 19, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 78.8, magicalProtection: 58.9, damageMitigation: 0, maxHealth: 2567.7, healthRegen: 5.51, maxMana: 1052, manaRegen: 6.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 96, baseAttackSpeed: 1, attackSpeedPercent: 20, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 82.1, magicalProtection: 60.5, damageMitigation: 0, maxHealth: 2673, healthRegen: 5.72, maxMana: 1094, manaRegen: 7, cooldownRate: 0, movementSpeed: 375, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'Jormungandr Basic Attack',
    image: 'https://static.smite2.live/smite2/GODS/common/Icon_BasicAttack_Magical.webp',
    description: 'Deal Magical Damage to all enemies in front of you. As you attack, your Overheat increases causing your firing rate to decrease.\n\n• Increasing Attack Speed decreases the Overheat speed.\n• 5 attacks per sec. decreasing while firing to a minimum of 2 per sec.\n• Basic Attacks proc item hit effects for 40% damage and 20% healing.\n• Base Overheat Rate - 1.5 | Base Cooling Rate - 2.5 | Tick Rate - 0.1s\n• Inhand Movement Penalty is 50%.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage Scaling', value: '40% Strength or Inhand Power + 8% Intelligence' },
      { label: 'Attack Speed Conversion', value: '25%' },
      { label: 'Range', value: '5.6m' },
      { label: 'Cone Angle', value: '45 degrees' }
    ]
  },
  passive: {
    name: 'Immovable',
    image: 'https://static.smite2.live/smite2/GODS/Jormungandr/Abilities/Icons_Jormugandr_PSV.webp',
    description: 'You are immune to Hard Displacement, but are instead Dazed, a debuff that Slows you and increases the damage you take.\n\nHits from Basic attacks and Venomous Haze cause enemy gods to gain a debuff stack. At max stacks, the next hit deals damage based on your Max Health or Strength, and resets the debuff.\n\nWhichever is higher:\n• 6% Max Health Magical Damage.\n• 115% Strength Magical Damage.\n\nHard Displacement effects include: Banish, Grab, Knockback, Levitate and Vortex effects.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage Scaling (Max Health)', value: '6% Max Health' },
      { label: 'Damage Scaling (Strength)', value: '115% Strength' },
      { label: 'Max Stacks', value: '10' },
      { label: 'Debuff Duration', value: '6s' },
      { label: 'Slow', value: '15%' },
      { label: 'Increased Damage Taken', value: '5%' },
      { label: 'Daze Duration', value: '2s' }
    ]
  },
  abilities: {
    1: {
      name: 'Venomous Haze',
      image: 'https://static.smite2.live/smite2/GODS/Jormungandr/Abilities/Icons_Jormugandr_A01.webp',
      description: 'Fire noxious spit at an area dealing Magical Damage and creating a toxic cloud that persists for 20s.\n\n• The cloud deals Magical Damage, Slows and reduces enemy Healing.\n• While within the cloud, you gain extra Cooling for your Basic Attacks.\n• Interacting with a toxic cloud with other abilities reduces their duration to 8s.\n• You can have a maximum of 9 clouds active at once.\n• Cooling effect is 25% the base rate.',
      cooldown: '13 | 12.5 | 12 | 11.5 | 11s',
      cost: '50 | 55 | 60 | 65 | 70',
      attributes: [
        { label: 'Damage', value: '80 | 120 | 160 | 200 | 240' },
        { label: 'Damage Scaling', value: '40% Intelligence' },
        { label: 'Damage Per Tick', value: '10 | 20 | 30 | 40 | 50' },
        { label: 'Damage Scaling Per Tick', value: '5% Intelligence' },
        { label: 'Slow', value: '20%' },
        { label: 'Slow Duration', value: '1.5s' },
        { label: 'Healing Reduction', value: '25%' },
        { label: 'Range', value: '12m' },
        { label: 'Inner Radius', value: '1.6m' },
        { label: 'Outer Radius', value: '2.4m' }
      ]
    },
    2: {
      name: 'Consuming Bellow',
      image: 'https://static.smite2.live/smite2/GODS/Jormungandr/Abilities/Icons_Jormugandr_A02.webp',
      description: 'Channel briefly, drawing power from nearby toxic clouds, then roar to deal Magical Damage, Slow, and Tremble enemies around you.\n\n• Each cloud Empowers you and the roar, increasing its size and causing it to deal bonus Magical Damage per cloud.\n• While Empowered, your Basic Attacks fire at their maximum rate.\n• Size increases up to 3 times but the bonus damage is uncapped.\n• Each cloud provides 2s of Basic Attack Empowerment, up to 6s max.',
      cooldown: '12s',
      cost: '70',
      attributes: [
        { label: 'Damage', value: '120 | 180 | 240 | 300 | 360' },
        { label: 'Damage Scaling', value: '45% Intelligence + 30% Strength' },
        { label: 'Bonus Damage Per Cloud', value: '20 | 25 | 30 | 35 | 40' },
        { label: 'Bonus Damage Scaling', value: '10% Intelligence' },
        { label: 'Slow', value: '30%' },
        { label: 'Slow Duration', value: '1.5s' },
        { label: 'Inner Radius', value: '3.2m' },
        { label: 'Outer Radius', value: '4.8m' }
      ]
    },
    3: {
      name: 'Submerge',
      image: 'https://static.smite2.live/smite2/GODS/Jormungandr/Abilities/Icons_Jormugandr_A03.webp',
      description: 'Submerge into the ground, becoming Stealthed and gaining Movement Speed. Reactivate to emerge, Knocking Up and dealing Magical Damage to enemies.\n\n• While submerged, you pulse out a ring, gaining vision of enemies.\n• Emerging through a toxic cloud creates two new clouds.\n• Taking damage while in Stealth partially reveals you.',
      cooldown: '14s',
      cost: '70 | 75 | 80 | 85 | 90',
      attributes: [
        { label: 'Damage', value: '70 | 125 | 180 | 235 | 290' },
        { label: 'Damage Scaling', value: '50% Intelligence + 40% Strength' },
        { label: 'Movement Speed', value: '35%' },
        { label: 'Duration', value: '5s' },
        { label: 'Radius', value: '3.2m' },
        { label: 'Pulse Radius', value: '20m' }
      ]
    },
    4: {
      name: 'The World Serpent',
      image: 'https://static.smite2.live/smite2/GODS/Jormungandr/Abilities/Icons_Jormugandr_A04.webp',
      description: 'Enter into the world before diving up to three times across the battlefield. Each time you Submerge you deal Magical Damage to enemies hit.\n\n• Emerging out of the ground and your body Crashing down deals Magical Damage to enemies hit.\n• Each time you Emerge and Submerge, you Knock Up enemies and leave behind a low duration toxic cloud.\n• Each enemy god hit with this ability provides a stacking Protections buff when the ability ends.\n• You are CC Immune during this ability.\n• If you cannot dive to the target location when the time expires, the ability will end.',
      cooldown: '90s',
      cost: '50 | 55 | 60 | 65 | 70',
      attributes: [
        { label: 'Damage', value: '150 | 200 | 250 | 300 | 350' },
        { label: 'Damage Scaling', value: '35% Intelligence + 30% Strength' },
        { label: 'Emerge/Crash Damage', value: '75 | 100 | 125 | 150 | 175' },
        { label: 'Emerge/Crash Damage Scaling', value: '20% Intelligence + 15% Strength' },
        { label: 'Protections Per God Hit', value: '10 | 12 | 14 | 16 | 18' },
        { label: 'Buff Duration', value: '6s' },
        { label: 'Radius', value: '3.2m' },
        { label: 'Range', value: '16m' }
      ]
    }
  },
  aspects: [
    {
      id: 'unyielding',
      name: 'Aspect of the Unyielding',
      image: 'https://static.smite2.live/smite2/ui/talents/t_talent_Scaling.webp',
      description: 'Toxic clouds do not deal tick damage but allied gods within them gain Damage Reduction. Within them, you do not gain Cooling but lower cooldown for Venomous Haze. Consuming Bellow does not deal bonus damage but allies gain INT and STR. Submerge Knockup height is increased.',
      basicAttack: {
        name: 'Jormungandr Basic Attack',
        image: 'https://static.smite2.live/smite2/GODS/common/Icon_BasicAttack_Magical.webp',
        description: 'Deal Magical Damage to all enemies in front of you. As you attack, your Overheat increases causing your firing rate to decrease.\n\n• Increasing Attack Speed decreases the Overheat speed.\n• 5 attacks per sec. decreasing while firing to a minimum of 2 per sec.\n• Basic Attacks proc item hit effects for 40% damage and 20% healing.\n• Base Overheat Rate - 1.5 | Base Cooling Rate - 2.5 | Tick Rate - 0.1s\n• Inhand Movement Penalty is 50%.',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Damage Scaling', value: '40% Strength or Inhand Power + 8% Intelligence' },
          { label: 'Attack Speed Conversion', value: '25%' },
          { label: 'Range', value: '5.6m' },
          { label: 'Cone Angle', value: '45 degrees' }
        ]
      },
      passive: {
        name: 'Immovable',
        image: 'https://static.smite2.live/smite2/GODS/Jormungandr/Abilities/Icons_Jormugandr_PSV.webp',
        description: 'You are immune to Hard Displacement, but are instead Dazed, a debuff that Slows you and increases the damage you take.\n\nHits from Basic attacks and Venomous Haze cause enemy gods to gain a debuff stack. At max stacks, the next hit deals damage based on your Max Health or Strength, and resets the debuff.\n\nWhichever is higher:\n• 6% Max Health Magical Damage.\n• 115% Strength Magical Damage.\n\nHard Displacement effects include: Banish, Grab, Knockback, Levitate and Vortex effects.',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Damage Scaling (Max Health)', value: '6% Max Health' },
          { label: 'Damage Scaling (Strength)', value: '115% Strength' },
          { label: 'Max Stacks', value: '10' },
          { label: 'Debuff Duration', value: '6s' },
          { label: 'Slow', value: '15%' },
          { label: 'Increased Damage Taken', value: '5%' },
          { label: 'Daze Duration', value: '2s' }
        ]
      },
      abilities: {
        1: {
          name: 'Venomous Haze',
          image: 'https://static.smite2.live/smite2/GODS/Jormungandr/Abilities/Icons_Jormugandr_A01.webp',
          description: 'Fire noxious spit at an area dealing Magical Damage and creating a toxic cloud that persists for 20s.\n\n• The cloud Slows and reduces enemy Healing.\n• While within the cloud allies take reduced damage and this ability cooldown is reduced.\n• TOXIC CLOUDS NO LONGER DEAL TICK DAMAGE\n• ALLIES WITHIN CLOUDS GAIN DAMAGE REDUCTION\n• YOU NO LONGER GAIN COOLING BUT LOWER COOLDOWN FOR THIS ABILITY\n• Cooldown reduction applies every 0.5s.',
          cooldown: '13 | 12.5 | 12 | 11.5 | 11s',
          cost: '50 | 55 | 60 | 65 | 70',
          attributes: [
            { label: 'Damage', value: '80 | 120 | 160 | 200 | 240' },
            { label: 'Damage Scaling', value: '40% Intelligence' },
            { label: 'Slow', value: '20%' },
            { label: 'Slow Duration', value: '1.5s' },
            { label: 'Healing Reduction', value: '25%' },
            { label: 'Damage Taken Reduction', value: '8%' },
            { label: 'Damage Taken Reduction (Health Scaling)', value: '0.4% of Health from Items' },
            { label: 'Cooldown Reduction', value: '-1s (every 0.5s)' },
            { label: 'Range', value: '12m' },
            { label: 'Inner Radius', value: '1.6m' },
            { label: 'Outer Radius', value: '2.4m' }
          ]
        },
        2: {
          name: 'Consuming Bellow',
          image: 'https://static.smite2.live/smite2/GODS/Jormungandr/Abilities/Icons_Jormugandr_A02.webp',
          description: 'Channel briefly, drawing power from nearby toxic clouds, then roar to deal Magical Damage, Slow, and Tremble enemies around you while nearby allies gain Intelligence and Strength.\n\n• Each cloud Empowers you and the roar, increasing its size.\n• While Empowered, your Basic Attacks fire at their maximum rate.\n• CONSUMING BELLOW NO LONGER DEALS BONUS DAMAGE PER CLOUD\n• ALLIES GAIN INTELLIGENCE AND STRENGTH BUFF\n• Size increases up to 3 times.',
          cooldown: '12s',
          cost: '70',
          attributes: [
            { label: 'Damage', value: '120 | 180 | 240 | 300 | 360' },
            { label: 'Damage Scaling', value: '45% Intelligence + 30% Strength' },
            { label: 'Slow', value: '30%' },
            { label: 'Slow Duration', value: '1.5s' },
            { label: 'Intelligence Buff', value: '20 | 25 | 30 | 35 | 40' },
            { label: 'Strength Buff', value: '10 | 15 | 20 | 25 | 30' },
            { label: 'Buff Duration', value: '6s' },
            { label: 'Inner Radius', value: '3.2m' },
            { label: 'Outer Radius', value: '4.8m' }
          ]
        },
        3: {
          name: 'Submerge',
          image: 'https://static.smite2.live/smite2/GODS/Jormungandr/Abilities/Icons_Jormugandr_A03.webp',
          description: 'Submerge into the ground, becoming Stealthed and gaining Movement Speed. Reactivate to emerge, Knocking Up and dealing Magical Damage to enemies.\n\n• While submerged, you pulse out a ring, gaining vision of enemies.\n• Emerging through a toxic cloud creates two new clouds.\n• Taking damage while in Stealth partially reveals you.\n• KNOCKUP HEIGHT IS INCREASED.',
          cooldown: '14s',
          cost: '70 | 75 | 80 | 85 | 90',
          attributes: [
            { label: 'Damage', value: '70 | 125 | 180 | 235 | 290' },
            { label: 'Damage Scaling', value: '50% Intelligence + 40% Strength' },
            { label: 'Movement Speed', value: '35%' },
            { label: 'Duration', value: '5s' },
            { label: 'Radius', value: '3.2m' },
            { label: 'Pulse Radius', value: '20m' }
          ]
        },
        4: {
          name: 'The World Serpent',
          image: 'https://static.smite2.live/smite2/GODS/Jormungandr/Abilities/Icons_Jormugandr_A04.webp',
          description: 'Enter into the world before diving up to three times across the battlefield. Each time you Submerge you deal Magical Damage to enemies hit.\n\n• Emerging out of the ground and your body Crashing down deals Magical Damage to enemies hit.\n• Each time you Emerge and Submerge, you Knock Up enemies and leave behind a low duration toxic cloud.\n• Each enemy god hit with this ability provides a stacking Protections buff when the ability ends.\n• You are CC Immune during this ability.\n• If you cannot dive to the target location when the time expires, the ability will end.',
          cooldown: '90s',
          cost: '50 | 55 | 60 | 65 | 70',
          attributes: [
            { label: 'Damage', value: '150 | 200 | 250 | 300 | 350' },
            { label: 'Damage Scaling', value: '35% Intelligence + 30% Strength' },
            { label: 'Emerge/Crash Damage', value: '75 | 100 | 125 | 150 | 175' },
            { label: 'Emerge/Crash Damage Scaling', value: '20% Intelligence + 15% Strength' },
            { label: 'Protections Per God Hit', value: '10 | 12 | 14 | 16 | 18' },
            { label: 'Buff Duration', value: '6s' },
            { label: 'Radius', value: '3.2m' },
            { label: 'Range', value: '16m' }
          ]
        }
      }
    }
  ],
  recommendedBuilds: []
};