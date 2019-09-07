# Poke Safari
Final 301 Project. Find Pokemon around the world based on Location.
## Heroku Deployment
Check it out: https://cpoke-safari.herokuapp.com/
## WIKI
https://github.com/Mapm-301final/Monster-Safari/wiki
## Trello
https://trello.com/b/6tKsrbn6/pokemon-301-project

## Readme Requirements
### The name of the project
Poke Safari
### Names of the team members
Morgan T. Shaw, PT, Ahren Swett
### A description of the project
Search anywhere in the world to find and collect pokemon. Add them to your backpack and try to catch them all!
### The overall problem domain and how the project solves those problems
When searching for maps of places they are not visually appealing and there is nothing to collect. Our app allows plain maps to become visually stunning and you are able to collect pokemon from every place that you search. 
### Semantic versioning, beginning with version 1.0.0 and incremented as changes are made
### A list of any libraries, frameworks, or packages that your application requires in order to properly function
Express, Postgres, jQuery, EJS, Pokemon API, Google Maps API
### Instructions that the user may need to follow in order to get your application up and running on their own computer
To get this app running you will need to clone the code and run npm init. Ensure all the required packages are added to your package-lock file. You will need API keys from Google Maps and Poke API.
### Clearly defined API endpoints with sample responses
Google Maps API
https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap
&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318
&markers=color:red%7Clabel:C%7C40.718217,-73.998284
&key=YOUR_API_KEY

https://maps.googleapis.com/maps/api/staticmap?parameters
File Stack API
https://cdn.filestackcontent.com/YOUR APIKEY/TASKS/URL

Poke API
https://pokeapi.co/api/v2/pokemon/ditto/

{
  "abilities": [
    {
      "ability": {
        "name": "imposter",
        "url": "https://pokeapi.co/api/v2/ability/150/"
      },
      "is_hidden": true,
      "slot": 3
    },
    {
      "ability": {
        "name": "limber",
        "url": "https://pokeapi.co/api/v2/ability/7/"
      },
      "is_hidden": false,
      "slot": 1
    }
  ],
  "base_experience": 101,
  "forms": [
    {
      "name": "ditto",
      "url": "https://pokeapi.co/api/v2/pokemon-form/132/"
    }
  ],
  "game_indices": [
    {
      "game_index": 132,
      "version": {
        "name": "white-2",
        "url": "https://pokeapi.co/api/v2/version/22/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "black-2",
        "url": "https://pokeapi.co/api/v2/version/21/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "white",
        "url": "https://pokeapi.co/api/v2/version/18/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "black",
        "url": "https://pokeapi.co/api/v2/version/17/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "soulsilver",
        "url": "https://pokeapi.co/api/v2/version/16/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "heartgold",
        "url": "https://pokeapi.co/api/v2/version/15/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "platinum",
        "url": "https://pokeapi.co/api/v2/version/14/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "pearl",
        "url": "https://pokeapi.co/api/v2/version/13/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "diamond",
        "url": "https://pokeapi.co/api/v2/version/12/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "leafgreen",
        "url": "https://pokeapi.co/api/v2/version/11/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "firered",
        "url": "https://pokeapi.co/api/v2/version/10/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "emerald",
        "url": "https://pokeapi.co/api/v2/version/9/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "sapphire",
        "url": "https://pokeapi.co/api/v2/version/8/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "ruby",
        "url": "https://pokeapi.co/api/v2/version/7/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "crystal",
        "url": "https://pokeapi.co/api/v2/version/6/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "silver",
        "url": "https://pokeapi.co/api/v2/version/5/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "gold",
        "url": "https://pokeapi.co/api/v2/version/4/"
      }
    },
    {
      "game_index": 76,
      "version": {
        "name": "yellow",
        "url": "https://pokeapi.co/api/v2/version/3/"
      }
    },
    {
      "game_index": 76,
      "version": {
        "name": "blue",
        "url": "https://pokeapi.co/api/v2/version/2/"
      }
    },
    {
      "game_index": 76,
      "version": {
        "name": "red",
        "url": "https://pokeapi.co/api/v2/version/1/"
      }
    }
  ],
  "height": 3,
  "held_items": [
    {
      "item": {
        "name": "metal-powder",
        "url": "https://pokeapi.co/api/v2/item/234/"
      },
      "version_details": [
        {
          "rarity": 5,
          "version": {
            "name": "ultra-sun",
            "url": "https://pokeapi.co/api/v2/version/29/"
          }
        },
        {
          "rarity": 5,
          "version": {
            "name": "moon",
            "url": "https://pokeapi.co/api/v2/version/28/"
          }
        },
        {
          "rarity": 5,
          "version": {
            "name": "y",
            "url": "https://pokeapi.co/api/v2/version/24/"
          }
        },
        {
          "rarity": 5,
          "version": {
            "name": "x",
            "url": "https://pokeapi.co/api/v2/version/23/"
          }
        },
        {
          "rarity": 5,
          "version": {
            "name": "white-2",
            "url": "https://pokeapi.co/api/v2/version/22/"
          }
        },
        {
          "rarity": 5,
          "version": {
            "name": "black-2",
            "url": "https://pokeapi.co/api/v2/version/21/"
          }
        },
        {
          "rarity": 5,
          "version": {
            "name": "white",
            "url": "https://pokeapi.co/api/v2/version/18/"
          }
        },
        {
          "rarity": 5,
          "version": {
            "name": "black",
            "url": "https://pokeapi.co/api/v2/version/17/"
          }
        },
        {
          "rarity": 5,
          "version": {
            "name": "soulsilver",
            "url": "https://pokeapi.co/api/v2/version/16/"
          }
        },
        {
          "rarity": 5,
          "version": {
            "name": "heartgold",
            "url": "https://pokeapi.co/api/v2/version/15/"
          }
        },
        {
          "rarity": 5,
          "version": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version/14/"
          }
        },
        {
          "rarity": 5,
          "version": {
            "name": "pearl",
            "url": "https://pokeapi.co/api/v2/version/13/"
          }
        },
        {
          "rarity": 5,
          "version": {
            "name": "diamond",
            "url": "https://pokeapi.co/api/v2/version/12/"
          }
        },
        {
          "rarity": 5,
          "version": {
            "name": "leafgreen",
            "url": "https://pokeapi.co/api/v2/version/11/"
          }
        },
        {
          "rarity": 5,
          "version": {
            "name": "firered",
            "url": "https://pokeapi.co/api/v2/version/10/"
          }
        },
        {
          "rarity": 5,
          "version": {
            "name": "emerald",
            "url": "https://pokeapi.co/api/v2/version/9/"
          }
        },
        {
          "rarity": 5,
          "version": {
            "name": "sapphire",
            "url": "https://pokeapi.co/api/v2/version/8/"
          }
        },
        {
          "rarity": 5,
          "version": {
            "name": "ruby",
            "url": "https://pokeapi.co/api/v2/version/7/"
          }
        }
      ]
    },
    {
      "item": {
        "name": "quick-powder",
        "url": "https://pokeapi.co/api/v2/item/251/"
      },
      "version_details": [
        {
          "rarity": 50,
          "version": {
            "name": "ultra-sun",
            "url": "https://pokeapi.co/api/v2/version/29/"
          }
        },
        {
          "rarity": 50,
          "version": {
            "name": "moon",
            "url": "https://pokeapi.co/api/v2/version/28/"
          }
        },
        {
          "rarity": 50,
          "version": {
            "name": "y",
            "url": "https://pokeapi.co/api/v2/version/24/"
          }
        },
        {
          "rarity": 50,
          "version": {
            "name": "x",
            "url": "https://pokeapi.co/api/v2/version/23/"
          }
        },
        {
          "rarity": 50,
          "version": {
            "name": "white-2",
            "url": "https://pokeapi.co/api/v2/version/22/"
          }
        },
        {
          "rarity": 50,
          "version": {
            "name": "black-2",
            "url": "https://pokeapi.co/api/v2/version/21/"
          }
        },
        {
          "rarity": 50,
          "version": {
            "name": "white",
            "url": "https://pokeapi.co/api/v2/version/18/"
          }
        },
        {
          "rarity": 50,
          "version": {
            "name": "black",
            "url": "https://pokeapi.co/api/v2/version/17/"
          }
        },
        {
          "rarity": 50,
          "version": {
            "name": "soulsilver",
            "url": "https://pokeapi.co/api/v2/version/16/"
          }
        },
        {
          "rarity": 50,
          "version": {
            "name": "heartgold",
            "url": "https://pokeapi.co/api/v2/version/15/"
          }
        },
        {
          "rarity": 50,
          "version": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version/14/"
          }
        },
        {
          "rarity": 50,
          "version": {
            "name": "pearl",
            "url": "https://pokeapi.co/api/v2/version/13/"
          }
        },
        {
          "rarity": 50,
          "version": {
            "name": "diamond",
            "url": "https://pokeapi.co/api/v2/version/12/"
          }
        }
      ]
    }
  ],
  "id": 132,
  "is_default": true,
  "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/132/encounters",
  "moves": [
    {
      "move": {
        "name": "transform",
        "url": "https://pokeapi.co/api/v2/move/144/"
      },
      "version_group_details": [
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "sun-moon",
            "url": "https://pokeapi.co/api/v2/version-group/17/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "xd",
            "url": "https://pokeapi.co/api/v2/version-group/13/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "colosseum",
            "url": "https://pokeapi.co/api/v2/version-group/12/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "firered-leafgreen",
            "url": "https://pokeapi.co/api/v2/version-group/7/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "emerald",
            "url": "https://pokeapi.co/api/v2/version-group/6/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "ruby-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/5/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "crystal",
            "url": "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "gold-silver",
            "url": "https://pokeapi.co/api/v2/version-group/3/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "yellow",
            "url": "https://pokeapi.co/api/v2/version-group/2/"
          }
        },
        {
          "level_learned_at": 1,
          "move_learn_method": {
            "name": "level-up",
            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
          },
          "version_group": {
            "name": "red-blue",
            "url": "https://pokeapi.co/api/v2/version-group/1/"
          }
        }
      ]
    }
  ],
  "name": "ditto",
  "order": 197,
  "species": {
    "name": "ditto",
    "url": "https://pokeapi.co/api/v2/pokemon-species/132/"
  },
  "sprites": {
    "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png",
    "back_female": null,
    "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/132.png",
    "back_shiny_female": null,
    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
    "front_female": null,
    "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png",
    "front_shiny_female": null
  },
  "stats": [
    {
      "base_stat": 48,
      "effort": 0,
      "stat": {
        "name": "speed",
        "url": "https://pokeapi.co/api/v2/stat/6/"
      }
    },
    {
      "base_stat": 48,
      "effort": 0,
      "stat": {
        "name": "special-defense",
        "url": "https://pokeapi.co/api/v2/stat/5/"
      }
    },
    {
      "base_stat": 48,
      "effort": 0,
      "stat": {
        "name": "special-attack",
        "url": "https://pokeapi.co/api/v2/stat/4/"
      }
    },
    {
      "base_stat": 48,
      "effort": 0,
      "stat": {
        "name": "defense",
        "url": "https://pokeapi.co/api/v2/stat/3/"
      }
    },
    {
      "base_stat": 48,
      "effort": 0,
      "stat": {
        "name": "attack",
        "url": "https://pokeapi.co/api/v2/stat/2/"
      }
    },
    {
      "base_stat": 48,
      "effort": 1,
      "stat": {
        "name": "hp",
        "url": "https://pokeapi.co/api/v2/stat/1/"
      }
    }
  ],
  "types": [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  "weight": 40
}
### Clearly defined database schemas
CREATE TABLE IF NOT EXISTS poke (
id SERIAL PRIMARY KEY,
name VARCHAR(20), 
type VARCHAR(255),
icon VARCHAR(255),
img VARCHAR(255), 
location VARCHAR(255),
date_encounterd VARCHAR(255)
);

### Sources
https://archives.bulbagarden.net/wiki/Category:Squirtle
https://www.iconfinder.com/icons/134216/hamburger_lines_menu_icon
https://images.app.goo.gl/mZjszUNucdoDVxpM7