import { God, DamageType } from '../../types';

export const HECATE: God = {
  id: 'hecate',
  name: 'Hecate',
  title: 'Goddess of Sorcery',
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
    { strength: 0, intelligence: 0, inhandPower: 42.18, baseAttackSpeed: 0.93, attackSpeedPercent: 1.4, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 17.48, magicalProtection: 26.08, damageMitigation: 0, maxHealth: 572.7, healthRegen: 1.7, maxMana: 296, manaRegen: 2.34, cooldownRate: 0, movementSpeed: 375, xpRequirement: 0 },
    // Level 2
    { strength: 0, intelligence: 0, inhandPower: 44.46, baseAttackSpeed: 0.93, attackSpeedPercent: 2.8, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 20.24, magicalProtection: 27.46, damageMitigation: 0, maxHealth: 662.4, healthRegen: 1.9, maxMana: 338, manaRegen: 2.6, cooldownRate: 0, movementSpeed: 375, xpRequirement: 308 },
    // Level 3
    { strength: 0, intelligence: 0, inhandPower: 46.74, baseAttackSpeed: 0.93, attackSpeedPercent: 4.2, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 23.0, magicalProtection: 28.84, damageMitigation: 0, maxHealth: 752.1, healthRegen: 2.1, maxMana: 380, manaRegen: 2.86, cooldownRate: 0, movementSpeed: 375, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 49.02, baseAttackSpeed: 0.93, attackSpeedPercent: 5.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 25.76, magicalProtection: 30.22, damageMitigation: 0, maxHealth: 841.8, healthRegen: 2.3, maxMana: 422, manaRegen: 3.12, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 51.3, baseAttackSpeed: 0.93, attackSpeedPercent: 7.0, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 28.52, magicalProtection: 31.6, damageMitigation: 0, maxHealth: 931.5, healthRegen: 2.5, maxMana: 464, manaRegen: 3.38, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 53.58, baseAttackSpeed: 0.93, attackSpeedPercent: 8.4, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 31.28, magicalProtection: 32.98, damageMitigation: 0, maxHealth: 1021.2, healthRegen: 2.7, maxMana: 506, manaRegen: 3.64, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 55.86, baseAttackSpeed: 0.93, attackSpeedPercent: 9.8, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 34.04, magicalProtection: 34.36, damageMitigation: 0, maxHealth: 1110.9, healthRegen: 2.9, maxMana: 548, manaRegen: 3.9, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 58.14, baseAttackSpeed: 0.93, attackSpeedPercent: 11.2, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 36.8, magicalProtection: 35.74, damageMitigation: 0, maxHealth: 1200.6, healthRegen: 3.1, maxMana: 590, manaRegen: 4.16, cooldownRate: 0, movementSpeed: 375, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 60.42, baseAttackSpeed: 0.93, attackSpeedPercent: 12.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 39.56, magicalProtection: 37.12, damageMitigation: 0, maxHealth: 1290.3, healthRegen: 3.3, maxMana: 632, manaRegen: 4.42, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 62.7, baseAttackSpeed: 0.93, attackSpeedPercent: 14.0, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 42.32, magicalProtection: 38.5, damageMitigation: 0, maxHealth: 1380.0, healthRegen: 3.5, maxMana: 674, manaRegen: 4.68, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 64.98, baseAttackSpeed: 0.93, attackSpeedPercent: 15.4, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 45.08, magicalProtection: 39.88, damageMitigation: 0, maxHealth: 1469.7, healthRegen: 3.7, maxMana: 716, manaRegen: 4.94, cooldownRate: 0, movementSpeed: 375, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 67.26, baseAttackSpeed: 0.93, attackSpeedPercent: 16.8, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 47.84, magicalProtection: 41.26, damageMitigation: 0, maxHealth: 1559.4, healthRegen: 3.9, maxMana: 758, manaRegen: 5.2, cooldownRate: 0, movementSpeed: 375, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 69.54, baseAttackSpeed: 0.93, attackSpeedPercent: 18.2, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 50.6, magicalProtection: 42.64, damageMitigation: 0, maxHealth: 1649.1, healthRegen: 4.1, maxMana: 800, manaRegen: 5.46, cooldownRate: 0, movementSpeed: 375, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 71.82, baseAttackSpeed: 0.93, attackSpeedPercent: 19.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 53.36, magicalProtection: 44.02, damageMitigation: 0, maxHealth: 1738.8, healthRegen: 4.3, maxMana: 842, manaRegen: 5.72, cooldownRate: 0, movementSpeed: 375, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 74.1, baseAttackSpeed: 0.93, attackSpeedPercent: 21.0, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 56.12, magicalProtection: 45.4, damageMitigation: 0, maxHealth: 1828.5, healthRegen: 4.5, maxMana: 884, manaRegen: 5.98, cooldownRate: 0, movementSpeed: 375, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 76.38, baseAttackSpeed: 0.93, attackSpeedPercent: 22.4, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 58.88, magicalProtection: 46.78, damageMitigation: 0, maxHealth: 1918.2, healthRegen: 4.7, maxMana: 926, manaRegen: 6.24, cooldownRate: 0, movementSpeed: 375, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 78.66, baseAttackSpeed: 0.93, attackSpeedPercent: 23.8, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 61.64, magicalProtection: 48.16, damageMitigation: 0, maxHealth: 2007.9, healthRegen: 4.9, maxMana: 968, manaRegen: 6.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 80.94, baseAttackSpeed: 0.93, attackSpeedPercent: 25.2, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 64.4, magicalProtection: 49.54, damageMitigation: 0, maxHealth: 2097.6, healthRegen: 5.1, maxMana: 1010, manaRegen: 6.76, cooldownRate: 0, movementSpeed: 375, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 83.22, baseAttackSpeed: 0.93, attackSpeedPercent: 26.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 67.16, magicalProtection: 50.92, damageMitigation: 0, maxHealth: 2187.3, healthRegen: 5.3, maxMana: 1052, manaRegen: 7.02, cooldownRate: 0, movementSpeed: 375, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 85.5, baseAttackSpeed: 0.93, attackSpeedPercent: 28.0, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 69.92, magicalProtection: 52.3, damageMitigation: 0, maxHealth: 2277.0, healthRegen: 5.5, maxMana: 1094, manaRegen: 7.28, cooldownRate: 0, movementSpeed: 375, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'Hecate Basic Attack',
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
    name: 'Mythic Ritual',
    image: '',
    description: 'You may interact with things to empower them.\n\n• Interacting with an allied Structure creates a zone which regenerates health and mana\n• Interacting with an ally who has recently killed a god will increase both your and that ally\'s Strength and Intelligence',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Channel Time', value: '2s' },
      { label: 'Health Regen', value: '2 + 0.25 Per Level' },
      { label: 'Mana Regen', value: '2 + 0.25 Per Level' },
      { label: 'Strength', value: '5 + 2 Per Level' },
      { label: 'Intelligence', value: '8 + 3.2 Per Level' },
      { label: 'Buff Duration', value: '300s' },
      { label: 'Kill Window', value: '30s' }
    ]
  },
  abilities: {
    1: {
      name: 'Triplicate Form',
      image: '',
      description: 'Split yourself and fire a projectile, alternating between Power Form and Hex Form.\n\n• Power Form deals Magical Damage and Marks enemies to take bonus Magical Damage when damaged by another god\n• Hex Form deals Magical Damage and Mesmerizes enemies\n\nProjectiles pass through and damage all enemies, and pass through walls. Both projectiles linger at max range for 1s and can still hit enemies. Each projectile can only hit an enemy 1 time. Only damage dealt by the basic attacks and abilities of gods triggers the bonus damage from the Mark.',
      cooldown: '9 | 8.5 | 8 | 7.5 | 7s',
      cost: '40 | 50 | 60 | 70 | 80',
      attributes: [
        { label: 'Damage', value: '80 | 125 | 170 | 215 | 260' },
        { label: 'Damage Scaling', value: '75% Intelligence' },
        { label: 'Bonus Damage', value: '10 | 13 | 16 | 19 | 22' },
        { label: 'Bonus Damage Scaling', value: '3.5% Intelligence' },
        { label: 'Mark Duration', value: '6s' },
        { label: 'Mesmerize Duration', value: '1s' },
        { label: 'Range', value: '11.2m' },
        { label: 'Radius', value: '0.75m' }
      ]
    },
    2: {
      name: 'Spell Eater',
      image: '',
      description: 'Create a Sigil that charges up when gods activate abilities in a large area.\n\n• Reactivate to call down the Sigil and deal Magical Damage to enemies in the targeted area\n• Damage increases when fully charged\n\nMax Charge of 12. Damage is increased by 7.5% per Charge. Max Damage is 190% base damage and scaling.',
      cooldown: '9s',
      cost: '50 | 60 | 70 | 80 | 90',
      attributes: [
        { label: 'Damage', value: '80 | 130 | 180 | 230 | 280' },
        { label: 'Damage Scaling', value: '50% Intelligence' },
        { label: 'Max Charge', value: '12' },
        { label: 'Damage Per Charge', value: '7.5%' },
        { label: 'Max Charged Damage', value: '190%' },
        { label: 'Charge Radius', value: '20m' },
        { label: 'Attack Radius', value: '3.2m' }
      ]
    },
    3: {
      name: 'Repel Magic',
      image: '',
      description: 'Grant yourself or an ally a Magical Shield, absorbing Magical damage.\n\n• Deals Magical Damage near whomever is shielded\n• Activating this increases your Movement Speed, and gives Spell Eater 3 Charges\n\nMagical Shields are HP shields that only absorb Magical Damage. They stack with HP Shields.',
      cooldown: '12s',
      cost: '30 | 35 | 40 | 45 | 50',
      attributes: [
        { label: 'Damage', value: '85 | 130 | 175 | 220 | 265' },
        { label: 'Damage Scaling', value: '85% Intelligence' },
        { label: 'Magical Shield Health', value: '90 | 155 | 220 | 285 | 350' },
        { label: 'Movement Speed', value: '15%' },
        { label: 'Buff Duration', value: '6s' },
        { label: 'Range', value: '8.8m' },
        { label: 'Radius', value: '3.2m' }
      ]
    },
    4: {
      name: 'Open the Gates',
      image: '',
      description: 'Open two portals between realms, Stunning, then Displacing enemy gods to the opposite portal.\n\n• Deals Magical Damage to enemies\n• You and allied gods can Interact with the portals to Teleport between them\n\nOne Portal is always opened right in front of you, the other is opened at a targeted area. Enemies that cleanse or immune the Stun will not be Teleported. The initial delay is 1.5s, the Interactable Lifetime is 10s. You and allies can interact with the portals once.',
      cooldown: '90s',
      cost: '90',
      attributes: [
        { label: 'Damage', value: '320 | 370 | 420 | 470 | 520' },
        { label: 'Damage Scaling', value: '85% Intelligence' },
        { label: 'Stun Duration', value: '1s' },
        { label: 'Range', value: '14m' },
        { label: 'Radius', value: '4.8m' }
      ]
    }
  },
  aspects: [
    {
      id: 'ruin',
      name: 'Aspect of Ruin',
      image: '',
      description: 'Spell Eater can no longer be refired but instead reduces enemy ability damage in the area. Additionally, each time an enemy ability is cast a projectile lands and explodes at their location. Its Cooldown is increased.',
      basicAttack: {
        name: 'Hecate Basic Attack',
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
        name: 'Mythic Ritual',
        image: '',
        description: 'You may interact with things to empower them.\n\n• Interacting with an allied Structure creates a zone which regenerates health and mana\n• Interacting with an ally who has recently killed a god will increase both your and that ally\'s Strength and Intelligence',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Channel Time', value: '2s' },
          { label: 'Health Regen', value: '2 + 0.25 Per Level' },
          { label: 'Mana Regen', value: '2 + 0.25 Per Level' },
          { label: 'Strength', value: '5 + 2 Per Level' },
          { label: 'Intelligence', value: '8 + 3.2 Per Level' },
          { label: 'Buff Duration', value: '300s' },
          { label: 'Kill Window', value: '30s' }
        ]
      },
      abilities: {
        1: {
          name: 'Triplicate Form',
          image: '',
          description: 'Split yourself and fire a projectile, alternating between Power Form and Hex Form.\n\n• Power Form deals Magical Damage and Marks enemies to take bonus Magical Damage when damaged by another god\n• Hex Form deals Magical Damage and Mesmerizes enemies\n\nProjectiles pass through and damage all enemies, and pass through walls. Both projectiles linger at max range for 1s and can still hit enemies. Each projectile can only hit an enemy 1 time. Only damage dealt by the basic attacks and abilities of gods triggers the bonus damage from the Mark.',
          cooldown: '9 | 8.5 | 8 | 7.5 | 7s',
          cost: '40 | 50 | 60 | 70 | 80',
          attributes: [
            { label: 'Damage', value: '80 | 125 | 170 | 215 | 260' },
            { label: 'Damage Scaling', value: '75% Intelligence' },
            { label: 'Bonus Damage', value: '10 | 13 | 16 | 19 | 22' },
            { label: 'Bonus Damage Scaling', value: '3.5% Intelligence' },
            { label: 'Mark Duration', value: '6s' },
            { label: 'Mesmerize Duration', value: '1s' },
            { label: 'Range', value: '11.2m' },
            { label: 'Radius', value: '0.75m' }
          ]
        },
        2: {
          name: 'Spell Eater',
          image: '',
          description: 'Create a Sigil that decreases enemy god ability damage done in a large area for 4s.\n\n• A projectile is fired when enemy gods activate abilities, exploding and dealing Magical Damage to enemies in the targeted area\n• CAN NO LONGER BE REFIRED\n• REDUCES ENEMY ABILITY DAMAGE IN AREA\n• COOLDOWN IS INCREASED\n\nThis ability does 50% reduced damage in Non-Conquest game modes.',
          cooldown: '12s',
          cost: '50 | 60 | 70 | 80 | 90',
          attributes: [
            { label: 'Damage', value: '60 | 90 | 120 | 150 | 180' },
            { label: 'Damage Scaling', value: '20% Intelligence' },
            { label: 'Ability Damage Reduction', value: '10%' },
            { label: 'Duration', value: '4s' },
            { label: 'Charge Radius', value: '20m' },
            { label: 'Attack Radius', value: '3.2m' }
          ]
        },
        3: {
          name: 'Repel Magic',
          image: '',
          description: 'Grant yourself or an ally a Magical Shield, absorbing Magical damage.\n\n• Deals Magical Damage near whomever is shielded\n• Activating this increases your Movement Speed, and gives Spell Eater 3 Charges\n\nMagical Shields are HP shields that only absorb Magical Damage. They stack with HP Shields.',
          cooldown: '12s',
          cost: '30 | 35 | 40 | 45 | 50',
          attributes: [
            { label: 'Damage', value: '85 | 130 | 175 | 220 | 265' },
            { label: 'Damage Scaling', value: '85% Intelligence' },
            { label: 'Magical Shield Health', value: '90 | 155 | 220 | 285 | 350' },
            { label: 'Movement Speed', value: '15%' },
            { label: 'Buff Duration', value: '6s' },
            { label: 'Range', value: '8.8m' },
            { label: 'Radius', value: '3.2m' }
          ]
        },
        4: {
          name: 'Open the Gates',
          image: '',
          description: 'Open two portals between realms, Stunning, then Displacing enemy gods to the opposite portal.\n\n• Deals Magical Damage to enemies\n• You and allied gods can Interact with the portals to Teleport between them\n\nOne Portal is always opened right in front of you, the other is opened at a targeted area. Enemies that cleanse or immune the Stun will not be Teleported. The initial delay is 1.5s, the Interactable Lifetime is 10s. You and allies can interact with the portals once.',
          cooldown: '90s',
          cost: '90',
          attributes: [
            { label: 'Damage', value: '320 | 370 | 420 | 470 | 520' },
            { label: 'Damage Scaling', value: '85% Intelligence' },
            { label: 'Stun Duration', value: '1s' },
            { label: 'Range', value: '14m' },
            { label: 'Radius', value: '4.8m' }
          ]
        }
      }
    }
  ],
  recommendedBuilds: []
};