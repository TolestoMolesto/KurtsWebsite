import { God, DamageType } from '../../types';

export const PRINCESS_BARI: God = {
  id: 'princess-bari',
  name: 'Princess Bari',
  title: 'The Abandoned Princess',
  pantheon: 'Korean',
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
    { strength: 0, intelligence: 0, inhandPower: 48, baseAttackSpeed: 1.0, attackSpeedPercent: 1.456, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 18.1, magicalProtection: 26.1, damageMitigation: 0, maxHealth: 591.4, healthRegen: 1.7, maxMana: 0, manaRegen: 0, cooldownRate: 0, movementSpeed: 375, xpRequirement: 0 },
    // Level 2
    { strength: 0, intelligence: 0, inhandPower: 51, baseAttackSpeed: 1.0, attackSpeedPercent: 2.912, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 20.9, magicalProtection: 27.6, damageMitigation: 0, maxHealth: 684, healthRegen: 1.9, maxMana: 0, manaRegen: 0, cooldownRate: 0, movementSpeed: 375, xpRequirement: 308 },
    // Level 3
    { strength: 0, intelligence: 0, inhandPower: 53, baseAttackSpeed: 1.0, attackSpeedPercent: 4.368, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 23.8, magicalProtection: 29.0, damageMitigation: 0, maxHealth: 776.6, healthRegen: 2.1, maxMana: 0, manaRegen: 0, cooldownRate: 0, movementSpeed: 375, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 56, baseAttackSpeed: 1.0, attackSpeedPercent: 5.824, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 26.6, magicalProtection: 30.4, damageMitigation: 0, maxHealth: 869.3, healthRegen: 2.3, maxMana: 0, manaRegen: 0, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 58, baseAttackSpeed: 1.0, attackSpeedPercent: 7.28, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 29.5, magicalProtection: 31.8, damageMitigation: 0, maxHealth: 961.9, healthRegen: 2.5, maxMana: 0, manaRegen: 0, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 61, baseAttackSpeed: 1.0, attackSpeedPercent: 8.736, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 32.3, magicalProtection: 33.3, damageMitigation: 0, maxHealth: 1054.5, healthRegen: 2.7, maxMana: 0, manaRegen: 0, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 64, baseAttackSpeed: 1.0, attackSpeedPercent: 10.192, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 35.2, magicalProtection: 34.7, damageMitigation: 0, maxHealth: 1147.1, healthRegen: 2.9, maxMana: 0, manaRegen: 0, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 66, baseAttackSpeed: 1.0, attackSpeedPercent: 11.648, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 38.0, magicalProtection: 36.1, damageMitigation: 0, maxHealth: 1239.8, healthRegen: 3.1, maxMana: 0, manaRegen: 0, cooldownRate: 0, movementSpeed: 375, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 69, baseAttackSpeed: 1.0, attackSpeedPercent: 13.104, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 40.9, magicalProtection: 37.5, damageMitigation: 0, maxHealth: 1332.4, healthRegen: 3.3, maxMana: 0, manaRegen: 0, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 71, baseAttackSpeed: 1.0, attackSpeedPercent: 14.56, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 43.7, magicalProtection: 39.0, damageMitigation: 0, maxHealth: 1425, healthRegen: 3.5, maxMana: 0, manaRegen: 0, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 74, baseAttackSpeed: 1.0, attackSpeedPercent: 16.016, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 46.6, magicalProtection: 40.4, damageMitigation: 0, maxHealth: 1517.6, healthRegen: 3.7, maxMana: 0, manaRegen: 0, cooldownRate: 0, movementSpeed: 375, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 76, baseAttackSpeed: 1.0, attackSpeedPercent: 17.472, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 49.4, magicalProtection: 41.8, damageMitigation: 0, maxHealth: 1610.3, healthRegen: 3.9, maxMana: 0, manaRegen: 0, cooldownRate: 0, movementSpeed: 375, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 79, baseAttackSpeed: 1.0, attackSpeedPercent: 18.928, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 52.3, magicalProtection: 43.2, damageMitigation: 0, maxHealth: 1702.9, healthRegen: 4.1, maxMana: 0, manaRegen: 0, cooldownRate: 0, movementSpeed: 375, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 82, baseAttackSpeed: 1.0, attackSpeedPercent: 20.384, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 55.1, magicalProtection: 44.7, damageMitigation: 0, maxHealth: 1795.5, healthRegen: 4.3, maxMana: 0, manaRegen: 0, cooldownRate: 0, movementSpeed: 375, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 84, baseAttackSpeed: 1.0, attackSpeedPercent: 21.84, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 58.0, magicalProtection: 46.1, damageMitigation: 0, maxHealth: 1888.1, healthRegen: 4.5, maxMana: 0, manaRegen: 0, cooldownRate: 0, movementSpeed: 375, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 87, baseAttackSpeed: 1.0, attackSpeedPercent: 23.296, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 60.8, magicalProtection: 47.5, damageMitigation: 0, maxHealth: 1980.8, healthRegen: 4.7, maxMana: 0, manaRegen: 0, cooldownRate: 0, movementSpeed: 375, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 89, baseAttackSpeed: 1.0, attackSpeedPercent: 24.752, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 63.7, magicalProtection: 48.9, damageMitigation: 0, maxHealth: 2073.4, healthRegen: 4.9, maxMana: 0, manaRegen: 0, cooldownRate: 0, movementSpeed: 375, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 92, baseAttackSpeed: 1.0, attackSpeedPercent: 26.208, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 66.5, magicalProtection: 50.4, damageMitigation: 0, maxHealth: 2166, healthRegen: 5.1, maxMana: 0, manaRegen: 0, cooldownRate: 0, movementSpeed: 375, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 95, baseAttackSpeed: 1.0, attackSpeedPercent: 27.664, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 69.4, magicalProtection: 51.8, damageMitigation: 0, maxHealth: 2258.6, healthRegen: 5.3, maxMana: 0, manaRegen: 0, cooldownRate: 0, movementSpeed: 375, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 97, baseAttackSpeed: 1.0, attackSpeedPercent: 29.12, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 72.2, magicalProtection: 53.2, damageMitigation: 0, maxHealth: 2351.3, healthRegen: 5.5, maxMana: 0, manaRegen: 0, cooldownRate: 0, movementSpeed: 375, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'Princess Bari Basic Attack',
    image: '',
    description: 'Fire a projectile that deals Magical Damage to the first enemy hit.\n\n• Mystic Surge: Deals 50% Damage to enemies within 2.4m of where the projectile stops\n\nProjectile stops on first target hit, and does not pass through walls.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
      { label: 'Range', value: '8.8m' },
      { label: 'Radius', value: '0.48m' }
    ]
  },
  passive: {
    name: 'Mystic Surge',
    image: '',
    description: 'Accumulate Spirit by dealing damage to enemies. Upon reaching 100 Spirit you enter Mystic Surge for 5s and can use any of your first 3 abilities with no cooldown. Abilities used this way have a bonus effect.\n\n• Gain bonus Strength, Intelligence, and Attack Speed while in your Mystic Surge based on the rank of Spirit\'s Cadence',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Strength', value: '10 | 18 | 26 | 34 | 42 | 60' },
      { label: 'Intelligence', value: '15 | 30 | 45 | 60 | 75 | 105' },
      { label: 'Attack Speed', value: '10 | 14 | 18 | 22 | 26 | 30%' },
      { label: 'Minion Hit', value: '2 Spirit' },
      { label: 'God Hit', value: '5 Spirit' }
    ]
  },
  abilities: {
    1: {
      name: 'Sacred Bell',
      image: '',
      description: 'Lob a bell, dealing Magical Damage to enemies where it lands. Warding Gusts or Reverent Steps push the Bell, dealing Magical Damage and Slowing enemies hit.\n\n• Warding Gusts will pull the Bell towards you if it is within Basic Attack range and has landed before casting Warding Gusts\n• You can only have 3 Bells deployed\n• Mystic Surge: +20% Lob Damage and now applies a Slow. +20% Rolling Damage and now applies a Stun. The Bell itself is 1.67x the size',
      cooldown: '13s',
      cost: '-',
      attributes: [
        { label: 'Lob Damage', value: '70 | 115 | 160 | 205 | 250' },
        { label: 'Lob Scaling', value: '60% Strength + 75% Intelligence' },
        { label: 'Roll Damage', value: '45 | 75 | 105 | 135 | 165' },
        { label: 'Roll Scaling', value: '60% Strength + 75% Intelligence' },
        { label: 'Slow', value: '20%' },
        { label: 'Slow Duration', value: '1.5s' },
        { label: 'Range', value: '8.8m' },
        { label: 'Radius', value: '2.4m' }
      ]
    },
    2: {
      name: 'Warding Gust',
      image: '',
      description: 'Swipe your fan dealing Magical Damage to enemies and Knockback enemies who are close.\n\n• -30% Damage to enemies further away\n• Mystic Surge: +20% Damage and Knockback. Bells pushed are treated as Mystic Surge Bells',
      cooldown: '14s',
      cost: '-',
      attributes: [
        { label: 'Damage', value: '65 | 110 | 155 | 200 | 245' },
        { label: 'Damage Scaling', value: '50% Strength + 80% Intelligence' },
        { label: 'Inner Radius', value: '4.4m' },
        { label: 'Outer Radius', value: '8.8m' },
        { label: 'Cone Angle', value: '70 degrees' }
      ]
    },
    3: {
      name: 'Reverent Steps',
      image: '',
      description: 'Dance for a short burst of speed in any direction, then fire a projectile dealing Magical Damage when it ends.\n\n• You have no strafing or backpedal penalty while firing\n• Hitting a god grants 50 Spirit and reduces this ability\'s Cooldown by 25%\n• Mystic Surge: +20% Damage, dealt instantly in a line. Bells pushed are treated as Mystic Surge Bells',
      cooldown: '17 | 16.5 | 16 | 15.5 | 15s',
      cost: '-',
      attributes: [
        { label: 'Damage', value: '10 | 45 | 80 | 115 | 150' },
        { label: 'Damage Scaling', value: '45% Strength + 70% Intelligence' },
        { label: 'Range', value: '8.8m' },
        { label: 'Radius', value: '0.64m' }
      ]
    },
    4: {
      name: 'Spirit\'s Cadence',
      image: '',
      description: 'Conjure a spiritual dance that pulses three times. The first two pulses deal Magical Damage. The last pulse deals Magical Damage.\n\n• You and allies in the area gain Guarding Spirits for 4s. When taking lethal damage become Immune, Silenced, and Disarmed for 1.5s\n• Casting this ability immediately places you in Mystic Surge for 7s\n• Gods can receive Guarding Spirits only once per Spirit\'s Cadence use',
      cooldown: '110s',
      cost: '-',
      attributes: [
        { label: 'Pulse Damage', value: '50 | 70 | 90 | 110 | 130' },
        { label: 'Pulse Scaling', value: '20% Strength + 25% Intelligence' },
        { label: 'Final Damage', value: '100 | 140 | 180 | 220 | 260' },
        { label: 'Final Scaling', value: '40% Strength + 70% Intelligence' },
        { label: 'Range', value: '8.8m' },
        { label: 'Radius', value: '5.6m' }
      ]
    }
  },
  aspects: [],
  recommendedBuilds: []
};