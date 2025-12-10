import { God, DamageType } from '../../types';

export const ALADDIN: God = {
  id: 'aladdin',
  name: 'Aladdin',
  title: 'Street Rat of Agrabah',
  pantheon: 'Arabian',
  role: 'Assassin',
  lanes: ['Jungle', 'Mid'],
  damageType: DamageType.Magical,
  image: 'https://image2url.com/images/1764827204385-21940aa7-8047-414a-ae4e-2dec4c66a8f8.webp',
  videoGuideUrl: 'https://www.youtube.com/watch?v=ixIw0_dht_I&list=PLc3QYpLqM0tZIXDctOlabeD-4CroUPZJI&index=36',
  goodAgainst: [],
  badAgainst: [],
  levelingOrder: [],
  statsByLevel: [
    // Level 1
    { strength: 0, intelligence: 0, inhandPower: 44, baseAttackSpeed: 0.97, attackSpeedPercent: 1.456, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 18.1, magicalProtection: 26.1, damageMitigation: 0, maxHealth: 622.5, healthRegen: 1.7, maxMana: 296, manaRegen: 2.25, cooldownRate: 0, movementSpeed: 365, xpRequirement: 0 },
    // Level 2
    { strength: 0, intelligence: 0, inhandPower: 47, baseAttackSpeed: 0.97, attackSpeedPercent: 2.912, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 20.9, magicalProtection: 27.6, damageMitigation: 0, maxHealth: 720, healthRegen: 1.9, maxMana: 338, manaRegen: 2.5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 308 },
    // Level 3
    { strength: 0, intelligence: 0, inhandPower: 49, baseAttackSpeed: 0.97, attackSpeedPercent: 4.368, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 23.8, magicalProtection: 29.0, damageMitigation: 0, maxHealth: 817.5, healthRegen: 2.1, maxMana: 380, manaRegen: 2.75, cooldownRate: 0, movementSpeed: 365, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 52, baseAttackSpeed: 0.97, attackSpeedPercent: 5.824, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 26.6, magicalProtection: 30.4, damageMitigation: 0, maxHealth: 915, healthRegen: 2.3, maxMana: 422, manaRegen: 3.0, cooldownRate: 0, movementSpeed: 365, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 54, baseAttackSpeed: 0.97, attackSpeedPercent: 7.28, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 29.5, magicalProtection: 31.8, damageMitigation: 0, maxHealth: 1012.5, healthRegen: 2.5, maxMana: 464, manaRegen: 3.25, cooldownRate: 0, movementSpeed: 365, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 56, baseAttackSpeed: 0.97, attackSpeedPercent: 8.736, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 32.3, magicalProtection: 33.3, damageMitigation: 0, maxHealth: 1110, healthRegen: 2.7, maxMana: 506, manaRegen: 3.5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 59, baseAttackSpeed: 0.97, attackSpeedPercent: 10.192, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 35.2, magicalProtection: 34.7, damageMitigation: 0, maxHealth: 1207.5, healthRegen: 2.9, maxMana: 548, manaRegen: 3.75, cooldownRate: 0, movementSpeed: 365, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 61, baseAttackSpeed: 0.97, attackSpeedPercent: 11.648, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 38.0, magicalProtection: 36.1, damageMitigation: 0, maxHealth: 1305, healthRegen: 3.1, maxMana: 590, manaRegen: 4.0, cooldownRate: 0, movementSpeed: 365, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 64, baseAttackSpeed: 0.97, attackSpeedPercent: 13.104, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 40.9, magicalProtection: 37.5, damageMitigation: 0, maxHealth: 1402.5, healthRegen: 3.3, maxMana: 632, manaRegen: 4.25, cooldownRate: 0, movementSpeed: 365, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 66, baseAttackSpeed: 0.97, attackSpeedPercent: 14.56, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 43.7, magicalProtection: 39.0, damageMitigation: 0, maxHealth: 1500, healthRegen: 3.5, maxMana: 674, manaRegen: 4.5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 68, baseAttackSpeed: 0.97, attackSpeedPercent: 16.016, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 46.6, magicalProtection: 40.4, damageMitigation: 0, maxHealth: 1597.5, healthRegen: 3.7, maxMana: 716, manaRegen: 4.75, cooldownRate: 0, movementSpeed: 365, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 71, baseAttackSpeed: 0.97, attackSpeedPercent: 17.472, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 49.4, magicalProtection: 41.8, damageMitigation: 0, maxHealth: 1695, healthRegen: 3.9, maxMana: 758, manaRegen: 5.0, cooldownRate: 0, movementSpeed: 365, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 73, baseAttackSpeed: 0.97, attackSpeedPercent: 18.928, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 52.3, magicalProtection: 43.2, damageMitigation: 0, maxHealth: 1792.5, healthRegen: 4.1, maxMana: 800, manaRegen: 5.25, cooldownRate: 0, movementSpeed: 365, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 76, baseAttackSpeed: 0.97, attackSpeedPercent: 20.384, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 55.1, magicalProtection: 44.7, damageMitigation: 0, maxHealth: 1890, healthRegen: 4.3, maxMana: 842, manaRegen: 5.5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 78, baseAttackSpeed: 0.97, attackSpeedPercent: 21.84, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 58.0, magicalProtection: 46.1, damageMitigation: 0, maxHealth: 1987.5, healthRegen: 4.5, maxMana: 884, manaRegen: 5.75, cooldownRate: 0, movementSpeed: 365, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 80, baseAttackSpeed: 0.97, attackSpeedPercent: 23.296, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 60.8, magicalProtection: 47.5, damageMitigation: 0, maxHealth: 2085, healthRegen: 4.7, maxMana: 926, manaRegen: 6.0, cooldownRate: 0, movementSpeed: 365, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 83, baseAttackSpeed: 0.97, attackSpeedPercent: 24.752, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 63.7, magicalProtection: 48.9, damageMitigation: 0, maxHealth: 2182.5, healthRegen: 4.9, maxMana: 968, manaRegen: 6.25, cooldownRate: 0, movementSpeed: 365, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 85, baseAttackSpeed: 0.97, attackSpeedPercent: 26.208, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 66.5, magicalProtection: 50.4, damageMitigation: 0, maxHealth: 2280, healthRegen: 5.1, maxMana: 1010, manaRegen: 6.5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 88, baseAttackSpeed: 0.97, attackSpeedPercent: 27.664, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 69.4, magicalProtection: 51.8, damageMitigation: 0, maxHealth: 2377.5, healthRegen: 5.3, maxMana: 1052, manaRegen: 6.75, cooldownRate: 0, movementSpeed: 365, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 90, baseAttackSpeed: 0.97, attackSpeedPercent: 29.12, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 72.2, magicalProtection: 53.2, damageMitigation: 0, maxHealth: 2475, healthRegen: 5.5, maxMana: 1094, manaRegen: 7.0, cooldownRate: 0, movementSpeed: 365, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'Aladdin Basic Attack',
    image: 'https://image2url.com/images/1764827249697-1beeb2af-eea0-4ae5-ac43-4dd712fa40d6.webp',
    description: 'Deal Magical Damage to an enemy in front of you.\n\nIf multiple enemies are in the area, the enemy closest to the center of the area will be hit.\n\nHas a 5 hit chain. Attacks in order of 1, 1, 0.33, 0.33, 0.5x damage and swing time. Final 3 Hits Cleave.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage Scaling', value: '100% Strength + 30% Intelligence' },
      { label: 'Range', value: '1.92m' },
      { label: 'Cone Angle', value: '120 degrees' }
    ]
  },
  passive: {
    name: 'Three Wishes',
    image: 'https://image2url.com/images/1764827219405-8f4f3983-5049-46e3-bb3f-d867dd1affab.webp',
    description: 'Make 3 wishes at any time. Gain a charge of Genie\'s Strength every 10s (-1s per enemy slain, -5s for gods).\n\n• Wish: Wealth. +250 Gold. +10% Gold Gains. God Kills/Assists grant +33 Gold for 3m.\n• Wish: Immortality. While dead, instantly revive. Gain 75% Movement Speed for 10s when leaving fountain.\n• Wish: Power. Reset ability and item cooldowns. Gain a charge of Genie\'s Strength.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Genie Charge Time', value: '10s' },
      { label: 'Enemy Kill Reduction', value: '-1s' },
      { label: 'God Kill Reduction', value: '-5s' },
      { label: 'Wealth Bonus Gold', value: '+250' },
      { label: 'Wealth Gold Gain', value: '+10%' },
      { label: 'Wealth Kill/Assist Gold', value: '+33 Gold for 3m' },
      { label: 'Immortality Movement Speed', value: '75% for 10s' }
    ]
  },
  abilities: {
    1: {
      name: 'Kufic Invocation',
      image: 'https://image2url.com/images/1764827260647-b636158e-9b75-4c15-8780-805772b6f12e.webp',
      description: 'Fire 5 Kufic symbols dealing Magical Damage in a cone. Charge to narrow the cone. Fully charged symbols merge, dealing increased Magical Damage.\n\n• When fully charged the symbol travels further and hits a larger area\n• Use a charge of Genie\'s Strength to send symbols back to Aladdin, dealing Magical Damage when small or increased Magical Damage when large\n\nMust have a charge of Genie\'s Strength when cast to be able to refire. You have 5s to refire. Subsequent hits deal 20% of the initial damage.',
      cooldown: '13s',
      cost: '85',
      attributes: [
        { label: 'Small Damage (Send)', value: '35 | 65 | 95 | 125 | 155' },
        { label: 'Small Scaling (Send)', value: '40% Intelligence + 35% Strength' },
        { label: 'Large Damage (Send)', value: '60 | 115 | 170 | 225 | 280' },
        { label: 'Large Scaling (Send)', value: '72% Intelligence + 63% Strength' },
        { label: 'Small Damage (Return)', value: '20 | 40 | 60 | 80 | 100' },
        { label: 'Small Scaling (Return)', value: '25% Intelligence + 35% Strength' },
        { label: 'Large Damage (Return)', value: '35 | 70 | 105 | 140 | 175' },
        { label: 'Large Scaling (Return)', value: '50% Intelligence + 55% Strength' },
        { label: 'Range', value: '8.8/11.2m' },
        { label: 'Radius', value: '0.8/1.6m' },
        { label: 'Max Starting Angle', value: '90 degrees' }
      ]
    },
    2: {
      name: 'Sultan\'s Grace',
      image: 'https://image2url.com/images/1764827278634-3991e7b5-ab3e-4764-bc58-cdab2a7ae558.webp',
      description: 'Dash forward dealing Magical Damage to enemies you pass through.\n\n• Deals 0.5% increased damage to enemies for each % Health below 50%\n• Use a charge of Genie\'s Strength to summon the Genie to unleash a flurry of 5 punches that deal Magical Damage to enemies in front of Aladdin',
      cooldown: '16 | 15.5 | 15 | 14.5 | 14s',
      cost: '50 | 55 | 60 | 65 | 70',
      attributes: [
        { label: 'Dash Damage', value: '90 | 135 | 180 | 225 | 270' },
        { label: 'Dash Scaling', value: '65% Intelligence + 65% Strength' },
        { label: 'Punch Damage (per punch)', value: '20 | 30 | 40 | 50 | 60' },
        { label: 'Punch Scaling', value: '20% Intelligence + 35% Strength' },
        { label: 'Missing HP Bonus Scaling', value: '0.5% per 1% HP below 50%' },
        { label: 'Dash Range', value: '6.4m' }
      ]
    },
    3: {
      name: 'Agile Run',
      image: 'https://image2url.com/images/1764827176811-42e2c55c-7557-45a2-8f5b-acf70e5b82c1.webp',
      description: 'Dash forward. Dashing into a wall causes you to run along it before leaping to a location, dealing Magical Damage to enemies in the landing area.\n\n• Use a charge of Genie\'s Strength to call the Genie to slam down at the landing location. Enemies take Magical Damage and are knocked straight up\n\nThe angle Aladdin runs along the wall is determined by the angle Aladdin approaches the wall. Aladdin can toggle using a charge of Genie\'s Strength until a landing location is selected. Aladdin runs for 8.8m or until he reaches 5m in height. The wall run will always take 1.25s.',
      cooldown: '16s',
      cost: '50 | 55 | 60 | 65 | 70',
      attributes: [
        { label: 'Landing Damage', value: '60 | 115 | 170 | 225 | 280' },
        { label: 'Landing Scaling', value: '70% Intelligence + 50% Strength' },
        { label: 'Genie Damage', value: '35 | 50 | 65 | 80 | 95' },
        { label: 'Genie Scaling', value: '20% Intelligence + 40% Strength' },
        { label: 'Leap Range', value: '8.8m' },
        { label: 'Leap Radius', value: '3.2m' },
        { label: 'Wall Run Distance', value: '8.8m' },
        { label: 'Wall Run Duration', value: '1.25s' }
      ]
    },
    4: {
      name: 'Into The Lamp',
      image: 'https://image2url.com/images/1764827288883-5aef9607-c08d-4482-9bbe-d1fd95af7f8c.webp',
      description: 'Throw the Lamp forward, dealing Magical Damage and stopping on first enemy god hit. If successful, Aladdin and the enemy god are pulled into the lamp to challenge each other.\n\n• They gain a Health Shield (10% Current Health). Aladdin\'s non-ultimate cooldowns are reset. The target\'s non-ultimate cooldowns are halved\n• The Lamp is left behind, allowing any god to enter the lamp and join the ongoing challenge\n\nFight lasts 16s; an escape appears at 8s. Everyone is expelled when the timer ends. The fight also ends early if a combatant dies (Aladdin or Target), or if only one team remains. Entering or leaving requires a 0.5s lamp interaction, interrupted by damage. Non-combatants deal and take 33% reduced damage. Gods Inside cannot target gods outside, and gods outside cannot target gods inside. Recall and Aladdin\'s Ultimate can\'t be used inside the lamp.',
      cooldown: '90s',
      cost: '70 | 80 | 90 | 100 | 110',
      attributes: [
        { label: 'Projectile Damage', value: '150 | 250 | 350 | 450 | 550' },
        { label: 'Damage Scaling', value: '90% Intelligence + 65% Strength' },
        { label: 'Shield', value: '10% Current Health' },
        { label: 'Aladdin CDR', value: '100% (Full Reset)' },
        { label: 'Enemy CDR', value: '50%' },
        { label: 'Protections', value: '30 | 35 | 40 | 45 | 50' },
        { label: 'Fight Duration', value: '16s' },
        { label: 'Escape Appears', value: '8s' },
        { label: 'Range', value: '13.6m' }
      ]
    }
  },
  aspects: [],
  recommendedBuilds: []
};