// Снапшот Honkai: Star Rail (резерв на случай недоступности live-API).
// Сырой вид ennead.cc/mihoyo/starrail/calendar — время в Unix-секундах.
window.SNAPSHOT_HSR = {
  generatedAt: "2026-06-01T00:00:00Z",
  source: "api.ennead.cc/mihoyo/starrail/calendar",
  raw: {
    events: [
      { name: "Gift of Odyssey", type_name: "ActivityTypeSign", start_time: 1780196400, end_time: 1783997999,
        image_url: null, description: "Ежедневный вход — получай Star Rail Special Pass и другие награды.", special_reward: { name: "Star Rail Special Pass", amount: 10 } },
      { name: "Pixel Plane Rumble", type_name: "ActivityTypeOther", start_time: 1780196400, end_time: 1784059199,
        image_url: null, description: "Пиксельные самолёты снова в небе: в схватке 99 истребителей лишь финалист берёт господство в воздухе. Собери идеальный самолёт и пробейся сквозь bullet hell.",
        special_reward: { name: "Stellar Jade", amount: 1240 } },
      { name: "Planar Fissure", type_name: "ActivityTypeDouble", start_time: 1781665200, end_time: 1782701999,
        image_url: null, description: "Двойные награды Planar Ornaments за прохождение Simulated/Divergent Universe.", special_reward: null },
      { name: "Wispae Amusement Park", type_name: "ActivityTypeOther", start_time: 1782298800, end_time: 1784059199,
        image_url: null, description: "Спланируй маршруты и расставь аттракционы, построй парк для виспа в World in Canvas.", special_reward: { name: "Stellar Jade", amount: 500 } },
      { name: "Realm of the Strange", type_name: "ActivityTypeDouble", start_time: 1783047600, end_time: 1783911599,
        image_url: null, description: "Двойные награды за прохождение Caverns of Corrosion.", special_reward: null }
    ],
    banners: [
      { name: "Character Banner", version: "4.3", start_time: 1780279200, end_time: 1782298740,
        characters: [{ name: "Mortenax Blade", rarity: 5 }, { name: "Yao Guang", rarity: 5 }, { name: "Sampo", rarity: 4 }, { name: "Luka", rarity: 4 }, { name: "Tingyun", rarity: 4 }], light_cones: [] },
      { name: "Character Banner (Phase 2)", version: "4.3", start_time: 1782298800, end_time: 1784037600,
        characters: [{ name: "Cyrene", rarity: 5 }, { name: "Phainon", rarity: 5 }, { name: "March 7th", rarity: 4 }, { name: "Arlan", rarity: 4 }, { name: "Yukong", rarity: 4 }], light_cones: [] },
      { name: "Light Cone Banner", version: "4.3", start_time: 1780279200, end_time: 1782298740,
        characters: [], light_cones: [{ name: "Reforged in Hellfire", rarity: 5 }, { name: "When She Decided to See", rarity: 5 }] },
      { name: "Light Cone Banner (Phase 2)", version: "4.3", start_time: 1782298800, end_time: 1784037600,
        characters: [], light_cones: [{ name: "This Love, Forever", rarity: 5 }, { name: "Thus Burns the Dawn", rarity: 5 }] }
    ],
    challenges: [
      { name: "Apocalyptic Shadow", type_name: "ChallengeTypeBoss", start_time: 1780887600, end_time: 1784516400, special_reward: { name: "Stellar Jade", amount: 900 } },
      { name: "Pure Fiction", type_name: "ChallengeTypeStory", start_time: 1782097200, end_time: 1785726000, special_reward: { name: "Stellar Jade", amount: 900 } },
      { name: "Memory of Chaos", type_name: "ChallengeTypeChasm", start_time: 1783306800, end_time: 1786935600, special_reward: { name: "Stellar Jade", amount: 900 } }
    ]
  }
};
