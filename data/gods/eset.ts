import { God, DamageType } from '../../types';

export const ESET: God = {
  id: 'eset',
  name: 'Eset',
  title: 'Goddess of Magic',
  pantheon: 'Egyptian',
  role: 'Mage',
  lanes: ['Middle', 'Support'],
  damageType: DamageType.Magical,
  image: '',
  videoGuideUrl: '',
  goodAgainst: [],
  badAgainst: [],
  levelingOrder: [],
  statsByLevel: [
    // Level 1
    { strength: 0, intelligence: 0, inhandPower: 42, baseAttackSpeed: 1.0, attackSpeedPercent: 1.33, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 17.6, magicalProtection: 27.4, damageMitigation: 0, maxHealth: 617.6, healthRegen: 1.7, maxMana: 308, manaRegen: 2.34, cooldownRate: 0, movementSpeed: 370, xpRequirement: 0 },
    // Level 2
    { strength: 0, intelligence: 0, inhandPower: 44, baseAttackSpeed: 1.0, attackSpeedPercent: 2.66, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 20.4, magicalProtection: 28.9, damageMitigation: 0, maxHealth: 710.3, healthRegen: 1.9, maxMana: 352, manaRegen: 2.6, cooldownRate: 0, movementSpeed: 370, xpRequirement: 308 },
    // Level 3
    { strength: 0, intelligence: 0, inhandPower: 47, baseAttackSpeed: 1.0, attackSpeedPercent: 3.99, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 23.3, magicalProtection: 30.3, damageMitigation: 0, maxHealth: 802.9, healthRegen: 2.1, maxMana: 395, manaRegen: 2.86, cooldownRate: 0, movementSpeed: 370, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 49, baseAttackSpeed: 1.0, attackSpeedPercent: 5.32, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 26.1, magicalProtection: 31.7, damageMitigation: 0, maxHealth: 895.5, healthRegen: 2.3, maxMana: 439, manaRegen: 3.12, cooldownRate: 0, movementSpeed: 370, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 51, baseAttackSpeed: 1.0, attackSpeedPercent: 6.65, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 29.0, magicalProtection: 33.1, damageMitigation: 0, maxHealth: 988.1, healthRegen: 2.5, maxMana: 483, manaRegen: 3.38, cooldownRate: 0, movementSpeed: 370, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 54, baseAttackSpeed: 1.0, attackSpeedPercent: 7.98, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 31.8, magicalProtection: 34.6, damageMitigation: 0, maxHealth: 1080.8, healthRegen: 2.7, maxMana: 526, manaRegen: 3.64, cooldownRate: 0, movementSpeed: 370, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 56, baseAttackSpeed: 1.0, attackSpeedPercent: 9.31, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 34.7, magicalProtection: 36.0, damageMitigation: 0, maxHealth: 1173.4, healthRegen: 2.9, maxMana: 570, manaRegen: 3.9, cooldownRate: 0, movementSpeed: 370, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 58, baseAttackSpeed: 1.0, attackSpeedPercent: 10.64, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 37.5, magicalProtection: 37.4, damageMitigation: 0, maxHealth: 1266.0, healthRegen: 3.1, maxMana: 614, manaRegen: 4.16, cooldownRate: 0, movementSpeed: 370, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 60, baseAttackSpeed: 1.0, attackSpeedPercent: 11.97, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 40.4, magicalProtection: 38.8, damageMitigation: 0, maxHealth: 1358.6, healthRegen: 3.3, maxMana: 657, manaRegen: 4.42, cooldownRate: 0, movementSpeed: 370, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 63, baseAttackSpeed: 1.0, attackSpeedPercent: 13.3, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 43.2, magicalProtection: 40.3, damageMitigation: 0, maxHealth: 1451.3, healthRegen: 3.5, maxMana: 701, manaRegen: 4.68, cooldownRate: 0, movementSpeed: 370, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 65, baseAttackSpeed: 1.0, attackSpeedPercent: 14.63, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 46.1, magicalProtection: 41.7, damageMitigation: 0, maxHealth: 1543.9, healthRegen: 3.7, maxMana: 745, manaRegen: 4.94, cooldownRate: 0, movementSpeed: 370, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 67, baseAttackSpeed: 1.0, attackSpeedPercent: 15.96, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 48.9, magicalProtection: 43.1, damageMitigation: 0, maxHealth: 1636.5, healthRegen: 3.9, maxMana: 788, manaRegen: 5.2, cooldownRate: 0, movementSpeed: 370, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 70, baseAttackSpeed: 1.0, attackSpeedPercent: 17.29, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 51.8, magicalProtection: 44.5, damageMitigation: 0, maxHealth: 1729.1, healthRegen: 4.1, maxMana: 832, manaRegen: 5.46, cooldownRate: 0, movementSpeed: 370, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 72, baseAttackSpeed: 1.0, attackSpeedPercent: 18.62, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 54.6, magicalProtection: 46.0, damageMitigation: 0, maxHealth: 1821.8, healthRegen: 4.3, maxMana: 876, manaRegen: 5.72, cooldownRate: 0, movementSpeed: 370, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 74, baseAttackSpeed: 1.0, attackSpeedPercent: 19.95, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 57.5, magicalProtection: 47.4, damageMitigation: 0, maxHealth: 1914.4, healthRegen: 4.5, maxMana: 919, manaRegen: 5.98, cooldownRate: 0, movementSpeed: 370, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 76, baseAttackSpeed: 1.0, attackSpeedPercent: 21.28, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 60.3, magicalProtection: 48.8, damageMitigation: 0, maxHealth: 2007.0, healthRegen: 4.7, maxMana: 963, manaRegen: 6.24, cooldownRate: 0, movementSpeed: 370, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 79, baseAttackSpeed: 1.0, attackSpeedPercent: 22.61, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 63.2, magicalProtection: 50.2, damageMitigation: 0, maxHealth: 2099.6, healthRegen: 4.9, maxMana: 1007, manaRegen: 6.5, cooldownRate: 0, movementSpeed: 370, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 81, baseAttackSpeed: 1.0, attackSpeedPercent: 23.94, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 66.0, magicalProtection: 51.7, damageMitigation: 0, maxHealth: 2192.3, healthRegen: 5.1, maxMana: 1050, manaRegen: 6.76, cooldownRate: 0, movementSpeed: 370, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 83, baseAttackSpeed: 1.0, attackSpeedPercent: 25.27, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 68.9, magicalProtection: 53.1, damageMitigation: 0, maxHealth: 2284.9, healthRegen: 5.3, maxMana: 1094, manaRegen: 7.02, cooldownRate: 0, movementSpeed: 370, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 86, baseAttackSpeed: 1.0, attackSpeedPercent: 26.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 71.7, magicalProtection: 54.5, damageMitigation: 0, maxHealth: 2377.5, healthRegen: 5.5, maxMana: 1138, manaRegen: 7.28, cooldownRate: 0, movementSpeed: 370, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'Eset Basic Attack',
    image: '',
    description: 'Fire a projectile that deals Magical Damage to the first enemy hit.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
      { label: 'Enhanced Damage', value: '150% Strength + 30% Intelligence' },
      { label: 'Range', value: '8.8m' }
    ]
  },
  passive: {
    name: 'Funeral Rites',
    image: '',
    description: 'Whenever a god dies within 12.8m of Eset, she gains a stack of Funeral Rites; granting HPS and MPS to her and nearby allies. Additionally, every third Basic Attack from Eset is empowered; allowing it to hit in a wider radius and dealing Bonus Damage based on her stacks of Invocation.\n\n• At 5 stacks, Eset\'s Invocation buff can stack up to 5 stacks.\n• At 10 stacks, Eset\'s Invocation buff can stack up to 6 stacks, and Eset gains 10 Cooldown Rate.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Health Regen Per Stack', value: '0.4' },
      { label: 'Mana Regen Per Stack', value: '0.4' },
      { label: 'Bonus Damage Per Stack', value: '7.5% Intelligence' },
      { label: 'Aura Radius', value: '12.8m' }
    ]
  },
  abilities: {
    1: {
      name: 'Wing Gust',
      image: '',
      description: 'Fire 4 projectiles in a line, each dealing Magical Damage to all targets in their path.\n\n• While casting, Eset gains Movement Speed, reduced backpedal and strafing penalties as well as immunity to Knockback and Root effects.\n• After casting, Eset\'s next basic attack will be empowered.\n• Each projectile grants a stack of Invocation the first time it hits an enemy.',
      cooldown: '10s',
      cost: '60 | 65 | 70 | 75 | 80',
      attributes: [
        { label: 'Damage', value: '45 | 65 | 85 | 105 | 125' },
        { label: 'Damage Scaling', value: '45% Intelligence' },
        { label: 'Movement Speed', value: '25%' },
        { label: 'Range', value: '8.8m' }
      ]
    },
    2: {
      name: 'Spirit Ball',
      image: '',
      description: 'Sends forth a ball of spirit energy. While it travels, Eset can re-activate the ability to detonate the ball, dealing Magical Damage and Stunning enemies.\n\n• The further the ball travels, the higher its damage and stun duration. Up to 1.5x the normal damage and stun duration at max distance.\n• When the ball deals damage to enemies, grants a stack of Invocation for each enemy hit.',
      cooldown: '14 | 13 | 12 | 11 | 10s',
      cost: '55 | 60 | 65 | 70 | 75',
      attributes: [
        { label: 'Damage', value: '70 | 115 | 160 | 205 | 250' },
        { label: 'Damage Scaling', value: '70% Intelligence' },
        { label: 'Stun Duration', value: '1s' },
        { label: 'Max Distance Multiplier', value: '1.5x' },
        { label: 'Range', value: '12.8m' }
      ]
    },
    3: {
      name: 'Dispel Magic',
      image: '',
      description: 'Eset Silences and slows enemy gods at her target location. Enemy gods hit also lose a portion of their Magical Protection.\n\n• If Eset successfully hits an enemy god, allies near the Dispel Magic or Eset gain a Shield.\n• If Eset hits multiple enemy gods, the shield is increased by 30% for each enemy hit after the first up to a maximum of 60%.',
      cooldown: '16 | 15.5 | 15 | 14.5 | 14s',
      cost: '60 | 65 | 70 | 75 | 80',
      attributes: [
        { label: 'Shield Health', value: '50 | 100 | 150 | 200 | 250' },
        { label: 'Shield Duration', value: '4s' },
        { label: 'Slow', value: '20%' },
        { label: 'Slow Duration', value: '1.5s' },
        { label: 'Magical Protection Reduced', value: '10%' },
        { label: 'Debuff Duration', value: '1.5 | 1.75 | 2 | 2.25 | 2.5s' },
        { label: 'Silence Duration', value: '1.5s' },
        { label: 'Range', value: '8.8m' },
        { label: 'Radius', value: '2.4m' }
      ]
    },
    4: {
      name: 'Circle of Protection',
      image: '',
      description: 'Call down your staff and create a Circle of Protective Magic for 5 seconds before it explodes, dealing Magical Damage to all enemies and healing all allies in the area.\n\n• Eset can re-activate this ability at any time to detonate it, dealing the damage and healing early.\n• Any damage dealt in the area while it is active charges the circle, increasing its damage and healing.\n• While standing in the area, allies take 30% less damage.',
      cooldown: '90s',
      cost: '60 | 65 | 70 | 75 | 80',
      attributes: [
        { label: 'Damage', value: '180 | 215 | 250 | 285 | 320' },
        { label: 'Damage Scaling', value: '50% Intelligence' },
        { label: 'Heal', value: '75 | 110 | 145 | 180 | 215' },
        { label: 'Max Stored Damage', value: '700 | 1400 | 2100 | 2800 | 3500' },
        { label: 'Max Charge Damage/Heal Multiplier', value: '2 | 2.25 | 2.5 | 2.75 | 3x' },
        { label: 'Damage Taken Reduction', value: '30%' },
        { label: 'Duration', value: '5s' },
        { label: 'Range', value: '6.4m' }
      ]
    }
  },
  aspects: [
    {
      id: 'lifewarden',
      name: 'Aspect of the Lifewarden',
      image: '',
      description: 'Dispel Magic no longer requires an enemy god hit to shield allies and now applies Transference to all allies it shields. Wing Gust no longer has damage scaling, but applies a movement speed aura to allies, and when its projectiles hit enemies, all allies with Transference are healed.',
      basicAttack: {
        name: 'Eset Basic Attack',
        image: '',
        description: 'Fire a projectile that deals Magical Damage to the first enemy hit.',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
          { label: 'Enhanced Damage', value: '150% Strength + 30% Intelligence' },
          { label: 'Range', value: '8.8m' }
        ]
      },
      passive: {
        name: 'Funeral Rites',
        image: '',
        description: 'Whenever a god dies within 12.8m of Eset, she gains a stack of Funeral Rites; granting HPS and MPS to her and nearby allies. Additionally, every third Basic Attack from Eset is empowered; allowing it to hit in a wider radius and dealing Bonus Damage based on her stacks of Invocation.\n\n• At 5 stacks, Eset\'s Invocation buff can stack up to 5 stacks.\n• At 10 stacks, Eset\'s Invocation buff can stack up to 6 stacks, and Eset gains 10 Cooldown Rate.',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Health Regen Per Stack', value: '0.4' },
          { label: 'Mana Regen Per Stack', value: '0.4' },
          { label: 'Bonus Damage Per Stack', value: '7.5% Physical Protection Item + 7.5% Magical Protection Item' },
          { label: 'Aura Radius', value: '12.8m' }
        ]
      },
      abilities: {
        1: {
          name: 'Wing Gust',
          image: '',
          description: 'Fire 4 projectiles in a line, each dealing Magical Damage to all targets in their path.\n\n• While casting, Eset grants Movement Speed to all allies within 8.8m of herself.\n• While casting Eset gains reduced backpedal and strafing penalties as well as immunity to Knockback and Root effects.\n• Each projectile grants a stack of Invocation the first time it hits an enemy.\n• Each projectile heals all allies with Transference the first time it hits an enemy.\n• After casting, Eset\'s next basic attack is empowered.\n\nNOTE: Hitting an enemy minion provides 50% Healing, providing another 50% if that projectile also hits an enemy god. NO LONGER HAS DAMAGE SCALING.',
          cooldown: '10s',
          cost: '60 | 65 | 70 | 75 | 80',
          attributes: [
            { label: 'Damage', value: '45 | 65 | 85 | 105 | 125' },
            { label: 'Movement Speed', value: '25%' },
            { label: 'Heal', value: '12 | 16 | 20 | 24 | 28' },
            { label: 'Heal Scaling', value: '6% Magical Protection Item + 6% Physical Protection Item' },
            { label: 'Range', value: '8.8m' }
          ]
        },
        2: {
          name: 'Spirit Ball',
          image: '',
          description: 'Sends forth a ball of spirit energy. While it travels, Eset can re-activate the ability to detonate the ball, dealing Magical Damage and Stunning enemies.\n\n• The further the ball travels, the higher its damage and stun duration. Up to 1.5x the normal damage and stun duration at max distance.\n• When the ball deals damage to enemies, grants a stack of Invocation for each enemy hit.',
          cooldown: '14 | 13 | 12 | 11 | 10s',
          cost: '55 | 60 | 65 | 70 | 75',
          attributes: [
            { label: 'Damage', value: '70 | 115 | 160 | 205 | 250' },
            { label: 'Damage Scaling', value: '70% Intelligence' },
            { label: 'Stun Duration', value: '1s' },
            { label: 'Max Distance Multiplier', value: '1.5x' },
            { label: 'Range', value: '12.8m' }
          ]
        },
        3: {
          name: 'Dispel Magic',
          image: '',
          description: 'Eset Silences and slows enemy gods at her target location. Enemy gods hit also lose a portion of their Magical Protection.\n\n• Allies near the Dispel Magic Circle or Eset gain a Shield and Transference for 4 seconds.\n• For each enemy god hit after the first, the shield is increased by 30% up to a maximum of 60%. If no enemy gods are hit, the shield is decreased by 30%.\n\nNO LONGER REQUIRES ENEMY GOD HIT TO SHIELD ALLIES. NOW APPLIES TRANSFERENCE.',
          cooldown: '16 | 15.5 | 15 | 14.5 | 14s',
          cost: '60 | 65 | 70 | 75 | 80',
          attributes: [
            { label: 'Shield Health', value: '50 | 100 | 150 | 200 | 250' },
            { label: 'Shield Duration', value: '4s' },
            { label: 'Transference Duration', value: '4s' },
            { label: 'Slow', value: '20%' },
            { label: 'Slow Duration', value: '1.5s' },
            { label: 'Magical Protection Reduced', value: '10%' },
            { label: 'Debuff Duration', value: '1.5 | 1.75 | 2 | 2.25 | 2.5s' },
            { label: 'Silence Duration', value: '1.5s' },
            { label: 'Range', value: '8.8m' },
            { label: 'Radius', value: '2.4m' }
          ]
        },
        4: {
          name: 'Circle of Protection',
          image: '',
          description: 'Call down your staff and create a Circle of Protective Magic for 5 seconds before it explodes, dealing Magical Damage to all enemies and healing all allies in the area.\n\n• Eset can re-activate this ability at any time to detonate it, dealing the damage and healing early.\n• Any damage dealt in the area while it is active charges the circle, increasing its damage and healing.\n• While standing in the area, allies take 30% less damage.',
          cooldown: '90s',
          cost: '60 | 65 | 70 | 75 | 80',
          attributes: [
            { label: 'Damage', value: '180 | 215 | 250 | 285 | 320' },
            { label: 'Damage Scaling', value: '50% Intelligence' },
            { label: 'Heal', value: '75 | 110 | 145 | 180 | 215' },
            { label: 'Max Stored Damage', value: '700 | 1400 | 2100 | 2800 | 3500' },
            { label: 'Max Charge Damage/Heal Multiplier', value: '2 | 2.25 | 2.5 | 2.75 | 3x' },
            { label: 'Damage Taken Reduction', value: '30%' },
            { label: 'Duration', value: '5s' },
            { label: 'Range', value: '6.4m' }
          ]
        }
      }
    }
  ],
  recommendedBuilds: []
};