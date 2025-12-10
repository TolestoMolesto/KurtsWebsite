import { Item } from '../../types';

// --- TIER 1 STARTERS ---
export const selflessness: Item = { id: 'selflessness', name: 'Selflessness', cost: 550, type: 'Starter', category: 'Defense', stats: { 'Phys. Prot': '10', 'Mag. Prot': '10', 'Max Health': '60' }, image: 'https://image2url.com/images/1764386574228-16d65928-7aee-46f9-b1b8-f3e765c99e62.png', passive: 'Assist Minion/Jungle: +7 Gold, +8 Heal, +5 Mana. Ally Hard CC\'d within 8.8m: Shield for 25 +5% Max HP. CD 30s.' };
export const warFlag: Item = { id: 'war-flag', name: 'War Flag', cost: 550, type: 'Starter', category: 'Utility', stats: { 'Phys. Prot': '10', 'Mag. Prot': '10', 'Max Health': '60' }, image: 'https://image2url.com/images/1764386588025-fa33d927-a316-4c7d-b889-6a823956e6ba.png', passive: 'Assist Minion/Jungle: +7 Gold, +8 Heal, +5 Mana. You and allies within 8.8m gain +0.5% Move Speed and +1.25% Atk Speed. Stacks 6x, lasts 10s.' };
export const bumbasCudgel: Item = { id: 'bumbas-cudgel', name: 'Bumba\'s Cudgel', cost: 650, type: 'Starter', category: 'Offense', stats: { 'Max Health': '75', 'Max Mana': '50', 'Adaptive': '15|20' }, image: 'https://image2url.com/images/1764422664337-0d9a7462-1141-4c05-b399-1091f996bda9.png', passive: '+50% Dmg to Jungle, -25% to Minions. Ability: Buff next Attack in 8s. +15 True Dmg, +90 to Jungle in 1.92m. -0.5s CDs. Jungle Kill: Heal 10% HP, +30 Mana.' };
export const warriorsAxe: Item = { id: 'warriors-axe', name: 'Warrior\'s Axe', cost: 650, type: 'Starter', category: 'Defense', stats: { 'Strength': '12', 'Phys. Prot': '10', 'Mag. Prot': '10' }, image: 'https://image2url.com/images/1764422351901-771be065-eb6c-4969-8eb8-defdae5d1dbd.png', passive: 'Damage a God: +30 (+2/Lvl) Bonus True Dmg, +30 (+1/Lvl) Heal. 1 God per activation. CD 8s.' };
export const bluestone: Item = { id: 'bluestone', name: 'Bluestone Pendant', cost: 650, type: 'Starter', category: 'Offense', stats: { 'Strength': '15', 'HP5': '2.5', 'MP5': '2' }, image: 'https://image2url.com/images/1764386614946-51465c3b-62e3-4409-8a4d-86fe17da39b2.png', passive: 'Ability Hit: +32 Physical Dmg over 2s. Subsequent hits on same target: 50% bonus damage for 3s.' };
export const gildedArrow: Item = { id: 'gilded-arrow', name: 'Gilded Arrow', cost: 650, type: 'Starter', category: 'Offense', stats: { 'Atk Speed': '10%', 'Basic Atk Power': '20' }, image: 'https://image2url.com/images/1764386628485-ae968c98-087b-4ed5-8db2-49ac84bff81b.png', passive: 'Every 10s: Mark highest HP enemy minion/jungle within 12.8m. Kill marked target: +3 Gold, +15% Atk Speed for 8s, +30 Mana.' };
export const bumbasDagger: Item = { id: 'bumbas-dagger', name: 'Bumba\'s Golden Dagger', cost: 650, type: 'Starter', category: 'Offense', stats: { 'Max Health': '50', 'Atk Speed': '10%', 'Adaptive': '15|20' }, image: 'https://image2url.com/images/1764386752950-0ab4e987-54e0-41c9-9eab-00d8be2a27ea.png', passive: '+50% Dmg to Jungle, -25% to Minions. Attacks: 20% bonus Physical Dmg to Jungle in 1.92m. Jungle Kill: Heal 10% HP, +30 Mana.' };
export const leatherCowl: Item = { id: 'leather-cowl', name: 'Leather Cowl', cost: 600, type: 'Starter', category: 'Offense', stats: { 'Strength': '15', 'Lifesteal': '4%' }, image: 'https://image2url.com/images/1764386765956-1eca1565-598b-411f-982d-47508d21d3f5.png', passive: 'Within 8.8m of ally God: +15% Atk Speed. Alone: +5% Move Speed.' };
export const sandsOfTime: Item = { id: 'sands-time', name: 'Sands of Time', cost: 650, type: 'Starter', category: 'Utility', stats: { 'Intelligence': '25', 'MP5': '2', 'Cooldown': '10%' }, image: 'https://image2url.com/images/1764386778216-5a54d0c8-9f14-429a-b5b2-acf382ccb51d.png', passive: '+0.6 Mana/s per 10% missing Mana. Damaging Abilities deal +10 True Dmg to Minions.' };
export const vampiric: Item = { id: 'vampiric', name: 'Vampiric Shroud', cost: 650, type: 'Starter', category: 'Offense', stats: { 'Intelligence': '20', 'Max Health': '100' }, image: 'https://image2url.com/images/1764386790874-02b7094d-b77e-45b9-8d31-175741bbf492.png', passive: 'Ability Hit: +3 Health, +4 Mana. If target is a God: Triple the effect. Once per target per Ability.' };
export const conduit: Item = { id: 'conduit', name: 'Conduit Gem', cost: 650, type: 'Starter', category: 'Offense', stats: { 'Intelligence': '30', 'Max Mana': '100', 'MP5': '1' }, image: 'https://image2url.com/images/1764386801245-793a7c16-f271-494b-b9d2-400694e81f4a.png', passive: 'Every 0.5s: Gain 1 Stack (max 20). Damaging Abilities deal 3 True Dmg per Stack (half vs Gods), then remove all Stacks.' };
export const deathsToll: Item = { id: 'deaths-toll', name: 'Death\'s Toll', cost: 650, type: 'Starter', category: 'Offense', stats: { 'Strength': '15', 'Max Health': '100' }, image: 'https://image2url.com/images/1764386812304-49d457d9-3c8c-44d7-bd2c-c45ceddabb59.png', passive: 'Attack Hit: +2 (+0.3% Max HP) Heal, +1 (+0.1% Max Mana) Restore.' };

// --- TIER 2 STARTERS (UPGRADED) ---
export const heroism: Item = { id: 'heroism', name: 'Heroism', cost: 1800, type: 'Starter', category: 'Defense', stats: { 'Phys. Prot': '30', 'Mag. Prot': '30', 'Max Health': '200', 'GP5': '1' }, image: 'https://image2url.com/images/1764386919912-4fba1bda-f992-4c40-b1a7-453ae48de391.png', passive: 'Ally within 8.8m hit by Hard CC: Shield them (50+10% Max HP). CD: 15s.', buildsFrom: ['selflessness'] };
export const warBanner: Item = { id: 'war-banner', name: 'War Banner', cost: 1800, type: 'Starter', category: 'Utility', stats: { 'Phys. Prot': '30', 'Mag. Prot': '30', 'Max Health': '200', 'GP5': '1' }, image: 'https://image2url.com/images/1764392115403-09bfa6ec-e40b-4a46-960e-6d4876bc7ea4.png', passive: 'Assist Minion/Jungle: You and allies within 8.8m gain +1% Health Heal, +1.25% Mana Restore, +3.5% Move Speed, +6.5% Atk Speed. Move/Atk buff lasts 10s, stacks 6x.', buildsFrom: ['war-flag'] };
export const sundeingAxe: Item = { id: 'sundering-axe', name: 'Sundering Axe', cost: 2150, type: 'Starter', category: 'Defense', stats: { 'Strength': '30', 'Phys. Prot': '30', 'Mag. Prot': '30' }, image: 'https://image2url.com/images/1764386978295-67d72a7f-cceb-431f-bba6-d60ec0a69fe7.png', passive: 'Damage a God: +150 (+10% Protections from Items) Bonus True Dmg, +125 Heal. Hits one God per activation. CD: 8s.', buildsFrom: ['warriors-axe'] };
export const bluestoneBrooch: Item = { id: 'bluestone-brooch', name: 'Bluestone Brooch', cost: 2150, type: 'Starter', category: 'Offense', stats: { 'Strength': '30', 'Max Health': '200', 'HP5': '7', 'MP5': '5' }, image: 'https://image2url.com/images/1764386987399-9a864f30-0818-40a6-aaa9-7fd1e951a806.png', passive: 'Ability Hit: +100 Physical Damage over 2s. Gods take additional damage = 7.5% of their current Health. Subsequent hits on same target: 50% bonus damage for 3s.', buildsFrom: ['bluestone'] };
export const huntersCowl: Item = { id: 'hunters-cowl', name: 'Hunter\'s Cowl', cost: 2150, type: 'Starter', category: 'Offense', stats: { 'Strength': '55', 'Lifesteal': '5%' }, image: 'https://image2url.com/images/1764387001217-0968d1b2-2bf3-42e6-852f-bc97991e4245.png', passive: 'Within 8.8m of allied God: +30% Atk Speed and +5% Lifesteal. Buff shared with allies within 8.8m. Alone: +10% Move Speed.', buildsFrom: ['leather-cowl'] };
export const deathsEmbrace: Item = { id: 'deaths-embrace', name: 'Death\'s Embrace', cost: 2150, type: 'Starter', category: 'Offense', stats: { 'Strength': '40', 'Max Health': '150', 'Lifesteal': '5%' }, image: 'https://image2url.com/images/1764387014654-e7b829d4-f97a-47e1-8e04-5b5558e7938b.png', passive: 'Attack Hit: +1% Max Health Heal, +2% Max Mana Restore, -0.33s Non Ultimate Cooldowns.', buildsFrom: ['deaths-toll'] };
export const pendulumAges: Item = { id: 'pendulum-ages', name: 'Pendulum Of The Ages', cost: 2150, type: 'Starter', category: 'Utility', stats: { 'Intelligence': '70', 'MP5': '4', 'Cooldown': '20' }, image: 'https://image2url.com/images/1764387030446-919d226b-7740-41d7-8414-bec4b0e9aece.png', passive: '+4 Mana per second per 10% of missing Mana. +7 Intelligence per 10% of available Mana.', buildsFrom: ['sands-time'] };
export const archmagesGem: Item = { id: 'archmages-gem', name: 'Archmage\'s Gem', cost: 2150, type: 'Starter', category: 'Offense', stats: { 'Intelligence': '90', 'Max Mana': '150', 'MP5': '4' }, image: 'https://image2url.com/images/1764387045286-3f177da9-c306-400a-93ea-99d0b785d6e2.png', passive: 'Ability Hit a God: Deal bonus Magical Damage = 40% of your Intelligence. CD: 20s.', buildsFrom: ['conduit'] };
export const sharpshooter: Item = { id: 'sharpshooter', name: 'Sharpshooter\'s Arrow', cost: 2150, type: 'Starter', category: 'Offense', stats: { 'Basic Power': '50', 'Atk Speed': '15%', 'Crit Chance': '15%' }, image: 'https://image2url.com/images/1764387057482-ca919513-76e3-41bf-8116-6759861fda72.png', passive: '+5% Gold Gain from Kills and Assists. +10% Attack Damage against enemy Gods over 6m away.', buildsFrom: ['gilded-arrow'] };
export const bumbasSpear: Item = { id: 'bumbas-spear', name: 'Bumba\'s Spear', cost: 2150, type: 'Starter', category: 'Offense', stats: { 'Max Health': '200', 'Atk Speed': '25%', 'Adaptive': '+35 Str or +60 Int' }, image: 'https://image2url.com/images/1764387069657-979989b1-1086-47cd-92d5-c0ae581c6755.png', passive: '+50% damage to Jungle Monsters & Bosses, -25% damage to Minions. On Attack Hit: 20% bonus Physical Damage to enemies within 1.92m. On Jungle/Bosses Slain: +10% Strength & Intelligence for 30s.', buildsFrom: ['bumbas-dagger'] };
export const bumbasHammer: Item = { id: 'bumbas-hammer', name: 'Bumba\'s Hammer', cost: 2150, type: 'Starter', category: 'Offense', stats: { 'Max Health': '200', 'Cooldown': '10', 'Adaptive': '+35 Str or +60 Int' }, image: 'https://image2url.com/images/1764387083777-727537f7-0bc7-4bbd-b091-25f685e4ae8a.png', passive: '+50% damage to Jungle Monsters & Bosses, -25% damage to Minions. Ability Used: Next Attack deals +40 True Damage, +240 to Jungle Monsters & Bosses to enemies within 1.92m. Hit this Attack: -0.75s Cooldowns, +60 Heal. On Jungle/Bosses Slain: +10 Cooldown Rate for 30s.', buildsFrom: ['bumbas-cudgel'] };
export const bloodSoakedShroud: Item = { id: 'blood-soaked-shroud', name: 'Blood-soaked Shroud', cost: 2150, type: 'Starter', category: 'Offense', stats: { 'Intelligence': '60', 'Max Health': '275' }, image: 'https://image2url.com/images/1764387095161-77f7a216-6f91-4301-b05d-c0327fe1de84.png', passive: 'Ability Hit: +1% Max Health Heal, +1% Max Mana Recovery. If target is a god: +2% Max Health Heal, +2% Max Mana Recovery. Heal increases by +0.1% per Kill you have this match.', buildsFrom: ['vampiric'] };

export const STARTERS: Item[] = [
  selflessness,
  warFlag,
  bumbasCudgel,
  warriorsAxe,
  bluestone,
  gildedArrow,
  bumbasDagger,
  leatherCowl,
  sandsOfTime,
  vampiric,
  conduit,
  deathsToll,
  heroism,
  warBanner,
  sundeingAxe,
  bluestoneBrooch,
  huntersCowl,
  deathsEmbrace,
  pendulumAges,
  archmagesGem,
  sharpshooter,
  bumbasSpear,
  bumbasHammer,
  bloodSoakedShroud,
];
