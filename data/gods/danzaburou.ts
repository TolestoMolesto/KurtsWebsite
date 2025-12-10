import { God, DamageType } from '../../types';

export const DANZABUROU: God = {
  id: 'danzaburou',
  name: 'Danzaburou',
  title: 'The Legendary Tanuki',
  pantheon: 'Japanese',
  role: 'Hunter',
  lanes: ['Carry', 'Mid'],
  damageType: DamageType.Physical,
  image: '',
  videoGuideUrl: '',
  goodAgainst: [],
  badAgainst: [],
  levelingOrder: [],
  statsByLevel: [
    // Level 1
    { strength: 0, intelligence: 0, inhandPower: 46.176, baseAttackSpeed: 1.0, attackSpeedPercent: 1.33, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 18.05, magicalProtection: 26.125, damageMitigation: 0, maxHealth: 591.375, healthRegen: 1.7, maxMana: 307.84, manaRegen: 2.25, cooldownRate: 0, movementSpeed: 365, xpRequirement: 0 },
    // Level 2
    { strength: 0, intelligence: 0, inhandPower: 48.672, baseAttackSpeed: 1.0, attackSpeedPercent: 2.66, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 20.9, magicalProtection: 27.55, damageMitigation: 0, maxHealth: 683.94, healthRegen: 1.9, maxMana: 351.51, manaRegen: 2.5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 308 },
    // Level 3
    { strength: 0, intelligence: 0, inhandPower: 51.168, baseAttackSpeed: 1.0, attackSpeedPercent: 3.99, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 23.75, magicalProtection: 28.975, damageMitigation: 0, maxHealth: 776.505, healthRegen: 2.1, maxMana: 395.18, manaRegen: 2.75, cooldownRate: 0, movementSpeed: 365, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 53.664, baseAttackSpeed: 1.0, attackSpeedPercent: 5.32, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 26.6, magicalProtection: 30.4, damageMitigation: 0, maxHealth: 869.07, healthRegen: 2.3, maxMana: 438.85, manaRegen: 3.0, cooldownRate: 0, movementSpeed: 365, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 56.16, baseAttackSpeed: 1.0, attackSpeedPercent: 6.65, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 29.45, magicalProtection: 31.825, damageMitigation: 0, maxHealth: 961.635, healthRegen: 2.5, maxMana: 482.52, manaRegen: 3.25, cooldownRate: 0, movementSpeed: 365, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 58.656, baseAttackSpeed: 1.0, attackSpeedPercent: 7.98, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 32.3, magicalProtection: 33.25, damageMitigation: 0, maxHealth: 1054.2, healthRegen: 2.7, maxMana: 526.19, manaRegen: 3.5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 61.152, baseAttackSpeed: 1.0, attackSpeedPercent: 9.31, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 35.15, magicalProtection: 34.675, damageMitigation: 0, maxHealth: 1146.765, healthRegen: 2.9, maxMana: 569.86, manaRegen: 3.75, cooldownRate: 0, movementSpeed: 365, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 63.648, baseAttackSpeed: 1.0, attackSpeedPercent: 10.64, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 38.0, magicalProtection: 36.1, damageMitigation: 0, maxHealth: 1239.33, healthRegen: 3.1, maxMana: 613.6, manaRegen: 4.0, cooldownRate: 0, movementSpeed: 365, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 66.144, baseAttackSpeed: 1.0, attackSpeedPercent: 11.97, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 40.85, magicalProtection: 37.525, damageMitigation: 0, maxHealth: 1331.895, healthRegen: 3.3, maxMana: 657.28, manaRegen: 4.25, cooldownRate: 0, movementSpeed: 365, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 68.64, baseAttackSpeed: 1.0, attackSpeedPercent: 13.3, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 43.7, magicalProtection: 38.95, damageMitigation: 0, maxHealth: 1424.46, healthRegen: 3.5, maxMana: 700.96, manaRegen: 4.5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 71.136, baseAttackSpeed: 1.0, attackSpeedPercent: 14.63, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 46.55, magicalProtection: 40.375, damageMitigation: 0, maxHealth: 1517.025, healthRegen: 3.7, maxMana: 744.64, manaRegen: 4.75, cooldownRate: 0, movementSpeed: 365, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 73.632, baseAttackSpeed: 1.0, attackSpeedPercent: 15.96, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 49.4, magicalProtection: 41.8, damageMitigation: 0, maxHealth: 1609.59, healthRegen: 3.9, maxMana: 788.32, manaRegen: 5.0, cooldownRate: 0, movementSpeed: 365, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 76.128, baseAttackSpeed: 1.0, attackSpeedPercent: 17.29, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 52.25, magicalProtection: 43.225, damageMitigation: 0, maxHealth: 1702.155, healthRegen: 4.1, maxMana: 832.0, manaRegen: 5.25, cooldownRate: 0, movementSpeed: 365, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 78.624, baseAttackSpeed: 1.0, attackSpeedPercent: 18.62, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 55.1, magicalProtection: 44.65, damageMitigation: 0, maxHealth: 1794.72, healthRegen: 4.3, maxMana: 875.68, manaRegen: 5.5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 81.12, baseAttackSpeed: 1.0, attackSpeedPercent: 19.95, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 57.95, magicalProtection: 46.075, damageMitigation: 0, maxHealth: 1887.285, healthRegen: 4.5, maxMana: 919.36, manaRegen: 5.75, cooldownRate: 0, movementSpeed: 365, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 83.616, baseAttackSpeed: 1.0, attackSpeedPercent: 21.28, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 60.8, magicalProtection: 47.5, damageMitigation: 0, maxHealth: 1979.85, healthRegen: 4.7, maxMana: 963.04, manaRegen: 6.0, cooldownRate: 0, movementSpeed: 365, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 86.112, baseAttackSpeed: 1.0, attackSpeedPercent: 22.61, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 63.65, magicalProtection: 48.925, damageMitigation: 0, maxHealth: 2072.415, healthRegen: 4.9, maxMana: 1006.72, manaRegen: 6.25, cooldownRate: 0, movementSpeed: 365, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 88.608, baseAttackSpeed: 1.0, attackSpeedPercent: 23.94, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 66.5, magicalProtection: 50.35, damageMitigation: 0, maxHealth: 2164.98, healthRegen: 5.1, maxMana: 1050.4, manaRegen: 6.5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 91.104, baseAttackSpeed: 1.0, attackSpeedPercent: 25.27, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 69.35, magicalProtection: 51.775, damageMitigation: 0, maxHealth: 2257.545, healthRegen: 5.3, maxMana: 1094.08, manaRegen: 6.75, cooldownRate: 0, movementSpeed: 365, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 93.6, baseAttackSpeed: 1.0, attackSpeedPercent: 26.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 72.2, magicalProtection: 53.2, damageMitigation: 0, maxHealth: 2351.25, healthRegen: 5.5, maxMana: 1137.76, manaRegen: 7.0, cooldownRate: 0, movementSpeed: 365, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'Danzaburou Basic Attack',
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
    name: 'Dishonest Duplication',
    image: '',
    description: 'You have a 5% + 0.5% per level + 0.05% per Intelligence chance of spawning a clone of yourself with each basic attack hitting an enemy.\n\n• Clones last 3s, deal 10% of your Basic Attack Damage and take 300% increased Damage\n• Clones have a 5% + 0.25% Per Level chance of spawning a clone\n• Clones target the enemy that was hit when they were created',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Base Clone Chance', value: '5%' },
      { label: 'Clone Chance Per Level', value: '0.5%' },
      { label: 'Clone Chance Per Intelligence', value: '0.05%' },
      { label: 'Clone Duration', value: '3s' },
      { label: 'Clone Damage', value: '10% Basic Attack Damage' },
      { label: 'Clone Damage Taken', value: '300%' },
      { label: 'Clone Spawn Clone Chance', value: '5% + 0.25% Per Level' }
    ]
  },
  abilities: {
    1: {
      name: "Fool's Gold",
      image: '',
      description: "Roll out 3 money bags that deal Physical Damage to enemies hit and then explode dealing Physical Damage.\n\n• They stop on enemy gods, Trembling them and dropping a coin\n• Coins can be picked up by yourself or allied gods to provide you 10 gold\n\nSubsequent hits of bags or explosions on the same enemy deal 15% damage.",
      cooldown: '11s',
      cost: '70 | 75 | 80 | 85 | 90',
      attributes: [
        { label: 'Damage', value: '95 | 145 | 195 | 245 | 295' },
        { label: 'Damage Scaling', value: '90% Strength + 65% Intelligence' },
        { label: 'Explode Damage', value: '30 | 55 | 80 | 105 | 130' },
        { label: 'Explode Damage Scaling', value: '20% Strength + 40% Intelligence' },
        { label: 'Range', value: '11.2m' },
        { label: 'Radius', value: '0.51m' },
        { label: 'Explode Radius', value: '1.92m' }
      ]
    },
    2: {
      name: 'Alluring Spirits',
      image: '',
      description: "Drink some sake, Healing over time before throwing the bottle, dealing Physical Damage to enemies hit.\n\n• On landing, the bottle applies a stacking Slow to enemy gods\n• On reaching 3 stacks, they are Taunted towards the bottle\n\nThis ability does 40% bonus damage to Jungle Monsters. The inner circle deals damage on landing while the entire area slows. The bottle can be broken early with enemy basic attacks. Taunt is not affected by Diminishing Returns. If the Taunted enemy takes more than 30% of their max. Health, the taunt ends early.",
      cooldown: '14 | 13.5 | 13 | 12.5 | 12s',
      cost: '60 | 65 | 70 | 75 | 80',
      attributes: [
        { label: 'Damage', value: '90 | 140 | 190 | 240 | 290' },
        { label: 'Damage Scaling', value: '70% Strength + 40% Intelligence' },
        { label: 'Heal Per Tick', value: '20 | 25 | 30 | 35 | 40' },
        { label: 'Heal Scaling', value: '3% Intelligence' },
        { label: 'Heal Period', value: '0.5s' },
        { label: 'Heal Duration', value: '1.5s' },
        { label: 'Slow Per Stack', value: '10%' },
        { label: 'Taunt Duration', value: '1s' },
        { label: 'Bottle HP', value: '2 | 2 | 3 | 3 | 4' },
        { label: 'Range', value: '7.2m' },
        { label: 'Inner Radius', value: '2m' },
        { label: 'Outer Radius', value: '2.8m' }
      ]
    },
    3: {
      name: 'Tanuki Trickery',
      image: '',
      description: "Create a field where you gain Movement Speed, Slow Immunity, your Basic Attack Movement Penalty is removed, and your Dishonest Duplication chance is doubled. When you leave the area, it disappears and you transform into a leaf while decoys mimic your movement.\n\n• Enemies in the field are Slowed\n• As a leaf you gain increased Movement Speed, Slow Immunity and a buff that causes your next Basic Attack to deal Physical Damage\n\nTaking damage or attacking while in leaf form will end it early however there is a brief delay before this can happen on first transforming.",
      cooldown: '14s',
      cost: '70',
      attributes: [
        { label: 'Bonus Damage', value: '35 | 45 | 55 | 65 | 75' },
        { label: 'Bonus Damage Scaling', value: '55% Strength + 100% Intelligence' },
        { label: 'Movement Speed (Field)', value: '20%' },
        { label: 'Movement Speed (Leaf)', value: '30 | 32.5 | 35 | 37.5 | 40%' },
        { label: 'Enemy Slow', value: '20%' },
        { label: 'Radius', value: '3.84m' }
      ]
    },
    4: {
      name: 'Uproarious Rocket',
      image: '',
      description: "Fire a rocket that locks onto enemy gods or reactivate this ability to become the rocket! The rocket deals Physical Damage, Stuns the first enemy god hit and explodes dealing Physical Damage.\n\n• You are Rooted and CC Immune while Channeling and can only aim within 180 degrees\n• The rocket pierces through and damages minions but stops on first god hit\n• You are immune to damage while in rocket form\n• You can cancel this ability while a rocket to transform back, sending out the rocket directly ahead",
      cooldown: '90s',
      cost: '100',
      attributes: [
        { label: 'Damage', value: '400 | 450 | 500 | 550 | 600' },
        { label: 'Damage Scaling', value: '100% Strength + 100% Intelligence' },
        { label: 'Explode Damage', value: '225 | 270 | 315 | 360 | 405' },
        { label: 'Explode Damage Scaling', value: '50% Strength + 80% Intelligence' },
        { label: 'Stun Duration', value: '1 | 1.1 | 1.2 | 1.3 | 1.4s' },
        { label: 'Explode Radius', value: '4.8m' }
      ]
    }
  },
  aspects: [
    {
      id: 'fellowship',
      name: 'Aspect of Fellowship',
      image: '',
      description: 'Alluring Spirits no longer throws out a sake bottle but instead spawns 2 Clones. All of your Clones deal more damage and take less damage.',
      basicAttack: {
        name: 'Danzaburou Basic Attack',
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
        name: 'Dishonest Duplication',
        image: '',
        description: 'You have a 5% + 0.5% per level + 0.05% per Intelligence chance of spawning a clone of yourself with each basic attack hitting an enemy.\n\n• Clones last 3s, deal 12.5/13.75/15/16.25/17.5% of your Basic Attack Damage and take 300/275/250/225/200% increased Damage\n• Clones have a 5% + 0.25% Per Level chance of spawning a clone\n• Clones target the enemy that was hit when they were created',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Base Clone Chance', value: '5%' },
          { label: 'Clone Chance Per Level', value: '0.5%' },
          { label: 'Clone Chance Per Intelligence', value: '0.05%' },
          { label: 'Clone Duration', value: '3s' },
          { label: 'Clone Damage (Aspect)', value: '12.5 | 13.75 | 15 | 16.25 | 17.5% Basic Attack Damage' },
          { label: 'Clone Damage Taken (Aspect)', value: '300 | 275 | 250 | 225 | 200%' },
          { label: 'Clone Spawn Clone Chance', value: '5% + 0.25% Per Level' }
        ]
      },
      abilities: {
        1: {
          name: "Fool's Gold",
          image: '',
          description: "Roll out 3 money bags that deal Physical Damage to enemies hit and then explode dealing Physical Damage.\n\n• They stop on enemy gods, Trembling them and dropping a coin\n• Coins can be picked up by yourself or allied gods to provide you 10 gold\n\nSubsequent hits of bags or explosions on the same enemy deal 15% damage.",
          cooldown: '11s',
          cost: '70 | 75 | 80 | 85 | 90',
          attributes: [
            { label: 'Damage', value: '95 | 145 | 195 | 245 | 295' },
            { label: 'Damage Scaling', value: '90% Strength + 65% Intelligence' },
            { label: 'Explode Damage', value: '30 | 55 | 80 | 105 | 130' },
            { label: 'Explode Damage Scaling', value: '20% Strength + 40% Intelligence' },
            { label: 'Range', value: '11.2m' },
            { label: 'Radius', value: '0.51m' },
            { label: 'Explode Radius', value: '1.92m' }
          ]
        },
        2: {
          name: 'Alluring Spirits',
          image: '',
          description: "Drink some sake, Healing over time before conjuring 2 Clones.\n\n• NO LONGER THROWS OUT A SAKE BOTTLE\n• SPAWNS 2 CLONES INSTEAD",
          cooldown: '14 | 13.5 | 13 | 12.5 | 12s',
          cost: '60 | 65 | 70 | 75 | 80',
          attributes: [
            { label: 'Heal Per Tick', value: '20 | 25 | 30 | 35 | 40' },
            { label: 'Heal Scaling', value: '3% Intelligence' },
            { label: 'Heal Period', value: '0.5s' },
            { label: 'Heal Duration', value: '1.5s' },
            { label: 'Clone Basic Attack Scaling', value: '100%' },
            { label: 'Clone Damage Taken', value: '300 | 275 | 250 | 225 | 200%' }
          ]
        },
        3: {
          name: 'Tanuki Trickery',
          image: '',
          description: "Create a field where you gain Movement Speed, Slow Immunity, your Basic Attack Movement Penalty is removed, and your Dishonest Duplication chance is doubled. When you leave the area, it disappears and you transform into a leaf while decoys mimic your movement.\n\n• Enemies in the field are Slowed\n• As a leaf you gain increased Movement Speed, Slow Immunity and a buff that causes your next Basic Attack to deal Physical Damage\n\nTaking damage or attacking while in leaf form will end it early however there is a brief delay before this can happen on first transforming.",
          cooldown: '14s',
          cost: '70',
          attributes: [
            { label: 'Bonus Damage', value: '35 | 45 | 55 | 65 | 75' },
            { label: 'Bonus Damage Scaling', value: '55% Strength + 100% Intelligence' },
            { label: 'Movement Speed (Field)', value: '20%' },
            { label: 'Movement Speed (Leaf)', value: '30 | 32.5 | 35 | 37.5 | 40%' },
            { label: 'Enemy Slow', value: '20%' },
            { label: 'Radius', value: '3.84m' }
          ]
        },
        4: {
          name: 'Uproarious Rocket',
          image: '',
          description: "Fire a rocket that locks onto enemy gods or reactivate this ability to become the rocket! The rocket deals Physical Damage, Stuns the first enemy god hit and explodes dealing Physical Damage.\n\n• You are Rooted and CC Immune while Channeling and can only aim within 180 degrees\n• The rocket pierces through and damages minions but stops on first god hit\n• You are immune to damage while in rocket form\n• You can cancel this ability while a rocket to transform back, sending out the rocket directly ahead",
          cooldown: '90s',
          cost: '100',
          attributes: [
            { label: 'Damage', value: '400 | 450 | 500 | 550 | 600' },
            { label: 'Damage Scaling', value: '100% Strength + 100% Intelligence' },
            { label: 'Explode Damage', value: '225 | 270 | 315 | 360 | 405' },
            { label: 'Explode Damage Scaling', value: '50% Strength + 80% Intelligence' },
            { label: 'Stun Duration', value: '1 | 1.1 | 1.2 | 1.3 | 1.4s' },
            { label: 'Explode Radius', value: '4.8m' }
          ]
        }
      }
    }
  ],
  recommendedBuilds: []
};