import { God, DamageType } from '../../types';

export const RA: God = {
  id: 'ra',
  name: 'Ra',
  title: 'The Sun God',
  pantheon: 'Egyptian',
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
    { strength: 0, intelligence: 0, inhandPower: 42.18, baseAttackSpeed: 0.93, attackSpeedPercent: 1.4, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 17.57, magicalProtection: 27.425, damageMitigation: 0, maxHealth: 591.375, healthRegen: 1.7, maxMana: 296, manaRegen: 2.34, cooldownRate: 0, movementSpeed: 375, xpRequirement: 0 },
    // Level 2
    { strength: 0, intelligence: 0, inhandPower: 44.46, baseAttackSpeed: 0.93, attackSpeedPercent: 2.8, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 20.42, magicalProtection: 28.85, damageMitigation: 0, maxHealth: 683.99, healthRegen: 1.9, maxMana: 338, manaRegen: 2.6, cooldownRate: 0, movementSpeed: 375, xpRequirement: 308 },
    // Level 3
    { strength: 0, intelligence: 0, inhandPower: 46.74, baseAttackSpeed: 0.93, attackSpeedPercent: 4.2, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 23.27, magicalProtection: 30.27, damageMitigation: 0, maxHealth: 776.61, healthRegen: 2.1, maxMana: 380, manaRegen: 2.86, cooldownRate: 0, movementSpeed: 375, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 49.02, baseAttackSpeed: 0.93, attackSpeedPercent: 5.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 26.12, magicalProtection: 31.7, damageMitigation: 0, maxHealth: 869.23, healthRegen: 2.3, maxMana: 422, manaRegen: 3.12, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 51.3, baseAttackSpeed: 0.93, attackSpeedPercent: 7.0, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 28.97, magicalProtection: 33.13, damageMitigation: 0, maxHealth: 961.86, healthRegen: 2.5, maxMana: 464, manaRegen: 3.38, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 53.58, baseAttackSpeed: 0.93, attackSpeedPercent: 8.4, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 31.82, magicalProtection: 34.56, damageMitigation: 0, maxHealth: 1054.48, healthRegen: 2.7, maxMana: 506, manaRegen: 3.64, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 55.86, baseAttackSpeed: 0.93, attackSpeedPercent: 9.8, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 34.67, magicalProtection: 35.99, damageMitigation: 0, maxHealth: 1147.11, healthRegen: 2.9, maxMana: 548, manaRegen: 3.9, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 58.14, baseAttackSpeed: 0.93, attackSpeedPercent: 11.2, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 37.52, magicalProtection: 37.42, damageMitigation: 0, maxHealth: 1239.73, healthRegen: 3.1, maxMana: 590, manaRegen: 4.16, cooldownRate: 0, movementSpeed: 375, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 60.42, baseAttackSpeed: 0.93, attackSpeedPercent: 12.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 40.37, magicalProtection: 38.85, damageMitigation: 0, maxHealth: 1332.36, healthRegen: 3.3, maxMana: 632, manaRegen: 4.42, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 62.7, baseAttackSpeed: 0.93, attackSpeedPercent: 14.0, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 43.22, magicalProtection: 40.28, damageMitigation: 0, maxHealth: 1424.98, healthRegen: 3.5, maxMana: 674, manaRegen: 4.68, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 64.98, baseAttackSpeed: 0.93, attackSpeedPercent: 15.4, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 46.07, magicalProtection: 41.71, damageMitigation: 0, maxHealth: 1517.61, healthRegen: 3.7, maxMana: 716, manaRegen: 4.94, cooldownRate: 0, movementSpeed: 375, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 67.26, baseAttackSpeed: 0.93, attackSpeedPercent: 16.8, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 48.92, magicalProtection: 43.14, damageMitigation: 0, maxHealth: 1610.23, healthRegen: 3.9, maxMana: 758, manaRegen: 5.2, cooldownRate: 0, movementSpeed: 375, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 69.54, baseAttackSpeed: 0.93, attackSpeedPercent: 18.2, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 51.77, magicalProtection: 44.57, damageMitigation: 0, maxHealth: 1702.86, healthRegen: 4.1, maxMana: 800, manaRegen: 5.46, cooldownRate: 0, movementSpeed: 375, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 71.82, baseAttackSpeed: 0.93, attackSpeedPercent: 19.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 54.62, magicalProtection: 46.0, damageMitigation: 0, maxHealth: 1795.48, healthRegen: 4.3, maxMana: 842, manaRegen: 5.72, cooldownRate: 0, movementSpeed: 375, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 74.1, baseAttackSpeed: 0.93, attackSpeedPercent: 21.0, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 57.47, magicalProtection: 47.43, damageMitigation: 0, maxHealth: 1888.11, healthRegen: 4.5, maxMana: 884, manaRegen: 5.98, cooldownRate: 0, movementSpeed: 375, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 76.38, baseAttackSpeed: 0.93, attackSpeedPercent: 22.4, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 60.32, magicalProtection: 48.86, damageMitigation: 0, maxHealth: 1980.73, healthRegen: 4.7, maxMana: 926, manaRegen: 6.24, cooldownRate: 0, movementSpeed: 375, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 78.66, baseAttackSpeed: 0.93, attackSpeedPercent: 23.8, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 63.17, magicalProtection: 50.29, damageMitigation: 0, maxHealth: 2073.36, healthRegen: 4.9, maxMana: 968, manaRegen: 6.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 80.94, baseAttackSpeed: 0.93, attackSpeedPercent: 25.2, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 66.02, magicalProtection: 51.72, damageMitigation: 0, maxHealth: 2165.98, healthRegen: 5.1, maxMana: 1010, manaRegen: 6.76, cooldownRate: 0, movementSpeed: 375, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 83.22, baseAttackSpeed: 0.93, attackSpeedPercent: 26.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 68.87, magicalProtection: 53.15, damageMitigation: 0, maxHealth: 2258.61, healthRegen: 5.3, maxMana: 1052, manaRegen: 7.02, cooldownRate: 0, movementSpeed: 375, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 85.5, baseAttackSpeed: 0.93, attackSpeedPercent: 28.0, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 71.72, magicalProtection: 54.5, damageMitigation: 0, maxHealth: 2351.25, healthRegen: 5.5, maxMana: 1094, manaRegen: 7.28, cooldownRate: 0, movementSpeed: 375, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'Ra Basic Attack',
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
    name: 'Speed of Light',
    image: '',
    description: 'After using an ability gain Movement Speed.\n\n• This buff stacks up to 3 times',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Movement Speed', value: '5% Per Stack' },
      { label: 'Buff Duration', value: '15s' }
    ]
  },
  abilities: {
    1: {
      name: 'Celestial Beam',
      image: '',
      description: 'Summon a moving beam of intense light, dealing Magical Damage to enemies.',
      cooldown: '10s',
      cost: '60 | 65 | 70 | 75 | 80',
      attributes: [
        { label: 'Damage', value: '95 | 155 | 215 | 275 | 335' },
        { label: 'Damage Scaling', value: '105% Intelligence' },
        { label: 'Range', value: '12.8m' },
        { label: 'Radius', value: '0.72m' }
      ]
    },
    2: {
      name: 'Divine Light',
      image: '',
      description: 'Emanate light in the area around you that repeatedly Slows enemies before exploding dealing Magical Damage.\n\n• For a period after activation, basic attacking fires solar rays, dealing Magical Damage\n• The solar rays count as abilities, trigger ability effects at 50% effectiveness, and pierce targets\n• Enemies looking at you gain additional Slow stacks and are Blinded by the explosion\n\nA Slow stack is applied every 0.5 seconds. The explosion occurs after 2s.',
      cooldown: '14 | 13.5 | 13 | 12.5 | 12s',
      cost: '60 | 65 | 70 | 75 | 80',
      attributes: [
        { label: 'Damage', value: '85 | 135 | 185 | 235 | 285' },
        { label: 'Damage Scaling', value: '70% Intelligence' },
        { label: 'Solar Ray Damage', value: '10 | 20 | 30 | 40 | 50' },
        { label: 'Solar Ray Damage Scaling', value: '85% Intelligence' },
        { label: 'Solar Ray Duration', value: '2 | 2.5 | 3 | 3.5 | 4s' },
        { label: 'Slow', value: '5% Per Stack' },
        { label: 'Slow Duration', value: '3s' },
        { label: 'Radius', value: '4.8m' }
      ]
    },
    3: {
      name: 'Solar Blessing',
      image: '',
      description: 'Summon a pillar of blessed light repeatedly dealing Magical Damage and Healing allies.\n\n• The light empowers you and allied gods in the area, granting Strength, Intelligence, Physical Protection, and Magical Protection\n\nThe pillar of light ticks 6 times over 6 seconds.',
      cooldown: '15 | 14.5 | 14 | 13.5 | 13s',
      cost: '65 | 75 | 85 | 95 | 105',
      attributes: [
        { label: 'Damage Per Tick', value: '20 | 32 | 44 | 56 | 68' },
        { label: 'Damage Scaling Per Tick', value: '35% Intelligence' },
        { label: 'Heal Per Tick', value: '10 | 17 | 24 | 31 | 38' },
        { label: 'Strength', value: '10 | 15 | 20 | 25 | 30' },
        { label: 'Intelligence', value: '20 | 25 | 30 | 35 | 40' },
        { label: 'Physical Protection', value: '15 | 20 | 25 | 30 | 35' },
        { label: 'Magical Protection', value: '15 | 20 | 25 | 30 | 35' },
        { label: 'Range', value: '8.8m' },
        { label: 'Radius', value: '3.2m' }
      ]
    },
    4: {
      name: 'Searing Pain',
      image: '',
      description: 'Blast enemies in front of you with a wave of extreme heat, dealing Magical Damage.\n\n• Deals bonus damage to gods based on their maximum Health',
      cooldown: '80 | 75 | 70 | 65 | 60s',
      cost: '90',
      attributes: [
        { label: 'Damage', value: '375 | 450 | 525 | 600 | 675' },
        { label: 'Damage Scaling', value: '125% Intelligence' },
        { label: 'True Damage', value: '8% Target\'s Max HP' },
        { label: 'Range', value: '19.2m' },
        { label: 'Radius', value: '1.6m' }
      ]
    }
  },
  aspects: [
    {
      id: 'thermotherapy',
      name: 'Aspect of Thermotherapy',
      image: '',
      description: 'Solar Blessing and Searing Pain only deal base damage with no scaling. In return, Solar Blessing can be placed on allied gods, attaching to them and Searing Pain Heals allies hit.',
      basicAttack: {
        name: 'Ra Basic Attack',
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
        name: 'Speed of Light',
        image: '',
        description: 'After using an ability gain Movement Speed.\n\n• This buff stacks up to 3 times',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Movement Speed', value: '5% Per Stack' },
          { label: 'Buff Duration', value: '15s' }
        ]
      },
      abilities: {
        1: {
          name: 'Celestial Beam',
          image: '',
          description: 'Summon a moving beam of intense light, dealing Magical Damage to enemies.',
          cooldown: '10s',
          cost: '60 | 65 | 70 | 75 | 80',
          attributes: [
            { label: 'Damage', value: '95 | 155 | 215 | 275 | 335' },
            { label: 'Damage Scaling', value: '105% Intelligence' },
            { label: 'Range', value: '12.8m' },
            { label: 'Radius', value: '0.72m' }
          ]
        },
        2: {
          name: 'Divine Light',
          image: '',
          description: 'Emanate light in the area around you that repeatedly Slows enemies before exploding dealing Magical Damage.\n\n• For a period after activation, basic attacking fires solar rays, dealing Magical Damage\n• The solar rays count as abilities, trigger ability effects at 50% effectiveness, and pierce targets\n• Enemies looking at you gain additional Slow stacks and are Blinded by the explosion\n\nA Slow stack is applied every 0.5 seconds. The explosion occurs after 2s.',
          cooldown: '14 | 13.5 | 13 | 12.5 | 12s',
          cost: '60 | 65 | 70 | 75 | 80',
          attributes: [
            { label: 'Damage', value: '85 | 135 | 185 | 235 | 285' },
            { label: 'Damage Scaling', value: '70% Intelligence' },
            { label: 'Solar Ray Damage', value: '10 | 20 | 30 | 40 | 50' },
            { label: 'Solar Ray Damage Scaling', value: '85% Intelligence' },
            { label: 'Solar Ray Duration', value: '2 | 2.5 | 3 | 3.5 | 4s' },
            { label: 'Slow', value: '5% Per Stack' },
            { label: 'Slow Duration', value: '3s' },
            { label: 'Radius', value: '4.8m' }
          ]
        },
        3: {
          name: 'Solar Blessing',
          image: '',
          description: 'Summon a pillar of blessed light repeatedly dealing Magical Damage and Healing allies.\n\n• The light empowers you and allied gods in the area, granting Strength, Intelligence, Physical Protection, and Magical Protection\n• The pillar can be placed on allies to attach and follow them\n• NO LONGER HAS DAMAGE SCALING\n\nThe pillar of light ticks 6 times over 6 seconds.',
          cooldown: '15 | 14.5 | 14 | 13.5 | 13s',
          cost: '65 | 75 | 85 | 95 | 105',
          attributes: [
            { label: 'Damage Per Tick', value: '20 | 32 | 44 | 56 | 68' },
            { label: 'Heal Per Tick', value: '10 | 17 | 24 | 31 | 38' },
            { label: 'Strength', value: '10 | 15 | 20 | 25 | 30' },
            { label: 'Intelligence', value: '20 | 25 | 30 | 35 | 40' },
            { label: 'Physical Protection', value: '15 | 20 | 25 | 30 | 35' },
            { label: 'Magical Protection', value: '15 | 20 | 25 | 30 | 35' },
            { label: 'Range', value: '8.8m' },
            { label: 'Radius', value: '3.2m' }
          ]
        },
        4: {
          name: 'Searing Pain',
          image: '',
          description: 'Blast enemies in front of you with a wave of extreme heat, dealing Magical Damage and Healing yourself and allies.\n\n• NO LONGER HAS DAMAGE SCALING\n• NO LONGER DEALS BONUS TRUE DAMAGE',
          cooldown: '80 | 75 | 70 | 65 | 60s',
          cost: '90',
          attributes: [
            { label: 'Damage', value: '375 | 450 | 525 | 600 | 675' },
            { label: 'Heal', value: '160 | 270 | 380 | 490 | 600' },
            { label: 'Range', value: '19.2m' },
            { label: 'Radius', value: '1.6m' }
          ]
        }
      }
    }
  ],
  recommendedBuilds: []
};