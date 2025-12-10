import { God, DamageType } from '../../types';

export const FENRIR: God = {
  id: 'fenrir',
  name: 'Fenrir',
  title: 'The Unbound',
  pantheon: 'Norse',
  role: 'Assassin',
  lanes: ['Jungle', 'Solo'],
  damageType: DamageType.Physical,
  image: '',
  videoGuideUrl: '',
  goodAgainst: [],
  badAgainst: [],
  levelingOrder: [],
  statsByLevel: [
    // Level 1
    { strength: 0, intelligence: 0, inhandPower: 44.4, baseAttackSpeed: 1.0, attackSpeedPercent: 1.456, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 19, magicalProtection: 27.5, damageMitigation: 0, maxHealth: 622.5, healthRegen: 1.7, maxMana: 296, manaRegen: 2.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 0 },
    // Level 2
    { strength: 0, intelligence: 0, inhandPower: 46.8, baseAttackSpeed: 1.0, attackSpeedPercent: 2.912, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 22, magicalProtection: 29, damageMitigation: 0, maxHealth: 720, healthRegen: 1.9, maxMana: 338, manaRegen: 2.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 308 },
    // Level 3
    { strength: 0, intelligence: 0, inhandPower: 49.2, baseAttackSpeed: 1.0, attackSpeedPercent: 4.368, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 25, magicalProtection: 30.5, damageMitigation: 0, maxHealth: 817.5, healthRegen: 2.1, maxMana: 380, manaRegen: 2.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 51.6, baseAttackSpeed: 1.0, attackSpeedPercent: 5.824, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 28, magicalProtection: 32, damageMitigation: 0, maxHealth: 915, healthRegen: 2.3, maxMana: 422, manaRegen: 3, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 54, baseAttackSpeed: 1.0, attackSpeedPercent: 7.28, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 31, magicalProtection: 33.5, damageMitigation: 0, maxHealth: 1012.5, healthRegen: 2.5, maxMana: 464, manaRegen: 3.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 56.4, baseAttackSpeed: 1.0, attackSpeedPercent: 8.736, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 34, magicalProtection: 35, damageMitigation: 0, maxHealth: 1110, healthRegen: 2.7, maxMana: 506, manaRegen: 3.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 58.8, baseAttackSpeed: 1.0, attackSpeedPercent: 10.192, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 37, magicalProtection: 36.5, damageMitigation: 0, maxHealth: 1207.5, healthRegen: 2.9, maxMana: 548, manaRegen: 3.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 61.2, baseAttackSpeed: 1.0, attackSpeedPercent: 11.648, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 40, magicalProtection: 38, damageMitigation: 0, maxHealth: 1305, healthRegen: 3.1, maxMana: 590, manaRegen: 4, cooldownRate: 0, movementSpeed: 375, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 63.6, baseAttackSpeed: 1.0, attackSpeedPercent: 13.104, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 43, magicalProtection: 39.5, damageMitigation: 0, maxHealth: 1402.5, healthRegen: 3.3, maxMana: 632, manaRegen: 4.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 66, baseAttackSpeed: 1.0, attackSpeedPercent: 14.56, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 46, magicalProtection: 41, damageMitigation: 0, maxHealth: 1500, healthRegen: 3.5, maxMana: 674, manaRegen: 4.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 68.4, baseAttackSpeed: 1.0, attackSpeedPercent: 16.016, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 49, magicalProtection: 42.5, damageMitigation: 0, maxHealth: 1597.5, healthRegen: 3.7, maxMana: 716, manaRegen: 4.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 70.8, baseAttackSpeed: 1.0, attackSpeedPercent: 17.472, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 52, magicalProtection: 44, damageMitigation: 0, maxHealth: 1695, healthRegen: 3.9, maxMana: 758, manaRegen: 5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 73.2, baseAttackSpeed: 1.0, attackSpeedPercent: 18.928, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 55, magicalProtection: 45.5, damageMitigation: 0, maxHealth: 1792.5, healthRegen: 4.1, maxMana: 800, manaRegen: 5.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 75.6, baseAttackSpeed: 1.0, attackSpeedPercent: 20.384, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 58, magicalProtection: 47, damageMitigation: 0, maxHealth: 1890, healthRegen: 4.3, maxMana: 842, manaRegen: 5.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 78, baseAttackSpeed: 1.0, attackSpeedPercent: 21.84, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 61, magicalProtection: 48.5, damageMitigation: 0, maxHealth: 1987.5, healthRegen: 4.5, maxMana: 884, manaRegen: 5.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 80.4, baseAttackSpeed: 1.0, attackSpeedPercent: 23.296, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 64, magicalProtection: 50, damageMitigation: 0, maxHealth: 2085, healthRegen: 4.7, maxMana: 926, manaRegen: 6, cooldownRate: 0, movementSpeed: 375, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 82.8, baseAttackSpeed: 1.0, attackSpeedPercent: 24.752, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 67, magicalProtection: 51.5, damageMitigation: 0, maxHealth: 2182.5, healthRegen: 4.9, maxMana: 968, manaRegen: 6.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 85.2, baseAttackSpeed: 1.0, attackSpeedPercent: 26.208, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 70, magicalProtection: 53, damageMitigation: 0, maxHealth: 2280, healthRegen: 5.1, maxMana: 1010, manaRegen: 6.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 87.6, baseAttackSpeed: 1.0, attackSpeedPercent: 27.664, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 73, magicalProtection: 54.5, damageMitigation: 0, maxHealth: 2377.5, healthRegen: 5.3, maxMana: 1052, manaRegen: 6.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 90, baseAttackSpeed: 1.0, attackSpeedPercent: 29.12, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 76, magicalProtection: 56, damageMitigation: 0, maxHealth: 2475, healthRegen: 5.5, maxMana: 1094, manaRegen: 7, cooldownRate: 0, movementSpeed: 375, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'Fenrir Basic Attack',
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
    name: 'Unbound Runes',
    image: '',
    description: 'Your Runes are activated by successful basic attacks, or by activating abilities. You activate 5 Runes on killing an enemy god.\n\nAt five Runes your next Ability becomes Empowered and gains an additional effect.',
    cooldown: '-',
    cost: '-',
    attributes: []
  },
  abilities: {
    1: {
      name: 'Unchained',
      image: '',
      description: 'Savagely Leap forward, dealing Physical Damage when you land.\n\n• When Empowered, Stun all enemies in the area, then remove all Runes\n• If not Empowered, gain 3 Runes\n\nHitting an enemy god reduces the Cooldown of this ability by 30%.',
      cooldown: '15s',
      cost: '50 | 55 | 60 | 65 | 70',
      attributes: [
        { label: 'Damage', value: '85 | 145 | 205 | 265 | 325' },
        { label: 'Damage Scaling', value: '85% Strength + 30% Physical Protection + 30% Magical Protection' },
        { label: 'Stun Duration (Empowered)', value: '0.75s' },
        { label: 'Range', value: '8.8m' },
        { label: 'Radius', value: '2.4m' }
      ]
    },
    2: {
      name: 'Seething Howl',
      image: '',
      description: 'Unleash a howl, gaining increased Strength, Attack Speed, and Lifesteal.\n\n• Gain 2 Runes',
      cooldown: '13s',
      cost: '60 | 65 | 70 | 75 | 80',
      attributes: [
        { label: 'Strength', value: '15 | 20 | 25 | 30 | 35' },
        { label: 'Attack Speed', value: '20 | 22.5 | 25 | 27.5 | 30%' },
        { label: 'Lifesteal', value: '8 | 8.5 | 9 | 9.5 | 10%' },
        { label: 'Buff Duration', value: '6s' }
      ]
    },
    3: {
      name: 'Brutalize',
      image: '',
      description: 'Gain Protections, Leap forward, and grab onto an enemy, dealing Physical Damage repeatedly to all nearby enemies.\n\n• You are Displacement Immune while Channeling\n• When Empowered, deal increased Physical Damage repeatedly instead, then all Runes are consumed\n• If not Empowered, gain 1 Rune per successful hit\n• Reduces enemy Healing\n\nThis ability hits 4 times over 1.08 seconds. Gain Physical and Magical Protections while Channeling. This ability can Critically Strike. This ability can trigger both ability and basic attack item effects. Your target is Revealed while you are Channeling.',
      cooldown: '12s',
      cost: '60 | 65 | 70 | 75 | 80',
      attributes: [
        { label: 'Damage', value: '40 | 65 | 90 | 115 | 140' },
        { label: 'Damage Scaling', value: '45% Strength' },
        { label: 'Increased Damage Scaling (Empowered)', value: '60% Strength' },
        { label: 'Physical Protection', value: '5 + 2 Per Level' },
        { label: 'Magical Protection', value: '5 + 2 Per Level' },
        { label: 'Healing Reduction', value: '25%' },
        { label: 'Range', value: '4.8m' },
        { label: 'Radius', value: '1.6m' }
      ]
    },
    4: {
      name: 'Ragnarok',
      image: '',
      description: 'Grow massive in size, and your next basic attack deals Physical Damage and can Pick Up an enemy god and carry them to any position.\n\n• Gain increased Movement Speed, Physical Protection, and Magical Protection and become CC Immune while massive',
      cooldown: '110s',
      cost: '100',
      attributes: [
        { label: 'Damage', value: '200 | 275 | 350 | 425 | 500' },
        { label: 'Damage Scaling', value: '115% Strength' },
        { label: 'Movement Speed', value: '75%' },
        { label: 'Physical Protection', value: '20 | 25 | 30 | 35 | 40 + 15% Physical Protections' },
        { label: 'Magical Protection', value: '20 | 25 | 30 | 35 | 40 + 15% Magical Protections' },
        { label: 'Buff Duration', value: '4s' },
        { label: 'Grab Duration', value: '1.75s' },
        { label: 'Cone Angle', value: '120 degrees' }
      ]
    }
  },
  aspects: [
    {
      id: 'loyalty',
      name: 'Aspect of Loyalty',
      image: '',
      description: 'Unchained gains additional Protection Scaling and Stun Duration. Seething Howl applies to all allies in the area around him, and their Lifesteal Heals Fenrir, but the Strength it provides is decreased. Brutalize deals less damage but applies a stacking Slow, provides increased Protections, and the Protections persist afterwards.',
      basicAttack: {
        name: 'Fenrir Basic Attack',
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
        name: 'Unbound Runes',
        image: '',
        description: 'Your Runes are activated by successful basic attacks, or by activating abilities. You activate 5 Runes on killing an enemy god.\n\nAt five Runes your next Ability becomes Empowered and gains an additional effect.',
        cooldown: '-',
        cost: '-',
        attributes: []
      },
      abilities: {
        1: {
          name: 'Unchained',
          image: '',
          description: 'Savagely Leap forward, dealing Physical Damage when you land.\n\n• When Empowered, Stun all enemies in the area, then remove all Runes\n• If not Empowered, gain 3 Runes\n• INCREASED PROTECTION SCALING AND STUN DURATION\n\nHitting an enemy god reduces the Cooldown of this ability by 30%.',
          cooldown: '15s',
          cost: '50 | 55 | 60 | 65 | 70',
          attributes: [
            { label: 'Damage', value: '85 | 145 | 205 | 265 | 325' },
            { label: 'Damage Scaling', value: '85% Strength + 45% Physical Protection + 45% Magical Protection' },
            { label: 'Stun Duration (Empowered)', value: '1s' },
            { label: 'Range', value: '8.8m' },
            { label: 'Radius', value: '2.4m' }
          ]
        },
        2: {
          name: 'Seething Howl',
          image: '',
          description: 'Unleash a howl, providing increased Strength, Attack Speed, and Lifesteal to yourself and nearby allies.\n\n• Gain 2 Runes\n• Buffed allies heal Fenrir for 30% of their healing from lifesteal\n• STRENGTH IS DECREASED BUT APPLIES TO ALL ALLIES IN AN AREA',
          cooldown: '13s',
          cost: '60 | 65 | 70 | 75 | 80',
          attributes: [
            { label: 'Strength', value: '15 | 17.5 | 20 | 22.5 | 25' },
            { label: 'Attack Speed', value: '20 | 22.5 | 25 | 27.5 | 30%' },
            { label: 'Lifesteal', value: '8 | 8.5 | 9 | 9.5 | 10%' },
            { label: 'Buff Duration', value: '6s' },
            { label: 'Radius', value: '6m' },
            { label: 'Ally Lifesteal Heal', value: '30%' }
          ]
        },
        3: {
          name: 'Brutalize',
          image: '',
          description: 'Gain Protections, Leap forward, and grab onto an enemy, dealing Physical Damage repeatedly to all nearby enemies.\n\n• You are Displacement Immune while Channeling\n• When Empowered, deal increased Physical Damage repeatedly instead, then all Runes are consumed\n• If not Empowered, gain 1 Rune per successful hit\n• Reduces enemy Healing\n• DEALS LESS DAMAGE BUT APPLIES A STACKING SLOW\n• PROVIDES INCREASED PROTECTIONS THAT PERSIST AFTERWARDS\n\nThis ability hits 4 times over 1.08 seconds. Gain Physical and Magical Protections while Channeling and for 3s afterwards. This ability can Critically Strike. This ability can trigger both ability and basic attack item effects. Your target is Revealed while you are Channeling.',
          cooldown: '12s',
          cost: '60 | 65 | 70 | 75 | 80',
          attributes: [
            { label: 'Damage', value: '20 | 35 | 50 | 65 | 80' },
            { label: 'Damage Scaling', value: '20% Strength' },
            { label: 'Increased Damage Scaling (Empowered)', value: '40% Strength' },
            { label: 'Slow', value: '15%' },
            { label: 'Physical Protection', value: '7 | 14 | 21 | 28 | 35 + 2.5 Per Level' },
            { label: 'Magical Protection', value: '7 | 14 | 21 | 28 | 35 + 2.5 Per Level' },
            { label: 'Healing Reduction', value: '25%' },
            { label: 'Range', value: '4.8m' },
            { label: 'Radius', value: '1.6m' }
          ]
        },
        4: {
          name: 'Ragnarok',
          image: '',
          description: 'Grow massive in size, and your next basic attack deals Physical Damage and can Pick Up an enemy god and carry them to any position.\n\n• Gain increased Movement Speed, Physical Protection, and Magical Protection and become CC Immune while massive',
          cooldown: '110s',
          cost: '100',
          attributes: [
            { label: 'Damage', value: '200 | 275 | 350 | 425 | 500' },
            { label: 'Damage Scaling', value: '115% Strength' },
            { label: 'Movement Speed', value: '75%' },
            { label: 'Physical Protection', value: '20 | 25 | 30 | 35 | 40 + 15% Physical Protections' },
            { label: 'Magical Protection', value: '20 | 25 | 30 | 35 | 40 + 15% Magical Protections' },
            { label: 'Buff Duration', value: '4s' },
            { label: 'Grab Duration', value: '1.75s' },
            { label: 'Cone Angle', value: '120 degrees' }
          ]
        }
      }
    }
  ],
  recommendedBuilds: []
};