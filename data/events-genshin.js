// Снапшот Genshin Impact — резерв на случай, если live-API недоступен ИЛИ отдаёт пустые
// категории (как api.ennead.cc делает с ивентами в первые дни патча — см. events-hsr.js).
// Сырой вид api.ennead.cc/mihoyo/genshin/calendar — время в Unix-секундах.
// Тот же нормализатор (sources.js) обрабатывает и снапшот, и живой ответ API.
// Обновить: попросить Claude перескрейпить, либо страница сама подтянет live.
window.SNAPSHOT_GENSHIN = {
  "generatedAt": "2026-07-15T00:00:00Z",
  "version": "6.7",
  "source": "api.ennead.cc/mihoyo/genshin/calendar",
  "raw": {
    "events": [
      {
        "id": 333,
        "name": "Stygian Onslaught",
        "description": "A strange Ley Line Disturbance has once again appeared, this time in Liyue's Sal Terrae. You must breach the depths of this unpredictable Domain, for only by defeating powerful foes can the turmoil be quelled... Of course, where danger awaits, so too do extraordinary treasures...",
        "image_url": null,
        "type_name": "ActTypeHardChallenge",
        "start_time": 1783476000,
        "end_time": 1786391999,
        "rewards": [
          {
            "id": 105006,
            "name": "Dust of Enlightenment",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/6851f37b/fab4da768f6f2f23f065ccd7ac1efce5.png",
            "rarity": "5",
            "amount": 3
          },
          {
            "id": 341002,
            "name": "Radiant Phantasm: Sublimation",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/6851f37b/ad486c0d6c53f70894a762f883d18f4d.png",
            "rarity": "5",
            "amount": 1
          },
          {
            "id": 341001,
            "name": "Radiant Phantasm",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/6851f37b/63f43673861c8fc25221d717fb8752d6.png",
            "rarity": "4",
            "amount": 1
          },
          {
            "id": 104003,
            "name": "Hero's Wit",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/83c367f4bc16c7b4f1d93a25fd828cd6.png",
            "rarity": "4",
            "amount": 0
          },
          {
            "id": 202,
            "name": "Mora",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/fb7fc53d0cdd0ddeefda020fb16f92e7.png",
            "rarity": "3",
            "amount": 0
          }
        ],
        "special_reward": {
          "id": 201,
          "name": "Primogem",
          "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/a862d7fc50ffe15c045de4f6799a357b.png",
          "rarity": "5",
          "amount": 450
        }
      },
      {
        "id": 339,
        "name": "Sunny Summer Fontinalia",
        "description": "The Fontinalia Film Festival is here, and all kinds of wonderful films are being prepared with great excitement! Let's follow the summer breeze back to Fontaine and take a look. Who knows? We might even run into some old friends there!",
        "image_url": null,
        "type_name": "ActTypeOther",
        "start_time": 1782784800,
        "end_time": 1786391999,
        "rewards": [
          {
            "id": 104319,
            "name": "Crown of Insight",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/bf059be872ce72f035e3df38da065e89.png",
            "rarity": "5",
            "amount": 1
          },
          {
            "id": 0,
            "name": "Outfit",
            "icon": "https://fastcdn.hoyoverse.com/static-resource-v2/2024/12/27/d4ece0037c07fb8c5cb3d12a6706a664_329038158635823779.png",
            "rarity": "4",
            "amount": 0
          },
          {
            "id": 10000088,
            "name": "Charlotte",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/abe5fda7322bc28ae763c4f4a0b0326d.png",
            "rarity": "4",
            "amount": 1
          },
          {
            "id": 104003,
            "name": "Hero's Wit",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/83c367f4bc16c7b4f1d93a25fd828cd6.png",
            "rarity": "4",
            "amount": 0
          },
          {
            "id": 113086,
            "name": "Plume of the Fallen Watcher",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/69d58c7d/fc4245b39844661ec7f8cd0622cedc54.png",
            "rarity": "4",
            "amount": 6
          },
          {
            "id": 202,
            "name": "Mora",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/fb7fc53d0cdd0ddeefda020fb16f92e7.png",
            "rarity": "3",
            "amount": 0
          },
          {
            "id": 104013,
            "name": "Mystic Enhancement Ore",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/8f5a55008fb5b959c359563220890b6f.png",
            "rarity": "3",
            "amount": 0
          },
          {
            "id": 104112,
            "name": "Agnidus Agate Fragment",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/b53db4ba6c9a4840e7b844f46703fd21.png",
            "rarity": "3",
            "amount": 2
          },
          {
            "id": 104122,
            "name": "Varunada Lazurite Fragment",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/fc3a89a644e48b89bc5464dff55039af.png",
            "rarity": "3",
            "amount": 2
          },
          {
            "id": 104132,
            "name": "Nagadus Emerald Fragment",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/464d55a8e7a90bd94e6cdce783805959.png",
            "rarity": "3",
            "amount": 2
          },
          {
            "id": 104142,
            "name": "Vajrada Amethyst Fragment",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/aed02c6795884973a597c86d2507f5b2.png",
            "rarity": "3",
            "amount": 2
          },
          {
            "id": 104152,
            "name": "Vayuda Turquoise Fragment",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/c3c8fe02bd7778a9e9e2befc1835c51c.png",
            "rarity": "3",
            "amount": 2
          },
          {
            "id": 104162,
            "name": "Shivada Jade Fragment",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/f8b6ce7f096e294231cef28326cb6683.png",
            "rarity": "3",
            "amount": 11
          },
          {
            "id": 104172,
            "name": "Prithiva Topaz Fragment",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/0949ad6d7c3e8f3bd577b30f5f2aa283.png",
            "rarity": "3",
            "amount": 2
          },
          {
            "id": 104339,
            "name": "Guide to Equity",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/4328bf120ff5058fd05a6caed0d588d8.png",
            "rarity": "3",
            "amount": 10
          },
          {
            "id": 104342,
            "name": "Guide to Justice",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/6e6b74736466f9238fbbc90f563c3714.png",
            "rarity": "3",
            "amount": 10
          },
          {
            "id": 104345,
            "name": "Guide to Order",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/368add79066537113594b33da5775a5e.png",
            "rarity": "3",
            "amount": 10
          },
          {
            "id": 104357,
            "name": "Guide to Moonlight",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/68c0b17a/eb9eff023c49d27b826e0fe7d3df28c9.png",
            "rarity": "3",
            "amount": 6
          },
          {
            "id": 104360,
            "name": "Guide to Elysium",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/68c0b17a/28f0b3c352d65a8aa9bfc3d4f5ed76a9.png",
            "rarity": "3",
            "amount": 6
          },
          {
            "id": 104363,
            "name": "Guide to Vagrancy",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/68c0b17a/bdd7c8e04e99d8ba65ce98c09ec1eda0.png",
            "rarity": "3",
            "amount": 12
          },
          {
            "id": 105002,
            "name": "Sanctifying Unction",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/f8783369f7417e8f52d81747a3ea183e.png",
            "rarity": "3",
            "amount": 0
          },
          {
            "id": 112123,
            "name": "Reinforced Drive Shaft",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/68c0b17a/a2873220feae642335e620766217c7c7.png",
            "rarity": "2",
            "amount": 12
          },
          {
            "id": 112122,
            "name": "Broken Drive Shaft",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/68c0b17a/c3e5926e8628305a0311fea5fbfb0889.png",
            "rarity": "1",
            "amount": 15
          },
          {
            "id": 101239,
            "name": "Subdetection Unit",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/14ee3d4270252cc8d0adcc54fce7fec5.png",
            "rarity": "0",
            "amount": 30
          },
          {
            "id": 0,
            "name": "Furnishing",
            "icon": "https://fastcdn.hoyoverse.com/static-resource-v2/2024/10/31/4173e4a85d0419853caaadd3f4863d67_599113805414825291.png",
            "rarity": "1",
            "amount": 0
          }
        ],
        "special_reward": {
          "id": 201,
          "name": "Primogem",
          "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/a862d7fc50ffe15c045de4f6799a357b.png",
          "rarity": "5",
          "amount": 1060
        }
      },
      {
        "id": 337,
        "name": "The Forge Realm's Temper: Endless Swarm",
        "description": "",
        "image_url": null,
        "type_name": "ActTypeOther",
        "start_time": 1782860400,
        "end_time": 1786489200,
        "rewards": [],
        "special_reward": {
          "id": 107021,
          "name": "Lucky Coin",
          "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/bddb5ec01f91494e65157d2201c2a165.png",
          "rarity": "3",
          "amount": 8000
        }
      },
      {
        "id": 335,
        "name": "Dance Dance Easy-Breezy Disco",
        "description": "A courier comes bearing good news — another party is about to kick off at Easybreeze Holiday Resort! This time, unexpected new guests will join the rhythmic ensemble and dance joyfully with us! [даты: game8.co / fandom, ручное дополнение — live-API отдаёт их пустыми]",
        "image_url": null,
        "type_name": "ActTypeOther",
        "start_time": 1784851200,
        "end_time": 1785715200,
        "rewards": [],
        "special_reward": {
          "name": "Primogem",
          "amount": 420
        }
      },
      {
        "id": 334,
        "name": "Final Long-Range Sightlines",
        "description": "Warriors from across Teyvat continue to exchange techniques and refine their tactics together. Recently, skilled shooters from the Knights of Favonius, Fontaine's Maison Gardiennage, and Natlan's Flower-Feather Clan assembled at Lumidouce Harbor for a distinctive joint exercise... [даты: game8.co / fandom, ручное дополнение — live-API отдаёт их пустыми]",
        "image_url": null,
        "type_name": "ActTypeOther",
        "start_time": 1784246400,
        "end_time": 1785110400,
        "rewards": [],
        "special_reward": null
      },
      {
        "id": 332,
        "name": "Ley Line Overflow",
        "description": " [даты: game8.co / fandom, ручное дополнение — live-API отдаёт их пустыми]",
        "image_url": null,
        "type_name": "ActTypeDouble",
        "start_time": 1785715200,
        "end_time": 1786320000,
        "rewards": [],
        "special_reward": null
      },
      {
        "id": 336,
        "name": "Heated Battle Mode: Automatic Artistry",
        "description": "In The Cat's Tail, there will be a regularly scheduled event that uses special Heated Battle Mode rules.\\nRules for this period:\\nSelect characters specially dedicated to this mode to build a team and enhance them. Characters will automatically battle!",
        "image_url": null,
        "type_name": "ActTypeOther",
        "start_time": null,
        "end_time": null,
        "rewards": [],
        "special_reward": null
      }
    ],
    "banners": [
      {
        "id": 194,
        "name": "Character Event Wish",
        "version": "6.7",
        "characters": [
          {
            "id": 10000133,
            "name": "Sandrone",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/6a44588e/417922ce01627959571b3355b9f462ac.png",
            "element": "Cryo",
            "rarity": 5
          },
          {
            "id": 10000024,
            "name": "Beidou",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/bc2903d1a46616c871d5108d033a463d.png",
            "element": "Electro",
            "rarity": 4
          },
          {
            "id": 10000039,
            "name": "Diona",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/699e3449/3de7b18fbecffbb57a73fe5032d24950.png",
            "element": "Cryo",
            "rarity": 4
          },
          {
            "id": 10000085,
            "name": "Freminet",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/34ef1ba51a4893d9df4be717e56891ae.png",
            "element": "Cryo",
            "rarity": 4
          }
        ],
        "weapons": [],
        "start_time": 1782860400,
        "end_time": 1784627940
      },
      {
        "id": 195,
        "name": "Character Event Wish 2",
        "version": "6.7",
        "characters": [
          {
            "id": 10000107,
            "name": "Citlali",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/abe2da348abe64c67d9c2763d2d8c4e7.png",
            "element": "Cryo",
            "rarity": 5
          },
          {
            "id": 10000024,
            "name": "Beidou",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/bc2903d1a46616c871d5108d033a463d.png",
            "element": "Electro",
            "rarity": 4
          },
          {
            "id": 10000039,
            "name": "Diona",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/699e3449/3de7b18fbecffbb57a73fe5032d24950.png",
            "element": "Cryo",
            "rarity": 4
          },
          {
            "id": 10000085,
            "name": "Freminet",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/34ef1ba51a4893d9df4be717e56891ae.png",
            "element": "Cryo",
            "rarity": 4
          }
        ],
        "weapons": [],
        "start_time": 1782860400,
        "end_time": 1784627940
      },
      {
        "id": 196,
        "name": "Weapon Event Wish",
        "version": "6.7",
        "characters": [],
        "weapons": [
          {
            "id": 12516,
            "name": "A Teaspoon of Transcendence",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/6a44588e/0ce22fa824865975f716bc620a24a0d8.png",
            "rarity": 5
          },
          {
            "id": 14517,
            "name": "Starcaller's Watch",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/dbf7751578357bde53f9b563aee72250.png",
            "rarity": 5
          },
          {
            "id": 11401,
            "name": "Favonius Sword",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/cfda75195bd9c341e314a56e976d532f.png",
            "rarity": 4
          },
          {
            "id": 12405,
            "name": "Rainslasher",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/de1e307e1104fbf7c8f7a7ef5cb143e1.png",
            "rarity": 4
          },
          {
            "id": 13401,
            "name": "Dragon's Bane",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/cf0f39f3f9fddd9fdcafe921ca8cff1a.png",
            "rarity": 4
          },
          {
            "id": 14403,
            "name": "Sacrificial Fragments",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/807ae55311a3a8382194a656e214e7b1.png",
            "rarity": 4
          },
          {
            "id": 15403,
            "name": "Sacrificial Bow",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/4a03625fdbc739dca379573871a4c2ca.png",
            "rarity": 4
          }
        ],
        "start_time": 1782860400,
        "end_time": 1784627940
      },
      {
        "id": 197,
        "name": "Chronicled Wish / Lightrace Wish",
        "version": "6.7",
        "characters": [
          {
            "id": 10000109,
            "name": "Yumemizuki Mizuki",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/1cebf43ac944ad3ff2a0581bebe309d8.png",
            "element": "Anemo",
            "rarity": 5
          },
          {
            "id": 10000086,
            "name": "Wriothesley",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/7786cf3f9620456f6d14a226dfdcca67.png",
            "element": "Cryo",
            "rarity": 5
          },
          {
            "id": 10000071,
            "name": "Cyno",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/8eb1a5cca01c9e988581067a31e8b1d6.png",
            "element": "Electro",
            "rarity": 5
          },
          {
            "id": 10000058,
            "name": "Yae Miko",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/54f9f46e282f81dc06c45d2783e0206a.png",
            "element": "Electro",
            "rarity": 5
          },
          {
            "id": 10000035,
            "name": "Qiqi",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/2825ff5127afc078dd1bd3e1b2e39996.png",
            "element": "Cryo",
            "rarity": 5
          }
        ],
        "weapons": [
          {
            "id": 14518,
            "name": "Sunny Morning Sleep-In",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/fa7fc655e5c1bab724c7893ec3f58d91.png",
            "rarity": 5
          },
          {
            "id": 14513,
            "name": "Cashflow Supervision",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/f540cf493ce73c0b3afa3bc32940bfa0.png",
            "rarity": 5
          },
          {
            "id": 14509,
            "name": "Kagura's Verity",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/5df4b80100a07922792ac85362ee6af8.png",
            "rarity": 5
          },
          {
            "id": 11502,
            "name": "Skyward Blade",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/ecb922197e45697d9edde75af4b8df93.png",
            "rarity": 5
          },
          {
            "id": 13511,
            "name": "Staff of the Scarlet Sands",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/0045e2a1f5eb25cabe20db8c79b3cfd6.png",
            "rarity": 5
          }
        ],
        "start_time": 1782860400,
        "end_time": 1784627940
      }
    ],
    "challenges": [
      {
        "id": 0,
        "name": "Imaginarium Theater",
        "type_name": "ActTypeRoleCombat",
        "start_time": 1782849600,
        "end_time": 1785527999,
        "rewards": [
          {
            "id": 105005,
            "name": "Sanctifying Elixir",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/b9cb6e2b1a75354bb241e2d6079a3c65.png",
            "rarity": "5",
            "amount": 2
          },
          {
            "id": 206,
            "name": "Toy Medal",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/fc4e85aaaff1e9070abd8cadd2d30699.png",
            "rarity": "4",
            "amount": 3
          },
          {
            "id": 107012,
            "name": "Transient Resin",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/be0487bd0323269f5ac9f5fc885d23e2.png",
            "rarity": "4",
            "amount": 1
          },
          {
            "id": 105003,
            "name": "Sanctifying Essence",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/072e0e7314f48321b34d056a6a1d8ef6.png",
            "rarity": "4",
            "amount": 26
          },
          {
            "id": 202,
            "name": "Mora",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/fb7fc53d0cdd0ddeefda020fb16f92e7.png",
            "rarity": "3",
            "amount": 600000
          },
          {
            "id": 104363,
            "name": "Guide to Vagrancy",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/68c0b17a/bdd7c8e04e99d8ba65ce98c09ec1eda0.png",
            "rarity": "3",
            "amount": 6
          },
          {
            "id": 104360,
            "name": "Guide to Elysium",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/68c0b17a/28f0b3c352d65a8aa9bfc3d4f5ed76a9.png",
            "rarity": "3",
            "amount": 6
          },
          {
            "id": 104357,
            "name": "Guide to Moonlight",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/68c0b17a/eb9eff023c49d27b826e0fe7d3df28c9.png",
            "rarity": "3",
            "amount": 6
          },
          {
            "id": 105002,
            "name": "Sanctifying Unction",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/f8783369f7417e8f52d81747a3ea183e.png",
            "rarity": "3",
            "amount": 28
          },
          {
            "id": 104362,
            "name": "Teachings of Vagrancy",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/68c0b17a/e75a9ebad1820befc0313c4a27a6e7f0.png",
            "rarity": "2",
            "amount": 12
          },
          {
            "id": 104359,
            "name": "Teachings of Elysium",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/68c0b17a/8d9f3bb4f92b033ba8f47686b61a056c.png",
            "rarity": "2",
            "amount": 12
          },
          {
            "id": 104356,
            "name": "Teachings of Moonlight",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/68c0b17a/e9a1f0ea9a567c50a4c9620c71561d84.png",
            "rarity": "2",
            "amount": 12
          }
        ],
        "special_reward": {
          "id": 201,
          "name": "Primogem",
          "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/a862d7fc50ffe15c045de4f6799a357b.png",
          "rarity": "5",
          "amount": 1000
        }
      },
      {
        "id": 0,
        "name": "Abyssal Moon Spire",
        "type_name": "ActTypeTower",
        "start_time": 1781553600,
        "end_time": 1784145599,
        "rewards": [
          {
            "id": 117029,
            "name": "Domain Reliquary: Tier I",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/8ee2288648c40774aa87b3e90455b79b.png",
            "rarity": "5",
            "amount": 4
          },
          {
            "id": 104003,
            "name": "Hero's Wit",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/83c367f4bc16c7b4f1d93a25fd828cd6.png",
            "rarity": "4",
            "amount": 24
          },
          {
            "id": 117028,
            "name": "Domain Reliquary: Tier II",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/a961b5577eafc005d199f1d2f0b595d7.png",
            "rarity": "4",
            "amount": 8
          },
          {
            "id": 104002,
            "name": "Adventurer's Experience",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/3190775877db6975feb2aefdff7ef963.png",
            "rarity": "3",
            "amount": 42
          },
          {
            "id": 104013,
            "name": "Mystic Enhancement Ore",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/8f5a55008fb5b959c359563220890b6f.png",
            "rarity": "3",
            "amount": 72
          },
          {
            "id": 202,
            "name": "Mora",
            "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/fb7fc53d0cdd0ddeefda020fb16f92e7.png",
            "rarity": "3",
            "amount": 585000
          }
        ],
        "special_reward": {
          "id": 201,
          "name": "Primogem",
          "icon": "https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon/67c7f6c8/a862d7fc50ffe15c045de4f6799a357b.png",
          "rarity": "5",
          "amount": 800
        }
      }
    ]
  }
};
