import { God, DamageType } from '../../types';

export const MULAN: God = {
  id: 'mulan',
  name: 'Hua Mulan',
  title: 'The Ascendant Warrior',
  pantheon: 'Chinese',
  role: 'Warrior',
  lanes: ['Solo', 'Jungle'],
  damageType: DamageType.Physical,
  image: '',
  videoGuideUrl: '',
  goodAgainst: [],
  badAgainst: [],
  levelingOrder: [],
  statsByLevel: [
    // Level 1
    { strength: 0, intelligence: 0, inhandPower: 44, baseAttackSpeed: 0.97, attackSpeedPercent: 1.456, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 20.4, magicalProtection: 28.6, damageMitigation: 0, maxHealth: 647.4, healthRegen: 1.77, maxMana: 296, manaRegen: 2.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 0 },
    // Level 2
    { strength: 0, intelligence: 0, inhandPower: 47, baseAttackSpeed: 0.97, attackSpeedPercent: 2.912, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 23.5, magicalProtection: 30.2, damageMitigation: 0, maxHealth: 748.8, healthRegen: 1.98, maxMana: 338, manaRegen: 2.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 308 },
    // Level 3
    { strength: 0, intelligence: 0, inhandPower: 49, baseAttackSpeed: 0.97, attackSpeedPercent: 4.368, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 26.6, magicalProtection: 31.7, damageMitigation: 0, maxHealth: 850.2, healthRegen: 2.18, maxMana: 380, manaRegen: 2.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 52, baseAttackSpeed: 0.97, attackSpeedPercent: 5.824, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 29.8, magicalProtection: 33.3, damageMitigation: 0, maxHealth: 951.6, healthRegen: 2.39, maxMana: 422, manaRegen: 3, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 54, baseAttackSpeed: 0.97, attackSpeedPercent: 7.28, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 32.9, magicalProtection: 34.8, damageMitigation: 0, maxHealth: 1053, healthRegen: 2.6, maxMana: 464, manaRegen: 3.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 56, baseAttackSpeed: 0.97, attackSpeedPercent: 8.736, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 36, magicalProtection: 36.4, damageMitigation: 0, maxHealth: 1154.4, healthRegen: 2.81, maxMana: 506, manaRegen: 3.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 59, baseAttackSpeed: 0.97, attackSpeedPercent: 10.192, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 39.1, magicalProtection: 38, damageMitigation: 0, maxHealth: 1255.8, healthRegen: 3.02, maxMana: 548, manaRegen: 3.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 61, baseAttackSpeed: 0.97, attackSpeedPercent: 11.648, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 42.2, magicalProtection: 39.5, damageMitigation: 0, maxHealth: 1357.2, healthRegen: 3.22, maxMana: 590, manaRegen: 4, cooldownRate: 0, movementSpeed: 375, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 64, baseAttackSpeed: 0.97, attackSpeedPercent: 13.104, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 45.4, magicalProtection: 41.1, damageMitigation: 0, maxHealth: 1458.6, healthRegen: 3.43, maxMana: 632, manaRegen: 4.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 66, baseAttackSpeed: 0.97, attackSpeedPercent: 14.56, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 48.5, magicalProtection: 42.6, damageMitigation: 0, maxHealth: 1560, healthRegen: 3.64, maxMana: 674, manaRegen: 4.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 68, baseAttackSpeed: 0.97, attackSpeedPercent: 16.016, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 51.6, magicalProtection: 44.2, damageMitigation: 0, maxHealth: 1661.4, healthRegen: 3.85, maxMana: 716, manaRegen: 4.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 71, baseAttackSpeed: 0.97, attackSpeedPercent: 17.472, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 54.7, magicalProtection: 45.8, damageMitigation: 0, maxHealth: 1762.8, healthRegen: 4.06, maxMana: 758, manaRegen: 5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 73, baseAttackSpeed: 0.97, attackSpeedPercent: 18.928, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 57.8, magicalProtection: 47.3, damageMitigation: 0, maxHealth: 1864.2, healthRegen: 4.26, maxMana: 800, manaRegen: 5.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 76, baseAttackSpeed: 0.97, attackSpeedPercent: 20.384, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 61, magicalProtection: 48.9, damageMitigation: 0, maxHealth: 1965.6, healthRegen: 4.47, maxMana: 842, manaRegen: 5.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 78, baseAttackSpeed: 0.97, attackSpeedPercent: 21.84, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 64.1, magicalProtection: 50.4, damageMitigation: 0, maxHealth: 2067, healthRegen: 4.68, maxMana: 884, manaRegen: 5.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 80, baseAttackSpeed: 0.97, attackSpeedPercent: 23.296, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 67.2, magicalProtection: 52, damageMitigation: 0, maxHealth: 2168.4, healthRegen: 4.89, maxMana: 926, manaRegen: 6, cooldownRate: 0, movementSpeed: 375, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 83, baseAttackSpeed: 0.97, attackSpeedPercent: 24.752, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 70.3, magicalProtection: 53.6, damageMitigation: 0, maxHealth: 2269.8, healthRegen: 5.1, maxMana: 968, manaRegen: 6.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 85, baseAttackSpeed: 0.97, attackSpeedPercent: 26.208, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 73.4, magicalProtection: 55.1, damageMitigation: 0, maxHealth: 2371.2, healthRegen: 5.3, maxMana: 1010, manaRegen: 6.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 88, baseAttackSpeed: 0.97, attackSpeedPercent: 27.664, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 76.6, magicalProtection: 56.7, damageMitigation: 0, maxHealth: 2472.6, healthRegen: 5.51, maxMana: 1052, manaRegen: 6.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 90, baseAttackSpeed: 0.97, attackSpeedPercent: 29.12, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 79.7, magicalProtection: 58.2, damageMitigation: 0, maxHealth: 2574, healthRegen: 5.72, maxMana: 1094, manaRegen: 7, cooldownRate: 0, movementSpeed: 375, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'Hua Mulan Basic Attack',
    image: '',
    description: 'Deal Physical Damage to an enemy in front of you.\n\nIf multiple enemies are in the area, the enemy closest to the center of the area will be hit.\n\nHas a 3 hit chain. Attacks in order of 1, 1, 1.25x damage and swing time. Final swing hits all enemies within its range.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage', value: '41 + 3 Per Level' },
      { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
      { label: 'Range', value: '1.92m' },
      { label: 'Cone Angle', value: '120 degrees' }
    ]
  },
  passive: {
    name: 'Training Arc',
    image: '',
    description: 'Utilize your Sword, Spear, and Bow with your abilities to gain Skill towards them by damaging enemies. Your expertise in each weapon enhances their respective abilities.\n\nAdditionally, gain two unique benefits:\n  • Training Arc reduces the cooldown of your next non-ultimate ability.\n  • Training Grounds, a consumable which provides team-wide speed & grants Training Arc.\n\nDamage to non-god targets contributes 70% less skill progression.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Sword Skill Thresholds', value: '500 | 1500 | 6500 damage' },
      { label: 'Spear Skill Thresholds', value: '500 | 1500 | 6500 damage' },
      { label: 'Bow Skill Thresholds', value: '200 | 500 | 2000 damage' },
      { label: 'Cooldown Reduction', value: '2s' },
      { label: 'Training Grounds Movement Speed', value: 'Up to 20%' },
      { label: 'Training Arc Cooldown', value: '10s' },
      { label: 'Training Grounds Cooldown', value: '90s' }
    ]
  },
  abilities: {
    1: {
      name: 'Cross Strike',
      image: '',
      description: 'Strike twice with your sword, dealing Physical Damage to all enemies hit.\n\n  • Skilled: Gain an Attack Speed increase after using this ability.\n  • Adept: Perform a third strike in an extended cone in front of you, dealing Physical Damage.\n  • Mastered: Permanently gain Attack Speed.',
      cooldown: '14 | 13.5 | 13 | 12.5 | 12s',
      cost: '60 | 65 | 70 | 75 | 80',
      attributes: [
        { label: 'Damage', value: '85 | 105 | 125 | 145 | 165' },
        { label: 'Damage Scaling', value: '30% Strength' },
        { label: 'Adept Strike Damage', value: '85 | 105 | 125 | 145 | 165' },
        { label: 'Adept Strike Damage Scaling', value: '30% Strength' },
        { label: 'Attack Speed (Skilled)', value: '25%' },
        { label: 'Buff Duration', value: '6s' },
        { label: 'Mastered Attack Speed', value: '10%' },
        { label: 'Radius', value: '4m' },
        { label: 'Adept Strike Radius', value: '4.8m' },
        { label: 'Cone Angle', value: '100 degrees' }
      ]
    },
    2: {
      name: 'Spear Thrust',
      image: '',
      description: 'Thrust your spear forward, striking enemies in front of you, Slowing them and dealing Physical Damage.\n\n  • Skilled: Heal for up to 3 enemies hit.\n  • Adept: Strike a second time with increased range, dealing bonus Physical Damage if the same enemy is hit twice.\n  • Mastered: Permanently gain Strength.',
      cooldown: '14s',
      cost: '50 | 55 | 60 | 65 | 70',
      attributes: [
        { label: 'Damage', value: '100 | 135 | 170 | 205 | 240' },
        { label: 'Damage Scaling', value: '35% Strength' },
        { label: 'Adept Strike Damage', value: '20 | 30 | 40 | 50 | 60' },
        { label: 'Adept Strike Damage Scaling', value: '10% Strength' },
        { label: 'Slow', value: '25%' },
        { label: 'Slow Duration', value: '3s' },
        { label: 'Heal (Skilled)', value: '17 | 24 | 31 | 38 | 45' },
        { label: 'Mastered Strength', value: '5' },
        { label: 'Range', value: '4m' },
        { label: 'Adept Strike Range', value: '5.6m' },
        { label: 'Radius', value: '0.8m' }
      ]
    },
    3: {
      name: 'Grapple',
      image: '',
      description: 'Fire an arrow with a rope attached. If it hits an enemy god, Stun them, deal Physical Damage, and pull them toward you while dashing at them and following up with a slash for Physical Damage.\n\n  • Skilled: Gain a Protections buff after hitting an enemy god.\n  • Adept: Dash can now target walls.\n  • Mastered: Permanently gain Movement Speed and Protections.\n\nStun is unaffected by diminishing returns. You are immune to crowd control while pulling a God.',
      cooldown: '16 | 15.5 | 15 | 14.5 | 14s',
      cost: '60',
      attributes: [
        { label: 'Damage', value: '90 | 135 | 180 | 225 | 270' },
        { label: 'Damage Scaling', value: '50% Strength' },
        { label: 'Slash Damage', value: '50 | 50 | 60 | 70 | 80' },
        { label: 'Slash Damage Scaling', value: '20% Strength' },
        { label: 'Stun Duration', value: '1s' },
        { label: 'Protections (Skilled)', value: '25 | 30 | 35 | 40 | 45' },
        { label: 'Buff Duration', value: '6s' },
        { label: 'Mastered Movement Speed', value: '5%' },
        { label: 'Mastered Protections', value: '5' },
        { label: 'Range', value: '9.6m' },
        { label: 'Radius', value: '0.8m' }
      ]
    },
    4: {
      name: 'Divine Mastery',
      image: '',
      description: 'Unleash your entire arsenal, dashing forward with sword slashes that deal Physical Damage and Root enemies.\n\n  • Follow up by using divine energy to Knock Up enemies with your spear, dealing Physical Damage.\n  • Finish with a powerful projectile attack from your bow, dealing Physical Damage.\n\nMastered Sword: Turn up to 90° during the forward dash.\nMastered Spear: Knocking up enemies adds 3 seconds to their active cooldowns.\nMastered Bow: Arrow travels 40% faster.\n\nDealing damage with any part of this ability grants Skill towards the corresponding weapon. Gain Protections for the duration of this ability. This ability can be cancelled early.',
      cooldown: '90s',
      cost: '60 | 65 | 70 | 75 | 80',
      attributes: [
        { label: 'Sword Damage', value: '80 | 130 | 180 | 230 | 280' },
        { label: 'Sword Damage Scaling', value: '60% Strength' },
        { label: 'Root Duration', value: '1s' },
        { label: 'Spear Damage', value: '100 | 140 | 180 | 220 | 260' },
        { label: 'Spear Damage Scaling', value: '40% Strength' },
        { label: 'Cooldown Increase (Mastered Spear)', value: '3s' },
        { label: 'Arrow Damage', value: '180 | 260 | 340 | 420 | 500' },
        { label: 'Arrow Damage Scaling', value: '60% Strength' },
        { label: 'Protections', value: '30' },
        { label: 'Dash Range', value: '10.4m' },
        { label: 'Arrow Range', value: '13.6m' },
        { label: 'Sword Radius', value: '2.4m' },
        { label: 'Spear Radius', value: '1.6m' },
        { label: 'Arrow Radius', value: '0.88m' }
      ]
    }
  },
  aspects: [],
  recommendedBuilds: []
};