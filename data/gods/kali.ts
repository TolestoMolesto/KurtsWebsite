import { God, DamageType } from '../../types';

export const KALI: God = {
  id: 'kali',
  name: 'Kali',
  title: 'Goddess of Destruction',
  pantheon: 'Hindu',
  role: 'Assassin',
  lanes: ['Jungle', 'Carry'],
  damageType: DamageType.Physical,
  image: '',
  videoGuideUrl: '',
  goodAgainst: [],
  badAgainst: [],
  levelingOrder: [],
  statsByLevel: [
    // Level 1
    { strength: 0, intelligence: 0, inhandPower: 41, baseAttackSpeed: 0.97, attackSpeedPercent: 1.456, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 19.6, magicalProtection: 27.5, damageMitigation: 0, maxHealth: 591.4, healthRegen: 1.7, maxMana: 281, manaRegen: 2.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 0 },
    // Level 2
    { strength: 0, intelligence: 0, inhandPower: 43, baseAttackSpeed: 0.97, attackSpeedPercent: 2.912, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 22.6, magicalProtection: 29, damageMitigation: 0, maxHealth: 684, healthRegen: 1.9, maxMana: 321, manaRegen: 2.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 308 },
    // Level 3
    { strength: 0, intelligence: 0, inhandPower: 46, baseAttackSpeed: 0.97, attackSpeedPercent: 4.368, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 25.6, magicalProtection: 30.5, damageMitigation: 0, maxHealth: 776.6, healthRegen: 2.1, maxMana: 361, manaRegen: 2.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 48, baseAttackSpeed: 0.97, attackSpeedPercent: 5.824, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 28.6, magicalProtection: 32, damageMitigation: 0, maxHealth: 869.3, healthRegen: 2.3, maxMana: 401, manaRegen: 3, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 51, baseAttackSpeed: 0.97, attackSpeedPercent: 7.28, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 31.6, magicalProtection: 33.5, damageMitigation: 0, maxHealth: 961.9, healthRegen: 2.5, maxMana: 441, manaRegen: 3.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 53, baseAttackSpeed: 0.97, attackSpeedPercent: 8.736, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 34.6, magicalProtection: 35, damageMitigation: 0, maxHealth: 1054.5, healthRegen: 2.7, maxMana: 481, manaRegen: 3.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 55, baseAttackSpeed: 0.97, attackSpeedPercent: 10.192, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 37.6, magicalProtection: 36.5, damageMitigation: 0, maxHealth: 1147.1, healthRegen: 2.9, maxMana: 521, manaRegen: 3.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 58, baseAttackSpeed: 0.97, attackSpeedPercent: 11.648, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 40.6, magicalProtection: 38, damageMitigation: 0, maxHealth: 1239.8, healthRegen: 3.1, maxMana: 561, manaRegen: 4, cooldownRate: 0, movementSpeed: 375, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 60, baseAttackSpeed: 0.97, attackSpeedPercent: 13.104, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 43.6, magicalProtection: 39.5, damageMitigation: 0, maxHealth: 1332.4, healthRegen: 3.3, maxMana: 600, manaRegen: 4.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 63, baseAttackSpeed: 0.97, attackSpeedPercent: 14.56, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 46.6, magicalProtection: 41, damageMitigation: 0, maxHealth: 1425, healthRegen: 3.5, maxMana: 640, manaRegen: 4.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 65, baseAttackSpeed: 0.97, attackSpeedPercent: 16.016, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 49.6, magicalProtection: 42.5, damageMitigation: 0, maxHealth: 1517.6, healthRegen: 3.7, maxMana: 680, manaRegen: 4.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 67, baseAttackSpeed: 0.97, attackSpeedPercent: 17.472, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 52.6, magicalProtection: 44, damageMitigation: 0, maxHealth: 1610.3, healthRegen: 3.9, maxMana: 720, manaRegen: 5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 70, baseAttackSpeed: 0.97, attackSpeedPercent: 18.928, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 55.6, magicalProtection: 45.5, damageMitigation: 0, maxHealth: 1702.9, healthRegen: 4.1, maxMana: 760, manaRegen: 5.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 72, baseAttackSpeed: 0.97, attackSpeedPercent: 20.384, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 58.6, magicalProtection: 47, damageMitigation: 0, maxHealth: 1795.5, healthRegen: 4.3, maxMana: 800, manaRegen: 5.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 75, baseAttackSpeed: 0.97, attackSpeedPercent: 21.84, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 61.6, magicalProtection: 48.5, damageMitigation: 0, maxHealth: 1888.1, healthRegen: 4.5, maxMana: 840, manaRegen: 5.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 77, baseAttackSpeed: 0.97, attackSpeedPercent: 23.296, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 64.6, magicalProtection: 50, damageMitigation: 0, maxHealth: 1980.8, healthRegen: 4.7, maxMana: 880, manaRegen: 6, cooldownRate: 0, movementSpeed: 375, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 79, baseAttackSpeed: 0.97, attackSpeedPercent: 24.752, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 67.6, magicalProtection: 51.5, damageMitigation: 0, maxHealth: 2073.4, healthRegen: 4.9, maxMana: 920, manaRegen: 6.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 82, baseAttackSpeed: 0.97, attackSpeedPercent: 26.208, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 70.6, magicalProtection: 53, damageMitigation: 0, maxHealth: 2166, healthRegen: 5.1, maxMana: 960, manaRegen: 6.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 84, baseAttackSpeed: 0.97, attackSpeedPercent: 27.664, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 73.6, magicalProtection: 54.5, damageMitigation: 0, maxHealth: 2258.6, healthRegen: 5.3, maxMana: 999, manaRegen: 6.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 87, baseAttackSpeed: 0.97, attackSpeedPercent: 29.12, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 76.6, magicalProtection: 56, damageMitigation: 0, maxHealth: 2351.3, healthRegen: 5.5, maxMana: 1039, manaRegen: 7, cooldownRate: 0, movementSpeed: 375, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'Kali Basic Attack',
    image: '',
    description: 'Deal Physical Damage to an enemy in front of you.\n\nIf multiple enemies are in the area, the enemy closest to the center of the area will be hit.\n\nHas a 3 hit chain. Attacks in order of 1, 0.5, 1.5x damage and swing time.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
      { label: 'Range', value: '1.92m' },
      { label: 'Cone Angle', value: '120 degrees' }
    ]
  },
  passive: {
    name: 'Marked for Death',
    image: '',
    description: 'Mark a god. Gain Physical Penetration against that god. Killing that god restores Health. Assists restore less Health. You also gain bonus gold bounty. Additionally, Basic Attacks and most abilities apply Rupture to enemies.\n\n• If a marked target dies, the enemy god closest to Kali becomes marked\n• You can use \'Interact\' in the fountain to change your marked target',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Heal (Kill)', value: '20% Health' },
      { label: 'Heal (Assist)', value: '7.5% Health' },
      { label: 'Bonus Gold', value: '+20%' }
    ]
  },
  abilities: {
    1: {
      name: 'Nimble Strike',
      image: '',
      description: 'Leap dealing Physical Damage to enemies when landing. Heal Health if this ability landed on an enemy.\n\n• If you landed on an enemy god, heal for a percentage of their missing health\n• If you landed on multiple gods, restore based on the god that would heal you the most\n• Applies 2 stacks of Rupture',
      cooldown: '13s',
      cost: '60',
      attributes: [
        { label: 'Damage', value: '70 | 125 | 180 | 235 | 290' },
        { label: 'Damage Scaling', value: '80% Strength' },
        { label: 'Heal', value: '20 | 30 | 40 | 50 | 60' },
        { label: 'Heal (Missing Health)', value: '6%' },
        { label: 'Range', value: '8.8m' },
        { label: 'Radius', value: '2.4m' }
      ]
    },
    2: {
      name: 'Lash',
      image: '',
      description: 'Throw 3 blades forward, each dealing Physical Damage and applying a bleed. The bleed deals Physical Damage every .5s for 3s.\n\n• Applies 1 stack of Rupture for each blade hit',
      cooldown: '12 | 11.5 | 11 | 10.5 | 10s',
      cost: '60 | 65 | 70 | 75 | 80',
      attributes: [
        { label: 'Damage', value: '35 | 45 | 55 | 65 | 75' },
        { label: 'Damage Scaling', value: '20% Strength + 25% Intelligence' },
        { label: 'Bleed Damage', value: '10 | 15 | 20 | 25 | 30' },
        { label: 'Bleed Scaling', value: '5% Strength + 10% Intelligence' },
        { label: 'Range', value: '11.2m' },
        { label: 'Radius', value: '0.48m' }
      ]
    },
    3: {
      name: 'Incense',
      image: '',
      description: 'Stun enemies with incense, gaining bonus STR and INT. Siphon targets, dealing Physical Damage and healing Health per hit. Damage and Heal increased per Rupture stack, consuming them.\n\n• All heals after the first are reduced by 80%. The strongest heal is resolved first\n• Non-god targets with a stack of Rupture are damaged and restore health as if they had 3 stacks.',
      cooldown: '15s',
      cost: '60',
      attributes: [
        { label: 'Damage', value: '35 | 55 | 75 | 95 | 115' },
        { label: 'Damage Scaling', value: '15% Strength + 30% Intelligence' },
        { label: 'Bonus Damage', value: '8 | 13 | 18 | 23 | 28 per Stack' },
        { label: 'Bonus Damage Scaling', value: '10% Strength + 12.5% Intelligence' },
        { label: 'Heal', value: '18 | 26 | 34 | 42 | 50' },
        { label: 'Bonus Heal', value: '8 | 10 | 12 | 14 | 16 per Stack' },
        { label: 'Bonus Heal Scaling', value: '4% Intelligence' },
        { label: 'Stun Duration', value: '0.8s' },
        { label: 'Strength Buff', value: '10 | 15 | 20 | 25 | 30' },
        { label: 'Intelligence Buff', value: '14 | 21 | 28 | 35 | 42' },
        { label: 'Buff Duration', value: '4 | 4.5 | 5 | 5.5 | 6s' }
      ]
    },
    4: {
      name: 'Destruction',
      image: '',
      description: 'Become immune to death, displacement, slows, and roots. Deal Physical Damage to nearby enemies every 0.25s for its duration.\n\n• If you are below 15% Health when the ultimate ends, you are restored to 15% of your Health\n• Applies 1 stack of Rupture for each hit',
      cooldown: '90s',
      cost: '60 | 70 | 80 | 90 | 100',
      attributes: [
        { label: 'Damage', value: '12 | 15 | 18 | 21 | 24' },
        { label: 'Damage Scaling', value: '4% Strength + 6.5% Intelligence' },
        { label: 'Duration', value: '3.5 | 3.75 | 4 | 4.25 | 4.5s' },
        { label: 'Radius', value: '3.2m' }
      ]
    }
  },
  aspects: [
    {
      id: 'unbound-destruction',
      name: 'Aspect of Unbound Destruction',
      image: '',
      description: 'Kali\'s Basic Attacks are ranged. Rupture consumes at 5 stacks to deal damage and heal Kali. Incense no longer stuns or consumes Rupture. It knocks enemies away and applies Rupture. Destruction no longer damages, prevents death, or gives immunities. It now gives stats, lower cooldown, resets cooldown on Mark kills, and makes Kali\'s Basics pierce applying 2 Rupture stacks.',
      basicAttack: {
        name: 'Kali Basic Attack',
        image: '',
        description: 'Deal Physical Damage to an enemy in front of you. Basic Attacks are now ranged projectiles that pierce through enemies.\n\nIf multiple enemies are in the area, the enemy closest to the center of the area will be hit.\n\nHas a 3 hit chain. Attacks in order of 1, 0.5, 1.5x damage and swing time.',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
          { label: 'Range', value: '1.92m' },
          { label: 'Cone Angle', value: '120 degrees' }
        ]
      },
      passive: {
        name: 'Marked for Death',
        image: '',
        description: 'Mark a god. Gain Physical Penetration against that god. Killing that god restores Health. Assists restore less Health. You also gain bonus gold bounty. Additionally, Basic Attacks and most abilities apply Rupture to enemies.\n\n• If a marked target dies, the enemy god closest to Kali becomes marked\n• RUPTURE IS CONSUMED UPON REACHING 5 STACKS, DEALING DAMAGE AND HEALING YOU\n• You can use \'Interact\' in the fountain to change your marked target',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Heal (Kill)', value: '20% Health' },
          { label: 'Heal (Assist)', value: '7.5% Health' },
          { label: 'Bonus Gold', value: '+20%' },
          { label: 'Rupture Damage', value: '12' },
          { label: 'Rupture Damage Scaling', value: '6 Per Level' },
          { label: 'Rupture Heal', value: '7' },
          { label: 'Rupture Heal Scaling', value: '2 Per Level' }
        ]
      },
      abilities: {
        1: {
          name: 'Nimble Strike',
          image: '',
          description: 'Leap dealing Physical Damage to enemies when landing. Heal Health if this ability landed on an enemy.\n\n• If you landed on an enemy god, heal for a percentage of their missing health\n• If you landed on multiple gods, restore based on the god that would heal you the most\n• Applies 2 stacks of Rupture',
          cooldown: '13s',
          cost: '60',
          attributes: [
            { label: 'Damage', value: '70 | 125 | 180 | 235 | 290' },
            { label: 'Damage Scaling', value: '80% Strength' },
            { label: 'Heal', value: '20 | 30 | 40 | 50 | 60' },
            { label: 'Heal (Missing Health)', value: '6%' },
            { label: 'Range', value: '8.8m' },
            { label: 'Radius', value: '2.4m' }
          ]
        },
        2: {
          name: 'Lash',
          image: '',
          description: 'Throw 3 blades forward, each dealing Physical Damage and applying a bleed. The bleed deals Physical Damage every .5s for 3s.\n\n• Applies 1 stack of Rupture for each blade hit',
          cooldown: '12 | 11.5 | 11 | 10.5 | 10s',
          cost: '60 | 65 | 70 | 75 | 80',
          attributes: [
            { label: 'Damage', value: '35 | 45 | 55 | 65 | 75' },
            { label: 'Damage Scaling', value: '20% Strength + 25% Intelligence' },
            { label: 'Bleed Damage', value: '10 | 15 | 20 | 25 | 30' },
            { label: 'Bleed Scaling', value: '5% Strength + 10% Intelligence' },
            { label: 'Range', value: '11.2m' },
            { label: 'Radius', value: '0.48m' }
          ]
        },
        3: {
          name: 'Incense',
          image: '',
          description: 'Knockback enemies with incense and deal Physical Damage.\n\n• Applies 3 stacks of Rupture\n• NO LONGER STUNS OR CONSUMES RUPTURE',
          cooldown: '15s',
          cost: '60',
          attributes: [
            { label: 'Damage', value: '55 | 90 | 125 | 160 | 195' },
            { label: 'Damage Scaling', value: '45% Strength + 85% Intelligence' }
          ]
        },
        4: {
          name: 'Destruction',
          image: '',
          description: 'Become immune to displacement, slows, and roots. While active you gain increased Attack Speed, Lifesteal, Strength, and Intelligence.\n\n• Your Basic Attack Projectiles no longer stop on target hit\n• Your Basic Attack Projectiles apply 2 stacks of Rupture\n• Killing your Marked Target will reset this abilities cooldown, including if they are killed during the Ultimate\n• NO LONGER DAMAGES, PREVENTS DEATH, OR GIVES IMMUNITIES',
          cooldown: '50 | 45 | 40 | 35 | 30s',
          cost: '60 | 70 | 80 | 90 | 100',
          attributes: [
            { label: 'Strength Buff', value: '10 | 15 | 20 | 25 | 30' },
            { label: 'Intelligence Buff', value: '14 | 21 | 28 | 35 | 42' },
            { label: 'Lifesteal', value: '10%' },
            { label: 'Attack Speed', value: '20 | 22.5 | 25 | 27.5 | 30%' },
            { label: 'Duration', value: '4.5s' }
          ]
        }
      }
    }
  ],
  recommendedBuilds: []
};