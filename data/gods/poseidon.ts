import { God, DamageType } from '../../types';

export const POSEIDON: God = {
  id: 'poseidon',
  name: 'Poseidon',
  title: 'God of the Oceans',
  pantheon: 'Greek',
  role: 'Mage',
  lanes: ['Mid', 'Carry'],
  damageType: DamageType.Magical,
  image: '',
  videoGuideUrl: '',
  goodAgainst: [],
  badAgainst: [],
  levelingOrder: [],
  statsByLevel: [
    // Level 1
    { strength: 0, intelligence: 0, inhandPower: 42.18, baseAttackSpeed: 0.9672, attackSpeedPercent: 1.456, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 17.57, magicalProtection: 27.425, damageMitigation: 0, maxHealth: 591.375, healthRegen: 1.7, maxMana: 296, manaRegen: 2.34, cooldownRate: 0, movementSpeed: 365, xpRequirement: 0 },
    // Level 2
    { strength: 0, intelligence: 0, inhandPower: 44.46, baseAttackSpeed: 0.9672, attackSpeedPercent: 2.912, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 20.42, magicalProtection: 28.85, damageMitigation: 0, maxHealth: 683.88, healthRegen: 1.9, maxMana: 338, manaRegen: 2.6, cooldownRate: 0, movementSpeed: 365, xpRequirement: 308 },
    // Level 3
    { strength: 0, intelligence: 0, inhandPower: 46.74, baseAttackSpeed: 0.9672, attackSpeedPercent: 4.368, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 23.27, magicalProtection: 30.275, damageMitigation: 0, maxHealth: 776.39, healthRegen: 2.1, maxMana: 380, manaRegen: 2.86, cooldownRate: 0, movementSpeed: 365, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 49.02, baseAttackSpeed: 0.9672, attackSpeedPercent: 5.824, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 26.12, magicalProtection: 31.7, damageMitigation: 0, maxHealth: 868.9, healthRegen: 2.3, maxMana: 422, manaRegen: 3.12, cooldownRate: 0, movementSpeed: 365, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 51.3, baseAttackSpeed: 0.9672, attackSpeedPercent: 7.28, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 28.97, magicalProtection: 33.125, damageMitigation: 0, maxHealth: 961.41, healthRegen: 2.5, maxMana: 464, manaRegen: 3.38, cooldownRate: 0, movementSpeed: 365, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 53.58, baseAttackSpeed: 0.9672, attackSpeedPercent: 8.736, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 31.82, magicalProtection: 34.55, damageMitigation: 0, maxHealth: 1053.92, healthRegen: 2.7, maxMana: 506, manaRegen: 3.64, cooldownRate: 0, movementSpeed: 365, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 55.86, baseAttackSpeed: 0.9672, attackSpeedPercent: 10.192, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 34.67, magicalProtection: 35.975, damageMitigation: 0, maxHealth: 1146.43, healthRegen: 2.9, maxMana: 548, manaRegen: 3.9, cooldownRate: 0, movementSpeed: 365, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 58.14, baseAttackSpeed: 0.9672, attackSpeedPercent: 11.648, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 37.52, magicalProtection: 37.4, damageMitigation: 0, maxHealth: 1238.94, healthRegen: 3.1, maxMana: 590, manaRegen: 4.16, cooldownRate: 0, movementSpeed: 365, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 60.42, baseAttackSpeed: 0.9672, attackSpeedPercent: 13.104, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 40.37, magicalProtection: 38.825, damageMitigation: 0, maxHealth: 1331.45, healthRegen: 3.3, maxMana: 632, manaRegen: 4.42, cooldownRate: 0, movementSpeed: 365, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 62.7, baseAttackSpeed: 0.9672, attackSpeedPercent: 14.56, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 43.22, magicalProtection: 40.25, damageMitigation: 0, maxHealth: 1423.96, healthRegen: 3.5, maxMana: 674, manaRegen: 4.68, cooldownRate: 0, movementSpeed: 365, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 64.98, baseAttackSpeed: 0.9672, attackSpeedPercent: 16.016, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 46.07, magicalProtection: 41.675, damageMitigation: 0, maxHealth: 1516.47, healthRegen: 3.7, maxMana: 716, manaRegen: 4.94, cooldownRate: 0, movementSpeed: 365, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 67.26, baseAttackSpeed: 0.9672, attackSpeedPercent: 17.472, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 48.92, magicalProtection: 43.1, damageMitigation: 0, maxHealth: 1608.98, healthRegen: 3.9, maxMana: 758, manaRegen: 5.2, cooldownRate: 0, movementSpeed: 365, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 69.54, baseAttackSpeed: 0.9672, attackSpeedPercent: 18.928, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 51.77, magicalProtection: 44.525, damageMitigation: 0, maxHealth: 1701.49, healthRegen: 4.1, maxMana: 800, manaRegen: 5.46, cooldownRate: 0, movementSpeed: 365, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 71.82, baseAttackSpeed: 0.9672, attackSpeedPercent: 20.384, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 54.62, magicalProtection: 45.95, damageMitigation: 0, maxHealth: 1794, healthRegen: 4.3, maxMana: 842, manaRegen: 5.72, cooldownRate: 0, movementSpeed: 365, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 74.1, baseAttackSpeed: 0.9672, attackSpeedPercent: 21.84, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 57.47, magicalProtection: 47.375, damageMitigation: 0, maxHealth: 1886.51, healthRegen: 4.5, maxMana: 884, manaRegen: 5.98, cooldownRate: 0, movementSpeed: 365, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 76.38, baseAttackSpeed: 0.9672, attackSpeedPercent: 23.296, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 60.32, magicalProtection: 48.8, damageMitigation: 0, maxHealth: 1979.02, healthRegen: 4.7, maxMana: 926, manaRegen: 6.24, cooldownRate: 0, movementSpeed: 365, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 78.66, baseAttackSpeed: 0.9672, attackSpeedPercent: 24.752, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 63.17, magicalProtection: 50.225, damageMitigation: 0, maxHealth: 2071.53, healthRegen: 4.9, maxMana: 968, manaRegen: 6.5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 80.94, baseAttackSpeed: 0.9672, attackSpeedPercent: 26.208, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 66.02, magicalProtection: 51.65, damageMitigation: 0, maxHealth: 2164.04, healthRegen: 5.1, maxMana: 1010, manaRegen: 6.76, cooldownRate: 0, movementSpeed: 365, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 83.22, baseAttackSpeed: 0.9672, attackSpeedPercent: 27.664, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 68.87, magicalProtection: 53.075, damageMitigation: 0, maxHealth: 2256.55, healthRegen: 5.3, maxMana: 1052, manaRegen: 7.02, cooldownRate: 0, movementSpeed: 365, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 85.5, baseAttackSpeed: 0.9672, attackSpeedPercent: 29.12, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 71.72, magicalProtection: 54.5, damageMitigation: 0, maxHealth: 2351.25, healthRegen: 5.5, maxMana: 1094, manaRegen: 7.28, cooldownRate: 0, movementSpeed: 365, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'Poseidon Basic Attack',
    image: '',
    description: 'Fire a projectile that deals Magical Damage to the first enemy hit.\n\nProjectile stops on first target hit, and does not pass through walls.\nSuccessfully hit basic attacks generate Tide.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
      { label: 'Range', value: '8.8m' },
      { label: 'Radius', value: '0.48m' }
    ]
  },
  passive: {
    name: 'Changing Tides',
    image: '',
    description: 'Successfully hit basic attacks to gain Tide. You have increased Movement Speed and your abilities do additional damage based on the amount of Tide you have. Using abilities decreases Tide.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Tide Per Basic Attack', value: '10%' },
      { label: 'Max Tide Movement Speed', value: '10%' },
      { label: 'Max Tide Ability Damage', value: '15%' }
    ]
  },
  abilities: {
    1: {
      name: 'Tidal Surge',
      image: '',
      description: 'Summon a wave, dealing Magical Damage and Knock Back enemies. Activate while Trident is active to send out two additional waves.\n\n• Subsequent wave hits deal 50% less damage\n• Tide Cost -15%\n• These waves pass through everything',
      cooldown: '10s',
      cost: '60 | 65 | 70 | 75 | 80',
      attributes: [
        { label: 'Damage', value: '100 | 140 | 180 | 220 | 260' },
        { label: 'Damage Scaling', value: '70% Intelligence' },
        { label: 'Range', value: '12.8m' },
        { label: 'Small Wave Radius', value: '0.28m' }
      ]
    },
    2: {
      name: 'Trident',
      image: '',
      description: 'Activate your Trident, gaining increased Attack Speed, Movement Speed, and Basic Attack Damage. While activated, Tidal Surge and Basic Attacks fire two additional shots.\n\n• The additional Basic Attack shots apply ability damage and trigger ability on-hit effects\n• All Basic Attack shots increase Tide on successful hit\n• This ability does not cost Tide',
      cooldown: '15s',
      cost: '55 | 60 | 65 | 70 | 75',
      attributes: [
        { label: 'Damage', value: '20 | 30 | 40 | 50 | 60' },
        { label: 'Damage Scaling', value: '25% Intelligence' },
        { label: 'Movement Speed', value: '10 | 12.5 | 15 | 17.5 | 20%' },
        { label: 'Attack Speed', value: '10 | 12.5 | 15 | 17.5 | 20%' },
        { label: 'Basic Attack Damage', value: '25' },
        { label: 'Buff Duration', value: '6s' }
      ]
    },
    3: {
      name: 'Whirlpool',
      image: '',
      description: 'Summon a whirlpool, Crippling, Vortexing, and dealing Magical Damage repeatedly to enemies in an area.\n\n• Tide Cost -15%\n• This ability hits 6 times over 3 seconds',
      cooldown: '15 | 14 | 13 | 12 | 11s',
      cost: '60 | 65 | 70 | 75 | 80',
      attributes: [
        { label: 'Damage Per Tick', value: '15 | 25 | 35 | 45 | 55' },
        { label: 'Damage Scaling', value: '20% Intelligence' },
        { label: 'Range', value: '8.8m' },
        { label: 'Radius', value: '3.2m' }
      ]
    },
    4: {
      name: 'Release the Kraken!',
      image: '',
      description: 'Summon the Kraken, dealing Magical Damage and Slowing enemies in its area. Enemies in the center area when it spawns take increased Magical Damage and are Stunned and Knocked Up.\n\n• Tide Cost -20%',
      cooldown: '90s',
      cost: '60 | 65 | 70 | 75 | 80',
      attributes: [
        { label: 'Outer Ring Damage', value: '175 | 210 | 245 | 280 | 315' },
        { label: 'Outer Ring Scaling', value: '40% Intelligence' },
        { label: 'Inner Ring Damage', value: '350 | 420 | 490 | 560 | 630' },
        { label: 'Inner Ring Scaling', value: '100% Intelligence' },
        { label: 'Slow', value: '30%' },
        { label: 'Stun Duration', value: '1 | 1.2 | 1.4 | 1.6 | 1.8s' },
        { label: 'Range', value: '7.2m' },
        { label: 'Inner Radius', value: '2.4m' },
        { label: 'Outer Radius', value: '4.8m' }
      ]
    }
  },
  aspects: [
    {
      id: 'trident',
      name: 'Aspect of the Trident',
      image: '',
      description: 'Poseidon\'s basic attacks always fire side waves. Trident no longer affects Tidal Surge but can be activated to focus the side waves, causing them to pierce enemies, and both abilities deal extra basic attack damage.',
      basicAttack: {
        name: 'Poseidon Basic Attack',
        image: '',
        description: 'Fire a main projectile that deals Magical Damage to the first enemy hit. Two side projectiles also fire out that deal Magical Damage.\n\nProjectile stops on first target hit, and does not pass through walls.\nSuccessfully hit basic attacks generate Tide.',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
          { label: 'Bonus Damage (Side Projectiles)', value: '10' },
          { label: 'Basic Attack Damage Scaling (Side)', value: '5%' },
          { label: 'Range', value: '8.8m' },
          { label: 'Radius', value: '0.48m' }
        ]
      },
      passive: {
        name: 'Changing Tides',
        image: '',
        description: 'Successfully hit basic attacks to gain Tide. You have increased Movement Speed and your abilities do additional damage based on the amount of Tide you have. Using abilities decreases Tide.',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Tide Per Basic Attack', value: '10%' },
          { label: 'Max Tide Movement Speed', value: '10%' },
          { label: 'Max Tide Ability Damage', value: '15%' }
        ]
      },
      abilities: {
        1: {
          name: 'Tidal Surge',
          image: '',
          description: 'Summon a wave, dealing Magical Damage and Knock Back enemies.\n\n• Tide Cost -15%\n• These waves pass through everything\n• NO LONGER FIRES ADDITIONAL WAVES WITH TRIDENT',
          cooldown: '10s',
          cost: '60 | 65 | 70 | 75 | 80',
          attributes: [
            { label: 'Damage', value: '100 | 140 | 180 | 220 | 260' },
            { label: 'Damage Scaling', value: '70% Intelligence' },
            { label: 'Basic Attack Damage Scaling', value: '50%' },
            { label: 'Range', value: '12.8m' },
            { label: 'Small Wave Radius', value: '0.28m' }
          ]
        },
        2: {
          name: 'Trident',
          image: '',
          description: 'Activate your Trident, gaining increased Attack Speed, Movement Speed, and Basic Attack Damage. While activated, your basic attack side projectiles focus in and deal bonus damage.\n\n• The additional Basic Attack shots pass through all enemies, apply basic attack damage and do not trigger on-hit effects\n• This ability does not cost Tide\n• NO LONGER AFFECTS TIDAL SURGE',
          cooldown: '15s',
          cost: '55 | 60 | 65 | 70 | 75',
          attributes: [
            { label: 'Damage', value: '20 | 30 | 40 | 50 | 60' },
            { label: 'Damage Scaling', value: '25% Intelligence' },
            { label: 'Basic Attack Damage Scaling', value: '10%' },
            { label: 'Movement Speed', value: '10 | 12.5 | 15 | 17.5 | 20%' },
            { label: 'Attack Speed', value: '10 | 12.5 | 15 | 17.5 | 20%' },
            { label: 'Basic Attack Damage', value: '25' },
            { label: 'Buff Duration', value: '4 | 4.5 | 5 | 5.5 | 6s' }
          ]
        },
        3: {
          name: 'Whirlpool',
          image: '',
          description: 'Summon a whirlpool, Crippling, Vortexing, and dealing Magical Damage repeatedly to enemies in an area.\n\n• Tide Cost -15%\n• This ability hits 6 times over 3 seconds',
          cooldown: '15 | 14 | 13 | 12 | 11s',
          cost: '60 | 65 | 70 | 75 | 80',
          attributes: [
            { label: 'Damage Per Tick', value: '15 | 25 | 35 | 45 | 55' },
            { label: 'Damage Scaling', value: '20% Intelligence' },
            { label: 'Range', value: '8.8m' },
            { label: 'Radius', value: '3.2m' }
          ]
        },
        4: {
          name: 'Release the Kraken!',
          image: '',
          description: 'Summon the Kraken, dealing Magical Damage and Slowing enemies in its area. Enemies in the center area when it spawns take increased Magical Damage and are Stunned and Knocked Up.\n\n• Tide Cost -20%',
          cooldown: '90s',
          cost: '60 | 65 | 70 | 75 | 80',
          attributes: [
            { label: 'Outer Ring Damage', value: '175 | 210 | 245 | 280 | 315' },
            { label: 'Outer Ring Scaling', value: '40% Intelligence' },
            { label: 'Inner Ring Damage', value: '350 | 420 | 490 | 560 | 630' },
            { label: 'Inner Ring Scaling', value: '100% Intelligence' },
            { label: 'Slow', value: '30%' },
            { label: 'Stun Duration', value: '1 | 1.2 | 1.4 | 1.6 | 1.8s' },
            { label: 'Range', value: '7.2m' },
            { label: 'Inner Radius', value: '2.4m' },
            { label: 'Outer Radius', value: '4.8m' }
          ]
        }
      }
    }
  ],
  recommendedBuilds: []
};