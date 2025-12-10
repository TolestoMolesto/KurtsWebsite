import { God, DamageType } from '../../types';

export const DAJI: God = {
  id: 'daji',
  name: 'Da Ji',
  title: 'The Nine-Tailed Fox',
  pantheon: 'Chinese',
  role: 'Assassin',
  lanes: ['Jungle'],
  damageType: DamageType.Physical,
  image: '',
  videoGuideUrl: '',
  goodAgainst: [],
  badAgainst: [],
  levelingOrder: [],
  statsByLevel: [
    // Level 1
    { strength: 0, intelligence: 0, inhandPower: 44, baseAttackSpeed: 0.97, attackSpeedPercent: 1.456, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 18.1, magicalProtection: 26.1, damageMitigation: 0, maxHealth: 591.4, healthRegen: 1.7, maxMana: 296, manaRegen: 2.25, cooldownRate: 0, movementSpeed: 365, xpRequirement: 0 },
    // Level 2
    { strength: 0, intelligence: 0, inhandPower: 47, baseAttackSpeed: 0.97, attackSpeedPercent: 2.912, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 20.9, magicalProtection: 27.6, damageMitigation: 0, maxHealth: 684, healthRegen: 1.9, maxMana: 338, manaRegen: 2.5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 308 },
    // Level 3
    { strength: 0, intelligence: 0, inhandPower: 49, baseAttackSpeed: 0.97, attackSpeedPercent: 4.368, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 23.8, magicalProtection: 29.0, damageMitigation: 0, maxHealth: 776.6, healthRegen: 2.1, maxMana: 380, manaRegen: 2.75, cooldownRate: 0, movementSpeed: 365, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 52, baseAttackSpeed: 0.97, attackSpeedPercent: 5.824, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 26.6, magicalProtection: 30.4, damageMitigation: 0, maxHealth: 869.3, healthRegen: 2.3, maxMana: 422, manaRegen: 3, cooldownRate: 0, movementSpeed: 365, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 54, baseAttackSpeed: 0.97, attackSpeedPercent: 7.28, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 29.5, magicalProtection: 31.8, damageMitigation: 0, maxHealth: 961.9, healthRegen: 2.5, maxMana: 464, manaRegen: 3.25, cooldownRate: 0, movementSpeed: 365, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 56, baseAttackSpeed: 0.97, attackSpeedPercent: 8.736, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 32.3, magicalProtection: 33.3, damageMitigation: 0, maxHealth: 1054.5, healthRegen: 2.7, maxMana: 506, manaRegen: 3.5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 59, baseAttackSpeed: 0.97, attackSpeedPercent: 10.192, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 35.2, magicalProtection: 34.7, damageMitigation: 0, maxHealth: 1147.1, healthRegen: 2.9, maxMana: 548, manaRegen: 3.75, cooldownRate: 0, movementSpeed: 365, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 61, baseAttackSpeed: 0.97, attackSpeedPercent: 11.648, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 38.0, magicalProtection: 36.1, damageMitigation: 0, maxHealth: 1239.8, healthRegen: 3.1, maxMana: 590, manaRegen: 4, cooldownRate: 0, movementSpeed: 365, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 64, baseAttackSpeed: 0.97, attackSpeedPercent: 13.104, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 40.9, magicalProtection: 37.5, damageMitigation: 0, maxHealth: 1332.4, healthRegen: 3.3, maxMana: 632, manaRegen: 4.25, cooldownRate: 0, movementSpeed: 365, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 66, baseAttackSpeed: 0.97, attackSpeedPercent: 14.56, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 43.7, magicalProtection: 39.0, damageMitigation: 0, maxHealth: 1425, healthRegen: 3.5, maxMana: 674, manaRegen: 4.5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 68, baseAttackSpeed: 0.97, attackSpeedPercent: 16.016, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 46.6, magicalProtection: 40.4, damageMitigation: 0, maxHealth: 1517.6, healthRegen: 3.7, maxMana: 716, manaRegen: 4.75, cooldownRate: 0, movementSpeed: 365, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 71, baseAttackSpeed: 0.97, attackSpeedPercent: 17.472, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 49.4, magicalProtection: 41.8, damageMitigation: 0, maxHealth: 1610.3, healthRegen: 3.9, maxMana: 758, manaRegen: 5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 73, baseAttackSpeed: 0.97, attackSpeedPercent: 18.928, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 52.3, magicalProtection: 43.2, damageMitigation: 0, maxHealth: 1702.9, healthRegen: 4.1, maxMana: 800, manaRegen: 5.25, cooldownRate: 0, movementSpeed: 365, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 76, baseAttackSpeed: 0.97, attackSpeedPercent: 20.384, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 55.1, magicalProtection: 44.7, damageMitigation: 0, maxHealth: 1795.5, healthRegen: 4.3, maxMana: 842, manaRegen: 5.5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 78, baseAttackSpeed: 0.97, attackSpeedPercent: 21.84, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 58.0, magicalProtection: 46.1, damageMitigation: 0, maxHealth: 1888.1, healthRegen: 4.5, maxMana: 884, manaRegen: 5.75, cooldownRate: 0, movementSpeed: 365, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 80, baseAttackSpeed: 0.97, attackSpeedPercent: 23.296, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 60.8, magicalProtection: 47.5, damageMitigation: 0, maxHealth: 1980.8, healthRegen: 4.7, maxMana: 926, manaRegen: 6, cooldownRate: 0, movementSpeed: 365, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 83, baseAttackSpeed: 0.97, attackSpeedPercent: 24.752, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 63.7, magicalProtection: 48.9, damageMitigation: 0, maxHealth: 2073.4, healthRegen: 4.9, maxMana: 968, manaRegen: 6.25, cooldownRate: 0, movementSpeed: 365, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 85, baseAttackSpeed: 0.97, attackSpeedPercent: 26.208, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 66.5, magicalProtection: 50.4, damageMitigation: 0, maxHealth: 2166, healthRegen: 5.1, maxMana: 1010, manaRegen: 6.5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 88, baseAttackSpeed: 0.97, attackSpeedPercent: 27.664, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 69.4, magicalProtection: 51.8, damageMitigation: 0, maxHealth: 2258.6, healthRegen: 5.3, maxMana: 1052, manaRegen: 6.75, cooldownRate: 0, movementSpeed: 365, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 90, baseAttackSpeed: 0.97, attackSpeedPercent: 29.12, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 72.2, magicalProtection: 53.2, damageMitigation: 0, maxHealth: 2351.3, healthRegen: 5.5, maxMana: 1094, manaRegen: 7, cooldownRate: 0, movementSpeed: 365, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'Da Ji Basic Attack',
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
    name: 'Torture Blades',
    image: '',
    description: 'Attacks and non-ultimate abilities cause enemies to Bleed, dealing Physical Damage every 1s for 2s.\n\n• The Damage over Time does not trigger item effects and can stack any number of times on the same target.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage', value: '7' },
      { label: 'Damage Scaling', value: '5% Strength' }
    ]
  },
  abilities: {
    1: {
      name: 'Horrible Burns',
      image: '',
      description: 'While active, your next successful Attack will Slow, deals bonus Physical Damage, and Physical Damage every 1s.\n\n• The nearest enemy god below a health threshold is marked, reducing this ability\'s cooldown rapidly\n• Hitting a marked enemy god with this ability permanently increases its damage\n• While active, you gain Haste.',
      cooldown: '9s',
      cost: '50',
      attributes: [
        { label: 'Damage', value: '30 | 60 | 90 | 120 | 150' },
        { label: 'Damage Scaling', value: '20% Strength' },
        { label: 'Tick Damage', value: '20 | 28 | 36 | 42 | 50' },
        { label: 'Tick Damage Scaling', value: '10% Strength' },
        { label: 'Slow', value: '15 | 20 | 25 | 30 | 35%' },
        { label: 'Slow Duration', value: '3s' },
        { label: 'Enemy HP Threshold', value: '30%' },
        { label: 'Bonus Scaling Per Stack', value: '2%' }
      ]
    },
    2: {
      name: 'One Thousand Cuts',
      image: '',
      description: 'Strike enemies ahead of you 4 times, dealing Physical Damage.\n\n• While channelling you gain Movement Speed and Mitigate Damage dealt by enemy gods behind you\n• Additionally you are Slow Immune and Immune to strafe and backpedal movement penalties',
      cooldown: '11s',
      cost: '60 | 65 | 70 | 75 | 80',
      attributes: [
        { label: 'Damage Per Hit', value: '35 | 55 | 75 | 95 | 115' },
        { label: 'Damage Scaling', value: '40% Strength' },
        { label: 'Movement Speed', value: '40%' },
        { label: 'Rear Damage Mitigation', value: '20 | 25 | 30 | 35 | 40%' },
        { label: 'Range', value: '3.2m' },
        { label: 'Cone Angle', value: '180 degrees' }
      ]
    },
    3: {
      name: 'Trickster Spirit',
      image: '',
      description: 'Teleport to a target character or ward after a short delay, dealing Physical Damage in an area.\n\n• Your rotation before the Teleport will determine where you are facing around the target location.',
      cooldown: '15s',
      cost: '60 | 65 | 70 | 75 | 80',
      attributes: [
        { label: 'Damage', value: '80 | 120 | 160 | 200 | 240' },
        { label: 'Damage Scaling', value: '80% Strength' },
        { label: 'Range', value: '8.8m' },
        { label: 'Radius', value: '1.6m' }
      ]
    },
    4: {
      name: 'Paolao',
      image: '',
      description: 'Rise onto your Paolao for up to 7s and fire 3 ensnaring chains. Chains deal Physical Damage, Cripple and Vortex enemy gods towards the Paolao.\n\n• After 3 shots or on canceling this ability, you can Leap to a target location\n• Hitting a chained enemy a second time increases the Vortex strength\n• If a chained enemy reaches the Paolao, they are Stunned and take Physical Damage\n• Enemies near the Paolao also take Physical Damage every 0.25s\n• You are CC Immune while using this ability',
      cooldown: '120s',
      cost: '50',
      attributes: [
        { label: 'Chain/Stun Damage', value: '100 | 125 | 150 | 175 | 200' },
        { label: 'Damage Scaling', value: '60% Strength' },
        { label: 'Damage Per Tick', value: '10 | 15 | 20 | 25 | 30' },
        { label: 'Damage Scaling Per Tick', value: '5% Strength' },
        { label: 'Stun Duration', value: '0.5s' },
        { label: 'Range', value: '12.8m' },
        { label: 'Chain Radius', value: '1.6m' },
        { label: 'Pulse Radius', value: '3.2m' }
      ]
    }
  },
  aspects: [
    {
      id: 'ferocity',
      name: 'Aspect of Ferocity',
      image: '',
      description: 'A more attack-focused take on Da Ji. Horrible Burns no longer burns but provides Lifesteal and lasts for a short duration. One Thousand Cuts fires 2 swings, increasing at Attack Speed thresholds and deals Attack damage. Trickster Spirit does less damage but provides an Attack Speed buff.',
      basicAttack: {
        name: 'Da Ji Basic Attack',
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
        name: 'Torture Blades',
        image: '',
        description: 'Attacks and non-ultimate abilities cause enemies to Bleed, dealing Physical Damage every 1s for 2s.\n\n• The Damage over Time does not trigger item effects and can stack any number of times on the same target.',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Damage', value: '7' },
          { label: 'Damage Scaling', value: '5% Strength' }
        ]
      },
      abilities: {
        1: {
          name: 'Horrible Burns',
          image: '',
          description: 'While active, you gain Lifesteal, your Attacks Slow, and deal bonus Physical Damage.\n\n• The nearest enemy god below a health threshold is marked, reducing this ability\'s cooldown rapidly\n• Hitting a marked enemy god with this ability provides a stack. Every 4 stacks permanently increases its damage\n• NO LONGER BURNS BUT PROVIDES LIFESTEAL AND LASTS FOR A SHORT DURATION',
          cooldown: '9s',
          cost: '50',
          attributes: [
            { label: 'Damage', value: '10 | 15 | 20 | 25 | 30' },
            { label: 'Damage Scaling', value: '15% Strength' },
            { label: 'Lifesteal', value: '15%' },
            { label: 'Slow', value: '20%' },
            { label: 'Slow Duration', value: '3s' },
            { label: 'Buff Duration', value: '4s' },
            { label: 'Enemy HP Threshold', value: '30%' },
            { label: 'Bonus Scaling Per Stack', value: '2%' }
          ]
        },
        2: {
          name: 'One Thousand Cuts',
          image: '',
          description: 'Strike enemies ahead of you 2 times, dealing Physical Damage.\n\n• On obtaining 1.5/2.5 Attack Speed you strike up to 4/6 times\n• While channelling you gain Movement Speed and Mitigate Damage dealt by enemy gods behind you\n• Additionally you are Slow Immune and Immune to strafe and backpedal movement penalties\n• DEALS ATTACK DAMAGE AND PROCS ATTACK ITEM EFFECTS (FOR 70% DAMAGE) INSTEAD OF ABILITY ITEM EFFECTS\n• STRIKES ARE FASTER ON REACHING THE ATTACK SPEED THRESHOLDS',
          cooldown: '11 | 10 | 9 | 8 | 7s',
          cost: '60 | 65 | 70 | 75 | 80',
          attributes: [
            { label: 'Damage Scaling', value: '75% Strength + 15% Intelligence + 75% Inhand Power' },
            { label: 'Movement Speed', value: '40%' },
            { label: 'Rear Damage Mitigation', value: '20 | 25 | 30 | 35 | 40%' },
            { label: 'Range', value: '3.2m' },
            { label: 'Cone Angle', value: '180 degrees' },
            { label: 'Attack Item Effect Scaling', value: '70%' }
          ]
        },
        3: {
          name: 'Trickster Spirit',
          image: '',
          description: 'Teleport to a target character or ward after a short delay, gaining Attack Speed and dealing Physical Damage in an area.\n\n• Your rotation before the Teleport will determine where you are facing around the target location.\n• PROVIDES AN ATTACK SPEED BUFF BUT DEALS LESS DAMAGE',
          cooldown: '15s',
          cost: '60 | 65 | 70 | 75 | 80',
          attributes: [
            { label: 'Damage', value: '50 | 80 | 110 | 140 | 170' },
            { label: 'Damage Scaling', value: '60% Strength' },
            { label: 'Attack Speed', value: '20 | 25 | 30 | 35 | 40%' },
            { label: 'Buff Duration', value: '3s' },
            { label: 'Range', value: '8.8m' },
            { label: 'Radius', value: '1.6m' }
          ]
        },
        4: {
          name: 'Paolao',
          image: '',
          description: 'Rise onto your Paolao for up to 7s and fire 3 ensnaring chains. Chains deal Physical Damage, Cripple and Vortex enemy gods towards the Paolao.\n\n• After 3 shots or on canceling this ability, you can Leap to a target location\n• Hitting a chained enemy a second time increases the Vortex strength\n• If a chained enemy reaches the Paolao, they are Stunned and take Physical Damage\n• Enemies near the Paolao also take Physical Damage every 0.25s\n• You are CC Immune while using this ability',
          cooldown: '120s',
          cost: '50',
          attributes: [
            { label: 'Chain/Stun Damage', value: '100 | 125 | 150 | 175 | 200' },
            { label: 'Damage Scaling', value: '60% Strength' },
            { label: 'Damage Per Tick', value: '10 | 15 | 20 | 25 | 30' },
            { label: 'Damage Scaling Per Tick', value: '5% Strength' },
            { label: 'Stun Duration', value: '0.5s' },
            { label: 'Range', value: '12.8m' },
            { label: 'Chain Radius', value: '1.6m' },
            { label: 'Pulse Radius', value: '3.2m' }
          ]
        }
      }
    }
  ],
  recommendedBuilds: []
};