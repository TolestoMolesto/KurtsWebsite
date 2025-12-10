import { God, DamageType } from '../../types';

export const NEITH: God = {
  id: 'neith',
  name: 'Neith',
  title: 'Weaver of Fate',
  pantheon: 'Egyptian',
  role: 'Hunter',
  lanes: ['Carry', 'Mid'],
  damageType: DamageType.Physical,
  image: '',
  videoGuideUrl: '',
  goodAgainst: [],
  badAgainst: [],
  levelingOrder: [],
  statsByLevel: [
    // Level 1
    { strength: 0, intelligence: 0, inhandPower: 46.176, baseAttackSpeed: 1.0, attackSpeedPercent: 1.33, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 18.05, magicalProtection: 26.125, damageMitigation: 0, maxHealth: 591.375, healthRegen: 1.7, maxMana: 307.84, manaRegen: 2.1375, cooldownRate: 0, movementSpeed: 375, xpRequirement: 0 },
    // Level 2
    { strength: 0, intelligence: 0, inhandPower: 48.672, baseAttackSpeed: 1.0, attackSpeedPercent: 2.66, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 20.9, magicalProtection: 27.55, damageMitigation: 0, maxHealth: 683.94, healthRegen: 1.9, maxMana: 351.52, manaRegen: 2.375, cooldownRate: 0, movementSpeed: 375, xpRequirement: 308 },
    // Level 3
    { strength: 0, intelligence: 0, inhandPower: 51.168, baseAttackSpeed: 1.0, attackSpeedPercent: 3.99, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 23.75, magicalProtection: 28.975, damageMitigation: 0, maxHealth: 776.505, healthRegen: 2.1, maxMana: 395.2, manaRegen: 2.6125, cooldownRate: 0, movementSpeed: 375, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 53.664, baseAttackSpeed: 1.0, attackSpeedPercent: 5.32, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 26.6, magicalProtection: 30.4, damageMitigation: 0, maxHealth: 869.07, healthRegen: 2.3, maxMana: 438.88, manaRegen: 2.85, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 56.16, baseAttackSpeed: 1.0, attackSpeedPercent: 6.65, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 29.45, magicalProtection: 31.825, damageMitigation: 0, maxHealth: 961.635, healthRegen: 2.5, maxMana: 482.56, manaRegen: 3.0875, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 58.656, baseAttackSpeed: 1.0, attackSpeedPercent: 7.98, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 32.3, magicalProtection: 33.25, damageMitigation: 0, maxHealth: 1054.2, healthRegen: 2.7, maxMana: 526.24, manaRegen: 3.325, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 61.152, baseAttackSpeed: 1.0, attackSpeedPercent: 9.31, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 35.15, magicalProtection: 34.675, damageMitigation: 0, maxHealth: 1146.765, healthRegen: 2.9, maxMana: 569.92, manaRegen: 3.5625, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 63.648, baseAttackSpeed: 1.0, attackSpeedPercent: 10.64, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 38.0, magicalProtection: 36.1, damageMitigation: 0, maxHealth: 1239.33, healthRegen: 3.1, maxMana: 613.6, manaRegen: 3.8, cooldownRate: 0, movementSpeed: 375, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 66.144, baseAttackSpeed: 1.0, attackSpeedPercent: 11.97, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 40.85, magicalProtection: 37.525, damageMitigation: 0, maxHealth: 1331.895, healthRegen: 3.3, maxMana: 657.28, manaRegen: 4.0375, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 68.64, baseAttackSpeed: 1.0, attackSpeedPercent: 13.3, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 43.7, magicalProtection: 38.95, damageMitigation: 0, maxHealth: 1424.46, healthRegen: 3.5, maxMana: 700.96, manaRegen: 4.275, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 71.136, baseAttackSpeed: 1.0, attackSpeedPercent: 14.63, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 46.55, magicalProtection: 40.375, damageMitigation: 0, maxHealth: 1517.025, healthRegen: 3.7, maxMana: 744.64, manaRegen: 4.5125, cooldownRate: 0, movementSpeed: 375, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 73.632, baseAttackSpeed: 1.0, attackSpeedPercent: 15.96, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 49.4, magicalProtection: 41.8, damageMitigation: 0, maxHealth: 1609.59, healthRegen: 3.9, maxMana: 788.32, manaRegen: 4.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 76.128, baseAttackSpeed: 1.0, attackSpeedPercent: 17.29, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 52.25, magicalProtection: 43.225, damageMitigation: 0, maxHealth: 1702.155, healthRegen: 4.1, maxMana: 832.0, manaRegen: 4.9875, cooldownRate: 0, movementSpeed: 375, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 78.624, baseAttackSpeed: 1.0, attackSpeedPercent: 18.62, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 55.1, magicalProtection: 44.65, damageMitigation: 0, maxHealth: 1794.72, healthRegen: 4.3, maxMana: 875.68, manaRegen: 5.225, cooldownRate: 0, movementSpeed: 375, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 81.12, baseAttackSpeed: 1.0, attackSpeedPercent: 19.95, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 57.95, magicalProtection: 46.075, damageMitigation: 0, maxHealth: 1887.285, healthRegen: 4.5, maxMana: 919.36, manaRegen: 5.4625, cooldownRate: 0, movementSpeed: 375, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 83.616, baseAttackSpeed: 1.0, attackSpeedPercent: 21.28, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 60.8, magicalProtection: 47.5, damageMitigation: 0, maxHealth: 1979.85, healthRegen: 4.7, maxMana: 963.04, manaRegen: 5.7, cooldownRate: 0, movementSpeed: 375, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 86.112, baseAttackSpeed: 1.0, attackSpeedPercent: 22.61, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 63.65, magicalProtection: 48.925, damageMitigation: 0, maxHealth: 2072.415, healthRegen: 4.9, maxMana: 1006.72, manaRegen: 5.9375, cooldownRate: 0, movementSpeed: 375, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 88.608, baseAttackSpeed: 1.0, attackSpeedPercent: 23.94, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 66.5, magicalProtection: 50.35, damageMitigation: 0, maxHealth: 2164.98, healthRegen: 5.1, maxMana: 1050.4, manaRegen: 6.175, cooldownRate: 0, movementSpeed: 375, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 91.104, baseAttackSpeed: 1.0, attackSpeedPercent: 25.27, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 69.35, magicalProtection: 51.775, damageMitigation: 0, maxHealth: 2257.545, healthRegen: 5.3, maxMana: 1094.08, manaRegen: 6.4125, cooldownRate: 0, movementSpeed: 375, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 93.6, baseAttackSpeed: 1.0, attackSpeedPercent: 26.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 72.2, magicalProtection: 53.2, damageMitigation: 0, maxHealth: 2351.25, healthRegen: 5.5, maxMana: 1137.76, manaRegen: 6.65, cooldownRate: 0, movementSpeed: 375, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'Neith Basic Attack',
    image: '',
    description: 'Fire a projectile that deals Physical Damage to the first enemy hit.\n\nProjectile stops on first target hit, and does not pass through walls.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
      { label: 'Range', value: '8.8m' },
      { label: 'Radius', value: '0.48m' }
    ]
  },
  passive: {
    name: 'Broken Weave',
    image: '',
    description: 'Your abilities either create or detonate Weaves.\n\n• Detonating Weaves deals Physical Damage to nearby enemies and Roots them\n• You gain a stacking Attack Speed and Intelligence increase per Weave detonated',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage', value: '25' },
      { label: 'Damage Scaling', value: '5 Per Level + 20% Intelligence + 20% Strength' },
      { label: 'Root Duration', value: '1s' },
      { label: 'Attack Speed', value: '4% Per Stack' },
      { label: 'Attack Speed Scaling', value: '3% Strength Per Stack' },
      { label: 'Intelligence', value: '8 + 0.4 Per Level' },
      { label: 'Buff Duration', value: '30s' },
      { label: 'Max Buff Stacks', value: '3' }
    ]
  },
  abilities: {
    1: {
      name: 'Spirit Arrow',
      image: '',
      description: 'Fire a Spirit Arrow projectile that deals Physical Damage and Roots enemies.\n\n• This ability detonates Weaves that it hits\n• This arrow passes through everything\n\nProjectile passes through and damages all enemies, and passes through walls.',
      cooldown: '13 | 12.5 | 12 | 11.5 | 11s',
      cost: '40 | 50 | 60 | 70 | 80',
      attributes: [
        { label: 'Damage', value: '80 | 145 | 210 | 275 | 340' },
        { label: 'Damage Scaling', value: '95% Strength + 75% Intelligence' },
        { label: 'Root Duration', value: '1s' },
        { label: 'Range', value: '10.4m' },
        { label: 'Radius', value: '0.56m' }
      ]
    },
    2: {
      name: 'Unravel',
      image: '',
      description: 'Unravel the world weaves, dealing Physical Damage to enemies in an area.\n\n• This ability creates a Weave\n• You Heal for each enemy hit\n• Hitting a god Heals for more\n\nAlways creates a Weave in the center of the area. Creates additional Weaves for each enemy God hit at the locations of those gods.',
      cooldown: '12s',
      cost: '50 | 60 | 70 | 80 | 90',
      attributes: [
        { label: 'Damage', value: '80 | 130 | 180 | 230 | 280' },
        { label: 'Damage Scaling', value: '80% Intelligence + 55% Strength' },
        { label: 'Heal', value: '11 | 15 | 19 | 23 | 27' },
        { label: 'Heal Scaling', value: '5% Intelligence' },
        { label: 'Increased Heal', value: '25 | 32 | 39 | 46 | 54' },
        { label: 'Increased Heal Scaling', value: '5% Intelligence' },
        { label: 'Range', value: '8.8m' },
        { label: 'Radius', value: '3.2m' }
      ]
    },
    3: {
      name: 'Back Flip',
      image: '',
      description: 'Deal Physical Damage and Slow enemies in front of you, then Leap backwards.\n\n• This ability detonates Weaves that it hits\n\nThis ability can Leap over walls, as long as you can reach a valid landing area.',
      cooldown: '15 | 14.5 | 14 | 13.5 | 13s',
      cost: '50 | 55 | 60 | 65 | 70',
      attributes: [
        { label: 'Damage', value: '85 | 130 | 175 | 220 | 265' },
        { label: 'Damage Scaling', value: '60% Intelligence' },
        { label: 'Slow', value: '30%' },
        { label: 'Slow Duration', value: '2 | 2.5 | 3 | 3.5 | 4s' },
        { label: 'Range', value: '9.6m' },
        { label: 'Cone Range', value: '5.6m' },
        { label: 'Cone Angle', value: '110 degrees' }
      ]
    },
    4: {
      name: 'World Weaver',
      image: '',
      description: 'Charge up and fire an arrow across the world, locked on to an enemy god and ignoring obstacles.\n\n• The arrow deals Physical Damage and Stuns\n• You can fire the arrow before it is fully charged, but it will deal less damage\n\nDamage scales linearly from 50% to 100% based on Channel time. Channel for 0.5 seconds for minimum damage, or for 2 seconds to deal fully charged damage. Projectile ignores minions, passes through walls. Enemy gods can step in front of this projectile to be hit by it instead of the selected god. You can cancel this ability anytime before firing, the costs and cooldown will not be consumed.',
      cooldown: '100s',
      cost: '80 | 90 | 100 | 110 | 120',
      attributes: [
        { label: 'Damage', value: '200 | 250 | 300 | 350 | 400' },
        { label: 'Damage Scaling', value: '105% Strength + 90% Intelligence' },
        { label: 'Stun Duration', value: '1s' }
      ]
    }
  },
  aspects: [
    {
      id: 'wind',
      name: 'Aspect of Wind',
      image: '',
      description: 'Broken Weave explosions no longer Root enemies and the Buff has a reduced duration however the Attack Speed gained is much higher. Additionally using World Weaver provides stacks of Broken Weave.',
      basicAttack: {
        name: 'Neith Basic Attack',
        image: '',
        description: 'Fire a projectile that deals Physical Damage to the first enemy hit.\n\nProjectile stops on first target hit, and does not pass through walls.',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
          { label: 'Range', value: '8.8m' },
          { label: 'Radius', value: '0.48m' }
        ]
      },
      passive: {
        name: 'Broken Weave',
        image: '',
        description: 'Your abilities either create or detonate Weaves.\n\n• Detonating Weaves deals Physical Damage to nearby enemies\n• NO LONGER ROOTS ENEMIES\n• You gain a stacking Attack Speed and Intelligence increase per Weave detonated\n• ATTACK SPEED GREATLY INCREASED\n• WORLD WEAVER PROVIDES STACKS OF BROKEN WEAVE',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Damage', value: '25' },
          { label: 'Damage Scaling', value: '5 Per Level + 20% Intelligence + 20% Strength' },
          { label: 'Attack Speed', value: '15% Per Stack' },
          { label: 'Intelligence', value: '5 + 0.25 Per Level' },
          { label: 'Buff Duration', value: '15s' },
          { label: 'Max Buff Stacks', value: '6' }
        ]
      },
      abilities: {
        1: {
          name: 'Spirit Arrow',
          image: '',
          description: 'Fire a Spirit Arrow projectile that deals Physical Damage and Roots enemies.\n\n• This ability detonates Weaves that it hits\n• This arrow passes through everything\n\nProjectile passes through and damages all enemies, and passes through walls.',
          cooldown: '13 | 12.5 | 12 | 11.5 | 11s',
          cost: '40 | 50 | 60 | 70 | 80',
          attributes: [
            { label: 'Damage', value: '80 | 145 | 210 | 275 | 340' },
            { label: 'Damage Scaling', value: '95% Strength + 75% Intelligence' },
            { label: 'Root Duration', value: '1s' },
            { label: 'Range', value: '10.4m' },
            { label: 'Radius', value: '0.56m' }
          ]
        },
        2: {
          name: 'Unravel',
          image: '',
          description: 'Unravel the world weaves, dealing Physical Damage to enemies in an area.\n\n• This ability creates a Weave\n• You Heal for each enemy hit\n• Hitting a god Heals for more\n\nAlways creates a Weave in the center of the area. Creates additional Weaves for each enemy God hit at the locations of those gods.',
          cooldown: '12s',
          cost: '50 | 60 | 70 | 80 | 90',
          attributes: [
            { label: 'Damage', value: '80 | 130 | 180 | 230 | 280' },
            { label: 'Damage Scaling', value: '80% Intelligence + 55% Strength' },
            { label: 'Heal', value: '11 | 15 | 19 | 23 | 27' },
            { label: 'Heal Scaling', value: '5% Intelligence' },
            { label: 'Increased Heal', value: '25 | 32 | 39 | 46 | 54' },
            { label: 'Increased Heal Scaling', value: '5% Intelligence' },
            { label: 'Range', value: '8.8m' },
            { label: 'Radius', value: '3.2m' }
          ]
        },
        3: {
          name: 'Back Flip',
          image: '',
          description: 'Deal Physical Damage and Slow enemies in front of you, then Leap backwards.\n\n• This ability detonates Weaves that it hits\n\nThis ability can Leap over walls, as long as you can reach a valid landing area.',
          cooldown: '15 | 14.5 | 14 | 13.5 | 13s',
          cost: '50 | 55 | 60 | 65 | 70',
          attributes: [
            { label: 'Damage', value: '85 | 130 | 175 | 220 | 265' },
            { label: 'Damage Scaling', value: '60% Intelligence' },
            { label: 'Slow', value: '30%' },
            { label: 'Slow Duration', value: '2 | 2.5 | 3 | 3.5 | 4s' },
            { label: 'Range', value: '9.6m' },
            { label: 'Cone Range', value: '5.6m' },
            { label: 'Cone Angle', value: '110 degrees' }
          ]
        },
        4: {
          name: 'World Weaver',
          image: '',
          description: 'Charge up and fire an arrow across the world, locked on to an enemy god and ignoring obstacles.\n\n• The arrow deals Physical Damage and Stuns\n• You can fire the arrow before it is fully charged, but it will deal less damage\n• GRANTS STACKS OF BROKEN WEAVE\n\nDamage scales linearly from 50% to 100% based on Channel time. Channel for 0.5 seconds for minimum damage, or for 2 seconds to deal fully charged damage. Projectile ignores minions, passes through walls. Enemy gods can step in front of this projectile to be hit by it instead of the selected god. You can cancel this ability anytime before firing, the costs and cooldown will not be consumed.',
          cooldown: '100s',
          cost: '80 | 90 | 100 | 110 | 120',
          attributes: [
            { label: 'Damage', value: '200 | 250 | 300 | 350 | 400' },
            { label: 'Damage Scaling', value: '105% Strength + 90% Intelligence' },
            { label: 'Stun Duration', value: '1s' }
          ]
        }
      }
    }
  ],
  recommendedBuilds: []
};