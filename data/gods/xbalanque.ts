import { God, DamageType } from '../../types';

export const XBALANQUE: God = {
  id: 'xbalanque',
  name: 'Xbalanque',
  title: 'Hidden Jaguar Sun',
  pantheon: 'Maya',
  role: 'Hunter',
  lanes: ['Carry'],
  damageType: DamageType.Physical,
  image: '',
  videoGuideUrl: '',
  goodAgainst: [],
  badAgainst: [],
  levelingOrder: [],
  statsByLevel: [
    // Level 1
    { strength: 0, intelligence: 0, inhandPower: 48, baseAttackSpeed: 1.0, attackSpeedPercent: 1.512, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 18.1, magicalProtection: 26.1, damageMitigation: 0, maxHealth: 591.4, healthRegen: 1.7, maxMana: 296, manaRegen: 2.14, cooldownRate: 0, movementSpeed: 365, xpRequirement: 0 },
    // Level 2
    { strength: 0, intelligence: 0, inhandPower: 51, baseAttackSpeed: 1.0, attackSpeedPercent: 3.024, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 20.9, magicalProtection: 27.6, damageMitigation: 0, maxHealth: 684, healthRegen: 1.9, maxMana: 338, manaRegen: 2.38, cooldownRate: 0, movementSpeed: 365, xpRequirement: 308 },
    // Level 3
    { strength: 0, intelligence: 0, inhandPower: 53, baseAttackSpeed: 1.0, attackSpeedPercent: 4.536, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 23.8, magicalProtection: 29.0, damageMitigation: 0, maxHealth: 776.6, healthRegen: 2.1, maxMana: 380, manaRegen: 2.61, cooldownRate: 0, movementSpeed: 365, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 56, baseAttackSpeed: 1.0, attackSpeedPercent: 6.048, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 26.6, magicalProtection: 30.4, damageMitigation: 0, maxHealth: 869.3, healthRegen: 2.3, maxMana: 422, manaRegen: 2.85, cooldownRate: 0, movementSpeed: 365, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 58, baseAttackSpeed: 1.0, attackSpeedPercent: 7.56, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 29.5, magicalProtection: 31.8, damageMitigation: 0, maxHealth: 961.9, healthRegen: 2.5, maxMana: 464, manaRegen: 3.09, cooldownRate: 0, movementSpeed: 365, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 61, baseAttackSpeed: 1.0, attackSpeedPercent: 9.072, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 32.3, magicalProtection: 33.3, damageMitigation: 0, maxHealth: 1054.5, healthRegen: 2.7, maxMana: 506, manaRegen: 3.33, cooldownRate: 0, movementSpeed: 365, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 64, baseAttackSpeed: 1.0, attackSpeedPercent: 10.584, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 35.2, magicalProtection: 34.7, damageMitigation: 0, maxHealth: 1147.1, healthRegen: 2.9, maxMana: 548, manaRegen: 3.56, cooldownRate: 0, movementSpeed: 365, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 66, baseAttackSpeed: 1.0, attackSpeedPercent: 12.096, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 38.0, magicalProtection: 36.1, damageMitigation: 0, maxHealth: 1239.8, healthRegen: 3.1, maxMana: 590, manaRegen: 3.80, cooldownRate: 0, movementSpeed: 365, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 69, baseAttackSpeed: 1.0, attackSpeedPercent: 13.608, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 40.9, magicalProtection: 37.5, damageMitigation: 0, maxHealth: 1332.4, healthRegen: 3.3, maxMana: 632, manaRegen: 4.04, cooldownRate: 0, movementSpeed: 365, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 71, baseAttackSpeed: 1.0, attackSpeedPercent: 15.12, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 43.7, magicalProtection: 39.0, damageMitigation: 0, maxHealth: 1425.0, healthRegen: 3.5, maxMana: 674, manaRegen: 4.28, cooldownRate: 0, movementSpeed: 365, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 74, baseAttackSpeed: 1.0, attackSpeedPercent: 16.632, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 46.6, magicalProtection: 40.4, damageMitigation: 0, maxHealth: 1517.6, healthRegen: 3.7, maxMana: 716, manaRegen: 4.51, cooldownRate: 0, movementSpeed: 365, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 76, baseAttackSpeed: 1.0, attackSpeedPercent: 18.144, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 49.4, magicalProtection: 41.8, damageMitigation: 0, maxHealth: 1610.3, healthRegen: 3.9, maxMana: 758, manaRegen: 4.75, cooldownRate: 0, movementSpeed: 365, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 79, baseAttackSpeed: 1.0, attackSpeedPercent: 19.656, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 52.3, magicalProtection: 43.2, damageMitigation: 0, maxHealth: 1702.9, healthRegen: 4.1, maxMana: 800, manaRegen: 4.99, cooldownRate: 0, movementSpeed: 365, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 82, baseAttackSpeed: 1.0, attackSpeedPercent: 21.168, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 55.1, magicalProtection: 44.7, damageMitigation: 0, maxHealth: 1795.5, healthRegen: 4.3, maxMana: 842, manaRegen: 5.23, cooldownRate: 0, movementSpeed: 365, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 84, baseAttackSpeed: 1.0, attackSpeedPercent: 22.68, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 58.0, magicalProtection: 46.1, damageMitigation: 0, maxHealth: 1888.1, healthRegen: 4.5, maxMana: 884, manaRegen: 5.46, cooldownRate: 0, movementSpeed: 365, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 87, baseAttackSpeed: 1.0, attackSpeedPercent: 24.192, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 60.8, magicalProtection: 47.5, damageMitigation: 0, maxHealth: 1980.8, healthRegen: 4.7, maxMana: 926, manaRegen: 5.70, cooldownRate: 0, movementSpeed: 365, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 89, baseAttackSpeed: 1.0, attackSpeedPercent: 25.704, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 63.7, magicalProtection: 48.9, damageMitigation: 0, maxHealth: 2073.4, healthRegen: 4.9, maxMana: 968, manaRegen: 5.94, cooldownRate: 0, movementSpeed: 365, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 92, baseAttackSpeed: 1.0, attackSpeedPercent: 27.216, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 66.5, magicalProtection: 50.4, damageMitigation: 0, maxHealth: 2166.0, healthRegen: 5.1, maxMana: 1010, manaRegen: 6.18, cooldownRate: 0, movementSpeed: 365, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 95, baseAttackSpeed: 1.0, attackSpeedPercent: 28.728, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 69.4, magicalProtection: 51.8, damageMitigation: 0, maxHealth: 2258.6, healthRegen: 5.3, maxMana: 1052, manaRegen: 6.41, cooldownRate: 0, movementSpeed: 365, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 97, baseAttackSpeed: 1.0, attackSpeedPercent: 30.24, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 72.2, magicalProtection: 53.2, damageMitigation: 0, maxHealth: 2351.3, healthRegen: 5.5, maxMana: 1094, manaRegen: 6.65, cooldownRate: 0, movementSpeed: 365, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'Xbalanque Basic Attack',
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
    name: 'Dead of Night',
    image: '',
    description: 'Deal damage to enemy gods to gain stacks. Each stack provides Strength or Intelligence, whichever is higher. At 3 and 6 stacks you gain an additional buff of Strength and Intelligence.\n\n• Each stack requires more damage dealt to gain the next stack.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Strength', value: '3 Per Stack' },
      { label: 'Intelligence', value: '5 Per Stack' },
      { label: 'Strength (Empowered)', value: '7 Per Empowered Stack' },
      { label: 'Intelligence (Empowered)', value: '10 Per Empowered Stack' },
      { label: 'Damage to gain first Stack', value: '1000' },
      { label: 'Damage increase per Stack', value: '1000' }
    ]
  },
  abilities: {
    1: {
      name: 'Branching Bola',
      image: '',
      description: 'While active, your Basic Attacks deal additional damage. When the bola hits a target, it splits and deals reduced damage.\n\n• Splitting projectiles home on enemy gods in range.\n• Hitting an enemy affected by Poison Darts causes the split projectiles to afflict enemies with a diminished debuff.\n• Mana is consumed per Basic Attack.\n• Split attacks proc item hit effects for 40% damage and 20% healing.',
      cooldown: '0.5s',
      cost: '8 | 11 | 14 | 17 | 20 per shot',
      attributes: [
        { label: 'Increased Damage', value: '10 | 15 | 20 | 25 | 30' },
        { label: 'Split Projectile Damage', value: '30 | 32.5 | 35 | 37.5 | 40%' },
        { label: 'Split Projectile Range', value: '3.5m' }
      ]
    },
    2: {
      name: 'Poison Darts',
      image: '',
      description: 'Fire 15 dart projectiles in a cone, dealing Physical Damage and poisoning enemies hit.\n\n• Poisoned enemies repeatedly take Physical Damage and are Slowed.\n• Poison ticks every 0.5s.\n• Enemies can only be hit by 7 darts, with each after the first doing reduced damage.',
      cooldown: '15s',
      cost: '60 | 65 | 70 | 75 | 80',
      attributes: [
        { label: 'Damage', value: '20 | 30 | 40 | 50 | 60' },
        { label: 'Damage Scaling', value: '25% Strength + 35% Intelligence' },
        { label: 'Damage Per Tick', value: '10 | 15 | 20 | 25 | 30' },
        { label: 'Damage Scaling Per Tick', value: '7.5% Strength + 15% Intelligence' },
        { label: 'Subsequent Dart Damage', value: '30%' },
        { label: 'Slow', value: '20 | 22.5 | 25 | 27.5 | 30%' },
        { label: 'Slow Duration', value: '3s' },
        { label: 'Range', value: '8.8m' },
        { label: 'Cone Angle', value: '110 degrees' }
      ]
    },
    3: {
      name: 'Rising Jaguar',
      image: '',
      description: 'Dash in the direction you are currently traveling before rising in the air, becoming CC Immune.\n\n• While in the air, you fire darts at all nearby enemies, dealing Physical Damage.\n• Enemies affected by Poison Darts take additional damage.\n• Enemies around you when the Dash starts will still be hit.',
      cooldown: '16s',
      cost: '60 | 65 | 70 | 75 | 80',
      attributes: [
        { label: 'Damage', value: '65 | 115 | 165 | 215 | 265' },
        { label: 'Damage Scaling', value: '50% Strength + 35% Intelligence' },
        { label: 'Bonus Damage (Poisoned)', value: '30 | 35 | 40 | 45 | 50%' },
        { label: 'Range', value: '4m' },
        { label: 'Radius', value: '4.8m' }
      ]
    },
    4: {
      name: 'Darkest of Nights',
      image: '',
      description: 'Shroud enemy gods in darkness, creating an area they cannot see out of. During this time you have increased Basic Attack range, Basic Attack projectile speed, Attack Speed and Movement Speed.\n\n• If an enemy god leaves the area, they are affected by a decaying Slow.',
      cooldown: '90s',
      cost: '100',
      attributes: [
        { label: 'Attack Speed', value: '20 | 25 | 30 | 35 | 40%' },
        { label: 'Movement Speed', value: '20 | 25 | 30 | 35 | 40%' },
        { label: 'Increased Attack Range', value: '6.4m' },
        { label: 'Increased Projectile Speed', value: '25%' },
        { label: 'Buff Duration', value: '3s' },
        { label: 'Debuff Duration', value: '3s' },
        { label: 'Initial Slow Amount', value: '60%' },
        { label: 'Slow Duration', value: '2s' },
        { label: 'Radius', value: '7.5m' }
      ]
    }
  },
  aspects: [
    {
      id: 'nightstalker',
      name: 'Aspect of the Nightstalker',
      image: '',
      description: 'Branching Bola is no longer a toggle but provides 3 fires of ability based projectiles. Poison Darts requires less hits to deal full damage. Darkest of Nights loses existing buffs but resets Poison Darts and provides increased ability damage.',
      basicAttack: {
        name: 'Xbalanque Basic Attack',
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
        name: 'Dead of Night',
        image: '',
        description: 'Deal damage to enemy gods to gain stacks. Each stack provides Strength or Intelligence, whichever is higher. At 3 and 6 stacks you gain an additional buff of Strength and Intelligence.\n\n• Each stack requires more damage dealt to gain the next stack.',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Strength', value: '3 Per Stack' },
          { label: 'Intelligence', value: '5 Per Stack' },
          { label: 'Strength (Empowered)', value: '7 Per Empowered Stack' },
          { label: 'Intelligence (Empowered)', value: '10 Per Empowered Stack' },
          { label: 'Damage to gain first Stack', value: '1000' },
          { label: 'Damage increase per Stack', value: '1000' }
        ]
      },
      abilities: {
        1: {
          name: 'Branching Bola',
          image: '',
          description: 'Your next 3 Basic Attacks fire large projectiles that deal Physical Damage.\n\n• Projectiles pass through enemies and stop on the first enemy god hit.\n• Can only trigger ability based items and effects.\n• NO LONGER A TOGGLE - PROVIDES 3 ABILITY-BASED PROJECTILE FIRES',
          cooldown: '15s',
          cost: '60 | 65 | 70 | 75 | 80',
          attributes: [
            { label: 'Damage', value: '50 | 75 | 100 | 125 | 150' },
            { label: 'Damage Scaling', value: '35% Strength + 55% Intelligence' }
          ]
        },
        2: {
          name: 'Poison Darts',
          image: '',
          description: 'Fire 15 dart projectiles in a cone, dealing Physical Damage and poisoning enemies hit.\n\n• Poisoned enemies repeatedly take Physical Damage and are Slowed.\n• Poison ticks every 0.5s.\n• ENEMIES CAN ONLY BE HIT BY 3 DARTS, with each after the first doing reduced damage.',
          cooldown: '15s',
          cost: '60 | 65 | 70 | 75 | 80',
          attributes: [
            { label: 'Damage', value: '20 | 30 | 40 | 50 | 60' },
            { label: 'Damage Scaling', value: '25% Strength + 35% Intelligence' },
            { label: 'Damage Per Tick', value: '10 | 15 | 20 | 25 | 30' },
            { label: 'Damage Scaling Per Tick', value: '7.5% Strength + 15% Intelligence' },
            { label: 'Subsequent Dart Damage', value: '50%' },
            { label: 'Slow', value: '20 | 22.5 | 25 | 27.5 | 30%' },
            { label: 'Slow Duration', value: '3s' },
            { label: 'Range', value: '8.8m' },
            { label: 'Cone Angle', value: '110 degrees' }
          ]
        },
        3: {
          name: 'Rising Jaguar',
          image: '',
          description: 'Dash in the direction you are currently traveling before rising in the air, becoming CC Immune.\n\n• While in the air, you fire darts at all nearby enemies, dealing Physical Damage.\n• Enemies affected by Poison Darts take additional damage.\n• Enemies around you when the Dash starts will still be hit.',
          cooldown: '16s',
          cost: '60 | 65 | 70 | 75 | 80',
          attributes: [
            { label: 'Damage', value: '65 | 115 | 165 | 215 | 265' },
            { label: 'Damage Scaling', value: '50% Strength + 35% Intelligence' },
            { label: 'Bonus Damage (Poisoned)', value: '30 | 35 | 40 | 45 | 50%' },
            { label: 'Range', value: '4m' },
            { label: 'Radius', value: '4.8m' }
          ]
        },
        4: {
          name: 'Darkest of Nights',
          image: '',
          description: 'Shroud enemy gods in darkness, creating an area they cannot see out of. Using this ability resets the Cooldown of Poison Darts and during this time your abilities deal increased damage.\n\n• If an enemy god leaves the area, they are affected by a decaying Slow.\n• NO LONGER GRANTS ATTACK SPEED, MOVEMENT SPEED, ATTACK RANGE, OR PROJECTILE SPEED BUFFS\n• RESETS POISON DARTS COOLDOWN\n• GRANTS INCREASED ABILITY DAMAGE',
          cooldown: '90s',
          cost: '100',
          attributes: [
            { label: 'Increased Ability Damage', value: '10 | 13 | 16 | 19 | 22%' },
            { label: 'Buff Duration', value: '3s' },
            { label: 'Debuff Duration', value: '3s' },
            { label: 'Initial Slow Amount', value: '60%' },
            { label: 'Slow Duration', value: '2s' },
            { label: 'Radius', value: '7.5m' }
          ]
        }
      }
    }
  ],
  recommendedBuilds: []
};