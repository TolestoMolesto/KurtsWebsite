import { God, DamageType } from '../../types';

export const MERLIN: God = {
  id: 'merlin',
  name: 'Merlin',
  title: 'The Master Wizard',
  pantheon: 'Arthurian',
  role: 'Mage',
  lanes: ['Mid'],
  damageType: DamageType.Magical,
  image: '',
  videoGuideUrl: '',
  goodAgainst: [],
  badAgainst: [],
  levelingOrder: [],
  statsByLevel: [
    // Level 1
    { strength: 0, intelligence: 0, inhandPower: 42, baseAttackSpeed: 0.93, attackSpeedPercent: 1.4, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 17.6, magicalProtection: 27.4, damageMitigation: 0, maxHealth: 591.4, healthRegen: 1.7, maxMana: 320, manaRegen: 2.34, cooldownRate: 0, movementSpeed: 375, xpRequirement: 0 },
    // Level 2
    { strength: 0, intelligence: 0, inhandPower: 44, baseAttackSpeed: 0.93, attackSpeedPercent: 2.8, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 20.4, magicalProtection: 28.9, damageMitigation: 0, maxHealth: 684, healthRegen: 1.9, maxMana: 365, manaRegen: 2.6, cooldownRate: 0, movementSpeed: 375, xpRequirement: 308 },
    // Level 3
    { strength: 0, intelligence: 0, inhandPower: 47, baseAttackSpeed: 0.93, attackSpeedPercent: 4.2, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 23.3, magicalProtection: 30.3, damageMitigation: 0, maxHealth: 776.6, healthRegen: 2.1, maxMana: 410, manaRegen: 2.86, cooldownRate: 0, movementSpeed: 375, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 49, baseAttackSpeed: 0.93, attackSpeedPercent: 5.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 26.1, magicalProtection: 31.7, damageMitigation: 0, maxHealth: 869.3, healthRegen: 2.3, maxMana: 456, manaRegen: 3.12, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 51, baseAttackSpeed: 0.93, attackSpeedPercent: 7.0, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 29.0, magicalProtection: 33.1, damageMitigation: 0, maxHealth: 961.9, healthRegen: 2.5, maxMana: 501, manaRegen: 3.38, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 54, baseAttackSpeed: 0.93, attackSpeedPercent: 8.4, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 31.8, magicalProtection: 34.6, damageMitigation: 0, maxHealth: 1054.5, healthRegen: 2.7, maxMana: 546, manaRegen: 3.64, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 57, baseAttackSpeed: 0.93, attackSpeedPercent: 9.8, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 34.7, magicalProtection: 36.0, damageMitigation: 0, maxHealth: 1147.1, healthRegen: 2.9, maxMana: 592, manaRegen: 3.9, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 58.5, baseAttackSpeed: 0.93, attackSpeedPercent: 11.2, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 37.5, magicalProtection: 37.4, damageMitigation: 0, maxHealth: 1239.8, healthRegen: 3.1, maxMana: 637, manaRegen: 4.16, cooldownRate: 0, movementSpeed: 375, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 60, baseAttackSpeed: 0.93, attackSpeedPercent: 12.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 40.4, magicalProtection: 38.8, damageMitigation: 0, maxHealth: 1332.4, healthRegen: 3.3, maxMana: 683, manaRegen: 4.42, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 63, baseAttackSpeed: 0.93, attackSpeedPercent: 14.0, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 43.2, magicalProtection: 40.3, damageMitigation: 0, maxHealth: 1425.0, healthRegen: 3.5, maxMana: 728, manaRegen: 4.68, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 65, baseAttackSpeed: 0.93, attackSpeedPercent: 15.4, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 46.1, magicalProtection: 41.7, damageMitigation: 0, maxHealth: 1517.6, healthRegen: 3.7, maxMana: 773, manaRegen: 4.94, cooldownRate: 0, movementSpeed: 375, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 67, baseAttackSpeed: 0.93, attackSpeedPercent: 16.8, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 48.9, magicalProtection: 43.1, damageMitigation: 0, maxHealth: 1610.3, healthRegen: 3.9, maxMana: 819, manaRegen: 5.2, cooldownRate: 0, movementSpeed: 375, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 70, baseAttackSpeed: 0.93, attackSpeedPercent: 18.2, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 51.8, magicalProtection: 44.5, damageMitigation: 0, maxHealth: 1702.9, healthRegen: 4.1, maxMana: 864, manaRegen: 5.46, cooldownRate: 0, movementSpeed: 375, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 72, baseAttackSpeed: 0.93, attackSpeedPercent: 19.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 54.6, magicalProtection: 46.0, damageMitigation: 0, maxHealth: 1795.5, healthRegen: 4.3, maxMana: 909, manaRegen: 5.72, cooldownRate: 0, movementSpeed: 375, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 74.5, baseAttackSpeed: 0.93, attackSpeedPercent: 21.0, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 57.5, magicalProtection: 47.4, damageMitigation: 0, maxHealth: 1888.1, healthRegen: 4.5, maxMana: 955, manaRegen: 5.98, cooldownRate: 0, movementSpeed: 375, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 76, baseAttackSpeed: 0.93, attackSpeedPercent: 22.4, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 60.3, magicalProtection: 48.8, damageMitigation: 0, maxHealth: 1980.8, healthRegen: 4.7, maxMana: 1000, manaRegen: 6.24, cooldownRate: 0, movementSpeed: 375, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 79, baseAttackSpeed: 0.93, attackSpeedPercent: 23.8, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 63.2, magicalProtection: 50.2, damageMitigation: 0, maxHealth: 2073.4, healthRegen: 4.9, maxMana: 1045, manaRegen: 6.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 81, baseAttackSpeed: 0.93, attackSpeedPercent: 25.2, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 66.0, magicalProtection: 51.7, damageMitigation: 0, maxHealth: 2166.0, healthRegen: 5.1, maxMana: 1091, manaRegen: 6.76, cooldownRate: 0, movementSpeed: 375, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 83, baseAttackSpeed: 0.93, attackSpeedPercent: 26.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 68.9, magicalProtection: 53.1, damageMitigation: 0, maxHealth: 2258.6, healthRegen: 5.3, maxMana: 1136, manaRegen: 7.02, cooldownRate: 0, movementSpeed: 375, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 86, baseAttackSpeed: 0.93, attackSpeedPercent: 28.0, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 71.7, magicalProtection: 54.5, damageMitigation: 0, maxHealth: 2351.3, healthRegen: 5.5, maxMana: 1182, manaRegen: 7.28, cooldownRate: 0, movementSpeed: 375, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'Merlin Basic Attack',
    image: '',
    description: 'Fire a projectile that deals Magical Damage to the first enemy hit.\n\nProjectile stops on first target hit, and does not pass through walls.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
      { label: 'Range', value: '8.8m' },
      { label: 'Radius', value: '0.48m' }
    ]
  },
  passive: {
    name: 'Overload',
    image: '',
    description: 'Using an ability provides 1 stack of Overload. Firing a basic attack consumes 1 stack of Overload and deals additional Magical Damage to enemies hit.\n\n• The damage from this ability can trigger ability item effects.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage', value: '20' },
      { label: 'Damage Scaling', value: '20% Intelligence' },
      { label: 'Max Stacks', value: '3' },
      { label: 'Buff Duration', value: '5s' }
    ]
  },
  abilities: {
    1: {
      name: 'Eclipse / Radiate / Frostbolt',
      image: '',
      description: 'Merlin\'s first ability changes based on his current stance.\n\n• Arcane (Eclipse): Conjure a celestial orb that grows in size as it travels, dealing Magical Damage to enemies and marking them. Marked enemies take additional Magical Damage if they stay within the outer range of Eclipse.\n\n• Fire (Radiate): Channel a beam of intense fire for 2s that deals Magical Damage every 0.25s. Each time Radiate hits an enemy, it also applies a Burn, dealing additional Magical Damage over time.\n\n• Ice (Frostbolt): Fire a Frostbolt that explodes when it hits an enemy, dealing Magical Damage in a small area. This ability deals an additional 15% damage if the enemy hit is slowed.',
      cooldown: '12s | 14 - 12s | 6s',
      cost: '60 | 60 - 80 | 60',
      attributes: [],
      subAbilities: [
        {
          name: 'Eclipse (Arcane)',
          image: '',
          description: 'Conjure a celestial orb that grows in size as it travels, dealing Magical Damage to enemies and marking them. Marked enemies take additional Magical Damage if they stay within the outer range of Eclipse.\n\n• Marked enemies take damage every 0.4s while within the outer range.',
          attributes: [
            { label: 'Damage', value: '50 | 75 | 100 | 125 | 150' },
            { label: 'Damage Scaling', value: '55% Intelligence' },
            { label: 'Tick Damage', value: '5 | 15 | 25 | 35 | 45' },
            { label: 'Tick Damage Scaling', value: '10% Intelligence' },
            { label: 'Range', value: '9.6m' },
            { label: 'Initial Radius', value: '0.8m' },
            { label: 'Final Radius', value: '2.4m' },
            { label: 'Cooldown', value: '12s' },
            { label: 'Cost', value: '60' }
          ]
        },
        {
          name: 'Radiate (Fire)',
          image: '',
          description: 'Channel a beam of intense fire for 2s that deals Magical Damage every 0.25s. Each time Radiate hits an enemy, it also applies a Burn, dealing additional Magical Damage over time.\n\n• Burn does damage every 0.5s for 2s.',
          attributes: [
            { label: 'Damage', value: '10 | 17 | 24 | 31 | 38' },
            { label: 'Damage Scaling', value: '20% Intelligence' },
            { label: 'Burn Damage Per Tick', value: '5 | 10 | 15 | 20 | 25' },
            { label: 'Burn Damage Scaling Per Tick', value: '5% Intelligence' },
            { label: 'Range', value: '7.2m' },
            { label: 'Radius', value: '0.8m' },
            { label: 'Cooldown', value: '14 | 13.5 | 13 | 12.5 | 12s' },
            { label: 'Cost', value: '60 | 65 | 70 | 75 | 80' }
          ]
        },
        {
          name: 'Frostbolt (Ice)',
          image: '',
          description: 'Fire a Frostbolt that explodes when it hits an enemy, dealing Magical Damage in a small area.\n\n• This ability deals an additional 15% damage if the enemy hit is slowed.\n• Projectile stops on walls.',
          attributes: [
            { label: 'Damage', value: '60 | 95 | 130 | 165 | 200' },
            { label: 'Damage Scaling', value: '55% Intelligence' },
            { label: 'Bonus Damage (Slowed)', value: '15%' },
            { label: 'Range', value: '11.2m' },
            { label: 'Projectile Radius', value: '0.64m' },
            { label: 'Explode Radius', value: '3.2m' },
            { label: 'Cooldown', value: '6s' },
            { label: 'Cost', value: '60' }
          ]
        }
      ]
    },
    2: {
      name: 'Vortex / Dragonfire / Blizzard',
      image: '',
      description: 'Merlin\'s second ability changes based on his current stance.\n\n• Arcane (Vortex): Deploy a field of arcane energy. After a delay, the Vortex deals Magical Damage and Pulls enemies towards the center.\n\n• Fire (Dragonfire): Summon forth two ethereal dragons that deal Magical Damage to enemies every 0.25s. If caught in the center of the area, enemies are afflicted by the Radiate Burn and gods have their Protections reduced.\n\n• Ice (Blizzard): Create a Blizzard, dealing Magical Damage repeatedly to enemies in an area. Enemies hit are debuffed with a stacking Slow.',
      cooldown: '16 - 12s | 16s | 6s',
      cost: '60 - 80 | 60 - 80 | 60',
      attributes: [],
      subAbilities: [
        {
          name: 'Vortex (Arcane)',
          image: '',
          description: 'Deploy a field of arcane energy. After a delay, the Vortex deals Magical Damage and Pulls enemies towards the center.',
          attributes: [
            { label: 'Damage', value: '65 | 95 | 125 | 155 | 185' },
            { label: 'Damage Scaling', value: '70% Intelligence' },
            { label: 'Range', value: '9.6m' },
            { label: 'Radius', value: '3.2m' },
            { label: 'Cooldown', value: '16 | 15 | 14 | 13 | 12s' },
            { label: 'Cost', value: '60 | 65 | 70 | 75 | 80' }
          ]
        },
        {
          name: 'Dragonfire (Fire)',
          image: '',
          description: 'Summon forth two ethereal dragons that deal Magical Damage to enemies every 0.25s. If caught in the center of the area, enemies are afflicted by the Radiate Burn and gods have their Protections reduced.\n\n• The dragons persist for 3s.',
          attributes: [
            { label: 'Damage Per Tick', value: '8 | 11 | 14 | 17 | 20' },
            { label: 'Damage Scaling Per Tick', value: '15% Intelligence' },
            { label: 'Protections Reduced', value: '4% Per Stack' },
            { label: 'Max Debuff Stacks', value: '4' },
            { label: 'Range', value: '8m' },
            { label: 'Cone Angle', value: '80 degrees' },
            { label: 'Cooldown', value: '16s' },
            { label: 'Cost', value: '60 | 65 | 70 | 75 | 80' }
          ]
        },
        {
          name: 'Blizzard (Ice)',
          image: '',
          description: 'Create a Blizzard, dealing Magical Damage repeatedly to enemies in an area. Enemies hit are debuffed with a stacking Slow.\n\n• This ability hits 8 times over 4s.',
          attributes: [
            { label: 'Damage Per Tick', value: '10 | 25 | 40 | 55 | 70' },
            { label: 'Damage Scaling Per Tick', value: '15% Intelligence' },
            { label: 'Slow', value: '8% Per Stack' },
            { label: 'Max Slow Stacks', value: '5' },
            { label: 'Slow Duration', value: '2s' },
            { label: 'Range', value: '8.8m' },
            { label: 'Radius', value: '3.2m' },
            { label: 'Cooldown', value: '6s' },
            { label: 'Cost', value: '60' }
          ]
        }
      ]
    },
    3: {
      name: 'Flicker',
      image: '',
      description: 'You quickly Teleport a short distance. Depending on your current Stance, you gain different effects when using this ability.\n\n• Arcane: Heal 22.5% of the damage taken within the last 4s\n• Fire: For 4s, your basic attacks apply the Radiate Burn to enemies hit\n• Ice: Ability Cooldowns are reduced 5s\n\nIce stance ability cooldown reduction does not apply to Flicker.',
      cooldown: '24 | 23 | 22 | 21 | 20s',
      cost: '70',
      attributes: [
        { label: 'Teleport Range', value: '4.8m' },
        { label: 'Arcane Heal', value: '22.5% of damage taken (last 4s)' },
        { label: 'Fire Buff Duration', value: '4s' },
        { label: 'Ice Cooldown Reduction', value: '5s' }
      ]
    },
    4: {
      name: 'Elemental Mastery',
      image: '',
      description: 'Tap into your inner potential, exploding with energy in your current stance dealing Magical Damage to enemies hit. After the explosion reaches its apex, it collapses in on itself dealing Magical Damage again.\n\nEnemies suffer different effects depending on which stance\'s energy they are being hit by:\n\n• Arcane: Enemies hit are Knocked Up\n• Fire: Enemies hit are afflicted by the Radiate Burn\n• Ice: Enemies hit are Slowed\n\nDuring the explosion time, you can choose which stance to enter into next.',
      cooldown: '30 | 27.5 | 25 | 22.5 | 20s',
      cost: '40 | 50 | 60 | 70 | 80',
      attributes: [
        { label: 'Damage', value: '80 | 110 | 140 | 170 | 210' },
        { label: 'Damage Scaling', value: '15% Intelligence' },
        { label: 'Ice Slow', value: '20%' },
        { label: 'Ice Slow Duration', value: '2s' },
        { label: 'Radius', value: '4m' }
      ]
    }
  },
  aspects: [
    {
      id: 'pandemonium',
      name: 'Aspect of Pandemonium',
      image: '',
      description: 'On using Elemental Mastery, a random Stance is selected with 2 random primary abilities and you gain Intelligence for a short duration. Flicker will always remain however the effect it provides will be tied to the new Stance entered.',
      basicAttack: {
        name: 'Merlin Basic Attack',
        image: '',
        description: 'Fire a projectile that deals Magical Damage to the first enemy hit.\n\nProjectile stops on first target hit, and does not pass through walls.',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
          { label: 'Range', value: '8.8m' },
          { label: 'Radius', value: '0.48m' }
        ]
      },
      passive: {
        name: 'Overload',
        image: '',
        description: 'Using an ability provides 1 stack of Overload. Firing a basic attack consumes 1 stack of Overload and deals additional Magical Damage to enemies hit.\n\n• The damage from this ability can trigger ability item effects.',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Damage', value: '20' },
          { label: 'Damage Scaling', value: '20% Intelligence' },
          { label: 'Max Stacks', value: '3' },
          { label: 'Buff Duration', value: '5s' }
        ]
      },
      abilities: {
        1: {
          name: 'Eclipse / Radiate / Frostbolt',
          image: '',
          description: 'Merlin\'s first ability changes based on his current stance.\n\n• Arcane (Eclipse): Conjure a celestial orb that grows in size as it travels, dealing Magical Damage to enemies and marking them. Marked enemies take additional Magical Damage if they stay within the outer range of Eclipse.\n\n• Fire (Radiate): Channel a beam of intense fire for 2s that deals Magical Damage every 0.25s. Each time Radiate hits an enemy, it also applies a Burn, dealing additional Magical Damage over time.\n\n• Ice (Frostbolt): Fire a Frostbolt that explodes when it hits an enemy, dealing Magical Damage in a small area. This ability deals an additional 15% damage if the enemy hit is slowed.',
          cooldown: '12s | 14 - 12s | 6s',
          cost: '60 | 60 - 80 | 60',
          attributes: [],
          subAbilities: [
            {
              name: 'Eclipse (Arcane)',
              image: '',
              description: 'Conjure a celestial orb that grows in size as it travels, dealing Magical Damage to enemies and marking them. Marked enemies take additional Magical Damage if they stay within the outer range of Eclipse.\n\n• Marked enemies take damage every 0.4s while within the outer range.',
              attributes: [
                { label: 'Damage', value: '50 | 75 | 100 | 125 | 150' },
                { label: 'Damage Scaling', value: '55% Intelligence' },
                { label: 'Tick Damage', value: '5 | 15 | 25 | 35 | 45' },
                { label: 'Tick Damage Scaling', value: '10% Intelligence' },
                { label: 'Range', value: '9.6m' },
                { label: 'Initial Radius', value: '0.8m' },
                { label: 'Final Radius', value: '2.4m' },
                { label: 'Cooldown', value: '12s' },
                { label: 'Cost', value: '60' }
              ]
            },
            {
              name: 'Radiate (Fire)',
              image: '',
              description: 'Channel a beam of intense fire for 2s that deals Magical Damage every 0.25s. Each time Radiate hits an enemy, it also applies a Burn, dealing additional Magical Damage over time.\n\n• Burn does damage every 0.5s for 2s.',
              attributes: [
                { label: 'Damage', value: '10 | 17 | 24 | 31 | 38' },
                { label: 'Damage Scaling', value: '20% Intelligence' },
                { label: 'Burn Damage Per Tick', value: '5 | 10 | 15 | 20 | 25' },
                { label: 'Burn Damage Scaling Per Tick', value: '5% Intelligence' },
                { label: 'Range', value: '7.2m' },
                { label: 'Radius', value: '0.8m' },
                { label: 'Cooldown', value: '14 | 13.5 | 13 | 12.5 | 12s' },
                { label: 'Cost', value: '60 | 65 | 70 | 75 | 80' }
              ]
            },
            {
              name: 'Frostbolt (Ice)',
              image: '',
              description: 'Fire a Frostbolt that explodes when it hits an enemy, dealing Magical Damage in a small area.\n\n• This ability deals an additional 15% damage if the enemy hit is slowed.\n• Projectile stops on walls.',
              attributes: [
                { label: 'Damage', value: '60 | 95 | 130 | 165 | 200' },
                { label: 'Damage Scaling', value: '55% Intelligence' },
                { label: 'Bonus Damage (Slowed)', value: '15%' },
                { label: 'Range', value: '11.2m' },
                { label: 'Projectile Radius', value: '0.64m' },
                { label: 'Explode Radius', value: '3.2m' },
                { label: 'Cooldown', value: '6s' },
                { label: 'Cost', value: '60' }
              ]
            }
          ]
        },
        2: {
          name: 'Vortex / Dragonfire / Blizzard',
          image: '',
          description: 'Merlin\'s second ability changes based on his current stance.\n\n• Arcane (Vortex): Deploy a field of arcane energy. After a delay, the Vortex deals Magical Damage and Pulls enemies towards the center.\n\n• Fire (Dragonfire): Summon forth two ethereal dragons that deal Magical Damage to enemies every 0.25s. If caught in the center of the area, enemies are afflicted by the Radiate Burn and gods have their Protections reduced.\n\n• Ice (Blizzard): Create a Blizzard, dealing Magical Damage repeatedly to enemies in an area. Enemies hit are debuffed with a stacking Slow.',
          cooldown: '16 - 12s | 16s | 6s',
          cost: '60 - 80 | 60 - 80 | 60',
          attributes: [],
          subAbilities: [
            {
              name: 'Vortex (Arcane)',
              image: '',
              description: 'Deploy a field of arcane energy. After a delay, the Vortex deals Magical Damage and Pulls enemies towards the center.',
              attributes: [
                { label: 'Damage', value: '65 | 95 | 125 | 155 | 185' },
                { label: 'Damage Scaling', value: '70% Intelligence' },
                { label: 'Range', value: '9.6m' },
                { label: 'Radius', value: '3.2m' },
                { label: 'Cooldown', value: '16 | 15 | 14 | 13 | 12s' },
                { label: 'Cost', value: '60 | 65 | 70 | 75 | 80' }
              ]
            },
            {
              name: 'Dragonfire (Fire)',
              image: '',
              description: 'Summon forth two ethereal dragons that deal Magical Damage to enemies every 0.25s. If caught in the center of the area, enemies are afflicted by the Radiate Burn and gods have their Protections reduced.\n\n• The dragons persist for 3s.',
              attributes: [
                { label: 'Damage Per Tick', value: '8 | 11 | 14 | 17 | 20' },
                { label: 'Damage Scaling Per Tick', value: '15% Intelligence' },
                { label: 'Protections Reduced', value: '4% Per Stack' },
                { label: 'Max Debuff Stacks', value: '4' },
                { label: 'Range', value: '8m' },
                { label: 'Cone Angle', value: '80 degrees' },
                { label: 'Cooldown', value: '16s' },
                { label: 'Cost', value: '60 | 65 | 70 | 75 | 80' }
              ]
            },
            {
              name: 'Blizzard (Ice)',
              image: '',
              description: 'Create a Blizzard, dealing Magical Damage repeatedly to enemies in an area. Enemies hit are debuffed with a stacking Slow.\n\n• This ability hits 8 times over 4s.',
              attributes: [
                { label: 'Damage Per Tick', value: '10 | 25 | 40 | 55 | 70' },
                { label: 'Damage Scaling Per Tick', value: '15% Intelligence' },
                { label: 'Slow', value: '8% Per Stack' },
                { label: 'Max Slow Stacks', value: '5' },
                { label: 'Slow Duration', value: '2s' },
                { label: 'Range', value: '8.8m' },
                { label: 'Radius', value: '3.2m' },
                { label: 'Cooldown', value: '6s' },
                { label: 'Cost', value: '60' }
              ]
            }
          ]
        },
        3: {
          name: 'Flicker',
          image: '',
          description: 'You quickly Teleport a short distance. Depending on your current Stance, you gain different effects when using this ability.\n\n• Arcane: Heal 22.5% of the damage taken within the last 4s\n• Fire: For 4s, your basic attacks apply the Radiate Burn to enemies hit\n• Ice: Ability Cooldowns are reduced 5s\n\nFlicker will always remain however the effect it provides will be tied to the new Stance entered.',
          cooldown: '24 | 23 | 22 | 21 | 20s',
          cost: '70',
          attributes: [
            { label: 'Teleport Range', value: '4.8m' },
            { label: 'Arcane Heal', value: '22.5% of damage taken (last 4s)' },
            { label: 'Fire Buff Duration', value: '4s' },
            { label: 'Ice Cooldown Reduction', value: '5s' }
          ]
        },
        4: {
          name: 'Elemental Mastery',
          image: '',
          description: 'Tap into your inner potential, exploding with energy in your current stance dealing Magical Damage to enemies hit. After the explosion reaches its apex, it collapses in on itself dealing Magical Damage again.\n\n• ON USE, A RANDOM STANCE IS SELECTED WITH 2 RANDOM PRIMARY ABILITIES AND YOU GAIN INTELLIGENCE FOR A SHORT DURATION\n\nEnemies suffer different effects depending on which stance\'s energy they are being hit by:\n\n• Arcane: Enemies hit are Knocked Up\n• Fire: Enemies hit are afflicted by the Radiate Burn\n• Ice: Enemies hit are Slowed',
          cooldown: '20s',
          cost: '40 | 50 | 60 | 70 | 80',
          attributes: [
            { label: 'Damage', value: '80 | 110 | 140 | 170 | 210' },
            { label: 'Damage Scaling', value: '15% Intelligence' },
            { label: 'Intelligence Buff', value: '10 + 0.5 Per Level' },
            { label: 'Buff Duration', value: '10s' },
            { label: 'Ice Slow', value: '20%' },
            { label: 'Ice Slow Duration', value: '2s' },
            { label: 'Radius', value: '4m' }
          ]
        }
      }
    }
  ],
  recommendedBuilds: []
};