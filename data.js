/**
 * EACO Social - Data Layer
 * 369 Services | 6+20 Languages | EACO Web3 Integration
 */

// ===================== EACO Web3 Config =====================
const EACO_CONFIG = {
  name: "EACO",
  fullName: "Earth's Best Coin",
  symbol: "$e",
  chain: "Solana",
  ca: "DqfoyZH96RnvZusSp3Cdncjpyp3C74ZmJzGhjmHnDHRH",
  totalSupply: "1.35 billion EACO",
  website: "https://ucoingroup.github.io/earths-best-coin/",
  eaco50rate: "https://ucoingroup.github.io/eaco50rate/",
  definition: {
    zh: "EACO = Energy(能量) x Attitude(态度) x Cooperation(协作) x Optimization(优化) - 全球文明升级模型",
    en: "EACO = Energy x Attitude x Cooperation x Optimization - A global civilization upgrading model"
  },
  links: {
    x: "https://x.com/eacocc",
    linktree: "https://linktr.ee/eacocc",
    oklink: "https://www.oklink.com/zh-hans/solana/token/DqfoyZH96RnvZusSp3Cdncjpyp3C74ZmJzGhjmHnDHRH",
    orb: "https://orbmarkets.io/token/DqfoyZH96RnvZusSp3Cdncjpyp3C74ZmJzGhjmHnDHRH",
    solscan: "https://solscan.io/token/DqfoyZH96RnvZusSp3Cdncjpyp3C74ZmJzGhjmHnDHRH"
  },
  dex: {
    raydium: "https://raydium.io/swap/?inputMint=sol&outputMint=DqfoyZH96RnvZusSp3Cdncjpyp3C74ZmJzGhjmHnDHRH",
    meteora: "https://app.meteora.ag/dlmm/6ZfCi3qzhgDN1ygHVYXfsfrwz8ZhQ7hD5mJtjeuUDyE",
    orca: "https://www.orca.so/pools/6GDJvBhq9NY4Tcry8rsCVU4RTd8tzjUQCANvHngjK7jw"
  },
  telegram: {
    en: "https://t.me/e_eacocc",
    zh: "https://t.me/aieaco",
    ar: "https://t.me/earhcoingroup",
    es: "https://t.me/eacoespanish",
    fr: "https://t.me/efrencheaco",
    ru: "https://t.me/erussianeaco",
    ja: "https://t.me/ejapaneaco"
  },
  lpTiers: [1, 5, 10, 50, 100],
  lockDays: 90,
  mission: {
    zh: "全球村民专属MEME币，立足Solana公链，以地球环保、可持续发展、全球村共识为核心叙事",
    en: "The MEME coin for global villagers on Solana, focused on Earth environmental protection, sustainable development, and global village consensus"
  }
};

// ===================== Pilot Regions =====================
const PILOT_REGIONS = [
  { code: "HK", zh: "香港", en: "Hong Kong", flag: "\uD83C\uDDFD\uD83C\uDDF0" },
  { code: "SG", zh: "新加坡", en: "Singapore", flag: "\uD83C\uDDF8\uD83C\uDDEC" },
  { code: "TW", zh: "台湾", en: "Taiwan", flag: "\uD83C\uDDFD\uD83C\uDDF9" },
  { code: "MO", zh: "澳门", en: "Macau", flag: "\uD83C\uDDF2\uD83C\uDDF4" },
  { code: "SEA", zh: "东南亚", en: "Southeast Asia", flag: "\uD83C\uDF0F" },
  { code: "PORT", zh: "周边口岸", en: "Border Ports", flag: "\uD83D\uDEC2" }
];

// ===================== 6 Global Languages + 20 Neighbor Languages =====================
const LANGUAGES = {
  // 6 Global Languages
  zh: { name: "\u4E2D\u6587", nativeName: "\u4E2D\u6587", flag: "\uD83C\uDDE8\uD83C\uDDF3", type: "global" },
  en: { name: "English", nativeName: "English", flag: "\uD83C\uDDFA\uD83C\uDDF8", type: "global" },
  ar: { name: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629", nativeName: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629", flag: "\uD83C\uDDE6\uD83C\uDDEA", type: "global", rtl: true },
  es: { name: "Espa\u00F1ol", nativeName: "Espa\u00F1ol", flag: "\uD83C\uDDEA\uD83C\uDDF8", type: "global" },
  fr: { name: "Fran\u00E7ais", nativeName: "Fran\u00E7ais", flag: "\uD83C\uDDEB\uD83C\uDDF7", type: "global" },
  ru: { name: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439", nativeName: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439", flag: "\uD83C\uDDF7\uD83C\uDDFA", type: "global" },
  // 20 Neighbor Languages
  ja: { name: "\u65E5\u672C\u8A9E", nativeName: "\u65E5\u672C\u8A9E", flag: "\uD83C\uDDEF\uD83C\uDDF5", type: "neighbor" },
  ko: { name: "\uD55C\uAD6D\uC5B4", nativeName: "\uD55C\uAD6D\uC5B4", flag: "\uD83C\uDDF0\uD83C\uDDF7", type: "neighbor" },
  vi: { name: "Ti\u1EBFng Vi\u1EC7t", nativeName: "Ti\u1EBFng Vi\u1EC7t", flag: "\uD83C\uDDFB\uD83C\uDDF3", type: "neighbor" },
  th: { name: "\u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22", nativeName: "\u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22", flag: "\uD83C\uDDF9\uD83C\uDDED", type: "neighbor" },
  my: { name: "\u1017\u1019\u102C\u1005\u102C", nativeName: "\u1017\u1019\u102C\u1005\u102C", flag: "\uD83C\uDDF2\uD83C\uDDF2", type: "neighbor" },
  km: { name: "\u1781\u17D2\u1798\u17C2\u179A", nativeName: "\u1781\u17D2\u1798\u17C2\u179A", flag: "\uD83C\uDDF0\uD83C\uDDED", type: "neighbor" },
  lo: { name: "\u0EA5\u0EB2\u0EA7", nativeName: "\u0EA5\u0EB2\u0EA7", flag: "\uD83C\uDDF1\uD83C\uDDE6", type: "neighbor" },
  id: { name: "Bahasa Indonesia", nativeName: "Bahasa Indonesia", flag: "\uD83C\uDDEE\uD83C\uDDE9", type: "neighbor" },
  ms: { name: "Bahasa Melayu", nativeName: "Bahasa Melayu", flag: "\uD83C\uDDF2\uD83C\uDDFE", type: "neighbor" },
  tl: { name: "Filipino", nativeName: "Filipino", flag: "\uD83C\uDDF5\uD83C\uDDED", type: "neighbor" },
  hi: { name: "\u0939\u093F\u0928\u094D\u0926\u0940", nativeName: "\u0939\u093F\u0928\u094D\u0926\u0940", flag: "\uD83C\uDDEE\uD83C\uDDF3", type: "neighbor" },
  bn: { name: "\u09AC\u09BE\u0982\u09B2\u09BE", nativeName: "\u09AC\u09BE\u0982\u09B2\u09BE", flag: "\uD83C\uDDE7\uD83C\uDDE9", type: "neighbor" },
  ur: { name: "\u0627\u0631\u062F\u0648", nativeName: "\u0627\u0631\u062F\u0648", flag: "\uD83C\uDDF5\uD83C\uDDF0", type: "neighbor", rtl: true },
  fa: { name: "\u0641\u0627\u0631\u0633\u06CC", nativeName: "\u0641\u0627\u0631\u0633\u06CC", flag: "\uD83C\uDDEE\uD83C\uDDF7", type: "neighbor", rtl: true },
  mn: { name: "\u041C\u043E\u043D\u0433\u043E\u043B", nativeName: "\u041C\u043E\u043D\u0433\u043E\u043B \u0445\u044D\u043B", flag: "\uD83C\uDDF2\uD83C\uDDF3", type: "neighbor" },
  kk: { name: "\u049A\u0430\u0437\u0430\u049B", nativeName: "\u049A\u0430\u0437\u0430\u049B\u0448\u0430", flag: "\uD83C\uDDF0\uD83C\uDDFF", type: "neighbor" },
  kg: { name: "\u041A\u044B\u0440\u0433\u044B\u0437", nativeName: "\u041A\u044B\u0440\u0433\u044B\u0437\u0447\u0430", flag: "\uD83C\uDDF0\uD83C\uDDEC", type: "neighbor" },
  ne: { name: "\u0928\u0947\u092A\u093E\u0932\u0940", nativeName: "\u0928\u0947\u092A\u093E\u0932\u0940", flag: "\uD83C\uDDF3\uD83C\uDDF5", type: "neighbor" },
  tg: { name: "\u0422\u043E\u04B7\u0438\u043A\u04E3", nativeName: "\u0422\u043E\u04B7\u0438\u043A\u04E3", flag: "\uD83C\uDDF9\uD83C\uDDFB", type: "neighbor" },
  uz: { name: "O\u02BBzbekcha", nativeName: "O\u02BBzbekcha", flag: "\uD83C\uDDFA\uD83C\uDDEF", type: "neighbor" }
};

// ===================== Service Categories (16) =====================
const CATEGORIES = [
  { id: "daily_life", icon: "\uD83C\uDFE1", zh: "\u65E5\u5E38\u751F\u6D3B", en: "Daily Life" },
  { id: "companion", icon: "\uD83E\uDD1D", zh: "\u966A\u4F34\u670D\u52A1", en: "Companion" },
  { id: "study_tutor", icon: "\uD83D\uDCDA", zh: "\u5B66\u4E60\u8F85\u5BFC", en: "Study & Tutor" },
  { id: "home_repair", icon: "\uD83D\uDD27", zh: "\u5BB6\u5EAD\u7EF4\u4FEE", en: "Home Repair" },
  { id: "beauty_health", icon: "\uD83D\uDC86", zh: "\u7F8E\u5BB9\u5065\u5EB7", en: "Beauty & Health" },
  { id: "pet_care", icon: "\uD83D\uDC36", zh: "\u5BA0\u7269\u670D\u52A1", en: "Pet Care" },
  { id: "child_care", icon: "\uD83D\uDC66", zh: "\u6BCD\u5A74\u670D\u52A1", en: "Child Care" },
  { id: "elder_care", icon: "\uD83D\uDC74", zh: "\u517B\u8001\u670D\u52A1", en: "Elder Care" },
  { id: "food_kitchen", icon: "\uD83C\uDF73", zh: "\u7F8E\u98DF\u53A8\u623F", en: "Food & Kitchen" },
  { id: "outdoor_sport", icon: "\u26F0\uFE0F", zh: "\u6237\u5916\u8FD0\u52A8", en: "Outdoor & Sport" },
  { id: "rural_village", icon: "\uD83C\uDF3E", zh: "\u4E61\u6751\u4F53\u9A8C", en: "Rural & Village" },
  { id: "rental_share", icon: "\uD83D\uDD04", zh: "\u79DF\u8D41\u5171\u4EAB", en: "Rental & Share" },
  { id: "recycle_eco", icon: "\u267B\uFE0F", zh: "\u56DE\u6536\u73AF\u4FDD", en: "Recycle & Eco" },
  { id: "digital_remote", icon: "\uD83D\uDCBB", zh: "\u6570\u5B57\u8FDC\u7A0B", en: "Digital & Remote" },
  { id: "emergency", icon: "\uD83D\uDEA8", zh: "\u5E94\u6025\u670D\u52A1", en: "Emergency" },
  { id: "events_community", icon: "\uD83C\uDF89", zh: "\u6D3B\u52A8\u793E\u533A", en: "Events & Community" }
];

// ===================== 369 Services =====================
const SERVICES = [
  // --- Daily Life (1-15) ---
  { id: 1, cat: "daily_life", zh: "\u901B\u8857", en: "Shopping", emoji: "\uD83D\uDECD\uFE0F" },
  { id: 2, cat: "daily_life", zh: "\u901B\u516C\u56ED", en: "Park Visit", emoji: "\uD83C\uDFDE\uFE0F" },
  { id: 3, cat: "companion", zh: "\u770B\u7535\u5F71", en: "Movie Watching", emoji: "\uD83C\uDFAC" },
  { id: 4, cat: "study_tutor", zh: "\u966A\u5199\u4F5C\u4E1A", en: "Homework Companion", emoji: "\u270D\uFE0F" },
  { id: 5, cat: "outdoor_sport", zh: "\u722C\u5C71", en: "Hiking", emoji: "\u26F0\uFE0F" },
  { id: 6, cat: "outdoor_sport", zh: "\u9493\u9C7C", en: "Fishing", emoji: "\uD83C\uDFA3" },
  { id: 7, cat: "companion", zh: "\u6253\u6E38\u620F", en: "Gaming", emoji: "\uD83C\uDFAE" },
  { id: 8, cat: "elder_care", zh: "\u6276\u8001\u4EBA\u4E0A\u4E0B\u697C", en: "Elder Stairs Assist", emoji: "\uD83D\uDC74" },
  { id: 9, cat: "elder_care", zh: "\u966A\u8001\u4EBA\u6652\u592A\u9633", en: "Elder Sunshine", emoji: "\u2600\uFE0F" },
  { id: 10, cat: "outdoor_sport", zh: "\u6668\u8DD1", en: "Morning Run", emoji: "\uD83C\uDFC3" },
  { id: 11, cat: "outdoor_sport", zh: "\u9A91\u884C", en: "Cycling", emoji: "\uD83D\uDEB2" },
  { id: 12, cat: "outdoor_sport", zh: "\u6253\u7BEE\u7403", en: "Basketball", emoji: "\uD83C\uDFC0" },
  { id: 13, cat: "events_community", zh: "\u5199\u5BF9\u8054", en: "Couplet Writing", emoji: "\uD83D\uDCDD" },
  { id: 14, cat: "beauty_health", zh: "\u5316\u5986", en: "Makeup", emoji: "\uD83D\uDC84" },
  { id: 15, cat: "beauty_health", zh: "\u65F6\u88C5\u642D\u914D", en: "Fashion Styling", emoji: "\uD83D\uDC55" },

  // --- Home Repair (16-19) ---
  { id: 16, cat: "home_repair", zh: "\u6252\u88E4\u8FB9", en: "Hemming", emoji: "\uD83D\uDECD\uFE0F" },
  { id: 17, cat: "home_repair", zh: "\u6362\u62C9\u94FE", en: "Zipper Replace", emoji: "\uD83E\uDDF6" },
  { id: 18, cat: "home_repair", zh: "\u4FEE\u978B", en: "Shoe Repair", emoji: "\uD83D\uDC5E" },
  { id: 19, cat: "pet_care", zh: "\u7EA6\u901B\u72D7", en: "Dog Walking", emoji: "\uD83D\uDC15" },

  // --- Companion (20-23) ---
  { id: 20, cat: "companion", zh: "\u7EA6\u901B\u516C\u56ED", en: "Park Companion", emoji: "\uD83C\uDFDE\uFE0F" },
  { id: 21, cat: "companion", zh: "\u7EA6\u5531\u6B4C", en: "Karaoke", emoji: "\uD83C\uDFA4" },
  { id: 22, cat: "companion", zh: "\u7EA6\u6563\u6B65", en: "Walk Companion", emoji: "\uD83D\uDEB6" },
  { id: 23, cat: "companion", zh: "\u7EA6\u6253\u6E38\u620F", en: "Game Companion", emoji: "\uD83C\uDFAE" },

  // --- Study & Tutor (24-26) ---
  { id: 24, cat: "study_tutor", zh: "\u5B66\u4E66\u6CD5", en: "Calligraphy", emoji: "\uD83D\uDCDC" },
  { id: 25, cat: "study_tutor", zh: "\u5B66\u624B\u5DE5", en: "Crafts", emoji: "\uD83C\uDF8F" },
  { id: 26, cat: "study_tutor", zh: "\u5B66\u5531\u6B4C\u8DF3\u821E", en: "Singing & Dance", emoji: "\uD83D\uDD7A" },

  // --- Beauty & Health (27) ---
  { id: 27, cat: "beauty_health", zh: "\u6367\u8138\u5E08", en: "Face Sculptor", emoji: "\uD83E\uDD74" },

  // --- Home Repair (28-29) ---
  { id: 28, cat: "home_repair", zh: "\u4E0A\u95E8\u4FEE\u81EA\u884C\u8F66", en: "Bike Repair", emoji: "\uD83D\uDEB2" },
  { id: 29, cat: "home_repair", zh: "\u4E0A\u95E8\u8865\u80CE", en: "Tire Patch", emoji: "\uD83D\uDEDE" },

  // --- Study (30) ---
  { id: 30, cat: "study_tutor", zh: "\u5B66\u5916\u8BED", en: "Language Practice", emoji: "\uD83C\uDF10" },

  // --- Rural (31-34) ---
  { id: 31, cat: "rural_village", zh: "\u4E61\u6751\u53A8\u5E08", en: "Village Chef", emoji: "\uD83D\uDC68\u200D\uD83C\uDF73" },
  { id: 32, cat: "rural_village", zh: "\u4E61\u6751\u5BFC\u6E38", en: "Village Guide", emoji: "\uD83C\uDFDE\uFE0F" },
  { id: 33, cat: "rural_village", zh: "\u5C0F\u8BED\u79CD\u5BFC\u6E38", en: "Niche Language Guide", emoji: "\uD83C\uDF10" },
  { id: 34, cat: "rural_village", zh: "\u65C5\u6E38\u7BA1\u5BB6", en: "Travel Concierge", emoji: "\uD83C\uDFD6\uFE0F" },

  // --- Beauty & Health (35-39) ---
  { id: 35, cat: "beauty_health", zh: "\u4E0A\u95E8\u7406\u53D1", en: "Home Haircut", emoji: "\uD83D\uDC87" },
  { id: 36, cat: "beauty_health", zh: "\u4E0A\u95E8\u7F8E\u7532", en: "Home Manicure", emoji: "\uD83D\uDC85" },
  { id: 37, cat: "beauty_health", zh: "\u91C7\u8033", en: "Ear Cleaning", emoji: "\uD83D\uDC42" },
  { id: 38, cat: "beauty_health", zh: "\u6309\u6469", en: "Massage", emoji: "\uD83D\uDCAB" },
  { id: 39, cat: "beauty_health", zh: "\u9488\u7078\u62D4\u7F50", en: "Acupuncture & Cupping", emoji: "\uD83E\uDE7B" },

  // --- Companion (40-42) ---
  { id: 40, cat: "companion", zh: "\u7537\u7537\u6E38", en: "Mens Tour", emoji: "\uD83D\uDC71\u200D\u2642\uFE0F" },
  { id: 41, cat: "companion", zh: "\u5973\u5973\u6E38", en: "Womens Tour", emoji: "\uD83D\uDC71\u200D\u2640\uFE0F" },
  { id: 42, cat: "outdoor_sport", zh: "\u7EA6\u6253\u7403", en: "Ball Games", emoji: "\uD83C\uDFBE" },

  // --- Outdoor (43) ---
  { id: 43, cat: "outdoor_sport", zh: "\u5B66\u9493\u9C7C", en: "Learn Fishing", emoji: "\uD83C\uDFA3" },

  // --- Child Care (44-49) ---
  { id: 44, cat: "child_care", zh: "\u63A5\u5B69\u5B50", en: "School Pickup", emoji: "\uD83C\uDF92" },
  { id: 45, cat: "child_care", zh: "\u966A\u5B69\u5B50\u5199\u4F5C\u4E1A", en: "Kids Homework", emoji: "\u270D\uFE0F" },
  { id: 46, cat: "child_care", zh: "\u7ED8\u672C\u9605\u8BFB\u4E0E\u6545\u4E8B\u4F1A\u5E26\u9886", en: "Picture Book Reading", emoji: "\uD83D\uDCDA" },
  { id: 47, cat: "child_care", zh: "\u4E34\u65F6\u77ED\u65F6\u6258\u7BA1", en: "Temporary Care", emoji: "\uD83D\uDC69\u200D\uD83D\uDC67" },
  { id: 48, cat: "child_care", zh: "\u5A74\u5E7C\u513F\u8F85\u98DF\u5236\u4F5C\u4E0E\u5206\u88C5", en: "Baby Food Prep", emoji: "\uD83C\uDF7C" },
  { id: 49, cat: "child_care", zh: "\u513F\u7AE5\u8863\u7269\u4E0E\u73A9\u5177\u6536\u7EB3\u6574\u7406", en: "Kids Stuff Organize", emoji: "\uD83E\uDDF9" },

  // --- Food & Kitchen (50-53) ---
  { id: 50, cat: "food_kitchen", zh: "\u5BB6\u5E38\u83DC\u4E0A\u95E8\u79C1\u53A8", en: "Home Chef", emoji: "\uD83D\uDC68\u200D\uD83C\uDF73" },
  { id: 51, cat: "food_kitchen", zh: "\u624B\u5DE5\u70D8\u7119\u4E0E\u7279\u8272\u9762\u70B9\u5236\u4F5C", en: "Baking", emoji: "\uD83E\uDD50" },
  { id: 52, cat: "food_kitchen", zh: "\u7F16\u7EC7\u4E0E\u94A9\u9488\u624B\u5DE5\u827A\u54C1\u5B9A\u5236", en: "Knitting & Crochet", emoji: "\uD83E\uDDF1" },
  { id: 53, cat: "food_kitchen", zh: "\u5BB6\u5EAD\u79D8\u5236\u9171\u83DC / \u9885\u5236\u98DF\u54C1\u5206\u4EAB", en: " Homemade Sauce Share", emoji: "\uD83E\uDDC8" },

  // --- Daily Life (54-58) ---
  { id: 54, cat: "daily_life", zh: "\u5BB6\u5EAD\u7EFF\u690D\u517B\u62A4\u4E0E\u4EE3\u7BA1", en: "Plant Care", emoji: "\uD83C\uDF31" },
  { id: 55, cat: "daily_life", zh: "\u793E\u533A\u56E2\u8D2D\u56E2\u957F\u4E0E\u5206\u62E3\u5458", en: "Group Buy Organizer", emoji: "\uD83D\uDED2" },
  { id: 56, cat: "child_care", zh: "\u4E8C\u624B\u6BCD\u5A74\u7528\u54C1\u7F6E\u6362\u4E2D\u4ECB", en: "Baby Items Swap", emoji: "\uD83D\uDC65" },
  { id: 57, cat: "food_kitchen", zh: "\u5BB6\u5EAD\u8425\u517B\u9910\u642D\u914D\u54A8\u8BE2", en: "Nutrition Advice", emoji: "\uD83E\uDD66" },
  { id: 58, cat: "child_care", zh: "\u4EB2\u5B50\u6237\u5916\u6E38\u620F\u4E0E\u8DF3\u86A4\u5E02\u573A\u7EC4\u7EC7", en: "Kids Flea Market", emoji: "\uD83C\uDF2C\uFE0F" },

  // --- Child Care (59-61) ---
  { id: 59, cat: "child_care", zh: "\u5A74\u5E7C\u513F\u629A\u89E6\u4E0E\u88AB\u52A8\u64CD\u6307\u5BFC", en: "Baby Massage", emoji: "\uD83D\uDC69\u200D\uD83C\uDF7C" },
  { id: 60, cat: "child_care", zh: "\u4EA7\u540E\u5FC3\u7406\u758F\u5BFC\u4E0E\u503E\u542C", en: "Postpartum Support", emoji: "\uD83D\uDC95" },
  { id: 61, cat: "events_community", zh: "\u5BB6\u5EAD\u6D3E\u5BF9 / \u751F\u65E5\u4F1A\u5E03\u7F6E\u534F\u52A9", en: "Party Setup", emoji: "\uD83C\uDF89" },

  // --- Events & Community (62-66) ---
  { id: 62, cat: "events_community", zh: "\u793E\u533A\u6D3B\u5730\u56FE\u5411\u5BFC", en: "Community Map Guide", emoji: "\uD83D\uDDFA\uFE0F" },
  { id: 63, cat: "events_community", zh: "\u793E\u533A\u653F\u7B56\u54A8\u8BE2\u534F\u52A9", en: "Policy Help", emoji: "\uD83D\uDCC4" },
  { id: 64, cat: "events_community", zh: "\u90BB\u91CC\u7EA2\u5A18\u4E0E\u76F8\u4EB2\u7275\u7EBF", en: "Matchmaking", emoji: "\uD83D\uDC97" },
  { id: 65, cat: "events_community", zh: "\u90BB\u91CC\u7EA0\u7EB7\u8C03\u89E3\u5458", en: "Dispute Mediator", emoji: "\u2696\uFE0F" },
  { id: 66, cat: "study_tutor", zh: "\u672C\u5730\u8BDD / \u65B9\u8A00\u6559\u5B66", en: "Dialect Teaching", emoji: "\uD83D\uDCAC" },

  // --- Home Repair (67-68) ---
  { id: 67, cat: "home_repair", zh: "\u4F20\u7EDF\u4FEE\u8865\u5320", en: "Traditional Repair", emoji: "\uD83D\uDD27" },
  { id: 68, cat: "study_tutor", zh: "\u5C11\u513F\u4E66\u6CD5\u4E0E\u56FD\u753B\u542F\u8499\u6307\u5BFC", en: "Kids Calligraphy", emoji: "\uD83D\uDCDC" },

  // --- Events & Community (69-70) ---
  { id: 69, cat: "events_community", zh: "\u68CB\u724C\u5BA4\u79E9\u5E8F\u7BA1\u7406\u5458", en: "Chess Room Manager", emoji: "\uD83C\uDFAE" },
  { id: 70, cat: "events_community", zh: "\u534F\u52A9\u7269\u4E1A\u95E8\u5C97\u4E0E\u5DE1\u903B", en: "Property Patrol", emoji: "\uD83D\uDEE1\uFE0F" },

  // --- Daily Life (71-76) ---
  { id: 71, cat: "daily_life", zh: "\u4EE3\u4E70\u65B0\u9C9C\u5E73\u4EF7\u852C\u83DC", en: "Fresh Veggie Buy", emoji: "\uD83E\uDD66" },
  { id: 72, cat: "elder_care", zh: "\u72EC\u5C45\u8001\u4EBA\u966A\u4F34\u804A\u5929\u4E0E\u503E\u542C", en: "Elder Chat", emoji: "\uD83D\uDC75" },
  { id: 73, cat: "elder_care", zh: "\u8F6E\u6905\u8001\u4EBA\u6652\u592A\u9633\u4F34\u4FA3", en: "Wheelchair Companion", emoji: "\uD83E\uDD7C" },
  { id: 74, cat: "food_kitchen", zh: "\u4F20\u7EDF\u7F8E\u98DF\u6280\u827A\u4F20\u6388", en: "Traditional Cooking", emoji: "\uD83C\uDF75" },
  { id: 75, cat: "recycle_eco", zh: "\u5E9F\u54C1\u56DE\u6536\u4E0E\u521D\u6B65\u5206\u7C7B", en: "Recycle Sort", emoji: "\u267B\uFE0F" },
  { id: 76, cat: "daily_life", zh: "\u8001\u65E7\u5C0F\u533A\u4E34\u65F6\u8F66\u4F4D\u770B\u62A4", en: "Parking Watch", emoji: "\uD83D\uDE97" },

  // --- Events & Community (77-82) ---
  { id: 77, cat: "events_community", zh: "\u5BB6\u65CF\u65CF\u8C31\u6574\u7406\u4E0E\u4FEE\u7F2E", en: "Genealogy Repair", emoji: "\uD83D\uDCD0" },
  { id: 78, cat: "digital_remote", zh: "\u8001\u7167\u7247\u4FEE\u590D\u4E0E\u6570\u5B57\u5316\u6307\u5BFC", en: "Photo Restore", emoji: "\uD83D\uDCF7" },
  { id: 79, cat: "events_community", zh: "\u4F20\u7EDF\u8282\u5E86\u793C\u4EEA\u6307\u5BFC", en: "Festival Etiquette", emoji: "\uD83C\uDFA8" },
  { id: 80, cat: "daily_life", zh: "\u793E\u533A\u82B1\u8349\u8BA4\u517B\u4E0E\u7167\u6599", en: "Garden Adopt", emoji: "\uD83C\uDF3A" },
  { id: 81, cat: "rental_share", zh: "\u95F2\u7F6E\u519C\u5177 / \u5DE5\u5177\u501F\u7528\u7BA1\u7406", en: "Tool Lending", emoji: "\uD83E\uDE9A" },
  { id: 82, cat: "digital_remote", zh: "\u7535\u5546 / \u4F01\u4E1A\u4E91\u5BA2\u670D", en: "Cloud Customer Service", emoji: "\uD83D\uDCAC" },

  // --- Digital & Remote (83-96) ---
  { id: 83, cat: "digital_remote", zh: "AI \u6570\u636E\u6807\u6CE8\u4E0E\u6E05\u6D17", en: "AI Data Labeling", emoji: "\uD83E\uDDE0" },
  { id: 84, cat: "digital_remote", zh: "\u4F1A\u8BAE\u8BB0\u5F55\u6574\u7406\u4E0E\u6587\u5B57\u901F\u8BB0", en: "Meeting Notes", emoji: "\uD83D\uDCD3" },
  { id: 85, cat: "digital_remote", zh: "\u77ED\u89C6\u9891\u526A\u8F91\u4E0E\u540E\u671F\u5236\u4F5C", en: "Video Editing", emoji: "\uD83C\uDFA5" },
  { id: 86, cat: "digital_remote", zh: "\u6DD8\u5B9D\u7F8E\u5DE5\u4E0E\u5E73\u9762\u6D77\u62A5\u8BBE\u8BA1", en: "Graphic Design", emoji: "\uD83C\uDFA8" },
  { id: 87, cat: "digital_remote", zh: "\u591A\u8BED\u79CD\u6587\u6863\u7FFB\u8BD1", en: "Translation", emoji: "\uD83C\uDF10" },
  { id: 88, cat: "digital_remote", zh: "\u6709\u58F0\u4E66 / \u7535\u53F0\u914D\u97F3\u5F55\u5236", en: "Voice Recording", emoji: "\uD83C\uDFA4" },
  { id: 89, cat: "digital_remote", zh: "\u516C\u4F17\u53F7 / \u81EA\u5A92\u4F53\u6587\u6848\u64B0\u5199", en: "Copywriting", emoji: "\u270D\uFE0F" },
  { id: 90, cat: "digital_remote", zh: "\u4F01\u4E1A\u5BA2\u6237\u6EE1\u610F\u5EA6\u7535\u8BDD\u56DE\u8BBF", en: "Customer Callback", emoji: "\uD83D\uDCDE" },
  { id: 91, cat: "digital_remote", zh: "\u5FAE\u4FE1\u793E\u7FA4\u8FD0\u8425\u4E0E\u79E9\u5E8F\u7EF4\u62A4", en: "Community Manager", emoji: "\uD83D\uDCAC" },
  { id: 92, cat: "digital_remote", zh: "\u7EBF\u4E0A\u5FC3\u7406\u503E\u542C\u4E0E\u60C5\u611F\u758F\u5BFC", en: "Online Listening", emoji: "\uD83D\uDC95" },
  { id: 93, cat: "digital_remote", zh: "\u57FA\u7840\u7F16\u7A0B\u4E0E\u4EE3\u7801\u6D4B\u8BD5", en: "Code Testing", emoji: "\uD83D\uDCBB" },
  { id: 94, cat: "digital_remote", zh: "\u7535\u5B50\u4E66\u6392\u7248\u4E0E\u6821\u5BF9", en: "Ebook Formatting", emoji: "\uD83D\uDCDA" },
  { id: 95, cat: "digital_remote", zh: "\u7EBF\u4E0A\u95EE\u5377\u8C03\u67E5\u5F55\u5165", en: "Survey Entry", emoji: "\uD83D\uDCCB" },
  { id: 96, cat: "digital_remote", zh: "\u7F51\u7EDC\u5E97\u94FA\u4EE3\u8FD0\u8425", en: "Shop Operation", emoji: "\uD83D\uDED2" },

  // --- Daily Life / Offline (97-106) ---
  { id: 97, cat: "daily_life", zh: "\u7EBF\u4E0B\u56FE\u4E66\u7BA1\u7406\u5458 / \u4E66\u7C4D\u5F52\u4F4D", en: "Library Aide", emoji: "\uD83D\uDCDA" },
  { id: 98, cat: "daily_life", zh: "\u8D85\u5E02\u8D27\u67B6\u6574\u7406\u4E0E\u65E5\u671F\u68C0\u67E5", en: "Shelf Stocking", emoji: "\uD83D\uDED2" },
  { id: 99, cat: "daily_life", zh: "\u65E0\u58F0\u5496\u5561\u9986\u5496\u5561\u5E08 / \u70D8\u7119\u5E08", en: "Silent Barista", emoji: "\u2615" },
  { id: 100, cat: "daily_life", zh: "\u5E87\u62A4\u5DE5\u573A\u624B\u5DE5\u7EC4\u88C5", en: "Shelter Workshop", emoji: "\uD83E\uDDF0" },
  { id: 101, cat: "daily_life", zh: "\u505C\u8F66\u573A\u6536\u8D39\u4E0E\u79E9\u5E8F\u7BA1\u7406", en: "Parking Attendant", emoji: "\uD83D\uDE97" },
  { id: 102, cat: "daily_life", zh: "\u8F7B\u91CF\u7EA7\u7EFF\u5316\u517B\u62A4", en: "Light Gardening", emoji: "\uD83C\uDF31" },
  { id: 103, cat: "daily_life", zh: "\u524D\u53F0\u6253\u5B57\u4EA4\u6D41\u63A5\u5F85", en: "Text Reception", emoji: "\uD83D\uDCAC" },
  { id: 104, cat: "digital_remote", zh: "\u7EBF\u4E0A\u5854\u7F57 / \u661F\u5EA7\u5A31\u4E50\u5360\u535C", en: "Tarot Reading", emoji: "\uD83D\uDD2E" },
  { id: 105, cat: "digital_remote", zh: "\u7EBF\u4E0A\u7B80\u5386\u4F18\u5316\u4E0E\u6392\u7248", en: "Resume Polish", emoji: "\uD83D\uDCD0" },
  { id: 106, cat: "digital_remote", zh: "\u7EBF\u4E0A PPT \u7F8E\u5316\u4E0E\u5236\u4F5C", en: "PPT Design", emoji: "\uD83D\uDCCA" },

  // --- Study / Companion (107-117) ---
  { id: 107, cat: "study_tutor", zh: "\u5168\u79D1\u4F5C\u4E1A\u8F85\u5BFC\u4E0E\u7279\u957F\u966A\u7EC3", en: "Tutoring", emoji: "\uD83D\uDCDA" },
  { id: 108, cat: "digital_remote", zh: "PPT \u7F8E\u5316\u4E0E\u7B80\u5386\u4F18\u5316", en: "PPT & Resume", emoji: "\uD83D\uDCC4" },
  { id: 109, cat: "daily_life", zh: "\u6570\u7801\u4EA7\u54C1\u5BFC\u8D2D\u4E0E\u667A\u80FD\u5BB6\u5C45\u8BBE\u7F6E", en: "Tech Shopping", emoji: "\uD83D\uDCF1" },
  { id: 110, cat: "daily_life", zh: "\u4EBA\u50CF\u5199\u771F / \u5BA0\u7269 / \u6BD5\u4E1A\u5B63\u6444\u5F71", en: "Photography", emoji: "\uD83D\uDCF7" },
  { id: 111, cat: "digital_remote", zh: "\u63A2\u5E97\u89C6\u9891\u62CD\u6444\u4E0E Vlog \u5236\u4F5C", en: "Vlog Making", emoji: "\uD83C\uDFA5" },
  { id: 112, cat: "companion", zh: "\u6E38\u620F\u966A\u73A9\u4E0E\u6BB5\u4F4D\u4EE3\u7EC3", en: "Game Coaching", emoji: "\uD83C\uDFAE" },
  { id: 113, cat: "study_tutor", zh: "\u7559\u5B66 / \u8003\u7814 / \u8003\u516C\u7ECF\u9A8C\u5206\u4EAB", en: "Exam Experience", emoji: "\uD83C\uDF93" },
  { id: 114, cat: "beauty_health", zh: "\u5065\u8EAB\u79C1\u6559\u4E0E\u591C\u8DD1\u966A\u7EC3", en: "Fitness Coach", emoji: "\uD83D\uDCAA" },
  { id: 115, cat: "beauty_health", zh: "\u4E2A\u4EBA\u7F8E\u5986\u9020\u578B\u4E0E\u7A7F\u642D\u6539\u9020", en: "Style Makeover", emoji: "\uD83D\uDC54" },
  { id: 116, cat: "study_tutor", zh: "\u4E50\u5668\u5165\u95E8\u4E0E\u966A\u7EC3", en: "Music Practice", emoji: "\uD83C\uDFB5" },
  { id: 117, cat: "study_tutor", zh: "\u5916\u8BED\u53E3\u8BED\u5BF9\u8BDD\u7EC3\u4E60", en: "Language Practice", emoji: "\uD83C\uDF10" },

  // --- Daily / Errands (118-131) ---
  { id: 118, cat: "daily_life", zh: "\u6821\u56ED / \u793E\u533A\u8DD1\u817F", en: "Errand Running", emoji: "\uD83C\uDFC3" },
  { id: 119, cat: "daily_life", zh: "\u7F51\u7EA2\u5E97 / \u533B\u9662\u6392\u961F\u4EE3\u529E", en: "Queue Service", emoji: "\uD83D\uDEA6" },
  { id: 120, cat: "daily_life", zh: "\u642C\u5BB6\u6253\u5305\u4E0E\u91CD\u7269\u642C\u8FD0\u52A9\u624B", en: "Moving Helper", emoji: "\uD83D\uDE9A" },
  { id: 121, cat: "events_community", zh: "\u5C55\u4F1A / \u6D3B\u52A8\u4E34\u65F6\u5DE5\u4F5C\u4EBA\u5458", en: "Event Staff", emoji: "\uD83C\uDF9F\uFE0F" },
  { id: 122, cat: "digital_remote", zh: "\u5E02\u573A\u8C03\u7814\u95EE\u5377\u4E0E\u5730\u63A8", en: "Market Survey", emoji: "\uD83D\uDCCB" },
  { id: 123, cat: "pet_care", zh: "\u79D1\u5B66\u517B\u5BA0\u4E0E\u4E0A\u95E8\u6D17\u62A4", en: "Pet Grooming", emoji: "\uD83D\uDC3E" },
  { id: 124, cat: "events_community", zh: "\u5267\u672C\u6740 DM \u4E0E\u684C\u6E38\u5C40\u7EC4\u7EC7", en: "Board Game Host", emoji: "\uD83C\uDFB2" },
  { id: 125, cat: "events_community", zh: "\u521B\u610F\u540E\u5907\u7BB1\u96C6\u5E02\u6446\u644A", en: "Trunk Market", emoji: "\uD83D\uDE9A" },
  { id: 126, cat: "daily_life", zh: "\u517C\u804C\u4EE3\u9A7E\u4E0E\u987A\u98CE\u8F66", en: "Designated Driver", emoji: "\uD83D\uDE97" },
  { id: 127, cat: "home_repair", zh: "\u7535\u8111\u7EF4\u4FEE / \u6E05\u7070 / \u91CD\u88C5\u7CFB\u7EDF", en: "PC Repair", emoji: "\uD83D\uDCBB" },
  { id: 128, cat: "daily_life", zh: "\u624B\u673A\u8D34\u819C\u4E0E\u914D\u4EF6\u552E\u5356", en: "Phone Accessories", emoji: "\uD83D\uDCF1" },
  { id: 129, cat: "recycle_eco", zh: "\u95F2\u9C7C\u65E7\u7269\u56DE\u6536\u4E0E\u8F6C\u5356", en: "Used Items Resell", emoji: "\u267B\uFE0F" },
  { id: 130, cat: "digital_remote", zh: "\u793E\u4EA4\u5A92\u4F53\u8D26\u53F7\u4EE3\u8FD0\u8425", en: "Social Media Mgmt", emoji: "\uD83D\uDCAC" },
  { id: 131, cat: "digital_remote", zh: "\u89C6\u9891\u5B57\u5E55\u5236\u4F5C\u4E0E\u65F6\u95F4\u8F74\u6821\u5BF9", en: "Subtitling", emoji: "\uD83C\uDFA5" },

  // --- Home Repair (132-149) ---
  { id: 132, cat: "home_repair", zh: "\u5BB6\u7535\u6E05\u6D17", en: "Appliance Cleaning", emoji: "\uD83E\uDDF9" },
  { id: 133, cat: "home_repair", zh: "\u7EB1\u7A97\u62C6\u6D17\u4E0E\u66F4\u6362", en: "Screen Repair", emoji: "\uD83D\uDECF\uFE0F" },
  { id: 134, cat: "home_repair", zh: "\u4E0B\u6C34\u9053\u758F\u901A", en: "Drain Unclog", emoji: "\uD83D\uDEBF" },
  { id: 135, cat: "home_repair", zh: "\u9A6C\u6876\u7EF4\u4FEE\u4E0E\u5B89\u88C5", en: "Toilet Repair", emoji: "\uD83D\uDEBD" },
  { id: 136, cat: "home_repair", zh: "\u6362\u706F\u6CE1\u4E0E\u5F00\u5173\u63D2\u5EA7\u7EF4\u4FEE", en: "Electrical Repair", emoji: "\uD83D\uDDA5" },
  { id: 137, cat: "home_repair", zh: "\u5B9C\u5BB6\u7C7B\u5BB6\u5177\u7EC4\u88C5", en: "Furniture Assembly", emoji: "\uD83E\uDE9A" },
  { id: 138, cat: "home_repair", zh: "\u5899\u9762\u8865\u6F06\u4E0E\u9489\u773C\u4FEE\u8865", en: "Wall Patch", emoji: "\uD83D\uDD28" },
  { id: 139, cat: "home_repair", zh: "\u5730\u677F\u6253\u8721\u4E0E\u7F8E\u7F1D", en: "Floor Sealing", emoji: "\uD83D\uDDC4\uFE0F" },
  { id: 140, cat: "home_repair", zh: "\u7A97\u5E18\u62C6\u88C5\u4E0E\u6E05\u6D17", en: "Curtain Service", emoji: "\uD83D\uDC9B" },
  { id: 141, cat: "home_repair", zh: "\u5730\u6BF1\u6E05\u6D17", en: "Carpet Cleaning", emoji: "\uD83E\uDDF9" },
  { id: 142, cat: "home_repair", zh: "\u9AD8\u5C42 / \u5916\u7A97\u73BB\u7483\u64E6\u62ED", en: "Window Cleaning", emoji: "\uD83D\uDECF\uFE0F" },
  { id: 143, cat: "home_repair", zh: "\u642C\u5BB6\u6253\u5305\u4E0E\u8FD8\u539F\u670D\u52A1", en: "Move Pack & Unpack", emoji: "\uD83D\uDE9A" },
  { id: 144, cat: "daily_life", zh: "\u5783\u573E\u6E05\u8FD0\u4E0E\u5927\u4EF6\u642C\u8FD0", en: "Junk Removal", emoji: "\uD83D\uDE9E" },
  { id: 145, cat: "home_repair", zh: "\u914D\u94A5\u5319\u4E0E\u5F00\u6362\u9501", en: "Locksmith", emoji: "\uD83D\uDD10" },
  { id: 146, cat: "home_repair", zh: "\u81EA\u884C\u8F66 / \u7535\u52A8\u8F66\u7B80\u5355\u7EF4\u4FEE", en: "E-Bike Repair", emoji: "\uD83D\uDEB2" },
  { id: 147, cat: "home_repair", zh: "\u6253\u5370\u673A\u52A0\u7C89\u4E0E\u7EF4\u4FEE", en: "Printer Repair", emoji: "\uD83D\uDDA8\uFE0F" },
  { id: 148, cat: "home_repair", zh: "\u7F51\u7EDC\u8C03\u8BD5\u4E0E WiFi \u4FE1\u53F7\u589E\u5F3A", en: "WiFi Setup", emoji: "\uD83D\uDCF6" },
  { id: 149, cat: "home_repair", zh: "\u667A\u80FD\u5BB6\u5C45\u5B89\u88C5", en: "Smart Home Setup", emoji: "\uD83D\uDCBB" },

  // --- Beauty & Health (150-159) ---
  { id: 150, cat: "beauty_health", zh: "\u4E0A\u95E8\u7406\u53D1\uFF08\u9488\u5BF9\u8001\u4EBA / \u513F\u7AE5\uFF09", en: "Home Haircut", emoji: "\uD83D\uDC87" },
  { id: 151, cat: "beauty_health", zh: "\u4E0A\u95E8\u7F8E\u7532\u4E0E\u7F8E\u776B", en: "Home Nail & Lash", emoji: "\uD83D\uDC85" },
  { id: 152, cat: "home_repair", zh: "\u978B\u7C7B\u6E05\u6D17\u4E0E\u4FEE\u590D", en: "Shoe Cleaning", emoji: "\uD83D\uDC5E" },
  { id: 153, cat: "beauty_health", zh: "\u5962\u4F88\u54C1\u76AE\u5177\u62A4\u7406", en: "Luxury Care", emoji: "\uD83D\uDCBC" },
  { id: 154, cat: "beauty_health", zh: "\u4E2D\u533B\u63A8\u62FF\u4E0E\u827E\u7078", en: "TCM Massage", emoji: "\uD83C\uDF3F" },
  { id: 155, cat: "beauty_health", zh: "\u6B63\u9AA8\u4E0E\u6309\u6469\u653E\u677E", en: "Bone Setting", emoji: "\uD83D\uDCAB" },
  { id: 156, cat: "beauty_health", zh: "\u91C7\u8033\u670D\u52A1", en: "Ear Cleaning", emoji: "\uD83D\uDC42" },
  { id: 157, cat: "beauty_health", zh: "\u5212\u75F0\u4E0E\u62D4\u7F50", en: "Gua Sha & Cupping", emoji: "\uD83E\uDE7B" },
  { id: 158, cat: "beauty_health", zh: "\u745C\u4F3D\u4E0E\u666E\u62C9\u63D0\u6307\u5BFC", en: "Yoga & Pilates", emoji: "\uD83E\uDDD8" },
  { id: 159, cat: "beauty_health", zh: "\u821E\u8E48\u6559\u5B66\uFF08\u5E7F\u573A\u821E / \u8857\u821E\uFF09", en: "Dance Teaching", emoji: "\uD83D\uDD7A" },

  // --- Medical Companion (160-161) ---
  { id: 160, cat: "elder_care", zh: "\u966A\u8BCA\u5C31\u533B\uFF08\u5168\u7A0B\u966A\u540C\uFF09", en: "Medical Escort", emoji: "\uD83C\uDFE5" },
  { id: 161, cat: "elder_care", zh: "\u966A\u770B\u75C5\uFF08\u5FC3\u7406\u652F\u6301\uFF09", en: "Hospital Companion", emoji: "\uD83C\uDFE5" },

  // --- Pet Care (162-191) ---
  { id: 162, cat: "pet_care", zh: "\u5BA0\u7269\u6D17\u6FA1\u4E0E\u7F8E\u5BB9", en: "Pet Grooming", emoji: "\uD83D\uDC3E" },
  { id: 163, cat: "pet_care", zh: "\u5BB6\u5EAD\u5F0F\u5BA0\u7269\u5BC4\u517B", en: "Pet Boarding", emoji: "\uD83C\uDFE1" },
  { id: 164, cat: "pet_care", zh: "\u5BA0\u7269\u884C\u4E3A\u77EB\u6B63", en: "Pet Training", emoji: "\uD83D\uDC36" },
  { id: 165, cat: "pet_care", zh: "\u5BA0\u7269\u5B9A\u70B9\u6392\u4FBF / \u6309\u624B\u8BAD\u7EC3", en: "Pet Obedience", emoji: "\uD83D\uDC36" },
  { id: 166, cat: "pet_care", zh: "\u5BA0\u7269\u6444\u5F71", en: "Pet Photography", emoji: "\uD83D\uDCF7" },
  { id: 167, cat: "pet_care", zh: "\u5BA0\u7269\u6B8B\u846C\u4E0E\u5584\u7EC8", en: "Pet Funeral", emoji: "\uD83C\uDF40\uFE0F" },
  { id: 168, cat: "pet_care", zh: "\u5BA0\u7269\u9AA8\u7070\u9970\u54C1\u5236\u4F5C", en: "Pet Ash Jewelry", emoji: "\uD83D\uDC8E" },
  { id: 169, cat: "pet_care", zh: "\u5BA0\u7269\u514B\u9686\u54A8\u8BE2", en: "Pet Clone Consult", emoji: "\uD83E\uDDEC" },
  { id: 170, cat: "pet_care", zh: "\u5BA0\u7269\u57FA\u56E0\u68C0\u6D4B", en: "Pet DNA Test", emoji: "\uD83E\uDDEC" },
  { id: 171, cat: "pet_care", zh: "\u5BA0\u7269\u9C9C\u98DF\u5236\u4F5C", en: "Pet Fresh Food", emoji: "\uD83C\uDF4E" },
  { id: 172, cat: "pet_care", zh: "\u5BA0\u7269\u96F6\u98DF\u70D8\u7119", en: "Pet Treats", emoji: "\uD83C\uDF6A" },
  { id: 173, cat: "pet_care", zh: "\u5BA0\u7269\u8863\u670D / \u914D\u9970 DIY", en: "Pet Clothes DIY", emoji: "\uD83D\uDC54" },
  { id: 174, cat: "pet_care", zh: "\u5BA0\u7269\u7A9D / \u57AB\u5B50\u5B9A\u5236", en: "Pet Bed Custom", emoji: "\uD83D\uDCBA" },
  { id: 175, cat: "pet_care", zh: "\u5F02\u5BA0\u9972\u517B\u54A8\u8BE2\uFF08\u722C\u5BA0 / \u9E1F\u7C7B\uFF09", en: "Exotic Pet Care", emoji: "\uD83E\uDD82" },
  { id: 176, cat: "pet_care", zh: "\u6C34\u65CF\u9020\u666F\u8BBE\u8BA1", en: "Aquascape Design", emoji: "\uD83C\uDFAF" },
  { id: 177, cat: "pet_care", zh: "\u5BA0\u7269\u9886\u517B\u4E2D\u4ECB", en: "Pet Adoption", emoji: "\uD83D\uDC15" },
  { id: 178, cat: "pet_care", zh: "\u6D41\u6D6A\u732B TNR \u534F\u52A9", en: "Stray Cat TNR", emoji: "\uD83D\uDC08" },
  { id: 179, cat: "pet_care", zh: "\u5BA0\u7269\u4E22\u5931\u5BFB\u627E", en: "Pet Lost Search", emoji: "\uD83D\uDC0D" },
  { id: 180, cat: "pet_care", zh: "\u5BA0\u7269\u533B\u7597\u54A8\u8BE2", en: "Pet Medical Advise", emoji: "\uD83C\uDFE5" },
  { id: 181, cat: "pet_care", zh: "\u5BA0\u7269\u4FDD\u9669\u7406\u8D54\u534F\u52A9", en: "Pet Insurance Claim", emoji: "\uD83D\uDCB0" },
  { id: 182, cat: "pet_care", zh: "\u5BA0\u7269\u6258\u8FD0\u4EE3\u529E", en: "Pet Transport", emoji: "\u2708\uFE0F" },
  { id: 183, cat: "pet_care", zh: "\u5BA0\u7269\u75AB\u82CD\u4EE3\u529E", en: "Pet Vaccination", emoji: "\uD83D\uDC89" },
  { id: 184, cat: "pet_care", zh: "\u5BA0\u7269\u82AF\u7247\u690D\u5165", en: "Pet Microchip", emoji: "\uD83D\uDDA5\uFE0F" },
  { id: 185, cat: "pet_care", zh: "\u5BA0\u7269\u6E38\u6CF3\u6C60", en: "Pet Pool", emoji: "\uD83C\uDFCA" },
  { id: 186, cat: "pet_care", zh: "\u5BA0\u7269\u4E50\u56ED\u7EC4\u7EC7", en: "Pet Park Event", emoji: "\uD83C\uDF9F\uFE0F" },
  { id: 187, cat: "pet_care", zh: "\u5BA0\u7269\u76F8\u4EB2", en: "Pet Matchmaking", emoji: "\uD83D\uDC95" },
  { id: 188, cat: "pet_care", zh: "\u5BA0\u7269\u751F\u65E5\u6D3E\u5BF9", en: "Pet Birthday", emoji: "\uD83C\uDF82" },
  { id: 189, cat: "pet_care", zh: "\u5BA0\u7269\u535A\u4E3B\u5B75\u5316", en: "Pet Influencer", emoji: "\uD83D\uDCF8" },
  { id: 190, cat: "pet_care", zh: "\u5BA0\u7269\u5468\u8FB9\u56E2\u8D2D", en: "Pet Supplies Group", emoji: "\uD83D\uDED2" },
  { id: 191, cat: "pet_care", zh: "\u5BA0\u7269\u77E5\u8BC6\u79D1\u666E", en: "Pet Education", emoji: "\uD83D\uDCDA" },

  // --- Companion (192-200) ---
  { id: 192, cat: "companion", zh: "\u966A\u770B\u7535\u5F71\uFF08\u5F71\u9662 / \u79C1\u4EBA\u5F71\u9662\uFF09", en: "Movie Companion", emoji: "\uD83C\uDFAC" },
  { id: 193, cat: "companion", zh: "\u966A\u901B\u516C\u56ED\u4E0E\u538B\u9A6C\u8DEF", en: "Park Companion", emoji: "\uD83C\uDFDE\uFE0F" },
  { id: 194, cat: "companion", zh: "\u966A\u5403\u996D\uFF08\u62FC\u996D / \u642D\u5B50\uFF09", en: "Dining Companion", emoji: "\uD83C\uDF7D\uFE0F" },
  { id: 195, cat: "companion", zh: "\u966A\u5531 KTV", en: "Karaoke Companion", emoji: "\uD83C\uDFA4" },
  { id: 196, cat: "companion", zh: "\u966A\u901B\u8857\u4E0E\u8D2D\u7269\u53C2\u8C0B", en: "Shopping Companion", emoji: "\uD83D\uDECD\uFE0F" },
  { id: 197, cat: "companion", zh: "\u966A\u76F8\u4EB2\uFF08\u5145\u5F53\u670B\u53CB\u6491\u573A\u9762\uFF09", en: "Blind Date Escort", emoji: "\uD83D\uDC97" },
  { id: 198, cat: "companion", zh: "\u966A\u7EC3\u8F66", en: "Driving Practice", emoji: "\uD83D\uDE97" },
  { id: 199, cat: "outdoor_sport", zh: "\u966A\u8DD1\u6B65\u4E0E\u591C\u8DD1", en: "Running Companion", emoji: "\uD83C\uDFC3" },
  { id: 200, cat: "outdoor_sport", zh: "\u966A\u9493\u9C7C", en: "Fishing Companion", emoji: "\uD83C\uDFA3" },

  // === 201-369 (from user message) ===
  // --- Companion (201-220) ---
  { id: 201, cat: "outdoor_sport", zh: "\u966A\u6253\u7403\uFF08\u7FBD\u6BDB\u7403 / \u7BEE\u7403 / \u7F51\u7403\uFF09", en: "Ball Games Coach", emoji: "\uD83C\uDFBE" },
  { id: 202, cat: "companion", zh: "\u966A\u4E0B\u68CB\u4E0E\u6253\u724C", en: "Board Games", emoji: "\uD83C\uDFB2" },
  { id: 203, cat: "companion", zh: "\u6811\u6D1E\u503E\u542C\uFF08\u5410\u69FD / \u79D8\u5BC6\uFF09", en: "Listening Ear", emoji: "\uD83D\uDC42" },
  { id: 204, cat: "companion", zh: "\u60C5\u7EEA\u758F\u5BFC\u4E0E\u5B89\u6170", en: "Emotional Support", emoji: "\uD83D\uDC95" },
  { id: 205, cat: "study_tutor", zh: "\u76D1\u7763\u5B66\u4E60\u4E0E\u6253\u5361", en: "Study Monitor", emoji: "\u270D\uFE0F" },
  { id: 206, cat: "beauty_health", zh: "\u76D1\u7763\u51CF\u80A5\u4E0E\u6212\u7CD6", en: "Diet Coach", emoji: "\uD83C\uDF4E" },
  { id: 207, cat: "daily_life", zh: "\u53EB\u65E9\u4E0E\u54C4\u7761\u670D\u52A1", en: "Wake & Sleep Call", emoji: "\u23F0\uFE0F" },
  { id: 208, cat: "events_community", zh: "\u8282\u65E5\u795D\u798F\u4E0E\u9001\u82B1\u60CA\u559C\u7B56\u5212", en: "Holiday Surprise", emoji: "\uD83C\uDF38" },
  { id: 209, cat: "events_community", zh: "\u751F\u65E5\u6D3E\u5BF9\u5E03\u7F6E\u4E0E\u4E3B\u6301", en: "Birthday Party Host", emoji: "\uD83C\uDF82" },
  { id: 210, cat: "events_community", zh: "\u6C42\u5A5A\u7B56\u5212\u534F\u52A9", en: "Proposal Planner", emoji: "\uD83D\uDC8D" },
  { id: 211, cat: "events_community", zh: "\u5A5A\u793C\u4F34\u90CE / \u4F34\u5A18\u79DF\u8D41", en: "Wedding Party Rental", emoji: "\uD83D\uDC70" },
  { id: 212, cat: "events_community", zh: "\u6D3B\u52A8\u5145\u573A\u4EBA\u5458", en: "Event Extras", emoji: "\uD83C\uDF9F\uFE0F" },
  { id: 213, cat: "events_community", zh: "\u5938\u5938\u7FA4\u7FA4\u4E3B / \u6C14\u6C1B\u7EC4", en: "Hype Squad", emoji: "\uD83D\uDE04" },
  { id: 214, cat: "companion", zh: "\u5435\u67B6\u590D\u76D8\u4E0E\u60C5\u611F\u5206\u6790", en: "Argument Analysis", emoji: "\uD83D\uDCA5" },
  { id: 215, cat: "companion", zh: "\u5931\u604B\u966A\u4F34", en: "Heartbreak Companion", emoji: "\uD83D\uDC94" },
  { id: 216, cat: "companion", zh: "\u804C\u573A\u5410\u69FD\u5927\u4F1A\u542C\u4F17", en: "Work Vent Listener", emoji: "\uD83D\uDC65" },
  { id: 217, cat: "study_tutor", zh: "\u8BFB\u4E66\u5206\u4EAB\u4F1A\u642D\u6863", en: "Reading Partner", emoji: "\uD83D\uDCDA" },
  { id: 218, cat: "events_community", zh: "\u89C2\u5F71\u56E2\u9886\u961F", en: "Movie Tour Lead", emoji: "\uD83C\uDFAC" },
  { id: 219, cat: "events_community", zh: "\u5BC6\u5BA4\u9003\u8131\u7EC4\u961F", en: "Escape Room Team", emoji: "\uD83D\uDD11" },
  { id: 220, cat: "outdoor_sport", zh: "\u5F92\u6B65 / \u767B\u5C71\u642D\u5B50", en: "Hiking Buddy", emoji: "\u26F0\uFE0F" },

  // --- Outdoor (221-224) ---
  { id: 221, cat: "outdoor_sport", zh: "\u9A91\u884C\u642D\u5B50", en: "Cycling Buddy", emoji: "\uD83D\uDEB2" },
  { id: 222, cat: "outdoor_sport", zh: "\u9732\u8425\u88C5\u5907\u5171\u4EAB / \u642D\u5B50", en: "Camping Buddy", emoji: "\u26FA\uFE0F" },
  { id: 223, cat: "events_community", zh: "\u97F3\u4E50\u8282 / \u6F14\u5531\u4F1A\u642D\u5B50", en: "Concert Buddy", emoji: "\uD83C\uDFB6" },
  { id: 224, cat: "events_community", zh: "\u6F2B\u5C55 / Cosplay \u642D\u5B50", en: "Comic Con Buddy", emoji: "\uD83C\uDFA8" },

  // --- Rental & Share (225-238) ---
  { id: 225, cat: "rental_share", zh: "\u4E8C\u624B\u56FE\u4E66\u501F\u9605\u4E0E\u4EA4\u6362", en: "Book Exchange", emoji: "\uD83D\uDCDA" },
  { id: 226, cat: "rental_share", zh: "\u513F\u7AE5\u7ED8\u672C\u6F02\u6D41", en: "Kids Book Swap", emoji: "\uD83D\uDCD6" },
  { id: 227, cat: "rental_share", zh: "\u73A9\u5177\u4EA4\u6362\u4E0E\u79DF\u8D41", en: "Toy Swap", emoji: "\uD83C\uDFB0" },
  { id: 228, cat: "rental_share", zh: "\u5A74\u513F\u8F66 / \u5B89\u5168\u5EA7\u6905\u79DF\u8D41", en: "Baby Gear Rental", emoji: "\uD83D\uDEBC" },
  { id: 229, cat: "rental_share", zh: "\u9732\u8425\u88C5\u5907\u79DF\u8D41", en: "Camping Gear Rental", emoji: "\u26FA\uFE0F" },
  { id: 230, cat: "rental_share", zh: "\u6444\u5F71\u5668\u6750\u79DF\u8D41", en: "Camera Rental", emoji: "\uD83D\uDCF7" },
  { id: 231, cat: "rental_share", zh: "\u6E38\u620F\u5361\u5E26 / \u5149\u76D8\u4EA4\u6362", en: "Game Disc Swap", emoji: "\uD83C\uDFAE" },
  { id: 232, cat: "rental_share", zh: "\u6B63\u88C5 / \u793C\u670D\u79DF\u8D41", en: "Suit Rental", emoji: "\uD83D\uDC54" },
  { id: 233, cat: "rental_share", zh: "\u5DE5\u5177\u501F\u7528\uFF08\u7535\u94BB / \u68AF\u5B50\uFF09", en: "Tool Borrow", emoji: "\uD83E\uDE9A" },
  { id: 234, cat: "rental_share", zh: "\u505C\u8F66\u4F4D\u77ED\u79DF\uFF08\u767D\u5929\u7A7A\u95F2\u65F6\u6BB5\uFF09", en: "Parking Short Rent", emoji: "\uD83D\uDE97" },
  { id: 235, cat: "rental_share", zh: "\u5145\u7535\u6869\u5171\u4EAB", en: "Charging Share", emoji: "\uD83D\uDD0C" },
  { id: 236, cat: "rental_share", zh: "\u5BBD\u5E26 / \u8D26\u53F7\u5171\u4EAB", en: "Broadband Share", emoji: "\uD83C\uDF10" },
  { id: 237, cat: "rental_share", zh: "\u4F1A\u5458\u6743\u76CA\u62FC\u5355\uFF08\u5C71\u59C6 / Costco\uFF09", en: "Membership Share", emoji: "\uD83D\uDCB3" },
  { id: 238, cat: "rental_share", zh: "\u56E2\u8D2D\u62FC\u5355\u56E2\u957F", en: "Group Buy Leader", emoji: "\uD83D\uDED2" },

  // --- Rural & Eco (239-247) ---
  { id: 239, cat: "rural_village", zh: "\u5BB6\u4E61\u7279\u4EA7\u4EE3\u8D2D\u4E0E\u5206\u9500", en: "Local Specialty", emoji: "\uD83C\uDF4E" },
  { id: 240, cat: "recycle_eco", zh: "\u4E34\u671F\u98DF\u54C1\u5904\u7406", en: "Near-Expiry Food", emoji: "\uD83C\uDF4D" },
  { id: 241, cat: "recycle_eco", zh: "\u4E66\u7C4D\u56DE\u6536\u4E0E\u5356\u5E9F\u7EB8", en: "Book Recycling", emoji: "\uD83D\uDCDA" },
  { id: 242, cat: "recycle_eco", zh: "\u65E7\u8863\u56DE\u6536", en: "Cloth Recycling", emoji: "\uD83D\uDC55" },
  { id: 243, cat: "recycle_eco", zh: "\u7535\u5B50\u4EA7\u54C1\u56DE\u6536", en: "E-Waste Recycling", emoji: "\uD83D\uDCBB" },
  { id: 244, cat: "recycle_eco", zh: "\u5BB6\u5177\u5BB6\u7535\u56DE\u6536", en: "Furniture Recycling", emoji: "\uD83E\uDE91" },
  { id: 245, cat: "recycle_eco", zh: "\u7EB8\u7BB1 / \u6CE1\u6CAB\u7BB1\u8D60\u9001", en: "Box Giveaway", emoji: "\uD83D\uDCE6" },
  { id: 246, cat: "recycle_eco", zh: "\u88C5\u4FEE\u4F59\u6599\u8F6C\u8BA9\uFF08\u74F7\u7834 / \u6CB9\u6F06\uFF09", en: "Surplus Materials", emoji: "\uD83C\uDFD1" },
  { id: 247, cat: "recycle_eco", zh: "\u690D\u7269 / \u82B1\u5349\u6266\u63D2\u82D7\u8D60\u9001", en: "Plant Giveaway", emoji: "\uD83C\uDF3F" },

  // --- Transfer (248-254) ---
  { id: 248, cat: "pet_care", zh: "\u5BA0\u7269\u7528\u54C1\u8F6C\u8BA9", en: "Pet Supplies Transfer", emoji: "\uD83D\uDC3E" },
  { id: 249, cat: "child_care", zh: "\u6BCD\u5A74\u7528\u54C1\u8F6C\u8BA9", en: "Baby Items Transfer", emoji: "\uD83D\uDC69\u200D\uD83D\uDC67" },
  { id: 250, cat: "beauty_health", zh: "\u5065\u8EAB\u5668\u6750\u8F6C\u8BA9", en: "Fitness Gear Transfer", emoji: "\uD83D\uDCAA" },
  { id: 251, cat: "study_tutor", zh: "\u4E50\u5668\u8F6C\u8BA9", en: "Instrument Transfer", emoji: "\uD83C\uDFB5" },
  { id: 252, cat: "events_community", zh: "\u6536\u85CF\u54C1\u4EA4\u6D41", en: "Collectibles Exchange", emoji: "\uD83E\uDDF8" },
  { id: 253, cat: "events_community", zh: "\u90AE\u7968 / \u94B1\u5E01\u4EA4\u6362", en: "Stamp & Coin Swap", emoji: "\uD83D\uDCB0" },
  { id: 254, cat: "events_community", zh: "\u76F2\u76D2 / \u624B\u529E\u4EA4\u6362", en: "Blind Box Swap", emoji: "\uD83C\uDF81" },

  // --- Rural (255-283) ---
  { id: 255, cat: "rural_village", zh: "\u519C\u5BB6\u83DC\u91C7\u6458\u5411\u5BFC", en: "Farm Pick Guide", emoji: "\uD83C\uDF4E" },
  { id: 256, cat: "rural_village", zh: "\u571F\u9E21 / \u571F\u9E21\u86CB\u4EE3\u8D2D", en: "Farm Eggs", emoji: "\uD83E\uDD5A" },
  { id: 257, cat: "rural_village", zh: "\u81EA\u79CD\u852C\u83DC\u914D\u9001", en: "Farm Veggie Delivery", emoji: "\uD83E\uDD66" },
  { id: 258, cat: "rural_village", zh: "\u4E61\u6751\u6C11\u5BBF\u4F53\u9A8C\u4E0E\u63A5\u5F85", en: "Village Homestay", emoji: "\uD83C\uDFE1" },
  { id: 259, cat: "rural_village", zh: "\u519C\u6D3B\u4F53\u9A8C\uFF08\u63D2\u79E7 / \u6536\u5272\uFF09", en: "Farming Experience", emoji: "\uD83C\uDF3E" },
  { id: 260, cat: "rural_village", zh: "\u91CE\u83DC\u6316\u6398\u5411\u5BFC", en: "Wild Herb Guide", emoji: "\uD83C\uDF3F" },
  { id: 261, cat: "rural_village", zh: "\u9493\u9C7C\u5858\u8001\u677F\u5BF9\u63A5", en: "Fish Pond Connect", emoji: "\uD83C\uDFA3" },
  { id: 262, cat: "rural_village", zh: "\u4E61\u6751\u5BB4\u5E2D\u53A8\u5E08\u56E2\u961F", en: "Village Feast Chef", emoji: "\uD83C\uDF7D\uFE0F" },
  { id: 263, cat: "events_community", zh: "\u7EA2\u767D\u559C\u4E8B\u53F8\u4EEA", en: "Event MC", emoji: "\uD83C\uDFB5" },
  { id: 264, cat: "events_community", zh: "\u5683\u5450 / \u4E50\u961F\u8868\u6F14", en: "Band Performance", emoji: "\uD83C\uDFB6" },
  { id: 265, cat: "events_community", zh: "\u821E\u72EE / \u821E\u9F99\u961F", en: "Lion Dance", emoji: "\uD83D\uDC02" },
  { id: 266, cat: "rental_share", zh: "\u5A5A\u5E86\u8F66\u961F\u79DF\u8D41", en: "Wedding Car Rental", emoji: "\uD83D\uDE8E" },
  { id: 267, cat: "rural_village", zh: "\u7960\u5802 / \u5E99\u4F1A\u5411\u5BFC", en: "Temple Guide", emoji: "\u26EA\uFE0F" },
  { id: 268, cat: "rural_village", zh: "\u4E61\u571F\u5BFC\u6E38", en: "Rural Tour Guide", emoji: "\uD83C\uDFDE\uFE0F" },
  { id: 269, cat: "rural_village", zh: "\u519C\u4EA7\u54C1\u76F4\u64AD\u5E26\u8D27", en: "Farm Livestream", emoji: "\uD83D\uDCF9" },
  { id: 270, cat: "rural_village", zh: "\u4E61\u6751\u6444\u5F71\u91C7\u98CE\u5411\u5BFC", en: "Rural Photo Guide", emoji: "\uD83D\uDCF7" },
  { id: 271, cat: "rural_village", zh: "\u661F\u7A7A\u9732\u8425\u57FA\u5730\u63A8\u8350", en: "Stargazing Camp", emoji: "\u2B50" },
  { id: 272, cat: "rural_village", zh: "\u6EAA\u6D41\u6349\u9C7C / \u6293\u87F9\u5411\u5BFC", en: "Stream Fishing Guide", emoji: "\uD83C\uDFA3" },
  { id: 273, cat: "rural_village", zh: "\u67F4\u706B\u7076\u4F53\u9A8C", en: "Firewood Stove", emoji: "\uD83D\uDD25" },
  { id: 274, cat: "study_tutor", zh: "\u4F20\u7EDF\u624B\u5DE5\u827A\u6559\u5B66\uFF08\u7AF9\u7F16 / \u8349\u7F16\uFF09", en: "Bamboo Craft", emoji: "\uD83C\uDF43" },
  { id: 275, cat: "rural_village", zh: "\u917F\u9152 / \u5236\u8336\u4F53\u9A8C", en: "Brewing Experience", emoji: "\uD83C\uDF7A" },
  { id: 276, cat: "rural_village", zh: "\u78E8\u8C46\u8150 / \u505A\u5E74\u7CD5\u4F53\u9A8C", en: "Tofu Making", emoji: "\uD83C\uDF5C" },
  { id: 277, cat: "rural_village", zh: "\u4E61\u6751\u5EB7\u517B / \u907F\u6691\u63A5\u5F85", en: "Rural Wellness", emoji: "\uD83C\uDF3F" },
  { id: 278, cat: "rural_village", zh: "\u8BA4\u517B\u4E00\u68F5\u6811 / \u4E00\u5757\u5730", en: "Tree Adoption", emoji: "\uD83C\uDF33" },
  { id: 279, cat: "rental_share", zh: "\u519C\u673A\u5177\u79DF\u8D41", en: "Farm Equipment Rental", emoji: "\uD83D\uDE9A" },
  { id: 280, cat: "rural_village", zh: "\u79CD\u5B50 / \u79CD\u82D7\u4EA4\u6362", en: "Seed Exchange", emoji: "\uD83C\uDF31" },
  { id: 281, cat: "rural_village", zh: "\u6709\u673A\u80A5 / \u867E\u8693\u7CCA\u9500\u552E", en: "Organic Fertilizer", emoji: "\uD83C\uDF3E" },
  { id: 282, cat: "rural_village", zh: "\u8702\u4EA7\u54C1\u76F4\u4F9B", en: "Honey Direct", emoji: "\uD83D\uDC1D" },
  { id: 283, cat: "rural_village", zh: "\u4E2D\u8349\u836F\u8BC6\u522B\u4E0E\u91C7\u96C6", en: "Herb Identification", emoji: "\uD83C\uDF3F" },

  // --- Elder Care (284-311) ---
  { id: 284, cat: "elder_care", zh: "\u667A\u80FD\u624B\u673A\u4F7F\u7528\u6559\u5B66", en: "Phone Teaching", emoji: "\uD83D\uDCF1" },
  { id: 285, cat: "elder_care", zh: "\u5FAE\u4FE1 / \u6296\u97F3\u64CD\u4F5C\u6307\u5BFC", en: "App Guidance", emoji: "\uD83D\uDCF2" },
  { id: 286, cat: "elder_care", zh: "\u7F51\u4E0A\u4E70\u83DC / \u6302\u53F7\u6559\u5B66", en: "Online Shopping Help", emoji: "\uD83D\uDED2" },
  { id: 287, cat: "elder_care", zh: "\u9632\u8BC8\u9A97\u77E5\u8BC6\u8BB2\u5EA7", en: "Anti-Scam Class", emoji: "\uD83D\uDEE1\uFE0F" },
  { id: 288, cat: "elder_care", zh: "\u8001\u5E74\u5927\u5B66\u8BFE\u7A0B\u52A9\u6559", en: "Elder University TA", emoji: "\uD83C\uDF93" },
  { id: 289, cat: "elder_care", zh: "\u9000\u4F11\u91D1 / \u793E\u4FDD\u653F\u7B56\u54A8\u8BE2", en: "Pension Advisory", emoji: "\uD83D\uDCB0" },
  { id: 290, cat: "elder_care", zh: "\u9002\u8001\u5316\u6539\u9020\u8BC4\u4F30", en: "Aging Home Assessment", emoji: "\uD83C\uDFE1" },
  { id: 291, cat: "home_repair", zh: "\u6276\u624B / \u9632\u6ED1\u57AB\u5B89\u88C5", en: "Grab Bar Install", emoji: "\uD83D\uDEE1\uFE0F" },
  { id: 292, cat: "elder_care", zh: "\u7D27\u6025\u547C\u53EB\u5668\u5B89\u88C5", en: "Emergency Button", emoji: "\uD83D\uDEA8" },
  { id: 293, cat: "elder_care", zh: "\u52A9\u542C\u5668\u8C03\u8BD5", en: "Hearing Aid Setup", emoji: "\uD83D\uDD0A" },
  { id: 294, cat: "rental_share", zh: "\u8F6E\u6905 / \u62D0\u6756\u79DF\u8D41", en: "Wheelchair Rental", emoji: "\uD83E\uDD7C" },
  { id: 295, cat: "elder_care", zh: "\u6210\u4EBA\u7EB8\u5C3F\u88E4 / \u62A4\u7406\u57AB\u914D\u9001", en: "Care Supplies", emoji: "\uD83D\uDECD\uFE0F" },
  { id: 296, cat: "elder_care", zh: "\u8001\u5E74\u8425\u517B\u9910\u914D\u9001", en: "Elder Meal Delivery", emoji: "\uD83C\uDF7C" },
  { id: 297, cat: "elder_care", zh: "\u6162\u75C5\u7BA1\u7406\u63D0\u9192", en: "Chronic Disease Alert", emoji: "\u23F0\uFE0F" },
  { id: 298, cat: "elder_care", zh: "\u7528\u836F\u63D0\u9192\u4E0E\u5206\u88C5", en: "Medication Reminder", emoji: "\uD83D\uDC8A" },
  { id: 299, cat: "elder_care", zh: "\u5B9A\u671F\u7535\u8BDD\u95EE\u5019", en: "Regular Check-in Call", emoji: "\uD83D\uDCDE" },
  { id: 300, cat: "elder_care", zh: "\u966A\u540C\u6563\u6B65\u4E0E\u6652\u592A\u9633", en: "Sunshine Walk", emoji: "\u2600\uFE0F" },
  { id: 301, cat: "elder_care", zh: "\u56DE\u5FC6\u5F55\u64B0\u5199\u4E0E\u53E3\u8FF0\u5386\u53F2", en: "Memoir Writing", emoji: "\uD83D\uDCD0" },
  { id: 302, cat: "elder_care", zh: "\u9057\u5631\u54A8\u8BE2\u4E0E\u516C\u8BC1\u534F\u52A9", en: "Will Consultation", emoji: "\uD83D\uDCDC" },
  { id: 303, cat: "elder_care", zh: "\u6B8B\u846C\u793C\u4EEA\u54A8\u8BE2", en: "Funeral Advisory", emoji: "\uD83C\uDF40\uFE0F" },
  { id: 304, cat: "elder_care", zh: "\u5893\u5730\u9009\u8D2D\u5411\u5BFC", en: "Cemetery Guide", emoji: "\u26EA\uFE0F" },
  { id: 305, cat: "elder_care", zh: "\u796D\u7940\u7528\u54C1\u4EE3\u8D2D", en: "Ritual Supplies", emoji: "\uD83D\uDD2E" },
  { id: 306, cat: "elder_care", zh: "\u8001\u5E74\u65C5\u6E38\u56E2\u9886\u961F", en: "Elder Tour Lead", emoji: "\u2708\uFE0F" },
  { id: 307, cat: "events_community", zh: "\u68CB\u724C\u5BA4\u7EC4\u7EC7", en: "Chess Club", emoji: "\uD83C\uDFB2" },
  { id: 308, cat: "events_community", zh: "\u5408\u5531\u56E2 / \u821E\u8E48\u961F\u7EC4\u7EC7", en: "Choir & Dance", emoji: "\uD83C\uDFA4" },
  { id: 309, cat: "beauty_health", zh: "\u517B\u751F\u8BB2\u5EA7\u7EC4\u7EC7", en: "Wellness Seminar", emoji: "\uD83C\uDF3F" },
  { id: 310, cat: "elder_care", zh: "\u4E49\u8BCA\u6D3B\u52A8\u7EC4\u7EC7", en: "Free Clinic", emoji: "\uD83C\uDFE5" },

  // --- Digital (311-349) ---
  { id: 311, cat: "rental_share", zh: "\u5171\u4EAB\u529E\u516C\u684C / \u5DE5\u4F4D", en: "Coworking Desk", emoji: "\uD83D\uDCBC" },
  { id: 312, cat: "rental_share", zh: "\u5171\u4EAB\u4F1A\u8BAE\u5BA4", en: "Meeting Room", emoji: "\uD83D\uDCCB" },
  { id: 313, cat: "digital_remote", zh: "\u6253\u5370 / \u590D\u5370 / \u626B\u63CF", en: "Print & Scan", emoji: "\uD83D\uDDA8\uFE0F" },
  { id: 314, cat: "rental_share", zh: "\u9AD8\u901F\u7F51\u7EDC\u63D0\u4F9B", en: "High-Speed WiFi", emoji: "\uD83D\uDCF6" },
  { id: 315, cat: "food_kitchen", zh: "\u5496\u5561 / \u8336\u6C34\u65E0\u9650\u7EED\u676F", en: "Coffee Refill", emoji: "\u2615" },
  { id: 316, cat: "rental_share", zh: "\u529E\u516C\u7528\u54C1\u501F\u7528", en: "Office Supplies", emoji: "\uD83D\uDDC4\uFE0F" },
  { id: 317, cat: "daily_life", zh: "\u5FEB\u9012\u4EE3\u6536\u4E0E\u8F6C\u53D1", en: "Parcel Receive", emoji: "\uD83D\uDCE6" },
  { id: 318, cat: "digital_remote", zh: "\u5546\u52A1\u540D\u7247\u5370\u5237", en: "Business Card Print", emoji: "\uD83D\uDCBC" },
  { id: 319, cat: "digital_remote", zh: "\u89C6\u9891\u4F1A\u8BAE\u80CC\u666F\u5E03\u7F6E", en: "Video Background", emoji: "\uD83C\uDFA5" },
  { id: 320, cat: "rental_share", zh: "\u76F4\u64AD\u573A\u5730\u79DF\u8D41", en: "Stream Studio", emoji: "\uD83D\uDCF9" },
  { id: 321, cat: "rental_share", zh: "\u5F55\u97F3\u68DA / \u76F4\u64AD\u95F4\u79DF\u8D41", en: "Recording Studio", emoji: "\uD83C\uDFA4" },
  { id: 322, cat: "digital_remote", zh: "\u7EFF\u5E55\u6263\u50CF\u670D\u52A1", en: "Green Screen", emoji: "\uD83C\uDFA5" },
  { id: 323, cat: "digital_remote", zh: "\u89C6\u9891\u7D20\u6750\u5E93\u5171\u4EAB", en: "Footage Library", emoji: "\uD83C\uDF9F\uFE0F" },
  { id: 324, cat: "digital_remote", zh: "\u7248\u6743\u97F3\u4E50\u8D2D\u4E70\u6E20\u9053", en: "Music License", emoji: "\uD83C\uDFB5" },
  { id: 325, cat: "digital_remote", zh: "\u5B57\u4F53\u6388\u6743\u54A8\u8BE2", en: "Font License", emoji: "\uD83D\uDD8B\uFE0F" },
  { id: 326, cat: "digital_remote", zh: "\u8F6F\u4EF6\u6B63\u7248\u5316\u54A8\u8BE2", en: "Software License", emoji: "\uD83D\uDCBB" },
  { id: 327, cat: "digital_remote", zh: "\u4E91\u670D\u52A1\u5668\u914D\u7F6E", en: "Cloud Server Setup", emoji: "\u2601\uFE0F" },
  { id: 328, cat: "digital_remote", zh: "\u57DF\u540D\u6CE8\u518C\u4E0E\u5907\u6848", en: "Domain Registration", emoji: "\uD83C\uDF10" },
  { id: 329, cat: "digital_remote", zh: "\u5C0F\u7A0B\u5E8F\u5F00\u53D1", en: "Mini Program Dev", emoji: "\uD83D\uDCF1" },
  { id: 330, cat: "digital_remote", zh: "\u7F51\u7AD9\u642D\u5EFA", en: "Website Building", emoji: "\uD83C\uDF10" },
  { id: 331, cat: "digital_remote", zh: "SEO \u4F18\u5316", en: "SEO Optimization", emoji: "\uD83D\uDD0D" },
  { id: 332, cat: "digital_remote", zh: "\u79C1\u57DF\u6D41\u91CF\u642D\u5EFA", en: "Private Traffic", emoji: "\uD83D\uDC65" },
  { id: 333, cat: "digital_remote", zh: "\u793E\u7FA4\u8FD0\u8425\u6258\u7BA1", en: "Community Mgmt", emoji: "\uD83D\uDCAC" },
  { id: 334, cat: "digital_remote", zh: "\u6587\u6848\u64B0\u5199\u4E0E\u4EE3\u7B14", en: "Ghostwriting", emoji: "\u270D\uFE0F" },
  { id: 335, cat: "digital_remote", zh: "\u7FFB\u8BD1\u670D\u52A1\uFF08\u591A\u8BED\u79CD\uFF09", en: "Translation Service", emoji: "\uD83C\uDF10" },
  { id: 336, cat: "digital_remote", zh: "\u5B57\u5E55\u5236\u4F5C", en: "Subtitle Making", emoji: "\uD83C\uDFA5" },
  { id: 337, cat: "digital_remote", zh: "\u914D\u97F3\u670D\u52A1", en: "Voice Over", emoji: "\uD83C\uDFA4" },
  { id: 338, cat: "digital_remote", zh: "\u63D2\u753B\u7ED8\u5236", en: "Illustration", emoji: "\uD83C\uDFA8" },
  { id: 339, cat: "digital_remote", zh: "\u52A8\u753B\u5236\u4F5C", en: "Animation", emoji: "\uD83C\uDFAF" },
  { id: 340, cat: "digital_remote", zh: "3D \u5EFA\u6A21", en: "3D Modeling", emoji: "\uD83D\uDCA5" },
  { id: 341, cat: "digital_remote", zh: "VR/AR \u5185\u5BB9\u5236\u4F5C", en: "VR/AR Content", emoji: "\uD83E\uDD7E" },
  { id: 342, cat: "digital_remote", zh: "\u533A\u5757\u94FE / NFT \u54A8\u8BE2", en: "Blockchain Consult", emoji: "\u26D3\uFE0F" },
  { id: 343, cat: "study_tutor", zh: "AI \u5DE5\u5177\u4F7F\u7528\u57F9\u8BAD", en: "AI Tool Training", emoji: "\uD83E\uDDE0" },
  { id: 344, cat: "digital_remote", zh: "Prompt \u63D0\u793A\u8BCD\u5DE5\u7A0B", en: "Prompt Engineering", emoji: "\uD83E\uDDE0" },
  { id: 345, cat: "digital_remote", zh: "\u6570\u636E\u5206\u6790\u62A5\u544A", en: "Data Analysis", emoji: "\uD83D\uDCCA" },
  { id: 346, cat: "digital_remote", zh: "\u5E02\u573A\u8C03\u7814", en: "Market Research", emoji: "\uD83D\uDCB8" },
  { id: 347, cat: "digital_remote", zh: "\u7ADE\u54C1\u5206\u6790", en: "Competitor Analysis", emoji: "\uD83D\uDD0D" },
  { id: 348, cat: "digital_remote", zh: "\u5546\u4E1A\u8BA1\u5212\u4E66\u64B0\u5199", en: "Business Plan", emoji: "\uD83D\uDCD0" },
  { id: 349, cat: "digital_remote", zh: "\u878D\u8D44\u8DEF\u6F14\u8F85\u5BFC", en: "Pitch Coaching", emoji: "\uD83D\uDCBC" },

  // --- Emergency (350-369) ---
  { id: 350, cat: "emergency", zh: "\u6DF1\u591C\u9001\u836F", en: "Late Night Pharmacy", emoji: "\uD83D\uDC8A" },
  { id: 351, cat: "emergency", zh: "\u7D27\u6025\u5F00\u9501", en: "Emergency Unlock", emoji: "\uD83D\uDD10" },
  { id: 352, cat: "emergency", zh: "\u8F66\u8F86\u642D\u7535\u4E0E\u6362\u80CE", en: "Jump Start & Tire", emoji: "\uD83D\uDE97" },
  { id: 353, cat: "emergency", zh: "\u62D6\u8F66\u670D\u52A1", en: "Tow Truck", emoji: "\uD83D\uDE9A" },
  { id: 354, cat: "emergency", zh: "\u66B4\u96E8\u5929\u63A5\u9001", en: "Storm Transport", emoji: "\uD83C\uDF27\uFE0F" },
  { id: 355, cat: "emergency", zh: "\u7A81\u53D1\u60C5\u51B5\u4E34\u65F6\u770B\u62A4", en: "Emergency Care", emoji: "\uD83C\uDFE5" },
  { id: 356, cat: "emergency", zh: "\u5FD8\u5E26\u94A5\u5319\u9001\u5907\u7528\u94A5\u5319", en: "Spare Key Delivery", emoji: "\uD83D\uDD11" },
  { id: 357, cat: "emergency", zh: "\u91CD\u8981\u6587\u4EF6\u95EA\u9001", en: "Document Rush", emoji: "\u26E9\uFE0F" },
  { id: 358, cat: "emergency", zh: "\u8BC1\u4EF6\u8865\u529E\u6307\u5F15", en: "ID Replacement Guide", emoji: "\uD83D\uDCDC" },
  { id: 359, cat: "emergency", zh: "\u5931\u7269\u62DB\u9886\u4FE1\u606F\u53D1\u5E03", en: "Lost & Found", emoji: "\uD83D\uDD0D" },
  { id: 360, cat: "emergency", zh: "\u5BFB\u4EBA\u542F\u4E8B\u6269\u6563", en: "Missing Person Alert", emoji: "\uD83D\uDC64" },
  { id: 361, cat: "emergency", zh: "\u6CD5\u5F8B\u63F4\u52A9\u7D27\u6025\u4ECB\u5165", en: "Legal Aid", emoji: "\u2696\uFE0F" },
  { id: 362, cat: "emergency", zh: "\u5FC3\u7406\u5371\u673A\u5E72\u9884", en: "Crisis Intervention", emoji: "\uD83D\uDC95" },
  { id: 363, cat: "emergency", zh: "\u706B\u707E / \u5730\u9707\u5E94\u6025\u77E5\u8BC6\u57F9\u8BAD", en: "Disaster Training", emoji: "\uD83D\uDEA8" },
  { id: 364, cat: "emergency", zh: "\u6025\u6551\u6280\u80FD\u57F9\u8BAD\uFF08CPR/AED\uFF09", en: "CPR & AED Training", emoji: "\u2764\uFE0F" },
  { id: 365, cat: "emergency", zh: "\u706D\u706B\u5668\u5145\u88C5\u4E0E\u68C0\u67E5", en: "Fire Extinguisher", emoji: "\uD83D\uDED1" },
  { id: 366, cat: "emergency", zh: "\u5BB6\u5EAD\u5B89\u9632\u8BC4\u4F30", en: "Home Security Audit", emoji: "\uD83D\uDD12" },
  { id: 367, cat: "emergency", zh: "\u9690\u79C1\u68C0\u6D4B\uFF08\u9488\u5B54\u6444\u50CF\u5934\uFF09", en: "Privacy Sweep", emoji: "\uD83D\uDD0D" },
  { id: 368, cat: "events_community", zh: "\u566A\u97F3\u6295\u8BC9\u534F\u52A9", en: "Noise Complaint", emoji: "\uD83D\uDD0A" },
  { id: 369, cat: "events_community", zh: "\u90BB\u91CC\u77DB\u76FE\u8C03\u89E3\u5458", en: "Neighbor Mediator", emoji: "\u2696\uFE0F" }
];

// ===================== UI Translations (6 Global Languages) =====================
const I18N = {
  zh: {
    appName: "EACO \u5730\u7403\u6751", tagline: "\u534A\u719F\u4EBA\u793E\u4EA4 \u00B7 \u805A\u7126\u4E09\u516C\u91CC", 
    search: "\u641C\u7D22\u670D\u52A1...", allCats: "\u5168\u90E8", results: "\u6761\u670D\u52A1",
    eacoSection: "EACO Web3 \u751F\u6001", pilotTitle: "\u8BD5\u70B9\u533A\u57DF", langTitle: "\u591A\u8BED\u8A00\u652F\u6301",
    globalLangs: "6 \u79CD\u5168\u7403\u901A\u7528\u8BED\u8A00", neighborLangs: "20 \u79CD\u90BB\u56FD\u8BED\u8A00",
    ca: "\u5408\u7EA6\u5730\u5740", dex: "\u4EA4\u6613\u6240\u5165\u53E3", community: "\u793E\u533A\u9891\u9053",
    lpProgram: "LP \u5408\u4F19\u4EBA\u8BA1\u5212", walletVerify: "\u94B1\u5305\u9A8C\u8BC1",
    sendTest: "\u53D1\u9001 2000 EACO \u6D4B\u8BD5 \u2192 \u539F\u8DEF\u9000\u56DE 1000 EACO",
    payWithEaco: "\u652F\u4ED8\u65B9\u5F0F: EACO ($e)", eacoPay: "EACO \u652F\u4ED8",
    joinTelegram: "\u52A0\u5165\u793E\u533A", viewOnDex: "\u4EA4\u6613\u6240\u67E5\u770B", 
    services: "\u670D\u52A1\u5217\u8868", total: "\u5171", items: "\u9879",
    about: "\u5173\u4E8E", mission: "\u9879\u76EE\u4F7F\u547D", footer: "EACO Earth's Best Coin \u00B7 \u5B87\u5B99\u552F\u4E00\u5730\u7403\u539F\u751FMEME\u5E01",
    threeKm: "\u4E09\u516C\u91CC\u751F\u6D3B\u5708", semiSocial: "\u534A\u719F\u4EBA\u793E\u4EA4",
    semiSocialDesc: "\u670D\u52A1\u7684\u4EBA\u53EF\u80FD\u662F\u4F60\u7684\u670B\u53CB\u3001\u90BB\u5C45\u3001\u7FA4\u53CB",
    powered: "\u7531 EACO \u63D0\u4F9B\u652F\u6301"
  },
  en: {
    appName: "EACO Earth Village", tagline: "Semi-Acquaintance Social \u00B7 Within 3km",
    search: "Search services...", allCats: "All", results: "services",
    eacoSection: "EACO Web3 Ecosystem", pilotTitle: "Pilot Regions", langTitle: "Multilingual Support",
    globalLangs: "6 Global Languages", neighborLangs: "20 Neighbor Languages",
    ca: "Contract Address", dex: "DEX Entry", community: "Community Channels",
    lpProgram: "LP Partner Program", walletVerify: "Wallet Verification",
    sendTest: "Send 2000 EACO test \u2192 return 1000 EACO to verify",
    payWithEaco: "Payment: EACO ($e)", eacoPay: "EACO Payment",
    joinTelegram: "Join Community", viewOnDex: "View on DEX",
    services: "Services", total: "Total", items: "items",
    about: "About", mission: "Mission", footer: "EACO Earth's Best Coin \u00B7 The Only Earth MEME Coin",
    threeKm: "3km Life Circle", semiSocial: "Semi-Acquaintance",
    semiSocialDesc: "Service providers may be your friends, neighbors, or group members",
    powered: "Powered by EACO"
  },
  ar: {
    appName: "\u0642\u0631\u064A\u0629 \u0625\u064A\u0643\u0648", tagline: "\u0634\u0628\u0643\u0629 \u0627\u062C\u062A\u0645\u0627\u0639\u064A\u0629 \u0634\u0628\u0647 \u0645\u0639\u0631\u0641\u0629 \u00B7 \u0636\u0645\u0646 3 \u0643\u0645",
    search: "\u0628\u062D\u062B \u0639\u0646 \u062E\u062F\u0645\u0627\u062A...", allCats: "\u0627\u0644\u0643\u0644", results: "\u062E\u062F\u0645\u0627\u062A",
    eacoSection: "\u0646\u0638\u0627\u0645 EACO Web3", pilotTitle: "\u0645\u0646\u0627\u0637\u0642 \u0627\u0644\u062A\u062C\u0631\u0628\u0629", langTitle: "\u062F\u0639\u0645 \u0645\u062A\u0639\u062F\u062F \u0627\u0644\u0644\u063A\u0627\u062A",
    globalLangs: "6 \u0644\u063A\u0627\u062A \u0639\u0627\u0644\u0645\u064A\u0629", neighborLangs: "20 \u0644\u063A\u0629 \u062C\u0627\u0631\u0629",
    ca: "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0639\u0642\u062F", dex: "\u062F\u062E\u0648\u0644 \u0627\u0644\u062A\u0628\u0627\u062F\u0644", community: "\u0642\u0646\u0648\u0627\u062A \u0627\u0644\u0645\u062C\u062A\u0645\u0639",
    lpProgram: "\u0628\u0631\u0646\u0627\u0645\u062C \u0634\u0631\u0643\u0627\u0621 LP", walletVerify: "\u062A\u062D\u0642\u0642 \u0627\u0644\u0645\u062D\u0641\u0638\u0629",
    sendTest: "\u0625\u0631\u0633\u0627\u0644 2000 EACO \u2192 \u0625\u0631\u062C\u0627\u0639 1000 EACO",
    payWithEaco: "\u0627\u0644\u062F\u0641\u0639: EACO ($e)", eacoPay: "\u062F\u0641\u0639 EACO",
    joinTelegram: "\u0627\u0646\u0636\u0645 \u0644\u0644\u0645\u062C\u062A\u0645\u0639", viewOnDex: "\u0639\u0631\u0636 \u0639\u0644\u0649 DEX",
    services: "\u0627\u0644\u062E\u062F\u0645\u0627\u062A", total: "\u0627\u0644\u0645\u062C\u0645\u0648\u0639", items: "\u0639\u0646\u0635\u0631",
    about: "\u062D\u0648\u0644", mission: "\u0627\u0644\u0631\u0633\u0627\u0644\u0629", footer: "EACO Earth's Best Coin",
    threeKm: "\u062F\u0627\u0626\u0631\u0629 3 \u0643\u0645", semiSocial: "\u0634\u0628\u0647 \u0645\u0639\u0631\u0641\u0629",
    semiSocialDesc: "\u0645\u0642\u062F\u0645\u0648 \u0627\u0644\u062E\u062F\u0645\u0629 \u0642\u062F \u064A\u0643\u0648\u0646\u0648\u0646 \u0623\u0635\u062F\u0642\u0627\u0626\u0643 \u0623\u0648 \u062C\u064A\u0631\u0627\u0646\u0643",
    powered: "\u0645\u062F\u0639\u0648\u0645 \u0628\u0648\u0627\u0633\u0637\u0629 EACO"
  },
  es: {
    appName: "Aldea EACO", tagline: "Social Semi-Conocido \u00B7 Dentro de 3km",
    search: "Buscar servicios...", allCats: "Todos", results: "servicios",
    eacoSection: "Ecosistema EACO Web3", pilotTitle: "Regiones Piloto", langTitle: "Soporte Multiling\u00FCe",
    globalLangs: "6 Idiomas Globales", neighborLangs: "20 Idiomas Vecinos",
    ca: "Direcci\u00F3n del Contrato", dex: "Entrada DEX", community: "Canales de Comunidad",
    lpProgram: "Programa de Socios LP", walletVerify: "Verificaci\u00F3n de Billetera",
    sendTest: "Enviar 2000 EACO \u2192 devolver 1000 EACO",
    payWithEaco: "Pago: EACO ($e)", eacoPay: "Pago EACO",
    joinTelegram: "Unirse a Comunidad", viewOnDex: "Ver en DEX",
    services: "Servicios", total: "Total", items: "art\u00EDculos",
    about: "Acerca de", mission: "Misi\u00F3n", footer: "EACO Earth's Best Coin",
    threeKm: "C\u00EDrculo de 3km", semiSocial: "Semi-Conocido",
    semiSocialDesc: "Los proveedores pueden ser tus amigos, vecinos o miembros del grupo",
    powered: "Impulsado por EACO"
  },
  fr: {
    appName: "Village EACO", tagline: "Social Semi-Connu \u00B7 Dans 3km",
    search: "Rechercher des services...", allCats: "Tous", results: "services",
    eacoSection: "\u00C9cosyst\u00E8me EACO Web3", pilotTitle: "R\u00E9gions Pilotes", langTitle: "Support Multilingue",
    globalLangs: "6 Langues Mondiales", neighborLangs: "20 Langues Voisines",
    ca: "Adresse du Contrat", dex: "Entr\u00E9e DEX", community: "Canaux Communautaires",
    lpProgram: "Programme Partenaires LP", walletVerify: "V\u00E9rification Portefeuille",
    sendTest: "Envoyer 2000 EACO \u2192 retourner 1000 EACO",
    payWithEaco: "Paiement: EACO ($e)", eacoPay: "Paiement EACO",
    joinTelegram: "Rejoindre Communaut\u00E9", viewOnDex: "Voir sur DEX",
    services: "Services", total: "Total", items: "\u00E9l\u00E9ments",
    about: "\u00C0 propos", mission: "Mission", footer: "EACO Earth's Best Coin",
    threeKm: "Cercle de 3km", semiSocial: "Semi-Connu",
    semiSocialDesc: "Les prestataires peuvent \u00EAtre vos amis, voisins ou membres du groupe",
    powered: "Propuls\u00E9 par EACO"
  },
  ru: {
    appName: "\u0414\u0435\u0440\u0435\u0432\u043D\u044F EACO", tagline: "\u041F\u043E\u043B\u0443\u0437\u043D\u0430\u043A\u043E\u043C\u044B\u0439 \u0421\u043E\u0446\u0438\u0430\u043B \u00B7 \u0412 \u0440\u0430\u0434\u0438\u0443\u0441\u0435 3\u043A\u043C",
    search: "\u041F\u043E\u0438\u0441\u043A \u0443\u0441\u043B\u0443\u0433...", allCats: "\u0412\u0441\u0435", results: "\u0443\u0441\u043B\u0443\u0433",
    eacoSection: "\u042D\u043A\u043E\u0441\u0438\u0441\u0442\u0435\u043C\u0430 EACO Web3", pilotTitle: "\u041F\u0438\u043B\u043E\u0442\u043D\u044B\u0435 \u0420\u0435\u0433\u0438\u043E\u043D\u044B", langTitle: "\u041C\u0443\u043B\u044C\u0442\u0438\u044F\u0437\u044B\u0447\u043D\u043E\u0441\u0442\u044C",
    globalLangs: "6 \u041C\u0438\u0440\u043E\u0432\u044B\u0445 \u042F\u0437\u044B\u043A\u043E\u0432", neighborLangs: "20 \u0421\u043E\u0441\u0435\u0434\u043D\u0438\u0445 \u042F\u0437\u044B\u043A\u043E\u0432",
    ca: "\u0410\u0434\u0440\u0435\u0441 \u041A\u043E\u043D\u0442\u0440\u0430\u043A\u0442\u0430", dex: "\u0412\u0445\u043E\u0434 DEX", community: "\u041A\u0430\u043D\u0430\u043B\u044B \u0421\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0430",
    lpProgram: "\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430 \u041F\u0430\u0440\u0442\u043D\u0435\u0440\u043E\u0432 LP", walletVerify: "\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u041A\u043E\u0448\u0435\u043B\u044C\u043A\u0430",
    sendTest: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C 2000 EACO \u2192 \u0432\u0435\u0440\u043D\u0443\u0442\u044C 1000 EACO",
    payWithEaco: "\u041E\u043F\u043B\u0430\u0442\u0430: EACO ($e)", eacoPay: "\u041E\u043F\u043B\u0430\u0442\u0430 EACO",
    joinTelegram: "\u0412\u043E\u0439\u0442\u0438 \u0432 \u0421\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u043E", viewOnDex: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043D\u0430 DEX",
    services: "\u0423\u0441\u043B\u0443\u0433\u0438", total: "\u0412\u0441\u0435\u0433\u043E", items: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432",
    about: "\u041E \u043D\u0430\u0441", mission: "\u041C\u0438\u0441\u0441\u0438\u044F", footer: "EACO Earth's Best Coin",
    threeKm: "\u041E\u043A\u0440\u0443\u0433 3\u043A\u043C", semiSocial: "\u041F\u043E\u043B\u0443\u0437\u043D\u0430\u043A\u043E\u043C\u044B\u0439",
    semiSocialDesc: "\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0438 \u0443\u0441\u043B\u0443\u0433 \u2014 \u0432\u0430\u0448\u0438 \u0434\u0440\u0443\u0437\u044C\u044F, \u0441\u043E\u0441\u0435\u0434\u0438 \u0438\u043B\u0438 \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438 \u0433\u0440\u0443\u043F\u043F",
    powered: "\u041D\u0430 \u0431\u0430\u0437\u0435 EACO"
  }
};

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { EACO_CONFIG, PILOT_REGIONS, LANGUAGES, CATEGORIES, SERVICES, I18N };
}
