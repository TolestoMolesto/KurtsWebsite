import { God, DamageType } from '../../types';

export const APHRODITE: God = {
  id: 'aphrodite',
  name: 'Aphrodite',
  title: 'Goddess of Beauty',
  pantheon: 'Greek',
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
    { strength: 0, intelligence: 0, inhandPower: 46.74, baseAttackSpeed: 0.93, attackSpeedPercent: 4.2, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 23.27, magicalProtection: 30.28, damageMitigation: 0, maxHealth: 776.61, healthRegen: 2.1, maxMana: 380, manaRegen: 2.86, cooldownRate: 0, movementSpeed: 365, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 49.02, baseAttackSpeed: 0.93, attackSpeedPercent: 5.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 26.12, magicalProtection: 31.71, damageMitigation: 0, maxHealth: 869.23, healthRegen: 2.3, maxMana: 422, manaRegen: 3.12, cooldownRate: 0, movementSpeed: 365, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 51.3, baseAttackSpeed: 0.93, attackSpeedPercent: 7.0, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 28.97, magicalProtection: 33.14, damageMitigation: 0, maxHealth: 961.85, healthRegen: 2.5, maxMana: 464, manaRegen: 3.38, cooldownRate: 0, movementSpeed: 365, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 53.58, baseAttackSpeed: 0.93, attackSpeedPercent: 8.4, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 31.82, magicalProtection: 34.57, damageMitigation: 0, maxHealth: 1054.47, healthRegen: 2.7, maxMana: 506, manaRegen: 3.64, cooldownRate: 0, movementSpeed: 365, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 55.86, baseAttackSpeed: 0.93, attackSpeedPercent: 9.8, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 34.67, magicalProtection: 36.0, damageMitigation: 0, maxHealth: 1147.09, healthRegen: 2.9, maxMana: 548, manaRegen: 3.9, cooldownRate: 0, movementSpeed: 365, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 58.14, baseAttackSpeed: 0.93, attackSpeedPercent: 11.2, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 37.52, magicalProtection: 37.43, damageMitigation: 0, maxHealth: 1239.71, healthRegen: 3.1, maxMana: 590, manaRegen: 4.16, cooldownRate: 0, movementSpeed: 365, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 60.42, baseAttackSpeed: 0.93, attackSpeedPercent: 12.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 40.37, magicalProtection: 38.86, damageMitigation: 0, maxHealth: 1332.33, healthRegen: 3.3, maxMana: 632, manaRegen: 4.42, cooldownRate: 0, movementSpeed: 365, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 62.7, baseAttackSpeed: 0.93, attackSpeedPercent: 14.0, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 43.22, magicalProtection: 40.29, damageMitigation: 0, maxHealth: 1424.95, healthRegen: 3.5, maxMana: 674, manaRegen: 4.68, cooldownRate: 0, movementSpeed: 365, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 64.98, baseAttackSpeed: 0.93, attackSpeedPercent: 15.4, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 46.07, magicalProtection: 41.72, damageMitigation: 0, maxHealth: 1517.57, healthRegen: 3.7, maxMana: 716, manaRegen: 4.94, cooldownRate: 0, movementSpeed: 365, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 67.26, baseAttackSpeed: 0.93, attackSpeedPercent: 16.8, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 48.92, magicalProtection: 43.15, damageMitigation: 0, maxHealth: 1610.19, healthRegen: 3.9, maxMana: 758, manaRegen: 5.2, cooldownRate: 0, movementSpeed: 365, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 69.54, baseAttackSpeed: 0.93, attackSpeedPercent: 18.2, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 51.77, magicalProtection: 44.58, damageMitigation: 0, maxHealth: 1702.81, healthRegen: 4.1, maxMana: 800, manaRegen: 5.46, cooldownRate: 0, movementSpeed: 365, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 71.82, baseAttackSpeed: 0.93, attackSpeedPercent: 19.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 54.62, magicalProtection: 46.01, damageMitigation: 0, maxHealth: 1795.43, healthRegen: 4.3, maxMana: 842, manaRegen: 5.72, cooldownRate: 0, movementSpeed: 365, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 74.1, baseAttackSpeed: 0.93, attackSpeedPercent: 21.0, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 57.47, magicalProtection: 47.44, damageMitigation: 0, maxHealth: 1888.05, healthRegen: 4.5, maxMana: 884, manaRegen: 5.98, cooldownRate: 0, movementSpeed: 365, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 76.38, baseAttackSpeed: 0.93, attackSpeedPercent: 22.4, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 60.32, magicalProtection: 48.87, damageMitigation: 0, maxHealth: 1980.67, healthRegen: 4.7, maxMana: 926, manaRegen: 6.24, cooldownRate: 0, movementSpeed: 365, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 78.66, baseAttackSpeed: 0.93, attackSpeedPercent: 23.8, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 63.17, magicalProtection: 50.3, damageMitigation: 0, maxHealth: 2073.29, healthRegen: 4.9, maxMana: 968, manaRegen: 6.5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 80.94, baseAttackSpeed: 0.93, attackSpeedPercent: 25.2, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 66.02, magicalProtection: 51.73, damageMitigation: 0, maxHealth: 2165.91, healthRegen: 5.1, maxMana: 1010, manaRegen: 6.76, cooldownRate: 0, movementSpeed: 365, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 83.22, baseAttackSpeed: 0.93, attackSpeedPercent: 26.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 68.87, magicalProtection: 53.16, damageMitigation: 0, maxHealth: 2258.53, healthRegen: 5.3, maxMana: 1052, manaRegen: 7.02, cooldownRate: 0, movementSpeed: 365, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 85.5, baseAttackSpeed: 0.93, attackSpeedPercent: 28.0, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 71.72, magicalProtection: 54.5, damageMitigation: 0, maxHealth: 2351.25, healthRegen: 5.5, maxMana: 1094, manaRegen: 7.28, cooldownRate: 0, movementSpeed: 365, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'Aphrodite Basic Attack',
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
    name: 'Center of Attention',
    image: '',
    description: 'Gain Physical Protection and Magical Protection for each friendly or enemy god nearby.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Physical Protection', value: '3 Per Stack' },
      { label: 'Magical Protection', value: '3 Per Stack' }
    ]
  },
  abilities: {
    1: {
      name: 'Kiss',
      image: '',
      description: 'Fire a kiss projectile at an allied god to link a Soul Mate, giving you both increased movement speed, and reduce Kiss\'s cooldown. If the kiss hits an enemy god, they take Magical Damage, are Stunned and your Soul Mate becomes Jealous, increasing their damage dealt.\n\n• The Soul Mate gains 50% of your Mana Regen and 11% of your Protections.\n• If you have been linked to a Soul Mate for 5s or more, switching to a new Soul Mate will cause both gods to become jealous.\n• Enemy gods in the path of a kiss that will create a Soul Mate will also take damage and be Stunned. The Kiss will lock on to an ally god if they were in the area at the time of fire and not already linked.',
      cooldown: '14 | 13.5 | 13 | 12.5 | 12s',
      cost: '50 | 55 | 60 | 65 | 70',
      attributes: [
        { label: 'Damage', value: '40 | 60 | 80 | 100 | 120' },
        { label: 'Damage Scaling', value: '25% Intelligence' },
        { label: 'Stun Duration', value: '0.8s' },
        { label: 'Jealousy Damage Increase', value: '6 | 7 | 8 | 9 | 10%' },
        { label: 'Jealousy Buff Duration', value: '5s' },
        { label: 'Movement Speed', value: '6 | 6.5 | 7 | 7.5 | 8%' },
        { label: 'Range', value: '8.8m' },
        { label: 'Radius', value: '0.8m' }
      ]
    },
    2: {
      name: 'Back Off!',
      image: '',
      description: 'Deal Magical Damage, Slow, and Push away enemies around you.\n\n• If you have a Soul Mate, deal Magical Damage, and Slow enemies hit. If an enemy is hit by both areas, they take reduced damage from the 2nd area.',
      cooldown: '14 | 13.5 | 13 | 12.5 | 12s',
      cost: '70 | 75 | 80 | 85 | 90',
      attributes: [
        { label: 'Damage', value: '80 | 140 | 200 | 260 | 320' },
        { label: 'Damage Scaling', value: '90% Intelligence' },
        { label: 'Soul Mate Damage', value: '80 | 140 | 200 | 260 | 320' },
        { label: 'Soul Mate Scaling', value: '60% Intelligence' },
        { label: 'Bonus Damage (Both Hit)', value: '40 | 60 | 80 | 100 | 120' },
        { label: 'Bonus Damage Scaling', value: '20% Intelligence' },
        { label: 'Slow', value: '20%' },
        { label: 'Slow Duration', value: '2s' }
      ]
    },
    3: {
      name: 'Love Birds',
      image: '',
      description: 'Fire a doves projectile that deals Magical Damage repeatedly over time to enemies hit.\n\n• On fire, Aphrodite and her Soul Mate start Healing repeatedly over time, and have their active cooldowns decreased per tick.',
      cooldown: '16s',
      cost: '70 | 75 | 80 | 85 | 90',
      attributes: [
        { label: 'Damage Per Tick', value: '15 | 25 | 35 | 45 | 55' },
        { label: 'Damage Scaling Per Tick', value: '17.5% Intelligence' },
        { label: 'Heal Per Tick', value: '10 | 13 | 16 | 19 | 22' },
        { label: 'Self Heal Scaling Per Tick', value: '3.5% Intelligence' },
        { label: 'Ally Heal Scaling Per Tick', value: '2.5% Intelligence' }
      ]
    },
    4: {
      name: 'Undying Love',
      image: '',
      description: 'You and your Soul Mate become Damage Immune, CC Immune, and gain the Jealousy effect for a short duration.\n\n• Reactivate to Leap to your Soul Mate\'s location.\n• Activating this ability instantly refreshes the cooldown on Love Birds.',
      cooldown: '100 | 97.5 | 95 | 92.5 | 90s',
      cost: '50 | 55 | 60 | 65 | 70',
      attributes: [
        { label: 'Buff Duration', value: '0.8 | 1.1 | 1.4 | 1.7 | 2s' }
      ]
    }
  },
  aspects: [],
  recommendedBuilds: []
};