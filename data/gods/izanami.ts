import { God, DamageType } from '../../types';

export const IZANAMI: God = {
  id: 'izanami',
  name: 'Izanami',
  title: 'Matron of the Dead',
  pantheon: 'Japanese',
  role: 'Hunter',
  lanes: ['Carry', 'Jungle'],
  damageType: DamageType.Physical,
  image: '',
  videoGuideUrl: '',
  goodAgainst: [],
  badAgainst: [],
  levelingOrder: [],
  statsByLevel: [
    // Level 1
    { strength: 0, intelligence: 0, inhandPower: 41.04, baseAttackSpeed: 1.0, attackSpeedPercent: 1.512, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 18.05, magicalProtection: 26.125, damageMitigation: 0, maxHealth: 591.375, healthRegen: 1.7, maxMana: 296, manaRegen: 2.1375, cooldownRate: 0, movementSpeed: 365, xpRequirement: 0 },
    // Level 2
    { strength: 0, intelligence: 0, inhandPower: 43.44, baseAttackSpeed: 1.0, attackSpeedPercent: 3.024, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 20.9, magicalProtection: 27.55, damageMitigation: 0, maxHealth: 683.94, healthRegen: 1.9, maxMana: 338, manaRegen: 2.375, cooldownRate: 0, movementSpeed: 365, xpRequirement: 308 },
    // Level 3
    { strength: 0, intelligence: 0, inhandPower: 45.84, baseAttackSpeed: 1.0, attackSpeedPercent: 4.536, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 23.75, magicalProtection: 28.975, damageMitigation: 0, maxHealth: 776.505, healthRegen: 2.1, maxMana: 380, manaRegen: 2.6125, cooldownRate: 0, movementSpeed: 365, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 48.24, baseAttackSpeed: 1.0, attackSpeedPercent: 6.048, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 26.6, magicalProtection: 30.4, damageMitigation: 0, maxHealth: 869.07, healthRegen: 2.3, maxMana: 422, manaRegen: 2.85, cooldownRate: 0, movementSpeed: 365, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 50.64, baseAttackSpeed: 1.0, attackSpeedPercent: 7.56, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 29.45, magicalProtection: 31.825, damageMitigation: 0, maxHealth: 961.635, healthRegen: 2.5, maxMana: 464, manaRegen: 3.0875, cooldownRate: 0, movementSpeed: 365, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 53.04, baseAttackSpeed: 1.0, attackSpeedPercent: 9.072, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 32.3, magicalProtection: 33.25, damageMitigation: 0, maxHealth: 1054.2, healthRegen: 2.7, maxMana: 506, manaRegen: 3.325, cooldownRate: 0, movementSpeed: 365, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 55.44, baseAttackSpeed: 1.0, attackSpeedPercent: 10.584, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 35.15, magicalProtection: 34.675, damageMitigation: 0, maxHealth: 1146.765, healthRegen: 2.9, maxMana: 548, manaRegen: 3.5625, cooldownRate: 0, movementSpeed: 365, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 57.84, baseAttackSpeed: 1.0, attackSpeedPercent: 12.096, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 38, magicalProtection: 36.1, damageMitigation: 0, maxHealth: 1239.33, healthRegen: 3.1, maxMana: 590, manaRegen: 3.8, cooldownRate: 0, movementSpeed: 365, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 60.24, baseAttackSpeed: 1.0, attackSpeedPercent: 13.608, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 40.85, magicalProtection: 37.525, damageMitigation: 0, maxHealth: 1331.895, healthRegen: 3.3, maxMana: 632, manaRegen: 4.0375, cooldownRate: 0, movementSpeed: 365, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 62.64, baseAttackSpeed: 1.0, attackSpeedPercent: 15.12, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 43.7, magicalProtection: 38.95, damageMitigation: 0, maxHealth: 1424.46, healthRegen: 3.5, maxMana: 674, manaRegen: 4.275, cooldownRate: 0, movementSpeed: 365, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 65.04, baseAttackSpeed: 1.0, attackSpeedPercent: 16.632, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 46.55, magicalProtection: 40.375, damageMitigation: 0, maxHealth: 1517.025, healthRegen: 3.7, maxMana: 716, manaRegen: 4.5125, cooldownRate: 0, movementSpeed: 365, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 67.44, baseAttackSpeed: 1.0, attackSpeedPercent: 18.144, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 49.4, magicalProtection: 41.8, damageMitigation: 0, maxHealth: 1609.59, healthRegen: 3.9, maxMana: 758, manaRegen: 4.75, cooldownRate: 0, movementSpeed: 365, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 69.84, baseAttackSpeed: 1.0, attackSpeedPercent: 19.656, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 52.25, magicalProtection: 43.225, damageMitigation: 0, maxHealth: 1702.155, healthRegen: 4.1, maxMana: 800, manaRegen: 4.9875, cooldownRate: 0, movementSpeed: 365, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 72.24, baseAttackSpeed: 1.0, attackSpeedPercent: 21.168, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 55.1, magicalProtection: 44.65, damageMitigation: 0, maxHealth: 1794.72, healthRegen: 4.3, maxMana: 842, manaRegen: 5.225, cooldownRate: 0, movementSpeed: 365, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 74.64, baseAttackSpeed: 1.0, attackSpeedPercent: 22.68, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 57.95, magicalProtection: 46.075, damageMitigation: 0, maxHealth: 1887.285, healthRegen: 4.5, maxMana: 884, manaRegen: 5.4625, cooldownRate: 0, movementSpeed: 365, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 77.04, baseAttackSpeed: 1.0, attackSpeedPercent: 24.192, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 60.8, magicalProtection: 47.5, damageMitigation: 0, maxHealth: 1979.85, healthRegen: 4.7, maxMana: 926, manaRegen: 5.7, cooldownRate: 0, movementSpeed: 365, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 79.44, baseAttackSpeed: 1.0, attackSpeedPercent: 25.704, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 63.65, magicalProtection: 48.925, damageMitigation: 0, maxHealth: 2072.415, healthRegen: 4.9, maxMana: 968, manaRegen: 5.9375, cooldownRate: 0, movementSpeed: 365, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 81.84, baseAttackSpeed: 1.0, attackSpeedPercent: 27.216, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 66.5, magicalProtection: 50.35, damageMitigation: 0, maxHealth: 2164.98, healthRegen: 5.1, maxMana: 1010, manaRegen: 6.175, cooldownRate: 0, movementSpeed: 365, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 84.24, baseAttackSpeed: 1.0, attackSpeedPercent: 28.728, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 69.35, magicalProtection: 51.775, damageMitigation: 0, maxHealth: 2257.545, healthRegen: 5.3, maxMana: 1052, manaRegen: 6.4125, cooldownRate: 0, movementSpeed: 365, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 86.64, baseAttackSpeed: 1.0, attackSpeedPercent: 30.24, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 72.2, magicalProtection: 53.2, damageMitigation: 0, maxHealth: 2351.25, healthRegen: 5.5, maxMana: 1094, manaRegen: 6.65, cooldownRate: 0, movementSpeed: 365, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'Izanami Basic Attack',
    image: '',
    description: 'Throw a piercing projectile that deals Physical Damage to all enemies hit. The projectile returns to you after reaching its max range or hitting a wall, dealing Physical Damage to any enemies hit on its way back.\n\n• Projectile speed increased with higher Attack Speed, up to a maximum of a 45% increase at 2.0 Attack Speed.\n• Item effects only trigger on the first target hit per attack.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Initial Damage Scaling', value: '75% Strength + 15% Intelligence' },
      { label: 'Return Damage Scaling', value: '35% Strength + 7% Intelligence' },
      { label: 'Range', value: '8.8m' },
      { label: 'Radius', value: '0.48m' }
    ]
  },
  passive: {
    name: 'Death Draws Nigh',
    image: '',
    description: 'Gain Percent Penetration and Intelligence for each 1% of your Max Health taken as damage.\n\n• Each stack fades 10 seconds after the damage was taken.\n• Stack count cannot drop below the percentage of your current missing health.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Percent Penetration', value: '0.3% Per Stack' },
      { label: 'Intelligence', value: '0.5 + 0.05 Per Level Per Stack' },
      { label: 'Max Stacks', value: '50' }
    ]
  },
  abilities: {
    1: {
      name: 'Sickle Storm',
      image: '',
      description: 'Significantly increases your Attack Speed for 6 seconds, but your Basic Attacks no longer pierce enemies or return to you.\n\n• Basic Attacks deal Bonus Damage to Structures.\n• Applies a stacking Bleed effect to enemies hit.\n• Bleed damage is multiplied with each Stack, and ticks every 0.5s.\n• Can be activated without breaking Stealth from Fade Away.\n• Cancelling this ability will end the effect early.',
      cooldown: '11s',
      cost: '60 | 65 | 70 | 75 | 80',
      attributes: [
        { label: 'Attack Speed', value: '30 | 35 | 40 | 45 | 50%' },
        { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
        { label: 'Bonus Structure Damage', value: '5 | 10 | 15 | 20 | 25' },
        { label: 'Max Bleed Stacks', value: '3' },
        { label: 'Bleed Duration', value: '2s' },
        { label: 'Range', value: '8.8m' },
        { label: 'Radius', value: '0.48m' }
      ]
    },
    2: {
      name: 'Spectral Projection',
      image: '',
      description: 'Send forth a spectral projection of yourself, dealing Physical Damage and Slowing all Enemies in a line.\n\n• Reduces enemy Healing.\n• Spectral Projection passes through enemies and walls.\n• Can be cast without breaking Stealth from Fade Away.',
      cooldown: '14 | 13.5 | 13 | 12.5 | 12s',
      cost: '50 | 55 | 60 | 65 | 70',
      attributes: [
        { label: 'Damage', value: '50 | 90 | 130 | 170 | 210' },
        { label: 'Damage Scaling', value: '80% Strength + 75% Intelligence' },
        { label: 'Slow', value: '20 | 22.5 | 25 | 27.5 | 30%' },
        { label: 'Slow Duration', value: '2s' },
        { label: 'Healing Reduction', value: '25%' },
        { label: 'Range', value: '11.2m' },
        { label: 'Radius', value: '0.8m' }
      ]
    },
    3: {
      name: 'Fade Away',
      image: '',
      description: 'Descend into the underworld, becoming Stealthed, and leap away from your current position.\n\n• Gain Movement Speed while in Stealth.\n• Sickle Storm and Spectral Projection can be used without breaking Stealth.',
      cooldown: '17 | 16.5 | 16 | 15.5 | 15s',
      cost: '50 | 55 | 60 | 65 | 70',
      attributes: [
        { label: 'Movement Speed', value: '15 | 20 | 25 | 30 | 35%' },
        { label: 'Buff Duration', value: '3 | 3.5 | 4 | 4.5 | 5s' },
        { label: 'Range', value: '8.8m' }
      ]
    },
    4: {
      name: 'Dark Portal',
      image: '',
      description: 'Summon a dark portal which deals instant Physical Damage and Physical Damage over time.\n\n• Damaged enemies are also Silenced and Slowed.\n• Slowing and Damage over time effects start strong, and fade away over 2s.\n• Slow is not affected by diminishing returns.',
      cooldown: '90s',
      cost: '100',
      attributes: [
        { label: 'Damage', value: '180 | 260 | 340 | 420 | 500' },
        { label: 'Damage Scaling', value: '100% Strength + 30% Intelligence' },
        { label: 'Bleed Damage', value: '50 | 80 | 110 | 140 | 170 over 4 ticks' },
        { label: 'Bleed Damage Scaling', value: '70% Intelligence over 4 ticks' },
        { label: 'Silence Duration', value: '2s' },
        { label: 'Initial Slow Amount', value: '60%' },
        { label: 'Range', value: '9.6m' },
        { label: 'Radius', value: '2.4m' }
      ]
    }
  },
  aspects: [],
  recommendedBuilds: []
};