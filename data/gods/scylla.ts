import { God, DamageType } from '../../types';

export const SCYLLA: God = {
  id: 'scylla',
  name: 'Scylla',
  title: 'Horror of the Sea',
  pantheon: 'Greek',
  role: 'Mage',
  lanes: ['Mid'],
  damageType: DamageType.Magical,
  image: '',
  videoGuideUrl: '',
  goodAgainst: [],
  badAgainst: [],
  levelingOrder: [],
  statsByLevel: [
    // Level 1
    { strength: 0, intelligence: 0, inhandPower: 42, baseAttackSpeed: 1.0, attackSpeedPercent: 0.8, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 17.6, magicalProtection: 27.4, damageMitigation: 0, maxHealth: 591.4, healthRegen: 1.7, maxMana: 320, manaRegen: 2.34, cooldownRate: 0, movementSpeed: 375, xpRequirement: 0 },
    // Level 2
    { strength: 0, intelligence: 0, inhandPower: 44, baseAttackSpeed: 1.0, attackSpeedPercent: 1.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 20.4, magicalProtection: 28.9, damageMitigation: 0, maxHealth: 684, healthRegen: 1.9, maxMana: 365, manaRegen: 2.6, cooldownRate: 0, movementSpeed: 375, xpRequirement: 308 },
    // Level 3
    { strength: 0, intelligence: 0, inhandPower: 47, baseAttackSpeed: 1.0, attackSpeedPercent: 2.4, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 23.3, magicalProtection: 30.3, damageMitigation: 0, maxHealth: 776.6, healthRegen: 2.1, maxMana: 410, manaRegen: 2.86, cooldownRate: 0, movementSpeed: 375, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 49, baseAttackSpeed: 1.0, attackSpeedPercent: 3.2, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 26.1, magicalProtection: 31.7, damageMitigation: 0, maxHealth: 869.3, healthRegen: 2.3, maxMana: 456, manaRegen: 3.12, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 51, baseAttackSpeed: 1.0, attackSpeedPercent: 4.0, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 29.0, magicalProtection: 33.1, damageMitigation: 0, maxHealth: 962, healthRegen: 2.5, maxMana: 501, manaRegen: 3.38, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 54, baseAttackSpeed: 1.0, attackSpeedPercent: 4.8, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 31.8, magicalProtection: 34.6, damageMitigation: 0, maxHealth: 1054.6, healthRegen: 2.7, maxMana: 546, manaRegen: 3.64, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 56, baseAttackSpeed: 1.0, attackSpeedPercent: 5.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 34.7, magicalProtection: 36, damageMitigation: 0, maxHealth: 1147.1, healthRegen: 2.9, maxMana: 592, manaRegen: 3.9, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 58, baseAttackSpeed: 1.0, attackSpeedPercent: 6.4, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 37.5, magicalProtection: 37.4, damageMitigation: 0, maxHealth: 1239.8, healthRegen: 3.1, maxMana: 637, manaRegen: 4.16, cooldownRate: 0, movementSpeed: 375, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 60, baseAttackSpeed: 1.0, attackSpeedPercent: 7.2, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 40.4, magicalProtection: 38.8, damageMitigation: 0, maxHealth: 1332.4, healthRegen: 3.3, maxMana: 683, manaRegen: 4.42, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 63, baseAttackSpeed: 1.0, attackSpeedPercent: 8.0, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 43.2, magicalProtection: 40.3, damageMitigation: 0, maxHealth: 1425, healthRegen: 3.5, maxMana: 728, manaRegen: 4.68, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 65, baseAttackSpeed: 1.0, attackSpeedPercent: 8.8, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 46.1, magicalProtection: 41.7, damageMitigation: 0, maxHealth: 1517.6, healthRegen: 3.7, maxMana: 773, manaRegen: 4.94, cooldownRate: 0, movementSpeed: 375, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 67, baseAttackSpeed: 1.0, attackSpeedPercent: 9.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 48.9, magicalProtection: 43.1, damageMitigation: 0, maxHealth: 1610.3, healthRegen: 3.9, maxMana: 819, manaRegen: 5.2, cooldownRate: 0, movementSpeed: 375, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 70, baseAttackSpeed: 1.0, attackSpeedPercent: 10.4, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 51.8, magicalProtection: 44.5, damageMitigation: 0, maxHealth: 1702.9, healthRegen: 4.1, maxMana: 864, manaRegen: 5.46, cooldownRate: 0, movementSpeed: 375, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 72, baseAttackSpeed: 1.0, attackSpeedPercent: 11.2, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 54.6, magicalProtection: 46, damageMitigation: 0, maxHealth: 1795.5, healthRegen: 4.3, maxMana: 909, manaRegen: 5.72, cooldownRate: 0, movementSpeed: 375, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 74, baseAttackSpeed: 1.0, attackSpeedPercent: 12.0, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 57.5, magicalProtection: 47.4, damageMitigation: 0, maxHealth: 1888.1, healthRegen: 4.5, maxMana: 955, manaRegen: 5.98, cooldownRate: 0, movementSpeed: 375, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 76, baseAttackSpeed: 1.0, attackSpeedPercent: 12.8, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 60.3, magicalProtection: 48.8, damageMitigation: 0, maxHealth: 1980.8, healthRegen: 4.7, maxMana: 1000, manaRegen: 6.24, cooldownRate: 0, movementSpeed: 375, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 79, baseAttackSpeed: 1.0, attackSpeedPercent: 13.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 63.2, magicalProtection: 50.2, damageMitigation: 0, maxHealth: 2073.4, healthRegen: 4.9, maxMana: 1045, manaRegen: 6.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 81, baseAttackSpeed: 1.0, attackSpeedPercent: 14.4, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 66.0, magicalProtection: 51.7, damageMitigation: 0, maxHealth: 2166, healthRegen: 5.1, maxMana: 1091, manaRegen: 6.76, cooldownRate: 0, movementSpeed: 375, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 83, baseAttackSpeed: 1.0, attackSpeedPercent: 15.2, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 68.9, magicalProtection: 53.1, damageMitigation: 0, maxHealth: 2258.6, healthRegen: 5.3, maxMana: 1136, manaRegen: 7.02, cooldownRate: 0, movementSpeed: 375, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 86, baseAttackSpeed: 1.0, attackSpeedPercent: 16.0, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 71.7, magicalProtection: 54.5, damageMitigation: 0, maxHealth: 2351.3, healthRegen: 5.5, maxMana: 1182, manaRegen: 7.28, cooldownRate: 0, movementSpeed: 375, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'Scylla Basic Attack',
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
    name: 'Quick Learner',
    image: '',
    description: 'Your abilities gain an additional effect at max rank. In addition, gain Intelligence and Mana Regen for each max rank ability.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Intelligence', value: '20 Per Max Ability' },
      { label: 'Mana Regen', value: '1 Per Max Ability' }
    ]
  },
  abilities: {
    1: {
      name: "Sic 'Em",
      image: '',
      description: "Send two hounds forward, Rooting, Crippling, and dealing Magical Damage.\n\n• At max rank, the two closest enemies to the first target will also be hit.\n\nProjectile stops on walls.",
      cooldown: '10s',
      cost: '60 | 65 | 70 | 75 | 80',
      attributes: [
        { label: 'Damage', value: '60 | 110 | 160 | 210 | 260' },
        { label: 'Damage Scaling', value: '75% Intelligence' },
        { label: 'Root Duration', value: '1.75s' },
        { label: 'Cripple Duration', value: '1.75s' },
        { label: 'Range', value: '10.4m' },
        { label: 'Radius', value: '0.48m' },
        { label: 'Explode Radius', value: '2.4m' }
      ]
    },
    2: {
      name: 'Crush',
      image: '',
      description: 'Creates a magical field that Slows enemies. After 5s it detonates, dealing Magical Damage.\n\n• At max rank, enemies in the area also have their Magical Protection reduced and the field persists if detonated early.\n\nReactivate to detonate the field early.',
      cooldown: '10s',
      cost: '70 | 75 | 80 | 85 | 90',
      attributes: [
        { label: 'Damage', value: '100 | 155 | 210 | 265 | 320' },
        { label: 'Damage Scaling', value: '80% Intelligence' },
        { label: 'Slow', value: '30%' },
        { label: 'Magical Protection Reduced', value: '10%' },
        { label: 'Range', value: '8.8m' },
        { label: 'Radius', value: '3.2m' }
      ]
    },
    3: {
      name: 'Sentinel',
      image: '',
      description: 'Summon a sentinel at the target area, granting vision of enemies for 5s. Reactivate the ability to Leap to the sentinel location and gain a buff that causes your next Basic Attack to deal Magical Damage.\n\n• At max rank, hitting an enemy god with the empowered Basic Attack reduces your active ability cooldowns.\n\nSentinel vision is granted through line of sight blockers.',
      cooldown: '15s',
      cost: '70 | 75 | 80 | 85 | 90',
      attributes: [
        { label: 'Damage', value: '20 | 25 | 30 | 35 | 40' },
        { label: 'Damage Scaling', value: '50% Intelligence' },
        { label: 'Buff Duration', value: '5s' },
        { label: 'Vision Radius', value: '6.4 | 8.0 | 9.6 | 11.2 | 12.8m' },
        { label: 'Cooldown Refund (Max Rank)', value: '3s' },
        { label: 'Range', value: '11.2m' }
      ]
    },
    4: {
      name: "I'm a Monster",
      image: '',
      description: "Become CC Immune for the next 6s, and gain Movement Speed. Reactivate to deal Magical Damage at the target area.\n\n• If you kill an enemy god with this attack, the duration resets and you may attack again.\n• Whenever this ability deals damage to enemy gods you gain 1 stack, killing enemy gods provides 3. At max rank, each stack provides bonus damage to this ability.\n\nThe dash ends early upon hitting an enemy god.",
      cooldown: '90s',
      cost: '100',
      attributes: [
        { label: 'Damage', value: '400 | 500 | 600 | 700 | 800' },
        { label: 'Damage Scaling', value: '120% Intelligence' },
        { label: 'Movement Speed', value: '35%' },
        { label: 'Bonus Damage Per Stack (Max Rank)', value: '5' },
        { label: 'Bonus Scaling Per Stack (Max Rank)', value: '2% Intelligence' },
        { label: 'Range', value: '9.6m' },
        { label: 'Radius', value: '2.4m' }
      ]
    }
  },
  aspects: [
    {
      id: 'devourer',
      name: 'Aspect of the Devourer',
      image: '',
      description: "Your non-ultimate abilities now provide Mana when damaging enemies, instead of spending it. I'm a Monster can only be used when at full Mana, consuming all of it. It no longer provides Movement Speed, but now can be fired up to 3 times and the damage scales from your Max Mana. I'm a Monster stacks now immediately provide Max Mana and at max rank you gain bonus Mana and Mana Regen. Sentinel's Empowered attack also scales with Max Mana, but no longer Cooldown Reduces itself.",
      basicAttack: {
        name: 'Scylla Basic Attack',
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
        name: 'Quick Learner',
        image: '',
        description: 'You cannot gain Mana from other sources but damaging enemies with your non-ultimate abilities provides Mana instead. In addition, gain Intelligence and Mana Regen for each max rank ability.\n\n• You gain 2% of your Max Mana + Mana Cost of the ability used when hitting enemy gods.\n• ABILITIES NOW PROVIDE MANA INSTEAD OF SPENDING IT',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Intelligence', value: '20 Per Max Ability' },
          { label: 'Mana Regen', value: '1 Per Max Ability' },
          { label: 'Minion Mana Restore', value: '20%' }
        ]
      },
      abilities: {
        1: {
          name: "Sic 'Em",
          image: '',
          description: "Send two hounds forward, Rooting, Crippling, and dealing Magical Damage.\n\n• At max rank, the two closest enemies to the first target will also be hit.\n• NOW PROVIDES MANA INSTEAD OF SPENDING IT\n\nProjectile stops on walls.",
          cooldown: '10s',
          cost: '60 | 65 | 70 | 75 | 80',
          attributes: [
            { label: 'Damage', value: '60 | 110 | 160 | 210 | 260' },
            { label: 'Damage Scaling', value: '75% Intelligence' },
            { label: 'Root Duration', value: '1.75s' },
            { label: 'Cripple Duration', value: '1.75s' },
            { label: 'Range', value: '10.4m' },
            { label: 'Radius', value: '0.48m' },
            { label: 'Explode Radius', value: '2.4m' }
          ]
        },
        2: {
          name: 'Crush',
          image: '',
          description: 'Creates a magical field that Slows enemies. After 5s it detonates, dealing Magical Damage.\n\n• At max rank, enemies in the area also have their Magical Protection reduced and the field persists if detonated early.\n• NOW PROVIDES MANA INSTEAD OF SPENDING IT\n\nReactivate to detonate the field early.',
          cooldown: '10s',
          cost: '70 | 75 | 80 | 85 | 90',
          attributes: [
            { label: 'Damage', value: '100 | 155 | 210 | 265 | 320' },
            { label: 'Damage Scaling', value: '80% Intelligence' },
            { label: 'Slow', value: '30%' },
            { label: 'Magical Protection Reduced', value: '10%' },
            { label: 'Range', value: '8.8m' },
            { label: 'Radius', value: '3.2m' }
          ]
        },
        3: {
          name: 'Sentinel',
          image: '',
          description: 'Summon a sentinel at the target area, granting vision of enemies for 5s. Reactivate the ability to Leap to the sentinel location and gain a buff that causes your next Basic Attack to deal Magical Damage.\n\n• At max rank, hitting an enemy god with the empowered Basic Attack reduces your OTHER active ability cooldowns.\n• EMPOWERED ATTACK NOW ALSO SCALES WITH MAX MANA\n• NO LONGER COOLDOWN REDUCES ITSELF\n• NOW PROVIDES MANA INSTEAD OF SPENDING IT\n\nSentinel vision is granted through line of sight blockers.',
          cooldown: '15s',
          cost: '70 | 75 | 80 | 85 | 90',
          attributes: [
            { label: 'Damage', value: '20 | 25 | 30 | 35 | 40' },
            { label: 'Damage Scaling', value: '50% Intelligence + 5% Max Mana' },
            { label: 'Buff Duration', value: '5s' },
            { label: 'Vision Radius', value: '6.4 | 8.0 | 9.6 | 11.2 | 12.8m' },
            { label: 'Cooldown Refund (Max Rank)', value: '3s' },
            { label: 'Range', value: '11.2m' }
          ]
        },
        4: {
          name: "I'm a Monster",
          image: '',
          description: "All of your Mana is consumed as you become CC Immune for the next 6s. This ability can be reactivated up to 3 times dealing Magical Damage at the target area.\n\n• 100% Mana is required to cast this ability.\n• Whenever this ability deals damage to enemy gods you gain 1 stack, killing enemy gods provides 3. Each stack provides max Mana and at max rank, you gain bonus Mana and Mana Regen.\n• NO LONGER PROVIDES MOVEMENT SPEED\n• CAN BE FIRED UP TO 3 TIMES\n• DAMAGE SCALES FROM MAX MANA INSTEAD OF INTELLIGENCE",
          cooldown: '90s',
          cost: '100% Mana',
          attributes: [
            { label: 'Damage', value: '150 | 175 | 200 | 225 | 250' },
            { label: 'Damage Scaling', value: '21 | 22 | 23 | 24 | 25% Max Mana' },
            { label: 'Bonus Max Mana Per Stack', value: '25' },
            { label: 'Bonus Max Mana (Max Rank)', value: '500' },
            { label: 'Bonus Mana Regen (Max Rank)', value: '5' },
            { label: 'Range', value: '9.6m' },
            { label: 'Radius', value: '2.4m' }
          ]
        }
      }
    }
  ],
  recommendedBuilds: []
};