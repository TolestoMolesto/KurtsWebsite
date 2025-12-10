import { God, DamageType } from '../../types';

export const SYLVANUS: God = {
  id: 'sylvanus',
  name: 'Sylvanus',
  title: 'Keeper of the Wild',
  pantheon: 'Roman',
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
    { strength: 0, intelligence: 0, inhandPower: 42, baseAttackSpeed: 0.9, attackSpeedPercent: 0.74, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 20.5, magicalProtection: 29.7, damageMitigation: 0, maxHealth: 672.3, healthRegen: 1.84, maxMana: 306, manaRegen: 2.25, cooldownRate: 0, movementSpeed: 370, xpRequirement: 0 },
    // Level 2
    { strength: 0, intelligence: 0, inhandPower: 45, baseAttackSpeed: 0.9, attackSpeedPercent: 1.48, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 23.8, magicalProtection: 31.3, damageMitigation: 0, maxHealth: 777.6, healthRegen: 2.05, maxMana: 348, manaRegen: 2.5, cooldownRate: 0, movementSpeed: 370, xpRequirement: 308 },
    // Level 3
    { strength: 0, intelligence: 0, inhandPower: 47, baseAttackSpeed: 0.9, attackSpeedPercent: 2.22, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 27.0, magicalProtection: 32.9, damageMitigation: 0, maxHealth: 882.9, healthRegen: 2.27, maxMana: 390, manaRegen: 2.75, cooldownRate: 0, movementSpeed: 370, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 50, baseAttackSpeed: 0.9, attackSpeedPercent: 2.96, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 30.2, magicalProtection: 34.6, damageMitigation: 0, maxHealth: 988.2, healthRegen: 2.48, maxMana: 432, manaRegen: 3.0, cooldownRate: 0, movementSpeed: 370, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 52, baseAttackSpeed: 0.9, attackSpeedPercent: 3.70, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 33.5, magicalProtection: 36.2, damageMitigation: 0, maxHealth: 1093.5, healthRegen: 2.70, maxMana: 474, manaRegen: 3.25, cooldownRate: 0, movementSpeed: 370, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 54, baseAttackSpeed: 0.9, attackSpeedPercent: 4.44, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 36.7, magicalProtection: 37.8, damageMitigation: 0, maxHealth: 1198.8, healthRegen: 2.92, maxMana: 516, manaRegen: 3.5, cooldownRate: 0, movementSpeed: 370, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 57, baseAttackSpeed: 0.9, attackSpeedPercent: 5.18, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 40.0, magicalProtection: 39.4, damageMitigation: 0, maxHealth: 1304.1, healthRegen: 3.13, maxMana: 558, manaRegen: 3.75, cooldownRate: 0, movementSpeed: 370, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 59, baseAttackSpeed: 0.9, attackSpeedPercent: 5.92, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 43.2, magicalProtection: 41.0, damageMitigation: 0, maxHealth: 1409.4, healthRegen: 3.35, maxMana: 600, manaRegen: 4.0, cooldownRate: 0, movementSpeed: 370, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 62, baseAttackSpeed: 0.9, attackSpeedPercent: 6.66, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 46.4, magicalProtection: 42.7, damageMitigation: 0, maxHealth: 1514.7, healthRegen: 3.56, maxMana: 642, manaRegen: 4.25, cooldownRate: 0, movementSpeed: 370, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 64, baseAttackSpeed: 0.9, attackSpeedPercent: 7.40, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 49.7, magicalProtection: 44.3, damageMitigation: 0, maxHealth: 1620.0, healthRegen: 3.78, maxMana: 684, manaRegen: 4.5, cooldownRate: 0, movementSpeed: 370, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 66, baseAttackSpeed: 0.9, attackSpeedPercent: 8.14, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 52.9, magicalProtection: 45.9, damageMitigation: 0, maxHealth: 1725.3, healthRegen: 4.00, maxMana: 726, manaRegen: 4.75, cooldownRate: 0, movementSpeed: 370, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 69, baseAttackSpeed: 0.9, attackSpeedPercent: 8.88, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 56.2, magicalProtection: 47.5, damageMitigation: 0, maxHealth: 1830.6, healthRegen: 4.21, maxMana: 768, manaRegen: 5.0, cooldownRate: 0, movementSpeed: 370, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 71, baseAttackSpeed: 0.9, attackSpeedPercent: 9.62, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 59.4, magicalProtection: 49.1, damageMitigation: 0, maxHealth: 1935.9, healthRegen: 4.43, maxMana: 810, manaRegen: 5.25, cooldownRate: 0, movementSpeed: 370, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 74, baseAttackSpeed: 0.9, attackSpeedPercent: 10.36, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 62.6, magicalProtection: 50.8, damageMitigation: 0, maxHealth: 2041.2, healthRegen: 4.64, maxMana: 852, manaRegen: 5.5, cooldownRate: 0, movementSpeed: 370, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 76, baseAttackSpeed: 0.9, attackSpeedPercent: 11.10, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 65.9, magicalProtection: 52.4, damageMitigation: 0, maxHealth: 2146.5, healthRegen: 4.86, maxMana: 894, manaRegen: 5.75, cooldownRate: 0, movementSpeed: 370, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 78, baseAttackSpeed: 0.9, attackSpeedPercent: 11.84, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 69.1, magicalProtection: 54.0, damageMitigation: 0, maxHealth: 2251.8, healthRegen: 5.08, maxMana: 936, manaRegen: 6.0, cooldownRate: 0, movementSpeed: 370, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 81, baseAttackSpeed: 0.9, attackSpeedPercent: 12.58, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 72.4, magicalProtection: 55.6, damageMitigation: 0, maxHealth: 2357.1, healthRegen: 5.29, maxMana: 978, manaRegen: 6.25, cooldownRate: 0, movementSpeed: 370, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 83, baseAttackSpeed: 0.9, attackSpeedPercent: 13.32, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 75.6, magicalProtection: 57.2, damageMitigation: 0, maxHealth: 2462.4, healthRegen: 5.51, maxMana: 1020, manaRegen: 6.5, cooldownRate: 0, movementSpeed: 370, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 86, baseAttackSpeed: 0.9, attackSpeedPercent: 14.06, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 78.8, magicalProtection: 58.9, damageMitigation: 0, maxHealth: 2567.7, healthRegen: 5.72, maxMana: 1062, manaRegen: 6.75, cooldownRate: 0, movementSpeed: 370, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 88, baseAttackSpeed: 0.9, attackSpeedPercent: 14.8, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 82.1, magicalProtection: 60.5, damageMitigation: 0, maxHealth: 2673.0, healthRegen: 5.94, maxMana: 1104, manaRegen: 7.0, cooldownRate: 0, movementSpeed: 370, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'Sylvanus Basic Attack',
    image: '',
    description: 'Lob a projectile at a target location that explodes, dealing Magical Damage to all enemies.\n\nCan be thrown over walls.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
      { label: 'Range', value: '6.4m' },
      { label: 'Radius', value: '1.6m' }
    ]
  },
  passive: {
    name: "Nature's Bounty",
    image: '',
    description: 'When your abilities hit or are deployed, a seed pod appears. Picking it up restores Mana and reduces your cooldowns. Picking up 8 spawns a pod near Sylvanus.\n\n• Reduces cooldowns by 0.5s; at level 15 the reduction increases to 1s.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Cooldown Reduction (Pre-15)', value: '0.5s' },
      { label: 'Cooldown Reduction (Post-15)', value: '1s' },
      { label: 'Pods to Spawn Near Sylvanus', value: '8' }
    ]
  },
  abilities: {
    1: {
      name: 'Verdant Growth',
      image: '',
      description: 'Throw a pod that deals Magical Damage, applies Protection Reduction, and Roots enemies hit.\n\n• If it lands on the ground without hitting an enemy, it grows into a Flower after 6s that grants nearby allies Mana Regeneration\n• The pod can be destroyed by Basic Attacks, applying Protection Reduction to the destroyer\n\nGrown Flowers wilt for 6s when destroyed, allowing them to still interact with Wisps and Nature\'s Grasp.',
      cooldown: '15 | 14 | 13 | 12 | 11s',
      cost: '60 | 65 | 70 | 75 | 80',
      attributes: [
        { label: 'Damage', value: '80 | 120 | 160 | 200 | 240' },
        { label: 'Damage Scaling', value: '50% Intelligence' },
        { label: 'Root Duration', value: '1.5s' },
        { label: 'Protections Reduced', value: '5 | 10 | 15 | 20 | 25 + 5%' },
        { label: 'Debuff Duration', value: '5s' },
        { label: 'Bonus Mana Regen', value: '4' },
        { label: 'Radius', value: '1.6m' },
        { label: 'Range', value: '7.2m' }
      ]
    },
    2: {
      name: 'Wisps',
      image: '',
      description: 'Release wisps that restore Health to allies or deal Magical Damage to enemies repeatedly over time. Allies gain Protections while healed.\n\n• The first Wisp tick deals twice the normal amount of damage and healing\n• Wisps can revive Wilted Flowers or cause Living Flowers to grant their Protections in an aura\n\nDamage and Healing are reduced by 65% when affecting Minions. Seeds are not spawned when hitting Minions.',
      cooldown: '14s',
      cost: '60 | 65 | 70 | 75 | 80',
      attributes: [
        { label: 'Heal Per Tick', value: '8 | 10 | 12 | 14 | 16' },
        { label: 'Heal Scaling', value: '3% Intelligence' },
        { label: 'Damage Per Tick', value: '14 | 20 | 26 | 32 | 38' },
        { label: 'Damage Scaling', value: '10% Intelligence' },
        { label: 'Protections', value: '10 | 15 | 20 | 25 | 30' },
        { label: 'Buff Duration', value: '5s' }
      ]
    },
    3: {
      name: "Nature's Grasp",
      image: '',
      description: 'Extend a vine that Stuns the first enemy god hit and Pulls them toward you.\n\n• Sylvanus can pull Pods to him, granting a Mana aura for 30s. If Sylvanus drops below 40% Health, he consumes the Aura to gain Wisps',
      cooldown: '14 | 13 | 12 | 11 | 10s',
      cost: '70 | 65 | 60 | 55 | 50',
      attributes: [
        { label: 'Stun Duration', value: '1s' },
        { label: 'Range', value: '9.6m' }
      ]
    },
    4: {
      name: 'Wrath of Terra',
      image: '',
      description: 'Slam the ground, Knocking Up enemies in an area and dealing Magical Damage repeatedly over time.\n\n• If a Pod has been grabbed, consume it to apply Verdant Growth\'s Protection Reduction\n\nDeals damage 6 times over 5 seconds.',
      cooldown: '90s',
      cost: '100',
      attributes: [
        { label: 'Damage Per Tick', value: '60 | 75 | 90 | 105 | 120' },
        { label: 'Damage Scaling', value: '25% Intelligence' },
        { label: 'Total Ticks', value: '6' },
        { label: 'Duration', value: '5s' }
      ]
    }
  },
  aspects: [
    {
      id: 'grovers-wrath',
      name: "Aspect of Grover's Wrath",
      image: '',
      description: "+15% damage to targets debuffed by Sylvanus. Wisp's Heal, Protections, and Ultimate Knockup reduced by 40%. Nature's Grasp tethers, dealing damage, slowing, and granting Sylvanus Haste. Gain Anger (+Attack Speed) when Verdant Growth/Ally dies; +2 on Ultimate cast. At 3 stacks of Anger, Enrage: +Attack Speed and a free Wisps or Nature's Grasp cast.",
      basicAttack: {
        name: 'Sylvanus Basic Attack',
        image: '',
        description: 'Lob a projectile at a target location that explodes, dealing Magical Damage to all enemies.\n\nCan be thrown over walls.',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
          { label: 'Range', value: '6.4m' },
          { label: 'Radius', value: '1.6m' }
        ]
      },
      passive: {
        name: "Nature's Bounty",
        image: '',
        description: 'When your abilities hit or are deployed, a seed pod appears. Picking it up restores Mana and reduces your cooldowns. Picking up 8 spawns a pod near Sylvanus. Each Pod destroyed or allied god slain angers Grover. At 3 stacks of Anger he enrages.\n\n• Reduces cooldowns by 0.5s; at level 15 the reduction increases to 1s.\n• Anger grants Attack Speed. Enrage grants even more Attack Speed and makes your next Nature\'s Grasp or Wisps free to cast.',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Cooldown Reduction (Pre-15)', value: '0.5s' },
          { label: 'Cooldown Reduction (Post-15)', value: '1s' },
          { label: 'Attack Speed Per Anger Stack', value: '10%' },
          { label: 'Enrage Attack Speed', value: '40%' },
          { label: 'Enrage Duration', value: '40s' }
        ]
      },
      abilities: {
        1: {
          name: 'Verdant Growth',
          image: '',
          description: 'Throw a pod that deals Magical Damage, applies Protection Reduction, and Roots enemies hit.\n\n• If it lands on the ground without hitting an enemy, it grows into a Flower after 6s that grants nearby allies Mana Regeneration\n• The pod can be destroyed by Basic Attacks, applying Protection Reduction to the destroyer\n\nGrown Flowers wilt for 6s when destroyed, allowing them to still interact with Wisps and Nature\'s Grasp.',
          cooldown: '15 | 14 | 13 | 12 | 11s',
          cost: '60 | 65 | 70 | 75 | 80',
          attributes: [
            { label: 'Damage', value: '80 | 120 | 160 | 200 | 240' },
            { label: 'Damage Scaling', value: '50% Intelligence' },
            { label: 'Root Duration', value: '1.5s' },
            { label: 'Protections Reduced', value: '5 | 10 | 15 | 20 | 25 + 5%' },
            { label: 'Debuff Duration', value: '5s' },
            { label: 'Bonus Mana Regen', value: '4' },
            { label: 'Radius', value: '1.6m' },
            { label: 'Range', value: '7.2m' }
          ]
        },
        2: {
          name: 'Wisps',
          image: '',
          description: 'Release wisps that restore Health to allies or deal Magical Damage to enemies repeatedly over time. Sylvanus gains Protections while healed.\n\n• The first Wisp tick deals twice the normal amount of damage and healing.\n• Wisps can revive Wilted Flowers or cause Living Flowers to grant their Protections in an aura\n• HEAL, PROTECTIONS REDUCED BY 40%\n\nDamage and Healing are reduced by 65% when affecting Minions. Seeds are not spawned when hitting Minions.',
          cooldown: '14s',
          cost: '60 | 65 | 70 | 75 | 80',
          attributes: [
            { label: 'Heal Per Tick', value: '8 | 10 | 12 | 14 | 16' },
            { label: 'Heal Scaling', value: '3% Intelligence' },
            { label: 'Damage Per Tick', value: '14 | 20 | 26 | 32 | 38' },
            { label: 'Damage Scaling', value: '10% Intelligence' },
            { label: 'Protections', value: '10 | 15 | 20 | 25 | 30 (Reduced by 40%)' },
            { label: 'Buff Duration', value: '5s' }
          ]
        },
        3: {
          name: "Nature's Grasp",
          image: '',
          description: 'Extend a vine that Tethers the first enemy god hit dealing Magical Damage repeatedly over time and Slowing them.\n\n• Sylvanus gains Haste while a tether is active. The Tether will break if the distance exceeds 11.2m\n• Damage procs On Attack Hit items\n• Sylvanus can pull Pods to him, granting a Mana aura for 30s. If Sylvanus drops below 40% Health, he consumes the Aura to gain Wisps\n\nDeals damage 5 times over 8 seconds.',
          cooldown: '14 | 13 | 12 | 11 | 10s',
          cost: '70 | 65 | 60 | 55 | 50',
          attributes: [
            { label: 'Damage Per Tick', value: '10 | 15 | 20 | 25 | 30' },
            { label: 'Damage Scaling', value: '33% Strength + 10% Intelligence' },
            { label: 'Slow', value: '12.5%' },
            { label: 'Tether Break Distance', value: '11.2m' },
            { label: 'Range', value: '9.6m' }
          ]
        },
        4: {
          name: 'Wrath of Terra',
          image: '',
          description: 'Slam the ground, Knocking Up enemies in an area and dealing Magical Damage repeatedly over time.\n\n• If a Pod has been grabbed, consume it to apply Verdant Growth\'s Protection Reduction\n• KNOCKUP REDUCED BY 40%\n\nDeals damage 6 times over 5 seconds.',
          cooldown: '90s',
          cost: '100',
          attributes: [
            { label: 'Damage Per Tick', value: '60 | 75 | 90 | 105 | 120' },
            { label: 'Damage Scaling', value: '25% Intelligence' },
            { label: 'Total Ticks', value: '6' },
            { label: 'Duration', value: '5s' }
          ]
        }
      }
    }
  ],
  recommendedBuilds: []
};