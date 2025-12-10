import { God, DamageType } from '../../types';

export const JANUS: God = {
  id: 'janus',
  name: 'Janus',
  title: 'God of Portals and Transitions',
  pantheon: 'Roman',
  role: 'Mage',
  lanes: ['Mid'],
  damageType: DamageType.Magical,
  image: '',
  videoGuideUrl: '',
  goodAgainst: [],
  badAgainst: [],
  levelingOrder: [],
  statsByLevel: [
    // Level 1
    { strength: 0, intelligence: 0, inhandPower: 42, baseAttackSpeed: 1.0, attackSpeedPercent: 1.4, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 17.5, magicalProtection: 26.1, damageMitigation: 0, maxHealth: 572.7, healthRegen: 1.7, maxMana: 320, manaRegen: 2.43, cooldownRate: 0, movementSpeed: 365, xpRequirement: 0 },
    // Level 2
    { strength: 0, intelligence: 0, inhandPower: 44, baseAttackSpeed: 1.0, attackSpeedPercent: 2.8, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 20.2, magicalProtection: 27.5, damageMitigation: 0, maxHealth: 662.4, healthRegen: 1.9, maxMana: 365, manaRegen: 2.7, cooldownRate: 0, movementSpeed: 365, xpRequirement: 308 },
    // Level 3
    { strength: 0, intelligence: 0, inhandPower: 47, baseAttackSpeed: 1.0, attackSpeedPercent: 4.2, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 23.0, magicalProtection: 28.8, damageMitigation: 0, maxHealth: 752.1, healthRegen: 2.1, maxMana: 410, manaRegen: 2.97, cooldownRate: 0, movementSpeed: 365, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 49, baseAttackSpeed: 1.0, attackSpeedPercent: 5.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 25.8, magicalProtection: 30.2, damageMitigation: 0, maxHealth: 841.8, healthRegen: 2.3, maxMana: 456, manaRegen: 3.24, cooldownRate: 0, movementSpeed: 365, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 51, baseAttackSpeed: 1.0, attackSpeedPercent: 7.0, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 28.5, magicalProtection: 31.6, damageMitigation: 0, maxHealth: 931.5, healthRegen: 2.5, maxMana: 501, manaRegen: 3.51, cooldownRate: 0, movementSpeed: 365, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 54, baseAttackSpeed: 1.0, attackSpeedPercent: 8.4, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 31.3, magicalProtection: 33.0, damageMitigation: 0, maxHealth: 1021.2, healthRegen: 2.7, maxMana: 546, manaRegen: 3.78, cooldownRate: 0, movementSpeed: 365, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 56, baseAttackSpeed: 1.0, attackSpeedPercent: 9.8, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 34.0, magicalProtection: 34.4, damageMitigation: 0, maxHealth: 1110.9, healthRegen: 2.9, maxMana: 592, manaRegen: 4.05, cooldownRate: 0, movementSpeed: 365, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 58, baseAttackSpeed: 1.0, attackSpeedPercent: 11.2, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 36.8, magicalProtection: 35.7, damageMitigation: 0, maxHealth: 1200.6, healthRegen: 3.1, maxMana: 637, manaRegen: 4.32, cooldownRate: 0, movementSpeed: 365, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 60, baseAttackSpeed: 1.0, attackSpeedPercent: 12.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 39.6, magicalProtection: 37.1, damageMitigation: 0, maxHealth: 1290.3, healthRegen: 3.3, maxMana: 683, manaRegen: 4.59, cooldownRate: 0, movementSpeed: 365, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 63, baseAttackSpeed: 1.0, attackSpeedPercent: 14.0, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 42.3, magicalProtection: 38.5, damageMitigation: 0, maxHealth: 1380.0, healthRegen: 3.5, maxMana: 728, manaRegen: 4.86, cooldownRate: 0, movementSpeed: 365, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 65, baseAttackSpeed: 1.0, attackSpeedPercent: 15.4, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 45.1, magicalProtection: 39.9, damageMitigation: 0, maxHealth: 1469.7, healthRegen: 3.7, maxMana: 773, manaRegen: 5.13, cooldownRate: 0, movementSpeed: 365, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 67, baseAttackSpeed: 1.0, attackSpeedPercent: 16.8, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 47.8, magicalProtection: 41.3, damageMitigation: 0, maxHealth: 1559.4, healthRegen: 3.9, maxMana: 819, manaRegen: 5.4, cooldownRate: 0, movementSpeed: 365, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 70, baseAttackSpeed: 1.0, attackSpeedPercent: 18.2, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 50.6, magicalProtection: 42.6, damageMitigation: 0, maxHealth: 1649.1, healthRegen: 4.1, maxMana: 864, manaRegen: 5.67, cooldownRate: 0, movementSpeed: 365, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 72, baseAttackSpeed: 1.0, attackSpeedPercent: 19.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 53.4, magicalProtection: 44.0, damageMitigation: 0, maxHealth: 1738.8, healthRegen: 4.3, maxMana: 909, manaRegen: 5.94, cooldownRate: 0, movementSpeed: 365, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 74, baseAttackSpeed: 1.0, attackSpeedPercent: 21.0, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 56.1, magicalProtection: 45.4, damageMitigation: 0, maxHealth: 1828.5, healthRegen: 4.5, maxMana: 955, manaRegen: 6.21, cooldownRate: 0, movementSpeed: 365, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 76, baseAttackSpeed: 1.0, attackSpeedPercent: 22.4, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 58.9, magicalProtection: 46.8, damageMitigation: 0, maxHealth: 1918.2, healthRegen: 4.7, maxMana: 1000, manaRegen: 6.48, cooldownRate: 0, movementSpeed: 365, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 79, baseAttackSpeed: 1.0, attackSpeedPercent: 23.8, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 61.6, magicalProtection: 48.2, damageMitigation: 0, maxHealth: 2007.9, healthRegen: 4.9, maxMana: 1045, manaRegen: 6.75, cooldownRate: 0, movementSpeed: 365, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 81, baseAttackSpeed: 1.0, attackSpeedPercent: 25.2, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 64.4, magicalProtection: 49.5, damageMitigation: 0, maxHealth: 2097.6, healthRegen: 5.1, maxMana: 1091, manaRegen: 7.02, cooldownRate: 0, movementSpeed: 365, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 83, baseAttackSpeed: 1.0, attackSpeedPercent: 26.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 67.2, magicalProtection: 50.9, damageMitigation: 0, maxHealth: 2187.3, healthRegen: 5.3, maxMana: 1136, manaRegen: 7.29, cooldownRate: 0, movementSpeed: 365, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 86, baseAttackSpeed: 1.0, attackSpeedPercent: 28.0, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 69.9, magicalProtection: 52.3, damageMitigation: 0, maxHealth: 2277.0, healthRegen: 5.5, maxMana: 1182, manaRegen: 7.56, cooldownRate: 0, movementSpeed: 365, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'Janus Basic Attack',
    image: '',
    description: 'Fire a projectile that deals Magical Damage to the first enemy hit.\n\nProjectile stops on first target hit, and does not pass through walls.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
      { label: 'Range', value: '8.8m' },
      { label: 'Radius', value: '0.48m' }
    ]
  },
  passive: {
    name: 'Passages',
    image: '',
    description: 'When you pass through a Portal or Threshold, your next ability deals bonus Magical Damage. Stacks up to 2 times.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Bonus Damage Scaling', value: '20% Intelligence Per Stack' },
      { label: 'Max Stacks', value: '2' }
    ]
  },
  abilities: {
    1: {
      name: 'Portal',
      image: '',
      description: 'Open a portal on a surface.\n\n• Wall portals create a passage to the other side\n• Ground portals Banishes you and enemies upwards, dealing Magical Damage to enemies on landing',
      cooldown: '12s',
      cost: '70',
      attributes: [
        { label: 'Damage', value: '80 | 135 | 190 | 245 | 300' },
        { label: 'Damage Scaling', value: '70% Intelligence' },
        { label: 'Range', value: '8.8m' }
      ]
    },
    2: {
      name: 'Unstable Vortex',
      image: '',
      description: 'Launch two linked portals, dealing Magical Damage to enemies in their path.\n\n• Hitting an enemy with both portals deals bonus Magical Damage\n\nProjectile passes through and damages all enemies, and passes through walls.',
      cooldown: '9s',
      cost: '60 | 65 | 70 | 75 | 80',
      attributes: [
        { label: 'Damage', value: '100 | 165 | 230 | 295 | 360' },
        { label: 'Damage Scaling', value: '95% Intelligence' },
        { label: 'Secondary Damage', value: '20 | 33 | 46 | 59 | 72' },
        { label: 'Secondary Damage Scaling', value: '20% Intelligence' },
        { label: 'Range', value: '11.2m' }
      ]
    },
    3: {
      name: 'Threshold',
      image: '',
      description: 'Unleash a rift that Slows enemies and grants Movement Speed to allies who cross it.\n\n• Affected enemies are Phased, causing your next ability to deal bonus Magical Damage and Magical Damage you deal ignores 15% of their Magical Protection\n• Passive: You and allies gain stacking Movement Speed when crossing the rift or passing through a portal up to 3 stacks',
      cooldown: '12s',
      cost: '50 | 55 | 60 | 65 | 70',
      attributes: [
        { label: 'Bonus Damage Scaling', value: '25% | 30% | 35% | 40% | 45% Intelligence' },
        { label: 'Slow', value: '25%' },
        { label: 'Slow Duration', value: '3s' },
        { label: 'Movement Speed', value: '15%' },
        { label: 'Buff Duration', value: '6s' },
        { label: 'Rift Duration', value: '3 | 3.5 | 4 | 4.5 | 5s' },
        { label: 'Magical Protection Ignored (Phased)', value: '15%' },
        { label: 'Range', value: '8.8m' }
      ]
    },
    4: {
      name: 'Through Space and Time',
      image: '',
      description: 'Fire a global projectile that deals up to Magical Damage and opens portals for allies on any surface it passes. Enemies hit are Phased if Threshold is ranked.\n\n• You are CC Immune while firing\n• Deals Magical Damage when point blank, increasing with distance traveled\n\nProjectile passes through and damages all enemies, and passes through walls. Cannot deal damage to enemies in the fountain.',
      cooldown: '110s',
      cost: '70',
      attributes: [
        { label: 'Base Damage', value: '300 | 375 | 450 | 525 | 600' },
        { label: 'Damage Scaling', value: '90% Intelligence' },
        { label: 'Max Distance Scaling', value: '110% Intelligence' },
        { label: 'Distance for Max Scaling', value: '128m' },
        { label: 'Portal Duration', value: '10s' },
        { label: 'Range', value: '320m (Global)' },
        { label: 'Projectile Radius', value: '0.8m' }
      ]
    }
  },
  aspects: [],
  recommendedBuilds: []
};