import { God, DamageType } from '../../types';

export const CERNUNNOS: God = {
  id: 'cernunnos',
  name: 'Cernunnos',
  title: 'The Horned God',
  pantheon: 'Celtic',
  role: 'Hunter',
  lanes: ['Carry', 'Jungle'],
  damageType: DamageType.Physical,
  image: '',
  videoGuideUrl: '',
  goodAgainst: [],
  badAgainst: [],
  levelingOrder: [],
  statsByLevel: [
    // Level 1
    { strength: 0, intelligence: 0, inhandPower: 46.176, baseAttackSpeed: 1.0, attackSpeedPercent: 1.456, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 18.05, magicalProtection: 26.125, damageMitigation: 0, maxHealth: 591.375, healthRegen: 1.7, maxMana: 296, manaRegen: 2.1375, cooldownRate: 0, movementSpeed: 365, xpRequirement: 0 },
    // Level 2
    { strength: 0, intelligence: 0, inhandPower: 48.672, baseAttackSpeed: 1.0, attackSpeedPercent: 2.912, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 20.9, magicalProtection: 27.55, damageMitigation: 0, maxHealth: 683.94, healthRegen: 1.9, maxMana: 338, manaRegen: 2.375, cooldownRate: 0, movementSpeed: 365, xpRequirement: 308 },
    // Level 3
    { strength: 0, intelligence: 0, inhandPower: 51.168, baseAttackSpeed: 1.0, attackSpeedPercent: 4.368, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 23.75, magicalProtection: 28.975, damageMitigation: 0, maxHealth: 776.505, healthRegen: 2.1, maxMana: 380, manaRegen: 2.6125, cooldownRate: 0, movementSpeed: 365, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 53.664, baseAttackSpeed: 1.0, attackSpeedPercent: 5.824, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 26.6, magicalProtection: 30.4, damageMitigation: 0, maxHealth: 869.07, healthRegen: 2.3, maxMana: 422, manaRegen: 2.85, cooldownRate: 0, movementSpeed: 365, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 56.16, baseAttackSpeed: 1.0, attackSpeedPercent: 7.28, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 29.45, magicalProtection: 31.825, damageMitigation: 0, maxHealth: 961.635, healthRegen: 2.5, maxMana: 464, manaRegen: 3.0875, cooldownRate: 0, movementSpeed: 365, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 58.656, baseAttackSpeed: 1.0, attackSpeedPercent: 8.736, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 32.3, magicalProtection: 33.25, damageMitigation: 0, maxHealth: 1054.2, healthRegen: 2.7, maxMana: 506, manaRegen: 3.325, cooldownRate: 0, movementSpeed: 365, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 61.152, baseAttackSpeed: 1.0, attackSpeedPercent: 10.192, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 35.15, magicalProtection: 34.675, damageMitigation: 0, maxHealth: 1146.765, healthRegen: 2.9, maxMana: 548, manaRegen: 3.5625, cooldownRate: 0, movementSpeed: 365, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 63.648, baseAttackSpeed: 1.0, attackSpeedPercent: 11.648, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 38, magicalProtection: 36.1, damageMitigation: 0, maxHealth: 1239.33, healthRegen: 3.1, maxMana: 590, manaRegen: 3.8, cooldownRate: 0, movementSpeed: 365, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 66.144, baseAttackSpeed: 1.0, attackSpeedPercent: 13.104, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 40.85, magicalProtection: 37.525, damageMitigation: 0, maxHealth: 1331.895, healthRegen: 3.3, maxMana: 632, manaRegen: 4.0375, cooldownRate: 0, movementSpeed: 365, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 68.64, baseAttackSpeed: 1.0, attackSpeedPercent: 14.56, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 43.7, magicalProtection: 38.95, damageMitigation: 0, maxHealth: 1424.46, healthRegen: 3.5, maxMana: 674, manaRegen: 4.275, cooldownRate: 0, movementSpeed: 365, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 71.136, baseAttackSpeed: 1.0, attackSpeedPercent: 16.016, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 46.55, magicalProtection: 40.375, damageMitigation: 0, maxHealth: 1517.025, healthRegen: 3.7, maxMana: 716, manaRegen: 4.5125, cooldownRate: 0, movementSpeed: 365, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 73.632, baseAttackSpeed: 1.0, attackSpeedPercent: 17.472, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 49.4, magicalProtection: 41.8, damageMitigation: 0, maxHealth: 1609.59, healthRegen: 3.9, maxMana: 758, manaRegen: 4.75, cooldownRate: 0, movementSpeed: 365, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 76.128, baseAttackSpeed: 1.0, attackSpeedPercent: 18.928, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 52.25, magicalProtection: 43.225, damageMitigation: 0, maxHealth: 1702.155, healthRegen: 4.1, maxMana: 800, manaRegen: 4.9875, cooldownRate: 0, movementSpeed: 365, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 78.624, baseAttackSpeed: 1.0, attackSpeedPercent: 20.384, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 55.1, magicalProtection: 44.65, damageMitigation: 0, maxHealth: 1794.72, healthRegen: 4.3, maxMana: 842, manaRegen: 5.225, cooldownRate: 0, movementSpeed: 365, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 81.12, baseAttackSpeed: 1.0, attackSpeedPercent: 21.84, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 57.95, magicalProtection: 46.075, damageMitigation: 0, maxHealth: 1887.285, healthRegen: 4.5, maxMana: 884, manaRegen: 5.4625, cooldownRate: 0, movementSpeed: 365, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 83.616, baseAttackSpeed: 1.0, attackSpeedPercent: 23.296, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 60.8, magicalProtection: 47.5, damageMitigation: 0, maxHealth: 1979.85, healthRegen: 4.7, maxMana: 926, manaRegen: 5.7, cooldownRate: 0, movementSpeed: 365, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 86.112, baseAttackSpeed: 1.0, attackSpeedPercent: 24.752, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 63.65, magicalProtection: 48.925, damageMitigation: 0, maxHealth: 2072.415, healthRegen: 4.9, maxMana: 968, manaRegen: 5.9375, cooldownRate: 0, movementSpeed: 365, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 88.608, baseAttackSpeed: 1.0, attackSpeedPercent: 26.208, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 66.5, magicalProtection: 50.35, damageMitigation: 0, maxHealth: 2164.98, healthRegen: 5.1, maxMana: 1010, manaRegen: 6.175, cooldownRate: 0, movementSpeed: 365, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 91.104, baseAttackSpeed: 1.0, attackSpeedPercent: 27.664, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 69.35, magicalProtection: 51.775, damageMitigation: 0, maxHealth: 2257.545, healthRegen: 5.3, maxMana: 1052, manaRegen: 6.4125, cooldownRate: 0, movementSpeed: 365, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 93.6, baseAttackSpeed: 1.0, attackSpeedPercent: 29.12, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 72.2, magicalProtection: 53.2, damageMitigation: 0, maxHealth: 2351.25, healthRegen: 5.5, maxMana: 1094, manaRegen: 6.65, cooldownRate: 0, movementSpeed: 365, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'Cernunnos Basic Attack',
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
    name: 'Heavy Glaive',
    image: '',
    description: 'Basic attacks deal bonus Physical Damage to enemies in melee range.\n\n• Melee attacks cleave in a cone, hitting all nearby enemies',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Bonus Damage Scaling', value: '30% Strength + 5% Intelligence' },
      { label: 'Range', value: '1.92m' },
      { label: 'Cone Angle', value: '120 degrees' }
    ]
  },
  abilities: {
    1: {
      name: 'Shifter of Seasons',
      image: '',
      description: 'Activate to toggle between Spring, Summer, Fall, or Winter basic attack bonus effects.\n\n• Spring: Self Healing\n• Summer: Bonus Damage (INT or STR, whichever is higher)\n• Fall: Protection Reduction\n• Winter: Slow\n\nThis effect is always active once ranked. Summer Season basic attacks deal Physical Damage if you have more Strength, or Magical Damage if you have more Intelligence.',
      cooldown: '0s',
      cost: '0',
      attributes: [
        { label: 'Spring Lifesteal', value: '3 | 3.5 | 4 | 4.5 | 5%' },
        { label: 'Spring Heal Scaling', value: '8% Intelligence' },
        { label: 'Summer Damage', value: '5 | 10 | 15 | 20 | 25' },
        { label: 'Summer Damage Scaling', value: '10 | 13 | 16 | 19 | 22% Strength or Intelligence' },
        { label: 'Fall Protection Reduction', value: '5 | 10 | 15 | 20 | 25' },
        { label: 'Fall Protection Reduction Scaling', value: '5% Intelligence' },
        { label: 'Fall Debuff Duration', value: '10s' },
        { label: 'Winter Slow', value: '10 | 11 | 12 | 13 | 14%' },
        { label: 'Winter Slow Scaling', value: '2.5% Intelligence' },
        { label: 'Winter Slow Duration', value: '1.5s' }
      ]
    },
    2: {
      name: 'Bramble Blast',
      image: '',
      description: 'Fire a bramble that explodes on hit or upon reaching max range, dealing Physical Damage in an area.\n\n• This Roots and Cripples a directly hit target\n• The explosion leaves a bramble area that repeatedly deals Physical Damage\n\nProjectile stops and explodes on first enemy hit. Projectile stops and explodes on walls or at max range. Bramble area hits 10 times over 5 seconds.',
      cooldown: '15s',
      cost: '50 | 60 | 70 | 80 | 90',
      attributes: [
        { label: 'Initial Damage', value: '65 | 110 | 155 | 200 | 245' },
        { label: 'Initial Damage Scaling', value: '75% Strength + 50% Intelligence' },
        { label: 'Damage Per Tick', value: '8 | 12 | 16 | 20 | 24' },
        { label: 'Damage Scaling Per Tick', value: '6% Strength + 12% Intelligence' },
        { label: 'Root Duration', value: '1s' },
        { label: 'Range', value: '8.8m' },
        { label: 'Radius', value: '3.2m' }
      ]
    },
    3: {
      name: 'Horn Charge',
      image: '',
      description: 'Dash forward, passing through all types of enemies.\n\n• Deals Physical Damage to all enemies hit\n\nDash passes through all enemies. You can cancel this ability at any time.',
      cooldown: '15 | 14.5 | 14 | 13.5 | 13s',
      cost: '70 | 75 | 80 | 85 | 90',
      attributes: [
        { label: 'Damage', value: '90 | 140 | 190 | 240 | 290' },
        { label: 'Damage Scaling', value: '85% Strength' },
        { label: 'Range', value: '8.8m' },
        { label: 'Radius', value: '1.6m' }
      ]
    },
    4: {
      name: 'The Wild Hunt',
      image: '',
      description: 'Polymorph enemy gods into wild boars and start The Wild Hunt.\n\n• Deals Physical Damage to all enemies in the area\n• Applies Shifter of Season effects\n\nPolymorphed Enemies are Silenced, Disarmed, Slowed, and transformed to look like harmless animals.',
      cooldown: '90s',
      cost: '100',
      attributes: [
        { label: 'Damage', value: '200 | 285 | 370 | 455 | 540' },
        { label: 'Damage Scaling', value: '80% Strength + 100% Intelligence' },
        { label: 'Polymorph Duration', value: '1.5s' },
        { label: 'Slow', value: '20%' },
        { label: 'Slow Duration', value: '1.5s' },
        { label: 'Range', value: '8.8m' },
        { label: 'Radius', value: '4m' }
      ]
    }
  },
  aspects: [
    {
      id: 'strife',
      name: 'Aspect of Strife',
      image: '',
      description: 'Your Basic Attacks are now melee and deal increased damage, cleave, and apply stronger Shifter of Seasons effects to all enemies hit. In addition, Horn Charge\'s cooldown is reduced when hitting a god or Jungle Monster and applies Shifter of Seasons.',
      basicAttack: {
        name: 'Cernunnos Basic Attack',
        image: '',
        description: 'Deal Physical Damage to all enemies in front of you.\n\nBasic Attacks are now melee and cleave.',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Damage Scaling', value: '130% Strength + 25% Intelligence' },
          { label: 'Range', value: '1.92m' },
          { label: 'Cone Angle', value: '120 degrees' }
        ]
      },
      passive: {
        name: 'Heavy Glaive',
        image: '',
        description: 'Basic attacks deal bonus Physical Damage to enemies in melee range.\n\n• INCREASED DAMAGE SCALING WITH ASPECT',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Bonus Damage Scaling', value: '130% Strength + 25% Intelligence' },
          { label: 'Range', value: '1.92m' },
          { label: 'Cone Angle', value: '120 degrees' }
        ]
      },
      abilities: {
        1: {
          name: 'Shifter of Seasons',
          image: '',
          description: 'Activate to toggle between Spring, Summer, Fall, or Winter basic attack bonus effects. Horn Charge can also trigger these effects.\n\n• Spring: Self Healing\n• Summer: Bonus Damage (INT or STR, whichever is higher)\n• Fall: Protection Reduction\n• Winter: Slow\n\n• HORN CHARGE CAN ALSO TRIGGER THESE EFFECTS\n• STRONGER SEASONAL EFFECTS',
          cooldown: '0s',
          cost: '0',
          attributes: [
            { label: 'Spring Lifesteal', value: '3 | 3.5 | 4 | 4.5 | 5%' },
            { label: 'Spring Heal Scaling', value: '8% Intelligence' },
            { label: 'Summer Damage', value: '8 | 15 | 22 | 29 | 36' },
            { label: 'Summer Damage Scaling', value: '10 | 13 | 16 | 19 | 22% Strength or Intelligence' },
            { label: 'Fall Physical Protection Reduced', value: '10 | 15 | 20 | 25 | 30' },
            { label: 'Fall Magical Protection Reduced', value: '10 | 15 | 20 | 25 | 30' },
            { label: 'Fall Protection Reduction Scaling', value: '5% Intelligence' },
            { label: 'Fall Debuff Duration', value: '10s' },
            { label: 'Winter Slow', value: '12 | 14 | 16 | 18 | 20%' },
            { label: 'Winter Slow Scaling', value: '2.5% Intelligence' },
            { label: 'Winter Slow Duration', value: '2s' }
          ]
        },
        2: {
          name: 'Bramble Blast',
          image: '',
          description: 'Fire a bramble that explodes on hit or upon reaching max range, dealing Physical Damage in an area.\n\n• This Roots and Cripples a directly hit target\n• The explosion leaves a bramble area that repeatedly deals Physical Damage\n\nProjectile stops and explodes on first enemy hit. Projectile stops and explodes on walls or at max range. Bramble area hits 10 times over 5 seconds.',
          cooldown: '15s',
          cost: '50 | 60 | 70 | 80 | 90',
          attributes: [
            { label: 'Initial Damage', value: '65 | 110 | 155 | 200 | 245' },
            { label: 'Initial Damage Scaling', value: '75% Strength + 50% Intelligence' },
            { label: 'Damage Per Tick', value: '8 | 12 | 16 | 20 | 24' },
            { label: 'Damage Scaling Per Tick', value: '6% Strength + 12% Intelligence' },
            { label: 'Root Duration', value: '1s' },
            { label: 'Range', value: '8.8m' },
            { label: 'Radius', value: '3.2m' }
          ]
        },
        3: {
          name: 'Horn Charge',
          image: '',
          description: 'Dash forward, passing through all types of enemies.\n\n• Deals Physical Damage to all enemies hit\n• APPLIES SHIFTER OF SEASONS EFFECTS\n• COOLDOWN REDUCED WHEN HITTING GODS OR JUNGLE MONSTERS\n\nDash passes through all enemies. You can cancel this ability at any time. Hitting an enemy god decreases the cooldown of this ability by 4s or 2s for Jungle Monsters.',
          cooldown: '15 | 14.5 | 14 | 13.5 | 13s',
          cost: '70 | 75 | 80 | 85 | 90',
          attributes: [
            { label: 'Damage', value: '90 | 140 | 190 | 240 | 290' },
            { label: 'Damage Scaling', value: '85% Strength' },
            { label: 'Cooldown Reduction (God Hit)', value: '4s' },
            { label: 'Cooldown Reduction (Jungle Monster Hit)', value: '2s' },
            { label: 'Range', value: '8.8m' },
            { label: 'Radius', value: '1.6m' }
          ]
        },
        4: {
          name: 'The Wild Hunt',
          image: '',
          description: 'Polymorph enemy gods into wild boars and start The Wild Hunt.\n\n• Deals Physical Damage to all enemies in the area\n• Applies Shifter of Season effects\n\nPolymorphed Enemies are Silenced, Disarmed, Slowed, and transformed to look like harmless animals.',
          cooldown: '90s',
          cost: '100',
          attributes: [
            { label: 'Damage', value: '200 | 285 | 370 | 455 | 540' },
            { label: 'Damage Scaling', value: '80% Strength + 100% Intelligence' },
            { label: 'Polymorph Duration', value: '1.5s' },
            { label: 'Slow', value: '20%' },
            { label: 'Slow Duration', value: '1.5s' },
            { label: 'Range', value: '8.8m' },
            { label: 'Radius', value: '4m' }
          ]
        }
      }
    }
  ],
  recommendedBuilds: []
};