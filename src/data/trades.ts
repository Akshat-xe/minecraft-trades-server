export type TradeType =
  | 'upgrade' | 'conversion' | 'gear' | 'luxury' | 'fun'
  | 'grind' | 'builder' | 'survivalist' | 'armory' | 'exclusive' | 'challenge';

export interface TradeItem {
  itemId: string;
  quantity: number;
  quantityLabel?: string;
  enchanted?: boolean;
  enchantments?: string[];
  note?: string;
  isChest?: boolean;
}

export interface Trade {
  id: string;
  optionNumber: string;
  name: string;
  type: TradeType;
  gives: TradeItem[];
  receives: TradeItem[];
  businessLogic: string;
  alternatives?: string;
  condition?: string;
}

export interface Market {
  id: string;
  name: string;
  currencyItemId: string;
  themeColor: string;
  glowColor: string;
  description: string;
  subtitle: string;
  tier: 1 | 2 | 3 | 4;
  trades: Trade[];
}

// ─────────────────────────────────────────────────────────────
// TIER 1: CORE WEALTH
// ─────────────────────────────────────────────────────────────

const diamondTrades: Trade[] = [
  {
    id: 'd1', optionNumber: '1', name: 'The Upgrade', type: 'upgrade',
    gives: [{ itemId: 'diamond', quantity: 22 }],
    receives: [{ itemId: 'netherite_ingot', quantity: 1 }],
    businessLogic: 'Skips the Nether entirely for skilled miners.',
  },
  {
    id: 'd2', optionNumber: '2', name: 'The Conversion', type: 'conversion',
    gives: [{ itemId: 'diamond', quantity: 1 }],
    receives: [{ itemId: 'gold_block', quantity: 1 }, { itemId: 'iron_block', quantity: 1 }],
    businessLogic: 'A great deal for builders who need base metals fast.',
  },
  {
    id: 'd3', optionNumber: '3', name: 'The Gear', type: 'gear',
    gives: [{ itemId: 'diamond', quantity: 6 }],
    receives: [{
      itemId: 'diamond_pickaxe', quantity: 1, enchanted: true,
      enchantments: ['Efficiency V', 'Unbreaking III', 'Fortune III'],
      note: 'God Pickaxe',
    }],
    businessLogic: 'Sells them the exact tool they need to bring you more Diamonds.',
  },
  {
    id: 'd4', optionNumber: '4', name: 'The Luxury', type: 'luxury',
    gives: [{ itemId: 'diamond', quantity: 29 }],
    receives: [{ itemId: 'shulker_box', quantity: 1 }],
    businessLogic: 'Portable storage. Everyone needs it.',
  },
  {
    id: 'd5', optionNumber: '5', name: 'The Fun Package', type: 'fun',
    gives: [{ itemId: 'diamond', quantity: 1 }],
    receives: [{ itemId: 'oak_planks', quantity: 192, quantityLabel: '3 Stacks' }],
    businessLogic: 'A completely fun, cosmetic purchase for their base.',
  },
  {
    id: 'd6', optionNumber: '6', name: 'The Weak Player Grind', type: 'grind',
    gives: [{ itemId: 'water_bucket', quantity: 1, isChest: true, quantityLabel: '1 Double Chest' }],
    receives: [
      { itemId: 'diamond_sword',   quantity: 1, enchanted: true, enchantments: ['Sharpness V', 'Unbreaking III', 'Looting III'] },
      { itemId: 'diamond_pickaxe', quantity: 1, enchanted: true, enchantments: ['Efficiency V', 'Unbreaking III', 'Fortune III'] },
      { itemId: 'diamond_axe',     quantity: 1, enchanted: true, enchantments: ['Sharpness V', 'Efficiency V'] },
      { itemId: 'diamond_shovel',  quantity: 1, enchanted: true, enchantments: ['Efficiency V', 'Silk Touch'] },
      { itemId: 'diamond_hoe',     quantity: 1, enchanted: true, enchantments: ['Efficiency V'] },
    ],
    businessLogic: 'Requires zero skill, just massive dedication to scooping water. Hilarious for you, profitable for them.',
  },
  {
    id: 'd7', optionNumber: '7', name: 'The Mega Grind', type: 'grind',
    gives: [{ itemId: 'water_bucket', quantity: 2, isChest: true, quantityLabel: '2 Double Chests' }],
    receives: [
      { itemId: 'diamond_helmet',     quantity: 1, enchanted: true, enchantments: ['Thorns III', 'Protection IV'] },
      { itemId: 'diamond_chestplate', quantity: 1, enchanted: true, enchantments: ['Thorns III', 'Protection IV'] },
      { itemId: 'diamond_leggings',   quantity: 1, enchanted: true, enchantments: ['Thorns III', 'Protection IV'] },
      { itemId: 'diamond_boots',      quantity: 1, enchanted: true, enchantments: ['Thorns III', 'Protection IV'] },
      { itemId: 'diamond_sword',      quantity: 1, note: 'Unenchanted' },
      { itemId: 'diamond_pickaxe',    quantity: 1, note: 'Unenchanted' },
      { itemId: 'diamond_axe',        quantity: 1, note: 'Unenchanted' },
      { itemId: 'diamond_shovel',     quantity: 1, note: 'Unenchanted' },
      { itemId: 'diamond_hoe',        quantity: 1, note: 'Unenchanted' },
    ],
    businessLogic: 'Maximum dedication. Full armor set with max Thorns + every tool. Pure chaos.',
  },
]

const ironTrades: Trade[] = [
  {
    id: 'i1', optionNumber: '1', name: 'The Upgrade', type: 'upgrade',
    gives: [{ itemId: 'iron_block', quantity: 40 }],
    receives: [{ itemId: 'elytra', quantity: 1, enchanted: true, enchantments: ['Mending', 'Unbreaking III'] }],
    businessLogic: 'Let the rich industrialists buy the ability to fly.',
  },
  {
    id: 'i2', optionNumber: '2', name: 'The Conversion', type: 'conversion',
    gives: [{ itemId: 'iron_block', quantity: 5 }],
    receives: [{ itemId: 'diamond', quantity: 5 }],
    businessLogic: 'A standard conversion rate to keep money flowing.',
  },
  {
    id: 'i3', optionNumber: '3', name: 'The Gear', type: 'gear',
    gives: [{ itemId: 'iron_block', quantity: 10 }],
    receives: [{ itemId: 'experience_bottle', quantity: 64 }],
    businessLogic: 'Fast XP to mend their tools without a mob grinder.',
  },
  {
    id: 'i4', optionNumber: '4', name: 'The Builder', type: 'builder',
    gives: [{ itemId: 'iron_block', quantity: 15 }],
    receives: [
      { itemId: 'powered_rail', quantity: 128, quantityLabel: '2 Stacks' },
      { itemId: 'rail',          quantity: 64,  quantityLabel: '1 Stack' },
      { itemId: 'redstone_torch',quantity: 64,  quantityLabel: '1 Stack' },
    ],
    businessLogic: 'Sells redstone engineers their dream supplies.',
  },
  {
    id: 'i5', optionNumber: '5', name: 'The Fun Package', type: 'fun',
    gives: [{ itemId: 'iron_block', quantity: 2 }],
    receives: [{ itemId: 'bow', quantity: 1 }, { itemId: 'arrow', quantity: 32 }],
    businessLogic: 'A prank package they can use to troll their friends.',
  },
  {
    id: 'i6', optionNumber: '6', name: 'The Weak Player Grind', type: 'grind',
    gives: [{ itemId: 'leaves_pile', quantity: 1, isChest: true, quantityLabel: '1 Double Chest', note: 'Any waste items' }],
    receives: [{ itemId: 'iron_block', quantity: 2 }],
    businessLogic: 'Completely safe. They just need shears and a forest. You get landscaping materials!',
  },
]

const goldTrades: Trade[] = [
  {
    id: 'g1', optionNumber: '1', name: 'The Upgrade', type: 'upgrade',
    gives: [{ itemId: 'gold_block', quantity: 15 }],
    receives: [{ itemId: 'beacon', quantity: 1 }],
    businessLogic: 'Skips fighting the Wither Boss.',
  },
  {
    id: 'g2', optionNumber: '2', name: 'The Conversion', type: 'conversion',
    gives: [{ itemId: 'gold_block', quantity: 3 }],
    receives: [{ itemId: 'diamond', quantity: 8 }],
    businessLogic: 'Standard exchange rate.',
  },
  {
    id: 'g3', optionNumber: '3', name: 'The Gear', type: 'gear',
    gives: [{ itemId: 'gold_block', quantity: 7 }],
    receives: [{ itemId: 'enchanted_golden_apple', quantity: 1, enchanted: true }],
    businessLogic: 'The ultimate lifesaver for boss fights.',
  },
  {
    id: 'g4', optionNumber: '4', name: 'The Survivalist', type: 'survivalist',
    gives: [{ itemId: 'gold_block', quantity: 5 }],
    receives: [
      { itemId: 'obsidian',   quantity: 5 },
      { itemId: 'end_crystal',quantity: 5 },
    ],
    businessLogic: 'Instant Nether portal setup without mining obsidian.',
  },
  {
    id: 'g5', optionNumber: '5', name: 'The Fun Package', type: 'fun',
    gives: [{ itemId: 'gold_block', quantity: 1 }],
    receives: [{ itemId: 'jukebox', quantity: 1 }, { itemId: 'music_disc', quantity: 1, note: 'Your choice' }],
    businessLogic: 'Pure chaotic fun for their base.',
  },
  {
    id: 'g6', optionNumber: '6', name: 'The Weak Player Grind', type: 'grind',
    gives: [{ itemId: 'snowball', quantity: 1, isChest: true, quantityLabel: '1 Double Chest', note: 'Stacks of 16' }],
    receives: [{ itemId: 'gold_block', quantity: 3 }],
    businessLogic: 'Safe, silly, and requires standing in a snow biome with a shovel for an hour.',
  },
]

const emeraldTrades: Trade[] = [
  {
    id: 'e1', optionNumber: '1', name: 'The Upgrade', type: 'upgrade',
    gives: [{ itemId: 'emerald', quantity: 192, quantityLabel: '3 Stacks (192)' }],
    receives: [{ itemId: 'totem_of_undying', quantity: 1, enchanted: true }],
    businessLogic: 'Sells ultimate safety to the rich farmers.',
  },
  {
    id: 'e2', optionNumber: '2', name: 'The Conversion', type: 'conversion',
    gives: [{ itemId: 'emerald', quantity: 32 }],
    receives: [{ itemId: 'iron_block', quantity: 5 }],
    businessLogic: 'Allows them to convert crops into industrial metal.',
    alternatives: 'OR 2 Gold Blocks  ·  OR 1 Diamond Block',
  },
  {
    id: 'e3', optionNumber: '3', name: 'The Gear', type: 'gear',
    gives: [{ itemId: 'emerald', quantity: 64, quantityLabel: '1 Stack (64)' }],
    receives: [
      { itemId: 'mending_book',        quantity: 1, enchanted: true, enchantments: ['Mending'] },
      { itemId: 'unbreaking_book',     quantity: 1, enchanted: true, enchantments: ['Unbreaking III'] },
      { itemId: 'enchant_book_weapon', quantity: 1, enchanted: true, enchantments: ['Sharpness V / Efficiency V / Smite V'], note: 'Your choice' },
    ],
    businessLogic: 'The most demanded books in the game — three at once.',
  },
  {
    id: 'e4', optionNumber: '4', name: 'The Armory', type: 'armory',
    gives: [{ itemId: 'emerald', quantity: 128, quantityLabel: '2 Stacks (128)' }],
    receives: [
      { itemId: 'diamond_helmet',     quantity: 1, note: 'Unenchanted' },
      { itemId: 'diamond_chestplate', quantity: 1, note: 'Unenchanted' },
      { itemId: 'diamond_leggings',   quantity: 1, note: 'Unenchanted' },
      { itemId: 'diamond_boots',      quantity: 1, note: 'Unenchanted' },
    ],
    businessLogic: 'A fast armor replacement after they die in lava.',
  },
  {
    id: 'e45', optionNumber: '4.5', name: 'The Elite Armory', type: 'armory',
    gives: [{ itemId: 'emerald', quantity: 256, quantityLabel: '4 Stacks (256)' }],
    receives: [
      { itemId: 'diamond_helmet',     quantity: 1, enchanted: true, enchantments: ['Protection IV', 'Unbreaking III', 'Mending'] },
      { itemId: 'diamond_chestplate', quantity: 1, enchanted: true, enchantments: ['Protection IV', 'Unbreaking III', 'Mending'] },
      { itemId: 'diamond_leggings',   quantity: 1, enchanted: true, enchantments: ['Protection IV', 'Unbreaking III', 'Mending'] },
      { itemId: 'diamond_boots',      quantity: 1, enchanted: true, enchantments: ['Protection IV', 'Unbreaking III', 'Feather Falling IV', 'Mending'] },
    ],
    businessLogic: 'The full enchanted armory package. Max protection, max durability.',
  },
  {
    id: 'e5', optionNumber: '5', name: 'The Fun Package', type: 'fun',
    gives: [{ itemId: 'emerald', quantity: 16 }],
    receives: [{ itemId: 'cake', quantity: 10 }],
    businessLogic: 'A hilarious food supply that they can place all over their base.',
  },
  {
    id: 'e6', optionNumber: '6', name: 'The Weak Player Grind', type: 'grind',
    gives: [
      { itemId: 'bow',    quantity: 15, note: 'Any durability' },
      { itemId: 'shield', quantity: 5,  note: 'Any durability' },
    ],
    receives: [{ itemId: 'emerald', quantity: 40 }],
    businessLogic: 'The ultimate useless item grind. Requires chopping wood and endless crafting. Pure comedic labor.',
    alternatives: '15 Bows  OR  5 Shields  (either works)',
  },
]

// ─────────────────────────────────────────────────────────────
// TIER 2: THE ENGINEER'S & ARCHITECT'S COINS
// ─────────────────────────────────────────────────────────────

const redstoneTrades: Trade[] = [
  {
    id: 'r1', optionNumber: '1', name: 'The Upgrade', type: 'upgrade',
    gives: [{ itemId: 'redstone_block', quantity: 30 }],
    receives: [{ itemId: 'ancient_debris', quantity: 1 }],
    businessLogic: 'Converting power into raw strength.',
  },
  {
    id: 'r2', optionNumber: '2', name: 'The Conversion', type: 'conversion',
    gives: [{ itemId: 'redstone_block', quantity: 5 }],
    receives: [{ itemId: 'iron_block', quantity: 1 }],
    businessLogic: "For when their redstone farm is faster than their iron farm.",
  },
  {
    id: 'r3', optionNumber: '3', name: 'The Gear', type: 'gear',
    gives: [{ itemId: 'redstone_block', quantity: 10 }],
    receives: [
      { itemId: 'sticky_piston', quantity: 10 },
      { itemId: 'observer',      quantity: 5 },
    ],
    businessLogic: 'Essential components that are a pain to craft.',
  },
  {
    id: 'r4', optionNumber: '4', name: 'The Luxury', type: 'luxury',
    gives: [{ itemId: 'redstone_block', quantity: 20 }],
    receives: [{ itemId: 'heart_of_the_sea', quantity: 1 }],
    businessLogic: 'For the engineer who wants a high-tech underwater base.',
  },
  {
    id: 'r5', optionNumber: '5', name: 'The Fun Package', type: 'fun',
    gives: [{ itemId: 'redstone_block', quantity: 3 }],
    receives: [
      { itemId: 'note_block', quantity: 16, note: 'The Disco' },
      { itemId: 'white_wool', quantity: 16, note: 'Colorful Wool' },
    ],
    businessLogic: 'Let them make some noise.',
  },
  {
    id: 'r6', optionNumber: '6', name: 'The Grind', type: 'grind',
    gives: [{ itemId: 'jungle_button', quantity: 1, isChest: true, quantityLabel: '1 Double Chest', note: 'Jungle Buttons' }],
    receives: [{ itemId: 'redstone_block', quantity: 10 }],
    businessLogic: 'A mountain of tiny jungle buttons earns you power blocks.',
  },
]

const lapisTrades: Trade[] = [
  {
    id: 'l1', optionNumber: '1', name: 'The Upgrade', type: 'upgrade',
    gives: [{ itemId: 'lapis_block', quantity: 38 }],
    receives: [{ itemId: 'totem_of_undying', quantity: 1, enchanted: true }],
    businessLogic: 'Trade magic for a second life.',
  },
  {
    id: 'l2', optionNumber: '2', name: 'The Conversion', type: 'conversion',
    gives: [{ itemId: 'lapis_block', quantity: 8 }],
    receives: [{ itemId: 'gold_block', quantity: 2 }],
    businessLogic: 'Fair trade for the shiny stuff.',
  },
  {
    id: 'l3', optionNumber: '3', name: 'The Gear', type: 'gear',
    gives: [{ itemId: 'lapis_block', quantity: 30 }],
    receives: [
      { itemId: 'diamond_helmet',     quantity: 1, enchanted: true, enchantments: ['Thorns III', 'Mending', 'Unbreaking III'] },
      { itemId: 'diamond_chestplate', quantity: 1, enchanted: true, enchantments: ['Thorns III', 'Mending', 'Unbreaking III'] },
      { itemId: 'diamond_leggings',   quantity: 1, enchanted: true, enchantments: ['Thorns III', 'Mending', 'Unbreaking III'] },
      { itemId: 'diamond_boots',      quantity: 1, enchanted: true, enchantments: ['Thorns III', 'Mending', 'Unbreaking III'] },
    ],
    businessLogic: 'Full Diamond Armor with max Thorns, Mending, and Unbreaking.',
  },
  {
    id: 'l4', optionNumber: '4', name: 'The Luxury', type: 'luxury',
    gives: [{ itemId: 'lapis_block', quantity: 12 }],
    receives: [{ itemId: 'trident', quantity: 1, enchanted: true, enchantments: ['Loyalty III'] }],
    businessLogic: 'The magic weapon of the sea.',
  },
  {
    id: 'l5', optionNumber: '5', name: 'The Fun Package', type: 'fun',
    gives: [{ itemId: 'lapis_block', quantity: 4 }],
    receives: [
      { itemId: 'blue_dye', quantity: 64, note: 'The Artist' },
      { itemId: 'painting',  quantity: 64 },
    ],
    businessLogic: 'For the base decorators.',
  },
  {
    id: 'l6', optionNumber: '6', name: 'The Grind', type: 'grind',
    gives: [{ itemId: 'double_chest', quantity: 2, isChest: true, quantityLabel: '2 Single Chests', note: 'Anything 50%+ blue' }],
    receives: [{ itemId: 'diamond', quantity: 10 }],
    businessLogic: 'Any shades of blue items — at least 50% blue in color. Fill two single chests.',
  },
]

const quartzTrades: Trade[] = [
  {
    id: 'q1', optionNumber: '1', name: 'The Upgrade', type: 'upgrade',
    gives: [{ itemId: 'quartz_block', quantity: 64, quantityLabel: '1 Stack (64)' }],
    receives: [{ itemId: 'netherite_scrap', quantity: 1 }],
    businessLogic: 'Rare stone for rare metal.',
  },
  {
    id: 'q2', optionNumber: '2', name: 'The Conversion', type: 'conversion',
    gives: [{ itemId: 'quartz_block', quantity: 10 }],
    receives: [{ itemId: 'emerald', quantity: 64, quantityLabel: '1 Stack (64)' }],
    businessLogic: "Trading building material for villager currency.",
  },
  {
    id: 'q3', optionNumber: '3', name: 'The Gear', type: 'gear',
    gives: [{ itemId: 'quartz_block', quantity: 20 }],
    receives: [{ itemId: 'sea_lantern', quantity: 32 }],
    businessLogic: 'The best light source for quartz buildings.',
  },
  {
    id: 'q4', optionNumber: '4', name: 'The Luxury', type: 'luxury',
    gives: [{ itemId: 'quartz_block', quantity: 15 }],
    receives: [{ itemId: 'sponge', quantity: 1 }],
    businessLogic: 'Builders always need sponges to clear water.',
  },
  {
    id: 'q5', optionNumber: '5', name: 'The Fun Package', type: 'fun',
    gives: [{ itemId: 'quartz_block', quantity: 5 }],
    receives: [
      { itemId: 'snow_block',     quantity: 32, note: 'The Snowman' },
      { itemId: 'carved_pumpkin', quantity: 16 },
    ],
    businessLogic: 'A ready-to-build army of Snow Golems.',
  },
  {
    id: 'q6', optionNumber: '6', name: 'The Grind', type: 'grind',
    gives: [{ itemId: 'diorite', quantity: 1, isChest: true, quantityLabel: '1 Double Chest', note: 'Diorite — everyone hates it' }],
    receives: [{ itemId: 'quartz_block', quantity: 20 }],
    businessLogic: 'Everyone hates Diorite. Make them bring it all to you.',
  },
]

const coalTrades: Trade[] = [
  {
    id: 'c1', optionNumber: '1', name: 'The Upgrade', type: 'upgrade',
    gives: [{ itemId: 'coal_block', quantity: 64, quantityLabel: '1 Stack (64)' }],
    receives: [{ itemId: 'diamond', quantity: 10 }],
    businessLogic: 'The reward for endless strip-mining.',
  },
  {
    id: 'c2', optionNumber: '2', name: 'The Conversion', type: 'conversion',
    gives: [{ itemId: 'coal_block', quantity: 12 }],
    receives: [
      { itemId: 'iron_block',      quantity: 2 },
      { itemId: 'gold_block',      quantity: 2 },
      { itemId: 'sea_lantern',     quantity: 2 },
      { itemId: 'potion_fire_res', quantity: 1, note: '3 Minutes' },
    ],
    businessLogic: 'Fuel converted into metal, light, and protection.',
  },
  {
    id: 'c3', optionNumber: '3', name: 'The Gear', type: 'gear',
    gives: [{ itemId: 'coal_block', quantity: 8 }],
    receives: [{ itemId: 'bow', quantity: 1, enchanted: true, enchantments: ['Power V'] }],
    businessLogic: 'A heavy hitter for the early game.',
  },
  {
    id: 'c4', optionNumber: '4', name: 'The Luxury', type: 'luxury',
    gives: [{ itemId: 'coal_block', quantity: 20 }],
    receives: [
      { itemId: 'saddle',              quantity: 2 },
      { itemId: 'lead',                quantity: 2 },
      { itemId: 'oak_boat',            quantity: 2 },
      { itemId: 'diamond_horse_armor', quantity: 1 },
      { itemId: 'wheat',               quantity: 128, quantityLabel: '2 Stacks' },
      { itemId: 'wheat_seeds',         quantity: 64,  quantityLabel: '1 Stack' },
      { itemId: 'dirt',                quantity: 32 },
    ],
    businessLogic: 'Mobility for the nomad traveler.',
  },
  {
    id: 'c5', optionNumber: '5', name: 'The Fun Package', type: 'fun',
    gives: [{ itemId: 'coal_block', quantity: 4 }],
    receives: [
      { itemId: 'cooked_beef',    quantity: 64, note: 'The BBQ' },
      { itemId: 'cooked_chicken', quantity: 64 },
    ],
    businessLogic: 'The Ready-to-Eat party pack.',
  },
  {
    id: 'c6', optionNumber: '6', name: 'The Grind', type: 'grind',
    gives: [{ itemId: 'wooden_stick', quantity: 1, isChest: true, quantityLabel: '1 Double Chest', note: 'Wooden Sticks' }],
    receives: [{ itemId: 'coal_block', quantity: 10 }],
    businessLogic: 'They have to chop wood and craft for an hour. Worth it.',
  },
]

// ─────────────────────────────────────────────────────────────
// TIER 3: HIGH-FRICTION TROPHIES (THE BLACK MARKET)
// ─────────────────────────────────────────────────────────────

const gunpowderTrades: Trade[] = [
  {
    id: 'gp1', optionNumber: '1', name: 'The Upgrade', type: 'upgrade',
    gives: [{ itemId: 'gunpowder', quantity: 64, quantityLabel: '1 Stack (64)' }],
    receives: [{ itemId: 'firework_rocket', quantity: 32, note: 'Flight Level 2' }],
    businessLogic: 'Rockets are useless without wings.',
  },
  {
    id: 'gp2', optionNumber: '2', name: 'The Conversion', type: 'conversion',
    gives: [{ itemId: 'gunpowder', quantity: 32 }],
    receives: [{ itemId: 'firework_rocket', quantity: 32, note: 'Flight Level 1' }],
    businessLogic: 'Dangerous mobs → sky mobility.',
  },
  {
    id: 'gp3', optionNumber: '3', name: 'The Gear', type: 'gear',
    gives: [{ itemId: 'gunpowder', quantity: 128, quantityLabel: '2 Stacks (128)' }],
    receives: [{ itemId: 'firework_rocket', quantity: 32, note: 'Flight Level 3' }],
    businessLogic: 'Sells them the fuel to keep flying.',
  },
  {
    id: 'gp4', optionNumber: '4', name: 'The Luxury', type: 'luxury',
    gives: [{ itemId: 'gunpowder', quantity: 48 }],
    receives: [
      { itemId: 'creeper_head',    quantity: 1 },
      { itemId: 'skeleton_skull',  quantity: 1 },
      { itemId: 'zombie_head',     quantity: 1 },
      { itemId: 'zombie_head',     quantity: 1, note: 'Husk variant' },
    ],
    businessLogic: 'Halfway to a Beacon.',
  },
  {
    id: 'gp5', optionNumber: '5', name: 'The Fun Package', type: 'fun',
    gives: [{ itemId: 'gunpowder', quantity: 10 }],
    receives: [
      { itemId: 'tnt',                 quantity: 8,  note: 'The Prankster' },
      { itemId: 'stone_pressure_plate',quantity: 1 },
    ],
    businessLogic: 'A dangerous gift.',
  },
  {
    id: 'gp6', optionNumber: '6', name: 'The Grind', type: 'grind',
    gives: [{ itemId: 'sand', quantity: 1, isChest: true, quantityLabel: '1 Single Chest', note: 'Sand' }],
    receives: [{ itemId: 'gunpowder', quantity: 256, quantityLabel: '4 Stacks (256)' }],
    businessLogic: 'They need sand for TNT. A full single chest earns 4 stacks.',
  },
]

const slimeTrades: Trade[] = [
  {
    id: 'sl1', optionNumber: '1', name: 'The Upgrade', type: 'upgrade',
    gives: [{ itemId: 'slime_block', quantity: 32 }],
    receives: [{ itemId: 'netherite_ingot', quantity: 1 }],
    businessLogic: 'Rare farm drop for the best metal.',
  },
  {
    id: 'sl2', optionNumber: '2', name: 'The Conversion', type: 'conversion',
    gives: [{ itemId: 'slime_block', quantity: 5 }],
    receives: [
      { itemId: 'gold_block',   quantity: 3 },
      { itemId: 'iron_block',   quantity: 7 },
      { itemId: 'diamond_block',quantity: 2 },
      { itemId: 'potion_regen', quantity: 1, note: 'Max Regeneration' },
    ],
    businessLogic: 'High value trade for the sticky farmer.',
  },
  {
    id: 'sl3', optionNumber: '3', name: 'The Gear', type: 'gear',
    gives: [{ itemId: 'slime_block', quantity: 10 }],
    receives: [{ itemId: 'honey_block', quantity: 10 }],
    businessLogic: 'For the technical players.',
  },
  {
    id: 'sl4', optionNumber: '4', name: 'The Luxury', type: 'luxury',
    gives: [{ itemId: 'slime_block', quantity: 20 }],
    receives: [{ itemId: 'conduit', quantity: 1 }],
    businessLogic: 'For the master of the ocean.',
  },
  {
    id: 'sl6', optionNumber: '6', name: 'The Grind', type: 'grind',
    gives: [{ itemId: 'lily_pad', quantity: 1, isChest: true, quantityLabel: '1 Double Chest', note: 'Lily Pads' }],
    receives: [{ itemId: 'slime_block', quantity: 16 }],
    businessLogic: 'Tedious to farm but surprisingly plentiful near swamps.',
  },
]

const shulkerTrades: Trade[] = [
  {
    id: 'sh1', optionNumber: '1', name: 'The Upgrade', type: 'upgrade',
    gives: [{ itemId: 'shulker_shell', quantity: 10 }],
    receives: [{ itemId: 'nether_star', quantity: 1 }],
    businessLogic: 'Skips the Wither fight entirely.',
  },
  {
    id: 'sh2', optionNumber: '2', name: 'The Conversion', type: 'conversion',
    gives: [{ itemId: 'shulker_shell', quantity: 2 }],
    receives: [{ itemId: 'diamond', quantity: 4 }],
    businessLogic: 'High liquidity for end-game players.',
  },
  {
    id: 'sh3', optionNumber: '3', name: 'The Gear', type: 'gear',
    gives: [{ itemId: 'shulker_shell', quantity: 4 }],
    receives: [{ itemId: 'ender_chest', quantity: 1 }],
    businessLogic: 'The ultimate storage combo.',
  },
  {
    id: 'sh4', optionNumber: '4', name: 'The Luxury', type: 'luxury',
    gives: [{ itemId: 'shulker_shell', quantity: 8 }],
    receives: [{ itemId: 'dragon_head', quantity: 1 }],
    businessLogic: 'The ultimate base decoration.',
  },
  {
    id: 'sh5', optionNumber: '5', name: 'The Fun Package', type: 'fun',
    gives: [{ itemId: 'shulker_shell', quantity: 1 }],
    receives: [{ itemId: 'potion_slow_fall', quantity: 3, note: 'Slow Falling' }],
    businessLogic: 'To help them survive the End.',
  },
  {
    id: 'sh6', optionNumber: '6', name: 'The Grind', type: 'grind',
    gives: [{ itemId: 'chorus_fruit', quantity: 1, isChest: true, quantityLabel: '1 Double Chest', note: 'Chorus Fruit' }],
    receives: [{ itemId: 'shulker_shell', quantity: 5 }],
    businessLogic: 'Tedious to farm and fills inventory fast.',
  },
]

const enderPearlTrades: Trade[] = [
  {
    id: 'ep1', optionNumber: '1', name: 'The Upgrade', type: 'upgrade',
    gives: [{ itemId: 'ender_pearl', quantity: 64, quantityLabel: '1 Stack (64)' }],
    receives: [{ itemId: 'shulker_box', quantity: 1 }],
    businessLogic: 'Travel skill → Storage utility.',
  },
  {
    id: 'ep2', optionNumber: '2', name: 'The Conversion', type: 'conversion',
    gives: [{ itemId: 'ender_pearl', quantity: 16 }],
    receives: [{ itemId: 'emerald_block', quantity: 2 }],
    businessLogic: 'Quick cash for hunters.',
  },
  {
    id: 'ep3', optionNumber: '3', name: 'The Gear', type: 'gear',
    gives: [{ itemId: 'ender_pearl', quantity: 20 }],
    receives: [{ itemId: 'ender_eye', quantity: 6 }],
    businessLogic: 'Speeds up their trip to the Stronghold.',
  },
  {
    id: 'ep4', optionNumber: '4', name: 'The Luxury', type: 'luxury',
    gives: [{ itemId: 'ender_pearl', quantity: 32 }],
    receives: [
      { itemId: 'name_tag',       quantity: 1 },
      { itemId: 'lead',           quantity: 2 },
      { itemId: 'chest_boat',     quantity: 1 },
      { itemId: 'cooked_beef',    quantity: 16 },
      { itemId: 'cooked_chicken', quantity: 16 },
      { itemId: 'cobblestone',    quantity: 64, quantityLabel: '1 Stack' },
    ],
    businessLogic: 'For the rare mob collectors.',
  },
  {
    id: 'ep5', optionNumber: '5', name: 'The Fun Package', type: 'fun',
    gives: [{ itemId: 'ender_pearl', quantity: 5 }],
    receives: [
      { itemId: 'obsidian', quantity: 32, note: 'The Void Walker' },
      { itemId: 'glass',    quantity: 32 },
    ],
    businessLogic: 'Build-a-bridge kit.',
  },
  {
    id: 'ep6', optionNumber: '6', name: 'The Grind', type: 'grind',
    gives: [{ itemId: 'glass_bottle', quantity: 1, isChest: true, quantityLabel: '1 Double Chest', note: 'Glass Bottles' }],
    receives: [{ itemId: 'ender_pearl', quantity: 32 }],
    businessLogic: 'Requires mining sand and tons of fuel to smelt.',
  },
]

const witherSkullTrades: Trade[] = [
  {
    id: 'ws1', optionNumber: '1', name: 'The Upgrade', type: 'upgrade',
    gives: [{ itemId: 'wither_skeleton_skull', quantity: 5 }],
    receives: [
      { itemId: 'beacon',    quantity: 1 },
      { itemId: 'gold_block',quantity: 3 },
      { itemId: 'diamond',   quantity: 1 },
    ],
    businessLogic: 'You provide the Beacon + gold + diamond. They bring the skulls.',
  },
  {
    id: 'ws2', optionNumber: '2', name: 'The Conversion', type: 'conversion',
    gives: [{ itemId: 'wither_skeleton_skull', quantity: 1 }],
    receives: [{ itemId: 'diamond', quantity: 9 }],
    businessLogic: 'Massive instant payout.',
  },
  {
    id: 'ws3', optionNumber: '3', name: 'The Gear', type: 'gear',
    gives: [{ itemId: 'wither_skeleton_skull', quantity: 2 }],
    receives: [{ itemId: 'diamond_sword', quantity: 1, enchanted: true, enchantments: ['Sharpness V', 'Unbreaking III', 'Looting III'] }],
    businessLogic: 'The ultimate weapon.',
  },
  {
    id: 'ws4', optionNumber: '4', name: 'The Luxury', type: 'luxury',
    gives: [{ itemId: 'wither_skeleton_skull', quantity: 2 }],
    receives: [
      { itemId: 'enchanted_golden_apple', quantity: 1, enchanted: true },
      { itemId: 'potion',                 quantity: 1, note: 'Instant Health (~3 min)' },
    ],
    businessLogic: 'Safety for the next boss fight.',
  },
  {
    id: 'ws5', optionNumber: '5', name: 'The Fun Package', type: 'fun',
    gives: [{ itemId: 'wither_skeleton_skull', quantity: 1 }],
    receives: [
      { itemId: 'pumpkin_pie',  quantity: 4 },
      { itemId: 'cookie',       quantity: 16 },
      { itemId: 'bread',        quantity: 64, quantityLabel: '1 Stack' },
      { itemId: 'cooked_beef',  quantity: 64, quantityLabel: '1 Stack', note: 'Cooked Meat (any kind)' },
    ],
    businessLogic: 'Halloween vibes.',
  },
  {
    id: 'ws6', optionNumber: '6', name: 'The Grind', type: 'grind',
    gives: [{ itemId: 'blaze_rod', quantity: 64, quantityLabel: '1 Stack (64)' }],
    receives: [{ itemId: 'wither_skeleton_skull', quantity: 2 }],
    businessLogic: 'A soul-sucking digging session in the Nether.',
  },
]

const netheriteScraptrades: Trade[] = [
  {
    id: 'ns1', optionNumber: '1', name: 'The Upgrade', type: 'upgrade',
    gives: [{ itemId: 'netherite_scrap', quantity: 4 }],
    receives: [
      { itemId: 'mending_book',    quantity: 1, enchanted: true, enchantments: ['Mending'] },
      { itemId: 'power_book',      quantity: 1, enchanted: true, enchantments: ['Power V'] },
      { itemId: 'thorns_book',     quantity: 1, enchanted: true, enchantments: ['Thorns III'] },
      { itemId: 'lingering_potion',quantity: 1, note: 'Harming/Poison (your choice)' },
    ],
    businessLogic: 'Three max enchant books plus a harmful potion of your choosing.',
  },
  {
    id: 'ns2', optionNumber: '2', name: 'The Conversion', type: 'conversion',
    gives: [{ itemId: 'netherite_scrap', quantity: 1 }],
    receives: [{ itemId: 'diamond', quantity: 15 }],
    businessLogic: 'The highest exchange rate in the game.',
  },
  {
    id: 'ns3', optionNumber: '3', name: 'The Gear', type: 'gear',
    gives: [{ itemId: 'netherite_scrap', quantity: 2 }],
    receives: [
      { itemId: 'diamond_sword', quantity: 1, enchanted: true, enchantments: ['Max enchantments of your choice (except Mending)'], note: 'Sword 1' },
      { itemId: 'diamond_sword', quantity: 1, enchanted: true, enchantments: ['Max enchantments of your choice (except Mending)'], note: 'Sword 2' },
    ],
    businessLogic: 'Two Diamond Swords — any max enchantments you want, except Mending.',
  },
  {
    id: 'ns4', optionNumber: '4', name: 'The Luxury', type: 'luxury',
    gives: [{ itemId: 'netherite_scrap', quantity: 3 }],
    receives: [
      { itemId: 'dragon_head', quantity: 1 },
      { itemId: 'dragon_egg',  quantity: 1 },
    ],
    businessLogic: 'Selling the rarest trophy in the world.',
  },
  {
    id: 'ns5', optionNumber: '5', name: "The King's Guard", type: 'fun',
    gives: [{ itemId: 'netherite_scrap', quantity: 1 }],
    receives: [
      { itemId: 'potion_regen',       quantity: 1, note: 'Max Regeneration (instant)' },
      { itemId: 'potion_strength',    quantity: 1, note: 'Max Strength (instant)' },
      { itemId: 'potion_fire_res',    quantity: 1, note: 'Fire Resistance (instant)' },
      { itemId: 'potion_night_vision',quantity: 1, note: 'Night Vision (instant)' },
      { itemId: 'potion_slow_fall',   quantity: 1, note: 'Slow Falling (instant)' },
    ],
    businessLogic: 'All max potions thrown on you instantly. Instant security.',
  },
  {
    id: 'ns6', optionNumber: '6', name: 'The Grind', type: 'grind',
    gives: [{ itemId: 'cooked_beef', quantity: 1, isChest: true, quantityLabel: '1 Single Chest', note: 'Cooked Beef' }],
    receives: [{ itemId: 'netherite_sword', quantity: 1, enchanted: true, enchantments: ['Sharpness II', 'Unbreaking II', 'Mending'] }],
    businessLogic: 'A Netherite Sword with Sharpness II, Unbreaking II, and Mending.',
  },
]

// ─────────────────────────────────────────────────────────────
// TIER 4: EXCLUSIVE TRADES
// ─────────────────────────────────────────────────────────────

const exclusiveTrades: Trade[] = [
  {
    id: 'ex1', optionNumber: '1', name: 'The Ultimate Arsenal', type: 'exclusive',
    gives: [{ itemId: 'diamond_block', quantity: 64, quantityLabel: '64 Diamond Blocks' }],
    receives: [
      { itemId: 'netherite_helmet',     quantity: 1, enchanted: true, enchantments: ['Enchantments of your choice'] },
      { itemId: 'netherite_chestplate', quantity: 1, enchanted: true, enchantments: ['Enchantments of your choice'] },
      { itemId: 'netherite_leggings',   quantity: 1, enchanted: true, enchantments: ['Enchantments of your choice'] },
      { itemId: 'netherite_boots',      quantity: 1, enchanted: true, enchantments: ['Enchantments of your choice'] },
      { itemId: 'netherite_sword',      quantity: 1, enchanted: true, enchantments: ['Enchantments of your choice'] },
      { itemId: 'netherite_pickaxe',    quantity: 1, enchanted: true, enchantments: ['Enchantments of your choice'] },
      { itemId: 'netherite_axe',        quantity: 1, enchanted: true, enchantments: ['Enchantments of your choice'] },
      { itemId: 'netherite_shovel',     quantity: 1, enchanted: true, enchantments: ['Enchantments of your choice'] },
      { itemId: 'netherite_hoe',        quantity: 1, enchanted: true, enchantments: ['Enchantments of your choice'] },
      { itemId: 'enchanted_golden_apple',quantity: 10 },
      { itemId: 'golden_carrot',        quantity: 64, quantityLabel: '1 Stack' },
      { itemId: 'mace',                 quantity: 1, enchanted: true, enchantments: ['Enchantments of your choice'] },
      { itemId: 'wind_charge',          quantity: 64, quantityLabel: '64' },
      { itemId: 'experience_bottle',    quantity: 64, quantityLabel: '64' },
      { itemId: 'scaffolding',          quantity: 128, quantityLabel: '2 Stacks' },
    ],
    businessLogic: 'The absolute best deal. Full max Netherite gear with enchantments of your choice, plus premium supplies.',
    alternatives: 'OR: 32 Diamond Blocks + 64 Gold Blocks  ·  OR: 16 Diamond Blocks + 32 Gold Blocks + 64 Iron Blocks + 32 Ender Pearls + 2 Milk Buckets',
  },
  {
    id: 'ex2', optionNumber: '2', name: 'The Spy', type: 'exclusive',
    condition: 'Correctly guess the last trade made by any specific player',
    gives: [
      { itemId: 'diamond', quantity: 5 },
      { itemId: 'gold_block', quantity: 5 },
    ],
    receives: [
      { itemId: 'echo_shard', quantity: 1, note: "That player's base coordinates" },
    ],
    businessLogic: 'Guess the last trade that specific player made + pay 5 Diamonds and 5 Gold Blocks → receive that player\'s base coordinates.',
  },
  {
    id: 'ex3', optionNumber: '3', name: 'The Rooftop Challenge', type: 'challenge',
    condition: 'Reach the Nether rooftop AND build a Nether Portal at world height limit (Y=255)',
    gives: [],
    receives: [
      { itemId: 'diamond_helmet',     quantity: 1, note: 'Unenchanted' },
      { itemId: 'diamond_chestplate', quantity: 1, note: 'Unenchanted' },
      { itemId: 'diamond_leggings',   quantity: 1, note: 'Unenchanted' },
      { itemId: 'diamond_boots',      quantity: 1, note: 'Unenchanted' },
      { itemId: 'diamond_sword',      quantity: 1, note: 'Unenchanted' },
      { itemId: 'diamond_pickaxe',    quantity: 1, note: 'Unenchanted' },
      { itemId: 'diamond_axe',        quantity: 1, note: 'Unenchanted' },
      { itemId: 'diamond_shovel',     quantity: 1, note: 'Unenchanted' },
      { itemId: 'diamond_hoe',        quantity: 1, note: 'Unenchanted' },
    ],
    businessLogic: 'No items needed — just skill. Reach the Nether rooftop and build a working Nether Portal at max world height (Y=255). Full unenchanted Diamond tools and armor as reward.',
  },
  {
    id: 'ex4', optionNumber: '4', name: 'The Heist', type: 'exclusive',
    gives: [
      { itemId: 'diamond',      quantity: 200, quantityLabel: '200 Diamonds' },
      { itemId: 'netherite_ingot', quantity: 3 },
      { itemId: 'gold_block',   quantity: 10 },
      { itemId: 'echo_shard',   quantity: 20 },
      { itemId: 'clock', quantity: 1, isChest: true, quantityLabel: '1 Single Chest', note: 'Filled entirely with Clocks' },
    ],
    receives: [
      { itemId: 'shulker_box', quantity: 1, note: "Target player's full inventory (except hotbar, offhand, armor)" },
      { itemId: 'splash_potion', quantity: 1, note: 'Max Poison applied to target player' },
    ],
    businessLogic: 'You receive a copy of that player\'s full inventory contents (excluding hotbar, offhand, and armor). The target player also receives max Poison.',
  },
]

// ─────────────────────────────────────────────────────────────
// MARKETS EXPORT
// ─────────────────────────────────────────────────────────────
export const MARKETS: Market[] = [
  // Tier 1
  {
    id: 'diamond', name: 'Diamond Market', currencyItemId: 'diamond', tier: 1,
    themeColor: '#5DE7EF', glowColor: 'rgba(93,231,239,0.35)',
    subtitle: "The King's Currency",
    description: 'For players braving the deep caves. The most prestigious currency.',
    trades: diamondTrades,
  },
  {
    id: 'iron', name: 'Iron Block Market', currencyItemId: 'iron_block', tier: 1,
    themeColor: '#D8D8D8', glowColor: 'rgba(216,216,216,0.35)',
    subtitle: "The Industrialist's Currency",
    description: 'Drains wealth from players with iron golem farms or heavy strip-miners.',
    trades: ironTrades,
  },
  {
    id: 'gold', name: 'Gold Block Market', currencyItemId: 'gold_block', tier: 1,
    themeColor: '#FADB57', glowColor: 'rgba(250,219,87,0.35)',
    subtitle: "The Nether Miner's Currency",
    description: 'Gold requires surviving the Nether or finding a rare Badlands biome.',
    trades: goldTrades,
  },
  {
    id: 'emerald', name: 'Emerald Market', currencyItemId: 'emerald', tier: 1,
    themeColor: '#17DD62', glowColor: 'rgba(23,221,98,0.35)',
    subtitle: "The Villager's Currency",
    description: 'For farmers and traders. Easier to obtain in bulk, so you deal in stacks.',
    trades: emeraldTrades,
  },
  // Tier 2
  {
    id: 'redstone', name: 'Redstone Block Market', currencyItemId: 'redstone_block', tier: 2,
    themeColor: '#FF4444', glowColor: 'rgba(255,68,68,0.35)',
    subtitle: 'The Energy Exchange',
    description: 'For the engineers who have more redstone than they know what to do with.',
    trades: redstoneTrades,
  },
  {
    id: 'lapis', name: 'Lapis Lazuli Block Market', currencyItemId: 'lapis_block', tier: 2,
    themeColor: '#4466DD', glowColor: 'rgba(68,102,221,0.35)',
    subtitle: "The Sorcerer's Stone",
    description: 'Magic-adjacent currency for those with enchanting setups.',
    trades: lapisTrades,
  },
  {
    id: 'quartz', name: 'Quartz Block Market', currencyItemId: 'quartz_block', tier: 2,
    themeColor: '#EDEAE3', glowColor: 'rgba(237,234,227,0.35)',
    subtitle: "The Architect's Gem",
    description: 'For the builders who spent too long in the Nether.',
    trades: quartzTrades,
  },
  {
    id: 'coal', name: 'Coal Block Market', currencyItemId: 'coal_block', tier: 2,
    themeColor: '#888888', glowColor: 'rgba(136,136,136,0.35)',
    subtitle: 'The Fuel Standard',
    description: 'The backbone of industry. Smelters and strip-miners deal in coal.',
    trades: coalTrades,
  },
  // Tier 3
  {
    id: 'gunpowder', name: 'Gunpowder Market', currencyItemId: 'gunpowder', tier: 3,
    themeColor: '#AAAAAA', glowColor: 'rgba(170,170,170,0.35)',
    subtitle: 'The Explosive Trade',
    description: 'For creeper farmers and cave spelunkers. High risk, high reward.',
    trades: gunpowderTrades,
  },
  {
    id: 'slime', name: 'Slime Block Market', currencyItemId: 'slime_block', tier: 3,
    themeColor: '#7FBF00', glowColor: 'rgba(127,191,0,0.35)',
    subtitle: 'The Sticky Standard',
    description: 'Slime is rare without a farm — this market rewards the dedicated grinder.',
    trades: slimeTrades,
  },
  {
    id: 'shulker', name: 'Shulker Shell Market', currencyItemId: 'shulker_shell', tier: 3,
    themeColor: '#C077CA', glowColor: 'rgba(192,119,202,0.35)',
    subtitle: 'The Void Currency',
    description: 'End-game currency. Only End veterans carry Shulker Shells.',
    trades: shulkerTrades,
  },
  {
    id: 'ender_pearl_market', name: 'Ender Pearl Market', currencyItemId: 'ender_pearl', tier: 3,
    themeColor: '#3DBBAA', glowColor: 'rgba(61,187,170,0.35)',
    subtitle: "The Traveler's Coin",
    description: 'For aggressive Endermen hunters and those who brave The End.',
    trades: enderPearlTrades,
  },
  {
    id: 'wither_skull', name: 'Wither Skeleton Skull Market', currencyItemId: 'wither_skeleton_skull', tier: 3,
    themeColor: '#666699', glowColor: 'rgba(102,102,153,0.35)',
    subtitle: 'The Boss Token',
    description: 'The rarest standard currency. Only the bravest Nether fighters have these.',
    trades: witherSkullTrades,
  },
  {
    id: 'netherite_scrap_market', name: 'Netherite Scrap Market', currencyItemId: 'netherite_scrap', tier: 3,
    themeColor: '#AA7766', glowColor: 'rgba(170,119,102,0.35)',
    subtitle: 'The Raw Power',
    description: 'The apex of standard currency. Ancient Debris hunters only.',
    trades: netheriteScraptrades,
  },
  // Tier 4 Exclusive
  {
    id: 'exclusive', name: 'Exclusive Trades', currencyItemId: 'diamond_block', tier: 4,
    themeColor: '#FFD700', glowColor: 'rgba(255,215,0,0.35)',
    subtitle: 'Tier 4 — Legendary',
    description: 'Four legendary trades. Massive cost, unmatched reward.',
    trades: exclusiveTrades,
  },
]

export const TIER_GROUPS = [
  { tier: 1 as const, label: 'Tier 1 — Core Wealth',        color: '#5DE7EF', markets: MARKETS.filter(m => m.tier === 1) },
  { tier: 2 as const, label: 'Tier 2 — Engineer\'s Coins',  color: '#FADB57', markets: MARKETS.filter(m => m.tier === 2) },
  { tier: 3 as const, label: 'Tier 3 — Black Market',       color: '#FF69B4', markets: MARKETS.filter(m => m.tier === 3) },
  { tier: 4 as const, label: 'Tier 4 — Exclusive',          color: '#FFD700', markets: MARKETS.filter(m => m.tier === 4) },
]

export const TIERS = [
  {
    tier: 1, label: 'Core Wealth', color: '#5DE7EF',
    items: ['Diamond', 'Iron Block', 'Gold Block', 'Emerald'],
    itemIds: ['diamond', 'iron_block', 'gold_block', 'emerald'],
  },
  {
    tier: 2, label: "Engineer's Coins", color: '#FADB57',
    items: ['Redstone Block', 'Lapis Lazuli Block', 'Quartz Block', 'Coal Block'],
    itemIds: ['redstone_block', 'lapis_block', 'quartz_block', 'coal_block'],
  },
  {
    tier: 3, label: 'High-Friction Trophies', color: '#FF69B4',
    items: ['Gunpowder', 'Slime Block', 'Shulker Shell', 'Ender Pearl', 'Wither Skeleton Skull', 'Netherite Scrap'],
    itemIds: ['gunpowder', 'slime_block', 'shulker_shell', 'ender_pearl', 'wither_skeleton_skull', 'netherite_scrap'],
  },
  {
    tier: 4, label: 'Exclusive Legendary', color: '#FFD700',
    items: ['Exclusive Trade 1', 'Exclusive Trade 2', 'Exclusive Trade 3', 'Exclusive Trade 4'],
    itemIds: ['diamond_block', 'echo_shard', 'diamond_helmet', 'clock'],
  },
]
