import { God, DamageType } from '../../types';

export const THANATOS: God = {
  id: 'thanatos',
  name: 'Thanatos',
  title: 'Hand of Death',
  pantheon: 'Greek',
  role: 'Assassin',
  lanes: ['Jungle'],
  damageType: DamageType.Physical,
  image: 'https://static.smite2.live/smite2/GODS/Thanatos/Default/t_GodCard_Thanatos.webp',
  videoGuideUrl: '',
  goodAgainst: [],
  badAgainst: [],
  levelingOrder: [],
  statsByLevel: [
    // Level 1
    { strength: 0, intelligence: 0, inhandPower: 44.4, baseAttackSpeed: 0.97, attackSpeedPercent: 1.46, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 19, magicalProtection: 27.5, damageMitigation: 0, maxHealth: 622.5, healthRegen: 1.7, maxMana: 296, manaRegen: 2.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 0 },
    // Level 2
    { strength: 0, intelligence: 0, inhandPower: 46.8, baseAttackSpeed: 0.97, attackSpeedPercent: 2.92, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 22, magicalProtection: 29, damageMitigation: 0, maxHealth: 720, healthRegen: 1.908, maxMana: 338, manaRegen: 2.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 308 },
    // Level 3
    { strength: 0, intelligence: 0, inhandPower: 49.2, baseAttackSpeed: 0.97, attackSpeedPercent: 4.38, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 25, magicalProtection: 30.5, damageMitigation: 0, maxHealth: 817.5, healthRegen: 2.116, maxMana: 380, manaRegen: 2.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 671 },
    // Level 4
    { strength: 0, intelligence: 0, inhandPower: 51.6, baseAttackSpeed: 0.97, attackSpeedPercent: 5.84, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 28, magicalProtection: 32, damageMitigation: 0, maxHealth: 915, healthRegen: 2.324, maxMana: 422, manaRegen: 3, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1089 },
    // Level 5
    { strength: 0, intelligence: 0, inhandPower: 54, baseAttackSpeed: 0.97, attackSpeedPercent: 7.3, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 31, magicalProtection: 33.5, damageMitigation: 0, maxHealth: 1012.5, healthRegen: 2.532, maxMana: 464, manaRegen: 3.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 1562 },
    // Level 6
    { strength: 0, intelligence: 0, inhandPower: 56.4, baseAttackSpeed: 0.97, attackSpeedPercent: 8.76, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 34, magicalProtection: 35, damageMitigation: 0, maxHealth: 1110, healthRegen: 2.74, maxMana: 506, manaRegen: 3.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2090 },
    // Level 7
    { strength: 0, intelligence: 0, inhandPower: 58.8, baseAttackSpeed: 0.97, attackSpeedPercent: 10.22, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 37, magicalProtection: 36.5, damageMitigation: 0, maxHealth: 1207.5, healthRegen: 2.948, maxMana: 548, manaRegen: 3.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 2673 },
    // Level 8
    { strength: 0, intelligence: 0, inhandPower: 61.2, baseAttackSpeed: 0.97, attackSpeedPercent: 11.68, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 40, magicalProtection: 38, damageMitigation: 0, maxHealth: 1305, healthRegen: 3.156, maxMana: 590, manaRegen: 4, cooldownRate: 0, movementSpeed: 375, xpRequirement: 3311 },
    // Level 9
    { strength: 0, intelligence: 0, inhandPower: 63.6, baseAttackSpeed: 0.97, attackSpeedPercent: 13.14, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 43, magicalProtection: 39.5, damageMitigation: 0, maxHealth: 1402.5, healthRegen: 3.364, maxMana: 632, manaRegen: 4.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4004 },
    // Level 10
    { strength: 0, intelligence: 0, inhandPower: 66, baseAttackSpeed: 0.97, attackSpeedPercent: 14.6, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 46, magicalProtection: 41, damageMitigation: 0, maxHealth: 1500, healthRegen: 3.572, maxMana: 674, manaRegen: 4.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 4752 },
    // Level 11
    { strength: 0, intelligence: 0, inhandPower: 68.4, baseAttackSpeed: 0.97, attackSpeedPercent: 16.06, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 49, magicalProtection: 42.5, damageMitigation: 0, maxHealth: 1597.5, healthRegen: 3.78, maxMana: 716, manaRegen: 4.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 5555 },
    // Level 12
    { strength: 0, intelligence: 0, inhandPower: 70.8, baseAttackSpeed: 0.97, attackSpeedPercent: 17.52, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 52, magicalProtection: 44, damageMitigation: 0, maxHealth: 1695, healthRegen: 3.988, maxMana: 758, manaRegen: 5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 6413 },
    // Level 13
    { strength: 0, intelligence: 0, inhandPower: 73.2, baseAttackSpeed: 0.97, attackSpeedPercent: 18.98, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 55, magicalProtection: 45.5, damageMitigation: 0, maxHealth: 1792.5, healthRegen: 4.196, maxMana: 800, manaRegen: 5.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 7326 },
    // Level 14
    { strength: 0, intelligence: 0, inhandPower: 75.6, baseAttackSpeed: 0.97, attackSpeedPercent: 20.44, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 58, magicalProtection: 47, damageMitigation: 0, maxHealth: 1890, healthRegen: 4.404, maxMana: 842, manaRegen: 5.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 8294 },
    // Level 15
    { strength: 0, intelligence: 0, inhandPower: 78, baseAttackSpeed: 0.97, attackSpeedPercent: 21.9, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 61, magicalProtection: 48.5, damageMitigation: 0, maxHealth: 1987.5, healthRegen: 4.612, maxMana: 884, manaRegen: 5.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 9317 },
    // Level 16
    { strength: 0, intelligence: 0, inhandPower: 80.4, baseAttackSpeed: 0.97, attackSpeedPercent: 23.36, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 64, magicalProtection: 50, damageMitigation: 0, maxHealth: 2085, healthRegen: 4.82, maxMana: 926, manaRegen: 6, cooldownRate: 0, movementSpeed: 375, xpRequirement: 10395 },
    // Level 17
    { strength: 0, intelligence: 0, inhandPower: 82.8, baseAttackSpeed: 0.97, attackSpeedPercent: 24.82, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 67, magicalProtection: 51.5, damageMitigation: 0, maxHealth: 2182.5, healthRegen: 5.028, maxMana: 968, manaRegen: 6.25, cooldownRate: 0, movementSpeed: 375, xpRequirement: 11528 },
    // Level 18
    { strength: 0, intelligence: 0, inhandPower: 85.2, baseAttackSpeed: 0.97, attackSpeedPercent: 26.28, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 70, magicalProtection: 53, damageMitigation: 0, maxHealth: 2280, healthRegen: 5.236, maxMana: 1010, manaRegen: 6.5, cooldownRate: 0, movementSpeed: 375, xpRequirement: 12716 },
    // Level 19
    { strength: 0, intelligence: 0, inhandPower: 87.6, baseAttackSpeed: 0.97, attackSpeedPercent: 27.74, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 73, magicalProtection: 54.5, damageMitigation: 0, maxHealth: 2377.5, healthRegen: 5.444, maxMana: 1052, manaRegen: 6.75, cooldownRate: 0, movementSpeed: 375, xpRequirement: 13959 },
    // Level 20
    { strength: 0, intelligence: 0, inhandPower: 90, baseAttackSpeed: 0.97, attackSpeedPercent: 29.2, critChance: 0, critDamage: 1.65, flatPenetration: 0, percentPenetration: 0, lifesteal: 0, physicalProtection: 76, magicalProtection: 56, damageMitigation: 0, maxHealth: 2475, healthRegen: 5.652, maxMana: 1094, manaRegen: 7, cooldownRate: 0, movementSpeed: 375, xpRequirement: 15257 },
  ],
  basicAttack: {
    name: 'Thanatos Basic Attack',
    image: 'https://static.smite2.live/smite2/GODS/common/Icon_BasicAttack_Physical.webp',
    description: 'Deal Physical Damage to an enemy in front of you.\n\nThanatos has a 3 hit chain. Attacks in an order of 1 / 0.75 / 1.5x damage and swing time. The final swing hits all targets in range.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
      { label: 'Range', value: '1.92m' },
      { label: 'Cone Angle', value: '120 degrees' }
    ]
  },
  passive: {
    name: 'Harvester of Souls',
    image: 'https://static.smite2.live/smite2/GODS/Thanatos/Abilities/Icons_Thanatos_Passive.webp',
    description: 'You revel in the deaths of your foes.\n\n• Enemy gods at low health are revealed to you\n• Killing an enemy heals you\n• Killing a god reduces all of your cooldowns\n• Your abilities cost health instead of mana\n\nThe health threshold is determined by the rank of Hovering Death, using the first rank value when Hovering Death is unranked.',
    cooldown: '-',
    cost: '-',
    attributes: [
      { label: 'God Kill Heal', value: '15% of their Max Health' },
      { label: 'NPC Kill Heal', value: '10% of their Max Health' },
      { label: 'Cooldown Reduction', value: '-5s' }
    ]
  },
  abilities: {
    1: {
      name: 'Death Scythe',
      image: 'https://static.smite2.live/smite2/GODS/Thanatos/Abilities/Icons_Thanatos_A01.webp',
      description: 'Fling a scythe projectile that deals Physical Damage and Slows the first target hit.\n\n• You Heal for 50% of the total damage done\n• Gods take 12.5% of their Max Health as bonus Physical Damage\n\nProjectile stops on walls.',
      cooldown: '11s',
      cost: '4% Health',
      attributes: [
        { label: 'Damage', value: '95 | 165 | 235 | 305 | 375' },
        { label: 'Damage Scaling', value: '85% Strength' },
        { label: 'Slow', value: '20%' },
        { label: 'Slow Duration', value: '3s' },
        { label: 'Range', value: '11.2m' },
        { label: 'Radius', value: '0.48m' }
      ]
    },
    2: {
      name: 'Scent of Death',
      image: 'https://static.smite2.live/smite2/GODS/Thanatos/Abilities/Icons_Thanatos_A02.webp',
      description: 'Sense death, becoming Slow Immune and gaining Movement Speed and Penetration.\n\n• You also deal bonus damage to and run faster towards enemies at low health\n\nBonus Movement Speed scales from 0% effectiveness to 100% effectiveness. 0% when the targets health is at Execute Threshold and 100% when the target is 1 health.',
      cooldown: '13s',
      cost: '4% Health',
      attributes: [
        { label: 'Movement Speed', value: '8 | 12 | 16 | 20 | 24%' },
        { label: 'Bonus Movement Speed', value: 'Up to 8 | 12 | 16 | 20 | 24%' },
        { label: 'Flat Penetration', value: '8 | 12 | 16 | 20 | 24' },
        { label: 'Bonus Damage', value: '15%' }
      ]
    },
    3: {
      name: 'Soul Reap',
      image: 'https://static.smite2.live/smite2/GODS/Thanatos/Abilities/Icons_Thanatos_A03.webp',
      description: 'Swing your scythe, dealing Physical Damage and Silencing enemies in front of you.',
      cooldown: '14 | 13.5 | 13 | 12.5 | 12s',
      cost: '4% Health',
      attributes: [
        { label: 'Damage', value: '100 | 150 | 200 | 250 | 300' },
        { label: 'Damage Scaling', value: '80% Strength' },
        { label: 'Silence Duration', value: '1s' },
        { label: 'Cone Angle', value: '110 degrees' }
      ]
    },
    4: {
      name: 'Hovering Death',
      image: 'https://static.smite2.live/smite2/GODS/Thanatos/Abilities/Icons_Thanatos_A04.webp',
      description: 'Fly into the sky, then dive to a location dealing Physical Damage and Stunning enemies hit.\n\n• Enemies at low health are Executed instead\n\nThanatos gains 125% Movement Speed while flying. Execute kills enemies even if their death would normally be prevented by other god abilities. Thanatos is fully CC Immune during buildup, ascent, flight, and descent.',
      cooldown: '90s',
      cost: '6% Health',
      attributes: [
        { label: 'Damage', value: '110 | 145 | 180 | 215 | 250' },
        { label: 'Damage Scaling', value: '80% Strength' },
        { label: 'Execute Health %', value: '24 | 28 | 32 | 36 | 40%' },
        { label: 'Stun Duration', value: '1s' },
        { label: 'Radius', value: '2.4m' }
      ]
    }
  },
  aspects: [
    {
      id: 'reaping',
      name: 'Aspect of Reaping',
      image: 'https://static.smite2.live/smite2/ui/talents/t_talent_Heart_Scaling.webp',
      description: 'Harvester of Souls no longer Heals Thanatos but provides permanent Max Health. Additionally Soul Reap deals bonus damage and Heals Thanatos based on his Max Health.',
      basicAttack: {
        name: 'Thanatos Basic Attack',
        image: 'https://static.smite2.live/smite2/GODS/common/Icon_BasicAttack_Physical.webp',
        description: 'Deal Physical Damage to an enemy in front of you.\n\nThanatos has a 3 hit chain. Attacks in an order of 1 / 0.75 / 1.5x damage and swing time. The final swing hits all targets in range.',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'Damage Scaling', value: '100% Strength + 20% Intelligence' },
          { label: 'Range', value: '1.92m' },
          { label: 'Cone Angle', value: '120 degrees' }
        ]
      },
      passive: {
        name: 'Harvester of Souls',
        image: 'https://static.smite2.live/smite2/GODS/Thanatos/Abilities/Icons_Thanatos_Passive.webp',
        description: 'You revel in the deaths of your foes.\n\n• Enemy gods at low health are revealed to you\n• Killing an enemy provides permanent max Health\n• Killing a god reduces all of your cooldowns\n• Your abilities cost health instead of mana\n• NO LONGER HEALS ON KILL\n\nThe health threshold is determined by the rank of Hovering Death, using the first rank value when Hovering Death is unranked.',
        cooldown: '-',
        cost: '-',
        attributes: [
          { label: 'God Kill Health Gain', value: '25' },
          { label: 'Minion Kill Health Gain', value: '1.5' },
          { label: 'Cooldown Reduction', value: '-5s' }
        ]
      },
      abilities: {
        1: {
          name: 'Death Scythe',
          image: 'https://static.smite2.live/smite2/GODS/Thanatos/Abilities/Icons_Thanatos_A01.webp',
          description: 'Fling a scythe projectile that deals Physical Damage and Slows the first target hit.\n\n• You Heal for 50% of the total damage done\n• Gods take 12.5% of their Max Health as bonus Physical Damage\n\nProjectile stops on walls.',
          cooldown: '11s',
          cost: '4% Health',
          attributes: [
            { label: 'Damage', value: '95 | 165 | 235 | 305 | 375' },
            { label: 'Damage Scaling', value: '85% Strength' },
            { label: 'Slow', value: '20%' },
            { label: 'Slow Duration', value: '3s' },
            { label: 'Range', value: '11.2m' },
            { label: 'Radius', value: '0.48m' }
          ]
        },
        2: {
          name: 'Scent of Death',
          image: 'https://static.smite2.live/smite2/GODS/Thanatos/Abilities/Icons_Thanatos_A02.webp',
          description: 'Sense death, becoming Slow Immune and gaining Movement Speed and Penetration.\n\n• You also deal bonus damage to and run faster towards enemies at low health\n\nBonus Movement Speed scales from 0% effectiveness to 100% effectiveness. 0% when the targets health is at Execute Threshold and 100% when the target is 1 health.',
          cooldown: '13s',
          cost: '4% Health',
          attributes: [
            { label: 'Movement Speed', value: '8 | 12 | 16 | 20 | 24%' },
            { label: 'Bonus Movement Speed', value: 'Up to 8 | 12 | 16 | 20 | 24%' },
            { label: 'Flat Penetration', value: '8 | 12 | 16 | 20 | 24' },
            { label: 'Bonus Damage', value: '15%' }
          ]
        },
        3: {
          name: 'Soul Reap',
          image: 'https://static.smite2.live/smite2/GODS/Thanatos/Abilities/Icons_Thanatos_A03.webp',
          description: 'Swing your scythe, dealing Physical Damage and Silencing enemies in front of you.\n\n• Deal additional Physical Damage based off your max Health\n• Gain Healing per enemy hit, based off your max Health\n• BONUS DAMAGE AND HEALING BASED ON MAX HEALTH',
          cooldown: '14 | 13.5 | 13 | 12.5 | 12s',
          cost: '4% Health',
          attributes: [
            { label: 'Damage', value: '100 | 150 | 200 | 250 | 300' },
            { label: 'Damage Scaling', value: '80% Strength' },
            { label: 'Bonus Damage Scaling', value: '2.5% Max Health' },
            { label: 'Bonus Heal Scaling', value: '30% Max Health' },
            { label: 'Silence Duration', value: '1s' },
            { label: 'Cone Angle', value: '110 degrees' }
          ]
        },
        4: {
          name: 'Hovering Death',
          image: 'https://static.smite2.live/smite2/GODS/Thanatos/Abilities/Icons_Thanatos_A04.webp',
          description: 'Fly into the sky, then dive to a location dealing Physical Damage and Stunning enemies hit.\n\n• Enemies at low health are Executed instead\n\nThanatos gains 125% Movement Speed while flying. Execute kills enemies even if their death would normally be prevented by other god abilities. Thanatos is fully CC Immune during buildup, ascent, flight, and descent.',
          cooldown: '90s',
          cost: '6% Health',
          attributes: [
            { label: 'Damage', value: '110 | 145 | 180 | 215 | 250' },
            { label: 'Damage Scaling', value: '80% Strength' },
            { label: 'Execute Health %', value: '24 | 28 | 32 | 36 | 40%' },
            { label: 'Stun Duration', value: '1s' },
            { label: 'Radius', value: '2.4m' }
          ]
        }
      }
    }
  ],
  recommendedBuilds: []
};