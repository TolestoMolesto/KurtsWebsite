import { God, DamageType } from '../../types';

export const ARES: God = {
  id: 'ares',
  name: 'Ares',
  title: 'God of War',
  pantheon: 'Greek',
  role: 'Guardian',
  lanes: ['Support'],
  damageType: DamageType.Magical,
  image: '',
  videoGuideUrl: '',
  goodAgainst: [],
  badAgainst: [],
  levelingOrder: [],
  statsByLevel: [
    // Level 1
    { strength: 0, intelligence: 0, inhandPower: 42.3, baseAttackSpeed: 0.9672, attackSpeedPercent: 1.33, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 20.52, magicalProtection: 29.7, damageMitigation: 0, maxHealth: 672.3, healthRegen: 1.836, maxMana: 296, manaRegen: 2.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 0 },
    // Level 2
    { strength: 0, intelligence: 0, inhandPower: 44.7, baseAttackSpeed: 0.9672, attackSpeedPercent: 2.66, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 23.76, magicalProtection: 31.08, damageMitigation: 0, maxHealth: 777.6, healthRegen: 2.052, maxMana: 338, manaRegen: 2.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 308 },
    // Level 3
    { strength: 0, intelligence: 0, inhandPower: 47.1, baseAttackSpeed: 0.9672, attackSpeedPercent: 3.99, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 27.0, magicalProtection: 32.94, damageMitigation: 0, maxHealth: 882.9, healthRegen: 2.268, maxMana: 380, manaRegen: 2.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 49.5, baseAttackSpeed: 0.9672, attackSpeedPercent: 5.32, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 30.24, magicalProtection: 34.56, damageMitigation: 0, maxHealth: 988.2, healthRegen: 2.484, maxMana: 422, manaRegen: 3.0, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 51.9, baseAttackSpeed: 0.9672, attackSpeedPercent: 6.65, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 33.48, magicalProtection: 36.18, damageMitigation: 0, maxHealth: 1093.5, healthRegen: 2.7, maxMana: 464, manaRegen: 3.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 54.3, baseAttackSpeed: 0.9672, attackSpeedPercent: 7.98, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 36.72, magicalProtection: 37.8, damageMitigation: 0, maxHealth: 1198.8, healthRegen: 2.916, maxMana: 506, manaRegen: 3.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 56.7, baseAttackSpeed: 0.9672, attackSpeedPercent: 9.31, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 39.96, magicalProtection: 39.42, damageMitigation: 0, maxHealth: 1304.1, healthRegen: 3.132, maxMana: 548, manaRegen: 3.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 59.1, baseAttackSpeed: 0.9672, attackSpeedPercent: 10.64, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 43.2, magicalProtection: 41.04, damageMitigation: 0, maxHealth: 1409.4, healthRegen: 3.348, maxMana: 590, manaRegen: 4.0, cooldownRate: 0, movementSpeed: 375, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 61.5, baseAttackSpeed: 0.9672, attackSpeedPercent: 11.97, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 46.44, magicalProtection: 42.66, damageMitigation: 0, maxHealth: 1514.7, healthRegen: 3.564, maxMana: 632, manaRegen: 4.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 63.9, baseAttackSpeed: 0.9672, attackSpeedPercent: 13.3, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 49.68, magicalProtection: 44.28, damageMitigation: 0, maxHealth: 1620.0, healthRegen: 3.78, maxMana: 674, manaRegen: 4.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 66.3, baseAttackSpeed: 0.9672, attackSpeedPercent: 14.63, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 52.92, magicalProtection: 45.9, damageMitigation: 0, maxHealth: 1725.3, healthRegen: 3.996, maxMana: 716, manaRegen: 4.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 68.7, baseAttackSpeed: 0.9672, attackSpeedPercent: 15.96, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 56.16, magicalProtection: 47.52, damageMitigation: 0, maxHealth: 1830.6, healthRegen: 4.212, maxMana: 758, manaRegen: 5.0, cooldownRate: 0, movementSpeed: 375, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 71.1, baseAttackSpeed: 0.9672, attackSpeedPercent: 17.29, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 59.4, magicalProtection: 49.14, damageMitigation: 0, maxHealth: 1935.9, healthRegen: 4.428, maxMana: 800, manaRegen: 5.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 73.5, baseAttackSpeed: 0.9672, attackSpeedPercent: 18.62, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 62.64, magicalProtection: 50.76, damageMitigation: 0, maxHealth: 2041.2, healthRegen: 4.644, maxMana: 842, manaRegen: 5.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 75.9, baseAttackSpeed: 0.9672, attackSpeedPercent: 19.95, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 65.88, magicalProtection: 52.38, damageMitigation: 0, maxHealth: 2146.5, healthRegen: 4.86, maxMana: 884, manaRegen: 5.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 78.3, baseAttackSpeed: 0.9672, attackSpeedPercent: 21.28, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 69.12, magicalProtection: 53.19, damageMitigation: 0, maxHealth: 2251.8, healthRegen: 5.076, maxMana: 926, manaRegen: 6.0, cooldownRate: 0, movementSpeed: 375, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 80.7, baseAttackSpeed: 0.9672, attackSpeedPercent: 22.61, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 72.36, magicalProtection: 55.62, damageMitigation: 0, maxHealth: 2357.1, healthRegen: 5.292, maxMana: 968, manaRegen: 6.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 83.1, baseAttackSpeed: 0.9672, attackSpeedPercent: 23.94, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 75.6, magicalProtection: 57.24, damageMitigation: 0, maxHealth: 2462.4, healthRegen: 5.508, maxMana: 1010, manaRegen: 6.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 85.5, baseAttackSpeed: 0.9672, attackSpeedPercent: 25.27, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 78.84, magicalProtection: 58.86, damageMitigation: 0, maxHealth: 2567.7, healthRegen: 5.724, maxMana: 1052, manaRegen: 6.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 87.9, baseAttackSpeed: 0.9672, attackSpeedPercent: 26.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 82.08, magicalProtection: 60.48, damageMitigation: 0, maxHealth: 2673.0, healthRegen: 5.94, maxMana: 1094, manaRegen: 7.0, cooldownRate: 0, movementSpeed: 375, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'Ares Basic Attack',
    image: '',
    description: 'Deal Magical Damage to an enemy in front of you.\n\nIf multiple enemies are in the area, the enemy closest to the center of the area will be hit.\n\nHas a 4 hit chain. Attacks in order of 1, 0.75, 1, 1.25x damage and swing time.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
      { label: 'Range', value: '1.92m' },
      { label: 'Cone Angle', value: '120 degrees' }
    ]
  },
  passive: {
    name: 'Blessed Armaments',
    image: '',
    description: 'Provide Strength and Intelligence in an Aura.\n\n• Build Protections to increase Strength Aura\n• Build Cooldown Rate to increase Intelligence Aura\n• Both Auras increase with Level\n• Allies gain 50% of the buff',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Intelligence & Strength', value: '1 per Level' },
      { label: 'Strength', value: '8% of Protections from Items' },
      { label: 'Intelligence', value: '80% of Cooldown Rate' }
    ]
  },
  abilities: {
    1: {
      name: 'Shackles',
      image: '',
      description: 'Fire a Shackle projectile that deals Magical Damage and Slows.\n\n• You can refire after hitting an enemy god\n• Three Shackles may be out at one time\n• Gain Movement Speed for each Shackled god\n• Shackled gods take repeating Magical Damage and are Crippled\n\nThis projectile passes through and damages non-god enemies, and passes through walls. It stops on gods.\n\nMovement Speed buff stacks for each uniquely shackled god.\n\nYou have 2 seconds to fire another Shackle after successfully hitting an enemy god.',
      cooldown: '15s',
      cost: '70 | 75 | 80 | 85 | 90',
      attributes: [
        { label: 'Initial Damage', value: '40 | 65 | 90 | 115 | 140' },
        { label: 'Initial Damage Scaling', value: '25% Strength' },
        { label: 'Damage Per Tick', value: '20 | 40 | 60 | 80 | 100' },
        { label: 'Damage Scaling Per Tick', value: '15% Intelligence' },
        { label: 'Slow', value: '15%' },
        { label: 'Slow Duration', value: '4s' },
        { label: 'Cripple Duration', value: '4s' },
        { label: 'Movement Speed Buff', value: '15%' },
        { label: 'Range', value: '8.8m' },
        { label: 'Radius', value: '2.4m' }
      ]
    },
    2: {
      name: 'Call To Arms',
      image: '',
      description: 'You and nearby allied gods gain Magical and Physical Protections and Basic Attack Damage. Ares gains bonus Health Regen.\n\n• Damaging enemy gods increases the duration and the effects of this buff\n\nThe buff is extended by 4 seconds after hitting an enemy god 3 times.',
      cooldown: '15 | 14.5 | 14 | 13.5 | 13s',
      cost: '40 | 45 | 50 | 55 | 60',
      attributes: [
        { label: 'Physical Protection', value: '20 | 25 | 30 | 35 | 40' },
        { label: 'Magical Protection', value: '20 | 25 | 30 | 35 | 40' },
        { label: 'Basic Attack Damage', value: '8 | 16 | 24 | 30 | 36' },
        { label: 'Health Regen', value: '6 | 8 | 10 | 12 | 14' },
        { label: 'Buff Duration', value: '6s' },
        { label: 'Radius', value: '5.6m' }
      ]
    },
    3: {
      name: 'Searing Flesh',
      image: '',
      description: 'Flames pour from your shield, dealing Magical Damage repeatedly to enemies in front of you.\n\n• This is a Channeled ability, but you can fire Shackles\n• Deals bonus damage based on the enemies\' maximum Health\n• You are Displacement Immune while Channeling\n• Reduces enemy Healing\n\nYou can fire your Shackles ability while channeling this ability, but no other attacks.',
      cooldown: '12s',
      cost: '55 | 60 | 65 | 70 | 75',
      attributes: [
        { label: 'Damage Per Tick', value: '20 | 25 | 30 | 35 | 40' },
        { label: 'Damage Scaling Per Tick', value: '7% Intelligence' },
        { label: 'Bonus Damage Scaling', value: '1 | 1 | 2 | 2 | 3% Max Health' },
        { label: 'Minion Damage Per Tick', value: '20 | 25 | 30 | 35 | 40' },
        { label: 'Minion Damage Scaling Per Tick', value: '7% Intelligence' },
        { label: 'Bonus Minion Damage Scaling', value: '3.5% Max Health' },
        { label: 'Healing Reduction', value: '25%' },
        { label: 'Range', value: '5.6m' },
        { label: 'Cone Angle', value: '45 degrees' }
      ]
    },
    4: {
      name: 'No Escape',
      image: '',
      description: 'Attach a chain to nearby gods, then Pull the gods toward you, and finally Stun enemies around you.\n\n• Deal Magical Damage when Chains attach\n• Deal Magical Damage to nearby enemies while Stunning\n• You are CC Immune and gain Damage Mitigation while using this ability\n\nChannel lasts 2.5 seconds. Enemy gods are Displaced toward you after 2.17 seconds of channeling.',
      cooldown: '90s',
      cost: '80 | 85 | 90 | 95 | 100',
      attributes: [
        { label: 'Initial Damage', value: '80 | 110 | 140 | 170 | 200' },
        { label: 'Initial Damage Scaling', value: '30% Strength + 20% Intelligence' },
        { label: 'Final Damage', value: '250 | 325 | 400 | 475 | 550' },
        { label: 'Final Damage Scaling', value: '55% Strength + 50% Intelligence' },
        { label: 'Stun Duration', value: '0.75s' },
        { label: 'Damage Mitigation', value: '40 | 45 | 50 | 55 | 60%' },
        { label: 'Range', value: '5.6m' },
        { label: 'Final Range', value: '2.8m' }
      ]
    }
  },
  aspects: [
    {
      id: 'reverberation',
      name: 'Aspect of Reverberation',
      image: '',
      description: 'Call To Arms no longer provides an Aura of Protections. Instead, it empowers your Shield for your next Basic Attack, Stunning the target and spreading bonus Magical Damage to nearby enemies.',
      basicAttack: {
        name: 'Ares Basic Attack',
        image: '',
        description: 'Deal Magical Damage to an enemy in front of you.\n\nIf multiple enemies are in the area, the enemy closest to the center of the area will be hit.\n\nHas a 4 hit chain. Attacks in order of 1, 0.75, 1, 1.25x damage and swing time.',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
          { label: 'Range', value: '1.92m' },
          { label: 'Cone Angle', value: '120 degrees' }
        ]
      },
      passive: {
        name: 'Blessed Armaments',
        image: '',
        description: 'Provide Strength and Intelligence in an Aura.\n\n• Build Protections to increase Strength Aura\n• Build Cooldown Rate to increase Intelligence Aura\n• Both Auras increase with Level\n• Allies gain 50% of the buff',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Intelligence & Strength', value: '1 per Level' },
          { label: 'Strength', value: '8% of Protections from Items' },
          { label: 'Intelligence', value: '80% of Cooldown Rate' }
        ]
      },
      abilities: {
        1: {
          name: 'Shackles',
          image: '',
          description: 'Fire a Shackle projectile that deals Magical Damage and Slows.\n\n• You can refire after hitting an enemy god\n• Three Shackles may be out at one time\n• Gain Movement Speed for each Shackled god\n• Shackled gods take repeating Magical Damage and are Crippled\n\nThis projectile passes through and damages non-god enemies, and passes through walls. It stops on gods.\n\nMovement Speed buff stacks for each uniquely shackled god.\n\nYou have 2 seconds to fire another Shackle after successfully hitting an enemy god.',
          cooldown: '15s',
          cost: '70 | 75 | 80 | 85 | 90',
          attributes: [
            { label: 'Initial Damage', value: '40 | 65 | 90 | 115 | 140' },
            { label: 'Initial Damage Scaling', value: '25% Strength' },
            { label: 'Damage Per Tick', value: '20 | 40 | 60 | 80 | 100' },
            { label: 'Damage Scaling Per Tick', value: '15% Intelligence' },
            { label: 'Slow', value: '15%' },
            { label: 'Slow Duration', value: '4s' },
            { label: 'Cripple Duration', value: '4s' },
            { label: 'Movement Speed Buff', value: '15%' },
            { label: 'Range', value: '8.8m' },
            { label: 'Radius', value: '2.4m' }
          ]
        },
        2: {
          name: 'Call To Arms',
          image: '',
          description: 'You gain Basic Attack Damage, and empower your Shield for your next Basic Attack.\n\n• Damaging enemy gods increases the duration and the effects of this buff\n• Upon damaging an enemy with your empowered Shield, the target is Stunned and bonus Magical Damage is spread to nearby enemies\n• NO LONGER PROVIDES AURA OF PROTECTIONS TO ALLIES\n\nDamage can apply Basic Attack Item Effects.',
          cooldown: '15 | 14.5 | 14 | 13.5 | 13s',
          cost: '40 | 45 | 50 | 55 | 60',
          attributes: [
            { label: 'Basic Attack Damage', value: '8 | 16 | 24 | 30 | 36' },
            { label: 'Damage', value: '30 | 35 | 40 | 45 | 50% of Empowered Shield Hit' },
            { label: 'Stun Duration', value: '0.75s' },
            { label: 'Buff Duration', value: '6s' },
            { label: 'Radius', value: '5.6m' }
          ]
        },
        3: {
          name: 'Searing Flesh',
          image: '',
          description: 'Flames pour from your shield, dealing Magical Damage repeatedly to enemies in front of you.\n\n• This is a Channeled ability, but you can fire Shackles\n• Deals bonus damage based on the enemies\' maximum Health\n• You are Displacement Immune while Channeling\n• Reduces enemy Healing\n\nYou can fire your Shackles ability while channeling this ability, but no other attacks.',
          cooldown: '12s',
          cost: '55 | 60 | 65 | 70 | 75',
          attributes: [
            { label: 'Damage Per Tick', value: '20 | 25 | 30 | 35 | 40' },
            { label: 'Damage Scaling Per Tick', value: '7% Intelligence' },
            { label: 'Bonus Damage Scaling', value: '1 | 1 | 2 | 2 | 3% Max Health' },
            { label: 'Minion Damage Per Tick', value: '20 | 25 | 30 | 35 | 40' },
            { label: 'Minion Damage Scaling Per Tick', value: '7% Intelligence' },
            { label: 'Bonus Minion Damage Scaling', value: '3.5% Max Health' },
            { label: 'Healing Reduction', value: '25%' },
            { label: 'Range', value: '5.6m' },
            { label: 'Cone Angle', value: '45 degrees' }
          ]
        },
        4: {
          name: 'No Escape',
          image: '',
          description: 'Attach a chain to nearby gods, then Pull the gods toward you, and finally Stun enemies around you.\n\n• Deal Magical Damage when Chains attach\n• Deal Magical Damage to nearby enemies while Stunning\n• You are CC Immune and gain Damage Mitigation while using this ability\n\nChannel lasts 2.5 seconds. Enemy gods are Displaced toward you after 2.17 seconds of channeling.',
          cooldown: '90s',
          cost: '80 | 85 | 90 | 95 | 100',
          attributes: [
            { label: 'Initial Damage', value: '80 | 110 | 140 | 170 | 200' },
            { label: 'Initial Damage Scaling', value: '30% Strength + 20% Intelligence' },
            { label: 'Final Damage', value: '250 | 325 | 400 | 475 | 550' },
            { label: 'Final Damage Scaling', value: '55% Strength + 50% Intelligence' },
            { label: 'Stun Duration', value: '0.75s' },
            { label: 'Damage Mitigation', value: '40 | 45 | 50 | 55 | 60%' },
            { label: 'Range', value: '5.6m' },
            { label: 'Final Range', value: '2.8m' }
          ]
        }
      }
    }
  ],
  recommendedBuilds: []
};