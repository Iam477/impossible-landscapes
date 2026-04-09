// ═══════════════════════════════════════════════════════════════
// Impossible Landscapes — Part 1 NPC Actor Import Macro
// Paste this into a Foundry VTT Script Macro and execute it.
// Requires the Delta Green system to be active.
// ═══════════════════════════════════════════════════════════════

(async () => {
  // Create folder for the actors
  let folder = game.folders.find(f => f.name === "IL — Night Floors NPCs" && f.type === "Actor");
  if (!folder) {
    folder = await Folder.create({name: "IL — Night Floors NPCs", type: "Actor", color: "#4a1942"});
  }

  const actorData = [
  {
    "_id": "VUgJ13jGiGyklVJE",
    "name": "David Langford",
    "type": "npc",
    "img": "modules/impossible-landscapes/assets/portraits/npc_david_langford.webp",
    "system": {
      "statistics": {
        "str": {
          "value": 10,
          "distinguishing_feature": ""
        },
        "con": {
          "value": 11,
          "distinguishing_feature": ""
        },
        "dex": {
          "value": 11,
          "distinguishing_feature": ""
        },
        "int": {
          "value": 11,
          "distinguishing_feature": ""
        },
        "pow": {
          "value": 17,
          "distinguishing_feature": ""
        },
        "cha": {
          "value": 14,
          "distinguishing_feature": ""
        }
      },
      "health": {
        "value": 11,
        "min": 0,
        "max": 11
      },
      "wp": {
        "value": 11,
        "min": 0,
        "max": 11
      },
      "sanity": {
        "value": 51,
        "max": 99,
        "currentBreakingPoint": 34,
        "adaptations": {
          "violence": {
            "incident1": false,
            "incident2": false,
            "incident3": false,
            "adapted": false
          },
          "helplessness": {
            "incident1": false,
            "incident2": false,
            "incident3": false,
            "adapted": false
          }
        }
      },
      "skills": {
        "accounting": {
          "value": 10,
          "failure": false
        },
        "alertness": {
          "value": 40,
          "failure": false
        },
        "anthropology": {
          "value": 0,
          "failure": false
        },
        "archeology": {
          "value": 0,
          "failure": false
        },
        "artillery": {
          "value": 0,
          "failure": false
        },
        "athletics": {
          "value": 30,
          "failure": false
        },
        "bureaucracy": {
          "value": 10,
          "failure": false
        },
        "computer_science": {
          "value": 0,
          "failure": false
        },
        "criminology": {
          "value": 0,
          "failure": false
        },
        "demolitions": {
          "value": 0,
          "failure": false
        },
        "disguise": {
          "value": 10,
          "failure": false
        },
        "dodge": {
          "value": 30,
          "failure": false
        },
        "drive": {
          "value": 20,
          "failure": false
        },
        "firearms": {
          "value": 20,
          "failure": false
        },
        "first_aid": {
          "value": 10,
          "failure": false
        },
        "forensics": {
          "value": 0,
          "failure": false
        },
        "heavy_machinery": {
          "value": 50,
          "failure": false
        },
        "heavy_weapons": {
          "value": 0,
          "failure": false
        },
        "history": {
          "value": 10,
          "failure": false
        },
        "humint": {
          "value": 30,
          "failure": false
        },
        "law": {
          "value": 0,
          "failure": false
        },
        "medicine": {
          "value": 0,
          "failure": false
        },
        "melee_weapons": {
          "value": 50,
          "failure": false
        },
        "navigate": {
          "value": 30,
          "failure": false
        },
        "occult": {
          "value": 10,
          "failure": false
        },
        "persuade": {
          "value": 25,
          "failure": false
        },
        "pharmacy": {
          "value": 0,
          "failure": false
        },
        "psychotherapy": {
          "value": 10,
          "failure": false
        },
        "ride": {
          "value": 10,
          "failure": false
        },
        "search": {
          "value": 20,
          "failure": false
        },
        "sigint": {
          "value": 0,
          "failure": false
        },
        "stealth": {
          "value": 50,
          "failure": false
        },
        "surgery": {
          "value": 0,
          "failure": false
        },
        "survival": {
          "value": 10,
          "failure": false
        },
        "swim": {
          "value": 20,
          "failure": false
        },
        "unarmed_combat": {
          "value": 40,
          "failure": false
        },
        "unnatural": {
          "value": 0,
          "failure": false
        }
      },
      "typedSkills": {
        "craft1": {
          "name": "Craft",
          "subtype": "Electrician",
          "value": 40,
          "failure": false,
          "group": "craft"
        },
        "craft2": {
          "name": "Craft",
          "subtype": "Mechanics",
          "value": 30,
          "failure": false,
          "group": "craft"
        },
        "craft3": {
          "name": "Craft",
          "subtype": "Microelectronics",
          "value": 40,
          "failure": false,
          "group": "craft"
        },
        "foreignLanguage1": {
          "name": "Foreign Language",
          "subtype": "Japanese",
          "value": 10,
          "failure": false,
          "group": "foreignLanguage"
        },
        "science1": {
          "name": "Science",
          "subtype": "Mathematics",
          "value": 40,
          "failure": false,
          "group": "science"
        }
      },
      "biography": {
        "profession": "Trapped Night World Survivor",
        "employer": "",
        "nationality": "",
        "sex": "",
        "age": "",
        "education": "",
        "personalDetails": "<p><strong>Role:</strong> Trapped Night World Survivor</p>\n<p><strong>Nature:</strong> mundane</p>\n<p><strong>Location:</strong> loc_night_floors</p>\n<hr/>\n<h2>Player Description</h2>\n<p>A man lurches out of a doorway at you \u2014 he looks like he&#x27;s been living rough for months. His beard has grown to his chest and his hair is matted. He&#x27;s thin in the wrong way. He grabs you and starts talking very fast about &#x27;getting out of the building,&#x27; claiming he&#x27;s been trapped since March. His ID identifies him as a cable installer for Charter Cable.</p>\n<hr/>\n<section class=\"secret\">\n<h2>Handler Notes</h2>\n<p>Langford is actively searching for an exit and will cooperate fully with anyone who seems capable of escaping. He has no knowledge of the unnatural beyond his lived experience of the Night Floors. He is not hostile; his terrified feral state is self-preservation. He is the only &#x27;innocent&#x27; trapped in the Night Floors \u2014 everyone else chose to be there or was consumed. His &#x27;Passing Strange&#x27; note: born 2 MAR 1953, the same day the Lundine house was officially converted from a private residence to an 11-unit apartment building and renamed the Macallistar Building. The disorder note: upon escape, he would suffer Enclosure-Related Phobia. His brother Ian reported him missing initially thinking he had skipped town to avoid lawsuits from his two ex-wives. ARTLIFE plans to evict all tenants \u2014 this will eventually bring police back to the building, and Langford needs to be out before then.</p>\n<h3>Relationships</h3>\n<ul>\n<li><strong>Brother:</strong> npc_ian_langford \u2014 His brother Ian Langford reported David missing on 2 APR 1995, initially thinking he had skipped town due to pending lawsuits from two ex-wives.</li>\n</ul>\n</section>",
        "physicalDescription": "A man lurches out of a doorway at you \u2014 he looks like he's been living rough for months. His beard has grown to his chest and his hair is matted. He's thin in the wrong way. He grabs you and starts talking very fast about 'getting out of the building,' claiming he's been trapped since March. His ID identifies him as a cable installer for Charter Cable."
      },
      "physical": {
        "description": "",
        "wounds": ""
      }
    },
    "prototypeToken": {
      "name": "David Langford",
      "displayName": 20,
      "actorLink": true,
      "width": 1,
      "height": 1,
      "texture": {
        "src": "modules/impossible-landscapes/assets/tokens/npc_david_langford.webp",
        "scaleX": 1,
        "scaleY": 1
      },
      "disposition": 1,
      "displayBars": 40,
      "bar1": {
        "attribute": "health"
      },
      "bar2": {
        "attribute": "wp"
      },
      "sight": {
        "enabled": false,
        "range": 0
      },
      "lockRotation": false,
      "rotation": 0,
      "alpha": 1
    },
    "items": [
      {
        "_id": "OsPBz6oa02u5JMzR",
        "name": "Unarmed",
        "type": "weapon",
        "img": "systems/deltagreen/assets/icons/melee.svg",
        "system": {
          "skill": "unarmed_combat",
          "damage": "1D4-1",
          "lethality": 0,
          "isLethal": false,
          "range": "melee",
          "ammo": "",
          "equipped": true
        },
        "effects": [],
        "flags": {
          "impossible-landscapes": {
            "bookSkillPercent": 40,
            "armorPiercing": 0
          }
        },
        "sort": 0
      }
    ],
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": {
      "default": 0
    },
    "flags": {
      "impossible-landscapes": {
        "sourceNpcId": "npc_david_langford",
        "nature": "mundane",
        "partsAppearing": [
          "Part 1"
        ],
        "tags": [
          "trapped",
          "survivor",
          "night_floors",
          "replacement_character",
          "mundane",
          "rescuable"
        ]
      }
    },
    "_stats": {
      "coreVersion": "12.331",
      "systemId": "deltagreen",
      "systemVersion": "1.6.4",
      "createdTime": 1712700000000,
      "modifiedTime": 1712700000000,
      "lastModifiedBy": "ILModuleGenerator"
    }
  },
  {
    "_id": "U75jUdh4n0ZjfoCx",
    "name": "Detective Graham Giuradanda",
    "type": "npc",
    "img": "modules/impossible-landscapes/assets/portraits/npc_graham_giuradanda.webp",
    "system": {
      "statistics": {
        "str": {
          "value": 10,
          "distinguishing_feature": ""
        },
        "con": {
          "value": 10,
          "distinguishing_feature": ""
        },
        "dex": {
          "value": 13,
          "distinguishing_feature": ""
        },
        "int": {
          "value": 10,
          "distinguishing_feature": ""
        },
        "pow": {
          "value": 14,
          "distinguishing_feature": ""
        },
        "cha": {
          "value": 17,
          "distinguishing_feature": ""
        }
      },
      "health": {
        "value": 10,
        "min": 0,
        "max": 10
      },
      "wp": {
        "value": 14,
        "min": 0,
        "max": 14
      },
      "sanity": {
        "value": 70,
        "max": 99,
        "currentBreakingPoint": 56,
        "adaptations": {
          "violence": {
            "incident1": false,
            "incident2": false,
            "incident3": false,
            "adapted": false
          },
          "helplessness": {
            "incident1": false,
            "incident2": false,
            "incident3": false,
            "adapted": false
          }
        }
      },
      "skills": {
        "accounting": {
          "value": 10,
          "failure": false
        },
        "alertness": {
          "value": 60,
          "failure": false
        },
        "anthropology": {
          "value": 0,
          "failure": false
        },
        "archeology": {
          "value": 20,
          "failure": false
        },
        "artillery": {
          "value": 0,
          "failure": false
        },
        "athletics": {
          "value": 30,
          "failure": false
        },
        "bureaucracy": {
          "value": 40,
          "failure": false
        },
        "computer_science": {
          "value": 0,
          "failure": false
        },
        "criminology": {
          "value": 70,
          "failure": false
        },
        "demolitions": {
          "value": 0,
          "failure": false
        },
        "disguise": {
          "value": 10,
          "failure": false
        },
        "dodge": {
          "value": 50,
          "failure": false
        },
        "drive": {
          "value": 50,
          "failure": false
        },
        "firearms": {
          "value": 60,
          "failure": false
        },
        "first_aid": {
          "value": 10,
          "failure": false
        },
        "forensics": {
          "value": 30,
          "failure": false
        },
        "heavy_machinery": {
          "value": 10,
          "failure": false
        },
        "heavy_weapons": {
          "value": 0,
          "failure": false
        },
        "history": {
          "value": 10,
          "failure": false
        },
        "humint": {
          "value": 50,
          "failure": false
        },
        "law": {
          "value": 30,
          "failure": false
        },
        "medicine": {
          "value": 0,
          "failure": false
        },
        "melee_weapons": {
          "value": 50,
          "failure": false
        },
        "navigate": {
          "value": 40,
          "failure": false
        },
        "occult": {
          "value": 10,
          "failure": false
        },
        "persuade": {
          "value": 60,
          "failure": false
        },
        "pharmacy": {
          "value": 0,
          "failure": false
        },
        "psychotherapy": {
          "value": 10,
          "failure": false
        },
        "ride": {
          "value": 10,
          "failure": false
        },
        "search": {
          "value": 75,
          "failure": false
        },
        "sigint": {
          "value": 0,
          "failure": false
        },
        "stealth": {
          "value": 30,
          "failure": false
        },
        "surgery": {
          "value": 0,
          "failure": false
        },
        "survival": {
          "value": 10,
          "failure": false
        },
        "swim": {
          "value": 20,
          "failure": false
        },
        "unarmed_combat": {
          "value": 80,
          "failure": false
        },
        "unnatural": {
          "value": 0,
          "failure": false
        }
      },
      "typedSkills": {
        "foreignLanguage1": {
          "name": "Foreign Language",
          "subtype": "Italian",
          "value": 20,
          "failure": false,
          "group": "foreignLanguage"
        },
        "militaryScience1": {
          "name": "Military Science",
          "subtype": "Land",
          "value": 20,
          "failure": false,
          "group": "militaryScience"
        }
      },
      "biography": {
        "profession": "NYPD Detective / Investigation Liaison",
        "employer": "",
        "nationality": "",
        "sex": "",
        "age": "",
        "education": "",
        "personalDetails": "<p><strong>Role:</strong> NYPD Detective / Investigation Liaison</p>\n<p><strong>Nature:</strong> mundane</p>\n<p><strong>Location:</strong> loc_macallistar_building</p>\n<hr/>\n<h2>Player Description</h2>\n<p>Detective Giuradanda is a tall, thin, classically handsome man with an easy, warm manner that immediately puts people at ease. He shakes hands firmly and seems genuinely grateful to have federal assistance. He&#x27;s clearly disturbed by what he saw in Wright&#x27;s apartment but is keeping it together professionally.</p>\n<hr/>\n<section class=\"secret\">\n<h2>Handler Notes</h2>\n<p>Giuradanda provides the Agents with his card and leaves after checking they have everything they need. He is cooperative but stays out of their way. He can be an ongoing liaison \u2014 he has access to NYPD resources and local networks. He is not in the Delta Green loop and has no knowledge of the unnatural. If the Agents need NYPD cover or local law enforcement support, Giuradanda is the correct contact. His three Bonds: great-grandmother Annamarie Giuradanda (17), priest Father Thomas &#x27;Tommy&#x27; Rann (17), brother Jerry Giuradanda (17). Motivations: To make pension. To protect the innocent. Catholicism. &#x27;Passing Strange&#x27;: born 23 OCT 1951, the same day Delta Green operative Emmet Moseby&#x27;s disappearance was officially reported.</p>\n<h3>Relationships</h3>\n<ul>\n<li><strong>Active Investigator:</strong> npc_abigail_wright \u2014 Assigned to the Wright case on 5 JUN 1995. Interviewed all residents by day. The case is on the back burner as of 22 JUN 1995 due to lack of leads.</li>\n</ul>\n</section>",
        "physicalDescription": "Detective Giuradanda is a tall, thin, classically handsome man with an easy, warm manner that immediately puts people at ease. He shakes hands firmly and seems genuinely grateful to have federal assistance. He's clearly disturbed by what he saw in Wright's apartment but is keeping it together professionally."
      },
      "physical": {
        "description": "",
        "wounds": ""
      }
    },
    "prototypeToken": {
      "name": "Detective Graham Giuradanda",
      "displayName": 20,
      "actorLink": true,
      "width": 1,
      "height": 1,
      "texture": {
        "src": "modules/impossible-landscapes/assets/tokens/npc_graham_giuradanda.webp",
        "scaleX": 1,
        "scaleY": 1
      },
      "disposition": 1,
      "displayBars": 40,
      "bar1": {
        "attribute": "health"
      },
      "bar2": {
        "attribute": "wp"
      },
      "sight": {
        "enabled": false,
        "range": 0
      },
      "lockRotation": false,
      "rotation": 0,
      "alpha": 1
    },
    "items": [
      {
        "_id": "vBcUpY3Ak8Jk4gxh",
        "name": "Sig-Sauer P226 pistol",
        "type": "weapon",
        "img": "systems/deltagreen/assets/icons/pistol.svg",
        "system": {
          "skill": "firearms",
          "damage": "1D10",
          "lethality": 0,
          "isLethal": false,
          "range": "15m",
          "ammo": "",
          "equipped": true
        },
        "effects": [],
        "flags": {
          "impossible-landscapes": {
            "bookSkillPercent": 60,
            "armorPiercing": 0
          }
        },
        "sort": 0
      },
      {
        "_id": "AmlFaQkBuQ9Dw0oE",
        "name": "Unarmed",
        "type": "weapon",
        "img": "systems/deltagreen/assets/icons/melee.svg",
        "system": {
          "skill": "unarmed_combat",
          "damage": "1D4-1",
          "lethality": 0,
          "isLethal": false,
          "range": "melee",
          "ammo": "",
          "equipped": true
        },
        "effects": [],
        "flags": {
          "impossible-landscapes": {
            "bookSkillPercent": 80,
            "armorPiercing": 0
          }
        },
        "sort": 0
      }
    ],
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": {
      "default": 0
    },
    "flags": {
      "impossible-landscapes": {
        "sourceNpcId": "npc_graham_giuradanda",
        "nature": "mundane",
        "partsAppearing": [
          "Part 1"
        ],
        "tags": [
          "nypd",
          "police",
          "replacement_character",
          "mundane",
          "investigation_liaison",
          "catholic"
        ]
      }
    },
    "_stats": {
      "coreVersion": "12.331",
      "systemId": "deltagreen",
      "systemVersion": "1.6.4",
      "createdTime": 1712700000000,
      "modifiedTime": 1712700000000,
      "lastModifiedBy": "ILModuleGenerator"
    }
  },
  {
    "_id": "zh80JzLZpVAcqgNd",
    "name": "Dr. Marvin Bloom",
    "type": "npc",
    "img": "modules/impossible-landscapes/assets/portraits/npc_agent_marcus.webp",
    "system": {
      "statistics": {
        "str": {
          "value": 9,
          "distinguishing_feature": ""
        },
        "con": {
          "value": 11,
          "distinguishing_feature": ""
        },
        "dex": {
          "value": 12,
          "distinguishing_feature": ""
        },
        "int": {
          "value": 12,
          "distinguishing_feature": ""
        },
        "pow": {
          "value": 12,
          "distinguishing_feature": ""
        },
        "cha": {
          "value": 13,
          "distinguishing_feature": ""
        }
      },
      "health": {
        "value": 10,
        "min": 0,
        "max": 10
      },
      "wp": {
        "value": 12,
        "min": 0,
        "max": 12
      },
      "sanity": {
        "value": 57,
        "max": 99,
        "currentBreakingPoint": 45,
        "adaptations": {
          "violence": {
            "incident1": false,
            "incident2": false,
            "incident3": false,
            "adapted": false
          },
          "helplessness": {
            "incident1": false,
            "incident2": false,
            "incident3": false,
            "adapted": false
          }
        }
      },
      "skills": {
        "accounting": {
          "value": 10,
          "failure": false
        },
        "alertness": {
          "value": 51,
          "failure": false
        },
        "anthropology": {
          "value": 5,
          "failure": false
        },
        "archeology": {
          "value": 0,
          "failure": false
        },
        "artillery": {
          "value": 0,
          "failure": false
        },
        "athletics": {
          "value": 35,
          "failure": false
        },
        "bureaucracy": {
          "value": 45,
          "failure": false
        },
        "computer_science": {
          "value": 25,
          "failure": false
        },
        "criminology": {
          "value": 49,
          "failure": false
        },
        "demolitions": {
          "value": 0,
          "failure": false
        },
        "disguise": {
          "value": 10,
          "failure": false
        },
        "dodge": {
          "value": 35,
          "failure": false
        },
        "drive": {
          "value": 55,
          "failure": false
        },
        "firearms": {
          "value": 53,
          "failure": false
        },
        "first_aid": {
          "value": 20,
          "failure": false
        },
        "forensics": {
          "value": 44,
          "failure": false
        },
        "heavy_machinery": {
          "value": 10,
          "failure": false
        },
        "heavy_weapons": {
          "value": 0,
          "failure": false
        },
        "history": {
          "value": 20,
          "failure": false
        },
        "humint": {
          "value": 60,
          "failure": false
        },
        "law": {
          "value": 32,
          "failure": false
        },
        "medicine": {
          "value": 15,
          "failure": false
        },
        "melee_weapons": {
          "value": 30,
          "failure": false
        },
        "navigate": {
          "value": 10,
          "failure": false
        },
        "occult": {
          "value": 15,
          "failure": false
        },
        "persuade": {
          "value": 50,
          "failure": false
        },
        "pharmacy": {
          "value": 58,
          "failure": false
        },
        "psychotherapy": {
          "value": 50,
          "failure": false
        },
        "ride": {
          "value": 10,
          "failure": false
        },
        "search": {
          "value": 55,
          "failure": false
        },
        "sigint": {
          "value": 10,
          "failure": false
        },
        "stealth": {
          "value": 15,
          "failure": false
        },
        "surgery": {
          "value": 0,
          "failure": false
        },
        "survival": {
          "value": 10,
          "failure": false
        },
        "swim": {
          "value": 20,
          "failure": false
        },
        "unarmed_combat": {
          "value": 48,
          "failure": false
        },
        "unnatural": {
          "value": 4,
          "failure": false
        }
      },
      "typedSkills": {
        "science1": {
          "name": "Science",
          "subtype": "Biology",
          "value": 40,
          "failure": false,
          "group": "science"
        }
      },
      "biography": {
        "profession": "Delta Green Cell M Leader / Briefing NPC / Potential Replacement Agent",
        "employer": "",
        "nationality": "",
        "sex": "",
        "age": "",
        "education": "",
        "personalDetails": "<p><strong>Aliases:</strong> Agent Marcus</p>\n<p><strong>Role:</strong> Delta Green Cell M Leader / Briefing NPC / Potential Replacement Agent</p>\n<p><strong>Nature:</strong> mundane</p>\n<p><strong>Location:</strong> loc_nyc_general</p>\n<hr/>\n<h2>Player Description</h2>\n<p>A man with salt-and-pepper hair and a scrub beard collects you from the park with a false smile, pointing at the Washington Square Arch and talking casually while his eyes move constantly. He introduces himself only as Marcus. He smells of cigarettes \u2014 Kools. His suit is oversized, his FBI badge has worn a groove in his belt.</p>\n<hr/>\n<section class=\"secret\">\n<h2>Handler Notes</h2>\n<p>Marcus briefing takes place at Washington Square Park at 4:45 PM on 10 AUG 1995, a summer-packed park full of people. He collects Agents one by one, pointing at landmarks while checking for surveillance. He provides: FBI temporary credentials for all Agents, a New York Post article on the case, the Abigail Wright police and FBI files, the Macallistar Building address, freshly made keys (stamped DO NOT DUPLICATE), and a Polaroid of Wright. He knows nothing about the Yellow Sign or The King in Yellow. He has no copy of the occult symbol. His only instruction: catalog Wright&#x27;s apartment, determine if there is an unnatural influence, stop or destroy it if found. He can handle simple logistical requests (library books, DMV files) by ushering them up the chain. He is only available on a Luck roll per phone call. His &#x27;Passing Strange&#x27; note: born 2 SEP 1960, the same day that architect and murderer Asa Daribondi was declared legally dead by the state of New York \u2014 a synchronicity the Handler may or may not choose to foreground. His four Bonds: wife Patty Bloom (12), mother Bina &#x27;Binny&#x27; Bloom (13), brother Thomas Bloom (12), sister Emily Bloom-Fitzhugh (13). His motivations: to keep his team safe, to protect the innocent from the unnatural, uncovering Project CATALYST.</p>\n<h3>Relationships</h3>\n<ul>\n<li><strong>Delta Green Contact:</strong> npc_sandra_levinson \u2014 Sandra Levinson is his Delta Green-friendly contact within the New York FBI who recognized the occult symbol in the Wright file photographs and reported it to him. She is his primary source for this operation.</li>\n</ul>\n</section>",
        "physicalDescription": "A man with salt-and-pepper hair and a scrub beard collects you from the park with a false smile, pointing at the Washington Square Arch and talking casually while his eyes move constantly. He introduces himself only as Marcus. He smells of cigarettes \u2014 Kools. His suit is oversized, his FBI badge has worn a groove in his belt."
      },
      "physical": {
        "description": "",
        "wounds": ""
      }
    },
    "prototypeToken": {
      "name": "Dr. Marvin Bloom",
      "displayName": 20,
      "actorLink": true,
      "width": 1,
      "height": 1,
      "texture": {
        "src": "modules/impossible-landscapes/assets/tokens/npc_agent_marcus.webp",
        "scaleX": 1,
        "scaleY": 1
      },
      "disposition": 1,
      "displayBars": 40,
      "bar1": {
        "attribute": "health"
      },
      "bar2": {
        "attribute": "wp"
      },
      "sight": {
        "enabled": false,
        "range": 0
      },
      "lockRotation": false,
      "rotation": 0,
      "alpha": 1
    },
    "items": [
      {
        "_id": "WM2pHzinXlkWnzam",
        "name": "Glock 22 pistol",
        "type": "weapon",
        "img": "systems/deltagreen/assets/icons/pistol.svg",
        "system": {
          "skill": "firearms",
          "damage": "1D10",
          "lethality": 0,
          "isLethal": false,
          "range": "15m",
          "ammo": "",
          "equipped": true
        },
        "effects": [],
        "flags": {
          "impossible-landscapes": {
            "bookSkillPercent": 53,
            "armorPiercing": 0
          }
        },
        "sort": 0
      },
      {
        "_id": "bNxvro1mDq2e87hM",
        "name": "Unarmed",
        "type": "weapon",
        "img": "systems/deltagreen/assets/icons/melee.svg",
        "system": {
          "skill": "unarmed_combat",
          "damage": "1D4-1",
          "lethality": 0,
          "isLethal": false,
          "range": "melee",
          "ammo": "",
          "equipped": true
        },
        "effects": [],
        "flags": {
          "impossible-landscapes": {
            "bookSkillPercent": 48,
            "armorPiercing": 0
          }
        },
        "sort": 0
      }
    ],
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": {
      "default": 0
    },
    "flags": {
      "impossible-landscapes": {
        "sourceNpcId": "npc_agent_marcus",
        "nature": "mundane",
        "partsAppearing": [
          "Part 1"
        ],
        "tags": [
          "delta_green",
          "handler_npc",
          "replacement_character",
          "paranoid",
          "project_catalyst",
          "cell_m"
        ]
      }
    },
    "_stats": {
      "coreVersion": "12.331",
      "systemId": "deltagreen",
      "systemVersion": "1.6.4",
      "createdTime": 1712700000000,
      "modifiedTime": 1712700000000,
      "lastModifiedBy": "ILModuleGenerator"
    }
  },
  {
    "_id": "5CBIAyOo9ROntJ9r",
    "name": "Henri de Calvados Castaigne",
    "type": "npc",
    "img": "modules/impossible-landscapes/assets/portraits/npc_henri_castaigne.webp",
    "system": {
      "statistics": {
        "str": {
          "value": 7,
          "distinguishing_feature": ""
        },
        "con": {
          "value": 7,
          "distinguishing_feature": ""
        },
        "dex": {
          "value": 8,
          "distinguishing_feature": ""
        },
        "int": {
          "value": 15,
          "distinguishing_feature": ""
        },
        "pow": {
          "value": 12,
          "distinguishing_feature": ""
        },
        "cha": {
          "value": 9,
          "distinguishing_feature": ""
        }
      },
      "health": {
        "value": 7,
        "min": 0,
        "max": 7
      },
      "wp": {
        "value": 12,
        "min": 0,
        "max": 12
      },
      "sanity": {
        "value": 0,
        "max": 99,
        "currentBreakingPoint": 0,
        "adaptations": {
          "violence": {
            "incident1": false,
            "incident2": false,
            "incident3": false,
            "adapted": false
          },
          "helplessness": {
            "incident1": false,
            "incident2": false,
            "incident3": false,
            "adapted": false
          }
        }
      },
      "skills": {
        "accounting": {
          "value": 10,
          "failure": false
        },
        "alertness": {
          "value": 20,
          "failure": false
        },
        "anthropology": {
          "value": 0,
          "failure": false
        },
        "archeology": {
          "value": 10,
          "failure": false
        },
        "artillery": {
          "value": 0,
          "failure": false
        },
        "athletics": {
          "value": 30,
          "failure": false
        },
        "bureaucracy": {
          "value": 10,
          "failure": false
        },
        "computer_science": {
          "value": 0,
          "failure": false
        },
        "criminology": {
          "value": 0,
          "failure": false
        },
        "demolitions": {
          "value": 0,
          "failure": false
        },
        "disguise": {
          "value": 10,
          "failure": false
        },
        "dodge": {
          "value": 30,
          "failure": false
        },
        "drive": {
          "value": 20,
          "failure": false
        },
        "firearms": {
          "value": 20,
          "failure": false
        },
        "first_aid": {
          "value": 10,
          "failure": false
        },
        "forensics": {
          "value": 0,
          "failure": false
        },
        "heavy_machinery": {
          "value": 10,
          "failure": false
        },
        "heavy_weapons": {
          "value": 0,
          "failure": false
        },
        "history": {
          "value": 60,
          "failure": false
        },
        "humint": {
          "value": 40,
          "failure": false
        },
        "law": {
          "value": 15,
          "failure": false
        },
        "medicine": {
          "value": 0,
          "failure": false
        },
        "melee_weapons": {
          "value": 25,
          "failure": false
        },
        "navigate": {
          "value": 10,
          "failure": false
        },
        "occult": {
          "value": 60,
          "failure": false
        },
        "persuade": {
          "value": 40,
          "failure": false
        },
        "pharmacy": {
          "value": 0,
          "failure": false
        },
        "psychotherapy": {
          "value": 10,
          "failure": false
        },
        "ride": {
          "value": 10,
          "failure": false
        },
        "search": {
          "value": 20,
          "failure": false
        },
        "sigint": {
          "value": 0,
          "failure": false
        },
        "stealth": {
          "value": 10,
          "failure": false
        },
        "surgery": {
          "value": 0,
          "failure": false
        },
        "survival": {
          "value": 10,
          "failure": false
        },
        "swim": {
          "value": 20,
          "failure": false
        },
        "unarmed_combat": {
          "value": 40,
          "failure": false
        },
        "unnatural": {
          "value": 11,
          "failure": false
        }
      },
      "typedSkills": {
        "art1": {
          "name": "Art",
          "subtype": "History",
          "value": 35,
          "failure": false,
          "group": "art"
        },
        "foreignLanguage1": {
          "name": "Foreign Language",
          "subtype": "English",
          "value": 60,
          "failure": false,
          "group": "foreignLanguage"
        },
        "foreignLanguage2": {
          "name": "Foreign Language",
          "subtype": "French",
          "value": 60,
          "failure": false,
          "group": "foreignLanguage"
        },
        "foreignLanguage3": {
          "name": "Foreign Language",
          "subtype": "German",
          "value": 15,
          "failure": false,
          "group": "foreignLanguage"
        },
        "foreignLanguage4": {
          "name": "Foreign Language",
          "subtype": "Italian",
          "value": 40,
          "failure": false,
          "group": "foreignLanguage"
        },
        "foreignLanguage5": {
          "name": "Foreign Language",
          "subtype": "Spanish",
          "value": 60,
          "failure": false,
          "group": "foreignLanguage"
        },
        "foreignLanguage6": {
          "name": "Foreign Language",
          "subtype": "Tartessian",
          "value": 70,
          "failure": false,
          "group": "foreignLanguage"
        },
        "science1": {
          "name": "Science",
          "subtype": "Astronomy",
          "value": 30,
          "failure": false,
          "group": "science"
        },
        "science2": {
          "name": "Science",
          "subtype": "Chemistry",
          "value": 10,
          "failure": false,
          "group": "science"
        }
      },
      "biography": {
        "profession": "Night Manager / Repeater / Pretender to the Crown",
        "employer": "",
        "nationality": "",
        "sex": "",
        "age": "",
        "education": "",
        "personalDetails": "<p><strong>Aliases:</strong> Night Manager (of the Macallistar Building / Hotel Broadalbin), Mr. Castaigne (used by tenants), J.C. (Thomas Manuel&#x27;s childhood name for him)</p>\n<p><strong>Role:</strong> Night Manager / Repeater / Pretender to the Crown</p>\n<p><strong>Nature:</strong> unnatural</p>\n<p><strong>Location:</strong> loc_castaigne_apartment</p>\n<hr/>\n<h2>Player Description</h2>\n<p>An old man in clothes that look Victorian answers the door \u2014 impossibly old-fashioned, right down to his slippers. He has white unkempt hair and walks with a bad limp. He introduces himself as the building&#x27;s night manager, a Mister Castaigne. His English is excellent but faintly accented. He has a kind smile that somehow feels like it was assembled by committee.</p>\n<hr/>\n<section class=\"secret\">\n<h2>Handler Notes</h2>\n<p>STUCK: repeats patterns (considers the Imperial Dynasty, drinks, wanders the Night Floors performing small chores). ENDLESS DOORS: can always find exits via hidden passages, secret doors, or new doors; others may follow gaining +1 Corruption. INFINITE: human-fragile but returns unharmed after being killed or injured; still recalls who harmed him. WHERE&#x27;S MY BOTTLE?: obsessed with his Soul Bottle in the Whisper Labyrinth; his frailty and fear of rivals prevents him from undertaking the expedition. His locked bedroom contains The Imperial Dynasty of America, a bundle of ragged worn handwritten pages tracking a complex lineage \u2014 Castaigne&#x27;s own name is inside. If discovered, he explodes into murderous frenzy crying &#x27;No! No! The crown is mine! Mine!&#x27; Once restrained he only pouts and mumbles in an unknown language. His old newspapers/magazines (none newer than 1940) include headlines pointing to Carcosa&#x27;s nature: e.g., &#x27;Russo-Germanic Pact Crumbles, Vienna Liberated&#x27; (New York Tribune, 1 JUL 1923). The sheer volume and apparent age of these papers cost 0/1 SAN from the unnatural. EXEUNT note: The 1947 family photo in basement storage shows Lundine family with a large mastiff captioned &#x27;Family w Abraham, Christmas 47&#x27; \u2014 seeing this costs 0/1 SAN from the unnatural. The Superintendent&#x27;s party occurs every night \u2014 Castaigne says &#x27;the Super lives upstairs and is having a party tonight.&#x27; He can lead 0-SAN Agents to this fatal encounter. Native language Tartessian 70% \u2014 he is the only character who speaks it as a native tongue. Motivations: To become King of America. To enlist aid to destroy cousin Hildred Castaigne. To kill all other pretenders to the throne. To locate his Soul Bottle.</p>\n<h3>Sanity Effects</h3>\n<p><strong>Trigger:</strong> Discovering The Imperial Dynasty of America in Castaigne&#x27;s locked bedroom</p>\n<p><strong>SAN Loss:</strong> 0/0</p>\n<p>No direct SAN loss from reading the document, but Castaigne&#x27;s murderous rage response to discovery is the threat. Seeing one&#x27;s own name in his lineage rolls costs 0/1 SAN from the unnatural and grants +1 Corruption.</p>\n<h3>Relationships</h3>\n<ul>\n<li><strong>Cousin / Rival:</strong> npc_hildred_castaigne \u2014 Hildred Castaigne is another resident of the Night World. The two have met on occasion. Each bitterly disputes the other&#x27;s claim to the crown of America. Henri considers Hildred a rival pretender to be destroyed.</li>\n<li><strong>Night World Tenant:</strong> npc_thomas_manuel \u2014 Manuel calls him &#x27;Mister Castaigne&#x27; and refers to him as the building&#x27;s night manager. Castaigne lets Manuel work in the basement. Manuel knew him as childhood imaginary friend &#x27;J.C.&#x27;</li>\n<li><strong>Night World Associate:</strong> npc_mark_roark \u2014 Roark knows him as the night manager of Hotel Broadalbin. Describes him as &#x27;a dago.&#x27;</li>\n<li><strong>Ancestor:</strong> npc_gabriel_castaigne \u2014 Gabriel Castaigne (clockmaker, 15th century) appears to be an ancestor; the &#x27;G. CASTAIGNE&#x27; maker&#x27;s mark on the Like Clockwork manifestation&#x27;s automaton pieces, dated FR. 1435, connects to him.</li>\n<li><strong>Ancestor:</strong> npc_augustus_chastaigne \u2014 Augustus Chastaigne (1402-1403) appears to be the earliest known ancestor; A Horse By Degrees is signed &#x27;A. Chastaigne, G. Castaigne, H. Castaigne.&#x27;</li>\n</ul>\n</section>",
        "physicalDescription": "An old man in clothes that look Victorian answers the door \u2014 impossibly old-fashioned, right down to his slippers. He has white unkempt hair and walks with a bad limp. He introduces himself as the building's night manager, a Mister Castaigne. His English is excellent but faintly accented. He has a kind smile that somehow feels like it was assembled by committee."
      },
      "physical": {
        "description": "",
        "wounds": ""
      }
    },
    "prototypeToken": {
      "name": "Henri de Calvados Castaigne",
      "displayName": 20,
      "actorLink": true,
      "width": 1,
      "height": 1,
      "texture": {
        "src": "modules/impossible-landscapes/assets/tokens/npc_henri_castaigne.webp",
        "scaleX": 1,
        "scaleY": 1
      },
      "disposition": 0,
      "displayBars": 40,
      "bar1": {
        "attribute": "health"
      },
      "bar2": {
        "attribute": "wp"
      },
      "sight": {
        "enabled": false,
        "range": 0
      },
      "lockRotation": false,
      "rotation": 0,
      "alpha": 1
    },
    "items": [
      {
        "_id": "EGyC5BZH1qTosUUS",
        "name": "Letter opener",
        "type": "weapon",
        "img": "systems/deltagreen/assets/icons/melee.svg",
        "system": {
          "skill": "melee_weapons",
          "damage": "1D4-1",
          "lethality": 0,
          "isLethal": false,
          "range": "melee",
          "ammo": "",
          "equipped": true
        },
        "effects": [],
        "flags": {
          "impossible-landscapes": {
            "bookSkillPercent": 25,
            "armorPiercing": 1
          }
        },
        "sort": 0
      }
    ],
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": {
      "default": 0
    },
    "flags": {
      "impossible-landscapes": {
        "sourceNpcId": "npc_henri_castaigne",
        "nature": "unnatural",
        "partsAppearing": [
          "Part 1"
        ],
        "tags": [
          "repeater",
          "night_floors",
          "night_manager",
          "king_in_yellow",
          "carcosa",
          "tartessian",
          "immortal",
          "soul_bottle",
          "unnatural",
          "shifting_identity",
          "recurring"
        ]
      }
    },
    "_stats": {
      "coreVersion": "12.331",
      "systemId": "deltagreen",
      "systemVersion": "1.6.4",
      "createdTime": 1712700000000,
      "modifiedTime": 1712700000000,
      "lastModifiedBy": "ILModuleGenerator"
    }
  },
  {
    "_id": "wEqWAGIO9pEE3ukJ",
    "name": "Louis Adar Post",
    "type": "npc",
    "img": "modules/impossible-landscapes/assets/portraits/npc_louis_post.webp",
    "system": {
      "statistics": {
        "str": {
          "value": 11,
          "distinguishing_feature": ""
        },
        "con": {
          "value": 11,
          "distinguishing_feature": ""
        },
        "dex": {
          "value": 13,
          "distinguishing_feature": ""
        },
        "int": {
          "value": 12,
          "distinguishing_feature": ""
        },
        "pow": {
          "value": 14,
          "distinguishing_feature": ""
        },
        "cha": {
          "value": 14,
          "distinguishing_feature": ""
        }
      },
      "health": {
        "value": 11,
        "min": 0,
        "max": 11
      },
      "wp": {
        "value": 14,
        "min": 0,
        "max": 14
      },
      "sanity": {
        "value": 0,
        "max": 99,
        "currentBreakingPoint": 0,
        "adaptations": {
          "violence": {
            "incident1": false,
            "incident2": false,
            "incident3": false,
            "adapted": false
          },
          "helplessness": {
            "incident1": false,
            "incident2": false,
            "incident3": false,
            "adapted": false
          }
        }
      },
      "skills": {
        "accounting": {
          "value": 10,
          "failure": false
        },
        "alertness": {
          "value": 20,
          "failure": false
        },
        "anthropology": {
          "value": 0,
          "failure": false
        },
        "archeology": {
          "value": 0,
          "failure": false
        },
        "artillery": {
          "value": 0,
          "failure": false
        },
        "athletics": {
          "value": 30,
          "failure": false
        },
        "bureaucracy": {
          "value": 10,
          "failure": false
        },
        "computer_science": {
          "value": 30,
          "failure": false
        },
        "criminology": {
          "value": 0,
          "failure": false
        },
        "demolitions": {
          "value": 0,
          "failure": false
        },
        "disguise": {
          "value": 10,
          "failure": false
        },
        "dodge": {
          "value": 30,
          "failure": false
        },
        "drive": {
          "value": 20,
          "failure": false
        },
        "firearms": {
          "value": 20,
          "failure": false
        },
        "first_aid": {
          "value": 30,
          "failure": false
        },
        "forensics": {
          "value": 0,
          "failure": false
        },
        "heavy_machinery": {
          "value": 10,
          "failure": false
        },
        "heavy_weapons": {
          "value": 0,
          "failure": false
        },
        "history": {
          "value": 30,
          "failure": false
        },
        "humint": {
          "value": 40,
          "failure": false
        },
        "law": {
          "value": 0,
          "failure": false
        },
        "medicine": {
          "value": 0,
          "failure": false
        },
        "melee_weapons": {
          "value": 50,
          "failure": false
        },
        "navigate": {
          "value": 10,
          "failure": false
        },
        "occult": {
          "value": 10,
          "failure": false
        },
        "persuade": {
          "value": 40,
          "failure": false
        },
        "pharmacy": {
          "value": 0,
          "failure": false
        },
        "psychotherapy": {
          "value": 10,
          "failure": false
        },
        "ride": {
          "value": 10,
          "failure": false
        },
        "search": {
          "value": 20,
          "failure": false
        },
        "sigint": {
          "value": 0,
          "failure": false
        },
        "stealth": {
          "value": 10,
          "failure": false
        },
        "surgery": {
          "value": 0,
          "failure": false
        },
        "survival": {
          "value": 10,
          "failure": false
        },
        "swim": {
          "value": 30,
          "failure": false
        },
        "unarmed_combat": {
          "value": 40,
          "failure": false
        },
        "unnatural": {
          "value": 6,
          "failure": false
        }
      },
      "typedSkills": {
        "art1": {
          "name": "Art",
          "subtype": "Drawing",
          "value": 60,
          "failure": false,
          "group": "art"
        },
        "art2": {
          "name": "Art",
          "subtype": "Painting",
          "value": 70,
          "failure": false,
          "group": "art"
        },
        "craft1": {
          "name": "Craft",
          "subtype": "Woodworking",
          "value": 20,
          "failure": false,
          "group": "craft"
        },
        "foreignLanguage1": {
          "name": "Foreign Language",
          "subtype": "French",
          "value": 20,
          "failure": false,
          "group": "foreignLanguage"
        }
      },
      "biography": {
        "profession": "Night Tenant / Psychotic Illustrator",
        "employer": "",
        "nationality": "",
        "sex": "",
        "age": "",
        "education": "",
        "personalDetails": "<p><strong>Role:</strong> Night Tenant / Psychotic Illustrator</p>\n<p><strong>Nature:</strong> unnatural</p>\n<p><strong>Location:</strong> loc_macallistar_building</p>\n<hr/>\n<h2>Player Description</h2>\n<p>Louis Post is a somewhat handsome but disheveled man with ink-stained fingers and a messy hair swoop. His apartment is genuinely chaotic \u2014 pizza boxes, paint, laundry, a garbage situation that has gone well beyond the kitchen. During the day he&#x27;s pleasant, self-deprecating, and cooperative, which makes the squalor feel more like neglect than threat.</p>\n<hr/>\n<section class=\"secret\">\n<h2>Handler Notes</h2>\n<p>The baroque-bordered antique mirror hidden under Post&#x27;s bed is French or Swiss, late 1800s, with no markings. Looking in it for 10+ minutes at night reveals a vague figure making dance-like motions \u2014 costs 0/1D4 SAN from the unnatural and adds +1 Corruption. Post&#x27;s charcoal drawings of Asa Daribondi in the Drowning Room are mechanically significant: Agents who add items to these drawings with a successful Art roll will see those items &#x27;reflected in reality&#x27; when they eventually visit Hotel Broadalbin. This is one of the most powerful indirect-action mechanics in Part 1. The EXEUNT: THE DROWNING ROOM sidebar notes handlers may add hints \u2014 slots on ceilings of one image (track-mounted marionette wires), a door number in the background, identifiable bellhops, children or people recognizable from elsewhere in the Night World. The food anomaly applies to his apartment as well. He keeps a steak knife in his pocket at night for exactly this sort of confrontation. His &#x27;Passing Strange&#x27; note: born 4 APR 1968, the same day Thomas Wright met his future wife Ellen Caladette at the Dorchester House School in Boston. Motivations: To complete his &#x27;work.&#x27; To find his Soul Bottle.</p>\n<h3>Sanity Effects</h3>\n<p><strong>Trigger:</strong> Examining Post&#x27;s charcoal work at night</p>\n<p><strong>SAN Loss:</strong> 0/4</p>\n<p>SAN roll vs violence; failure causes 0/1D4 SAN loss. The drawings depict drowned babies, clawed hands in basins, umbilical cords around necks. Hundreds of pages.</p>\n<h3>Relationships</h3>\n<ul>\n<li><strong>Unconscious Artistic Subject:</strong> npc_asa_daribondi \u2014 Post&#x27;s charcoal drawings are of Asa Daribondi in his &#x27;drowning room&#x27; in Hotel Broadalbin where he carries out his heinous crimes for all eternity. Agents who have seen Daribondi in photographs will recognize him in the drawings.</li>\n<li><strong>Agent / Representative:</strong> npc_mike_severs \u2014 Post&#x27;s illustration agent Mike Severs considers Post&#x27;s career effectively over due to his behavior over the last three months. Has no personal interest in Post&#x27;s well-being.</li>\n</ul>\n</section>",
        "physicalDescription": "Louis Post is a somewhat handsome but disheveled man with ink-stained fingers and a messy hair swoop. His apartment is genuinely chaotic \u2014 pizza boxes, paint, laundry, a garbage situation that has gone well beyond the kitchen. During the day he's pleasant, self-deprecating, and cooperative, which makes the squalor feel more like neglect than threat."
      },
      "physical": {
        "description": "",
        "wounds": ""
      }
    },
    "prototypeToken": {
      "name": "Louis Adar Post",
      "displayName": 20,
      "actorLink": true,
      "width": 1,
      "height": 1,
      "texture": {
        "src": "modules/impossible-landscapes/assets/tokens/npc_louis_post.webp",
        "scaleX": 1,
        "scaleY": 1
      },
      "disposition": -1,
      "displayBars": 40,
      "bar1": {
        "attribute": "health"
      },
      "bar2": {
        "attribute": "wp"
      },
      "sight": {
        "enabled": false,
        "range": 0
      },
      "lockRotation": false,
      "rotation": 0,
      "alpha": 1
    },
    "items": [
      {
        "_id": "oUCRBrQtXmQ68qDt",
        "name": "Unarmed",
        "type": "weapon",
        "img": "systems/deltagreen/assets/icons/melee.svg",
        "system": {
          "skill": "unarmed_combat",
          "damage": "1D4-1",
          "lethality": 0,
          "isLethal": false,
          "range": "melee",
          "ammo": "",
          "equipped": true
        },
        "effects": [],
        "flags": {
          "impossible-landscapes": {
            "bookSkillPercent": 40,
            "armorPiercing": 0
          }
        },
        "sort": 0
      },
      {
        "_id": "kiwN41Kks3gAyDFa",
        "name": "Carving knife",
        "type": "weapon",
        "img": "systems/deltagreen/assets/icons/melee.svg",
        "system": {
          "skill": "melee_weapons",
          "damage": "1D6",
          "lethality": 0,
          "isLethal": false,
          "range": "melee",
          "ammo": "",
          "equipped": true
        },
        "effects": [],
        "flags": {
          "impossible-landscapes": {
            "bookSkillPercent": 50,
            "armorPiercing": 3
          }
        },
        "sort": 0
      }
    ],
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": {
      "default": 0
    },
    "flags": {
      "impossible-landscapes": {
        "sourceNpcId": "npc_louis_post",
        "nature": "unnatural",
        "partsAppearing": [
          "Part 1"
        ],
        "tags": [
          "night_tenant",
          "infected",
          "macallistar",
          "king_in_yellow",
          "night_floors",
          "hotel_broadalbin",
          "dual_nature",
          "san_risk",
          "violent"
        ]
      }
    },
    "_stats": {
      "coreVersion": "12.331",
      "systemId": "deltagreen",
      "systemVersion": "1.6.4",
      "createdTime": 1712700000000,
      "modifiedTime": 1712700000000,
      "lastModifiedBy": "ILModuleGenerator"
    }
  },
  {
    "_id": "vddkduUYc2hfzE5F",
    "name": "Mark Armin Roark",
    "type": "npc",
    "img": "modules/impossible-landscapes/assets/portraits/npc_mark_roark.webp",
    "system": {
      "statistics": {
        "str": {
          "value": 14,
          "distinguishing_feature": ""
        },
        "con": {
          "value": 13,
          "distinguishing_feature": ""
        },
        "dex": {
          "value": 10,
          "distinguishing_feature": ""
        },
        "int": {
          "value": 11,
          "distinguishing_feature": ""
        },
        "pow": {
          "value": 9,
          "distinguishing_feature": ""
        },
        "cha": {
          "value": 11,
          "distinguishing_feature": ""
        }
      },
      "health": {
        "value": 14,
        "min": 0,
        "max": 14
      },
      "wp": {
        "value": 9,
        "min": 0,
        "max": 9
      },
      "sanity": {
        "value": 0,
        "max": 99,
        "currentBreakingPoint": 0,
        "adaptations": {
          "violence": {
            "incident1": false,
            "incident2": false,
            "incident3": false,
            "adapted": false
          },
          "helplessness": {
            "incident1": false,
            "incident2": false,
            "incident3": false,
            "adapted": false
          }
        }
      },
      "skills": {
        "accounting": {
          "value": 20,
          "failure": false
        },
        "alertness": {
          "value": 30,
          "failure": false
        },
        "anthropology": {
          "value": 0,
          "failure": false
        },
        "archeology": {
          "value": 0,
          "failure": false
        },
        "artillery": {
          "value": 0,
          "failure": false
        },
        "athletics": {
          "value": 30,
          "failure": false
        },
        "bureaucracy": {
          "value": 30,
          "failure": false
        },
        "computer_science": {
          "value": 0,
          "failure": false
        },
        "criminology": {
          "value": 0,
          "failure": false
        },
        "demolitions": {
          "value": 0,
          "failure": false
        },
        "disguise": {
          "value": 10,
          "failure": false
        },
        "dodge": {
          "value": 30,
          "failure": false
        },
        "drive": {
          "value": 30,
          "failure": false
        },
        "firearms": {
          "value": 30,
          "failure": false
        },
        "first_aid": {
          "value": 10,
          "failure": false
        },
        "forensics": {
          "value": 0,
          "failure": false
        },
        "heavy_machinery": {
          "value": 10,
          "failure": false
        },
        "heavy_weapons": {
          "value": 0,
          "failure": false
        },
        "history": {
          "value": 30,
          "failure": false
        },
        "humint": {
          "value": 30,
          "failure": false
        },
        "law": {
          "value": 0,
          "failure": false
        },
        "medicine": {
          "value": 0,
          "failure": false
        },
        "melee_weapons": {
          "value": 30,
          "failure": false
        },
        "navigate": {
          "value": 10,
          "failure": false
        },
        "occult": {
          "value": 10,
          "failure": false
        },
        "persuade": {
          "value": 50,
          "failure": false
        },
        "pharmacy": {
          "value": 0,
          "failure": false
        },
        "psychotherapy": {
          "value": 10,
          "failure": false
        },
        "ride": {
          "value": 30,
          "failure": false
        },
        "search": {
          "value": 40,
          "failure": false
        },
        "sigint": {
          "value": 0,
          "failure": false
        },
        "stealth": {
          "value": 30,
          "failure": false
        },
        "surgery": {
          "value": 0,
          "failure": false
        },
        "survival": {
          "value": 10,
          "failure": false
        },
        "swim": {
          "value": 20,
          "failure": false
        },
        "unarmed_combat": {
          "value": 50,
          "failure": false
        },
        "unnatural": {
          "value": 0,
          "failure": false
        }
      },
      "typedSkills": {
        "craft1": {
          "name": "Craft",
          "subtype": "Electronics",
          "value": 10,
          "failure": false,
          "group": "craft"
        },
        "craft2": {
          "name": "Craft",
          "subtype": "Mechanics",
          "value": 30,
          "failure": false,
          "group": "craft"
        },
        "science1": {
          "name": "Science",
          "subtype": "Mathematics",
          "value": 10,
          "failure": false,
          "group": "science"
        },
        "science2": {
          "name": "Science",
          "subtype": "Earth Science",
          "value": 30,
          "failure": false,
          "group": "science"
        }
      },
      "biography": {
        "profession": "Repeater / 1930s Night World Inhabitant",
        "employer": "",
        "nationality": "",
        "sex": "",
        "age": "",
        "education": "",
        "personalDetails": "<p><strong>Role:</strong> Repeater / 1930s Night World Inhabitant</p>\n<p><strong>Nature:</strong> unnatural</p>\n<p><strong>Location:</strong> loc_smoking_lounge</p>\n<hr/>\n<h2>Player Description</h2>\n<p>A fat man in a seersucker suit is nursing a drink and a cigar in the Smoking Lounge. He has a profoundly fake wig of red hair sitting on his head. He looks like he was last fashionable in 1933 \u2014 because he was. He sizes you up immediately and his opinion is visibly unfavorable.</p>\n<hr/>\n<section class=\"secret\">\n<h2>Handler Notes</h2>\n<p>Roark&#x27;s missing persons file: Mark Armin Roark. Last known address: Hotel Broadalbin, New York, New York. No street address given. Missing 1933 (Bureaucracy roll to find this). He can be a useful source of information about the Night World&#x27;s geography and residents \u2014 if Agents are patient with his abrasive personality. He has been there before and knows the Whisper Labyrinth exists but can no longer find it. He is obsessed with locating his Soul Bottle there. STUCK ability: repeats patterns of his former life (drinks, complains, chews cigars, wanders the Night Floors) until someone new comes into contact with him. ENDLESS DOORS: can always find a way out via hidden passages or new doors; others may follow gaining +1 Corruption but will soon find their progress hindered as Roark disappears. INFINITE: shot, stabbed, beaten or burned like a normal human (with SAN consequences) but after a while returns unharmed, though he remembers the source of such mistreatment. The EXEUNT &#x27;What&#x27;s What&#x27; sidebar includes detailed guidance for the scene where Roark treats the highest-Corruption Agent as a familiar friend. Motivations: To find his Soul Bottle.</p>\n<h3>Relationships</h3>\n<ul>\n<li><strong>Night World Acquaintance:</strong> npc_abigail_wright \u2014 Calls her &#x27;Gail.&#x27; States she lived with &#x27;a creep of a salesman&#x27; on Six before &#x27;moving on.&#x27; This confirms Wright&#x27;s trajectory through the Night Floors.</li>\n<li><strong>Night World Associate:</strong> npc_henri_castaigne \u2014 Knows Castaigne as the night manager of Hotel Broadalbin. Will guide Agents to his apartment. Uses ethnic slur for him.</li>\n<li><strong>Night World Associate:</strong> npc_encyclopedia_salesman \u2014 The &#x27;creep of a salesman&#x27; he describes Wright as having lived with.</li>\n</ul>\n</section>",
        "physicalDescription": "A fat man in a seersucker suit is nursing a drink and a cigar in the Smoking Lounge. He has a profoundly fake wig of red hair sitting on his head. He looks like he was last fashionable in 1933 \u2014 because he was. He sizes you up immediately and his opinion is visibly unfavorable."
      },
      "physical": {
        "description": "",
        "wounds": ""
      }
    },
    "prototypeToken": {
      "name": "Mark Armin Roark",
      "displayName": 20,
      "actorLink": true,
      "width": 1,
      "height": 1,
      "texture": {
        "src": "modules/impossible-landscapes/assets/tokens/npc_mark_roark.webp",
        "scaleX": 1,
        "scaleY": 1
      },
      "disposition": 0,
      "displayBars": 40,
      "bar1": {
        "attribute": "health"
      },
      "bar2": {
        "attribute": "wp"
      },
      "sight": {
        "enabled": false,
        "range": 0
      },
      "lockRotation": false,
      "rotation": 0,
      "alpha": 1
    },
    "items": [
      {
        "_id": "vNB4ONVvXJckEPe0",
        "name": "Unarmed",
        "type": "weapon",
        "img": "systems/deltagreen/assets/icons/melee.svg",
        "system": {
          "skill": "unarmed_combat",
          "damage": "1D4",
          "lethality": 0,
          "isLethal": false,
          "range": "melee",
          "ammo": "",
          "equipped": true
        },
        "effects": [],
        "flags": {
          "impossible-landscapes": {
            "bookSkillPercent": 50,
            "armorPiercing": 0
          }
        },
        "sort": 0
      }
    ],
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": {
      "default": 0
    },
    "flags": {
      "impossible-landscapes": {
        "sourceNpcId": "npc_mark_roark",
        "nature": "unnatural",
        "partsAppearing": [
          "Part 1"
        ],
        "tags": [
          "repeater",
          "night_floors",
          "hotel_broadalbin",
          "1930s",
          "immortal",
          "soul_bottle",
          "unnatural"
        ]
      }
    },
    "_stats": {
      "coreVersion": "12.331",
      "systemId": "deltagreen",
      "systemVersion": "1.6.4",
      "createdTime": 1712700000000,
      "modifiedTime": 1712700000000,
      "lastModifiedBy": "ILModuleGenerator"
    }
  },
  {
    "_id": "xybP2hGskTJK0HGV",
    "name": "Michelle Vanfitz",
    "type": "npc",
    "img": "modules/impossible-landscapes/assets/portraits/npc_michelle_vanfitz.webp",
    "system": {
      "statistics": {
        "str": {
          "value": 11,
          "distinguishing_feature": ""
        },
        "con": {
          "value": 13,
          "distinguishing_feature": ""
        },
        "dex": {
          "value": 12,
          "distinguishing_feature": ""
        },
        "int": {
          "value": 12,
          "distinguishing_feature": ""
        },
        "pow": {
          "value": 14,
          "distinguishing_feature": ""
        },
        "cha": {
          "value": 11,
          "distinguishing_feature": ""
        }
      },
      "health": {
        "value": 12,
        "min": 0,
        "max": 12
      },
      "wp": {
        "value": 14,
        "min": 0,
        "max": 14
      },
      "sanity": {
        "value": 0,
        "max": 99,
        "currentBreakingPoint": 0,
        "adaptations": {
          "violence": {
            "incident1": false,
            "incident2": false,
            "incident3": false,
            "adapted": false
          },
          "helplessness": {
            "incident1": false,
            "incident2": false,
            "incident3": false,
            "adapted": false
          }
        }
      },
      "skills": {
        "accounting": {
          "value": 30,
          "failure": false
        },
        "alertness": {
          "value": 20,
          "failure": false
        },
        "anthropology": {
          "value": 0,
          "failure": false
        },
        "archeology": {
          "value": 0,
          "failure": false
        },
        "artillery": {
          "value": 0,
          "failure": false
        },
        "athletics": {
          "value": 30,
          "failure": false
        },
        "bureaucracy": {
          "value": 30,
          "failure": false
        },
        "computer_science": {
          "value": 40,
          "failure": false
        },
        "criminology": {
          "value": 0,
          "failure": false
        },
        "demolitions": {
          "value": 0,
          "failure": false
        },
        "disguise": {
          "value": 10,
          "failure": false
        },
        "dodge": {
          "value": 30,
          "failure": false
        },
        "drive": {
          "value": 50,
          "failure": false
        },
        "firearms": {
          "value": 20,
          "failure": false
        },
        "first_aid": {
          "value": 10,
          "failure": false
        },
        "forensics": {
          "value": 0,
          "failure": false
        },
        "heavy_machinery": {
          "value": 10,
          "failure": false
        },
        "heavy_weapons": {
          "value": 0,
          "failure": false
        },
        "history": {
          "value": 10,
          "failure": false
        },
        "humint": {
          "value": 30,
          "failure": false
        },
        "law": {
          "value": 10,
          "failure": false
        },
        "medicine": {
          "value": 0,
          "failure": false
        },
        "melee_weapons": {
          "value": 45,
          "failure": false
        },
        "navigate": {
          "value": 10,
          "failure": false
        },
        "occult": {
          "value": 10,
          "failure": false
        },
        "persuade": {
          "value": 40,
          "failure": false
        },
        "pharmacy": {
          "value": 10,
          "failure": false
        },
        "psychotherapy": {
          "value": 10,
          "failure": false
        },
        "ride": {
          "value": 10,
          "failure": false
        },
        "search": {
          "value": 20,
          "failure": false
        },
        "sigint": {
          "value": 0,
          "failure": false
        },
        "stealth": {
          "value": 10,
          "failure": false
        },
        "surgery": {
          "value": 0,
          "failure": false
        },
        "survival": {
          "value": 10,
          "failure": false
        },
        "swim": {
          "value": 20,
          "failure": false
        },
        "unarmed_combat": {
          "value": 40,
          "failure": false
        },
        "unnatural": {
          "value": 10,
          "failure": false
        }
      },
      "typedSkills": {
        "art1": {
          "name": "Art",
          "subtype": "Poetry",
          "value": 50,
          "failure": false,
          "group": "art"
        },
        "art2": {
          "name": "Art",
          "subtype": "Writing",
          "value": 40,
          "failure": false,
          "group": "art"
        },
        "art3": {
          "name": "Art",
          "subtype": "Feminist Literature",
          "value": 55,
          "failure": false,
          "group": "art"
        },
        "foreignLanguage1": {
          "name": "Foreign Language",
          "subtype": "French",
          "value": 20,
          "failure": false,
          "group": "foreignLanguage"
        },
        "foreignLanguage2": {
          "name": "Foreign Language",
          "subtype": "Spanish",
          "value": 45,
          "failure": false,
          "group": "foreignLanguage"
        },
        "foreignLanguage3": {
          "name": "Foreign Language",
          "subtype": "Tartessian",
          "value": 12,
          "failure": false,
          "group": "foreignLanguage"
        }
      },
      "biography": {
        "profession": "Night Tenant / Infected Feminist Author",
        "employer": "",
        "nationality": "",
        "sex": "",
        "age": "",
        "education": "",
        "personalDetails": "<p><strong>Role:</strong> Night Tenant / Infected Feminist Author</p>\n<p><strong>Nature:</strong> unnatural</p>\n<p><strong>Location:</strong> loc_macallistar_building</p>\n<hr/>\n<h2>Player Description</h2>\n<p>Michelle Vanfitz is a squat, perpetually frowning woman in hemp clothing, beads, and non-prescription glasses. She radiates hostility from the moment she opens the door and shows no intention of being helpful. Her apartment is wall-to-wall bookshelves.</p>\n<hr/>\n<section class=\"secret\">\n<h2>Handler Notes</h2>\n<p>The Red Book in Vanfitz&#x27;s apartment is Wright&#x27;s original copy. No matter where it is taken during the day, it always reappears in her apartment after night falls. Agents can take it during the day without triggering a crisis, but it will be back. She has Foreign Language (Tartessian) at 12% \u2014 the only person in Part 1 who knows even a fragment of Tartessian, the language of Henri de Calvados Castaigne. The bookshelf-filled infinite rooms of her night apartment are accessible to Agents with sufficient Corruption, and contain many tomes: A World Without Doors (Emeline Fitzroy), A History of the Russo-Germanic Hegemony, The Reputation Book, Maude Goes to the Masked Ball, A Horse By Degrees, and English-Tartessian Dictionary. Each book has mechanical effects. Agents entering the Night Floors archway through her apartment for the first time (with no Corruption) gain +1 Corruption. She carries mace in her left hand at night (Alertness spots it). The tomahawk is recovered from a mounted rack over a fireplace in the far rooms of her Night Floors apartment. She fights to the death when cornered. Food anomaly applies as with other tenants. &#x27;Passing Strange&#x27;: born 6 MAY 1967, the same day ARTLIFE Corporation purchased the Macallistar Building from the Star Corporation. Motivations: To &#x27;move&#x27; upstairs. Obsession: To study The King in Yellow. To explore the Night Floors.</p>\n<h3>Relationships</h3>\n<ul>\n<li><strong>Neighbor / Confidante (Night):</strong> npc_abigail_wright \u2014 Currently holds Wright&#x27;s copy of the Red Book. By night, Vanfitz claims Wright left because of an abusive relationship with &#x27;that salesman&#x27; and that they live together &#x27;on Six.&#x27;</li>\n<li><strong>Night World Associate:</strong> npc_henri_castaigne \u2014 Implicit \u2014 she is connected to the Night Floors through her apartment&#x27;s transformation.</li>\n</ul>\n</section>",
        "physicalDescription": "Michelle Vanfitz is a squat, perpetually frowning woman in hemp clothing, beads, and non-prescription glasses. She radiates hostility from the moment she opens the door and shows no intention of being helpful. Her apartment is wall-to-wall bookshelves."
      },
      "physical": {
        "description": "",
        "wounds": ""
      }
    },
    "prototypeToken": {
      "name": "Michelle Vanfitz",
      "displayName": 20,
      "actorLink": true,
      "width": 1,
      "height": 1,
      "texture": {
        "src": "modules/impossible-landscapes/assets/tokens/npc_michelle_vanfitz.webp",
        "scaleX": 1,
        "scaleY": 1
      },
      "disposition": 0,
      "displayBars": 40,
      "bar1": {
        "attribute": "health"
      },
      "bar2": {
        "attribute": "wp"
      },
      "sight": {
        "enabled": false,
        "range": 0
      },
      "lockRotation": false,
      "rotation": 0,
      "alpha": 1
    },
    "items": [
      {
        "_id": "TB0kyFy2WynpYbfT",
        "name": "Unarmed",
        "type": "weapon",
        "img": "systems/deltagreen/assets/icons/melee.svg",
        "system": {
          "skill": "unarmed_combat",
          "damage": "1D4-1",
          "lethality": 0,
          "isLethal": false,
          "range": "melee",
          "ammo": "",
          "equipped": true
        },
        "effects": [],
        "flags": {
          "impossible-landscapes": {
            "bookSkillPercent": 40,
            "armorPiercing": 0
          }
        },
        "sort": 0
      },
      {
        "_id": "ytvuEMtvVI2Cl3GJ",
        "name": "Mace spray",
        "type": "weapon",
        "img": "systems/deltagreen/assets/icons/melee.svg",
        "system": {
          "skill": "melee_weapons",
          "damage": "Stuns target",
          "lethality": 0,
          "isLethal": false,
          "range": "melee",
          "ammo": "",
          "equipped": true
        },
        "effects": [],
        "flags": {
          "impossible-landscapes": {
            "bookSkillPercent": 60,
            "armorPiercing": 0
          }
        },
        "sort": 0
      },
      {
        "_id": "6cAYOth9f4DBGbAk",
        "name": "Sioux pipe tomahawk",
        "type": "weapon",
        "img": "systems/deltagreen/assets/icons/melee.svg",
        "system": {
          "skill": "melee_weapons",
          "damage": "1D8",
          "lethality": 0,
          "isLethal": false,
          "range": "melee",
          "ammo": "",
          "equipped": true
        },
        "effects": [],
        "flags": {
          "impossible-landscapes": {
            "bookSkillPercent": 45,
            "armorPiercing": 0
          }
        },
        "sort": 0
      }
    ],
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": {
      "default": 0
    },
    "flags": {
      "impossible-landscapes": {
        "sourceNpcId": "npc_michelle_vanfitz",
        "nature": "unnatural",
        "partsAppearing": [
          "Part 1"
        ],
        "tags": [
          "night_tenant",
          "infected",
          "macallistar",
          "king_in_yellow",
          "night_floors",
          "dual_nature",
          "violent",
          "books"
        ]
      }
    },
    "_stats": {
      "coreVersion": "12.331",
      "systemId": "deltagreen",
      "systemVersion": "1.6.4",
      "createdTime": 1712700000000,
      "modifiedTime": 1712700000000,
      "lastModifiedBy": "ILModuleGenerator"
    }
  },
  {
    "_id": "9RUqO0Vggpx5uIv2",
    "name": "Robert Robert Robert",
    "type": "npc",
    "img": "modules/impossible-landscapes/assets/portraits/npc_robert_robert_robert.webp",
    "system": {
      "statistics": {
        "str": {
          "value": 14,
          "distinguishing_feature": ""
        },
        "con": {
          "value": 12,
          "distinguishing_feature": ""
        },
        "dex": {
          "value": 11,
          "distinguishing_feature": ""
        },
        "int": {
          "value": 15,
          "distinguishing_feature": ""
        },
        "pow": {
          "value": 10,
          "distinguishing_feature": ""
        },
        "cha": {
          "value": 16,
          "distinguishing_feature": ""
        }
      },
      "health": {
        "value": 13,
        "min": 0,
        "max": 13
      },
      "wp": {
        "value": 10,
        "min": 0,
        "max": 10
      },
      "sanity": {
        "value": 0,
        "max": 99,
        "currentBreakingPoint": 0,
        "adaptations": {
          "violence": {
            "incident1": false,
            "incident2": false,
            "incident3": false,
            "adapted": false
          },
          "helplessness": {
            "incident1": false,
            "incident2": false,
            "incident3": false,
            "adapted": false
          }
        }
      },
      "skills": {
        "accounting": {
          "value": 10,
          "failure": false
        },
        "alertness": {
          "value": 40,
          "failure": false
        },
        "anthropology": {
          "value": 30,
          "failure": false
        },
        "archeology": {
          "value": 0,
          "failure": false
        },
        "artillery": {
          "value": 0,
          "failure": false
        },
        "athletics": {
          "value": 30,
          "failure": false
        },
        "bureaucracy": {
          "value": 30,
          "failure": false
        },
        "computer_science": {
          "value": 0,
          "failure": false
        },
        "criminology": {
          "value": 0,
          "failure": false
        },
        "demolitions": {
          "value": 0,
          "failure": false
        },
        "disguise": {
          "value": 10,
          "failure": false
        },
        "dodge": {
          "value": 30,
          "failure": false
        },
        "drive": {
          "value": 30,
          "failure": false
        },
        "firearms": {
          "value": 40,
          "failure": false
        },
        "first_aid": {
          "value": 10,
          "failure": false
        },
        "forensics": {
          "value": 0,
          "failure": false
        },
        "heavy_machinery": {
          "value": 10,
          "failure": false
        },
        "heavy_weapons": {
          "value": 0,
          "failure": false
        },
        "history": {
          "value": 70,
          "failure": false
        },
        "humint": {
          "value": 70,
          "failure": false
        },
        "law": {
          "value": 0,
          "failure": false
        },
        "medicine": {
          "value": 0,
          "failure": false
        },
        "melee_weapons": {
          "value": 30,
          "failure": false
        },
        "navigate": {
          "value": 10,
          "failure": false
        },
        "occult": {
          "value": 10,
          "failure": false
        },
        "persuade": {
          "value": 80,
          "failure": false
        },
        "pharmacy": {
          "value": 0,
          "failure": false
        },
        "psychotherapy": {
          "value": 10,
          "failure": false
        },
        "ride": {
          "value": 30,
          "failure": false
        },
        "search": {
          "value": 20,
          "failure": false
        },
        "sigint": {
          "value": 0,
          "failure": false
        },
        "stealth": {
          "value": 30,
          "failure": false
        },
        "surgery": {
          "value": 0,
          "failure": false
        },
        "survival": {
          "value": 10,
          "failure": false
        },
        "swim": {
          "value": 20,
          "failure": false
        },
        "unarmed_combat": {
          "value": 40,
          "failure": false
        },
        "unnatural": {
          "value": 0,
          "failure": false
        }
      },
      "typedSkills": {
        "art1": {
          "name": "Art",
          "subtype": "History",
          "value": 30,
          "failure": false,
          "group": "art"
        },
        "craft1": {
          "name": "Craft",
          "subtype": "Mechanics",
          "value": 20,
          "failure": false,
          "group": "craft"
        },
        "foreignLanguage1": {
          "name": "Foreign Language",
          "subtype": "Arabic",
          "value": 65,
          "failure": false,
          "group": "foreignLanguage"
        },
        "foreignLanguage2": {
          "name": "Foreign Language",
          "subtype": "Berber",
          "value": 45,
          "failure": false,
          "group": "foreignLanguage"
        },
        "foreignLanguage3": {
          "name": "Foreign Language",
          "subtype": "English",
          "value": 70,
          "failure": false,
          "group": "foreignLanguage"
        },
        "foreignLanguage4": {
          "name": "Foreign Language",
          "subtype": "Spanish",
          "value": 20,
          "failure": false,
          "group": "foreignLanguage"
        },
        "foreignLanguage5": {
          "name": "Foreign Language",
          "subtype": "Tartessian",
          "value": 15,
          "failure": false,
          "group": "foreignLanguage"
        }
      },
      "biography": {
        "profession": "Bookshop Proprietor / Repeater",
        "employer": "",
        "nationality": "",
        "sex": "",
        "age": "",
        "education": "",
        "personalDetails": "<p><strong>Aliases:</strong> B.R. Robert, Bob (he invites people to call him this), bibliopola</p>\n<p><strong>Role:</strong> Bookshop Proprietor / Repeater</p>\n<p><strong>Nature:</strong> unnatural</p>\n<p><strong>Location:</strong> loc_bookshop</p>\n<hr/>\n<h2>Player Description</h2>\n<p>A tall, well-dressed North African man materializes from between the bookshelves and introduces himself as B.R. Robert, with a smile like a puzzle-box and a business card \u2014 vellum, hand-pressed, no address. He insists you call him Bob. You find yourself telling him things you had no intention of sharing. His teeth are impossibly white. His eyes are faintly yellow.</p>\n<hr/>\n<section class=\"secret\">\n<h2>Handler Notes</h2>\n<p>The Bookshop&#x27;s proprietor is a key recurring character who appears in potentially all four operations (confirmed in Part 1 and referenced in later Exeunt sections). He sells copies of The King in Yellow in all its forms. He spreads rumors for &#x27;Mister Wilde&#x27; (a significant named entity in Part 2 who pulls strings behind the scenes). His ledgers contain only Jabberwocky in Arabic repeated for 1000+ pages, entries dated from &#x27;30 Ao\u00fbt 1895&#x27; onward; he claims an eidetic memory and dismisses the ledgers as &#x27;a game.&#x27; The earliest entry: &#x27;30 Ao\u00fbt 1895, Londres aujourd&#x27;hui&#x27; (&#x27;August 30, 1895, London today&#x27;). He always locks the strongbox before leaving the desk. The LITTLE DOOR sidebar: a red wooden door sized for a small child, 0.6m x 0.3m, visible behind a large stack of books, with letter slot. It connects to the Red Door in Dr. Elias Barbas&#x27;s bedroom closet. Sometimes without warning the letter slot opens and a copy of the Red Book drops through, accompanied by a man chanting on the far side: &#x27;There was a red man / in a red house / who had a red room / with a red door / he took a red book / and put it right through / and then the book / wasn&#x27;t there anymore.&#x27; Opening the door to see the speaker: the door beyond the bars shuts and Agents gain +1 Corruption. STUCK: reads, sells books, sometimes wanders the Night World through bookshop passages. ENDLESS DOORS: access to Missing Room and Night Floors of Macallistar; would not bring anyone to Carcosa willingly. WHERE&#x27;S MY BOTTLE?: convinced it will be revealed to him in time. Motivations: To sell copies of The King in Yellow. To spread rumors for Mister Wilde. To wait for his &#x27;revelation.&#x27;</p>\n<h3>Relationships</h3>\n<ul>\n<li><strong>Former Customer:</strong> npc_abigail_wright \u2014 His ledger records her visit on 22 FEB 1995. He recalls her from &#x27;the news.&#x27; He does not list the book she purchased in the ledger entry.</li>\n<li><strong>Night World Acquaintance:</strong> npc_asa_daribondi \u2014 Daribondi left his copy of Libro Secretorum Manifesta at the Bookshop in June 1921, hoping to release himself from his dark obsessions. Robert was there.</li>\n</ul>\n</section>",
        "physicalDescription": "A tall, well-dressed North African man materializes from between the bookshelves and introduces himself as B.R. Robert, with a smile like a puzzle-box and a business card \u2014 vellum, hand-pressed, no address. He insists you call him Bob. You find yourself telling him things you had no intention of sharing. His teeth are impossibly white. His eyes are faintly yellow."
      },
      "physical": {
        "description": "",
        "wounds": ""
      }
    },
    "prototypeToken": {
      "name": "Robert Robert Robert",
      "displayName": 20,
      "actorLink": true,
      "width": 1,
      "height": 1,
      "texture": {
        "src": "modules/impossible-landscapes/assets/tokens/npc_robert_robert_robert.webp",
        "scaleX": 1,
        "scaleY": 1
      },
      "disposition": 0,
      "displayBars": 40,
      "bar1": {
        "attribute": "health"
      },
      "bar2": {
        "attribute": "wp"
      },
      "sight": {
        "enabled": false,
        "range": 0
      },
      "lockRotation": false,
      "rotation": 0,
      "alpha": 1
    },
    "items": [
      {
        "_id": "KHYB3N4zuj0Xc1dy",
        "name": "Browning FN Model 1903 pistol",
        "type": "weapon",
        "img": "systems/deltagreen/assets/icons/pistol.svg",
        "system": {
          "skill": "firearms",
          "damage": "1D10",
          "lethality": 0,
          "isLethal": false,
          "range": "15m",
          "ammo": "",
          "equipped": true
        },
        "effects": [],
        "flags": {
          "impossible-landscapes": {
            "bookSkillPercent": 40,
            "armorPiercing": 0
          }
        },
        "sort": 0
      },
      {
        "_id": "wv2cr9nJtoVISQY9",
        "name": "Unarmed",
        "type": "weapon",
        "img": "systems/deltagreen/assets/icons/melee.svg",
        "system": {
          "skill": "unarmed_combat",
          "damage": "1D4",
          "lethality": 0,
          "isLethal": false,
          "range": "melee",
          "ammo": "",
          "equipped": true
        },
        "effects": [],
        "flags": {
          "impossible-landscapes": {
            "bookSkillPercent": 40,
            "armorPiercing": 0
          }
        },
        "sort": 0
      }
    ],
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": {
      "default": 0
    },
    "flags": {
      "impossible-landscapes": {
        "sourceNpcId": "npc_robert_robert_robert",
        "nature": "unnatural",
        "partsAppearing": [
          "Part 1",
          "Part 2",
          "Part 3"
        ],
        "tags": [
          "bookshop",
          "repeater",
          "night_world",
          "immortal",
          "soul_bottle",
          "unnatural",
          "the_play",
          "recurring",
          "king_in_yellow"
        ]
      }
    },
    "_stats": {
      "coreVersion": "12.331",
      "systemId": "deltagreen",
      "systemVersion": "1.6.4",
      "createdTime": 1712700000000,
      "modifiedTime": 1712700000000,
      "lastModifiedBy": "ILModuleGenerator"
    }
  },
  {
    "_id": "KIW4GeZrQVwkN5Ej",
    "name": "Roger Peter Carun",
    "type": "npc",
    "img": "modules/impossible-landscapes/assets/portraits/npc_roger_carun.webp",
    "system": {
      "statistics": {
        "str": {
          "value": 9,
          "distinguishing_feature": ""
        },
        "con": {
          "value": 9,
          "distinguishing_feature": ""
        },
        "dex": {
          "value": 10,
          "distinguishing_feature": ""
        },
        "int": {
          "value": 15,
          "distinguishing_feature": ""
        },
        "pow": {
          "value": 13,
          "distinguishing_feature": ""
        },
        "cha": {
          "value": 10,
          "distinguishing_feature": ""
        }
      },
      "health": {
        "value": 9,
        "min": 0,
        "max": 9
      },
      "wp": {
        "value": 13,
        "min": 0,
        "max": 13
      },
      "sanity": {
        "value": 0,
        "max": 99,
        "currentBreakingPoint": 0,
        "adaptations": {
          "violence": {
            "incident1": false,
            "incident2": false,
            "incident3": false,
            "adapted": false
          },
          "helplessness": {
            "incident1": false,
            "incident2": false,
            "incident3": false,
            "adapted": false
          }
        }
      },
      "skills": {
        "accounting": {
          "value": 10,
          "failure": false
        },
        "alertness": {
          "value": 20,
          "failure": false
        },
        "anthropology": {
          "value": 0,
          "failure": false
        },
        "archeology": {
          "value": 0,
          "failure": false
        },
        "artillery": {
          "value": 0,
          "failure": false
        },
        "athletics": {
          "value": 15,
          "failure": false
        },
        "bureaucracy": {
          "value": 10,
          "failure": false
        },
        "computer_science": {
          "value": 40,
          "failure": false
        },
        "criminology": {
          "value": 0,
          "failure": false
        },
        "demolitions": {
          "value": 0,
          "failure": false
        },
        "disguise": {
          "value": 10,
          "failure": false
        },
        "dodge": {
          "value": 30,
          "failure": false
        },
        "drive": {
          "value": 20,
          "failure": false
        },
        "firearms": {
          "value": 20,
          "failure": false
        },
        "first_aid": {
          "value": 15,
          "failure": false
        },
        "forensics": {
          "value": 0,
          "failure": false
        },
        "heavy_machinery": {
          "value": 10,
          "failure": false
        },
        "heavy_weapons": {
          "value": 0,
          "failure": false
        },
        "history": {
          "value": 10,
          "failure": false
        },
        "humint": {
          "value": 10,
          "failure": false
        },
        "law": {
          "value": 0,
          "failure": false
        },
        "medicine": {
          "value": 0,
          "failure": false
        },
        "melee_weapons": {
          "value": 30,
          "failure": false
        },
        "navigate": {
          "value": 20,
          "failure": false
        },
        "occult": {
          "value": 10,
          "failure": false
        },
        "persuade": {
          "value": 40,
          "failure": false
        },
        "pharmacy": {
          "value": 0,
          "failure": false
        },
        "psychotherapy": {
          "value": 10,
          "failure": false
        },
        "ride": {
          "value": 10,
          "failure": false
        },
        "search": {
          "value": 20,
          "failure": false
        },
        "sigint": {
          "value": 0,
          "failure": false
        },
        "stealth": {
          "value": 10,
          "failure": false
        },
        "surgery": {
          "value": 0,
          "failure": false
        },
        "survival": {
          "value": 10,
          "failure": false
        },
        "swim": {
          "value": 20,
          "failure": false
        },
        "unarmed_combat": {
          "value": 40,
          "failure": false
        },
        "unnatural": {
          "value": 5,
          "failure": false
        }
      },
      "typedSkills": {
        "art1": {
          "name": "Art",
          "subtype": "Writing",
          "value": 60,
          "failure": false,
          "group": "art"
        },
        "foreignLanguage1": {
          "name": "Foreign Language",
          "subtype": "Spanish",
          "value": 10,
          "failure": false,
          "group": "foreignLanguage"
        }
      },
      "biography": {
        "profession": "Night Tenant / Obsessive Author",
        "employer": "",
        "nationality": "",
        "sex": "",
        "age": "",
        "education": "",
        "personalDetails": "<p><strong>Aliases:</strong> The Author (of the Night Floors version of the play \u2014 incorrect; he copies, not writes)</p>\n<p><strong>Role:</strong> Night Tenant / Obsessive Author</p>\n<p><strong>Nature:</strong> unnatural</p>\n<p><strong>Location:</strong> loc_macallistar_building</p>\n<hr/>\n<h2>Player Description</h2>\n<p>Roger Carun is a middle-aged, slightly pudgy man with crooked glasses and hair going in several directions at once. His clothes are clean but nothing matches. He speaks quietly but insistently, as if everything he says is important. His apartment smells of stale sweat. He has a lot of half-drunk bottles of expensive liquor.</p>\n<hr/>\n<section class=\"secret\">\n<h2>Handler Notes</h2>\n<p>The word processor password is NIGHTSEA. Unlocking it by day shows only mundane writing. At night it shows the 64 files with the hidden message and the copied Play. The Play on his word processor can be compared to the pages found in the Macallistar \u2014 an Agent with Forensics 20%+ or a successful roll at +20% determines he copied it and modified it for his own ends, but he is not distributing his version yet. The hairs he places over apartment openings can be spotted with Search 60%+. His food has the same anomaly as the other tenants (expiration dates from five months ago, food not rotten but instantly putrefies outside the building). His &#x27;Passing Strange&#x27; note: born 23 JUN 1952, the same day Delta Green operative Leland A. Fuller voluntarily committed himself to Bellevue Hospital after writing an intelligence assessment on The King in Yellow. Also, Carun was the first of the current Macallistar residents to move in, on 30 AUG 1990 \u2014 the 95th anniversary of the last performance of Le Roi en jaune in Paris in 1895. Carmen Wagner has a tape of his answering machine message from 19 APR 1995: &#x27;I&#x27;ve found something. It&#x27;s amazing. The book, it&#x27;s incredible... The upstairs just goes on and on. The doors keep on going... The others warned me not to call... Just wanted to say goodbye... Abby and the others are waiting... Gotta go. This was Roger Carun. Bye.&#x27; Motivations: To publish &#x27;the play&#x27; as his own. To &#x27;move&#x27; upstairs.</p>\n<h3>Relationships</h3>\n<ul>\n<li><strong>Neighbor:</strong> npc_abigail_wright \u2014 Lived next door across the stairwell. Rarely spoke. The last known outgoing phone call from the building before the isolation began was Carun&#x27;s call to Carmen Wagner on 19 APR 1995.</li>\n<li><strong>Editor / Rejected Romantic Interest:</strong> npc_carmen_wagner \u2014 Carmen handles his personal appearances and edits his writing. She rebuffed his clumsy romantic advances. Since 19 APR 1995, Carun has not talked to her, missed two SF conventions, and not delivered his overdue Nightsea draft. She has the tape of his last phone call.</li>\n</ul>\n</section>",
        "physicalDescription": "Roger Carun is a middle-aged, slightly pudgy man with crooked glasses and hair going in several directions at once. His clothes are clean but nothing matches. He speaks quietly but insistently, as if everything he says is important. His apartment smells of stale sweat. He has a lot of half-drunk bottles of expensive liquor."
      },
      "physical": {
        "description": "",
        "wounds": ""
      }
    },
    "prototypeToken": {
      "name": "Roger Peter Carun",
      "displayName": 20,
      "actorLink": true,
      "width": 1,
      "height": 1,
      "texture": {
        "src": "modules/impossible-landscapes/assets/tokens/npc_roger_carun.webp",
        "scaleX": 1,
        "scaleY": 1
      },
      "disposition": 0,
      "displayBars": 40,
      "bar1": {
        "attribute": "health"
      },
      "bar2": {
        "attribute": "wp"
      },
      "sight": {
        "enabled": false,
        "range": 0
      },
      "lockRotation": false,
      "rotation": 0,
      "alpha": 1
    },
    "items": [
      {
        "_id": "z2EGonCdDGTtzhCT",
        "name": "Unarmed",
        "type": "weapon",
        "img": "systems/deltagreen/assets/icons/melee.svg",
        "system": {
          "skill": "unarmed_combat",
          "damage": "1D4-1",
          "lethality": 0,
          "isLethal": false,
          "range": "melee",
          "ammo": "",
          "equipped": true
        },
        "effects": [],
        "flags": {
          "impossible-landscapes": {
            "bookSkillPercent": 40,
            "armorPiercing": 0
          }
        },
        "sort": 0
      }
    ],
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": {
      "default": 0
    },
    "flags": {
      "impossible-landscapes": {
        "sourceNpcId": "npc_roger_carun",
        "nature": "unnatural",
        "partsAppearing": [
          "Part 1"
        ],
        "tags": [
          "night_tenant",
          "infected",
          "macallistar",
          "king_in_yellow",
          "night_floors",
          "the_play",
          "dual_nature"
        ]
      }
    },
    "_stats": {
      "coreVersion": "12.331",
      "systemId": "deltagreen",
      "systemVersion": "1.6.4",
      "createdTime": 1712700000000,
      "modifiedTime": 1712700000000,
      "lastModifiedBy": "ILModuleGenerator"
    }
  },
  {
    "_id": "sHggs2HsyX9pHmk4",
    "name": "The Dog",
    "type": "npc",
    "img": "modules/impossible-landscapes/assets/portraits/npc_the_dog.webp",
    "system": {
      "statistics": {
        "str": {
          "value": 12,
          "distinguishing_feature": ""
        },
        "con": {
          "value": 12,
          "distinguishing_feature": ""
        },
        "dex": {
          "value": 9,
          "distinguishing_feature": ""
        },
        "int": {
          "value": 6,
          "distinguishing_feature": ""
        },
        "pow": {
          "value": 7,
          "distinguishing_feature": ""
        },
        "cha": {
          "value": 10,
          "distinguishing_feature": ""
        }
      },
      "health": {
        "value": 12,
        "min": 0,
        "max": 12
      },
      "wp": {
        "value": 7,
        "min": 0,
        "max": 7
      },
      "sanity": {
        "value": 0,
        "max": 99,
        "currentBreakingPoint": 0,
        "adaptations": {
          "violence": {
            "incident1": false,
            "incident2": false,
            "incident3": false,
            "adapted": false
          },
          "helplessness": {
            "incident1": false,
            "incident2": false,
            "incident3": false,
            "adapted": false
          }
        }
      },
      "skills": {
        "accounting": {
          "value": 10,
          "failure": false
        },
        "alertness": {
          "value": 80,
          "failure": false
        },
        "anthropology": {
          "value": 0,
          "failure": false
        },
        "archeology": {
          "value": 0,
          "failure": false
        },
        "artillery": {
          "value": 0,
          "failure": false
        },
        "athletics": {
          "value": 30,
          "failure": false
        },
        "bureaucracy": {
          "value": 10,
          "failure": false
        },
        "computer_science": {
          "value": 0,
          "failure": false
        },
        "criminology": {
          "value": 0,
          "failure": false
        },
        "demolitions": {
          "value": 0,
          "failure": false
        },
        "disguise": {
          "value": 10,
          "failure": false
        },
        "dodge": {
          "value": 50,
          "failure": false
        },
        "drive": {
          "value": 20,
          "failure": false
        },
        "firearms": {
          "value": 20,
          "failure": false
        },
        "first_aid": {
          "value": 10,
          "failure": false
        },
        "forensics": {
          "value": 0,
          "failure": false
        },
        "heavy_machinery": {
          "value": 10,
          "failure": false
        },
        "heavy_weapons": {
          "value": 0,
          "failure": false
        },
        "history": {
          "value": 10,
          "failure": false
        },
        "humint": {
          "value": 10,
          "failure": false
        },
        "law": {
          "value": 0,
          "failure": false
        },
        "medicine": {
          "value": 0,
          "failure": false
        },
        "melee_weapons": {
          "value": 30,
          "failure": false
        },
        "navigate": {
          "value": 10,
          "failure": false
        },
        "occult": {
          "value": 10,
          "failure": false
        },
        "persuade": {
          "value": 20,
          "failure": false
        },
        "pharmacy": {
          "value": 0,
          "failure": false
        },
        "psychotherapy": {
          "value": 10,
          "failure": false
        },
        "ride": {
          "value": 10,
          "failure": false
        },
        "search": {
          "value": 50,
          "failure": false
        },
        "sigint": {
          "value": 0,
          "failure": false
        },
        "stealth": {
          "value": 10,
          "failure": false
        },
        "surgery": {
          "value": 0,
          "failure": false
        },
        "survival": {
          "value": 30,
          "failure": false
        },
        "swim": {
          "value": 30,
          "failure": false
        },
        "unarmed_combat": {
          "value": 50,
          "failure": false
        },
        "unnatural": {
          "value": 0,
          "failure": false
        }
      },
      "typedSkills": {},
      "biography": {
        "profession": "Night World Entity / Affable Mastiff",
        "employer": "",
        "nationality": "",
        "sex": "",
        "age": "",
        "education": "",
        "personalDetails": "<p><strong>Aliases:</strong> Abraham (his actual name, discovered by the Agents)</p>\n<p><strong>Role:</strong> Night World Entity / Affable Mastiff</p>\n<p><strong>Nature:</strong> unnatural</p>\n<p><strong>Location:</strong> loc_night_floors</p>\n<hr/>\n<h2>Player Description</h2>\n<p>There&#x27;s definitely something large moving in this building that you can&#x27;t quite see. You hear claws on hardwood. Something wet knocked over the empty champagne bottles. A smell of damp dog. But when you look, there&#x27;s nothing there.</p>\n<hr/>\n<section class=\"secret\">\n<h2>Handler Notes</h2>\n<p>INVISIBLE: those with Corruption 2 or less cannot see the Dog, only his aftereffects (knocking things over, droppings, urine), costing 0/1D4 SAN from the unnatural. Attacks against the Dog while invisible are at -40%. When visible, he appears normal. SAN cost for realizing one can never quite see the Dog himself: 0/1D4 SAN from the unnatural. UNTRAPPABLE: he can always escape any confined space; cannot be followed performing this trick. INFINITE: fragile as a normal dog; may be shot, stabbed, etc. with normal results and SAN consequences, but after a while he returns unharmed. He still recalls who harmed him. The Dog can also be spotted by the sound of a ball bouncing and being pursued by a large animal \u2014 Manuel and the Dog play together in the Night Floors. The Lundine family photograph from 1947 shows Abraham as a Christmas family dog, a historical anchor that costs 0/1 SAN from the unnatural when seen. His name is not revealed by any resident \u2014 the Agents must discover it from the photograph. WHERE&#x27;S MY BOTTLE?: implied to have a Soul Bottle like the other Night World denizens; his Soul Bottle mechanics are not explicitly detailed.</p>\n<h3>Sanity Effects</h3>\n<p><strong>Trigger:</strong> Realizing one can never quite see the Dog himself despite clear evidence of his presence</p>\n<p><strong>SAN Loss:</strong> 0/4</p>\n<p>0/1D4 SAN from the unnatural when this reality is comprehended. Attacks against the invisible Dog by low-Corruption Agents are at -40%.</p>\n<h3>Relationships</h3>\n<ul>\n<li><strong>Childhood Bond:</strong> npc_thomas_manuel \u2014 Manuel knew him as &#x27;Abraham,&#x27; one of his childhood imaginary friends. Manuel can be found in the Night Floors playing ball with the Dog, the sounds of which echo throughout the building.</li>\n</ul>\n</section>",
        "physicalDescription": "There's definitely something large moving in this building that you can't quite see. You hear claws on hardwood. Something wet knocked over the empty champagne bottles. A smell of damp dog. But when you look, there's nothing there."
      },
      "physical": {
        "description": "",
        "wounds": ""
      }
    },
    "prototypeToken": {
      "name": "The Dog",
      "displayName": 20,
      "actorLink": true,
      "width": 1,
      "height": 1,
      "texture": {
        "src": "modules/impossible-landscapes/assets/tokens/npc_the_dog.webp",
        "scaleX": 1,
        "scaleY": 1
      },
      "disposition": 0,
      "displayBars": 40,
      "bar1": {
        "attribute": "health"
      },
      "bar2": {
        "attribute": "wp"
      },
      "sight": {
        "enabled": false,
        "range": 0
      },
      "lockRotation": false,
      "rotation": 0,
      "alpha": 1
    },
    "items": [
      {
        "_id": "HPzqp2Cb6njrD56B",
        "name": "Bite",
        "type": "weapon",
        "img": "systems/deltagreen/assets/icons/melee.svg",
        "system": {
          "skill": "unarmed_combat",
          "damage": "1D6",
          "lethality": 0,
          "isLethal": false,
          "range": "melee",
          "ammo": "",
          "equipped": true
        },
        "effects": [],
        "flags": {
          "impossible-landscapes": {
            "bookSkillPercent": 50,
            "armorPiercing": 0
          }
        },
        "sort": 0
      }
    ],
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": {
      "default": 0
    },
    "flags": {
      "impossible-landscapes": {
        "sourceNpcId": "npc_the_dog",
        "nature": "unnatural",
        "partsAppearing": [
          "Part 1"
        ],
        "tags": [
          "night_floors",
          "macallistar",
          "unnatural",
          "immortal",
          "soul_bottle",
          "invisible",
          "recurring",
          "king_in_yellow"
        ]
      }
    },
    "_stats": {
      "coreVersion": "12.331",
      "systemId": "deltagreen",
      "systemVersion": "1.6.4",
      "createdTime": 1712700000000,
      "modifiedTime": 1712700000000,
      "lastModifiedBy": "ILModuleGenerator"
    }
  },
  {
    "_id": "PvRapPUJf4evS2z8",
    "name": "Thomas Dominic Manuel",
    "type": "npc",
    "img": "modules/impossible-landscapes/assets/portraits/npc_thomas_manuel.webp",
    "system": {
      "statistics": {
        "str": {
          "value": 11,
          "distinguishing_feature": ""
        },
        "con": {
          "value": 12,
          "distinguishing_feature": ""
        },
        "dex": {
          "value": 13,
          "distinguishing_feature": ""
        },
        "int": {
          "value": 12,
          "distinguishing_feature": ""
        },
        "pow": {
          "value": 14,
          "distinguishing_feature": ""
        },
        "cha": {
          "value": 12,
          "distinguishing_feature": ""
        }
      },
      "health": {
        "value": 12,
        "min": 0,
        "max": 12
      },
      "wp": {
        "value": 14,
        "min": 0,
        "max": 14
      },
      "sanity": {
        "value": 5,
        "max": 99,
        "currentBreakingPoint": 0,
        "adaptations": {
          "violence": {
            "incident1": false,
            "incident2": false,
            "incident3": false,
            "adapted": false
          },
          "helplessness": {
            "incident1": false,
            "incident2": false,
            "incident3": false,
            "adapted": false
          }
        }
      },
      "skills": {
        "accounting": {
          "value": 10,
          "failure": false
        },
        "alertness": {
          "value": 25,
          "failure": false
        },
        "anthropology": {
          "value": 0,
          "failure": false
        },
        "archeology": {
          "value": 0,
          "failure": false
        },
        "artillery": {
          "value": 0,
          "failure": false
        },
        "athletics": {
          "value": 30,
          "failure": false
        },
        "bureaucracy": {
          "value": 10,
          "failure": false
        },
        "computer_science": {
          "value": 30,
          "failure": false
        },
        "criminology": {
          "value": 0,
          "failure": false
        },
        "demolitions": {
          "value": 0,
          "failure": false
        },
        "disguise": {
          "value": 10,
          "failure": false
        },
        "dodge": {
          "value": 50,
          "failure": false
        },
        "drive": {
          "value": 20,
          "failure": false
        },
        "firearms": {
          "value": 20,
          "failure": false
        },
        "first_aid": {
          "value": 30,
          "failure": false
        },
        "forensics": {
          "value": 0,
          "failure": false
        },
        "heavy_machinery": {
          "value": 10,
          "failure": false
        },
        "heavy_weapons": {
          "value": 0,
          "failure": false
        },
        "history": {
          "value": 10,
          "failure": false
        },
        "humint": {
          "value": 10,
          "failure": false
        },
        "law": {
          "value": 0,
          "failure": false
        },
        "medicine": {
          "value": 0,
          "failure": false
        },
        "melee_weapons": {
          "value": 40,
          "failure": false
        },
        "navigate": {
          "value": 30,
          "failure": false
        },
        "occult": {
          "value": 30,
          "failure": false
        },
        "persuade": {
          "value": 60,
          "failure": false
        },
        "pharmacy": {
          "value": 40,
          "failure": false
        },
        "psychotherapy": {
          "value": 10,
          "failure": false
        },
        "ride": {
          "value": 10,
          "failure": false
        },
        "search": {
          "value": 60,
          "failure": false
        },
        "sigint": {
          "value": 0,
          "failure": false
        },
        "stealth": {
          "value": 40,
          "failure": false
        },
        "surgery": {
          "value": 0,
          "failure": false
        },
        "survival": {
          "value": 10,
          "failure": false
        },
        "swim": {
          "value": 20,
          "failure": false
        },
        "unarmed_combat": {
          "value": 50,
          "failure": false
        },
        "unnatural": {
          "value": 6,
          "failure": false
        }
      },
      "typedSkills": {
        "art1": {
          "name": "Art",
          "subtype": "History",
          "value": 60,
          "failure": false,
          "group": "art"
        },
        "art2": {
          "name": "Art",
          "subtype": "Painting",
          "value": 60,
          "failure": false,
          "group": "art"
        },
        "art3": {
          "name": "Art",
          "subtype": "Photography",
          "value": 30,
          "failure": false,
          "group": "art"
        },
        "art4": {
          "name": "Art",
          "subtype": "Sculpture",
          "value": 35,
          "failure": false,
          "group": "art"
        },
        "craft1": {
          "name": "Craft",
          "subtype": "Electronics",
          "value": 40,
          "failure": false,
          "group": "craft"
        },
        "foreignLanguage1": {
          "name": "Foreign Language",
          "subtype": "Spanish",
          "value": 70,
          "failure": false,
          "group": "foreignLanguage"
        }
      },
      "biography": {
        "profession": "Night Tenant / Infected Artist",
        "employer": "",
        "nationality": "",
        "sex": "",
        "age": "",
        "education": "",
        "personalDetails": "<p><strong>Role:</strong> Night Tenant / Infected Artist</p>\n<p><strong>Nature:</strong> unnatural</p>\n<p><strong>Location:</strong> loc_macallistar_building</p>\n<hr/>\n<h2>Player Description</h2>\n<p>Thomas Manuel is a young, thin Hispanic man with cropped black hair who pads around barefoot in paint-covered t-shirts and baggy jeans. He usually has a pair of headphones around his neck but never seems to be listening to anything. He has nothing but good things to say about Abigail Wright, calling her &#x27;Laura.&#x27; His apartment is strangely bare for an artist \u2014 no art on the walls, no books, no art materials visible.</p>\n<hr/>\n<section class=\"secret\">\n<h2>Handler Notes</h2>\n<p>Key investigation notes: Manuel has a hidden compartment in a plastic plant base containing audiocassettes (ambient sounds of Macallistar at night, portions of the Play underlined in red ink), an incomplete copy of the Play, and the bronze medallion. The cassette recorder is connected to a wire that runs under the hall rug to a microphone near Wright&#x27;s door. By day Manuel genuinely has no idea why the microphone is there. The paintings in his basement studio (visible by night) include: a child-sized clown in yellow and blue on a stage dragging a white paper dragon (painting of the clown in Washington Square Park and the Night World of the Dorchester House \u2014 cross-part foreshadowing); a haunted image of a white-faced specter at the top of stairs during a conflagration on a strange aquamarine rug (the Samigina residence, Part 2 foreshadowing); a young man in a hospital johnny whose mirror-twin is deformed and muscular with a misshapen head (Ed Miler Wist and Mister Wilde, Part 2 foreshadowing). If Agents later encounter real-world counterparts of these paintings, they recognize them at a cost of 0/1D4 SAN from the unnatural. Foodstuffs in his refrigerator all have expiration dates from 5 months ago but are not rotten \u2014 removing them causes instant putrefaction (0/1 SAN unnatural, +1 Corruption). His &#x27;Passing Strange&#x27; note: moved into the Macallistar on 23 AUG 1992, the 97th anniversary of the first Paris performance of Le Roi en jaune. His childhood &#x27;imaginary friends&#x27; were a man in a suit he called &#x27;J.C.&#x27; (almost certainly Henri de Calvados Castaigne) and his pet dog &#x27;Abraham&#x27; (the Dog, Abraham) \u2014 he has been connected to the Night World since childhood. At night, if confronted about the tapes or his ghostly conversations, he explodes in rage. He can sometimes be found in the Night Floors playing ball with the Dog; this sound is heard throughout the building.</p>\n<h3>Sanity Effects</h3>\n<p><strong>Trigger:</strong> Studying Manuel&#x27;s blank canvas labeled &#x27;My Great Work&#x27; for one hour or more at night</p>\n<p><strong>SAN Loss:</strong> 1/1</p>\n<p>SAN roll required; failure causes 1 SAN loss from helplessness and +1 Corruption. Manifests as a feeling that the Macallistar is filled with people just out of sight.</p>\n<h3>Relationships</h3>\n<ul>\n<li><strong>Neighbor / Friend:</strong> npc_abigail_wright \u2014 Called her Laura. Had a microphone strung under the hall carpet to record her apartment. By night he knows she has &#x27;moved on.&#x27; He last saw her at the Smoking Lounge going-away party 28 MAY 1995.</li>\n<li><strong>Night Relationship:</strong> npc_henri_castaigne \u2014 Calls Castaigne &#x27;Mister Castaigne&#x27; and refers to him as the building&#x27;s &#x27;night manager.&#x27; Castaigne lets Manuel work in the basement at night.</li>\n<li><strong>Night World Associate:</strong> npc_encyclopedia_salesman \u2014 Manuel claims Wright left with this man, &#x27;a no-account guy who sells encyclopedias and lives on the sixth floor.&#x27;</li>\n</ul>\n</section>",
        "physicalDescription": "Thomas Manuel is a young, thin Hispanic man with cropped black hair who pads around barefoot in paint-covered t-shirts and baggy jeans. He usually has a pair of headphones around his neck but never seems to be listening to anything. He has nothing but good things to say about Abigail Wright, calling her 'Laura.' His apartment is strangely bare for an artist \u2014 no art on the walls, no books, no art materials visible."
      },
      "physical": {
        "description": "",
        "wounds": ""
      }
    },
    "prototypeToken": {
      "name": "Thomas Dominic Manuel",
      "displayName": 20,
      "actorLink": true,
      "width": 1,
      "height": 1,
      "texture": {
        "src": "modules/impossible-landscapes/assets/tokens/npc_thomas_manuel.webp",
        "scaleX": 1,
        "scaleY": 1
      },
      "disposition": 0,
      "displayBars": 40,
      "bar1": {
        "attribute": "health"
      },
      "bar2": {
        "attribute": "wp"
      },
      "sight": {
        "enabled": false,
        "range": 0
      },
      "lockRotation": false,
      "rotation": 0,
      "alpha": 1
    },
    "items": [
      {
        "_id": "Gv7yjpRMIkaeL4c4",
        "name": "Unarmed",
        "type": "weapon",
        "img": "systems/deltagreen/assets/icons/melee.svg",
        "system": {
          "skill": "unarmed_combat",
          "damage": "1D4-1",
          "lethality": 0,
          "isLethal": false,
          "range": "melee",
          "ammo": "",
          "equipped": true
        },
        "effects": [],
        "flags": {
          "impossible-landscapes": {
            "bookSkillPercent": 50,
            "armorPiercing": 0
          }
        },
        "sort": 0
      },
      {
        "_id": "V56uME3n87AHLZKo",
        "name": "X-Acto knife",
        "type": "weapon",
        "img": "systems/deltagreen/assets/icons/melee.svg",
        "system": {
          "skill": "melee_weapons",
          "damage": "1D4-1",
          "lethality": 0,
          "isLethal": false,
          "range": "melee",
          "ammo": "",
          "equipped": true
        },
        "effects": [],
        "flags": {
          "impossible-landscapes": {
            "bookSkillPercent": 40,
            "armorPiercing": 3
          }
        },
        "sort": 0
      }
    ],
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": {
      "default": 0
    },
    "flags": {
      "impossible-landscapes": {
        "sourceNpcId": "npc_thomas_manuel",
        "nature": "unnatural",
        "partsAppearing": [
          "Part 1"
        ],
        "tags": [
          "night_tenant",
          "infected",
          "macallistar",
          "king_in_yellow",
          "night_floors",
          "dual_nature",
          "san_risk"
        ]
      }
    },
    "_stats": {
      "coreVersion": "12.331",
      "systemId": "deltagreen",
      "systemVersion": "1.6.4",
      "createdTime": 1712700000000,
      "modifiedTime": 1712700000000,
      "lastModifiedBy": "ILModuleGenerator"
    }
  },
  {
    "_id": "l2Oopm3UGwS4zVJ4",
    "name": "Thomas Weston Wright Jr.",
    "type": "npc",
    "img": "modules/impossible-landscapes/assets/portraits/npc_thomas_wright.webp",
    "system": {
      "statistics": {
        "str": {
          "value": 13,
          "distinguishing_feature": ""
        },
        "con": {
          "value": 10,
          "distinguishing_feature": ""
        },
        "dex": {
          "value": 10,
          "distinguishing_feature": ""
        },
        "int": {
          "value": 10,
          "distinguishing_feature": ""
        },
        "pow": {
          "value": 13,
          "distinguishing_feature": ""
        },
        "cha": {
          "value": 14,
          "distinguishing_feature": ""
        }
      },
      "health": {
        "value": 12,
        "min": 0,
        "max": 12
      },
      "wp": {
        "value": 13,
        "min": 0,
        "max": 13
      },
      "sanity": {
        "value": 65,
        "max": 99,
        "currentBreakingPoint": 52,
        "adaptations": {
          "violence": {
            "incident1": false,
            "incident2": false,
            "incident3": false,
            "adapted": false
          },
          "helplessness": {
            "incident1": false,
            "incident2": false,
            "incident3": false,
            "adapted": false
          }
        }
      },
      "skills": {
        "accounting": {
          "value": 30,
          "failure": false
        },
        "alertness": {
          "value": 60,
          "failure": false
        },
        "anthropology": {
          "value": 0,
          "failure": false
        },
        "archeology": {
          "value": 0,
          "failure": false
        },
        "artillery": {
          "value": 0,
          "failure": false
        },
        "athletics": {
          "value": 30,
          "failure": false
        },
        "bureaucracy": {
          "value": 40,
          "failure": false
        },
        "computer_science": {
          "value": 0,
          "failure": false
        },
        "criminology": {
          "value": 50,
          "failure": false
        },
        "demolitions": {
          "value": 0,
          "failure": false
        },
        "disguise": {
          "value": 10,
          "failure": false
        },
        "dodge": {
          "value": 40,
          "failure": false
        },
        "drive": {
          "value": 70,
          "failure": false
        },
        "firearms": {
          "value": 40,
          "failure": false
        },
        "first_aid": {
          "value": 30,
          "failure": false
        },
        "forensics": {
          "value": 20,
          "failure": false
        },
        "heavy_machinery": {
          "value": 30,
          "failure": false
        },
        "heavy_weapons": {
          "value": 0,
          "failure": false
        },
        "history": {
          "value": 30,
          "failure": false
        },
        "humint": {
          "value": 70,
          "failure": false
        },
        "law": {
          "value": 30,
          "failure": false
        },
        "medicine": {
          "value": 0,
          "failure": false
        },
        "melee_weapons": {
          "value": 50,
          "failure": false
        },
        "navigate": {
          "value": 40,
          "failure": false
        },
        "occult": {
          "value": 10,
          "failure": false
        },
        "persuade": {
          "value": 40,
          "failure": false
        },
        "pharmacy": {
          "value": 0,
          "failure": false
        },
        "psychotherapy": {
          "value": 20,
          "failure": false
        },
        "ride": {
          "value": 10,
          "failure": false
        },
        "search": {
          "value": 80,
          "failure": false
        },
        "sigint": {
          "value": 0,
          "failure": false
        },
        "stealth": {
          "value": 20,
          "failure": false
        },
        "surgery": {
          "value": 0,
          "failure": false
        },
        "survival": {
          "value": 10,
          "failure": false
        },
        "swim": {
          "value": 20,
          "failure": false
        },
        "unarmed_combat": {
          "value": 60,
          "failure": false
        },
        "unnatural": {
          "value": 0,
          "failure": false
        }
      },
      "typedSkills": {
        "pilot1": {
          "name": "Pilot",
          "subtype": "Small Boats",
          "value": 20,
          "failure": false,
          "group": "pilot"
        }
      },
      "biography": {
        "profession": "Abigail's Father / Wildcard Complication",
        "employer": "",
        "nationality": "",
        "sex": "",
        "age": "",
        "education": "",
        "personalDetails": "<p><strong>Aliases:</strong> Officer Wright</p>\n<p><strong>Role:</strong> Abigail&#x27;s Father / Wildcard Complication</p>\n<p><strong>Nature:</strong> mundane</p>\n<p><strong>Location:</strong> loc_baldwin_long_island</p>\n<hr/>\n<h2>Player Description</h2>\n<p>Thomas Wright is a middle-aged, slightly pudgy man going bald, in civilian clothes when off duty. He has the kind of face that in better times would be friendly and open, but now carries a permanent expression of barely-contained grief and exhaustion. He cooperates with federal authorities \u2014 one professional to another \u2014 but you can see him watching you for any flicker of information that might tell him what happened to his daughter.</p>\n<hr/>\n<section class=\"secret\">\n<h2>Handler Notes</h2>\n<p>Wright is a ticking clock complication. If Agents reveal to him, or if he deduces, that the Macallistar Building is connected to Abigail&#x27;s disappearance, he immediately relocates to the city and begins an independent surveillance. He has a Macallistar key. He will confront tenants. His mental state is fragile enough that exposure to the Night World&#x27;s manifestations will rapidly escalate his Corruption. He is explicitly an ideal Agent replacement \u2014 his motivations (find daughter, punish responsible parties, protect the innocent) make him compelling and self-directing. He has been to the Bookshop, making him one of only a few named characters in Part 1 with firsthand Bookshop experience. His three Bonds: Abigail Wright (Missing), bond 14; Mike DiGiovanni (Partner), bond 14; Annie Sigurda (Sister), bond 14. Motivations: To find his daughter. To punish anyone responsible. To protect the innocent. &#x27;Passing Strange&#x27;: Born 20 JUL 1945, the day the Deuxi\u00e8me Bureau files were located by American military intelligence in France. Met his wife Ellen at the Dorchester House School in Boston on 4 APR 1968, introduced by a man calling himself &#x27;Asa&#x27; in a lavender suit \u2014 this was Asa Daribondi, a fact Wright does not know and which would horrify him. Ellen&#x27;s dying words (&#x27;He&#x27;s coming for my baby, Tom! STOP HIM!&#x27;) are a critical piece of information Wright has kept secret.</p>\n<h3>Relationships</h3>\n<ul>\n<li><strong>Father (Bond):</strong> npc_abigail_wright \u2014 Bond score 14. Reported her missing on 4 JUN 1995 after finding her shrine. Devastated. Believes she is dead but cannot stop looking.</li>\n<li><strong>Police Colleague:</strong> npc_graham_giuradanda \u2014 Wright &#x27;pulled strings&#x27; to get NYPD immediately involved when Abigail was reported missing. Giuradanda is the assigned detective.</li>\n</ul>\n</section>",
        "physicalDescription": "Thomas Wright is a middle-aged, slightly pudgy man going bald, in civilian clothes when off duty. He has the kind of face that in better times would be friendly and open, but now carries a permanent expression of barely-contained grief and exhaustion. He cooperates with federal authorities \u2014 one professional to another \u2014 but you can see him watching you for any flicker of information that might tell him what happened to his daughter."
      },
      "physical": {
        "description": "",
        "wounds": ""
      }
    },
    "prototypeToken": {
      "name": "Thomas Weston Wright Jr.",
      "displayName": 20,
      "actorLink": true,
      "width": 1,
      "height": 1,
      "texture": {
        "src": "modules/impossible-landscapes/assets/tokens/npc_thomas_wright.webp",
        "scaleX": 1,
        "scaleY": 1
      },
      "disposition": 1,
      "displayBars": 40,
      "bar1": {
        "attribute": "health"
      },
      "bar2": {
        "attribute": "wp"
      },
      "sight": {
        "enabled": false,
        "range": 0
      },
      "lockRotation": false,
      "rotation": 0,
      "alpha": 1
    },
    "items": [
      {
        "_id": "eKI8phYHVDEGUnNF",
        "name": "Ruger Police Service Six .38 Special",
        "type": "weapon",
        "img": "systems/deltagreen/assets/icons/pistol.svg",
        "system": {
          "skill": "firearms",
          "damage": "1D8",
          "lethality": 0,
          "isLethal": false,
          "range": "15m",
          "ammo": "",
          "equipped": true
        },
        "effects": [],
        "flags": {
          "impossible-landscapes": {
            "bookSkillPercent": 40,
            "armorPiercing": 0
          }
        },
        "sort": 0
      },
      {
        "_id": "HFiavmwcCZjZjonU",
        "name": "Baton",
        "type": "weapon",
        "img": "systems/deltagreen/assets/icons/melee.svg",
        "system": {
          "skill": "melee_weapons",
          "damage": "1D6",
          "lethality": 0,
          "isLethal": false,
          "range": "melee",
          "ammo": "",
          "equipped": true
        },
        "effects": [],
        "flags": {
          "impossible-landscapes": {
            "bookSkillPercent": 50,
            "armorPiercing": 0
          }
        },
        "sort": 0
      },
      {
        "_id": "HELEjNAMtkx8J1Xf",
        "name": "Unarmed",
        "type": "weapon",
        "img": "systems/deltagreen/assets/icons/melee.svg",
        "system": {
          "skill": "unarmed_combat",
          "damage": "1D4",
          "lethality": 0,
          "isLethal": false,
          "range": "melee",
          "ammo": "",
          "equipped": true
        },
        "effects": [],
        "flags": {
          "impossible-landscapes": {
            "bookSkillPercent": 60,
            "armorPiercing": 0
          }
        },
        "sort": 0
      }
    ],
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": {
      "default": 0
    },
    "flags": {
      "impossible-landscapes": {
        "sourceNpcId": "npc_thomas_wright",
        "nature": "mundane",
        "partsAppearing": [
          "Part 1"
        ],
        "tags": [
          "grieving_father",
          "replacement_character",
          "police",
          "mundane",
          "complication",
          "bookshop"
        ]
      }
    },
    "_stats": {
      "coreVersion": "12.331",
      "systemId": "deltagreen",
      "systemVersion": "1.6.4",
      "createdTime": 1712700000000,
      "modifiedTime": 1712700000000,
      "lastModifiedBy": "ILModuleGenerator"
    }
  }
];

  // Set folder on all actors
  for (const data of actorData) {
    data.folder = folder.id;
    // Remove explicit _id to let Foundry generate them
    delete data._id;
    // Clean _stats
    delete data._stats;
    // Remove item _ids too
    for (const item of (data.items || [])) { delete item._id; }
  }

  // Batch create
  const created = await Actor.createDocuments(actorData);
  ui.notifications.info(`Impossible Landscapes: Created ${created.length} NPC actors in "IL — Night Floors NPCs" folder.`);
  console.log('IL Actors created:', created.map(a => a.name));
})();