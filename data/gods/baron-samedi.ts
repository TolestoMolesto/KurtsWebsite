import { God, DamageType } from '../../types';

export const BARON_SAMEDI: God = {
  id: 'baron-samedi',
  name: 'Baron Samedi',
  title: 'God of Life and Death',
  pantheon: 'Voodoo',
  role: 'Mage',
  lanes: ['Mid', 'Support'],
  damageType: DamageType.Magical,
  image: '',
  videoGuideUrl: '',
  goodAgainst: [],
  badAgainst: [],
  levelingOrder: [],
  statsByLevel: [
    // Level 1
    { strength: 0, intelligence: 0, inhandPower: 42.18, baseAttackSpeed: 0.93, attackSpeedPercent: 1.4, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 17.57, magicalProtection: 27.425, damageMitigation: 0, maxHealth: 591.375, healthRegen: 1.7, maxMana: 296, manaRegen: 2.34, cooldownRate: 0, movementSpeed: 365, xpRequirement: 0 },
    // Level 2
    { strength: 0, intelligence: 0, inhandPower: 44.46, baseAttackSpeed: 0.93, attackSpeedPercent: 2.8, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 20.42, magicalProtection: 28.85, damageMitigation: 0, maxHealth: 683.99, healthRegen: 1.9, maxMana: 338, manaRegen: 2.6, cooldownRate: 0, movementSpeed: 365, xpRequirement: 308 },
    // Level 3
    { strength: 0, intelligence: 0, inhandPower: 46.74, baseAttackSpeed: 0.93, attackSpeedPercent: 4.2, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 23.27, magicalProtection: 30.275, damageMitigation: 0, maxHealth: 776.61, healthRegen: 2.1, maxMana: 380, manaRegen: 2.86, cooldownRate: 0, movementSpeed: 365, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 49.02, baseAttackSpeed: 0.93, attackSpeedPercent: 5.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 26.12, magicalProtection: 31.7, damageMitigation: 0, maxHealth: 869.22, healthRegen: 2.3, maxMana: 422, manaRegen: 3.12, cooldownRate: 0, movementSpeed: 365, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 51.3, baseAttackSpeed: 0.93, attackSpeedPercent: 7.0, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 28.97, magicalProtection: 33.125, damageMitigation: 0, maxHealth: 961.84, healthRegen: 2.5, maxMana: 464, manaRegen: 3.38, cooldownRate: 0, movementSpeed: 365, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 53.58, baseAttackSpeed: 0.93, attackSpeedPercent: 8.4, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 31.82, magicalProtection: 34.55, damageMitigation: 0, maxHealth: 1054.46, healthRegen: 2.7, maxMana: 506, manaRegen: 3.64, cooldownRate: 0, movementSpeed: 365, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 55.86, baseAttackSpeed: 0.93, attackSpeedPercent: 9.8, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 34.67, magicalProtection: 35.975, damageMitigation: 0, maxHealth: 1147.07, healthRegen: 2.9, maxMana: 548, manaRegen: 3.9, cooldownRate: 0, movementSpeed: 365, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 58.14, baseAttackSpeed: 0.93, attackSpeedPercent: 11.2, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 37.52, magicalProtection: 37.4, damageMitigation: 0, maxHealth: 1239.69, healthRegen: 3.1, maxMana: 590, manaRegen: 4.16, cooldownRate: 0, movementSpeed: 365, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 60.42, baseAttackSpeed: 0.93, attackSpeedPercent: 12.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 40.37, magicalProtection: 38.825, damageMitigation: 0, maxHealth: 1332.31, healthRegen: 3.3, maxMana: 632, manaRegen: 4.42, cooldownRate: 0, movementSpeed: 365, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 62.7, baseAttackSpeed: 0.93, attackSpeedPercent: 14.0, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 43.22, magicalProtection: 40.25, damageMitigation: 0, maxHealth: 1424.92, healthRegen: 3.5, maxMana: 674, manaRegen: 4.68, cooldownRate: 0, movementSpeed: 365, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 64.98, baseAttackSpeed: 0.93, attackSpeedPercent: 15.4, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 46.07, magicalProtection: 41.675, damageMitigation: 0, maxHealth: 1517.54, healthRegen: 3.7, maxMana: 716, manaRegen: 4.94, cooldownRate: 0, movementSpeed: 365, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 67.26, baseAttackSpeed: 0.93, attackSpeedPercent: 16.8, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 48.92, magicalProtection: 43.1, damageMitigation: 0, maxHealth: 1610.15, healthRegen: 3.9, maxMana: 758, manaRegen: 5.2, cooldownRate: 0, movementSpeed: 365, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 69.54, baseAttackSpeed: 0.93, attackSpeedPercent: 18.2, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 51.77, magicalProtection: 44.525, damageMitigation: 0, maxHealth: 1702.77, healthRegen: 4.1, maxMana: 800, manaRegen: 5.46, cooldownRate: 0, movementSpeed: 365, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 71.82, baseAttackSpeed: 0.93, attackSpeedPercent: 19.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 54.62, magicalProtection: 45.95, damageMitigation: 0, maxHealth: 1795.39, healthRegen: 4.3, maxMana: 842, manaRegen: 5.72, cooldownRate: 0, movementSpeed: 365, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 74.1, baseAttackSpeed: 0.93, attackSpeedPercent: 21.0, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 57.47, magicalProtection: 47.375, damageMitigation: 0, maxHealth: 1888.0, healthRegen: 4.5, maxMana: 884, manaRegen: 5.98, cooldownRate: 0, movementSpeed: 365, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 76.38, baseAttackSpeed: 0.93, attackSpeedPercent: 22.4, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 60.32, magicalProtection: 48.8, damageMitigation: 0, maxHealth: 1980.62, healthRegen: 4.7, maxMana: 926, manaRegen: 6.24, cooldownRate: 0, movementSpeed: 365, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 78.66, baseAttackSpeed: 0.93, attackSpeedPercent: 23.8, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 63.17, magicalProtection: 50.225, damageMitigation: 0, maxHealth: 2073.24, healthRegen: 4.9, maxMana: 968, manaRegen: 6.5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 80.94, baseAttackSpeed: 0.93, attackSpeedPercent: 25.2, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 66.02, magicalProtection: 51.65, damageMitigation: 0, maxHealth: 2165.85, healthRegen: 5.1, maxMana: 1010, manaRegen: 6.76, cooldownRate: 0, movementSpeed: 365, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 83.22, baseAttackSpeed: 0.93, attackSpeedPercent: 26.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 68.87, magicalProtection: 53.075, damageMitigation: 0, maxHealth: 2258.47, healthRegen: 5.3, maxMana: 1052, manaRegen: 7.02, cooldownRate: 0, movementSpeed: 365, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 85.5, baseAttackSpeed: 0.93, attackSpeedPercent: 28.0, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 71.72, magicalProtection: 54.5, damageMitigation: 0, maxHealth: 2351.25, healthRegen: 5.5, maxMana: 1094, manaRegen: 7.28, cooldownRate: 0, movementSpeed: 365, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'Baron Basic Attack',
    image: '',
    description: 'Fire a projectile that deals Magical Damage to the first enemy hit.\n\nProjectile stops on first target hit, and does not pass through walls.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
      { label: 'Hysteria', value: '5' },
      { label: 'Range', value: '8.8m' },
      { label: 'Radius', value: '0.48m' }
    ]
  },
  passive: {
    name: 'Hysteria',
    image: '',
    description: 'Damage applies Hysteria, granting your abilities bonus effects when enough is applied. Your team can also purchase Baron\'s Brew from the item store.\n\n• Gods at Max Hysteria [70] deal 20% Reduced Damage to Baron Samedi\n• Baron\'s Brew can be thrown at enemies to apply Magical Damage and Hysteria\n\nHysteria drains at a rate of 2/s. This drain stops on the target for 5s when Baron Samedi applies Hysteria to them.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Max Hysteria', value: '70' },
      { label: 'Damage Reduction at Max', value: '20%' },
      { label: 'Hysteria Decay', value: '2/s' },
      { label: 'Decay Pause Duration', value: '5s' }
    ]
  },
  abilities: {
    1: {
      name: 'Vivid Gaze',
      image: '',
      description: 'Summon skulls that deal Magical Damage in an X shape.\n\n• Deals a bonus 25% Magical Damage to enemies hit by the overlap\n• Hitting a god above 30 Hysteria applies a Strength, Intelligence, and Attack Speed Reduction\n\nVivid Gaze will trigger its Hysteria effect if its own damage brings targets above the Hysteria Threshold.',
      cooldown: '11 | 10.5 | 10 | 9.5 | 9s',
      cost: '55 | 60 | 65 | 70 | 75',
      attributes: [
        { label: 'Damage', value: '70 | 125 | 180 | 235 | 290' },
        { label: 'Damage Scaling', value: '70% Intelligence' },
        { label: 'Overlap Bonus Damage', value: '25%' },
        { label: 'Power Reduction (30+ Hysteria)', value: '20%' },
        { label: 'Reduction Scaling', value: '5% Physical Protection + 5% Magical Protection' },
        { label: 'Debuff Duration', value: '3 | 3.5 | 4 | 4.5 | 5s' },
        { label: 'Hysteria Applied', value: '15' },
        { label: 'Range', value: '9.6m' },
        { label: 'Radius', value: '1.28m' }
      ]
    },
    2: {
      name: 'Consign Spirits',
      image: '',
      description: 'Call spirits that deal Magical Damage to enemies in an area.\n\n• Hitting a god Heals nearby allies for Missing Health\n• Hitting a god above 30 Hysteria makes the heal apply a Speed Buff and Slow Immunity\n\nAllies within 8.8m of Baron Samedi or the center of Consign Spirits will receive the heal.',
      cooldown: '14 | 13.5 | 13 | 12.5 | 12s',
      cost: '70 | 75 | 80 | 85 | 90',
      attributes: [
        { label: 'Damage', value: '85 | 140 | 195 | 250 | 305' },
        { label: 'Damage Scaling', value: '80% Intelligence' },
        { label: 'Heal', value: '25 | 35 | 45 | 55 | 65' },
        { label: 'Missing Health Heal', value: '3%' },
        { label: 'Missing Health Scaling', value: '5% Cooldown Rate' },
        { label: 'Speed Buff (30+ Hysteria)', value: '25%' },
        { label: 'Hysteria Applied', value: '20' },
        { label: 'Range', value: '8.8m' },
        { label: 'Radius', value: '2.88m' }
      ]
    },
    3: {
      name: 'Wrap It Up',
      image: '',
      description: 'Throw a snake that constricts enemy gods, Slowing them to a Root.\n\n• Constricted gods take Magical Damage over 1.75s\n• Minions take a tick of Magical Damage when the snake passes through them\n• Hitting a god above 30 Hysteria causes the snake to explode when it Roots, applying a Mesmerize to nearby enemies\n\nEnemies must be at or above 30 Hysteria when Wrap It Up hits to trigger its Hysteria effect. The snake deals damage every 0.4375s, for a total of 5 ticks.',
      cooldown: '16 | 15.5 | 15 | 14.5 | 14s',
      cost: '60 | 65 | 70 | 75 | 80',
      attributes: [
        { label: 'Total Damage', value: '70 | 125 | 180 | 235 | 290' },
        { label: 'Damage Scaling', value: '50% Intelligence' },
        { label: 'Slow Duration', value: '1.75s' },
        { label: 'Root Duration', value: '0.75s' },
        { label: 'Mesmerize Duration (30+ Hysteria)', value: '1.5s' },
        { label: 'Hysteria Per Tick', value: '5' },
        { label: 'Range', value: '9.6m' },
        { label: 'Radius', value: '0.8m' }
      ]
    },
    4: {
      name: 'Life of the Party',
      image: '',
      description: 'Open a Coffin that Vortexes enemies towards Baron Samedi. Gods Vortexed into the Coffin take Magical Damage and are Stunned.\n\n• The Vortex deals Magical Damage every 0.5s\n• Gods above 30 Hysteria are Vortexed with more intensity\n• You gain damage reduction while Channeling',
      cooldown: '110s',
      cost: '70 | 75 | 80 | 85 | 90',
      attributes: [
        { label: 'Vortex Damage', value: '15 | 20 | 25 | 30 | 35' },
        { label: 'Vortex Scaling', value: '7% Intelligence' },
        { label: 'Slam Damage', value: '200 | 270 | 340 | 410 | 480' },
        { label: 'Slam Scaling', value: '70% Intelligence' },
        { label: 'Slam Health Damage', value: '10%' },
        { label: '% Health Scaling', value: '2.5% Physical Protection + 2.5% Magical Protection' },
        { label: 'Stun Duration', value: '1.3s' },
        { label: 'Damage Reduction', value: '50%' },
        { label: 'Hysteria Per Tick', value: '2' },
        { label: 'Hysteria Per Slam', value: '30' },
        { label: 'Cone Range', value: '6m' },
        { label: 'Cone Angle', value: '120 degrees' }
      ]
    }
  },
  aspects: [
    {
      id: 'hysteria',
      name: 'Aspect of Hysteria',
      image: '',
      description: 'Hysteria applied over maximum deals bonus Magical Damage. After Baron throws his Brew, he gains an additional throw 20 seconds later. Consign Spirits only heals Baron Samedi and no longer grants increased Protections or Crowd Control Reduction.',
      basicAttack: {
        name: 'Baron Basic Attack',
        image: '',
        description: 'Fire a projectile that deals Magical Damage to the first enemy hit.\n\nProjectile stops on first target hit, and does not pass through walls.',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
          { label: 'Hysteria', value: '5' },
          { label: 'Range', value: '8.8m' },
          { label: 'Radius', value: '0.48m' }
        ]
      },
      passive: {
        name: 'Hysteria',
        image: '',
        description: 'Damage applies Hysteria, granting your abilities bonus effects when enough is applied. Hysteria applied over maximum deals bonus Magical Damage. Your team can also purchase Baron\'s Brew from the item store.\n\n• Baron\'s Brew can be thrown at enemies to apply Magical Damage and Hysteria\n• After Baron throws his Brew, he gains an additional throw 20 seconds later.',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Max Hysteria', value: '70' },
          { label: 'Overflow Damage', value: '2' },
          { label: 'Overflow Scaling', value: '1.5% Intelligence' },
          { label: 'Hysteria Decay', value: '2/s' },
          { label: 'Decay Pause Duration', value: '5s' },
          { label: 'Bonus Brew Recharge', value: '20s' }
        ]
      },
      abilities: {
        1: {
          name: 'Vivid Gaze',
          image: '',
          description: 'Summon skulls that deal Magical Damage in an X shape.\n\n• Deals a bonus 25% Magical Damage to enemies hit by the overlap\n• HITTING A GOD ABOVE 30 HYSTERIA APPLIES 25 ADDITIONAL HYSTERIA OVER 2.5s\n\nVivid Gaze will trigger its Hysteria effect if its own damage brings targets above the Hysteria Threshold.',
          cooldown: '11 | 10.5 | 10 | 9.5 | 9s',
          cost: '55 | 60 | 65 | 70 | 75',
          attributes: [
            { label: 'Damage', value: '70 | 125 | 180 | 235 | 290' },
            { label: 'Damage Scaling', value: '70% Intelligence' },
            { label: 'Overlap Bonus Damage', value: '25%' },
            { label: 'Bonus Hysteria (30+ Hysteria)', value: '25 over 2.5s' },
            { label: 'Hysteria Applied', value: '15' },
            { label: 'Range', value: '9.6m' },
            { label: 'Radius', value: '1.28m' }
          ]
        },
        2: {
          name: 'Consign Spirits',
          image: '',
          description: 'Call spirits that deal Magical Damage to enemies in an area.\n\n• Hitting a god Heals Baron Samedi for Missing Health\n• Hitting a god above 30 Hysteria makes the heal apply a Speed Buff and Slow Immunity\n• ONLY HEALS BARON SAMEDI',
          cooldown: '7s',
          cost: '40 | 45 | 50 | 55 | 60',
          attributes: [
            { label: 'Damage', value: '40 | 60 | 80 | 100 | 120' },
            { label: 'Heal', value: '25 | 35 | 45 | 55 | 65' },
            { label: 'Missing Health Heal', value: '3%' },
            { label: 'Missing Health Scaling', value: '5% Cooldown Rate' },
            { label: 'Speed Buff (30+ Hysteria)', value: '25%' },
            { label: 'Slow (Aspect)', value: '10 | 12.5 | 15 | 17.5 | 20%' },
            { label: 'Slow Duration', value: '1s' },
            { label: 'Hysteria Applied', value: '20' },
            { label: 'Range', value: '8.8m' },
            { label: 'Radius', value: '2.88m' }
          ]
        },
        3: {
          name: 'Wrap It Up',
          image: '',
          description: 'Throw a snake that constricts enemy gods, Slowing them to a Root.\n\n• Constricted gods take Magical Damage over 1.75s\n• Minions take a tick of Magical Damage when the snake passes through them\n• HITTING A GOD ABOVE 30 HYSTERIA CAUSES THE SNAKE TO EXPLODE WHEN IT ROOTS, APPLYING 50 HYSTERIA TO NEARBY ENEMIES\n\nEnemies must be at or above 30 Hysteria when Wrap It Up hits to trigger its Hysteria effect. The snake deals damage every 0.4375s, for a total of 5 ticks.',
          cooldown: '16 | 15.5 | 15 | 14.5 | 14s',
          cost: '60 | 65 | 70 | 75 | 80',
          attributes: [
            { label: 'Total Damage', value: '70 | 125 | 180 | 235 | 290' },
            { label: 'Damage Scaling', value: '50% Intelligence' },
            { label: 'Slow Duration', value: '1.75s' },
            { label: 'Root Duration', value: '0.75s' },
            { label: 'Explosion Hysteria (30+ Hysteria)', value: '50' },
            { label: 'Hysteria Per Tick', value: '10' },
            { label: 'Range', value: '9.6m' },
            { label: 'Radius', value: '0.8m' }
          ]
        },
        4: {
          name: 'Life of the Party',
          image: '',
          description: 'Open a Coffin that Vortexes enemies towards Baron Samedi. Gods Vortexed into the Coffin take Magical Damage and are Stunned.\n\n• The Vortex deals Magical Damage every 0.5s\n• Gods above 30 Hysteria are Vortexed with more intensity\n• You gain damage reduction while Channeling',
          cooldown: '110s',
          cost: '70 | 75 | 80 | 85 | 90',
          attributes: [
            { label: 'Vortex Damage', value: '15 | 20 | 25 | 30 | 35' },
            { label: 'Vortex Scaling', value: '7% Intelligence' },
            { label: 'Slam Damage', value: '200 | 270 | 340 | 410 | 480' },
            { label: 'Slam Scaling', value: '70% Intelligence' },
            { label: 'Slam Health Damage', value: '10%' },
            { label: '% Health Scaling', value: '2.5% Physical Protection + 2.5% Magical Protection' },
            { label: 'Stun Duration', value: '1.3s' },
            { label: 'Damage Reduction', value: '50%' },
            { label: 'Hysteria Per Tick', value: '2' },
            { label: 'Hysteria Per Slam', value: '30' },
            { label: 'Cone Range', value: '6m' },
            { label: 'Cone Angle', value: '120 degrees' }
          ]
        }
      }
    }
  ],
  recommendedBuilds: []
};