import { God, DamageType } from '../../types';

export const ARTIO: God = {
  id: 'artio',
  name: 'Artio',
  title: 'The Bear Goddess',
  pantheon: 'Celtic',
  role: 'Guardian',
  lanes: ['Solo', 'Support'],
  damageType: DamageType.Magical,
  image: 'https://static.smite2.live/smite2/GODS/Artio/Default/t_GodCard_Artio.webp',
  videoGuideUrl: '',
  goodAgainst: [],
  badAgainst: [],
  levelingOrder: [],
  statsByLevel: [
    // Level 1
    { strength: 0, intelligence: 0, inhandPower: 42, baseAttackSpeed: 0.97, attackSpeedPercent: 1.33, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 20.5, magicalProtection: 29.7, damageMitigation: 0, maxHealth: 672.3, healthRegen: 1.84, maxMana: 306, manaRegen: 2.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 0 },
    // Level 2
    { strength: 0, intelligence: 0, inhandPower: 45, baseAttackSpeed: 0.97, attackSpeedPercent: 2.66, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 23.8, magicalProtection: 31.3, damageMitigation: 0, maxHealth: 777.6, healthRegen: 2.05, maxMana: 348, manaRegen: 2.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 308 },
    // Level 3
    { strength: 0, intelligence: 0, inhandPower: 47, baseAttackSpeed: 0.97, attackSpeedPercent: 3.99, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 27, magicalProtection: 32.9, damageMitigation: 0, maxHealth: 882.9, healthRegen: 2.27, maxMana: 390, manaRegen: 2.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 50, baseAttackSpeed: 0.97, attackSpeedPercent: 5.32, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 30.2, magicalProtection: 34.6, damageMitigation: 0, maxHealth: 988.2, healthRegen: 2.48, maxMana: 432, manaRegen: 3, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 52, baseAttackSpeed: 0.97, attackSpeedPercent: 6.65, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 33.5, magicalProtection: 36.2, damageMitigation: 0, maxHealth: 1093.5, healthRegen: 2.7, maxMana: 474, manaRegen: 3.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 54, baseAttackSpeed: 0.97, attackSpeedPercent: 7.98, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 36.7, magicalProtection: 37.8, damageMitigation: 0, maxHealth: 1198.8, healthRegen: 2.92, maxMana: 516, manaRegen: 3.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 57, baseAttackSpeed: 0.97, attackSpeedPercent: 9.31, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 40, magicalProtection: 39.4, damageMitigation: 0, maxHealth: 1304.1, healthRegen: 3.13, maxMana: 558, manaRegen: 3.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 59, baseAttackSpeed: 0.97, attackSpeedPercent: 10.64, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 43.2, magicalProtection: 41, damageMitigation: 0, maxHealth: 1409.4, healthRegen: 3.35, maxMana: 600, manaRegen: 4, cooldownRate: 0, movementSpeed: 375, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 62, baseAttackSpeed: 0.97, attackSpeedPercent: 11.97, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 46.4, magicalProtection: 42.7, damageMitigation: 0, maxHealth: 1514.7, healthRegen: 3.56, maxMana: 642, manaRegen: 4.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 64, baseAttackSpeed: 0.97, attackSpeedPercent: 13.3, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 49.7, magicalProtection: 44.3, damageMitigation: 0, maxHealth: 1620, healthRegen: 3.78, maxMana: 684, manaRegen: 4.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 66, baseAttackSpeed: 0.97, attackSpeedPercent: 14.63, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 52.9, magicalProtection: 45.9, damageMitigation: 0, maxHealth: 1725.3, healthRegen: 4, maxMana: 726, manaRegen: 4.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 69, baseAttackSpeed: 0.97, attackSpeedPercent: 15.96, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 56.2, magicalProtection: 47.5, damageMitigation: 0, maxHealth: 1830.6, healthRegen: 4.21, maxMana: 768, manaRegen: 5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 71, baseAttackSpeed: 0.97, attackSpeedPercent: 17.29, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 59.4, magicalProtection: 49.1, damageMitigation: 0, maxHealth: 1935.9, healthRegen: 4.43, maxMana: 810, manaRegen: 5.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 74, baseAttackSpeed: 0.97, attackSpeedPercent: 18.62, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 62.6, magicalProtection: 50.8, damageMitigation: 0, maxHealth: 2041.2, healthRegen: 4.64, maxMana: 852, manaRegen: 5.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 76, baseAttackSpeed: 0.97, attackSpeedPercent: 19.95, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 65.9, magicalProtection: 52.4, damageMitigation: 0, maxHealth: 2146.5, healthRegen: 4.86, maxMana: 894, manaRegen: 5.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 78, baseAttackSpeed: 0.97, attackSpeedPercent: 21.28, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 69.1, magicalProtection: 54, damageMitigation: 0, maxHealth: 2251.8, healthRegen: 5.08, maxMana: 936, manaRegen: 6, cooldownRate: 0, movementSpeed: 375, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 81, baseAttackSpeed: 0.97, attackSpeedPercent: 22.61, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 72.4, magicalProtection: 55.6, damageMitigation: 0, maxHealth: 2357.1, healthRegen: 5.29, maxMana: 978, manaRegen: 6.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 83, baseAttackSpeed: 0.97, attackSpeedPercent: 23.94, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 75.6, magicalProtection: 57.2, damageMitigation: 0, maxHealth: 2462.4, healthRegen: 5.51, maxMana: 1020, manaRegen: 6.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 86, baseAttackSpeed: 0.97, attackSpeedPercent: 25.27, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 78.8, magicalProtection: 58.9, damageMitigation: 0, maxHealth: 2567.7, healthRegen: 5.72, maxMana: 1062, manaRegen: 6.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 88, baseAttackSpeed: 0.97, attackSpeedPercent: 26.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 82.1, magicalProtection: 60.5, damageMitigation: 0, maxHealth: 2673, healthRegen: 5.94, maxMana: 1104, manaRegen: 7, cooldownRate: 0, movementSpeed: 375, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'Artio Basic Attack',
    image: 'https://static.smite2.live/smite2/GODS/common/Icon_BasicAttack_Magical.webp',
    description: 'Artio\'s Basic attacks change depending on her form.\n\nDruid: Fire a projectile that deals Magical Damage to the first enemy hit.\n\nBear: Deal Magical Damage to an enemy in front of you.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
      { label: 'Druid Range', value: '8.8m' },
      { label: 'Bear Range', value: '1.92m' },
      { label: 'Bear Cone Angle', value: '120 degrees' }
    ]
  },
  passive: {
    name: 'Decompose',
    image: 'https://static.smite2.live/smite2/GODS/Artio/Abilities/Icons_Artio_Passive.webp',
    description: 'When Artio hits enemy gods with damaging abilities, the target will begin to decompose, decreasing physical and magical protections and reducing their healing.\n\n• The Protection Debuff effect stacks up to 5 times.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Protections Reduced', value: '2% Per Stack' },
      { label: 'Max Stacks', value: '5' }
    ]
  },
  abilities: {
    1: {
      name: 'Energy Surge / Maul Prey',
      image: 'https://static.smite2.live/smite2/GODS/Artio/Abilities/Icons_Artio_A01A.webp',
      description: 'Artio has different abilities based on her current stance.\n\n[Druid] Energy Surge: Artio pulses out a strong wave of energy dealing Magical Damage to enemies. She will heal herself and allies around each enemy god hit by this ability.\n\n[Bear] Maul Prey: Artio swipes twice in front of her with her claws, dealing Magical Damage to enemies with each swipe.',
      cooldown: '12s',
      cost: '40 | 45 | 50 | 55 | 60',
      attributes: [],
      subAbilities: [
        {
          name: 'Energy Surge',
          description: 'Artio pulses out a strong wave of energy dealing Magical Damage to enemies. She will heal herself and allies around each enemy god hit by this ability.',
          image: 'https://static.smite2.live/smite2/GODS/Artio/Abilities/Icons_Artio_A01A.webp',
          attributes: [
            { label: 'Damage', value: '70 | 105 | 140 | 175 | 210' },
            { label: 'Damage Scaling', value: '35% Intelligence + 60% Strength' },
            { label: 'Heal', value: '30 | 50 | 70 | 90 | 110' },
            { label: 'Heal Scaling', value: '25% Intelligence' },
            { label: 'Cone Angle', value: '120 degrees' }
          ]
        },
        {
          name: 'Maul Prey',
          description: 'Artio swipes twice in front of her with her claws, dealing Magical Damage to enemies with each swipe.',
          image: 'https://static.smite2.live/smite2/GODS/Artio/Abilities/Icons_Artio_A01B.webp',
          attributes: [
            { label: 'Damage Per Swipe', value: '40 | 70 | 100 | 130 | 160' },
            { label: 'Damage Scaling', value: '30% Intelligence + 50% Strength' },
            { label: 'Cone Angle', value: '120 degrees' }
          ]
        }
      ]
    },
    2: {
      name: 'Entangling Vines / Ferocious Roar',
      image: 'https://static.smite2.live/smite2/GODS/Artio/Abilities/Icons_Artio_A02A.webp',
      description: 'Artio has different abilities based on her current stance.\n\n[Druid] Entangling Vines: Artio creates a thicket of vines around herself that cripples enemy gods and decreases their Magical or Physical Power as long as they are in the area.\n\n[Bear] Ferocious Roar: Artio lets out a ferocious roar that Stuns all nearby enemies and increases her own Physical and Magical Protections for 4s.',
      cooldown: '15s',
      cost: '40 | 45 | 50 | 55 | 60 (Bear) / 50 | 55 | 60 | 65 | 70 (Druid)',
      attributes: [],
      subAbilities: [
        {
          name: 'Entangling Vines',
          description: 'Artio creates a thicket of vines around herself that cripples enemy gods and decreases their Magical or Physical Power as long as they are in the area.',
          image: 'https://static.smite2.live/smite2/GODS/Artio/Abilities/Icons_Artio_A02A.webp',
          attributes: [
            { label: 'Power Debuff', value: '9% | 10.5% | 12% | 13.5% | 15%' },
            { label: 'Duration', value: '4s' },
            { label: 'Cost', value: '50 | 55 | 60 | 65 | 70' }
          ]
        },
        {
          name: 'Ferocious Roar',
          description: 'Artio lets out a ferocious roar that Stuns all nearby enemies and increases her own Physical and Magical Protections for 4s.',
          image: 'https://static.smite2.live/smite2/GODS/Artio/Abilities/Icons_Artio_A02B.webp',
          attributes: [
            { label: 'Stun Duration', value: '1.0s | 1.1s | 1.2s | 1.3s | 1.4s' },
            { label: 'Radius', value: '3.2m' },
            { label: 'Cost', value: '40 | 45 | 50 | 55 | 60' }
          ]
        }
      ]
    },
    3: {
      name: 'Life Tap / Heavy Charge',
      image: 'https://static.smite2.live/smite2/GODS/Artio/Abilities/Icons_Artio_A03A.webp',
      description: 'Artio has different abilities based on her current stance.\n\n[Druid] Life Tap: Artio channels for 2s, draining the life from enemies in a line in front of her. While channeling she deals Magical Damage up to 5 times and heals herself up to 5 times. Each hit adds a stack of Slow to enemies. Enemies hit all 5 times are Rooted for 1s.\n\n[Bear] Heavy Charge: Artio charges forward at an increased movement speed. Enemies she charges through take damage and are Slowed for 2s.',
      cooldown: '15s',
      cost: '55',
      attributes: [],
      subAbilities: [
        {
          name: 'Life Tap',
          description: 'Artio channels for 2s, draining the life from enemies in a line in front of her.\n\n• While channeling she deals Magical Damage up to 5 times and heals herself up to 5 times.\n• Each hit adds a stack of Slow to enemies.\n• Enemies hit all 5 times are Rooted for 1s.',
          image: 'https://static.smite2.live/smite2/GODS/Artio/Abilities/Icons_Artio_A03A.webp',
          attributes: [
            { label: 'Damage Per Tick', value: '15 | 30 | 45 | 60 | 75' },
            { label: 'Damage Scaling', value: '15% Intelligence' },
            { label: 'Heal Per Tick', value: '10 | 15 | 20 | 25 | 30' },
            { label: 'Heal Scaling', value: '3% Intelligence' },
            { label: 'Range', value: '8.8m' },
            { label: 'Root Duration', value: '1s' }
          ]
        },
        {
          name: 'Heavy Charge',
          description: 'Artio charges forward at an increased movement speed. Enemies she charges through take damage and are Slowed for 2s.',
          image: 'https://static.smite2.live/smite2/GODS/Artio/Abilities/Icons_Artio_A03B.webp',
          attributes: [
            { label: 'Damage', value: '75 | 120 | 165 | 210 | 255' },
            { label: 'Damage Scaling', value: '55% Intelligence + 85% Strength' },
            { label: 'Slow', value: '20%' },
            { label: 'Slow Duration', value: '2s' },
            { label: 'Movement Speed', value: '100%' },
            { label: 'Range', value: '12m' }
          ]
        }
      ]
    },
    4: {
      name: 'Shapeshift / Great Spirit Bear',
      image: 'https://static.smite2.live/smite2/GODS/Artio/Abilities/Icons_Artio_A04A.webp',
      description: 'Artio Shapeshifts between her Druid stance and Bear stance, gaining Invigoration stacks when hitting enemies. Alternatively, she can summon a great bear spirit to charge forward.',
      cooldown: '10s / 70s',
      cost: '10 / 50 | 60 | 70 | 80 | 90',
      attributes: [],
      subAbilities: [
        {
          name: 'Shapeshift',
          description: 'Artio Shapeshifts between her Druid stance and Bear stance.\n\n• When Artio hits at least 1 enemy with an ability, she gains one stack of Invigoration. Granting her Movement Speed and Mana Regeneration.\n• Stacks last 6 seconds, and can stack up to 8 times.',
          image: 'https://static.smite2.live/smite2/GODS/Artio/Abilities/Icons_Artio_A04A.webp',
          attributes: [
            { label: 'Mana Regen', value: 'Per Stack' },
            { label: 'Movement Speed', value: '% Per Stack' },
            { label: 'Max Stacks', value: '8' },
            { label: 'Stack Duration', value: '6s' },
            { label: 'Cooldown', value: '10s' },
            { label: 'Cost', value: '10' }
          ]
        },
        {
          name: 'Great Spirit Bear',
          description: 'Artio summons a great bear spirit, which charges forward. Dealing Magical Damage and rooting all enemies in its path, as well as providing a shield and movement speed to all allies in its path.',
          image: 'https://static.smite2.live/smite2/GODS/Artio/Abilities/Icons_Artio_A04B.webp',
          attributes: [
            { label: 'Damage', value: '300 | 400 | 500 | 600 | 700' },
            { label: 'Damage Scaling', value: '40% Intelligence' },
            { label: 'Root Duration', value: '1.0s | 1.25s | 1.5s | 1.75s | 2.0s' },
            { label: 'Shield Health', value: '150 | 250 | 350 | 450 | 550' },
            { label: 'Movement Speed', value: '20%' },
            { label: 'Buff Duration', value: '4s' },
            { label: 'Cooldown', value: '70s' },
            { label: 'Cost', value: '50 | 60 | 70 | 80 | 90' }
          ]
        }
      ]
    }
  },
  aspects: [
    {
      id: 'savagery',
      name: 'Aspect of Savagery',
      image: 'https://static.smite2.live/smite2/GODS/Artio/Abilities/Icons_Artio_A04A.webp',
      description: 'Artio can only change stances in the fountain but gains enhanced abilities when she leaves it. Bear form abilities now apply Bleed effects. Her ultimate changes depending on her stance - Bearnado in Druid form, Great Spirit Bear in Bear form.',
      basicAttack: {
        name: 'Artio Basic Attack',
        image: 'https://static.smite2.live/smite2/GODS/common/Icon_BasicAttack_Magical.webp',
        description: 'Artio\'s Basic attacks change depending on her form.\n\nDruid: Fire a projectile that deals Magical Damage to the first enemy hit.\n\nBear: Deal Magical Damage to an enemy in front of you.',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
          { label: 'Druid Range', value: '8.8m' },
          { label: 'Bear Range', value: '1.92m' },
          { label: 'Bear Cone Angle', value: '120 degrees' }
        ]
      },
      passive: {
        name: 'Decompose',
        image: 'https://static.smite2.live/smite2/GODS/Artio/Abilities/Icons_Artio_Passive.webp',
        description: 'When Artio hits enemy gods with damaging abilities, the target will begin to decompose, decreasing physical and magical protections and reducing their healing.\n\n• The Protection Debuff effect stacks up to 5 times.',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Protections Reduced', value: '2% Per Stack' },
          { label: 'Max Stacks', value: '5' }
        ]
      },
      abilities: {
        1: {
          name: 'Energy Surge / Maul Prey',
          image: 'https://static.smite2.live/smite2/GODS/Artio/Abilities/Icons_Artio_A01A.webp',
          description: 'Artio has different abilities based on her current stance.\n\n[Druid] Energy Surge: Artio pulses out a strong wave of energy dealing Magical Damage to enemies. She will heal herself and allies around each enemy god hit by this ability.\n• If Entangle is active, this ability will apply 2 seconds of Entangle\'s Cripple and Power Reduction effects.\n\n[Bear] Maul Prey: Artio swipes twice in front of her with her claws, dealing Magical Damage to enemies with each swipe.\n• EACH SWIPE CAUSES ENEMIES HIT TO BLEED DEALING MAGICAL DAMAGE OVER TIME.',
          cooldown: '12s',
          cost: '40 | 45 | 50 | 55 | 60',
          attributes: [],
          subAbilities: [
            {
              name: 'Energy Surge',
              description: 'Artio pulses out a strong wave of energy dealing Magical Damage to enemies. She will heal herself and allies around each enemy god hit by this ability.\n• If Entangle is active, this ability will apply 2 seconds of Entangle\'s Cripple and Power Reduction effects.',
              image: 'https://static.smite2.live/smite2/GODS/Artio/Abilities/Icons_Artio_A01A.webp',
              attributes: [
                { label: 'Damage', value: '70 | 105 | 140 | 175 | 210' },
                { label: 'Damage Scaling', value: '35% Intelligence + 60% Strength' },
                { label: 'Heal', value: '30 | 50 | 70 | 90 | 110' },
                { label: 'Heal Scaling', value: '25% Intelligence' },
                { label: 'Cone Angle', value: '120 degrees' }
              ]
            },
            {
              name: 'Maul Prey',
              description: 'Artio swipes twice in front of her with her claws, dealing Magical Damage to enemies with each swipe.\n• EACH SWIPE CAUSES ENEMIES HIT TO BLEED DEALING MAGICAL DAMAGE OVER TIME.',
              image: 'https://static.smite2.live/smite2/GODS/Artio/Abilities/Icons_Artio_A01B.webp',
              attributes: [
                { label: 'Damage Per Swipe', value: '40 | 70 | 100 | 130 | 160' },
                { label: 'Damage Scaling', value: '30% Intelligence + 50% Strength' },
                { label: 'Bleed Damage', value: '3 | 6 | 9 | 12 | 15' },
                { label: 'Bleed Damage Scaling', value: '3% Intelligence + 5% Strength' },
                { label: 'Cone Angle', value: '120 degrees' }
              ]
            }
          ]
        },
        2: {
          name: 'Entangling Vines / Ferocious Roar',
          image: 'https://static.smite2.live/smite2/GODS/Artio/Abilities/Icons_Artio_A02A.webp',
          description: 'Artio has different abilities based on her current stance.\n\n[Druid] Entangling Vines: Artio creates a thicket of vines around herself that cripples enemy gods and decreases their Magical or Physical Power as long as they are in the area.\n• WHILE ENTANGLE IS ACTIVE, ALLIED GODS IN THE AREA WILL RAPIDLY GAIN A PHYSICAL DAMAGE SHIELD.\n\n[Bear] Ferocious Roar: Artio lets out a ferocious roar that Stuns all nearby enemies and increases her own Physical and Magical Protections for 4s.\n• FOR EACH TARGET HIT THAT IS BLEEDING, ARTIO WILL ALSO DEAL MAGICAL DAMAGE.\n• WHEN DAMAGE IS DONE THIS WAY, ARTIO WILL HEAL FOR UP TO 3 TARGETS HIT.',
          cooldown: '15s',
          cost: '40 | 45 | 50 | 55 | 60 (Bear) / 50 | 55 | 60 | 65 | 70 (Druid)',
          attributes: [],
          subAbilities: [
            {
              name: 'Entangling Vines',
              description: 'Artio creates a thicket of vines around herself that cripples enemy gods and decreases their Magical or Physical Power as long as they are in the area.\n• WHILE ENTANGLE IS ACTIVE, ALLIED GODS IN THE AREA WILL RAPIDLY GAIN A PHYSICAL DAMAGE SHIELD.',
              image: 'https://static.smite2.live/smite2/GODS/Artio/Abilities/Icons_Artio_A02A.webp',
              attributes: [
                { label: 'Power Debuff', value: '9% | 10.5% | 12% | 13.5% | 15%' },
                { label: 'Duration', value: '4s' },
                { label: 'Physical Shield Health', value: '5 | 8 | 11 | 14 | 16 Per Tick' },
                { label: 'Cost', value: '50 | 55 | 60 | 65 | 70' }
              ]
            },
            {
              name: 'Ferocious Roar',
              description: 'Artio lets out a ferocious roar that Stuns all nearby enemies and increases her own Physical and Magical Protections for 4s.\n• FOR EACH TARGET HIT THAT IS BLEEDING, ARTIO WILL ALSO DEAL MAGICAL DAMAGE.\n• WHEN DAMAGE IS DONE THIS WAY, ARTIO WILL HEAL FOR UP TO 3 TARGETS HIT.',
              image: 'https://static.smite2.live/smite2/GODS/Artio/Abilities/Icons_Artio_A02B.webp',
              attributes: [
                { label: 'Stun Duration', value: '1.0s | 1.1s | 1.2s | 1.3s | 1.4s' },
                { label: 'Damage (Bleeding Targets)', value: '70 | 105 | 140 | 175 | 210' },
                { label: 'Damage Scaling', value: '35% Intelligence + 60% Strength' },
                { label: 'Heal', value: '60 | 80 | 100 | 120 | 140 Per Bleeding Target' },
                { label: 'Radius', value: '3.2m' },
                { label: 'Cost', value: '40 | 45 | 50 | 55 | 60' }
              ]
            }
          ]
        },
        3: {
          name: 'Life Tap / Heavy Charge',
          image: 'https://static.smite2.live/smite2/GODS/Artio/Abilities/Icons_Artio_A03A.webp',
          description: 'Artio has different abilities based on her current stance.\n\n[Druid] Life Tap: Artio channels for 2s, draining the life from enemies in a line in front of her. While channeling she deals Magical Damage up to 5 times and heals herself up to 5 times. Each hit adds a stack of Slow to enemies. Enemies hit all 5 times are Rooted for 1s.\n\n[Bear] Heavy Charge: Artio charges forward at an increased movement speed. Enemies she charges through take damage and are Slowed for 2s.\n• ENEMIES HIT WILL START BLEEDING, DEALING MAGICAL DAMAGE OVER TIME.',
          cooldown: '15s',
          cost: '55',
          attributes: [],
          subAbilities: [
            {
              name: 'Life Tap',
              description: 'Artio channels for 2s, draining the life from enemies in a line in front of her.\n\n• While channeling she deals Magical Damage up to 5 times and heals herself up to 5 times.\n• Each hit adds a stack of Slow to enemies.\n• Enemies hit all 5 times are Rooted for 1s.',
              image: 'https://static.smite2.live/smite2/GODS/Artio/Abilities/Icons_Artio_A03A.webp',
              attributes: [
                { label: 'Damage Per Tick', value: '15 | 30 | 45 | 60 | 75' },
                { label: 'Damage Scaling', value: '15% Intelligence' },
                { label: 'Heal Per Tick', value: '10 | 15 | 20 | 25 | 30' },
                { label: 'Heal Scaling', value: '3% Intelligence' },
                { label: 'Range', value: '8.8m' },
                { label: 'Root Duration', value: '1s' }
              ]
            },
            {
              name: 'Heavy Charge',
              description: 'Artio charges forward at an increased movement speed. Enemies she charges through take damage and are Slowed for 2s.\n• ENEMIES HIT WILL START BLEEDING, DEALING MAGICAL DAMAGE OVER TIME.',
              image: 'https://static.smite2.live/smite2/GODS/Artio/Abilities/Icons_Artio_A03B.webp',
              attributes: [
                { label: 'Damage', value: '75 | 120 | 165 | 210 | 255' },
                { label: 'Damage Scaling', value: '55% Intelligence + 85% Strength' },
                { label: 'Bleed Damage', value: '3 | 6 | 9 | 12 | 15' },
                { label: 'Bleed Damage Scaling', value: '3% Intelligence + 5% Strength' },
                { label: 'Slow', value: '20%' },
                { label: 'Slow Duration', value: '2s' },
                { label: 'Movement Speed', value: '100%' },
                { label: 'Range', value: '12m' }
              ]
            }
          ]
        },
        4: {
          name: 'Shapeshift / Bearnado / Great Spirit Bear',
          image: 'https://static.smite2.live/smite2/GODS/Artio/Abilities/Icons_Artio_A04A.webp',
          description: 'Artio can only Shapeshift in the fountain. Her ultimate changes depending on her stance.\n\n[Fountain] Shapeshift: Artio Shapeshifts between her Druid stance and Bear stance.\n\n[Druid Ultimate] Bearnado: Artio summons three bear spirits, which charge in a circle around a center point. Dealing Magical Damage to all enemies they hit. The first time an enemy is hit, they are knocked towards the center. After the bears meet in the center, the smaller circle explodes, dealing Magical Damage to any enemies left inside.\n\n[Bear Ultimate] Great Spirit Bear: Artio summons a great bear spirit, which charges forward. Dealing Magical Damage and rooting all enemies in its path, as well as providing a shield and movement speed to all allies in its path.',
          cooldown: '10s / 70s',
          cost: '10 / 70 | 75 | 80 | 85 | 90 (Bearnado) / 50 | 60 | 70 | 80 | 90 (Spirit Bear)',
          attributes: [],
          subAbilities: [
            {
              name: 'Shapeshift',
              description: 'Artio Shapeshifts between her Druid stance and Bear stance.\n• CAN ONLY BE USED IN FOUNTAIN.\n\n• When Artio hits at least 1 enemy with an ability, she gains one stack of Invigoration. Granting her Movement Speed and Mana Regeneration.\n• Stacks last 6 seconds, and can stack up to 8 times.',
              image: 'https://static.smite2.live/smite2/GODS/Artio/Abilities/Icons_Artio_A04A.webp',
              attributes: [
                { label: 'Mana Regen', value: 'Per Stack' },
                { label: 'Movement Speed', value: '% Per Stack' },
                { label: 'Max Stacks', value: '8' },
                { label: 'Stack Duration', value: '6s' },
                { label: 'Cooldown', value: '10s' },
                { label: 'Cost', value: '10' }
              ]
            },
            {
              name: 'Bearnado',
              description: 'Artio summons three bear spirits, which charge in a circle around a center point. Dealing Magical Damage to all enemies they hit.\n• The first time an enemy is hit, they are knocked towards the center point of the circle.\n• After the bears meet in the center, the smaller circle explodes, dealing Magical Damage to any enemies left inside.',
              image: 'https://static.smite2.live/smite2/GODS/Artio/Abilities/Icons_Artio_A04A.webp',
              attributes: [
                { label: 'Bear Damage', value: '40 | 60 | 80 | 100 | 120' },
                { label: 'Bear Damage Scaling', value: '35% Strength' },
                { label: 'Center Damage', value: '120 | 180 | 240 | 300 | 360' },
                { label: 'Center Damage Scaling', value: '70% Strength' },
                { label: 'Range', value: '7.2m' },
                { label: 'Cooldown', value: '70s' },
                { label: 'Cost', value: '70 | 75 | 80 | 85 | 90' }
              ]
            },
            {
              name: 'Great Spirit Bear',
              description: 'Artio summons a great bear spirit, which charges forward. Dealing Magical Damage and rooting all enemies in its path, as well as providing a shield and movement speed to all allies in its path.',
              image: 'https://static.smite2.live/smite2/GODS/Artio/Abilities/Icons_Artio_A04B.webp',
              attributes: [
                { label: 'Damage', value: '300 | 400 | 500 | 600 | 700' },
                { label: 'Damage Scaling', value: '40% Intelligence' },
                { label: 'Root Duration', value: '1.0s | 1.25s | 1.5s | 1.75s | 2.0s' },
                { label: 'Shield Health', value: '150 | 250 | 350 | 450 | 550' },
                { label: 'Movement Speed', value: '20%' },
                { label: 'Buff Duration', value: '4s' },
                { label: 'Cooldown', value: '70s' },
                { label: 'Cost', value: '50 | 60 | 70 | 80 | 90' }
              ]
            }
          ]
        }
      }
    }
  ],
  recommendedBuilds: []
};