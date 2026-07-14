// Снапшот Honkai: Star Rail (резерв на случай, если live-API недоступен).
// Сырой вид api.ennead.cc/mihoyo/starrail/calendar — время в Unix-секундах.
// Тот же нормализатор (sources.js) обрабатывает и снапшот, и живой ответ API.
// Обновить: попросить Claude перескрейпить, либо страница сама подтянет live.
// Важно: live-API отдаёт events:[] в первые дни патча (проверено 15.07.2026, версия 4.4).
// Поэтому ивенты держим здесь вручную — app.js подмешивает их, если live-ответ пуст.
// Источники ивентов 4.4: game8.co/games/Honkai-Star-Rail · honkai-star-rail.fandom.com/wiki/Version/4.4
window.SNAPSHOT_HSR = {
  "generatedAt": "2026-07-15T00:00:00Z",
  "version": "4.4",
  "source": "api.ennead.cc/mihoyo/starrail/calendar · game8.co · fandom (ивенты 4.4)",
  "raw": {
    "events": [
      {
        "name": "Antigraft Brickbuster",
        "type_name": "ActivityTypeOther",
        "start_time": 1784073600,
        "end_time": 1787702400,
        "image_url": null,
        "description": "Игровой ивент версии 4.4.",
        "special_reward": null
      },
      {
        "name": "Fate/Star Rail Night",
        "type_name": "ActivityTypeOther",
        "start_time": 1784851200,
        "end_time": 1787702400,
        "image_url": null,
        "description": "Основной ивент коллаборации с Fate.",
        "special_reward": null
      },
      {
        "name": "Fate Gift",
        "type_name": "ActivityTypeOther",
        "start_time": 1784073600,
        "end_time": 1787702400,
        "image_url": null,
        "description": "Награда — конус света Gilgamesh или Archer.",
        "special_reward": {
          "name": "Light Cone (Gilgamesh / Archer)",
          "amount": 1
        }
      },
      {
        "name": "Gift of Odyssey",
        "type_name": "ActivityTypeSign",
        "start_time": 1784073600,
        "end_time": 1787616000,
        "image_url": null,
        "description": "Логин-ивент: 7 дней входа.",
        "special_reward": {
          "name": "Star Rail Special Pass",
          "amount": 10
        }
      },
      {
        "name": "Free Gilgamesh or Archer",
        "type_name": "ActivityTypeSign",
        "start_time": 1784851200,
        "end_time": null,
        "image_url": null,
        "description": "Логин-ивент коллаба Fate: бесплатный 5★ на выбор. Конец — «до конца версии 4.6», точная дата не объявлена.",
        "special_reward": {
          "name": "5★ персонаж на выбор",
          "amount": 1
        }
      },
      {
        "name": "Stellar Companion",
        "type_name": "ActivityTypeSign",
        "start_time": 1776816000,
        "end_time": 1787702400,
        "image_url": null,
        "description": "Долгий логин-ивент (идёт с 4.2): бесплатный 5★ Golden Companion Spirit.",
        "special_reward": {
          "name": "Golden Companion Spirit",
          "amount": 1
        }
      },
      {
        "name": "Planar Fissure",
        "type_name": "ActivityTypeDouble",
        "start_time": 1785110400,
        "end_time": 1786320000,
        "image_url": null,
        "description": "Двойные Planar Ornaments в Simulated / Divergent Universe.",
        "special_reward": null
      },
      {
        "name": "Garden of Plenty",
        "type_name": "ActivityTypeDouble",
        "start_time": 1786665600,
        "end_time": 1787529600,
        "image_url": null,
        "description": "Двойные награды в Calyx.",
        "special_reward": null
      }
    ],
    "banners": [
      {
        "name": "",
        "version": "4.3",
        "start_time": 1780279200,
        "end_time": 1782298740,
        "characters": [
          {
            "name": "Mortenax Blade",
            "element": "2",
            "rarity": 5
          },
          {
            "name": "Yao Guang",
            "element": "1",
            "rarity": 5
          },
          {
            "name": "Sampo",
            "element": "16",
            "rarity": 4
          },
          {
            "name": "Luka",
            "element": "1",
            "rarity": 4
          },
          {
            "name": "Tingyun",
            "element": "8",
            "rarity": 4
          }
        ]
      },
      {
        "name": "",
        "version": "4.3",
        "start_time": 1782298800,
        "end_time": 1784037600,
        "characters": [
          {
            "name": "Cyrene",
            "element": "4",
            "rarity": 5
          },
          {
            "name": "Phainon",
            "element": "1",
            "rarity": 5
          },
          {
            "name": "March 7th",
            "element": "4",
            "rarity": 4
          },
          {
            "name": "Arlan",
            "element": "8",
            "rarity": 4
          },
          {
            "name": "Yukong",
            "element": "64",
            "rarity": 4
          }
        ]
      },
      {
        "name": "",
        "version": "4.3",
        "start_time": 1780279200,
        "end_time": 1782298740,
        "light_cones": [
          {
            "name": "Reforged in Hellfire",
            "rarity": 5
          },
          {
            "name": "When She Decided to See",
            "rarity": 5
          },
          {
            "name": "Good Night and Sleep Well",
            "rarity": 4
          },
          {
            "name": "Day One of My New Life",
            "rarity": 4
          },
          {
            "name": "The Moles Welcome You",
            "rarity": 4
          }
        ]
      },
      {
        "name": "",
        "version": "4.3",
        "start_time": 1782298800,
        "end_time": 1784037600,
        "light_cones": [
          {
            "name": "This Love, Forever",
            "rarity": 5
          },
          {
            "name": "Thus Burns the Dawn",
            "rarity": 5
          },
          {
            "name": "A Secret Vow",
            "rarity": 4
          },
          {
            "name": "Subscribe for More!",
            "rarity": 4
          },
          {
            "name": "Dance! Dance! Dance!",
            "rarity": 4
          }
        ]
      }
    ],
    "challenges": [
      {
        "name": "Gale of Forgetting",
        "type_name": "ChallengeTypeBoss",
        "start_time": 1780887600,
        "end_time": 1784516400,
        "special_reward": {
          "name": "Stellar Jade",
          "amount": 900
        }
      },
      {
        "name": "The Humming Laughter",
        "type_name": "ChallengeTypePeak",
        "start_time": 1780268400,
        "end_time": 1784066400,
        "special_reward": null
      },
      {
        "name": "Duty Action",
        "type_name": "ChallengeTypeChasm",
        "start_time": 1779678000,
        "end_time": 1783306800,
        "special_reward": {
          "name": "Stellar Jade",
          "amount": 800
        }
      },
      {
        "name": "Illusory Concepts",
        "type_name": "ChallengeTypeStory",
        "start_time": 1778468400,
        "end_time": 1782097200,
        "special_reward": {
          "name": "Stellar Jade",
          "amount": 800
        }
      },
      {
        "name": "Falsehood to Fact",
        "type_name": "ChallengeTypeStory",
        "start_time": 1782097200,
        "end_time": 1785726000,
        "special_reward": {
          "name": "Stellar Jade",
          "amount": 900
        }
      },
      {
        "name": "Academy Ghost Story",
        "type_name": "ChallengeTypeChasm",
        "start_time": 1783306800,
        "end_time": 1786935600,
        "special_reward": {
          "name": "Stellar Jade",
          "amount": 900
        }
      }
    ]
  }
};
