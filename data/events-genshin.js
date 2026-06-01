// Снапшот Genshin Impact (резерв на случай, если live-API недоступен).
// Хранится в "сыром" виде ennead.cc/mihoyo/genshin/calendar — время в Unix-секундах.
// Тот же нормализатор (sources.js) обрабатывает и этот снапшот, и живой ответ API.
// Обновить: попросить Claude перескрейпить, либо страница сама подтянет live.
window.SNAPSHOT_GENSHIN = {
  generatedAt: "2026-06-01T00:00:00Z",
  source: "api.ennead.cc/mihoyo/genshin/calendar",
  raw: {
    events: [
      { name: "Stygian Onslaught", type_name: "ActTypeHardChallenge", start_time: 1779847200, end_time: 1782763199,
        image_url: "https://static.wikia.nocookie.net/gensin-impact/images/4/41/Stygian_Onslaught.png/revision/latest?cb=20250623040614",
        description: "Аномалия силовых линий снова появилась — в этот раз в Сал Терра (Ли Юэ). Прорвись вглубь непредсказуемого подземелья и одолей сильных врагов.",
        special_reward: { name: "Primogem", amount: 450 } },
      { name: "Phantasmal Pals", type_name: "ActTypeOther", start_time: 1779415200, end_time: 1780862399,
        image_url: "https://static.wikia.nocookie.net/gensin-impact/images/5/5a/Phantasmal_Pals.png/revision/latest?cb=20260520090543",
        description: "По дороге в купальню Айса вы встречаете странного ребёнка в лесу Тиндзю — начинается ещё одно причудливое приключение.",
        special_reward: { name: "Primogem", amount: 910 } },
      { name: "The Forge Realm's Temper: Clever Stratagems", type_name: "ActTypeOther", start_time: 1779231600, end_time: 1782860400,
        image_url: null, description: "", special_reward: { name: "Lucky Coin", amount: 8000 } },
      { name: "Kaleidoscopic Color Chase", type_name: "ActTypeOther", start_time: 0, end_time: 0,
        image_url: "https://static.wikia.nocookie.net/gensin-impact/images/a/a6/Kaleidoscopic_Color_Chase.png/revision/latest?cb=20260508125247",
        description: "Возвращение на курорт Изибриз, где вас ждёт старый друг и особенные Аша.", special_reward: null },
      { name: "Trials of the Brave Warrior", type_name: "ActTypeOther", start_time: 0, end_time: 0,
        image_url: "https://static.wikia.nocookie.net/gensin-impact/images/0/09/Trials_of_the_Brave_Warrior.png/revision/latest?cb=20260508125244",
        description: "Бойцы собрались в городе Наша (Нод-Край), чтобы побороться за корону технического турнира.", special_reward: null }
    ],
    banners: [
      { name: "Character Event Wish", version: "6.6", start_time: 1779231600, end_time: 1780999140,
        characters: [{ name: "Nicole", element: "Pyro", rarity: 5 }, { name: "Prune", element: "Anemo", rarity: 4 }, { name: "Razor", element: "Electro", rarity: 4 }, { name: "Fischl", element: "Electro", rarity: 4 }], weapons: [] },
      { name: "Character Event Wish 2", version: "6.6", start_time: 1779231600, end_time: 1780999140,
        characters: [{ name: "Durin", element: "Pyro", rarity: 5 }, { name: "Prune", element: "Anemo", rarity: 4 }, { name: "Razor", element: "Electro", rarity: 4 }, { name: "Fischl", element: "Electro", rarity: 4 }], weapons: [] },
      { name: "Weapon Event Wish", version: "6.6", start_time: 1779231600, end_time: 1780999140,
        characters: [], weapons: [{ name: "Angelos' Heptades", rarity: 5 }, { name: "Athame Artis", rarity: 5 }] }
    ],
    challenges: [
      { name: "Imaginarium Theater", type_name: "ActTypeRoleCombat", start_time: 1780257600, end_time: 1782849599, special_reward: { name: "Primogem", amount: 1000 } },
      { name: "Abyssal Moon Spire (Spiral Abyss)", type_name: "ActTypeTower", start_time: 1778875200, end_time: 1781553599, special_reward: { name: "Primogem", amount: 800 } }
    ]
  }
};
