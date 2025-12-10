import { God, DamageType } from '../../types';

export const SUN_WUKONG: God = {
  id: 'sun-wukong',
  name: 'Sun Wukong',
  title: 'The Monkey King',
  pantheon: 'Chinese',
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
    { strength: 0, intelligence: 0, inhandPower: 43.07, baseAttackSpeed: 0.9579, attackSpeedPercent: 1.44, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 19.57, magicalProtection: 28.32, damageMitigation: 0, maxHealth: 632.16, healthRegen: 1.7, maxMana: 287.12, manaRegen: 2.18, cooldownRate: 0, movementSpeed: 375, xpRequirement: 0 },
    // Level 2
    { strength: 0, intelligence: 0, inhandPower: 45.4, baseAttackSpeed: 0.9579, attackSpeedPercent: 2.88, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 22.66, magicalProtection: 29.87, damageMitigation: 0, maxHealth: 723.58, healthRegen: 1.9, maxMana: 327.86, manaRegen: 2.43, cooldownRate: 0, movementSpeed: 375, xpRequirement: 308 },
    // Level 3
    { strength: 0, intelligence: 0, inhandPower: 47.73, baseAttackSpeed: 0.9579, attackSpeedPercent: 4.33, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 25.75, magicalProtection: 31.42, damageMitigation: 0, maxHealth: 814.99, healthRegen: 2.1, maxMana: 368.6, manaRegen: 2.67, cooldownRate: 0, movementSpeed: 375, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 50.05, baseAttackSpeed: 0.9579, attackSpeedPercent: 5.77, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 28.84, magicalProtection: 32.97, damageMitigation: 0, maxHealth: 906.41, healthRegen: 2.3, maxMana: 409.34, manaRegen: 2.91, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 52.38, baseAttackSpeed: 0.9579, attackSpeedPercent: 7.21, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 31.93, magicalProtection: 34.52, damageMitigation: 0, maxHealth: 997.83, healthRegen: 2.5, maxMana: 450.08, manaRegen: 3.15, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 54.71, baseAttackSpeed: 0.9579, attackSpeedPercent: 8.65, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 35.02, magicalProtection: 36.05, damageMitigation: 0, maxHealth: 1089.25, healthRegen: 2.7, maxMana: 490.82, manaRegen: 3.39, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 57.04, baseAttackSpeed: 0.9579, attackSpeedPercent: 10.09, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 38.11, magicalProtection: 37.6, damageMitigation: 0, maxHealth: 1180.66, healthRegen: 2.9, maxMana: 531.56, manaRegen: 3.64, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 59.36, baseAttackSpeed: 0.9579, attackSpeedPercent: 11.54, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 41.2, magicalProtection: 39.14, damageMitigation: 0, maxHealth: 1272.08, healthRegen: 3.1, maxMana: 572.3, manaRegen: 3.88, cooldownRate: 0, movementSpeed: 375, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 61.69, baseAttackSpeed: 0.9579, attackSpeedPercent: 12.98, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 44.29, magicalProtection: 40.69, damageMitigation: 0, maxHealth: 1363.5, healthRegen: 3.3, maxMana: 613.04, manaRegen: 4.12, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 64.02, baseAttackSpeed: 0.9579, attackSpeedPercent: 14.56, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 47.38, magicalProtection: 42.23, damageMitigation: 0, maxHealth: 1454.92, healthRegen: 3.5, maxMana: 653.78, manaRegen: 4.37, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 66.35, baseAttackSpeed: 0.9579, attackSpeedPercent: 16.02, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 50.47, magicalProtection: 43.78, damageMitigation: 0, maxHealth: 1546.33, healthRegen: 3.7, maxMana: 694.52, manaRegen: 4.61, cooldownRate: 0, movementSpeed: 375, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 68.68, baseAttackSpeed: 0.9579, attackSpeedPercent: 17.47, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 53.56, magicalProtection: 45.32, damageMitigation: 0, maxHealth: 1637.75, healthRegen: 3.9, maxMana: 735.26, manaRegen: 4.85, cooldownRate: 0, movementSpeed: 375, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 71.0, baseAttackSpeed: 0.9579, attackSpeedPercent: 18.93, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 56.65, magicalProtection: 46.87, damageMitigation: 0, maxHealth: 1729.17, healthRegen: 4.1, maxMana: 776.0, manaRegen: 5.09, cooldownRate: 0, movementSpeed: 375, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 73.33, baseAttackSpeed: 0.9579, attackSpeedPercent: 20.38, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 59.74, magicalProtection: 48.41, damageMitigation: 0, maxHealth: 1820.58, healthRegen: 4.3, maxMana: 816.74, manaRegen: 5.34, cooldownRate: 0, movementSpeed: 375, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 75.66, baseAttackSpeed: 0.9579, attackSpeedPercent: 21.63, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 62.83, magicalProtection: 49.96, damageMitigation: 0, maxHealth: 1912.0, healthRegen: 4.5, maxMana: 857.48, manaRegen: 5.58, cooldownRate: 0, movementSpeed: 375, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 77.99, baseAttackSpeed: 0.9579, attackSpeedPercent: 23.07, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 65.92, magicalProtection: 51.5, damageMitigation: 0, maxHealth: 2003.42, healthRegen: 4.7, maxMana: 898.22, manaRegen: 5.82, cooldownRate: 0, movementSpeed: 375, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 80.32, baseAttackSpeed: 0.9579, attackSpeedPercent: 24.51, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 69.01, magicalProtection: 53.05, damageMitigation: 0, maxHealth: 2094.83, healthRegen: 4.9, maxMana: 938.96, manaRegen: 6.06, cooldownRate: 0, movementSpeed: 375, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 82.64, baseAttackSpeed: 0.9579, attackSpeedPercent: 25.96, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 72.1, magicalProtection: 54.59, damageMitigation: 0, maxHealth: 2186.25, healthRegen: 5.1, maxMana: 979.7, manaRegen: 6.31, cooldownRate: 0, movementSpeed: 375, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 84.97, baseAttackSpeed: 0.9579, attackSpeedPercent: 27.4, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 75.19, magicalProtection: 56.14, damageMitigation: 0, maxHealth: 2277.67, healthRegen: 5.3, maxMana: 1020.44, manaRegen: 6.55, cooldownRate: 0, movementSpeed: 375, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 87.3, baseAttackSpeed: 0.9579, attackSpeedPercent: 28.84, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 78.28, magicalProtection: 57.68, damageMitigation: 0, maxHealth: 2369.0, healthRegen: 5.5, maxMana: 1061.18, manaRegen: 6.79, cooldownRate: 0, movementSpeed: 375, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'Sun Wukong Basic Attack',
    image: '',
    description: 'Deal Physical Damage to an enemy in front of you.\n\nIf multiple enemies are in the area, the enemy closest to the center of the area will be hit.\n\nHas a 4 hit chain. Attacks in order of 1, 0.75x, 1x, 1.25x damage and swing time.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
      { label: 'Range', value: '1.92m' },
      { label: 'Cone Angle', value: '120 degrees' }
    ]
  },
  passive: {
    name: 'Undefeated Body',
    image: '',
    description: 'When you drop below 60% health, gain increased Strength, Intelligence, and Protections. If you go above this threshold, the buff persists for a short duration.\n\nWhen you drop below 30% health, you spawn a clone. This effect has a cooldown.\n\n• Clones use The Magic Cudgel and Master\'s Will when you do.\n• Clones inherit 100% of your Health, Protections, Strength and Intelligence but deal 50% damage and are instantly killed by Hard Crowd Control effects, except Knockbacks and Banishes.',
    cooldown: '90s',
    cost: '-',
    attributes: [
      { label: 'Protections', value: '10' },
      { label: 'Protections Per Level', value: '1.5' },
      { label: 'Strength & Intelligence', value: '10' },
      { label: 'Strength & Intelligence Per Level', value: '1' },
      { label: 'Buff Duration', value: '8s' },
      { label: 'Clone Lifetime', value: '10s' }
    ]
  },
  abilities: {
    1: {
      name: 'The Magic Cudgel',
      image: '',
      description: 'Slam down with your Cudgel, dealing Physical Damage to enemies closeby, or dealing Physical Damage to enemies further away.\n\n• This ability has reduced Strength Scaling but increased Intelligence Scaling to enemies that are further away\n• Intelligence increases the length of this ability\n\nStrength Scaling starts decreasing from 50% of the abilities range to a floor of 50% of the total Strength Scaling.\n\nIntelligence Scaling starts increasing from 50% of the abilities range starting with a floor of 50% of the total Intelligence Scaling.\n\nIntelligence increases the length of this ability up to 1.5x at 500 Intelligence.',
      cooldown: '12s',
      cost: '50 | 55 | 60 | 65 | 70',
      attributes: [
        { label: 'Damage', value: '115 | 155 | 195 | 235 | 275' },
        { label: 'Close Range Scaling', value: '60% Strength + 35% Intelligence' },
        { label: 'Far Range Scaling', value: '30% Strength + 70% Intelligence' },
        { label: 'Range', value: '8.8m' },
        { label: 'Radius', value: '0.96m' }
      ]
    },
    2: {
      name: 'Master\'s Will',
      image: '',
      description: 'Strike around you dealing Physical Damage to enemies closeby, or dealing Physical Damage to enemies further away. Enemies hit are Slowed and have reduced Attack Speed.\n\n• This ability has reduced Strength Scaling but increased Intelligence Scaling to enemies that are further away\n• Intelligence increases the radius of this ability\n\nStrength Scaling starts decreasing from 50% of the abilities range to a floor of 50% of the total Strength Scaling.\n\nIntelligence Scaling starts increasing from 50% of the abilities range starting with a floor of 50% of the total Intelligence Scaling.\n\nIntelligence increases the radius of this ability up to 1.5x at 500 Intelligence.',
      cooldown: '11s',
      cost: '60',
      attributes: [
        { label: 'Damage', value: '90 | 140 | 190 | 240 | 290' },
        { label: 'Close Range Scaling', value: '65% Strength + 37.5% Intelligence' },
        { label: 'Far Range Scaling', value: '32.5% Strength + 75% Intelligence' },
        { label: 'Slow', value: '20 | 22.5 | 25 | 27.5 | 30%' },
        { label: 'Attack Speed Slow', value: '20 | 22.5 | 25 | 27.5 | 30%' },
        { label: 'Debuff Duration', value: '3s' },
        { label: 'Radius', value: '3.2m' }
      ]
    },
    3: {
      name: '72 Transformations',
      image: '',
      description: 'Transform into an Ox, Tiger or Eagle, and charge forward.\n\n• Ox: Knockback enemies in your path, dealing Physical Damage\n• Tiger: Maul the first enemy you hit, dealing Physical Damage and Stunning them\n• Eagle: Is the fastest of the three forms\n\nChoose which form to transform into based on where you are aiming when the ability is fired. Ox is the closest, Tiger in the middle, and Eagle the farthest.\n\nAll 3 forms are immune to Slow and Root effects while the Ox form is also immune to Knockups.',
      cooldown: '16 | 15.5 | 15 | 14.5 | 14s',
      cost: '65 | 70 | 75 | 80 | 85',
      attributes: [
        { label: 'Ox Damage', value: '70 | 105 | 140 | 175 | 210' },
        { label: 'Ox Damage Scaling', value: '60% Strength' },
        { label: 'Tiger Damage', value: '100 | 170 | 240 | 310 | 380' },
        { label: 'Tiger Damage Scaling', value: '80% Strength' },
        { label: 'Tiger Stun Duration', value: '1.4s' },
        { label: 'Range', value: '12m' }
      ]
    },
    4: {
      name: 'Somersault Cloud',
      image: '',
      description: 'Rise into a cloud leaving a clone to fight in your stead. While in the cloud you are Stealthed and Heal every 0.5s.\n\n• Refire to deal Physical Damage.\n• You are CC Immune while using this ability.\n\nIf all clones are killed while on your cloud, your Stealth effect ends early.',
      cooldown: '110 | 105 | 100 | 95 | 90s',
      cost: '100',
      attributes: [
        { label: 'Damage', value: '200 | 275 | 350 | 425 | 500' },
        { label: 'Damage Scaling', value: '100% Strength' },
        { label: 'Heal Scaling Per Tick', value: '2% Max Health + 5% Intelligence' },
        { label: 'Range', value: '12m' },
        { label: 'Radius', value: '4m' }
      ]
    }
  },
  aspects: [
    {
      id: 'transformation',
      name: 'Aspect of Transformation',
      image: '',
      description: '72 Transformations has a reduced Cooldown and locks your animal form until Somersault Cloud is used. Locking in Ox form causes Master\'s Will to Knockup, Tiger form provides stacking Attack Speed on hits of The Magic Cudgel and Eagle form causes your other two non-ultimate abilities to have a reduced Cooldown.',
      basicAttack: {
        name: 'Sun Wukong Basic Attack',
        image: '',
        description: 'Deal Physical Damage to an enemy in front of you.\n\nIf multiple enemies are in the area, the enemy closest to the center of the area will be hit.\n\nHas a 4 hit chain. Attacks in order of 1, 0.75x, 1x, 1.25x damage and swing time.',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
          { label: 'Range', value: '1.92m' },
          { label: 'Cone Angle', value: '120 degrees' }
        ]
      },
      passive: {
        name: 'Undefeated Body',
        image: '',
        description: 'When you drop below 60% health, gain increased Strength, Intelligence, and Protections. If you go above this threshold, the buff persists for a short duration.\n\nWhen you drop below 30% health, you spawn a clone. This effect has a cooldown.\n\n• Clones use The Magic Cudgel and Master\'s Will when you do.\n• Clones inherit 100% of your Health, Protections, Strength and Intelligence but deal 50% damage and are instantly killed by Hard Crowd Control effects, except Knockbacks and Banishes.',
        cooldown: '90s',
        cost: '-',
        attributes: [
          { label: 'Protections', value: '10' },
          { label: 'Protections Per Level', value: '1.5' },
          { label: 'Strength & Intelligence', value: '10' },
          { label: 'Strength & Intelligence Per Level', value: '1' },
          { label: 'Buff Duration', value: '8s' },
          { label: 'Clone Lifetime', value: '10s' }
        ]
      },
      abilities: {
        1: {
          name: 'The Magic Cudgel',
          image: '',
          description: 'Slam down with your Cudgel, dealing Physical Damage to enemies closeby, or dealing Physical Damage to enemies further away.\n\n• This ability has reduced Strength Scaling but increased Intelligence Scaling to enemies that are further away\n• Intelligence increases the length of this ability\n• BLESSING OF THE TIGER - Enemies hit by this ability provide you increasing Attack Speed\n\nStrength Scaling starts decreasing from 50% of the abilities range to a floor of 50% of the total Strength Scaling.\n\nIntelligence Scaling starts increasing from 50% of the abilities range starting with a floor of 50% of the total Intelligence Scaling.\n\nIntelligence increases the length of this ability up to 1.5x at 500 Intelligence.\n\nYou gain 2 stacks of Attack Speed when hitting enemy gods.',
          cooldown: '12s',
          cost: '50 | 55 | 60 | 65 | 70',
          attributes: [
            { label: 'Damage', value: '115 | 155 | 195 | 235 | 275' },
            { label: 'Close Range Scaling', value: '60% Strength + 35% Intelligence' },
            { label: 'Far Range Scaling', value: '30% Strength + 70% Intelligence' },
            { label: 'Attack Speed (Tiger)', value: '5% Per Stack' },
            { label: 'Attack Speed Per Level (Tiger)', value: '0.1% Per Stack' },
            { label: 'Max Stacks (Tiger)', value: '6' },
            { label: 'Buff Duration (Tiger)', value: '6s' },
            { label: 'Range', value: '8.8m' },
            { label: 'Radius', value: '0.96m' }
          ]
        },
        2: {
          name: 'Master\'s Will',
          image: '',
          description: 'Strike around you dealing Physical Damage to enemies closeby, or dealing Physical Damage to enemies further away. Enemies hit are Slowed and have reduced Attack Speed.\n\n• This ability has reduced Strength Scaling but increased Intelligence Scaling to enemies that are further away\n• Intelligence increases the radius of this ability\n• BLESSING OF THE OX - Enemies hit by this ability are Knocked Up\n\nStrength Scaling starts decreasing from 50% of the abilities range to a floor of 50% of the total Strength Scaling.\n\nIntelligence Scaling starts increasing from 50% of the abilities range starting with a floor of 50% of the total Intelligence Scaling.\n\nIntelligence increases the radius of this ability up to 1.5x at 500 Intelligence.',
          cooldown: '11s',
          cost: '60',
          attributes: [
            { label: 'Damage', value: '90 | 140 | 190 | 240 | 290' },
            { label: 'Close Range Scaling', value: '65% Strength + 37.5% Intelligence' },
            { label: 'Far Range Scaling', value: '32.5% Strength + 75% Intelligence' },
            { label: 'Slow', value: '20 | 22.5 | 25 | 27.5 | 30%' },
            { label: 'Attack Speed Slow', value: '20 | 22.5 | 25 | 27.5 | 30%' },
            { label: 'Debuff Duration', value: '3s' },
            { label: 'Radius', value: '3.2m' }
          ]
        },
        3: {
          name: '72 Transformations',
          image: '',
          description: 'Transform into an Ox, Tiger or Eagle, and charge forward. Using this ability locks you into the transformation picked until Somersault Cloud is used, however you do gain a new effect based on the form chosen.\n\n• Ox: Knockback enemies in your path, dealing Physical Damage. Blessing of the Ox causes Master\'s Will to knockup enemies hit.\n• Tiger: Maul the first enemy you hit, dealing Physical Damage and Stunning them. Blessing of the Tiger causes The Magic Cudgel to provide Attack Speed on hitting enemies.\n• Eagle: Is the fastest of the three forms. Blessing of the Eagle causes your other non-ultimate abilities to have reduced cooldowns.\n\nChoose which form to transform into based on where you are aiming when the ability is fired. Ox is the closest, Tiger in the middle, and Eagle the farthest.\n\nAll 3 forms are immune to Slow and Root effects while the Ox form is also immune to Knockups.',
          cooldown: '14s',
          cost: '65 | 70 | 75 | 80 | 85',
          attributes: [
            { label: 'Ox Damage', value: '70 | 105 | 140 | 175 | 210' },
            { label: 'Ox Damage Scaling', value: '60% Strength' },
            { label: 'Tiger Damage', value: '100 | 170 | 240 | 310 | 380' },
            { label: 'Tiger Damage Scaling', value: '80% Strength' },
            { label: 'Tiger Stun Duration', value: '1.4s' },
            { label: 'Range', value: '12m' }
          ]
        },
        4: {
          name: 'Somersault Cloud',
          image: '',
          description: 'Rise into a cloud leaving a clone to fight in your stead. While in the cloud you are Stealthed and Heal every 0.5s.\n\n• Refire to deal Physical Damage.\n• You are CC Immune while using this ability.\n\nIf all clones are killed while on your cloud, your Stealth effect ends early.',
          cooldown: '110 | 105 | 100 | 95 | 90s',
          cost: '100',
          attributes: [
            { label: 'Damage', value: '200 | 275 | 350 | 425 | 500' },
            { label: 'Damage Scaling', value: '100% Strength' },
            { label: 'Heal Scaling Per Tick', value: '2% Max Health + 5% Intelligence' },
            { label: 'Range', value: '12m' },
            { label: 'Radius', value: '4m' }
          ]
        }
      }
    }
  ],
  recommendedBuilds: []
};