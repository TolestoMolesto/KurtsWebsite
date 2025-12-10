import { God, DamageType } from '../../types';

export const GEB: God = {
  id: 'geb',
  name: 'Geb',
  title: 'God of Earth',
  pantheon: 'Egyptian',
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
    { strength: 0, intelligence: 0, inhandPower: 42.18, baseAttackSpeed: 0.93, attackSpeedPercent: 1.33, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 20.52, magicalProtection: 29.7, damageMitigation: 0, maxHealth: 672.3, healthRegen: 1.836, maxMana: 296, manaRegen: 2.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 0 },
    // Level 2
    { strength: 0, intelligence: 0, inhandPower: 44.46, baseAttackSpeed: 0.93, attackSpeedPercent: 2.66, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 23.76, magicalProtection: 30.51, damageMitigation: 0, maxHealth: 777.6, healthRegen: 2.052, maxMana: 338, manaRegen: 2.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 308 },
    // Level 3
    { strength: 0, intelligence: 0, inhandPower: 46.74, baseAttackSpeed: 0.93, attackSpeedPercent: 3.99, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 27, magicalProtection: 32.94, damageMitigation: 0, maxHealth: 882.9, healthRegen: 2.268, maxMana: 380, manaRegen: 2.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 49.02, baseAttackSpeed: 0.93, attackSpeedPercent: 5.32, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 30.24, magicalProtection: 34.56, damageMitigation: 0, maxHealth: 988.2, healthRegen: 2.484, maxMana: 422, manaRegen: 3, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 51.3, baseAttackSpeed: 0.93, attackSpeedPercent: 6.65, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 33.48, magicalProtection: 36.18, damageMitigation: 0, maxHealth: 1093.5, healthRegen: 2.7, maxMana: 464, manaRegen: 3.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 53.58, baseAttackSpeed: 0.93, attackSpeedPercent: 7.98, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 36.72, magicalProtection: 37.8, damageMitigation: 0, maxHealth: 1198.8, healthRegen: 2.916, maxMana: 506, manaRegen: 3.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 55.86, baseAttackSpeed: 0.93, attackSpeedPercent: 9.31, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 39.96, magicalProtection: 39.42, damageMitigation: 0, maxHealth: 1304.1, healthRegen: 3.132, maxMana: 548, manaRegen: 3.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 58.14, baseAttackSpeed: 0.93, attackSpeedPercent: 10.64, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 43.2, magicalProtection: 41.04, damageMitigation: 0, maxHealth: 1409.4, healthRegen: 3.348, maxMana: 590, manaRegen: 4, cooldownRate: 0, movementSpeed: 375, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 60.42, baseAttackSpeed: 0.93, attackSpeedPercent: 11.97, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 46.44, magicalProtection: 42.66, damageMitigation: 0, maxHealth: 1514.7, healthRegen: 3.564, maxMana: 632, manaRegen: 4.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 62.7, baseAttackSpeed: 0.93, attackSpeedPercent: 13.3, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 49.68, magicalProtection: 44.28, damageMitigation: 0, maxHealth: 1620, healthRegen: 3.78, maxMana: 674, manaRegen: 4.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 64.98, baseAttackSpeed: 0.93, attackSpeedPercent: 14.63, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 52.92, magicalProtection: 45.9, damageMitigation: 0, maxHealth: 1725.3, healthRegen: 3.996, maxMana: 716, manaRegen: 4.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 67.26, baseAttackSpeed: 0.93, attackSpeedPercent: 15.96, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 56.16, magicalProtection: 47.52, damageMitigation: 0, maxHealth: 1830.6, healthRegen: 4.212, maxMana: 758, manaRegen: 5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 69.54, baseAttackSpeed: 0.93, attackSpeedPercent: 17.29, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 59.4, magicalProtection: 49.14, damageMitigation: 0, maxHealth: 1935.9, healthRegen: 4.428, maxMana: 800, manaRegen: 5.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 71.82, baseAttackSpeed: 0.93, attackSpeedPercent: 18.62, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 62.64, magicalProtection: 50.76, damageMitigation: 0, maxHealth: 2041.2, healthRegen: 4.644, maxMana: 842, manaRegen: 5.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 74.1, baseAttackSpeed: 0.93, attackSpeedPercent: 19.95, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 65.88, magicalProtection: 52.38, damageMitigation: 0, maxHealth: 2146.5, healthRegen: 4.86, maxMana: 884, manaRegen: 5.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 76.38, baseAttackSpeed: 0.93, attackSpeedPercent: 21.28, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 69.12, magicalProtection: 54, damageMitigation: 0, maxHealth: 2251.8, healthRegen: 5.076, maxMana: 926, manaRegen: 6, cooldownRate: 0, movementSpeed: 375, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 78.66, baseAttackSpeed: 0.93, attackSpeedPercent: 22.61, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 72.36, magicalProtection: 55.62, damageMitigation: 0, maxHealth: 2357.1, healthRegen: 5.292, maxMana: 968, manaRegen: 6.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 80.94, baseAttackSpeed: 0.93, attackSpeedPercent: 23.94, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 75.6, magicalProtection: 57.24, damageMitigation: 0, maxHealth: 2462.4, healthRegen: 5.508, maxMana: 1010, manaRegen: 6.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 83.22, baseAttackSpeed: 0.93, attackSpeedPercent: 25.27, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 78.84, magicalProtection: 58.86, damageMitigation: 0, maxHealth: 2567.7, healthRegen: 5.724, maxMana: 1052, manaRegen: 6.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 85.5, baseAttackSpeed: 0.93, attackSpeedPercent: 26.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 82.08, magicalProtection: 60.48, damageMitigation: 0, maxHealth: 2673, healthRegen: 5.94, maxMana: 1094, manaRegen: 7, cooldownRate: 0, movementSpeed: 375, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'Geb Basic Attack',
    image: '',
    description: 'Deal Magical Damage to an enemy in front of you.\n\nIf multiple enemies are in the area, the enemy closest to the center of the area will be hit.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
      { label: 'Range', value: '1.92m' },
      { label: 'Cone Angle', value: '120 degrees' }
    ]
  },
  passive: {
    name: 'Hard as Rock',
    image: '',
    description: 'Geb cannot take more than 20% of his max HP from a single attack. Enemy god basic attack damage taken is decreased by 5% and Critical Strike bonus damage taken is decreased by 65%.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Max Damage Per Hit', value: '20% Max Health' },
      { label: 'Basic Attack Reduction', value: '5%' },
      { label: 'Critical Strike Reduction', value: '65%' }
    ]
  },
  abilities: {
    1: {
      name: 'Roll Out',
      image: '',
      description: 'Charge forward, stopping on the first enemy god hit.\n\n• Enemies hit take Magical Damage and are Slowed\n• Your speed increases over 3s before becoming CC Immune and causing enemy gods hit to be Knocked Back\n• After 3s this ability can be refired to Leap forward, dealing Magical Damage and Knocking Up enemies hit\n\nAs your speed increases, the damage of this ability also increases from 75% to 100%. Total Charge duration lasts 6s.',
      cooldown: '14 | 13 | 12 | 11 | 10s',
      cost: '50 | 55 | 60 | 65 | 70',
      attributes: [
        { label: 'Damage', value: '100 | 175 | 250 | 325 | 400' },
        { label: 'Damage Scaling', value: '50% Intelligence' },
        { label: 'Leap Damage Scaling', value: '50% Intelligence' },
        { label: 'Slow', value: '30%' },
        { label: 'Slow Duration', value: '2s' },
        { label: 'Charge Duration', value: '6s' },
        { label: 'CC Immunity Time', value: 'After 3s' },
        { label: 'Leap Radius', value: '2.4m' }
      ]
    },
    2: {
      name: 'Shock Wave',
      image: '',
      description: 'Create a shock wave in a cone, dealing Magical Damage and Knocking Up enemies hit.\n\nDamage decreases with distance, down to 80% at max range.',
      cooldown: '14s',
      cost: '60 | 65 | 70 | 75 | 80',
      attributes: [
        { label: 'Damage', value: '100 | 165 | 230 | 295 | 360' },
        { label: 'Damage Scaling', value: '50% Intelligence' },
        { label: 'Cone Angle', value: '90 degrees' },
        { label: 'Cone Range', value: '8.8m' }
      ]
    },
    3: {
      name: 'Stone Shield',
      image: '',
      description: 'Provide yourself or an allied god a Health Shield.\n\n• Allies also gain the Hard as Rock buff benefits while the Shield is active\n\nThe Shield also cleanses any CC effects when applied.',
      cooldown: '15s',
      cost: '60',
      attributes: [
        { label: 'Shield Health', value: '50 | 95 | 140 | 185 | 230' },
        { label: 'Shield Health Scaling', value: '15 Per Level' },
        { label: 'Shield Duration', value: '3 | 3.5 | 4 | 4.5 | 5s' },
        { label: 'Range', value: '8.8m' },
        { label: 'Radius', value: '2.4m' }
      ]
    },
    4: {
      name: 'Cataclysm',
      image: '',
      description: 'Pull apart the earth, dealing Magical Damage and Stunning enemy gods hit.\n\n• Targets take additional damage based on their current Health\n\nYou are CC Immune while using this ability.',
      cooldown: '90s',
      cost: '50 | 55 | 60 | 65 | 70',
      attributes: [
        { label: 'Damage', value: '160 | 260 | 360 | 460 | 560' },
        { label: 'Bonus Damage', value: '15% of enemy\'s Current Health' },
        { label: 'Stun Duration', value: '1.4 | 1.5 | 1.6 | 1.7 | 1.8s' },
        { label: 'Radius', value: '4.8m' }
      ]
    }
  },
  aspects: [
    {
      id: 'calamity',
      name: 'Aspect of Calamity',
      image: '',
      description: 'Shock Wave no longer knocks up enemies but deals full damage in a circle around you. Additionally, the cooldown is decreased for every enemy it hits.',
      basicAttack: {
        name: 'Geb Basic Attack',
        image: '',
        description: 'Deal Magical Damage to an enemy in front of you.\n\nIf multiple enemies are in the area, the enemy closest to the center of the area will be hit.',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
          { label: 'Range', value: '1.92m' },
          { label: 'Cone Angle', value: '120 degrees' }
        ]
      },
      passive: {
        name: 'Hard as Rock',
        image: '',
        description: 'Geb cannot take more than 20% of his max HP from a single attack. Enemy god basic attack damage taken is decreased by 5% and Critical Strike bonus damage taken is decreased by 65%.',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Max Damage Per Hit', value: '20% Max Health' },
          { label: 'Basic Attack Reduction', value: '5%' },
          { label: 'Critical Strike Reduction', value: '65%' }
        ]
      },
      abilities: {
        1: {
          name: 'Roll Out',
          image: '',
          description: 'Charge forward, stopping on the first enemy god hit.\n\n• Enemies hit take Magical Damage and are Slowed\n• Your speed increases over 3s before becoming CC Immune and causing enemy gods hit to be Knocked Back\n• After 3s this ability can be refired to Leap forward, dealing Magical Damage and Knocking Up enemies hit\n\nAs your speed increases, the damage of this ability also increases from 75% to 100%. Total Charge duration lasts 6s.',
          cooldown: '14 | 13 | 12 | 11 | 10s',
          cost: '50 | 55 | 60 | 65 | 70',
          attributes: [
            { label: 'Damage', value: '100 | 175 | 250 | 325 | 400' },
            { label: 'Damage Scaling', value: '50% Intelligence' },
            { label: 'Leap Damage Scaling', value: '75% Intelligence' },
            { label: 'Slow', value: '30%' },
            { label: 'Slow Duration', value: '2s' },
            { label: 'Charge Duration', value: '6s' },
            { label: 'CC Immunity Time', value: 'After 3s' },
            { label: 'Leap Radius', value: '2.4m' }
          ]
        },
        2: {
          name: 'Shock Wave',
          image: '',
          description: 'Create a shock wave around you, dealing Magical Damage.\n\n• The cooldown of this ability is reduced by 0.5s for every enemy it hits.\n• NO LONGER KNOCKS UP ENEMIES\n• DEALS FULL DAMAGE IN A CIRCLE AROUND YOU',
          cooldown: '14s',
          cost: '60 | 65 | 70 | 75 | 80',
          attributes: [
            { label: 'Damage', value: '100 | 165 | 230 | 295 | 360' },
            { label: 'Damage Scaling', value: '50% Intelligence' },
            { label: 'Radius', value: '8.8m' },
            { label: 'Cooldown Reduction Per Hit', value: '0.5s' }
          ]
        },
        3: {
          name: 'Stone Shield',
          image: '',
          description: 'Provide yourself or an allied god a Health Shield.\n\n• Allies also gain the Hard as Rock buff benefits while the Shield is active\n\nThe Shield also cleanses any CC effects when applied.',
          cooldown: '15s',
          cost: '60',
          attributes: [
            { label: 'Shield Health', value: '50 | 95 | 140 | 185 | 230' },
            { label: 'Shield Health Scaling', value: '15 Per Level' },
            { label: 'Shield Duration', value: '3 | 3.5 | 4 | 4.5 | 5s' },
            { label: 'Range', value: '8.8m' },
            { label: 'Radius', value: '2.4m' }
          ]
        },
        4: {
          name: 'Cataclysm',
          image: '',
          description: 'Pull apart the earth, dealing Magical Damage and Stunning enemy gods hit.\n\n• Targets take additional damage based on their current Health\n\nYou are CC Immune while using this ability.',
          cooldown: '90s',
          cost: '50 | 55 | 60 | 65 | 70',
          attributes: [
            { label: 'Damage', value: '160 | 260 | 360 | 460 | 560' },
            { label: 'Bonus Damage', value: '15% of enemy\'s Current Health' },
            { label: 'Stun Duration', value: '1.4 | 1.5 | 1.6 | 1.7 | 1.8s' },
            { label: 'Radius', value: '4.8m' }
          ]
        }
      }
    }
  ],
  recommendedBuilds: []
};