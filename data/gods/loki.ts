import { God, DamageType } from '../../types';

export const LOKI: God = {
  id: 'loki',
  name: 'Loki',
  title: 'The Trickster God',
  pantheon: 'Norse',
  role: 'Assassin',
  lanes: ['Jungle', 'Mid'],
  damageType: DamageType.Physical,
  image: 'https://static.smite2.live/smite2/GODS/Loki/Default/t_GodCard_Loki.webp',
  videoGuideUrl: '',
  goodAgainst: [],
  badAgainst: [],
  levelingOrder: [],
  statsByLevel: [
    // Level 1
    { strength: 0, intelligence: 0, inhandPower: 44.4, baseAttackSpeed: 0.97, attackSpeedPercent: 1.46, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 18.05, magicalProtection: 26.12, damageMitigation: 0, maxHealth: 617.62, healthRegen: 1.7, maxMana: 296, manaRegen: 2.25, cooldownRate: 0, movementSpeed: 365, xpRequirement: 0 },
    // Level 2
    { strength: 0, intelligence: 0, inhandPower: 46.8, baseAttackSpeed: 0.97, attackSpeedPercent: 2.92, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 21.05, magicalProtection: 27.62, damageMitigation: 0, maxHealth: 715.12, healthRegen: 1.91, maxMana: 338, manaRegen: 2.5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 308 },
    // Level 3
    { strength: 0, intelligence: 0, inhandPower: 49.2, baseAttackSpeed: 0.97, attackSpeedPercent: 4.38, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 24.05, magicalProtection: 29.12, damageMitigation: 0, maxHealth: 812.62, healthRegen: 2.12, maxMana: 380, manaRegen: 2.75, cooldownRate: 0, movementSpeed: 365, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 51.6, baseAttackSpeed: 0.97, attackSpeedPercent: 5.84, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 27.05, magicalProtection: 30.62, damageMitigation: 0, maxHealth: 910.12, healthRegen: 2.33, maxMana: 422, manaRegen: 3, cooldownRate: 0, movementSpeed: 365, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 54, baseAttackSpeed: 0.97, attackSpeedPercent: 7.3, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 30.05, magicalProtection: 32.12, damageMitigation: 0, maxHealth: 1007.62, healthRegen: 2.54, maxMana: 464, manaRegen: 3.25, cooldownRate: 0, movementSpeed: 365, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 56.4, baseAttackSpeed: 0.97, attackSpeedPercent: 8.76, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 33.05, magicalProtection: 33.62, damageMitigation: 0, maxHealth: 1105.12, healthRegen: 2.75, maxMana: 506, manaRegen: 3.5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 58.8, baseAttackSpeed: 0.97, attackSpeedPercent: 10.22, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 36.05, magicalProtection: 35.12, damageMitigation: 0, maxHealth: 1202.62, healthRegen: 2.96, maxMana: 548, manaRegen: 3.75, cooldownRate: 0, movementSpeed: 365, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 61.2, baseAttackSpeed: 0.97, attackSpeedPercent: 11.68, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 39.05, magicalProtection: 36.62, damageMitigation: 0, maxHealth: 1300.12, healthRegen: 3.17, maxMana: 590, manaRegen: 4, cooldownRate: 0, movementSpeed: 365, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 63.6, baseAttackSpeed: 0.97, attackSpeedPercent: 13.14, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 42.05, magicalProtection: 38.12, damageMitigation: 0, maxHealth: 1397.62, healthRegen: 3.38, maxMana: 632, manaRegen: 4.25, cooldownRate: 0, movementSpeed: 365, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 66, baseAttackSpeed: 0.97, attackSpeedPercent: 14.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 45.05, magicalProtection: 39.62, damageMitigation: 0, maxHealth: 1495.12, healthRegen: 3.59, maxMana: 674, manaRegen: 4.5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 68.4, baseAttackSpeed: 0.97, attackSpeedPercent: 16.06, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 48.05, magicalProtection: 41.12, damageMitigation: 0, maxHealth: 1592.62, healthRegen: 3.8, maxMana: 716, manaRegen: 4.75, cooldownRate: 0, movementSpeed: 365, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 70.8, baseAttackSpeed: 0.97, attackSpeedPercent: 17.52, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 51.05, magicalProtection: 42.62, damageMitigation: 0, maxHealth: 1690.12, healthRegen: 4.01, maxMana: 758, manaRegen: 5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 73.2, baseAttackSpeed: 0.97, attackSpeedPercent: 18.98, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 54.05, magicalProtection: 44.12, damageMitigation: 0, maxHealth: 1787.62, healthRegen: 4.22, maxMana: 800, manaRegen: 5.25, cooldownRate: 0, movementSpeed: 365, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 75.6, baseAttackSpeed: 0.97, attackSpeedPercent: 20.44, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 57.05, magicalProtection: 45.62, damageMitigation: 0, maxHealth: 1885.12, healthRegen: 4.43, maxMana: 842, manaRegen: 5.5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 78, baseAttackSpeed: 0.97, attackSpeedPercent: 21.9, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 60.05, magicalProtection: 47.12, damageMitigation: 0, maxHealth: 1982.62, healthRegen: 4.64, maxMana: 884, manaRegen: 5.75, cooldownRate: 0, movementSpeed: 365, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 80.4, baseAttackSpeed: 0.97, attackSpeedPercent: 23.36, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 63.05, magicalProtection: 48.62, damageMitigation: 0, maxHealth: 2080.12, healthRegen: 4.85, maxMana: 926, manaRegen: 6, cooldownRate: 0, movementSpeed: 365, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 82.8, baseAttackSpeed: 0.97, attackSpeedPercent: 24.82, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 66.05, magicalProtection: 50.12, damageMitigation: 0, maxHealth: 2177.62, healthRegen: 5.06, maxMana: 968, manaRegen: 6.25, cooldownRate: 0, movementSpeed: 365, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 85.2, baseAttackSpeed: 0.97, attackSpeedPercent: 26.28, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 69.05, magicalProtection: 51.62, damageMitigation: 0, maxHealth: 2275.12, healthRegen: 5.27, maxMana: 1010, manaRegen: 6.5, cooldownRate: 0, movementSpeed: 365, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 87.6, baseAttackSpeed: 0.97, attackSpeedPercent: 27.74, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 72.05, magicalProtection: 53.12, damageMitigation: 0, maxHealth: 2372.62, healthRegen: 5.48, maxMana: 1052, manaRegen: 6.75, cooldownRate: 0, movementSpeed: 365, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 90, baseAttackSpeed: 0.97, attackSpeedPercent: 29.2, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 75.05, magicalProtection: 54.62, damageMitigation: 0, maxHealth: 2470.12, healthRegen: 5.69, maxMana: 1094, manaRegen: 7, cooldownRate: 0, movementSpeed: 365, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'Loki Basic Attack',
    image: 'https://static.smite2.live/smite2/GODS/common/Icon_BasicAttack_Physical.webp',
    description: 'Deal Physical Damage to an enemy in front of you.\n\nIf multiple enemies are in the area, the enemy closest to the center of the area will be hit.\n\nHas a 5 hit chain. Attacks in order of 1, 0.5, 0.5, 0.5, 1.5x damage and swing time.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
      { label: 'Range', value: '1.92m' },
      { label: 'Cone Angle', value: '120 degrees' }
    ]
  },
  passive: {
    name: 'Behind You',
    image: 'https://static.smite2.live/smite2/GODS/Loki/Abilities/Icons_Loki_Passive.webp',
    description: 'Hitting enemies from behind deals bonus damage.\n\n• The increased damage from this effect also triggers on enemies Blinded by Agonizing Visions',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Bonus Damage', value: '115%' }
    ]
  },
  abilities: {
    1: {
      name: 'Vanish',
      image: 'https://static.smite2.live/smite2/GODS/Loki/Abilities/Icons_Loki_A01.webp',
      description: 'Disappear in a puff of smoke, become Stealthed and gain Movement Speed.\n\n• Your next basic attack deals additional Physical Damage over time\n• Killing a god resets the cooldown of this ability\n• You are Immune to Slows while Stealthed\n\nHits 4 times over 2 seconds. Stealthed gods are invisible to enemies unless they enter an enemy structure\'s attack area. Taking damage while in Stealth partially reveals you for 0.17 seconds. Stealth is broken when hit by Hard CC.',
      cooldown: '15s',
      cost: '60 | 65 | 70 | 75 | 80',
      attributes: [
        { label: 'Damage Per Tick', value: '30 | 45 | 60 | 75 | 90' },
        { label: 'Damage Scaling Per Tick', value: '15% Strength' },
        { label: 'Movement Speed', value: '35%' },
        { label: 'Buff Duration', value: '4s' }
      ]
    },
    2: {
      name: 'Agonizing Visions',
      image: 'https://static.smite2.live/smite2/GODS/Loki/Abilities/Icons_Loki_A02.webp',
      description: 'Summon a vision of Loki that repeatedly deals Physical Damage to nearby enemies.\n\n• Damaged enemies have reduced damage\n• Enemies hit four times are Blinded\n\nThis ability hits 8 times over 3.5 seconds. Blinded players have their game camera obscured. The Vision Impedes enemy characters only. Loki benefits from Behind You on Blinded enemies from all directions.',
      cooldown: '13s',
      cost: '50 | 55 | 60 | 65 | 70',
      attributes: [
        { label: 'Damage', value: '13 | 18 | 23 | 28 | 33' },
        { label: 'Damage Scaling', value: '15% Strength' },
        { label: 'Blind Duration', value: '3s' },
        { label: 'Damage Dealt Reduction', value: '5%' },
        { label: 'Debuff Duration', value: '2.5s' },
        { label: 'Max Debuff Stacks', value: '3' },
        { label: 'Range', value: '8.8m' },
        { label: 'Radius', value: '4m' }
      ]
    },
    3: {
      name: 'Flurry Strike',
      image: 'https://static.smite2.live/smite2/GODS/Loki/Abilities/Icons_Loki_A03.webp',
      description: 'Unleash a flurry of dagger strikes, dealing Physical Damage repeatedly and Slowing enemies in front of you.\n\n• The final hit deals bonus Physical Damage and applies a stronger Slow\n• This is a Channeled ability\n• You are Displacement Immune while Channeling\n\nHits 6 times over 1.5 seconds. Slow is refreshed with each hit but does not stack. This ability can benefit from Behind You.',
      cooldown: '9s',
      cost: '40 | 50 | 60 | 70 | 80',
      attributes: [
        { label: 'Damage', value: '20 | 30 | 40 | 50 | 60' },
        { label: 'Damage Scaling', value: '25% Strength' },
        { label: 'Final Damage', value: '55 | 75 | 95 | 115 | 135' },
        { label: 'Final Damage Scaling', value: '60% Strength' },
        { label: 'Slow', value: '15%' },
        { label: 'Final Slow', value: '30%' },
        { label: 'Slow Duration', value: '2.25s' },
        { label: 'Cone Angle', value: '90 degrees' }
      ]
    },
    4: {
      name: 'Assassinate',
      image: 'https://static.smite2.live/smite2/GODS/Loki/Abilities/Icons_Loki_A04.webp',
      description: 'Teleport to the target location, then strike twice to assassinate a foe.\n\n• The first strike deals Physical Damage and Cripples enemies in the area\n• The second strike deals Physical Damage and Stuns enemies in front of you\n\nLoki locks onto the enemy god closest to the center of the teleport location, if there is one.',
      cooldown: '90s',
      cost: '90',
      attributes: [
        { label: 'Damage', value: '70 | 105 | 140 | 175 | 210' },
        { label: 'Damage Scaling', value: '35% Strength' },
        { label: 'Final Damage', value: '100 | 145 | 190 | 235 | 280' },
        { label: 'Final Damage Scaling', value: '80% Strength' },
        { label: 'Stun Duration', value: '0.75s' },
        { label: 'Range', value: '8.8m' },
        { label: 'Cone Angle', value: '105 degrees' }
      ]
    }
  },
  aspects: [
    {
      id: 'agony',
      name: 'Aspect of Agony',
      image: 'https://static.smite2.live/smite2/ui/talents/t_talent_Blind.webp',
      description: 'Vanish no longer grants Stealth; its attack now inflicts Blind instead of Bleed. Agonizing Visions can be cast on allies, providing damage mitigation while slowing enemies. Behind You now deals bonus damage scaling with your Health and Protections rather than its percentage increase.',
      basicAttack: {
        name: 'Loki Basic Attack',
        image: 'https://static.smite2.live/smite2/GODS/common/Icon_BasicAttack_Physical.webp',
        description: 'Deal Physical Damage to an enemy in front of you.\n\nIf multiple enemies are in the area, the enemy closest to the center of the area will be hit.\n\nHas a 5 hit chain. Attacks in order of 1, 0.5, 0.5, 0.5, 1.5x damage and swing time.',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
          { label: 'Range', value: '1.92m' },
          { label: 'Cone Angle', value: '120 degrees' }
        ]
      },
      passive: {
        name: 'Behind You',
        image: 'https://static.smite2.live/smite2/GODS/Loki/Abilities/Icons_Loki_Passive.webp',
        description: 'Hitting enemies from behind deals bonus damage.\n\n• The increased damage from this effect also triggers on enemies Blinded by Agonizing Visions\n• BONUS DAMAGE NOW SCALES WITH HEALTH AND PROTECTIONS',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Damage Scaling', value: '2% Max Health + 10% Physical Protection + 10% Magical Protection' }
        ]
      },
      abilities: {
        1: {
          name: 'Vanish',
          image: 'https://static.smite2.live/smite2/GODS/Loki/Abilities/Icons_Loki_A01.webp',
          description: 'Gain Movement Speed and Empower your next attack, causing it to Blind enemies hit.\n\n• Killing a god resets the cooldown of this ability\n• You are immune to slows while buffed\n• NO LONGER GRANTS STEALTH\n• NEXT ATTACK INFLICTS BLIND INSTEAD OF BLEED',
          cooldown: '15 | 14.5 | 14 | 13.5 | 13s',
          cost: '60 | 65 | 70 | 75 | 80',
          attributes: [
            { label: 'Movement Speed', value: '35%' },
            { label: 'Buff Duration', value: '4s' },
            { label: 'Blind Duration', value: '3s' },
            { label: 'Damage Taken Reduction', value: '15%' }
          ]
        },
        2: {
          name: 'Agonizing Visions',
          image: 'https://static.smite2.live/smite2/GODS/Loki/Abilities/Icons_Loki_A02.webp',
          description: 'Summon a vision of Loki that repeatedly deals Physical Damage to nearby enemies. Casting this on allies makes them the source of damage and grants them Damage Mitigation.\n\n• Damaged enemies have reduced damage\n• Enemies hit four times are Blinded\n• CAN NOW BE CAST ON ALLIES\n• GRANTS DAMAGE MITIGATION TO ALLIES\n• SLOWS ENEMIES\n\nThis ability hits 8 times over 3.5 seconds. Blinded players have their game camera obscured. The Vision Impedes enemy characters only. Loki benefits from Behind You on Blinded enemies from all directions.',
          cooldown: '13s',
          cost: '50 | 55 | 60 | 65 | 70',
          attributes: [
            { label: 'Damage', value: '13 | 18 | 23 | 28 | 33' },
            { label: 'Damage Scaling', value: '15% Strength' },
            { label: 'Blind Duration', value: '3s' },
            { label: 'Damage Dealt Reduction', value: '5%' },
            { label: 'Debuff Duration', value: '2.5s' },
            { label: 'Max Debuff Stacks', value: '3' },
            { label: 'Damage Mitigation (Ally)', value: '15 | 17.5 | 20 | 22.5 | 25%' },
            { label: 'Slow', value: '15%' },
            { label: 'Range', value: '8.8m' },
            { label: 'Radius', value: '4m' }
          ]
        },
        3: {
          name: 'Flurry Strike',
          image: 'https://static.smite2.live/smite2/GODS/Loki/Abilities/Icons_Loki_A03.webp',
          description: 'Unleash a flurry of dagger strikes, dealing Physical Damage repeatedly and Slowing enemies in front of you.\n\n• The final hit deals bonus Physical Damage and applies a stronger Slow\n• This is a Channeled ability\n• You are Displacement Immune while Channeling\n\nHits 6 times over 1.5 seconds. Slow is refreshed with each hit but does not stack. This ability can benefit from Behind You.',
          cooldown: '9s',
          cost: '40 | 50 | 60 | 70 | 80',
          attributes: [
            { label: 'Damage', value: '20 | 30 | 40 | 50 | 60' },
            { label: 'Damage Scaling', value: '25% Strength' },
            { label: 'Final Damage', value: '55 | 75 | 95 | 115 | 135' },
            { label: 'Final Damage Scaling', value: '60% Strength' },
            { label: 'Slow', value: '15%' },
            { label: 'Final Slow', value: '30%' },
            { label: 'Slow Duration', value: '2.25s' },
            { label: 'Cone Angle', value: '90 degrees' }
          ]
        },
        4: {
          name: 'Assassinate',
          image: 'https://static.smite2.live/smite2/GODS/Loki/Abilities/Icons_Loki_A04.webp',
          description: 'Teleport to the target location, then strike twice to assassinate a foe.\n\n• The first strike deals Physical Damage and Cripples enemies in the area\n• The second strike deals Physical Damage and Stuns enemies in front of you\n\nLoki locks onto the enemy god closest to the center of the teleport location, if there is one.',
          cooldown: '90s',
          cost: '90',
          attributes: [
            { label: 'Damage', value: '70 | 105 | 140 | 175 | 210' },
            { label: 'Damage Scaling', value: '35% Strength' },
            { label: 'Final Damage', value: '100 | 145 | 190 | 235 | 280' },
            { label: 'Final Damage Scaling', value: '80% Strength' },
            { label: 'Stun Duration', value: '0.75s' },
            { label: 'Range', value: '8.8m' },
            { label: 'Cone Angle', value: '105 degrees' }
          ]
        }
      }
    }
  ],
  recommendedBuilds: []
};