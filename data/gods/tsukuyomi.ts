import { God, DamageType } from '../../types';

export const TSUKUYOMI: God = {
  id: 'tsukuyomi',
  name: 'Tsukuyomi',
  title: 'God of the Moon',
  pantheon: 'Japanese',
  role: 'Assassin',
  lanes: ['Jungle', 'Mid'],
  damageType: DamageType.Physical,
  image: '',
  videoGuideUrl: '',
  goodAgainst: [],
  badAgainst: [],
  levelingOrder: [],
  statsByLevel: [
    // Level 1
    { strength: 0, intelligence: 0, inhandPower: 42, baseAttackSpeed: 1.0, attackSpeedPercent: 1.456, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 19, magicalProtection: 27.5, damageMitigation: 0, maxHealth: 617.6, healthRegen: 1.7, maxMana: 296, manaRegen: 2.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 0 },
    // Level 2
    { strength: 0, intelligence: 0, inhandPower: 44, baseAttackSpeed: 1.0, attackSpeedPercent: 2.912, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 22, magicalProtection: 29, damageMitigation: 0, maxHealth: 710.3, healthRegen: 1.9, maxMana: 338, manaRegen: 2.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 308 },
    // Level 3
    { strength: 0, intelligence: 0, inhandPower: 47, baseAttackSpeed: 1.0, attackSpeedPercent: 4.368, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 25, magicalProtection: 30.5, damageMitigation: 0, maxHealth: 803, healthRegen: 2.1, maxMana: 380, manaRegen: 2.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 49, baseAttackSpeed: 1.0, attackSpeedPercent: 5.824, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 28, magicalProtection: 32, damageMitigation: 0, maxHealth: 895.7, healthRegen: 2.3, maxMana: 422, manaRegen: 3, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 52, baseAttackSpeed: 1.0, attackSpeedPercent: 7.28, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 31, magicalProtection: 33.5, damageMitigation: 0, maxHealth: 988.1, healthRegen: 2.5, maxMana: 464, manaRegen: 3.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 55, baseAttackSpeed: 1.0, attackSpeedPercent: 8.736, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 34, magicalProtection: 35, damageMitigation: 0, maxHealth: 1080.8, healthRegen: 2.7, maxMana: 506, manaRegen: 3.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 57, baseAttackSpeed: 1.0, attackSpeedPercent: 10.192, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 37, magicalProtection: 36.5, damageMitigation: 0, maxHealth: 1173.5, healthRegen: 2.9, maxMana: 548, manaRegen: 3.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 60, baseAttackSpeed: 1.0, attackSpeedPercent: 11.648, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 40, magicalProtection: 38, damageMitigation: 0, maxHealth: 1266.2, healthRegen: 3.1, maxMana: 590, manaRegen: 4, cooldownRate: 0, movementSpeed: 375, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 62, baseAttackSpeed: 1.0, attackSpeedPercent: 13.104, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 43, magicalProtection: 39.5, damageMitigation: 0, maxHealth: 1358.6, healthRegen: 3.3, maxMana: 632, manaRegen: 4.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 65, baseAttackSpeed: 1.0, attackSpeedPercent: 14.56, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 46, magicalProtection: 41, damageMitigation: 0, maxHealth: 1451.3, healthRegen: 3.5, maxMana: 674, manaRegen: 4.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 68, baseAttackSpeed: 1.0, attackSpeedPercent: 16.016, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 49, magicalProtection: 42.5, damageMitigation: 0, maxHealth: 1544, healthRegen: 3.7, maxMana: 716, manaRegen: 4.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 70, baseAttackSpeed: 1.0, attackSpeedPercent: 17.472, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 52, magicalProtection: 44, damageMitigation: 0, maxHealth: 1636.7, healthRegen: 3.9, maxMana: 758, manaRegen: 5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 73, baseAttackSpeed: 1.0, attackSpeedPercent: 18.928, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 55, magicalProtection: 45.5, damageMitigation: 0, maxHealth: 1729.1, healthRegen: 4.1, maxMana: 800, manaRegen: 5.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 75, baseAttackSpeed: 1.0, attackSpeedPercent: 20.384, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 58, magicalProtection: 47, damageMitigation: 0, maxHealth: 1821.8, healthRegen: 4.3, maxMana: 842, manaRegen: 5.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 78, baseAttackSpeed: 1.0, attackSpeedPercent: 21.84, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 61, magicalProtection: 48.5, damageMitigation: 0, maxHealth: 1914.5, healthRegen: 4.5, maxMana: 884, manaRegen: 5.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 80, baseAttackSpeed: 1.0, attackSpeedPercent: 23.296, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 64, magicalProtection: 50, damageMitigation: 0, maxHealth: 2007, healthRegen: 4.7, maxMana: 926, manaRegen: 6, cooldownRate: 0, movementSpeed: 375, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 83, baseAttackSpeed: 1.0, attackSpeedPercent: 24.752, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 67, magicalProtection: 51.5, damageMitigation: 0, maxHealth: 2099.6, healthRegen: 4.9, maxMana: 968, manaRegen: 6.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 86, baseAttackSpeed: 1.0, attackSpeedPercent: 26.208, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 70, magicalProtection: 53, damageMitigation: 0, maxHealth: 2192.3, healthRegen: 5.1, maxMana: 1010, manaRegen: 6.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 88, baseAttackSpeed: 1.0, attackSpeedPercent: 27.664, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 73, magicalProtection: 54.5, damageMitigation: 0, maxHealth: 2284.9, healthRegen: 5.3, maxMana: 1052, manaRegen: 6.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 91, baseAttackSpeed: 1.0, attackSpeedPercent: 29.12, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 76, magicalProtection: 56, damageMitigation: 0, maxHealth: 2377.5, healthRegen: 5.5, maxMana: 1094, manaRegen: 7, cooldownRate: 0, movementSpeed: 375, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'Tsukuyomi Basic Attack',
    image: '',
    description: 'Deal Physical Damage to an enemy in front of you.\n\nIf multiple enemies are in the area, the enemy closest to the center of the area will be hit.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
      { label: 'Range', value: '1.92m' },
      { label: 'Cone Angle', value: '120 degrees' }
    ]
  },
  passive: {
    name: 'Shingetsu & Mangetsu',
    image: '',
    description: 'Damaging enemies empowers your twin tonfas, Shingetsu and Mangetsu.\n\n• Empowered Shingetsu cleaves for 50% damage and restores mana\n• Empowered Mangetsu deals bonus Physical Damage and restores health',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Mana Restore', value: '3' },
      { label: 'Mana Restore Scaling', value: '20% Strength' },
      { label: 'Heal', value: '5' },
      { label: 'Heal Scaling', value: '1 Per Level' },
      { label: 'Bonus Damage', value: '2' },
      { label: 'Damage Scaling', value: '15% Strength + 30% Intelligence' }
    ]
  },
  abilities: {
    1: {
      name: 'Dark Moon Shuriken',
      image: '',
      description: 'Throw a shuriken that deals Physical Damage to enemies and sticks into the first god hit.\n\n• Retrieving the shuriken from a god reduces this ability\'s cooldown\n• After casting, your next Shingetsu Attack becomes a ranged attack that steals Movement Speed',
      cooldown: '14s',
      cost: '50 | 60 | 70 | 80 | 90',
      attributes: [
        { label: 'Damage', value: '70 | 120 | 170 | 220 | 270' },
        { label: 'Damage Scaling', value: '80% Strength + 70% Intelligence' },
        { label: 'Cooldown Reduction', value: '4s' },
        { label: 'Movement Speed Steal', value: '25%' },
        { label: 'Buff Duration', value: '4s' },
        { label: 'Range', value: '10.4m' }
      ]
    },
    2: {
      name: 'Kusarigama',
      image: '',
      description: 'Perform a three-swing combo with a Kusarigama. The first two swings deal Physical Damage and Disarm enemies. The final swing deals more Damage.\n\n• While Strength is higher than Intelligence, it is Shingetsu infused. Otherwise, it is Mangetsu infused\n• Shingetsu Infused: Gain Movement Speed and the final swing Stuns\n• Mangetsu Infused: The final swing gains +20% Base Damage, +20% Intelligence Scaling, and 3.2m range\n\nYou are immune to Knockups while swinging.',
      cooldown: '14s',
      cost: '70 | 75 | 80 | 85 | 90',
      attributes: [
        { label: 'Swing Damage', value: '30 | 55 | 80 | 105 | 130' },
        { label: 'Swing Scaling', value: '40% Strength + 25% Intelligence' },
        { label: 'Final Damage', value: '50 | 95 | 140 | 185 | 230' },
        { label: 'Final Scaling', value: '90% Strength + 50% Intelligence' },
        { label: 'Disarm Duration', value: '1s' },
        { label: 'Stun Duration (Shingetsu)', value: '0.8 | 0.9 | 1.0 | 1.1 | 1.2s' },
        { label: 'Movement Speed (Shingetsu)', value: '25%' },
        { label: 'Final Damage (Mangetsu)', value: '60 | 114 | 168 | 222 | 276' },
        { label: 'Final Scaling (Mangetsu)', value: '90% Strength + 70% Intelligence' },
        { label: 'Range', value: '4.8m' },
        { label: 'Range (Mangetsu)', value: '8m' }
      ]
    },
    3: {
      name: 'Silver Moon Caltrops',
      image: '',
      description: 'Scatter Caltrops in an area, dealing Physical Damage and Slowing enemies.\n\n• Enemies moving within the Caltrops take additional damage and are Slowed again\n• After casting, your next Mangetsu Attack becomes a ranged attack that deals bonus Physical Damage\n\nChecks for movement every 0.25s for 6s.',
      cooldown: '14s',
      cost: '40 | 45 | 50 | 55 | 60',
      attributes: [
        { label: 'Damage', value: '20 | 30 | 40 | 50 | 60' },
        { label: 'Damage Scaling', value: '12.5% Strength + 15% Intelligence' },
        { label: 'Slow', value: '20%' },
        { label: 'Slow Duration', value: '1.5s' },
        { label: 'Mangetsu Bonus Damage', value: '5' },
        { label: 'Mangetsu Bonus Scaling', value: '30% Strength + 65% Intelligence' },
        { label: 'Range', value: '8.12m' }
      ]
    },
    4: {
      name: 'Piercing Moonlight',
      image: '',
      description: 'Fire 4 piercing beams of moonlight, marking and dealing Physical Damage to enemy gods. You are CC Immune and have Damage Reduction while firing.\n\n• After firing, dash through all marked gods in order, dealing Physical Damage with each strike, applying Shingetsu & Mangetsu effects, as well as Attack Hit items.\n• Killing a god with this ability empowers both weapons and grants both ranged attacks',
      cooldown: '100s',
      cost: '50 | 60 | 70 | 80 | 90',
      attributes: [
        { label: 'Beam Damage', value: '30 | 50 | 70 | 90 | 110' },
        { label: 'Beam Scaling', value: '15% Strength + 40% Intelligence' },
        { label: 'Dash Damage', value: '60 | 85 | 110 | 135 | 160' },
        { label: 'Dash Scaling', value: '55% Strength + 20% Intelligence' },
        { label: 'Damage Reduction', value: '20%' },
        { label: 'Range', value: '14.4m' }
      ]
    }
  },
  aspects: [],
  recommendedBuilds: []
};