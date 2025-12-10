import { God, DamageType } from '../../types';

export const VULCAN: God = {
  id: 'vulcan',
  name: 'Vulcan',
  title: 'Smith of the Gods',
  pantheon: 'Roman',
  role: 'Mage',
  lanes: ['Mid', 'Solo'],
  damageType: DamageType.Magical,
  image: '',
  videoGuideUrl: '',
  goodAgainst: [],
  badAgainst: [],
  levelingOrder: [],
  statsByLevel: [
    // Level 1
    { strength: 0, intelligence: 0, inhandPower: 42.18, baseAttackSpeed: 0.93, attackSpeedPercent: 1.4, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 17.57, magicalProtection: 27.425, damageMitigation: 0, maxHealth: 617.625, healthRegen: 1.7, maxMana: 296, manaRegen: 2.34, cooldownRate: 0, movementSpeed: 365, xpRequirement: 0 },
    // Level 2
    { strength: 0, intelligence: 0, inhandPower: 44.46, baseAttackSpeed: 0.93, attackSpeedPercent: 2.8, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 20.42, magicalProtection: 28.85, damageMitigation: 0, maxHealth: 710.25, healthRegen: 1.9, maxMana: 338, manaRegen: 2.6, cooldownRate: 0, movementSpeed: 365, xpRequirement: 308 },
    // Level 3
    { strength: 0, intelligence: 0, inhandPower: 46.74, baseAttackSpeed: 0.93, attackSpeedPercent: 4.2, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 23.27, magicalProtection: 30.28, damageMitigation: 0, maxHealth: 802.875, healthRegen: 2.1, maxMana: 380, manaRegen: 2.86, cooldownRate: 0, movementSpeed: 365, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 49.02, baseAttackSpeed: 0.93, attackSpeedPercent: 5.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 26.12, magicalProtection: 31.7, damageMitigation: 0, maxHealth: 895.5, healthRegen: 2.3, maxMana: 422, manaRegen: 3.12, cooldownRate: 0, movementSpeed: 365, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 51.3, baseAttackSpeed: 0.93, attackSpeedPercent: 7.0, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 28.97, magicalProtection: 33.13, damageMitigation: 0, maxHealth: 988.125, healthRegen: 2.5, maxMana: 464, manaRegen: 3.38, cooldownRate: 0, movementSpeed: 365, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 53.58, baseAttackSpeed: 0.93, attackSpeedPercent: 8.4, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 31.82, magicalProtection: 34.55, damageMitigation: 0, maxHealth: 1080.75, healthRegen: 2.7, maxMana: 506, manaRegen: 3.64, cooldownRate: 0, movementSpeed: 365, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 55.86, baseAttackSpeed: 0.93, attackSpeedPercent: 9.8, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 34.67, magicalProtection: 35.98, damageMitigation: 0, maxHealth: 1173.375, healthRegen: 2.9, maxMana: 548, manaRegen: 3.9, cooldownRate: 0, movementSpeed: 365, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 58.14, baseAttackSpeed: 0.93, attackSpeedPercent: 11.2, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 37.52, magicalProtection: 37.4, damageMitigation: 0, maxHealth: 1266.0, healthRegen: 3.1, maxMana: 590, manaRegen: 4.16, cooldownRate: 0, movementSpeed: 365, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 60.42, baseAttackSpeed: 0.93, attackSpeedPercent: 12.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 40.37, magicalProtection: 38.83, damageMitigation: 0, maxHealth: 1358.625, healthRegen: 3.3, maxMana: 632, manaRegen: 4.42, cooldownRate: 0, movementSpeed: 365, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 62.7, baseAttackSpeed: 0.93, attackSpeedPercent: 14.0, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 43.22, magicalProtection: 40.25, damageMitigation: 0, maxHealth: 1451.25, healthRegen: 3.5, maxMana: 674, manaRegen: 4.68, cooldownRate: 0, movementSpeed: 365, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 64.98, baseAttackSpeed: 0.93, attackSpeedPercent: 15.4, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 46.07, magicalProtection: 41.68, damageMitigation: 0, maxHealth: 1543.875, healthRegen: 3.7, maxMana: 716, manaRegen: 4.94, cooldownRate: 0, movementSpeed: 365, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 67.26, baseAttackSpeed: 0.93, attackSpeedPercent: 16.8, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 48.92, magicalProtection: 43.1, damageMitigation: 0, maxHealth: 1636.5, healthRegen: 3.9, maxMana: 758, manaRegen: 5.2, cooldownRate: 0, movementSpeed: 365, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 69.54, baseAttackSpeed: 0.93, attackSpeedPercent: 18.2, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 51.77, magicalProtection: 44.53, damageMitigation: 0, maxHealth: 1729.125, healthRegen: 4.1, maxMana: 800, manaRegen: 5.46, cooldownRate: 0, movementSpeed: 365, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 71.82, baseAttackSpeed: 0.93, attackSpeedPercent: 19.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 54.62, magicalProtection: 45.95, damageMitigation: 0, maxHealth: 1821.75, healthRegen: 4.3, maxMana: 842, manaRegen: 5.72, cooldownRate: 0, movementSpeed: 365, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 74.1, baseAttackSpeed: 0.93, attackSpeedPercent: 21.0, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 57.47, magicalProtection: 47.38, damageMitigation: 0, maxHealth: 1914.375, healthRegen: 4.5, maxMana: 884, manaRegen: 5.98, cooldownRate: 0, movementSpeed: 365, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 76.38, baseAttackSpeed: 0.93, attackSpeedPercent: 22.4, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 60.32, magicalProtection: 48.8, damageMitigation: 0, maxHealth: 2007.0, healthRegen: 4.7, maxMana: 926, manaRegen: 6.24, cooldownRate: 0, movementSpeed: 365, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 78.66, baseAttackSpeed: 0.93, attackSpeedPercent: 23.8, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 63.17, magicalProtection: 50.23, damageMitigation: 0, maxHealth: 2099.625, healthRegen: 4.9, maxMana: 968, manaRegen: 6.5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 80.94, baseAttackSpeed: 0.93, attackSpeedPercent: 25.2, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 66.02, magicalProtection: 51.65, damageMitigation: 0, maxHealth: 2192.25, healthRegen: 5.1, maxMana: 1010, manaRegen: 6.76, cooldownRate: 0, movementSpeed: 365, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 83.22, baseAttackSpeed: 0.93, attackSpeedPercent: 26.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 68.87, magicalProtection: 53.08, damageMitigation: 0, maxHealth: 2284.875, healthRegen: 5.3, maxMana: 1052, manaRegen: 7.02, cooldownRate: 0, movementSpeed: 365, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 85.5, baseAttackSpeed: 0.93, attackSpeedPercent: 28.0, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 71.72, magicalProtection: 54.5, damageMitigation: 0, maxHealth: 2377.5, healthRegen: 5.5, maxMana: 1094, manaRegen: 7.28, cooldownRate: 0, movementSpeed: 365, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'Vulcan Basic Attack',
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
    name: 'Master Craftsman',
    image: '',
    description: 'Vulcan has access to a variety of Mods in the item shop that affect his abilities. There are 3 sets of mods available at different levels. You can only have one Mod from each set.\n\nHitting an enemy god with an ability grants you increased Movement Speed and Mana Regen for 5s.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Buff Duration', value: '5s' },
      { label: 'Mana Regen', value: '3' },
      { label: 'Movement Speed', value: '15%' }
    ]
  },
  abilities: {
    1: {
      name: 'Backfire',
      image: '',
      description: 'Fire a projectile that causes you to Dash back and deal Magical Damage to all enemies it hits, marking the first god that is hit.\n\n• Inferno Cannons will prioritize hitting the marked god and deal more damage to them.',
      cooldown: '9 | 8.5 | 8 | 7.5 | 7s',
      cost: '40 | 45 | 50 | 55 | 60',
      attributes: [
        { label: 'Damage', value: '90 | 135 | 180 | 225 | 270' },
        { label: 'Damage Scaling', value: '80% Intelligence' },
        { label: 'Mark Bonus Damage', value: '15%' },
        { label: 'Mark Duration', value: '4s' },
        { label: 'Range', value: '8.8m' },
        { label: 'Radius', value: '0.48m' }
      ]
    },
    2: {
      name: 'Inferno Cannon',
      image: '',
      description: 'Create an Inferno Cannon that shoots projectiles every 1s at an enemy in front of it, dealing Magical Damage.\n\n• It lasts until destroyed or another is placed.\n• Inherits Vulcan\'s penetrations in addition to having 25% base Penetration.\n• Does not trigger item effects.',
      cooldown: '12s',
      cost: '50 | 55 | 60 | 65 | 70',
      attributes: [
        { label: 'Damage', value: '45 | 70 | 95 | 120 | 145' },
        { label: 'Damage Scaling', value: '40% Intelligence' },
        { label: 'Turret HP', value: '220 | 300 | 380 | 460 | 540' },
        { label: 'Turret Range', value: '9.6m' },
        { label: 'Base Penetration', value: '25%' }
      ]
    },
    3: {
      name: 'Magma Bomb',
      image: '',
      description: 'Lob a projectile that explodes on impact with the ground, dealing Magical Damage and Displacing enemies in the area.\n\n• Enemies are displaced up and away from the explosion',
      cooldown: '10s',
      cost: '50 | 55 | 60 | 65 | 70',
      attributes: [
        { label: 'Damage', value: '80 | 130 | 180 | 230 | 280' },
        { label: 'Damage Scaling', value: '90% Intelligence' },
        { label: 'Range', value: '9.6m' },
        { label: 'Radius', value: '2.4m' }
      ]
    },
    4: {
      name: 'Earthshaker',
      image: '',
      description: 'Launch a projectile that explodes on impact with the ground, dealing Magical Damage to enemies in the area.\n\n• Deals more damage the further the projectile travels.',
      cooldown: '90 | 85 | 80 | 75 | 70s',
      cost: '80 | 90 | 100 | 110 | 120',
      attributes: [
        { label: 'Damage', value: '285 | 375 | 465 | 555 | 645' },
        { label: 'Damage Scaling', value: '110% Intelligence' },
        { label: 'Max Damage Multiplier', value: '1.65x' },
        { label: 'Range', value: '19.2m' },
        { label: 'Radius', value: '4.8m' }
      ]
    },
  },
  aspects: [
    {
      id: 'fortification',
      name: 'Aspect of Fortification',
      image: '',
      description: 'Vulcan\'s Passive gains: Being near one of your turrets grants you and the turret increased Protections and Health Regeneration. Backfire and Magma Bomb have lower Damage Scaling.',
      basicAttack: {
        name: 'Vulcan Basic Attack',
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
        name: 'Master Craftsman',
        image: '',
        description: 'Vulcan has access to a variety of Mods in the item shop that affect his abilities. There are 3 sets of mods available at different levels. You can only have one Mod from each set.\n\nHitting an enemy god with an ability grants you increased Movement Speed and Mana Regen for 5s.\n\nVulcan and Turrets within 8.8m gain Protections and Health Regen.',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Buff Duration', value: '5s' },
          { label: 'Mana Regen', value: '3' },
          { label: 'Movement Speed', value: '15%' },
          { label: 'Protections', value: '10' },
          { label: 'Protections Per Level', value: '1.5' },
          { label: 'Health Regen', value: '3' },
          { label: 'Health Regen Per Level', value: '0.5' },
          { label: 'Turret Proximity Range', value: '8.8m' }
        ]
      },
      abilities: {
        1: {
          name: 'Backfire',
          image: '',
          description: 'Fire a projectile that causes you to Dash back and deal Magical Damage to all enemies it hits, marking the first god that is hit.\n\n• Inferno Cannons will prioritize hitting the marked god and deal more damage to them.\n• REDUCED DAMAGE SCALING WITH ASPECT',
          cooldown: '9 | 8.5 | 8 | 7.5 | 7s',
          cost: '40 | 45 | 50 | 55 | 60',
          attributes: [
            { label: 'Damage', value: '90 | 130 | 170 | 210 | 250' },
            { label: 'Damage Scaling', value: '30% Intelligence' },
            { label: 'Mark Bonus Damage', value: '15%' },
            { label: 'Mark Duration', value: '4s' },
            { label: 'Range', value: '8.8m' },
            { label: 'Radius', value: '0.48m' }
          ]
        },
        2: {
          name: 'Inferno Cannon',
          image: '',
          description: 'Create an Inferno Cannon that shoots projectiles every 1s at an enemy in front of it, dealing Magical Damage.\n\n• It lasts until destroyed or another is placed.\n• Inherits Vulcan\'s penetrations in addition to having 25% base Penetration.\n• Does not trigger item effects.',
          cooldown: '12s',
          cost: '50 | 55 | 60 | 65 | 70',
          attributes: [
            { label: 'Damage', value: '45 | 70 | 95 | 120 | 145' },
            { label: 'Damage Scaling', value: '40% Intelligence' },
            { label: 'Turret HP', value: '220 | 300 | 380 | 460 | 540' },
            { label: 'Turret Range', value: '9.6m' },
            { label: 'Base Penetration', value: '25%' }
          ]
        },
        3: {
          name: 'Magma Bomb',
          image: '',
          description: 'Lob a projectile that explodes on impact with the ground, dealing Magical Damage and Displacing enemies in the area.\n\n• Enemies are displaced up and away from the explosion\n• REDUCED DAMAGE SCALING WITH ASPECT',
          cooldown: '10s',
          cost: '50 | 55 | 60 | 65 | 70',
          attributes: [
            { label: 'Damage', value: '80 | 130 | 180 | 230 | 280' },
            { label: 'Damage Scaling', value: '40% Intelligence' },
            { label: 'Range', value: '9.6m' },
            { label: 'Radius', value: '2.4m' }
          ]
        },
        4: {
          name: 'Earthshaker',
          image: '',
          description: 'Launch a projectile that explodes on impact with the ground, dealing Magical Damage to enemies in the area.\n\n• Deals more damage the further the projectile travels.',
          cooldown: '90 | 85 | 80 | 75 | 70s',
          cost: '80 | 90 | 100 | 110 | 120',
          attributes: [
            { label: 'Damage', value: '285 | 375 | 465 | 555 | 645' },
            { label: 'Damage Scaling', value: '110% Intelligence' },
            { label: 'Max Damage Multiplier', value: '1.65x' },
            { label: 'Range', value: '19.2m' },
            { label: 'Radius', value: '4.8m' }
          ]
        },
      }
    }
  ],
  recommendedBuilds: []
};