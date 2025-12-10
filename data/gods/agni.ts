import { God, DamageType } from '../../types';

export const AGNI: God = {
  id: 'agni',
  name: 'Agni',
  title: 'God of Fire',
  pantheon: 'Hindu',
  role: 'Mage',
  lanes: ['Mid'],
  damageType: DamageType.Magical,
  image: 'https://image2url.com/images/1764780073964-5e90bed5-463c-4a90-9dab-e6fd45efec11.png',
  videoGuideUrl: 'https://www.youtube.com/watch?v=ixIw0_dht_I&list=PLc3QYpLqM0tZIXDctOlabeD-4CroUPZJI&index=36',
  goodAgainst: [],
  badAgainst: [],
  levelingOrder: [],
  statsByLevel: [
    // Level 1
    { strength: 0, intelligence: 0, inhandPower: 42.18, baseAttackSpeed: 1.0, attackSpeedPercent: 1.33, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 17.57, magicalProtection: 27.425, damageMitigation: 0, maxHealth: 617.625, healthRegen: 1.7, maxMana: 296, manaRegen: 2.34, cooldownRate: 0, movementSpeed: 365, xpRequirement: 0 },
    // Level 2
    { strength: 0, intelligence: 0, inhandPower: 44.46, baseAttackSpeed: 1.0, attackSpeedPercent: 2.66, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 20.42, magicalProtection: 28.85, damageMitigation: 0, maxHealth: 710.25, healthRegen: 1.9, maxMana: 338, manaRegen: 2.6, cooldownRate: 0, movementSpeed: 365, xpRequirement: 308 },
    // Level 3
    { strength: 0, intelligence: 0, inhandPower: 46.74, baseAttackSpeed: 1.0, attackSpeedPercent: 3.99, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 23.27, magicalProtection: 30.275, damageMitigation: 0, maxHealth: 802.875, healthRegen: 2.1, maxMana: 380, manaRegen: 2.86, cooldownRate: 0, movementSpeed: 365, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 49.02, baseAttackSpeed: 1.0, attackSpeedPercent: 5.32, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 26.12, magicalProtection: 31.7, damageMitigation: 0, maxHealth: 895.5, healthRegen: 2.3, maxMana: 422, manaRegen: 3.12, cooldownRate: 0, movementSpeed: 365, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 51.3, baseAttackSpeed: 1.0, attackSpeedPercent: 6.65, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 28.97, magicalProtection: 33.125, damageMitigation: 0, maxHealth: 988.125, healthRegen: 2.5, maxMana: 464, manaRegen: 3.38, cooldownRate: 0, movementSpeed: 365, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 53.58, baseAttackSpeed: 1.0, attackSpeedPercent: 7.98, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 31.82, magicalProtection: 34.55, damageMitigation: 0, maxHealth: 1080.75, healthRegen: 2.7, maxMana: 506, manaRegen: 3.64, cooldownRate: 0, movementSpeed: 365, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 55.86, baseAttackSpeed: 1.0, attackSpeedPercent: 9.31, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 34.67, magicalProtection: 35.975, damageMitigation: 0, maxHealth: 1173.375, healthRegen: 2.9, maxMana: 548, manaRegen: 3.9, cooldownRate: 0, movementSpeed: 365, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 58.14, baseAttackSpeed: 1.0, attackSpeedPercent: 10.64, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 37.52, magicalProtection: 37.4, damageMitigation: 0, maxHealth: 1266, healthRegen: 3.1, maxMana: 590, manaRegen: 4.16, cooldownRate: 0, movementSpeed: 365, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 60.42, baseAttackSpeed: 1.0, attackSpeedPercent: 11.97, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 40.37, magicalProtection: 38.825, damageMitigation: 0, maxHealth: 1358.625, healthRegen: 3.3, maxMana: 632, manaRegen: 4.42, cooldownRate: 0, movementSpeed: 365, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 62.7, baseAttackSpeed: 1.0, attackSpeedPercent: 13.3, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 43.22, magicalProtection: 40.25, damageMitigation: 0, maxHealth: 1451.25, healthRegen: 3.5, maxMana: 674, manaRegen: 4.68, cooldownRate: 0, movementSpeed: 365, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 64.98, baseAttackSpeed: 1.0, attackSpeedPercent: 14.63, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 46.07, magicalProtection: 41.675, damageMitigation: 0, maxHealth: 1543.875, healthRegen: 3.7, maxMana: 716, manaRegen: 4.94, cooldownRate: 0, movementSpeed: 365, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 67.26, baseAttackSpeed: 1.0, attackSpeedPercent: 15.96, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 48.92, magicalProtection: 43.1, damageMitigation: 0, maxHealth: 1636.5, healthRegen: 3.9, maxMana: 758, manaRegen: 5.2, cooldownRate: 0, movementSpeed: 365, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 69.54, baseAttackSpeed: 1.0, attackSpeedPercent: 17.29, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 51.77, magicalProtection: 44.525, damageMitigation: 0, maxHealth: 1729.125, healthRegen: 4.1, maxMana: 800, manaRegen: 5.46, cooldownRate: 0, movementSpeed: 365, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 71.82, baseAttackSpeed: 1.0, attackSpeedPercent: 18.62, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 54.62, magicalProtection: 45.95, damageMitigation: 0, maxHealth: 1821.75, healthRegen: 4.3, maxMana: 842, manaRegen: 5.72, cooldownRate: 0, movementSpeed: 365, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 74.1, baseAttackSpeed: 1.0, attackSpeedPercent: 19.95, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 57.47, magicalProtection: 47.375, damageMitigation: 0, maxHealth: 1914.375, healthRegen: 4.5, maxMana: 884, manaRegen: 5.98, cooldownRate: 0, movementSpeed: 365, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 76.38, baseAttackSpeed: 1.0, attackSpeedPercent: 21.28, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 60.32, magicalProtection: 48.8, damageMitigation: 0, maxHealth: 2007, healthRegen: 4.7, maxMana: 926, manaRegen: 6.24, cooldownRate: 0, movementSpeed: 365, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 78.66, baseAttackSpeed: 1.0, attackSpeedPercent: 22.61, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 63.17, magicalProtection: 50.225, damageMitigation: 0, maxHealth: 2099.625, healthRegen: 4.9, maxMana: 968, manaRegen: 6.5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 80.94, baseAttackSpeed: 1.0, attackSpeedPercent: 23.94, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 66.02, magicalProtection: 51.65, damageMitigation: 0, maxHealth: 2192.25, healthRegen: 5.1, maxMana: 1010, manaRegen: 6.76, cooldownRate: 0, movementSpeed: 365, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 83.22, baseAttackSpeed: 1.0, attackSpeedPercent: 25.27, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 68.87, magicalProtection: 53.075, damageMitigation: 0, maxHealth: 2284.875, healthRegen: 5.3, maxMana: 1052, manaRegen: 7.02, cooldownRate: 0, movementSpeed: 365, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 85.5, baseAttackSpeed: 1.0, attackSpeedPercent: 26.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 71.72, magicalProtection: 54.5, damageMitigation: 0, maxHealth: 2377.5, healthRegen: 5.5, maxMana: 1094, manaRegen: 7.28, cooldownRate: 0, movementSpeed: 365, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'Agni Basic Attack',
    image: 'https://image2url.com/images/1764780156548-7aab2849-1b52-4906-ad81-f49d7c2cd837.webp',
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
    name: 'Combustion',
    image: 'https://image2url.com/images/1764779943350-d742f54f-eb65-47e0-ab06-74c649daae1d.png',
    description: 'Hitting an enemy with a Basic Attack provides 1 stack of Combustion. Hitting an enemy god provides 2. At 4 stacks Agni\'s next Flame Wave or Rain Fire will ignite all enemies hit, dealing Magical Damage every 0.5s for 3s. When Agni kills an enemy god, he goes on a Hot Streak. When on a Hot Streak, Combustion is fully charged and using Flame Wave or Rain Fire does not consume Combustion.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Ignite Damage', value: '5' },
      { label: 'Ignite Damage Scaling', value: '6% Intelligence' },
      { label: 'Hot Streak Duration', value: '10s' }
    ]
  },
  abilities: {
    1: {
      name: 'Noxious Fumes',
      image: 'https://image2url.com/images/1764779963125-c699c984-3343-4b9a-a5a9-410f7e867949.png',
      description: 'Summon a cloud of noxious fumes which deals Magical Damage every second. Hitting the fumes with any of your other abilities detonates the gas, Stunning and dealing Magical Damage to enemies in the area.\n\n• Reduces enemy Healing\n• Fumes last for 10s',
      cooldown: '13s',
      cost: '60 | 65 | 70 | 75 | 80',
      attributes: [
        { label: 'Damage', value: '10 | 20 | 30 | 40 | 50' },
        { label: 'Damage Scaling', value: '5% Intelligence' },
        { label: 'Explode Damage', value: '20 | 40 | 60 | 80 | 100' },
        { label: 'Explode Damage Scaling', value: '20% Intelligence' },
        { label: 'Stun Duration', value: '0.8s' },
        { label: 'Healing Reduction', value: '25%' },
        { label: 'Range', value: '8.8m' },
        { label: 'Radius', value: '3.2m' }
      ]
    },
    2: {
      name: 'Flame Wave',
      image: 'https://image2url.com/images/1764779980405-0b96be2d-57b8-4446-91de-1ec438b9a1b2.png',
      description: 'Summon a wave of fire, dealing Magical Damage.\n\n• Ignites Noxious Fumes\n• Persists for 1s after reaching max distance',
      cooldown: '15 | 14.5 | 14 | 13.5 | 13s',
      cost: '60 | 65 | 70 | 75 | 80',
      attributes: [
        { label: 'Damage', value: '100 | 155 | 210 | 265 | 320' },
        { label: 'Damage Scaling', value: '65% Intelligence' },
        { label: 'Range', value: '8m' },
        { label: 'Radius', value: '2.586m' }
      ]
    },
    3: {
      name: 'Path of Flames',
      image: 'https://image2url.com/images/1764779995807-0bc6395f-be1a-4e28-a177-0b6c1ae6fa44.png',
      description: 'Dash forward and leave a trail of fire behind you. Enemies that enter the area take Magical Damage every 0.5s for 2s.\n\n• You are Displacement Immune while Dashing\n• Ignites Noxious Fumes\n• Flame trail lasts for 3s\n• Enemies that are being damaged and touch the area again have their damage duration refreshed',
      cooldown: '16s',
      cost: '70 | 75 | 80 | 85 | 90',
      attributes: [
        { label: 'Damage', value: '20 | 30 | 40 | 50 | 60' },
        { label: 'Damage Scaling', value: '15% Intelligence' },
        { label: 'Range', value: '9.6m' }
      ]
    },
    4: {
      name: 'Rain Fire',
      image: 'https://image2url.com/images/1764779921881-302c9e59-985e-4337-9c38-500ab0cb1410.png',
      description: 'Summon a meteor, dealing Magical Damage. You can have up to 3 charges of this ability.\n\n• Ignites Noxious Fumes\n• You are Slowed by 50% while summoning a meteor',
      cooldown: '18s',
      cost: '10',
      attributes: [
        { label: 'Damage', value: '135 | 175 | 215 | 255 | 295' },
        { label: 'Damage Scaling', value: '60% Intelligence' },
        { label: 'Range', value: '10.4m' },
        { label: 'Radius', value: '3.2m' }
      ]
    }
  },
  aspects: [
    {
      id: 'combustion',
      name: 'Aspect of Combustion',
      image: 'https://image2url.com/images/1764780175808-2da88d3f-78b1-49e3-8fe7-1fbf3706acf4.webp',
      description: 'Basic Attacks now directly ignite enemies dealing Magical Damage over 3s, stacking up to 5 times. Flame Wave and Rain Fire consume the ignite stacks dealing bonus Magical Damage. Rain Fire has reduced base damage and scaling.',
      basicAttack: {
        name: 'Agni Basic Attack',
        image: 'https://image2url.com/images/1764780156548-7aab2849-1b52-4906-ad81-f49d7c2cd837.webp',
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
        name: 'Combustion',
        image: 'https://image2url.com/images/1764779943350-d742f54f-eb65-47e0-ab06-74c649daae1d.png',
        description: 'Hitting an enemy with a Basic Attack ignites them dealing Magical Damage over 3s and stacking 5 times. Flame Wave and Rain of Fire consume the ignite dealing Magical Damage.\n\n• Combustion Damage is increased by 25% per additional stack of ignite',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Ignite DoT Damage', value: '3' },
          { label: 'Ignite DoT Scaling', value: '2% Strength' },
          { label: 'Combustion Damage', value: '10' },
          { label: 'Combustion Damage Scaling', value: '70% Strength' },
          { label: 'Max Stacks', value: '5' }
        ]
      },
      abilities: {
        1: {
          name: 'Noxious Fumes',
          image: 'https://image2url.com/images/1764779963125-c699c984-3343-4b9a-a5a9-410f7e867949.png',
          description: 'Summon a cloud of noxious fumes which deals Magical Damage every second. Hitting the fumes with any of your other abilities detonates the gas, Stunning and dealing Magical Damage to enemies in the area.\n\n• Reduces enemy Healing\n• Fumes last for 10s',
          cooldown: '13s',
          cost: '60 | 65 | 70 | 75 | 80',
          attributes: [
            { label: 'Damage', value: '10 | 20 | 30 | 40 | 50' },
            { label: 'Damage Scaling', value: '5% Intelligence' },
            { label: 'Explode Damage', value: '20 | 40 | 60 | 80 | 100' },
            { label: 'Explode Damage Scaling', value: '20% Intelligence' },
            { label: 'Stun Duration', value: '0.8s' },
            { label: 'Healing Reduction', value: '25%' },
            { label: 'Range', value: '8.8m' },
            { label: 'Radius', value: '3.2m' }
          ]
        },
        2: {
          name: 'Flame Wave',
          image: 'https://image2url.com/images/1764779980405-0b96be2d-57b8-4446-91de-1ec438b9a1b2.png',
          description: 'Summon a wave of fire, dealing Magical Damage.\n\n• Ignites Noxious Fumes\n• Persists for 1s after reaching max distance\n• CONSUMES IGNITE STACKS FOR BONUS DAMAGE',
          cooldown: '15 | 14.5 | 14 | 13.5 | 13s',
          cost: '60 | 65 | 70 | 75 | 80',
          attributes: [
            { label: 'Damage', value: '100 | 155 | 210 | 265 | 320' },
            { label: 'Damage Scaling', value: '65% Intelligence' },
            { label: 'Range', value: '8m' },
            { label: 'Radius', value: '2.586m' }
          ]
        },
        3: {
          name: 'Path of Flames',
          image: 'https://image2url.com/images/1764779995807-0bc6395f-be1a-4e28-a177-0b6c1ae6fa44.png',
          description: 'Dash forward and leave a trail of fire behind you. Enemies that enter the area take Magical Damage every 0.5s for 2s.\n\n• You are Displacement Immune while Dashing\n• Ignites Noxious Fumes\n• Flame trail lasts for 3s\n• Enemies that are being damaged and touch the area again have their damage duration refreshed',
          cooldown: '16s',
          cost: '70 | 75 | 80 | 85 | 90',
          attributes: [
            { label: 'Damage', value: '20 | 30 | 40 | 50 | 60' },
            { label: 'Damage Scaling', value: '15% Intelligence' },
            { label: 'Range', value: '9.6m' }
          ]
        },
        4: {
          name: 'Rain Fire',
          image: 'https://image2url.com/images/1764779921881-302c9e59-985e-4337-9c38-500ab0cb1410.png',
          description: 'Summon a meteor, dealing Magical Damage. You can have up to 3 charges of this ability.\n\n• Ignites Noxious Fumes\n• You are Slowed by 50% while summoning a meteor\n• REDUCED BASE DAMAGE AND SCALING\n• CONSUMES IGNITE STACKS FOR BONUS DAMAGE',
          cooldown: '18s',
          cost: '10',
          attributes: [
            { label: 'Damage', value: '120 | 150 | 180 | 210 | 240' },
            { label: 'Damage Scaling', value: '20% Intelligence' },
            { label: 'Range', value: '10.4m' },
            { label: 'Radius', value: '3.2m' }
          ]
        }
      }
    }
  ],
  recommendedBuilds: []
};