import { God, DamageType } from '../../types';

export const YEMOJA: God = {
  id: 'yemoja',
  name: 'Yemoja',
  title: 'Goddess of Rivers',
  pantheon: 'Yoruba',
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
    { strength: 0, intelligence: 0, inhandPower: 42.18, baseAttackSpeed: 0.9672, attackSpeedPercent: 1.33, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 20.52, magicalProtection: 29.7, damageMitigation: 0, maxHealth: 672.3, healthRegen: 1.768, maxMana: 296, manaRegen: 2.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 0 },
    // Level 2
    { strength: 0, intelligence: 0, inhandPower: 44.46, baseAttackSpeed: 0.9672, attackSpeedPercent: 2.66, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 23.76, magicalProtection: 31.32, damageMitigation: 0, maxHealth: 777.6, healthRegen: 1.976, maxMana: 338, manaRegen: 2.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 308 },
    // Level 3
    { strength: 0, intelligence: 0, inhandPower: 46.74, baseAttackSpeed: 0.9672, attackSpeedPercent: 3.99, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 27.0, magicalProtection: 32.94, damageMitigation: 0, maxHealth: 882.9, healthRegen: 2.184, maxMana: 380, manaRegen: 2.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 49.02, baseAttackSpeed: 0.9672, attackSpeedPercent: 5.32, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 30.24, magicalProtection: 34.56, damageMitigation: 0, maxHealth: 988.2, healthRegen: 2.392, maxMana: 422, manaRegen: 3.0, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 51.3, baseAttackSpeed: 0.9672, attackSpeedPercent: 6.65, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 33.48, magicalProtection: 36.18, damageMitigation: 0, maxHealth: 1093.5, healthRegen: 2.6, maxMana: 464, manaRegen: 3.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 53.58, baseAttackSpeed: 0.9672, attackSpeedPercent: 7.98, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 36.72, magicalProtection: 37.8, damageMitigation: 0, maxHealth: 1198.8, healthRegen: 2.808, maxMana: 506, manaRegen: 3.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 55.86, baseAttackSpeed: 0.9672, attackSpeedPercent: 9.31, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 39.96, magicalProtection: 39.42, damageMitigation: 0, maxHealth: 1304.1, healthRegen: 3.016, maxMana: 548, manaRegen: 3.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 58.14, baseAttackSpeed: 0.9672, attackSpeedPercent: 10.64, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 43.2, magicalProtection: 41.04, damageMitigation: 0, maxHealth: 1409.4, healthRegen: 3.224, maxMana: 590, manaRegen: 4.0, cooldownRate: 0, movementSpeed: 375, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 60.42, baseAttackSpeed: 0.9672, attackSpeedPercent: 11.97, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 46.44, magicalProtection: 42.66, damageMitigation: 0, maxHealth: 1514.7, healthRegen: 3.432, maxMana: 632, manaRegen: 4.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 62.7, baseAttackSpeed: 0.9672, attackSpeedPercent: 13.3, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 49.68, magicalProtection: 44.28, damageMitigation: 0, maxHealth: 1620.0, healthRegen: 3.64, maxMana: 674, manaRegen: 4.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 64.98, baseAttackSpeed: 0.9672, attackSpeedPercent: 14.63, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 52.92, magicalProtection: 45.9, damageMitigation: 0, maxHealth: 1725.3, healthRegen: 3.848, maxMana: 716, manaRegen: 4.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 67.26, baseAttackSpeed: 0.9672, attackSpeedPercent: 15.96, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 56.16, magicalProtection: 47.52, damageMitigation: 0, maxHealth: 1830.6, healthRegen: 4.056, maxMana: 758, manaRegen: 5.0, cooldownRate: 0, movementSpeed: 375, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 69.54, baseAttackSpeed: 0.9672, attackSpeedPercent: 17.29, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 59.4, magicalProtection: 49.14, damageMitigation: 0, maxHealth: 1935.9, healthRegen: 4.264, maxMana: 800, manaRegen: 5.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 71.82, baseAttackSpeed: 0.9672, attackSpeedPercent: 18.62, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 62.64, magicalProtection: 50.76, damageMitigation: 0, maxHealth: 2041.2, healthRegen: 4.472, maxMana: 842, manaRegen: 5.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 74.1, baseAttackSpeed: 0.9672, attackSpeedPercent: 19.95, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 65.88, magicalProtection: 52.38, damageMitigation: 0, maxHealth: 2146.5, healthRegen: 4.68, maxMana: 884, manaRegen: 5.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 76.38, baseAttackSpeed: 0.9672, attackSpeedPercent: 21.28, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 69.12, magicalProtection: 54.0, damageMitigation: 0, maxHealth: 2251.8, healthRegen: 4.888, maxMana: 926, manaRegen: 6.0, cooldownRate: 0, movementSpeed: 375, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 78.66, baseAttackSpeed: 0.9672, attackSpeedPercent: 22.61, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 72.36, magicalProtection: 55.62, damageMitigation: 0, maxHealth: 2357.1, healthRegen: 5.096, maxMana: 968, manaRegen: 6.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 80.94, baseAttackSpeed: 0.9672, attackSpeedPercent: 23.94, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 75.6, magicalProtection: 57.24, damageMitigation: 0, maxHealth: 2462.4, healthRegen: 5.304, maxMana: 1010, manaRegen: 6.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 83.22, baseAttackSpeed: 0.9672, attackSpeedPercent: 25.27, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 78.84, magicalProtection: 58.86, damageMitigation: 0, maxHealth: 2567.7, healthRegen: 5.512, maxMana: 1052, manaRegen: 6.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 85.5, baseAttackSpeed: 0.9672, attackSpeedPercent: 26.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 82.08, magicalProtection: 60.48, damageMitigation: 0, maxHealth: 2673.0, healthRegen: 5.72, maxMana: 1094, manaRegen: 7.0, cooldownRate: 0, movementSpeed: 375, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'Yemoja Basic Attack',
    image: '',
    description: 'Fire a projectile that deals Magical Damage to the first enemy hit.\n\n• Projectile stops on first target hit, and does not pass through walls.\n• Yemoja basic attacks can hit allies with an increased radius, applying Omi Healing.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
      { label: 'Range', value: '8.8m' },
      { label: 'Radius', value: '0.48m' },
      { label: 'Ally Radius', value: '0.8m' }
    ]
  },
  passive: {
    name: 'Omi',
    image: '',
    description: "Yemoja uses Omi to cast spells instead of Mana.\n• Starting with 7, earning up to 10\n\nYemoja's water based attacks and abilities can hit allies, providing them a Heal for 1 + 0.2 per Level every 0.5s for 6s.\n\n• Additional Omi is gained at levels 5, 10 and 15.\n• Cooldown Reduction increases Omi regeneration.",
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Starting Omi', value: '7' },
      { label: 'Max Omi', value: '10' },
      { label: 'Heal per Tick', value: '1 + 0.2 Per Level' },
      { label: 'Heal Interval', value: '0.5s' },
      { label: 'Heal Duration', value: '6s' }
    ]
  },
  abilities: {
    1: {
      name: 'Bouncing Bubble / Moonstrike',
      image: '',
      description: 'Toss a bubble that bounces twice, dealing Magical Damage and Slows enemies before exploding into smaller bubbles.\n• Small bubbles deal reduced Magical Damage\n• Enemies take reduced damage if hit by both large bubbles.\n• Allies hit will also gain Omi Healing.\n• This ability changes to Moonstrike when used.',
      cooldown: '0s (Omi)',
      cost: '2',
      attributes: [
        { label: 'Damage', value: '56 | 98 | 140 | 182 | 224' },
        { label: 'Damage Scaling', value: '30% Intelligence' },
        { label: 'Small Bubble Damage', value: '28 | 49 | 70 | 91 | 112' },
        { label: 'Small Bubble Scaling', value: '15% Intelligence' },
        { label: 'Slow', value: '30%' },
        { label: 'Slow Duration', value: '1.4s' },
        { label: 'Range', value: '5.6m' },
        { label: 'Radius', value: '2.24m' },
        { label: 'Small Radius', value: '1m' }
      ],
      subAbilities: [
        {
          name: 'Moonstrike',
          description: 'The Moon strikes multiple times at a location dealing Magical Damage before a final strike dealing Magical Damage and Stunning enemies hit for 1s.\n• Allies in the final strike have their Omi Healing replaced with a buff providing increased Attack Speed and Basic Attack Damage.\n• Enemy structures hit by the final strike are stunned for 2s.\n• This ability changes to Bouncing Bubble when used.',
          image: '',
          attributes: [
            { label: 'Damage Per Strike', value: '30 | 60 | 90 | 120 | 150' },
            { label: 'Damage Per Strike Scaling', value: '20% Intelligence' },
            { label: 'Final Damage', value: '65 | 105 | 145 | 185 | 225' },
            { label: 'Final Damage Scaling', value: '40% Intelligence' },
            { label: 'Stun Duration', value: '1s' },
            { label: 'Attack Speed Buff', value: '30%' },
            { label: 'Basic Attack Damage Buff', value: '20 | 25 | 30 | 35 | 40' },
            { label: 'Buff Duration', value: '4s' },
            { label: 'Range', value: '10.4m' },
            { label: 'Outer Radius', value: '1.6m' },
            { label: 'Inner Radius', value: '2.4m' }
          ]
        }
      ]
    },
    2: {
      name: 'Mending Waters',
      image: '',
      description: 'Fire a water wave, dealing Magical Damage to enemies. This wave stops and bounces between allied gods, Healing them and providing them a Health Shield.\n• This ability also does bonus damage to enemy Health Shields.\n• Projectile stops on walls or first allied god hit.\n• Allies hit will also gain Omi Healing.',
      cooldown: '0s (Omi)',
      cost: '3',
      attributes: [
        { label: 'Damage', value: '65 | 95 | 125 | 155 | 185' },
        { label: 'Damage Scaling', value: '50% Intelligence' },
        { label: 'Heal', value: '15 | 25 | 35 | 45 | 55' },
        { label: 'Shield', value: '40 | 65 | 90 | 115 | 140' },
        { label: 'Shield Scaling', value: '4% Max Health' },
        { label: 'Bonus Shield Damage Multiplier', value: '2x | 2x | 2x | 2x | 3x' },
        { label: 'Range', value: '9.6m' },
        { label: 'Radius', value: '1.12m' }
      ]
    },
    3: {
      name: 'Riptide',
      image: '',
      description: 'Create a water ring that Knock Backs anyone entering it.\n• Allies travel further and gain Movement Speed and Protections for 3s.\n• Enemies are Slowed for 2s.\n• Placing the ring at the maximum distance reverses its direction.\n• Allies that use the ring also gain Omi Healing.',
      cooldown: '0s (Omi)',
      cost: '3',
      attributes: [
        { label: 'Movement Speed Buff', value: '10% | 12.5% | 15% | 17.5% | 20%' },
        { label: 'Protections Buff', value: '20 | 25 | 30 | 35 | 40' },
        { label: 'Buff Duration', value: '3s' },
        { label: 'Slow', value: '10%' },
        { label: 'Slow Duration', value: '2s' },
        { label: 'Range', value: '9.6m' },
        { label: 'Radius', value: '2.24m' }
      ]
    },
    4: {
      name: "River's Rebuke",
      image: '',
      description: "Conjure two large walls of water that block enemy movement and projectiles. After a delay they crash down dealing Magical Damage, Trembling and Slowing enemies hit.\n• Allies impacted by the crashing waves gain Omi Healing and Moonstrike's buff.\n• You gain a buff of increased Omi over time on using this ability.\n• Enemies are slowed by 60%, decreasing to normal over 2s.\n• You gain half of your missing Omi immediately but the duration of the regeneration buff is decreased based on the amount restored.",
      cooldown: '120s',
      cost: '-',
      attributes: [
        { label: 'Damage', value: '250 | 320 | 390 | 460 | 530' },
        { label: 'Damage Scaling', value: '70% Intelligence' },
        { label: 'Slow', value: '60% (decaying)' },
        { label: 'Slow Duration', value: '2s' },
        { label: 'Range', value: '15m' },
        { label: 'Radius', value: '4.5m' }
      ]
    }
  },
  aspects: [
    {
      id: 'downpour',
      name: 'Aspect of Downpour',
      image: '',
      description: "Yemoja's abilities have higher Intelligence Scaling. Mending Waters no longer affects allies but stops and bounces on enemy gods, dealing damage, shield damage, and grants Intelligence per hit. Moonstrike no longer stuns.",
      basicAttack: {
        name: 'Yemoja Basic Attack',
        image: '',
        description: 'Fire a projectile that deals Magical Damage to the first enemy hit.\n\n• Projectile stops on first target hit, and does not pass through walls.\n• Yemoja basic attacks can hit allies with an increased radius, applying Omi Healing.',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
          { label: 'Range', value: '8.8m' },
          { label: 'Radius', value: '0.48m' },
          { label: 'Ally Radius', value: '0.8m' }
        ]
      },
      passive: {
        name: 'Omi',
        image: '',
        description: "Yemoja uses Omi to cast spells instead of Mana.\n• Starting with 7, earning up to 10\n\nYemoja's water based attacks and abilities can hit allies, providing them a Heal for 1 + 0.2 per Level every 0.5s for 6s.\n\n• Additional Omi is gained at levels 5, 10 and 15.\n• Cooldown Reduction increases Omi regeneration.",
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Starting Omi', value: '7' },
          { label: 'Max Omi', value: '10' },
          { label: 'Heal per Tick', value: '1 + 0.2 Per Level' },
          { label: 'Heal Interval', value: '0.5s' },
          { label: 'Heal Duration', value: '6s' }
        ]
      },
      abilities: {
        1: {
          name: 'Bouncing Bubble / Moonstrike',
          image: '',
          description: 'Toss a bubble that bounces twice, dealing Magical Damage and Slows enemies before exploding into smaller bubbles.\n• Small bubbles deal reduced Magical Damage\n• Enemies take reduced damage if hit by both large bubbles.\n• Allies hit will also gain Omi Healing.\n• This ability changes to Moonstrike when used.\n• INCREASED INTELLIGENCE SCALING',
          cooldown: '0s (Omi)',
          cost: '2',
          attributes: [
            { label: 'Damage', value: '65 | 105 | 145 | 185 | 225' },
            { label: 'Damage Scaling', value: '50% Intelligence' },
            { label: 'Small Bubble Damage', value: '32.5 | 52.5 | 72.5 | 92.5 | 112.5' },
            { label: 'Small Bubble Scaling', value: '25% Intelligence' },
            { label: 'Slow', value: '30%' },
            { label: 'Slow Duration', value: '1.4s' },
            { label: 'Range', value: '5.6m' },
            { label: 'Radius', value: '2.24m' },
            { label: 'Small Radius', value: '1m' }
          ],
          subAbilities: [
            {
              name: 'Moonstrike',
              description: 'The Moon strikes multiple times at a location dealing Magical Damage before a final strike dealing Magical Damage.\n• NO LONGER STUNS\n• Allies in the final strike have their Omi Healing replaced with a buff providing increased Attack Speed and Basic Attack Damage.\n• INCREASED INTELLIGENCE SCALING\n• This ability changes to Bouncing Bubble when used.',
              image: '',
              attributes: [
                { label: 'Damage Per Strike', value: '30 | 60 | 90 | 120 | 150' },
                { label: 'Damage Per Strike Scaling', value: '20% Intelligence' },
                { label: 'Final Damage', value: '65 | 105 | 145 | 185 | 225' },
                { label: 'Final Damage Scaling', value: '85% Intelligence' },
                { label: 'Attack Speed Buff', value: '30%' },
                { label: 'Basic Attack Damage Buff', value: '20 | 25 | 30 | 35 | 40' },
                { label: 'Buff Duration', value: '4s' },
                { label: 'Range', value: '10.4m' },
                { label: 'Outer Radius', value: '1.6m' },
                { label: 'Inner Radius', value: '2.4m' }
              ]
            }
          ]
        },
        2: {
          name: 'Mending Waters',
          image: '',
          description: 'Fire a water wave, dealing Magical Damage to enemies. This wave stops and bounces between ENEMY gods.\n• Each time an enemy god is hit, Yemoja gains a stacking Intelligence buff for a short duration.\n• The first hit does full damage while subsequent hits deal 65%.\n• This ability also does bonus damage to enemy Health Shields.\n• Projectile stops on walls or first enemy god hit.\n• This ability can bounce to the same god once and hit the same target twice.\n• NO LONGER AFFECTS ALLIES',
          cooldown: '0s (Omi)',
          cost: '3',
          attributes: [
            { label: 'Damage', value: '65 | 95 | 125 | 155 | 185' },
            { label: 'Damage Scaling', value: '50% Intelligence' },
            { label: 'Subsequent Hit Damage', value: '65%' },
            { label: 'Intelligence Per Stack', value: '6 | 7 | 8 | 9 | 10' },
            { label: 'Max Stacks', value: '6' },
            { label: 'Buff Duration', value: '10s' },
            { label: 'Range', value: '9.6m' },
            { label: 'Radius', value: '1.12m' }
          ]
        },
        3: {
          name: 'Riptide',
          image: '',
          description: 'Create a water ring that Knock Backs anyone entering it.\n• Allies travel further and gain Movement Speed and Protections for 3s.\n• Enemies are Slowed for 2s.\n• Placing the ring at the maximum distance reverses its direction.\n• Allies that use the ring also gain Omi Healing.',
          cooldown: '0s (Omi)',
          cost: '3',
          attributes: [
            { label: 'Movement Speed Buff', value: '10% | 12.5% | 15% | 17.5% | 20%' },
            { label: 'Protections Buff', value: '20 | 25 | 30 | 35 | 40' },
            { label: 'Buff Duration', value: '3s' },
            { label: 'Slow', value: '10%' },
            { label: 'Slow Duration', value: '2s' },
            { label: 'Range', value: '9.6m' },
            { label: 'Radius', value: '2.24m' }
          ]
        },
        4: {
          name: "River's Rebuke",
          image: '',
          description: "Conjure two large walls of water that block enemy movement and projectiles. After a delay they crash down dealing Magical Damage, Trembling and Slowing enemies hit.\n• Allies impacted by the crashing waves gain Omi Healing and Moonstrike's buff.\n• You gain a buff of increased Omi over time on using this ability.\n• Enemies are slowed by 60%, decreasing to normal over 2s.\n• You gain half of your missing Omi immediately but the duration of the regeneration buff is decreased based on the amount restored.\n• INCREASED INTELLIGENCE SCALING",
          cooldown: '120s',
          cost: '-',
          attributes: [
            { label: 'Damage', value: '250 | 320 | 390 | 460 | 530' },
            { label: 'Damage Scaling', value: '85% Intelligence' },
            { label: 'Slow', value: '60% (decaying)' },
            { label: 'Slow Duration', value: '2s' },
            { label: 'Range', value: '15m' },
            { label: 'Radius', value: '4.5m' }
          ]
        }
      }
    }
  ],
  recommendedBuilds: []
};