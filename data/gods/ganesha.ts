import { God, DamageType } from '../../types';

export const GANESHA: God = {
  id: 'ganesha',
  name: 'Ganesha',
  title: 'God of Success',
  pantheon: 'Hindu',
  role: 'Guardian',
  lanes: ['Support'],
  damageType: DamageType.Magical,
  image: 'https://static.smite2.live/smite2/GODS/Ganesha/Default/t_GodCard_Ganesha.webp',
  videoGuideUrl: '',
  goodAgainst: [],
  badAgainst: [],
  levelingOrder: [],
  statsByLevel: [
    // Level 1
    { strength: 0, intelligence: 0, inhandPower: 44.4, baseAttackSpeed: 0.97, attackSpeedPercent: 1.33, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 20.52, magicalProtection: 29.7, damageMitigation: 0, maxHealth: 672.3, healthRegen: 1.84, maxMana: 296, manaRegen: 2.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 0 },
    // Level 2
    { strength: 0, intelligence: 0, inhandPower: 46.8, baseAttackSpeed: 0.97, attackSpeedPercent: 2.66, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 23.52, magicalProtection: 31.2, damageMitigation: 0, maxHealth: 769.8, healthRegen: 2.048, maxMana: 338, manaRegen: 2.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 308 },
    // Level 3
    { strength: 0, intelligence: 0, inhandPower: 49.2, baseAttackSpeed: 0.97, attackSpeedPercent: 3.99, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 26.52, magicalProtection: 32.7, damageMitigation: 0, maxHealth: 867.3, healthRegen: 2.256, maxMana: 380, manaRegen: 2.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 51.6, baseAttackSpeed: 0.97, attackSpeedPercent: 5.32, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 29.52, magicalProtection: 34.2, damageMitigation: 0, maxHealth: 964.8, healthRegen: 2.464, maxMana: 422, manaRegen: 3, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 54, baseAttackSpeed: 0.97, attackSpeedPercent: 6.65, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 32.52, magicalProtection: 35.7, damageMitigation: 0, maxHealth: 1062.3, healthRegen: 2.672, maxMana: 464, manaRegen: 3.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 56.4, baseAttackSpeed: 0.97, attackSpeedPercent: 7.98, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 35.52, magicalProtection: 37.2, damageMitigation: 0, maxHealth: 1159.8, healthRegen: 2.88, maxMana: 506, manaRegen: 3.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 58.8, baseAttackSpeed: 0.97, attackSpeedPercent: 9.31, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 38.52, magicalProtection: 38.7, damageMitigation: 0, maxHealth: 1257.3, healthRegen: 3.088, maxMana: 548, manaRegen: 3.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 61.2, baseAttackSpeed: 0.97, attackSpeedPercent: 10.64, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 41.52, magicalProtection: 40.2, damageMitigation: 0, maxHealth: 1354.8, healthRegen: 3.296, maxMana: 590, manaRegen: 4, cooldownRate: 0, movementSpeed: 375, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 63.6, baseAttackSpeed: 0.97, attackSpeedPercent: 11.97, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 44.52, magicalProtection: 41.7, damageMitigation: 0, maxHealth: 1452.3, healthRegen: 3.504, maxMana: 632, manaRegen: 4.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 66, baseAttackSpeed: 0.97, attackSpeedPercent: 13.3, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 47.52, magicalProtection: 43.2, damageMitigation: 0, maxHealth: 1549.8, healthRegen: 3.712, maxMana: 674, manaRegen: 4.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 68.4, baseAttackSpeed: 0.97, attackSpeedPercent: 14.63, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 50.52, magicalProtection: 44.7, damageMitigation: 0, maxHealth: 1647.3, healthRegen: 3.92, maxMana: 716, manaRegen: 4.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 70.8, baseAttackSpeed: 0.97, attackSpeedPercent: 15.96, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 53.52, magicalProtection: 46.2, damageMitigation: 0, maxHealth: 1744.8, healthRegen: 4.128, maxMana: 758, manaRegen: 5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 73.2, baseAttackSpeed: 0.97, attackSpeedPercent: 17.29, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 56.52, magicalProtection: 47.7, damageMitigation: 0, maxHealth: 1842.3, healthRegen: 4.336, maxMana: 800, manaRegen: 5.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 75.6, baseAttackSpeed: 0.97, attackSpeedPercent: 18.62, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 59.52, magicalProtection: 49.2, damageMitigation: 0, maxHealth: 1939.8, healthRegen: 4.544, maxMana: 842, manaRegen: 5.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 78, baseAttackSpeed: 0.97, attackSpeedPercent: 19.95, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 62.52, magicalProtection: 50.7, damageMitigation: 0, maxHealth: 2037.3, healthRegen: 4.752, maxMana: 884, manaRegen: 5.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 80.4, baseAttackSpeed: 0.97, attackSpeedPercent: 21.28, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 65.52, magicalProtection: 52.2, damageMitigation: 0, maxHealth: 2134.8, healthRegen: 4.96, maxMana: 926, manaRegen: 6, cooldownRate: 0, movementSpeed: 375, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 82.8, baseAttackSpeed: 0.97, attackSpeedPercent: 22.61, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 68.52, magicalProtection: 53.7, damageMitigation: 0, maxHealth: 2232.3, healthRegen: 5.168, maxMana: 968, manaRegen: 6.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 85.2, baseAttackSpeed: 0.97, attackSpeedPercent: 23.94, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 71.52, magicalProtection: 55.2, damageMitigation: 0, maxHealth: 2329.8, healthRegen: 5.376, maxMana: 1010, manaRegen: 6.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 87.6, baseAttackSpeed: 0.97, attackSpeedPercent: 25.27, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 74.52, magicalProtection: 56.7, damageMitigation: 0, maxHealth: 2427.3, healthRegen: 5.584, maxMana: 1052, manaRegen: 6.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 90, baseAttackSpeed: 0.97, attackSpeedPercent: 26.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 77.52, magicalProtection: 58.2, damageMitigation: 0, maxHealth: 2524.8, healthRegen: 5.792, maxMana: 1094, manaRegen: 7, cooldownRate: 0, movementSpeed: 375, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'Ganesha Basic Attack',
    image: 'https://static.smite2.live/smite2/GODS/common/Icon_BasicAttack_Magical.webp',
    description: 'Deal Magical Damage to an enemy in front of you.\n\nIf multiple enemies are in the area, the enemy closest to the center of the area will be hit.\n\nHas a 5 hit chain. Attacks in order of 1.05, 0.8, 0.8, 1.5, 0.95x damage and swing time.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage Scaling', value: '105% Strength or Inhand Power + 21% Intelligence' },
      { label: 'Range', value: '1.92m' },
      { label: 'Cone Angle', value: '120 degrees' }
    ]
  },
  passive: {
    name: 'Good Fortune',
    image: 'https://static.smite2.live/smite2/GODS/Ganesha/Abilities/Icons_Ganesha_Passive.webp',
    description: 'Any time you deal a killing blow, the nearest allied god receives the credit and you receive the rewards for an assist instead plus a bonus amount of gold. In addition, your assist range and the time before you lose assist credit is increased.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Bonus Gold', value: '50 per gifted god kill' }
    ]
  },
  abilities: {
    1: {
      name: 'Turn of Fate',
      image: 'https://static.smite2.live/smite2/GODS/Ganesha/Abilities/Icons_Ganesha_A01.webp',
      description: 'Send a curse forward dealing Magical Damage to enemies it passes through. For each enemy hit, all nearby allied gods gain Bonus Damage.\n\n• Enemy gods are marked for 5s. Any Hard Crowd Control effect consumes the mark to deal bonus Magical Damage.\n\nBonus Damage buff stacks up to 5 times. Minions grant 1 stack and Gods grant 2.',
      cooldown: '14 | 13.5 | 13 | 12.5 | 12s',
      cost: '65 | 70 | 75 | 80 | 85',
      attributes: [
        { label: 'Damage', value: '90 | 150 | 210 | 270 | 330' },
        { label: 'Damage Scaling', value: '55% Intelligence' },
        { label: 'Bonus Damage', value: '3% Per Stack' },
        { label: 'Buff Duration', value: '4s' },
        { label: 'Mark Bonus Damage', value: '15 + 5 Per Enemy Level' },
        { label: 'Range', value: '8.8m' },
        { label: 'Projectile Radius', value: '1.2m' }
      ]
    },
    2: {
      name: 'Ohm',
      image: 'https://static.smite2.live/smite2/GODS/Ganesha/Abilities/Icons_Ganesha_A02.webp',
      description: 'Rise into the lotus position Silencing enemies in front of you and increasing Protections of nearby allied gods.\n\n• Ganesha gains an additional 50% of the Protections he provides\n• You are Displacement Immune while channeling\n\nYou are slowed by 15% while channeling.',
      cooldown: '14 | 13 | 12 | 11 | 10s',
      cost: '55 | 60 | 65 | 70 | 75',
      attributes: [
        { label: 'Protections', value: '20 | 30 | 40 | 50 | 60' },
        { label: 'Cone Angle', value: '45 degrees' },
        { label: 'Radius', value: '5.6m' }
      ]
    },
    3: {
      name: 'Remove Obstacles',
      image: 'https://static.smite2.live/smite2/GODS/Ganesha/Abilities/Icons_Ganesha_A03.webp',
      description: 'Dash forward dealing Magical Damage to enemy minions you pass through and stopping on enemy gods, holding them in place before Knocking them Up.\n\n• While dashing you pass through ultimate player made walls and destroy non-ultimate player made walls.\n\nDamage dealt to enemy gods is split between 3 hits.\n\nYou pass through but do not destroy ally walls.\n\nYou cannot cancel while Dashing but you can on contact with an enemy god.',
      cooldown: '14 | 13.5 | 13 | 12.5 | 12s',
      cost: '70',
      attributes: [
        { label: 'Damage', value: '90 | 135 | 180 | 225 | 270' },
        { label: 'Damage Scaling', value: '45% Intelligence' },
        { label: 'Range', value: '7.5m' },
        { label: 'Radius', value: '0.64m' }
      ]
    },
    4: {
      name: 'Dharmic Pillars',
      image: 'https://static.smite2.live/smite2/GODS/Ganesha/Abilities/Icons_Ganesha_A04.webp',
      description: 'Summon 4 Great Pillars to imprison your enemies. Enemies that pass the field between each pillar take an initial hit of Magical Damage, are Slowed, and have their Protections reduced.\n\n• Enemies continue to take Magical Damage if they stay in the field.\n• Minions take 40% reduced damage from this ability',
      cooldown: '75s',
      cost: '65 | 70 | 75 | 80 | 85',
      attributes: [
        { label: 'Initial Damage', value: '144 | 208 | 272 | 336 | 400' },
        { label: 'Initial Damage Scaling', value: '64% Intelligence' },
        { label: 'Damage Per Tick', value: '90 | 130 | 170 | 210 | 250' },
        { label: 'Damage Scaling Per Tick', value: '40% Intelligence' },
        { label: 'Slow', value: '30%' },
        { label: 'Protections Reduced', value: '10 | 20 | 30 | 40 | 50' },
        { label: 'Debuff Duration', value: '3s' },
        { label: 'Range', value: '8.8m' }
      ]
    }
  },
  aspects: [
    {
      id: 'triumphant',
      name: 'Aspect of the Triumphant',
      image: 'https://static.smite2.live/smite2/ui/talents/t_talent_Damage_Burst.webp',
      description: 'Ohm no longer silences but damages enemies and provides Movement Speed. Turn of Fate\'s mark only procs when you hit the marked enemy with an ability. You no longer bestow kills to allies but each god kill provides permanent Cooldown Rate. Dharmic Pillars no longer slows and has a longer Cooldown.',
      basicAttack: {
        name: 'Ganesha Basic Attack',
        image: 'https://static.smite2.live/smite2/GODS/common/Icon_BasicAttack_Magical.webp',
        description: 'Deal Magical Damage to an enemy in front of you.\n\nIf multiple enemies are in the area, the enemy closest to the center of the area will be hit.\n\nHas a 5 hit chain. Attacks in order of 1.05, 0.8, 0.8, 1.5, 0.95x damage and swing time.',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Damage Scaling', value: '105% Strength or Inhand Power + 21% Intelligence' },
          { label: 'Range', value: '1.92m' },
          { label: 'Cone Angle', value: '120 degrees' }
        ]
      },
      passive: {
        name: 'Good Fortune',
        image: 'https://static.smite2.live/smite2/GODS/Ganesha/Abilities/Icons_Ganesha_Passive.webp',
        description: 'Any time you deal a killing blow on an enemy god, you gain permanent Cooldown Rate. In addition, your assist range is increased and the time before you lose assist credit is increased by 5s.\n\n• NO LONGER BESTOWS KILLS TO ALLIES',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Bonus Cooldown Rate', value: '2% per god kill' }
        ]
      },
      abilities: {
        1: {
          name: 'Turn of Fate',
          image: 'https://static.smite2.live/smite2/GODS/Ganesha/Abilities/Icons_Ganesha_A01.webp',
          description: 'Send a curse forward dealing Magical Damage to enemies it passes through. For each enemy hit, all nearby allied gods gain Bonus Damage.\n\n• Enemy gods are marked for 5s. Damaging them with any of your abilities consumes the mark to deal bonus Magical Damage.\n• MARK NOW ONLY PROCS FROM YOUR ABILITIES (not Hard CC)\n\nBonus Damage buff stacks up to 5 times. Minions grant 1 stack and Gods grant 2.',
          cooldown: '14 | 13.5 | 13 | 12.5 | 12s',
          cost: '65 | 70 | 75 | 80 | 85',
          attributes: [
            { label: 'Damage', value: '90 | 150 | 210 | 270 | 330' },
            { label: 'Damage Scaling', value: '55% Intelligence' },
            { label: 'Bonus Damage', value: '3% Per Stack' },
            { label: 'Buff Duration', value: '4s' },
            { label: 'Mark Bonus Damage', value: '15 + 5 Per Enemy Level' },
            { label: 'Range', value: '8.8m' },
            { label: 'Projectile Radius', value: '1.2m' }
          ]
        },
        2: {
          name: 'Ohm',
          image: 'https://static.smite2.live/smite2/GODS/Ganesha/Abilities/Icons_Ganesha_A02.webp',
          description: 'Rise into the lotus position dealing Magical Damage repeatedly to enemies in front of you and increasing Movement Speed of nearby allied gods.\n\n• You are Displacement and Slow Immune while channeling\n• NO LONGER SILENCES ENEMIES\n• NO LONGER GRANTS PROTECTIONS',
          cooldown: '14 | 13 | 12 | 11 | 10s',
          cost: '55 | 60 | 65 | 70 | 75',
          attributes: [
            { label: 'Damage Per Tick', value: '30 | 40 | 50 | 60 | 70' },
            { label: 'Damage Scaling Per Tick', value: '25% Intelligence' },
            { label: 'Movement Speed', value: '20%' },
            { label: 'Cone Angle', value: '45 degrees' },
            { label: 'Radius', value: '5.6m' }
          ]
        },
        3: {
          name: 'Remove Obstacles',
          image: 'https://static.smite2.live/smite2/GODS/Ganesha/Abilities/Icons_Ganesha_A03.webp',
          description: 'Dash forward dealing Magical Damage to enemy minions you pass through and stopping on enemy gods, holding them in place before Knocking them Up.\n\n• While dashing you pass through ultimate player made walls and destroy non-ultimate player made walls.\n\nDamage dealt to enemy gods is split between 3 hits.\n\nYou pass through but do not destroy ally walls.\n\nYou cannot cancel while Dashing but you can on contact with an enemy god.',
          cooldown: '14 | 13.5 | 13 | 12.5 | 12s',
          cost: '70',
          attributes: [
            { label: 'Damage', value: '90 | 135 | 180 | 225 | 270' },
            { label: 'Damage Scaling', value: '45% Intelligence' },
            { label: 'Range', value: '7.5m' },
            { label: 'Radius', value: '0.64m' }
          ]
        },
        4: {
          name: 'Dharmic Pillars',
          image: 'https://static.smite2.live/smite2/GODS/Ganesha/Abilities/Icons_Ganesha_A04.webp',
          description: 'Summon 4 Great Pillars to imprison your enemies. Enemies that pass the field between each pillar take an initial hit of Magical Damage and have their Protections reduced.\n\n• Enemies continue to take Magical Damage if they stay in the field.\n• Minions take 40% reduced damage from this ability\n• NO LONGER SLOWS ENEMIES\n• HAS A LONGER COOLDOWN',
          cooldown: '100s',
          cost: '65 | 70 | 75 | 80 | 85',
          attributes: [
            { label: 'Initial Damage', value: '144 | 208 | 272 | 336 | 400' },
            { label: 'Initial Damage Scaling', value: '64% Intelligence' },
            { label: 'Damage Per Tick', value: '90 | 130 | 170 | 210 | 250' },
            { label: 'Damage Scaling Per Tick', value: '40% Intelligence' },
            { label: 'Protections Reduced', value: '10 | 20 | 30 | 40 | 50' },
            { label: 'Debuff Duration', value: '3s' },
            { label: 'Range', value: '8.8m' }
          ]
        }
      }
    }
  ],
  recommendedBuilds: []
};