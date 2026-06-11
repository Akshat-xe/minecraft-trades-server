const I = 'https://cdn.jsdelivr.net/gh/InventivetalentDev/minecraft-assets@1.21.1/assets/minecraft/textures/item/';
const B = 'https://cdn.jsdelivr.net/gh/InventivetalentDev/minecraft-assets@1.21.1/assets/minecraft/textures/block/';

export interface McItem {
  url: string;
  name: string;
  color: string;
}

export const ITEMS: Record<string, McItem> = {
  // ── Tier 1 Currencies ──────────────────────────────────────
  diamond:        { url: `${I}diamond.png`,               name: 'Diamond',              color: '#5DE7EF' },
  iron_block:     { url: `${B}iron_block.png`,             name: 'Iron Block',           color: '#CFCFCF' },
  gold_block:     { url: `${B}gold_block.png`,             name: 'Gold Block',           color: '#FADB57' },
  emerald:        { url: `${I}emerald.png`,                name: 'Emerald',              color: '#17DD62' },

  // ── Tier 2 Currencies ──────────────────────────────────────
  redstone_block: { url: `${B}redstone_block.png`,         name: 'Redstone Block',       color: '#CC0000' },
  lapis_block:    { url: `${B}lapis_block.png`,            name: 'Lapis Lazuli Block',   color: '#1947A3' },
  quartz_block:   { url: `${B}quartz_block_side.png`,      name: 'Quartz Block',         color: '#EDEAE3' },
  coal_block:     { url: `${B}coal_block.png`,             name: 'Coal Block',           color: '#1A1A1A' },

  // ── Tier 3 Currencies ──────────────────────────────────────
  gunpowder:             { url: `${I}gunpowder.png`,              name: 'Gunpowder',            color: '#888888' },
  slime_block:           { url: `${B}slime_block.png`,            name: 'Slime Block',          color: '#7FBF00' },
  shulker_shell:         { url: `${I}shulker_shell.png`,          name: 'Shulker Shell',        color: '#8B6F92' },
  ender_pearl:           { url: `${I}ender_pearl.png`,            name: 'Ender Pearl',          color: '#1A5C4E' },
  wither_skeleton_skull: { url: `${I}wither_skeleton_skull.png`,  name: 'Wither Skeleton Skull',color: '#2A2A2A' },
  netherite_scrap:       { url: `${I}netherite_scrap.png`,        name: 'Netherite Scrap',      color: '#5C3D3A' },

  // ── Tools & Weapons ───────────────────────────────────────
  diamond_pickaxe:     { url: `${I}diamond_pickaxe.png`,       name: 'Diamond Pickaxe',      color: '#5DE7EF' },
  diamond_sword:       { url: `${I}diamond_sword.png`,         name: 'Diamond Sword',        color: '#5DE7EF' },
  diamond_axe:         { url: `${I}diamond_axe.png`,           name: 'Diamond Axe',          color: '#5DE7EF' },
  diamond_shovel:      { url: `${I}diamond_shovel.png`,        name: 'Diamond Shovel',       color: '#5DE7EF' },
  diamond_hoe:         { url: `${I}diamond_hoe.png`,           name: 'Diamond Hoe',          color: '#5DE7EF' },
  netherite_sword:     { url: `${I}netherite_sword.png`,       name: 'Netherite Sword',      color: '#443C3C' },
  netherite_pickaxe:   { url: `${I}netherite_pickaxe.png`,     name: 'Netherite Pickaxe',    color: '#443C3C' },
  netherite_axe:       { url: `${I}netherite_axe.png`,         name: 'Netherite Axe',        color: '#443C3C' },
  netherite_shovel:    { url: `${I}netherite_shovel.png`,      name: 'Netherite Shovel',     color: '#443C3C' },
  netherite_hoe:       { url: `${I}netherite_hoe.png`,         name: 'Netherite Hoe',        color: '#443C3C' },
  bow:                 { url: `${I}bow.png`,                   name: 'Bow',                  color: '#886633' },
  arrow:               { url: `${I}arrow.png`,                 name: 'Arrow',                color: '#888888' },
  trident:             { url: `${I}trident.png`,               name: 'Trident',              color: '#4ABFBF' },
  mace:                { url: `${I}mace.png`,                  name: 'Mace',                 color: '#888888' },

  // ── Armor ────────────────────────────────────────────────
  diamond_helmet:      { url: `${I}diamond_helmet.png`,        name: 'Diamond Helmet',       color: '#5DE7EF' },
  diamond_chestplate:  { url: `${I}diamond_chestplate.png`,    name: 'Diamond Chestplate',   color: '#5DE7EF' },
  diamond_leggings:    { url: `${I}diamond_leggings.png`,      name: 'Diamond Leggings',     color: '#5DE7EF' },
  diamond_boots:       { url: `${I}diamond_boots.png`,         name: 'Diamond Boots',        color: '#5DE7EF' },
  netherite_helmet:    { url: `${I}netherite_helmet.png`,      name: 'Netherite Helmet',     color: '#443C3C' },
  netherite_chestplate:{ url: `${I}netherite_chestplate.png`,  name: 'Netherite Chestplate', color: '#443C3C' },
  netherite_leggings:  { url: `${I}netherite_leggings.png`,    name: 'Netherite Leggings',   color: '#443C3C' },
  netherite_boots:     { url: `${I}netherite_boots.png`,       name: 'Netherite Boots',      color: '#443C3C' },
  diamond_horse_armor: { url: `${I}diamond_horse_armor.png`,   name: 'Diamond Horse Armor',  color: '#5DE7EF' },
  saddle:              { url: `${I}saddle.png`,                name: 'Saddle',               color: '#8B4513' },

  // ── Blocks ────────────────────────────────────────────────
  diamond_block:       { url: `${B}diamond_block.png`,         name: 'Diamond Block',        color: '#5DE7EF' },
  emerald_block:       { url: `${B}emerald_block.png`,         name: 'Emerald Block',        color: '#17DD62' },
  netherite_ingot:     { url: `${I}netherite_ingot.png`,       name: 'Netherite Ingot',      color: '#443C3C' },
  netherite_ingot2:    { url: `${I}netherite_ingot.png`,       name: 'Netherite Ingot',      color: '#443C3C' },
  ancient_debris:      { url: `${B}ancient_debris_side.png`,   name: 'Ancient Debris',       color: '#6B3A2A' },
  sea_lantern:         { url: `${B}sea_lantern.png`,           name: 'Sea Lantern',          color: '#AADDCC' },
  sponge:              { url: `${B}sponge.png`,                name: 'Sponge',               color: '#DDCC22' },
  snow_block:          { url: `${B}snow.png`,                  name: 'Snow Block',           color: '#F0F8FF' },
  honey_block:         { url: `${B}honey_block_top.png`,       name: 'Honey Block',          color: '#FFAA00' },
  slime_block2:        { url: `${B}slime_block.png`,           name: 'Slime Block',          color: '#7FBF00' },
  oak_planks:          { url: `${B}oak_planks.png`,            name: 'Oak Planks',           color: '#B8945F' },
  cobblestone:         { url: `${B}cobblestone.png`,           name: 'Cobblestone',          color: '#888888' },
  obsidian:            { url: `${B}obsidian.png`,              name: 'Obsidian',             color: '#2D1B5A' },
  glass:               { url: `${B}glass.png`,                 name: 'Glass',                color: '#AADDEE' },
  tnt:                 { url: `${B}tnt_side.png`,              name: 'TNT',                  color: '#CC2222' },
  note_block:          { url: `${B}note_block.png`,            name: 'Note Block',           color: '#8B4513' },
  dirt:                { url: `${B}dirt.png`,                  name: 'Dirt',                 color: '#8B6914' },
  diorite:             { url: `${B}diorite.png`,               name: 'Diorite',              color: '#C8C8C8' },
  lily_pad:            { url: `${B}lily_pad.png`,              name: 'Lily Pad',             color: '#44AA44' },
  scaffolding:         { url: `${B}scaffolding_side.png`,      name: 'Scaffolding',          color: '#DDB844' },

  // ── Items ────────────────────────────────────────────────
  shulker_box:         { url: `${B}purple_shulker_box.png`,    name: 'Shulker Box',          color: '#8B6F92' },
  elytra:              { url: `${I}elytra.png`,                name: 'Elytra',               color: '#4A4060' },
  experience_bottle:   { url: `${I}experience_bottle.png`,     name: 'Exp. Bottle',          color: '#7CFC00' },
  powered_rail:        { url: `${B}powered_rail.png`,          name: 'Powered Rail',         color: '#C8A000' },
  rail:                { url: `${B}rail.png`,                  name: 'Rail',                 color: '#888888' },
  redstone_torch:      { url: `${B}redstone_torch.png`,        name: 'Redstone Torch',       color: '#CC0000' },
  beacon:              { url: `${B}beacon.png`,                name: 'Beacon',               color: '#7FFFD4' },
  enchanted_golden_apple:{ url: `${I}enchanted_golden_apple.png`,name: 'Enchanted Golden Apple',color: '#FFD700' },
  end_crystal:         { url: `${I}end_crystal.png`,           name: 'End Crystal',          color: '#FF44CC' },
  jukebox:             { url: `${B}jukebox_top.png`,           name: 'Jukebox',              color: '#5C3319' },
  music_disc:          { url: `${I}music_disc_13.png`,         name: 'Music Disc',           color: '#44AACC' },
  totem_of_undying:    { url: `${I}totem_of_undying.png`,      name: 'Totem of Undying',     color: '#FFD700' },
  enchanted_book:      { url: `${I}enchanted_book.png`,        name: 'Enchanted Book',       color: '#8B0000' },
  mending_book:        { url: `${I}enchanted_book.png`,        name: 'Mending Book',         color: '#8B0000' },
  unbreaking_book:     { url: `${I}enchanted_book.png`,        name: 'Unbreaking Book',      color: '#8B0000' },
  enchant_book_weapon: { url: `${I}enchanted_book.png`,        name: 'Weapon Enchant Book',  color: '#8B0000' },
  power_book:          { url: `${I}enchanted_book.png`,        name: 'Power Book',           color: '#8B0000' },
  thorns_book:         { url: `${I}enchanted_book.png`,        name: 'Thorns Book',          color: '#8B0000' },
  cake:                { url: `${I}cake.png`,                  name: 'Cake',                 color: '#F5DEB3' },
  shield:              { url: `${I}shield.png`,                name: 'Shield',               color: '#7A6035' },
  water_bucket:        { url: `${I}water_bucket.png`,          name: 'Water Bucket',         color: '#3D8FD6' },
  milk_bucket:         { url: `${I}milk_bucket.png`,           name: 'Milk Bucket',          color: '#FFFFFF' },
  snowball:            { url: `${I}snowball.png`,              name: 'Snowball',             color: '#DDEEFF' },
  lead:                { url: `${I}lead.png`,                  name: 'Lead',                 color: '#8B7355' },
  name_tag:            { url: `${I}name_tag.png`,              name: 'Name Tag',             color: '#DDCCAA' },
  heart_of_the_sea:    { url: `${I}heart_of_the_sea.png`,      name: 'Heart of the Sea',     color: '#00BFFF' },
  nether_star:         { url: `${I}nether_star.png`,           name: 'Nether Star',          color: '#FFFFFF' },
  echo_shard:          { url: `${I}echo_shard.png`,            name: 'Echo Shard',           color: '#4488AA' },
  clock:               { url: `${I}clock_00.png`,              name: 'Clock',                color: '#DDAA00' },
  wind_charge:         { url: `${I}wind_charge.png`,           name: 'Wind Charge',          color: '#88CCFF' },
  golden_carrot:       { url: `${I}golden_carrot.png`,         name: 'Golden Carrot',        color: '#FFD700' },
  blaze_rod:           { url: `${I}blaze_rod.png`,             name: 'Blaze Rod',            color: '#FFAA00' },
  ender_eye:           { url: `${I}ender_eye.png`,             name: 'Eye of Ender',         color: '#1A5C4E' },
  chorus_fruit:        { url: `${I}chorus_fruit.png`,          name: 'Chorus Fruit',         color: '#885588' },
  glass_bottle:        { url: `${I}glass_bottle.png`,          name: 'Glass Bottle',         color: '#AACCCC' },
  oak_boat:            { url: `${I}oak_boat.png`,              name: 'Boat',                 color: '#B8945F' },
  chest_boat:          { url: `${I}oak_chest_boat.png`,        name: 'Boat with Chest',      color: '#9C6B3C' },
  firework_rocket:     { url: `${I}firework_rocket.png`,       name: 'Firework Rocket',      color: '#FF4444' },
  sand:                { url: `${B}sand.png`,                  name: 'Sand',                 color: '#DDD09A' },

  // ── Food ────────────────────────────────────────────────
  cooked_beef:         { url: `${I}cooked_beef.png`,           name: 'Cooked Beef',          color: '#A0522D' },
  cooked_chicken:      { url: `${I}cooked_chicken.png`,        name: 'Cooked Chicken',       color: '#D2A679' },
  pumpkin_pie:         { url: `${I}pumpkin_pie.png`,           name: 'Pumpkin Pie',          color: '#CC6622' },
  cookie:              { url: `${I}cookie.png`,                name: 'Cookie',               color: '#AA7744' },
  bread:               { url: `${I}bread.png`,                 name: 'Bread',                color: '#CC9944' },
  wheat:               { url: `${I}wheat.png`,                 name: 'Wheat',                color: '#DDAA33' },
  wheat_seeds:         { url: `${I}wheat_seeds.png`,           name: 'Seeds',                color: '#88AA44' },

  // ── Decorative / Misc ────────────────────────────────────
  painting:            { url: `${I}painting.png`,              name: 'Painting',             color: '#A0522D' },
  blue_dye:            { url: `${I}blue_dye.png`,              name: 'Blue Dye',             color: '#3C44AA' },
  white_wool:          { url: `${B}white_wool.png`,            name: 'Wool',                 color: '#F0F0F0' },
  carved_pumpkin:      { url: `${B}carved_pumpkin.png`,        name: 'Carved Pumpkin',       color: '#FF7518' },
  stone_pressure_plate:{ url: `${B}stone.png`,                 name: 'Pressure Plate',       color: '#8A8A8A' },

  // ── Mob Drops / Skulls ───────────────────────────────────
  creeper_head:        { url: `${I}creeper_head.png`,          name: 'Creeper Head',         color: '#44AA44' },
  skeleton_skull:      { url: `${I}skeleton_skull.png`,        name: 'Skeleton Skull',       color: '#EEEECC' },
  zombie_head:         { url: `${I}zombie_head.png`,           name: 'Zombie Head',          color: '#44AA44' },

  // ── Potions ──────────────────────────────────────────────
  potion:              { url: `${I}potion.png`,                name: 'Potion',               color: '#FF4444' },
  splash_potion:       { url: `${I}splash_potion.png`,         name: 'Splash Potion',        color: '#FF6666' },
  lingering_potion:    { url: `${I}lingering_potion.png`,      name: 'Lingering Potion',     color: '#FF8888' },
  potion_regen:        { url: `${I}potion.png`,                name: 'Potion of Regeneration',color: '#FF88FF' },
  potion_fire_res:     { url: `${I}potion.png`,                name: 'Fire Resistance Potion',color: '#FF6600' },
  potion_slow_fall:    { url: `${I}potion.png`,                name: 'Potion of Slow Falling',color: '#FFF0AA' },
  potion_strength:     { url: `${I}potion.png`,                name: 'Potion of Strength',   color: '#FF2200' },
  potion_night_vision: { url: `${I}potion.png`,                name: 'Potion of Night Vision',color: '#2222FF' },

  // ── End-game ─────────────────────────────────────────────
  ender_chest:         { url: `${B}ender_chest_front.png`,     name: 'Ender Chest',          color: '#2D1B5A' },
  dragon_head:         { url: `${B}dragon_head_front.png`,     name: 'Dragon Head',          color: '#1A1A2E' },
  dragon_egg:          { url: `${B}dragon_egg.png`,            name: 'Dragon Egg',           color: '#2D1B4E' },
  conduit:             { url: `${I}conduit.png`,               name: 'Conduit',              color: '#88CCAA' },

  // ── Misc builds ──────────────────────────────────────────
  sticky_piston:       { url: `${B}sticky_piston_face.png`,    name: 'Sticky Piston',        color: '#7B6B55' },
  observer:            { url: `${B}observer_front.png`,        name: 'Observer',             color: '#5A5A5A' },
  wooden_stick:        { url: `${I}stick.png`,                 name: 'Wooden Stick',         color: '#B8945F' },
  jungle_button:       { url: `${B}jungle_planks.png`,         name: 'Jungle Button',        color: '#6B8E4E' },
  leaves_pile:         { url: `${B}oak_leaves.png`,            name: 'Waste Items',          color: '#4A8C3F' },
  double_chest:        { url: `${B}oak_planks.png`,            name: 'Double Chest',         color: '#9C6B3C' },
}

export function getItem(id: string): McItem {
  return ITEMS[id] ?? { url: '', name: id.replace(/_/g, ' '), color: '#555555' };
}
