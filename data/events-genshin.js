// Снапшот Genshin Impact (резерв на случай, если live-API недоступен).
// Сырой вид api.ennead.cc/mihoyo/genshin/calendar — время в Unix-секундах.
// Тот же нормализатор (sources.js) обрабатывает и снапшот, и живой ответ API.
// Обновить: попросить Claude перескрейпить, либо страница сама подтянет live.
window.SNAPSHOT_GENSHIN = {
  "generatedAt": "2026-06-11T00:00:00Z",
  "source": "api.ennead.cc/mihoyo/genshin/calendar",
  "raw": {
    "events": [
      {
        "name": "Trials of the Brave Warrior",
        "type_name": "ActTypeOther",
        "start_time": 1780884000,
        "end_time": 1781726399,
        "image_url": "https://static.wikia.nocookie.net/gensin-impact/images/0/09/Trials_of_the_Brave_Warrior.png/revision/latest?cb=20260606124844",
        "description": "A group of expert fighters has gathered in Nod-Krai's Nasha Town to compete for the crown of the \"Technical Martial Challenge.\" While the competition is locked in a stalemate, the arrival of you and Paimon could be the key to deciding a winner...",
        "special_reward": {
          "name": "Primogem",
          "amount": 420
        }
      },
      {
        "name": "Stygian Onslaught",
        "type_name": "ActTypeHardChallenge",
        "start_time": 1779847200,
        "end_time": 1782763199,
        "image_url": "https://static.wikia.nocookie.net/gensin-impact/images/4/41/Stygian_Onslaught.png/revision/latest?cb=20250623040614",
        "description": "A strange Ley Line Disturbance has once again appeared, this time in Liyue's Sal Terrae. You must breach the depths of this unpredictable Domain, for only by defeating powerful foes can the turmoil be quelled... Of course, where danger awaits, so too do extraordinary treasures...",
        "special_reward": {
          "name": "Primogem",
          "amount": 450
        }
      },
      {
        "name": "Heated Battle Mode: Sprinting Stratagems",
        "type_name": "ActTypeOther",
        "start_time": 1780711200,
        "end_time": 1782071999,
        "image_url": null,
        "description": "At The Cat's Tail, entertaining events are held regularly, and each event will adopt a special set of Heated Battle Mode rules.\\nThe rules this time are as follows:\\n1. You and your opponent will use Character Cards selected on the spot and randomly generated Action Cards to battle.\\n2. During the Roll phase, you will not roll Elemental Dice but instead will receive 4 Omni Dice and 4 different random Elemental Dice.\\n3. Once each round, playing an Action Card will cost 2 fewer Elemental Dice.\\n4. Switching Character Cards is always a Fast Action.",
        "special_reward": {
          "name": "Lucky Coin",
          "amount": 3000
        }
      },
      {
        "name": "The Forge Realm's Temper: Clever Stratagems",
        "type_name": "ActTypeOther",
        "start_time": 1779231600,
        "end_time": 1782860400,
        "image_url": null,
        "description": "",
        "special_reward": {
          "name": "Lucky Coin",
          "amount": 8000
        }
      },
      {
        "name": "Kaleidoscopic Color Chase",
        "type_name": "ActTypeOther",
        "start_time": 0,
        "end_time": 0,
        "image_url": "https://static.wikia.nocookie.net/gensin-impact/images/a/a6/Kaleidoscopic_Color_Chase.png/revision/latest?cb=20260508125247",
        "description": "You return to the Easybreeze Holiday Resort, where you run into an old friend together with some rather special Ashas...",
        "special_reward": null
      }
    ],
    "banners": [
      {
        "name": "Character Event Wish",
        "version": "6.6",
        "start_time": 1780999200,
        "end_time": 1782802799,
        "characters": [
          {
            "name": "Lohen",
            "element": "Cryo",
            "rarity": 5
          },
          {
            "name": "Mika",
            "element": "Cryo",
            "rarity": 4
          },
          {
            "name": "Xiangling",
            "element": "Pyro",
            "rarity": 4
          },
          {
            "name": "Bennett",
            "element": "Pyro",
            "rarity": 4
          }
        ]
      },
      {
        "name": "Character Event Wish 2",
        "version": "6.6",
        "start_time": 1780999200,
        "end_time": 1782802799,
        "characters": [
          {
            "name": "Mavuika",
            "element": "Pyro",
            "rarity": 5
          },
          {
            "name": "Mika",
            "element": "Cryo",
            "rarity": 4
          },
          {
            "name": "Xiangling",
            "element": "Pyro",
            "rarity": 4
          },
          {
            "name": "Bennett",
            "element": "Pyro",
            "rarity": 4
          }
        ]
      },
      {
        "name": "Weapon Event Wish",
        "version": "6.6",
        "start_time": 1780999200,
        "end_time": 1782802799,
        "weapons": [
          {
            "name": "Disaster and Remorse",
            "rarity": 5
          },
          {
            "name": "A Thousand Blazing Suns",
            "rarity": 5
          },
          {
            "name": "The Alley Flash",
            "rarity": 4
          },
          {
            "name": "Wine and Song",
            "rarity": 4
          },
          {
            "name": "Alley Hunter",
            "rarity": 4
          },
          {
            "name": "Rainslasher",
            "rarity": 4
          },
          {
            "name": "Favonius Lance",
            "rarity": 4
          }
        ]
      }
    ],
    "challenges": [
      {
        "name": "Imaginarium Theater",
        "type_name": "ActTypeRoleCombat",
        "start_time": 1780257600,
        "end_time": 1782849599,
        "special_reward": {
          "name": "Primogem",
          "amount": 1000
        }
      },
      {
        "name": "Abyssal Moon Spire",
        "type_name": "ActTypeTower",
        "start_time": 1778875200,
        "end_time": 1781553599,
        "special_reward": {
          "name": "Primogem",
          "amount": 800
        }
      }
    ]
  }
};
