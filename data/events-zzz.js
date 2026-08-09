// Снапшот Zenless Zone Zero — резерв на случай, если live-API недоступен ИЛИ отдаёт пустые
// категории (как api.ennead.cc делает с ивентами в первые дни патча — см. events-hsr.js).
// Сырой вид api.ennead.cc/mihoyo/zenless/calendar — время в Unix-секундах.
// Тот же нормализатор (sources.js) обрабатывает и снапшот, и живой ответ API.
// Обновить: попросить Claude перескрейпить, либо страница сама подтянет live.
window.SNAPSHOT_ZZZ = {
  "generatedAt": "2026-08-09T06:11:00Z",
  "version": "3.1",
  "source": "api.ennead.cc/mihoyo/zenless/calendar",
  "raw": {
    "events": [
      {
        "id": 5000158,
        "name": "Snap! Focus Showdown!",
        "state": "STATE_IN_PROGRESS",
        "image_url": "https://static.wikia.nocookie.net/zenless-zone-zero/images/a/a9/Event_Snap%21_Focus_Showdown%21.png/revision/latest?cb=20260806051317",
        "start_time": 1786068000,
        "end_time": 1787515199,
        "polychrome": 360
      },
      {
        "id": 5000153,
        "name": "Summer Waves Roll In",
        "state": "STATE_IN_PROGRESS",
        "image_url": "https://static.wikia.nocookie.net/zenless-zone-zero/images/7/74/Event_Summer_Waves_Roll_In.png/revision/latest?cb=20260728105732",
        "start_time": 1785204000,
        "end_time": 1788724799,
        "polychrome": 1050
      },
      {
        "id": 16000002,
        "name": "Marcel Anniversary Gifts",
        "state": "STATE_IN_PROGRESS",
        "image_url": null,
        "start_time": 1785276000,
        "end_time": 1788904799,
        "polychrome": 1600
      },
      {
        "id": 8000017,
        "name": "Phaethon's Grand Reveal of the Year",
        "state": "STATE_IN_PROGRESS",
        "image_url": "https://static.wikia.nocookie.net/zenless-zone-zero/images/5/55/Event_Phaethon%27s_Grand_Reveal_of_the_Year.png/revision/latest?cb=20260729034750",
        "start_time": 1785276000,
        "end_time": 1788904799,
        "polychrome": 160
      },
      {
        "id": 5000156,
        "name": "Crispy Meal Deployment Plan",
        "state": "STATE_NOT_START",
        "image_url": null,
        "start_time": 1787104800,
        "end_time": 1788724799,
        "polychrome": 300
      },
      {
        "id": 5000157,
        "name": "Dangerous Fugitive's Leisurely Vacation",
        "state": "STATE_NOT_START",
        "image_url": null,
        "start_time": 1787536800,
        "end_time": 1788724799,
        "polychrome": 300
      },
      {
        "id": 5000155,
        "name": "Delivery Training in Progress",
        "state": "STATE_NOT_START",
        "image_url": null,
        "start_time": 1787882400,
        "end_time": 1789329599,
        "polychrome": 420
      }
    ],
    "banners": [
      {
        "banner_type": "GACHA_TYPE_CHARACTER_UP",
        "state": "GACHA_STATE_IN_PROGRESS",
        "version": "3.1",
        "agents": [
          {
            "id": 1581,
            "name": "Remielle",
            "full_name": "Remielle Dan",
            "icon": "https://act-webstatic.hoyoverse.com/game_record/zzzv2/role_square_avatar/role_square_avatar_1581.png",
            "rarity": "S",
            "profession": "Anomaly",
            "element": "unknown"
          },
          {
            "id": 1281,
            "name": "Piper",
            "full_name": "Piper Wheel",
            "icon": "https://act-webstatic.hoyoverse.com/game_record/zzzv2/role_square_avatar/role_square_avatar_1281.png",
            "rarity": "A",
            "profession": "Anomaly",
            "element": "Physical"
          },
          {
            "id": 1271,
            "name": "Seth",
            "full_name": "Seth Lowell",
            "icon": "https://act-webstatic.hoyoverse.com/game_record/zzzv2/role_square_avatar/role_square_avatar_1271.png",
            "rarity": "A",
            "profession": "Defence",
            "element": "Electric"
          }
        ],
        "w_engines": [],
        "start_time": 1785290400,
        "end_time": 1788850799
      },
      {
        "banner_type": "GACHA_TYPE_CHARACTER_UP",
        "state": "GACHA_STATE_IN_PROGRESS",
        "version": "3.1",
        "agents": [
          {
            "id": 1501,
            "name": "Aria",
            "full_name": "Aria",
            "icon": "https://act-webstatic.hoyoverse.com/game_record/zzzv2/role_square_avatar/role_square_avatar_1501.png",
            "rarity": "S",
            "profession": "Anomaly",
            "element": "Ether"
          },
          {
            "id": 1281,
            "name": "Piper",
            "full_name": "Piper Wheel",
            "icon": "https://act-webstatic.hoyoverse.com/game_record/zzzv2/role_square_avatar/role_square_avatar_1281.png",
            "rarity": "A",
            "profession": "Anomaly",
            "element": "Physical"
          },
          {
            "id": 1271,
            "name": "Seth",
            "full_name": "Seth Lowell",
            "icon": "https://act-webstatic.hoyoverse.com/game_record/zzzv2/role_square_avatar/role_square_avatar_1271.png",
            "rarity": "A",
            "profession": "Defence",
            "element": "Electric"
          }
        ],
        "w_engines": [],
        "start_time": 1785290400,
        "end_time": 1787111999
      },
      {
        "banner_type": "GACHA_TYPE_CHARACTER_UP",
        "state": "GACHA_STATE_NOT_START",
        "version": "3.1",
        "agents": [
          {
            "id": 1591,
            "name": "Sigrid",
            "full_name": "Sigrid de L'Azur",
            "icon": "https://act-webstatic.hoyoverse.com/game_record/zzzv2/role_square_avatar/role_square_avatar_1591.png",
            "rarity": "S",
            "profession": "Attack",
            "element": "Ice"
          },
          {
            "id": 1131,
            "name": "Soukaku",
            "full_name": "Soukaku",
            "icon": "https://act-webstatic.hoyoverse.com/game_record/zzzv2/role_square_avatar/role_square_avatar_1131.png",
            "rarity": "A",
            "profession": "Support",
            "element": "Ice"
          },
          {
            "id": 1151,
            "name": "Lucy",
            "full_name": "Luciana de Montefio",
            "icon": "https://act-webstatic.hoyoverse.com/game_record/zzzv2/role_square_avatar/role_square_avatar_1151.png",
            "rarity": "A",
            "profession": "Support",
            "element": "Fire"
          }
        ],
        "w_engines": [],
        "start_time": 1787112000,
        "end_time": 1788850799
      },
      {
        "banner_type": "GACHA_TYPE_CHARACTER_RETURN",
        "state": "GACHA_STATE_NOT_START",
        "version": "3.1",
        "agents": [
          {
            "id": 1481,
            "name": "Dialyn",
            "full_name": "Dialyn",
            "icon": "https://act-webstatic.hoyoverse.com/game_record/zzzv2/role_square_avatar/role_square_avatar_1481.png",
            "rarity": "S",
            "profession": "Stun",
            "element": "Physical"
          },
          {
            "id": 1411,
            "name": "Yuzuha",
            "full_name": "Ukinami Yuzuha",
            "icon": "https://act-webstatic.hoyoverse.com/game_record/zzzv2/role_square_avatar/role_square_avatar_1411.png",
            "rarity": "S",
            "profession": "Support",
            "element": "Physical"
          },
          {
            "id": 1201,
            "name": "Harumasa",
            "full_name": "Asaba Harumasa",
            "icon": "https://act-webstatic.hoyoverse.com/game_record/zzzv2/role_square_avatar/role_square_avatar_1201.png",
            "rarity": "S",
            "profession": "Attack",
            "element": "Electric"
          }
        ],
        "w_engines": [],
        "start_time": 1787112000,
        "end_time": 1788850799
      },
      {
        "banner_type": "GACHA_TYPE_WEAPON_UP",
        "state": "GACHA_STATE_IN_PROGRESS",
        "version": "3.1",
        "agents": [],
        "w_engines": [
          {
            "id": 14158,
            "name": "Paradise Lost",
            "icon": "https://act-webstatic.hoyoverse.com/darkmatter/nap/prod_gf_cn/item_icon_ue005d/26892155360c9aee08d162f6a5a1f0c7.png",
            "rarity": "S",
            "profession": "Anomaly"
          },
          {
            "id": 13128,
            "name": "Collision Potential",
            "icon": "https://act-webstatic.hoyoverse.com/darkmatter/nap/prod_gf_cn/item_icon_ue005d/782287df95167991d2403bf5f91ac5b2.png",
            "rarity": "A",
            "profession": "Anomaly"
          },
          {
            "id": 13127,
            "name": "Standard Blocking Technique",
            "icon": "https://act-webstatic.hoyoverse.com/darkmatter/nap/prod_gf_cn/item_icon_ue005d/e7466dcdfa3063af0bd80558f26ccf3b.png",
            "rarity": "A",
            "profession": "Defence"
          }
        ],
        "start_time": 1785290400,
        "end_time": 1788850799
      },
      {
        "banner_type": "GACHA_TYPE_WEAPON_UP",
        "state": "GACHA_STATE_IN_PROGRESS",
        "version": "3.1",
        "agents": [],
        "w_engines": [
          {
            "id": 14150,
            "name": "Energetic Strike",
            "icon": "https://act-webstatic.hoyoverse.com/darkmatter/nap/prod_gf_cn/item_icon_ue005d/d93801354ca47e0ee27f89f4d790d19d.png",
            "rarity": "S",
            "profession": "Anomaly"
          },
          {
            "id": 13128,
            "name": "Collision Potential",
            "icon": "https://act-webstatic.hoyoverse.com/darkmatter/nap/prod_gf_cn/item_icon_ue005d/782287df95167991d2403bf5f91ac5b2.png",
            "rarity": "A",
            "profession": "Anomaly"
          },
          {
            "id": 13127,
            "name": "Standard Blocking Technique",
            "icon": "https://act-webstatic.hoyoverse.com/darkmatter/nap/prod_gf_cn/item_icon_ue005d/e7466dcdfa3063af0bd80558f26ccf3b.png",
            "rarity": "A",
            "profession": "Defence"
          }
        ],
        "start_time": 1785290400,
        "end_time": 1787111999
      },
      {
        "banner_type": "GACHA_TYPE_WEAPON_UP",
        "state": "GACHA_STATE_NOT_START",
        "version": "3.1",
        "agents": [],
        "w_engines": [
          {
            "id": 14159,
            "name": "",
            "icon": "https://fastcdn.hoyoverse.com/static-resource-v2/2026/07/27/c7c53d875a783fc10e1f67c7b5ae9312_7891659435015391781.png",
            "rarity": "S",
            "profession": "Attack"
          },
          {
            "id": 13113,
            "name": "Visage of Greed",
            "icon": "https://act-webstatic.hoyoverse.com/darkmatter/nap/prod_gf_cn/item_icon_ue005d/4d76afd61d066310c840e12c8037482f.png",
            "rarity": "A",
            "profession": "Support"
          },
          {
            "id": 13115,
            "name": "Stampede Accident",
            "icon": "https://act-webstatic.hoyoverse.com/darkmatter/nap/prod_gf_cn/item_icon_ue005d/9d6be6f1eb25cc537cc718b616758dbe.png",
            "rarity": "A",
            "profession": "Support"
          }
        ],
        "start_time": 1787112000,
        "end_time": 1788850799
      },
      {
        "banner_type": "GACHA_TYPE_WEAPON_RETURN",
        "state": "GACHA_STATE_NOT_START",
        "version": "3.1",
        "agents": [],
        "w_engines": [
          {
            "id": 14148,
            "name": "24/7",
            "icon": "https://act-webstatic.hoyoverse.com/darkmatter/nap/prod_gf_cn/item_icon_ue005d/efcbf0c8855df5ad187c835531da5c0a.png",
            "rarity": "S",
            "profession": "Stun"
          },
          {
            "id": 14141,
            "name": "Exquisitely Ingenious",
            "icon": "https://act-webstatic.hoyoverse.com/darkmatter/nap/prod_gf_cn/item_icon_ue005d/b59a6dea3fa098c1c7d6428147f4c374.png",
            "rarity": "S",
            "profession": "Support"
          },
          {
            "id": 14120,
            "name": "Growth Through Adversity",
            "icon": "https://act-webstatic.hoyoverse.com/darkmatter/nap/prod_gf_cn/item_icon_ue005d/e0153033fb4a805da2f0a13e6cf9fb4d.png",
            "rarity": "S",
            "profession": "Attack"
          }
        ],
        "start_time": 1787112000,
        "end_time": 1788850799
      }
    ],
    "challenges": [
      {
        "id": 1,
        "name": "Deadly Assault",
        "type_name": "deadly_assault",
        "start_time": 1785268800,
        "end_time": 1786651199
      },
      {
        "id": 2,
        "name": "Threshold Simulation",
        "type_name": "threshold_simulation",
        "start_time": 1770235200,
        "end_time": null
      },
      {
        "id": 3,
        "name": "Shiyu Defense",
        "type_name": "shiyu_defense",
        "start_time": 1786046400,
        "end_time": 1787255999
      },
      {
        "id": 4,
        "name": "Annihilation Simulacrum",
        "type_name": "annihilation_simulacrum",
        "start_time": 1781647200,
        "end_time": 1792533599
      }
    ]
  }
};
