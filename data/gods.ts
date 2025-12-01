

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
  image: 'https://image2url.com/images/1764570497013-27d02df0-5702-47db-a76c-e795d4dc6a2f.webp', // Add god portrait image URL
  videoGuideUrl: 'https://www.youtube.com/watch?v=MQJTU3mQsNY', // Add YouTube URL when available
  goodAgainst: [],
  badAgainst: [],
  levelingOrder: [],
  statsByLevel: [
   { strength: 0, intelligence: 0, attackSpeed: 1, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 19, magicalProtection: 28, maxHealth: 622, healthRegen: 2, maxMana: 296, manaRegen: 2, cooldownRate: 0, movementSpeed: 442 },
   { strength: 0, intelligence: 0, attackSpeed: 3, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 22, magicalProtection: 29, maxHealth: 720, healthRegen: 2, maxMana: 338, manaRegen: 2, cooldownRate: 0, movementSpeed: 442 },
   { strength: 0, intelligence: 0, attackSpeed: 4, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 25, magicalProtection: 30, maxHealth: 818, healthRegen: 2, maxMana: 380, manaRegen: 3, cooldownRate: 0, movementSpeed: 442 },
   { strength: 0, intelligence: 0, attackSpeed: 6, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 28, magicalProtection: 32, maxHealth: 915, healthRegen: 2, maxMana: 422, manaRegen: 3, cooldownRate: 0, movementSpeed: 442 },
   { strength: 0, intelligence: 0, attackSpeed: 7, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 31, magicalProtection: 34, maxHealth: 1012, healthRegen: 3, maxMana: 464, manaRegen: 3, cooldownRate: 0, movementSpeed: 442 },
   { strength: 0, intelligence: 0, attackSpeed: 9, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 34, magicalProtection: 35, maxHealth: 1110, healthRegen: 3, maxMana: 506, manaRegen: 4, cooldownRate: 0, movementSpeed: 442 },
   { strength: 0, intelligence: 0, attackSpeed: 10, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 37, magicalProtection: 36, maxHealth: 1208, healthRegen: 3, maxMana: 548, manaRegen: 4, cooldownRate: 0, movementSpeed: 442 },
   { strength: 0, intelligence: 0, attackSpeed: 12, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 40, magicalProtection: 38, maxHealth: 1305, healthRegen: 3, maxMana: 590, manaRegen: 4, cooldownRate: 0, movementSpeed: 442 },
   { strength: 0, intelligence: 0, attackSpeed: 13, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 43, magicalProtection: 40, maxHealth: 1402, healthRegen: 3, maxMana: 632, manaRegen: 4, cooldownRate: 0, movementSpeed: 442 },
   { strength: 0, intelligence: 0, attackSpeed: 15, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 46, magicalProtection: 41, maxHealth: 1500, healthRegen: 4, maxMana: 674, manaRegen: 4, cooldownRate: 0, movementSpeed: 442 },
   { strength: 0, intelligence: 0, attackSpeed: 16, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 49, magicalProtection: 42, maxHealth: 1598, healthRegen: 4, maxMana: 716, manaRegen: 5, cooldownRate: 0, movementSpeed: 442 },
   { strength: 0, intelligence: 0, attackSpeed: 17, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 52, magicalProtection: 44, maxHealth: 1695, healthRegen: 4, maxMana: 758, manaRegen: 5, cooldownRate: 0, movementSpeed: 442 },
   { strength: 0, intelligence: 0, attackSpeed: 19, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 55, magicalProtection: 46, maxHealth: 1792, healthRegen: 4, maxMana: 800, manaRegen: 5, cooldownRate: 0, movementSpeed: 442 },
   { strength: 0, intelligence: 0, attackSpeed: 20, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 58, magicalProtection: 47, maxHealth: 1890, healthRegen: 4, maxMana: 842, manaRegen: 6, cooldownRate: 0, movementSpeed: 442 },
   { strength: 0, intelligence: 0, attackSpeed: 22, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 61, magicalProtection: 48, maxHealth: 1988, healthRegen: 5, maxMana: 884, manaRegen: 6, cooldownRate: 0, movementSpeed: 442 },
   { strength: 0, intelligence: 0, attackSpeed: 23, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 64, magicalProtection: 50, maxHealth: 2085, healthRegen: 5, maxMana: 926, manaRegen: 6, cooldownRate: 0, movementSpeed: 442 },
   { strength: 0, intelligence: 0, attackSpeed: 25, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 67, magicalProtection: 52, maxHealth: 2182, healthRegen: 5, maxMana: 968, manaRegen: 6, cooldownRate: 0, movementSpeed: 442 },
   { strength: 0, intelligence: 0, attackSpeed: 26, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 70, magicalProtection: 53, maxHealth: 2280, healthRegen: 5, maxMana: 1010, manaRegen: 6, cooldownRate: 0, movementSpeed: 442 },
   { strength: 0, intelligence: 0, attackSpeed: 28, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 73, magicalProtection: 54, maxHealth: 2378, healthRegen: 6, maxMana: 1052, manaRegen: 7, cooldownRate: 0, movementSpeed: 442 },
   { strength: 0, intelligence: 0, attackSpeed: 29, lifesteal: 0, critChance: 0, critDamage: 1.65, penetration: 0, physicalProtection: 76, magicalProtection: 56, maxHealth: 2475, healthRegen: 6, maxMana: 1094, manaRegen: 7, cooldownRate: 0, movementSpeed: 442 },
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
      attributes: [], // Shared stats moved to subAbilities
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