import { God, DamageType } from '../../types';

export const CABRAKAN: God = {
  id: 'cabrakan',
  name: 'Cabrakan',
  title: 'Destroyer of Mountains',
  pantheon: 'Mayan',
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
    { strength: 0, intelligence: 0, inhandPower: 42.18, baseAttackSpeed: 0.9672, attackSpeedPercent: 1.33, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 19.76, magicalProtection: 28.6, damageMitigation: 0, maxHealth: 647.4, healthRegen: 1.768, maxMana: 296, manaRegen: 2.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 0 },
    // Level 2
    { strength: 0, intelligence: 0, inhandPower: 44.46, baseAttackSpeed: 0.9672, attackSpeedPercent: 2.66, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 22.88, magicalProtection: 30.16, damageMitigation: 0, maxHealth: 748.8, healthRegen: 1.976, maxMana: 338, manaRegen: 2.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 308 },
    // Level 3
    { strength: 0, intelligence: 0, inhandPower: 46.74, baseAttackSpeed: 0.9672, attackSpeedPercent: 3.99, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 26.0, magicalProtection: 31.72, damageMitigation: 0, maxHealth: 850.2, healthRegen: 2.184, maxMana: 380, manaRegen: 2.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 49.02, baseAttackSpeed: 0.9672, attackSpeedPercent: 5.32, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 29.12, magicalProtection: 33.28, damageMitigation: 0, maxHealth: 951.6, healthRegen: 2.392, maxMana: 422, manaRegen: 3, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 51.3, baseAttackSpeed: 0.9672, attackSpeedPercent: 6.65, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 32.24, magicalProtection: 34.84, damageMitigation: 0, maxHealth: 1053, healthRegen: 2.6, maxMana: 464, manaRegen: 3.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 53.58, baseAttackSpeed: 0.9672, attackSpeedPercent: 7.98, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 35.36, magicalProtection: 36.4, damageMitigation: 0, maxHealth: 1154.4, healthRegen: 2.808, maxMana: 506, manaRegen: 3.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 55.86, baseAttackSpeed: 0.9672, attackSpeedPercent: 9.31, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 38.48, magicalProtection: 37.96, damageMitigation: 0, maxHealth: 1255.8, healthRegen: 3.016, maxMana: 548, manaRegen: 3.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 58.14, baseAttackSpeed: 0.9672, attackSpeedPercent: 10.64, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 41.6, magicalProtection: 39.52, damageMitigation: 0, maxHealth: 1357.2, healthRegen: 3.224, maxMana: 590, manaRegen: 4, cooldownRate: 0, movementSpeed: 375, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 60.42, baseAttackSpeed: 0.9672, attackSpeedPercent: 11.97, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 44.72, magicalProtection: 41.08, damageMitigation: 0, maxHealth: 1458.6, healthRegen: 3.432, maxMana: 632, manaRegen: 4.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 62.7, baseAttackSpeed: 0.9672, attackSpeedPercent: 13.3, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 47.84, magicalProtection: 42.64, damageMitigation: 0, maxHealth: 1560, healthRegen: 3.64, maxMana: 674, manaRegen: 4.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 64.98, baseAttackSpeed: 0.9672, attackSpeedPercent: 14.63, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 50.96, magicalProtection: 44.2, damageMitigation: 0, maxHealth: 1661.4, healthRegen: 3.848, maxMana: 716, manaRegen: 4.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 67.26, baseAttackSpeed: 0.9672, attackSpeedPercent: 15.96, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 54.08, magicalProtection: 45.76, damageMitigation: 0, maxHealth: 1762.8, healthRegen: 4.056, maxMana: 758, manaRegen: 5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 69.54, baseAttackSpeed: 0.9672, attackSpeedPercent: 17.29, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 57.2, magicalProtection: 47.32, damageMitigation: 0, maxHealth: 1864.2, healthRegen: 4.264, maxMana: 800, manaRegen: 5.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 71.82, baseAttackSpeed: 0.9672, attackSpeedPercent: 18.62, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 60.32, magicalProtection: 48.88, damageMitigation: 0, maxHealth: 1965.6, healthRegen: 4.472, maxMana: 842, manaRegen: 5.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 74.1, baseAttackSpeed: 0.9672, attackSpeedPercent: 19.95, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 63.44, magicalProtection: 50.44, damageMitigation: 0, maxHealth: 2067, healthRegen: 4.68, maxMana: 884, manaRegen: 5.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 76.38, baseAttackSpeed: 0.9672, attackSpeedPercent: 21.28, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 66.56, magicalProtection: 52, damageMitigation: 0, maxHealth: 2168.4, healthRegen: 4.888, maxMana: 926, manaRegen: 6, cooldownRate: 0, movementSpeed: 375, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 78.66, baseAttackSpeed: 0.9672, attackSpeedPercent: 22.61, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 69.68, magicalProtection: 53.56, damageMitigation: 0, maxHealth: 2269.8, healthRegen: 5.096, maxMana: 968, manaRegen: 6.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 80.94, baseAttackSpeed: 0.9672, attackSpeedPercent: 23.94, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 72.8, magicalProtection: 55.12, damageMitigation: 0, maxHealth: 2371.2, healthRegen: 5.304, maxMana: 1010, manaRegen: 6.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 83.22, baseAttackSpeed: 0.9672, attackSpeedPercent: 25.27, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 75.92, magicalProtection: 56.68, damageMitigation: 0, maxHealth: 2472.6, healthRegen: 5.512, maxMana: 1052, manaRegen: 6.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 85.5, baseAttackSpeed: 0.9672, attackSpeedPercent: 26.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 79.04, magicalProtection: 58.24, damageMitigation: 0, maxHealth: 2574, healthRegen: 5.72, maxMana: 1094, manaRegen: 7, cooldownRate: 0, movementSpeed: 375, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'Cabrakan Basic Attack',
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
    name: 'Shadow Zone',
    image: '',
    description: 'You and nearby allies take reduced damage. Deal increased damage to enemies that damage you or your nearby allies.\n\n• The aura provides Cabrakan 1% additional Mitigations for every 100 Protections from Items he has.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage Mitigation', value: '4%' },
      { label: 'Damage Increase', value: '3%' },
      { label: 'Debuff Duration', value: '4s' },
      { label: 'Radius', value: '4.8m' }
    ]
  },
  abilities: {
    1: {
      name: 'Seismic Crush',
      image: '',
      description: 'Become enraged, increasing your Movement Speed and Attack Speed. While active, your next successful Basic Attack will Stun and deal bonus Magical Damage.\n\n• Gain Haste and Immunity to Slows and Roots while this effect is active.\n• Stun duration ignores Diminishing Returns.',
      cooldown: '14 | 13.5 | 13 | 12.5 | 12s',
      cost: '50 | 55 | 60 | 65 | 70',
      attributes: [
        { label: 'Damage', value: '80 | 125 | 170 | 215 | 260' },
        { label: 'Damage Scaling', value: '45% Intelligence + 75% Strength' },
        { label: 'Movement Speed', value: '15 | 20 | 25 | 30 | 35%' },
        { label: 'Attack Speed', value: '70%' },
        { label: 'Stun Duration', value: '0.8s' },
        { label: 'Buff Duration', value: '5s' }
      ]
    },
    2: {
      name: 'Refraction Shield',
      image: '',
      description: 'Clash your shields, unleashing a concussive blast that deals Magical Damage. Taking damage charges your shields, granting Protections.\n\n• At Max Stacks, gain access to Enhanced Refraction Shield on a separate cooldown.\n• Enhanced Refraction Shield\'s concussive blast deals Magical Damage and Stuns enemies.\n• Restores Mana per enemy hit by Refraction Shield, or Health per enemy hit by Enhanced Refraction Shield.\n• Cannot gain access to Enhanced Refraction Shield when it is on cooldown.',
      cooldown: '12s',
      cost: '50 | 55 | 60 | 65 | 70',
      attributes: [
        { label: 'Damage', value: '70 | 110 | 150 | 190 | 230' },
        { label: 'Damage Scaling', value: '55% Intelligence' },
        { label: 'Protections Per Stack', value: '5 | 6 | 7 | 8 | 9' },
        { label: 'Max Stacks', value: '5' },
        { label: 'Buff Duration', value: '8s' },
        { label: 'Mana Restore', value: '10 | 14 | 18 | 22 | 26' },
        { label: 'Cone Angle', value: '120 degrees' },
        { label: 'Range', value: '3.2m' }
      ],
      subAbilities: [
        {
          name: 'Enhanced Refraction Shield',
          description: 'At Max Stacks, unleash an enhanced concussive blast that deals increased Magical Damage and Stuns enemies. Restores Health per enemy hit.',
          image: '',
          attributes: [
            { label: 'Enhanced Damage', value: '50 | 105 | 160 | 215 | 270' },
            { label: 'Enhanced Damage Scaling', value: '75% Strength' },
            { label: 'Stun Duration', value: '0.9 | 1.0 | 1.1 | 1.2 | 1.3s' },
            { label: 'Heal Per Hit', value: '8 | 11 | 14 | 17 | 20' },
            { label: 'Heal Scaling', value: '0.75% Max Health' },
            { label: 'Cooldown', value: '15s' }
          ]
        }
      ]
    },
    3: {
      name: 'Tremors',
      image: '',
      description: 'Repeatedly slam the ground, Trembling and dealing Magical Damage to enemies every 0.5 seconds while pulling them toward you in a Vortex.\n\n• Refire for a stronger quake that deals Magical Damage and Cripples enemies, and incurs an increased cooldown.\n• Maximum channel duration of 10 seconds.\n• Cost incurred for each slam.',
      cooldown: '8s | 14s (Refire)',
      cost: '10 | 15 | 20 | 25 | 30 (Per Slam)',
      attributes: [
        { label: 'Damage Per Tick', value: '18 | 28 | 38 | 48 | 58' },
        { label: 'Damage Scaling', value: '40% Intelligence' },
        { label: 'Refire Damage', value: '50 | 90 | 130 | 170 | 210' },
        { label: 'Refire Damage Scaling', value: '55% Strength' },
        { label: 'Tremble Duration', value: '0.55s' },
        { label: 'Cripple Duration', value: '1s' },
        { label: 'Radius', value: '4.8m' }
      ]
    },
    4: {
      name: 'Tectonic Shift',
      image: '',
      description: 'Stomp the ground to create a fissure that deals Magical Damage to enemies in its path. From the fissure, five pieces of earth erupt to form a wall.\n\n• Refire the ability to destroy all pieces at once.\n• Wall pieces can last up to 15 seconds if not destroyed.\n• Wall pieces each have 3 Hit Points, an enemy Basic Attack will deal 1 Hit Point per hit.\n• Your basic attacks will deal 3 Hit Points, instantly destroying a piece of the wall.',
      cooldown: '90 | 85 | 80 | 75 | 70s',
      cost: '50 | 55 | 60 | 65 | 70',
      attributes: [
        { label: 'Damage', value: '150 | 250 | 350 | 450 | 550' },
        { label: 'Damage Scaling', value: '65% Intelligence + 95% Strength' },
        { label: 'Wall Duration', value: '15s' },
        { label: 'Wall Piece HP', value: '3' },
        { label: 'Range', value: '5.6m' },
        { label: 'Radius', value: '4m' }
      ]
    }
  },
  aspects: [
    {
      id: 'chaos',
      name: 'Aspect of Chaos',
      image: '',
      description: 'Seismic Crush now grants Stealth and Slows instead of Stunning. Refraction Shield charges from dealing damage instead of taking damage, and Enhanced Refraction Shield no longer Stuns. Tremors summons a vision that repeatedly deals damage, with a final slam that Slows and Cripples.',
      basicAttack: {
        name: 'Cabrakan Basic Attack',
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
        name: 'Shadow Zone',
        image: '',
        description: 'You and nearby allies take reduced damage. Deal increased damage to enemies that damage you or your nearby allies.\n\n• The aura provides Cabrakan 1% additional Mitigations for every 100 Protections from Items he has.',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Damage Mitigation', value: '4%' },
          { label: 'Damage Increase', value: '3%' },
          { label: 'Debuff Duration', value: '4s' },
          { label: 'Radius', value: '4.8m' }
        ]
      },
      abilities: {
        1: {
          name: 'Seismic Crush',
          image: '',
          description: 'Become enraged, increasing your Movement Speed and Attack Speed. While active, your next successful Basic Attack will Slow and deal bonus Magical Damage.\n\n• Gain Haste and Immunity to Slows and Roots while this effect is active.\n• NOW GRANTS STEALTH\n• NOW SLOWS INSTEAD OF STUNNING',
          cooldown: '15s',
          cost: '50 | 55 | 60 | 65 | 70',
          attributes: [
            { label: 'Damage', value: '90 | 140 | 190 | 240 | 290' },
            { label: 'Damage Scaling', value: '45% Intelligence + 80% Strength' },
            { label: 'Movement Speed', value: '15 | 20 | 25 | 30 | 35%' },
            { label: 'Attack Speed', value: '70%' },
            { label: 'Slow', value: '20 | 21.25 | 22.5 | 23.75 | 25%' },
            { label: 'Slow Duration', value: '2.5s' },
            { label: 'Buff Duration', value: '5s' }
          ]
        },
        2: {
          name: 'Refraction Shield',
          image: '',
          description: 'Clash your shields, unleashing a concussive blast that deals Magical Damage. Dealing damage charges your shields.\n\n• At Max Stacks, gain access to Enhanced Refraction Shield on a separate cooldown.\n• Enhanced Refraction Shield\'s concussive blast deals Magical Damage.\n• Restores Mana per enemy hit by Refraction Shield, or Health per enemy hit by Enhanced Refraction Shield.\n• CHARGES FROM DEALING DAMAGE INSTEAD OF TAKING DAMAGE\n• ENHANCED REFRACTION SHIELD NO LONGER STUNS',
          cooldown: '12s',
          cost: '50 | 55 | 60 | 65 | 70',
          attributes: [
            { label: 'Damage', value: '70 | 110 | 150 | 190 | 230' },
            { label: 'Damage Scaling', value: '55% Intelligence' },
            { label: 'Max Stacks', value: '5' },
            { label: 'Buff Duration', value: '8s' },
            { label: 'Mana Restore', value: '10 | 14 | 18 | 22 | 26' },
            { label: 'Cone Angle', value: '120 degrees' },
            { label: 'Range', value: '3.2m' }
          ],
          subAbilities: [
            {
              name: 'Enhanced Refraction Shield',
              description: 'At Max Stacks, unleash an enhanced concussive blast that deals increased Magical Damage. Restores Health per enemy hit. NO LONGER STUNS.',
              image: '',
              attributes: [
                { label: 'Enhanced Damage', value: '70 | 120 | 170 | 220 | 270' },
                { label: 'Enhanced Damage Scaling', value: '90% Strength' },
                { label: 'Heal Per Hit', value: '8 | 11 | 14 | 17 | 20' },
                { label: 'Heal Scaling', value: '0.75% Max Health' },
                { label: 'Cooldown', value: '15s' }
              ]
            }
          ]
        },
        3: {
          name: 'Tremors',
          image: '',
          description: 'Summon a vision that repeatedly deals Magical Damage to nearby enemies.\n\n• Before disappearing the vision does a final slam, dealing Magical Damage, Slowing and Crippling enemies.\n• NO LONGER CHANNELS\n• SUMMONS A VISION INSTEAD',
          cooldown: '8s',
          cost: '10 | 15 | 20 | 25 | 30',
          attributes: [
            { label: 'Tick Damage', value: '9 | 13 | 17 | 21 | 25' },
            { label: 'Tick Damage Scaling', value: '20% Intelligence + 15% Strength' },
            { label: 'Final Slam Damage', value: '9 | 13 | 17 | 21 | 25' },
            { label: 'Final Slam Scaling', value: '20% Intelligence + 15% Strength' },
            { label: 'Slow', value: '20%' },
            { label: 'Slow Duration', value: '2s' },
            { label: 'Cripple Duration', value: '1s' },
            { label: 'Radius', value: '4.8m' }
          ]
        },
        4: {
          name: 'Tectonic Shift',
          image: '',
          description: 'Stomp the ground to create a fissure that deals Magical Damage to enemies in its path. From the fissure, five pieces of earth erupt to form a wall.\n\n• Refire the ability to destroy all pieces at once.\n• Wall pieces can last up to 15 seconds if not destroyed.\n• Wall pieces each have 3 Hit Points, an enemy Basic Attack will deal 1 Hit Point per hit.\n• Your basic attacks will deal 3 Hit Points, instantly destroying a piece of the wall.',
          cooldown: '90 | 85 | 80 | 75 | 70s',
          cost: '50 | 55 | 60 | 65 | 70',
          attributes: [
            { label: 'Damage', value: '150 | 250 | 350 | 450 | 550' },
            { label: 'Damage Scaling', value: '65% Intelligence + 95% Strength' },
            { label: 'Wall Duration', value: '15s' },
            { label: 'Wall Piece HP', value: '3' },
            { label: 'Range', value: '5.6m' },
            { label: 'Radius', value: '4m' }
          ]
        }
      }
    }
  ],
  recommendedBuilds: []
};