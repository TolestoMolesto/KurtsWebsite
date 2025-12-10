import { God, DamageType } from '../../types';

export const HADES: God = {
  id: 'hades',
  name: 'Hades',
  title: 'King of the Underworld',
  pantheon: 'Greek',
  role: 'Mage',
  lanes: ['Solo', 'Mid'],
  damageType: DamageType.Magical,
  image: '',
  videoGuideUrl: '',
  goodAgainst: [],
  badAgainst: [],
  levelingOrder: [],
  statsByLevel: [
    // Level 1
    { strength: 0, intelligence: 0, inhandPower: 42, baseAttackSpeed: 0.93, attackSpeedPercent: 1.4, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 18.2, magicalProtection: 28.5, damageMitigation: 0, maxHealth: 647.4, healthRegen: 1.7, maxMana: 308, manaRegen: 2.34, cooldownRate: 0, movementSpeed: 365, xpRequirement: 0 },
    // Level 2
    { strength: 0, intelligence: 0, inhandPower: 44, baseAttackSpeed: 0.93, attackSpeedPercent: 2.8, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 21.2, magicalProtection: 30, damageMitigation: 0, maxHealth: 748.8, healthRegen: 1.9, maxMana: 352, manaRegen: 2.6, cooldownRate: 0, movementSpeed: 365, xpRequirement: 308 },
    // Level 3
    { strength: 0, intelligence: 0, inhandPower: 47, baseAttackSpeed: 0.93, attackSpeedPercent: 4.2, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 24.2, magicalProtection: 31.5, damageMitigation: 0, maxHealth: 850.2, healthRegen: 2.1, maxMana: 395, manaRegen: 2.86, cooldownRate: 0, movementSpeed: 365, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 49, baseAttackSpeed: 0.93, attackSpeedPercent: 5.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 27.2, magicalProtection: 33, damageMitigation: 0, maxHealth: 951.6, healthRegen: 2.3, maxMana: 439, manaRegen: 3.12, cooldownRate: 0, movementSpeed: 365, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 51, baseAttackSpeed: 0.93, attackSpeedPercent: 7, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 30.2, magicalProtection: 34.5, damageMitigation: 0, maxHealth: 1053, healthRegen: 2.5, maxMana: 483, manaRegen: 3.38, cooldownRate: 0, movementSpeed: 365, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 54, baseAttackSpeed: 0.93, attackSpeedPercent: 8.4, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 33.2, magicalProtection: 36, damageMitigation: 0, maxHealth: 1154.4, healthRegen: 2.7, maxMana: 526, manaRegen: 3.64, cooldownRate: 0, movementSpeed: 365, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 56, baseAttackSpeed: 0.93, attackSpeedPercent: 9.8, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 36.2, magicalProtection: 37.5, damageMitigation: 0, maxHealth: 1255.8, healthRegen: 2.9, maxMana: 570, manaRegen: 3.9, cooldownRate: 0, movementSpeed: 365, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 58, baseAttackSpeed: 0.93, attackSpeedPercent: 11.2, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 39.2, magicalProtection: 39, damageMitigation: 0, maxHealth: 1357.2, healthRegen: 3.1, maxMana: 614, manaRegen: 4.16, cooldownRate: 0, movementSpeed: 365, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 60, baseAttackSpeed: 0.93, attackSpeedPercent: 12.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 42.2, magicalProtection: 40.5, damageMitigation: 0, maxHealth: 1458.6, healthRegen: 3.3, maxMana: 657, manaRegen: 4.42, cooldownRate: 0, movementSpeed: 365, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 63, baseAttackSpeed: 0.93, attackSpeedPercent: 14, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 45.2, magicalProtection: 42, damageMitigation: 0, maxHealth: 1560, healthRegen: 3.5, maxMana: 701, manaRegen: 4.68, cooldownRate: 0, movementSpeed: 365, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 65, baseAttackSpeed: 0.93, attackSpeedPercent: 15.4, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 48.2, magicalProtection: 43.5, damageMitigation: 0, maxHealth: 1661.4, healthRegen: 3.7, maxMana: 745, manaRegen: 4.94, cooldownRate: 0, movementSpeed: 365, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 67, baseAttackSpeed: 0.93, attackSpeedPercent: 16.8, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 51.2, magicalProtection: 45, damageMitigation: 0, maxHealth: 1762.8, healthRegen: 3.9, maxMana: 788, manaRegen: 5.2, cooldownRate: 0, movementSpeed: 365, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 70, baseAttackSpeed: 0.93, attackSpeedPercent: 18.2, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 54.2, magicalProtection: 46.5, damageMitigation: 0, maxHealth: 1864.2, healthRegen: 4.1, maxMana: 832, manaRegen: 5.46, cooldownRate: 0, movementSpeed: 365, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 72, baseAttackSpeed: 0.93, attackSpeedPercent: 19.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 57.2, magicalProtection: 48, damageMitigation: 0, maxHealth: 1965.6, healthRegen: 4.3, maxMana: 876, manaRegen: 5.72, cooldownRate: 0, movementSpeed: 365, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 74, baseAttackSpeed: 0.93, attackSpeedPercent: 21, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 60.2, magicalProtection: 49.5, damageMitigation: 0, maxHealth: 2067, healthRegen: 4.5, maxMana: 919, manaRegen: 5.98, cooldownRate: 0, movementSpeed: 365, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 76, baseAttackSpeed: 0.93, attackSpeedPercent: 22.4, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 63.2, magicalProtection: 51, damageMitigation: 0, maxHealth: 2168.4, healthRegen: 4.7, maxMana: 963, manaRegen: 6.24, cooldownRate: 0, movementSpeed: 365, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 79, baseAttackSpeed: 0.93, attackSpeedPercent: 23.8, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 66.2, magicalProtection: 52.5, damageMitigation: 0, maxHealth: 2269.8, healthRegen: 4.9, maxMana: 1007, manaRegen: 6.5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 81, baseAttackSpeed: 0.93, attackSpeedPercent: 25.2, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 69.2, magicalProtection: 54, damageMitigation: 0, maxHealth: 2371.2, healthRegen: 5.1, maxMana: 1050, manaRegen: 6.76, cooldownRate: 0, movementSpeed: 365, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 83, baseAttackSpeed: 0.93, attackSpeedPercent: 26.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 72.2, magicalProtection: 55.5, damageMitigation: 0, maxHealth: 2472.6, healthRegen: 5.3, maxMana: 1094, manaRegen: 7.02, cooldownRate: 0, movementSpeed: 365, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 86, baseAttackSpeed: 0.93, attackSpeedPercent: 28, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 75.2, magicalProtection: 57, damageMitigation: 0, maxHealth: 2574, healthRegen: 5.5, maxMana: 1138, manaRegen: 7.28, cooldownRate: 0, movementSpeed: 365, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'Hades Basic Attack',
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
    name: 'Blight',
    image: '',
    description: 'Your attacks and abilities apply Blight.\n\n• Blighted enemies have reduced Strength and Intelligence\n• Your abilities have extra effects on Blighted enemies',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Strength Reduction', value: '5%' },
      { label: 'Intelligence Reduction', value: '5%' },
      { label: 'Debuff Duration', value: '8s' }
    ]
  },
  abilities: {
    1: {
      name: 'Death From Below',
      image: '',
      description: 'Leap through the underworld, then emerge and deal Magical Damage to enemies.\n\n• Blighted enemies are Slowed',
      cooldown: '14 | 13.5 | 13 | 12.5 | 12s',
      cost: '50 | 55 | 60 | 65 | 70',
      attributes: [
        { label: 'Damage', value: '70 | 115 | 160 | 205 | 250' },
        { label: 'Damage Scaling', value: '85% Intelligence' },
        { label: 'Slow (Blighted)', value: '20 | 25 | 30 | 35 | 40%' },
        { label: 'Slow Duration', value: '2s' },
        { label: 'Range', value: '8.8m' },
        { label: 'Radius', value: '3.2m' }
      ]
    },
    2: {
      name: 'Shroud of Darkness',
      image: '',
      description: 'Silence enemies in front of you.\n\n• Blighted enemies are also Feared\n\nEnemies are feared away from Hades. Silence and Fear durations scale with Item Protections (0.2s per 100 Item Protections, stacking up to 2 times).',
      cooldown: '14 | 13 | 12 | 11 | 10s',
      cost: '60',
      attributes: [
        { label: 'Silence Duration', value: '0.75 | 0.85 | 0.95 | 1.05 | 1.15s' },
        { label: 'Fear Duration (Blighted)', value: '0.75 | 0.85 | 0.95 | 1.05 | 1.15s' },
        { label: 'Duration Scaling', value: '0.2s per 100 Item Protections (max 2 stacks)' },
        { label: 'Range', value: '5.6m' },
        { label: 'Cone Angle', value: '110 degrees' }
      ]
    },
    3: {
      name: 'Devour Souls',
      image: '',
      description: 'Devour the souls of your enemies, dealing Magical Damage to enemies around you.\n\n• Blighted enemies Detonate when hit, dealing additional Magical Damage to them and enemies around them\n• Each Detonation also Heals you and nearby allies\n\nEnemies take reduced damage if hit by multiple explosions. Blight explosions can chain, detonating blighted enemies not in the original detonate area. Hades heals immediately. Allies within 10.4m have a homing projectile sent towards them that heals on arrival.',
      cooldown: '10 | 9.5 | 9 | 8.5 | 8s',
      cost: '60 | 65 | 70 | 75 | 80',
      attributes: [
        { label: 'Damage', value: '70 | 105 | 140 | 175 | 210' },
        { label: 'Damage Scaling', value: '75% Intelligence' },
        { label: 'Detonate Damage (Blighted)', value: '10 | 25 | 40 | 55 | 70' },
        { label: 'Detonate Damage Scaling', value: '45% Intelligence' },
        { label: 'Heal Per Detonation', value: '10 | 19 | 28 | 37 | 46' },
        { label: 'Heal Scaling', value: '3.5% Physical Prot + 3.5% Magical Prot + 3.5% Intelligence' },
        { label: 'Radius', value: '3.2m' }
      ]
    },
    4: {
      name: 'Pillar of Agony',
      image: '',
      description: 'Channel a Vortex around you that drags foes to their death, and repeatedly deals Magical Damage.\n\n• You may use one other ability while Channeling\n• Blighted enemies have their Protections reduced\n• You are CC Immune, and gain Increased Protections while Channelling\n\nVortexes slow targets moving away from the vortex source, or speed up targets moving toward it. This Vortex increases in intensity as the channel time progresses. Channel time is 4 seconds. Hits 8 times. You are Rooted while Channeling.',
      cooldown: '90s',
      cost: '100',
      attributes: [
        { label: 'Damage Per Tick', value: '40 | 55 | 70 | 85 | 100' },
        { label: 'Damage Scaling Per Tick', value: '25% Intelligence' },
        { label: 'Total Damage (8 Ticks)', value: '320 | 440 | 560 | 680 | 800' },
        { label: 'Total Scaling (8 Ticks)', value: '200% Intelligence' },
        { label: 'Protection Buff', value: '30 | 50 | 70 | 90 | 110 + 10% Item Protections' },
        { label: 'Protection Reduction (Blighted)', value: '10 | 13 | 16 | 19 | 22 + 10%' },
        { label: 'Debuff Duration', value: '4s' },
        { label: 'Channel Duration', value: '4s' },
        { label: 'Radius', value: '4.8m' }
      ]
    }
  },
  aspects: [],
  recommendedBuilds: []
};