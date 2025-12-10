import { God, DamageType } from '../../types';

export const CERBERUS: God = {
  id: 'cerberus',
  name: 'Cerberus',
  title: 'Warden of the Underworld',
  pantheon: 'Greek',
  role: 'Guardian',
  lanes: ['Solo', 'Support'],
  damageType: DamageType.Magical,
  image: '',
  videoGuideUrl: '',
  goodAgainst: [],
  badAgainst: [],
  levelingOrder: [],
  statsByLevel: [
    // Level 1
    { strength: 0, intelligence: 0, inhandPower: 44, baseAttackSpeed: 0.97, attackSpeedPercent: 1.33, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 20.5, magicalProtection: 29.7, damageMitigation: 0, maxHealth: 672.3, healthRegen: 1.84, maxMana: 296, manaRegen: 2.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 0 },
    // Level 2
    { strength: 0, intelligence: 0, inhandPower: 47, baseAttackSpeed: 0.97, attackSpeedPercent: 2.66, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 23.8, magicalProtection: 31.3, damageMitigation: 0, maxHealth: 777.7, healthRegen: 2.05, maxMana: 338, manaRegen: 2.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 308 },
    // Level 3
    { strength: 0, intelligence: 0, inhandPower: 49, baseAttackSpeed: 0.97, attackSpeedPercent: 3.99, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 27, magicalProtection: 32.9, damageMitigation: 0, maxHealth: 883.1, healthRegen: 2.27, maxMana: 380, manaRegen: 2.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 52, baseAttackSpeed: 0.97, attackSpeedPercent: 5.32, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 30.2, magicalProtection: 34.6, damageMitigation: 0, maxHealth: 988.5, healthRegen: 2.48, maxMana: 422, manaRegen: 3, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 54, baseAttackSpeed: 0.97, attackSpeedPercent: 6.65, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 33.5, magicalProtection: 36.2, damageMitigation: 0, maxHealth: 1093.9, healthRegen: 2.7, maxMana: 464, manaRegen: 3.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 56, baseAttackSpeed: 0.97, attackSpeedPercent: 7.98, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 36.7, magicalProtection: 37.8, damageMitigation: 0, maxHealth: 1199.3, healthRegen: 2.92, maxMana: 506, manaRegen: 3.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 59, baseAttackSpeed: 0.97, attackSpeedPercent: 9.31, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 40, magicalProtection: 39.4, damageMitigation: 0, maxHealth: 1304.1, healthRegen: 3.13, maxMana: 548, manaRegen: 3.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 61, baseAttackSpeed: 0.97, attackSpeedPercent: 10.64, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 43.2, magicalProtection: 41, damageMitigation: 0, maxHealth: 1409.5, healthRegen: 3.35, maxMana: 590, manaRegen: 4, cooldownRate: 0, movementSpeed: 375, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 64, baseAttackSpeed: 0.97, attackSpeedPercent: 11.97, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 46.4, magicalProtection: 42.7, damageMitigation: 0, maxHealth: 1514.9, healthRegen: 3.56, maxMana: 632, manaRegen: 4.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 66, baseAttackSpeed: 0.97, attackSpeedPercent: 13.3, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 49.7, magicalProtection: 44.3, damageMitigation: 0, maxHealth: 1620.3, healthRegen: 3.78, maxMana: 674, manaRegen: 4.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 68, baseAttackSpeed: 0.97, attackSpeedPercent: 14.63, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 52.9, magicalProtection: 45.9, damageMitigation: 0, maxHealth: 1725.7, healthRegen: 4, maxMana: 716, manaRegen: 4.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 71, baseAttackSpeed: 0.97, attackSpeedPercent: 15.96, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 56.2, magicalProtection: 47.5, damageMitigation: 0, maxHealth: 1831.1, healthRegen: 4.21, maxMana: 758, manaRegen: 5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 73, baseAttackSpeed: 0.97, attackSpeedPercent: 17.29, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 59.4, magicalProtection: 49.1, damageMitigation: 0, maxHealth: 1935.9, healthRegen: 4.43, maxMana: 800, manaRegen: 5.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 76, baseAttackSpeed: 0.97, attackSpeedPercent: 18.62, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 62.6, magicalProtection: 50.8, damageMitigation: 0, maxHealth: 2041.3, healthRegen: 4.64, maxMana: 842, manaRegen: 5.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 78, baseAttackSpeed: 0.97, attackSpeedPercent: 19.95, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 65.9, magicalProtection: 52.4, damageMitigation: 0, maxHealth: 2146.7, healthRegen: 4.86, maxMana: 884, manaRegen: 5.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 80, baseAttackSpeed: 0.97, attackSpeedPercent: 21.28, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 69.1, magicalProtection: 54, damageMitigation: 0, maxHealth: 2252.1, healthRegen: 5.08, maxMana: 926, manaRegen: 6, cooldownRate: 0, movementSpeed: 375, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 83, baseAttackSpeed: 0.97, attackSpeedPercent: 22.61, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 72.4, magicalProtection: 55.6, damageMitigation: 0, maxHealth: 2357.5, healthRegen: 5.29, maxMana: 968, manaRegen: 6.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 85, baseAttackSpeed: 0.97, attackSpeedPercent: 23.94, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 75.6, magicalProtection: 57.2, damageMitigation: 0, maxHealth: 2462.9, healthRegen: 5.51, maxMana: 1010, manaRegen: 6.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 88, baseAttackSpeed: 0.97, attackSpeedPercent: 25.27, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 78.8, magicalProtection: 58.9, damageMitigation: 0, maxHealth: 2568.3, healthRegen: 5.72, maxMana: 1052, manaRegen: 6.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 90, baseAttackSpeed: 0.97, attackSpeedPercent: 26.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 82.1, magicalProtection: 60.5, damageMitigation: 0, maxHealth: 2673, healthRegen: 5.94, maxMana: 1094, manaRegen: 7, cooldownRate: 0, movementSpeed: 375, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'Cerberus Basic Attack',
    image: '',
    description: 'Deal Magical Damage to an enemy in front of you.\n\nIf multiple enemies are in the area, the enemy closest to the center of the area will be hit.\n\nHas a 3 hit chain. Attacks in order of 1, 0.8, 0.8x damage and swing time.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
      { label: 'Range', value: '1.92m' },
      { label: 'Cone Angle', value: '120 degrees' }
    ]
  },
  passive: {
    name: 'Spirit of Death',
    image: '',
    description: 'Any time a nearby enemy god is Healed, that Heal is reduced by 25% and you receive 60% + 1% per level of the Heal.\n\n• The amount stolen is based off of the base heal effect and does not include any increase or reduction applied\n• Severing an enemy\'s soul increases Healing stolen from them by 20% for 5s',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Heal Reduction', value: '25%' },
      { label: 'Heal Stolen', value: '60% + 1% Per Level' },
      { label: 'Soul Sever Bonus', value: '20%' },
      { label: 'Soul Sever Duration', value: '5s' }
    ]
  },
  abilities: {
    1: {
      name: 'Paralyzing Spit',
      image: '',
      description: 'Spit venom with your snake tail that passes through enemies dealing Magical Damage.\n\n• If your dog heads are alert, they also spit venom\n• Each head is alerted by landing a basic attack and all are alerted after Ghastly Breath is used\n• When all heads are alert the snake tail projectile Stuns targets. The stun is 75% less effective within 2.5 meters.\n• Each projectile that hits the same target deals 20% less damage',
      cooldown: '13 | 12.5 | 12 | 11.5 | 11s',
      cost: '60 | 65 | 70 | 75 | 80',
      attributes: [
        { label: 'Damage', value: '65 | 90 | 115 | 140 | 165' },
        { label: 'Damage Scaling', value: '20% Intelligence' },
        { label: 'Stun Duration', value: '1.1 | 1.2 | 1.3 | 1.4 | 1.5s' },
        { label: 'Range', value: '8m' },
        { label: 'Radius', value: '0.56m' }
      ]
    },
    2: {
      name: 'Ghastly Breath',
      image: '',
      description: 'Your heads release a cone of noxious breath dealing Magical Damage repeatedly to enemies in front of you.\n\n• Enemies hit have their Magical Protection reduced up to 3 times\n• Enemies in the center of the breath are Slowed up to 3 times\n• Firing this ability immediately alerts all of your heads\n• Killing souls with this ability enhances its damage by 15% for the remaining duration up to 3 times. At 3 stacks the entire area immediately applies 3 stacks of the Slow',
      cooldown: '14s',
      cost: '60 | 65 | 70 | 75 | 80',
      attributes: [
        { label: 'Damage Per Tick', value: '20 | 30 | 40 | 50 | 60' },
        { label: 'Damage Scaling Per Tick', value: '12.5% Intelligence' },
        { label: 'Slow', value: '8 | 9 | 10 | 11 | 12%' },
        { label: 'Slow Duration', value: '2s' },
        { label: 'Magical Protection Reduced', value: '5 | 8 | 11 | 14 | 17' },
        { label: 'Protection Reduction Duration', value: '2s' },
        { label: 'Range', value: '5.6m' },
        { label: 'Cone Angle', value: '90 degrees' },
        { label: 'Slow Cone Angle', value: '30 degrees' }
      ]
    },
    3: {
      name: 'Soul Expulsion',
      image: '',
      description: 'Leap forward dealing Magical Damage to enemies and severing their souls when you land.\n\n• Killing a soul Heals you and reduces Soul Expulsion\'s cooldown by 2s',
      cooldown: '14s',
      cost: '55',
      attributes: [
        { label: 'Damage', value: '80 | 120 | 160 | 200 | 240' },
        { label: 'Damage Scaling', value: '60% Intelligence' },
        { label: 'Heal From Gods', value: '15 | 30 | 45 | 60 | 75' },
        { label: 'Heal From Minions', value: '10 | 15 | 20 | 25 | 30' },
        { label: 'Soul Health', value: '50 | 60 | 70 | 80 | 90' },
        { label: 'Range', value: '8.8m' },
        { label: 'Radius', value: '2.4m' }
      ]
    },
    4: {
      name: 'Stygian Torment',
      image: '',
      description: 'Raise all enemy Gods into the air, severing their souls and dealing Magical Damage to them before pulling them in front of you.\n\n• Using this ability alerts all of your heads\n• This ability can be cleansed',
      cooldown: '90s',
      cost: '60 | 65 | 70 | 75 | 80',
      attributes: [
        { label: 'Damage', value: '180 | 255 | 330 | 405 | 480' },
        { label: 'Damage Scaling', value: '55% Intelligence' },
        { label: 'Radius', value: '4.8m' },
        { label: 'Displacement Distance', value: '3.6m' }
      ]
    }
  },
  aspects: [
    {
      id: 'souls',
      name: 'Aspect of Souls',
      image: '',
      description: 'Ghastly Breath ticks an additional time for every 3 god souls you have killed but souls no longer heal. Stygian Torment now only knocks up targets.',
      basicAttack: {
        name: 'Cerberus Basic Attack',
        image: '',
        description: 'Deal Magical Damage to an enemy in front of you.\n\nIf multiple enemies are in the area, the enemy closest to the center of the area will be hit.\n\nHas a 3 hit chain. Attacks in order of 1, 0.8, 0.8x damage and swing time.',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
          { label: 'Range', value: '1.92m' },
          { label: 'Cone Angle', value: '120 degrees' }
        ]
      },
      passive: {
        name: 'Spirit of Death',
        image: '',
        description: 'Any time a nearby enemy god is Healed, that Heal is reduced by 25% and you receive 60% + 1% per level of the Heal.\n\n• The amount stolen is based off of the base heal effect and does not include any increase or reduction applied\n• Severing an enemy\'s soul increases Healing stolen from them by 20% for 5s',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Heal Reduction', value: '25%' },
          { label: 'Heal Stolen', value: '60% + 1% Per Level' },
          { label: 'Soul Sever Bonus', value: '20%' },
          { label: 'Soul Sever Duration', value: '5s' }
        ]
      },
      abilities: {
        1: {
          name: 'Paralyzing Spit',
          image: '',
          description: 'Spit venom with your snake tail that passes through enemies dealing Magical Damage.\n\n• If your dog heads are alert, they also spit venom\n• Each head is alerted by landing a basic attack and all are alerted after Ghastly Breath is used\n• When all heads are alert the snake tail projectile Stuns targets. The stun is 75% less effective within 2.5 meters.\n• Each projectile that hits the same target deals 20% less damage',
          cooldown: '13 | 12.5 | 12 | 11.5 | 11s',
          cost: '60 | 65 | 70 | 75 | 80',
          attributes: [
            { label: 'Damage', value: '65 | 90 | 115 | 140 | 165' },
            { label: 'Damage Scaling', value: '20% Intelligence' },
            { label: 'Stun Duration', value: '1.1 | 1.2 | 1.3 | 1.4 | 1.5s' },
            { label: 'Range', value: '8m' },
            { label: 'Radius', value: '0.56m' }
          ]
        },
        2: {
          name: 'Ghastly Breath',
          image: '',
          description: 'Your heads release a cone of noxious breath dealing Magical Damage repeatedly to enemies in front of you.\n\n• Enemies hit have their Magical Protection reduced up to 3 times\n• Enemies in the center of the breath are Slowed up to 3 times\n• Firing this ability immediately alerts all of your heads\n• Killing souls with this ability enhances its damage by 15% for the remaining duration up to 3 times. At 3 stacks the entire area immediately applies 3 stacks of the Slow\n• EVERY 3 GOD SOUL KILLS CAUSES THIS ABILITY TO TICK AN ADDITIONAL TIME\n• SOULS NO LONGER HEAL',
          cooldown: '14s',
          cost: '60 | 65 | 70 | 75 | 80',
          attributes: [
            { label: 'Damage Per Tick', value: '20 | 30 | 40 | 50 | 60' },
            { label: 'Damage Scaling Per Tick', value: '12.5% Intelligence' },
            { label: 'Slow', value: '8 | 9 | 10 | 11 | 12%' },
            { label: 'Slow Duration', value: '2s' },
            { label: 'Magical Protection Reduced', value: '5 | 8 | 11 | 14 | 17' },
            { label: 'Protection Reduction Duration', value: '2s' },
            { label: 'Range', value: '5.6m' },
            { label: 'Cone Angle', value: '90 degrees' },
            { label: 'Slow Cone Angle', value: '30 degrees' }
          ]
        },
        3: {
          name: 'Soul Expulsion',
          image: '',
          description: 'Leap forward dealing Magical Damage to enemies and severing their souls when you land.\n\n• Killing a soul reduces Soul Expulsion\'s cooldown by 2s\n• SOULS NO LONGER HEAL',
          cooldown: '14s',
          cost: '55',
          attributes: [
            { label: 'Damage', value: '80 | 120 | 160 | 200 | 240' },
            { label: 'Damage Scaling', value: '60% Intelligence' },
            { label: 'Soul Health', value: '50 | 60 | 70 | 80 | 90' },
            { label: 'Range', value: '8.8m' },
            { label: 'Radius', value: '2.4m' }
          ]
        },
        4: {
          name: 'Stygian Torment',
          image: '',
          description: 'Knock Up nearby enemy Gods, severing their souls and dealing Magical Damage to them.\n\n• Using this ability alerts all of your heads\n• This ability can be cleansed\n• NO LONGER PULLS TARGETS - ONLY KNOCKS UP',
          cooldown: '90s',
          cost: '60 | 65 | 70 | 75 | 80',
          attributes: [
            { label: 'Damage', value: '180 | 255 | 330 | 405 | 480' },
            { label: 'Damage Scaling', value: '55% Intelligence' },
            { label: 'Radius', value: '4.8m' }
          ]
        }
      }
    }
  ],
  recommendedBuilds: []
};