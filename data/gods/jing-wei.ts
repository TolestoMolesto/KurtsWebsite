import { God, DamageType } from '../../types';

export const JING_WEI: God = {
  id: 'jing-wei',
  name: 'Jing Wei',
  title: 'The Oathkeeper',
  pantheon: 'Chinese',
  role: 'Hunter',
  lanes: ['Carry'],
  damageType: DamageType.Physical,
  image: '',
  videoGuideUrl: '',
  goodAgainst: [],
  badAgainst: [],
  levelingOrder: [],
  statsByLevel: [
    // Level 1
    { strength: 0, intelligence: 0, inhandPower: 47.952, baseAttackSpeed: 1.0, attackSpeedPercent: 1.512, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 18.05, magicalProtection: 26.125, damageMitigation: 0, maxHealth: 591.375, healthRegen: 1.7, maxMana: 296, manaRegen: 2.1375, cooldownRate: 0, movementSpeed: 365, xpRequirement: 0 },
    // Level 2
    { strength: 0, intelligence: 0, inhandPower: 50.544, baseAttackSpeed: 1.0, attackSpeedPercent: 3.024, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 20.9, magicalProtection: 27.55, damageMitigation: 0, maxHealth: 683.888, healthRegen: 1.9, maxMana: 338, manaRegen: 2.375, cooldownRate: 0, movementSpeed: 365, xpRequirement: 308 },
    // Level 3
    { strength: 0, intelligence: 0, inhandPower: 53.136, baseAttackSpeed: 1.0, attackSpeedPercent: 4.536, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 23.75, magicalProtection: 28.975, damageMitigation: 0, maxHealth: 776.401, healthRegen: 2.1, maxMana: 380, manaRegen: 2.6125, cooldownRate: 0, movementSpeed: 365, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 55.728, baseAttackSpeed: 1.0, attackSpeedPercent: 6.048, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 26.6, magicalProtection: 30.4, damageMitigation: 0, maxHealth: 868.914, healthRegen: 2.3, maxMana: 422, manaRegen: 2.85, cooldownRate: 0, movementSpeed: 365, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 58.32, baseAttackSpeed: 1.0, attackSpeedPercent: 7.56, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 29.45, magicalProtection: 31.825, damageMitigation: 0, maxHealth: 961.427, healthRegen: 2.5, maxMana: 464, manaRegen: 3.0875, cooldownRate: 0, movementSpeed: 365, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 60.912, baseAttackSpeed: 1.0, attackSpeedPercent: 9.072, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 32.3, magicalProtection: 33.25, damageMitigation: 0, maxHealth: 1053.94, healthRegen: 2.7, maxMana: 506, manaRegen: 3.325, cooldownRate: 0, movementSpeed: 365, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 63.504, baseAttackSpeed: 1.0, attackSpeedPercent: 10.584, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 35.15, magicalProtection: 34.675, damageMitigation: 0, maxHealth: 1146.453, healthRegen: 2.9, maxMana: 548, manaRegen: 3.5625, cooldownRate: 0, movementSpeed: 365, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 66.096, baseAttackSpeed: 1.0, attackSpeedPercent: 12.096, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 38, magicalProtection: 36.1, damageMitigation: 0, maxHealth: 1238.966, healthRegen: 3.1, maxMana: 590, manaRegen: 3.8, cooldownRate: 0, movementSpeed: 365, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 68.688, baseAttackSpeed: 1.0, attackSpeedPercent: 13.608, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 40.85, magicalProtection: 37.525, damageMitigation: 0, maxHealth: 1331.479, healthRegen: 3.3, maxMana: 632, manaRegen: 4.0375, cooldownRate: 0, movementSpeed: 365, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 71.28, baseAttackSpeed: 1.0, attackSpeedPercent: 15.12, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 43.7, magicalProtection: 38.95, damageMitigation: 0, maxHealth: 1423.992, healthRegen: 3.5, maxMana: 674, manaRegen: 4.275, cooldownRate: 0, movementSpeed: 365, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 73.872, baseAttackSpeed: 1.0, attackSpeedPercent: 16.632, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 46.55, magicalProtection: 40.375, damageMitigation: 0, maxHealth: 1516.505, healthRegen: 3.7, maxMana: 716, manaRegen: 4.5125, cooldownRate: 0, movementSpeed: 365, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 76.464, baseAttackSpeed: 1.0, attackSpeedPercent: 18.144, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 49.4, magicalProtection: 41.8, damageMitigation: 0, maxHealth: 1609.018, healthRegen: 3.9, maxMana: 758, manaRegen: 4.75, cooldownRate: 0, movementSpeed: 365, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 79.056, baseAttackSpeed: 1.0, attackSpeedPercent: 19.656, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 52.25, magicalProtection: 43.225, damageMitigation: 0, maxHealth: 1701.531, healthRegen: 4.1, maxMana: 800, manaRegen: 4.9875, cooldownRate: 0, movementSpeed: 365, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 81.648, baseAttackSpeed: 1.0, attackSpeedPercent: 21.168, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 55.1, magicalProtection: 44.65, damageMitigation: 0, maxHealth: 1794.044, healthRegen: 4.3, maxMana: 842, manaRegen: 5.225, cooldownRate: 0, movementSpeed: 365, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 84.24, baseAttackSpeed: 1.0, attackSpeedPercent: 22.68, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 57.95, magicalProtection: 46.075, damageMitigation: 0, maxHealth: 1886.557, healthRegen: 4.5, maxMana: 884, manaRegen: 5.4625, cooldownRate: 0, movementSpeed: 365, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 86.832, baseAttackSpeed: 1.0, attackSpeedPercent: 24.192, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 60.8, magicalProtection: 47.5, damageMitigation: 0, maxHealth: 1979.07, healthRegen: 4.7, maxMana: 926, manaRegen: 5.7, cooldownRate: 0, movementSpeed: 365, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 89.424, baseAttackSpeed: 1.0, attackSpeedPercent: 25.704, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 63.65, magicalProtection: 48.925, damageMitigation: 0, maxHealth: 2071.583, healthRegen: 4.9, maxMana: 968, manaRegen: 5.9375, cooldownRate: 0, movementSpeed: 365, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 92.016, baseAttackSpeed: 1.0, attackSpeedPercent: 27.216, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 66.5, magicalProtection: 50.35, damageMitigation: 0, maxHealth: 2164.096, healthRegen: 5.1, maxMana: 1010, manaRegen: 6.175, cooldownRate: 0, movementSpeed: 365, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 94.608, baseAttackSpeed: 1.0, attackSpeedPercent: 28.728, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 69.35, magicalProtection: 51.775, damageMitigation: 0, maxHealth: 2256.609, healthRegen: 5.3, maxMana: 1052, manaRegen: 6.4125, cooldownRate: 0, movementSpeed: 365, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 97.2, baseAttackSpeed: 1.0, attackSpeedPercent: 30.24, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 72.2, magicalProtection: 53.2, damageMitigation: 0, maxHealth: 2351.25, healthRegen: 5.5, maxMana: 1094, manaRegen: 6.65, cooldownRate: 0, movementSpeed: 365, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'Jing Wei Basic Attack',
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
    name: 'Rapid Reincarnation',
    image: '',
    description: 'When exiting the fountain, fly into the sky and soar over obstacles.\n\n• Select a landing location early or descend when the duration expires\n• This ability can be canceled before ascending\n• You will not ascend if firing basic attacks when leaving the fountain\n• Jing Wei is fully CC Immune during buildup, ascent, flight, and descent',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Flight Duration', value: '5s' }
    ]
  },
  abilities: {
    1: {
      name: 'Persistent Gust',
      image: '',
      description: 'Create a Gust of Wind that deals Physical Damage and Knocks Up enemy gods when deployed and yourself always.\n\n• The Gust area continually deals Physical Damage\n• Deals 60% of the Initial Damage and Knock Up to enemies who walk into it after the initial deploy\n• You gain increased Attack Speed while in the outer area of the Gust\n\nThe Attack Speed buff is constantly refreshed while in the outer area.',
      cooldown: '13s',
      cost: '40 | 50 | 60 | 70 | 80',
      attributes: [
        { label: 'Damage', value: '70 | 120 | 170 | 220 | 270' },
        { label: 'Damage Scaling', value: '85% Strength' },
        { label: 'Damage Per Tick', value: '15 | 20 | 25 | 30 | 35' },
        { label: 'Damage Scaling Per Tick', value: '5% Strength' },
        { label: 'Attack Speed', value: '20 | 25 | 30 | 35 | 40%' },
        { label: 'Buff Duration', value: '6s' },
        { label: 'Range', value: '8.8m' },
        { label: 'Radius', value: '1.6m' },
        { label: 'Outer Radius', value: '3.2m' }
      ]
    },
    2: {
      name: 'Explosive Bolts',
      image: '',
      description: 'Your next 3 basic attacks are wider and explode on the first enemy hit.\n\n• You gain increased Critical Strike Chance while this ability is active\n• This ability can gain multiple charges\n\nThis ability goes on cooldown immediately on use.',
      cooldown: '14s',
      cost: '50',
      attributes: [
        { label: 'Scaling', value: '102% | 104% | 106% | 108% | 110%' },
        { label: 'Crit Chance', value: '3 | 6 | 9 | 12 | 15%' },
        { label: 'Ability Charges', value: '1 | 1 | 2 | 2 | 3' },
        { label: 'Range', value: '8.8m' },
        { label: 'Radius', value: '0.96m' },
        { label: 'Explode Radius', value: '1.28m' }
      ]
    },
    3: {
      name: 'Agility',
      image: '',
      description: 'Dash forward and gain increased Strength.\n\n• This ability can be used while Displaced, and you will Dash further\n\nDash range is longer when used while Displaced.\nYou can turn while Dashing.\nUsing this ability grants an additional charge of Explosive Bolts.',
      cooldown: '16 | 16 | 15 | 15 | 14s',
      cost: '40 | 50 | 60 | 70 | 80',
      attributes: [
        { label: 'Strength', value: '10 | 15 | 20 | 25 | 30' },
        { label: 'Bonus Strength', value: '25 | 30 | 35 | 40 | 45' },
        { label: 'Movement Speed', value: '10%' },
        { label: 'Bonus Movement Speed', value: '20%' },
        { label: 'Dash Range', value: '5.6m' },
        { label: 'Bonus Range', value: '8.62m' }
      ]
    },
    4: {
      name: 'Air Strike',
      image: '',
      description: 'Dash forward and fly into the sky, dropping explosives and dealing Physical Damage to enemies beneath you.\n\n• Select a landing location, or wait to Dash backwards, dealing Physical Damage to enemies again before landing\n\nJing Wei is fully CC Immune during buildup, ascent, flight, and descent.',
      cooldown: '90s',
      cost: '100',
      attributes: [
        { label: 'Damage', value: '220 | 310 | 400 | 490 | 580' },
        { label: 'Damage Scaling', value: '115% Strength' },
        { label: 'Range', value: '11.2m' },
        { label: 'Radius', value: '2.4m' }
      ]
    }
  },
  aspects: [],
  recommendedBuilds: []
};