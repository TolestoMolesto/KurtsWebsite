import { God, DamageType } from '../../types';

export const SOL: God = {
  id: 'sol',
  name: 'Sol',
  title: 'Goddess of the Sun',
  pantheon: 'Norse',
  role: 'Mage',
  lanes: ['Mid', 'Carry'],
  damageType: DamageType.Magical,
  image: '',
  videoGuideUrl: '',
  goodAgainst: [],
  badAgainst: [],
  levelingOrder: [],
  statsByLevel: [
    // Level 1
    { strength: 0, intelligence: 0, inhandPower: 46.08, baseAttackSpeed: 1.0044, attackSpeedPercent: 1.512, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 17.57, magicalProtection: 27.43, damageMitigation: 0, maxHealth: 591.38, healthRegen: 1.7, maxMana: 296, manaRegen: 2.34, cooldownRate: 0, movementSpeed: 365, xpRequirement: 0 },
    // Level 2
    { strength: 0, intelligence: 0, inhandPower: 48.48, baseAttackSpeed: 1.0044, attackSpeedPercent: 3.024, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 20.42, magicalProtection: 28.85, damageMitigation: 0, maxHealth: 683.89, healthRegen: 1.9, maxMana: 338, manaRegen: 2.6, cooldownRate: 0, movementSpeed: 365, xpRequirement: 308 },
    // Level 3
    { strength: 0, intelligence: 0, inhandPower: 50.88, baseAttackSpeed: 1.0044, attackSpeedPercent: 4.536, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 23.27, magicalProtection: 30.28, damageMitigation: 0, maxHealth: 776.4, healthRegen: 2.1, maxMana: 380, manaRegen: 2.86, cooldownRate: 0, movementSpeed: 365, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 53.28, baseAttackSpeed: 1.0044, attackSpeedPercent: 6.048, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 26.12, magicalProtection: 31.7, damageMitigation: 0, maxHealth: 868.91, healthRegen: 2.3, maxMana: 422, manaRegen: 3.12, cooldownRate: 0, movementSpeed: 365, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 55.68, baseAttackSpeed: 1.0044, attackSpeedPercent: 7.56, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 28.97, magicalProtection: 33.13, damageMitigation: 0, maxHealth: 961.41, healthRegen: 2.5, maxMana: 464, manaRegen: 3.38, cooldownRate: 0, movementSpeed: 365, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 58.08, baseAttackSpeed: 1.0044, attackSpeedPercent: 9.072, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 31.82, magicalProtection: 34.55, damageMitigation: 0, maxHealth: 1053.92, healthRegen: 2.7, maxMana: 506, manaRegen: 3.64, cooldownRate: 0, movementSpeed: 365, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 60.48, baseAttackSpeed: 1.0044, attackSpeedPercent: 10.584, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 34.67, magicalProtection: 35.98, damageMitigation: 0, maxHealth: 1146.43, healthRegen: 2.9, maxMana: 548, manaRegen: 3.9, cooldownRate: 0, movementSpeed: 365, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 62.88, baseAttackSpeed: 1.0044, attackSpeedPercent: 12.096, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 37.52, magicalProtection: 37.4, damageMitigation: 0, maxHealth: 1238.94, healthRegen: 3.1, maxMana: 590, manaRegen: 4.16, cooldownRate: 0, movementSpeed: 365, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 65.28, baseAttackSpeed: 1.0044, attackSpeedPercent: 13.608, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 40.37, magicalProtection: 38.83, damageMitigation: 0, maxHealth: 1331.45, healthRegen: 3.3, maxMana: 632, manaRegen: 4.42, cooldownRate: 0, movementSpeed: 365, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 67.68, baseAttackSpeed: 1.0044, attackSpeedPercent: 15.12, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 43.22, magicalProtection: 40.25, damageMitigation: 0, maxHealth: 1423.95, healthRegen: 3.5, maxMana: 674, manaRegen: 4.68, cooldownRate: 0, movementSpeed: 365, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 70.08, baseAttackSpeed: 1.0044, attackSpeedPercent: 16.632, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 46.07, magicalProtection: 41.68, damageMitigation: 0, maxHealth: 1516.46, healthRegen: 3.7, maxMana: 716, manaRegen: 4.94, cooldownRate: 0, movementSpeed: 365, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 72.48, baseAttackSpeed: 1.0044, attackSpeedPercent: 18.144, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 48.92, magicalProtection: 43.1, damageMitigation: 0, maxHealth: 1608.97, healthRegen: 3.9, maxMana: 758, manaRegen: 5.2, cooldownRate: 0, movementSpeed: 365, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 74.88, baseAttackSpeed: 1.0044, attackSpeedPercent: 19.656, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 51.77, magicalProtection: 44.53, damageMitigation: 0, maxHealth: 1701.48, healthRegen: 4.1, maxMana: 800, manaRegen: 5.46, cooldownRate: 0, movementSpeed: 365, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 77.28, baseAttackSpeed: 1.0044, attackSpeedPercent: 21.168, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 54.62, magicalProtection: 45.95, damageMitigation: 0, maxHealth: 1793.99, healthRegen: 4.3, maxMana: 842, manaRegen: 5.72, cooldownRate: 0, movementSpeed: 365, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 79.68, baseAttackSpeed: 1.0044, attackSpeedPercent: 22.68, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 57.47, magicalProtection: 47.38, damageMitigation: 0, maxHealth: 1886.49, healthRegen: 4.5, maxMana: 884, manaRegen: 5.98, cooldownRate: 0, movementSpeed: 365, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 82.08, baseAttackSpeed: 1.0044, attackSpeedPercent: 24.192, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 60.32, magicalProtection: 48.8, damageMitigation: 0, maxHealth: 1979, healthRegen: 4.7, maxMana: 926, manaRegen: 6.24, cooldownRate: 0, movementSpeed: 365, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 84.48, baseAttackSpeed: 1.0044, attackSpeedPercent: 25.704, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 63.17, magicalProtection: 50.23, damageMitigation: 0, maxHealth: 2071.51, healthRegen: 4.9, maxMana: 968, manaRegen: 6.5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 86.88, baseAttackSpeed: 1.0044, attackSpeedPercent: 27.216, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 66.02, magicalProtection: 51.65, damageMitigation: 0, maxHealth: 2164.02, healthRegen: 5.1, maxMana: 1010, manaRegen: 6.76, cooldownRate: 0, movementSpeed: 365, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 89.28, baseAttackSpeed: 1.0044, attackSpeedPercent: 28.728, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 68.87, magicalProtection: 53.08, damageMitigation: 0, maxHealth: 2256.53, healthRegen: 5.3, maxMana: 1052, manaRegen: 7.02, cooldownRate: 0, movementSpeed: 365, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 91.68, baseAttackSpeed: 1.0044, attackSpeedPercent: 30.24, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 71.72, magicalProtection: 54.5, damageMitigation: 0, maxHealth: 2351.25, healthRegen: 5.5, maxMana: 1094, manaRegen: 7.28, cooldownRate: 0, movementSpeed: 365, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'Sol Basic Attack',
    image: '',
    description: 'Fire a projectile that deals Magical Damage to the first enemy hit.\n\n• Projectile stops on first target hit, and does not pass through walls.\n• Successfully hit basic attacks generate Heat.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage Scaling', value: '100% Strength or Inhand Power + 20% Intelligence' },
      { label: 'Heat Generated', value: '5' },
      { label: 'Range', value: '8.8m' },
      { label: 'Radius', value: '0.48m' }
    ]
  },
  passive: {
    name: 'Unstable Manifestation',
    image: '',
    description: 'Hit enemies with basic attacks or use abilities to gain Heat.\n\n• Heat grants increased Strength, Intelligence, and Attack Speed from items\n• At Max Heat, increase your basic attack damage\n• Ranges from 0 to 100 Heat\n• Heat starts depleting if you have not generated Heat within the last 6 seconds\n• Heat depletes over time at a rate of 3 heat per 0.33s',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Strength (from items)', value: '0.15% per Heat' },
      { label: 'Intelligence (from items)', value: '0.25% per Heat' },
      { label: 'Attack Speed (from items)', value: '0.3% per Heat' },
      { label: 'Basic Attack Damage (at Max Heat)', value: '15%' }
    ]
  },
  abilities: {
    1: {
      name: 'Radiance',
      image: '',
      description: 'Create a pool of flames and Heal yourself over time for a percentage of your missing Health.\n\n• Enemies in the pool take Magical Damage repeatedly\n• The size of the pool increases if you have more Heat when using this ability\n• You gain Heat when using this ability\n• Pool scales from 1x radius at 0 Heat to 2x radius at 100 Heat\n• This ability hits 3 times over 3 seconds\n• Heals 6 times over 5 seconds',
      cooldown: '10s',
      cost: '50 | 60 | 70 | 80 | 90',
      attributes: [
        { label: 'Damage Per Tick', value: '45 | 70 | 95 | 120 | 145' },
        { label: 'Damage Scaling Per Tick', value: '30% Intelligence + 15% Strength' },
        { label: 'Heal Per Tick', value: '2.5% Missing Health' },
        { label: 'Heal Scaling Per Tick', value: '2% Intelligence' },
        { label: 'Total Heal', value: '15% Missing Health' },
        { label: 'Heat Generated', value: '30 | 40 | 50 | 60 | 70' },
        { label: 'Radius', value: '2.08m (scales with Heat)' }
      ]
    },
    2: {
      name: 'Stellar Burst',
      image: '',
      description: 'Your next basic attack fires a projectile that explodes on hit or upon reaching max range, then retracts, and generates Heat.\n\n• Both the explosion and the retraction deal Magical Damage and Slow\n• Projectile stops and explodes on first enemy hit, walls, or max range\n• Can only trigger ability based items and effects',
      cooldown: '10s',
      cost: '50 | 60 | 70 | 80 | 90',
      attributes: [
        { label: 'Damage', value: '45 | 70 | 95 | 120 | 145' },
        { label: 'Damage Scaling', value: '45% Intelligence + 25% Strength' },
        { label: 'Slow', value: '25 | 27.5 | 30 | 32.5 | 35%' },
        { label: 'Slow Duration', value: '1.5s' },
        { label: 'Heat Generated', value: '10' },
        { label: 'Range', value: '8.8m' },
        { label: 'Radius', value: '3.2m' }
      ]
    },
    3: {
      name: 'Disapparate',
      image: '',
      description: 'Gain Movement Speed and Slow Immunity, gaining Heat and leaving a trail of fire behind you.\n\n• The Trail deals Magical Damage\n• After 3 seconds, you become Immune and unable to attack, and the trail detonates dealing Magical Damage\n• You can cancel out of the Immune state early\n• This Immune state is Damage Immunity, Healing Immunity, CC Immunity, Untargetable, and makes you able to pass through allies, enemies, and Impediments',
      cooldown: '16 | 15.5 | 15 | 14.5 | 14s',
      cost: '60',
      attributes: [
        { label: 'Trail Damage Per Tick', value: '10 | 20 | 30 | 40 | 50' },
        { label: 'Trail Damage Scaling Per Tick', value: '15% Intelligence' },
        { label: 'Explode Damage', value: '60 | 120 | 180 | 240 | 300' },
        { label: 'Explode Damage Scaling', value: '75% Intelligence + 40% Strength' },
        { label: 'Movement Speed', value: '20 | 22.5 | 25 | 27.5 | 30%' },
        { label: 'Buff Duration', value: '3s' },
        { label: 'Immunity Duration', value: '3s' },
        { label: 'Heat Generated', value: '10' },
        { label: 'Trail Radius', value: '1m' }
      ]
    },
    4: {
      name: 'Supernova',
      image: '',
      description: 'Unleash flame and fury, gaining Heat and striking 8 times along a moveable ground target location.\n\n• Each strike deals Magical Damage; subsequent hits deal reduced damage\n• The first time an enemy is hit, they are Knocked Back\n• You are CC Immune while using this ability\n• Areas are selected every 0.18s or when your targeter has moved more than 1.8m since the last area was selected',
      cooldown: '90 | 85 | 80 | 75 | 70s',
      cost: '100',
      attributes: [
        { label: 'Damage', value: '130 | 175 | 220 | 265 | 310' },
        { label: 'Damage Scaling', value: '40% Intelligence' },
        { label: 'Subsequent Damage', value: '30%' },
        { label: 'Number of Strikes', value: '8' },
        { label: 'Heat Generated', value: '40' },
        { label: 'Range', value: '8.8m' },
        { label: 'Radius', value: '1.92m' }
      ]
    }
  },
  aspects: [
    {
      id: 'conflagration',
      name: 'Aspect of Conflagration',
      image: '',
      description: "Sol's Heat provides Intelligence and Ability Damage, but no longer provides Strength, Attack Speed, and Basic Attack Damage. Sol erupts and deals damage around her when becoming immune in Disapparate.",
      basicAttack: {
        name: 'Sol Basic Attack',
        image: '',
        description: 'Fire a projectile that deals Magical Damage to the first enemy hit.\n\n• Projectile stops on first target hit, and does not pass through walls.\n• Successfully hit basic attacks generate Heat.',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Damage Scaling', value: '100% Strength or Inhand Power + 20% Intelligence' },
          { label: 'Heat Generated', value: '5' },
          { label: 'Range', value: '8.8m' },
          { label: 'Radius', value: '0.48m' }
        ]
      },
      passive: {
        name: 'Unstable Manifestation',
        image: '',
        description: 'Hit enemies with basic attacks or use abilities to gain Heat.\n\n• Heat grants increased Intelligence from items\n• At Max Heat, increase your ability damage\n• NO LONGER GRANTS STRENGTH, ATTACK SPEED, OR BASIC ATTACK DAMAGE\n• Ranges from 0 to 100 Heat\n• Heat starts depleting if you have not generated Heat within the last 6 seconds\n• Heat depletes over time at a rate of 3 heat per 0.33s',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Intelligence (from items)', value: '0.35% per Heat' },
          { label: 'Ability Damage (at Max Heat)', value: '6%' }
        ]
      },
      abilities: {
        1: {
          name: 'Radiance',
          image: '',
          description: 'Create a pool of flames and Heal yourself over time for a percentage of your missing Health.\n\n• Enemies in the pool take Magical Damage repeatedly\n• The size of the pool increases if you have more Heat when using this ability\n• You gain Heat when using this ability\n• Pool scales from 1x radius at 0 Heat to 2x radius at 100 Heat\n• This ability hits 3 times over 3 seconds\n• Heals 6 times over 5 seconds',
          cooldown: '10s',
          cost: '50 | 60 | 70 | 80 | 90',
          attributes: [
            { label: 'Damage Per Tick', value: '45 | 70 | 95 | 120 | 145' },
            { label: 'Damage Scaling Per Tick', value: '30% Intelligence + 15% Strength' },
            { label: 'Heal Per Tick', value: '2.5% Missing Health' },
            { label: 'Heal Scaling Per Tick', value: '2% Intelligence' },
            { label: 'Total Heal', value: '15% Missing Health' },
            { label: 'Heat Generated', value: '30 | 40 | 50 | 60 | 70' },
            { label: 'Radius', value: '2.08m (scales with Heat)' }
          ]
        },
        2: {
          name: 'Stellar Burst',
          image: '',
          description: 'Your next basic attack fires a projectile that explodes on hit or upon reaching max range, then retracts, and generates Heat.\n\n• Both the explosion and the retraction deal Magical Damage and Slow\n• Projectile stops and explodes on first enemy hit, walls, or max range\n• Can only trigger ability based items and effects',
          cooldown: '10s',
          cost: '50 | 60 | 70 | 80 | 90',
          attributes: [
            { label: 'Damage', value: '45 | 70 | 95 | 120 | 145' },
            { label: 'Damage Scaling', value: '45% Intelligence + 25% Strength' },
            { label: 'Slow', value: '25 | 27.5 | 30 | 32.5 | 35%' },
            { label: 'Slow Duration', value: '1.5s' },
            { label: 'Heat Generated', value: '10' },
            { label: 'Range', value: '8.8m' },
            { label: 'Radius', value: '3.2m' }
          ]
        },
        3: {
          name: 'Disapparate',
          image: '',
          description: 'Gain Movement Speed and Slow Immunity, gaining Heat and leaving a trail of fire behind you.\n\n• The Trail deals Magical Damage\n• After 3 seconds, you become Immune and unable to attack, and the trail detonates dealing Magical Damage\n• YOU ALSO ERUPT DEALING MAGICAL DAMAGE TO NEARBY ENEMIES\n• You can cancel out of the Immune state early\n• This Immune state is Damage Immunity, Healing Immunity, CC Immunity, Untargetable, and makes you able to pass through allies, enemies, and Impediments',
          cooldown: '16 | 15.5 | 15 | 14.5 | 14s',
          cost: '60',
          attributes: [
            { label: 'Trail Damage Per Tick', value: '10 | 20 | 30 | 40 | 50' },
            { label: 'Trail Damage Scaling Per Tick', value: '15% Intelligence' },
            { label: 'Explode Damage', value: '60 | 120 | 180 | 240 | 300' },
            { label: 'Explode Damage Scaling', value: '75% Intelligence + 40% Strength' },
            { label: 'Erupt Damage (Aspect)', value: '80 | 120 | 160 | 200 | 240' },
            { label: 'Erupt Scaling (Aspect)', value: '50% Intelligence' },
            { label: 'Movement Speed', value: '20 | 22.5 | 25 | 27.5 | 30%' },
            { label: 'Buff Duration', value: '3s' },
            { label: 'Immunity Duration', value: '3s' },
            { label: 'Heat Generated', value: '10' },
            { label: 'Trail Radius', value: '1m' }
          ]
        },
        4: {
          name: 'Supernova',
          image: '',
          description: 'Unleash flame and fury, gaining Heat and striking 8 times along a moveable ground target location.\n\n• Each strike deals Magical Damage; subsequent hits deal reduced damage\n• The first time an enemy is hit, they are Knocked Back\n• You are CC Immune while using this ability\n• Areas are selected every 0.18s or when your targeter has moved more than 1.8m since the last area was selected',
          cooldown: '90 | 85 | 80 | 75 | 70s',
          cost: '100',
          attributes: [
            { label: 'Damage', value: '130 | 175 | 220 | 265 | 310' },
            { label: 'Damage Scaling', value: '40% Intelligence' },
            { label: 'Subsequent Damage', value: '30%' },
            { label: 'Number of Strikes', value: '8' },
            { label: 'Heat Generated', value: '40' },
            { label: 'Range', value: '8.8m' },
            { label: 'Radius', value: '1.92m' }
          ]
        }
      }
    }
  ],
  recommendedBuilds: []
};