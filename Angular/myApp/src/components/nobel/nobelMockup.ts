import { Nobel } from "./nobelModels"

let m1: Nobel = {
  "prizes": [
    {
      "year": "2021",
      "category": "chemistry",
      "laureates": [
        {
          "id": "1002",
          "firstname": "Benjamin",
          "surname": "List",
          "motivation": "\"for the development of asymmetric organocatalysis\"",
          "share": "2"
        },
        {
          "id": "1003",
          "firstname": "David",
          "surname": "MacMillan",
          "motivation": "\"for the development of asymmetric organocatalysis\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "2021",
      "category": "economics",
      "laureates": [
        {
          "id": "1007",
          "firstname": "David",
          "surname": "Card",
          "motivation": "\"for his empirical contributions to labour economics\"",
          "share": "2"
        },
        {
          "id": "1008",
          "firstname": "Joshua",
          "surname": "Angrist",
          "motivation": "\"for their methodological contributions to the analysis of causal relationships\"",
          "share": "4"
        },
        {
          "id": "1009",
          "firstname": "Guido",
          "surname": "Imbens",
          "motivation": "\"for their methodological contributions to the analysis of causal relationships\"",
          "share": "4"
        }
      ]
    },
    {
      "year": "2021",
      "category": "literature",
      "laureates": [
        {
          "id": "1004",
          "firstname": "Abdulrazak",
          "surname": "Gurnah",
          "motivation": "\"for his uncompromising and compassionate penetration of the effects of colonialism and the fate of the refugee in the gulf between cultures and continents\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "2021",
      "category": "peace",
      "laureates": [
        {
          "id": "1005",
          "firstname": "Maria",
          "surname": "Ressa",
          "motivation": "\"for their efforts to safeguard freedom of expression, which is a precondition for democracy and lasting peace\"",
          "share": "2"
        },
        {
          "id": "1006",
          "firstname": "Dmitry",
          "surname": "Muratov",
          "motivation": "\"for their efforts to safeguard freedom of expression, which is a precondition for democracy and lasting peace\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "2021",
      "category": "physics",
      "overallMotivation": "\"for groundbreaking contributions to our understanding of complex physical systems\"",
      "laureates": [
        {
          "id": "999",
          "firstname": "Syukuro",
          "surname": "Manabe",
          "motivation": "\"for the physical modelling of Earth’s climate, quantifying variability and reliably predicting global warming\"",
          "share": "4"
        },
        {
          "id": "1000",
          "firstname": "Klaus",
          "surname": "Hasselmann",
          "motivation": "\"for the physical modelling of Earth’s climate, quantifying variability and reliably predicting global warming\"",
          "share": "4"
        },
        {
          "id": "1001",
          "firstname": "Giorgio",
          "surname": "Parisi",
          "motivation": "\"for the discovery of the interplay of disorder and fluctuations in physical systems from atomic to planetary scales\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "2021",
      "category": "medicine",
      "laureates": [
        {
          "id": "997",
          "firstname": "David",
          "surname": "Julius",
          "motivation": "\"for their discoveries of receptors for temperature and touch\"",
          "share": "2"
        },
        {
          "id": "998",
          "firstname": "Ardem",
          "surname": "Patapoutian",
          "motivation": "\"for their discoveries of receptors for temperature and touch\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "2020",
      "category": "chemistry",
      "laureates": [
        {
          "id": "991",
          "firstname": "Emmanuelle",
          "surname": "Charpentier",
          "motivation": "\"for the development of a method for genome editing\"",
          "share": "2"
        },
        {
          "id": "992",
          "firstname": "Jennifer A.",
          "surname": "Doudna",
          "motivation": "\"for the development of a method for genome editing\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "2020",
      "category": "economics",
      "laureates": [
        {
          "id": "995",
          "firstname": "Paul",
          "surname": "Milgrom",
          "motivation": "\"for improvements to auction theory and inventions of new auction formats\"",
          "share": "2"
        },
        {
          "id": "996",
          "firstname": "Robert",
          "surname": "Wilson",
          "motivation": "\"for improvements to auction theory and inventions of new auction formats\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "2020",
      "category": "literature",
      "laureates": [
        {
          "id": "993",
          "firstname": "Louise",
          "surname": "Glück",
          "motivation": "\"for her unmistakable poetic voice that with austere beauty makes individual existence universal\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "2020",
      "category": "peace",
      "laureates": [
        {
          "id": "994",
          "motivation": "\"for its efforts to combat hunger, for its contribution to bettering conditions for peace in conflict-affected areas and for acting as a driving force in efforts to prevent the use of hunger as a weapon of war and conflict\"",
          "share": "1",
          "firstname": "World Food Programme"
        }
      ]
    },
    {
      "year": "2020",
      "category": "physics",
      "laureates": [
        {
          "id": "988",
          "firstname": "Roger",
          "surname": "Penrose",
          "motivation": "\"for the discovery that black hole formation is a robust prediction of the general theory of relativity\"",
          "share": "2"
        },
        {
          "id": "989",
          "firstname": "Reinhard",
          "surname": "Genzel",
          "motivation": "\"for the discovery of a supermassive compact object at the centre of our galaxy\"",
          "share": "4"
        },
        {
          "id": "990",
          "firstname": "Andrea",
          "surname": "Ghez",
          "motivation": "\"for the discovery of a supermassive compact object at the centre of our galaxy\"",
          "share": "4"
        }
      ]
    },
    {
      "year": "2020",
      "category": "medicine",
      "laureates": [
        {
          "id": "985",
          "firstname": "Harvey",
          "surname": "Alter",
          "motivation": "\"for the discovery of Hepatitis C virus\"",
          "share": "3"
        },
        {
          "id": "986",
          "firstname": "Michael",
          "surname": "Houghton",
          "motivation": "\"for the discovery of Hepatitis C virus\"",
          "share": "3"
        },
        {
          "id": "987",
          "firstname": "Charles",
          "surname": "Rice",
          "motivation": "\"for the discovery of Hepatitis C virus\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "2019",
      "category": "chemistry",
      "laureates": [
        {
          "id": "976",
          "firstname": "John",
          "surname": "Goodenough",
          "motivation": "\"for the development of lithium-ion batteries\"",
          "share": "3"
        },
        {
          "id": "977",
          "firstname": "M. Stanley",
          "surname": "Whittingham",
          "motivation": "\"for the development of lithium-ion batteries\"",
          "share": "3"
        },
        {
          "id": "978",
          "firstname": "Akira",
          "surname": "Yoshino",
          "motivation": "\"for the development of lithium-ion batteries\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "2019",
      "category": "economics",
      "laureates": [
        {
          "id": "982",
          "firstname": "Abhijit",
          "surname": "Banerjee",
          "motivation": "\"for their experimental approach to alleviating global poverty\"",
          "share": "3"
        },
        {
          "id": "983",
          "firstname": "Esther",
          "surname": "Duflo",
          "motivation": "\"for their experimental approach to alleviating global poverty\"",
          "share": "3"
        },
        {
          "id": "984",
          "firstname": "Michael",
          "surname": "Kremer",
          "motivation": "\"for their experimental approach to alleviating global poverty\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "2019",
      "category": "literature",
      "laureates": [
        {
          "id": "980",
          "firstname": "Peter",
          "surname": "Handke",
          "motivation": "\"for an influential work that with linguistic ingenuity has explored the periphery and the specificity of human experience\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "2019",
      "category": "peace",
      "laureates": [
        {
          "id": "981",
          "firstname": "Abiy",
          "surname": "Ahmed Ali",
          "motivation": "\"for his efforts to achieve peace and international cooperation, and in particular for his decisive initiative to resolve the border conflict with neighbouring Eritrea\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "2019",
      "category": "physics",
      "overallMotivation": "\"for contributions to our understanding of the evolution of the universe and Earth’s place in the cosmos\"",
      "laureates": [
        {
          "id": "973",
          "firstname": "James",
          "surname": "Peebles",
          "motivation": "\"for theoretical discoveries in physical cosmology\"",
          "share": "2"
        },
        {
          "id": "974",
          "firstname": "Michel",
          "surname": "Mayor",
          "motivation": "\"for the discovery of an exoplanet orbiting a solar-type star\"",
          "share": "4"
        },
        {
          "id": "975",
          "firstname": "Didier",
          "surname": "Queloz",
          "motivation": "\"for the discovery of an exoplanet orbiting a solar-type star\"",
          "share": "4"
        }
      ]
    },
    {
      "year": "2019",
      "category": "medicine",
      "laureates": [
        {
          "id": "970",
          "firstname": "William",
          "surname": "Kaelin",
          "motivation": "\"for their discoveries of how cells sense and adapt to oxygen availability\"",
          "share": "3"
        },
        {
          "id": "971",
          "firstname": "Peter",
          "surname": "Ratcliffe",
          "motivation": "\"for their discoveries of how cells sense and adapt to oxygen availability\"",
          "share": "3"
        },
        {
          "id": "972",
          "firstname": "Gregg",
          "surname": "Semenza",
          "motivation": "\"for their discoveries of how cells sense and adapt to oxygen availability\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "2018",
      "category": "chemistry",
      "laureates": [
        {
          "id": "963",
          "firstname": "Frances H.",
          "surname": "Arnold",
          "motivation": "\"for the directed evolution of enzymes\"",
          "share": "2"
        },
        {
          "id": "964",
          "firstname": "George P.",
          "surname": "Smith",
          "motivation": "\"for the phage display of peptides and antibodies\"",
          "share": "4"
        },
        {
          "id": "965",
          "firstname": "Sir Gregory P.",
          "surname": "Winter",
          "motivation": "\"for the phage display of peptides and antibodies\"",
          "share": "4"
        }
      ]
    },
    {
      "year": "2018",
      "category": "economics",
      "laureates": [
        {
          "id": "968",
          "firstname": "William D.",
          "surname": "Nordhaus",
          "motivation": "\"for integrating climate change into long-run macroeconomic analysis\"",
          "share": "2"
        },
        {
          "id": "969",
          "firstname": "Paul M.",
          "surname": "Romer",
          "motivation": "\"for integrating technological innovations into long-run macroeconomic analysis\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "2018",
      "category": "literature",
      "laureates": [
        {
          "id": "979",
          "firstname": "Olga",
          "surname": "Tokarczuk",
          "motivation": "\"for a narrative imagination that with encyclopedic passion represents the crossing of boundaries as a form of life\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "2018",
      "category": "peace",
      "laureates": [
        {
          "id": "966",
          "firstname": "Denis",
          "surname": "Mukwege",
          "motivation": "\"for their efforts to end the use of sexual violence as a weapon of war and armed conflict\"",
          "share": "2"
        },
        {
          "id": "967",
          "firstname": "Nadia",
          "surname": "Murad",
          "motivation": "\"for their efforts to end the use of sexual violence as a weapon of war and armed conflict\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "2018",
      "category": "physics",
      "overallMotivation": "\"for groundbreaking inventions in the field of laser physics\"",
      "laureates": [
        {
          "id": "960",
          "firstname": "Arthur",
          "surname": "Ashkin",
          "motivation": "\"for the optical tweezers and their application to biological systems\"",
          "share": "2"
        },
        {
          "id": "961",
          "firstname": "Gérard",
          "surname": "Mourou",
          "motivation": "\"for their method of generating high-intensity, ultra-short optical pulses\"",
          "share": "4"
        },
        {
          "id": "962",
          "firstname": "Donna",
          "surname": "Strickland",
          "motivation": "\"for their method of generating high-intensity, ultra-short optical pulses\"",
          "share": "4"
        }
      ]
    },
    {
      "year": "2018",
      "category": "medicine",
      "laureates": [
        {
          "id": "958",
          "firstname": "James P.",
          "surname": "Allison",
          "motivation": "\"for their discovery of cancer therapy by inhibition of negative immune regulation\"",
          "share": "2"
        },
        {
          "id": "959",
          "firstname": "Tasuku",
          "surname": "Honjo",
          "motivation": "\"for their discovery of cancer therapy by inhibition of negative immune regulation\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "2017",
      "category": "chemistry",
      "laureates": [
        {
          "id": "944",
          "firstname": "Jacques",
          "surname": "Dubochet",
          "motivation": "\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
          "share": "3"
        },
        {
          "id": "945",
          "firstname": "Joachim",
          "surname": "Frank",
          "motivation": "\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
          "share": "3"
        },
        {
          "id": "946",
          "firstname": "Richard",
          "surname": "Henderson",
          "motivation": "\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "2017",
      "category": "economics",
      "laureates": [
        {
          "id": "949",
          "firstname": "Richard H.",
          "surname": "Thaler",
          "motivation": "\"for his contributions to behavioural economics\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "2017",
      "category": "literature",
      "laureates": [
        {
          "id": "947",
          "firstname": "Kazuo",
          "surname": "Ishiguro",
          "motivation": "\"who, in novels of great emotional force, has uncovered the abyss beneath our illusory sense of connection with the world\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "2017",
      "category": "peace",
      "laureates": [
        {
          "id": "948",
          "motivation": "\"for its work to draw attention to the catastrophic humanitarian consequences of any use of nuclear weapons and for its ground-breaking efforts to achieve a treaty-based prohibition of such weapons\"",
          "share": "1",
          "firstname": "International Campaign to Abolish Nuclear Weapons"
        }
      ]
    },
    {
      "year": "2017",
      "category": "physics",
      "laureates": [
        {
          "id": "941",
          "firstname": "Rainer",
          "surname": "Weiss",
          "motivation": "\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
          "share": "2"
        },
        {
          "id": "942",
          "firstname": "Barry C.",
          "surname": "Barish",
          "motivation": "\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
          "share": "4"
        },
        {
          "id": "943",
          "firstname": "Kip S.",
          "surname": "Thorne",
          "motivation": "\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
          "share": "4"
        }
      ]
    },
    {
      "year": "2017",
      "category": "medicine",
      "laureates": [
        {
          "id": "938",
          "firstname": "Jeffrey C.",
          "surname": "Hall",
          "motivation": "\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
          "share": "3"
        },
        {
          "id": "939",
          "firstname": "Michael",
          "surname": "Rosbash",
          "motivation": "\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
          "share": "3"
        },
        {
          "id": "940",
          "firstname": "Michael W.",
          "surname": "Young",
          "motivation": "\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "2016",
      "category": "chemistry",
      "laureates": [
        {
          "id": "931",
          "firstname": "Jean-Pierre",
          "surname": "Sauvage",
          "motivation": "\"for the design and synthesis of molecular machines\"",
          "share": "3"
        },
        {
          "id": "932",
          "firstname": "Sir J. Fraser",
          "surname": "Stoddart",
          "motivation": "\"for the design and synthesis of molecular machines\"",
          "share": "3"
        },
        {
          "id": "933",
          "firstname": "Bernard L.",
          "surname": "Feringa",
          "motivation": "\"for the design and synthesis of molecular machines\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "2016",
      "category": "economics",
      "laureates": [
        {
          "id": "935",
          "firstname": "Oliver",
          "surname": "Hart",
          "motivation": "\"for their contributions to contract theory\"",
          "share": "2"
        },
        {
          "id": "936",
          "firstname": "Bengt",
          "surname": "Holmström",
          "motivation": "\"for their contributions to contract theory\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "2016",
      "category": "literature",
      "laureates": [
        {
          "id": "937",
          "firstname": "Bob",
          "surname": "Dylan",
          "motivation": "\"for having created new poetic expressions within the great American song tradition\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "2016",
      "category": "peace",
      "laureates": [
        {
          "id": "934",
          "firstname": "Juan Manuel",
          "surname": "Santos",
          "motivation": "\"for his resolute efforts to bring the country's more than 50-year-long civil war to an end\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "2016",
      "category": "physics",
      "laureates": [
        {
          "id": "928",
          "firstname": "David J.",
          "surname": "Thouless",
          "motivation": "\"for theoretical discoveries of topological phase transitions and topological phases of matter\"",
          "share": "2"
        },
        {
          "id": "929",
          "firstname": "F. Duncan M.",
          "surname": "Haldane",
          "motivation": "\"for theoretical discoveries of topological phase transitions and topological phases of matter\"",
          "share": "4"
        },
        {
          "id": "930",
          "firstname": "J. Michael",
          "surname": "Kosterlitz",
          "motivation": "\"for theoretical discoveries of topological phase transitions and topological phases of matter\"",
          "share": "4"
        }
      ]
    },
    {
      "year": "2016",
      "category": "medicine",
      "laureates": [
        {
          "id": "927",
          "firstname": "Yoshinori",
          "surname": "Ohsumi",
          "motivation": "\"for his discoveries of mechanisms for autophagy\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "2015",
      "category": "chemistry",
      "laureates": [
        {
          "id": "921",
          "firstname": "Tomas",
          "surname": "Lindahl",
          "motivation": "\"for mechanistic studies of DNA repair\"",
          "share": "3"
        },
        {
          "id": "922",
          "firstname": "Paul",
          "surname": "Modrich",
          "motivation": "\"for mechanistic studies of DNA repair\"",
          "share": "3"
        },
        {
          "id": "923",
          "firstname": "Aziz",
          "surname": "Sancar",
          "motivation": "\"for mechanistic studies of DNA repair\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "2015",
      "category": "economics",
      "laureates": [
        {
          "id": "926",
          "firstname": "Angus",
          "surname": "Deaton",
          "motivation": "\"for his analysis of consumption, poverty, and welfare\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "2015",
      "category": "literature",
      "laureates": [
        {
          "id": "924",
          "firstname": "Svetlana",
          "surname": "Alexievich",
          "motivation": "\"for her polyphonic writings, a monument to suffering and courage in our time\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "2015",
      "category": "peace",
      "laureates": [
        {
          "id": "925",
          "motivation": "\"for its decisive contribution to the building of a pluralistic democracy in Tunisia in the wake of the Jasmine Revolution of 2011\"",
          "share": "1",
          "firstname": "National Dialogue Quartet"
        }
      ]
    },
    {
      "year": "2015",
      "category": "physics",
      "laureates": [
        {
          "id": "919",
          "firstname": "Takaaki",
          "surname": "Kajita",
          "motivation": "\"for the discovery of neutrino oscillations, which shows that neutrinos have mass\"",
          "share": "2"
        },
        {
          "id": "920",
          "firstname": "Arthur B.",
          "surname": "McDonald",
          "motivation": "\"for the discovery of neutrino oscillations, which shows that neutrinos have mass\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "2015",
      "category": "medicine",
      "laureates": [
        {
          "id": "916",
          "firstname": "William C.",
          "surname": "Campbell",
          "motivation": "\"for their discoveries concerning a novel therapy against infections caused by roundworm parasites\"",
          "share": "4"
        },
        {
          "id": "917",
          "firstname": "Satoshi",
          "surname": "Ōmura",
          "motivation": "\"for their discoveries concerning a novel therapy against infections caused by roundworm parasites\"",
          "share": "4"
        },
        {
          "id": "918",
          "firstname": "Youyou",
          "surname": "Tu",
          "motivation": "\"for her discoveries concerning a novel therapy against Malaria\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "2014",
      "category": "chemistry",
      "laureates": [
        {
          "id": "909",
          "firstname": "Eric",
          "surname": "Betzig",
          "motivation": "\"for the development of super-resolved fluorescence microscopy\"",
          "share": "3"
        },
        {
          "id": "910",
          "firstname": "Stefan W.",
          "surname": "Hell",
          "motivation": "\"for the development of super-resolved fluorescence microscopy\"",
          "share": "3"
        },
        {
          "id": "911",
          "firstname": "William E.",
          "surname": "Moerner",
          "motivation": "\"for the development of super-resolved fluorescence microscopy\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "2014",
      "category": "economics",
      "laureates": [
        {
          "id": "915",
          "firstname": "Jean",
          "surname": "Tirole",
          "motivation": "\"for his analysis of market power and regulation\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "2014",
      "category": "literature",
      "laureates": [
        {
          "id": "912",
          "firstname": "Patrick",
          "surname": "Modiano",
          "motivation": "\"for the art of memory with which he has evoked the most ungraspable human destinies and\r\nuncovered the life-world of the occupation\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "2014",
      "category": "peace",
      "laureates": [
        {
          "id": "913",
          "firstname": "Kailash",
          "surname": "Satyarthi",
          "motivation": "\"for their struggle against the suppression of children and young people and for the right of all children to education\"",
          "share": "2"
        },
        {
          "id": "914",
          "firstname": "Malala",
          "surname": "Yousafzai",
          "motivation": "\"for their struggle against the suppression of children and young people and for the right of all children to education\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "2014",
      "category": "physics",
      "laureates": [
        {
          "id": "906",
          "firstname": "Isamu",
          "surname": "Akasaki",
          "motivation": "\"for the invention of efficient blue light-emitting diodes which has enabled bright and energy-saving white light sources\"",
          "share": "3"
        },
        {
          "id": "907",
          "firstname": "Hiroshi",
          "surname": "Amano",
          "motivation": "\"for the invention of efficient blue light-emitting diodes which has enabled bright and energy-saving white light sources\"",
          "share": "3"
        },
        {
          "id": "908",
          "firstname": "Shuji",
          "surname": "Nakamura",
          "motivation": "\"for the invention of efficient blue light-emitting diodes which has enabled bright and energy-saving white light sources\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "2014",
      "category": "medicine",
      "laureates": [
        {
          "id": "903",
          "firstname": "John",
          "surname": "O'Keefe",
          "motivation": "\"for their discoveries of cells that constitute a positioning system in the brain\"",
          "share": "2"
        },
        {
          "id": "904",
          "firstname": "May-Britt",
          "surname": "Moser",
          "motivation": "\"for their discoveries of cells that constitute a positioning system in the brain\"",
          "share": "4"
        },
        {
          "id": "905",
          "firstname": "Edvard I.",
          "surname": "Moser",
          "motivation": "\"for their discoveries of cells that constitute a positioning system in the brain\"",
          "share": "4"
        }
      ]
    },
    {
      "year": "2013",
      "category": "chemistry",
      "laureates": [
        {
          "id": "889",
          "firstname": "Martin",
          "surname": "Karplus",
          "motivation": "\"for the development of multiscale models for complex chemical systems\"",
          "share": "3"
        },
        {
          "id": "890",
          "firstname": "Michael",
          "surname": "Levitt",
          "motivation": "\"for the development of multiscale models for complex chemical systems\"",
          "share": "3"
        },
        {
          "id": "891",
          "firstname": "Arieh",
          "surname": "Warshel",
          "motivation": "\"for the development of multiscale models for complex chemical systems\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "2013",
      "category": "economics",
      "laureates": [
        {
          "id": "894",
          "firstname": "Eugene F.",
          "surname": "Fama",
          "motivation": "\"for their empirical analysis of asset prices\"",
          "share": "3"
        },
        {
          "id": "895",
          "firstname": "Lars Peter",
          "surname": "Hansen",
          "motivation": "\"for their empirical analysis of asset prices\"",
          "share": "3"
        },
        {
          "id": "896",
          "firstname": "Robert J.",
          "surname": "Shiller",
          "motivation": "\"for their empirical analysis of asset prices\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "2013",
      "category": "literature",
      "laureates": [
        {
          "id": "892",
          "firstname": "Alice",
          "surname": "Munro",
          "motivation": "\"master of the contemporary short story\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "2013",
      "category": "peace",
      "laureates": [
        {
          "id": "893",
          "motivation": "\"for its extensive efforts to eliminate chemical weapons\"",
          "share": "1",
          "firstname": "Organisation for the Prohibition of Chemical Weapons"
        }
      ]
    },
    {
      "year": "2013",
      "category": "physics",
      "laureates": [
        {
          "id": "887",
          "firstname": "François",
          "surname": "Englert",
          "motivation": "\"for the theoretical discovery of a mechanism that contributes to our understanding of the origin of mass of subatomic particles, and which recently was confirmed through the discovery of the predicted fundamental particle, by the ATLAS and CMS experiments at CERN's Large Hadron Collider\"",
          "share": "2"
        },
        {
          "id": "888",
          "firstname": "Peter",
          "surname": "Higgs",
          "motivation": "\"for the theoretical discovery of a mechanism that contributes to our understanding of the origin of mass of subatomic particles, and which recently was confirmed through the discovery of the predicted fundamental particle, by the ATLAS and CMS experiments at CERN's Large Hadron Collider\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "2013",
      "category": "medicine",
      "laureates": [
        {
          "id": "884",
          "firstname": "James E.",
          "surname": "Rothman",
          "motivation": "\"for their discoveries of machinery regulating vesicle traffic, a major transport system in our cells\"",
          "share": "3"
        },
        {
          "id": "885",
          "firstname": "Randy W.",
          "surname": "Schekman",
          "motivation": "\"for their discoveries of machinery regulating vesicle traffic, a major transport system in our cells\"",
          "share": "3"
        },
        {
          "id": "886",
          "firstname": "Thomas C.",
          "surname": "Südhof",
          "motivation": "\"for their discoveries of machinery regulating vesicle traffic, a major transport system in our cells\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "2012",
      "category": "chemistry",
      "laureates": [
        {
          "id": "878",
          "firstname": "Robert J.",
          "surname": "Lefkowitz",
          "motivation": "\"for studies of G-protein-coupled receptors\"",
          "share": "2"
        },
        {
          "id": "879",
          "firstname": "Brian",
          "surname": "Kobilka",
          "motivation": "\"for studies of G-protein-coupled receptors\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "2012",
      "category": "economics",
      "laureates": [
        {
          "id": "882",
          "firstname": "Alvin E.",
          "surname": "Roth",
          "motivation": "\"for the theory of stable allocations and the practice of market design\"",
          "share": "2"
        },
        {
          "id": "883",
          "firstname": "Lloyd S.",
          "surname": "Shapley",
          "motivation": "\"for the theory of stable allocations and the practice of market design\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "2012",
      "category": "literature",
      "laureates": [
        {
          "id": "880",
          "firstname": "Mo",
          "surname": "Yan",
          "motivation": "\"who with hallucinatory realism merges folk tales, history and the contemporary\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "2012",
      "category": "peace",
      "laureates": [
        {
          "id": "881",
          "motivation": "\"for over six decades contributed to the advancement of peace and reconciliation, democracy and human rights in Europe\"",
          "share": "1",
          "firstname": "European Union"
        }
      ]
    },
    {
      "year": "2012",
      "category": "physics",
      "laureates": [
        {
          "id": "876",
          "firstname": "Serge",
          "surname": "Haroche",
          "motivation": "\"for ground-breaking experimental methods that enable measuring and manipulation of individual quantum systems\"",
          "share": "2"
        },
        {
          "id": "877",
          "firstname": "David J.",
          "surname": "Wineland",
          "motivation": "\"for ground-breaking experimental methods that enable measuring and manipulation of individual quantum systems\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "2012",
      "category": "medicine",
      "laureates": [
        {
          "id": "874",
          "firstname": "Sir John B.",
          "surname": "Gurdon",
          "motivation": "\"for the discovery that mature cells can be reprogrammed to become pluripotent\"",
          "share": "2"
        },
        {
          "id": "875",
          "firstname": "Shinya",
          "surname": "Yamanaka",
          "motivation": "\"for the discovery that mature cells can be reprogrammed to become pluripotent\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "2011",
      "category": "chemistry",
      "laureates": [
        {
          "id": "867",
          "firstname": "Dan",
          "surname": "Shechtman",
          "motivation": "\"for the discovery of quasicrystals\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "2011",
      "category": "economics",
      "laureates": [
        {
          "id": "872",
          "firstname": "Thomas J.",
          "surname": "Sargent",
          "motivation": "\"for their empirical research on cause and effect in the macroeconomy\"",
          "share": "2"
        },
        {
          "id": "873",
          "firstname": "Christopher A.",
          "surname": "Sims",
          "motivation": "\"for their empirical research on cause and effect in the macroeconomy\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "2011",
      "category": "literature",
      "laureates": [
        {
          "id": "868",
          "firstname": "Tomas",
          "surname": "Tranströmer",
          "motivation": "\"because, through his condensed, translucent images, he gives us fresh access to reality\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "2011",
      "category": "peace",
      "laureates": [
        {
          "id": "869",
          "firstname": "Ellen",
          "surname": "Johnson Sirleaf",
          "motivation": "\"for their non-violent struggle for the safety of women and for women's rights to full participation in peace-building work\"",
          "share": "3"
        },
        {
          "id": "870",
          "firstname": "Leymah",
          "surname": "Gbowee",
          "motivation": "\"for their non-violent struggle for the safety of women and for women's rights to full participation in peace-building work\"",
          "share": "3"
        },
        {
          "id": "871",
          "firstname": "Tawakkol",
          "surname": "Karman",
          "motivation": "\"for their non-violent struggle for the safety of women and for women's rights to full participation in peace-building work\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "2011",
      "category": "physics",
      "laureates": [
        {
          "id": "864",
          "firstname": "Saul",
          "surname": "Perlmutter",
          "motivation": "\"for the discovery of the accelerating expansion of the Universe through observations of distant supernovae\"",
          "share": "2"
        },
        {
          "id": "865",
          "firstname": "Brian P.",
          "surname": "Schmidt",
          "motivation": "\"for the discovery of the accelerating expansion of the Universe through observations of distant supernovae\"",
          "share": "4"
        },
        {
          "id": "866",
          "firstname": "Adam G.",
          "surname": "Riess",
          "motivation": "\"for the discovery of the accelerating expansion of the Universe through observations of distant supernovae\"",
          "share": "4"
        }
      ]
    },
    {
      "year": "2011",
      "category": "medicine",
      "laureates": [
        {
          "id": "861",
          "firstname": "Bruce A.",
          "surname": "Beutler",
          "motivation": "\"for their discoveries concerning the activation of innate immunity\"",
          "share": "4"
        },
        {
          "id": "862",
          "firstname": "Jules A.",
          "surname": "Hoffmann",
          "motivation": "\"for their discoveries concerning the activation of innate immunity\"",
          "share": "4"
        },
        {
          "id": "863",
          "firstname": "Ralph M.",
          "surname": "Steinman",
          "motivation": "\"for his discovery of the dendritic cell and its role in adaptive immunity\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "2010",
      "category": "chemistry",
      "laureates": [
        {
          "id": "851",
          "firstname": "Richard F.",
          "surname": "Heck",
          "motivation": "\"for palladium-catalyzed cross couplings in organic synthesis\"",
          "share": "3"
        },
        {
          "id": "852",
          "firstname": "Ei-ichi",
          "surname": "Negishi",
          "motivation": "\"for palladium-catalyzed cross couplings in organic synthesis\"",
          "share": "3"
        },
        {
          "id": "853",
          "firstname": "Akira",
          "surname": "Suzuki",
          "motivation": "\"for palladium-catalyzed cross couplings in organic synthesis\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "2010",
      "category": "economics",
      "laureates": [
        {
          "id": "856",
          "firstname": "Peter A.",
          "surname": "Diamond",
          "motivation": "\"for their analysis of markets with search frictions\"",
          "share": "3"
        },
        {
          "id": "857",
          "firstname": "Dale T.",
          "surname": "Mortensen",
          "motivation": "\"for their analysis of markets with search frictions\"",
          "share": "3"
        },
        {
          "id": "858",
          "firstname": "Christopher A.",
          "surname": "Pissarides",
          "motivation": "\"for their analysis of markets with search frictions\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "2010",
      "category": "literature",
      "laureates": [
        {
          "id": "854",
          "firstname": "Mario",
          "surname": "Vargas Llosa",
          "motivation": "\"for his cartography of structures of power and his trenchant images of the individual's resistance, revolt, and defeat\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "2010",
      "category": "peace",
      "laureates": [
        {
          "id": "855",
          "firstname": "Xiaobo",
          "surname": "Liu",
          "motivation": "\"for his long and non-violent struggle for fundamental human rights in China\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "2010",
      "category": "physics",
      "laureates": [
        {
          "id": "849",
          "firstname": "Andre",
          "surname": "Geim",
          "motivation": "\"for groundbreaking experiments regarding the two-dimensional material graphene\"",
          "share": "2"
        },
        {
          "id": "850",
          "firstname": "Konstantin",
          "surname": "Novoselov",
          "motivation": "\"for groundbreaking experiments regarding the two-dimensional material graphene\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "2010",
      "category": "medicine",
      "laureates": [
        {
          "id": "848",
          "firstname": "Robert G.",
          "surname": "Edwards",
          "motivation": "\"for the development of in vitro fertilization\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "2009",
      "category": "chemistry",
      "laureates": [
        {
          "id": "841",
          "firstname": "Venkatraman",
          "surname": "Ramakrishnan",
          "motivation": "\"for studies of the structure and function of the ribosome\"",
          "share": "3"
        },
        {
          "id": "842",
          "firstname": "Thomas A.",
          "surname": "Steitz",
          "motivation": "\"for studies of the structure and function of the ribosome\"",
          "share": "3"
        },
        {
          "id": "843",
          "firstname": "Ada E.",
          "surname": "Yonath",
          "motivation": "\"for studies of the structure and function of the ribosome\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "2009",
      "category": "economics",
      "laureates": [
        {
          "id": "846",
          "firstname": "Elinor",
          "surname": "Ostrom",
          "motivation": "\"for her analysis of economic governance, especially the commons\"",
          "share": "2"
        },
        {
          "id": "847",
          "firstname": "Oliver E.",
          "surname": "Williamson",
          "motivation": "\"for his analysis of economic governance, especially the boundaries of the firm\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "2009",
      "category": "literature",
      "laureates": [
        {
          "id": "844",
          "firstname": "Herta",
          "surname": "Müller",
          "motivation": "\"who, with the concentration of poetry and the frankness of prose, depicts the landscape of the dispossessed\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "2009",
      "category": "peace",
      "laureates": [
        {
          "id": "845",
          "firstname": "Barack",
          "surname": "Obama",
          "motivation": "\"for his extraordinary efforts to strengthen international diplomacy and cooperation between peoples\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "2009",
      "category": "physics",
      "laureates": [
        {
          "id": "838",
          "firstname": "Charles K.",
          "surname": "Kao",
          "motivation": "\"for groundbreaking achievements concerning the transmission of light in fibers for optical communication\"",
          "share": "2"
        },
        {
          "id": "839",
          "firstname": "Willard S.",
          "surname": "Boyle",
          "motivation": "\"for the invention of an imaging semiconductor circuit - the CCD sensor\"",
          "share": "4"
        },
        {
          "id": "840",
          "firstname": "George E.",
          "surname": "Smith",
          "motivation": "\"for the invention of an imaging semiconductor circuit - the CCD sensor\"",
          "share": "4"
        }
      ]
    },
    {
      "year": "2009",
      "category": "medicine",
      "laureates": [
        {
          "id": "835",
          "firstname": "Elizabeth H.",
          "surname": "Blackburn",
          "motivation": "\"for the discovery of how chromosomes are protected by telomeres and the enzyme telomerase\"",
          "share": "3"
        },
        {
          "id": "836",
          "firstname": "Carol W.",
          "surname": "Greider",
          "motivation": "\"for the discovery of how chromosomes are protected by telomeres and the enzyme telomerase\"",
          "share": "3"
        },
        {
          "id": "837",
          "firstname": "Jack W.",
          "surname": "Szostak",
          "motivation": "\"for the discovery of how chromosomes are protected by telomeres and the enzyme telomerase\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "2008",
      "category": "chemistry",
      "laureates": [
        {
          "id": "829",
          "firstname": "Osamu",
          "surname": "Shimomura",
          "motivation": "\"for the discovery and development of the green fluorescent protein, GFP\"",
          "share": "3"
        },
        {
          "id": "830",
          "firstname": "Martin",
          "surname": "Chalfie",
          "motivation": "\"for the discovery and development of the green fluorescent protein, GFP\"",
          "share": "3"
        },
        {
          "id": "831",
          "firstname": "Roger Y.",
          "surname": "Tsien",
          "motivation": "\"for the discovery and development of the green fluorescent protein, GFP\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "2008",
      "category": "economics",
      "laureates": [
        {
          "id": "834",
          "firstname": "Paul",
          "surname": "Krugman",
          "motivation": "\"for his analysis of trade patterns and location of economic activity\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "2008",
      "category": "literature",
      "laureates": [
        {
          "id": "832",
          "firstname": "Jean-Marie Gustave",
          "surname": "Le Clézio",
          "motivation": "\"author of new departures, poetic adventure and sensual ecstasy, explorer of a humanity beyond and below the reigning civilization\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "2008",
      "category": "peace",
      "laureates": [
        {
          "id": "833",
          "firstname": "Martti",
          "surname": "Ahtisaari",
          "motivation": "\"for his important efforts, on several continents and over more than three decades, to resolve international conflicts\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "2008",
      "category": "physics",
      "laureates": [
        {
          "id": "826",
          "firstname": "Yoichiro",
          "surname": "Nambu",
          "motivation": "\"for the discovery of the mechanism of spontaneous broken symmetry in subatomic physics\"",
          "share": "2"
        },
        {
          "id": "827",
          "firstname": "Makoto",
          "surname": "Kobayashi",
          "motivation": "\"for the discovery of the origin of the broken symmetry which predicts the existence of at least three families of quarks in nature\"",
          "share": "4"
        },
        {
          "id": "828",
          "firstname": "Toshihide",
          "surname": "Maskawa",
          "motivation": "\"for the discovery of the origin of the broken symmetry which predicts the existence of at least three families of quarks in nature\"",
          "share": "4"
        }
      ]
    },
    {
      "year": "2008",
      "category": "medicine",
      "laureates": [
        {
          "id": "823",
          "firstname": "Harald",
          "surname": "zur Hausen",
          "motivation": "\"for his discovery of human papilloma viruses causing cervical cancer\"",
          "share": "2"
        },
        {
          "id": "824",
          "firstname": "Françoise",
          "surname": "Barré-Sinoussi",
          "motivation": "\"for their discovery of human immunodeficiency virus\"",
          "share": "4"
        },
        {
          "id": "825",
          "firstname": "Luc",
          "surname": "Montagnier",
          "motivation": "\"for their discovery of human immunodeficiency virus\"",
          "share": "4"
        }
      ]
    },
    {
      "year": "2007",
      "category": "chemistry",
      "laureates": [
        {
          "id": "816",
          "firstname": "Gerhard",
          "surname": "Ertl",
          "motivation": "\"for his studies of chemical processes on solid surfaces\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "2007",
      "category": "economics",
      "laureates": [
        {
          "id": "820",
          "firstname": "Leonid",
          "surname": "Hurwicz",
          "motivation": "\"for having laid the foundations of mechanism design theory\"",
          "share": "3"
        },
        {
          "id": "821",
          "firstname": "Eric S.",
          "surname": "Maskin",
          "motivation": "\"for having laid the foundations of mechanism design theory\"",
          "share": "3"
        },
        {
          "id": "822",
          "firstname": "Roger B.",
          "surname": "Myerson",
          "motivation": "\"for having laid the foundations of mechanism design theory\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "2007",
      "category": "literature",
      "laureates": [
        {
          "id": "817",
          "firstname": "Doris",
          "surname": "Lessing",
          "motivation": "\"that epicist of the female experience, who with scepticism, fire and visionary power has subjected a divided civilisation to scrutiny\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "2007",
      "category": "peace",
      "laureates": [
        {
          "id": "818",
          "motivation": "\"for their efforts to build up and disseminate greater knowledge about man-made climate change, and to lay the foundations for the measures that are needed to counteract such change\"",
          "share": "2",
          "firstname": "Intergovernmental Panel on Climate Change"
        },
        {
          "id": "819",
          "firstname": "Al",
          "surname": "Gore",
          "motivation": "\"for their efforts to build up and disseminate greater knowledge about man-made climate change, and to lay the foundations for the measures that are needed to counteract such change\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "2007",
      "category": "physics",
      "laureates": [
        {
          "id": "814",
          "firstname": "Albert",
          "surname": "Fert",
          "motivation": "\"for the discovery of Giant Magnetoresistance\"",
          "share": "2"
        },
        {
          "id": "815",
          "firstname": "Peter",
          "surname": "Grünberg",
          "motivation": "\"for the discovery of Giant Magnetoresistance\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "2007",
      "category": "medicine",
      "laureates": [
        {
          "id": "811",
          "firstname": "Mario R.",
          "surname": "Capecchi",
          "motivation": "\"for their discoveries of principles for introducing specific gene modifications in mice by the use of embryonic stem cells\"",
          "share": "3"
        },
        {
          "id": "812",
          "firstname": "Sir Martin J.",
          "surname": "Evans",
          "motivation": "\"for their discoveries of principles for introducing specific gene modifications in mice by the use of embryonic stem cells\"",
          "share": "3"
        },
        {
          "id": "813",
          "firstname": "Oliver",
          "surname": "Smithies",
          "motivation": "\"for their discoveries of principles for introducing specific gene modifications in mice by the use of embryonic stem cells\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "2006",
      "category": "chemistry",
      "laureates": [
        {
          "id": "806",
          "firstname": "Roger D.",
          "surname": "Kornberg",
          "motivation": "\"for his studies of the molecular basis of eukaryotic transcription\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "2006",
      "category": "economics",
      "laureates": [
        {
          "id": "807",
          "firstname": "Edmund S.",
          "surname": "Phelps",
          "motivation": "\"for his analysis of intertemporal tradeoffs in macroeconomic policy\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "2006",
      "category": "literature",
      "laureates": [
        {
          "id": "808",
          "firstname": "Orhan",
          "surname": "Pamuk",
          "motivation": "\"who in the quest for the melancholic soul of his native city has discovered new symbols for the clash and interlacing of cultures\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "2006",
      "category": "peace",
      "laureates": [
        {
          "id": "809",
          "firstname": "Muhammad",
          "surname": "Yunus",
          "motivation": "\"for their efforts to create economic and social development from below\"",
          "share": "2"
        },
        {
          "id": "810",
          "motivation": "\"for their efforts to create economic and social development from below\"",
          "share": "2",
          "firstname": "Grameen Bank"
        }
      ]
    },
    {
      "year": "2006",
      "category": "physics",
      "laureates": [
        {
          "id": "804",
          "firstname": "John C.",
          "surname": "Mather",
          "motivation": "\"for their discovery of the blackbody form and anisotropy of the cosmic microwave background radiation\"",
          "share": "2"
        },
        {
          "id": "805",
          "firstname": "George F.",
          "surname": "Smoot",
          "motivation": "\"for their discovery of the blackbody form and anisotropy of the cosmic microwave background radiation\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "2006",
      "category": "medicine",
      "laureates": [
        {
          "id": "802",
          "firstname": "Andrew Z.",
          "surname": "Fire",
          "motivation": "\"for their discovery of RNA interference - gene silencing by double-stranded RNA\"",
          "share": "2"
        },
        {
          "id": "803",
          "firstname": "Craig C.",
          "surname": "Mello",
          "motivation": "\"for their discovery of RNA interference - gene silencing by double-stranded RNA\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "2005",
      "category": "chemistry",
      "laureates": [
        {
          "id": "794",
          "firstname": "Yves",
          "surname": "Chauvin",
          "motivation": "\"for the development of the metathesis method in organic synthesis\"",
          "share": "3"
        },
        {
          "id": "795",
          "firstname": "Robert H.",
          "surname": "Grubbs",
          "motivation": "\"for the development of the metathesis method in organic synthesis\"",
          "share": "3"
        },
        {
          "id": "796",
          "firstname": "Richard R.",
          "surname": "Schrock",
          "motivation": "\"for the development of the metathesis method in organic synthesis\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "2005",
      "category": "economics",
      "laureates": [
        {
          "id": "799",
          "firstname": "Robert J.",
          "surname": "Aumann",
          "motivation": "\"for having enhanced our understanding of conflict and cooperation through game-theory analysis\"",
          "share": "2"
        },
        {
          "id": "800",
          "firstname": "Thomas C.",
          "surname": "Schelling",
          "motivation": "\"for having enhanced our understanding of conflict and cooperation through game-theory analysis\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "2005",
      "category": "literature",
      "laureates": [
        {
          "id": "801",
          "firstname": "Harold",
          "surname": "Pinter",
          "motivation": "\"who in his plays uncovers the precipice under everyday prattle and forces entry into oppression's closed rooms\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "2005",
      "category": "peace",
      "laureates": [
        {
          "id": "797",
          "motivation": "\"for their efforts to prevent nuclear energy from being used for military purposes and to ensure that nuclear energy for peaceful purposes is used in the safest possible way\"",
          "share": "2",
          "firstname": "International Atomic Energy Agency"
        },
        {
          "id": "798",
          "firstname": "Mohamed",
          "surname": "ElBaradei",
          "motivation": "\"for their efforts to prevent nuclear energy from being used for military purposes and to ensure that nuclear energy for peaceful purposes is used in the safest possible way\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "2005",
      "category": "physics",
      "laureates": [
        {
          "id": "791",
          "firstname": "Roy J.",
          "surname": "Glauber",
          "motivation": "\"for his contribution to the quantum theory of optical coherence\"",
          "share": "2"
        },
        {
          "id": "792",
          "firstname": "John L.",
          "surname": "Hall",
          "motivation": "\"for their contributions to the development of laser-based precision spectroscopy, including the optical frequency comb technique\"",
          "share": "4"
        },
        {
          "id": "793",
          "firstname": "Theodor W.",
          "surname": "Hänsch",
          "motivation": "\"for their contributions to the development of laser-based precision spectroscopy, including the optical frequency comb technique\"",
          "share": "4"
        }
      ]
    },
    {
      "year": "2005",
      "category": "medicine",
      "laureates": [
        {
          "id": "789",
          "firstname": "Barry J.",
          "surname": "Marshall",
          "motivation": "\"for their discovery of the bacterium <i>Helicobacter pylori</i> and its role in gastritis and peptic ulcer disease\"",
          "share": "2"
        },
        {
          "id": "790",
          "firstname": "J. Robin",
          "surname": "Warren",
          "motivation": "\"for their discovery of the bacterium <i>Helicobacter pylori</i> and its role in gastritis and peptic ulcer disease\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "2004",
      "category": "chemistry",
      "laureates": [
        {
          "id": "779",
          "firstname": "Aaron",
          "surname": "Ciechanover",
          "motivation": "\"for the discovery of ubiquitin-mediated protein degradation\"",
          "share": "3"
        },
        {
          "id": "780",
          "firstname": "Avram",
          "surname": "Hershko",
          "motivation": "\"for the discovery of ubiquitin-mediated protein degradation\"",
          "share": "3"
        },
        {
          "id": "781",
          "firstname": "Irwin",
          "surname": "Rose",
          "motivation": "\"for the discovery of ubiquitin-mediated protein degradation\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "2004",
      "category": "economics",
      "laureates": [
        {
          "id": "786",
          "firstname": "Finn E.",
          "surname": "Kydland",
          "motivation": "\"for their contributions to dynamic macroeconomics: the time consistency of economic policy and the driving forces behind business cycles\"",
          "share": "2"
        },
        {
          "id": "787",
          "firstname": "Edward C.",
          "surname": "Prescott",
          "motivation": "\"for their contributions to dynamic macroeconomics: the time consistency of economic policy and the driving forces behind business cycles\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "2004",
      "category": "literature",
      "laureates": [
        {
          "id": "782",
          "firstname": "Elfriede",
          "surname": "Jelinek",
          "motivation": "\"for her musical flow of voices and counter-voices in novels and plays that with extraordinary linguistic zeal reveal the absurdity of society's clich&eacute;s and their subjugating power\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "2004",
      "category": "peace",
      "laureates": [
        {
          "id": "783",
          "firstname": "Wangari",
          "surname": "Maathai",
          "motivation": "\"for her contribution to sustainable development, democracy and peace\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "2004",
      "category": "physics",
      "laureates": [
        {
          "id": "776",
          "firstname": "David J.",
          "surname": "Gross",
          "motivation": "\"for the discovery of asymptotic freedom in the theory of the strong interaction\"",
          "share": "3"
        },
        {
          "id": "777",
          "firstname": "H. David",
          "surname": "Politzer",
          "motivation": "\"for the discovery of asymptotic freedom in the theory of the strong interaction\"",
          "share": "3"
        },
        {
          "id": "778",
          "firstname": "Frank",
          "surname": "Wilczek",
          "motivation": "\"for the discovery of asymptotic freedom in the theory of the strong interaction\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "2004",
      "category": "medicine",
      "laureates": [
        {
          "id": "774",
          "firstname": "Richard",
          "surname": "Axel",
          "motivation": "\"for their discoveries of odorant receptors and the organization of the olfactory system\"",
          "share": "2"
        },
        {
          "id": "775",
          "firstname": "Linda B.",
          "surname": "Buck",
          "motivation": "\"for their discoveries of odorant receptors and the organization of the olfactory system\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "2003",
      "category": "chemistry",
      "overallMotivation": "\"for discoveries concerning channels in cell membranes\"",
      "laureates": [
        {
          "id": "769",
          "firstname": "Peter",
          "surname": "Agre",
          "motivation": "\"for the discovery of water channels\"",
          "share": "2"
        },
        {
          "id": "770",
          "firstname": "Roderick",
          "surname": "MacKinnon",
          "motivation": "\"for structural and mechanistic studies of ion channels\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "2003",
      "category": "economics",
      "laureates": [
        {
          "id": "771",
          "firstname": "Robert F.",
          "surname": "Engle III",
          "motivation": "\"for methods of analyzing economic time series with time-varying volatility (ARCH)\"",
          "share": "2"
        },
        {
          "id": "772",
          "firstname": "Clive W.J.",
          "surname": "Granger",
          "motivation": "\"for methods of analyzing economic time series with common trends (cointegration)\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "2003",
      "category": "literature",
      "laureates": [
        {
          "id": "763",
          "firstname": "J. M.",
          "surname": "Coetzee",
          "motivation": "\"who in innumerable guises portrays the surprising involvement of the outsider\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "2003",
      "category": "peace",
      "laureates": [
        {
          "id": "773",
          "firstname": "Shirin",
          "surname": "Ebadi",
          "motivation": "\"for her efforts for democracy and human rights. She has focused especially on the struggle for the rights of women and children\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "2003",
      "category": "physics",
      "laureates": [
        {
          "id": "766",
          "firstname": "Alexei",
          "surname": "Abrikosov",
          "motivation": "\"for pioneering contributions to the theory of superconductors and superfluids\"",
          "share": "3"
        },
        {
          "id": "767",
          "firstname": "Vitaly L.",
          "surname": "Ginzburg",
          "motivation": "\"for pioneering contributions to the theory of superconductors and superfluids\"",
          "share": "3"
        },
        {
          "id": "768",
          "firstname": "Anthony J.",
          "surname": "Leggett",
          "motivation": "\"for pioneering contributions to the theory of superconductors and superfluids\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "2003",
      "category": "medicine",
      "laureates": [
        {
          "id": "764",
          "firstname": "Paul C.",
          "surname": "Lauterbur",
          "motivation": "\"for their discoveries concerning magnetic resonance imaging\"",
          "share": "2"
        },
        {
          "id": "765",
          "firstname": "Sir Peter",
          "surname": "Mansfield",
          "motivation": "\"for their discoveries concerning magnetic resonance imaging\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "2002",
      "category": "chemistry",
      "overallMotivation": "\"for the development of methods for identification and structure analyses of biological macromolecules\"",
      "laureates": [
        {
          "id": "756",
          "firstname": "John B.",
          "surname": "Fenn",
          "motivation": "\"for their development of soft desorption ionisation methods for mass spectrometric analyses of biological macromolecules\"",
          "share": "4"
        },
        {
          "id": "757",
          "firstname": "Koichi",
          "surname": "Tanaka",
          "motivation": "\"for their development of soft desorption ionisation methods for mass spectrometric analyses of biological macromolecules\"",
          "share": "4"
        },
        {
          "id": "758",
          "firstname": "Kurt",
          "surname": "Wüthrich",
          "motivation": "\"for his development of nuclear magnetic resonance spectroscopy for determining the three-dimensional structure of biological macromolecules in solution\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "2002",
      "category": "economics",
      "laureates": [
        {
          "id": "759",
          "firstname": "Daniel",
          "surname": "Kahneman",
          "motivation": "\"for having integrated insights from psychological research into economic science, especially concerning human judgment and decision-making under uncertainty\"",
          "share": "2"
        },
        {
          "id": "760",
          "firstname": "Vernon L.",
          "surname": "Smith",
          "motivation": "\"for having established laboratory experiments as a tool in empirical economic analysis, especially in the study of alternative market mechanisms\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "2002",
      "category": "literature",
      "laureates": [
        {
          "id": "761",
          "firstname": "Imre",
          "surname": "Kertész",
          "motivation": "\"for writing that upholds the fragile experience of the individual against the barbaric arbitrariness of history\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "2002",
      "category": "peace",
      "laureates": [
        {
          "id": "762",
          "firstname": "Jimmy",
          "surname": "Carter",
          "motivation": "\"for his decades of untiring effort to find peaceful solutions to international conflicts, to advance democracy and human rights, and to promote economic and social development\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "2002",
      "category": "physics",
      "laureates": [
        {
          "id": "753",
          "firstname": "Raymond",
          "surname": "Davis Jr.",
          "motivation": "\"for pioneering contributions to astrophysics, in particular for the detection of cosmic neutrinos\"",
          "share": "4"
        },
        {
          "id": "754",
          "firstname": "Masatoshi",
          "surname": "Koshiba",
          "motivation": "\"for pioneering contributions to astrophysics, in particular for the detection of cosmic neutrinos\"",
          "share": "4"
        },
        {
          "id": "755",
          "firstname": "Riccardo",
          "surname": "Giacconi",
          "motivation": "\"for pioneering contributions to astrophysics, which have led to the discovery of cosmic X-ray sources\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "2002",
      "category": "medicine",
      "laureates": [
        {
          "id": "750",
          "firstname": "Sydney",
          "surname": "Brenner",
          "motivation": "\"for their discoveries concerning genetic regulation of organ development and programmed cell death'\"",
          "share": "3"
        },
        {
          "id": "751",
          "firstname": "H. Robert",
          "surname": "Horvitz",
          "motivation": "\"for their discoveries concerning genetic regulation of organ development and programmed cell death'\"",
          "share": "3"
        },
        {
          "id": "752",
          "firstname": "John E.",
          "surname": "Sulston",
          "motivation": "\"for their discoveries concerning genetic regulation of organ development and programmed cell death'\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "2001",
      "category": "chemistry",
      "laureates": [
        {
          "id": "741",
          "firstname": "William",
          "surname": "Knowles",
          "motivation": "\"for their work on chirally catalysed hydrogenation reactions\"",
          "share": "4"
        },
        {
          "id": "742",
          "firstname": "Ryoji",
          "surname": "Noyori",
          "motivation": "\"for their work on chirally catalysed hydrogenation reactions\"",
          "share": "4"
        },
        {
          "id": "743",
          "firstname": "Barry",
          "surname": "Sharpless",
          "motivation": "\"for his work on chirally catalysed oxidation reactions\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "2001",
      "category": "economics",
      "laureates": [
        {
          "id": "744",
          "firstname": "George A.",
          "surname": "Akerlof",
          "motivation": "\"for their analyses of markets with asymmetric information\"",
          "share": "3"
        },
        {
          "id": "745",
          "firstname": "A. Michael",
          "surname": "Spence",
          "motivation": "\"for their analyses of markets with asymmetric information\"",
          "share": "3"
        },
        {
          "id": "746",
          "firstname": "Joseph E.",
          "surname": "Stiglitz",
          "motivation": "\"for their analyses of markets with asymmetric information\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "2001",
      "category": "literature",
      "laureates": [
        {
          "id": "747",
          "firstname": "V. S.",
          "surname": "Naipaul",
          "motivation": "\"for having united perceptive narrative and incorruptible scrutiny in works that compel us to see the presence of suppressed histories\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "2001",
      "category": "peace",
      "laureates": [
        {
          "id": "748",
          "motivation": "\"for their work for a better organized and more peaceful world\"",
          "share": "2",
          "firstname": "United Nations"
        },
        {
          "id": "749",
          "firstname": "Kofi",
          "surname": "Annan",
          "motivation": "\"for their work for a better organized and more peaceful world\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "2001",
      "category": "physics",
      "laureates": [
        {
          "id": "738",
          "firstname": "Eric",
          "surname": "Cornell",
          "motivation": "\"for the achievement of Bose-Einstein condensation in dilute gases of alkali atoms, and for early fundamental studies of the properties of the condensates\"",
          "share": "3"
        },
        {
          "id": "739",
          "firstname": "Wolfgang",
          "surname": "Ketterle",
          "motivation": "\"for the achievement of Bose-Einstein condensation in dilute gases of alkali atoms, and for early fundamental studies of the properties of the condensates\"",
          "share": "3"
        },
        {
          "id": "740",
          "firstname": "Carl",
          "surname": "Wieman",
          "motivation": "\"for the achievement of Bose-Einstein condensation in dilute gases of alkali atoms, and for early fundamental studies of the properties of the condensates\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "2001",
      "category": "medicine",
      "laureates": [
        {
          "id": "737",
          "firstname": "Sir Paul",
          "surname": "Nurse",
          "motivation": "\"for their discoveries of key regulators of the cell cycle\"",
          "share": "3"
        },
        {
          "id": "735",
          "firstname": "Leland",
          "surname": "Hartwell",
          "motivation": "\"for their discoveries of key regulators of the cell cycle\"",
          "share": "3"
        },
        {
          "id": "736",
          "firstname": "Tim",
          "surname": "Hunt",
          "motivation": "\"for their discoveries of key regulators of the cell cycle\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "2000",
      "category": "chemistry",
      "laureates": [
        {
          "id": "729",
          "firstname": "Alan",
          "surname": "Heeger",
          "motivation": "\"for the discovery and development of conductive polymers\"",
          "share": "3"
        },
        {
          "id": "730",
          "firstname": "Alan",
          "surname": "MacDiarmid",
          "motivation": "\"for the discovery and development of conductive polymers\"",
          "share": "3"
        },
        {
          "id": "731",
          "firstname": "Hideki",
          "surname": "Shirakawa",
          "motivation": "\"for the discovery and development of conductive polymers\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "2000",
      "category": "economics",
      "laureates": [
        {
          "id": "732",
          "firstname": "James J.",
          "surname": "Heckman",
          "motivation": "\"for his development of theory and methods for analyzing selective samples\"",
          "share": "2"
        },
        {
          "id": "733",
          "firstname": "Daniel L.",
          "surname": "McFadden",
          "motivation": "\"for his development of theory and methods for analyzing discrete choice\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "2000",
      "category": "literature",
      "laureates": [
        {
          "id": "734",
          "firstname": "Xingjian",
          "surname": "Gao",
          "motivation": "\"for an œuvre of universal validity, bitter insights and linguistic ingenuity, which has opened new paths for the Chinese novel and drama\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "2000",
      "category": "peace",
      "laureates": [
        {
          "id": "725",
          "firstname": "Kim",
          "surname": "Dae-jung",
          "motivation": "\"for his work for democracy and human rights in South Korea and in East Asia in general, and for peace and reconciliation with North Korea in particular\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "2000",
      "category": "physics",
      "overallMotivation": "\"for basic work on information and communication technology\"",
      "laureates": [
        {
          "id": "726",
          "firstname": "Zhores",
          "surname": "Alferov",
          "motivation": "\"for developing semiconductor heterostructures used in high-speed- and opto-electronics\"",
          "share": "4"
        },
        {
          "id": "727",
          "firstname": "Herbert",
          "surname": "Kroemer",
          "motivation": "\"for developing semiconductor heterostructures used in high-speed- and opto-electronics\"",
          "share": "4"
        },
        {
          "id": "728",
          "firstname": "Jack",
          "surname": "Kilby",
          "motivation": "\"for his part in the invention of the integrated circuit\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "2000",
      "category": "medicine",
      "laureates": [
        {
          "id": "722",
          "firstname": "Arvid",
          "surname": "Carlsson",
          "motivation": "\"for their discoveries concerning signal transduction in the nervous system\"",
          "share": "3"
        },
        {
          "id": "723",
          "firstname": "Paul",
          "surname": "Greengard",
          "motivation": "\"for their discoveries concerning signal transduction in the nervous system\"",
          "share": "3"
        },
        {
          "id": "724",
          "firstname": "Eric",
          "surname": "Kandel",
          "motivation": "\"for their discoveries concerning signal transduction in the nervous system\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "1999",
      "category": "chemistry",
      "laureates": [
        {
          "id": "292",
          "firstname": "Ahmed",
          "surname": "Zewail",
          "motivation": "\"for his studies of the transition states of chemical reactions using femtosecond spectroscopy\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1999",
      "category": "economics",
      "laureates": [
        {
          "id": "720",
          "firstname": "Robert",
          "surname": "Mundell",
          "motivation": "\"for his analysis of monetary and fiscal policy under different exchange rate regimes and his analysis of optimum currency areas\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1999",
      "category": "literature",
      "laureates": [
        {
          "id": "676",
          "firstname": "Günter",
          "surname": "Grass",
          "motivation": "\"whose frolicsome black fables portray the forgotten face of history\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1999",
      "category": "peace",
      "laureates": [
        {
          "id": "568",
          "motivation": "\"in recognition of the organisation's pioneering humanitarian work on several continents\"",
          "share": "1",
          "firstname": "Doctors Without Borders"
        }
      ]
    },
    {
      "year": "1999",
      "category": "physics",
      "laureates": [
        {
          "id": "158",
          "firstname": "Gerardus",
          "surname": "'t Hooft",
          "motivation": "\"for elucidating the quantum structure of electroweak interactions in physics\"",
          "share": "2"
        },
        {
          "id": "159",
          "firstname": "Martinus J.G.",
          "surname": "Veltman",
          "motivation": "\"for elucidating the quantum structure of electroweak interactions in physics\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1999",
      "category": "medicine",
      "laureates": [
        {
          "id": "461",
          "firstname": "Günter",
          "surname": "Blobel",
          "motivation": "\"for the discovery that proteins have intrinsic signals that govern their transport and localization in the cell\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1998",
      "category": "chemistry",
      "laureates": [
        {
          "id": "290",
          "firstname": "Walter",
          "surname": "Kohn",
          "motivation": "\"for his development of the density-functional theory\"",
          "share": "2"
        },
        {
          "id": "291",
          "firstname": "John",
          "surname": "Pople",
          "motivation": "\"for his development of computational methods in quantum chemistry\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1998",
      "category": "economics",
      "laureates": [
        {
          "id": "719",
          "firstname": "Amartya",
          "surname": "Sen",
          "motivation": "\"for his contributions to welfare economics\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1998",
      "category": "literature",
      "laureates": [
        {
          "id": "675",
          "firstname": "José",
          "surname": "Saramago",
          "motivation": "\"who with parables sustained by imagination, compassion and irony continually enables us once again to apprehend an elusory reality\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1998",
      "category": "peace",
      "laureates": [
        {
          "id": "566",
          "firstname": "John",
          "surname": "Hume",
          "motivation": "\"for their efforts to find a peaceful solution to the conflict in Northern Ireland\"",
          "share": "2"
        },
        {
          "id": "567",
          "firstname": "David",
          "surname": "Trimble",
          "motivation": "\"for their efforts to find a peaceful solution to the conflict in Northern Ireland\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1998",
      "category": "physics",
      "laureates": [
        {
          "id": "155",
          "firstname": "Robert B.",
          "surname": "Laughlin",
          "motivation": "\"for their discovery of a new form of quantum fluid with fractionally charged excitations\"",
          "share": "3"
        },
        {
          "id": "156",
          "firstname": "Horst L.",
          "surname": "Störmer",
          "motivation": "\"for their discovery of a new form of quantum fluid with fractionally charged excitations\"",
          "share": "3"
        },
        {
          "id": "157",
          "firstname": "Daniel C.",
          "surname": "Tsui",
          "motivation": "\"for their discovery of a new form of quantum fluid with fractionally charged excitations\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "1998",
      "category": "medicine",
      "laureates": [
        {
          "id": "458",
          "firstname": "Robert F.",
          "surname": "Furchgott",
          "motivation": "\"for their discoveries concerning nitric oxide as a signalling molecule in the cardiovascular system\"",
          "share": "3"
        },
        {
          "id": "459",
          "firstname": "Louis J.",
          "surname": "Ignarro",
          "motivation": "\"for their discoveries concerning nitric oxide as a signalling molecule in the cardiovascular system\"",
          "share": "3"
        },
        {
          "id": "460",
          "firstname": "Ferid",
          "surname": "Murad",
          "motivation": "\"for their discoveries concerning nitric oxide as a signalling molecule in the cardiovascular system\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "1997",
      "category": "chemistry",
      "laureates": [
        {
          "id": "287",
          "firstname": "Paul D.",
          "surname": "Boyer",
          "motivation": "\"for their elucidation of the enzymatic mechanism underlying the synthesis of adenosine triphosphate (ATP)\"",
          "share": "4"
        },
        {
          "id": "288",
          "firstname": "John E.",
          "surname": "Walker",
          "motivation": "\"for their elucidation of the enzymatic mechanism underlying the synthesis of adenosine triphosphate (ATP)\"",
          "share": "4"
        },
        {
          "id": "289",
          "firstname": "Jens C.",
          "surname": "Skou",
          "motivation": "\"for the first discovery of an ion-transporting enzyme, Na+, K+ -ATPase\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1997",
      "category": "economics",
      "laureates": [
        {
          "id": "717",
          "firstname": "Robert C.",
          "surname": "Merton",
          "motivation": "\"for a new method to determine the value of derivatives\"",
          "share": "2"
        },
        {
          "id": "718",
          "firstname": "Myron",
          "surname": "Scholes",
          "motivation": "\"for a new method to determine the value of derivatives\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1997",
      "category": "literature",
      "laureates": [
        {
          "id": "674",
          "firstname": "Dario",
          "surname": "Fo",
          "motivation": "\"who emulates the jesters of the Middle Ages in scourging authority and upholding the dignity of the downtrodden\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1997",
      "category": "peace",
      "laureates": [
        {
          "id": "564",
          "motivation": "\"for their work for the banning and clearing of anti-personnel mines\"",
          "share": "2",
          "firstname": "International Campaign to Ban Landmines"
        },
        {
          "id": "565",
          "firstname": "Jody",
          "surname": "Williams",
          "motivation": "\"for their work for the banning and clearing of anti-personnel mines\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1997",
      "category": "physics",
      "laureates": [
        {
          "id": "152",
          "firstname": "Steven",
          "surname": "Chu",
          "motivation": "\"for development of methods to cool and trap atoms with laser light\"",
          "share": "3"
        },
        {
          "id": "153",
          "firstname": "Claude",
          "surname": "Cohen-Tannoudji",
          "motivation": "\"for development of methods to cool and trap atoms with laser light\"",
          "share": "3"
        },
        {
          "id": "154",
          "firstname": "William D.",
          "surname": "Phillips",
          "motivation": "\"for development of methods to cool and trap atoms with laser light\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "1997",
      "category": "medicine",
      "laureates": [
        {
          "id": "457",
          "firstname": "Stanley B.",
          "surname": "Prusiner",
          "motivation": "\"for his discovery of Prions - a new biological principle of infection\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1996",
      "category": "chemistry",
      "laureates": [
        {
          "id": "284",
          "firstname": "Robert F.",
          "surname": "Curl Jr.",
          "motivation": "\"for their discovery of fullerenes\"",
          "share": "3"
        },
        {
          "id": "285",
          "firstname": "Sir Harold",
          "surname": "Kroto",
          "motivation": "\"for their discovery of fullerenes\"",
          "share": "3"
        },
        {
          "id": "286",
          "firstname": "Richard E.",
          "surname": "Smalley",
          "motivation": "\"for their discovery of fullerenes\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "1996",
      "category": "economics",
      "laureates": [
        {
          "id": "715",
          "firstname": "James A.",
          "surname": "Mirrlees",
          "motivation": "\"for their fundamental contributions to the economic theory of incentives under asymmetric information\"",
          "share": "2"
        },
        {
          "id": "716",
          "firstname": "William",
          "surname": "Vickrey",
          "motivation": "\"for their fundamental contributions to the economic theory of incentives under asymmetric information\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1996",
      "category": "literature",
      "laureates": [
        {
          "id": "673",
          "firstname": "Wislawa",
          "surname": "Szymborska",
          "motivation": "\"for poetry that with ironic precision allows the historical and biological context to come to light in fragments of human reality\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1996",
      "category": "peace",
      "laureates": [
        {
          "id": "562",
          "firstname": "Carlos Filipe Ximenes",
          "surname": "Belo",
          "motivation": "\"for their work towards a just and peaceful solution to the conflict in East Timor\"",
          "share": "2"
        },
        {
          "id": "563",
          "firstname": "José",
          "surname": "Ramos-Horta",
          "motivation": "\"for their work towards a just and peaceful solution to the conflict in East Timor\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1996",
      "category": "physics",
      "laureates": [
        {
          "id": "149",
          "firstname": "David M.",
          "surname": "Lee",
          "motivation": "\"for their discovery of superfluidity in helium-3\"",
          "share": "3"
        },
        {
          "id": "150",
          "firstname": "Douglas D.",
          "surname": "Osheroff",
          "motivation": "\"for their discovery of superfluidity in helium-3\"",
          "share": "3"
        },
        {
          "id": "151",
          "firstname": "Robert C.",
          "surname": "Richardson",
          "motivation": "\"for their discovery of superfluidity in helium-3\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "1996",
      "category": "medicine",
      "laureates": [
        {
          "id": "455",
          "firstname": "Peter C.",
          "surname": "Doherty",
          "motivation": "\"for their discoveries concerning the specificity of the cell mediated immune defence\"",
          "share": "2"
        },
        {
          "id": "456",
          "firstname": "Rolf M.",
          "surname": "Zinkernagel",
          "motivation": "\"for their discoveries concerning the specificity of the cell mediated immune defence\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1995",
      "category": "chemistry",
      "laureates": [
        {
          "id": "281",
          "firstname": "Paul J.",
          "surname": "Crutzen",
          "motivation": "\"for their work in atmospheric chemistry, particularly concerning the formation and decomposition of ozone\"",
          "share": "3"
        },
        {
          "id": "282",
          "firstname": "Mario J.",
          "surname": "Molina",
          "motivation": "\"for their work in atmospheric chemistry, particularly concerning the formation and decomposition of ozone\"",
          "share": "3"
        },
        {
          "id": "283",
          "firstname": "F. Sherwood",
          "surname": "Rowland",
          "motivation": "\"for their work in atmospheric chemistry, particularly concerning the formation and decomposition of ozone\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "1995",
      "category": "economics",
      "laureates": [
        {
          "id": "714",
          "firstname": "Robert E.",
          "surname": "Lucas Jr.",
          "motivation": "\"for having developed and applied the hypothesis of rational expectations, and thereby having transformed macroeconomic analysis and deepened our understanding of economic policy\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1995",
      "category": "literature",
      "laureates": [
        {
          "id": "672",
          "firstname": "Seamus",
          "surname": "Heaney",
          "motivation": "\"for works of lyrical beauty and ethical depth, which exalt everyday miracles and the living past\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1995",
      "category": "peace",
      "laureates": [
        {
          "id": "560",
          "firstname": "Joseph",
          "surname": "Rotblat",
          "motivation": "\"for their efforts to diminish the part played by nuclear arms in international politics and, in the longer run, to eliminate such arms\"",
          "share": "2"
        },
        {
          "id": "561",
          "motivation": "\"for their efforts to diminish the part played by nuclear arms in international politics and, in the longer run, to eliminate such arms\"",
          "share": "2",
          "firstname": "Pugwash Conferences on Science and World Affairs"
        }
      ]
    },
    {
      "year": "1995",
      "category": "physics",
      "overallMotivation": "\"for pioneering experimental contributions to lepton physics\"",
      "laureates": [
        {
          "id": "147",
          "firstname": "Martin L.",
          "surname": "Perl",
          "motivation": "\"for the discovery of the tau lepton\"",
          "share": "2"
        },
        {
          "id": "148",
          "firstname": "Frederick",
          "surname": "Reines",
          "motivation": "\"for the detection of the neutrino\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1995",
      "category": "medicine",
      "laureates": [
        {
          "id": "452",
          "firstname": "Edward B.",
          "surname": "Lewis",
          "motivation": "\"for their discoveries concerning the genetic control of early embryonic development\"",
          "share": "3"
        },
        {
          "id": "453",
          "firstname": "Christiane",
          "surname": "Nüsslein-Volhard",
          "motivation": "\"for their discoveries concerning the genetic control of early embryonic development\"",
          "share": "3"
        },
        {
          "id": "454",
          "firstname": "Eric F.",
          "surname": "Wieschaus",
          "motivation": "\"for their discoveries concerning the genetic control of early embryonic development\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "1994",
      "category": "chemistry",
      "laureates": [
        {
          "id": "280",
          "firstname": "George A.",
          "surname": "Olah",
          "motivation": "\"for his contribution to carbocation chemistry\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1994",
      "category": "economics",
      "laureates": [
        {
          "id": "711",
          "firstname": "John C.",
          "surname": "Harsanyi",
          "motivation": "\"for their pioneering analysis of equilibria in the theory of non-cooperative games\"",
          "share": "3"
        },
        {
          "id": "712",
          "firstname": "John F.",
          "surname": "Nash Jr.",
          "motivation": "\"for their pioneering analysis of equilibria in the theory of non-cooperative games\"",
          "share": "3"
        },
        {
          "id": "713",
          "firstname": "Reinhard",
          "surname": "Selten",
          "motivation": "\"for their pioneering analysis of equilibria in the theory of non-cooperative games\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "1994",
      "category": "literature",
      "laureates": [
        {
          "id": "671",
          "firstname": "Kenzaburo",
          "surname": "Oe",
          "motivation": "\"who with poetic force creates an imagined world, where life and myth condense to form a disconcerting picture of the human predicament today\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1994",
      "category": "peace",
      "laureates": [
        {
          "id": "557",
          "firstname": "Yasser",
          "surname": "Arafat",
          "motivation": "\"for their efforts to create peace in the Middle East\"",
          "share": "3"
        },
        {
          "id": "558",
          "firstname": "Shimon",
          "surname": "Peres",
          "motivation": "\"for their efforts to create peace in the Middle East\"",
          "share": "3"
        },
        {
          "id": "559",
          "firstname": "Yitzhak",
          "surname": "Rabin",
          "motivation": "\"for their efforts to create peace in the Middle East\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "1994",
      "category": "physics",
      "overallMotivation": "\"for pioneering contributions to the development of neutron scattering techniques for studies of condensed matter\"",
      "laureates": [
        {
          "id": "145",
          "firstname": "Bertram N.",
          "surname": "Brockhouse",
          "motivation": "\"for the development of neutron spectroscopy\"",
          "share": "2"
        },
        {
          "id": "146",
          "firstname": "Clifford G.",
          "surname": "Shull",
          "motivation": "\"for the development of the neutron diffraction technique\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1994",
      "category": "medicine",
      "laureates": [
        {
          "id": "450",
          "firstname": "Alfred G.",
          "surname": "Gilman",
          "motivation": "\"for their discovery of G-proteins and the role of these proteins in signal transduction in cells\"",
          "share": "2"
        },
        {
          "id": "451",
          "firstname": "Martin",
          "surname": "Rodbell",
          "motivation": "\"for their discovery of G-proteins and the role of these proteins in signal transduction in cells\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1993",
      "category": "chemistry",
      "overallMotivation": "\"for contributions to the developments of methods within DNA-based chemistry\"",
      "laureates": [
        {
          "id": "278",
          "firstname": "Kary B.",
          "surname": "Mullis",
          "motivation": "\"for his invention of the polymerase chain reaction (PCR) method\"",
          "share": "2"
        },
        {
          "id": "279",
          "firstname": "Michael",
          "surname": "Smith",
          "motivation": "\"for his fundamental contributions to the establishment of oligonucleotide-based, site-directed mutagenesis and its development for protein studies\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1993",
      "category": "economics",
      "laureates": [
        {
          "id": "709",
          "firstname": "Robert W.",
          "surname": "Fogel",
          "motivation": "\"for having renewed research in economic history by applying economic theory and quantitative methods in order to explain economic and institutional change\"",
          "share": "2"
        },
        {
          "id": "710",
          "firstname": "Douglass C.",
          "surname": "North",
          "motivation": "\"for having renewed research in economic history by applying economic theory and quantitative methods in order to explain economic and institutional change\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1993",
      "category": "literature",
      "laureates": [
        {
          "id": "670",
          "firstname": "Toni",
          "surname": "Morrison",
          "motivation": "\"who in novels characterized by visionary force and poetic import, gives life to an essential aspect of American reality\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1993",
      "category": "peace",
      "laureates": [
        {
          "id": "555",
          "firstname": "Nelson",
          "surname": "Mandela",
          "motivation": "\"for their work for the peaceful termination of the apartheid regime, and for laying the foundations for a new democratic South Africa\"",
          "share": "2"
        },
        {
          "id": "556",
          "firstname": "F.W.",
          "surname": "de Klerk",
          "motivation": "\"for their work for the peaceful termination of the apartheid regime, and for laying the foundations for a new democratic South Africa\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1993",
      "category": "physics",
      "laureates": [
        {
          "id": "143",
          "firstname": "Russell A.",
          "surname": "Hulse",
          "motivation": "\"for the discovery of a new type of pulsar, a discovery that has opened up new possibilities for the study of gravitation\"",
          "share": "2"
        },
        {
          "id": "144",
          "firstname": "Joseph H.",
          "surname": "Taylor Jr.",
          "motivation": "\"for the discovery of a new type of pulsar, a discovery that has opened up new possibilities for the study of gravitation\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1993",
      "category": "medicine",
      "laureates": [
        {
          "id": "448",
          "firstname": "Richard J.",
          "surname": "Roberts",
          "motivation": "\"for their discoveries of split genes\"",
          "share": "2"
        },
        {
          "id": "449",
          "firstname": "Phillip A.",
          "surname": "Sharp",
          "motivation": "\"for their discoveries of split genes\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1992",
      "category": "chemistry",
      "laureates": [
        {
          "id": "277",
          "firstname": "Rudolph A.",
          "surname": "Marcus",
          "motivation": "\"for his contributions to the theory of electron transfer reactions in chemical systems\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1992",
      "category": "economics",
      "laureates": [
        {
          "id": "708",
          "firstname": "Gary",
          "surname": "Becker",
          "motivation": "\"for having extended the domain of microeconomic analysis to a wide range of human behaviour and interaction, including nonmarket behaviour\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1992",
      "category": "literature",
      "laureates": [
        {
          "id": "669",
          "firstname": "Derek",
          "surname": "Walcott",
          "motivation": "\"for a poetic oeuvre of great luminosity, sustained by a historical vision, the outcome of a multicultural commitment\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1992",
      "category": "peace",
      "laureates": [
        {
          "id": "554",
          "firstname": "Rigoberta",
          "surname": "Menchú Tum",
          "motivation": "\"for her struggle for social justice and ethno-cultural reconciliation based on respect for the rights of indigenous peoples\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1992",
      "category": "physics",
      "laureates": [
        {
          "id": "142",
          "firstname": "Georges",
          "surname": "Charpak",
          "motivation": "\"for his invention and development of particle detectors, in particular the multiwire proportional chamber\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1992",
      "category": "medicine",
      "laureates": [
        {
          "id": "446",
          "firstname": "Edmond H.",
          "surname": "Fischer",
          "motivation": "\"for their discoveries concerning reversible protein phosphorylation as a biological regulatory mechanism\"",
          "share": "2"
        },
        {
          "id": "447",
          "firstname": "Edwin G.",
          "surname": "Krebs",
          "motivation": "\"for their discoveries concerning reversible protein phosphorylation as a biological regulatory mechanism\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1991",
      "category": "chemistry",
      "laureates": [
        {
          "id": "276",
          "firstname": "Richard R.",
          "surname": "Ernst",
          "motivation": "\"for his contributions to the development of the methodology of high resolution nuclear magnetic resonance (NMR) spectroscopy\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1991",
      "category": "economics",
      "laureates": [
        {
          "id": "707",
          "firstname": "Ronald H.",
          "surname": "Coase",
          "motivation": "\"for his discovery and clarification of the significance of transaction costs and property rights for the institutional structure and functioning of the economy\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1991",
      "category": "literature",
      "laureates": [
        {
          "id": "668",
          "firstname": "Nadine",
          "surname": "Gordimer",
          "motivation": "\"who through her magnificent epic writing has - in the words of Alfred Nobel - been of very great benefit to humanity\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1991",
      "category": "peace",
      "laureates": [
        {
          "id": "553",
          "firstname": "Aung San Suu Kyi",
          "motivation": "\"for her non-violent struggle for democracy and human rights\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1991",
      "category": "physics",
      "laureates": [
        {
          "id": "141",
          "firstname": "Pierre-Gilles",
          "surname": "de Gennes",
          "motivation": "\"for discovering that methods developed for studying order phenomena in simple systems can be generalized to more complex forms of matter, in particular to liquid crystals and polymers\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1991",
      "category": "medicine",
      "laureates": [
        {
          "id": "444",
          "firstname": "Erwin",
          "surname": "Neher",
          "motivation": "\"for their discoveries concerning the function of single ion channels in cells\"",
          "share": "2"
        },
        {
          "id": "445",
          "firstname": "Bert",
          "surname": "Sakmann",
          "motivation": "\"for their discoveries concerning the function of single ion channels in cells\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1990",
      "category": "chemistry",
      "laureates": [
        {
          "id": "275",
          "firstname": "Elias James",
          "surname": "Corey",
          "motivation": "\"for his development of the theory and methodology of organic synthesis\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1990",
      "category": "economics",
      "laureates": [
        {
          "id": "704",
          "firstname": "Harry M.",
          "surname": "Markowitz",
          "motivation": "\"for their pioneering work in the theory of financial economics\"",
          "share": "3"
        },
        {
          "id": "705",
          "firstname": "Merton H.",
          "surname": "Miller",
          "motivation": "\"for their pioneering work in the theory of financial economics\"",
          "share": "3"
        },
        {
          "id": "706",
          "firstname": "William F.",
          "surname": "Sharpe",
          "motivation": "\"for their pioneering work in the theory of financial economics\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "1990",
      "category": "literature",
      "laureates": [
        {
          "id": "667",
          "firstname": "Octavio",
          "surname": "Paz",
          "motivation": "\"for impassioned writing with wide horizons, characterized by sensuous intelligence and humanistic integrity\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1990",
      "category": "peace",
      "laureates": [
        {
          "id": "552",
          "firstname": "Mikhail",
          "surname": "Gorbachev",
          "motivation": "\"for the leading role he played in the radical changes in East-West relations\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1990",
      "category": "physics",
      "laureates": [
        {
          "id": "138",
          "firstname": "Jerome I.",
          "surname": "Friedman",
          "motivation": "\"for their pioneering investigations concerning deep inelastic scattering of electrons on protons and bound neutrons, which have been of essential importance for the development of the quark model in particle physics\"",
          "share": "3"
        },
        {
          "id": "139",
          "firstname": "Henry W.",
          "surname": "Kendall",
          "motivation": "\"for their pioneering investigations concerning deep inelastic scattering of electrons on protons and bound neutrons, which have been of essential importance for the development of the quark model in particle physics\"",
          "share": "3"
        },
        {
          "id": "140",
          "firstname": "Richard E.",
          "surname": "Taylor",
          "motivation": "\"for their pioneering investigations concerning deep inelastic scattering of electrons on protons and bound neutrons, which have been of essential importance for the development of the quark model in particle physics\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "1990",
      "category": "medicine",
      "laureates": [
        {
          "id": "442",
          "firstname": "Joseph E.",
          "surname": "Murray",
          "motivation": "\"for their discoveries concerning organ and cell transplantation in the treatment of human disease\"",
          "share": "2"
        },
        {
          "id": "443",
          "firstname": "E. Donnall",
          "surname": "Thomas",
          "motivation": "\"for their discoveries concerning organ and cell transplantation in the treatment of human disease\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1989",
      "category": "chemistry",
      "laureates": [
        {
          "id": "273",
          "firstname": "Sidney",
          "surname": "Altman",
          "motivation": "\"for their discovery of catalytic properties of RNA\"",
          "share": "2"
        },
        {
          "id": "274",
          "firstname": "Thomas R.",
          "surname": "Cech",
          "motivation": "\"for their discovery of catalytic properties of RNA\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1989",
      "category": "economics",
      "laureates": [
        {
          "id": "703",
          "firstname": "Trygve",
          "surname": "Haavelmo",
          "motivation": "\"for his clarification of the probability theory foundations of econometrics and his analyses of simultaneous economic structures\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1989",
      "category": "literature",
      "laureates": [
        {
          "id": "666",
          "firstname": "Camilo José",
          "surname": "Cela",
          "motivation": "\"for a rich and intensive prose, which with restrained compassion forms a challenging vision of man's vulnerability\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1989",
      "category": "peace",
      "laureates": [
        {
          "id": "551",
          "firstname": "Lhamo",
          "surname": "Thondup",
          "motivation": "\"for advocating peaceful solutions based upon tolerance and mutual respect in order to preserve the historical and cultural heritage of his people\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1989",
      "category": "physics",
      "laureates": [
        {
          "id": "135",
          "firstname": "Norman F.",
          "surname": "Ramsey",
          "motivation": "\"for the invention of the separated oscillatory fields method and its use in the hydrogen maser and other atomic clocks\"",
          "share": "2"
        },
        {
          "id": "136",
          "firstname": "Hans G.",
          "surname": "Dehmelt",
          "motivation": "\"for the development of the ion trap technique\"",
          "share": "4"
        },
        {
          "id": "137",
          "firstname": "Wolfgang",
          "surname": "Paul",
          "motivation": "\"for the development of the ion trap technique\"",
          "share": "4"
        }
      ]
    },
    {
      "year": "1989",
      "category": "medicine",
      "laureates": [
        {
          "id": "440",
          "firstname": "J. Michael",
          "surname": "Bishop",
          "motivation": "\"for their discovery of the cellular origin of retroviral oncogenes\"",
          "share": "2"
        },
        {
          "id": "441",
          "firstname": "Harold E.",
          "surname": "Varmus",
          "motivation": "\"for their discovery of the cellular origin of retroviral oncogenes\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1988",
      "category": "chemistry",
      "laureates": [
        {
          "id": "270",
          "firstname": "Johann",
          "surname": "Deisenhofer",
          "motivation": "\"for the determination of the three-dimensional structure of a photosynthetic reaction centre\"",
          "share": "3"
        },
        {
          "id": "271",
          "firstname": "Robert",
          "surname": "Huber",
          "motivation": "\"for the determination of the three-dimensional structure of a photosynthetic reaction centre\"",
          "share": "3"
        },
        {
          "id": "272",
          "firstname": "Hartmut",
          "surname": "Michel",
          "motivation": "\"for the determination of the three-dimensional structure of a photosynthetic reaction centre\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "1988",
      "category": "economics",
      "laureates": [
        {
          "id": "702",
          "firstname": "Maurice",
          "surname": "Allais",
          "motivation": "\"for his pioneering contributions to the theory of markets and efficient utilization of resources\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1988",
      "category": "literature",
      "laureates": [
        {
          "id": "665",
          "firstname": "Naguib",
          "surname": "Mahfouz",
          "motivation": "\"who, through works rich in nuance - now clear-sightedly realistic, now evocatively ambiguous - has formed an Arabian narrative art that applies to all mankind\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1988",
      "category": "peace",
      "laureates": [
        {
          "id": "550",
          "motivation": "\"for preventing armed clashes and creating conditions for negotiations\"",
          "share": "1",
          "firstname": "United Nations Peacekeeping Forces"
        }
      ]
    },
    {
      "year": "1988",
      "category": "physics",
      "laureates": [
        {
          "id": "132",
          "firstname": "Leon M.",
          "surname": "Lederman",
          "motivation": "\"for the neutrino beam method and the demonstration of the doublet structure of the leptons through the discovery of the muon neutrino\"",
          "share": "3"
        },
        {
          "id": "133",
          "firstname": "Melvin",
          "surname": "Schwartz",
          "motivation": "\"for the neutrino beam method and the demonstration of the doublet structure of the leptons through the discovery of the muon neutrino\"",
          "share": "3"
        },
        {
          "id": "134",
          "firstname": "Jack",
          "surname": "Steinberger",
          "motivation": "\"for the neutrino beam method and the demonstration of the doublet structure of the leptons through the discovery of the muon neutrino\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "1988",
      "category": "medicine",
      "laureates": [
        {
          "id": "437",
          "firstname": "Sir James W.",
          "surname": "Black",
          "motivation": "\"for their discoveries of important principles for drug treatment\"",
          "share": "3"
        },
        {
          "id": "438",
          "firstname": "Gertrude B.",
          "surname": "Elion",
          "motivation": "\"for their discoveries of important principles for drug treatment\"",
          "share": "3"
        },
        {
          "id": "439",
          "firstname": "George H.",
          "surname": "Hitchings",
          "motivation": "\"for their discoveries of important principles for drug treatment\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "1987",
      "category": "chemistry",
      "laureates": [
        {
          "id": "267",
          "firstname": "Donald J.",
          "surname": "Cram",
          "motivation": "\"for their development and use of molecules with structure-specific interactions of high selectivity\"",
          "share": "3"
        },
        {
          "id": "268",
          "firstname": "Jean-Marie",
          "surname": "Lehn",
          "motivation": "\"for their development and use of molecules with structure-specific interactions of high selectivity\"",
          "share": "3"
        },
        {
          "id": "269",
          "firstname": "Charles J.",
          "surname": "Pedersen",
          "motivation": "\"for their development and use of molecules with structure-specific interactions of high selectivity\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "1987",
      "category": "economics",
      "laureates": [
        {
          "id": "701",
          "firstname": "Robert M.",
          "surname": "Solow",
          "motivation": "\"for his contributions to the theory of economic growth\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1987",
      "category": "literature",
      "laureates": [
        {
          "id": "664",
          "firstname": "Joseph",
          "surname": "Brodsky",
          "motivation": "\"for an all-embracing authorship, imbued with clarity of thought and poetic intensity\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1987",
      "category": "peace",
      "laureates": [
        {
          "id": "549",
          "firstname": "Oscar",
          "surname": "Arias Sánchez",
          "motivation": "\"for his work for lasting peace in Central America\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1987",
      "category": "physics",
      "laureates": [
        {
          "id": "130",
          "firstname": "J. Georg",
          "surname": "Bednorz",
          "motivation": "\"for their important break-through in the discovery of superconductivity in ceramic materials\"",
          "share": "2"
        },
        {
          "id": "131",
          "firstname": "K. Alex",
          "surname": "Müller",
          "motivation": "\"for their important break-through in the discovery of superconductivity in ceramic materials\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1987",
      "category": "medicine",
      "laureates": [
        {
          "id": "436",
          "firstname": "Susumu",
          "surname": "Tonegawa",
          "motivation": "\"for his discovery of the genetic principle for generation of antibody diversity\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1986",
      "category": "chemistry",
      "laureates": [
        {
          "id": "264",
          "firstname": "Dudley R.",
          "surname": "Herschbach",
          "motivation": "\"for their contributions concerning the dynamics of chemical elementary processes\"",
          "share": "3"
        },
        {
          "id": "265",
          "firstname": "Yuan T.",
          "surname": "Lee",
          "motivation": "\"for their contributions concerning the dynamics of chemical elementary processes\"",
          "share": "3"
        },
        {
          "id": "266",
          "firstname": "John C.",
          "surname": "Polanyi",
          "motivation": "\"for their contributions concerning the dynamics of chemical elementary processes\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "1986",
      "category": "economics",
      "laureates": [
        {
          "id": "700",
          "firstname": "James M.",
          "surname": "Buchanan Jr.",
          "motivation": "\"for his development of the contractual and constitutional bases for the theory of economic and political decision-making\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1986",
      "category": "literature",
      "laureates": [
        {
          "id": "663",
          "firstname": "Wole",
          "surname": "Soyinka",
          "motivation": "\"who in a wide cultural perspective and with poetic overtones fashions the drama of existence\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1986",
      "category": "peace",
      "laureates": [
        {
          "id": "548",
          "firstname": "Elie",
          "surname": "Wiesel",
          "motivation": "\"for being a messenger to mankind: his message is one of peace, atonement and dignity\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1986",
      "category": "physics",
      "laureates": [
        {
          "id": "127",
          "firstname": "Ernst",
          "surname": "Ruska",
          "motivation": "\"for his fundamental work in electron optics, and for the design of the first electron microscope\"",
          "share": "2"
        },
        {
          "id": "128",
          "firstname": "Gerd",
          "surname": "Binnig",
          "motivation": "\"for their design of the scanning tunneling microscope\"",
          "share": "4"
        },
        {
          "id": "129",
          "firstname": "Heinrich",
          "surname": "Rohrer",
          "motivation": "\"for their design of the scanning tunneling microscope\"",
          "share": "4"
        }
      ]
    },
    {
      "year": "1986",
      "category": "medicine",
      "laureates": [
        {
          "id": "434",
          "firstname": "Stanley",
          "surname": "Cohen",
          "motivation": "\"for their discoveries of growth factors\"",
          "share": "2"
        },
        {
          "id": "435",
          "firstname": "Rita",
          "surname": "Levi-Montalcini",
          "motivation": "\"for their discoveries of growth factors\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1985",
      "category": "chemistry",
      "laureates": [
        {
          "id": "262",
          "firstname": "Herbert A.",
          "surname": "Hauptman",
          "motivation": "\"for their outstanding achievements in the development of direct methods for the determination of crystal structures\"",
          "share": "2"
        },
        {
          "id": "263",
          "firstname": "Jerome",
          "surname": "Karle",
          "motivation": "\"for their outstanding achievements in the development of direct methods for the determination of crystal structures\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1985",
      "category": "economics",
      "laureates": [
        {
          "id": "699",
          "firstname": "Franco",
          "surname": "Modigliani",
          "motivation": "\"for his pioneering analyses of saving and of financial markets\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1985",
      "category": "literature",
      "laureates": [
        {
          "id": "662",
          "firstname": "Claude",
          "surname": "Simon",
          "motivation": "\"who in his novel combines the poet's and the painter's creativeness with a deepened awareness of time in the depiction of the human condition\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1985",
      "category": "peace",
      "laureates": [
        {
          "id": "547",
          "motivation": "\"for spreading authoritative information and by creating awareness of the catastrophic consequences of nuclear war\"",
          "share": "1",
          "firstname": "International Physicians for the Prevention of Nuclear War"
        }
      ]
    },
    {
      "year": "1985",
      "category": "physics",
      "laureates": [
        {
          "id": "126",
          "firstname": "Klaus",
          "surname": "von Klitzing",
          "motivation": "\"for the discovery of the quantized Hall effect\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1985",
      "category": "medicine",
      "laureates": [
        {
          "id": "432",
          "firstname": "Michael S.",
          "surname": "Brown",
          "motivation": "\"for their discoveries concerning the regulation of cholesterol metabolism\"",
          "share": "2"
        },
        {
          "id": "433",
          "firstname": "Joseph L.",
          "surname": "Goldstein",
          "motivation": "\"for their discoveries concerning the regulation of cholesterol metabolism\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1984",
      "category": "chemistry",
      "laureates": [
        {
          "id": "261",
          "firstname": "Bruce",
          "surname": "Merrifield",
          "motivation": "\"for his development of methodology for chemical synthesis on a solid matrix\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1984",
      "category": "economics",
      "laureates": [
        {
          "id": "698",
          "firstname": "Richard",
          "surname": "Stone",
          "motivation": "\"for having made fundamental contributions to the development of systems of national accounts and hence greatly improved the basis for empirical economic analysis\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1984",
      "category": "literature",
      "laureates": [
        {
          "id": "661",
          "firstname": "Jaroslav",
          "surname": "Seifert",
          "motivation": "\"for his poetry which endowed with freshness, sensuality and rich inventiveness provides a liberating image of the indomitable spirit and versatility of man\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1984",
      "category": "peace",
      "laureates": [
        {
          "id": "546",
          "firstname": "Desmond",
          "surname": "Tutu",
          "motivation": "\"for his role as a unifying leader figure in the non-violent campaign to resolve the problem of apartheid in South Africa\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1984",
      "category": "physics",
      "laureates": [
        {
          "id": "124",
          "firstname": "Carlo",
          "surname": "Rubbia",
          "motivation": "\"for their decisive contributions to the large project, which led to the discovery of the field particles W and Z, communicators of weak interaction\"",
          "share": "2"
        },
        {
          "id": "125",
          "firstname": "Simon",
          "surname": "van der Meer",
          "motivation": "\"for their decisive contributions to the large project, which led to the discovery of the field particles W and Z, communicators of weak interaction\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1984",
      "category": "medicine",
      "laureates": [
        {
          "id": "429",
          "firstname": "Niels K.",
          "surname": "Jerne",
          "motivation": "\"for theories concerning the specificity in development and control of the immune system and the discovery of the principle for production of monoclonal antibodies\"",
          "share": "3"
        },
        {
          "id": "430",
          "firstname": "Georges J.F.",
          "surname": "Köhler",
          "motivation": "\"for theories concerning the specificity in development and control of the immune system and the discovery of the principle for production of monoclonal antibodies\"",
          "share": "3"
        },
        {
          "id": "431",
          "firstname": "César",
          "surname": "Milstein",
          "motivation": "\"for theories concerning the specificity in development and control of the immune system and the discovery of the principle for production of monoclonal antibodies\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "1983",
      "category": "chemistry",
      "laureates": [
        {
          "id": "260",
          "firstname": "Henry",
          "surname": "Taube",
          "motivation": "\"for his work on the mechanisms of electron transfer reactions, especially in metal complexes\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1983",
      "category": "economics",
      "laureates": [
        {
          "id": "697",
          "firstname": "Gerard",
          "surname": "Debreu",
          "motivation": "\"for having incorporated new analytical methods into economic theory and for his rigorous reformulation of the theory of general equilibrium\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1983",
      "category": "literature",
      "laureates": [
        {
          "id": "660",
          "firstname": "William",
          "surname": "Golding",
          "motivation": "\"for his novels which, with the perspicuity of realistic narrative art and the diversity and universality of myth, illuminate the human condition in the world of today\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1983",
      "category": "peace",
      "laureates": [
        {
          "id": "545",
          "firstname": "Lech",
          "surname": "Walesa",
          "motivation": "\"for non-violent struggle for free trade unions and human rights in Poland\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1983",
      "category": "physics",
      "laureates": [
        {
          "id": "122",
          "firstname": "Subramanyan",
          "surname": "Chandrasekhar",
          "motivation": "\"for his theoretical studies of the physical processes of importance to the structure and evolution of the stars\"",
          "share": "2"
        },
        {
          "id": "123",
          "firstname": "William A.",
          "surname": "Fowler",
          "motivation": "\"for his theoretical and experimental studies of the nuclear reactions of importance in the formation of the chemical elements in the universe\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1983",
      "category": "medicine",
      "laureates": [
        {
          "id": "428",
          "firstname": "Barbara",
          "surname": "McClintock",
          "motivation": "\"for her discovery of mobile genetic elements\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1982",
      "category": "chemistry",
      "laureates": [
        {
          "id": "259",
          "firstname": "Aaron",
          "surname": "Klug",
          "motivation": "\"for his development of crystallographic electron microscopy and his structural elucidation of biologically important nucleic acid-protein complexes\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1982",
      "category": "economics",
      "laureates": [
        {
          "id": "696",
          "firstname": "George J.",
          "surname": "Stigler",
          "motivation": "\"for his seminal studies of industrial structures, functioning of markets and causes and effects of public regulation\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1982",
      "category": "literature",
      "laureates": [
        {
          "id": "659",
          "firstname": "Gabriel",
          "surname": "García Márquez",
          "motivation": "\"for his novels and short stories, in which the fantastic and the realistic are combined in a richly composed world of imagination, reflecting a continent's life and conflicts\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1982",
      "category": "peace",
      "laureates": [
        {
          "id": "543",
          "firstname": "Alva",
          "surname": "Myrdal",
          "motivation": "\"for their work for disarmament and nuclear and weapon-free zones\"",
          "share": "2"
        },
        {
          "id": "544",
          "firstname": "Alfonso",
          "surname": "García Robles",
          "motivation": "\"for their work for disarmament and nuclear and weapon-free zones\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1982",
      "category": "physics",
      "laureates": [
        {
          "id": "121",
          "firstname": "Kenneth G.",
          "surname": "Wilson",
          "motivation": "\"for his theory for critical phenomena in connection with phase transitions\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1982",
      "category": "medicine",
      "laureates": [
        {
          "id": "425",
          "firstname": "Sune K.",
          "surname": "Bergström",
          "motivation": "\"for their discoveries concerning prostaglandins and related biologically active substances\"",
          "share": "3"
        },
        {
          "id": "426",
          "firstname": "Bengt I.",
          "surname": "Samuelsson",
          "motivation": "\"for their discoveries concerning prostaglandins and related biologically active substances\"",
          "share": "3"
        },
        {
          "id": "427",
          "firstname": "John R.",
          "surname": "Vane",
          "motivation": "\"for their discoveries concerning prostaglandins and related biologically active substances\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "1981",
      "category": "chemistry",
      "laureates": [
        {
          "id": "257",
          "firstname": "Kenichi",
          "surname": "Fukui",
          "motivation": "\"for their theories, developed independently, concerning the course of chemical reactions\"",
          "share": "2"
        },
        {
          "id": "258",
          "firstname": "Roald",
          "surname": "Hoffmann",
          "motivation": "\"for their theories, developed independently, concerning the course of chemical reactions\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1981",
      "category": "economics",
      "laureates": [
        {
          "id": "695",
          "firstname": "James",
          "surname": "Tobin",
          "motivation": "\"for his analysis of financial markets and their relations to expenditure decisions, employment, production and prices\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1981",
      "category": "literature",
      "laureates": [
        {
          "id": "658",
          "firstname": "Elias",
          "surname": "Canetti",
          "motivation": "\"for writings marked by a broad outlook, a wealth of ideas and artistic power\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1981",
      "category": "peace",
      "laureates": [
        {
          "id": "515",
          "motivation": "\"for promoting the fundamental rights of refugees\"",
          "share": "1",
          "firstname": "Office of the United Nations High Commissioner for Refugees"
        }
      ]
    },
    {
      "year": "1981",
      "category": "physics",
      "laureates": [
        {
          "id": "118",
          "firstname": "Nicolaas",
          "surname": "Bloembergen",
          "motivation": "\"for their contribution to the development of laser spectroscopy\"",
          "share": "4"
        },
        {
          "id": "119",
          "firstname": "Arthur L.",
          "surname": "Schawlow",
          "motivation": "\"for their contribution to the development of laser spectroscopy\"",
          "share": "4"
        },
        {
          "id": "120",
          "firstname": "Kai M.",
          "surname": "Siegbahn",
          "motivation": "\"for his contribution to the development of high-resolution electron spectroscopy\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1981",
      "category": "medicine",
      "laureates": [
        {
          "id": "422",
          "firstname": "Roger W.",
          "surname": "Sperry",
          "motivation": "\"for his discoveries concerning the functional specialization of the cerebral hemispheres\"",
          "share": "2"
        },
        {
          "id": "423",
          "firstname": "David H.",
          "surname": "Hubel",
          "motivation": "\"for their discoveries concerning information processing in the visual system\"",
          "share": "4"
        },
        {
          "id": "424",
          "firstname": "Torsten N.",
          "surname": "Wiesel",
          "motivation": "\"for their discoveries concerning information processing in the visual system\"",
          "share": "4"
        }
      ]
    },
    {
      "year": "1980",
      "category": "chemistry",
      "laureates": [
        {
          "id": "254",
          "firstname": "Paul",
          "surname": "Berg",
          "motivation": "\"for his fundamental studies of the biochemistry of nucleic acids, with particular regard to recombinant-DNA\"",
          "share": "2"
        },
        {
          "id": "255",
          "firstname": "Walter",
          "surname": "Gilbert",
          "motivation": "\"for their contributions concerning the determination of base sequences in nucleic acids\"",
          "share": "4"
        },
        {
          "id": "222",
          "firstname": "Frederick",
          "surname": "Sanger",
          "motivation": "\"for their contributions concerning the determination of base sequences in nucleic acids\"",
          "share": "4"
        }
      ]
    },
    {
      "year": "1980",
      "category": "economics",
      "laureates": [
        {
          "id": "694",
          "firstname": "Lawrence R.",
          "surname": "Klein",
          "motivation": "\"for the creation of econometric models and the application to the analysis of economic fluctuations and economic policies\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1980",
      "category": "literature",
      "laureates": [
        {
          "id": "657",
          "firstname": "Czeslaw",
          "surname": "Milosz",
          "motivation": "\"who with uncompromising clear-sightedness voices man's exposed condition in a world of severe conflicts\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1980",
      "category": "peace",
      "laureates": [
        {
          "id": "541",
          "firstname": "Adolfo",
          "surname": "Pérez Esquivel",
          "motivation": "\"for being a source of inspiration to repressed people, especially in Latin America\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1980",
      "category": "physics",
      "laureates": [
        {
          "id": "116",
          "firstname": "James",
          "surname": "Cronin",
          "motivation": "\"for the discovery of violations of fundamental symmetry principles in the decay of neutral K-mesons\"",
          "share": "2"
        },
        {
          "id": "117",
          "firstname": "Val",
          "surname": "Fitch",
          "motivation": "\"for the discovery of violations of fundamental symmetry principles in the decay of neutral K-mesons\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1980",
      "category": "medicine",
      "laureates": [
        {
          "id": "419",
          "firstname": "Baruj",
          "surname": "Benacerraf",
          "motivation": "\"for their discoveries concerning genetically determined structures on the cell surface that regulate immunological reactions\"",
          "share": "3"
        },
        {
          "id": "420",
          "firstname": "Jean",
          "surname": "Dausset",
          "motivation": "\"for their discoveries concerning genetically determined structures on the cell surface that regulate immunological reactions\"",
          "share": "3"
        },
        {
          "id": "421",
          "firstname": "George D.",
          "surname": "Snell",
          "motivation": "\"for their discoveries concerning genetically determined structures on the cell surface that regulate immunological reactions\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "1979",
      "category": "chemistry",
      "laureates": [
        {
          "id": "252",
          "firstname": "Herbert C.",
          "surname": "Brown",
          "motivation": "\"for their development of the use of boron- and phosphorus-containing compounds, respectively, into important reagents in organic synthesis\"",
          "share": "2"
        },
        {
          "id": "253",
          "firstname": "Georg",
          "surname": "Wittig",
          "motivation": "\"for their development of the use of boron- and phosphorus-containing compounds, respectively, into important reagents in organic synthesis\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1979",
      "category": "economics",
      "laureates": [
        {
          "id": "692",
          "firstname": "Theodore W.",
          "surname": "Schultz",
          "motivation": "\"for their pioneering research into economic development research with particular consideration of the problems of developing countries\"",
          "share": "2"
        },
        {
          "id": "693",
          "firstname": "Sir Arthur",
          "surname": "Lewis",
          "motivation": "\"for their pioneering research into economic development research with particular consideration of the problems of developing countries\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1979",
      "category": "literature",
      "laureates": [
        {
          "id": "655",
          "firstname": "Odysseus",
          "surname": "Elytis",
          "motivation": "\"for his poetry, which, against the background of Greek tradition, depicts with sensuous strength and intellectual clear-sightedness modern man's struggle for freedom and creativeness\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1979",
      "category": "peace",
      "laureates": [
        {
          "id": "540",
          "firstname": "Anjezë Gonxhe",
          "surname": "Bojaxhiu",
          "motivation": "\"for her work for bringing help to suffering humanity\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1979",
      "category": "physics",
      "laureates": [
        {
          "id": "113",
          "firstname": "Sheldon",
          "surname": "Glashow",
          "motivation": "\"for their contributions to the theory of the unified weak and electromagnetic interaction between elementary particles, including, inter alia, the prediction of the weak neutral current\"",
          "share": "3"
        },
        {
          "id": "114",
          "firstname": "Abdus",
          "surname": "Salam",
          "motivation": "\"for their contributions to the theory of the unified weak and electromagnetic interaction between elementary particles, including, inter alia, the prediction of the weak neutral current\"",
          "share": "3"
        },
        {
          "id": "115",
          "firstname": "Steven",
          "surname": "Weinberg",
          "motivation": "\"for their contributions to the theory of the unified weak and electromagnetic interaction between elementary particles, including, inter alia, the prediction of the weak neutral current\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "1979",
      "category": "medicine",
      "laureates": [
        {
          "id": "417",
          "firstname": "Allan M.",
          "surname": "Cormack",
          "motivation": "\"for the development of computer assisted tomography\"",
          "share": "2"
        },
        {
          "id": "418",
          "firstname": "Godfrey N.",
          "surname": "Hounsfield",
          "motivation": "\"for the development of computer assisted tomography\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1978",
      "category": "chemistry",
      "laureates": [
        {
          "id": "251",
          "firstname": "Peter",
          "surname": "Mitchell",
          "motivation": "\"for his contribution to the understanding of biological energy transfer through the formulation of the chemiosmotic theory\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1978",
      "category": "economics",
      "laureates": [
        {
          "id": "691",
          "firstname": "Herbert",
          "surname": "Simon",
          "motivation": "\"for his pioneering research into the decision-making process within economic organizations\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1978",
      "category": "literature",
      "laureates": [
        {
          "id": "654",
          "firstname": "Isaac Bashevis",
          "surname": "Singer",
          "motivation": "\"for his impassioned narrative art which, with roots in a Polish-Jewish cultural tradition, brings universal human conditions to life\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1978",
      "category": "peace",
      "laureates": [
        {
          "id": "538",
          "firstname": "Anwar",
          "surname": "al-Sadat",
          "motivation": "\"for jointly having negotiated peace between Egypt and Israel in 1978\"",
          "share": "2"
        },
        {
          "id": "539",
          "firstname": "Menachem",
          "surname": "Begin",
          "motivation": "\"for jointly having negotiated peace between Egypt and Israel in 1978\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1978",
      "category": "physics",
      "laureates": [
        {
          "id": "110",
          "firstname": "Pyotr",
          "surname": "Kapitsa",
          "motivation": "\"for his basic inventions and discoveries in the area of low-temperature physics\"",
          "share": "2"
        },
        {
          "id": "111",
          "firstname": "Arno",
          "surname": "Penzias",
          "motivation": "\"for their discovery of cosmic microwave background radiation\"",
          "share": "4"
        },
        {
          "id": "112",
          "firstname": "Robert Woodrow",
          "surname": "Wilson",
          "motivation": "\"for their discovery of cosmic microwave background radiation\"",
          "share": "4"
        }
      ]
    },
    {
      "year": "1978",
      "category": "medicine",
      "laureates": [
        {
          "id": "414",
          "firstname": "Werner",
          "surname": "Arber",
          "motivation": "\"for the discovery of restriction enzymes and their application to problems of molecular genetics\"",
          "share": "3"
        },
        {
          "id": "415",
          "firstname": "Daniel",
          "surname": "Nathans",
          "motivation": "\"for the discovery of restriction enzymes and their application to problems of molecular genetics\"",
          "share": "3"
        },
        {
          "id": "416",
          "firstname": "Hamilton O.",
          "surname": "Smith",
          "motivation": "\"for the discovery of restriction enzymes and their application to problems of molecular genetics\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "1977",
      "category": "chemistry",
      "laureates": [
        {
          "id": "250",
          "firstname": "Ilya",
          "surname": "Prigogine",
          "motivation": "\"for his contributions to non-equilibrium thermodynamics, particularly the theory of dissipative structures\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1977",
      "category": "economics",
      "laureates": [
        {
          "id": "689",
          "firstname": "Bertil",
          "surname": "Ohlin",
          "motivation": "\"for their pathbreaking contribution to the theory of international trade and international capital movements\"",
          "share": "2"
        },
        {
          "id": "690",
          "firstname": "James E.",
          "surname": "Meade",
          "motivation": "\"for their pathbreaking contribution to the theory of international trade and international capital movements\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1977",
      "category": "literature",
      "laureates": [
        {
          "id": "653",
          "firstname": "Vicente",
          "surname": "Aleixandre",
          "motivation": "\"for a creative poetic writing which illuminates man's condition in the cosmos and in present-day society, at the same time representing the great renewal of the traditions of Spanish poetry between the wars\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1977",
      "category": "peace",
      "laureates": [
        {
          "id": "537",
          "motivation": "\"for worldwide respect for human rights\"",
          "share": "1",
          "firstname": "Amnesty International"
        }
      ]
    },
    {
      "year": "1977",
      "category": "physics",
      "laureates": [
        {
          "id": "107",
          "firstname": "Philip W.",
          "surname": "Anderson",
          "motivation": "\"for their fundamental theoretical investigations of the electronic structure of magnetic and disordered systems\"",
          "share": "3"
        },
        {
          "id": "108",
          "firstname": "Sir Nevill F.",
          "surname": "Mott",
          "motivation": "\"for their fundamental theoretical investigations of the electronic structure of magnetic and disordered systems\"",
          "share": "3"
        },
        {
          "id": "109",
          "firstname": "John H.",
          "surname": "Van Vleck",
          "motivation": "\"for their fundamental theoretical investigations of the electronic structure of magnetic and disordered systems\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "1977",
      "category": "medicine",
      "laureates": [
        {
          "id": "411",
          "firstname": "Roger",
          "surname": "Guillemin",
          "motivation": "\"for their discoveries concerning the peptide hormone production of the brain\"",
          "share": "4"
        },
        {
          "id": "412",
          "firstname": "Andrew V.",
          "surname": "Schally",
          "motivation": "\"for their discoveries concerning the peptide hormone production of the brain\"",
          "share": "4"
        },
        {
          "id": "413",
          "firstname": "Rosalyn",
          "surname": "Yalow",
          "motivation": "\"for the development of radioimmunoassays of peptide hormones\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1976",
      "category": "chemistry",
      "laureates": [
        {
          "id": "249",
          "firstname": "William",
          "surname": "Lipscomb",
          "motivation": "\"for his studies on the structure of boranes illuminating problems of chemical bonding\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1976",
      "category": "economics",
      "laureates": [
        {
          "id": "688",
          "firstname": "Milton",
          "surname": "Friedman",
          "motivation": "\"for his achievements in the fields of consumption analysis, monetary history and theory and for his demonstration of the complexity of stabilization policy\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1976",
      "category": "literature",
      "laureates": [
        {
          "id": "652",
          "firstname": "Saul",
          "surname": "Bellow",
          "motivation": "\"for the human understanding and subtle analysis of contemporary culture that are combined in his work\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1976",
      "category": "peace",
      "laureates": [
        {
          "id": "535",
          "firstname": "Betty",
          "surname": "Williams",
          "motivation": "\"for the courageous efforts in founding a movement to put an end to the violent conflict in Northern Ireland\"",
          "share": "2"
        },
        {
          "id": "536",
          "firstname": "Mairead",
          "surname": "Corrigan",
          "motivation": "\"for the courageous efforts in founding a movement to put an end to the violent conflict in Northern Ireland\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1976",
      "category": "physics",
      "laureates": [
        {
          "id": "105",
          "firstname": "Burton",
          "surname": "Richter",
          "motivation": "\"for their pioneering work in the discovery of a heavy elementary particle of a new kind\"",
          "share": "2"
        },
        {
          "id": "106",
          "firstname": "Samuel C.C.",
          "surname": "Ting",
          "motivation": "\"for their pioneering work in the discovery of a heavy elementary particle of a new kind\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1976",
      "category": "medicine",
      "laureates": [
        {
          "id": "409",
          "firstname": "Baruch S.",
          "surname": "Blumberg",
          "motivation": "\"for their discoveries concerning new mechanisms for the origin and dissemination of infectious diseases\"",
          "share": "2"
        },
        {
          "id": "410",
          "firstname": "D. Carleton",
          "surname": "Gajdusek",
          "motivation": "\"for their discoveries concerning new mechanisms for the origin and dissemination of infectious diseases\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1975",
      "category": "chemistry",
      "laureates": [
        {
          "id": "247",
          "firstname": "John",
          "surname": "Cornforth",
          "motivation": "\"for his work on the stereochemistry of enzyme-catalyzed reactions\"",
          "share": "2"
        },
        {
          "id": "248",
          "firstname": "Vladimir",
          "surname": "Prelog",
          "motivation": "\"for his research into the stereochemistry of organic molecules and reactions\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1975",
      "category": "economics",
      "laureates": [
        {
          "id": "686",
          "firstname": "Leonid Vitaliyevich",
          "surname": "Kantorovich",
          "motivation": "\"for their contributions to the theory of optimum allocation of resources\"",
          "share": "2"
        },
        {
          "id": "687",
          "firstname": "Tjalling C.",
          "surname": "Koopmans",
          "motivation": "\"for their contributions to the theory of optimum allocation of resources\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1975",
      "category": "literature",
      "laureates": [
        {
          "id": "651",
          "firstname": "Eugenio",
          "surname": "Montale",
          "motivation": "\"for his distinctive poetry which, with great artistic sensitivity, has interpreted human values under the sign of an outlook on life with no illusions\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1975",
      "category": "peace",
      "laureates": [
        {
          "id": "534",
          "firstname": "Andrei",
          "surname": "Sakharov",
          "motivation": "\"for his struggle for human rights in the Soviet Union, for disarmament and cooperation between all nations\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1975",
      "category": "physics",
      "laureates": [
        {
          "id": "102",
          "firstname": "Aage N.",
          "surname": "Bohr",
          "motivation": "\"for the discovery of the connection between collective motion and particle motion in atomic nuclei and the development of the theory of the structure of the atomic nucleus based on this connection\"",
          "share": "3"
        },
        {
          "id": "103",
          "firstname": "Ben R.",
          "surname": "Mottelson",
          "motivation": "\"for the discovery of the connection between collective motion and particle motion in atomic nuclei and the development of the theory of the structure of the atomic nucleus based on this connection\"",
          "share": "3"
        },
        {
          "id": "104",
          "firstname": "James",
          "surname": "Rainwater",
          "motivation": "\"for the discovery of the connection between collective motion and particle motion in atomic nuclei and the development of the theory of the structure of the atomic nucleus based on this connection\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "1975",
      "category": "medicine",
      "laureates": [
        {
          "id": "406",
          "firstname": "David",
          "surname": "Baltimore",
          "motivation": "\"for their discoveries concerning the interaction between tumour viruses and the genetic material of the cell\"",
          "share": "3"
        },
        {
          "id": "407",
          "firstname": "Renato",
          "surname": "Dulbecco",
          "motivation": "\"for their discoveries concerning the interaction between tumour viruses and the genetic material of the cell\"",
          "share": "3"
        },
        {
          "id": "408",
          "firstname": "Howard M.",
          "surname": "Temin",
          "motivation": "\"for their discoveries concerning the interaction between tumour viruses and the genetic material of the cell\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "1974",
      "category": "chemistry",
      "laureates": [
        {
          "id": "246",
          "firstname": "Paul J.",
          "surname": "Flory",
          "motivation": "\"for his fundamental achievements, both theoretical and experimental, in the physical chemistry of the macromolecules\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1974",
      "category": "economics",
      "laureates": [
        {
          "id": "684",
          "firstname": "Gunnar",
          "surname": "Myrdal",
          "motivation": "\"for their pioneering work in the theory of money and economic fluctuations and for their penetrating analysis of the interdependence of economic, social and institutional phenomena\"",
          "share": "2"
        },
        {
          "id": "685",
          "firstname": "Friedrich",
          "surname": "von Hayek",
          "motivation": "\"for their pioneering work in the theory of money and economic fluctuations and for their penetrating analysis of the interdependence of economic, social and institutional phenomena\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1974",
      "category": "literature",
      "laureates": [
        {
          "id": "649",
          "firstname": "Eyvind",
          "surname": "Johnson",
          "motivation": "\"for a narrative art, far-seeing in lands and ages, in the service of freedom\"",
          "share": "2"
        },
        {
          "id": "650",
          "firstname": "Harry",
          "surname": "Martinson",
          "motivation": "\"for writings that catch the dewdrop and reflect the cosmos\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1974",
      "category": "peace",
      "laureates": [
        {
          "id": "532",
          "firstname": "Seán",
          "surname": "MacBride",
          "motivation": "\"for his efforts to secure and develop human rights throughout the world\"",
          "share": "2"
        },
        {
          "id": "533",
          "firstname": "Eisaku",
          "surname": "Sato",
          "motivation": "\"for his contribution to stabilize conditions in the Pacific rim area and for signing the Nuclear Non-Proliferation Treaty\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1974",
      "category": "physics",
      "laureates": [
        {
          "id": "100",
          "firstname": "Martin",
          "surname": "Ryle",
          "motivation": "\"for their pioneering research in radio astrophysics: Ryle for his observations and inventions, in particular of the aperture synthesis technique, and Hewish for his decisive role in the discovery of pulsars\"",
          "share": "2"
        },
        {
          "id": "101",
          "firstname": "Antony",
          "surname": "Hewish",
          "motivation": "\"for their pioneering research in radio astrophysics: Ryle for his observations and inventions, in particular of the aperture synthesis technique, and Hewish for his decisive role in the discovery of pulsars\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1974",
      "category": "medicine",
      "laureates": [
        {
          "id": "403",
          "firstname": "Albert",
          "surname": "Claude",
          "motivation": "\"for their discoveries concerning the structural and functional organization of the cell\"",
          "share": "3"
        },
        {
          "id": "404",
          "firstname": "Christian",
          "surname": "de Duve",
          "motivation": "\"for their discoveries concerning the structural and functional organization of the cell\"",
          "share": "3"
        },
        {
          "id": "405",
          "firstname": "George E.",
          "surname": "Palade",
          "motivation": "\"for their discoveries concerning the structural and functional organization of the cell\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "1973",
      "category": "chemistry",
      "laureates": [
        {
          "id": "244",
          "firstname": "Ernst Otto",
          "surname": "Fischer",
          "motivation": "\"for their pioneering work, performed independently, on the chemistry of the organometallic, so called sandwich compounds\"",
          "share": "2"
        },
        {
          "id": "245",
          "firstname": "Geoffrey",
          "surname": "Wilkinson",
          "motivation": "\"for their pioneering work, performed independently, on the chemistry of the organometallic, so called sandwich compounds\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1973",
      "category": "economics",
      "laureates": [
        {
          "id": "683",
          "firstname": "Wassily",
          "surname": "Leontief",
          "motivation": "\"for the development of the input-output method and for its application to important economic problems\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1973",
      "category": "literature",
      "laureates": [
        {
          "id": "648",
          "firstname": "Patrick",
          "surname": "White",
          "motivation": "\"for an epic and psychological narrative art which has introduced a new continent into literature\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1973",
      "category": "peace",
      "laureates": [
        {
          "id": "530",
          "firstname": "Henry",
          "surname": "Kissinger",
          "motivation": "\"for jointly having negotiated a cease fire in Vietnam in 1973\"",
          "share": "2"
        },
        {
          "id": "531",
          "firstname": "Le Duc Tho",
          "motivation": "\"for jointly having negotiated a cease fire in Vietnam in 1973\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1973",
      "category": "physics",
      "laureates": [
        {
          "id": "97",
          "firstname": "Leo",
          "surname": "Esaki",
          "motivation": "\"for their experimental discoveries regarding tunneling phenomena in semiconductors and superconductors, respectively\"",
          "share": "4"
        },
        {
          "id": "98",
          "firstname": "Ivar",
          "surname": "Giaever",
          "motivation": "\"for their experimental discoveries regarding tunneling phenomena in semiconductors and superconductors, respectively\"",
          "share": "4"
        },
        {
          "id": "99",
          "firstname": "Brian D.",
          "surname": "Josephson",
          "motivation": "\"for his theoretical predictions of the properties of a supercurrent through a tunnel barrier, in particular those phenomena which are generally known as the Josephson effects\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1973",
      "category": "medicine",
      "laureates": [
        {
          "id": "400",
          "firstname": "Karl",
          "surname": "von Frisch",
          "motivation": "\"for their discoveries concerning organization and elicitation of individual and social behaviour patterns\"",
          "share": "3"
        },
        {
          "id": "401",
          "firstname": "Konrad",
          "surname": "Lorenz",
          "motivation": "\"for their discoveries concerning organization and elicitation of individual and social behaviour patterns\"",
          "share": "3"
        },
        {
          "id": "402",
          "firstname": "Nikolaas",
          "surname": "Tinbergen",
          "motivation": "\"for their discoveries concerning organization and elicitation of individual and social behaviour patterns\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "1972",
      "category": "chemistry",
      "laureates": [
        {
          "id": "241",
          "firstname": "Christian",
          "surname": "Anfinsen",
          "motivation": "\"for his work on ribonuclease, especially concerning the connection between the amino acid sequence and the biologically active conformation\"",
          "share": "2"
        },
        {
          "id": "242",
          "firstname": "Stanford",
          "surname": "Moore",
          "motivation": "\"for their contribution to the understanding of the connection between chemical structure and catalytic activity of the active centre of the ribonuclease molecule\"",
          "share": "4"
        },
        {
          "id": "243",
          "firstname": "William H.",
          "surname": "Stein",
          "motivation": "\"for their contribution to the understanding of the connection between chemical structure and catalytic activity of the active centre of the ribonuclease molecule\"",
          "share": "4"
        }
      ]
    },
    {
      "year": "1972",
      "category": "economics",
      "laureates": [
        {
          "id": "681",
          "firstname": "John R.",
          "surname": "Hicks",
          "motivation": "\"for their pioneering contributions to general economic equilibrium theory and welfare theory\"",
          "share": "2"
        },
        {
          "id": "682",
          "firstname": "Kenneth J.",
          "surname": "Arrow",
          "motivation": "\"for their pioneering contributions to general economic equilibrium theory and welfare theory\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1972",
      "category": "literature",
      "laureates": [
        {
          "id": "647",
          "firstname": "Heinrich",
          "surname": "Böll",
          "motivation": "\"for his writing which through its combination of a broad perspective on his time and a sensitive skill in characterization has contributed to a renewal of German literature\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1972",
      "category": "peace",
      "overallMotivation": "\"No Nobel Prize was awarded this year. The prize money for 1972 was allocated to the Main Fund.\""
    },
    {
      "year": "1972",
      "category": "physics",
      "laureates": [
        {
          "id": "66",
          "firstname": "John",
          "surname": "Bardeen",
          "motivation": "\"for their jointly developed theory of superconductivity, usually called the BCS-theory\"",
          "share": "3"
        },
        {
          "id": "95",
          "firstname": "Leon N.",
          "surname": "Cooper",
          "motivation": "\"for their jointly developed theory of superconductivity, usually called the BCS-theory\"",
          "share": "3"
        },
        {
          "id": "96",
          "firstname": "Robert",
          "surname": "Schrieffer",
          "motivation": "\"for their jointly developed theory of superconductivity, usually called the BCS-theory\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "1972",
      "category": "medicine",
      "laureates": [
        {
          "id": "398",
          "firstname": "Gerald M.",
          "surname": "Edelman",
          "motivation": "\"for their discoveries concerning the chemical structure of antibodies\"",
          "share": "2"
        },
        {
          "id": "399",
          "firstname": "Rodney R.",
          "surname": "Porter",
          "motivation": "\"for their discoveries concerning the chemical structure of antibodies\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1971",
      "category": "chemistry",
      "laureates": [
        {
          "id": "240",
          "firstname": "Gerhard",
          "surname": "Herzberg",
          "motivation": "\"for his contributions to the knowledge of electronic structure and geometry of molecules, particularly free radicals\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1971",
      "category": "economics",
      "laureates": [
        {
          "id": "680",
          "firstname": "Simon",
          "surname": "Kuznets",
          "motivation": "\"for his empirically founded interpretation of economic growth which has led to new and deepened insight into the economic and social structure and process of development\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1971",
      "category": "literature",
      "laureates": [
        {
          "id": "645",
          "firstname": "Pablo",
          "surname": "Neruda",
          "motivation": "\"for a poetry that with the action of an elemental force brings alive a continent's destiny and dreams\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1971",
      "category": "peace",
      "laureates": [
        {
          "id": "529",
          "firstname": "Willy",
          "surname": "Brandt",
          "motivation": "\"for paving the way for a meaningful dialogue between East and West\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1971",
      "category": "physics",
      "laureates": [
        {
          "id": "93",
          "firstname": "Dennis",
          "surname": "Gabor",
          "motivation": "\"for his invention and development of the holographic method\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1971",
      "category": "medicine",
      "laureates": [
        {
          "id": "397",
          "firstname": "Earl W.",
          "surname": "Sutherland, Jr.",
          "motivation": "\"for his discoveries concerning the mechanisms of the action of hormones\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1970",
      "category": "chemistry",
      "laureates": [
        {
          "id": "239",
          "firstname": "Luis",
          "surname": "Leloir",
          "motivation": "\"for his discovery of sugar nucleotides and their role in the biosynthesis of carbohydrates\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1970",
      "category": "economics",
      "laureates": [
        {
          "id": "679",
          "firstname": "Paul A.",
          "surname": "Samuelson",
          "motivation": "\"for the scientific work through which he has developed static and dynamic economic theory and actively contributed to raising the level of analysis in economic science\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1970",
      "category": "literature",
      "laureates": [
        {
          "id": "644",
          "firstname": "Alexandr",
          "surname": "Solzhenitsyn",
          "motivation": "\"for the ethical force with which he has pursued the indispensable traditions of Russian literature\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1970",
      "category": "peace",
      "laureates": [
        {
          "id": "528",
          "firstname": "Norman",
          "surname": "Borlaug",
          "motivation": "\"for having given a well-founded hope - the green revolution\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1970",
      "category": "physics",
      "laureates": [
        {
          "id": "91",
          "firstname": "Hannes",
          "surname": "Alfvén",
          "motivation": "\"for fundamental work and discoveries in magnetohydro-dynamics with fruitful applications in different parts of plasma physics\"",
          "share": "2"
        },
        {
          "id": "92",
          "firstname": "Louis",
          "surname": "Néel",
          "motivation": "\"for fundamental work and discoveries concerning antiferromagnetism and ferrimagnetism which have led to important applications in solid state physics\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1970",
      "category": "medicine",
      "laureates": [
        {
          "id": "394",
          "firstname": "Sir Bernard",
          "surname": "Katz",
          "motivation": "\"for their discoveries concerning the humoral transmitters in the nerve terminals and the mechanism for their storage, release and inactivation\"",
          "share": "3"
        },
        {
          "id": "395",
          "firstname": "Ulf",
          "surname": "von Euler",
          "motivation": "\"for their discoveries concerning the humoral transmitters in the nerve terminals and the mechanism for their storage, release and inactivation\"",
          "share": "3"
        },
        {
          "id": "396",
          "firstname": "Julius",
          "surname": "Axelrod",
          "motivation": "\"for their discoveries concerning the humoral transmitters in the nerve terminals and the mechanism for their storage, release and inactivation\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "1969",
      "category": "chemistry",
      "laureates": [
        {
          "id": "237",
          "firstname": "Derek",
          "surname": "Barton",
          "motivation": "\"for their contributions to the development of the concept of conformation and its application in chemistry\"",
          "share": "2"
        },
        {
          "id": "238",
          "firstname": "Odd",
          "surname": "Hassel",
          "motivation": "\"for their contributions to the development of the concept of conformation and its application in chemistry\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1969",
      "category": "economics",
      "laureates": [
        {
          "id": "677",
          "firstname": "Ragnar",
          "surname": "Frisch",
          "motivation": "\"for having developed and applied dynamic models for the analysis of economic processes\"",
          "share": "2"
        },
        {
          "id": "678",
          "firstname": "Jan",
          "surname": "Tinbergen",
          "motivation": "\"for having developed and applied dynamic models for the analysis of economic processes\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1969",
      "category": "literature",
      "laureates": [
        {
          "id": "643",
          "firstname": "Samuel",
          "surname": "Beckett",
          "motivation": "\"for his writing, which - in new forms for the novel and drama - in the destitution of modern man acquires its elevation\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1969",
      "category": "peace",
      "laureates": [
        {
          "id": "527",
          "motivation": "\"for creating international legislation insuring certain norms for working conditions in every country\"",
          "share": "1",
          "firstname": "International Labour Organization"
        }
      ]
    },
    {
      "year": "1969",
      "category": "physics",
      "laureates": [
        {
          "id": "90",
          "firstname": "Murray",
          "surname": "Gell-Mann",
          "motivation": "\"for his contributions and discoveries concerning the classification of elementary particles and their interactions\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1969",
      "category": "medicine",
      "laureates": [
        {
          "id": "391",
          "firstname": "Max",
          "surname": "Delbrück",
          "motivation": "\"for their discoveries concerning the replication mechanism and the genetic structure of viruses\"",
          "share": "3"
        },
        {
          "id": "392",
          "firstname": "Alfred D.",
          "surname": "Hershey",
          "motivation": "\"for their discoveries concerning the replication mechanism and the genetic structure of viruses\"",
          "share": "3"
        },
        {
          "id": "393",
          "firstname": "Salvador E.",
          "surname": "Luria",
          "motivation": "\"for their discoveries concerning the replication mechanism and the genetic structure of viruses\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "1968",
      "category": "chemistry",
      "laureates": [
        {
          "id": "236",
          "firstname": "Lars",
          "surname": "Onsager",
          "motivation": "\"for the discovery of the reciprocal relations bearing his name, which are fundamental for the thermodynamics of irreversible processes\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1968",
      "category": "literature",
      "laureates": [
        {
          "id": "642",
          "firstname": "Yasunari",
          "surname": "Kawabata",
          "motivation": "\"for his narrative mastery, which with great sensibility expresses the essence of the Japanese mind\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1968",
      "category": "peace",
      "laureates": [
        {
          "id": "526",
          "firstname": "René",
          "surname": "Cassin",
          "motivation": "\"for his struggle to ensure the rights of man as stipulated in the UN Declaration\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1968",
      "category": "physics",
      "laureates": [
        {
          "id": "89",
          "firstname": "Luis",
          "surname": "Alvarez",
          "motivation": "\"for his decisive contributions to elementary particle physics, in particular the discovery of a large number of resonance states, made possible through his development of the technique of using hydrogen bubble chamber and data analysis\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1968",
      "category": "medicine",
      "laureates": [
        {
          "id": "388",
          "firstname": "Robert W.",
          "surname": "Holley",
          "motivation": "\"for their interpretation of the genetic code and its function in protein synthesis\"",
          "share": "3"
        },
        {
          "id": "389",
          "firstname": "H. Gobind",
          "surname": "Khorana",
          "motivation": "\"for their interpretation of the genetic code and its function in protein synthesis\"",
          "share": "3"
        },
        {
          "id": "390",
          "firstname": "Marshall W.",
          "surname": "Nirenberg",
          "motivation": "\"for their interpretation of the genetic code and its function in protein synthesis\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "1967",
      "category": "chemistry",
      "laureates": [
        {
          "id": "233",
          "firstname": "Manfred",
          "surname": "Eigen",
          "motivation": "\"for their studies of extremely fast chemical reactions, effected by disturbing the equilibrium by means of very short pulses of energy\"",
          "share": "2"
        },
        {
          "id": "234",
          "firstname": "Ronald G.W.",
          "surname": "Norrish",
          "motivation": "\"for their studies of extremely fast chemical reactions, effected by disturbing the equilibrium by means of very short pulses of energy\"",
          "share": "4"
        },
        {
          "id": "235",
          "firstname": "George",
          "surname": "Porter",
          "motivation": "\"for their studies of extremely fast chemical reactions, effected by disturbing the equilibrium by means of very short pulses of energy\"",
          "share": "4"
        }
      ]
    },
    {
      "year": "1967",
      "category": "literature",
      "laureates": [
        {
          "id": "641",
          "firstname": "Miguel Angel",
          "surname": "Asturias",
          "motivation": "\"for his vivid literary achievement, deep-rooted in the national traits and traditions of Indian peoples of Latin America\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1967",
      "category": "peace",
      "overallMotivation": "\"No Nobel Prize was awarded this year. The prize money was with 1/3 allocated to the Main Fund and with 2/3 to the Special Fund of this prize section.\""
    },
    {
      "year": "1967",
      "category": "physics",
      "laureates": [
        {
          "id": "88",
          "firstname": "Hans",
          "surname": "Bethe",
          "motivation": "\"for his contributions to the theory of nuclear reactions, especially his discoveries concerning the energy production in stars\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1967",
      "category": "medicine",
      "laureates": [
        {
          "id": "385",
          "firstname": "Ragnar",
          "surname": "Granit",
          "motivation": "\"for their discoveries concerning the primary physiological and chemical visual processes in the eye\"",
          "share": "3"
        },
        {
          "id": "386",
          "firstname": "Keffer",
          "surname": "Hartline",
          "motivation": "\"for their discoveries concerning the primary physiological and chemical visual processes in the eye\"",
          "share": "3"
        },
        {
          "id": "387",
          "firstname": "George",
          "surname": "Wald",
          "motivation": "\"for their discoveries concerning the primary physiological and chemical visual processes in the eye\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "1966",
      "category": "chemistry",
      "laureates": [
        {
          "id": "232",
          "firstname": "Robert S.",
          "surname": "Mulliken",
          "motivation": "\"for his fundamental work concerning chemical bonds and the electronic structure of molecules by the molecular orbital method\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1966",
      "category": "literature",
      "laureates": [
        {
          "id": "639",
          "firstname": "Shmuel",
          "surname": "Agnon",
          "motivation": "\"for his profoundly characteristic narrative art with motifs from the life of the Jewish people\"",
          "share": "2"
        },
        {
          "id": "640",
          "firstname": "Nelly",
          "surname": "Sachs",
          "motivation": "\"for her outstanding lyrical and dramatic writing, which interprets Israel's destiny with touching strength\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1966",
      "category": "peace",
      "overallMotivation": "\"No Nobel Prize was awarded this year. The prize money was allocated to the Special Fund of this prize section.\""
    },
    {
      "year": "1966",
      "category": "physics",
      "laureates": [
        {
          "id": "87",
          "firstname": "Alfred",
          "surname": "Kastler",
          "motivation": "\"for the discovery and development of optical methods for studying Hertzian resonances in atoms\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1966",
      "category": "medicine",
      "laureates": [
        {
          "id": "383",
          "firstname": "Peyton",
          "surname": "Rous",
          "motivation": "\"for his discovery of tumour-inducing viruses\"",
          "share": "2"
        },
        {
          "id": "384",
          "firstname": "Charles B.",
          "surname": "Huggins",
          "motivation": "\"for his discoveries concerning hormonal treatment of prostatic cancer\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1965",
      "category": "chemistry",
      "laureates": [
        {
          "id": "231",
          "firstname": "Robert B.",
          "surname": "Woodward",
          "motivation": "\"for his outstanding achievements in the art of organic synthesis\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1965",
      "category": "literature",
      "laureates": [
        {
          "id": "638",
          "firstname": "Mikhail",
          "surname": "Sholokhov",
          "motivation": "\"for the artistic power and integrity with which, in his epic of the Don, he has given expression to a historic phase in the life of the Russian people\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1965",
      "category": "peace",
      "laureates": [
        {
          "id": "525",
          "motivation": "\"for its effort to enhance solidarity between nations and reduce the difference between rich and poor states\"",
          "share": "1",
          "firstname": "United Nations Children's Fund"
        }
      ]
    },
    {
      "year": "1965",
      "category": "physics",
      "laureates": [
        {
          "id": "84",
          "firstname": "Sin-Itiro",
          "surname": "Tomonaga",
          "motivation": "\"for their fundamental work in quantum electrodynamics, with deep-ploughing consequences for the physics of elementary particles\"",
          "share": "3"
        },
        {
          "id": "85",
          "firstname": "Julian",
          "surname": "Schwinger",
          "motivation": "\"for their fundamental work in quantum electrodynamics, with deep-ploughing consequences for the physics of elementary particles\"",
          "share": "3"
        },
        {
          "id": "86",
          "firstname": "Richard P.",
          "surname": "Feynman",
          "motivation": "\"for their fundamental work in quantum electrodynamics, with deep-ploughing consequences for the physics of elementary particles\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "1965",
      "category": "medicine",
      "laureates": [
        {
          "id": "380",
          "firstname": "François",
          "surname": "Jacob",
          "motivation": "\"for their discoveries concerning genetic control of enzyme and virus synthesis\"",
          "share": "3"
        },
        {
          "id": "381",
          "firstname": "André",
          "surname": "Lwoff",
          "motivation": "\"for their discoveries concerning genetic control of enzyme and virus synthesis\"",
          "share": "3"
        },
        {
          "id": "382",
          "firstname": "Jacques",
          "surname": "Monod",
          "motivation": "\"for their discoveries concerning genetic control of enzyme and virus synthesis\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "1964",
      "category": "chemistry",
      "laureates": [
        {
          "id": "230",
          "firstname": "Dorothy Crowfoot",
          "surname": "Hodgkin",
          "motivation": "\"for her determinations by X-ray techniques of the structures of important biochemical substances\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1964",
      "category": "literature",
      "laureates": [
        {
          "id": "637",
          "firstname": "Jean-Paul",
          "surname": "Sartre",
          "motivation": "\"for his work which, rich in ideas and filled with the spirit of freedom and the quest for truth, has exerted a far-reaching influence on our age\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1964",
      "category": "peace",
      "laureates": [
        {
          "id": "524",
          "firstname": "Martin Luther",
          "surname": "King Jr.",
          "motivation": "\"for his non-violent struggle for civil rights for the Afro-American population\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1964",
      "category": "physics",
      "laureates": [
        {
          "id": "81",
          "firstname": "Charles H.",
          "surname": "Townes",
          "motivation": "\"for fundamental work in the field of quantum electronics, which has led to the construction of oscillators and amplifiers based on the maser-laser principle\"",
          "share": "2"
        },
        {
          "id": "82",
          "firstname": "Nicolay G.",
          "surname": "Basov",
          "motivation": "\"for fundamental work in the field of quantum electronics, which has led to the construction of oscillators and amplifiers based on the maser-laser principle\"",
          "share": "4"
        },
        {
          "id": "83",
          "firstname": "Aleksandr M.",
          "surname": "Prokhorov",
          "motivation": "\"for fundamental work in the field of quantum electronics, which has led to the construction of oscillators and amplifiers based on the maser-laser principle\"",
          "share": "4"
        }
      ]
    },
    {
      "year": "1964",
      "category": "medicine",
      "laureates": [
        {
          "id": "378",
          "firstname": "Konrad",
          "surname": "Bloch",
          "motivation": "\"for their discoveries concerning the mechanism and regulation of the cholesterol and fatty acid metabolism\"",
          "share": "2"
        },
        {
          "id": "379",
          "firstname": "Feodor",
          "surname": "Lynen",
          "motivation": "\"for their discoveries concerning the mechanism and regulation of the cholesterol and fatty acid metabolism\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1963",
      "category": "chemistry",
      "laureates": [
        {
          "id": "228",
          "firstname": "Karl",
          "surname": "Ziegler",
          "motivation": "\"for their discoveries in the field of the chemistry and technology of high polymers\"",
          "share": "2"
        },
        {
          "id": "229",
          "firstname": "Giulio",
          "surname": "Natta",
          "motivation": "\"for their discoveries in the field of the chemistry and technology of high polymers\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1963",
      "category": "literature",
      "laureates": [
        {
          "id": "635",
          "firstname": "Giorgos",
          "surname": "Seferis",
          "motivation": "\"for his eminent lyrical writing, inspired by a deep feeling for the Hellenic world of culture\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1963",
      "category": "peace",
      "laureates": [
        {
          "id": "482",
          "motivation": "\"for promoting the principles of the Geneva Convention and cooperation with the UN\"",
          "share": "2",
          "firstname": "International Committee of the Red Cross"
        },
        {
          "id": "523",
          "motivation": "\"for promoting the principles of the Geneva Convention and cooperation with the UN\"",
          "share": "2",
          "firstname": "League of Red Cross Societies"
        }
      ]
    },
    {
      "year": "1963",
      "category": "physics",
      "laureates": [
        {
          "id": "78",
          "firstname": "Eugene",
          "surname": "Wigner",
          "motivation": "\"for his contributions to the theory of the atomic nucleus and the elementary particles, particularly through the discovery and application of fundamental symmetry principles\"",
          "share": "2"
        },
        {
          "id": "79",
          "firstname": "Maria",
          "surname": "Goeppert Mayer",
          "motivation": "\"for their discoveries concerning nuclear shell structure\"",
          "share": "4"
        },
        {
          "id": "80",
          "firstname": "J. Hans D.",
          "surname": "Jensen",
          "motivation": "\"for their discoveries concerning nuclear shell structure\"",
          "share": "4"
        }
      ]
    },
    {
      "year": "1963",
      "category": "medicine",
      "laureates": [
        {
          "id": "375",
          "firstname": "Sir John",
          "surname": "Eccles",
          "motivation": "\"for their discoveries concerning the ionic mechanisms involved in excitation and inhibition in the peripheral and central portions of the nerve cell membrane\"",
          "share": "3"
        },
        {
          "id": "376",
          "firstname": "Alan",
          "surname": "Hodgkin",
          "motivation": "\"for their discoveries concerning the ionic mechanisms involved in excitation and inhibition in the peripheral and central portions of the nerve cell membrane\"",
          "share": "3"
        },
        {
          "id": "377",
          "firstname": "Andrew",
          "surname": "Huxley",
          "motivation": "\"for their discoveries concerning the ionic mechanisms involved in excitation and inhibition in the peripheral and central portions of the nerve cell membrane\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "1962",
      "category": "chemistry",
      "laureates": [
        {
          "id": "226",
          "firstname": "Max F.",
          "surname": "Perutz",
          "motivation": "\"for their studies of the structures of globular proteins\"",
          "share": "2"
        },
        {
          "id": "227",
          "firstname": "John C.",
          "surname": "Kendrew",
          "motivation": "\"for their studies of the structures of globular proteins\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1962",
      "category": "literature",
      "laureates": [
        {
          "id": "634",
          "firstname": "John",
          "surname": "Steinbeck",
          "motivation": "\"for his realistic and imaginative writings, combining as they do sympathetic humour and keen social perception\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1962",
      "category": "peace",
      "laureates": [
        {
          "id": "217",
          "firstname": "Linus",
          "surname": "Pauling",
          "motivation": "\"for his fight against the nuclear arms race between East and West\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1962",
      "category": "physics",
      "laureates": [
        {
          "id": "77",
          "firstname": "Lev",
          "surname": "Landau",
          "motivation": "\"for his pioneering theories for condensed matter, especially liquid helium\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1962",
      "category": "medicine",
      "laureates": [
        {
          "id": "372",
          "firstname": "Francis",
          "surname": "Crick",
          "motivation": "\"for their discoveries concerning the molecular structure of nucleic acids and its significance for information transfer in living material\"",
          "share": "3"
        },
        {
          "id": "373",
          "firstname": "James",
          "surname": "Watson",
          "motivation": "\"for their discoveries concerning the molecular structure of nucleic acids and its significance for information transfer in living material\"",
          "share": "3"
        },
        {
          "id": "374",
          "firstname": "Maurice",
          "surname": "Wilkins",
          "motivation": "\"for their discoveries concerning the molecular structure of nucleic acids and its significance for information transfer in living material\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "1961",
      "category": "chemistry",
      "laureates": [
        {
          "id": "225",
          "firstname": "Melvin",
          "surname": "Calvin",
          "motivation": "\"for his research on the carbon dioxide assimilation in plants\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1961",
      "category": "literature",
      "laureates": [
        {
          "id": "633",
          "firstname": "Ivo",
          "surname": "Andric",
          "motivation": "\"for the epic force with which he has traced themes and depicted human destinies drawn from the history of his country\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1961",
      "category": "peace",
      "laureates": [
        {
          "id": "520",
          "firstname": "Dag",
          "surname": "Hammarskjöld",
          "motivation": "\"for developing the UN into an effective and constructive international organization, capable of giving life to the principles and aims expressed in the UN Charter\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1961",
      "category": "physics",
      "laureates": [
        {
          "id": "75",
          "firstname": "Robert",
          "surname": "Hofstadter",
          "motivation": "\"for his pioneering studies of electron scattering in atomic nuclei and for his thereby achieved discoveries concerning the structure of the nucleons\"",
          "share": "2"
        },
        {
          "id": "76",
          "firstname": "Rudolf",
          "surname": "Mössbauer",
          "motivation": "\"for his researches concerning the resonance absorption of gamma radiation and his discovery in this connection of the effect which bears his name\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1961",
      "category": "medicine",
      "laureates": [
        {
          "id": "371",
          "firstname": "Georg",
          "surname": "von Békésy",
          "motivation": "\"for his discoveries of the physical mechanism of stimulation within the cochlea\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1960",
      "category": "chemistry",
      "laureates": [
        {
          "id": "224",
          "firstname": "Willard F.",
          "surname": "Libby",
          "motivation": "\"for his method to use carbon-14 for age determination in archaeology, geology, geophysics, and other branches of science\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1960",
      "category": "literature",
      "laureates": [
        {
          "id": "631",
          "firstname": "Saint-John",
          "surname": "Perse",
          "motivation": "\"for the soaring flight and the evocative imagery of his poetry which in a visionary fashion reflects the conditions of our time\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1960",
      "category": "peace",
      "laureates": [
        {
          "id": "519",
          "firstname": "Albert",
          "surname": "Lutuli",
          "motivation": "\"for his non-violent struggle against apartheid\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1960",
      "category": "physics",
      "laureates": [
        {
          "id": "74",
          "firstname": "Donald A.",
          "surname": "Glaser",
          "motivation": "\"for the invention of the bubble chamber\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1960",
      "category": "medicine",
      "laureates": [
        {
          "id": "369",
          "firstname": "Sir Frank Macfarlane",
          "surname": "Burnet",
          "motivation": "\"for discovery of acquired immunological tolerance\"",
          "share": "2"
        },
        {
          "id": "370",
          "firstname": "Peter",
          "surname": "Medawar",
          "motivation": "\"for discovery of acquired immunological tolerance\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1959",
      "category": "chemistry",
      "laureates": [
        {
          "id": "223",
          "firstname": "Jaroslav",
          "surname": "Heyrovsky",
          "motivation": "\"for his discovery and development of the polarographic methods of analysis\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1959",
      "category": "literature",
      "laureates": [
        {
          "id": "630",
          "firstname": "Salvatore",
          "surname": "Quasimodo",
          "motivation": "\"for his lyrical poetry, which with classical fire expresses the tragic experience of life in our own times\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1959",
      "category": "peace",
      "laureates": [
        {
          "id": "518",
          "firstname": "Philip",
          "surname": "Noel-Baker",
          "motivation": "\"for his longstanding contribution to the cause of disarmament and peace\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1959",
      "category": "physics",
      "laureates": [
        {
          "id": "72",
          "firstname": "Emilio",
          "surname": "Segrè",
          "motivation": "\"for their discovery of the antiproton\"",
          "share": "2"
        },
        {
          "id": "73",
          "firstname": "Owen",
          "surname": "Chamberlain",
          "motivation": "\"for their discovery of the antiproton\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1959",
      "category": "medicine",
      "laureates": [
        {
          "id": "367",
          "firstname": "Severo",
          "surname": "Ochoa",
          "motivation": "\"for their discovery of the mechanisms in the biological synthesis of ribonucleic acid and deoxyribonucleic acid\"",
          "share": "2"
        },
        {
          "id": "368",
          "firstname": "Arthur",
          "surname": "Kornberg",
          "motivation": "\"for their discovery of the mechanisms in the biological synthesis of ribonucleic acid and deoxyribonucleic acid\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1958",
      "category": "chemistry",
      "laureates": [
        {
          "id": "222",
          "firstname": "Frederick",
          "surname": "Sanger",
          "motivation": "\"for his work on the structure of proteins, especially that of insulin\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1958",
      "category": "literature",
      "laureates": [
        {
          "id": "629",
          "firstname": "Boris",
          "surname": "Pasternak",
          "motivation": "\"for his important achievement both in contemporary lyrical poetry and in the field of the great Russian epic tradition\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1958",
      "category": "peace",
      "laureates": [
        {
          "id": "517",
          "firstname": "Georges",
          "surname": "Pire",
          "motivation": "\"for his efforts to help refugees to leave their camps and return to a life of freedom and dignity\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1958",
      "category": "physics",
      "laureates": [
        {
          "id": "70",
          "firstname": "Pavel A.",
          "surname": "Cherenkov",
          "motivation": "\"for the discovery and the interpretation of the Cherenkov effect\"",
          "share": "3"
        },
        {
          "id": "71",
          "firstname": "Igor Y.",
          "surname": "Tamm",
          "motivation": "\"for the discovery and the interpretation of the Cherenkov effect\"",
          "share": "3"
        },
        {
          "id": "721",
          "firstname": "Il´ja M.",
          "surname": "Frank",
          "motivation": "\"for the discovery and the interpretation of the Cherenkov effect\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "1958",
      "category": "medicine",
      "laureates": [
        {
          "id": "364",
          "firstname": "George",
          "surname": "Beadle",
          "motivation": "\"for their discovery that genes act by regulating definite chemical events\"",
          "share": "4"
        },
        {
          "id": "365",
          "firstname": "Edward",
          "surname": "Tatum",
          "motivation": "\"for their discovery that genes act by regulating definite chemical events\"",
          "share": "4"
        },
        {
          "id": "366",
          "firstname": "Joshua",
          "surname": "Lederberg",
          "motivation": "\"for his discoveries concerning genetic recombination and the organization of the genetic material of bacteria\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1957",
      "category": "chemistry",
      "laureates": [
        {
          "id": "221",
          "firstname": "Lord",
          "surname": "Todd",
          "motivation": "\"for his work on nucleotides and nucleotide co-enzymes\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1957",
      "category": "literature",
      "laureates": [
        {
          "id": "628",
          "firstname": "Albert",
          "surname": "Camus",
          "motivation": "\"for his important literary production, which with clear-sighted earnestness illuminates the problems of the human conscience in our times\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1957",
      "category": "peace",
      "laureates": [
        {
          "id": "516",
          "firstname": "Lester Bowles",
          "surname": "Pearson",
          "motivation": "\"for his crucial contribution to the deployment of a United Nations Emergency Force in the wake of the Suez Crisis\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1957",
      "category": "physics",
      "laureates": [
        {
          "id": "68",
          "firstname": "Chen Ning",
          "surname": "Yang",
          "motivation": "\"for their penetrating investigation of the so-called parity laws which has led to important discoveries regarding the elementary particles\"",
          "share": "2"
        },
        {
          "id": "69",
          "firstname": "Tsung-Dao",
          "surname": "Lee",
          "motivation": "\"for their penetrating investigation of the so-called parity laws which has led to important discoveries regarding the elementary particles\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1957",
      "category": "medicine",
      "laureates": [
        {
          "id": "363",
          "firstname": "Daniel",
          "surname": "Bovet",
          "motivation": "\"for his discoveries relating to synthetic compounds that inhibit the action of certain body substances, and especially their action on the vascular system and the skeletal muscles\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1956",
      "category": "chemistry",
      "laureates": [
        {
          "id": "219",
          "firstname": "Sir Cyril",
          "surname": "Hinshelwood",
          "motivation": "\"for their researches into the mechanism of chemical reactions\"",
          "share": "2"
        },
        {
          "id": "220",
          "firstname": "Nikolay",
          "surname": "Semenov",
          "motivation": "\"for their researches into the mechanism of chemical reactions\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1956",
      "category": "literature",
      "laureates": [
        {
          "id": "627",
          "firstname": "Juan Ramón",
          "surname": "Jiménez",
          "motivation": "\"for his lyrical poetry, which in Spanish language constitutes an example of high spirit and artistical purity\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1956",
      "category": "peace",
      "overallMotivation": "\"No Nobel Prize was awarded this year. The prize money was with 1/3 allocated to the Main Fund and with 2/3 to the Special Fund of this prize section.\""
    },
    {
      "year": "1956",
      "category": "physics",
      "laureates": [
        {
          "id": "65",
          "firstname": "William B.",
          "surname": "Shockley",
          "motivation": "\"for their researches on semiconductors and their discovery of the transistor effect\"",
          "share": "3"
        },
        {
          "id": "66",
          "firstname": "John",
          "surname": "Bardeen",
          "motivation": "\"for their researches on semiconductors and their discovery of the transistor effect\"",
          "share": "3"
        },
        {
          "id": "67",
          "firstname": "Walter H.",
          "surname": "Brattain",
          "motivation": "\"for their researches on semiconductors and their discovery of the transistor effect\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "1956",
      "category": "medicine",
      "laureates": [
        {
          "id": "360",
          "firstname": "André F.",
          "surname": "Cournand",
          "motivation": "\"for their discoveries concerning heart catheterization and pathological changes in the circulatory system\"",
          "share": "3"
        },
        {
          "id": "361",
          "firstname": "Werner",
          "surname": "Forssmann",
          "motivation": "\"for their discoveries concerning heart catheterization and pathological changes in the circulatory system\"",
          "share": "3"
        },
        {
          "id": "362",
          "firstname": "Dickinson W.",
          "surname": "Richards",
          "motivation": "\"for their discoveries concerning heart catheterization and pathological changes in the circulatory system\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "1955",
      "category": "chemistry",
      "laureates": [
        {
          "id": "218",
          "firstname": "Vincent",
          "surname": "du Vigneaud",
          "motivation": "\"for his work on biochemically important sulphur compounds, especially for the first synthesis of a polypeptide hormone\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1955",
      "category": "literature",
      "laureates": [
        {
          "id": "626",
          "firstname": "Halldór",
          "surname": "Laxness",
          "motivation": "\"for his vivid epic power which has renewed the great narrative art of Iceland\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1955",
      "category": "peace",
      "overallMotivation": "\"No Nobel Prize was awarded this year. The prize money was allocated to the Special Fund of this prize section.\""
    },
    {
      "year": "1955",
      "category": "physics",
      "laureates": [
        {
          "id": "63",
          "firstname": "Willis E.",
          "surname": "Lamb",
          "motivation": "\"for his discoveries concerning the fine structure of the hydrogen spectrum\"",
          "share": "2"
        },
        {
          "id": "64",
          "firstname": "Polykarp",
          "surname": "Kusch",
          "motivation": "\"for his precision determination of the magnetic moment of the electron\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1955",
      "category": "medicine",
      "laureates": [
        {
          "id": "359",
          "firstname": "Hugo",
          "surname": "Theorell",
          "motivation": "\"for his discoveries concerning the nature and mode of action of oxidation enzymes\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1954",
      "category": "chemistry",
      "laureates": [
        {
          "id": "217",
          "firstname": "Linus",
          "surname": "Pauling",
          "motivation": "\"for his research into the nature of the chemical bond and its application to the elucidation of the structure of complex substances\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1954",
      "category": "literature",
      "laureates": [
        {
          "id": "625",
          "firstname": "Ernest",
          "surname": "Hemingway",
          "motivation": "\"for his mastery of the art of narrative, most recently demonstrated in <I>The Old Man and the Sea,</I> and for the influence that he has exerted on contemporary style\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1954",
      "category": "peace",
      "laureates": [
        {
          "id": "515",
          "motivation": "\"for its efforts to heal the wounds of war by providing help and protection to refugees all over the world\"",
          "share": "1",
          "firstname": "Office of the United Nations High Commissioner for Refugees"
        }
      ]
    },
    {
      "year": "1954",
      "category": "physics",
      "laureates": [
        {
          "id": "61",
          "firstname": "Max",
          "surname": "Born",
          "motivation": "\"for his fundamental research in quantum mechanics, especially for his statistical interpretation of the wavefunction\"",
          "share": "2"
        },
        {
          "id": "62",
          "firstname": "Walther",
          "surname": "Bothe",
          "motivation": "\"for the coincidence method and his discoveries made therewith\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1954",
      "category": "medicine",
      "laureates": [
        {
          "id": "356",
          "firstname": "John F.",
          "surname": "Enders",
          "motivation": "\"for their discovery of the ability of poliomyelitis viruses to grow in cultures of various types of tissue\"",
          "share": "3"
        },
        {
          "id": "357",
          "firstname": "Thomas H.",
          "surname": "Weller",
          "motivation": "\"for their discovery of the ability of poliomyelitis viruses to grow in cultures of various types of tissue\"",
          "share": "3"
        },
        {
          "id": "358",
          "firstname": "Frederick C.",
          "surname": "Robbins",
          "motivation": "\"for their discovery of the ability of poliomyelitis viruses to grow in cultures of various types of tissue\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "1953",
      "category": "chemistry",
      "laureates": [
        {
          "id": "216",
          "firstname": "Hermann",
          "surname": "Staudinger",
          "motivation": "\"for his discoveries in the field of macromolecular chemistry\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1953",
      "category": "literature",
      "laureates": [
        {
          "id": "624",
          "firstname": "Winston",
          "surname": "Churchill",
          "motivation": "\"for his mastery of historical and biographical description as well as for brilliant oratory in defending exalted human values\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1953",
      "category": "peace",
      "laureates": [
        {
          "id": "514",
          "firstname": "George C.",
          "surname": "Marshall",
          "motivation": "\"for proposing and supervising the plan for the economic recovery of Europe\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1953",
      "category": "physics",
      "laureates": [
        {
          "id": "60",
          "firstname": "Frits",
          "surname": "Zernike",
          "motivation": "\"for his demonstration of the phase contrast method, especially for his invention of the phase contrast microscope\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1953",
      "category": "medicine",
      "laureates": [
        {
          "id": "354",
          "firstname": "Hans",
          "surname": "Krebs",
          "motivation": "\"for his discovery of the citric acid cycle\"",
          "share": "2"
        },
        {
          "id": "355",
          "firstname": "Fritz",
          "surname": "Lipmann",
          "motivation": "\"for his discovery of co-enzyme A and its importance for intermediary metabolism\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1952",
      "category": "chemistry",
      "laureates": [
        {
          "id": "214",
          "firstname": "Archer J.P.",
          "surname": "Martin",
          "motivation": "\"for their invention of partition chromatography\"",
          "share": "2"
        },
        {
          "id": "215",
          "firstname": "Richard L.M.",
          "surname": "Synge",
          "motivation": "\"for their invention of partition chromatography\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1952",
      "category": "literature",
      "laureates": [
        {
          "id": "623",
          "firstname": "François",
          "surname": "Mauriac",
          "motivation": "\"for the deep spiritual insight and the artistic intensity with which he has in his novels penetrated the drama of human life\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1952",
      "category": "peace",
      "laureates": [
        {
          "id": "513",
          "firstname": "Albert",
          "surname": "Schweitzer",
          "motivation": "\"for his altruism, reverence for life, and tireless humanitarian work which has helped making the idea of brotherhood between men and nations a living one\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1952",
      "category": "physics",
      "laureates": [
        {
          "id": "58",
          "firstname": "Felix",
          "surname": "Bloch",
          "motivation": "\"for their development of new methods for nuclear magnetic precision measurements and discoveries in connection therewith\"",
          "share": "2"
        },
        {
          "id": "59",
          "firstname": "E. M.",
          "surname": "Purcell",
          "motivation": "\"for their development of new methods for nuclear magnetic precision measurements and discoveries in connection therewith\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1952",
      "category": "medicine",
      "laureates": [
        {
          "id": "353",
          "firstname": "Selman A.",
          "surname": "Waksman",
          "motivation": "\"for his discovery of streptomycin, the first antibiotic effective against tuberculosis\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1951",
      "category": "chemistry",
      "laureates": [
        {
          "id": "212",
          "firstname": "Edwin M.",
          "surname": "McMillan",
          "motivation": "\"for their discoveries in the chemistry of the transuranium elements\"",
          "share": "2"
        },
        {
          "id": "213",
          "firstname": "Glenn T.",
          "surname": "Seaborg",
          "motivation": "\"for their discoveries in the chemistry of the transuranium elements\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1951",
      "category": "literature",
      "laureates": [
        {
          "id": "622",
          "firstname": "Pär",
          "surname": "Lagerkvist",
          "motivation": "\"for the artistic vigour and true independence of mind with which he endeavours in his poetry to find answers to the eternal questions confronting mankind\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1951",
      "category": "peace",
      "laureates": [
        {
          "id": "512",
          "firstname": "Léon",
          "surname": "Jouhaux",
          "motivation": "\"for having devoted his life to the fight against war through the promotion of social justice and brotherhood among men and nations\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1951",
      "category": "physics",
      "laureates": [
        {
          "id": "56",
          "firstname": "John",
          "surname": "Cockcroft",
          "motivation": "\"for their pioneer work on the transmutation of atomic nuclei by artificially accelerated atomic particles\"",
          "share": "2"
        },
        {
          "id": "57",
          "firstname": "Ernest T.S.",
          "surname": "Walton",
          "motivation": "\"for their pioneer work on the transmutation of atomic nuclei by artificially accelerated atomic particles\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1951",
      "category": "medicine",
      "laureates": [
        {
          "id": "352",
          "firstname": "Max",
          "surname": "Theiler",
          "motivation": "\"for his discoveries concerning yellow fever and how to combat it\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1950",
      "category": "chemistry",
      "laureates": [
        {
          "id": "210",
          "firstname": "Otto",
          "surname": "Diels",
          "motivation": "\"for their discovery and development of the diene synthesis\"",
          "share": "2"
        },
        {
          "id": "211",
          "firstname": "Kurt",
          "surname": "Alder",
          "motivation": "\"for their discovery and development of the diene synthesis\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1950",
      "category": "literature",
      "laureates": [
        {
          "id": "621",
          "firstname": "Bertrand",
          "surname": "Russell",
          "motivation": "\"in recognition of his varied and significant writings in which he champions humanitarian ideals and freedom of thought\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1950",
      "category": "peace",
      "laureates": [
        {
          "id": "511",
          "firstname": "Ralph",
          "surname": "Bunche",
          "motivation": "\"for his work as mediator in Palestine in 1948-1949\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1950",
      "category": "physics",
      "laureates": [
        {
          "id": "55",
          "firstname": "Cecil",
          "surname": "Powell",
          "motivation": "\"for his development of the photographic method of studying nuclear processes and his discoveries regarding mesons made with this method\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1950",
      "category": "medicine",
      "laureates": [
        {
          "id": "349",
          "firstname": "Edward C.",
          "surname": "Kendall",
          "motivation": "\"for their discoveries relating to the hormones of the adrenal cortex, their structure and biological effects\"",
          "share": "3"
        },
        {
          "id": "350",
          "firstname": "Tadeus",
          "surname": "Reichstein",
          "motivation": "\"for their discoveries relating to the hormones of the adrenal cortex, their structure and biological effects\"",
          "share": "3"
        },
        {
          "id": "351",
          "firstname": "Philip S.",
          "surname": "Hench",
          "motivation": "\"for their discoveries relating to the hormones of the adrenal cortex, their structure and biological effects\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "1949",
      "category": "chemistry",
      "laureates": [
        {
          "id": "209",
          "firstname": "William F.",
          "surname": "Giauque",
          "motivation": "\"for his contributions in the field of chemical thermodynamics, particularly concerning the behaviour of substances at extremely low temperatures\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1949",
      "category": "literature",
      "laureates": [
        {
          "id": "620",
          "firstname": "William",
          "surname": "Faulkner",
          "motivation": "\"for his powerful and artistically unique contribution to the modern American novel\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1949",
      "category": "peace",
      "laureates": [
        {
          "id": "510",
          "firstname": "John",
          "surname": "Boyd Orr",
          "motivation": "\"for his lifelong effort to conquer hunger and want, thereby helping to remove a major cause of military conflict and war\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1949",
      "category": "physics",
      "laureates": [
        {
          "id": "54",
          "firstname": "Hideki",
          "surname": "Yukawa",
          "motivation": "\"for his prediction of the existence of mesons on the basis of theoretical work on nuclear forces\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1949",
      "category": "medicine",
      "laureates": [
        {
          "id": "347",
          "firstname": "Walter",
          "surname": "Hess",
          "motivation": "\"for his discovery of the functional organization of the interbrain as a coordinator of the activities of the internal organs\"",
          "share": "2"
        },
        {
          "id": "348",
          "firstname": "Egas",
          "surname": "Moniz",
          "motivation": "\"for his discovery of the therapeutic value of leucotomy in certain psychoses\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1948",
      "category": "chemistry",
      "laureates": [
        {
          "id": "208",
          "firstname": "Arne",
          "surname": "Tiselius",
          "motivation": "\"for his research on electrophoresis and adsorption analysis, especially for his discoveries concerning the complex nature of the serum proteins\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1948",
      "category": "literature",
      "laureates": [
        {
          "id": "619",
          "firstname": "T.S.",
          "surname": "Eliot",
          "motivation": "\"for his outstanding, pioneer contribution to present-day poetry\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1948",
      "category": "peace",
      "overallMotivation": "\"No Nobel Prize was awarded this year. The prize money was with 1/3 allocated to the Main Fund and with 2/3 to the Special Fund of this prize section.\""
    },
    {
      "year": "1948",
      "category": "physics",
      "laureates": [
        {
          "id": "53",
          "firstname": "Patrick M.S.",
          "surname": "Blackett",
          "motivation": "\"for his development of the Wilson cloud chamber method, and his discoveries therewith in the fields of nuclear physics and cosmic radiation\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1948",
      "category": "medicine",
      "laureates": [
        {
          "id": "346",
          "firstname": "Paul",
          "surname": "Müller",
          "motivation": "\"for his discovery of the high efficiency of DDT as a contact poison against several arthropods\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1947",
      "category": "chemistry",
      "laureates": [
        {
          "id": "207",
          "firstname": "Sir Robert",
          "surname": "Robinson",
          "motivation": "\"for his investigations on plant products of biological importance, especially the alkaloids\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1947",
      "category": "literature",
      "laureates": [
        {
          "id": "618",
          "firstname": "André",
          "surname": "Gide",
          "motivation": "\"for his comprehensive and artistically significant writings, in which human problems and conditions have been presented with a fearless love of truth and keen psychological insight\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1947",
      "category": "peace",
      "laureates": [
        {
          "id": "508",
          "motivation": "\"for their pioneering work in the international peace movement and compassionate effort to relieve human suffering, thereby promoting the fraternity between nations\"",
          "share": "2",
          "firstname": "Friends Service Council"
        },
        {
          "id": "509",
          "motivation": "\"for their pioneering work in the international peace movement and compassionate effort to relieve human suffering, thereby promoting the fraternity between nations\"",
          "share": "2",
          "firstname": "American Friends Service Committee"
        }
      ]
    },
    {
      "year": "1947",
      "category": "physics",
      "laureates": [
        {
          "id": "52",
          "firstname": "Edward V.",
          "surname": "Appleton",
          "motivation": "\"for his investigations of the physics of the upper atmosphere especially for the discovery of the so-called Appleton layer\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1947",
      "category": "medicine",
      "laureates": [
        {
          "id": "343",
          "firstname": "Carl",
          "surname": "Cori",
          "motivation": "\"for their discovery of the course of the catalytic conversion of glycogen\"",
          "share": "4"
        },
        {
          "id": "344",
          "firstname": "Gerty",
          "surname": "Cori",
          "motivation": "\"for their discovery of the course of the catalytic conversion of glycogen\"",
          "share": "4"
        },
        {
          "id": "345",
          "firstname": "Bernardo",
          "surname": "Houssay",
          "motivation": "\"for his discovery of the part played by the hormone of the anterior pituitary lobe in the metabolism of sugar\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1946",
      "category": "chemistry",
      "laureates": [
        {
          "id": "204",
          "firstname": "James B.",
          "surname": "Sumner",
          "motivation": "\"for his discovery that enzymes can be crystallized\"",
          "share": "2"
        },
        {
          "id": "205",
          "firstname": "John H.",
          "surname": "Northrop",
          "motivation": "\"for their preparation of enzymes and virus proteins in a pure form\"",
          "share": "4"
        },
        {
          "id": "206",
          "firstname": "Wendell M.",
          "surname": "Stanley",
          "motivation": "\"for their preparation of enzymes and virus proteins in a pure form\"",
          "share": "4"
        }
      ]
    },
    {
      "year": "1946",
      "category": "literature",
      "laureates": [
        {
          "id": "617",
          "firstname": "Hermann",
          "surname": "Hesse",
          "motivation": "\"for his inspired writings which, while growing in boldness and penetration, exemplify the classical humanitarian ideals and high qualities of style\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1946",
      "category": "peace",
      "laureates": [
        {
          "id": "506",
          "firstname": "Emily Greene",
          "surname": "Balch",
          "motivation": "\"for her lifelong work for the cause of peace\"",
          "share": "2"
        },
        {
          "id": "507",
          "firstname": "John R.",
          "surname": "Mott",
          "motivation": "\"for his contribution to the creation of a peace-promoting religious brotherhood across national boundaries\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1946",
      "category": "physics",
      "laureates": [
        {
          "id": "51",
          "firstname": "Percy W.",
          "surname": "Bridgman",
          "motivation": "\"for the invention of an apparatus to produce extremely high pressures, and for the discoveries he made therewith in the field of high pressure physics\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1946",
      "category": "medicine",
      "laureates": [
        {
          "id": "342",
          "firstname": "Hermann J.",
          "surname": "Muller",
          "motivation": "\"for the discovery of the production of mutations by means of X-ray irradiation\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1945",
      "category": "chemistry",
      "laureates": [
        {
          "id": "203",
          "firstname": "Artturi",
          "surname": "Virtanen",
          "motivation": "\"for his research and inventions in agricultural and nutrition chemistry, especially for his fodder preservation method\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1945",
      "category": "literature",
      "laureates": [
        {
          "id": "615",
          "firstname": "Gabriela",
          "surname": "Mistral",
          "motivation": "\"for her lyric poetry which, inspired by powerful emotions, has made her name a symbol of the idealistic aspirations of the entire Latin American world\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1945",
      "category": "peace",
      "laureates": [
        {
          "id": "505",
          "firstname": "Cordell",
          "surname": "Hull",
          "motivation": "\"for his indefatigable work for international understanding and his pivotal role in establishing the United Nations\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1945",
      "category": "physics",
      "laureates": [
        {
          "id": "50",
          "firstname": "Wolfgang",
          "surname": "Pauli",
          "motivation": "\"for the discovery of the Exclusion Principle, also called the Pauli Principle\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1945",
      "category": "medicine",
      "laureates": [
        {
          "id": "339",
          "firstname": "Sir Alexander",
          "surname": "Fleming",
          "motivation": "\"for the discovery of penicillin and its curative effect in various infectious diseases\"",
          "share": "3"
        },
        {
          "id": "340",
          "firstname": "Ernst B.",
          "surname": "Chain",
          "motivation": "\"for the discovery of penicillin and its curative effect in various infectious diseases\"",
          "share": "3"
        },
        {
          "id": "341",
          "firstname": "Sir Howard",
          "surname": "Florey",
          "motivation": "\"for the discovery of penicillin and its curative effect in various infectious diseases\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "1944",
      "category": "chemistry",
      "laureates": [
        {
          "id": "202",
          "firstname": "Otto",
          "surname": "Hahn",
          "motivation": "\"for his discovery of the fission of heavy nuclei\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1944",
      "category": "literature",
      "laureates": [
        {
          "id": "614",
          "firstname": "Johannes V.",
          "surname": "Jensen",
          "motivation": "\"for the rare strength and fertility of his poetic imagination with which is combined an intellectual curiosity of wide scope and a bold, freshly creative style\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1944",
      "category": "peace",
      "laureates": [
        {
          "id": "482",
          "motivation": "\"for the great work it has performed during the war on behalf of humanity\"",
          "share": "1",
          "firstname": "International Committee of the Red Cross"
        }
      ]
    },
    {
      "year": "1944",
      "category": "physics",
      "laureates": [
        {
          "id": "49",
          "firstname": "Isidor Isaac",
          "surname": "Rabi",
          "motivation": "\"for his resonance method for recording the magnetic properties of atomic nuclei\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1944",
      "category": "medicine",
      "laureates": [
        {
          "id": "337",
          "firstname": "Joseph",
          "surname": "Erlanger",
          "motivation": "\"for their discoveries relating to the highly differentiated functions of single nerve fibres\"",
          "share": "2"
        },
        {
          "id": "338",
          "firstname": "Herbert S.",
          "surname": "Gasser",
          "motivation": "\"for their discoveries relating to the highly differentiated functions of single nerve fibres\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1943",
      "category": "chemistry",
      "laureates": [
        {
          "id": "201",
          "firstname": "George",
          "surname": "de Hevesy",
          "motivation": "\"for his work on the use of isotopes as tracers in the study of chemical processes\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1943",
      "category": "literature",
      "overallMotivation": "\"No Nobel Prize was awarded this year. The prize money was with 1/3 allocated to the Main Fund and with 2/3 to the Special Fund of this prize section.\""
    },
    {
      "year": "1943",
      "category": "peace",
      "overallMotivation": "\"No Nobel Prize was awarded this year. The prize money was with 1/3 allocated to the Main Fund and with 2/3 to the Special Fund of this prize section.\""
    },
    {
      "year": "1943",
      "category": "physics",
      "laureates": [
        {
          "id": "48",
          "firstname": "Otto",
          "surname": "Stern",
          "motivation": "\"for his contribution to the development of the molecular ray method and his discovery of the magnetic moment of the proton\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1943",
      "category": "medicine",
      "laureates": [
        {
          "id": "335",
          "firstname": "Henrik",
          "surname": "Dam",
          "motivation": "\"for his discovery of vitamin K\"",
          "share": "2"
        },
        {
          "id": "336",
          "firstname": "Edward A.",
          "surname": "Doisy",
          "motivation": "\"for his discovery of the chemical nature of vitamin K\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1942",
      "category": "chemistry",
      "overallMotivation": "\"No Nobel Prize was awarded this year. The prize money was with 1/3 allocated to the Main Fund and with 2/3 to the Special Fund of this prize section.\""
    },
    {
      "year": "1942",
      "category": "literature",
      "overallMotivation": "\"No Nobel Prize was awarded this year. The prize money was with 1/3 allocated to the Main Fund and with 2/3 to the Special Fund of this prize section.\""
    },
    {
      "year": "1942",
      "category": "peace",
      "overallMotivation": "\"No Nobel Prize was awarded this year. The prize money was with 1/3 allocated to the Main Fund and with 2/3 to the Special Fund of this prize section.\""
    },
    {
      "year": "1942",
      "category": "physics",
      "overallMotivation": "\"No Nobel Prize was awarded this year. The prize money was with 1/3 allocated to the Main Fund and with 2/3 to the Special Fund of this prize section.\""
    },
    {
      "year": "1942",
      "category": "medicine",
      "overallMotivation": "\"No Nobel Prize was awarded this year. The prize money was with 1/3 allocated to the Main Fund and with 2/3 to the Special Fund of this prize section.\""
    },
    {
      "year": "1941",
      "category": "chemistry",
      "overallMotivation": "\"No Nobel Prize was awarded this year. The prize money was with 1/3 allocated to the Main Fund and with 2/3 to the Special Fund of this prize section.\""
    },
    {
      "year": "1941",
      "category": "literature",
      "overallMotivation": "\"No Nobel Prize was awarded this year. The prize money was with 1/3 allocated to the Main Fund and with 2/3 to the Special Fund of this prize section.\""
    },
    {
      "year": "1941",
      "category": "peace",
      "overallMotivation": "\"No Nobel Prize was awarded this year. The prize money was with 1/3 allocated to the Main Fund and with 2/3 to the Special Fund of this prize section.\""
    },
    {
      "year": "1941",
      "category": "physics",
      "overallMotivation": "\"No Nobel Prize was awarded this year. The prize money was with 1/3 allocated to the Main Fund and with 2/3 to the Special Fund of this prize section.\""
    },
    {
      "year": "1941",
      "category": "medicine",
      "overallMotivation": "\"No Nobel Prize was awarded this year. The prize money was with 1/3 allocated to the Main Fund and with 2/3 to the Special Fund of this prize section.\""
    },
    {
      "year": "1940",
      "category": "chemistry",
      "overallMotivation": "\"No Nobel Prize was awarded this year. The prize money was with 1/3 allocated to the Main Fund and with 2/3 to the Special Fund of this prize section.\""
    },
    {
      "year": "1940",
      "category": "literature",
      "overallMotivation": "\"No Nobel Prize was awarded this year. The prize money was with 1/3 allocated to the Main Fund and with 2/3 to the Special Fund of this prize section.\""
    },
    {
      "year": "1940",
      "category": "peace",
      "overallMotivation": "\"No Nobel Prize was awarded this year. The prize money was with 1/3 allocated to the Main Fund and with 2/3 to the Special Fund of this prize section.\""
    },
    {
      "year": "1940",
      "category": "physics",
      "overallMotivation": "\"No Nobel Prize was awarded this year. The prize money was with 1/3 allocated to the Main Fund and with 2/3 to the Special Fund of this prize section.\""
    },
    {
      "year": "1940",
      "category": "medicine",
      "overallMotivation": "\"No Nobel Prize was awarded this year. The prize money was with 1/3 allocated to the Main Fund and with 2/3 to the Special Fund of this prize section.\""
    },
    {
      "year": "1939",
      "category": "chemistry",
      "laureates": [
        {
          "id": "199",
          "firstname": "Adolf",
          "surname": "Butenandt",
          "motivation": "\"for his work on sex hormones\"",
          "share": "2"
        },
        {
          "id": "200",
          "firstname": "Leopold",
          "surname": "Ruzicka",
          "motivation": "\"for his work on polymethylenes and higher terpenes\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1939",
      "category": "literature",
      "laureates": [
        {
          "id": "613",
          "firstname": "Frans Eemil",
          "surname": "Sillanpää",
          "motivation": "\"for his deep understanding of his country's peasantry and the exquisite art with which he has portrayed their way of life and their relationship with Nature\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1939",
      "category": "peace",
      "overallMotivation": "\"No Nobel Prize was awarded this year. The prize money was with 1/3 allocated to the Main Fund and with 2/3 to the Special Fund of this prize section.\""
    },
    {
      "year": "1939",
      "category": "physics",
      "laureates": [
        {
          "id": "47",
          "firstname": "Ernest",
          "surname": "Lawrence",
          "motivation": "\"for the invention and development of the cyclotron and for results obtained with it, especially with regard to artificial radioactive elements\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1939",
      "category": "medicine",
      "laureates": [
        {
          "id": "334",
          "firstname": "Gerhard",
          "surname": "Domagk",
          "motivation": "\"for the discovery of the antibacterial effects of prontosil\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1938",
      "category": "chemistry",
      "laureates": [
        {
          "id": "198",
          "firstname": "Richard",
          "surname": "Kuhn",
          "motivation": "\"for his work on carotenoids and vitamins\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1938",
      "category": "literature",
      "laureates": [
        {
          "id": "610",
          "firstname": "Pearl",
          "surname": "Buck",
          "motivation": "\"for her rich and truly epic descriptions of peasant life in China and for her biographical masterpieces\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1938",
      "category": "peace",
      "laureates": [
        {
          "id": "503",
          "motivation": "\"for having carried on the work of Fridtjof Nansen to the benefit of refugees across Europe\"",
          "share": "1",
          "firstname": "Nansen International Office for Refugees"
        }
      ]
    },
    {
      "year": "1938",
      "category": "physics",
      "laureates": [
        {
          "id": "46",
          "firstname": "Enrico",
          "surname": "Fermi",
          "motivation": "\"for his demonstrations of the existence of new radioactive elements produced by neutron irradiation, and for his related discovery of nuclear reactions brought about by slow neutrons\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1938",
      "category": "medicine",
      "laureates": [
        {
          "id": "333",
          "firstname": "Corneille",
          "surname": "Heymans",
          "motivation": "\"for the discovery of the role played by the sinus and aortic mechanisms in the regulation of respiration\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1937",
      "category": "chemistry",
      "laureates": [
        {
          "id": "196",
          "firstname": "Norman",
          "surname": "Haworth",
          "motivation": "\"for his investigations on carbohydrates and vitamin C\"",
          "share": "2"
        },
        {
          "id": "197",
          "firstname": "Paul",
          "surname": "Karrer",
          "motivation": "\"for his investigations on carotenoids, flavins and vitamins A and B2\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1937",
      "category": "literature",
      "laureates": [
        {
          "id": "609",
          "firstname": "Roger",
          "surname": "Martin du Gard",
          "motivation": "\"for the artistic power and truth with which he has depicted human conflict as well as some fundamental aspects of contemporary life in his novel-cycle <I>Les Thibault</I>\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1937",
      "category": "peace",
      "laureates": [
        {
          "id": "502",
          "firstname": "Robert",
          "surname": "Cecil",
          "motivation": "\"for his tireless effort in support of the League of Nations, disarmament and peace\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1937",
      "category": "physics",
      "laureates": [
        {
          "id": "44",
          "firstname": "Clinton",
          "surname": "Davisson",
          "motivation": "\"for their experimental discovery of the diffraction of electrons by crystals\"",
          "share": "2"
        },
        {
          "id": "45",
          "firstname": "George Paget",
          "surname": "Thomson",
          "motivation": "\"for their experimental discovery of the diffraction of electrons by crystals\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1937",
      "category": "medicine",
      "laureates": [
        {
          "id": "332",
          "firstname": "Albert",
          "surname": "Szent-Györgyi",
          "motivation": "\"for his discoveries in connection with the biological combustion processes, with special reference to vitamin C and the catalysis of fumaric acid\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1936",
      "category": "chemistry",
      "laureates": [
        {
          "id": "195",
          "firstname": "Peter",
          "surname": "Debye",
          "motivation": "\"for his contributions to our knowledge of molecular structure through his investigations on dipole moments and on the diffraction of X-rays and electrons in gases\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1936",
      "category": "literature",
      "laureates": [
        {
          "id": "608",
          "firstname": "Eugene",
          "surname": "O'Neill",
          "motivation": "\"for the power, honesty and deep-felt emotions of his dramatic works, which embody an original concept of tragedy\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1936",
      "category": "peace",
      "laureates": [
        {
          "id": "501",
          "firstname": "Carlos",
          "surname": "Saavedra Lamas",
          "motivation": "\"for his role as father of the Argentine Antiwar Pact of 1933, which he also used as a means to mediate peace between Paraguay and Bolivia in 1935\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1936",
      "category": "physics",
      "laureates": [
        {
          "id": "42",
          "firstname": "Victor F.",
          "surname": "Hess",
          "motivation": "\"for his discovery of cosmic radiation\"",
          "share": "2"
        },
        {
          "id": "43",
          "firstname": "Carl D.",
          "surname": "Anderson",
          "motivation": "\"for his discovery of the positron\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1936",
      "category": "medicine",
      "laureates": [
        {
          "id": "330",
          "firstname": "Sir Henry",
          "surname": "Dale",
          "motivation": "\"for their discoveries relating to chemical transmission of nerve impulses\"",
          "share": "2"
        },
        {
          "id": "331",
          "firstname": "Otto",
          "surname": "Loewi",
          "motivation": "\"for their discoveries relating to chemical transmission of nerve impulses\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1935",
      "category": "chemistry",
      "laureates": [
        {
          "id": "193",
          "firstname": "Frédéric",
          "surname": "Joliot",
          "motivation": "\"in recognition of their synthesis of new radioactive elements\"",
          "share": "2"
        },
        {
          "id": "194",
          "firstname": "Irène",
          "surname": "Joliot-Curie",
          "motivation": "\"in recognition of their synthesis of new radioactive elements\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1935",
      "category": "literature",
      "overallMotivation": "\"No Nobel Prize was awarded this year. The prize money was with 1/3 allocated to the Main Fund and with 2/3 to the Special Fund of this prize section.\""
    },
    {
      "year": "1935",
      "category": "peace",
      "laureates": [
        {
          "id": "500",
          "firstname": "Carl",
          "surname": "von Ossietzky",
          "motivation": "\"for his burning love for freedom of thought and expression and his valuable contribution to the cause of peace\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1935",
      "category": "physics",
      "laureates": [
        {
          "id": "41",
          "firstname": "James",
          "surname": "Chadwick",
          "motivation": "\"for the discovery of the neutron\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1935",
      "category": "medicine",
      "laureates": [
        {
          "id": "329",
          "firstname": "Hans",
          "surname": "Spemann",
          "motivation": "\"for his discovery of the organizer effect in embryonic development\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1934",
      "category": "chemistry",
      "laureates": [
        {
          "id": "192",
          "firstname": "Harold C.",
          "surname": "Urey",
          "motivation": "\"for his discovery of heavy hydrogen\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1934",
      "category": "literature",
      "laureates": [
        {
          "id": "607",
          "firstname": "Luigi",
          "surname": "Pirandello",
          "motivation": "\"for his bold and ingenious revival of dramatic and scenic art\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1934",
      "category": "peace",
      "laureates": [
        {
          "id": "499",
          "firstname": "Arthur",
          "surname": "Henderson",
          "motivation": "\"for his untiring struggle and his courageous efforts as Chairman of the League of Nations Disarmament Conference 1931-34\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1934",
      "category": "physics",
      "overallMotivation": "\"No Nobel Prize was awarded this year. The prize money was with 1/3 allocated to the Main Fund and with 2/3 to the Special Fund of this prize section.\""
    },
    {
      "year": "1934",
      "category": "medicine",
      "laureates": [
        {
          "id": "326",
          "firstname": "George H.",
          "surname": "Whipple",
          "motivation": "\"for their discoveries concerning liver therapy in cases of anaemia\"",
          "share": "3"
        },
        {
          "id": "327",
          "firstname": "George R.",
          "surname": "Minot",
          "motivation": "\"for their discoveries concerning liver therapy in cases of anaemia\"",
          "share": "3"
        },
        {
          "id": "328",
          "firstname": "William P.",
          "surname": "Murphy",
          "motivation": "\"for their discoveries concerning liver therapy in cases of anaemia\"",
          "share": "3"
        }
      ]
    },
    {
      "year": "1933",
      "category": "chemistry",
      "overallMotivation": "\"No Nobel Prize was awarded this year. The prize money was with 1/3 allocated to the Main Fund and with 2/3 to the Special Fund of this prize section.\""
    },
    {
      "year": "1933",
      "category": "literature",
      "laureates": [
        {
          "id": "606",
          "firstname": "Ivan",
          "surname": "Bunin",
          "motivation": "\"for the strict artistry with which he has carried on the classical Russian traditions in prose writing\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1933",
      "category": "peace",
      "laureates": [
        {
          "id": "498",
          "firstname": "Sir Norman",
          "surname": "Angell",
          "motivation": "\"for having exposed by his pen the illusion of war and presented a convincing plea for international cooperation and peace\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1933",
      "category": "physics",
      "laureates": [
        {
          "id": "39",
          "firstname": "Erwin",
          "surname": "Schrödinger",
          "motivation": "\"for the discovery of new productive forms of atomic theory\"",
          "share": "2"
        },
        {
          "id": "40",
          "firstname": "Paul A.M.",
          "surname": "Dirac",
          "motivation": "\"for the discovery of new productive forms of atomic theory\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1933",
      "category": "medicine",
      "laureates": [
        {
          "id": "325",
          "firstname": "Thomas H.",
          "surname": "Morgan",
          "motivation": "\"for his discoveries concerning the role played by the chromosome in heredity\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1932",
      "category": "chemistry",
      "laureates": [
        {
          "id": "191",
          "firstname": "Irving",
          "surname": "Langmuir",
          "motivation": "\"for his discoveries and investigations in surface chemistry\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1932",
      "category": "literature",
      "laureates": [
        {
          "id": "605",
          "firstname": "John",
          "surname": "Galsworthy",
          "motivation": "\"for his distinguished art of narration which takes its highest form in <I>The Forsyte Saga</I>\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1932",
      "category": "peace",
      "overallMotivation": "\"No Nobel Prize was awarded this year. The prize money was allocated to the Special Fund of this prize section.\""
    },
    {
      "year": "1932",
      "category": "physics",
      "laureates": [
        {
          "id": "38",
          "firstname": "Werner",
          "surname": "Heisenberg",
          "motivation": "\"for the creation of quantum mechanics, the application of which has, inter alia, led to the discovery of the allotropic forms of hydrogen\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1932",
      "category": "medicine",
      "laureates": [
        {
          "id": "323",
          "firstname": "Sir Charles",
          "surname": "Sherrington",
          "motivation": "\"for their discoveries regarding the functions of neurons\"",
          "share": "2"
        },
        {
          "id": "324",
          "firstname": "Edgar",
          "surname": "Adrian",
          "motivation": "\"for their discoveries regarding the functions of neurons\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1931",
      "category": "chemistry",
      "laureates": [
        {
          "id": "189",
          "firstname": "Carl",
          "surname": "Bosch",
          "motivation": "\"in recognition of their contributions to the invention and development of chemical high pressure methods\"",
          "share": "2"
        },
        {
          "id": "190",
          "firstname": "Friedrich",
          "surname": "Bergius",
          "motivation": "\"in recognition of their contributions to the invention and development of chemical high pressure methods\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1931",
      "category": "literature",
      "laureates": [
        {
          "id": "604",
          "firstname": "Erik Axel",
          "surname": "Karlfeldt",
          "motivation": "\"The poetry of Erik Axel Karlfeldt\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1931",
      "category": "peace",
      "laureates": [
        {
          "id": "496",
          "firstname": "Jane",
          "surname": "Addams",
          "motivation": "\"for their assiduous effort to revive the ideal of peace and to rekindle the spirit of peace in their own nation and in the whole of mankind\"",
          "share": "2"
        },
        {
          "id": "497",
          "firstname": "Nicholas Murray",
          "surname": "Butler",
          "motivation": "\"for their assiduous effort to revive the ideal of peace and to rekindle the spirit of peace in their own nation and in the whole of mankind\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1931",
      "category": "physics",
      "overallMotivation": "\"No Nobel Prize was awarded this year. The prize money was allocated to the Special Fund of this prize section.\""
    },
    {
      "year": "1931",
      "category": "medicine",
      "laureates": [
        {
          "id": "322",
          "firstname": "Otto",
          "surname": "Warburg",
          "motivation": "\"for his discovery of the nature and mode of action of the respiratory enzyme\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1930",
      "category": "chemistry",
      "laureates": [
        {
          "id": "188",
          "firstname": "Hans",
          "surname": "Fischer",
          "motivation": "\"for his researches into the constitution of haemin and chlorophyll and especially for his synthesis of haemin\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1930",
      "category": "literature",
      "laureates": [
        {
          "id": "603",
          "firstname": "Sinclair",
          "surname": "Lewis",
          "motivation": "\"for his vigorous and graphic art of description and his ability to create, with wit and humour, new types of characters\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1930",
      "category": "peace",
      "laureates": [
        {
          "id": "495",
          "firstname": "Nathan",
          "surname": "Söderblom",
          "motivation": "\"for promoting Christian unity and helping create 'that new attitude of mind which is necessary if peace between nations is to become reality'\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1930",
      "category": "physics",
      "laureates": [
        {
          "id": "37",
          "firstname": "Sir Chandrasekhara Venkata",
          "surname": "Raman",
          "motivation": "\"for his work on the scattering of light and for the discovery of the effect named after him\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1930",
      "category": "medicine",
      "laureates": [
        {
          "id": "321",
          "firstname": "Karl",
          "surname": "Landsteiner",
          "motivation": "\"for his discovery of human blood groups\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1929",
      "category": "chemistry",
      "laureates": [
        {
          "id": "186",
          "firstname": "Arthur",
          "surname": "Harden",
          "motivation": "\"for their investigations on the fermentation of sugar and fermentative enzymes\"",
          "share": "2"
        },
        {
          "id": "187",
          "firstname": "Hans",
          "surname": "von Euler-Chelpin",
          "motivation": "\"for their investigations on the fermentation of sugar and fermentative enzymes\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1929",
      "category": "literature",
      "laureates": [
        {
          "id": "602",
          "firstname": "Thomas",
          "surname": "Mann",
          "motivation": "\"principally for his great novel, <I>Buddenbrooks</I>, which has won steadily increased recognition as one of the classic works of contemporary literature\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1929",
      "category": "peace",
      "laureates": [
        {
          "id": "494",
          "firstname": "Frank B.",
          "surname": "Kellogg",
          "motivation": "\"for his crucial role in bringing about the Briand-Kellogg Pact\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1929",
      "category": "physics",
      "laureates": [
        {
          "id": "36",
          "firstname": "Louis",
          "surname": "de Broglie",
          "motivation": "\"for his discovery of the wave nature of electrons\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1929",
      "category": "medicine",
      "laureates": [
        {
          "id": "319",
          "firstname": "Christiaan",
          "surname": "Eijkman",
          "motivation": "\"for his discovery of the antineuritic vitamin\"",
          "share": "2"
        },
        {
          "id": "320",
          "firstname": "Sir Frederick",
          "surname": "Hopkins",
          "motivation": "\"for his discovery of the growth-stimulating vitamins\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1928",
      "category": "chemistry",
      "laureates": [
        {
          "id": "185",
          "firstname": "Adolf",
          "surname": "Windaus",
          "motivation": "\"for the services rendered through his research into the constitution of the sterols and their connection with the vitamins\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1928",
      "category": "literature",
      "laureates": [
        {
          "id": "601",
          "firstname": "Sigrid",
          "surname": "Undset",
          "motivation": "\"principally for her powerful descriptions of Northern life during the Middle Ages\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1928",
      "category": "peace",
      "overallMotivation": "\"No Nobel Prize was awarded this year. The prize money was allocated to the Special Fund of this prize section.\""
    },
    {
      "year": "1928",
      "category": "physics",
      "laureates": [
        {
          "id": "35",
          "firstname": "Owen Willans",
          "surname": "Richardson",
          "motivation": "\"for his work on the thermionic phenomenon and especially for the discovery of the law named after him\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1928",
      "category": "medicine",
      "laureates": [
        {
          "id": "318",
          "firstname": "Charles",
          "surname": "Nicolle",
          "motivation": "\"for his work on typhus\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1927",
      "category": "chemistry",
      "laureates": [
        {
          "id": "184",
          "firstname": "Heinrich",
          "surname": "Wieland",
          "motivation": "\"for his investigations of the constitution of the bile acids and related substances\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1927",
      "category": "literature",
      "laureates": [
        {
          "id": "600",
          "firstname": "Henri",
          "surname": "Bergson",
          "motivation": "\"in recognition of his rich and vitalizing ideas and the brilliant skill with which they have been presented\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1927",
      "category": "peace",
      "laureates": [
        {
          "id": "492",
          "firstname": "Ferdinand",
          "surname": "Buisson",
          "motivation": "\"for their contribution to the emergence in France and Germany of a public opinion which favours peaceful international cooperation\"",
          "share": "2"
        },
        {
          "id": "493",
          "firstname": "Ludwig",
          "surname": "Quidde",
          "motivation": "\"for their contribution to the emergence in France and Germany of a public opinion which favours peaceful international cooperation\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1927",
      "category": "physics",
      "laureates": [
        {
          "id": "33",
          "firstname": "Arthur H.",
          "surname": "Compton",
          "motivation": "\"for his discovery of the effect named after him\"",
          "share": "2"
        },
        {
          "id": "34",
          "firstname": "C.T.R.",
          "surname": "Wilson",
          "motivation": "\"for his method of making the paths of electrically charged particles visible by condensation of vapour\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1927",
      "category": "medicine",
      "laureates": [
        {
          "id": "317",
          "firstname": "Julius",
          "surname": "Wagner-Jauregg",
          "motivation": "\"for his discovery of the therapeutic value of malaria inoculation in the treatment of dementia paralytica\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1926",
      "category": "chemistry",
      "laureates": [
        {
          "id": "183",
          "firstname": "The",
          "surname": "Svedberg",
          "motivation": "\"for his work on disperse systems\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1926",
      "category": "literature",
      "laureates": [
        {
          "id": "597",
          "firstname": "Grazia",
          "surname": "Deledda",
          "motivation": "\"for her idealistically inspired writings which with plastic clarity picture the life on her native island and with depth and sympathy deal with human problems in general\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1926",
      "category": "peace",
      "laureates": [
        {
          "id": "490",
          "firstname": "Aristide",
          "surname": "Briand",
          "motivation": "\"for their crucial role in bringing about the Locarno Treaty\"",
          "share": "2"
        },
        {
          "id": "491",
          "firstname": "Gustav",
          "surname": "Stresemann",
          "motivation": "\"for their crucial role in bringing about the Locarno Treaty\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1926",
      "category": "physics",
      "laureates": [
        {
          "id": "32",
          "firstname": "Jean Baptiste",
          "surname": "Perrin",
          "motivation": "\"for his work on the discontinuous structure of matter, and especially for his discovery of sedimentation equilibrium\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1926",
      "category": "medicine",
      "laureates": [
        {
          "id": "316",
          "firstname": "Johannes",
          "surname": "Fibiger",
          "motivation": "\"for his discovery of the Spiroptera carcinoma\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1925",
      "category": "chemistry",
      "laureates": [
        {
          "id": "182",
          "firstname": "Richard",
          "surname": "Zsigmondy",
          "motivation": "\"for his demonstration of the heterogenous nature of colloid solutions and for the methods he used, which have since become fundamental in modern colloid chemistry\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1925",
      "category": "literature",
      "laureates": [
        {
          "id": "596",
          "firstname": "George Bernard",
          "surname": "Shaw",
          "motivation": "\"for his work which is marked by both idealism and humanity, its stimulating satire often being infused with a singular poetic beauty\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1925",
      "category": "peace",
      "laureates": [
        {
          "id": "488",
          "firstname": "Sir Austen",
          "surname": "Chamberlain",
          "motivation": "\"for his crucial role in bringing about the Locarno Treaty\"",
          "share": "2"
        },
        {
          "id": "489",
          "firstname": "Charles G.",
          "surname": "Dawes",
          "motivation": "\"for his crucial role in bringing about the Dawes Plan\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1925",
      "category": "physics",
      "laureates": [
        {
          "id": "30",
          "firstname": "James",
          "surname": "Franck",
          "motivation": "\"for their discovery of the laws governing the impact of an electron upon an atom\"",
          "share": "2"
        },
        {
          "id": "31",
          "firstname": "Gustav",
          "surname": "Hertz",
          "motivation": "\"for their discovery of the laws governing the impact of an electron upon an atom\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1925",
      "category": "medicine",
      "overallMotivation": "\"No Nobel Prize was awarded this year. The prize money was allocated to the Special Fund of this prize section.\""
    },
    {
      "year": "1924",
      "category": "chemistry",
      "overallMotivation": "\"No Nobel Prize was awarded this year. The prize money was allocated to the Special Fund of this prize section.\""
    },
    {
      "year": "1924",
      "category": "literature",
      "laureates": [
        {
          "id": "594",
          "firstname": "Wladyslaw",
          "surname": "Reymont",
          "motivation": "\"for his great national epic, <I>The Peasants</I>\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1924",
      "category": "peace",
      "overallMotivation": "\"No Nobel Prize was awarded this year. The prize money was allocated to the Special Fund of this prize section.\""
    },
    {
      "year": "1924",
      "category": "physics",
      "laureates": [
        {
          "id": "29",
          "firstname": "Manne",
          "surname": "Siegbahn",
          "motivation": "\"for his discoveries and research in the field of X-ray spectroscopy\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1924",
      "category": "medicine",
      "laureates": [
        {
          "id": "315",
          "firstname": "Willem",
          "surname": "Einthoven",
          "motivation": "\"for his discovery of the mechanism of the electrocardiogram\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1923",
      "category": "chemistry",
      "laureates": [
        {
          "id": "181",
          "firstname": "Fritz",
          "surname": "Pregl",
          "motivation": "\"for his invention of the method of micro-analysis of organic substances\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1923",
      "category": "literature",
      "laureates": [
        {
          "id": "593",
          "firstname": "William Butler",
          "surname": "Yeats",
          "motivation": "\"for his always inspired poetry, which in a highly artistic form gives expression to the spirit of a whole nation\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1923",
      "category": "peace",
      "overallMotivation": "\"No Nobel Prize was awarded this year. The prize money was allocated to the Special Fund of this prize section.\""
    },
    {
      "year": "1923",
      "category": "physics",
      "laureates": [
        {
          "id": "28",
          "firstname": "Robert A.",
          "surname": "Millikan",
          "motivation": "\"for his work on the elementary charge of electricity and on the photoelectric effect\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1923",
      "category": "medicine",
      "laureates": [
        {
          "id": "313",
          "firstname": "Frederick G.",
          "surname": "Banting",
          "motivation": "\"for the discovery of insulin\"",
          "share": "2"
        },
        {
          "id": "314",
          "firstname": "John",
          "surname": "Macleod",
          "motivation": "\"for the discovery of insulin\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1922",
      "category": "chemistry",
      "laureates": [
        {
          "id": "180",
          "firstname": "Francis W.",
          "surname": "Aston",
          "motivation": "\"for his discovery, by means of his mass spectrograph, of isotopes, in a large number of non-radioactive elements, and for his enunciation of the whole-number rule\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1922",
      "category": "literature",
      "laureates": [
        {
          "id": "592",
          "firstname": "Jacinto",
          "surname": "Benavente",
          "motivation": "\"for the happy manner in which he has continued the illustrious traditions of the Spanish drama\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1922",
      "category": "peace",
      "laureates": [
        {
          "id": "487",
          "firstname": "Fridtjof",
          "surname": "Nansen",
          "motivation": "\"for his leading role in the repatriation of prisoners of war, in international relief work and as the League of Nations' High Commissioner for refugees\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1922",
      "category": "physics",
      "laureates": [
        {
          "id": "27",
          "firstname": "Niels",
          "surname": "Bohr",
          "motivation": "\"for his services in the investigation of the structure of atoms and of the radiation emanating from them\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1922",
      "category": "medicine",
      "laureates": [
        {
          "id": "311",
          "firstname": "Archibald V.",
          "surname": "Hill",
          "motivation": "\"for his discovery relating to the production of heat in the muscle\"",
          "share": "2"
        },
        {
          "id": "312",
          "firstname": "Otto",
          "surname": "Meyerhof",
          "motivation": "\"for his discovery of the fixed relationship between the consumption of oxygen and the metabolism of lactic acid in the muscle\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1921",
      "category": "chemistry",
      "laureates": [
        {
          "id": "179",
          "firstname": "Frederick",
          "surname": "Soddy",
          "motivation": "\"for his contributions to our knowledge of the chemistry of radioactive substances, and his investigations into the origin and nature of isotopes\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1921",
      "category": "literature",
      "laureates": [
        {
          "id": "590",
          "firstname": "Anatole",
          "surname": "France",
          "motivation": "\"in recognition of his brilliant literary achievements, characterized as they are by a nobility of style, a profound human sympathy, grace, and a true Gallic temperament\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1921",
      "category": "peace",
      "laureates": [
        {
          "id": "485",
          "firstname": "Hjalmar",
          "surname": "Branting",
          "motivation": "\"for their lifelong contributions to the cause of peace and organized internationalism\"",
          "share": "2"
        },
        {
          "id": "486",
          "firstname": "Christian",
          "surname": "Lange",
          "motivation": "\"for their lifelong contributions to the cause of peace and organized internationalism\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1921",
      "category": "physics",
      "laureates": [
        {
          "id": "26",
          "firstname": "Albert",
          "surname": "Einstein",
          "motivation": "\"for his services to Theoretical Physics, and especially for his discovery of the law of the photoelectric effect\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1921",
      "category": "medicine",
      "overallMotivation": "\"No Nobel Prize was awarded this year. The prize money was allocated to the Special Fund of this prize section.\""
    },
    {
      "year": "1920",
      "category": "chemistry",
      "laureates": [
        {
          "id": "178",
          "firstname": "Walther",
          "surname": "Nernst",
          "motivation": "\"in recognition of his work in thermochemistry\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1920",
      "category": "literature",
      "laureates": [
        {
          "id": "589",
          "firstname": "Knut",
          "surname": "Hamsun",
          "motivation": "\"for his monumental work, <I>Growth of the Soil</I>\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1920",
      "category": "peace",
      "laureates": [
        {
          "id": "484",
          "firstname": "Léon",
          "surname": "Bourgeois",
          "motivation": "\"for his longstanding contribution to the cause of peace and justice and his prominent role in the establishment of the League of Nations\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1920",
      "category": "physics",
      "laureates": [
        {
          "id": "25",
          "firstname": "Charles Edouard",
          "surname": "Guillaume",
          "motivation": "\"in recognition of the service he has rendered to precision measurements in Physics by his discovery of anomalies in nickel steel alloys\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1920",
      "category": "medicine",
      "laureates": [
        {
          "id": "310",
          "firstname": "August",
          "surname": "Krogh",
          "motivation": "\"for his discovery of the capillary motor regulating mechanism\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1919",
      "category": "chemistry",
      "overallMotivation": "\"No Nobel Prize was awarded this year. The prize money was allocated to the Special Fund of this prize section.\""
    },
    {
      "year": "1919",
      "category": "literature",
      "laureates": [
        {
          "id": "588",
          "firstname": "Carl",
          "surname": "Spitteler",
          "motivation": "\"in special appreciation of his epic, <I>Olympian Spring</I>\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1919",
      "category": "peace",
      "laureates": [
        {
          "id": "483",
          "firstname": "Woodrow",
          "surname": "Wilson",
          "motivation": "\"for his role as founder of the League of Nations\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1919",
      "category": "physics",
      "laureates": [
        {
          "id": "24",
          "firstname": "Johannes",
          "surname": "Stark",
          "motivation": "\"for his discovery of the Doppler effect in canal rays and the splitting of spectral lines in electric fields\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1919",
      "category": "medicine",
      "laureates": [
        {
          "id": "309",
          "firstname": "Jules",
          "surname": "Bordet",
          "motivation": "\"for his discoveries relating to immunity\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1918",
      "category": "chemistry",
      "laureates": [
        {
          "id": "177",
          "firstname": "Fritz",
          "surname": "Haber",
          "motivation": "\"for the synthesis of ammonia from its elements\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1918",
      "category": "literature",
      "overallMotivation": "\"No Nobel Prize was awarded this year. The prize money was allocated to the Special Fund of this prize section.\""
    },
    {
      "year": "1918",
      "category": "peace",
      "overallMotivation": "\"No Nobel Prize was awarded this year. The prize money was allocated to the Special Fund of this prize section.\""
    },
    {
      "year": "1918",
      "category": "physics",
      "laureates": [
        {
          "id": "23",
          "firstname": "Max",
          "surname": "Planck",
          "motivation": "\"in recognition of the services he rendered to the advancement of Physics by his discovery of energy quanta\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1918",
      "category": "medicine",
      "overallMotivation": "\"No Nobel Prize was awarded this year. The prize money was allocated to the Special Fund of this prize section.\""
    },
    {
      "year": "1917",
      "category": "chemistry",
      "overallMotivation": "\"No Nobel Prize was awarded this year. The prize money was allocated to the Special Fund of this prize section.\""
    },
    {
      "year": "1917",
      "category": "literature",
      "laureates": [
        {
          "id": "586",
          "firstname": "Karl",
          "surname": "Gjellerup",
          "motivation": "\"for his varied and rich poetry, which is inspired by lofty ideals\"",
          "share": "2"
        },
        {
          "id": "587",
          "firstname": "Henrik",
          "surname": "Pontoppidan",
          "motivation": "\"for his authentic descriptions of present-day life in Denmark\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1917",
      "category": "peace",
      "laureates": [
        {
          "id": "482",
          "motivation": "\"for the efforts to take care of wounded soldiers and prisoners of war and their families\"",
          "share": "1",
          "firstname": "International Committee of the Red Cross"
        }
      ]
    },
    {
      "year": "1917",
      "category": "physics",
      "laureates": [
        {
          "id": "22",
          "firstname": "Charles Glover",
          "surname": "Barkla",
          "motivation": "\"for his discovery of the characteristic R&ouml;ntgen radiation of the elements\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1917",
      "category": "medicine",
      "overallMotivation": "\"No Nobel Prize was awarded this year. The prize money was allocated to the Special Fund of this prize section.\""
    },
    {
      "year": "1916",
      "category": "chemistry",
      "overallMotivation": "\"No Nobel Prize was awarded this year. The prize money was allocated to the Special Fund of this prize section.\""
    },
    {
      "year": "1916",
      "category": "literature",
      "laureates": [
        {
          "id": "585",
          "firstname": "Verner",
          "surname": "von Heidenstam",
          "motivation": "\"in recognition of his significance as the leading representative of a new era in our literature\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1916",
      "category": "peace",
      "overallMotivation": "\"No Nobel Prize was awarded this year. The prize money was allocated to the Special Fund of this prize section.\""
    },
    {
      "year": "1916",
      "category": "physics",
      "overallMotivation": "\"No Nobel Prize was awarded this year. The prize money was allocated to the Special Fund of this prize section.\""
    },
    {
      "year": "1916",
      "category": "medicine",
      "overallMotivation": "\"No Nobel Prize was awarded this year. The prize money was allocated to the Special Fund of this prize section.\""
    },
    {
      "year": "1915",
      "category": "chemistry",
      "laureates": [
        {
          "id": "176",
          "firstname": "Richard",
          "surname": "Willstätter",
          "motivation": "\"for his researches on plant pigments, especially chlorophyll\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1915",
      "category": "literature",
      "laureates": [
        {
          "id": "584",
          "firstname": "Romain",
          "surname": "Rolland",
          "motivation": "\"as a tribute to the lofty idealism of his literary production and to the sympathy and love of truth with which he has described different types of human beings\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1915",
      "category": "peace",
      "overallMotivation": "\"No Nobel Prize was awarded this year. The prize money was allocated to the Special Fund of this prize section.\""
    },
    {
      "year": "1915",
      "category": "physics",
      "laureates": [
        {
          "id": "20",
          "firstname": "William",
          "surname": "Bragg",
          "motivation": "\"for their services in the analysis of crystal structure by means of X-rays\"",
          "share": "2"
        },
        {
          "id": "21",
          "firstname": "Lawrence",
          "surname": "Bragg",
          "motivation": "\"for their services in the analysis of crystal structure by means of X-rays\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1915",
      "category": "medicine",
      "overallMotivation": "\"No Nobel Prize was awarded this year. The prize money was allocated to the Special Fund of this prize section.\""
    },
    {
      "year": "1914",
      "category": "chemistry",
      "laureates": [
        {
          "id": "175",
          "firstname": "Theodore W.",
          "surname": "Richards",
          "motivation": "\"in recognition of his accurate determinations of the atomic weight of a large number of chemical elements\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1914",
      "category": "literature",
      "overallMotivation": "\"No Nobel Prize was awarded this year. The prize money was allocated to the Special Fund of this prize section.\""
    },
    {
      "year": "1914",
      "category": "peace",
      "overallMotivation": "\"No Nobel Prize was awarded this year. The prize money was allocated to the Special Fund of this prize section.\""
    },
    {
      "year": "1914",
      "category": "physics",
      "laureates": [
        {
          "id": "19",
          "firstname": "Max",
          "surname": "von Laue",
          "motivation": "\"for his discovery of the diffraction of X-rays by crystals\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1914",
      "category": "medicine",
      "laureates": [
        {
          "id": "308",
          "firstname": "Robert",
          "surname": "Bárány",
          "motivation": "\"for his work on the physiology and pathology of the vestibular apparatus\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1913",
      "category": "chemistry",
      "laureates": [
        {
          "id": "174",
          "firstname": "Alfred",
          "surname": "Werner",
          "motivation": "\"in recognition of his work on the linkage of atoms in molecules by which he has thrown new light on earlier investigations and opened up new fields of research especially in inorganic chemistry\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1913",
      "category": "literature",
      "laureates": [
        {
          "id": "583",
          "firstname": "Rabindranath",
          "surname": "Tagore",
          "motivation": "\"because of his profoundly sensitive, fresh and beautiful verse, by which, with consummate skill, he has made his poetic thought, expressed in his own English words, a part of the literature of the West\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1913",
      "category": "peace",
      "laureates": [
        {
          "id": "481",
          "firstname": "Henri",
          "surname": "La Fontaine",
          "motivation": "\"for his unparalleled contribution to the organization of peaceful internationalism\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1913",
      "category": "physics",
      "laureates": [
        {
          "id": "18",
          "firstname": "Heike",
          "surname": "Kamerlingh Onnes",
          "motivation": "\"for his investigations on the properties of matter at low temperatures which led, inter alia, to the production of liquid helium\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1913",
      "category": "medicine",
      "laureates": [
        {
          "id": "307",
          "firstname": "Charles",
          "surname": "Richet",
          "motivation": "\"in recognition of his work on anaphylaxis\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1912",
      "category": "chemistry",
      "laureates": [
        {
          "id": "172",
          "firstname": "Victor",
          "surname": "Grignard",
          "motivation": "\"for the discovery of the so-called Grignard reagent, which in recent years has greatly advanced the progress of organic chemistry\"",
          "share": "2"
        },
        {
          "id": "173",
          "firstname": "Paul",
          "surname": "Sabatier",
          "motivation": "\"for his method of hydrogenating organic compounds in the presence of finely disintegrated metals whereby the progress of organic chemistry has been greatly advanced in recent years\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1912",
      "category": "literature",
      "laureates": [
        {
          "id": "582",
          "firstname": "Gerhart",
          "surname": "Hauptmann",
          "motivation": "\"primarily in recognition of his fruitful, varied and outstanding production in the realm of dramatic art\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1912",
      "category": "peace",
      "laureates": [
        {
          "id": "480",
          "firstname": "Elihu",
          "surname": "Root",
          "motivation": "\"for bringing about better understanding between the countries of North and South America and initiating important arbitration agreements between the United States and other countries\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1912",
      "category": "physics",
      "laureates": [
        {
          "id": "17",
          "firstname": "Gustaf",
          "surname": "Dalén",
          "motivation": "\"for his invention of automatic regulators for use in conjunction with gas accumulators for illuminating lighthouses and buoys\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1912",
      "category": "medicine",
      "laureates": [
        {
          "id": "306",
          "firstname": "Alexis",
          "surname": "Carrel",
          "motivation": "\"in recognition of his work on vascular suture and the transplantation of blood vessels and organs\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1911",
      "category": "chemistry",
      "laureates": [
        {
          "id": "6",
          "firstname": "Marie",
          "surname": "Curie",
          "motivation": "\"in recognition of her services to the advancement of chemistry by the discovery of the elements radium and polonium, by the isolation of radium and the study of the nature and compounds of this remarkable element\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1911",
      "category": "literature",
      "laureates": [
        {
          "id": "581",
          "firstname": "Maurice",
          "surname": "Maeterlinck",
          "motivation": "\"in appreciation of his many-sided literary activities, and especially of his dramatic works, which are distinguished by a wealth of imagination and by a poetic fancy, which reveals, sometimes in the guise of a fairy tale, a deep inspiration, while in a mysterious way they appeal to the readers' own feelings and stimulate their imaginations\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1911",
      "category": "peace",
      "laureates": [
        {
          "id": "478",
          "firstname": "Tobias",
          "surname": "Asser",
          "motivation": "\"for his role as co-founder of the Institut de droit international, initiator of the Conferences on International Private Law (Conférences de Droit international privé) at the Hague, and pioneer in the field of international legal relations\"",
          "share": "2"
        },
        {
          "id": "479",
          "firstname": "Alfred",
          "surname": "Fried",
          "motivation": "\"for his effort to expose and fight what he considers to be the main cause of war, namely, the anarchy in international relations\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1911",
      "category": "physics",
      "laureates": [
        {
          "id": "16",
          "firstname": "Wilhelm",
          "surname": "Wien",
          "motivation": "\"for his discoveries regarding the laws governing the radiation of heat\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1911",
      "category": "medicine",
      "laureates": [
        {
          "id": "305",
          "firstname": "Allvar",
          "surname": "Gullstrand",
          "motivation": "\"for his work on the dioptrics of the eye\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1910",
      "category": "chemistry",
      "laureates": [
        {
          "id": "169",
          "firstname": "Otto",
          "surname": "Wallach",
          "motivation": "\"in recognition of his services to organic chemistry and the chemical industry by his pioneer work in the field of alicyclic compounds\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1910",
      "category": "literature",
      "laureates": [
        {
          "id": "580",
          "firstname": "Paul",
          "surname": "Heyse",
          "motivation": "\"as a tribute to the consummate artistry, permeated with idealism, which he has demonstrated during his long productive career as a lyric poet, dramatist, novelist and writer of world-renowned short stories\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1910",
      "category": "peace",
      "laureates": [
        {
          "id": "477",
          "motivation": "\"for acting as a link between the peace societies of the various countries, and helping them to organize the world rallies of the international peace movement\"",
          "share": "1",
          "firstname": "Permanent International Peace Bureau"
        }
      ]
    },
    {
      "year": "1910",
      "category": "physics",
      "laureates": [
        {
          "id": "15",
          "firstname": "Johannes Diderik",
          "surname": "van der Waals",
          "motivation": "\"for his work on the equation of state for gases and liquids\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1910",
      "category": "medicine",
      "laureates": [
        {
          "id": "304",
          "firstname": "Albrecht",
          "surname": "Kossel",
          "motivation": "\"in recognition of the contributions to our knowledge of cell chemistry made through his work on proteins, including the nucleic substances\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1909",
      "category": "chemistry",
      "laureates": [
        {
          "id": "168",
          "firstname": "Wilhelm",
          "surname": "Ostwald",
          "motivation": "\"in recognition of his work on catalysis and for his investigations into the fundamental principles governing chemical equilibria and rates of reaction\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1909",
      "category": "literature",
      "laureates": [
        {
          "id": "579",
          "firstname": "Selma",
          "surname": "Lagerlöf",
          "motivation": "\"in appreciation of the lofty idealism, vivid imagination and spiritual perception that characterize her writings\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1909",
      "category": "peace",
      "laureates": [
        {
          "id": "475",
          "firstname": "Auguste",
          "surname": "Beernaert",
          "motivation": "\"for their prominent position in the international movement for peace and arbitration\"",
          "share": "2"
        },
        {
          "id": "476",
          "firstname": "Paul Henri",
          "surname": "d'Estournelles de Constant",
          "motivation": "\"for their prominent position in the international movement for peace and arbitration\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1909",
      "category": "physics",
      "laureates": [
        {
          "id": "13",
          "firstname": "Guglielmo",
          "surname": "Marconi",
          "motivation": "\"in recognition of their contributions to the development of wireless telegraphy\"",
          "share": "2"
        },
        {
          "id": "14",
          "firstname": "Ferdinand",
          "surname": "Braun",
          "motivation": "\"in recognition of their contributions to the development of wireless telegraphy\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1909",
      "category": "medicine",
      "laureates": [
        {
          "id": "303",
          "firstname": "Theodor",
          "surname": "Kocher",
          "motivation": "\"for his work on the physiology, pathology and surgery of the thyroid gland\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1908",
      "category": "chemistry",
      "laureates": [
        {
          "id": "167",
          "firstname": "Ernest",
          "surname": "Rutherford",
          "motivation": "\"for his investigations into the disintegration of the elements, and the chemistry of radioactive substances\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1908",
      "category": "literature",
      "laureates": [
        {
          "id": "578",
          "firstname": "Rudolf",
          "surname": "Eucken",
          "motivation": "\"in recognition of his earnest search for truth, his penetrating power of thought, his wide range of vision, and the warmth and strength in presentation with which in his numerous works he has vindicated and developed an idealistic philosophy of life\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1908",
      "category": "peace",
      "laureates": [
        {
          "id": "473",
          "firstname": "Klas Pontus",
          "surname": "Arnoldson",
          "motivation": "\"for their long time work for the cause of peace as politicians, peace society leaders, orators and authors\"",
          "share": "2"
        },
        {
          "id": "474",
          "firstname": "Fredrik",
          "surname": "Bajer",
          "motivation": "\"for their long time work for the cause of peace as politicians, peace society leaders, orators and authors\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1908",
      "category": "physics",
      "laureates": [
        {
          "id": "12",
          "firstname": "Gabriel",
          "surname": "Lippmann",
          "motivation": "\"for his method of reproducing colours photographically based on the phenomenon of interference\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1908",
      "category": "medicine",
      "laureates": [
        {
          "id": "301",
          "firstname": "Ilya",
          "surname": "Mechnikov",
          "motivation": "\"in recognition of their work on immunity\"",
          "share": "2"
        },
        {
          "id": "302",
          "firstname": "Paul",
          "surname": "Ehrlich",
          "motivation": "\"in recognition of their work on immunity\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1907",
      "category": "chemistry",
      "laureates": [
        {
          "id": "166",
          "firstname": "Eduard",
          "surname": "Buchner",
          "motivation": "\"for his biochemical researches and his discovery of cell-free fermentation\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1907",
      "category": "literature",
      "laureates": [
        {
          "id": "577",
          "firstname": "Rudyard",
          "surname": "Kipling",
          "motivation": "\"in consideration of the power of observation, originality of imagination, virility of ideas and remarkable talent for narration which characterize the creations of this world-famous author\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1907",
      "category": "peace",
      "laureates": [
        {
          "id": "471",
          "firstname": "Ernesto Teodoro",
          "surname": "Moneta",
          "motivation": "\"for his work in the press and in peace meetings, both public and private, for an understanding between France and Italy\"",
          "share": "2"
        },
        {
          "id": "472",
          "firstname": "Louis",
          "surname": "Renault",
          "motivation": "\"for his decisive influence upon the conduct and outcome of the Hague and Geneva Conferences\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1907",
      "category": "physics",
      "laureates": [
        {
          "id": "11",
          "firstname": "Albert A.",
          "surname": "Michelson",
          "motivation": "\"for his optical precision instruments and the spectroscopic and metrological investigations carried out with their aid\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1907",
      "category": "medicine",
      "laureates": [
        {
          "id": "300",
          "firstname": "Alphonse",
          "surname": "Laveran",
          "motivation": "\"in recognition of his work on the role played by protozoa in causing diseases\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1906",
      "category": "chemistry",
      "laureates": [
        {
          "id": "165",
          "firstname": "Henri",
          "surname": "Moissan",
          "motivation": "\"in recognition of the great services rendered by him in his investigation and isolation of the element fluorine, and for the adoption in the service of science of the electric furnace called after him\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1906",
      "category": "literature",
      "laureates": [
        {
          "id": "576",
          "firstname": "Giosuè",
          "surname": "Carducci",
          "motivation": "\"not only in consideration of his deep learning and critical research, but above all as a tribute to the creative energy, freshness of style, and lyrical force which characterize his poetic masterpieces\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1906",
      "category": "peace",
      "laureates": [
        {
          "id": "470",
          "firstname": "Theodore",
          "surname": "Roosevelt",
          "motivation": "\"for his role in bringing to an end the bloody war recently waged between two of the world's great powers, Japan and Russia\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1906",
      "category": "physics",
      "laureates": [
        {
          "id": "10",
          "firstname": "J.J.",
          "surname": "Thomson",
          "motivation": "\"in recognition of the great merits of his theoretical and experimental investigations on the conduction of electricity by gases\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1906",
      "category": "medicine",
      "laureates": [
        {
          "id": "298",
          "firstname": "Camillo",
          "surname": "Golgi",
          "motivation": "\"in recognition of their work on the structure of the nervous system\"",
          "share": "2"
        },
        {
          "id": "299",
          "firstname": "Santiago",
          "surname": "Ramón y Cajal",
          "motivation": "\"in recognition of their work on the structure of the nervous system\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1905",
      "category": "chemistry",
      "laureates": [
        {
          "id": "164",
          "firstname": "Adolf",
          "surname": "von Baeyer",
          "motivation": "\"in recognition of his services in the advancement of organic chemistry and the chemical industry, through his work on organic dyes and hydroaromatic compounds\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1905",
      "category": "literature",
      "laureates": [
        {
          "id": "575",
          "firstname": "Henryk",
          "surname": "Sienkiewicz",
          "motivation": "\"because of his outstanding merits as an epic writer\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1905",
      "category": "peace",
      "laureates": [
        {
          "id": "468",
          "firstname": "Bertha",
          "surname": "von Suttner",
          "motivation": "\"for her audacity to oppose the horrors of war\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1905",
      "category": "physics",
      "laureates": [
        {
          "id": "9",
          "firstname": "Philipp",
          "surname": "Lenard",
          "motivation": "\"for his work on cathode rays\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1905",
      "category": "medicine",
      "laureates": [
        {
          "id": "297",
          "firstname": "Robert",
          "surname": "Koch",
          "motivation": "\"for his investigations and discoveries in relation to tuberculosis\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1904",
      "category": "chemistry",
      "laureates": [
        {
          "id": "163",
          "firstname": "Sir William",
          "surname": "Ramsay",
          "motivation": "\"in recognition of his services in the discovery of the inert gaseous elements in air, and his determination of their place in the periodic system\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1904",
      "category": "literature",
      "laureates": [
        {
          "id": "573",
          "firstname": "Frédéric",
          "surname": "Mistral",
          "motivation": "\"in recognition of the fresh originality and true inspiration of his poetic production, which faithfully reflects the natural scenery and native spirit of his people, and, in addition, his significant work as a Proven&ccedil;al philologist\"",
          "share": "2"
        },
        {
          "id": "574",
          "firstname": "José",
          "surname": "Echegaray",
          "motivation": "\"in recognition of the numerous and brilliant compositions which, in an individual and original manner, have revived the great traditions of the Spanish drama\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1904",
      "category": "peace",
      "laureates": [
        {
          "id": "467",
          "motivation": "\"for its striving in public law to develop peaceful ties between nations and to make the laws of war more humane\"",
          "share": "1",
          "firstname": "Institute of International Law"
        }
      ]
    },
    {
      "year": "1904",
      "category": "physics",
      "laureates": [
        {
          "id": "8",
          "firstname": "Lord",
          "surname": "Rayleigh",
          "motivation": "\"for his investigations of the densities of the most important gases and for his discovery of argon in connection with these studies\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1904",
      "category": "medicine",
      "laureates": [
        {
          "id": "296",
          "firstname": "Ivan",
          "surname": "Pavlov",
          "motivation": "\"in recognition of his work on the physiology of digestion, through which knowledge on vital aspects of the subject has been transformed and enlarged\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1903",
      "category": "chemistry",
      "laureates": [
        {
          "id": "162",
          "firstname": "Svante",
          "surname": "Arrhenius",
          "motivation": "\"in recognition of the extraordinary services he has rendered to the advancement of chemistry by his electrolytic theory of dissociation\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1903",
      "category": "literature",
      "laureates": [
        {
          "id": "572",
          "firstname": "Bjørnstjerne",
          "surname": "Bjørnson",
          "motivation": "\"as a tribute to his noble, magnificent and versatile poetry, which has always been distinguished by both the freshness of its inspiration and the rare purity of its spirit\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1903",
      "category": "peace",
      "laureates": [
        {
          "id": "466",
          "firstname": "Randal",
          "surname": "Cremer",
          "motivation": "\"for his longstanding and devoted effort in favour of the ideas of peace and arbitration\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1903",
      "category": "physics",
      "laureates": [
        {
          "id": "4",
          "firstname": "Henri",
          "surname": "Becquerel",
          "motivation": "\"in recognition of the extraordinary services he has rendered by his discovery of spontaneous radioactivity\"",
          "share": "2"
        },
        {
          "id": "5",
          "firstname": "Pierre",
          "surname": "Curie",
          "motivation": "\"in recognition of the extraordinary services they have rendered by their joint researches on the radiation phenomena discovered by Professor Henri Becquerel\"",
          "share": "4"
        },
        {
          "id": "6",
          "firstname": "Marie",
          "surname": "Curie",
          "motivation": "\"in recognition of the extraordinary services they have rendered by their joint researches on the radiation phenomena discovered by Professor Henri Becquerel\"",
          "share": "4"
        }
      ]
    },
    {
      "year": "1903",
      "category": "medicine",
      "laureates": [
        {
          "id": "295",
          "firstname": "Niels Ryberg",
          "surname": "Finsen",
          "motivation": "\"in recognition of his contribution to the treatment of diseases, especially lupus vulgaris, with concentrated light radiation, whereby he has opened a new avenue for medical science\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1902",
      "category": "chemistry",
      "laureates": [
        {
          "id": "161",
          "firstname": "Emil",
          "surname": "Fischer",
          "motivation": "\"in recognition of the extraordinary services he has rendered by his work on sugar and purine syntheses\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1902",
      "category": "literature",
      "laureates": [
        {
          "id": "571",
          "firstname": "Theodor",
          "surname": "Mommsen",
          "motivation": "\"the greatest living master of the art of historical writing, with special reference to his monumental work, <I>A history of Rome</I>\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1902",
      "category": "peace",
      "laureates": [
        {
          "id": "464",
          "firstname": "Élie",
          "surname": "Ducommun",
          "motivation": "\"for his untiring and skilful directorship of the Bern Peace Bureau\"",
          "share": "2"
        },
        {
          "id": "465",
          "firstname": "Albert",
          "surname": "Gobat",
          "motivation": "\"for his eminently practical administration of the Inter-Parliamentary Union\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1902",
      "category": "physics",
      "laureates": [
        {
          "id": "2",
          "firstname": "Hendrik A.",
          "surname": "Lorentz",
          "motivation": "\"in recognition of the extraordinary service they rendered by their researches into the influence of magnetism upon radiation phenomena\"",
          "share": "2"
        },
        {
          "id": "3",
          "firstname": "Pieter",
          "surname": "Zeeman",
          "motivation": "\"in recognition of the extraordinary service they rendered by their researches into the influence of magnetism upon radiation phenomena\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1902",
      "category": "medicine",
      "laureates": [
        {
          "id": "294",
          "firstname": "Ronald",
          "surname": "Ross",
          "motivation": "\"for his work on malaria, by which he has shown how it enters the organism and thereby has laid the foundation for successful research on this disease and methods of combating it\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1901",
      "category": "chemistry",
      "laureates": [
        {
          "id": "160",
          "firstname": "Jacobus H.",
          "surname": "van 't Hoff",
          "motivation": "\"in recognition of the extraordinary services he has rendered by the discovery of the laws of chemical dynamics and osmotic pressure in solutions\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1901",
      "category": "literature",
      "laureates": [
        {
          "id": "569",
          "firstname": "Sully",
          "surname": "Prudhomme",
          "motivation": "\"in special recognition of his poetic composition, which gives evidence of lofty idealism, artistic perfection and a rare combination of the qualities of both heart and intellect\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1901",
      "category": "peace",
      "laureates": [
        {
          "id": "462",
          "firstname": "Henry",
          "surname": "Dunant",
          "motivation": "\"for his humanitarian efforts to help wounded soldiers and create international understanding\"",
          "share": "2"
        },
        {
          "id": "463",
          "firstname": "Frédéric",
          "surname": "Passy",
          "motivation": "\"for his lifelong work for international peace conferences, diplomacy and arbitration\"",
          "share": "2"
        }
      ]
    },
    {
      "year": "1901",
      "category": "physics",
      "laureates": [
        {
          "id": "1",
          "firstname": "Wilhelm Conrad",
          "surname": "Röntgen",
          "motivation": "\"in recognition of the extraordinary services he has rendered by the discovery of the remarkable rays subsequently named after him\"",
          "share": "1"
        }
      ]
    },
    {
      "year": "1901",
      "category": "medicine",
      "laureates": [
        {
          "id": "293",
          "firstname": "Emil",
          "surname": "von Behring",
          "motivation": "\"for his work on serum therapy, especially its application against diphtheria, by which he has opened a new road in the domain of medical science and thereby placed in the hands of the physician a victorious weapon against illness and deaths\"",
          "share": "1"
        }
      ]
    }
  ]
}
