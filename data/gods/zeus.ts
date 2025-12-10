import { God, DamageType } from '../../types';

export const ZEUS: God = {
  id: 'zeus',
  name: 'Zeus',
  title: 'King of the Gods',
  pantheon: 'Greek',
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
    { strength: 0, intelligence: 0, inhandPower: 42.3, baseAttackSpeed: 0.9672, attackSpeedPercent: 1.456, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 17.57, magicalProtection: 27.425, damageMitigation: 0, maxHealth: 591.375, healthRegen: 1.7, maxMana: 296, manaRegen: 2.34, cooldownRate: 0, movementSpeed: 365, xpRequirement: 0 },
    // Level 2
    { strength: 0, intelligence: 0, inhandPower: 44.7, baseAttackSpeed: 0.9672, attackSpeedPercent: 2.912, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 20.42, magicalProtection: 28.85, damageMitigation: 0, maxHealth: 683.94, healthRegen: 1.9, maxMana: 338, manaRegen: 2.6, cooldownRate: 0, movementSpeed: 365, xpRequirement: 308 },
    // Level 3
    { strength: 0, intelligence: 0, inhandPower: 47.1, baseAttackSpeed: 0.9672, attackSpeedPercent: 4.368, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 23.27, magicalProtection: 30.275, damageMitigation: 0, maxHealth: 776.5, healthRegen: 2.1, maxMana: 380, manaRegen: 2.86, cooldownRate: 0, movementSpeed: 365, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 49.5, baseAttackSpeed: 0.9672, attackSpeedPercent: 5.824, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 26.12, magicalProtection: 31.7, damageMitigation: 0, maxHealth: 869.07, healthRegen: 2.3, maxMana: 422, manaRegen: 3.12, cooldownRate: 0, movementSpeed: 365, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 51.9, baseAttackSpeed: 0.9672, attackSpeedPercent: 7.28, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 28.97, magicalProtection: 33.125, damageMitigation: 0, maxHealth: 961.63, healthRegen: 2.5, maxMana: 464, manaRegen: 3.38, cooldownRate: 0, movementSpeed: 365, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 54.3, baseAttackSpeed: 0.9672, attackSpeedPercent: 8.736, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 31.82, magicalProtection: 34.55, damageMitigation: 0, maxHealth: 1054.2, healthRegen: 2.7, maxMana: 506, manaRegen: 3.64, cooldownRate: 0, movementSpeed: 365, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 56.7, baseAttackSpeed: 0.9672, attackSpeedPercent: 10.192, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 34.67, magicalProtection: 35.975, damageMitigation: 0, maxHealth: 1146.76, healthRegen: 2.9, maxMana: 548, manaRegen: 3.9, cooldownRate: 0, movementSpeed: 365, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 59.1, baseAttackSpeed: 0.9672, attackSpeedPercent: 11.648, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 37.52, magicalProtection: 37.4, damageMitigation: 0, maxHealth: 1239.33, healthRegen: 3.1, maxMana: 590, manaRegen: 4.16, cooldownRate: 0, movementSpeed: 365, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 61.5, baseAttackSpeed: 0.9672, attackSpeedPercent: 13.104, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 40.37, magicalProtection: 38.825, damageMitigation: 0, maxHealth: 1331.89, healthRegen: 3.3, maxMana: 632, manaRegen: 4.42, cooldownRate: 0, movementSpeed: 365, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 63.9, baseAttackSpeed: 0.9672, attackSpeedPercent: 14.56, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 43.22, magicalProtection: 40.25, damageMitigation: 0, maxHealth: 1424.46, healthRegen: 3.5, maxMana: 674, manaRegen: 4.68, cooldownRate: 0, movementSpeed: 365, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 66.3, baseAttackSpeed: 0.9672, attackSpeedPercent: 16.016, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 46.07, magicalProtection: 41.675, damageMitigation: 0, maxHealth: 1517.02, healthRegen: 3.7, maxMana: 716, manaRegen: 4.94, cooldownRate: 0, movementSpeed: 365, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 68.7, baseAttackSpeed: 0.9672, attackSpeedPercent: 17.472, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 48.92, magicalProtection: 43.1, damageMitigation: 0, maxHealth: 1609.59, healthRegen: 3.9, maxMana: 758, manaRegen: 5.2, cooldownRate: 0, movementSpeed: 365, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 71.1, baseAttackSpeed: 0.9672, attackSpeedPercent: 18.928, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 51.77, magicalProtection: 44.525, damageMitigation: 0, maxHealth: 1702.15, healthRegen: 4.1, maxMana: 800, manaRegen: 5.46, cooldownRate: 0, movementSpeed: 365, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 73.5, baseAttackSpeed: 0.9672, attackSpeedPercent: 20.384, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 54.62, magicalProtection: 45.95, damageMitigation: 0, maxHealth: 1794.72, healthRegen: 4.3, maxMana: 842, manaRegen: 5.72, cooldownRate: 0, movementSpeed: 365, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 75.9, baseAttackSpeed: 0.9672, attackSpeedPercent: 21.84, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 57.47, magicalProtection: 47.375, damageMitigation: 0, maxHealth: 1887.28, healthRegen: 4.5, maxMana: 884, manaRegen: 5.98, cooldownRate: 0, movementSpeed: 365, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 78.3, baseAttackSpeed: 0.9672, attackSpeedPercent: 23.296, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 60.32, magicalProtection: 48.8, damageMitigation: 0, maxHealth: 1979.85, healthRegen: 4.7, maxMana: 926, manaRegen: 6.24, cooldownRate: 0, movementSpeed: 365, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 80.7, baseAttackSpeed: 0.9672, attackSpeedPercent: 24.752, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 63.17, magicalProtection: 50.225, damageMitigation: 0, maxHealth: 2072.41, healthRegen: 4.9, maxMana: 968, manaRegen: 6.5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 83.1, baseAttackSpeed: 0.9672, attackSpeedPercent: 26.208, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 66.02, magicalProtection: 51.65, damageMitigation: 0, maxHealth: 2164.98, healthRegen: 5.1, maxMana: 1010, manaRegen: 6.76, cooldownRate: 0, movementSpeed: 365, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 85.5, baseAttackSpeed: 0.9672, attackSpeedPercent: 27.664, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 68.87, magicalProtection: 53.075, damageMitigation: 0, maxHealth: 2257.54, healthRegen: 5.3, maxMana: 1052, manaRegen: 7.02, cooldownRate: 0, movementSpeed: 365, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 87.9, baseAttackSpeed: 0.9672, attackSpeedPercent: 29.12, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 71.72, magicalProtection: 54.5, damageMitigation: 0, maxHealth: 2351.25, healthRegen: 5.5, maxMana: 1094, manaRegen: 7.28, cooldownRate: 0, movementSpeed: 365, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'Zeus Basic Attack',
    image: '',
    description: 'Fire a projectile that deals Magical Damage to the first enemy hit.\n\n• Projectile stops on first target hit, and does not pass through walls.\n• Basic attacks apply Charges.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
      { label: 'Range', value: '8.8m' },
      { label: 'Radius', value: '0.48m' }
    ]
  },
  passive: {
    name: 'Overcharge',
    image: '',
    description: 'Deal damage to apply Charges.\n\n• Enemies take increased basic attack damage from you for each Charge they have\n• Non-god enemies immediately take 3 stacks.\n• Overcharge\'s effect stacks with Critical Strikes.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage Increase', value: '15% Per Stack' },
      { label: 'Debuff Duration', value: '5s' },
      { label: 'Max Debuff Stacks', value: '3' }
    ]
  },
  abilities: {
    1: {
      name: 'Chain Lightning',
      image: '',
      description: 'Hurl a bolt of lightning that arcs between enemies.\n\n• Deals Magical Damage and Slows\n• Projectile stops on walls',
      cooldown: '12 | 11.5 | 11 | 10.5 | 10s',
      cost: '50 | 55 | 60 | 65 | 70',
      attributes: [
        { label: 'Damage', value: '70 | 115 | 160 | 205 | 250' },
        { label: 'Damage Scaling', value: '60% Intelligence' },
        { label: 'Slow', value: '20%' },
        { label: 'Slow Duration', value: '2s' },
        { label: 'Bounces', value: '5 | 5 | 5 | 6 | 6' },
        { label: 'Range', value: '8.8m' },
        { label: 'Radius', value: '0.56m' }
      ]
    },
    2: {
      name: 'Thunderclap',
      image: '',
      description: 'Call down lightning, dealing Magical Damage to nearby enemies.\n\n• You also gain increased Attack Speed, Movement Speed, and Haste for 5s',
      cooldown: '12s',
      cost: '60 | 65 | 70 | 75 | 80',
      attributes: [
        { label: 'Damage', value: '80 | 130 | 180 | 230 | 280' },
        { label: 'Damage Scaling', value: '75% Intelligence' },
        { label: 'Attack Speed', value: '20 | 22.5 | 25 | 27.5 | 30%' },
        { label: 'Movement Speed', value: '20 | 22.5 | 25 | 27.5 | 30%' },
        { label: 'Haste', value: '10 | 11.25 | 12.5 | 13.75 | 15%' },
        { label: 'Buff Duration', value: '5s' },
        { label: 'Radius', value: '3.2m' }
      ]
    },
    3: {
      name: 'Detonate Charge',
      image: '',
      description: 'Detonate the Charges on all enemies, dealing Magical Damage for each Charge.\n\n• Enemies at Max Charges are Stunned\n• This ability cannot be activated unless an enemy has a Charge.\n• Damage is multiplied by 1/1.7/2.4 based on number of Charges.',
      cooldown: '12 | 11.5 | 11 | 10.5 | 10s',
      cost: '70 | 75 | 80 | 85 | 90',
      attributes: [
        { label: 'Damage', value: '40 | 65 | 90 | 115 | 140' },
        { label: 'Damage Scaling', value: '30% Intelligence' },
        { label: 'Stun Duration', value: '0.5s' }
      ]
    },
    4: {
      name: 'Lightning Storm',
      image: '',
      description: 'Conjure a lightning storm that deals Magical Damage repeatedly in an area.\n\n• This ability hits 5 times over 4.5 seconds.',
      cooldown: '90 | 85 | 80 | 75 | 70s',
      cost: '100',
      attributes: [
        { label: 'Damage Per Tick', value: '100 | 130 | 160 | 190 | 220' },
        { label: 'Damage Scaling Per Tick', value: '75% Intelligence' },
        { label: 'Range', value: '8.8m' },
        { label: 'Radius', value: '4.8m' }
      ]
    }
  },
  aspects: [],
  recommendedBuilds: []
};