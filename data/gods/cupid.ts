import { God, DamageType } from '../../types';

export const CUPID: God = {
  id: 'cupid',
  name: 'Cupid',
  title: 'God of Love',
  pantheon: 'Roman',
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
    { strength: 0, intelligence: 0, inhandPower: 48, baseAttackSpeed: 1.0, attackSpeedPercent: 1.456, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 18.1, magicalProtection: 26.1, damageMitigation: 0, maxHealth: 591.4, healthRegen: 1.7, maxMana: 296, manaRegen: 2.14, cooldownRate: 0, movementSpeed: 375, xpRequirement: 0 },
    // Level 2
    { strength: 0, intelligence: 0, inhandPower: 51, baseAttackSpeed: 1.0, attackSpeedPercent: 2.912, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 20.9, magicalProtection: 27.6, damageMitigation: 0, maxHealth: 684, healthRegen: 1.9, maxMana: 338, manaRegen: 2.38, cooldownRate: 0, movementSpeed: 375, xpRequirement: 308 },
    // Level 3
    { strength: 0, intelligence: 0, inhandPower: 53, baseAttackSpeed: 1.0, attackSpeedPercent: 4.368, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 23.8, magicalProtection: 28.7, damageMitigation: 0, maxHealth: 776.6, healthRegen: 2.1, maxMana: 380, manaRegen: 2.61, cooldownRate: 0, movementSpeed: 375, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 56, baseAttackSpeed: 1.0, attackSpeedPercent: 5.824, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 26.6, magicalProtection: 29.8, damageMitigation: 0, maxHealth: 869.3, healthRegen: 2.3, maxMana: 422, manaRegen: 2.85, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 58, baseAttackSpeed: 1.0, attackSpeedPercent: 7.28, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 29.5, magicalProtection: 31.8, damageMitigation: 0, maxHealth: 962, healthRegen: 2.5, maxMana: 464, manaRegen: 3.09, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 61, baseAttackSpeed: 1.0, attackSpeedPercent: 8.736, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 32.3, magicalProtection: 33.3, damageMitigation: 0, maxHealth: 1054.7, healthRegen: 2.7, maxMana: 506, manaRegen: 3.33, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 64, baseAttackSpeed: 1.0, attackSpeedPercent: 10.192, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 35.2, magicalProtection: 34.8, damageMitigation: 0, maxHealth: 1147.1, healthRegen: 2.9, maxMana: 548, manaRegen: 3.56, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 66, baseAttackSpeed: 1.0, attackSpeedPercent: 11.648, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 38, magicalProtection: 36.3, damageMitigation: 0, maxHealth: 1239.8, healthRegen: 3.1, maxMana: 590, manaRegen: 3.8, cooldownRate: 0, movementSpeed: 375, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 69, baseAttackSpeed: 1.0, attackSpeedPercent: 13.104, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 40.9, magicalProtection: 37.5, damageMitigation: 0, maxHealth: 1332.5, healthRegen: 3.3, maxMana: 632, manaRegen: 4.04, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 71, baseAttackSpeed: 1.0, attackSpeedPercent: 14.56, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 43.7, magicalProtection: 39, damageMitigation: 0, maxHealth: 1425.2, healthRegen: 3.5, maxMana: 674, manaRegen: 4.28, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 74, baseAttackSpeed: 1.0, attackSpeedPercent: 16.016, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 46.6, magicalProtection: 40.5, damageMitigation: 0, maxHealth: 1517.6, healthRegen: 3.7, maxMana: 716, manaRegen: 4.51, cooldownRate: 0, movementSpeed: 375, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 76, baseAttackSpeed: 1.0, attackSpeedPercent: 17.472, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 49.4, magicalProtection: 42, damageMitigation: 0, maxHealth: 1610.3, healthRegen: 3.9, maxMana: 758, manaRegen: 4.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 79, baseAttackSpeed: 1.0, attackSpeedPercent: 18.928, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 52.3, magicalProtection: 43.2, damageMitigation: 0, maxHealth: 1703, healthRegen: 4.1, maxMana: 800, manaRegen: 4.99, cooldownRate: 0, movementSpeed: 375, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 82, baseAttackSpeed: 1.0, attackSpeedPercent: 20.384, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 55.1, magicalProtection: 44.7, damageMitigation: 0, maxHealth: 1795.7, healthRegen: 4.3, maxMana: 842, manaRegen: 5.23, cooldownRate: 0, movementSpeed: 375, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 84, baseAttackSpeed: 1.0, attackSpeedPercent: 21.84, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 58, magicalProtection: 46.2, damageMitigation: 0, maxHealth: 1888.1, healthRegen: 4.5, maxMana: 884, manaRegen: 5.46, cooldownRate: 0, movementSpeed: 375, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 87, baseAttackSpeed: 1.0, attackSpeedPercent: 23.296, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 60.8, magicalProtection: 47.7, damageMitigation: 0, maxHealth: 1980.8, healthRegen: 4.7, maxMana: 926, manaRegen: 5.7, cooldownRate: 0, movementSpeed: 375, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 89, baseAttackSpeed: 1.0, attackSpeedPercent: 24.752, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 63.7, magicalProtection: 48.9, damageMitigation: 0, maxHealth: 2073.5, healthRegen: 4.9, maxMana: 968, manaRegen: 5.94, cooldownRate: 0, movementSpeed: 375, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 92, baseAttackSpeed: 1.0, attackSpeedPercent: 26.208, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 66.5, magicalProtection: 50.4, damageMitigation: 0, maxHealth: 2166.2, healthRegen: 5.1, maxMana: 1010, manaRegen: 6.18, cooldownRate: 0, movementSpeed: 375, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 95, baseAttackSpeed: 1.0, attackSpeedPercent: 27.664, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 69.4, magicalProtection: 51.8, damageMitigation: 0, maxHealth: 2258.6, healthRegen: 5.3, maxMana: 1052, manaRegen: 6.41, cooldownRate: 0, movementSpeed: 375, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 97, baseAttackSpeed: 1.0, attackSpeedPercent: 29.12, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 72.2, magicalProtection: 53.2, damageMitigation: 0, maxHealth: 2351.3, healthRegen: 5.5, maxMana: 1094, manaRegen: 6.65, cooldownRate: 0, movementSpeed: 375, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'Cupid Basic Attack',
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
    name: 'Lovestruck',
    image: '',
    description: 'Hitting a Basic Attack grants a stack, or 2 stacks if the target is an enemy god.\n\n• Heart Bomb, Share the Love, and Fields of Love always consume up to 8 stacks on use, granting them additional Damage, Healing, and bonus effects',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage Increase', value: '2% Per Stack' },
      { label: 'Heal Increase', value: '2% Per Stack' },
      { label: 'Max Stacks', value: '16' }
    ]
  },
  abilities: {
    1: {
      name: 'Heart Bomb',
      image: '',
      description: 'Fire an arrow of love, dealing Physical Damage to the first enemy hit and Slowing them.\n\n• After 3s, the enemy\'s heart explodes, dealing Physical Damage to all enemies within the radius\n• If you have 8 stacks of Lovestruck, all enemies in the explosion area are Stunned\n\nDeals additional damage to minions.',
      cooldown: '12s',
      cost: '60 | 65 | 70 | 75 | 80',
      attributes: [
        { label: 'Initial Damage', value: '50 | 80 | 110 | 140 | 170' },
        { label: 'Initial Damage Scaling', value: '80% Strength + 55% Intelligence' },
        { label: 'Explosion Damage', value: '50 | 80 | 110 | 140 | 170' },
        { label: 'Explosion Damage Scaling', value: '80% Strength + 55% Intelligence' },
        { label: 'Minion Bonus Damage', value: '55%' },
        { label: 'Slow', value: '20%' },
        { label: 'Stun Duration (8 Stacks)', value: '0.8s' },
        { label: 'Range', value: '8.8m' },
        { label: 'Radius', value: '0.48m' },
        { label: 'Explode Radius', value: '4m' }
      ]
    },
    2: {
      name: 'Share the Love',
      image: '',
      description: 'Lob an explosive bomb at a location that detonates after 0.75s, dealing Physical Damage to all enemies hit.\n\n• When the bomb explodes, 3 hearts spawn around the detonation location, Healing and restoring Mana and granting Attack Speed up to 3 stacks to any ally that picks them up\n• If you have 8 stacks of Lovestruck, the hearts also provide a temporary Strength and Intelligence buff\n\nThe hearts persist for 8s. When you or an ally pick up a heart, gain a stack of Lovestruck. If an ally picks up the heart, you Heal for 60% of the value and also restore Mana.',
      cooldown: '13s',
      cost: '50 | 55 | 60 | 65 | 70',
      attributes: [
        { label: 'Damage', value: '65 | 115 | 165 | 215 | 265' },
        { label: 'Damage Scaling', value: '65% Strength + 35% Intelligence' },
        { label: 'Heal', value: '15 | 25 | 35 | 45 | 55' },
        { label: 'Heal Scaling', value: '3.5% Intelligence' },
        { label: 'Mana Restore', value: '20 | 25 | 30 | 35 | 40' },
        { label: 'Mana Restore Scaling', value: '5% Intelligence' },
        { label: 'Attack Speed', value: '10% Per Stack' },
        { label: 'Strength (8 Stacks)', value: '5 | 10 | 15 | 20 | 25' },
        { label: 'Strength Scaling', value: '10% Strength' },
        { label: 'Intelligence (8 Stacks)', value: '5 | 10 | 15 | 20 | 25' },
        { label: 'Intelligence Scaling', value: '5% Intelligence' },
        { label: 'Buff Duration', value: '5s' },
        { label: 'Range', value: '8.8m' },
        { label: 'Radius', value: '1.6m' }
      ]
    },
    3: {
      name: 'Flutter',
      image: '',
      description: 'Dash forward quickly, leaving behind a trail that increases all allies\' Attack and Movement Speed.\n\n• You also gain Attack Speed after dashing, which is active for the same duration as the trail and stacks with the trail\'s buff\n\nThe Attack Speed buff only scales with Attack Speed from items.',
      cooldown: '16 | 15 | 14 | 13 | 12s',
      cost: '70',
      attributes: [
        { label: 'Attack Speed', value: '10 | 12.5 | 15 | 17.5 | 20%' },
        { label: 'Movement Speed', value: '30%' },
        { label: 'Lifetime', value: '6s' },
        { label: 'Range', value: '8.8m' }
      ]
    },
    4: {
      name: 'Fields of Love',
      image: '',
      description: 'Fire a volley of arrows in an area, Slowing and Crippling all enemies inside.\n\n• The arrows grow for 2s before exploding, dealing Physical Damage and Mesmerizing all enemies inside the area, while Healing all allies\n• If you have 8 stacks of Lovestruck, enemies are Stunned instead of Mesmerized',
      cooldown: '100s',
      cost: '60 | 65 | 70 | 75 | 80',
      attributes: [
        { label: 'Damage', value: '200 | 280 | 360 | 440 | 520' },
        { label: 'Damage Scaling', value: '100% Strength + 75% Intelligence' },
        { label: 'Heal', value: '60 | 75 | 90 | 105 | 120' },
        { label: 'Heal Scaling', value: '12.5% Intelligence' },
        { label: 'Slow', value: '30%' },
        { label: 'Mesmerize Duration', value: '1s' },
        { label: 'Stun Duration (8 Stacks)', value: '1s' },
        { label: 'Range', value: '8.8m' },
        { label: 'Radius', value: '5.6m' }
      ]
    }
  },
  aspects: [
    {
      id: 'love',
      name: 'Aspect of Love',
      image: '',
      description: 'Heart Bomb\'s damage is decreased but the enemy hit has reduced Attack Speed and the explosion area heals allies. At 8 stacks of Lovestruck, allies also gain a Health Shield.',
      basicAttack: {
        name: 'Cupid Basic Attack',
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
        name: 'Lovestruck',
        image: '',
        description: 'Hitting a Basic Attack grants a stack, or 2 stacks if the target is an enemy god.\n\n• Heart Bomb, Share the Love, and Fields of Love always consume up to 8 stacks on use, granting them additional Damage, Healing, and bonus effects',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Damage Increase', value: '2% Per Stack' },
          { label: 'Heal Increase', value: '2% Per Stack' },
          { label: 'Max Stacks', value: '16' }
        ]
      },
      abilities: {
        1: {
          name: 'Heart Bomb',
          image: '',
          description: 'Fire an arrow of love, dealing Physical Damage to the first enemy hit and Slowing their Movement Speed and Attack Speed.\n\n• After 3s, the enemy\'s heart explodes, dealing Physical Damage to all enemies within the radius\n• Allies in the explosion area gain Healing\n• If you have 8 stacks of Lovestruck, all enemies in the explosion area are Stunned and allies gain a Health Shield\n\n• DAMAGE IS DECREASED COMPARED TO BASE KIT\n• ALSO SLOWS ENEMY ATTACK SPEED\n• EXPLOSION HEALS ALLIES\n• 8 STACKS GRANTS HEALTH SHIELD TO ALLIES',
          cooldown: '12s',
          cost: '60 | 65 | 70 | 75 | 80',
          attributes: [
            { label: 'Initial Damage', value: '40 | 60 | 80 | 100 | 120' },
            { label: 'Initial Damage Scaling', value: '15% Strength + 15% Intelligence' },
            { label: 'Explosion Damage', value: '40 | 60 | 80 | 100 | 120' },
            { label: 'Explosion Damage Scaling', value: '15% Strength + 15% Intelligence' },
            { label: 'Heal', value: '25 | 40 | 55 | 70 | 85' },
            { label: 'Heal Scaling', value: '8% Strength + 8% Intelligence' },
            { label: 'Shield Health (8 Stacks)', value: '80 | 100 | 120 | 140 | 160' },
            { label: 'Shield Health Scaling', value: '40% Intelligence' },
            { label: 'Slow', value: '20%' },
            { label: 'Attack Speed Slow', value: '20%' },
            { label: 'Stun Duration (8 Stacks)', value: '0.8s' },
            { label: 'Range', value: '8.8m' },
            { label: 'Radius', value: '0.48m' },
            { label: 'Explode Radius', value: '4m' }
          ]
        },
        2: {
          name: 'Share the Love',
          image: '',
          description: 'Lob an explosive bomb at a location that detonates after 0.75s, dealing Physical Damage to all enemies hit.\n\n• When the bomb explodes, 3 hearts spawn around the detonation location, Healing and restoring Mana and granting Attack Speed up to 3 stacks to any ally that picks them up\n• If you have 8 stacks of Lovestruck, the hearts also provide a temporary Strength and Intelligence buff\n\nThe hearts persist for 8s. When you or an ally pick up a heart, gain a stack of Lovestruck. If an ally picks up the heart, you Heal for 60% of the value and also restore Mana.',
          cooldown: '13s',
          cost: '50 | 55 | 60 | 65 | 70',
          attributes: [
            { label: 'Damage', value: '65 | 115 | 165 | 215 | 265' },
            { label: 'Damage Scaling', value: '65% Strength + 35% Intelligence' },
            { label: 'Heal', value: '15 | 25 | 35 | 45 | 55' },
            { label: 'Heal Scaling', value: '3.5% Intelligence' },
            { label: 'Mana Restore', value: '20 | 25 | 30 | 35 | 40' },
            { label: 'Mana Restore Scaling', value: '5% Intelligence' },
            { label: 'Attack Speed', value: '10% Per Stack' },
            { label: 'Strength (8 Stacks)', value: '5 | 10 | 15 | 20 | 25' },
            { label: 'Strength Scaling', value: '10% Strength' },
            { label: 'Intelligence (8 Stacks)', value: '5 | 10 | 15 | 20 | 25' },
            { label: 'Intelligence Scaling', value: '5% Intelligence' },
            { label: 'Buff Duration', value: '5s' },
            { label: 'Range', value: '8.8m' },
            { label: 'Radius', value: '1.6m' }
          ]
        },
        3: {
          name: 'Flutter',
          image: '',
          description: 'Dash forward quickly, leaving behind a trail that increases all allies\' Attack and Movement Speed.\n\n• You also gain Attack Speed after dashing, which is active for the same duration as the trail and stacks with the trail\'s buff\n\nThe Attack Speed buff only scales with Attack Speed from items.',
          cooldown: '16 | 15 | 14 | 13 | 12s',
          cost: '70',
          attributes: [
            { label: 'Attack Speed', value: '10 | 12.5 | 15 | 17.5 | 20%' },
            { label: 'Movement Speed', value: '30%' },
            { label: 'Lifetime', value: '6s' },
            { label: 'Range', value: '8.8m' }
          ]
        },
        4: {
          name: 'Fields of Love',
          image: '',
          description: 'Fire a volley of arrows in an area, Slowing and Crippling all enemies inside.\n\n• The arrows grow for 2s before exploding, dealing Physical Damage and Mesmerizing all enemies inside the area, while Healing all allies\n• If you have 8 stacks of Lovestruck, enemies are Stunned instead of Mesmerized',
          cooldown: '100s',
          cost: '60 | 65 | 70 | 75 | 80',
          attributes: [
            { label: 'Damage', value: '200 | 280 | 360 | 440 | 520' },
            { label: 'Damage Scaling', value: '100% Strength + 75% Intelligence' },
            { label: 'Heal', value: '60 | 75 | 90 | 105 | 120' },
            { label: 'Heal Scaling', value: '12.5% Intelligence' },
            { label: 'Slow', value: '30%' },
            { label: 'Mesmerize Duration', value: '1s' },
            { label: 'Stun Duration (8 Stacks)', value: '1s' },
            { label: 'Range', value: '8.8m' },
            { label: 'Radius', value: '5.6m' }
          ]
        }
      }
    }
  ],
  recommendedBuilds: []
};