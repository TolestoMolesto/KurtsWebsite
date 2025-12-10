import { God, DamageType } from '../../types';

export const PELE: God = {
  id: 'pele',
  name: 'Pele',
  title: 'Goddess of Volcanoes',
  pantheon: 'Polynesian',
  role: 'Assassin',
  lanes: ['Jungle'],
  damageType: DamageType.Physical,
  image: '',
  videoGuideUrl: '',
  goodAgainst: [],
  badAgainst: [],
  levelingOrder: [],
  statsByLevel: [
    // Level 1
    { strength: 0, intelligence: 0, inhandPower: 44, baseAttackSpeed: 1.0, attackSpeedPercent: 1.456, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 19, magicalProtection: 27.5, damageMitigation: 0, maxHealth: 617.6, healthRegen: 1.7, maxMana: 296, manaRegen: 2.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 0 },
    // Level 2
    { strength: 0, intelligence: 0, inhandPower: 47, baseAttackSpeed: 1.0, attackSpeedPercent: 2.912, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 22, magicalProtection: 29, damageMitigation: 0, maxHealth: 710.3, healthRegen: 1.9, maxMana: 338, manaRegen: 2.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 308 },
    // Level 3
    { strength: 0, intelligence: 0, inhandPower: 49, baseAttackSpeed: 1.0, attackSpeedPercent: 4.368, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 25, magicalProtection: 30.5, damageMitigation: 0, maxHealth: 802.9, healthRegen: 2.1, maxMana: 380, manaRegen: 2.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 52, baseAttackSpeed: 1.0, attackSpeedPercent: 5.824, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 28, magicalProtection: 32, damageMitigation: 0, maxHealth: 895.5, healthRegen: 2.3, maxMana: 422, manaRegen: 3, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 54, baseAttackSpeed: 1.0, attackSpeedPercent: 7.28, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 31, magicalProtection: 33.5, damageMitigation: 0, maxHealth: 988.1, healthRegen: 2.5, maxMana: 464, manaRegen: 3.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 56, baseAttackSpeed: 1.0, attackSpeedPercent: 8.736, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 34, magicalProtection: 35, damageMitigation: 0, maxHealth: 1080.8, healthRegen: 2.7, maxMana: 506, manaRegen: 3.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 59, baseAttackSpeed: 1.0, attackSpeedPercent: 10.192, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 37, magicalProtection: 36.5, damageMitigation: 0, maxHealth: 1173.4, healthRegen: 2.9, maxMana: 548, manaRegen: 3.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 61, baseAttackSpeed: 1.0, attackSpeedPercent: 11.648, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 40, magicalProtection: 38, damageMitigation: 0, maxHealth: 1266.0, healthRegen: 3.1, maxMana: 590, manaRegen: 4, cooldownRate: 0, movementSpeed: 375, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 64, baseAttackSpeed: 1.0, attackSpeedPercent: 13.104, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 43, magicalProtection: 39.5, damageMitigation: 0, maxHealth: 1358.6, healthRegen: 3.3, maxMana: 632, manaRegen: 4.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 66, baseAttackSpeed: 1.0, attackSpeedPercent: 14.56, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 46, magicalProtection: 41, damageMitigation: 0, maxHealth: 1451.3, healthRegen: 3.5, maxMana: 674, manaRegen: 4.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 68, baseAttackSpeed: 1.0, attackSpeedPercent: 16.016, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 49, magicalProtection: 42.5, damageMitigation: 0, maxHealth: 1543.9, healthRegen: 3.7, maxMana: 716, manaRegen: 4.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 71, baseAttackSpeed: 1.0, attackSpeedPercent: 17.472, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 52, magicalProtection: 44, damageMitigation: 0, maxHealth: 1636.5, healthRegen: 3.9, maxMana: 758, manaRegen: 5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 73, baseAttackSpeed: 1.0, attackSpeedPercent: 18.928, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 55, magicalProtection: 45.5, damageMitigation: 0, maxHealth: 1729.1, healthRegen: 4.1, maxMana: 800, manaRegen: 5.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 76, baseAttackSpeed: 1.0, attackSpeedPercent: 20.384, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 58, magicalProtection: 47, damageMitigation: 0, maxHealth: 1821.8, healthRegen: 4.3, maxMana: 842, manaRegen: 5.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 78, baseAttackSpeed: 1.0, attackSpeedPercent: 21.84, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 61, magicalProtection: 48.5, damageMitigation: 0, maxHealth: 1914.4, healthRegen: 4.5, maxMana: 884, manaRegen: 5.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 80, baseAttackSpeed: 1.0, attackSpeedPercent: 23.296, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 64, magicalProtection: 50, damageMitigation: 0, maxHealth: 2007.0, healthRegen: 4.7, maxMana: 926, manaRegen: 6, cooldownRate: 0, movementSpeed: 375, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 83, baseAttackSpeed: 1.0, attackSpeedPercent: 24.752, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 67, magicalProtection: 51.5, damageMitigation: 0, maxHealth: 2099.6, healthRegen: 4.9, maxMana: 968, manaRegen: 6.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 85, baseAttackSpeed: 1.0, attackSpeedPercent: 26.208, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 70, magicalProtection: 53, damageMitigation: 0, maxHealth: 2192.3, healthRegen: 5.1, maxMana: 1010, manaRegen: 6.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 88, baseAttackSpeed: 1.0, attackSpeedPercent: 27.664, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 73, magicalProtection: 54.5, damageMitigation: 0, maxHealth: 2284.9, healthRegen: 5.3, maxMana: 1052, manaRegen: 6.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 90, baseAttackSpeed: 1.0, attackSpeedPercent: 29.12, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 76, magicalProtection: 56, damageMitigation: 0, maxHealth: 2377.5, healthRegen: 5.5, maxMana: 1094, manaRegen: 7, cooldownRate: 0, movementSpeed: 375, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'Pele Basic Attack',
    image: '',
    description: 'Deal Physical Damage to an enemy in front of you.\n\nIf multiple enemies are in the area, the enemy closest to the center of the area will be hit.\n\n• Has a 3 hit chain. Attacks in order of 1, 1, 1x damage and swing time.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
      { label: 'Range', value: '2.56m' },
      { label: 'Cone Angle', value: '120 degrees' }
    ]
  },
  passive: {
    name: 'Everlasting Flame',
    image: '',
    description: 'When you drop below 50% health, gain increased Strength and Lifesteal. This effect has a cooldown.',
    cooldown: '30s',
    cost: '-',
    attributes: [
      { label: 'Strength', value: '10' },
      { label: 'Strength Per Level', value: '2' },
      { label: 'Lifesteal', value: '15%' },
      { label: 'Buff Duration', value: '6s' }
    ]
  },
  abilities: {
    1: {
      name: 'Pyroclast',
      image: '',
      description: 'Fires a Magma projectile that deals Physical Damage and grants fuel per enemy god hit. At max range the Magma persists and fires additional shard projectiles back to you, dealing Physical Damage to enemies.\n\n• The number of shards returning is dependent on the rank of this ability.\n• Pele has 2 charges of this ability.\n• Both Projectile types pass through and damage all enemies, and pass through walls.',
      cooldown: '15 | 14.5 | 14 | 13.5 | 13s',
      cost: '40 | 45 | 50 | 55 | 60',
      attributes: [
        { label: 'Initial Damage', value: '60 | 100 | 140 | 180 | 220' },
        { label: 'Initial Damage Scaling', value: '60% Strength' },
        { label: 'Return Damage', value: '25' },
        { label: 'Return Damage Scaling', value: '15% Strength' },
        { label: 'Return Projectiles', value: '1 | 2 | 3 | 4 | 5' },
        { label: 'Fuel Regained', value: '10' },
        { label: 'Range', value: '9.6m' }
      ]
    },
    2: {
      name: 'Eruption',
      image: '',
      description: 'Gain a burst of speed before dealing Physical Damage and Knocking Up enemies around you.\n\nAt ranks 3 and 5 this area gains an additional explosion area, which deals Physical Damage and a smaller Knock Up.',
      cooldown: '14s',
      cost: '60 | 65 | 70 | 75 | 80',
      attributes: [
        { label: 'Inner Ring Damage', value: '70 | 115 | 160 | 205 | 250' },
        { label: 'Inner Ring Scaling', value: '65% Strength' },
        { label: 'Outer Ring Damage', value: '140 | 140 | 140 | 180 | 220' },
        { label: 'Outer Ring Scaling', value: '45% Strength' },
        { label: 'Eruption Areas', value: '1 | 1 | 2 | 2 | 3' }
      ]
    },
    3: {
      name: 'Magma Rush',
      image: '',
      description: 'Repeatedly deal Physical Damage to nearby enemies and gain movement speed while this ability is active. Magma Rush uses Fuel for its duration and has no cooldown.\n\n• Reactivate this ability to amplify the effect, expending more fuel but dealing increased Physical Damage and gaining additional movement speed.\n• Fuel Regens 5 per second when this ability is deactivated. This ability cannot be activated under 10 Fuel.\n• This ability triggers no items.',
      cooldown: '1s',
      cost: '10 Fuel (Initial)',
      attributes: [
        { label: 'Damage', value: '10 | 15 | 20 | 25 | 30' },
        { label: 'Damage Scaling', value: '5% Strength' },
        { label: 'Amped Damage', value: '20 | 35 | 50 | 65 | 80' },
        { label: 'Amped Damage Scaling', value: '15% Strength' },
        { label: 'Movement Speed', value: '30%' },
        { label: 'Amped Movement Speed', value: '60%' },
        { label: 'Fuel Cost', value: '5/s' },
        { label: 'Amped Fuel Cost', value: '10/s' }
      ]
    },
    4: {
      name: 'Volcanic Lightning',
      image: '',
      description: 'Become CC Immune then Dash forward dealing Physical Damage and Slowing the first enemy God hit, and firing a cone attack that deals Physical Damage to other enemies.\n\n• For the next 10 seconds or 4 attacks, every time you basic attack an enemy, you deal reduced damage and also fire a cone attack.\n• This ability triggers items only one time across all 5 possible hits.',
      cooldown: '90s',
      cost: '100',
      attributes: [
        { label: 'Damage', value: '180 | 255 | 330 | 405 | 480' },
        { label: 'Damage Scaling', value: '60% Strength' },
        { label: 'Cone Damage', value: '100 | 140 | 180 | 220 | 260' },
        { label: 'Cone Damage Scaling', value: '40% Strength' },
        { label: 'Slow', value: '30 | 32.5 | 35 | 37.5 | 40%' },
        { label: 'Slow Duration', value: '3s' },
        { label: 'Range', value: '9.7m' }
      ]
    }
  },
  aspects: [
    {
      id: 'obsidian',
      name: 'Aspect of Obsidian',
      image: '',
      description: 'You only gain Fuel from Pyroclast and when damaged by enemies instead of over time. Magma Rush can no longer be refired but now provides Healing. Additionally Everlasting Flame now provides Protections instead of Strength and Lifesteal, and Volcanic Lightning damage no longer has Strength Scaling.',
      basicAttack: {
        name: 'Pele Basic Attack',
        image: '',
        description: 'Deal Physical Damage to an enemy in front of you.\n\nIf multiple enemies are in the area, the enemy closest to the center of the area will be hit.\n\n• Has a 3 hit chain. Attacks in order of 1, 1, 1x damage and swing time.',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
          { label: 'Range', value: '2.56m' },
          { label: 'Cone Angle', value: '120 degrees' }
        ]
      },
      passive: {
        name: 'Everlasting Flame',
        image: '',
        description: 'When you drop below 50% health, gain increased Physical and Magical Protections. This effect has a cooldown.\n\nAdditionally, you gain fuel when damaged by enemies.',
        cooldown: '30s',
        cost: '-',
        attributes: [
          { label: 'Protections', value: '10' },
          { label: 'Protections Per Level', value: '1' },
          { label: 'Buff Duration', value: '6s' },
          { label: 'Fuel Regained', value: '5' },
          { label: 'Fuel Regained from Minions', value: '1' }
        ]
      },
      abilities: {
        1: {
          name: 'Pyroclast',
          image: '',
          description: 'Fires a Magma projectile that deals Physical Damage and grants fuel once on hitting an enemy. At max range the Magma persists and fires additional shard projectiles back to you, dealing Physical Damage to enemies.\n\n• The number of shards returning is dependent on the rank of this ability.\n• Pele has 2 charges of this ability.\n• Both Projectile types pass through and damage all enemies, and pass through walls.\n• Returning Magma Shards provide Fuel per enemy hit, at a reduced amount.',
          cooldown: '15 | 14.5 | 14 | 13.5 | 13s',
          cost: '40 | 45 | 50 | 55 | 60',
          attributes: [
            { label: 'Initial Damage', value: '60 | 100 | 140 | 180 | 220' },
            { label: 'Initial Damage Scaling', value: '60% Strength' },
            { label: 'Return Damage', value: '25' },
            { label: 'Return Damage Scaling', value: '15% Strength' },
            { label: 'Return Projectiles', value: '1 | 2 | 3 | 4 | 5' },
            { label: 'Fuel Regained', value: '20' },
            { label: 'Return Shard Fuel Regained', value: '1' },
            { label: 'Range', value: '9.6m' }
          ]
        },
        2: {
          name: 'Eruption',
          image: '',
          description: 'Gain a burst of speed before dealing Physical Damage and Knocking Up enemies around you.\n\nAt ranks 3 and 5 this area gains an additional explosion area, which deals Physical Damage and a smaller Knock Up.',
          cooldown: '14s',
          cost: '60 | 65 | 70 | 75 | 80',
          attributes: [
            { label: 'Inner Ring Damage', value: '70 | 115 | 160 | 205 | 250' },
            { label: 'Inner Ring Scaling', value: '65% Strength' },
            { label: 'Outer Ring Damage', value: '140 | 140 | 140 | 180 | 220' },
            { label: 'Outer Ring Scaling', value: '45% Strength' },
            { label: 'Eruption Areas', value: '1 | 1 | 2 | 2 | 3' }
          ]
        },
        3: {
          name: 'Magma Rush',
          image: '',
          description: 'Repeatedly deal Physical Damage to nearby enemies and gain movement speed while this ability is active. Magma Rush uses Fuel for its duration and has no cooldown.\n\n• While active you gain Health over time and additional movement speed.\n• Damage, healing and movement speed is increased when above 50 Fuel.\n• This ability triggers no items.\n• NO LONGER HAS AMPED MODE',
          cooldown: '1s',
          cost: '10 Fuel (Initial)',
          attributes: [
            { label: 'Damage', value: '10 | 15 | 20 | 25 | 30' },
            { label: 'Damage Scaling', value: '5% Strength' },
            { label: 'Heal', value: '4 | 7 | 10 | 13 | 16' },
            { label: 'Heal (Above 50 Fuel)', value: '8 | 14 | 20 | 26 | 32' },
            { label: 'Movement Speed', value: '30%' },
            { label: 'Movement Speed (Above 50 Fuel)', value: '60%' },
            { label: 'Fuel Cost', value: '5/s' }
          ]
        },
        4: {
          name: 'Volcanic Lightning',
          image: '',
          description: 'Become CC Immune then Dash forward dealing Physical Damage and Slowing the first enemy God hit, and firing a cone attack that deals Physical Damage to other enemies.\n\n• For the next 10 seconds or 4 attacks, every time you basic attack an enemy, you deal reduced damage and also fire a cone attack.\n• This ability triggers items only one time across all 5 possible hits.\n• NO LONGER HAS STRENGTH SCALING',
          cooldown: '90s',
          cost: '100',
          attributes: [
            { label: 'Damage', value: '180 | 255 | 330 | 405 | 480' },
            { label: 'Damage Scaling', value: 'None' },
            { label: 'Cone Damage', value: '100 | 140 | 180 | 220 | 260' },
            { label: 'Cone Damage Scaling', value: 'None' },
            { label: 'Slow', value: '30 | 32.5 | 35 | 37.5 | 40%' },
            { label: 'Slow Duration', value: '3s' },
            { label: 'Range', value: '9.7m' }
          ]
        }
      }
    }
  ],
  recommendedBuilds: []
};