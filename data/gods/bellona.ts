import { God, DamageType } from '../../types';

export const BELLONA: God = {
  id: 'bellona',
  name: 'Bellona',
  title: 'Goddess of War',
  pantheon: 'Roman',
  role: 'Warrior',
  lanes: ['Solo', 'Jungle'],
  damageType: DamageType.Physical,
  image: 'https://static.smite2.live/smite2/GODS/Bellona/Default/t_GodCard_Bellona.webp',
  videoGuideUrl: '',
  goodAgainst: [],
  badAgainst: [],
  levelingOrder: [],
  statsByLevel: [
    // Level 1
    { strength: 0, intelligence: 0, inhandPower: 44.4, baseAttackSpeed: 1.0044, attackSpeedPercent: 1.456, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 20.4, magicalProtection: 28.6, damageMitigation: 0, maxHealth: 647.4, healthRegen: 1.768, maxMana: 281.2, manaRegen: 2.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 0 },
    // Level 2
    { strength: 0, intelligence: 0, inhandPower: 46.8, baseAttackSpeed: 1.0044, attackSpeedPercent: 2.912, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 23.52, magicalProtection: 30.16, damageMitigation: 0, maxHealth: 748.8, healthRegen: 1.976, maxMana: 321.1, manaRegen: 2.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 308 },
    // Level 3
    { strength: 0, intelligence: 0, inhandPower: 49.2, baseAttackSpeed: 1.0044, attackSpeedPercent: 4.368, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 26.64, magicalProtection: 31.72, damageMitigation: 0, maxHealth: 850.2, healthRegen: 2.184, maxMana: 361.0, manaRegen: 2.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 51.6, baseAttackSpeed: 1.0044, attackSpeedPercent: 5.824, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 29.76, magicalProtection: 33.28, damageMitigation: 0, maxHealth: 951.6, healthRegen: 2.392, maxMana: 400.9, manaRegen: 3.0, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 54.0, baseAttackSpeed: 1.0044, attackSpeedPercent: 7.28, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 32.88, magicalProtection: 34.84, damageMitigation: 0, maxHealth: 1053.0, healthRegen: 2.6, maxMana: 440.8, manaRegen: 3.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 56.4, baseAttackSpeed: 1.0044, attackSpeedPercent: 8.736, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 36.0, magicalProtection: 36.4, damageMitigation: 0, maxHealth: 1154.4, healthRegen: 2.808, maxMana: 480.7, manaRegen: 3.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 58.8, baseAttackSpeed: 1.0044, attackSpeedPercent: 10.192, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 39.12, magicalProtection: 37.96, damageMitigation: 0, maxHealth: 1255.8, healthRegen: 3.016, maxMana: 520.6, manaRegen: 3.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 61.2, baseAttackSpeed: 1.0044, attackSpeedPercent: 11.648, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 42.24, magicalProtection: 39.52, damageMitigation: 0, maxHealth: 1357.2, healthRegen: 3.224, maxMana: 560.5, manaRegen: 4.0, cooldownRate: 0, movementSpeed: 375, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 63.6, baseAttackSpeed: 1.0044, attackSpeedPercent: 13.104, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 45.36, magicalProtection: 41.08, damageMitigation: 0, maxHealth: 1458.6, healthRegen: 3.432, maxMana: 600.4, manaRegen: 4.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 66.0, baseAttackSpeed: 1.0044, attackSpeedPercent: 14.56, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 48.48, magicalProtection: 42.64, damageMitigation: 0, maxHealth: 1560.0, healthRegen: 3.64, maxMana: 640.3, manaRegen: 4.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 68.4, baseAttackSpeed: 1.0044, attackSpeedPercent: 16.016, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 51.6, magicalProtection: 44.2, damageMitigation: 0, maxHealth: 1661.4, healthRegen: 3.848, maxMana: 680.2, manaRegen: 4.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 70.8, baseAttackSpeed: 1.0044, attackSpeedPercent: 17.472, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 54.72, magicalProtection: 45.76, damageMitigation: 0, maxHealth: 1762.8, healthRegen: 4.056, maxMana: 720.1, manaRegen: 5.0, cooldownRate: 0, movementSpeed: 375, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 73.2, baseAttackSpeed: 1.0044, attackSpeedPercent: 18.928, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 57.84, magicalProtection: 47.32, damageMitigation: 0, maxHealth: 1864.2, healthRegen: 4.264, maxMana: 760.0, manaRegen: 5.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 75.6, baseAttackSpeed: 1.0044, attackSpeedPercent: 20.384, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 60.96, magicalProtection: 48.88, damageMitigation: 0, maxHealth: 1965.6, healthRegen: 4.472, maxMana: 799.9, manaRegen: 5.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 78.0, baseAttackSpeed: 1.0044, attackSpeedPercent: 21.84, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 64.08, magicalProtection: 50.44, damageMitigation: 0, maxHealth: 2067.0, healthRegen: 4.68, maxMana: 839.8, manaRegen: 5.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 80.4, baseAttackSpeed: 1.0044, attackSpeedPercent: 23.296, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 67.2, magicalProtection: 52.0, damageMitigation: 0, maxHealth: 2168.4, healthRegen: 4.888, maxMana: 879.7, manaRegen: 6.0, cooldownRate: 0, movementSpeed: 375, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 82.8, baseAttackSpeed: 1.0044, attackSpeedPercent: 24.752, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 70.32, magicalProtection: 53.56, damageMitigation: 0, maxHealth: 2269.8, healthRegen: 5.096, maxMana: 919.6, manaRegen: 6.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 85.2, baseAttackSpeed: 1.0044, attackSpeedPercent: 26.208, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 73.44, magicalProtection: 55.12, damageMitigation: 0, maxHealth: 2371.2, healthRegen: 5.304, maxMana: 959.5, manaRegen: 6.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 87.6, baseAttackSpeed: 1.0044, attackSpeedPercent: 27.664, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 76.56, magicalProtection: 56.68, damageMitigation: 0, maxHealth: 2472.6, healthRegen: 5.512, maxMana: 999.4, manaRegen: 6.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 90.0, baseAttackSpeed: 1.0044, attackSpeedPercent: 29.12, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 79.68, magicalProtection: 58.24, damageMitigation: 0, maxHealth: 2574.0, healthRegen: 5.72, maxMana: 1039.3, manaRegen: 7.0, cooldownRate: 0, movementSpeed: 375, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'Bellona Basic Attack',
    image: 'https://static.smite2.live/smite2/GODS/common/Icon_BasicAttack_Physical.webp',
    description: 'Deal Physical Damage to an enemy in front of you.\n\nYou have 4 different weapons to attack with, depending on the most recent ability used.\n\n• If multiple enemies are in the area, the enemy closest to the center of the area will be hit.\n• Bellona remains in her current basic attacks until she goes 7 seconds without dealing or taking damage.\n• Greatsword has a 3 hit chain. Attacks in order of 1, 1, 1.5x damage and swing time, with no special effects.\n• Sword and Shield has a 3 hit chain. Attacks in order of 0.5, 1, 1x damage and swing time and provides 1 block stack every enemy god hit. Max 3 Stacks.\n• Hammer has a 3 hit chain. Attacks in order of 1.5, 1, 1.5x damage and 1.5, 1, 1.25x swing time. Hits all enemies in range of each attack.\n• Scourge has a 3 hit chain. Attacks in order of 1, 0.5, 1x damage and swing time and heals you on every successful hit.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
      { label: 'Scourge Heal Per Hit', value: '5 | 6 | 7 | 8 | 9' },
      { label: 'Scourge Heal Scaling Per Hit', value: '7% Physical Protection' },
      { label: 'Range', value: '1.92m' },
      { label: 'Scourge Range', value: '2.56m' },
      { label: 'Cone Angle', value: '120 degrees' }
    ]
  },
  passive: {
    name: 'Master Of War',
    image: 'https://static.smite2.live/smite2/GODS/Bellona/Abilities/Icons_Bellona_Passive.webp',
    description: 'When you hit or are hit by basic attacks, you gain stacks of Movement Speed.\n\n• If using Sword and Shield, you also get Protection stacks\n• If using Scourge, you also get Attack Speed stacks\n• If using Hammer, you also get Strength stacks\n\nSword and Shield gains Physical Protection and Magical Protection per stack. Hammer gains % Strength per stack. Scourge gains Attack Speed per stack. All basic attacks still gain the Movement Speed per stack.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Movement Speed', value: '1.5% Per Stack' },
      { label: 'Physical Protection (Shield)', value: '4 Per Stack' },
      { label: 'Magical Protection (Shield)', value: '4 Per Stack' },
      { label: 'Strength (Hammer)', value: '3% Per Stack' },
      { label: 'Attack Speed (Scourge)', value: '5% Per Stack' },
      { label: 'Buff Duration', value: '7s' },
      { label: 'Max Buff Stacks', value: '5' }
    ]
  },
  abilities: {
    1: {
      name: 'Shield Bash',
      image: 'https://static.smite2.live/smite2/GODS/Bellona/Abilities/Icons_Bellona_A01.webp',
      description: 'Dash forward with your shield to deal Physical Damage and Slow enemies in front of you.\n\n• Gain 1 Block stack for each enemy god hit\n• Change to Sword and Shield basic attacks\n• Every third successful basic attack against a god grants a Block stack, reflecting damage\n\nBlock absorbs all damage from one God\'s Basic Attack per stack. Blocks also reflect back a portion of the blocked damage to enemies around her.',
      cooldown: '14s',
      cost: '50 | 55 | 60 | 65 | 70',
      attributes: [
        { label: 'Damage', value: '75 | 115 | 155 | 195 | 235' },
        { label: 'Damage Scaling', value: '50% Strength + 30% Physical Protection + 30% Magical Protection' },
        { label: 'Reflect Damage', value: '25%' },
        { label: 'Reflect Damage Scaling', value: '7% Physical Protection or Magical Protection' },
        { label: 'Slow Amount', value: '20%' },
        { label: 'Slow Duration', value: '1.5s' },
        { label: 'Range', value: '2.8m' },
        { label: 'Radius', value: '4m' }
      ]
    },
    2: {
      name: 'Bludgeon',
      image: 'https://static.smite2.live/smite2/GODS/Bellona/Abilities/Icons_Bellona_A02.webp',
      description: 'Spin your hammer to deal Physical Damage to enemies around you, then slam to deal Physical Damage to enemies in a line.\n\n• Change to Hammer basic attacks\n• Your basic attacks now hit nearby enemies\n\nFinal Slam damage increases by 35% for each enemy god hit by the Spin attack.',
      cooldown: '14 | 13 | 12 | 11 | 10s',
      cost: '40 | 50 | 60 | 70 | 80',
      attributes: [
        { label: 'Spin Damage', value: '45 | 80 | 115 | 155 | 190' },
        { label: 'Spin Damage Scaling', value: '25% Strength' },
        { label: 'Slam Damage', value: '70 | 130 | 190 | 250 | 310' },
        { label: 'Slam Damage Scaling', value: '70% Strength' },
        { label: 'Damage Increase Per God Hit', value: '35%' },
        { label: 'Spin Radius', value: '4m' },
        { label: 'Slam Range', value: '4.8m' },
        { label: 'Slam Radius', value: '1.92m' }
      ]
    },
    3: {
      name: 'Scourge',
      image: 'https://static.smite2.live/smite2/GODS/Bellona/Abilities/Icons_Bellona_A03.webp',
      description: 'Lash out with your Scourge to deal Physical Damage and Disarm enemies.\n\n• Change to Scourge basic attacks\n• Your basic attacks Heal you',
      cooldown: '16 | 15 | 14 | 13 | 12s',
      cost: '40 | 50 | 60 | 70 | 80',
      attributes: [
        { label: 'Damage', value: '80 | 120 | 160 | 200 | 240' },
        { label: 'Damage Scaling', value: '50% Strength' },
        { label: 'Heal', value: '6 | 7 | 8 | 9 | 10' },
        { label: 'Heal Scaling', value: '6% Physical Protection' },
        { label: 'Disarm Duration', value: '1.25 | 1.4 | 1.55 | 1.7 | 1.85s' },
        { label: 'Range', value: '8.8m' },
        { label: 'Radius', value: '1.6m' }
      ]
    },
    4: {
      name: "Eagle's Rally",
      image: 'https://static.smite2.live/smite2/GODS/Bellona/Abilities/Icons_Bellona_A04.webp',
      description: 'Leap forward and plant your flag to deal Physical Damage and Stun enemies.\n\n• The flag empowers you and allied gods in the area, granting Strength, Intelligence, Physical Protection, and Magical Protection\n• You are CC Immune while Leaping',
      cooldown: '90s',
      cost: '100',
      attributes: [
        { label: 'Damage', value: '300 | 370 | 440 | 510 | 580' },
        { label: 'Damage Scaling', value: '60% Strength' },
        { label: 'Stun Duration', value: '0.75s' },
        { label: 'Strength', value: '8 | 16 | 24 | 32 | 40 + 7.5% Protections' },
        { label: 'Intelligence', value: '22 | 30 | 38 | 46 | 54 + 7.5% Protections' },
        { label: 'Physical Protection', value: '15 | 20 | 25 | 30 | 35 + 7.5% Physical Protections' },
        { label: 'Magical Protection', value: '15 | 20 | 25 | 30 | 35 + 7.5% Magical Protections' },
        { label: 'Range', value: '8.8m' },
        { label: 'Radius', value: '2.4m' }
      ]
    }
  },
  aspects: [
    {
      id: 'vindication',
      name: 'Aspect of Vindication',
      image: 'https://static.smite2.live/smite2/ui/talents/t_talent_ProtectionShield.webp',
      description: 'Bludgeon no longer deals bonus Final Slam Damage but whenever you gain Block stacks with Sword and Shield or gain Healing from Scourge, nearby allied gods also gain those benefits.',
      basicAttack: {
        name: 'Bellona Basic Attack',
        image: 'https://static.smite2.live/smite2/GODS/common/Icon_BasicAttack_Physical.webp',
        description: 'Deal Physical Damage to an enemy in front of you.\n\nYou have 4 different weapons to attack with, depending on the most recent ability used.\n\n• If multiple enemies are in the area, the enemy closest to the center of the area will be hit.\n• Bellona remains in her current basic attacks until she goes 7 seconds without dealing or taking damage.\n• Greatsword has a 3 hit chain. Attacks in order of 1, 1, 1.5x damage and swing time, with no special effects.\n• Sword and Shield has a 3 hit chain. Attacks in order of 0.5, 1, 1x damage and swing time and provides 1 block stack every enemy god hit. Max 3 Stacks.\n• Hammer has a 3 hit chain. Attacks in order of 1.5, 1, 1.5x damage and 1.5, 1, 1.25x swing time. Hits all enemies in range of each attack.\n• Scourge has a 3 hit chain. Attacks in order of 1, 0.5, 1x damage and swing time and heals you on every successful hit.',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
          { label: 'Scourge Heal Per Hit', value: '5 | 6 | 7 | 8 | 9' },
          { label: 'Scourge Heal Scaling Per Hit', value: '7% Physical Protection' },
          { label: 'Range', value: '1.92m' },
          { label: 'Scourge Range', value: '2.56m' },
          { label: 'Cone Angle', value: '120 degrees' }
        ]
      },
      passive: {
        name: 'Master Of War',
        image: 'https://static.smite2.live/smite2/GODS/Bellona/Abilities/Icons_Bellona_Passive.webp',
        description: 'When you hit or are hit by basic attacks, you gain stacks of Movement Speed.\n\n• If using Sword and Shield, you also get Protection stacks\n• If using Scourge, you also get Attack Speed stacks\n• If using Hammer, you also get Strength stacks\n\nSword and Shield gains Physical Protection and Magical Protection per stack. Hammer gains % Strength per stack. Scourge gains Attack Speed per stack. All basic attacks still gain the Movement Speed per stack.',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Movement Speed', value: '1.5% Per Stack' },
          { label: 'Physical Protection (Shield)', value: '4 Per Stack' },
          { label: 'Magical Protection (Shield)', value: '4 Per Stack' },
          { label: 'Strength (Hammer)', value: '3% Per Stack' },
          { label: 'Attack Speed (Scourge)', value: '5% Per Stack' },
          { label: 'Buff Duration', value: '7s' },
          { label: 'Max Buff Stacks', value: '5' }
        ]
      },
      abilities: {
        1: {
          name: 'Shield Bash',
          image: 'https://static.smite2.live/smite2/GODS/Bellona/Abilities/Icons_Bellona_A01.webp',
          description: 'Dash forward with your shield to deal Physical Damage and Slow enemies in front of you.\n\n• Gain 1 Block stack for each enemy god hit\n• Change to Sword and Shield basic attacks\n• Every third successful basic attack grants a Block stack, reflecting damage\n• WHENEVER YOU GAIN A BLOCK STACK, NEARBY ALLIED GODS ALSO DO AS WELL\n\nBlock absorbs all damage from one God\'s Basic Attack per stack. Blocks also reflect back a portion of the blocked damage to enemies around her.',
          cooldown: '14s',
          cost: '50 | 55 | 60 | 65 | 70',
          attributes: [
            { label: 'Damage', value: '75 | 115 | 155 | 195 | 235' },
            { label: 'Damage Scaling', value: '50% Strength + 30% Physical Protection + 30% Magical Protection' },
            { label: 'Reflect Damage', value: '25%' },
            { label: 'Reflect Damage Scaling', value: '7% Physical Protection or Magical Protection' },
            { label: 'Slow Amount', value: '20%' },
            { label: 'Slow Duration', value: '1.5s' },
            { label: 'Range', value: '2.8m' },
            { label: 'Radius', value: '4m' },
            { label: 'Ally Radius', value: '6m' }
          ]
        },
        2: {
          name: 'Bludgeon',
          image: 'https://static.smite2.live/smite2/GODS/Bellona/Abilities/Icons_Bellona_A02.webp',
          description: 'Spin your hammer to deal Physical Damage to enemies around you, then slam to deal Physical Damage to enemies in a line.\n\n• Change to Hammer basic attacks\n• Your basic attacks now hit nearby enemies\n• NO LONGER DEALS BONUS FINAL SLAM DAMAGE',
          cooldown: '14 | 13 | 12 | 11 | 10s',
          cost: '40 | 50 | 60 | 70 | 80',
          attributes: [
            { label: 'Spin Damage', value: '45 | 80 | 115 | 155 | 190' },
            { label: 'Spin Damage Scaling', value: '25% Strength' },
            { label: 'Slam Damage', value: '70 | 130 | 190 | 250 | 310' },
            { label: 'Slam Damage Scaling', value: '70% Strength' },
            { label: 'Spin Radius', value: '4m' },
            { label: 'Slam Range', value: '4.8m' },
            { label: 'Slam Radius', value: '1.92m' }
          ]
        },
        3: {
          name: 'Scourge',
          image: 'https://static.smite2.live/smite2/GODS/Bellona/Abilities/Icons_Bellona_A03.webp',
          description: 'Lash out with your Scourge to deal Physical Damage and Disarm enemies.\n\n• Change to Scourge basic attacks\n• YOUR BASIC ATTACKS HEAL YOU AND NEARBY ALLIED GODS',
          cooldown: '16 | 15 | 14 | 13 | 12s',
          cost: '40 | 50 | 60 | 70 | 80',
          attributes: [
            { label: 'Damage', value: '80 | 120 | 160 | 200 | 240' },
            { label: 'Damage Scaling', value: '50% Strength' },
            { label: 'Heal', value: '6 | 7 | 8 | 9 | 10' },
            { label: 'Heal Scaling', value: '6% Physical Protection' },
            { label: 'Disarm Duration', value: '1.25 | 1.4 | 1.55 | 1.7 | 1.85s' },
            { label: 'Range', value: '8.8m' },
            { label: 'Radius', value: '1.6m' },
            { label: 'Ally Radius', value: '6m' }
          ]
        },
        4: {
          name: "Eagle's Rally",
          image: 'https://static.smite2.live/smite2/GODS/Bellona/Abilities/Icons_Bellona_A04.webp',
          description: 'Leap forward and plant your flag to deal Physical Damage and Stun enemies.\n\n• The flag empowers you and allied gods in the area, granting Strength, Intelligence, Physical Protection, and Magical Protection\n• You are CC Immune while Leaping',
          cooldown: '90s',
          cost: '100',
          attributes: [
            { label: 'Damage', value: '300 | 370 | 440 | 510 | 580' },
            { label: 'Damage Scaling', value: '60% Strength' },
            { label: 'Stun Duration', value: '0.75s' },
            { label: 'Strength', value: '8 | 16 | 24 | 32 | 40 + 7.5% Protections' },
            { label: 'Intelligence', value: '22 | 30 | 38 | 46 | 54 + 7.5% Protections' },
            { label: 'Physical Protection', value: '15 | 20 | 25 | 30 | 35 + 7.5% Physical Protections' },
            { label: 'Magical Protection', value: '15 | 20 | 25 | 30 | 35 + 7.5% Magical Protections' },
            { label: 'Range', value: '8.8m' },
            { label: 'Radius', value: '2.4m' }
          ]
        }
      }
    }
  ],
  recommendedBuilds: []
};