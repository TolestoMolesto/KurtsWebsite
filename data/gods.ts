

import { God, DamageType, GodStats } from '../types';

// Helper function to generate 20 levels of stats based on linear growth
// Used as fallback for gods without manual data
const generateStats = (base: Partial<GodStats>, perLevel: Partial<GodStats>): GodStats[] => {
  const levels: GodStats[] = [];
  const defaultStats: GodStats = {
    strength: 0, intelligence: 0, attackSpeed: 1.0, lifesteal: 0, critChance: 0, critDamage: 1.65,
    penetration: 0, physicalProtection: 0, magicalProtection: 0, maxHealth: 500, healthRegen: 0,
    maxMana: 200, manaRegen: 0, cooldownRate: 0, movementSpeed: 360,
    ...base
  };

  for (let i = 0; i < 20; i++) {
    levels.push({
      strength: defaultStats.strength + ((perLevel.strength || 0) * i),
      intelligence: defaultStats.intelligence + ((perLevel.intelligence || 0) * i),
      attackSpeed: defaultStats.attackSpeed + ((perLevel.attackSpeed || 0) * i),
      lifesteal: defaultStats.lifesteal + ((perLevel.lifesteal || 0) * i),
      critChance: defaultStats.critChance + ((perLevel.critChance || 0) * i),
      critDamage: defaultStats.critDamage + ((perLevel.critDamage || 0) * i),
      penetration: defaultStats.penetration + ((perLevel.penetration || 0) * i),
      physicalProtection: defaultStats.physicalProtection + ((perLevel.physicalProtection || 0) * i),
      magicalProtection: defaultStats.magicalProtection + ((perLevel.magicalProtection || 0) * i),
      maxHealth: defaultStats.maxHealth + ((perLevel.maxHealth || 0) * i),
      healthRegen: defaultStats.healthRegen + ((perLevel.healthRegen || 0) * i),
      maxMana: defaultStats.maxMana + ((perLevel.maxMana || 0) * i),
      manaRegen: defaultStats.manaRegen + ((perLevel.manaRegen || 0) * i),
      cooldownRate: defaultStats.cooldownRate + ((perLevel.cooldownRate || 0) * i),
      movementSpeed: defaultStats.movementSpeed + ((perLevel.movementSpeed || 0) * i),
    });
  }
  return levels;
};

export const GODS: God[] = [
  {
  id: 'achilles',
  name: 'Achilles',
  title: 'Hero of the Trojan War!',
  pantheon: 'Greek',
  role: 'Warrior',
  lanes: ['Solo', 'Jungle'],
  damageType: DamageType.Physical,
  image: 'https://image2url.com/images/1764570497013-27d02df0-5702-47db-a76c-e795d4dc6a2f.webp',
  videoGuideUrl: 'https://www.youtube.com/watch?v=MQJTU3mQsNY',
  goodAgainst: [],
  badAgainst: [],
  levelingOrder: [],
  statsByLevel: [
    // Level 1
    { 
      strength: 0, 
      intelligence: 0, 
      inhandPower: 44.4,
      baseAttackSpeed: 0.97,
      attackSpeedPercent: 0,
      critChance: 0, 
      critDamage: 1.65, 
      flatPenetration: 0,
      percentPenetration: 0, 
      lifesteal: 0,
      physicalProtection: 19, 
      magicalProtection: 27.5, 
      damageMitigation: 0,
      maxHealth: 622.5, 
      healthRegen: 1.77, 
      maxMana: 296, 
      manaRegen: 2.25, 
      cooldownRate: 0, 
      movementSpeed: 375,
      xpRequirement: 0
    },
    // Level 2
    { 
      strength: 0, 
      intelligence: 0, 
      inhandPower: 45.6,
      baseAttackSpeed: 0.97,
      attackSpeedPercent: 1.46,
      critChance: 0, 
      critDamage: 1.65, 
      flatPenetration: 0,
      percentPenetration: 0, 
      lifesteal: 0,
      physicalProtection: 20.5, 
      magicalProtection: 28.25, 
      damageMitigation: 0,
      maxHealth: 671.25, 
      healthRegen: 1.88, 
      maxMana: 317, 
      manaRegen: 2.38, 
      cooldownRate: 0, 
      movementSpeed: 375,
      xpRequirement: 150
    },
    // Level 3 - MATCHES YOUR SCREENSHOT
    { 
      strength: 0, 
      intelligence: 0, 
      inhandPower: 46.8,
      baseAttackSpeed: 0.97,
      attackSpeedPercent: 2.91,
      critChance: 0, 
      critDamage: 1.65, 
      flatPenetration: 0,
      percentPenetration: 0, 
      lifesteal: 0,
      physicalProtection: 22, 
      magicalProtection: 29, 
      damageMitigation: 0,
      maxHealth: 720, 
      healthRegen: 1.98, 
      maxMana: 338, 
      manaRegen: 2.5, 
      cooldownRate: 0, 
      movementSpeed: 375,
      xpRequirement: 308
    },
    // Level 4
    { 
      strength: 0, 
      intelligence: 0, 
      inhandPower: 48,
      baseAttackSpeed: 0.97,
      attackSpeedPercent: 4.37,
      critChance: 0, 
      critDamage: 1.65, 
      flatPenetration: 0,
      percentPenetration: 0, 
      lifesteal: 0,
      physicalProtection: 23.5, 
      magicalProtection: 29.75, 
      damageMitigation: 0,
      maxHealth: 768.75, 
      healthRegen: 2.09, 
      maxMana: 359, 
      manaRegen: 2.63, 
      cooldownRate: 0, 
      movementSpeed: 375,
      xpRequirement: 484
    },
    // Level 5
    { 
      strength: 0, 
      intelligence: 0, 
      inhandPower: 49.2,
      baseAttackSpeed: 0.97,
      attackSpeedPercent: 5.83,
      critChance: 0, 
      critDamage: 1.65, 
      flatPenetration: 0,
      percentPenetration: 0, 
      lifesteal: 0,
      physicalProtection: 25, 
      magicalProtection: 30.5, 
      damageMitigation: 0,
      maxHealth: 817.5, 
      healthRegen: 2.19, 
      maxMana: 380, 
      manaRegen: 2.75, 
      cooldownRate: 0, 
      movementSpeed: 375,
      xpRequirement: 678
    },
    // Level 6
    { 
      strength: 0, 
      intelligence: 0, 
      inhandPower: 50.4,
      baseAttackSpeed: 0.97,
      attackSpeedPercent: 7.28,
      critChance: 0, 
      critDamage: 1.65, 
      flatPenetration: 0,
      percentPenetration: 0, 
      lifesteal: 0,
      physicalProtection: 26.5, 
      magicalProtection: 31.25, 
      damageMitigation: 0,
      maxHealth: 866.25, 
      healthRegen: 2.3, 
      maxMana: 401, 
      manaRegen: 2.88, 
      cooldownRate: 0, 
      movementSpeed: 375,
      xpRequirement: 890
    },
    // Level 7
    { 
      strength: 0, 
      intelligence: 0, 
      inhandPower: 51.6,
      baseAttackSpeed: 0.97,
      attackSpeedPercent: 8.74,
      critChance: 0, 
      critDamage: 1.65, 
      flatPenetration: 0,
      percentPenetration: 0, 
      lifesteal: 0,
      physicalProtection: 28, 
      magicalProtection: 32, 
      damageMitigation: 0,
      maxHealth: 915, 
      healthRegen: 2.4, 
      maxMana: 422, 
      manaRegen: 3, 
      cooldownRate: 0, 
      movementSpeed: 375,
      xpRequirement: 1120
    },
    // Level 8
    { 
      strength: 0, 
      intelligence: 0, 
      inhandPower: 52.8,
      baseAttackSpeed: 0.97,
      attackSpeedPercent: 10.19,
      critChance: 0, 
      critDamage: 1.65, 
      flatPenetration: 0,
      percentPenetration: 0, 
      lifesteal: 0,
      physicalProtection: 29.5, 
      magicalProtection: 32.75, 
      damageMitigation: 0,
      maxHealth: 963.75, 
      healthRegen: 2.51, 
      maxMana: 443, 
      manaRegen: 3.13, 
      cooldownRate: 0, 
      movementSpeed: 375,
      xpRequirement: 1368
    },
    // Level 9
    { 
      strength: 0, 
      intelligence: 0, 
      inhandPower: 54,
      baseAttackSpeed: 0.97,
      attackSpeedPercent: 11.65,
      critChance: 0, 
      critDamage: 1.65, 
      flatPenetration: 0,
      percentPenetration: 0, 
      lifesteal: 0,
      physicalProtection: 31, 
      magicalProtection: 33.5, 
      damageMitigation: 0,
      maxHealth: 1012.5, 
      healthRegen: 2.61, 
      maxMana: 464, 
      manaRegen: 3.25, 
      cooldownRate: 0, 
      movementSpeed: 375,
      xpRequirement: 1634
    },
    // Level 10
    { 
      strength: 0, 
      intelligence: 0, 
      inhandPower: 55.2,
      baseAttackSpeed: 0.97,
      attackSpeedPercent: 13.1,
      critChance: 0, 
      critDamage: 1.65, 
      flatPenetration: 0,
      percentPenetration: 0, 
      lifesteal: 0,
      physicalProtection: 32.5, 
      magicalProtection: 34.25, 
      damageMitigation: 0,
      maxHealth: 1061.25, 
      healthRegen: 2.72, 
      maxMana: 485, 
      manaRegen: 3.38, 
      cooldownRate: 0, 
      movementSpeed: 375,
      xpRequirement: 1918
    },
    // Level 11
    { 
      strength: 0, 
      intelligence: 0, 
      inhandPower: 56.4,
      baseAttackSpeed: 0.97,
      attackSpeedPercent: 14.56,
      critChance: 0, 
      critDamage: 1.65, 
      flatPenetration: 0,
      percentPenetration: 0, 
      lifesteal: 0,
      physicalProtection: 34, 
      magicalProtection: 35, 
      damageMitigation: 0,
      maxHealth: 1110, 
      healthRegen: 2.82, 
      maxMana: 506, 
      manaRegen: 3.5, 
      cooldownRate: 0, 
      movementSpeed: 375,
      xpRequirement: 2220
    },
    // Level 12
    { 
      strength: 0, 
      intelligence: 0, 
      inhandPower: 57.6,
      baseAttackSpeed: 0.97,
      attackSpeedPercent: 16.01,
      critChance: 0, 
      critDamage: 1.65, 
      flatPenetration: 0,
      percentPenetration: 0, 
      lifesteal: 0,
      physicalProtection: 35.5, 
      magicalProtection: 35.75, 
      damageMitigation: 0,
      maxHealth: 1158.75, 
      healthRegen: 2.93, 
      maxMana: 527, 
      manaRegen: 3.63, 
      cooldownRate: 0, 
      movementSpeed: 375,
      xpRequirement: 2540
    },
    // Level 13
    { 
      strength: 0, 
      intelligence: 0, 
      inhandPower: 58.8,
      baseAttackSpeed: 0.97,
      attackSpeedPercent: 17.47,
      critChance: 0, 
      critDamage: 1.65, 
      flatPenetration: 0,
      percentPenetration: 0, 
      lifesteal: 0,
      physicalProtection: 37, 
      magicalProtection: 36.5, 
      damageMitigation: 0,
      maxHealth: 1207.5, 
      healthRegen: 3.03, 
      maxMana: 548, 
      manaRegen: 3.75, 
      cooldownRate: 0, 
      movementSpeed: 375,
      xpRequirement: 2878
    },
    // Level 14
    { 
      strength: 0, 
      intelligence: 0, 
      inhandPower: 60,
      baseAttackSpeed: 0.97,
      attackSpeedPercent: 18.92,
      critChance: 0, 
      critDamage: 1.65, 
      flatPenetration: 0,
      percentPenetration: 0, 
      lifesteal: 0,
      physicalProtection: 38.5, 
      magicalProtection: 37.25, 
      damageMitigation: 0,
      maxHealth: 1256.25, 
      healthRegen: 3.14, 
      maxMana: 569, 
      manaRegen: 3.88, 
      cooldownRate: 0, 
      movementSpeed: 375,
      xpRequirement: 3234
    },
    // Level 15
    { 
      strength: 0, 
      intelligence: 0, 
      inhandPower: 61.2,
      baseAttackSpeed: 0.97,
      attackSpeedPercent: 20.38,
      critChance: 0, 
      critDamage: 1.65, 
      flatPenetration: 0,
      percentPenetration: 0, 
      lifesteal: 0,
      physicalProtection: 40, 
      magicalProtection: 38, 
      damageMitigation: 0,
      maxHealth: 1305, 
      healthRegen: 3.24, 
      maxMana: 590, 
      manaRegen: 4, 
      cooldownRate: 0, 
      movementSpeed: 375,
      xpRequirement: 3608
    },
    // Level 16
    { 
      strength: 0, 
      intelligence: 0, 
      inhandPower: 62.4,
      baseAttackSpeed: 0.97,
      attackSpeedPercent: 21.83,
      critChance: 0, 
      critDamage: 1.65, 
      flatPenetration: 0,
      percentPenetration: 0, 
      lifesteal: 0,
      physicalProtection: 41.5, 
      magicalProtection: 38.75, 
      damageMitigation: 0,
      maxHealth: 1353.75, 
      healthRegen: 3.35, 
      maxMana: 611, 
      manaRegen: 4.13, 
      cooldownRate: 0, 
      movementSpeed: 375,
      xpRequirement: 4000
    },
    // Level 17
    { 
      strength: 0, 
      intelligence: 0, 
      inhandPower: 63.6,
      baseAttackSpeed: 0.97,
      attackSpeedPercent: 23.29,
      critChance: 0, 
      critDamage: 1.65, 
      flatPenetration: 0,
      percentPenetration: 0, 
      lifesteal: 0,
      physicalProtection: 43, 
      magicalProtection: 39.5, 
      damageMitigation: 0,
      maxHealth: 1402.5, 
      healthRegen: 3.45, 
      maxMana: 632, 
      manaRegen: 4.25, 
      cooldownRate: 0, 
      movementSpeed: 375,
      xpRequirement: 4410
    },
    // Level 18
    { 
      strength: 0, 
      intelligence: 0, 
      inhandPower: 64.8,
      baseAttackSpeed: 0.97,
      attackSpeedPercent: 24.74,
      critChance: 0, 
      critDamage: 1.65, 
      flatPenetration: 0,
      percentPenetration: 0, 
      lifesteal: 0,
      physicalProtection: 44.5, 
      magicalProtection: 40.25, 
      damageMitigation: 0,
      maxHealth: 1451.25, 
      healthRegen: 3.56, 
      maxMana: 653, 
      manaRegen: 4.38, 
      cooldownRate: 0, 
      movementSpeed: 375,
      xpRequirement: 4838
    },
    // Level 19
    { 
      strength: 0, 
      intelligence: 0, 
      inhandPower: 66,
      baseAttackSpeed: 0.97,
      attackSpeedPercent: 26.2,
      critChance: 0, 
      critDamage: 1.65, 
      flatPenetration: 0,
      percentPenetration: 0, 
      lifesteal: 0,
      physicalProtection: 46, 
      magicalProtection: 41, 
      damageMitigation: 0,
      maxHealth: 1500, 
      healthRegen: 3.66, 
      maxMana: 674, 
      manaRegen: 4.5, 
      cooldownRate: 0, 
      movementSpeed: 375,
      xpRequirement: 5284
    },
    // Level 20
    { 
      strength: 0, 
      intelligence: 0, 
      inhandPower: 67.2,
      baseAttackSpeed: 0.97,
      attackSpeedPercent: 27.65,
      critChance: 0, 
      critDamage: 1.65, 
      flatPenetration: 0,
      percentPenetration: 0, 
      lifesteal: 0,
      physicalProtection: 47.5, 
      magicalProtection: 41.75, 
      damageMitigation: 0,
      maxHealth: 1548.75, 
      healthRegen: 3.77, 
      maxMana: 695, 
      manaRegen: 4.63, 
      cooldownRate: 0, 
      movementSpeed: 375,
      xpRequirement: 5748
    },
  ],
  basicAttack: {
    name: 'Achilles Basic Attack',
    image: 'https://image2url.com/images/1764570667480-475b7614-c43d-4cbd-a255-e7b1afe0eb6f.webp',
    description: 'Deal Physical Damage to an enemy in front of you.\n\nIf multiple enemies are in the area, the enemy closest to the center of the area will be hit.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
      { label: 'Range', value: '2.56m' },
      { label: 'Cone Angle', value: '120 degrees' }
    ]
  },
  passive: {
    name: 'Gift of the Gods',
    image: 'https://image2url.com/images/1764570709219-d51deb1e-d047-4553-a005-2514ce47d6e0.webp',
    description: 'Choose to wear armor or forgo it. Wearing armor grants bonus Health and Protections, while forgoing it grants bonus Strength and Movement Speed.\n\n• Swap between armor states by using Basic Attacks while the Passive targeter is active inside the Fountain.\n• Your chosen armor state also adds effects to Radiant Glory and Combat Dodge.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Armored Health', value: '25 + 10 Per Level' },
      { label: 'Armored Protections', value: '5 + 2 Per Level' },
      { label: 'Unarmored Strength', value: '3 + 1.5 Per Level' },
      { label: 'Unarmored Movement Speed', value: '1% + 0.25% Per Level' }
    ]
  },
  abilities: {
    1: {
      name: 'Shield of Achilles',
      image: 'https://image2url.com/images/1764570816549-ff2df1c4-8ba5-4b9f-b00b-664d45d5f2b5.webp',
      description: 'Punch forward with your shield, dealing Physical Damage and Stunning enemies in a short cone. The force of the shield radiates further, dealing reduced damage.\n\n• The radiated force deals 80% Damage\n• Non-God targets take 115% Damage\n• Increased Stun duration when Armored, increased Scaling when forgoing your Armor\n\nThis ability can hit through walls.',
      cooldown: '14s',
      cost: '60 | 65 | 70 | 75 | 80',
      attributes: [
        { label: 'Damage', value: '100 | 155 | 210 | 265 | 320' },
        { label: 'Damage Scaling', value: '80% Strength' },
        { label: 'Stun Duration', value: '0.8s' },
        { label: 'Bonus Stun Duration (Armored)', value: '0.2s' },
        { label: 'Bonus Damage Scaling (Unarmored)', value: '15% Strength' },
        { label: 'Cone Angle', value: '80 degrees' },
        { label: 'Small Radius', value: '3.2m' },
        { label: 'Large Radius', value: '8m' }
      ]
    },
    2: {
      name: 'Radiant Glory',
      image: 'https://image2url.com/images/1764570844946-2e816132-5daa-4ce1-bf5a-b6b16ad5fe14.webp',
      description: 'You are blessed by the Gods, gaining bonus Strength, Protections, and Crowd Control Reduction for a short duration. Damaging enemies with abilities during this time Heals you.\n\n• When Armored, the Gods\' blessings also grant you a Physical Shield\n• When forgoing your Armor, hitting an enemy god with your attacks from behind reduces their Protections\n\nYou may only heal up to 4 times per ability hit. Healing 12 times during the buff\'s duration will cause the crowd to cheer for you.',
      cooldown: '9s',
      cost: '40 | 45 | 50 | 55 | 60',
      attributes: [
        { label: 'Strength', value: '10%' },
        { label: 'Protections', value: '20%' },
        { label: 'Crowd Control Reduction', value: '20 | 22.5 | 25 | 27.5 | 30%' },
        { label: 'Buff Duration', value: '6.1s' },
        { label: 'Heal', value: '16 | 18 | 20 | 22 | 24' },
        { label: 'Physical Shield Health (Armored)', value: '50 + 10 Per Level' },
        { label: 'Protections Reduced (Unarmored)', value: '1 Per Level' },
        { label: 'Debuff Duration', value: '3s' }
      ]
    },
    3: {
      name: 'Combat Dodge / Spear Strike',
      image: 'https://image2url.com/images/1764570869616-67bb4644-30dc-4969-a7b6-7f33e97de190.webp',
      description: 'Dodge in your current direction and ready your spear to strike enemies for Physical Damage. Hitting an enemy god with the strike allows you to recast the ability once before it goes on cooldown.\n\n• When Armored, striking an enemy god with your spear Slows them, stacking up to 2 times\n• When forgoing your Armor, the speed of your dodge is doubled\n\nYou can use Abilities and Basic Attacks between dashes. After readying your spear, you have 4 seconds to strike before the ability ends.',
      cooldown: '14 | 13.5 | 13 | 12.5 | 12s',
      cost: '22 | 24 | 26 | 28 | 30',
      attributes: [],
      subAbilities: [
        {
          name: 'Combat Dodge',
          description: 'Dodge in your current direction and ready your spear. When forgoing your Armor, the speed of your dodge is doubled.',
          image: 'https://image2url.com/images/1764570869616-67bb4644-30dc-4969-a7b6-7f33e97de190.webp',
          attributes: [
            { label: 'Dodge Range', value: '3.2m' },
            { label: 'Recast Window', value: '4s' }
          ]
        },
        {
          name: 'Spear Strike',
          description: 'Strike enemies for Physical Damage. Hitting an enemy god allows you to recast the ability once before it goes on cooldown. When Armored, striking an enemy god Slows them, stacking up to 2 times.',
          image: 'https://image2url.com/images/1764601066518-8f3d5991-b4a2-4e6c-aa3b-b52528d7bcfc.webp',
          attributes: [
            { label: 'Damage', value: '65 | 105 | 145 | 185 | 225' },
            { label: 'Damage Scaling', value: '45% Strength' },
            { label: 'Slow (Armored)', value: '7.5% Per Stack' },
            { label: 'Slow Duration', value: '3s' },
            { label: 'Spear Strike Range', value: '5.6m' },
            { label: 'Spear Strike Radius', value: '0.96m' }
          ]
        }
      ]
    },
    4: {
      name: 'Fatal Strike',
      image: 'https://image2url.com/images/1764570929848-f7455f6d-014f-4437-b740-6173e2a9b242.webp',
      description: 'Prepare briefly, then Dash forward, dealing Physical Damage to enemies and Executing gods that are low health. Killing a god allows you to recast this ability up to five times.\n\n• Each kill exposes your heel, increasing your damage taken\n\nThe dash ends early upon hitting an enemy god. You are immune to Crowd Control during the preparation phase, and while Dashing. The preparation before the dash lasts 1 second.',
      cooldown: '90s',
      cost: '60 | 65 | 70 | 75 | 80',
      attributes: [
        { label: 'Damage', value: '180 | 270 | 360 | 450 | 540' },
        { label: 'Damage Scaling', value: '100% Strength' },
        { label: 'Execute Health %', value: '35%' },
        { label: 'Increased Damage Taken', value: '5%' },
        { label: 'Debuff Duration', value: '10s' },
        { label: 'Dash Range', value: '5.6m' },
        { label: 'Dash Radius', value: '0.96m' }
      ]
    }
  },
  aspects: [
    {
      id: 'prowess',
      name: 'Aspect of Prowess',
      image: 'https://image2url.com/images/1764570644431-22b111fe-b122-43dd-b972-e71952f3458e.webp', // Add aspect image URL when available
      description: 'Combat Dodge can now be recast after striking a Jungle Monster or Boss, with Spear Strike gaining increased Scaling when forgoing your Armor. Radiant Glory no longer grants increased Protections or Crowd Control Reduction.',
      basicAttack: {
        name: 'Achilles Basic Attack',
        image: 'https://image2url.com/images/1764570667480-475b7614-c43d-4cbd-a255-e7b1afe0eb6f.webp',
        description: 'Deal Physical Damage to an enemy in front of you.\n\nIf multiple enemies are in the area, the enemy closest to the center of the area will be hit.',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
          { label: 'Range', value: '2.56m' },
          { label: 'Cone Angle', value: '120 degrees' }
        ]
      },
      passive: {
        name: 'Gift of the Gods',
        image: 'https://image2url.com/images/1764570709219-d51deb1e-d047-4553-a005-2514ce47d6e0.webp',
        description: 'Choose to wear armor or forgo it. Wearing armor grants bonus Health and Protections, while forgoing it grants bonus Strength and Movement Speed.\n\n• Swap between armor states by using Basic Attacks while the Passive targeter is active inside the Fountain.\n• Your chosen armor state also adds effects to Radiant Glory and Combat Dodge.',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Armored Health', value: '25 + 10 Per Level' },
          { label: 'Armored Protections', value: '5 + 2 Per Level' },
          { label: 'Unarmored Strength', value: '3 + 1.5 Per Level' },
          { label: 'Unarmored Movement Speed', value: '1% + 0.25% Per Level' }
        ]
      },
      abilities: {
        1: {
          name: 'Shield of Achilles',
          image: 'https://image2url.com/images/1764570816549-ff2df1c4-8ba5-4b9f-b00b-664d45d5f2b5.webp',
          description: 'Punch forward with your shield, dealing Physical Damage and Stunning enemies in a short cone. The force of the shield radiates further, dealing reduced damage.\n\n• The radiated force deals 80% Damage\n• Non-God targets take 115% Damage\n• Increased Stun duration when Armored, increased Scaling when forgoing your Armor\n\nThis ability can hit through walls.',
          cooldown: '14s',
          cost: '60 | 65 | 70 | 75 | 80',
          attributes: [
            { label: 'Damage', value: '100 | 155 | 210 | 265 | 320' },
            { label: 'Damage Scaling', value: '80% Strength' },
            { label: 'Stun Duration', value: '0.8s' },
            { label: 'Bonus Stun Duration (Armored)', value: '0.2s' },
            { label: 'Bonus Damage Scaling (Unarmored)', value: '15% Strength' },
            { label: 'Cone Angle', value: '80 degrees' },
            { label: 'Small Radius', value: '3.2m' },
            { label: 'Large Radius', value: '8m' }
          ]
        },
        2: {
          name: 'Radiant Glory',
          image: 'https://image2url.com/images/1764570844946-2e816132-5daa-4ce1-bf5a-b6b16ad5fe14.webp',
          description: 'You are blessed by the Gods, gaining bonus Strength for a short duration. Damaging enemies with abilities during this time Heals you.\n\n• When Armored, the Gods\' blessings also grant you a Physical Shield\n• When forgoing your Armor, hitting an enemy god with your attacks from behind reduces their Protections\n• NO LONGER GRANTS INCREASED PROTECTIONS OR CROWD CONTROL REDUCTION\n\nYou may only heal up to 4 times per ability hit. Healing 12 times during the buff\'s duration will cause the crowd to cheer for you.',
          cooldown: '9s',
          cost: '40 | 45 | 50 | 55 | 60',
          attributes: [
            { label: 'Strength', value: '10%' },
            { label: 'Buff Duration', value: '6.1s' },
            { label: 'Heal', value: '16 | 18 | 20 | 22 | 24' },
            { label: 'Physical Shield Health (Armored)', value: '50 + 10 Per Level' },
            { label: 'Protections Reduced (Unarmored)', value: '1 Per Level' },
            { label: 'Debuff Duration', value: '3s' }
          ]
        },
        3: {
          name: 'Combat Dodge / Spear Strike',
          image: 'https://image2url.com/images/1764570869616-67bb4644-30dc-4969-a7b6-7f33e97de190.webp',
          description: 'Dodge in your current direction and ready your spear to strike enemies for Physical Damage. Hitting a God or Jungle Monster with the strike allows you to recast the ability once before it goes on cooldown.\n\n• When Armored, striking an enemy god with your spear Slows them, stacking up to 2 times\n• When forgoing your Armor, the speed of your dodge is doubled, AND SPEAR STRIKE HAS INCREASED SCALING\n• CAN NOW RECAST AFTER STRIKING A JUNGLE MONSTER OR BOSS\n\nYou can use Abilities and Basic Attacks between dashes. After readying your spear, you have 4 seconds to strike before the ability ends.',
          cooldown: '14 | 13.5 | 13 | 12.5 | 12s',
          cost: '22 | 24 | 26 | 28 | 30',
          attributes: [],
          subAbilities: [
            {
              name: 'Combat Dodge',
              description: 'Dodge in your current direction and ready your spear. When forgoing your Armor, the speed of your dodge is doubled.',
              image: 'https://image2url.com/images/1764570869616-67bb4644-30dc-4969-a7b6-7f33e97de190.webp',
              attributes: [
                { label: 'Dodge Range', value: '3.2m' },
                { label: 'Recast Window', value: '4s' }
              ]
            },
            {
              name: 'Spear Strike',
              description: 'Strike enemies for Physical Damage. Hitting an enemy god OR JUNGLE MONSTER/BOSS allows you to recast. When Armored, Slows enemies. When forgoing Armor, gains INCREASED SCALING.',
              image: 'https://image2url.com/images/1764601066518-8f3d5991-b4a2-4e6c-aa3b-b52528d7bcfc.webp',
              attributes: [
                { label: 'Damage', value: '65 | 105 | 145 | 185 | 225' },
                { label: 'Damage Scaling', value: '45% Strength or 60% Strength If Foregoing Armor' },
                { label: 'Slow (Armored)', value: '7.5% Per Stack' },
                { label: 'Slow Duration', value: '3s' },
                { label: 'Spear Strike Range', value: '5.6m' },
                { label: 'Spear Strike Radius', value: '0.96m' }
              ]
            }
          ]
        },
        4: {
          name: 'Fatal Strike',
          image: 'https://image2url.com/images/1764570929848-f7455f6d-014f-4437-b740-6173e2a9b242.webp',
          description: 'Prepare briefly, then Dash forward, dealing Physical Damage to enemies and Executing gods that are low health. Killing a god allows you to recast this ability up to five times.\n\n• Each kill exposes your heel, increasing your damage taken\n\nThe dash ends early upon hitting an enemy god. You are immune to Crowd Control during the preparation phase, and while Dashing. The preparation before the dash lasts 1 second.',
          cooldown: '90s',
          cost: '60 | 65 | 70 | 75 | 80',
          attributes: [
            { label: 'Damage', value: '180 | 270 | 360 | 450 | 540' },
            { label: 'Damage Scaling', value: '100% Strength' },
            { label: 'Execute Health %', value: '35%' },
            { label: 'Increased Damage Taken', value: '5%' },
            { label: 'Debuff Duration', value: '10s' },
            { label: 'Dash Range', value: '5.6m' },
            { label: 'Dash Radius', value: '0.96m' }
          ]
        }
      }
    }
  ],
  recommendedBuilds: []
},
];