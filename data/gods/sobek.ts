import { God, DamageType } from '../../types';

export const SOBEK: God = {
  id: 'sobek',
  name: 'Sobek',
  title: 'God of the Nile',
  pantheon: 'Egyptian',
  role: 'Guardian',
  lanes: ['Support'],
  damageType: DamageType.Magical,
  image: 'https://static.smite2.live/smite2/GODS/Sobek/Default/t_GodCard_Sobek.webp',
  videoGuideUrl: '',
  goodAgainst: [],
  badAgainst: [],
  levelingOrder: [],
  statsByLevel: [
    // Level 1
    { strength: 0, intelligence: 0, inhandPower: 42.18, baseAttackSpeed: 0.9672, attackSpeedPercent: 1.33, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 19.76, magicalProtection: 28.6, damageMitigation: 0, maxHealth: 626.4, healthRegen: 1.768, maxMana: 296, manaRegen: 2.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 0 },
    // Level 2
    { strength: 0, intelligence: 0, inhandPower: 44.46, baseAttackSpeed: 0.9672, attackSpeedPercent: 2.66, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 22.88, magicalProtection: 30.16, damageMitigation: 0, maxHealth: 727.8, healthRegen: 1.976, maxMana: 338, manaRegen: 2.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 308 },
    // Level 3
    { strength: 0, intelligence: 0, inhandPower: 46.74, baseAttackSpeed: 0.9672, attackSpeedPercent: 3.99, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 26.0, magicalProtection: 31.72, damageMitigation: 0, maxHealth: 829.2, healthRegen: 2.184, maxMana: 380, manaRegen: 2.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 49.02, baseAttackSpeed: 0.9672, attackSpeedPercent: 5.32, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 29.12, magicalProtection: 33.28, damageMitigation: 0, maxHealth: 930.6, healthRegen: 2.392, maxMana: 422, manaRegen: 3.0, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 51.3, baseAttackSpeed: 0.9672, attackSpeedPercent: 6.65, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 32.24, magicalProtection: 34.84, damageMitigation: 0, maxHealth: 1032.0, healthRegen: 2.6, maxMana: 464, manaRegen: 3.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 53.58, baseAttackSpeed: 0.9672, attackSpeedPercent: 7.98, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 35.36, magicalProtection: 36.4, damageMitigation: 0, maxHealth: 1133.4, healthRegen: 2.808, maxMana: 506, manaRegen: 3.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 55.86, baseAttackSpeed: 0.9672, attackSpeedPercent: 9.31, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 38.48, magicalProtection: 37.96, damageMitigation: 0, maxHealth: 1234.8, healthRegen: 3.016, maxMana: 548, manaRegen: 3.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 58.14, baseAttackSpeed: 0.9672, attackSpeedPercent: 10.64, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 41.6, magicalProtection: 39.52, damageMitigation: 0, maxHealth: 1336.2, healthRegen: 3.224, maxMana: 590, manaRegen: 4.0, cooldownRate: 0, movementSpeed: 375, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 60.42, baseAttackSpeed: 0.9672, attackSpeedPercent: 11.97, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 44.72, magicalProtection: 41.08, damageMitigation: 0, maxHealth: 1437.6, healthRegen: 3.432, maxMana: 632, manaRegen: 4.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 62.7, baseAttackSpeed: 0.9672, attackSpeedPercent: 13.3, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 47.84, magicalProtection: 42.64, damageMitigation: 0, maxHealth: 1539.0, healthRegen: 3.64, maxMana: 674, manaRegen: 4.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 64.98, baseAttackSpeed: 0.9672, attackSpeedPercent: 14.63, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 50.96, magicalProtection: 44.2, damageMitigation: 0, maxHealth: 1640.4, healthRegen: 3.848, maxMana: 716, manaRegen: 4.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 67.26, baseAttackSpeed: 0.9672, attackSpeedPercent: 15.96, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 54.08, magicalProtection: 45.76, damageMitigation: 0, maxHealth: 1741.8, healthRegen: 4.056, maxMana: 758, manaRegen: 5.0, cooldownRate: 0, movementSpeed: 375, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 69.54, baseAttackSpeed: 0.9672, attackSpeedPercent: 17.29, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 57.2, magicalProtection: 47.32, damageMitigation: 0, maxHealth: 1843.2, healthRegen: 4.264, maxMana: 800, manaRegen: 5.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 71.82, baseAttackSpeed: 0.9672, attackSpeedPercent: 18.62, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 60.32, magicalProtection: 48.88, damageMitigation: 0, maxHealth: 1944.6, healthRegen: 4.472, maxMana: 842, manaRegen: 5.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 74.1, baseAttackSpeed: 0.9672, attackSpeedPercent: 19.95, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 63.44, magicalProtection: 50.44, damageMitigation: 0, maxHealth: 2046.0, healthRegen: 4.68, maxMana: 884, manaRegen: 5.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 76.38, baseAttackSpeed: 0.9672, attackSpeedPercent: 21.28, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 66.56, magicalProtection: 52.0, damageMitigation: 0, maxHealth: 2147.4, healthRegen: 4.888, maxMana: 926, manaRegen: 6.0, cooldownRate: 0, movementSpeed: 375, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 78.66, baseAttackSpeed: 0.9672, attackSpeedPercent: 22.61, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 69.68, magicalProtection: 53.56, damageMitigation: 0, maxHealth: 2248.8, healthRegen: 5.096, maxMana: 968, manaRegen: 6.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 80.94, baseAttackSpeed: 0.9672, attackSpeedPercent: 23.94, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 72.8, magicalProtection: 55.12, damageMitigation: 0, maxHealth: 2350.2, healthRegen: 5.304, maxMana: 1010, manaRegen: 6.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 83.22, baseAttackSpeed: 0.9672, attackSpeedPercent: 25.27, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 75.92, magicalProtection: 56.68, damageMitigation: 0, maxHealth: 2451.6, healthRegen: 5.512, maxMana: 1052, manaRegen: 6.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 85.5, baseAttackSpeed: 0.9672, attackSpeedPercent: 26.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 79.04, magicalProtection: 58.24, damageMitigation: 0, maxHealth: 2553.0, healthRegen: 5.72, maxMana: 1094, manaRegen: 7.0, cooldownRate: 0, movementSpeed: 375, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'Sobek Basic Attack',
    image: 'https://static.smite2.live/smite2/GODS/common/Icon_BasicAttack_Magical.webp',
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
    name: 'Blessing of the Nile',
    image: 'https://static.smite2.live/smite2/GODS/Sobek/Abilities/Icons_Sobek_Passive.webp',
    description: 'When Sobek deals damage he gains a stack of Protections.\n\n• This effect stacks 3 times and lasts for 10s\n• An ability can only provide one stack per cast',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Protections', value: '3' },
      { label: 'Protections Per Level', value: '0.5' },
      { label: 'Max Stacks', value: '3' },
      { label: 'Duration', value: '10s' }
    ]
  },
  abilities: {
    1: {
      name: 'Charge Prey',
      image: 'https://static.smite2.live/smite2/GODS/Sobek/Abilities/Icons_Sobek_A01.webp',
      description: 'Dash forward. The first enemy hit takes Magical Damage and stops the dash. Sobek displaces the enemy behind him.\n\n• Damaged enemies are Stunned before being thrown\n• You are Displacement Immune while dashing and CC Immune while throwing\n\nSobek has a 0s Postfire on a missed charge or a 0.3s postfire when he attempts to throw. This 0.3s postfire occurs both after a throw and if the enemy frees themselves with CC Immunity.',
      cooldown: '16s',
      cost: '70 | 75 | 80 | 85 | 90',
      attributes: [
        { label: 'Damage', value: '70 | 110 | 150 | 190 | 230' },
        { label: 'Damage Scaling', value: '50% Intelligence' },
        { label: 'Stun Duration', value: '0.47s' },
        { label: 'Range', value: '8.8m' },
        { label: 'Radius', value: '0.48m' }
      ]
    },
    2: {
      name: 'Tail Whip',
      image: 'https://static.smite2.live/smite2/GODS/Sobek/Abilities/Icons_Sobek_A02.webp',
      description: 'Spin your tail, dealing Magical Damage in an area around Sobek.\n\n• Damaged enemies are also Displaced away from Sobek\n\nThe spin begins to displace 0.4s after being cast, and remains displacing for 0.6s afterwards.',
      cooldown: '13s',
      cost: '60 | 65 | 70 | 75 | 80',
      attributes: [
        { label: 'Damage', value: '80 | 125 | 170 | 215 | 260' },
        { label: 'Damage Scaling', value: '40% Intelligence' },
        { label: 'Radius', value: '3.2m' }
      ]
    },
    3: {
      name: 'Sickening Strike',
      image: 'https://static.smite2.live/smite2/GODS/Sobek/Abilities/Icons_Sobek_A03.webp',
      description: 'Strike in front of you. This strike deals Magical Damage in a cone and applies Disease, reducing healing received for 5s.\n\n• Enemies diseased take Bonus Magical Damage, take Reduced Healing, and can spread the disease for 2.5s\n• Each enemy god hit by the cone reduces this ability\'s cooldown by 1s and Heals you, up to 4\n\nThe disease will spread to enemies within 3.2m of someone currently diseased. The Damage over Time does not trigger item effects.',
      cooldown: '13s',
      cost: '60 | 65 | 70 | 75 | 80',
      attributes: [
        { label: 'Damage', value: '70 | 105 | 140 | 175 | 215' },
        { label: 'Damage Scaling', value: '30% Intelligence' },
        { label: 'Heal', value: '18 | 23 | 28 | 33 | 38' },
        { label: 'God DoT Damage', value: '4 | 4.5 | 5 | 5.5 | 6% HP over 2.5s' },
        { label: 'Minion DoT Damage', value: '30 | 45 | 60 | 75 | 90 over 2.5s' },
        { label: 'Healing Reduction', value: '25%' },
        { label: 'Cone Angle', value: '110 degrees' },
        { label: 'Radius', value: '5.6m' }
      ]
    },
    4: {
      name: 'Lurking in the Waters',
      image: 'https://static.smite2.live/smite2/GODS/Sobek/Abilities/Icons_Sobek_A04.webp',
      description: 'Submerge, Slowing enemies nearby and granting you CC Immunity, Protections, and Mana Regen. After 4 seconds, emerge dealing Magical Damage to enemies in range.\n\n• You may cancel this ability early, dealing less damage\n• Executes enemies below 10-25% HP, scaling with time submerged. Executed or killed enemies Heal you and grants 25 permanent bonus Health\n\nLurking in the Water\'s deals 25% of its potential damage if emerging instantly. Sobek can pass through enemies and spawned walls while submerged.',
      cooldown: '100s',
      cost: '80 | 90 | 100 | 110 | 120',
      attributes: [
        { label: 'Damage', value: '300 | 420 | 540 | 660 | 780' },
        { label: 'Damage Scaling', value: '80% Intelligence' },
        { label: 'Execute Health %', value: '10-25%' },
        { label: 'Mana Per Second', value: '10%' },
        { label: 'Protections', value: '20%' },
        { label: 'Submerge Duration', value: '4s' },
        { label: 'Permanent Health on Kill', value: '25' },
        { label: 'Radius', value: '4.8m' }
      ]
    }
  },
  aspects: [
    {
      id: 'prey',
      name: 'Aspect of Prey',
      image: 'https://static.smite2.live/smite2/ui/talents/t_talent_Scaling.webp',
      description: 'Charge Prey now passes through all targets, knocks them forward, and has bonus scaling. Sickening Strike deals increased damage against Jungle Monsters and the cooldown reduction now triggers off Jungle Monsters.',
      basicAttack: {
        name: 'Sobek Basic Attack',
        image: 'https://static.smite2.live/smite2/GODS/common/Icon_BasicAttack_Magical.webp',
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
        name: 'Blessing of the Nile',
        image: 'https://static.smite2.live/smite2/GODS/Sobek/Abilities/Icons_Sobek_Passive.webp',
        description: 'When Sobek deals damage he gains a stack of Protections.\n\n• This effect stacks 3 times and lasts for 10s\n• An ability can only provide one stack per cast',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Protections', value: '3' },
          { label: 'Protections Per Level', value: '0.5' },
          { label: 'Max Stacks', value: '3' },
          { label: 'Duration', value: '10s' }
        ]
      },
      abilities: {
        1: {
          name: 'Charge Prey',
          image: 'https://static.smite2.live/smite2/GODS/Sobek/Abilities/Icons_Sobek_A01.webp',
          description: 'Dash forward. Enemies hit take Magical Damage. Sobek displaces enemies hit forward.\n\n• You are Displacement Immune while dashing\n• NOW PASSES THROUGH ALL TARGETS\n• KNOCKS ENEMIES FORWARD INSTEAD OF BEHIND\n• HAS BONUS SCALING',
          cooldown: '16s',
          cost: '70 | 75 | 80 | 85 | 90',
          attributes: [
            { label: 'Damage', value: '85 | 125 | 165 | 205 | 245' },
            { label: 'Damage Scaling', value: '85% Intelligence' },
            { label: 'Range', value: '8.8m' },
            { label: 'Radius', value: '0.48m' }
          ]
        },
        2: {
          name: 'Tail Whip',
          image: 'https://static.smite2.live/smite2/GODS/Sobek/Abilities/Icons_Sobek_A02.webp',
          description: 'Spin your tail, dealing Magical Damage in an area around Sobek.\n\n• Damaged enemies are also Displaced away from Sobek\n\nThe spin begins to displace 0.4s after being cast, and remains displacing for 0.6s afterwards.',
          cooldown: '13s',
          cost: '60 | 65 | 70 | 75 | 80',
          attributes: [
            { label: 'Damage', value: '80 | 125 | 170 | 215 | 260' },
            { label: 'Damage Scaling', value: '40% Intelligence' },
            { label: 'Radius', value: '3.2m' }
          ]
        },
        3: {
          name: 'Sickening Strike',
          image: 'https://static.smite2.live/smite2/GODS/Sobek/Abilities/Icons_Sobek_A03.webp',
          description: 'Strike in front of you. This strike deals Magical Damage in a cone and applies Disease, reducing healing received for 5s.\n\n• Enemies diseased take Bonus Magical Damage, take Reduced Healing, and can spread the disease for 2.5s\n• Each enemy god OR JUNGLE MONSTER hit by the cone reduces this ability\'s cooldown by 1s and Heals you, up to 4\n• DEALS INCREASED DAMAGE AGAINST JUNGLE MONSTERS\n\nThe disease will spread to enemies within 3.2m of someone currently diseased. The Damage over Time does not trigger item effects.',
          cooldown: '13s',
          cost: '60 | 65 | 70 | 75 | 80',
          attributes: [
            { label: 'Damage', value: '70 | 105 | 140 | 175 | 215' },
            { label: 'Damage Scaling', value: '30% Intelligence' },
            { label: 'Jungle Monster Damage', value: '100 | 140 | 180 | 220 | 260' },
            { label: 'Jungle Monster Scaling', value: '60% Intelligence' },
            { label: 'Heal', value: '9 | 11 | 14 | 16 | 19' },
            { label: 'God DoT Damage', value: '4 | 4.5 | 5 | 5.5 | 6% HP over 2.5s' },
            { label: 'Minion DoT Damage', value: '30 | 45 | 60 | 75 | 90 over 2.5s' },
            { label: 'Healing Reduction', value: '25%' },
            { label: 'Cone Angle', value: '110 degrees' },
            { label: 'Radius', value: '5.6m' }
          ]
        },
        4: {
          name: 'Lurking in the Waters',
          image: 'https://static.smite2.live/smite2/GODS/Sobek/Abilities/Icons_Sobek_A04.webp',
          description: 'Submerge, Slowing enemies nearby and granting you CC Immunity, Protections, and Mana Regen. After 4 seconds, emerge dealing Magical Damage to enemies in range.\n\n• You may cancel this ability early, dealing less damage\n• Executes enemies below 10-25% HP, scaling with time submerged. Executed or killed enemies Heal you and grants 25 permanent bonus Health\n\nLurking in the Water\'s deals 25% of its potential damage if emerging instantly. Sobek can pass through enemies and spawned walls while submerged.',
          cooldown: '100s',
          cost: '80 | 90 | 100 | 110 | 120',
          attributes: [
            { label: 'Damage', value: '300 | 420 | 540 | 660 | 780' },
            { label: 'Damage Scaling', value: '80% Intelligence' },
            { label: 'Execute Health %', value: '10-25%' },
            { label: 'Mana Per Second', value: '10%' },
            { label: 'Protections', value: '20%' },
            { label: 'Submerge Duration', value: '4s' },
            { label: 'Permanent Health on Kill', value: '25' },
            { label: 'Radius', value: '4.8m' }
          ]
        }
      }
    }
  ],
  recommendedBuilds: []
};