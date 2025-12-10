import { God, DamageType } from '../../types';

export const MORDRED: God = {
  id: 'mordred',
  name: 'Mordred',
  title: 'Breaker of the Round Table',
  pantheon: 'Arthurian',
  role: 'Warrior',
  lanes: ['Solo', 'Jungle'],
  damageType: DamageType.Physical,
  image: 'https://static.smite2.live/smite2/GODS/Mordred/Default/t_GodCard_Mordred.webp',
  videoGuideUrl: '',
  goodAgainst: [],
  badAgainst: [],
  levelingOrder: [],
  statsByLevel: [
    // Level 1
    { strength: 0, intelligence: 0, inhandPower: 44.4, baseAttackSpeed: 0.9672, attackSpeedPercent: 1.456, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 20.4, magicalProtection: 28.6, damageMitigation: 0, maxHealth: 647.4, healthRegen: 1.768, maxMana: 296, manaRegen: 2.25, cooldownRate: 0, movementSpeed: 365, xpRequirement: 0 },
    // Level 2
    { strength: 0, intelligence: 0, inhandPower: 46.8, baseAttackSpeed: 0.9672, attackSpeedPercent: 2.912, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 23.52, magicalProtection: 30.16, damageMitigation: 0, maxHealth: 748.8, healthRegen: 1.976, maxMana: 338, manaRegen: 2.5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 308 },
    // Level 3
    { strength: 0, intelligence: 0, inhandPower: 49.2, baseAttackSpeed: 0.9672, attackSpeedPercent: 4.368, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 26.64, magicalProtection: 31.72, damageMitigation: 0, maxHealth: 850.2, healthRegen: 2.184, maxMana: 380, manaRegen: 2.75, cooldownRate: 0, movementSpeed: 365, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 51.6, baseAttackSpeed: 0.9672, attackSpeedPercent: 5.824, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 29.76, magicalProtection: 33.28, damageMitigation: 0, maxHealth: 951.6, healthRegen: 2.392, maxMana: 422, manaRegen: 3, cooldownRate: 0, movementSpeed: 365, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 54, baseAttackSpeed: 0.9672, attackSpeedPercent: 7.28, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 32.88, magicalProtection: 34.84, damageMitigation: 0, maxHealth: 1053, healthRegen: 2.6, maxMana: 464, manaRegen: 3.25, cooldownRate: 0, movementSpeed: 365, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 56.4, baseAttackSpeed: 0.9672, attackSpeedPercent: 8.736, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 36, magicalProtection: 36.4, damageMitigation: 0, maxHealth: 1154.4, healthRegen: 2.808, maxMana: 506, manaRegen: 3.5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 58.8, baseAttackSpeed: 0.9672, attackSpeedPercent: 10.192, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 39.12, magicalProtection: 37.96, damageMitigation: 0, maxHealth: 1255.8, healthRegen: 3.016, maxMana: 548, manaRegen: 3.75, cooldownRate: 0, movementSpeed: 365, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 61.2, baseAttackSpeed: 0.9672, attackSpeedPercent: 11.648, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 42.24, magicalProtection: 39.52, damageMitigation: 0, maxHealth: 1357.2, healthRegen: 3.224, maxMana: 590, manaRegen: 4, cooldownRate: 0, movementSpeed: 365, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 63.6, baseAttackSpeed: 0.9672, attackSpeedPercent: 13.104, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 45.36, magicalProtection: 41.08, damageMitigation: 0, maxHealth: 1458.6, healthRegen: 3.432, maxMana: 632, manaRegen: 4.25, cooldownRate: 0, movementSpeed: 365, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 66, baseAttackSpeed: 0.9672, attackSpeedPercent: 14.56, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 48.48, magicalProtection: 42.64, damageMitigation: 0, maxHealth: 1560, healthRegen: 3.64, maxMana: 674, manaRegen: 4.5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 68.4, baseAttackSpeed: 0.9672, attackSpeedPercent: 16.016, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 51.6, magicalProtection: 44.2, damageMitigation: 0, maxHealth: 1661.4, healthRegen: 3.848, maxMana: 716, manaRegen: 4.75, cooldownRate: 0, movementSpeed: 365, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 70.8, baseAttackSpeed: 0.9672, attackSpeedPercent: 17.472, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 54.72, magicalProtection: 45.76, damageMitigation: 0, maxHealth: 1762.8, healthRegen: 4.056, maxMana: 758, manaRegen: 5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 73.2, baseAttackSpeed: 0.9672, attackSpeedPercent: 18.928, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 57.84, magicalProtection: 47.32, damageMitigation: 0, maxHealth: 1864.2, healthRegen: 4.264, maxMana: 800, manaRegen: 5.25, cooldownRate: 0, movementSpeed: 365, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 75.6, baseAttackSpeed: 0.9672, attackSpeedPercent: 20.384, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 60.96, magicalProtection: 48.88, damageMitigation: 0, maxHealth: 1965.6, healthRegen: 4.472, maxMana: 842, manaRegen: 5.5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 78, baseAttackSpeed: 0.9672, attackSpeedPercent: 21.84, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 64.08, magicalProtection: 50.44, damageMitigation: 0, maxHealth: 2067, healthRegen: 4.68, maxMana: 884, manaRegen: 5.75, cooldownRate: 0, movementSpeed: 365, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 80.4, baseAttackSpeed: 0.9672, attackSpeedPercent: 23.296, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 67.2, magicalProtection: 52, damageMitigation: 0, maxHealth: 2168.4, healthRegen: 4.888, maxMana: 926, manaRegen: 6, cooldownRate: 0, movementSpeed: 365, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 82.8, baseAttackSpeed: 0.9672, attackSpeedPercent: 24.752, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 70.32, magicalProtection: 53.56, damageMitigation: 0, maxHealth: 2269.8, healthRegen: 5.096, maxMana: 968, manaRegen: 6.25, cooldownRate: 0, movementSpeed: 365, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 85.2, baseAttackSpeed: 0.9672, attackSpeedPercent: 26.208, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 73.44, magicalProtection: 55.12, damageMitigation: 0, maxHealth: 2371.2, healthRegen: 5.304, maxMana: 1010, manaRegen: 6.5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 87.6, baseAttackSpeed: 0.9672, attackSpeedPercent: 27.664, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 76.56, magicalProtection: 56.68, damageMitigation: 0, maxHealth: 2472.6, healthRegen: 5.512, maxMana: 1052, manaRegen: 6.75, cooldownRate: 0, movementSpeed: 365, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 90, baseAttackSpeed: 0.9672, attackSpeedPercent: 29.12, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 79.68, magicalProtection: 58.24, damageMitigation: 0, maxHealth: 2574, healthRegen: 5.72, maxMana: 1094, manaRegen: 7, cooldownRate: 0, movementSpeed: 365, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'Mordred Basic Attack',
    image: 'https://static.smite2.live/smite2/GODS/common/Icon_BasicAttack_Physical.webp',
    description: 'Deal Physical Damage to an enemy in front of you.\n\nIf multiple enemies are in the area, the enemy closest to the center of the area will be hit.\n\nHas a 4 hit chain. Attacks in order of Mourning, Clarent, Clarent, Mourning with a 1, 0.75, 0.75, 1x swing time.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Mourning Damage Scaling', value: '100% Strength + 20% Intelligence' },
      { label: 'Clarent Damage Scaling', value: '60% Strength + 100% Intelligence' },
      { label: 'Range', value: '1.92m' },
      { label: 'Cone Angle', value: '120 degrees' }
    ]
  },
  passive: {
    name: 'Wrath of the Forsaken',
    image: 'https://static.smite2.live/smite2/GODS/Mordred/Abilities/Mordred_Passive.webp',
    description: 'Hit enemies to gain Wrath.\n\n• Your Ultimate Ability Heart Slash can only be used after reaching 40 Wrath\n• Your Ultimate Ability Pursue the Weak can only be used after reaching 80 Wrath\n\nAfter using an ability or attacking, your Interact key becomes a Dash forward.\n• This deals Physical Damage to enemies hit',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Dash Damage', value: '15 + 4 Per Level' },
      { label: 'Wrath from Ability (God)', value: '2' },
      { label: 'Wrath from Basic Attack (God)', value: '1' },
      { label: 'Wrath from Minion Hit', value: '1' },
      { label: 'Passive Wrath Gain', value: '1 every 4s' }
    ]
  },
  abilities: {
    1: {
      name: 'Cruel Strikes',
      image: 'https://static.smite2.live/smite2/GODS/Mordred/Abilities/Mordred_A01.webp',
      description: 'Strike twice with your swords.\n\n• First Slash, dealing Physical Damage to enemies in front of you\n• Then Slam, dealing Physical Damage to enemies in a line and either dealing bonus damage or Healing, based on your Basic Attack Chain\n\nLine attack deals Bonus damage on hit if Mourning is next in the basic attack chain.\nLine attack Heals you on hit if Clarent is next in the basic attack chain.\nLower healing on hitting enemy minions.',
      cooldown: '14 | 13 | 12 | 11 | 10s',
      cost: '45 | 50 | 55 | 60 | 65',
      attributes: [
        { label: 'Slash Damage', value: '75 | 100 | 125 | 150 | 175' },
        { label: 'Slash Damage Scaling', value: '45% Strength' },
        { label: 'Slam Damage', value: '85 | 120 | 155 | 190 | 225' },
        { label: 'Slam Damage Scaling', value: '65% Strength' },
        { label: 'Bonus Damage (Mourning)', value: '40% Protections' },
        { label: 'Heal (Clarent)', value: '45% Protections' },
        { label: 'Minion Heal', value: '8 | 11 | 14 | 17 | 20' },
        { label: 'Slash Radius', value: '4m' },
        { label: 'Slash Angle', value: '90 degrees' },
        { label: 'Slam Range', value: '4m' },
        { label: 'Slam Radius', value: '0.75m' }
      ]
    },
    2: {
      name: 'Bloodrage',
      image: 'https://static.smite2.live/smite2/GODS/Mordred/Abilities/Mordred_A02.webp',
      description: 'Deal Physical Damage to enemies around you, then gain increased Attack Speed and Movement Speed.\n\n• While buffed, basic attack hits on enemies apply stacks, reducing their Protections and increasing your own as well as providing bonus Attack Speed\n• Hitting an enemy god with the initial hit of this attack applies two stacks\n\nPhysical Protection buff and debuff stacks up to 4 times.\nBonus Protections are refreshed but Bonus Attack Speed is lost when the Movement Speed buff ends.',
      cooldown: '14s',
      cost: '50 | 55 | 60 | 65 | 70',
      attributes: [
        { label: 'Damage', value: '70 | 115 | 160 | 205 | 250' },
        { label: 'Damage Scaling', value: '60% Strength + 40% Intelligence' },
        { label: 'Attack Speed', value: '32 | 34 | 36 | 38 | 40%' },
        { label: 'Attack Speed Per Stack', value: '5%' },
        { label: 'Movement Speed', value: '12 | 14 | 16 | 18 | 20%' },
        { label: 'Protections Buff', value: '6 | 7 | 8 | 9 | 10' },
        { label: 'Protections Reduced', value: '4 | 5 | 6 | 7 | 8' },
        { label: 'Buff Duration', value: '4 | 4.5 | 5 | 5.5 | 6s' },
        { label: 'Radius', value: '3.2m' }
      ]
    },
    3: {
      name: 'Severing Slice',
      image: 'https://static.smite2.live/smite2/GODS/Mordred/Abilities/Mordred_A03.webp',
      description: 'Fire a projectile that deals Physical Damage and Slows enemies.\n\n• Direct hits with the center of the projectile cause targets to Bleed, taking Bonus Physical Damage as they move.\n\nEnemy gods are damaged for every 1.25m they move.\nMinions take damage over time instead of due to movement.',
      cooldown: '12s',
      cost: '40 | 50 | 60 | 70 | 80',
      attributes: [
        { label: 'Damage', value: '55 | 85 | 115 | 145 | 175' },
        { label: 'Damage Scaling', value: '70% Intelligence' },
        { label: 'Bleed Damage', value: '25 | 30 | 35 | 40 | 45' },
        { label: 'Bleed Damage Scaling', value: '12.5% Strength' },
        { label: 'Minion Damage', value: '15 | 20 | 25 | 30 | 35' },
        { label: 'Minion Damage Scaling', value: '5% Strength' },
        { label: 'Slow', value: '30%' },
        { label: 'Slow Duration', value: '2.5s' },
        { label: 'Range', value: '9.6m' },
        { label: 'Radius', value: '0.6m' },
        { label: 'Inner Radius', value: '0.2m' }
      ]
    },
    4: {
      name: 'Heart Slash / Pursue the Weak',
      image: 'https://static.smite2.live/smite2/GODS/Mordred/Abilities/Mordred_A05.webp',
      description: 'Mordred has two ultimate abilities that share a cooldown but require different amounts of Wrath to use.',
      cooldown: '20s',
      cost: '40 Wrath (Heart Slash) | 80 Wrath (Pursue the Weak)',
      attributes: [],
      subAbilities: [
        {
          name: 'Heart Slash',
          description: 'Deal Physical Damage to enemies in an area in front of you.\n\nIf you hit an enemy god, they are Rooted. You then Channel to siphon their lifeforce, gaining a Health Shield and Healing over time while dealing Physical Damage repeatedly to that enemy.\n\nAbility repeatedly deals damage every 0.3s over 1.5 seconds.\nYou are Slowed while Channeling.',
          image: 'https://static.smite2.live/smite2/GODS/Mordred/Abilities/Mordred_A05.webp',
          attributes: [
            { label: 'Damage', value: '100 | 155 | 210 | 265 | 320' },
            { label: 'Damage Scaling', value: '75% Strength' },
            { label: 'Damage Per Tick', value: '30 | 40 | 50 | 60 | 70' },
            { label: 'Damage Scaling Per Tick', value: '25% Intelligence' },
            { label: 'Shield', value: '160 | 200 | 240 | 280 | 320' },
            { label: 'Heal', value: '10 | 20 | 30 | 40 | 50' },
            { label: 'Heal Scaling', value: '12.5% Intelligence' },
            { label: 'Channel Duration', value: '1.5s' },
            { label: 'Tick Rate', value: '0.3s' },
            { label: 'Radius', value: '1m' },
            { label: 'Range', value: '6m' },
            { label: 'Cost', value: '40 Wrath' }
          ]
        },
        {
          name: 'Pursue the Weak',
          description: 'Become CC Immune and charge forward, traveling through walls, stopping on the first enemy god hit.\n\n• Nearby enemies take Physical Damage and are Stunned\n• After a short delay, you launch yourself and Stunned enemies into the sky, repeatedly dealing Physical Damage\n• You gain Health per enemy god hit with this attack\n\nCharge lasts 4 seconds but will continue if within a wall, ending immediately when possible.\nYou gain vision of all enemies around you while Charging.\nIf no enemy gods are able to be Displaced, the follow-up attack will not start.',
          image: 'https://static.smite2.live/smite2/GODS/Mordred/Abilities/Mordred_A04.webp',
          attributes: [
            { label: 'Damage', value: '170 | 220 | 270 | 320 | 370' },
            { label: 'Damage Scaling', value: '80% Strength + 75% Intelligence' },
            { label: 'Damage Per Tick', value: '85 | 105 | 125 | 145 | 165' },
            { label: 'Damage Scaling Per Tick', value: '20% Strength + 15% Intelligence' },
            { label: 'Heal', value: '30 | 35 | 40 | 45 | 50' },
            { label: 'Heal Scaling', value: '25% Intelligence' },
            { label: 'Stun Duration', value: '0.5s' },
            { label: 'Charge Duration', value: '4s' },
            { label: 'Radius', value: '3.2m' },
            { label: 'Cost', value: '80 Wrath' }
          ]
        }
      ]
    }
  },
  aspects: [
    {
      id: 'rage',
      name: 'Aspect of Rage',
      image: 'https://static.smite2.live/smite2/ui/talents/t_talent_Scaling.webp',
      description: 'Basic attacks while Bloodrage is active no longer provide bonus Protections or Attack Speed but instead your non-ultimate and non-passive ability cooldowns are lowered. Additionally Shoulder Charge deals more damage if it has hit an enemy god recently.',
      basicAttack: {
        name: 'Mordred Basic Attack',
        image: 'https://static.smite2.live/smite2/GODS/common/Icon_BasicAttack_Physical.webp',
        description: 'Deal Physical Damage to an enemy in front of you.\n\nIf multiple enemies are in the area, the enemy closest to the center of the area will be hit.\n\nHas a 4 hit chain. Attacks in order of Mourning, Clarent, Clarent, Mourning with a 1, 0.75, 0.75, 1x swing time.',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Mourning Damage Scaling', value: '100% Strength + 20% Intelligence' },
          { label: 'Clarent Damage Scaling', value: '60% Strength + 100% Intelligence' },
          { label: 'Range', value: '1.92m' },
          { label: 'Cone Angle', value: '120 degrees' }
        ]
      },
      passive: {
        name: 'Wrath of the Forsaken',
        image: 'https://static.smite2.live/smite2/GODS/Mordred/Abilities/Mordred_Passive.webp',
        description: 'Hit enemies to gain Wrath.\n\n• Your Ultimate Ability Heart Slash can only be used after reaching 40 Wrath\n• Your Ultimate Ability Pursue the Weak can only be used after reaching 80 Wrath\n\nAfter using an ability or attacking, your Interact key becomes a Dash forward.\n• This deals Physical Damage to enemies hit',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Dash Damage', value: '15 + 4 Per Level' },
          { label: 'Wrath from Ability (God)', value: '2' },
          { label: 'Wrath from Basic Attack (God)', value: '1' },
          { label: 'Wrath from Minion Hit', value: '1' },
          { label: 'Passive Wrath Gain', value: '1 every 4s' }
        ]
      },
      abilities: {
        1: {
          name: 'Cruel Strikes',
          image: 'https://static.smite2.live/smite2/GODS/Mordred/Abilities/Mordred_A01.webp',
          description: 'Strike twice with your swords.\n\n• First Slash, dealing Physical Damage to enemies in front of you\n• Then Slam, dealing Physical Damage to enemies in a line and either dealing bonus damage or Healing, based on your Basic Attack Chain\n\nLine attack deals Bonus damage on hit if Mourning is next in the basic attack chain.\nLine attack Heals you on hit if Clarent is next in the basic attack chain.\nLower healing on hitting enemy minions.',
          cooldown: '14 | 13 | 12 | 11 | 10s',
          cost: '45 | 50 | 55 | 60 | 65',
          attributes: [
            { label: 'Slash Damage', value: '75 | 100 | 125 | 150 | 175' },
            { label: 'Slash Damage Scaling', value: '45% Strength' },
            { label: 'Slam Damage', value: '85 | 120 | 155 | 190 | 225' },
            { label: 'Slam Damage Scaling', value: '65% Strength' },
            { label: 'Bonus Damage (Mourning)', value: '40% Protections' },
            { label: 'Heal (Clarent)', value: '45% Protections' },
            { label: 'Minion Heal', value: '8 | 11 | 14 | 17 | 20' },
            { label: 'Slash Radius', value: '4m' },
            { label: 'Slash Angle', value: '90 degrees' },
            { label: 'Slam Range', value: '4m' },
            { label: 'Slam Radius', value: '0.75m' }
          ]
        },
        2: {
          name: 'Bloodrage',
          image: 'https://static.smite2.live/smite2/GODS/Mordred/Abilities/Mordred_A02.webp',
          description: 'Deal Physical Damage to enemies around you, then gain increased Attack Speed and Movement Speed.\n\n• While buffed, basic attack hits on enemies reduce your non-ultimate and non-passive ability cooldowns\n• Hitting an enemy god with the initial hit of this attack applies two stacks of Protection debuff to enemy gods and Protection Buff for yourself\n• NO LONGER GRANTS BONUS PROTECTIONS OR ATTACK SPEED FROM STACKS',
          cooldown: '14s',
          cost: '50 | 55 | 60 | 65 | 70',
          attributes: [
            { label: 'Damage', value: '70 | 115 | 160 | 205 | 250' },
            { label: 'Damage Scaling', value: '60% Strength + 40% Intelligence' },
            { label: 'Attack Speed', value: '32 | 34 | 36 | 38 | 40%' },
            { label: 'Movement Speed', value: '12 | 14 | 16 | 18 | 20%' },
            { label: 'Cooldown Reduction Per Hit', value: '0.5s' },
            { label: 'Buff Duration', value: '4 | 4.5 | 5 | 5.5 | 6s' },
            { label: 'Radius', value: '3.2m' }
          ]
        },
        3: {
          name: 'Severing Slice',
          image: 'https://static.smite2.live/smite2/GODS/Mordred/Abilities/Mordred_A03.webp',
          description: 'Fire a projectile that deals Physical Damage and Slows enemies.\n\n• Direct hits with the center of the projectile cause targets to Bleed, taking Bonus Physical Damage as they move.\n\nEnemy gods are damaged for every 1.25m they move.\nMinions take damage over time instead of due to movement.',
          cooldown: '12s',
          cost: '40 | 50 | 60 | 70 | 80',
          attributes: [
            { label: 'Damage', value: '55 | 85 | 115 | 145 | 175' },
            { label: 'Damage Scaling', value: '70% Intelligence' },
            { label: 'Bleed Damage', value: '25 | 30 | 35 | 40 | 45' },
            { label: 'Bleed Damage Scaling', value: '12.5% Strength' },
            { label: 'Minion Damage', value: '15 | 20 | 25 | 30 | 35' },
            { label: 'Minion Damage Scaling', value: '5% Strength' },
            { label: 'Slow', value: '30%' },
            { label: 'Slow Duration', value: '2.5s' },
            { label: 'Range', value: '9.6m' },
            { label: 'Radius', value: '0.6m' },
            { label: 'Inner Radius', value: '0.2m' }
          ]
        },
        4: {
          name: 'Heart Slash / Pursue the Weak',
          image: 'https://static.smite2.live/smite2/GODS/Mordred/Abilities/Mordred_A05.webp',
          description: 'Mordred has two ultimate abilities that share a cooldown but require different amounts of Wrath to use.',
          cooldown: '20s',
          cost: '40 Wrath (Heart Slash) | 80 Wrath (Pursue the Weak)',
          attributes: [],
          subAbilities: [
            {
              name: 'Heart Slash',
              description: 'Deal Physical Damage to enemies in an area in front of you.\n\nIf you hit an enemy god, they are Rooted. You then Channel to siphon their lifeforce, gaining a Health Shield and Healing over time while dealing Physical Damage repeatedly to that enemy.\n\nAbility repeatedly deals damage every 0.3s over 1.5 seconds.\nYou are Slowed while Channeling.',
              image: 'https://static.smite2.live/smite2/GODS/Mordred/Abilities/Mordred_A05.webp',
              attributes: [
                { label: 'Damage', value: '100 | 155 | 210 | 265 | 320' },
                { label: 'Damage Scaling', value: '75% Strength' },
                { label: 'Damage Per Tick', value: '30 | 40 | 50 | 60 | 70' },
                { label: 'Damage Scaling Per Tick', value: '25% Intelligence' },
                { label: 'Shield', value: '160 | 200 | 240 | 280 | 320' },
                { label: 'Heal', value: '10 | 20 | 30 | 40 | 50' },
                { label: 'Heal Scaling', value: '12.5% Intelligence' },
                { label: 'Channel Duration', value: '1.5s' },
                { label: 'Tick Rate', value: '0.3s' },
                { label: 'Radius', value: '1m' },
                { label: 'Range', value: '6m' },
                { label: 'Cost', value: '40 Wrath' }
              ]
            },
            {
              name: 'Pursue the Weak',
              description: 'Become CC Immune and charge forward, traveling through walls, stopping on the first enemy god hit.\n\n• Nearby enemies take Physical Damage and are Stunned\n• After a short delay, you launch yourself and Stunned enemies into the sky, repeatedly dealing Physical Damage\n• You gain Health per enemy god hit with this attack\n\nCharge lasts 4 seconds but will continue if within a wall, ending immediately when possible.\nYou gain vision of all enemies around you while Charging.\nIf no enemy gods are able to be Displaced, the follow-up attack will not start.',
              image: 'https://static.smite2.live/smite2/GODS/Mordred/Abilities/Mordred_A04.webp',
              attributes: [
                { label: 'Damage', value: '170 | 220 | 270 | 320 | 370' },
                { label: 'Damage Scaling', value: '80% Strength + 75% Intelligence' },
                { label: 'Damage Per Tick', value: '85 | 105 | 125 | 145 | 165' },
                { label: 'Damage Scaling Per Tick', value: '20% Strength + 15% Intelligence' },
                { label: 'Heal', value: '30 | 35 | 40 | 45 | 50' },
                { label: 'Heal Scaling', value: '25% Intelligence' },
                { label: 'Stun Duration', value: '0.5s' },
                { label: 'Charge Duration', value: '4s' },
                { label: 'Radius', value: '3.2m' },
                { label: 'Cost', value: '80 Wrath' }
              ]
            }
          ]
        }
      }
    }
  ],
  recommendedBuilds: []
};