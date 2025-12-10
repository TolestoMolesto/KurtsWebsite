import { God, DamageType } from '../../types';

export const GUAN_YU: God = {
  id: 'guan-yu',
  name: 'Guan Yu',
  title: 'Saint of War',
  pantheon: 'Chinese',
  role: 'Warrior',
  lanes: ['Solo', 'Support'],
  damageType: DamageType.Physical,
  image: '',
  videoGuideUrl: '',
  goodAgainst: [],
  badAgainst: [],
  levelingOrder: [],
  statsByLevel: [
    // Level 1
    { strength: 0, intelligence: 0, inhandPower: 44, baseAttackSpeed: 1.0, attackSpeedPercent: 1.456, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 19.8, magicalProtection: 27.5, damageMitigation: 0, maxHealth: 647.4, healthRegen: 1.7, maxMana: 308, manaRegen: 2.34, cooldownRate: 0, movementSpeed: 375, xpRequirement: 0 },
    // Level 2
    { strength: 0, intelligence: 0, inhandPower: 47, baseAttackSpeed: 1.0, attackSpeedPercent: 2.912, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 22.9, magicalProtection: 29, damageMitigation: 0, maxHealth: 748.8, healthRegen: 1.9, maxMana: 352, manaRegen: 2.6, cooldownRate: 0, movementSpeed: 375, xpRequirement: 308 },
    // Level 3
    { strength: 0, intelligence: 0, inhandPower: 49, baseAttackSpeed: 1.0, attackSpeedPercent: 4.368, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 26, magicalProtection: 30.5, damageMitigation: 0, maxHealth: 850.2, healthRegen: 2.1, maxMana: 395, manaRegen: 2.86, cooldownRate: 0, movementSpeed: 375, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 52, baseAttackSpeed: 1.0, attackSpeedPercent: 5.824, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 29.1, magicalProtection: 32, damageMitigation: 0, maxHealth: 951.6, healthRegen: 2.3, maxMana: 439, manaRegen: 3.12, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 54, baseAttackSpeed: 1.0, attackSpeedPercent: 7.28, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 32.2, magicalProtection: 33.5, damageMitigation: 0, maxHealth: 1053, healthRegen: 2.5, maxMana: 483, manaRegen: 3.38, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 56, baseAttackSpeed: 1.0, attackSpeedPercent: 8.736, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 35.4, magicalProtection: 35, damageMitigation: 0, maxHealth: 1154.4, healthRegen: 2.7, maxMana: 526, manaRegen: 3.64, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 59, baseAttackSpeed: 1.0, attackSpeedPercent: 10.192, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 38.5, magicalProtection: 36.5, damageMitigation: 0, maxHealth: 1255.8, healthRegen: 2.9, maxMana: 570, manaRegen: 3.9, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 61, baseAttackSpeed: 1.0, attackSpeedPercent: 11.648, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 41.6, magicalProtection: 38, damageMitigation: 0, maxHealth: 1357.2, healthRegen: 3.1, maxMana: 614, manaRegen: 4.16, cooldownRate: 0, movementSpeed: 375, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 64, baseAttackSpeed: 1.0, attackSpeedPercent: 13.104, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 44.7, magicalProtection: 39.5, damageMitigation: 0, maxHealth: 1458.6, healthRegen: 3.3, maxMana: 657, manaRegen: 4.42, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 66, baseAttackSpeed: 1.0, attackSpeedPercent: 14.56, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 47.8, magicalProtection: 41, damageMitigation: 0, maxHealth: 1560, healthRegen: 3.5, maxMana: 701, manaRegen: 4.68, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 68, baseAttackSpeed: 1.0, attackSpeedPercent: 16.016, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 51, magicalProtection: 42.5, damageMitigation: 0, maxHealth: 1661.4, healthRegen: 3.7, maxMana: 745, manaRegen: 4.94, cooldownRate: 0, movementSpeed: 375, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 71, baseAttackSpeed: 1.0, attackSpeedPercent: 17.472, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 54.1, magicalProtection: 44, damageMitigation: 0, maxHealth: 1762.8, healthRegen: 3.9, maxMana: 788, manaRegen: 5.2, cooldownRate: 0, movementSpeed: 375, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 73, baseAttackSpeed: 1.0, attackSpeedPercent: 18.928, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 57.2, magicalProtection: 45.5, damageMitigation: 0, maxHealth: 1864.2, healthRegen: 4.1, maxMana: 832, manaRegen: 5.46, cooldownRate: 0, movementSpeed: 375, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 76, baseAttackSpeed: 1.0, attackSpeedPercent: 20.384, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 60.3, magicalProtection: 47, damageMitigation: 0, maxHealth: 1965.6, healthRegen: 4.3, maxMana: 876, manaRegen: 5.72, cooldownRate: 0, movementSpeed: 375, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 78, baseAttackSpeed: 1.0, attackSpeedPercent: 21.84, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 63.4, magicalProtection: 48.5, damageMitigation: 0, maxHealth: 2067, healthRegen: 4.5, maxMana: 919, manaRegen: 5.98, cooldownRate: 0, movementSpeed: 375, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 80, baseAttackSpeed: 1.0, attackSpeedPercent: 23.296, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 66.6, magicalProtection: 50, damageMitigation: 0, maxHealth: 2168.4, healthRegen: 4.7, maxMana: 963, manaRegen: 6.24, cooldownRate: 0, movementSpeed: 375, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 83, baseAttackSpeed: 1.0, attackSpeedPercent: 24.752, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 69.7, magicalProtection: 51.5, damageMitigation: 0, maxHealth: 2269.8, healthRegen: 4.9, maxMana: 1007, manaRegen: 6.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 85, baseAttackSpeed: 1.0, attackSpeedPercent: 26.208, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 72.8, magicalProtection: 53, damageMitigation: 0, maxHealth: 2371.2, healthRegen: 5.1, maxMana: 1050, manaRegen: 6.76, cooldownRate: 0, movementSpeed: 375, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 88, baseAttackSpeed: 1.0, attackSpeedPercent: 27.664, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 75.9, magicalProtection: 54.5, damageMitigation: 0, maxHealth: 2472.6, healthRegen: 5.3, maxMana: 1094, manaRegen: 7.02, cooldownRate: 0, movementSpeed: 375, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 90, baseAttackSpeed: 1.0, attackSpeedPercent: 29.12, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 79, magicalProtection: 56, damageMitigation: 0, maxHealth: 2574, healthRegen: 5.5, maxMana: 1138, manaRegen: 7.28, cooldownRate: 0, movementSpeed: 375, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'Guan Yu Basic Attack',
    image: '',
    description: 'Deal Physical Damage to an enemy in front of you.\n\nIf multiple enemies are in the area, the enemy closest to the center of the area will be hit.\n\n• Has a 4 hit chain. Attacks in order of 1, 1, 1.3, 1.75x damage and swing time\n• The 3rd swing in his chain hits all targets in the damage area',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
      { label: 'Range', value: '1.92m' },
      { label: 'Cone Angle', value: '120 degrees' }
    ]
  },
  passive: {
    name: 'Battle Fervor',
    image: '',
    description: 'Gain stacks of Fervor when dealing or taking damage.\n\n• Fervor provides Attack Speed per stack\n• At Maximum Stacks it provides more Attack Speed',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Attack Speed', value: '0.5% Per Stack' },
      { label: 'Attack Speed at Max', value: '15%' },
      { label: 'Bonus Attack Speed at Max', value: '0.5% Per Level' }
    ]
  },
  abilities: {
    1: {
      name: 'Conviction',
      image: '',
      description: 'Heal yourself for Health.\n\n• Nearby allies are Healed for 75% the amount\n• Healing allied gods reduces Guan Yu and his allies cooldowns\n\nCan be cast during any of Guan Yu\'s other abilities. If Guan Yu would benefit from the Cooldown Reduction, but it was used during the cast of another ability, that ability will receive the cooldown reduction when it goes on cooldown.',
      cooldown: '14s',
      cost: '45',
      attributes: [
        { label: 'Heal', value: '45 | 70 | 95 | 120 | 145' },
        { label: 'Heal Scaling', value: '6% Intelligence' },
        { label: 'Self Cooldown Reduction', value: '2s' },
        { label: 'Ally Cooldown Reduction', value: '1.5s' },
        { label: 'Radius', value: '4.8m' }
      ]
    },
    2: {
      name: "Warrior's Will",
      image: '',
      description: 'Dash forward, dealing Physical Damage to and Slowing enemies you pass through.\n\n• Hitting enemy gods reduces your cooldowns',
      cooldown: '13s',
      cost: '50',
      attributes: [
        { label: 'Damage', value: '80 | 135 | 190 | 245 | 300' },
        { label: 'Damage Scaling', value: '60% Strength' },
        { label: 'Slow', value: '30 | 32.5 | 35 | 37.5 | 40%' },
        { label: 'Slow Scaling', value: '2% Intelligence' },
        { label: 'Slow Duration', value: '2s' },
        { label: 'Cooldown Reduction', value: '-2s' },
        { label: 'Range', value: '5.05m' },
        { label: 'Radius', value: '0.96m' }
      ]
    },
    3: {
      name: 'Taolu Assault',
      image: '',
      description: 'Swing your blade in a flurry, dealing Physical Damage repeatedly and stealing their protections up to 3 times.\n\n• Damages 10 times in 3s\n• Every 25% Attack Speed causes it to damage 1 additional time',
      cooldown: '13s',
      cost: '55 | 60 | 65 | 70 | 75',
      attributes: [
        { label: 'Damage', value: '14 | 25 | 36 | 47 | 58' },
        { label: 'Damage Scaling', value: '22.5% Strength + 15% Intelligence' },
        { label: 'Protections Stolen', value: '3 | 5 | 7 | 9 | 11' },
        { label: 'Stolen Scaling', value: '1.5% Intelligence' },
        { label: 'Range', value: '4.8m' }
      ]
    },
    4: {
      name: 'Cavalry Charge',
      image: '',
      description: 'Mount a warhorse gaining crowd control immunity. Strike enemies while riding dealing Physical Damage. Dismount with a final swing that also Stuns all enemies hit.\n\n• Enemies hit by previous strikes take increased damage from the strike. This stacks\n• Swing faster as you gain Attack Speed',
      cooldown: '90s',
      cost: '80 | 90 | 100 | 110 | 120',
      attributes: [
        { label: 'Damage', value: '85 | 110 | 135 | 160 | 185' },
        { label: 'Damage Scaling', value: '30% Strength + 25% Intelligence' },
        { label: 'Damage Escalation', value: '20%' },
        { label: 'Stun Duration', value: '1.5s' },
        { label: 'Slow', value: '30 | 32.5 | 35 | 37.5 | 40%' },
        { label: 'Slow Duration', value: '2s' },
        { label: 'Radius', value: '3.2m' }
      ]
    }
  },
  aspects: [
    {
      id: 'general',
      name: 'Aspect of the General',
      image: '',
      description: 'Battle Fervor now grants Intelligence instead of Attack Speed. Conviction now applies a Heal over Time after the initial burst, and shares stolen Protections with allies. Taolu Assault has adjusted scaling. Warrior\'s Will and Cavalry Charge have adjusted scaling.',
      basicAttack: {
        name: 'Guan Yu Basic Attack',
        image: '',
        description: 'Deal Physical Damage to an enemy in front of you.\n\nIf multiple enemies are in the area, the enemy closest to the center of the area will be hit.\n\n• Has a 4 hit chain. Attacks in order of 1, 1, 1.3, 1.75x damage and swing time\n• The 3rd swing in his chain hits all targets in the damage area',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
          { label: 'Range', value: '1.92m' },
          { label: 'Cone Angle', value: '120 degrees' }
        ]
      },
      passive: {
        name: 'Battle Fervor',
        image: '',
        description: 'Gain stacks of Fervor when dealing or taking damage.\n\n• Fervor provides Intelligence per stack\n• At Maximum Stacks it provides more Intelligence',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Intelligence', value: '0.75 Per Stack' },
          { label: 'Intelligence at Max', value: '15' },
          { label: 'Bonus Intelligence at Max', value: '1 Per Level' }
        ]
      },
      abilities: {
        1: {
          name: 'Conviction',
          image: '',
          description: 'Heal yourself for Health then apply a Heal over Time that heals Health every 0.5s for 1.5s to yourself and allies.\n\n• Nearby allies are Healed for 75% the amount from the initial burst\n• Healing allied gods reduces Guan Yu and his allies cooldowns\n• If Guan Yu has Protections stolen from Taolu Assault, allies gain them as well when initially healed\n\nCan be cast during any of Guan Yu\'s other abilities.',
          cooldown: '14s',
          cost: '45',
          attributes: [
            { label: 'Heal', value: '45 | 70 | 95 | 120 | 145' },
            { label: 'Heal Scaling', value: '6% Intelligence' },
            { label: 'Heal Per Tick', value: '7 | 13 | 19 | 25 | 31' },
            { label: 'Heal Per Tick Scaling', value: '1.5% Intelligence' },
            { label: 'Self Cooldown Reduction', value: '2s' },
            { label: 'Ally Cooldown Reduction', value: '1.5s' },
            { label: 'Radius', value: '4.8m' }
          ]
        },
        2: {
          name: "Warrior's Will",
          image: '',
          description: 'Dash forward, dealing Physical Damage to and Slowing enemies you pass through.\n\n• Hitting enemy gods reduces your cooldowns\n• NO STRENGTH SCALING',
          cooldown: '13s',
          cost: '50',
          attributes: [
            { label: 'Damage', value: '80 | 135 | 190 | 245 | 300' },
            { label: 'Slow', value: '30 | 32.5 | 35 | 37.5 | 40%' },
            { label: 'Slow Scaling', value: '2% Intelligence' },
            { label: 'Slow Duration', value: '2s' },
            { label: 'Cooldown Reduction', value: '-2s' },
            { label: 'Range', value: '5.05m' },
            { label: 'Radius', value: '0.96m' }
          ]
        },
        3: {
          name: 'Taolu Assault',
          image: '',
          description: 'Swing your blade in a flurry, dealing Physical Damage repeatedly and stealing their protections up to 3 times.\n\n• Damages 10 times in 3s\n• Every 25% Attack Speed causes it to damage 1 additional time\n• ADJUSTED SCALING: Intelligence only',
          cooldown: '13s',
          cost: '55 | 60 | 65 | 70 | 75',
          attributes: [
            { label: 'Damage', value: '14 | 25 | 36 | 47 | 58' },
            { label: 'Damage Scaling', value: '7.5% Intelligence' },
            { label: 'Protections Stolen', value: '3 | 5 | 7 | 9 | 11' },
            { label: 'Stolen Scaling', value: '1.5% Intelligence' },
            { label: 'Range', value: '4.8m' }
          ]
        },
        4: {
          name: 'Cavalry Charge',
          image: '',
          description: 'Mount a warhorse gaining crowd control immunity. Strike enemies while riding dealing Physical Damage. Dismount with a final swing that also Stuns all enemies hit.\n\n• Enemies hit by previous strikes take increased damage from the strike. This stacks\n• Swing faster as you gain Attack Speed\n• ADJUSTED SCALING: Intelligence only',
          cooldown: '90s',
          cost: '80 | 90 | 100 | 110 | 120',
          attributes: [
            { label: 'Damage', value: '85 | 110 | 135 | 160 | 185' },
            { label: 'Damage Scaling', value: '12.5% Intelligence' },
            { label: 'Damage Escalation', value: '20%' },
            { label: 'Stun Duration', value: '1.5s' },
            { label: 'Slow', value: '30 | 32.5 | 35 | 37.5 | 40%' },
            { label: 'Slow Duration', value: '2s' },
            { label: 'Radius', value: '3.2m' }
          ]
        }
      }
    }
  ],
  recommendedBuilds: []
};