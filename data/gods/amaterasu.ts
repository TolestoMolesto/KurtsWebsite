import { God, DamageType } from '../../types';

export const AMATERASU: God = {
  id: 'amaterasu',
  name: 'Amaterasu',
  title: 'The Shining Light',
  pantheon: 'Japanese',
  role: 'Warrior',
  lanes: ['Solo', 'Jungle'],
  damageType: DamageType.Physical,
  image: 'https://image2url.com/images/1764828759575-bbe5741c-6275-4c3d-9376-477e45d93958.webp',
  videoGuideUrl: 'https://www.youtube.com/watch?v=LJ2MTTdm4-A&list=PLc3QYpLqM0tZIXDctOlabeD-4CroUPZJI&index=34',
  goodAgainst: [],
  badAgainst: [],
  levelingOrder: [],
  statsByLevel: [
    // Level 1
    { strength: 0, intelligence: 0, inhandPower: 44.4, baseAttackSpeed: 1.0, attackSpeedPercent: 1.456, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 20.4, magicalProtection: 28.6, damageMitigation: 0, maxHealth: 647.4, healthRegen: 1.768, maxMana: 296, manaRegen: 2.25, cooldownRate: 0, movementSpeed: 365, xpRequirement: 0 },
    // Level 2
    { strength: 0, intelligence: 0, inhandPower: 46.8, baseAttackSpeed: 1.0, attackSpeedPercent: 2.912, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 23.52, magicalProtection: 30.16, damageMitigation: 0, maxHealth: 748.8, healthRegen: 1.976, maxMana: 338, manaRegen: 2.5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 308 },
    // Level 3
    { strength: 0, intelligence: 0, inhandPower: 49.2, baseAttackSpeed: 1.0, attackSpeedPercent: 4.368, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 26.64, magicalProtection: 31.72, damageMitigation: 0, maxHealth: 850.2, healthRegen: 2.184, maxMana: 380, manaRegen: 2.75, cooldownRate: 0, movementSpeed: 365, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 51.6, baseAttackSpeed: 1.0, attackSpeedPercent: 5.824, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 29.76, magicalProtection: 33.28, damageMitigation: 0, maxHealth: 951.6, healthRegen: 2.392, maxMana: 422, manaRegen: 3.0, cooldownRate: 0, movementSpeed: 365, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 54.0, baseAttackSpeed: 1.0, attackSpeedPercent: 7.28, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 32.88, magicalProtection: 34.84, damageMitigation: 0, maxHealth: 1053.0, healthRegen: 2.6, maxMana: 464, manaRegen: 3.25, cooldownRate: 0, movementSpeed: 365, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 56.4, baseAttackSpeed: 1.0, attackSpeedPercent: 8.736, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 36.0, magicalProtection: 36.4, damageMitigation: 0, maxHealth: 1154.4, healthRegen: 2.808, maxMana: 506, manaRegen: 3.5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 58.8, baseAttackSpeed: 1.0, attackSpeedPercent: 10.192, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 39.12, magicalProtection: 37.96, damageMitigation: 0, maxHealth: 1255.8, healthRegen: 3.016, maxMana: 548, manaRegen: 3.75, cooldownRate: 0, movementSpeed: 365, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 61.2, baseAttackSpeed: 1.0, attackSpeedPercent: 11.648, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 42.24, magicalProtection: 39.52, damageMitigation: 0, maxHealth: 1357.2, healthRegen: 3.224, maxMana: 590, manaRegen: 4.0, cooldownRate: 0, movementSpeed: 365, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 63.6, baseAttackSpeed: 1.0, attackSpeedPercent: 13.104, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 45.36, magicalProtection: 41.08, damageMitigation: 0, maxHealth: 1458.6, healthRegen: 3.432, maxMana: 632, manaRegen: 4.25, cooldownRate: 0, movementSpeed: 365, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 66.0, baseAttackSpeed: 1.0, attackSpeedPercent: 14.56, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 48.48, magicalProtection: 42.64, damageMitigation: 0, maxHealth: 1560.0, healthRegen: 3.64, maxMana: 674, manaRegen: 4.5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 68.4, baseAttackSpeed: 1.0, attackSpeedPercent: 16.016, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 51.6, magicalProtection: 44.2, damageMitigation: 0, maxHealth: 1661.4, healthRegen: 3.848, maxMana: 716, manaRegen: 4.75, cooldownRate: 0, movementSpeed: 365, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 70.8, baseAttackSpeed: 1.0, attackSpeedPercent: 17.472, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 54.72, magicalProtection: 45.76, damageMitigation: 0, maxHealth: 1762.8, healthRegen: 4.056, maxMana: 758, manaRegen: 5.0, cooldownRate: 0, movementSpeed: 365, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 73.2, baseAttackSpeed: 1.0, attackSpeedPercent: 18.928, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 57.84, magicalProtection: 47.32, damageMitigation: 0, maxHealth: 1864.2, healthRegen: 4.264, maxMana: 800, manaRegen: 5.25, cooldownRate: 0, movementSpeed: 365, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 75.6, baseAttackSpeed: 1.0, attackSpeedPercent: 20.384, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 60.96, magicalProtection: 48.88, damageMitigation: 0, maxHealth: 1965.6, healthRegen: 4.472, maxMana: 842, manaRegen: 5.5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 78.0, baseAttackSpeed: 1.0, attackSpeedPercent: 21.84, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 64.08, magicalProtection: 50.44, damageMitigation: 0, maxHealth: 2067.0, healthRegen: 4.68, maxMana: 884, manaRegen: 5.75, cooldownRate: 0, movementSpeed: 365, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 80.4, baseAttackSpeed: 1.0, attackSpeedPercent: 23.296, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 67.2, magicalProtection: 52.0, damageMitigation: 0, maxHealth: 2168.4, healthRegen: 4.888, maxMana: 926, manaRegen: 6.0, cooldownRate: 0, movementSpeed: 365, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 82.8, baseAttackSpeed: 1.0, attackSpeedPercent: 24.752, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 70.32, magicalProtection: 53.56, damageMitigation: 0, maxHealth: 2269.8, healthRegen: 5.096, maxMana: 968, manaRegen: 6.25, cooldownRate: 0, movementSpeed: 365, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 85.2, baseAttackSpeed: 1.0, attackSpeedPercent: 26.208, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 73.44, magicalProtection: 55.12, damageMitigation: 0, maxHealth: 2371.2, healthRegen: 5.304, maxMana: 1010, manaRegen: 6.5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 87.6, baseAttackSpeed: 1.0, attackSpeedPercent: 27.664, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 76.56, magicalProtection: 56.68, damageMitigation: 0, maxHealth: 2472.6, healthRegen: 5.512, maxMana: 1052, manaRegen: 6.75, cooldownRate: 0, movementSpeed: 365, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 90.0, baseAttackSpeed: 1.0, attackSpeedPercent: 29.12, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 79.68, magicalProtection: 58.24, damageMitigation: 0, maxHealth: 2574.0, healthRegen: 5.72, maxMana: 1094, manaRegen: 7.0, cooldownRate: 0, movementSpeed: 365, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'Amaterasu Basic Attack',
    image: 'https://image2url.com/images/1764828777141-3da74e23-4fbe-482e-864e-8733d529e3bb.webp',
    description: 'Deal Physical Damage to an enemy in front of you.\n\nIf multiple enemies are in the area, the enemy closest to the center of the area will be hit.\n\nHas a 3 hit chain. Attacks in order of 1, 0.5, 1x damage and swing time.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
      { label: 'Range', value: '1.92m' },
      { label: 'Cone Angle', value: '120 degrees' }
    ]
  },
  passive: {
    name: 'Illuminating Strike',
    image: 'https://image2url.com/images/1764828787437-a23e66af-9536-41bc-b57f-77538ce67e4f.webp',
    description: 'Basic Attack or damage an enemy with Dazzling Offensive 3 times to illuminate their weaknesses, causing them and other nearby enemies to take more damage from all sources.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Increased Damage Taken', value: '10%' },
      { label: 'Debuff Duration', value: '6s' },
      { label: 'Radius', value: '4.8m' }
    ]
  },
  abilities: {
    1: {
      name: 'Divine Presence',
      image: 'https://image2url.com/images/1764829769807-4724f63d-4ff1-4753-b014-d70bc3a46a24.webp',
      description: 'Heal yourself over 4s, and alternate between the Valor and Benevolence buff effects.\n\n• Benevolence provides a Health Shield for 6s on activation, and a persistent Movement Speed Buff\n• Valor provides an Attack Speed buff for 6s on activation, and a persistent Strength and Intelligence Buff',
      cooldown: '12s',
      cost: '30',
      attributes: [
        { label: 'Heal Per Tick', value: '15 | 21 | 27 | 33 | 39' },
        { label: 'Heal Scaling Per Tick', value: '3.5% Intelligence' },
        { label: 'Shield Health (Benevolence)', value: '4 | 5 | 6 | 7 | 8% of your HP' },
        { label: 'Movement Speed (Benevolence)', value: '7 | 9 | 11 | 13 | 15%' },
        { label: 'Attack Speed (Valor)', value: '8 | 11 | 14 | 17 | 20%' },
        { label: 'Strength (Valor)', value: '12 | 15 | 18 | 21 | 24' },
        { label: 'Strength Scaling', value: '5% Intelligence' },
        { label: 'Intelligence (Valor)', value: '18 | 22 | 26 | 30 | 34' },
        { label: 'Intelligence Scaling', value: '3% Intelligence' },
        { label: 'Radius', value: '5.6m' }
      ],
      subAbilities: [
        {
          name: 'Benevolence Aura',
          description: 'Provides a Health Shield on activation and a persistent Movement Speed Buff to you and nearby allies.',
          image: 'https://image2url.com/images/1764828975545-3d9d443c-5e4d-4359-a69e-b7d54e62c567.png',
          attributes: [
            { label: 'Shield Health', value: '4 | 5 | 6 | 7 | 8% of your HP' },
            { label: 'Movement Speed', value: '7 | 9 | 11 | 13 | 15%' },
            { label: 'Shield Duration', value: '6s' }
          ]
        },
        {
          name: 'Valor Aura',
          description: 'Provides an Attack Speed buff on activation and a persistent Strength and Intelligence Buff to you and nearby allies.',
          image: 'https://image2url.com/images/1764829745380-7667d0aa-b89e-4564-a71c-42e360bf6ba7.png',
          attributes: [
            { label: 'Attack Speed', value: '8 | 11 | 14 | 17 | 20%' },
            { label: 'Strength', value: '12 | 15 | 18 | 21 | 24' },
            { label: 'Intelligence', value: '18 | 22 | 26 | 30 | 34' },
            { label: 'Buff Duration', value: '6s' }
          ]
        }
      ]
    },
    2: {
      name: 'Heavenly Reflection',
      image: 'https://image2url.com/images/1764828799505-22b352c7-0be4-42f8-bc9a-c1e9176080a3.webp',
      description: 'Charge your Mirror for 5s and decrease all damage you take while charging. Reactivate the ability to fire a projectile that deals Physical Damage to enemies, increased by the Mirror\'s charge amount.\n\n• Deal and take damage to charge the Mirror\n• Base Damage is doubled when Mirror is fully charged\n\nProjectile passes through and damages all enemies, and passes through walls.',
      cooldown: '12s',
      cost: '60 | 65 | 70 | 75 | 80',
      attributes: [
        { label: 'Damage', value: '80 | 120 | 160 | 200 | 240' },
        { label: 'Damage Scaling', value: '60% Strength + 60% Intelligence' },
        { label: 'Damage Taken Reduction', value: '7 | 9 | 11 | 13 | 15%' },
        { label: 'Damage Reduction Scaling', value: '5% Intelligence' },
        { label: 'Buff Duration', value: '5s' },
        { label: 'Projectile Range', value: '8.8m' },
        { label: 'Projectile Radius', value: '0.8m' }
      ]
    },
    3: {
      name: 'Glorious Charge',
      image: 'https://image2url.com/images/1764828990312-f2123da6-223f-4424-beb7-3396a1ee324f.webp',
      description: 'Silence enemies in front of you for 1s, then dash forward and deal Physical Damage.\n\n• Pierces through and damages minions but stops on first god hit',
      cooldown: '15s',
      cost: '60',
      attributes: [
        { label: 'Damage', value: '80 | 135 | 190 | 245 | 300' },
        { label: 'Damage Scaling', value: '60% Strength' },
        { label: 'Silence Duration', value: '1s' },
        { label: 'Range', value: '8.8m' },
        { label: 'Radius', value: '3.2m' }
      ]
    },
    4: {
      name: 'Dazzling Offensive',
      image: 'https://image2url.com/images/1764829001843-e5c3af15-46d4-4abb-8eee-3b168d9813e2.webp',
      description: 'Become CC Immune and then attack 3 times to deal Physical Damage to enemies in front of you each time.\n\n• Attacks deal more damage and have bonus effects on each subsequent successful hit\n• 2nd hit deals 1.2x damage and Slows by 30% for 2s\n• 3rd hit deals 1.4x damage and Stuns for 1.2s',
      cooldown: '110 | 105 | 100 | 95 | 90s',
      cost: '100',
      attributes: [
        { label: 'Damage', value: '100 | 150 | 200 | 250 | 300' },
        { label: 'Damage Scaling', value: '45% Strength + 50% Intelligence' },
        { label: 'Slow', value: '30%' },
        { label: 'Slow Duration', value: '2s' },
        { label: 'Stun Duration', value: '1.2s' },
        { label: 'Radius', value: '5.6m' },
        { label: 'Cone Angle', value: '110 degrees' }
      ]
    }
  },
  aspects: [
    {
      id: 'valor',
      name: 'Aspect of Valor',
      image: 'https://image2url.com/images/1764829593665-985a0aed-c1eb-4f70-9e04-0e5c5ed9e185.avif',
      description: 'Divine Presence no longer alternates between auras. Instead, it provides a persistent Strength and Intelligence Buff to you and nearby allies. On activation, you and nearby allies gain an Attack Speed buff, and you additionally gain Movement Speed, Haste, Lifesteal, and Basic Attack Power.',
      basicAttack: {
        name: 'Amaterasu Basic Attack',
        image: 'https://image2url.com/images/1764828777141-3da74e23-4fbe-482e-864e-8733d529e3bb.webp',
        description: 'Deal Physical Damage to an enemy in front of you.\n\nIf multiple enemies are in the area, the enemy closest to the center of the area will be hit.\n\nHas a 3 hit chain. Attacks in order of 1, 0.5, 1x damage and swing time.',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
          { label: 'Range', value: '1.92m' },
          { label: 'Cone Angle', value: '120 degrees' }
        ]
      },
      passive: {
        name: 'Illuminating Strike',
        image: 'https://image2url.com/images/1764828787437-a23e66af-9536-41bc-b57f-77538ce67e4f.webp',
        description: 'Basic Attack or damage an enemy with Dazzling Offensive 3 times to illuminate their weaknesses, causing them and other nearby enemies to take more damage from all sources.',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Increased Damage Taken', value: '10%' },
          { label: 'Debuff Duration', value: '6s' },
          { label: 'Radius', value: '4.8m' }
        ]
      },
      abilities: {
        1: {
          name: 'Divine Presence',
          image: 'https://image2url.com/images/1764828944588-dff53972-9fcc-468e-9a8a-acd77c54253d.png',
          description: 'Provide you and nearby allies with a persistent Strength and Intelligence Buff.\n\nOn activation, provide you and nearby allies with an Attack Speed buff for 6s, and you gain Movement Speed, Haste, Lifesteal, and Basic Attack Power for the same duration.\n\n• NO LONGER ALTERNATES BETWEEN AURAS\n• NO LONGER HEALS OR PROVIDES SHIELD',
          cooldown: '12s',
          cost: '30',
          attributes: [
            { label: 'Strength', value: '6 | 7.5 | 9 | 10.5 | 12' },
            { label: 'Strength Scaling', value: '5% Intelligence' },
            { label: 'Intelligence', value: '9 | 11 | 13 | 15 | 17' },
            { label: 'Intelligence Scaling', value: '3% Intelligence' },
            { label: 'Attack Speed', value: '8 | 11 | 14 | 17 | 20%' },
            { label: 'Movement Speed (Self)', value: '15 | 17.5 | 20 | 22.5 | 25%' },
            { label: 'Haste (Self)', value: '10%' },
            { label: 'Basic Attack Damage (Self)', value: '7 | 14 | 21 | 28 | 35' },
            { label: 'Lifesteal (Self)', value: '3 | 3.5 | 4 | 4.5 | 5%' },
            { label: 'Buff Duration', value: '6s' },
            { label: 'Radius', value: '5.6m' }
          ]
        },
        2: {
          name: 'Heavenly Reflection',
          image: 'https://image2url.com/images/1764828799505-22b352c7-0be4-42f8-bc9a-c1e9176080a3.webp',
          description: 'Charge your Mirror for 5s and decrease all damage you take while charging. Reactivate the ability to fire a projectile that deals Physical Damage to enemies, increased by the Mirror\'s charge amount.\n\n• Deal and take damage to charge the Mirror\n• Base Damage is doubled when Mirror is fully charged\n\nProjectile passes through and damages all enemies, and passes through walls.',
          cooldown: '12s',
          cost: '60 | 65 | 70 | 75 | 80',
          attributes: [
            { label: 'Damage', value: '80 | 120 | 160 | 200 | 240' },
            { label: 'Damage Scaling', value: '60% Strength + 60% Intelligence' },
            { label: 'Damage Taken Reduction', value: '7 | 9 | 11 | 13 | 15%' },
            { label: 'Damage Reduction Scaling', value: '5% Intelligence' },
            { label: 'Buff Duration', value: '5s' },
            { label: 'Projectile Range', value: '8.8m' },
            { label: 'Projectile Radius', value: '0.8m' }
          ]
        },
        3: {
          name: 'Glorious Charge',
          image: 'https://image2url.com/images/1764828990312-f2123da6-223f-4424-beb7-3396a1ee324f.webp',
          description: 'Silence enemies in front of you for 1s, then dash forward and deal Physical Damage.\n\n• Pierces through and damages minions but stops on first god hit',
          cooldown: '15s',
          cost: '60',
          attributes: [
            { label: 'Damage', value: '80 | 135 | 190 | 245 | 300' },
            { label: 'Damage Scaling', value: '60% Strength' },
            { label: 'Silence Duration', value: '1s' },
            { label: 'Range', value: '8.8m' },
            { label: 'Radius', value: '3.2m' }
          ]
        },
        4: {
          name: 'Dazzling Offensive',
          image: 'https://image2url.com/images/1764829001843-e5c3af15-46d4-4abb-8eee-3b168d9813e2.webp',
          description: 'Become CC Immune and then attack 3 times to deal Physical Damage to enemies in front of you each time.\n\n• Attacks deal more damage and have bonus effects on each subsequent successful hit\n• 2nd hit deals 1.2x damage and Slows by 30% for 2s\n• 3rd hit deals 1.4x damage and Stuns for 1.2s',
          cooldown: '110 | 105 | 100 | 95 | 90s',
          cost: '100',
          attributes: [
            { label: 'Damage', value: '100 | 150 | 200 | 250 | 300' },
            { label: 'Damage Scaling', value: '45% Strength + 50% Intelligence' },
            { label: 'Slow', value: '30%' },
            { label: 'Slow Duration', value: '2s' },
            { label: 'Stun Duration', value: '1.2s' },
            { label: 'Radius', value: '5.6m' },
            { label: 'Cone Angle', value: '110 degrees' }
          ]
        }
      }
    }
  ],
  recommendedBuilds: []
};