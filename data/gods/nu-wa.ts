import { God, DamageType } from '../../types';

export const NU_WA: God = {
  id: 'nu-wa',
  name: 'Nu Wa',
  title: 'Guardian of Heaven',
  pantheon: 'Chinese',
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
    { strength: 0, intelligence: 0, inhandPower: 42.18, baseAttackSpeed: 0.9672, attackSpeedPercent: 1.456, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 17.57, magicalProtection: 27.425, damageMitigation: 0, maxHealth: 591.375, healthRegen: 1.7, maxMana: 296, manaRegen: 2.34, cooldownRate: 0, movementSpeed: 365, xpRequirement: 0 },
    // Level 2
    { strength: 0, intelligence: 0, inhandPower: 44.46, baseAttackSpeed: 0.9672, attackSpeedPercent: 2.912, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 20.42, magicalProtection: 28.85, damageMitigation: 0, maxHealth: 683.99, healthRegen: 1.9, maxMana: 338, manaRegen: 2.6, cooldownRate: 0, movementSpeed: 365, xpRequirement: 308 },
    // Level 3
    { strength: 0, intelligence: 0, inhandPower: 46.74, baseAttackSpeed: 0.9672, attackSpeedPercent: 4.368, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 23.27, magicalProtection: 30.275, damageMitigation: 0, maxHealth: 776.61, healthRegen: 2.1, maxMana: 380, manaRegen: 2.86, cooldownRate: 0, movementSpeed: 365, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 49.02, baseAttackSpeed: 0.9672, attackSpeedPercent: 5.824, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 26.12, magicalProtection: 31.7, damageMitigation: 0, maxHealth: 869.23, healthRegen: 2.3, maxMana: 422, manaRegen: 3.12, cooldownRate: 0, movementSpeed: 365, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 51.3, baseAttackSpeed: 0.9672, attackSpeedPercent: 7.28, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 28.97, magicalProtection: 33.125, damageMitigation: 0, maxHealth: 961.85, healthRegen: 2.5, maxMana: 464, manaRegen: 3.38, cooldownRate: 0, movementSpeed: 365, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 53.58, baseAttackSpeed: 0.9672, attackSpeedPercent: 8.736, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 31.82, magicalProtection: 34.55, damageMitigation: 0, maxHealth: 1054.47, healthRegen: 2.7, maxMana: 506, manaRegen: 3.64, cooldownRate: 0, movementSpeed: 365, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 55.86, baseAttackSpeed: 0.9672, attackSpeedPercent: 10.192, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 34.67, magicalProtection: 35.975, damageMitigation: 0, maxHealth: 1147.09, healthRegen: 2.9, maxMana: 548, manaRegen: 3.9, cooldownRate: 0, movementSpeed: 365, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 58.14, baseAttackSpeed: 0.9672, attackSpeedPercent: 11.648, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 37.52, magicalProtection: 37.4, damageMitigation: 0, maxHealth: 1239.71, healthRegen: 3.1, maxMana: 590, manaRegen: 4.16, cooldownRate: 0, movementSpeed: 365, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 60.42, baseAttackSpeed: 0.9672, attackSpeedPercent: 13.104, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 40.37, magicalProtection: 38.825, damageMitigation: 0, maxHealth: 1332.33, healthRegen: 3.3, maxMana: 632, manaRegen: 4.42, cooldownRate: 0, movementSpeed: 365, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 62.7, baseAttackSpeed: 0.9672, attackSpeedPercent: 14.56, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 43.22, magicalProtection: 40.25, damageMitigation: 0, maxHealth: 1424.95, healthRegen: 3.5, maxMana: 674, manaRegen: 4.68, cooldownRate: 0, movementSpeed: 365, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 64.98, baseAttackSpeed: 0.9672, attackSpeedPercent: 16.016, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 46.07, magicalProtection: 41.675, damageMitigation: 0, maxHealth: 1517.57, healthRegen: 3.7, maxMana: 716, manaRegen: 4.94, cooldownRate: 0, movementSpeed: 365, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 67.26, baseAttackSpeed: 0.9672, attackSpeedPercent: 17.472, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 48.92, magicalProtection: 43.1, damageMitigation: 0, maxHealth: 1610.19, healthRegen: 3.9, maxMana: 758, manaRegen: 5.2, cooldownRate: 0, movementSpeed: 365, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 69.54, baseAttackSpeed: 0.9672, attackSpeedPercent: 18.928, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 51.77, magicalProtection: 44.525, damageMitigation: 0, maxHealth: 1702.81, healthRegen: 4.1, maxMana: 800, manaRegen: 5.46, cooldownRate: 0, movementSpeed: 365, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 71.82, baseAttackSpeed: 0.9672, attackSpeedPercent: 20.384, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 54.62, magicalProtection: 45.95, damageMitigation: 0, maxHealth: 1795.43, healthRegen: 4.3, maxMana: 842, manaRegen: 5.72, cooldownRate: 0, movementSpeed: 365, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 74.1, baseAttackSpeed: 0.9672, attackSpeedPercent: 21.84, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 57.47, magicalProtection: 47.375, damageMitigation: 0, maxHealth: 1888.05, healthRegen: 4.5, maxMana: 884, manaRegen: 5.98, cooldownRate: 0, movementSpeed: 365, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 76.38, baseAttackSpeed: 0.9672, attackSpeedPercent: 23.296, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 60.32, magicalProtection: 48.8, damageMitigation: 0, maxHealth: 1980.67, healthRegen: 4.7, maxMana: 926, manaRegen: 6.24, cooldownRate: 0, movementSpeed: 365, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 78.66, baseAttackSpeed: 0.9672, attackSpeedPercent: 24.752, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 63.17, magicalProtection: 50.225, damageMitigation: 0, maxHealth: 2073.29, healthRegen: 4.9, maxMana: 968, manaRegen: 6.5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 80.94, baseAttackSpeed: 0.9672, attackSpeedPercent: 26.208, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 66.02, magicalProtection: 51.65, damageMitigation: 0, maxHealth: 2165.91, healthRegen: 5.1, maxMana: 1010, manaRegen: 6.76, cooldownRate: 0, movementSpeed: 365, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 83.22, baseAttackSpeed: 0.9672, attackSpeedPercent: 27.664, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 68.87, magicalProtection: 53.075, damageMitigation: 0, maxHealth: 2258.53, healthRegen: 5.3, maxMana: 1052, manaRegen: 7.02, cooldownRate: 0, movementSpeed: 365, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 85.5, baseAttackSpeed: 0.9672, attackSpeedPercent: 29.12, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 71.72, magicalProtection: 54.5, damageMitigation: 0, maxHealth: 2351.25, healthRegen: 5.5, maxMana: 1094, manaRegen: 7.28, cooldownRate: 0, movementSpeed: 365, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'Nu Wa Basic Attack',
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
    name: 'Strength of Wood',
    image: '',
    description: 'Every 12s your next Basic Attack will Root all targets hit. Damaging an enemy with a Basic Attack reduces this cooldown by 1s.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Root Duration', value: '1s' }
    ]
  },
  abilities: {
    1: {
      name: 'Mysterious Fog',
      image: '',
      description: 'Send a dense fog slowly forward that deals Magical Damage when it touches an enemy. Enemies that remain in the fog take additional damage every second. You and Allied Gods are Stealthed when inside the fog.\n\n• Gain Strength of Water, which gives you Movement Speed. Allied gods that enter the fog gain Strength of Water.\n\nThe fog moves a short distance before stopping, lingering in place for the remaining duration.',
      cooldown: '12s',
      cost: '60 | 65 | 70 | 75 | 80',
      attributes: [
        { label: 'Damage', value: '50 | 75 | 100 | 125 | 150' },
        { label: 'Damage Scaling', value: '50% Intelligence' },
        { label: 'Damage Per Tick', value: '10 | 20 | 30 | 40 | 50' },
        { label: 'Tick Damage Scaling', value: '15% Intelligence' },
        { label: 'Movement Speed', value: '10%' },
        { label: 'Movement Speed Duration', value: '4s' },
        { label: 'Range', value: '25m' },
        { label: 'Radius', value: '3.2m' }
      ]
    },
    2: {
      name: 'Clay Soldiers',
      image: '',
      description: 'Summon Clay Soldiers to attack the chosen target. Clay Soldiers will dash at enemies within 4.8m, dealing Magical Damage, then begin to basic attack. Clay Soldiers last for 10s.\n\n• Gain Strength of Earth, which gives you Penetration.\n\nIf you have not chosen a target, Clay Soldiers will attack the nearest enemy or an enemy god that damages Nu Wa.',
      cooldown: '16s',
      cost: '60 | 65 | 70 | 75 | 80',
      attributes: [
        { label: 'Dash Damage', value: '10 | 15 | 20 | 25 | 30' },
        { label: 'Dash Damage Scaling', value: '7.5% Intelligence' },
        { label: 'Basic Attack Damage', value: '20 | 30 | 40 | 50 | 60' },
        { label: 'Number Conjured', value: '2 | 2 | 2 | 2 | 3' },
        { label: 'Flat Penetration', value: '6 | 9 | 12 | 15 | 18' },
        { label: 'Soldier Health', value: '100 + 15% Max Health' },
        { label: 'Buff Duration', value: '5s' },
        { label: 'Range', value: '6.4m' },
        { label: 'Radius', value: '1.6m' }
      ]
    },
    3: {
      name: 'Shining Metal',
      image: '',
      description: 'Launch a projectile dealing Magical Damage to enemies it passes through.\n\n• If the projectile hits a Clay Soldier it explodes, dealing damage in an area and Stunning enemies and towers.\n• Gain Strength of Metal, causing your Basic Attacks to deal Magical Damage in an area when you hit an enemy.\n\nProjectile passes through and damages all enemies, and passes through walls.',
      cooldown: '10s',
      cost: '50 | 55 | 60 | 65 | 70',
      attributes: [
        { label: 'Damage', value: '90 | 135 | 180 | 225 | 270' },
        { label: 'Damage Scaling', value: '75% Intelligence' },
        { label: 'Explosion Damage', value: '30 | 60 | 90 | 120 | 150' },
        { label: 'Explosion Damage Scaling', value: '40% Intelligence' },
        { label: 'Stun Duration', value: '0.8 | 0.85 | 0.9 | 0.95 | 1s' },
        { label: 'AoE Basic Attack Scaling', value: '75% Strength + 15% Intelligence' },
        { label: 'Range', value: '17.6m' },
        { label: 'Radius', value: '0.56m' }
      ]
    },
    4: {
      name: 'Fire Shards',
      image: '',
      description: 'Become CC Immune and ascend into the air. You and your team gain visibility on all enemy gods. Summon Fire Shards that deal Magical Damage to each enemy god.\n\n• Gain Strength of Fire, which causes your Basic Attacks to go farther and faster.\n\nWhile beginning to ascend, you cannot be Impeded. When buffed by Strength of Fire, Nu Wa\'s Basic Attack range is increased to 12.8m. Item Effects from this ability deal 50% damage.',
      cooldown: '120s',
      cost: '100',
      attributes: [
        { label: 'Damage', value: '100 | 175 | 250 | 325 | 400' },
        { label: 'Damage Scaling', value: '30% Intelligence' }
      ]
    }
  },
  aspects: [
    {
      id: 'shining-mist',
      name: 'Aspect of Shining Mist',
      image: '',
      description: 'Mysterious Fog now travels a short distance before stopping but allows you to fire Basic Attacks within it and remain Stealthed. Shining Metal has reduced Scaling while Fire Shards now scales with Basic Attack Power, can Critically Strike and procs Basic Attack Item Effects. Additionally Strength of Fire also provides Attack Speed.',
      basicAttack: {
        name: 'Nu Wa Basic Attack',
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
        name: 'Strength of Wood',
        image: '',
        description: 'Every 12s your next Basic Attack will Root all targets hit. Damaging an enemy with a Basic Attack reduces this cooldown by 1s.',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Root Duration', value: '1s' }
        ]
      },
      abilities: {
        1: {
          name: 'Mysterious Fog',
          image: '',
          description: 'Send a dense fog slowly forward that deals Magical Damage when it touches an enemy. Enemies that remain in the fog take additional damage every second. You and Allied Gods are Stealthed when inside the fog.\n\n• Gain Strength of Water, which gives you Movement Speed. Allied gods that enter the fog gain Strength of Water.\n• YOU MAY BASIC ATTACK WHILE WITHIN THE FOG AND REMAIN STEALTHED.\n\nThe fog moves a short distance before stopping, lingering in place for the remaining duration.',
          cooldown: '12s',
          cost: '60 | 65 | 70 | 75 | 80',
          attributes: [
            { label: 'Damage', value: '50 | 75 | 100 | 125 | 150' },
            { label: 'Damage Scaling', value: '50% Intelligence' },
            { label: 'Damage Per Tick', value: '10 | 20 | 30 | 40 | 50' },
            { label: 'Tick Damage Scaling', value: '15% Intelligence' },
            { label: 'Movement Speed', value: '10%' },
            { label: 'Movement Speed Duration', value: '4s' },
            { label: 'Range', value: '25m' },
            { label: 'Radius', value: '3.2m' }
          ]
        },
        2: {
          name: 'Clay Soldiers',
          image: '',
          description: 'Summon Clay Soldiers to attack the chosen target. Clay Soldiers will dash at enemies within 4.8m, dealing Magical Damage, then begin to basic attack. Clay Soldiers last for 10s.\n\n• Gain Strength of Earth, which gives you Penetration.\n\nIf you have not chosen a target, Clay Soldiers will attack the nearest enemy or an enemy god that damages Nu Wa.',
          cooldown: '16s',
          cost: '60 | 65 | 70 | 75 | 80',
          attributes: [
            { label: 'Dash Damage', value: '10 | 15 | 20 | 25 | 30' },
            { label: 'Dash Damage Scaling', value: '7.5% Intelligence' },
            { label: 'Basic Attack Damage', value: '20 | 30 | 40 | 50 | 60' },
            { label: 'Number Conjured', value: '2 | 2 | 2 | 2 | 3' },
            { label: 'Flat Penetration', value: '6 | 9 | 12 | 15 | 18' },
            { label: 'Soldier Health', value: '100 + 15% Max Health' },
            { label: 'Buff Duration', value: '5s' },
            { label: 'Range', value: '6.4m' },
            { label: 'Radius', value: '1.6m' }
          ]
        },
        3: {
          name: 'Shining Metal',
          image: '',
          description: 'Launch a projectile dealing Magical Damage to enemies it passes through.\n\n• If the projectile hits a Clay Soldier it explodes, dealing damage in an area and Stunning enemies and towers.\n• Gain Strength of Metal, causing your Basic Attacks to deal Magical Damage in an area when you hit an enemy.\n• REDUCED SCALING COMPARED TO BASE KIT.\n\nProjectile passes through and damages all enemies, and passes through walls.',
          cooldown: '10s',
          cost: '50 | 55 | 60 | 65 | 70',
          attributes: [
            { label: 'Damage', value: '90 | 135 | 180 | 225 | 270' },
            { label: 'Damage Scaling', value: '40% Intelligence (Reduced from 75%)' },
            { label: 'Explosion Damage', value: '30 | 60 | 90 | 120 | 150' },
            { label: 'Explosion Damage Scaling', value: '20% Intelligence (Reduced from 40%)' },
            { label: 'Stun Duration', value: '0.8 | 0.85 | 0.9 | 0.95 | 1s' },
            { label: 'AoE Basic Attack Scaling', value: '75% Strength + 15% Intelligence' },
            { label: 'Range', value: '17.6m' },
            { label: 'Radius', value: '0.56m' }
          ]
        },
        4: {
          name: 'Fire Shards',
          image: '',
          description: 'Become CC Immune and ascend into the air. You and your team gain visibility on all enemy gods. Summon Fire Shards that deal Magical Damage to each enemy god.\n\n• Gain Strength of Fire, providing ATTACK SPEED and causes your Basic Attacks to go farther and faster.\n• THIS ABILITY CAN CRITICALLY STRIKE WITH 40% REDUCED CRITICAL STRIKE DAMAGE AND PROCS BASIC ATTACK ITEM EFFECTS INSTEAD OF ABILITY ITEM EFFECTS.\n\nWhile beginning to ascend, you cannot be Impeded. When buffed by Strength of Fire, Nu Wa\'s Basic Attack range is increased to 12.8m. Item Effects from this ability deal 50% damage.',
          cooldown: '120s',
          cost: '100',
          attributes: [
            { label: 'Damage', value: '100 | 175 | 250 | 325 | 400' },
            { label: 'Damage Scaling', value: '70% Inhand Power + 16% Intelligence (Changed from 30% Intelligence)' },
            { label: 'Attack Speed (Strength of Fire)', value: '40%' },
            { label: 'Critical Strike Damage Reduction', value: '40%' }
          ]
        }
      }
    }
  ],
  recommendedBuilds: []
};