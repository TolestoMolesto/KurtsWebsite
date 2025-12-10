import { God, DamageType } from '../../types';

export const OSIRIS: God = {
  id: 'osiris',
  name: 'Osiris',
  title: 'Broken God of the Afterlife',
  pantheon: 'Egyptian',
  role: 'Warrior',
  lanes: ['Solo', 'Jungle'],
  damageType: DamageType.Physical,
  image: '',
  videoGuideUrl: '',
  goodAgainst: [],
  badAgainst: [],
  levelingOrder: [],
  statsByLevel: [
    // Level 1
    { strength: 0, intelligence: 0, inhandPower: 44, baseAttackSpeed: 1.0, attackSpeedPercent: 1.456, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 20.4, magicalProtection: 28.6, damageMitigation: 0, maxHealth: 647.4, healthRegen: 1.77, maxMana: 281, manaRegen: 2.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 0 },
    // Level 2
    { strength: 0, intelligence: 0, inhandPower: 47, baseAttackSpeed: 1.0, attackSpeedPercent: 2.912, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 23.5, magicalProtection: 30.2, damageMitigation: 0, maxHealth: 748.8, healthRegen: 1.98, maxMana: 321, manaRegen: 2.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 308 },
    // Level 3
    { strength: 0, intelligence: 0, inhandPower: 49, baseAttackSpeed: 1.0, attackSpeedPercent: 4.368, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 26.6, magicalProtection: 31.7, damageMitigation: 0, maxHealth: 850.2, healthRegen: 2.18, maxMana: 361, manaRegen: 2.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 52, baseAttackSpeed: 1.0, attackSpeedPercent: 5.824, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 29.8, magicalProtection: 33.3, damageMitigation: 0, maxHealth: 951.6, healthRegen: 2.39, maxMana: 401, manaRegen: 3.0, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 54, baseAttackSpeed: 1.0, attackSpeedPercent: 7.28, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 32.9, magicalProtection: 34.8, damageMitigation: 0, maxHealth: 1053, healthRegen: 2.6, maxMana: 441, manaRegen: 3.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 56, baseAttackSpeed: 1.0, attackSpeedPercent: 8.736, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 36, magicalProtection: 36.4, damageMitigation: 0, maxHealth: 1154.4, healthRegen: 2.81, maxMana: 481, manaRegen: 3.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 59, baseAttackSpeed: 1.0, attackSpeedPercent: 10.192, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 39.1, magicalProtection: 38, damageMitigation: 0, maxHealth: 1255.8, healthRegen: 3.02, maxMana: 521, manaRegen: 3.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 61, baseAttackSpeed: 1.0, attackSpeedPercent: 11.648, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 42.2, magicalProtection: 39.5, damageMitigation: 0, maxHealth: 1357.2, healthRegen: 3.22, maxMana: 561, manaRegen: 4.0, cooldownRate: 0, movementSpeed: 375, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 64, baseAttackSpeed: 1.0, attackSpeedPercent: 13.104, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 45.4, magicalProtection: 41.1, damageMitigation: 0, maxHealth: 1458.6, healthRegen: 3.43, maxMana: 600, manaRegen: 4.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 66, baseAttackSpeed: 1.0, attackSpeedPercent: 14.56, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 48.5, magicalProtection: 42.6, damageMitigation: 0, maxHealth: 1560, healthRegen: 3.64, maxMana: 640, manaRegen: 4.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 68, baseAttackSpeed: 1.0, attackSpeedPercent: 16.016, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 51.6, magicalProtection: 44.2, damageMitigation: 0, maxHealth: 1661.4, healthRegen: 3.85, maxMana: 680, manaRegen: 4.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 71, baseAttackSpeed: 1.0, attackSpeedPercent: 17.472, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 54.7, magicalProtection: 45.8, damageMitigation: 0, maxHealth: 1762.8, healthRegen: 4.06, maxMana: 720, manaRegen: 5.0, cooldownRate: 0, movementSpeed: 375, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 73, baseAttackSpeed: 1.0, attackSpeedPercent: 18.928, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 57.8, magicalProtection: 47.3, damageMitigation: 0, maxHealth: 1864.2, healthRegen: 4.26, maxMana: 760, manaRegen: 5.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 76, baseAttackSpeed: 1.0, attackSpeedPercent: 20.384, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 61, magicalProtection: 48.9, damageMitigation: 0, maxHealth: 1965.6, healthRegen: 4.47, maxMana: 800, manaRegen: 5.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 78, baseAttackSpeed: 1.0, attackSpeedPercent: 21.84, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 64.1, magicalProtection: 50.4, damageMitigation: 0, maxHealth: 2067, healthRegen: 4.68, maxMana: 840, manaRegen: 5.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 80, baseAttackSpeed: 1.0, attackSpeedPercent: 23.296, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 67.2, magicalProtection: 52, damageMitigation: 0, maxHealth: 2168.4, healthRegen: 4.89, maxMana: 880, manaRegen: 6.0, cooldownRate: 0, movementSpeed: 375, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 83, baseAttackSpeed: 1.0, attackSpeedPercent: 24.752, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 70.3, magicalProtection: 53.6, damageMitigation: 0, maxHealth: 2269.8, healthRegen: 5.1, maxMana: 920, manaRegen: 6.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 85, baseAttackSpeed: 1.0, attackSpeedPercent: 26.208, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 73.4, magicalProtection: 55.1, damageMitigation: 0, maxHealth: 2371.2, healthRegen: 5.3, maxMana: 960, manaRegen: 6.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 88, baseAttackSpeed: 1.0, attackSpeedPercent: 27.664, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 76.6, magicalProtection: 56.7, damageMitigation: 0, maxHealth: 2472.6, healthRegen: 5.51, maxMana: 999, manaRegen: 6.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 90, baseAttackSpeed: 1.0, attackSpeedPercent: 29.12, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 79.7, magicalProtection: 58.2, damageMitigation: 0, maxHealth: 2574, healthRegen: 5.72, maxMana: 1039, manaRegen: 7.0, cooldownRate: 0, movementSpeed: 375, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'Osiris Basic Attack',
    image: '',
    description: 'Deal Physical Damage to an enemy in front of you.\n\n4 Hit Chain. Attacks in order of 0.5, 1, 0.5, 1x damage swing time. Attacks 3 & 4 hit all enemies in range.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
    ]
  },
  passive: {
    name: 'Fragmented',
    image: '',
    description: 'Lose a Fragment of your body each time you use an ability, gaining +2% Damage Mitigation for each missing Fragment.\n\n• After losing 8 Fragments, become a spirit for 6 successful Basic Attacks: walk through enemies and enemy blockers, gain Attack Speed, and your Basic Attacks ignore movement penalty',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage Mitigation', value: '2% per missing Fragment' },
      { label: 'Attack Speed (Spirit Form)', value: '40%' }
    ]
  },
  abilities: {
    1: {
      name: 'Sickle Strike',
      image: '',
      description: 'Throw your Sickle, dealing Physical Damage and Slowing the first god hit. It passes through minions.\n\n• If a god is hit, the Sickle persists for the Slow duration\n• Deals 75% Physical Damage to minions',
      cooldown: '6s',
      cost: '30',
      attributes: [
        { label: 'Damage', value: '80 | 130 | 180 | 230 | 280' },
        { label: 'Damage Scaling', value: '45% Strength + 35% Physical Protections (Items) + 35% Magical Protections (Items)' },
        { label: 'Slow', value: '15 | 16.25 | 17.5 | 18.75 | 20%' },
        { label: 'Slow Duration', value: '3s' },
        { label: 'Range', value: '8.8m' }
      ]
    },
    2: {
      name: 'Spirit Flail',
      image: '',
      description: 'Strike the target area with your flail, dealing Physical Damage and granting Movement Speed.\n\n• Enemies affected by Sickle Strike have their Slow increased in power and duration',
      cooldown: '11s',
      cost: '50 | 55 | 60 | 65 | 70',
      attributes: [
        { label: 'Damage', value: '90 | 145 | 200 | 255 | 310' },
        { label: 'Damage Scaling', value: '75% Strength + 55% Physical Protections (Items) + 55% Magical Protections (Items)' },
        { label: 'Additional Slow', value: '40%' },
        { label: 'Bonus Slow Duration', value: '3s' },
        { label: 'Movement Speed', value: '20%' },
        { label: 'Buff Duration', value: '3s' },
        { label: 'Range', value: '8.8m' }
      ]
    },
    3: {
      name: 'Judgement Tether',
      image: '',
      description: 'Tether yourself to nearby enemy gods. Tethered enemies have reduced Attack Speed and reduced Damage for 4s.\n\n• The tether breaks if targets move far enough away\n• Targets still in range when the duration expires are Stunned',
      cooldown: '15s',
      cost: '60 | 65 | 70 | 75 | 80',
      attributes: [
        { label: 'Damage Dealt Reduction', value: '10 | 12.5 | 15 | 17.5 | 20%' },
        { label: 'Attack Speed Slow', value: '15 | 17.5 | 20 | 22.5 | 25%' },
        { label: 'Attack Speed Slow (from Item Protections)', value: '4% of Protections from Items' },
        { label: 'Stun Duration', value: '1.1s' }
      ]
    },
    4: {
      name: 'Lord of the Afterlife',
      image: '',
      description: 'Leap to a target location, dealing Physical Damage and Rooting enemies. Apply negative Cooldown Reduction and Healing Prevention to enemy gods hit.\n\n• On Use: Immediately max Fragment Stacks',
      cooldown: '70s',
      cost: '30',
      attributes: [
        { label: 'Damage', value: '220 | 320 | 420 | 520 | 620' },
        { label: 'Damage Scaling', value: '80% Strength' },
        { label: 'Root Duration', value: '0.8s' },
        { label: 'Negative Cooldown Rate', value: '30' },
        { label: 'Debuff Duration', value: '6s' },
        { label: 'Range', value: '10.4m' },
        { label: 'Radius', value: '2.4m' }
      ]
    }
  },
  aspects: [
    {
      id: 'fragmented',
      name: 'Aspect of the Fragmented',
      image: '',
      description: 'Abilities now scale with Intelligence only. Fragments are lost passively, on casts, and on ability god hits. Osiris gains +% Damage Dealt or Damage Mitigated based on how whole he is. Sickle Strike has no cooldown, costs 4 Fragments. Spirit Flail consumes Sickle Strike for bonus damage but no slow. Lord of the Afterlife summons a slowing, damage-dealing specter.',
      basicAttack: {
        name: 'Osiris Basic Attack',
        image: '',
        description: 'Deal Physical Damage to an enemy in front of you.\n\n4 Hit Chain. Attacks in order of 0.5, 1, 0.5, 1x damage swing time. Attacks 3 & 4 hit all enemies in range.',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
        ]
      },
      passive: {
        name: 'Fragmented',
        image: '',
        description: 'Lose a Fragment of your body every 4s, on ability use, and on god hit with an ability. Restore your body by using Sickle Strike.\n\n• While your body is whole, gain 16% Damage Dealt Increase. Each Fragment lost removes -2% Damage Dealt but grants +2% Damage Mitigation',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Damage Dealt (Whole)', value: '16%' },
          { label: 'Damage Dealt Loss per Fragment', value: '2%' },
          { label: 'Damage Mitigation per Fragment', value: '2%' }
        ]
      },
      abilities: {
        1: {
          name: 'Sickle Strike',
          image: '',
          description: 'Throw your Sickle, dealing Physical Damage and Slowing the first god hit. It passes through minions.\n\n• If a god is hit, the Sickle persists for the Slow duration\n• Deals 75% Physical Damage to minions\n• NO COOLDOWN, COSTS 4 FRAGMENTS\n• RESTORES BODY FRAGMENTS',
          cooldown: '-',
          cost: '4 Fragments',
          attributes: [
            { label: 'Damage', value: '80 | 130 | 180 | 230 | 280' },
            { label: 'Damage Scaling', value: '60% Intelligence' },
            { label: 'Slow', value: '15 | 16.25 | 17.5 | 18.75 | 20%' },
            { label: 'Slow Duration', value: '3s' },
            { label: 'Range', value: '8.8m' }
          ]
        },
        2: {
          name: 'Spirit Flail',
          image: '',
          description: 'Strike the target area with your flail, dealing Physical Damage and granting Movement Speed.\n\n• If this damages an enemy affected by Sickle Strike, this ability deals Increased Physical Damage instead\n• NO LONGER INCREASES SLOW ON SICKLE STRIKE TARGETS',
          cooldown: '11s',
          cost: '50 | 55 | 60 | 65 | 70',
          attributes: [
            { label: 'Damage', value: '90 | 145 | 200 | 255 | 310' },
            { label: 'Damage Scaling', value: '80% Intelligence + 55% Physical Protections (Items) + 55% Magical Protections (Items)' },
            { label: 'Bonus Damage (on Sickle Strike target)', value: '110 | 175 | 240 | 305 | 370' },
            { label: 'Bonus Damage Scaling', value: '100% Intelligence + 70% Physical Protections (Items) + 70% Magical Protections (Items)' },
            { label: 'Movement Speed', value: '20%' },
            { label: 'Buff Duration', value: '3s' },
            { label: 'Range', value: '8.8m' }
          ]
        },
        3: {
          name: 'Judgement Tether',
          image: '',
          description: 'Tether yourself to nearby enemy gods. Tethered enemies have reduced Attack Speed and reduced Damage for 4s.\n\n• The tether breaks if targets move far enough away\n• Targets still in range when the duration expires are Stunned',
          cooldown: '15s',
          cost: '60 | 65 | 70 | 75 | 80',
          attributes: [
            { label: 'Damage Dealt Reduction', value: '10 | 12.5 | 15 | 17.5 | 20%' },
            { label: 'Attack Speed Slow', value: '15 | 17.5 | 20 | 22.5 | 25%' },
            { label: 'Attack Speed Slow (from Item Protections)', value: '4% of Protections from Items' },
            { label: 'Stun Duration', value: '1.1s' }
          ]
        },
        4: {
          name: 'Lord of the Afterlife',
          image: '',
          description: 'Launch a specter, dealing Physical Damage and Slowing enemies. Apply negative Cooldown Reduction and Healing Prevention to enemy gods hit.\n\n• On Use: Immediately max Fragment Stacks\n• NO LONGER A LEAP\n• NOW SLOWS INSTEAD OF ROOTS',
          cooldown: '70s',
          cost: '30',
          attributes: [
            { label: 'Damage', value: '250 | 375 | 500 | 625 | 750' },
            { label: 'Damage Scaling', value: '95% Intelligence' },
            { label: 'Slow', value: '40%' },
            { label: 'Slow Duration', value: '3s' },
            { label: 'Negative Cooldown Rate', value: '30' },
            { label: 'Debuff Duration', value: '6s' },
            { label: 'Range', value: '10.4m' },
            { label: 'Radius', value: '3.2m' }
          ]
        }
      }
    }
  ],
  recommendedBuilds: []
};