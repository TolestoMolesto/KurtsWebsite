import { God, DamageType } from '../../types';

export const THOR: God = {
  id: 'thor',
  name: 'Thor',
  title: 'God of Thunder',
  pantheon: 'Norse',
  role: 'Assassin',
  lanes: ['Jungle'],
  damageType: DamageType.Physical,
  image: '',
  videoGuideUrl: '',
  goodAgainst: [],
  badAgainst: [],
  levelingOrder: [],
  statsByLevel: [
    // Level 1
    { strength: 0, intelligence: 0, inhandPower: 44.4, baseAttackSpeed: 0.9672, attackSpeedPercent: 1.456, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 18.05, magicalProtection: 26.125, damageMitigation: 0, maxHealth: 591.375, healthRegen: 1.7, maxMana: 296, manaRegen: 2.25, cooldownRate: 0, movementSpeed: 365, xpRequirement: 0 },
    // Level 2
    { strength: 0, intelligence: 0, inhandPower: 46.8, baseAttackSpeed: 0.9672, attackSpeedPercent: 2.912, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 20.9, magicalProtection: 27.55, damageMitigation: 0, maxHealth: 683.99, healthRegen: 1.9, maxMana: 338, manaRegen: 2.5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 308 },
    // Level 3
    { strength: 0, intelligence: 0, inhandPower: 49.2, baseAttackSpeed: 0.9672, attackSpeedPercent: 4.368, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 23.75, magicalProtection: 28.975, damageMitigation: 0, maxHealth: 776.61, healthRegen: 2.1, maxMana: 380, manaRegen: 2.75, cooldownRate: 0, movementSpeed: 365, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 51.6, baseAttackSpeed: 0.9672, attackSpeedPercent: 5.824, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 26.6, magicalProtection: 30.4, damageMitigation: 0, maxHealth: 869.23, healthRegen: 2.3, maxMana: 422, manaRegen: 3, cooldownRate: 0, movementSpeed: 365, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 54, baseAttackSpeed: 0.9672, attackSpeedPercent: 7.28, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 29.45, magicalProtection: 31.825, damageMitigation: 0, maxHealth: 961.85, healthRegen: 2.5, maxMana: 464, manaRegen: 3.25, cooldownRate: 0, movementSpeed: 365, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 56.4, baseAttackSpeed: 0.9672, attackSpeedPercent: 8.736, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 32.3, magicalProtection: 33.25, damageMitigation: 0, maxHealth: 1054.47, healthRegen: 2.7, maxMana: 506, manaRegen: 3.5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 58.8, baseAttackSpeed: 0.9672, attackSpeedPercent: 10.192, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 35.15, magicalProtection: 34.675, damageMitigation: 0, maxHealth: 1147.09, healthRegen: 2.9, maxMana: 548, manaRegen: 3.75, cooldownRate: 0, movementSpeed: 365, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 61.2, baseAttackSpeed: 0.9672, attackSpeedPercent: 11.648, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 38, magicalProtection: 36.1, damageMitigation: 0, maxHealth: 1239.71, healthRegen: 3.1, maxMana: 590, manaRegen: 4, cooldownRate: 0, movementSpeed: 365, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 63.6, baseAttackSpeed: 0.9672, attackSpeedPercent: 13.104, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 40.85, magicalProtection: 37.525, damageMitigation: 0, maxHealth: 1332.33, healthRegen: 3.3, maxMana: 632, manaRegen: 4.25, cooldownRate: 0, movementSpeed: 365, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 66, baseAttackSpeed: 0.9672, attackSpeedPercent: 14.56, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 43.7, magicalProtection: 38.95, damageMitigation: 0, maxHealth: 1424.95, healthRegen: 3.5, maxMana: 674, manaRegen: 4.5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 68.4, baseAttackSpeed: 0.9672, attackSpeedPercent: 16.016, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 46.55, magicalProtection: 40.375, damageMitigation: 0, maxHealth: 1517.57, healthRegen: 3.7, maxMana: 716, manaRegen: 4.75, cooldownRate: 0, movementSpeed: 365, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 70.8, baseAttackSpeed: 0.9672, attackSpeedPercent: 17.472, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 49.4, magicalProtection: 41.8, damageMitigation: 0, maxHealth: 1610.19, healthRegen: 3.9, maxMana: 758, manaRegen: 5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 73.2, baseAttackSpeed: 0.9672, attackSpeedPercent: 18.928, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 52.25, magicalProtection: 43.225, damageMitigation: 0, maxHealth: 1702.81, healthRegen: 4.1, maxMana: 800, manaRegen: 5.25, cooldownRate: 0, movementSpeed: 365, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 75.6, baseAttackSpeed: 0.9672, attackSpeedPercent: 20.384, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 55.1, magicalProtection: 44.65, damageMitigation: 0, maxHealth: 1795.43, healthRegen: 4.3, maxMana: 842, manaRegen: 5.5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 78, baseAttackSpeed: 0.9672, attackSpeedPercent: 21.84, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 57.95, magicalProtection: 46.075, damageMitigation: 0, maxHealth: 1888.05, healthRegen: 4.5, maxMana: 884, manaRegen: 5.75, cooldownRate: 0, movementSpeed: 365, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 80.4, baseAttackSpeed: 0.9672, attackSpeedPercent: 23.296, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 60.8, magicalProtection: 47.5, damageMitigation: 0, maxHealth: 1980.67, healthRegen: 4.7, maxMana: 926, manaRegen: 6, cooldownRate: 0, movementSpeed: 365, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 82.8, baseAttackSpeed: 0.9672, attackSpeedPercent: 24.752, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 63.65, magicalProtection: 48.925, damageMitigation: 0, maxHealth: 2073.29, healthRegen: 4.9, maxMana: 968, manaRegen: 6.25, cooldownRate: 0, movementSpeed: 365, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 85.2, baseAttackSpeed: 0.9672, attackSpeedPercent: 26.208, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 66.5, magicalProtection: 50.35, damageMitigation: 0, maxHealth: 2165.91, healthRegen: 5.1, maxMana: 1010, manaRegen: 6.5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 87.6, baseAttackSpeed: 0.9672, attackSpeedPercent: 27.664, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 69.35, magicalProtection: 51.775, damageMitigation: 0, maxHealth: 2258.53, healthRegen: 5.3, maxMana: 1052, manaRegen: 6.75, cooldownRate: 0, movementSpeed: 365, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 90, baseAttackSpeed: 0.9672, attackSpeedPercent: 29.12, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 72.2, magicalProtection: 53.2, damageMitigation: 0, maxHealth: 2351.25, healthRegen: 5.5, maxMana: 1094, manaRegen: 7, cooldownRate: 0, movementSpeed: 365, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'Thor Basic Attack',
    image: '',
    description: 'Deal Physical Damage to an enemy in front of you.\n\nIf multiple enemies are in the area, the enemy closest to the center of the area will be hit.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
      { label: 'Range', value: '1.92m' },
      { label: 'Cone Angle', value: '120 degrees' }
    ]
  },
  passive: {
    name: "Warrior's Madness",
    image: '',
    description: "You gain Strength for each enemy god near you, up to 3. After using Berserker's Barrage or Anvil of Dawn, you gain Thunderstruck.\n\n• While Thunderstruck, Mjolnir deals bonus Physical Damage\n• Thunderstruck's damage can arc to up to 2 nearby enemies",
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Bonus Strength', value: '10 Per Stack' },
      { label: 'Damage', value: '1.25 Per Level + 4' },
      { label: 'Damage Scaling', value: '10% Strength' },
      { label: 'Range', value: '3.2m' },
      { label: 'Radius', value: '8.8m' }
    ]
  },
  abilities: {
    1: {
      name: "Mjolnir's Attunement",
      image: '',
      description: 'Throw Mjolnir forward, dealing Physical Damage to enemies as it travels. When it reaches max range it flies back to you.\n\n• Gods hit by Mjolnir returning to Thor take 200% damage. Minions take 100% damage\n• Reactivate while Mjolnir is traveling to teleport to and catch Mjolnir',
      cooldown: '14s',
      cost: '55 | 60 | 65 | 70 | 75',
      attributes: [
        { label: 'Damage', value: '50 | 95 | 140 | 185 | 230' },
        { label: 'Damage Scaling', value: '45% Strength' },
        { label: 'Range', value: '11.2m' },
        { label: 'Radius', value: '0.48m' }
      ]
    },
    2: {
      name: 'Tectonic Rift',
      image: '',
      description: 'Slam Mjolnir down creating a fissure, dealing Physical Damage to enemies as it erupts. Enemies hit are also Stunned.\n\n• The fissure blocks movement, but allows projectiles to pass through\n• Reactivate to bring the fissure down early',
      cooldown: '17 | 16.5 | 16 | 15.5 | 15s',
      cost: '60',
      attributes: [
        { label: 'Damage', value: '30 | 50 | 70 | 90 | 110' },
        { label: 'Damage Scaling', value: '30% Strength' },
        { label: 'Stun Duration', value: '1.2 | 1.25 | 1.3 | 1.35 | 1.4s' },
        { label: 'Range', value: '11.2m' }
      ]
    },
    3: {
      name: 'Berserker Barrage',
      image: '',
      description: 'Spin, dealing Physical Damage to enemies around you. You spin twice before unleashing a final cone attack that deals Physical Damage to enemies in front of you.\n\n• You are Displacement Immune while Channeling\n• Gain 3s of Thunderstruck, causing Mjolnir hits to arc and damage nearby enemies',
      cooldown: '12 | 11.5 | 11 | 10.5 | 10s',
      cost: '55 | 60 | 65 | 70 | 75',
      attributes: [
        { label: 'Spin Damage', value: '30 | 50 | 70 | 90 | 110' },
        { label: 'Spin Damage Scaling', value: '40% Strength' },
        { label: 'Cone Damage', value: '50 | 70 | 90 | 110 | 130' },
        { label: 'Cone Damage Scaling', value: '85% Strength' },
        { label: 'Cone Angle', value: '180 degrees' },
        { label: 'Radius', value: '3.2m' }
      ]
    },
    4: {
      name: 'Anvil of Dawn',
      image: '',
      description: 'Fly into the sky. Choose a location to land dealing Physical Damage to enemies upon landing. Enemies hit are Stunned.\n\n• You are CC Immune during this ability\n• You are Thunderstruck for 6s after landing, causing Mjolnir hits to arc and damage nearby enemies',
      cooldown: '110 | 105 | 100 | 95 | 90s',
      cost: '80 | 90 | 100 | 110 | 120',
      attributes: [
        { label: 'Damage', value: '100 | 165 | 230 | 295 | 360' },
        { label: 'Damage Scaling', value: '85% Strength' },
        { label: 'Stun Duration', value: '1.5s' },
        { label: 'Range', value: '32m' },
        { label: 'Radius', value: '3.2m' }
      ]
    }
  },
  aspects: [
    {
      id: 'thunderstruck',
      name: 'Aspect of Thunderstruck',
      image: '',
      description: "Thunderstruck is always active but chains for less damage. Triggering it 3 times on a god heals Thor, slowing and trembling them. Warrior's Madness grants Protections instead of Strength. Mjolnir's Attunement no longer deals bonus return damage, and abilities have less scaling.",
      basicAttack: {
        name: 'Thor Basic Attack',
        image: '',
        description: 'Deal Physical Damage to an enemy in front of you.\n\nIf multiple enemies are in the area, the enemy closest to the center of the area will be hit.',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
          { label: 'Range', value: '1.92m' },
          { label: 'Cone Angle', value: '120 degrees' }
        ]
      },
      passive: {
        name: "Warrior's Madness",
        image: '',
        description: "You gain Protections for each enemy god near you, up to 3. You always have Thunderstruck.\n\n• While Thunderstruck, Mjolnir deals bonus Physical Damage\n• Thunderstruck's damage can arc to up to 2 nearby enemies for less damage\n• Gods hit by Thunderstruck 3 times are Trembled and Slowed. You are Healed once per Thunderstruck chain",
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Bonus Protections', value: '8 Per Stack' },
          { label: 'Damage', value: '1.25 Per Level + 4' },
          { label: 'Damage Scaling', value: '10% Strength' },
          { label: 'Chain Damage', value: '0.625 Per Level + 2' },
          { label: 'Chain Damage Scaling', value: '5% Strength' },
          { label: 'Heal', value: '3% + 0.075% per Level Max Health' },
          { label: 'Decaying Slow', value: '30% over 1.5s' },
          { label: 'Range', value: '3.2m' },
          { label: 'Radius', value: '8.8m' }
        ]
      },
      abilities: {
        1: {
          name: "Mjolnir's Attunement",
          image: '',
          description: 'Throw Mjolnir forward, dealing Physical Damage to enemies as it travels. When it reaches max range it flies back to you.\n\n• NO LONGER DEALS BONUS RETURN DAMAGE\n• Reactivate while Mjolnir is traveling to teleport to and catch Mjolnir',
          cooldown: '14s',
          cost: '55 | 60 | 65 | 70 | 75',
          attributes: [
            { label: 'Damage', value: '50 | 95 | 140 | 185 | 230' },
            { label: 'Damage Scaling', value: '35% Strength' },
            { label: 'Range', value: '11.2m' },
            { label: 'Radius', value: '0.48m' }
          ]
        },
        2: {
          name: 'Tectonic Rift',
          image: '',
          description: 'Slam Mjolnir down creating a fissure, dealing Physical Damage to enemies as it erupts. Enemies hit are also Stunned.\n\n• The fissure blocks movement, but allows projectiles to pass through\n• Reactivate to bring the fissure down early\n• NO DAMAGE SCALING',
          cooldown: '17 | 16.5 | 16 | 15.5 | 15s',
          cost: '60',
          attributes: [
            { label: 'Damage', value: '30 | 50 | 70 | 90 | 110' },
            { label: 'Damage Scaling', value: '0% Strength' },
            { label: 'Stun Duration', value: '1.2 | 1.25 | 1.3 | 1.35 | 1.4s' },
            { label: 'Range', value: '11.2m' }
          ]
        },
        3: {
          name: 'Berserker Barrage',
          image: '',
          description: 'Spin, dealing Physical Damage to enemies around you. You spin twice before unleashing a final cone attack that deals Physical Damage to enemies in front of you.\n\n• You are Displacement Immune while Channeling\n• REDUCED SCALING',
          cooldown: '12 | 11.5 | 11 | 10.5 | 10s',
          cost: '55 | 60 | 65 | 70 | 75',
          attributes: [
            { label: 'Spin Damage', value: '30 | 50 | 70 | 90 | 110' },
            { label: 'Spin Damage Scaling', value: '35% Strength' },
            { label: 'Cone Damage', value: '50 | 70 | 90 | 110 | 130' },
            { label: 'Cone Damage Scaling', value: '70% Strength' },
            { label: 'Cone Angle', value: '180 degrees' },
            { label: 'Radius', value: '3.2m' }
          ]
        },
        4: {
          name: 'Anvil of Dawn',
          image: '',
          description: 'Fly into the sky. Choose a location to land dealing Physical Damage to enemies upon landing. Enemies hit are Stunned.\n\n• You are CC Immune during this ability',
          cooldown: '110 | 105 | 100 | 95 | 90s',
          cost: '80 | 90 | 100 | 110 | 120',
          attributes: [
            { label: 'Damage', value: '100 | 165 | 230 | 295 | 360' },
            { label: 'Damage Scaling', value: '85% Strength' },
            { label: 'Stun Duration', value: '1.5s' },
            { label: 'Range', value: '32m' },
            { label: 'Radius', value: '3.2m' }
          ]
        }
      }
    }
  ],
  recommendedBuilds: []
};