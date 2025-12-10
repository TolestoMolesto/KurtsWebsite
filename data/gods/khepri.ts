import { God, DamageType } from '../../types';

export const KHEPRI: God = {
  id: 'khepri',
  name: 'Khepri',
  title: 'The Dawn Bringer',
  pantheon: 'Egyptian',
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
    { strength: 0, intelligence: 0, inhandPower: 42.18, baseAttackSpeed: 0.93, attackSpeedPercent: 1.33, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 20.52, magicalProtection: 29.7, damageMitigation: 0, maxHealth: 672.3, healthRegen: 1.836, maxMana: 296, manaRegen: 2.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 0 },
    // Level 2
    { strength: 0, intelligence: 0, inhandPower: 44.46, baseAttackSpeed: 0.93, attackSpeedPercent: 2.66, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 23.76, magicalProtection: 31.32, damageMitigation: 0, maxHealth: 777.6, healthRegen: 2.052, maxMana: 338, manaRegen: 2.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 308 },
    // Level 3
    { strength: 0, intelligence: 0, inhandPower: 46.74, baseAttackSpeed: 0.93, attackSpeedPercent: 3.99, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 27, magicalProtection: 32.94, damageMitigation: 0, maxHealth: 882.9, healthRegen: 2.268, maxMana: 380, manaRegen: 2.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 49.02, baseAttackSpeed: 0.93, attackSpeedPercent: 5.32, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 30.24, magicalProtection: 34.56, damageMitigation: 0, maxHealth: 988.2, healthRegen: 2.484, maxMana: 422, manaRegen: 3, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 51.3, baseAttackSpeed: 0.93, attackSpeedPercent: 6.65, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 33.48, magicalProtection: 36.18, damageMitigation: 0, maxHealth: 1093.5, healthRegen: 2.7, maxMana: 464, manaRegen: 3.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 53.58, baseAttackSpeed: 0.93, attackSpeedPercent: 7.98, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 36.72, magicalProtection: 37.8, damageMitigation: 0, maxHealth: 1198.8, healthRegen: 2.916, maxMana: 506, manaRegen: 3.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 55.86, baseAttackSpeed: 0.93, attackSpeedPercent: 9.31, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 39.96, magicalProtection: 39.42, damageMitigation: 0, maxHealth: 1304.1, healthRegen: 3.132, maxMana: 548, manaRegen: 3.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 58.14, baseAttackSpeed: 0.93, attackSpeedPercent: 10.64, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 43.2, magicalProtection: 41.04, damageMitigation: 0, maxHealth: 1409.4, healthRegen: 3.348, maxMana: 590, manaRegen: 4, cooldownRate: 0, movementSpeed: 375, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 60.42, baseAttackSpeed: 0.93, attackSpeedPercent: 11.97, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 46.44, magicalProtection: 42.66, damageMitigation: 0, maxHealth: 1514.7, healthRegen: 3.564, maxMana: 632, manaRegen: 4.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 62.7, baseAttackSpeed: 0.93, attackSpeedPercent: 13.3, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 49.68, magicalProtection: 44.28, damageMitigation: 0, maxHealth: 1620, healthRegen: 3.78, maxMana: 674, manaRegen: 4.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 64.98, baseAttackSpeed: 0.93, attackSpeedPercent: 14.63, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 52.92, magicalProtection: 45.9, damageMitigation: 0, maxHealth: 1725.3, healthRegen: 3.996, maxMana: 716, manaRegen: 4.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 67.26, baseAttackSpeed: 0.93, attackSpeedPercent: 15.96, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 56.16, magicalProtection: 47.52, damageMitigation: 0, maxHealth: 1830.6, healthRegen: 4.212, maxMana: 758, manaRegen: 5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 69.54, baseAttackSpeed: 0.93, attackSpeedPercent: 17.29, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 59.4, magicalProtection: 49.14, damageMitigation: 0, maxHealth: 1935.9, healthRegen: 4.428, maxMana: 800, manaRegen: 5.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 71.82, baseAttackSpeed: 0.93, attackSpeedPercent: 18.62, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 62.64, magicalProtection: 50.76, damageMitigation: 0, maxHealth: 2041.2, healthRegen: 4.644, maxMana: 842, manaRegen: 5.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 74.1, baseAttackSpeed: 0.93, attackSpeedPercent: 19.95, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 65.88, magicalProtection: 52.38, damageMitigation: 0, maxHealth: 2146.5, healthRegen: 4.86, maxMana: 884, manaRegen: 5.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 76.38, baseAttackSpeed: 0.93, attackSpeedPercent: 21.28, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 69.12, magicalProtection: 54, damageMitigation: 0, maxHealth: 2251.8, healthRegen: 5.076, maxMana: 926, manaRegen: 6, cooldownRate: 0, movementSpeed: 375, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 78.66, baseAttackSpeed: 0.93, attackSpeedPercent: 22.61, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 72.36, magicalProtection: 55.62, damageMitigation: 0, maxHealth: 2357.1, healthRegen: 5.292, maxMana: 968, manaRegen: 6.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 80.94, baseAttackSpeed: 0.93, attackSpeedPercent: 23.94, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 75.6, magicalProtection: 57.24, damageMitigation: 0, maxHealth: 2462.4, healthRegen: 5.508, maxMana: 1010, manaRegen: 6.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 83.22, baseAttackSpeed: 0.93, attackSpeedPercent: 25.27, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 78.84, magicalProtection: 58.86, damageMitigation: 0, maxHealth: 2567.7, healthRegen: 5.724, maxMana: 1052, manaRegen: 6.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 85.5, baseAttackSpeed: 0.93, attackSpeedPercent: 26.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 82.08, magicalProtection: 60.48, damageMitigation: 0, maxHealth: 2673, healthRegen: 5.94, maxMana: 1094, manaRegen: 7, cooldownRate: 0, movementSpeed: 375, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'Khepri Basic Attack',
    image: '',
    description: 'Deal Magical Damage to an enemy in front of you.\n\nIf multiple enemies are in the area, the enemy closest to the center of the area will be hit.\n\nHas a 3 hit chain. Attacks in order of 1, 0.5, 1.5x damage and swing time.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
      { label: 'Range', value: '1.92m' },
      { label: 'Cone Angle', value: '120 degrees' }
    ]
  },
  passive: {
    name: 'Fortitude',
    image: '',
    description: 'Every 5s apply a 2% Health Shield to yourself and nearby allies.\n\n• The interval is increased to 10s if you have taken or dealt damage in the last 5s',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Shield Duration', value: '15s' }
    ]
  },
  abilities: {
    1: {
      name: 'Abduct',
      image: '',
      description: 'Lunge forward, grabbing and pulling backwards the first enemy god hit.\n\n• This deals Magical Damage\n• Gain Physical Protection and Magical Protection while pulling a god and for 3s afterwards\n• The lunge damages enemies you pass through\n\nEnemies are Silenced for the duration of the Grab.',
      cooldown: '14s',
      cost: '60',
      attributes: [
        { label: 'Damage', value: '80 | 130 | 180 | 230 | 280' },
        { label: 'Damage Scaling', value: '40% Intelligence' },
        { label: 'Silence and Grab Duration', value: '1.5 | 1.6 | 1.7 | 1.8 | 1.9s' },
        { label: 'Protections', value: '10 | 20 | 30 | 40 | 50' },
        { label: 'Range', value: '6.4m' }
      ]
    },
    2: {
      name: 'Rising Dawn',
      image: '',
      description: 'Roll the sun forward, setting ablaze all enemies it touches.\n\n• Affected enemies repeatedly take Magical Damage over time\n• Affected enemies have reduced Physical Protection\n• Allies hit gain Damage Mitigation\n• After reaching max distance the sun sets, reapplying all effects in a larger area.\n\nDamage hits 11 times, hitting every 0.3s.',
      cooldown: '12s',
      cost: '50 | 60 | 70 | 80 | 90',
      attributes: [
        { label: 'Damage Per Tick', value: '10 | 14 | 18 | 22 | 26' },
        { label: 'Damage Scaling Per Tick', value: '5% Intelligence' },
        { label: 'Physical Protection Reduced', value: '5 | 10 | 15 | 20 | 25%' },
        { label: 'Damage Mitigation', value: '10 | 15 | 20 | 25 | 30%' },
        { label: 'Buff and Debuff Duration', value: '3s' },
        { label: 'Range', value: '11.2m' },
        { label: 'Projectile Radius', value: '1.6m' },
        { label: 'Explode Radius', value: '3.7m' }
      ]
    },
    3: {
      name: 'Solar Flare',
      image: '',
      description: 'Call down the sun\'s ire, dealing Magical Damage and Rooting enemies in an area.',
      cooldown: '13 | 12.5 | 12 | 11.5 | 11s',
      cost: '60 | 65 | 70 | 75 | 80',
      attributes: [
        { label: 'Damage', value: '60 | 115 | 170 | 225 | 280' },
        { label: 'Damage Scaling', value: '30% Intelligence' },
        { label: 'Root Duration', value: '1.25 | 1.3 | 1.35 | 1.4 | 1.45s' },
        { label: 'Range', value: '8.8m' },
        { label: 'Radius', value: '2.4m' }
      ]
    },
    4: {
      name: 'Scarab\'s Blessing',
      image: '',
      description: 'Bless an allied god for 5s. If the blessed ally would die while blessed, they are instead revived at Khepri\'s location.\n\n• Blessed allies are cleansed of crowd control effects\n• Blessed allies receive Strength, Intelligence, and Movement Speed\n• Blessed allies are Slow Immune\n• Successfully Revive an Ally to gain a permanently stacking buff of 2 Protections\n\nExecuted allies do not revive.',
      cooldown: '110s',
      cost: '80 | 90 | 100 | 110 | 120',
      attributes: [
        { label: 'Movement Speed', value: '20 | 22.5 | 25 | 27.5 | 30%' },
        { label: 'Strength', value: '10 | 20 | 30 | 40 | 50' },
        { label: 'Intelligence', value: '10 | 20 | 30 | 40 | 50' },
        { label: 'Buff Duration', value: '5s' },
        { label: 'Revived Health', value: '20 | 25 | 30 | 35 | 40%' },
        { label: 'Range', value: '8.8m' },
        { label: 'Radius', value: '2.4m' }
      ]
    }
  },
  aspects: [
    {
      id: 'laceration',
      name: 'Aspect of Laceration',
      image: '',
      description: 'Abduct no longer Pulls enemy gods but Roots them in place with you, dealing constant Basic Attack Damage for the duration. No longer gain Protections after Abduct ends.',
      basicAttack: {
        name: 'Khepri Basic Attack',
        image: '',
        description: 'Deal Magical Damage to an enemy in front of you.\n\nIf multiple enemies are in the area, the enemy closest to the center of the area will be hit.\n\nHas a 3 hit chain. Attacks in order of 1, 0.5, 1.5x damage and swing time.',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
          { label: 'Range', value: '1.92m' },
          { label: 'Cone Angle', value: '120 degrees' }
        ]
      },
      passive: {
        name: 'Fortitude',
        image: '',
        description: 'Every 5s apply a 2% Health Shield to yourself and nearby allies.\n\n• The interval is increased to 10s if you have taken or dealt damage in the last 5s',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Shield Duration', value: '15s' }
        ]
      },
      abilities: {
        1: {
          name: 'Abduct',
          image: '',
          description: 'Lunge forward, grabbing and Rooting the first enemy god hit.\n\n• The initial hit does Magical Damage and then rapid ticks of Bonus Basic Attack Damage\n• Gain Physical Protection and Magical Protection while pulling a god\n• The lunge damages enemies you pass through\n• NO LONGER PULLS ENEMY GODS - ROOTS THEM IN PLACE WITH YOU\n• NO LONGER GAIN PROTECTIONS AFTER ABDUCT ENDS\n\nEnemies are Silenced for the duration of the Grab.',
          cooldown: '14s',
          cost: '60',
          attributes: [
            { label: 'Damage', value: '80 | 130 | 180 | 230 | 280' },
            { label: 'Damage Scaling', value: '40% Intelligence' },
            { label: 'Bonus Damage Scaling', value: '25% Intelligence' },
            { label: 'Bonus Damage Scaling', value: '4% Max Health' },
            { label: 'Silence and Grab Duration', value: '1.5 | 1.6 | 1.7 | 1.8 | 1.9s' },
            { label: 'Protections', value: '10 | 20 | 30 | 40 | 50' },
            { label: 'Range', value: '6.4m' }
          ]
        },
        2: {
          name: 'Rising Dawn',
          image: '',
          description: 'Roll the sun forward, setting ablaze all enemies it touches.\n\n• Affected enemies repeatedly take Magical Damage over time\n• Affected enemies have reduced Physical Protection\n• Allies hit gain Damage Mitigation\n• After reaching max distance the sun sets, reapplying all effects in a larger area.\n\nDamage hits 11 times, hitting every 0.3s.',
          cooldown: '12s',
          cost: '50 | 60 | 70 | 80 | 90',
          attributes: [
            { label: 'Damage Per Tick', value: '10 | 14 | 18 | 22 | 26' },
            { label: 'Damage Scaling Per Tick', value: '5% Intelligence' },
            { label: 'Physical Protection Reduced', value: '5 | 10 | 15 | 20 | 25%' },
            { label: 'Damage Mitigation', value: '10 | 15 | 20 | 25 | 30%' },
            { label: 'Buff and Debuff Duration', value: '3s' },
            { label: 'Range', value: '11.2m' },
            { label: 'Projectile Radius', value: '1.6m' },
            { label: 'Explode Radius', value: '3.7m' }
          ]
        },
        3: {
          name: 'Solar Flare',
          image: '',
          description: 'Call down the sun\'s ire, dealing Magical Damage and Rooting enemies in an area.',
          cooldown: '13 | 12.5 | 12 | 11.5 | 11s',
          cost: '60 | 65 | 70 | 75 | 80',
          attributes: [
            { label: 'Damage', value: '60 | 115 | 170 | 225 | 280' },
            { label: 'Damage Scaling', value: '30% Intelligence' },
            { label: 'Root Duration', value: '1.25 | 1.3 | 1.35 | 1.4 | 1.45s' },
            { label: 'Range', value: '8.8m' },
            { label: 'Radius', value: '2.4m' }
          ]
        },
        4: {
          name: 'Scarab\'s Blessing',
          image: '',
          description: 'Bless an allied god for 5s. If the blessed ally would die while blessed, they are instead revived at Khepri\'s location.\n\n• Blessed allies are cleansed of crowd control effects\n• Blessed allies receive Strength, Intelligence, and Movement Speed\n• Blessed allies are Slow Immune\n• Successfully Revive an Ally to gain a permanently stacking buff of 2 Protections\n\nExecuted allies do not revive.',
          cooldown: '110s',
          cost: '80 | 90 | 100 | 110 | 120',
          attributes: [
            { label: 'Movement Speed', value: '20 | 22.5 | 25 | 27.5 | 30%' },
            { label: 'Strength', value: '10 | 20 | 30 | 40 | 50' },
            { label: 'Intelligence', value: '10 | 20 | 30 | 40 | 50' },
            { label: 'Buff Duration', value: '5s' },
            { label: 'Revived Health', value: '20 | 25 | 30 | 35 | 40%' },
            { label: 'Range', value: '8.8m' },
            { label: 'Radius', value: '2.4m' }
          ]
        }
      }
    }
  ],
  recommendedBuilds: []
};