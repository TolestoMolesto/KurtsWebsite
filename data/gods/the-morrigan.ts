import { God, DamageType } from '../../types';

export const THE_MORRIGAN: God = {
  id: 'the-morrigan',
  name: 'The Morrigan',
  title: 'Phantom Queen',
  pantheon: 'Celtic',
  role: 'Mage',
  lanes: ['Mid', 'Jungle'],
  damageType: DamageType.Magical,
  image: '',
  videoGuideUrl: '',
  goodAgainst: [],
  badAgainst: [],
  levelingOrder: [],
  statsByLevel: [
    // Level 1
    { strength: 0, intelligence: 0, inhandPower: 46.08, baseAttackSpeed: 0.9672, attackSpeedPercent: 1.456, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 17.57, magicalProtection: 27.425, damageMitigation: 0, maxHealth: 575.625, healthRegen: 1.7, maxMana: 296, manaRegen: 2.34, cooldownRate: 0, movementSpeed: 365, xpRequirement: 0 },
    // Level 2
    { strength: 0, intelligence: 0, inhandPower: 48.48, baseAttackSpeed: 0.9672, attackSpeedPercent: 2.912, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 20.42, magicalProtection: 28.85, damageMitigation: 0, maxHealth: 668.24, healthRegen: 1.9, maxMana: 338, manaRegen: 2.6, cooldownRate: 0, movementSpeed: 365, xpRequirement: 308 },
    // Level 3
    { strength: 0, intelligence: 0, inhandPower: 50.88, baseAttackSpeed: 0.9672, attackSpeedPercent: 4.368, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 23.27, magicalProtection: 30.275, damageMitigation: 0, maxHealth: 760.86, healthRegen: 2.1, maxMana: 380, manaRegen: 2.86, cooldownRate: 0, movementSpeed: 365, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 53.28, baseAttackSpeed: 0.9672, attackSpeedPercent: 5.824, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 26.12, magicalProtection: 31.7, damageMitigation: 0, maxHealth: 853.47, healthRegen: 2.3, maxMana: 422, manaRegen: 3.12, cooldownRate: 0, movementSpeed: 365, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 55.68, baseAttackSpeed: 0.9672, attackSpeedPercent: 7.28, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 28.97, magicalProtection: 33.125, damageMitigation: 0, maxHealth: 946.09, healthRegen: 2.5, maxMana: 464, manaRegen: 3.38, cooldownRate: 0, movementSpeed: 365, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 58.08, baseAttackSpeed: 0.9672, attackSpeedPercent: 8.736, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 31.82, magicalProtection: 34.55, damageMitigation: 0, maxHealth: 1038.70, healthRegen: 2.7, maxMana: 506, manaRegen: 3.64, cooldownRate: 0, movementSpeed: 365, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 60.48, baseAttackSpeed: 0.9672, attackSpeedPercent: 10.192, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 34.67, magicalProtection: 35.975, damageMitigation: 0, maxHealth: 1131.32, healthRegen: 2.9, maxMana: 548, manaRegen: 3.9, cooldownRate: 0, movementSpeed: 365, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 62.88, baseAttackSpeed: 0.9672, attackSpeedPercent: 11.648, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 37.52, magicalProtection: 37.4, damageMitigation: 0, maxHealth: 1223.93, healthRegen: 3.1, maxMana: 590, manaRegen: 4.16, cooldownRate: 0, movementSpeed: 365, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 65.28, baseAttackSpeed: 0.9672, attackSpeedPercent: 13.104, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 40.37, magicalProtection: 38.825, damageMitigation: 0, maxHealth: 1316.55, healthRegen: 3.3, maxMana: 632, manaRegen: 4.42, cooldownRate: 0, movementSpeed: 365, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 67.68, baseAttackSpeed: 0.9672, attackSpeedPercent: 14.56, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 43.22, magicalProtection: 40.25, damageMitigation: 0, maxHealth: 1409.16, healthRegen: 3.5, maxMana: 674, manaRegen: 4.68, cooldownRate: 0, movementSpeed: 365, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 70.08, baseAttackSpeed: 0.9672, attackSpeedPercent: 16.016, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 46.07, magicalProtection: 41.675, damageMitigation: 0, maxHealth: 1501.78, healthRegen: 3.7, maxMana: 716, manaRegen: 4.94, cooldownRate: 0, movementSpeed: 365, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 72.48, baseAttackSpeed: 0.9672, attackSpeedPercent: 17.472, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 48.92, magicalProtection: 43.1, damageMitigation: 0, maxHealth: 1594.39, healthRegen: 3.9, maxMana: 758, manaRegen: 5.2, cooldownRate: 0, movementSpeed: 365, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 74.88, baseAttackSpeed: 0.9672, attackSpeedPercent: 18.928, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 51.77, magicalProtection: 44.525, damageMitigation: 0, maxHealth: 1687.01, healthRegen: 4.1, maxMana: 800, manaRegen: 5.46, cooldownRate: 0, movementSpeed: 365, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 77.28, baseAttackSpeed: 0.9672, attackSpeedPercent: 20.384, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 54.62, magicalProtection: 45.95, damageMitigation: 0, maxHealth: 1779.62, healthRegen: 4.3, maxMana: 842, manaRegen: 5.72, cooldownRate: 0, movementSpeed: 365, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 79.68, baseAttackSpeed: 0.9672, attackSpeedPercent: 21.84, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 57.47, magicalProtection: 47.375, damageMitigation: 0, maxHealth: 1872.24, healthRegen: 4.5, maxMana: 884, manaRegen: 5.98, cooldownRate: 0, movementSpeed: 365, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 82.08, baseAttackSpeed: 0.9672, attackSpeedPercent: 23.296, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 60.32, magicalProtection: 48.8, damageMitigation: 0, maxHealth: 1964.85, healthRegen: 4.7, maxMana: 926, manaRegen: 6.24, cooldownRate: 0, movementSpeed: 365, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 84.48, baseAttackSpeed: 0.9672, attackSpeedPercent: 24.752, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 63.17, magicalProtection: 50.225, damageMitigation: 0, maxHealth: 2057.47, healthRegen: 4.9, maxMana: 968, manaRegen: 6.5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 86.88, baseAttackSpeed: 0.9672, attackSpeedPercent: 26.208, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 66.02, magicalProtection: 51.65, damageMitigation: 0, maxHealth: 2150.08, healthRegen: 5.1, maxMana: 1010, manaRegen: 6.76, cooldownRate: 0, movementSpeed: 365, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 89.28, baseAttackSpeed: 0.9672, attackSpeedPercent: 27.664, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 68.87, magicalProtection: 53.075, damageMitigation: 0, maxHealth: 2242.70, healthRegen: 5.3, maxMana: 1052, manaRegen: 7.02, cooldownRate: 0, movementSpeed: 365, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 91.68, baseAttackSpeed: 0.9672, attackSpeedPercent: 29.12, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 71.72, magicalProtection: 54.5, damageMitigation: 0, maxHealth: 2335.5, healthRegen: 5.5, maxMana: 1094, manaRegen: 7.28, cooldownRate: 0, movementSpeed: 365, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'The Morrigan Basic Attack',
    image: '',
    description: 'Fire a projectile that deals Magical Damage to the first enemy hit.\n\nThe Morrigan has a 3 hit chain. Attacks in an order of 1 / 1 / 1x damage and fire time. The final fire explodes on target, applying Doomsayer.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
      { label: 'Range', value: '8.8m' },
      { label: 'Radius', value: '0.48m' }
    ]
  },
  passive: {
    name: 'Doomsayer',
    image: '',
    description: 'The third hit of your basic attack chain explodes, dealing 9% of the target\'s Health as Magical Damage over 3 seconds. Reduced by 80% against Jungle Bosses and Titans.\n\n• This Damage Over Time can Crit.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage', value: '9% of Target\'s Max Health' },
      { label: 'Duration', value: '3s' },
      { label: 'Radius', value: '2.56m' }
    ]
  },
  abilities: {
    1: {
      name: 'Deadly Aspects',
      image: '',
      description: 'Summon the power from all three of your forms, then activate again to deal Magical Damage and Stun enemies in front of you.\n\n• The buildup for this ability does not break Confusion\'s Stealth',
      cooldown: '12s',
      cost: '60 | 65 | 70 | 75 | 80',
      attributes: [
        { label: 'Damage', value: '90 | 145 | 200 | 255 | 310' },
        { label: 'Damage Scaling', value: '90% Intelligence' },
        { label: 'Stun Duration', value: '0.8s' },
        { label: 'Cone Angle', value: '45 degrees' }
      ]
    },
    2: {
      name: 'Dark Omen',
      image: '',
      description: 'Fire a wave of dark magic, dealing Magical Damage and marking enemies.\n\n• The mark deals bonus Magical Damage when that god is damaged by any god ability or Doomsayer',
      cooldown: '7s',
      cost: '60 | 65 | 70 | 75 | 80',
      attributes: [
        { label: 'Initial Damage', value: '40 | 70 | 100 | 130 | 160' },
        { label: 'Initial Damage Scaling', value: '55% Intelligence' },
        { label: 'Mark Damage', value: '40 | 70 | 100 | 130 | 160' },
        { label: 'Mark Scaling', value: '55% Intelligence' },
        { label: 'Minion Damage', value: '65 | 125 | 185 | 245 | 305' },
        { label: 'Minion Damage Scaling', value: '60% Intelligence' },
        { label: 'Range', value: '11.2m' },
        { label: 'Radius', value: '0.8m' }
      ]
    },
    3: {
      name: 'Confusion',
      image: '',
      description: 'Create a phantom clone of yourself and become Stealthed and gain Movement Speed.\n\n• The clone will walk to your target location\n• When the clone is damaged, it will appear as an illusion. It will change appearance and lose its health bar.\n• The clone grants vision around itself.\n• Taking damage while stealthed breaks the effect.',
      cooldown: '15s',
      cost: '60 | 65 | 70 | 75 | 80',
      attributes: [
        { label: 'Movement Speed', value: '30 | 32.5 | 35 | 37.5 | 40%' },
        { label: 'Buff Duration', value: '3 | 3.5 | 4 | 4.5 | 5s' },
        { label: 'Clone Lifetime', value: '10s' }
      ]
    },
    4: {
      name: 'Changeling',
      image: '',
      description: 'Select a God in the current match to transform into an exact copy of. Gain access to their abilities and items for 10 seconds.\n\n• If the God you transform into has an Ultimate Cooldown longer than this Ultimate\'s Cooldown, use the transformed target\'s Cooldown instead.\n• You will copy all their abilities and items, all with no cooldown.\n• You will copy their ability ranks. If your level is different to the transform target\'s it will use the order they ranked their abilities, filling with Auto Skill as needed.\n• If you are in the middle of firing an ability when the transform times out, you will detransform the moment that ability fire ends.',
      cooldown: '120 | 115 | 110 | 105 | 100s',
      cost: '100',
      attributes: [
        { label: 'Transform Duration', value: '10s' }
      ]
    }
  },
  aspects: [
    {
      id: 'mischief',
      name: 'Aspect of Mischief',
      image: '',
      description: 'Confusion no longer Stealths you but on refire, you swap positions with your clone.',
      basicAttack: {
        name: 'The Morrigan Basic Attack',
        image: '',
        description: 'Fire a projectile that deals Magical Damage to the first enemy hit.\n\nThe Morrigan has a 3 hit chain. Attacks in an order of 1 / 1 / 1x damage and fire time. The final fire explodes on target, applying Doomsayer.',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
          { label: 'Range', value: '8.8m' },
          { label: 'Radius', value: '0.48m' }
        ]
      },
      passive: {
        name: 'Doomsayer',
        image: '',
        description: 'The third hit of your basic attack chain explodes, dealing 9% of the target\'s Health as Magical Damage over 3 seconds. Reduced by 80% against Jungle Bosses and Titans.\n\n• This Damage Over Time can Crit.',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Damage', value: '9% of Target\'s Max Health' },
          { label: 'Duration', value: '3s' },
          { label: 'Radius', value: '2.56m' }
        ]
      },
      abilities: {
        1: {
          name: 'Deadly Aspects',
          image: '',
          description: 'Summon the power from all three of your forms, then activate again to deal Magical Damage and Stun enemies in front of you.\n\n• The buildup for this ability does not break Confusion\'s Stealth',
          cooldown: '12s',
          cost: '60 | 65 | 70 | 75 | 80',
          attributes: [
            { label: 'Damage', value: '90 | 145 | 200 | 255 | 310' },
            { label: 'Damage Scaling', value: '90% Intelligence' },
            { label: 'Stun Duration', value: '0.8s' },
            { label: 'Cone Angle', value: '45 degrees' }
          ]
        },
        2: {
          name: 'Dark Omen',
          image: '',
          description: 'Fire a wave of dark magic, dealing Magical Damage and marking enemies.\n\n• The mark deals bonus Magical Damage when that god is damaged by any god ability or Doomsayer',
          cooldown: '7s',
          cost: '60 | 65 | 70 | 75 | 80',
          attributes: [
            { label: 'Initial Damage', value: '40 | 70 | 100 | 130 | 160' },
            { label: 'Initial Damage Scaling', value: '55% Intelligence' },
            { label: 'Mark Damage', value: '40 | 70 | 100 | 130 | 160' },
            { label: 'Mark Scaling', value: '55% Intelligence' },
            { label: 'Minion Damage', value: '65 | 125 | 185 | 245 | 305' },
            { label: 'Minion Damage Scaling', value: '60% Intelligence' },
            { label: 'Range', value: '11.2m' },
            { label: 'Radius', value: '0.8m' }
          ]
        },
        3: {
          name: 'Confusion',
          image: '',
          description: 'Create a phantom clone of yourself and gain Movement Speed.\n\n• The clone will walk to your target location\n• Refire this ability to swap positions with the clone\n• When the clone is damaged, it will appear as an illusion. It will change appearance and lose its health bar.\n• The clone grants vision around itself.\n• NO LONGER GRANTS STEALTH',
          cooldown: '17 | 16.5 | 16 | 15.5 | 15s',
          cost: '60 | 65 | 70 | 75 | 80',
          attributes: [
            { label: 'Movement Speed', value: '30%' },
            { label: 'Buff Duration', value: '3s' },
            { label: 'Clone Lifetime', value: '10s' }
          ]
        },
        4: {
          name: 'Changeling',
          image: '',
          description: 'Select a God in the current match to transform into an exact copy of. Gain access to their abilities and items for 10 seconds.\n\n• If the God you transform into has an Ultimate Cooldown longer than this Ultimate\'s Cooldown, use the transformed target\'s Cooldown instead.\n• You will copy all their abilities and items, all with no cooldown.\n• You will copy their ability ranks. If your level is different to the transform target\'s it will use the order they ranked their abilities, filling with Auto Skill as needed.\n• If you are in the middle of firing an ability when the transform times out, you will detransform the moment that ability fire ends.',
          cooldown: '120 | 115 | 110 | 105 | 100s',
          cost: '100',
          attributes: [
            { label: 'Transform Duration', value: '10s' }
          ]
        }
      }
    }
  ],
  recommendedBuilds: []
};