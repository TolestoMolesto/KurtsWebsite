import { God, DamageType } from '../../types';

export const YMIR: God = {
  id: 'ymir',
  name: 'Ymir',
  title: 'Father of the Frost Giants',
  pantheon: 'Norse',
  role: 'Guardian',
  lanes: ['Support'],
  damageType: DamageType.Magical,
  image: '',
  videoGuideUrl: '',
  goodAgainst: [],
  badAgainst: [],
  levelingOrder: [],
  statsByLevel: [
    // Level 1
    { strength: 0, intelligence: 0, inhandPower: 44.4, baseAttackSpeed: 0.9672, attackSpeedPercent: 1.33, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 20.52, magicalProtection: 29.7, damageMitigation: 0, maxHealth: 672.3, healthRegen: 1.836, maxMana: 296, manaRegen: 2.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 0 },
    // Level 2
    { strength: 0, intelligence: 0, inhandPower: 46.8, baseAttackSpeed: 0.9672, attackSpeedPercent: 2.66, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 23.76, magicalProtection: 31.32, damageMitigation: 0, maxHealth: 777.6, healthRegen: 2.052, maxMana: 338, manaRegen: 2.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 308 },
    // Level 3
    { strength: 0, intelligence: 0, inhandPower: 49.2, baseAttackSpeed: 0.9672, attackSpeedPercent: 3.99, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 27.0, magicalProtection: 32.94, damageMitigation: 0, maxHealth: 882.9, healthRegen: 2.268, maxMana: 380, manaRegen: 2.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 51.6, baseAttackSpeed: 0.9672, attackSpeedPercent: 5.32, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 30.24, magicalProtection: 34.56, damageMitigation: 0, maxHealth: 988.2, healthRegen: 2.484, maxMana: 422, manaRegen: 3, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 54, baseAttackSpeed: 0.9672, attackSpeedPercent: 6.65, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 33.48, magicalProtection: 36.18, damageMitigation: 0, maxHealth: 1093.5, healthRegen: 2.7, maxMana: 464, manaRegen: 3.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 56.4, baseAttackSpeed: 0.9672, attackSpeedPercent: 7.98, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 36.72, magicalProtection: 37.8, damageMitigation: 0, maxHealth: 1198.8, healthRegen: 2.916, maxMana: 506, manaRegen: 3.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 58.8, baseAttackSpeed: 0.9672, attackSpeedPercent: 9.31, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 39.96, magicalProtection: 39.42, damageMitigation: 0, maxHealth: 1304.1, healthRegen: 3.132, maxMana: 548, manaRegen: 3.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 61.2, baseAttackSpeed: 0.9672, attackSpeedPercent: 10.64, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 43.2, magicalProtection: 41.04, damageMitigation: 0, maxHealth: 1409.4, healthRegen: 3.348, maxMana: 590, manaRegen: 4, cooldownRate: 0, movementSpeed: 375, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 63.6, baseAttackSpeed: 0.9672, attackSpeedPercent: 11.97, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 46.44, magicalProtection: 42.66, damageMitigation: 0, maxHealth: 1514.7, healthRegen: 3.564, maxMana: 632, manaRegen: 4.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 66, baseAttackSpeed: 0.9672, attackSpeedPercent: 13.3, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 49.68, magicalProtection: 44.28, damageMitigation: 0, maxHealth: 1620.0, healthRegen: 3.78, maxMana: 674, manaRegen: 4.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 68.4, baseAttackSpeed: 0.9672, attackSpeedPercent: 14.63, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 52.92, magicalProtection: 45.9, damageMitigation: 0, maxHealth: 1725.3, healthRegen: 3.996, maxMana: 716, manaRegen: 4.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 70.8, baseAttackSpeed: 0.9672, attackSpeedPercent: 15.96, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 56.16, magicalProtection: 47.52, damageMitigation: 0, maxHealth: 1830.6, healthRegen: 4.212, maxMana: 758, manaRegen: 5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 73.2, baseAttackSpeed: 0.9672, attackSpeedPercent: 17.29, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 59.4, magicalProtection: 49.14, damageMitigation: 0, maxHealth: 1935.9, healthRegen: 4.428, maxMana: 800, manaRegen: 5.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 75.6, baseAttackSpeed: 0.9672, attackSpeedPercent: 18.62, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 62.64, magicalProtection: 50.76, damageMitigation: 0, maxHealth: 2041.2, healthRegen: 4.644, maxMana: 842, manaRegen: 5.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 78, baseAttackSpeed: 0.9672, attackSpeedPercent: 19.95, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 65.88, magicalProtection: 52.38, damageMitigation: 0, maxHealth: 2146.5, healthRegen: 4.86, maxMana: 884, manaRegen: 5.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 80.4, baseAttackSpeed: 0.9672, attackSpeedPercent: 21.28, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 69.12, magicalProtection: 53.94, damageMitigation: 0, maxHealth: 2251.8, healthRegen: 5.076, maxMana: 926, manaRegen: 6, cooldownRate: 0, movementSpeed: 375, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 82.8, baseAttackSpeed: 0.9672, attackSpeedPercent: 22.61, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 72.36, magicalProtection: 55.62, damageMitigation: 0, maxHealth: 2357.1, healthRegen: 5.292, maxMana: 968, manaRegen: 6.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 85.2, baseAttackSpeed: 0.9672, attackSpeedPercent: 23.94, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 75.6, magicalProtection: 57.24, damageMitigation: 0, maxHealth: 2462.4, healthRegen: 5.508, maxMana: 1010, manaRegen: 6.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 87.6, baseAttackSpeed: 0.9672, attackSpeedPercent: 25.27, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 78.84, magicalProtection: 58.86, damageMitigation: 0, maxHealth: 2567.7, healthRegen: 5.724, maxMana: 1052, manaRegen: 6.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 90, baseAttackSpeed: 0.9672, attackSpeedPercent: 26.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 82.08, magicalProtection: 60.48, damageMitigation: 0, maxHealth: 2673.0, healthRegen: 5.94, maxMana: 1094, manaRegen: 7, cooldownRate: 0, movementSpeed: 375, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'Ymir Basic Attack',
    image: '',
    description: 'Deal Magical Damage to an enemy in front of you.\n\nIf multiple enemies are in the area, the enemy closest to the center of the area will be hit.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
      { label: 'Range', value: '1.92m' },
      { label: 'Cone Angle', value: '120 degrees' }
    ]
  },
  passive: {
    name: 'Frostbite',
    image: '',
    description: 'Your abilities apply Frostbite when they damage or CC enemies.\n\n• Frostbitten enemies take more basic attack damage [175% STR + 35% INT] from you and deal less damage to you\n• Frostbitten enemies also have decreased Attack Speed\n\nFrostbite\'s effect stacks with Critical Strikes.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage', value: '175% Strength + 35% Intelligence' },
      { label: 'Reduced Damage Dealt', value: '15%' },
      { label: 'Attack Speed Slow', value: '10%' }
    ]
  },
  abilities: {
    1: {
      name: 'Ice Wall',
      image: '',
      description: 'Create a Wall that Knocks Back enemies on creation.\n\n• Reactivate to destroy the Wall early\n\nThe Wall Impedes all characters. Create the Wall at your feet to Displace yourself up and forward. Displaces Enemies up and away from the Wall.',
      cooldown: '15 | 14.5 | 14 | 13.5 | 13s',
      cost: '50 | 55 | 60 | 65 | 70',
      attributes: [
        { label: 'Lifetime', value: '2.5 | 3 | 3.5 | 4 | 4.5s' },
        { label: 'Range', value: '11.2m' },
        { label: 'Radius', value: '3.25m' }
      ]
    },
    2: {
      name: 'Glacial Strike',
      image: '',
      description: 'Smash your club into the ground, creating a field of ice that deals Magical Damage and Slows.\n\nDamaging area starts at Ymir and moves away over time. You are Slowed by 42.5% during activation.',
      cooldown: '8 | 7.5 | 7 | 6.5 | 6s',
      cost: '45 | 50 | 55 | 60 | 65',
      attributes: [
        { label: 'Damage', value: '90 | 150 | 210 | 270 | 330' },
        { label: 'Damage Scaling', value: '70% Intelligence + 45% Strength' },
        { label: 'Slow', value: '25%' },
        { label: 'Slow Duration', value: '2s' },
        { label: 'Range', value: '6m' },
        { label: 'Radius', value: '3.6m' }
      ]
    },
    3: {
      name: 'Frost Breath',
      image: '',
      description: 'Unleash your freezing breath, Stunning enemies in front of you and dealing Magical Damage.\n\nYou are Rooted during activation.',
      cooldown: '14s',
      cost: '40 | 50 | 60 | 70 | 80',
      attributes: [
        { label: 'Damage', value: '50 | 85 | 120 | 155 | 190' },
        { label: 'Damage Scaling', value: '55% Intelligence' },
        { label: 'Stun Duration', value: '1 | 1.1 | 1.2 | 1.3 | 1.4s' },
        { label: 'Stun Duration Scaling', value: '0.2s per 100 Item Protections, stacking up to 2 times' },
        { label: 'Radius', value: '5.6m' },
        { label: 'Cone Angle', value: '90 degrees' }
      ]
    },
    4: {
      name: 'Shards of Ice',
      image: '',
      description: 'Freeze the air around you, Slowing enemies as you Channel.\n\n• After 3 seconds, erupt with a burst of Magical Damage to all enemies in range\n• You may cancel this ability early, dealing less damage\n• You are CC Immune while using this ability\n\nDamage scales linearly from 35% to 100% based on Channel time. Max Channel time of 3 seconds. You are Rooted while Channeling.',
      cooldown: '90 | 85 | 80 | 75 | 70s',
      cost: '80 | 90 | 100 | 110 | 120',
      attributes: [
        { label: 'Damage', value: '550 | 750 | 950 | 1150 | 1350' },
        { label: 'Damage Scaling', value: '160% Intelligence + 45% Protections' },
        { label: 'Slow', value: '40%' },
        { label: 'Radius', value: '5.6m' }
      ]
    }
  },
  aspects: [],
  recommendedBuilds: []
};