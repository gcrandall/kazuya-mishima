const VALUES = {
    no: 0,
    yes: 1,
    depends: 2
}

const FIGHTER_LIST = [
    {
        id: "mario",
        number: "01",
        name: "Mario",
        image: "01.webp",
        stage: "mushroomKingdomU.webp",
        ufd: "https://ultimateframedata.com/mario",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Mario",
        weight: 98,
        fallSpeed: 1.5,
        airdodge: 3,
        escape: 3,
        escapeName: "Airdodge",
        comboFood: true,
        searchTerms: ""
    },
    {
        id: "donkey_kong",
        number: "02",
        name: "Donkey Kong",
        image: "02.webp",
        stage: "kongoFalls.webp",
        ufd: "https://ultimateframedata.com/donkey_kong",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Donkey_Kong",
        weight: 127,
        fallSpeed: 1.63,
        airdodge: 4,
        escape: 4,
        escapeName: "Airdodge",
        comboFood: true,
        searchTerms: "DK"
    },
    {
        id: "link",
        number: "03",
        name: "Link",
        image: "03.webp",
        stage: "greatPlateauTower.webp",
        ufd: "https://ultimateframedata.com/link",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Link",
        weight: 104,
        fallSpeed: 1.6,
        airdodge: 3,
        escape: 3,
        escapeName: "Airdodge",
        comboFood: null,
        searchTerms: null
    },
    {
        id: "samus",
        number: "04",
        name: "Samus",
        image: "04.webp",
        stage: "norfair.webp",
        ufd: "https://ultimateframedata.com/samus",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Samus",
        weight: 108,
        fallSpeed: 1.33,
        airdodge: 3,
        escape: 3,
        escapeName: "Airdodge",
        comboFood: null,
        searchTerms: null
    },
    {
        id: "dark_samus",
        number: "04ε",
        name: "Dark Samus",
        image: "04e.webp",
        stage: "norfair.webp",
        ufd: "https://ultimateframedata.com/dark_samus",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Dark_Samus",
        weight: 108,
        fallSpeed: 1.33,
        airdodge: 3,
        escape: 3,
        escapeName: "Airdodge",
        comboFood: null,
        searchTerms: null
    },
    {
        id: "yoshi",
        number: "05",
        name: "Yoshi",
        image: "05.webp",
        stage: "yoshisStory.webp",
        ufd: "https://ultimateframedata.com/yoshi",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Yoshi",
        weight: 104,
        fallSpeed: 1.29,
        airdodge: 3,
        escape: 1,
        escapeName: "D.Jump",
        comboFood: null,
        searchTerms: null
    },
    {
        id: "kirby",
        number: "06",
        name: "Kirby",
        image: "06.webp",
        stage: "greenGreens.webp",
        ufd: "https://ultimateframedata.com/kirby",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Kirby",
        weight: 79,
        fallSpeed: 1.23,
        airdodge: 3,
        escape: 3,
        escapeName: "Airdodge",
        comboFood: null,
        searchTerms: null
    },
    {
        id: "fox",
        number: "07",
        name: "Fox",
        image: "07.webp",
        stage: "lylatCruise.webp",
        ufd: "https://ultimateframedata.com/fox",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Fox",
        weight: 77,
        fallSpeed: 2.1,
        airdodge: 2,
        escape: 2,
        escapeName: "Airdodge",
        comboFood: null,
        searchTerms: null
    },
    {
        id: "pikachu",
        number: "08",
        name: "Pikachu",
        image: "08.webp",
        stage: "pokemonStadium2.webp",
        ufd: "https://ultimateframedata.com/pikachu",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Pikachu",
        weight: 79,
        fallSpeed: 1.55,
        airdodge: 2,
        escape: 2,
        escapeName: "Airdodge",
        comboFood: null,
        searchTerms: null
    },
    {
        id: "luigi",
        number: "09",
        name: "Luigi",
        image: "09.webp",
        stage: "luigisMansion.webp",
        ufd: "https://ultimateframedata.com/luigi",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Luigi",
        weight: 97,
        fallSpeed: 1.32,
        airdodge: 3,
        escape: 1,
        escapeName: "Cyclone",
        comboFood: null,
        searchTerms: null
    },
    {
        id: "ness",
        number: "10",
        name: "Ness",
        image: "10.webp",
        stage: "onett.webp",
        ufd: "https://ultimateframedata.com/ness",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Ness",
        weight: 94,
        fallSpeed: 1.31,
        airdodge: 3,
        escape: 3,
        escapeName: "Airdodge",
        comboFood: null,
        searchTerms: null
    },
    {
        id: "captain_falcon",
        number: "11",
        name: "Captain Falcon",
        image: "11.webp",
        stage: "bigBlue.webp",
        ufd: "https://ultimateframedata.com/captain_falcon",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Captain_Falcon",
        weight: 104,
        fallSpeed: 1.865,
        airdodge: 3,
        escape: 3,
        escapeName: "Airdodge",
        comboFood: null,
        searchTerms: null
    },
    {
        id: "jigglypuff",
        number: "12",
        name: "Jigglypuff",
        image: "12.webp",
        stage: "pokemonStadium2.webp",
        ufd: "https://ultimateframedata.com/jigglypuff",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Jigglypuff",
        weight: 68,
        fallSpeed: 0.98,
        airdodge: 4,
        escape: 1,
        escapeName: "Rest",
        comboFood: null,
        searchTerms: null
    },
    {
        id: "peach",
        number: "13",
        name: "Peach",
        image: "13.webp",
        stage: "peachCastle.webp",
        ufd: "https://ultimateframedata.com/peach",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Peach",
        weight: 89,
        fallSpeed: 1.19,
        airdodge: 3,
        escape: 3,
        escapeName: "Airdodge",
        comboFood: null,
        searchTerms: "Paisy"
    },
    {
        id: "daisy",
        number: "13ε",
        name: "Daisy",
        image: "13e.webp",
        stage: "peachCastle.webp",
        ufd: "https://ultimateframedata.com/daisy",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Daisy",
        weight: 89,
        fallSpeed: 1.19,
        airdodge: 3,
        escape: 3,
        escapeName: "Airdodge",
        comboFood: null,
        searchTerms: "Paisy"
    },
    {
        id: "bowser",
        number: "14",
        name: "Bowser",
        image: "14.webp",
        stage: "mushroomKingdomU.webp",
        ufd: "https://ultimateframedata.com/bowser",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Bowser",
        weight: 135,
        fallSpeed: 1.77,
        airdodge: 4,
        escape: 4,
        escapeName: "Airdodge",
        comboFood: true,
        searchTerms: null
    },
    {
        id: "ice_climbers",
        number: "15",
        name: "Ice Climbers",
        image: "15.webp",
        stage: "summit.webp",
        ufd: "https://ultimateframedata.com/ice_climbers",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Ice_Climbers",
        weight: 92,
        fallSpeed: 1.3,
        airdodge: 3,
        escape: 3,
        escapeName: "Airdodge",
        comboFood: null,
        searchTerms: "ICs Icies"
    },
    {
        id: "sheik",
        number: "16",
        name: "Sheik",
        image: "16.webp",
        stage: "hyruleCastle.webp",
        ufd: "https://ultimateframedata.com/sheik",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Sheik",
        weight: 78,
        fallSpeed: 1.75,
        airdodge: 2,
        escape: 2,
        escapeName: "Airdodge",
        comboFood: null,
        searchTerms: null
    },
    {
        id: "zelda",
        number: "17",
        name: "Zelda",
        image: "17.webp",
        stage: "hyruleCastle.webp",
        ufd: "https://ultimateframedata.com/zelda",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Zelda",
        weight: 85,
        fallSpeed: 1.35,
        airdodge: 3,
        escape: 3,
        escapeName: "Airdodge",
        comboFood: null,
        searchTerms: null
    },
    {
        id: "dr_mario",
        number: "18",
        name: "Dr. Mario",
        image: "18.webp",
        stage: "mushroomKingdomU.webp",
        ufd: "https://ultimateframedata.com/dr_mario",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Dr._Mario",
        weight: 98,
        fallSpeed: 1.5,
        airdodge: 3,
        escape: 3,
        escapeName: "Airdodge",
        comboFood: true,
        searchTerms: "Doctor Mario"
    },
    {
        id: "pichu",
        number: "19",
        name: "Pichu",
        image: "19.webp",
        stage: "pokemonStadium2.webp",
        ufd: "https://ultimateframedata.com/pichu",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Pichu",
        weight: 62,
        fallSpeed: 1.9,
        airdodge: 2,
        escape: 2,
        escapeName: "Airdodge",
        comboFood: null,
        searchTerms: null
    },
    {
        id: "falco",
        number: "20",
        name: "Falco",
        image: "20.webp",
        stage: "lylatCruise.webp",
        ufd: "https://ultimateframedata.com/falco",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Falco",
        weight: 82,
        fallSpeed: 1.8,
        airdodge: 2,
        escape: 2,
        escapeName: "Airdodge",
        comboFood: null,
        searchTerms: null
    },
    {
        id: "marth",
        number: "21",
        name: "Marth",
        image: "21.webp",
        stage: "castleSiege.webp",
        ufd: "https://ultimateframedata.com/marth",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Marth",
        weight: 90,
        fallSpeed: 1.58,
        airdodge: 3,
        escape: 1,
        escapeName: "Up-B",
        comboFood: null,
        searchTerms: "Marcina"
    },
    {
        id: "lucina",
        number: "21ε",
        name: "Lucina",
        image: "21e.webp",
        stage: "castleSiege.webp",
        ufd: "https://ultimateframedata.com/lucina",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Lucina",
        weight: 90,
        fallSpeed: 1.58,
        airdodge: 3,
        escape: 1,
        escapeName: "Up-B",
        comboFood: null,
        searchTerms: "Marcina"
    },
    {
        id: "young_link",
        number: "22",
        name: "Young Link",
        image: "22.webp",
        stage: "hyruleCastle.webp",
        ufd: "https://ultimateframedata.com/young_link",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Young_Link",
        weight: 88,
        fallSpeed: 1.8,
        airdodge: 2,
        escape: 2,
        escapeName: "Airdodge",
        comboFood: null,
        searchTerms: "Yink"
    },
    {
        id: "ganondorf",
        number: "23",
        name: "Ganondorf",
        image: "23.webp",
        stage: "gerudoValley.webp",
        ufd: "https://ultimateframedata.com/ganondorf",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Ganondorf",
        weight: 118,
        fallSpeed: 1.65,
        airdodge: 4,
        escape: 4,
        escapeName: "Airdodge",
        comboFood: true,
        searchTerms: null
    },
    {
        id: "mewtwo",
        number: "24",
        name: "Mewtwo",
        image: "24.webp",
        stage: "pokemonStadium2.webp",
        ufd: "https://ultimateframedata.com/mewtwo",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Mewtwo",
        weight: 79,
        fallSpeed: 1.55,
        airdodge: 3,
        escape: 3,
        escapeName: "Airdodge",
        comboFood: true,
        searchTerms: null
    },
    {
        id: "roy",
        number: "25",
        name: "Roy",
        image: "25.webp",
        stage: "castleSiege.webp",
        ufd: "https://ultimateframedata.com/roy",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Roy",
        weight: 95,
        fallSpeed: 1.8,
        airdodge: 3,
        escape: 3,
        escapeName: "Airdodge",
        comboFood: true,
        searchTerms: "Chroy"
    },
    {
        id: "chrom",
        number: "25ε",
        name: "Chrom",
        image: "25e.webp",
        stage: "castleSiege.webp",
        ufd: "https://ultimateframedata.com/chrom",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Chrom",
        weight: 95,
        fallSpeed: 1.8,
        airdodge: 3,
        escape: 3,
        escapeName: "Airdodge",
        comboFood: true,
        searchTerms: "Chroy"
    },
    {
        id: "gnw",
        number: "26",
        name: "Mr. Game & Watch",
        image: "26.webp",
        stage: "flatZoneX.webp",
        ufd: "https://ultimateframedata.com/mr_game_and_watch",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Mr._Game_%26_Watch",
        weight: 75,
        fallSpeed: 1.24,
        airdodge: 3,
        escape: 3,
        escapeName: "Airdodge",
        comboFood: null,
        searchTerms: "Mr. Game and Watch GNW G&W Mister"
    },
    {
        id: "meta_knight",
        number: "27",
        name: "Meta Knight",
        image: "27.webp",
        stage: "halberd.webp",
        ufd: "https://ultimateframedata.com/meta_knight",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Meta_Knight",
        weight: 80,
        fallSpeed: 1.66,
        airdodge: 2,
        escape: 2,
        escapeName: "Airdodge",
        comboFood: null,
        searchTerms: "Metaknight"
    },
    {
        id: "pit",
        number: "28",
        name: "Pit",
        image: "28.webp",
        stage: "skyworld.webp",
        ufd: "https://ultimateframedata.com/pit",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Pit",
        weight: 96,
        fallSpeed: 1.48,
        airdodge: 3,
        escape: 3,
        escapeName: "Airdodge",
        comboFood: true,
        searchTerms: null
    },
    {
        id: "dark_pit",
        number: "28ε",
        name: "Dark Pit",
        image: "28e.webp",
        stage: "skyworld.webp",
        ufd: "https://ultimateframedata.com/dark_pit",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Dark_Pit",
        weight: 96,
        fallSpeed: 1.48,
        airdodge: 3,
        escape: 3,
        escapeName: "Airdodge",
        comboFood: true,
        searchTerms: null
    },
    {
        id: "zss",
        number: "29",
        name: "Zero Suit Samus",
        image: "29.webp",
        stage: "norfair.webp",
        ufd: "https://ultimateframedata.com/zero_suit_samus",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Zero_Suit_Samus",
        weight: 80,
        fallSpeed: 1.7,
        airdodge: 2,
        escape: 2,
        escapeName: "Airdodge",
        comboFood: null,
        searchTerms: "ZSS"
    },
    {
        id: "wario",
        number: "30",
        name: "Wario",
        image: "30.webp",
        stage: "warioware.webp",
        ufd: "https://ultimateframedata.com/wario",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Wario",
        weight: 107,
        fallSpeed: 1.61,
        airdodge: 3,
        escape: 3,
        escapeName: "Airdodge",
        comboFood: null,
        searchTerms: null
    },
    {
        id: "snake",
        number: "31",
        name: "Snake",
        image: "31.webp",
        stage: "shadowMosesIsland.webp",
        ufd: "https://ultimateframedata.com/snake",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Snake",
        weight: 106,
        fallSpeed: 1.73,
        airdodge: 4,
        escape: 1,
        escapeName: "Grenade",
        comboFood: null,
        searchTerms: null
    },
    {
        id: "ike",
        number: "32",
        name: "Ike",
        image: "32.webp",
        stage: "castleSiege.webp",
        ufd: "https://ultimateframedata.com/ike",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Ike",
        weight: 107,
        fallSpeed: "1.65",
        airdodge: 4,
        escape: 4,
        escapeName: "Airdodge",
        comboFood: null,
        searchTerms: null
    },
    {
        id: "squirtle",
        number: "33",
        name: "Squirtle",
        image: "33.webp",
        stage: "pokemonStadium2.webp",
        ufd: "https://ultimateframedata.com/pt_squirtle",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Pokemon_Trainer",
        weight: 75,
        fallSpeed: 1.35,
        airdodge: 2,
        escape: 1,
        escapeName: "Change",
        comboFood: null,
        searchTerms: "Pokemon Trainer PT"
    },
    {
        id: "ivysaur",
        number: "34",
        name: "Ivysaur",
        image: "34.webp",
        stage: "pokemonStadium2.webp",
        ufd: "https://ultimateframedata.com/pt_ivysaur",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Pokemon_Trainer",
        weight: 96,
        fallSpeed: 1.38,
        airdodge: 3,
        escape: 1,
        escapeName: "Change",
        comboFood: null,
        searchTerms: "Pokemon Trainer PT"
    },
    {
        id: "charizard",
        number: "35",
        name: "Charizard",
        image: "35.webp",
        stage: "pokemonStadium2.webp",
        ufd: "https://ultimateframedata.com/pt_charizard",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Pokemon_Trainer",
        weight: 116,
        fallSpeed: 1.52,
        airdodge: 3,
        escape: 1,
        escapeName: "Change",
        comboFood: null,
        searchTerms: "Pokemon Trainer PT"
    },
    {
        id: "diddy_kong",
        number: "36",
        name: "Diddy Kong",
        image: "36.webp",
        stage: "kongoFalls.webp",
        ufd: "https://ultimateframedata.com/diddy_kong",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Diddy_Kong",
        weight: 90,
        fallSpeed: 1.75,
        airdodge: 2,
        escape: 2,
        escapeName: "Airdodge",
        comboFood: null,
        searchTerms: null
    },
    {
        id: "lucas",
        number: "37",
        name: "Lucas",
        image: "37.webp",
        stage: "onett.webp",
        ufd: "https://ultimateframedata.com/lucas",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Lucas",
        weight: 94,
        fallSpeed: 1.37,
        airdodge: 3,
        escape: 3,
        escapeName: "Airdodge",
        comboFood: null,
        searchTerms: null
    },
    {
        id: "sonic",
        number: "38",
        name: "Sonic",
        image: "38.webp",
        stage: "greenHillZone.webp",
        ufd: "https://ultimateframedata.com/sonic",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Sonic",
        weight: 86,
        fallSpeed: 1.65,
        airdodge: 2,
        escape: 2,
        escapeName: "Airdodge",
        comboFood: null,
        searchTerms: null
    },
    {
        id: "king_dedede",
        number: "39",
        name: "King Dedede",
        image: "39.webp",
        stage: "greenGreens.webp",
        ufd: "https://ultimateframedata.com/king_dedede",
        dragdown: "https://dragdown.wiki/wiki/SSBU/King_Dedede",
        weight: 127,
        fallSpeed: 1.95,
        airdodge: 4,
        escape: 4,
        escapeName: "Airdodge",
        comboFood: true,
        searchTerms: "King DDD"
    },
    {
        id: "olimar",
        number: "40",
        name: "Olimar",
        image: "40.webp",
        stage: "distantPlanet.webp",
        ufd: "https://ultimateframedata.com/olimar",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Olimar",
        weight: 79,
        fallSpeed: 1.35,
        airdodge: 3,
        escape: 2,
        escapeName: "Whistle",
        comboFood: null,
        searchTerms: "Alph"
    },
    {
        id: "lucario",
        number: "41",
        name: "Lucario",
        image: "41.webp",
        stage: "pokemonStadium2.webp",
        ufd: "https://ultimateframedata.com/lucario",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Lucario",
        weight: 92,
        fallSpeed: 1.68,
        airdodge: 3,
        escape: 3,
        escapeName: "Airdodge",
        comboFood: null,
        searchTerms: null
    },
    {
        id: "rob",
        number: "42",
        name: "R.O.B.",
        image: "42.webp",
        stage: "battlefield.webp",
        ufd: "https://ultimateframedata.com/rob",
        dragdown: "https://dragdown.wiki/wiki/SSBU/R.O.B.",
        weight: 106,
        fallSpeed: 1.6,
        airdodge: 3,
        escape: 3,
        escapeName: "Airdodge",
        comboFood: null,
        searchTerms: "ROB Robot"
    },
    {
        id: "toon_link",
        number: "43",
        name: "Toon Link",
        image: "43.webp",
        stage: "pirateShip.webp",
        ufd: "https://ultimateframedata.com/toon_link",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Toon_Link",
        weight: 91,
        fallSpeed: 1.38,
        airdodge: 2,
        escape: 2,
        escapeName: "Airdodge",
        comboFood: null,
        searchTerms: "Tink"
    },
    {
        id: "wolf",
        number: "44",
        name: "Wolf",
        image: "44.webp",
        stage: "lylatCruise.webp",
        ufd: "https://ultimateframedata.com/wolf",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Wolf",
        weight: 92,
        fallSpeed: 1.8,
        airdodge: 2,
        escape: 2,
        escapeName: "Airdodge",
        comboFood: null,
        searchTerms: null
    },
    {
        id: "villager",
        number: "45",
        name: "Villager",
        image: "45.webp",
        stage: "smashville.webp",
        ufd: "https://ultimateframedata.com/villager",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Villager",
        weight: 92,
        fallSpeed: 1.32,
        airdodge: 3,
        escape: 1,
        escapeName: "Lloid",
        comboFood: null,
        searchTerms: null
    },
    {
        id: "mega_man",
        number: "46",
        name: "Mega Man",
        image: "46.webp",
        stage: "wilyCastle.webp",
        ufd: "https://ultimateframedata.com/mega_man",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Mega_Man",
        weight: 102,
        fallSpeed: 1.8,
        airdodge: 3,
        escape: 3,
        escapeName: "Airdodge",
        comboFood: null,
        searchTerms: "Megaman"
    },
    {
        id: "wii_fit_trainer",
        number: "47",
        name: "Wii Fit Trainer",
        image: "47.webp",
        stage: "wiiFitStudio.webp",
        ufd: "https://ultimateframedata.com/wii_fit_trainer",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Wii_Fit_Trainer",
        weight: 96,
        fallSpeed: 1.3,
        airdodge: 3,
        escape: 1,
        escapeName: "Header",
        comboFood: null,
        searchTerms: "WFT"
    },
    {
        id: "rosalina",
        number: "48",
        name: "Rosalina & Luma",
        image: "48.webp",
        stage: "marioGalaxy.webp",
        ufd: "https://ultimateframedata.com/rosalina_and_luma",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Rosalina_%26_Luma",
        weight: 82,
        fallSpeed: 1.2,
        airdodge: 3,
        escape: 3,
        escapeName: "Airdodge",
        comboFood: null,
        searchTerms: "Rosalina and Luma"
    },
    {
        id: "little_mac",
        number: "49",
        name: "Little Mac",
        image: "49.webp",
        stage: "boxingRing.webp",
        ufd: "https://ultimateframedata.com/little_mac",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Little_Mac",
        weight: 87,
        fallSpeed: 1.95,
        airdodge: 2,
        escape: 1,
        escapeName: "Up-B",
        comboFood: null,
        searchTerms: null
    },
    {
        id: "greninja",
        number: "50",
        name: "Greninja",
        image: "50.webp",
        stage: "pokemonStadium2.webp",
        ufd: "https://ultimateframedata.com/greninja",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Greninja",
        weight: 88,
        fallSpeed: 1.85,
        airdodge: 2,
        escape: 2,
        escapeName: "Airdodge",
        comboFood: null,
        searchTerms: null
    },
    {
        id: "mii_brawler",
        number: "51",
        name: "Mii Brawler",
        image: "51.webp",
        stage: "battlefield.webp",
        ufd: "https://ultimateframedata.com/mii_brawler",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Mii_Brawler",
        weight: 94,
        fallSpeed: 1.92,
        airdodge: 3,
        escape: 2,
        escapeName: "Feint Jump",
        comboFood: false,
        searchTerms: null
    },
    {
        id: "mii_sword",
        number: "52",
        name: "Mii Swordfighter",
        image: "52.webp",
        stage: "battlefield.webp",
        ufd: "https://ultimateframedata.com/mii_swordfighter",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Mii_Swordfighter",
        weight: 100,
        fallSpeed: 1.55,
        airdodge: 3,
        escape: 3,
        escapeName: "Airdodge",
        comboFood: true,
        searchTerms: null
    },
    {
        id: "mii_gunner",
        number: "53",
        name: "Mii Gunner",
        image: "53.webp",
        stage: "battlefield.webp",
        ufd: "https://ultimateframedata.com/mii_gunner",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Mii_Gunner",
        weight: 104,
        fallSpeed: 1.45,
        airdodge: 3,
        escape: 3,
        escapeName: "Airdodge",
        comboFood: true,
        searchTerms: "Sans"
    },
    {
        id: "palutena",
        number: "54",
        name: "Palutena",
        image: "54.webp",
        stage: "palutenasTemple.webp",
        ufd: "https://ultimateframedata.com/palutena",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Palutena",
        weight: 91,
        fallSpeed: 1.55,
        airdodge: 3,
        escape: 3,
        escapeName: "Airdodge",
        comboFood: null,
        searchTerms: null
    },
    {
        id: "pac_man",
        number: "55",
        name: "Pac-Man",
        image: "55.webp",
        stage: "pacLand.webp",
        ufd: "https://ultimateframedata.com/pac_man",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Pac-Man",
        weight: 95,
        fallSpeed: 1.35,
        airdodge: 3,
        escape: 1,
        escapeName: "Trampoline",
        comboFood: false,
        searchTerms: "Pacman Pac Man"
    },
    {
        id: "robin",
        number: "56",
        name: "Robin",
        image: "56.webp",
        stage: "castleSiege.webp",
        ufd: "https://ultimateframedata.com/robin",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Robin",
        weight: 95,
        fallSpeed: 1.5,
        airdodge: 3,
        escape: 1,
        escapeName: "Tome",
        comboFood: null,
        searchTerms: null
    },
    {
        id: "shulk",
        number: "57",
        name: "Shulk",
        image: "57.webp",
        stage: "gaurPlains.webp",
        ufd: "https://ultimateframedata.com/shulk",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Shulk",
        weight: 97,
        fallSpeed: 1.58,
        airdodge: 3,
        escape: 3,
        escapeName: "Airdodge",
        comboFood: null,
        searchTerms: null
    },
    {
        id: "bowser_jr",
        number: "58",
        name: "Bowser Jr.",
        image: "58.webp",
        stage: "delfinoPlaza.webp",
        ufd: "https://ultimateframedata.com/bowser_jr",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Bowser_Jr.",
        weight: 108,
        fallSpeed: 1.65,
        airdodge: 3,
        escape: 3,
        escapeName: "Airdodge",
        comboFood: true,
        searchTerms: "Bowser Junior Larry Roy Wendy Iggy Morton Lemmy Ludwig"
    },
    {
        id: "duck_hunt",
        number: "59",
        name: "Duck Hunt",
        image: "59.webp",
        stage: "duckHunt.webp",
        ufd: "https://ultimateframedata.com/duck_hunt",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Duck_Hunt",
        weight: 86,
        fallSpeed: 1.65,
        airdodge: 3,
        escape: 1,
        escapeName: "Can",
        comboFood: null,
        searchTerms: "Duck Hunt Dog DH DHD Duo"
    },
    {
        id: "ryu",
        number: "60",
        name: "Ryu",
        image: "60.webp",
        stage: "suzakuCastle.webp",
        ufd: "https://ultimateframedata.com/ryu",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Ryu",
        weight: 103,
        fallSpeed: 1.6,
        airdodge: 3,
        escape: 1,
        escapeName: "Focus",
        comboFood: null,
        searchTerms: "Shotos"
    },
    {
        id: "ken",
        number: "60ε",
        name: "Ken",
        image: "60e.webp",
        stage: "suzakuCastle.webp",
        ufd: "https://ultimateframedata.com/ken",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Ken",
        weight: 103,
        fallSpeed: 1.6,
        airdodge: 3,
        escape: 1,
        escapeName: "Focus",
        comboFood: null,
        searchTerms: "Shotos Ken Masters"
    },
    {
        id: "cloud",
        number: "61",
        name: "Cloud",
        image: "61.webp",
        stage: "midgar.webp",
        ufd: "https://ultimateframedata.com/cloud",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Cloud",
        weight: 100,
        fallSpeed: 1.68,
        airdodge: 3,
        escape: 3,
        escapeName: "Airdodge",
        comboFood: true,
        searchTerms: null
    },
    {
        id: "corrin",
        number: "62",
        name: "Corrin",
        image: "62.webp",
        stage: "castleSiege.webp",
        ufd: "https://ultimateframedata.com/corrin",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Corrin",
        weight: 98,
        fallSpeed: 1.65,
        airdodge: 3,
        escape: 3,
        escapeName: "Airdodge",
        comboFood: null,
        searchTerms: null
    },
    {
        id: "bayonetta",
        number: "63",
        name: "Bayonetta",
        image: "63.webp",
        stage: "umbraClockTower.webp",
        ufd: "https://ultimateframedata.com/bayonetta",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Bayonetta",
        weight: 81,
        fallSpeed: 1.77,
        airdodge: 5,
        escape: 1,
        escapeName: "Bats",
        comboFood: null,
        searchTerms: null
    },
    {
        id: "inkling",
        number: "64",
        name: "Inkling",
        image: "64.webp",
        stage: "morayTowers.webp",
        ufd: "https://ultimateframedata.com/inkling",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Inkling",
        weight: 94,
        fallSpeed: 1.58,
        airdodge: 3,
        escape: 3,
        escapeName: "Airdodge",
        comboFood: null,
        searchTerms: null
    },
    {
        id: "ridley",
        number: "65",
        name: "Ridley",
        image: "65.webp",
        stage: "norfair.webp",
        ufd: "https://ultimateframedata.com/ridley",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Ridley",
        weight: 107,
        fallSpeed: 1.78,
        airdodge: 3,
        escape: 3,
        escapeName: "Airdodge",
        comboFood: true,
        searchTerms: null
    },
    {
        id: "simon",
        number: "66",
        name: "Simon",
        image: "66.webp",
        stage: "draculasCastle.webp",
        ufd: "https://ultimateframedata.com/simon",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Simon",
        weight: 107,
        fallSpeed: 1.85,
        airdodge: 3,
        escape: 3,
        escapeName: "Airdodge",
        comboFood: null,
        searchTerms: "Belmonts"
    },
    {
        id: "richter",
        number: "66ε",
        name: "Richter",
        image: "66e.webp",
        stage: "draculasCastle.webp",
        ufd: "https://ultimateframedata.com/richter",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Richter",
        weight: 107,
        fallSpeed: 1.85,
        airdodge: 3,
        escape: 3,
        escapeName: "Airdodge",
        comboFood: null,
        searchTerms: "Belmonts"
    },
    {
        id: "king_k_rool",
        number: "67",
        name: "King K. Rool",
        image: "67.webp",
        stage: "kongoFalls.webp",
        ufd: "https://ultimateframedata.com/king_k_rool",
        dragdown: "https://dragdown.wiki/wiki/SSBU/King_K._Rool",
        weight: 133,
        fallSpeed: 1.7,
        airdodge: 4,
        escape: 4,
        escapeName: "Airdodge",
        comboFood: true,
        searchTerms: "King K Rool Krool KKR"
    },
    {
        id: "isabelle",
        number: "68",
        name: "Isabelle",
        image: "68.webp",
        stage: "smashville.webp",
        ufd: "https://ultimateframedata.com/isabelle",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Isabelle",
        weight: 88,
        fallSpeed: 1.3,
        airdodge: 3,
        escape: 3,
        escapeName: "Airdodge",
        comboFood: null,
        searchTerms: null
    },
    {
        id: "incineroar",
        number: "69",
        name: "Incineroar",
        image: "69.webp",
        stage: "pokemonStadium2.webp",
        ufd: "https://ultimateframedata.com/incineroar",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Incineroar",
        weight: 116,
        fallSpeed: 1.76,
        airdodge: 3,
        escape: 3,
        escapeName: "Airdodge",
        comboFood: true,
        searchTerms: null
    },
    {
        id: "piranha_plant",
        number: "70",
        name: "Piranha Plant",
        image: "70.webp",
        stage: "mushroomKingdomU.webp",
        ufd: "https://ultimateframedata.com/piranha_plant",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Piranha_Plant",
        weight: 112,
        fallSpeed: 1.95,
        airdodge: 3,
        escape: 3,
        escapeName: "Airdodge",
        comboFood: null,
        searchTerms: null
    },
    {
        id: "joker",
        number: "71",
        name: "Joker",
        image: "71.webp",
        stage: "mementos.webp",
        ufd: "https://ultimateframedata.com/joker",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Joker",
        weight: 93,
        fallSpeed: 1.63,
        airdodge: 3,
        escape: 3,
        escapeName: "Airdodge",
        comboFood: null,
        searchTerms: null
    },
    {
        id: "hero",
        number: "72",
        name: "Hero",
        image: "72.webp",
        stage: "yggdrasilsAltar.webp",
        ufd: "https://ultimateframedata.com/hero",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Hero",
        weight: 101,
        fallSpeed: 1.57,
        airdodge: 3,
        escape: 3,
        escapeName: "Airdodge",
        comboFood: true,
        searchTerms: "Erdrick"
    },
    {
        id: "banjo",
        number: "73",
        name: "Banjo & Kazooie",
        image: "73.webp",
        stage: "spiralMountain.webp",
        ufd: "https://ultimateframedata.com/banjo_and_kazooie",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Banjo_%26_Kazooie",
        weight: 106,
        fallSpeed: 1.76,
        airdodge: 3,
        escape: 1,
        escapeName: "Up-B",
        comboFood: null,
        searchTerms: "Banjo and Kazooie"
    },
    {
        id: "terry",
        number: "74",
        name: "Terry",
        image: "74.webp",
        stage: "kingOfFightersStadium.webp",
        ufd: "https://ultimateframedata.com/terry",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Terry",
        weight: 108,
        fallSpeed: 1.48,
        airdodge: 3,
        escape: 3,
        escapeName: "Airdodge",
        comboFood: true,
        searchTerms: "Terry Bogard"
    },
    {
        id: "byleth",
        number: "75",
        name: "Byleth",
        image: "75.webp",
        stage: "garregMachMonastery.webp",
        ufd: "https://ultimateframedata.com/byleth",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Byleth",
        weight: 97,
        fallSpeed: 1.6,
        airdodge: 3,
        escape: 3,
        escapeName: "Airdodge",
        comboFood: null,
        searchTerms: null
    },
    {
        id: "min_min",
        number: "76",
        name: "Min Min",
        image: "76.webp",
        stage: "springStadium.webp",
        ufd: "https://ultimateframedata.com/minmin",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Min_Min",
        weight: 104,
        fallSpeed: 1.5,
        airdodge: 3,
        escape: 3,
        escapeName: "Airdodge",
        comboFood: null,
        searchTerms: "MinMin"
    },
    {
        id: "steve",
        number: "77",
        name: "Steve",
        image: "77.webp",
        stage: "minecraftWorld.webp",
        ufd: "https://ultimateframedata.com/steve",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Steve",
        weight: 92,
        fallSpeed: 1.42,
        airdodge: 3,
        escape: 1,
        escapeName: "PMLG",
        comboFood: null,
        searchTerms: "Alex Zombie Enderman"
    },
    {
        id: "sephiroth",
        number: "78",
        name: "Sephiroth",
        image: "78.webp",
        stage: "northernCave.webp",
        ufd: "https://ultimateframedata.com/sephiroth",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Sephiroth",
        weight: 79,
        fallSpeed: 1.84,
        airdodge: 3,
        escape: 3,
        escapeName: "Airdodge",
        comboFood: null,
        searchTerms: null
    },
    {
        id: "pyra",
        number: "79",
        name: "Pyra",
        image: "79.webp",
        stage: "cloudSeaOfAlrest.webp",
        ufd: "https://ultimateframedata.com/pyra",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Pyra_%26_Mythra",
        weight: 98,
        fallSpeed: 1.62,
        airdodge: 3,
        escape: 3,
        escapeName: "Airdodge",
        comboFood: true,
        searchTerms: "Aegis Pythra"
    },
    {
        id: "mythra",
        number: "80",
        name: "Mythra",
        image: "80.webp",
        stage: "cloudSeaOfAlrest.webp",
        ufd: "https://ultimateframedata.com/mythra",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Pyra_%26_Mythra",
        weight: 92,
        fallSpeed: 1.87,
        airdodge: 6,
        escape: 2,
        escapeName: "Foresight",
        comboFood: null,
        searchTerms: "Aegis Pythra"
    },
    {
        id: "kazuya",
        number: "81",
        name: "Kazuya",
        image: "81.webp",
        stage: "mishimaDojo.webp",
        ufd: "https://ultimateframedata.com/kazuya",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Kazuya",
        weight: 113,
        fallSpeed: 1.7,
        airdodge: 3,
        escape: 3,
        escapeName: "Airdodge",
        comboFood: false,
        searchTerms: "Kazuya Mishima"
    },
    {
        id: "sora",
        number: "82",
        name: "Sora",
        image: "82.webp",
        stage: "hollowBastion.webp",
        ufd: "https://ultimateframedata.com/sora",
        dragdown: "https://dragdown.wiki/wiki/SSBU/Sora",
        weight: 85,
        fallSpeed: 1.44,
        airdodge: 3,
        escape: 3,
        escapeName: "Airdodge",
        comboFood: null,
        searchTerms: null
    },
];

const FIGHTER_DETAILS = {
    "mario": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.depends,
            utilt: VALUES.no,
            notes: "EWGF must be buffered"
        },
        cjab: {
            ewgf: VALUES.yes,
            notes: null
        },
        tsunami: {
            ewgf: VALUES.yes,
            notes: null
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.no,
            notes: null
        },
        electricNairDgf: {
            lowest: 14,
            consistentLow: 25,
            fullHopMax: 48,
            shortHopMax: 50,
            onlyFullHopAtLowest: VALUES.no
        },
        electricOnBlock: {
            advantage: 3,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.yes,
            twoFrames: VALUES.no,
            notes: null
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.no,
            armorsUntil: null,
            notes: null
        }
    },
    "donkey_kong": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            notes: null
        },
        cjab: {
            ewgf: VALUES.yes,
            notes: null
        },
        tsunami: {
            ewgf: VALUES.yes,
            notes: null
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.depends,
            notes: "Tippers when charged 6-9 frames"
        },
        electricNairDgf: {
            lowest: 22,
            consistentLow: 32,
            fullHopMax: 60,
            shortHopMax: 62,
            onlyFullHopAtLowest: VALUES.no
        },
        electricOnBlock: {
            advantage: -1,
            canTrip: VALUES.yes
        },
        dragonUpperOnLedge: {
            hits: VALUES.no,
            twoFrames: null,
            notes: "DK's Ledge Grab animation varies greatly on how he Up-B's to ledge."
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.no,
            armorsUntil: null,
            notes: null
        }
    },
    "link": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.no,
            utilt: VALUES.no,
            notes: null
        },
        cjab: {
            ewgf: VALUES.yes,
            notes: null
        },
        tsunami: {
            ewgf: VALUES.depends,
            notes: "Can SDI in and air dodge away/down and away. Possible to hit with specific spacing."
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.no,
            notes: "Can charge slightly"
        },
        electricNairDgf: {
            lowest: 15,
            consistentLow: 26,
            fullHopMax: 51,
            shortHopMax: 52,
            onlyFullHopAtLowest: VALUES.no
        },
        electricOnBlock: {
            advantage: 2,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.yes,
            twoFrames: VALUES.depends,
            notes: "Only 2-frames if Link recovers straight up; will either trade or go through if they opt to hold down to not grab ledge"
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.no,
            armorsUntil: null,
            notes: null
        }
    },
    "samus": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.yes,
            utilt: VALUES.no,
            notes: null
        },
        cjab: {
            ewgf: VALUES.yes,
            notes: null
        },
        tsunami: {
            ewgf: VALUES.depends,
            notes: "Can SDI in and air dodge away/down and away. Possible to hit with specific spacing."
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.no,
            notes: "Can charge slightly"
        },
        electricNairDgf: {
            lowest: 16,
            consistentLow: 26,
            fullHopMax: 52,
            shortHopMax: 54,
            onlyFullHopAtLowest: VALUES.no
        },
        electricOnBlock: {
            advantage: 2,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.yes,
            twoFrames: VALUES.depends,
            notes: "Only 2-frames if doing up b from as far from ledge as possible"
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.no,
            armorsUntil: null,
            notes: null
        }
    },
    "dark_samus": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.yes,
            utilt: VALUES.no,
            notes: null
        },
        cjab: {
            ewgf: VALUES.yes,
            notes: null
        },
        tsunami: {
            ewgf: VALUES.depends,
            notes: "Can SDI in and air dodge away/down and away. Possible to hit with specific spacing."
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.no,
            notes: "Can charge slightly"
        },
        electricNairDgf: {
            lowest: 16,
            consistentLow: 26,
            fullHopMax: 52,
            shortHopMax: 54,
            onlyFullHopAtLowest: VALUES.no
        },
        electricOnBlock: {
            advantage: 2,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.yes,
            twoFrames: VALUES.depends,
            notes: "Only 2-frames if doing up b from as far from ledge as possible"
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.no,
            armorsUntil: null,
            notes: null
        }
    },
    "yoshi": {
        dthrow: {
            ewgf: VALUES.no,
            notes: "Dthrow sends onto the BF plat even at 0"
        },
        nair: {
            ewgf: VALUES.depends,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: "Electric whiffs if they face away when they land"
        },
        trip: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            notes: null
        },
        cjab: {
            ewgf: VALUES.depends,
            notes: "Does not work if they face away when they land"
        },
        tsunami: {
            ewgf: VALUES.no,
            notes: null
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.no,
            notes: "Can charge slightly"
        },
        electricNairDgf: {
            lowest: 18,
            consistentLow: 26,
            fullHopMax: 51,
            shortHopMax: 52,
            onlyFullHopAtLowest: VALUES.yes
        },
        electricOnBlock: {
            advantage: 2,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.depends,
            twoFrames: VALUES.yes,
            notes: "There's a small window in Yoshi's ledge hang animation where they can't be hit"
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.no,
            armorsUntil: null,
            notes: null
        }
    },
    "kirby": {
        dthrow: {
            ewgf: VALUES.no,
            notes: "Too far to hit with buffered electric starting at 8%. Dthrow sends onto the BF plat even at 0."
        },
        nair: {
            ewgf: VALUES.no,
            utilt: VALUES.depends,
            cjab: VALUES.depends,
            notes: "Utilt and Crouch Jab are inconsistent"
        },
        trip: {
            ewgf: VALUES.no,
            utilt: VALUES.no,
            notes: null
        },
        cjab: {
            ewgf: VALUES.no,
            notes: null
        },
        tsunami: {
            ewgf: VALUES.depends,
            notes: "Can SDI in and air dodge away/down and away. Possible to hit with specific spacing."
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.no,
            notes: "Can charge slightly"
        },
        electricNairDgf: {
            lowest: 10,
            consistentLow: 20,
            fullHopMax: 41,
            shortHopMax: 43,
            onlyFullHopAtLowest: VALUES.no
        },
        electricOnBlock: {
            advantage: 5,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.yes,
            twoFrames: VALUES.yes,
            notes: null
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.yes,
            armorsUntil: 9,
            notes: null
        }
    },
    "fox": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.yes,
            utilt: VALUES.no,
            notes: null
        },
        cjab: {
            ewgf: VALUES.depends,
            notes: "Does not work if they face away when they land"
        },
        tsunami: {
            ewgf: VALUES.yes,
            notes: null
        },
        dgf: {
            hits: VALUES.no,
            tippers: VALUES.no,
            notes: null
        },
        electricNairDgf: {
            lowest: 13,
            consistentLow: 19,
            fullHopMax: 40,
            shortHopMax: 42,
            onlyFullHopAtLowest: VALUES.yes
        },
        electricOnBlock: {
            advantage: 5,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.yes,
            twoFrames: VALUES.yes,
            notes: "2-Frames both Up- and Side-B.  Only safe Up-B angle is stage hug."
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.yes,
            armorsUntil: 93,
            notes: null
        }
    },
    "pikachu": {
        dthrow: {
            ewgf: VALUES.no,
            notes: "Dthrow sends onto the BF plat starting at 9%"
        },
        nair: {
            ewgf: VALUES.depends,
            utilt: VALUES.depends,
            cjab: VALUES.depends,
            notes: "Electric, Utilt, and Crouch Jab all inconsistent"
        },
        trip: {
            ewgf: VALUES.depends,
            utilt: VALUES.yes,
            notes: "EWGF must be buffered. If Kazuya is on the left, facing right, and Pikachu is facing away, then EWGF will whiff"
        },
        cjab: {
            ewgf: VALUES.depends,
            notes: "Does not work if they face in when they land"
        },
        tsunami: {
            ewgf: VALUES.no,
            notes: null
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.depends,
            notes: "Can charge slightly. Only tippers when up against a ledge and charged 6-9 frames."
        },
        electricNairDgf: {
            lowest: 10,
            consistentLow: 20,
            fullHopMax: 41,
            shortHopMax: 43,
            onlyFullHopAtLowest: VALUES.no
        },
        electricOnBlock: {
            advantage: 5,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.yes,
            twoFrames: VALUES.depends,
            notes: "Can't be 2-framed with Side-B, or when doing Up-B horizontally."
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.no,
            armorsUntil: null,
            notes: null
        }
    },
    "luigi": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.yes,
            utilt: VALUES.no,
            notes: null
        },
        cjab: {
            ewgf: VALUES.yes,
            notes: null
        },
        tsunami: {
            ewgf: VALUES.no,
            notes: null
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.no,
            notes: "Can charge slightly at ledge"
        },
        electricNairDgf: {
            lowest: 16,
            consistentLow: 25,
            fullHopMax: 48,
            shortHopMax: 50,
            onlyFullHopAtLowest: VALUES.no
        },
        electricOnBlock: {
            advantage: 3,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.yes,
            twoFrames: VALUES.no,
            notes: "Might be possible to 2-frame on very specific Up-B ledge snap distances, but seems very unlikely."
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.no,
            armorsUntil: null,
            notes: null
        }
    },
    "ness": {
        dthrow: {
            ewgf: VALUES.no,
            notes: "Too far to hit with buffered electric. Dthrow sends onto the BF plat starting at 3%."
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            notes: null
        },
        cjab: {
            ewgf: VALUES.depends,
            notes: "Does not work if they face away when they land"
        },
        tsunami: {
            ewgf: VALUES.depends,
            notes: "Can SDI in and air dodge away/down and away. Possible to hit with specific spacing."
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.yes,
            notes: "Tippers when charged 0-3 frames"
        },
        electricNairDgf: {
            lowest: 13,
            consistentLow: 23,
            fullHopMax: 47,
            shortHopMax: 49,
            onlyFullHopAtLowest: VALUES.no
        },
        electricOnBlock: {
            advantage: 3,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.yes,
            twoFrames: VALUES.depends,
            notes: "Some angles going straight up or straight to the side can't be 2-framed; hyperspecific."
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.no,
            armorsUntil: null,
            notes: null
        }
    },
    "captain_falcon": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.no,
            utilt: VALUES.no,
            notes: null
        },
        cjab: {
            ewgf: VALUES.yes,
            notes: null
        },
        tsunami: {
            ewgf: VALUES.yes,
            notes: null
        },
        dgf: {
            hits: VALUES.no,
            tippers: VALUES.no,
            notes: null
        },
        electricNairDgf: {
            lowest: 15,
            consistentLow: 27,
            fullHopMax: 51,
            shortHopMax: 52,
            onlyFullHopAtLowest: VALUES.no
        },
        electricOnBlock: {
            advantage: 2,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.depends,
            twoFrames: VALUES.depends,
            notes: "Phantom sparks ledge hang unless you're exactly 1 extra pixel away from ledge.  2-Frame possible only if Falcon grabs ledge from an ultraspecific distance that results in his knuckle just barely touching the ledge in a way that Kazuya's left big toe grazes him slightly."
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.yes,
            armorsUntil: 120,
            notes: null
        }
    },
    "jigglypuff": {
        dthrow: {
            ewgf: VALUES.no,
            notes: "Dthrow sends onto the BF plat even at 0"
        },
        nair: {
            ewgf: VALUES.no,
            utilt: VALUES.no,
            cjab: VALUES.no,
            notes: null
        },
        trip: {
            ewgf: VALUES.yes,
            utilt: VALUES.no,
            notes: null
        },
        cjab: {
            ewgf: VALUES.no,
            notes: null
        },
        tsunami: {
            ewgf: VALUES.depends,
            notes: "Can SDI in and air dodge away/down and away. Possible to hit with specific spacing. Rest technically avoids the electric, but also whiffs leaving Puff vulnerable."
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.no,
            notes: "Can charge slightly"
        },
        electricNairDgf: {
            lowest: 18,
            consistentLow: 22,
            fullHopMax: 36,
            shortHopMax: 38,
            onlyFullHopAtLowest: VALUES.yes
        },
        electricOnBlock: {
            advantage: 6,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.yes,
            twoFrames: VALUES.yes,
            notes: "Also goes through pound at ledge, unless they do it too far below stage to not hit you"
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.no,
            armorsUntil: null,
            notes: null
        }
    },
    "peach": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.no,
            utilt: VALUES.no,
            notes: null
        },
        cjab: {
            ewgf: VALUES.depends,
            notes: "If they face away you need to dash for 3-5 frames then EWGF"
        },
        tsunami: {
            ewgf: VALUES.depends,
            notes: "Can SDI in and air dodge away/down and away. Possible to hit with specific spacing."
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.yes,
            notes: "Tippers when charged 0-3 frames"
        },
        electricNairDgf: {
            lowest: 15,
            consistentLow: 25,
            fullHopMax: 45,
            shortHopMax: 47,
            onlyFullHopAtLowest: VALUES.no
        },
        electricOnBlock: {
            advantage: 4,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.yes,
            twoFrames: VALUES.depends,
            notes: "Can 2-Frame Side-B, but not Up-B"
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.no,
            armorsUntil: null,
            notes: null
        }
    },
    "daisy": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.no,
            utilt: VALUES.no,
            notes: null
        },
        cjab: {
            ewgf: VALUES.depends,
            notes: "If they face away you need to dash for 3-5 frames then EWGF"
        },
        tsunami: {
            ewgf: VALUES.depends,
            notes: "Can SDI in and air dodge away/down and away. Possible to hit with specific spacing."
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.yes,
            notes: "Tippers when charged 0-3 frames"
        },
        electricNairDgf: {
            lowest: 15,
            consistentLow: 25,
            fullHopMax: 45,
            shortHopMax: 47,
            onlyFullHopAtLowest: VALUES.no
        },
        electricOnBlock: {
            advantage: 4,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.yes,
            twoFrames: VALUES.depends,
            notes: "Can 2-Frame Side-B, but not Up-B"
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.no,
            armorsUntil: null,
            notes: null
        }
    },
    "bowser": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            notes: null
        },
        cjab: {
            ewgf: VALUES.yes,
            notes: null
        },
        tsunami: {
            ewgf: VALUES.yes,
            notes: null
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.no,
            notes: "Can charge slightly at ledge"
        },
        electricNairDgf: {
            lowest: 22,
            consistentLow: 32,
            fullHopMax: 62,
            shortHopMax: 65,
            onlyFullHopAtLowest: VALUES.no
        },
        electricOnBlock: {
            advantage: -1,
            canTrip: VALUES.yes
        },
        dragonUpperOnLedge: {
            hits: VALUES.yes,
            twoFrames: VALUES.yes,
            notes: null
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.no,
            armorsUntil: null,
            notes: null
        }
    },
    "ice_climbers": {
        dthrow: {
            ewgf: VALUES.no,
            notes: "Dthrow sends onto the BF plat even at 0"
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.depends,
            utilt: VALUES.no,
            notes: "Partner can interrupt"
        },
        cjab: {
            ewgf: VALUES.yes,
            notes: null
        },
        tsunami: {
            ewgf: VALUES.yes,
            notes: null
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.depends,
            notes: "Tippers when charged 5-7 frames"
        },
        electricNairDgf: {
            lowest: 14,
            consistentLow: 24,
            fullHopMax: 46,
            shortHopMax: 48,
            onlyFullHopAtLowest: VALUES.no
        },
        electricOnBlock: {
            advantage: 3,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.yes,
            twoFrames: VALUES.depends,
            notes: "Nana usually dodges via Z Axis during ledge hang.  Can only 2-frame the solo climber Up-B."
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.no,
            armorsUntil: null,
            notes: null
        }
    },
    "sheik": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.yes,
            utilt: VALUES.no,
            notes: null
        },
        cjab: {
            ewgf: VALUES.depends,
            notes: "If they face away you need to dash for 3-6 frames then EWGF"
        },
        tsunami: {
            ewgf: VALUES.no,
            notes: null
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.no,
            notes: "Can charge slightly"
        },
        electricNairDgf: {
            lowest: 16,
            consistentLow: 21,
            fullHopMax: 40,
            shortHopMax: 42,
            onlyFullHopAtLowest: VALUES.yes
        },
        electricOnBlock: {
            advantage: 5,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.yes,
            twoFrames: VALUES.depends,
            notes: "Doesn't get 2 framed recovering straight up"
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.yes,
            armorsUntil: null,
            notes: null
        }
    },
    "zelda": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.no,
            utilt: VALUES.no,
            notes: null
        },
        cjab: {
            ewgf: VALUES.yes,
            notes: null
        },
        tsunami: {
            ewgf: VALUES.depends,
            notes: "Can SDI in and air dodge away/down and away. Possible to hit with specific spacing."
        },
        dgf: {
            hits: VALUES.depends,
            tippers: VALUES.no,
            notes: "Only hits when up against a ledge. Can charge slightly."
        },
        electricNairDgf: {
            lowest: 12,
            consistentLow: 21,
            fullHopMax: 43,
            shortHopMax: 45,
            onlyFullHopAtLowest: VALUES.no
        },
        electricOnBlock: {
            advantage: 4,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.depends,
            twoFrames: VALUES.no,
            notes: "Pixel perfect positioning needed to hit ledge hang."
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.yes,
            armorsUntil: 109,
            notes: null
        }
    },
    "dr_mario": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.depends,
            utilt: VALUES.depends,
            notes: "EWGF must be buffered. Utilt only hits from the right."
        },
        cjab: {
            ewgf: VALUES.yes,
            notes: null
        },
        tsunami: {
            ewgf: VALUES.yes,
            notes: null
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.no,
            notes: "Can charge slightly at ledge"
        },
        electricNairDgf: {
            lowest: 14,
            consistentLow: 25,
            fullHopMax: 48,
            shortHopMax: 50,
            onlyFullHopAtLowest: VALUES.no
        },
        electricOnBlock: {
            advantage: 3,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.yes,
            twoFrames: VALUES.no,
            notes: null
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.no,
            armorsUntil: null,
            notes: null
        }
    },
    "pichu": {
        dthrow: {
            ewgf: VALUES.no,
            notes: "Too far to hit with buffered electric. Dthrow sends onto the BF plat even at 0."
        },
        nair: {
            ewgf: VALUES.depends,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: "Electric whiffs if they face away when they land"
        },
        trip: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            notes: null
        },
        cjab: {
            ewgf: VALUES.depends,
            notes: "Does not work if they face away when they land"
        },
        tsunami: {
            ewgf: VALUES.no,
            notes: null
        },
        dgf: {
            hits: VALUES.no,
            tippers: VALUES.no,
            notes: null
        },
        electricNairDgf: {
            lowest: 11,
            consistentLow: 19,
            fullHopMax: 34,
            shortHopMax: 36,
            onlyFullHopAtLowest: VALUES.yes
        },
        electricOnBlock: {
            advantage: 7,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.yes,
            twoFrames: VALUES.yes,
            notes: "Very easy"
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.no,
            armorsUntil: null,
            notes: null
        }
    },
    "falco": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.yes,
            utilt: VALUES.no,
            notes: null
        },
        cjab: {
            ewgf: VALUES.yes,
            notes: null
        },
        tsunami: {
            ewgf: VALUES.no,
            notes: null
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.no,
            notes: "Can charge slightly"
        },
        electricNairDgf: {
            lowest: 15,
            consistentLow: 23,
            fullHopMax: 42,
            shortHopMax: 44,
            onlyFullHopAtLowest: VALUES.yes
        },
        electricOnBlock: {
            advantage: 4,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.yes,
            twoFrames: VALUES.no,
            notes: null
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.yes,
            armorsUntil: 228,
            notes: null
        }
    },
    "marth": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.no,
            utilt: VALUES.no,
            notes: null
        },
        cjab: {
            ewgf: VALUES.yes,
            notes: null
        },
        tsunami: {
            ewgf: VALUES.no,
            notes: null
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.no,
            notes: "Can charge slightly at ledge"
        },
        electricNairDgf: {
            lowest: 12,
            consistentLow: 23,
            fullHopMax: 45,
            shortHopMax: 47,
            onlyFullHopAtLowest: VALUES.no
        },
        electricOnBlock: {
            advantage: 3,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.depends,
            twoFrames: VALUES.depends,
            notes: "Pixel perfect positioning needed to hit ledge hang. 2-Frame depends on Up-B Distance.  Can trade with Up-B as well."
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.no,
            armorsUntil: null,
            notes: null
        }
    },
    "lucina": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.no,
            utilt: VALUES.no,
            notes: null
        },
        cjab: {
            ewgf: VALUES.yes,
            notes: null
        },
        tsunami: {
            ewgf: VALUES.no,
            notes: null
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.no,
            notes: "Can charge slightly at ledge"
        },
        electricNairDgf: {
            lowest: 12,
            consistentLow: 23,
            fullHopMax: 45,
            shortHopMax: 47,
            onlyFullHopAtLowest: VALUES.no
        },
        electricOnBlock: {
            advantage: 3,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.depends,
            twoFrames: VALUES.depends,
            notes: "Pixel perfect positioning needed to hit ledge hang. 2-Frame depends on Up-B Distance.  Can trade with Up-B as well."
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.no,
            armorsUntil: null,
            notes: null
        }
    },
    "young_link": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.no,
            utilt: VALUES.no,
            notes: null
        },
        cjab: {
            ewgf: VALUES.depends,
            notes: "If they face away you need to dash for 3-5 frames then EWGF"
        },
        tsunami: {
            ewgf: VALUES.no,
            notes: null
        },
        dgf: {
            hits: VALUES.depends,
            tippers: VALUES.no,
            notes: "Only hits when up against a ledge. Can charge slightly."
        },
        electricNairDgf: {
            lowest: 12,
            consistentLow: 21,
            fullHopMax: 44,
            shortHopMax: 46,
            onlyFullHopAtLowest: VALUES.no
        },
        electricOnBlock: {
            advantage: 4,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.yes,
            twoFrames: VALUES.depends,
            notes: "2-Frame possibility depends on the animation frame of Up-B during ledge snap. Can trade with Uppercut."
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.yes,
            armorsUntil: 139,
            notes: null
        }
    },
    "ganondorf": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.no,
            utilt: VALUES.no,
            notes: null
        },
        cjab: {
            ewgf: VALUES.yes,
            notes: null
        },
        tsunami: {
            ewgf: VALUES.yes,
            notes: null
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.no,
            notes: "Can charge slightly"
        },
        electricNairDgf: {
            lowest: 22,
            consistentLow: 32,
            fullHopMax: 56,
            shortHopMax: 58,
            onlyFullHopAtLowest: VALUES.no
        },
        electricOnBlock: {
            advantage: 1,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.no,
            twoFrames: VALUES.no,
            notes: null
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.no,
            armorsUntil: null,
            notes: null
        }
    },
    "mewtwo": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.depends,
            utilt: VALUES.depends,
            notes: "Must dash electric, cannot buffer. Utilt hits if timed instead of buffered, but can still whiff at max range."
        },
        cjab: {
            ewgf: VALUES.yes,
            notes: null
        },
        tsunami: {
            ewgf: VALUES.yes,
            notes: null
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.depends,
            notes: "Tippers when charged 1-3 Frames or 0-9 frames when up against a ledge"
        },
        electricNairDgf: {
            lowest: 14,
            consistentLow: 24,
            fullHopMax: 42,
            shortHopMax: 43,
            onlyFullHopAtLowest: VALUES.yes
        },
        electricOnBlock: {
            advantage: 5,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.yes,
            twoFrames: VALUES.depends,
            notes: "Doesn't 2-frame vs max distance vertical teleport."
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.yes,
            armorsUntil: 218,
            notes: null
        }
    },
    "roy": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.no,
            utilt: VALUES.no,
            notes: null
        },
        cjab: {
            ewgf: VALUES.yes,
            notes: null
        },
        tsunami: {
            ewgf: VALUES.yes,
            notes: null
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.no,
            notes: "Can charge slightly at ledge"
        },
        electricNairDgf: {
            lowest: 14,
            consistentLow: 24,
            fullHopMax: 47,
            shortHopMax: 49,
            onlyFullHopAtLowest: VALUES.no
        },
        electricOnBlock: {
            advantage: 3,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.depends,
            twoFrames: VALUES.yes,
            notes: "Pixel perfect positioning needed to hit ledge hang. Likely to trade when going for 2-frame."
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.no,
            armorsUntil: null,
            notes: null
        }
    },
    "chrom": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.no,
            utilt: VALUES.no,
            notes: null
        },
        cjab: {
            ewgf: VALUES.yes,
            notes: null
        },
        tsunami: {
            ewgf: VALUES.yes,
            notes: null
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.no,
            notes: "Can charge slightly at ledge"
        },
        electricNairDgf: {
            lowest: 14,
            consistentLow: 24,
            fullHopMax: 47,
            shortHopMax: 49,
            onlyFullHopAtLowest: VALUES.no
        },
        electricOnBlock: {
            advantage: 3,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.depends,
            twoFrames: VALUES.yes,
            notes: "Pixel perfect positioning needed to hit ledge hang. Likely to trade when going for 2-frame."
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.no,
            armorsUntil: null,
            notes: null
        }
    },
    "gnw": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: "Dthrow sends onto the BF plat starting at 17%"
        },
        nair: {
            ewgf: VALUES.no,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.yes,
            utilt: VALUES.no,
            notes: null
        },
        cjab: {
            ewgf: VALUES.depends,
            notes: "Need to dash exactly 3 frames then EWGF"
        },
        tsunami: {
            ewgf: VALUES.yes,
            notes: null
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.no,
            notes: "Can charge slightly"
        },
        electricNairDgf: {
            lowest: 9,
            consistentLow: 18,
            fullHopMax: 39,
            shortHopMax: 41,
            onlyFullHopAtLowest: VALUES.no
        },
        electricOnBlock: {
            advantage: 5,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.yes,
            twoFrames: VALUES.depends,
            notes: "Doesn't 2-frame when G&W recovers at a diagonal"
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.yes,
            armorsUntil: 5,
            notes: null
        }
    },
    "meta_knight": {
        dthrow: {
            ewgf: VALUES.no,
            notes: "Dthrow sends onto the BF plat even at 0"
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.no,
            utilt: VALUES.no,
            notes: null
        },
        cjab: {
            ewgf: VALUES.yes,
            notes: null
        },
        tsunami: {
            ewgf: VALUES.no,
            notes: null
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.no,
            notes: null
        },
        electricNairDgf: {
            lowest: 13,
            consistentLow: 23,
            fullHopMax: 41,
            shortHopMax: 43,
            onlyFullHopAtLowest: VALUES.no
        },
        electricOnBlock: {
            advantage: 5,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.yes,
            twoFrames: VALUES.depends,
            notes: "Side-B never gets 2-framed, and Up-B is animation frame dependant."
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.yes,
            armorsUntil: null,
            notes: null
        }
    },
    "pit": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.no,
            utilt: VALUES.no,
            notes: null
        },
        cjab: {
            ewgf: VALUES.yes,
            notes: null
        },
        tsunami: {
            ewgf: VALUES.yes,
            notes: null
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.no,
            notes: "Can charge slightly"
        },
        electricNairDgf: {
            lowest: 14,
            consistentLow: 24,
            fullHopMax: 48,
            shortHopMax: 49,
            onlyFullHopAtLowest: VALUES.no
        },
        electricOnBlock: {
            advantage: 3,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.no,
            twoFrames: VALUES.no,
            notes: null
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.yes,
            armorsUntil: 247,
            notes: null
        }
    },
    "dark_pit": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.no,
            utilt: VALUES.no,
            notes: null
        },
        cjab: {
            ewgf: VALUES.yes,
            notes: null
        },
        tsunami: {
            ewgf: VALUES.yes,
            notes: null
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.no,
            notes: "Can charge slightly"
        },
        electricNairDgf: {
            lowest: 14,
            consistentLow: 24,
            fullHopMax: 48,
            shortHopMax: 49,
            onlyFullHopAtLowest: VALUES.no
        },
        electricOnBlock: {
            advantage: 3,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.no,
            twoFrames: VALUES.no,
            notes: null
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.yes,
            armorsUntil: 247,
            notes: null
        }
    },
    "zss": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.no,
            utilt: VALUES.no,
            notes: null
        },
        cjab: {
            ewgf: VALUES.yes,
            notes: null
        },
        tsunami: {
            ewgf: VALUES.no,
            notes: null
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.no,
            notes: "Can charge slightly at ledge"
        },
        electricNairDgf: {
            lowest: 10,
            consistentLow: 21,
            fullHopMax: 41,
            shortHopMax: 43,
            onlyFullHopAtLowest: VALUES.no
        },
        electricOnBlock: {
            advantage: 5,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.yes,
            twoFrames: VALUES.depends,
            notes: "2-frames Zair/Side-B and Down-B.  Whiffs vs Up-B when she hugs the stage."
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.no,
            armorsUntil: null,
            notes: null
        }
    },
    "wario": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.no,
            utilt: VALUES.depends,
            notes: null
        },
        cjab: {
            ewgf: VALUES.depends,
            notes: "Does not work on the left side if facing in"
        },
        tsunami: {
            ewgf: VALUES.yes,
            notes: null
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.no,
            notes: "Can charge slightly"
        },
        electricNairDgf: {
            lowest: 16,
            consistentLow: 26,
            fullHopMax: 52,
            shortHopMax: 54,
            onlyFullHopAtLowest: VALUES.no
        },
        electricOnBlock: {
            advantage: 2,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.no,
            twoFrames: VALUES.no,
            notes: null
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.no,
            armorsUntil: null,
            notes: null
        }
    },
    "snake": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.no,
            utilt: VALUES.no,
            notes: null
        },
        cjab: {
            ewgf: VALUES.yes,
            notes: null
        },
        tsunami: {
            ewgf: VALUES.no,
            notes: null
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.no,
            notes: "﻿Can charge slightly"
        },
        electricNairDgf: {
            lowest: 16,
            consistentLow: 26,
            fullHopMax: 52,
            shortHopMax: 53,
            onlyFullHopAtLowest: VALUES.no
        },
        electricOnBlock: {
            advantage: 2,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.no,
            twoFrames: VALUES.depends,
            notes: "You can 2 frame airdodge if he goes straight up. Just Down Smash instead."
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.no,
            armorsUntil: null,
            notes: null
        }
    },
    "ike": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.no,
            utilt: VALUES.no,
            notes: null
        },
        cjab: {
            ewgf: VALUES.yes,
            notes: null
        },
        tsunami: {
            ewgf: VALUES.depends,
            notes: "Can SDI in and air dodge away/down and away. Possible to hit with specific spacing."
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.no,
            notes: null
        },
        electricNairDgf: {
            lowest: 16,
            consistentLow: 26,
            fullHopMax: 52,
            shortHopMax: 54,
            onlyFullHopAtLowest: VALUES.no
        },
        electricOnBlock: {
            advantage: 2,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.no,
            twoFrames: VALUES.no,
            notes: "Can't 2 frame, but you can Dragon Uppercut trade with aether."
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.no,
            armorsUntil: null,
            notes: null
        }
    },
    "squirtle": {
        dthrow: {
            ewgf: VALUES.no,
            notes: "Dthrow sends onto the BF plat even at 0"
        },
        nair: {
            ewgf: VALUES.depends,
            utilt: VALUES.depends,
            cjab: VALUES.yes,
            notes: "Electric and Utilt can whiff if Squirtle lands facing away"
        },
        trip: {
            ewgf: VALUES.yes,
            utilt: VALUES.depends,
            notes: "Utilt is inconsistent"
        },
        cjab: {
            ewgf: VALUES.no,
            notes: null
        },
        tsunami: {
            ewgf: VALUES.no,
            notes: null
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.no,
            notes: "Can charge slightly at ledge"
        },
        electricNairDgf: {
            lowest: 17,
            consistentLow: 22,
            fullHopMax: 39,
            shortHopMax: 41,
            onlyFullHopAtLowest: VALUES.yes
        },
        electricOnBlock: {
            advantage: 5,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.yes,
            twoFrames: VALUES.no,
            notes: null
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.no,
            armorsUntil: null,
            notes: null
        }
    },
    "ivysaur": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            notes: null
        },
        cjab: {
            ewgf: VALUES.yes,
            notes: null
        },
        tsunami: {
            ewgf: VALUES.no,
            notes: null
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.no,
            notes: "Can charge slightly at ledge"
        },
        electricNairDgf: {
            lowest: 14,
            consistentLow: 24,
            fullHopMax: 50,
            shortHopMax: 52,
            onlyFullHopAtLowest: VALUES.no
        },
        electricOnBlock: {
            advantage: 3,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.yes,
            twoFrames: VALUES.no,
            notes: null
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.yes,
            armorsUntil: 126,
            notes: null
        }
    },
    "charizard": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.depends,
            utilt: VALUES.depends,
            cjab: VALUES.yes,
            notes: "Electric and Utilt can whiff if Charizard lands facing away"
        },
        trip: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            notes: null
        },
        cjab: {
            ewgf: VALUES.depends,
            notes: "Does not work if they face away when they land"
        },
        tsunami: {
            ewgf: VALUES.no,
            notes: null
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.depends,
            notes: "Tippers when charged 6-9 frames"
        },
        electricNairDgf: {
            lowest: 18,
            consistentLow: 28,
            fullHopMax: 56,
            shortHopMax: 57,
            onlyFullHopAtLowest: VALUES.no
        },
        electricOnBlock: {
            advantage: 1,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.depends,
            twoFrames: VALUES.depends,
            notes: "Doesn't 2-frame if they Up-B straight up.  Flare Blitz can be 2 framed.  Can whiff vs ledge hang if their head is down."
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.no,
            armorsUntil: null,
            notes: null
        }
    },
    "diddy_kong": {
        dthrow: {
            ewgf: VALUES.no,
            notes: "Too far to hit with buffered electric starting at 1%"
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.yes,
            utilt: VALUES.no,
            notes: null
        },
        cjab: {
            ewgf: VALUES.depends,
            notes: "Does not work on the right side if they land facing away unless you dash for 5 frames"
        },
        tsunami: {
            ewgf: VALUES.no,
            notes: null
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.depends,
            notes: "Only tippers when up against a ledge and charged 4-6 frames"
        },
        electricNairDgf: {
            lowest: 17,
            consistentLow: 25,
            fullHopMax: 45,
            shortHopMax: 47,
            onlyFullHopAtLowest: VALUES.yes
        },
        electricOnBlock: {
            advantage: 3,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.no,
            twoFrames: VALUES.no,
            notes: null
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.no,
            armorsUntil: null,
            notes: null
        }
    },
    "lucas": {
        dthrow: {
            ewgf: VALUES.no,
            notes: "Too far to hit with buffered electric. Dthrow sends onto the BF plat starting at 3%."
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.yes,
            utilt: VALUES.depends,
            notes: "Utilt is inconsistent"
        },
        cjab: {
            ewgf: VALUES.depends,
            notes: "Does not work if they face away when they land"
        },
        tsunami: {
            ewgf: VALUES.depends,
            notes: "Can SDI in and air dodge away/down and away. Possible to hit with specific spacing."
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.yes,
            notes: "Can charge slightly at ledge"
        },
        electricNairDgf: {
            lowest: 13,
            consistentLow: 23,
            fullHopMax: 47,
            shortHopMax: 49,
            onlyFullHopAtLowest: VALUES.no
        },
        electricOnBlock: {
            advantage: 3,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.yes,
            twoFrames: VALUES.depends,
            notes: "Can't be 2-framed when Up-B sends at a diagonal (No stage hug). Zair can't be 2 framed."
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.no,
            armorsUntil: null,
            notes: null
        }
    },
    "sonic": {
        dthrow: {
            ewgf: VALUES.no,
            notes: "Too far to hit with buffered electric"
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.no,
            utilt: VALUES.no,
            notes: null
        },
        cjab: {
            ewgf: VALUES.yes,
            notes: null
        },
        tsunami: {
            ewgf: VALUES.no,
            notes: null
        },
        dgf: {
            hits: VALUES.depends,
            tippers: VALUES.depends,
            notes: "Only hits when it tippers. When up against a ledge it does not tipper. Tippers when charged 3-6 frames."
        },
        electricNairDgf: {
            lowest: 12,
            consistentLow: 22,
            fullHopMax: 44,
            shortHopMax: 45,
            onlyFullHopAtLowest: VALUES.no
        },
        electricOnBlock: {
            advantage: 4,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.no,
            twoFrames: VALUES.no,
            notes: null
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.no,
            armorsUntil: null,
            notes: null
        }
    },
    "king_dedede": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            notes: null
        },
        cjab: {
            ewgf: VALUES.yes,
            notes: null
        },
        tsunami: {
            ewgf: VALUES.yes,
            notes: null
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.no,
            notes: "Can charge slightly at ledge"
        },
        electricNairDgf: {
            lowest: 20,
            consistentLow: 30,
            fullHopMax: 60,
            shortHopMax: 62,
            onlyFullHopAtLowest: VALUES.no
        },
        electricOnBlock: {
            advantage: -1,
            canTrip: VALUES.yes
        },
        dragonUpperOnLedge: {
            hits: VALUES.yes,
            twoFrames: VALUES.yes,
            notes: null
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.yes,
            armorsUntil: 183,
            notes: null
        }
    },
    "olimar": {
        dthrow: {
            ewgf: VALUES.no,
            notes: "Dthrow sends onto the BF plat even at 0"
        },
        nair: {
            ewgf: VALUES.depends,
            utilt: VALUES.depends,
            cjab: VALUES.yes,
            notes: "Electric and Utilt can whiff if Olimar lands facing away"
        },
        trip: {
            ewgf: VALUES.yes,
            utilt: VALUES.depends,
            notes: "Utilt is inconsistent"
        },
        cjab: {
            ewgf: VALUES.depends,
            notes: "Does not work if they face away when they land"
        },
        tsunami: {
            ewgf: VALUES.depends,
            notes: "Can SDI in and air dodge away/down and away. Possible to hit with specific spacing."
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.yes,
            notes: "Tippers when charged 0-3 frames. Does not tipper at ledge. Can charge slightly at ledge."
        },
        electricNairDgf: {
            lowest: 10,
            consistentLow: 20,
            fullHopMax: 41,
            shortHopMax: 43,
            onlyFullHopAtLowest: VALUES.no
        },
        electricOnBlock: {
            advantage: 5,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.yes,
            twoFrames: VALUES.depends,
            notes: "Up-B -> ledge snap angle for 2-frame is hyperspecific."
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.no,
            armorsUntil: null,
            notes: null
        }
    },
    "lucario": {
        dthrow: {
            ewgf: VALUES.no,
            notes: "Too far to hit with buffered electric"
        },
        nair: {
            ewgf: VALUES.depends,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: "Electric and Utilt can whiff if Lucario lands facing away"
        },
        trip: {
            ewgf: VALUES.no,
            utilt: VALUES.no,
            notes: null
        },
        cjab: {
            ewgf: VALUES.depends,
            notes: "Does not work if they face away when they land"
        },
        tsunami: {
            ewgf: VALUES.depends,
            notes: "Can SDI in and air dodge away/down and away. Possible to hit with specific spacing."
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.no,
            notes: "Can charge slightly at ledge"
        },
        electricNairDgf: {
            lowest: 14,
            consistentLow: 24,
            fullHopMax: 46,
            shortHopMax: 48,
            onlyFullHopAtLowest: VALUES.no
        },
        electricOnBlock: {
            advantage: 3,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.yes,
            twoFrames: VALUES.depends,
            notes: "Stage hug Up-B can sometimes avoid being 2-frameable"
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.no,
            armorsUntil: null,
            notes: null
        }
    },
    "rob": {
        dthrow: {
            ewgf: VALUES.no,
            notes: "Dthrow sends onto the BF plat even at 0"
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            notes: null
        },
        cjab: {
            ewgf: VALUES.yes,
            notes: null
        },
        tsunami: {
            ewgf: VALUES.yes,
            notes: null
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.no,
            notes: "Can charge slightly"
        },
        electricNairDgf: {
            lowest: 16,
            consistentLow: 26,
            fullHopMax: 52,
            shortHopMax: 53,
            onlyFullHopAtLowest: VALUES.no
        },
        electricOnBlock: {
            advantage: 2,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.depends,
            twoFrames: VALUES.depends,
            notes: "Only hits ledge hang while they're in the animation cycle with their head raised. Only 2-frames on stage hug. Uppercut also goes through/trades with Rob Up Air."
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.no,
            armorsUntil: null,
            notes: null
        }
    },
    "toon_link": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.depends,
            utilt: VALUES.depends,
            cjab: VALUES.yes,
            notes: "Electric and Utilt can whiff if Toon Link lands facing away"
        },
        trip: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            notes: null
        },
        cjab: {
            ewgf: VALUES.depends,
            notes: "If they face away you need to dash for 4-5 frames then EWGF"
        },
        tsunami: {
            ewgf: VALUES.no,
            notes: null
        },
        dgf: {
            hits: VALUES.depends,
            tippers: VALUES.yes,
            notes: "Only hits when it tippers. Tippers when charged 0 frames. Also hits when up against a ledge."
        },
        electricNairDgf: {
            lowest: 17,
            consistentLow: 26,
            fullHopMax: 46,
            shortHopMax: 47,
            onlyFullHopAtLowest: VALUES.yes
        },
        electricOnBlock: {
            advantage: 3,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.yes,
            twoFrames: VALUES.depends,
            notes: "Only 2 frames if Toon Link recovers straight up; will either trade or go through if they opt to hold down to not grab ledge. Zair can't be 2-framed."
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.no,
            armorsUntil: null,
            notes: null
        }
    },
    "wolf": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.depends,
            utilt: VALUES.depends,
            cjab: VALUES.yes,
            notes: "Electric whiffs if Wolf lands facing in. Utilt can whiff if Wolf lands facing in."
        },
        trip: {
            ewgf: VALUES.depends,
            utilt: VALUES.no,
            notes: "Have a 3 frame window to walk then EWGF"
        },
        cjab: {
            ewgf: VALUES.depends,
            notes: "Does not work if they face in when they land"
        },
        tsunami: {
            ewgf: VALUES.no,
            notes: null
        },
        dgf: {
            hits: VALUES.no,
            tippers: VALUES.no,
            notes: null
        },
        electricNairDgf: {
            lowest: 17,
            consistentLow: 27,
            fullHopMax: 46,
            shortHopMax: 48,
            onlyFullHopAtLowest: VALUES.yes
        },
        electricOnBlock: {
            advantage: 3,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.no,
            twoFrames: VALUES.no,
            notes: "Uppercut can go through and/or trade with Side-B if it doesn't ledge snap."
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.no,
            armorsUntil: null,
            notes: null
        }
    },
    "villager": {
        dthrow: {
            ewgf: VALUES.no,
            notes: "Too far to hit with buffered electric. Dthrow sends onto the plat starting at 8%."
        },
        nair: {
            ewgf: VALUES.depends,
            utilt: VALUES.depends,
            cjab: VALUES.yes,
            notes: "Electric and Utilt whiff if Villager lands facing away"
        },
        trip: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            notes: null
        },
        cjab: {
            ewgf: VALUES.depends,
            notes: "Does not work if they face away when they land"
        },
        tsunami: {
            ewgf: VALUES.depends,
            notes: "Can SDI in and air dodge away/down and away. Possible to hit with specific spacing. Lloid Rocket technically comes out frame 1, but Kazuya can still convert without being hit."
        },
        dgf: {
            hits: VALUES.depends,
            tippers: VALUES.no,
            notes: "Only hits when up against a ledge"
        },
        electricNairDgf: {
            lowest: 13,
            consistentLow: 23,
            fullHopMax: 46,
            shortHopMax: 48,
            onlyFullHopAtLowest: VALUES.no
        },
        electricOnBlock: {
            advantage: 3,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.yes,
            twoFrames: VALUES.no,
            notes: null
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.no,
            armorsUntil: null,
            notes: null
        }
    },
    "mega_man": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.depends,
            utilt: VALUES.depends,
            notes: "Have a 3 frame window to walk then EWGF. Utilt is inconsistent."
        },
        cjab: {
            ewgf: VALUES.yes,
            notes: null
        },
        tsunami: {
            ewgf: VALUES.yes,
            notes: null
        },
        dgf: {
            hits: VALUES.no,
            tippers: VALUES.no,
            notes: null
        },
        electricNairDgf: {
            lowest: 15,
            consistentLow: 25,
            fullHopMax: 50,
            shortHopMax: 52,
            onlyFullHopAtLowest: VALUES.no
        },
        electricOnBlock: {
            advantage: 2,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.yes,
            twoFrames: VALUES.depends,
            notes: "Doesn't get 2-framed when recovering from far away."
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.no,
            armorsUntil: null,
            notes: null
        }
    },
    "wii_fit_trainer": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.no,
            utilt: VALUES.depends,
            notes: "Utilt must be slightly delayed"
        },
        cjab: {
            ewgf: VALUES.yes,
            notes: null
        },
        tsunami: {
            ewgf: VALUES.depends,
            notes: "Can SDI in and air dodge away/down and away. Possible to hit with specific spacing. Header technically comes out frame 1, but Kazuya can still convert."
        },
        dgf: {
            hits: VALUES.depends,
            tippers: VALUES.depends,
            notes: "Does not tipper at ledge"
        },
        electricNairDgf: {
            lowest: 14,
            consistentLow: 24,
            fullHopMax: 48,
            shortHopMax: 49,
            onlyFullHopAtLowest: VALUES.no
        },
        electricOnBlock: {
            advantage: 3,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.depends,
            twoFrames: VALUES.depends,
            notes: "Only gets hit during ledge hang while at the top of their pull up.  Only gets 2-framed if grabbing ledge with Side-B."
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.no,
            armorsUntil: null,
            notes: null
        }
    },
    "rosalina": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.depends,
            utilt: VALUES.no,
            notes: "Partner can interrupt. Have a 3 frame window to walk then EWGF"
        },
        cjab: {
            ewgf: VALUES.yes,
            notes: null
        },
        tsunami: {
            ewgf: VALUES.depends,
            notes: "Can SDI in and air dodge away/down and away. Possible to hit with specific spacing."
        },
        dgf: {
            hits: VALUES.depends,
            tippers: VALUES.yes,
            notes: "Only hits when it tippers. Tippers when charged 0-2 frames or 1-2 frames when up against a ledge."
        },
        electricNairDgf: {
            lowest: 12,
            consistentLow: 22,
            fullHopMax: 42,
            shortHopMax: 44,
            onlyFullHopAtLowest: VALUES.no
        },
        electricOnBlock: {
            advantage: 4,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.yes,
            twoFrames: VALUES.no,
            notes: null
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.yes,
            armorsUntil: 204,
            notes: "Cannot armor Luma's rapid jab"
        }
    },
    "little_mac": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.no,
            utilt: VALUES.no,
            notes: null
        },
        cjab: {
            ewgf: VALUES.yes,
            notes: null
        },
        tsunami: {
            ewgf: VALUES.no,
            notes: null
        },
        dgf: {
            hits: VALUES.no,
            tippers: VALUES.no,
            notes: null
        },
        electricNairDgf: {
            lowest: 12,
            consistentLow: 22,
            fullHopMax: 44,
            shortHopMax: 46,
            onlyFullHopAtLowest: VALUES.no
        },
        electricOnBlock: {
            advantage: 4,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.yes,
            twoFrames: VALUES.yes,
            notes: "Going for 2-frame can go though/trade with both Mac Side-B and Up-B."
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.yes,
            armorsUntil: null,
            notes: null
        }
    },
    "greninja": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.no,
            utilt: VALUES.depends,
            cjab: VALUES.yes,
            notes: "Utilt whiffs if Greninja lands facing away"
        },
        trip: {
            ewgf: VALUES.no,
            utilt: VALUES.no,
            notes: null
        },
        cjab: {
            ewgf: VALUES.no,
            notes: null
        },
        tsunami: {
            ewgf: VALUES.no,
            notes: null
        },
        dgf: {
            hits: VALUES.depends,
            tippers: VALUES.yes,
            notes: "Only hits when it tippers. Tippers when up against a ledge and charged 0 frames."
        },
        electricNairDgf: {
            lowest: 17,
            consistentLow: 25,
            fullHopMax: 44,
            shortHopMax: 46,
            onlyFullHopAtLowest: VALUES.yes
        },
        electricOnBlock: {
            advantage: 4,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.no,
            twoFrames: VALUES.yes,
            notes: null
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.yes,
            armorsUntil: 247,
            notes: null
        }
    },
    "mii_brawler": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            notes: null
        },
        cjab: {
            ewgf: VALUES.yes,
            notes: null
        },
        tsunami: {
            ewgf: VALUES.depends,
            notes: "Feint Jump technically comes out frame 2 but the lingering hit of electric connects when its intangibility runs out."
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.no,
            notes: null
        },
        electricNairDgf: {
            lowest: 13,
            consistentLow: 23,
            fullHopMax: 47,
            shortHopMax: 49,
            onlyFullHopAtLowest: VALUES.no
        },
        electricOnBlock: {
            advantage: 3,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.yes,
            twoFrames: VALUES.yes,
            notes: "Side-B 3 is the only special that can't be 2-framed."
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.yes,
            armorsUntil: 98,
            notes: null
        }
    },
    "mii_sword": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.depends,
            utilt: VALUES.yes,
            notes: "Have a 3 frame window to walk then EWGF"
        },
        cjab: {
            ewgf: VALUES.yes,
            notes: null
        },
        tsunami: {
            ewgf: VALUES.yes,
            notes: null
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.no,
            notes: null
        },
        electricNairDgf: {
            lowest: 17,
            consistentLow: 27,
            fullHopMax: 49,
            shortHopMax: 51,
            onlyFullHopAtLowest: VALUES.yes
        },
        electricOnBlock: {
            advantage: 2,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.yes,
            twoFrames: VALUES.depends,
            notes: "Up-B 2, Side B-2, and Down-B 2 can't be 2-framed.  Side-B 1 can avoid being 2-framed if done from far away.  Up-B 3 can only be 2-framed if recovering from a diagonal far from ledge."
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.no,
            armorsUntil: null,
            notes: null
        }
    },
    "mii_gunner": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.yes,
            utilt: VALUES.depends,
            notes: "Utilt is inconsistent"
        },
        cjab: {
            ewgf: VALUES.yes,
            notes: null
        },
        tsunami: {
            ewgf: VALUES.yes,
            notes: null
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.no,
            notes: null
        },
        electricNairDgf: {
            lowest: 18,
            consistentLow: 28,
            fullHopMax: 51,
            shortHopMax: 52,
            onlyFullHopAtLowest: VALUES.yes
        },
        electricOnBlock: {
            advantage: 2,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.yes,
            twoFrames: VALUES.depends,
            notes: "Up-B 1/3 can avoid 2-frame when recovering from as far from ledge as possible.  Up-B 3 can dodge 2-frame by doing a stage hug."
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.no,
            armorsUntil: null,
            notes: null
        }
    },
    "palutena": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.yes,
            utilt: VALUES.no,
            notes: null
        },
        cjab: {
            ewgf: VALUES.yes,
            notes: null
        },
        tsunami: {
            ewgf: VALUES.depends,
            notes: "Can SDI in and air dodge away/down and away. Possible to hit with specific spacing."
        },
        dgf: {
            hits: VALUES.depends,
            tippers: VALUES.no,
            notes: "Only tippers when up against a ledge and charged 0 frames"
        },
        electricNairDgf: {
            lowest: 17,
            consistentLow: 27,
            fullHopMax: 46,
            shortHopMax: 47,
            onlyFullHopAtLowest: VALUES.yes
        },
        electricOnBlock: {
            advantage: 3,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.no,
            twoFrames: VALUES.no,
            notes: null
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.yes,
            armorsUntil: 5,
            notes: null
        }
    },
    "pac_man": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.no,
            utilt: VALUES.no,
            notes: null
        },
        cjab: {
            ewgf: VALUES.yes,
            notes: null
        },
        tsunami: {
            ewgf: VALUES.yes,
            notes: "Trampoline technically comes out frame 1, but gets deleted by electric"
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.no,
            notes: null
        },
        electricNairDgf: {
            lowest: 14,
            consistentLow: 24,
            fullHopMax: 47,
            shortHopMax: 49,
            onlyFullHopAtLowest: VALUES.no
        },
        electricOnBlock: {
            advantage: 3,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.yes,
            twoFrames: VALUES.no,
            notes: null
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.no,
            armorsUntil: null,
            notes: null
        }
    },
    "robin": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.no,
            utilt: VALUES.no,
            notes: "Due to a bug, Robin cannot be tripped if they use a fully charged neutral B"
        },
        cjab: {
            ewgf: VALUES.yes,
            notes: null
        },
        tsunami: {
            ewgf: VALUES.depends,
            notes: "Can SDI in and air dodge away/down and away. Possible to hit with specific spacing."
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.no,
            notes: null
        },
        electricNairDgf: {
            lowest: 14,
            consistentLow: 24,
            fullHopMax: 47,
            shortHopMax: 49,
            onlyFullHopAtLowest: VALUES.no
        },
        electricOnBlock: {
            advantage: 3,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.yes,
            twoFrames: VALUES.no,
            notes: "I don't think they can be 2-framed by uppercut, but there might be an ultra specific recovery angle that allows for it.  Not worth going for."
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.yes,
            armorsUntil: 60,
            notes: null
        }
    },
    "shulk": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.no,
            utilt: VALUES.no,
            notes: null
        },
        cjab: {
            ewgf: VALUES.yes,
            notes: null
        },
        tsunami: {
            ewgf: VALUES.depends,
            notes: "Can SDI in and air dodge away/down and away. Possible to hit with specific spacing."
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.no,
            notes: null
        },
        electricNairDgf: {
            lowest: 15,
            consistentLow: 25,
            fullHopMax: 48,
            shortHopMax: 50,
            onlyFullHopAtLowest: VALUES.no
        },
        electricOnBlock: {
            advantage: 3,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.yes,
            twoFrames: VALUES.depends,
            notes: "Always goes through and hits/trades with Shulk Up-B if they don't ledge snap.  If they snap ledge from far away without doing the second hit of Up-B, they don't get 2-framed."
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.no,
            armorsUntil: null,
            notes: null
        }
    },
    "bowser_jr": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            notes: null
        },
        cjab: {
            ewgf: VALUES.yes,
            notes: null
        },
        tsunami: {
            ewgf: VALUES.yes,
            notes: null
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.depends,
            notes: "Tippers when charged 2-9 frames on the left side and 8-9 frames on the right side"
        },
        electricNairDgf: {
            lowest: 24,
            consistentLow: 34,
            fullHopMax: 53,
            shortHopMax: 55,
            onlyFullHopAtLowest: VALUES.yes
        },
        electricOnBlock: {
            advantage: 2,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.yes,
            twoFrames: VALUES.depends,
            notes: "Hits top half of body.  Only gets 2-framed if they hug the stage with Up-B."
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.yes,
            armorsUntil: 247,
            notes: null
        }
    },
    "duck_hunt": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.no,
            utilt: VALUES.no,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.no,
            utilt: VALUES.no,
            notes: null
        },
        cjab: {
            ewgf: VALUES.depends,
            notes: "Does not work if they face in when they land"
        },
        tsunami: {
            ewgf: VALUES.no,
            notes: null
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.no,
            notes: null
        },
        electricNairDgf: {
            lowest: 12,
            consistentLow: 22,
            fullHopMax: 44,
            shortHopMax: 45,
            onlyFullHopAtLowest: VALUES.no
        },
        electricOnBlock: {
            advantage: 4,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.yes,
            twoFrames: VALUES.no,
            notes: "Can 2 frame air dodge."
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.yes,
            armorsUntil: null,
            notes: null
        }
    },
    "ryu": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.no,
            utilt: VALUES.no,
            notes: null
        },
        cjab: {
            ewgf: VALUES.yes,
            notes: null
        },
        tsunami: {
            ewgf: VALUES.depends,
            notes: "Will do less damage due to focus"
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.no,
            notes: null
        },
        electricNairDgf: {
            lowest: 15,
            consistentLow: 25,
            fullHopMax: 50,
            shortHopMax: 52,
            onlyFullHopAtLowest: VALUES.no
        },
        electricOnBlock: {
            advantage: 2,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.yes,
            twoFrames: VALUES.yes,
            notes: "Trades with Shoryu when it hits through ledge."
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.no,
            armorsUntil: null,
            notes: null
        }
    },
    "ken": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.no,
            utilt: VALUES.no,
            notes: null
        },
        cjab: {
            ewgf: VALUES.yes,
            notes: null
        },
        tsunami: {
            ewgf: VALUES.depends,
            notes: "Will do less damage due to focus"
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.no,
            notes: null
        },
        electricNairDgf: {
            lowest: 15,
            consistentLow: 25,
            fullHopMax: 50,
            shortHopMax: 52,
            onlyFullHopAtLowest: VALUES.no
        },
        electricOnBlock: {
            advantage: 2,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.yes,
            twoFrames: VALUES.yes,
            notes: "Trades with Shoryu when it hits through ledge."
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.no,
            armorsUntil: null,
            notes: null
        }
    },
    "cloud": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.no,
            utilt: VALUES.no,
            notes: null
        },
        cjab: {
            ewgf: VALUES.yes,
            notes: null
        },
        tsunami: {
            ewgf: VALUES.yes,
            notes: null
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.no,
            notes: null
        },
        electricNairDgf: {
            lowest: 15,
            consistentLow: 25,
            fullHopMax: 49,
            shortHopMax: 51,
            onlyFullHopAtLowest: VALUES.no
        },
        electricOnBlock: {
            advantage: 2,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.no,
            twoFrames: VALUES.depends,
            notes: "Only 2-frames Limit Up-B"
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.no,
            armorsUntil: null,
            notes: null
        }
    },
    "corrin": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.no,
            utilt: VALUES.no,
            notes: null
        },
        cjab: {
            ewgf: VALUES.depends,
            notes: "If they face in you need to dash for 3-5 frames then EWGF"
        },
        tsunami: {
            ewgf: VALUES.depends,
            notes: "Can SDI in and air dodge away/down and away. Possible to hit with specific spacing."
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.no,
            notes: null
        },
        electricNairDgf: {
            lowest: 15,
            consistentLow: 25,
            fullHopMax: 48,
            shortHopMax: 50,
            onlyFullHopAtLowest: VALUES.no
        },
        electricOnBlock: {
            advantage: 3,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.no,
            twoFrames: VALUES.no,
            notes: null
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.yes,
            armorsUntil: 6,
            notes: null
        }
    },
    "bayonetta": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.no,
            utilt: VALUES.no,
            notes: null
        },
        cjab: {
            ewgf: VALUES.yes,
            notes: null
        },
        tsunami: {
            ewgf: VALUES.no,
            notes: null
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.no,
            notes: null
        },
        electricNairDgf: {
            lowest: 11,
            consistentLow: 21,
            fullHopMax: 42,
            shortHopMax: 43,
            onlyFullHopAtLowest: VALUES.no
        },
        electricOnBlock: {
            advantage: 4,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.yes,
            twoFrames: VALUES.depends,
            notes: "Very specific timings for Bayo to be stuck in 2-frame animations at all, much more likely that they'll be hit during Up-B."
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.yes,
            armorsUntil: 7,
            notes: null
        }
    },
    "inkling": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.depends,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: "Electric whiffs if Inkling lands facing in"
        },
        trip: {
            ewgf: VALUES.no,
            utilt: VALUES.depends,
            notes: "Utilt is inconsistent"
        },
        cjab: {
            ewgf: VALUES.depends,
            notes: "Does not work if they face away when they land"
        },
        tsunami: {
            ewgf: VALUES.yes,
            notes: null
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.no,
            notes: null
        },
        electricNairDgf: {
            lowest: 13,
            consistentLow: 23,
            fullHopMax: 47,
            shortHopMax: 49,
            onlyFullHopAtLowest: VALUES.no
        },
        electricOnBlock: {
            advantage: 3,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.yes,
            twoFrames: VALUES.depends,
            notes: "Sometimes can't be 2 framed during stage hug."
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.yes,
            armorsUntil: 300,
            notes: null
        }
    },
    "ridley": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.no,
            utilt: VALUES.no,
            notes: null
        },
        cjab: {
            ewgf: VALUES.yes,
            notes: null
        },
        tsunami: {
            ewgf: VALUES.yes,
            notes: null
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.depends,
            notes: "Tippers when charged 7-9 frames on the left side and 6-9 frames on the right side"
        },
        electricNairDgf: {
            lowest: 16,
            consistentLow: 26,
            fullHopMax: 52,
            shortHopMax: 54,
            onlyFullHopAtLowest: VALUES.no
        },
        electricOnBlock: {
            advantage: 2,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.no,
            twoFrames: VALUES.depends,
            notes: "Only 2-framed when doing side b very close to ledge."
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.yes,
            armorsUntil: 2,
            notes: null
        }
    },
    "simon": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.no,
            utilt: VALUES.no,
            notes: null
        },
        cjab: {
            ewgf: VALUES.yes,
            notes: null
        },
        tsunami: {
            ewgf: VALUES.yes,
            notes: null
        },
        dgf: {
            hits: VALUES.depends,
            tippers: VALUES.depends,
            notes: "Only hits when it tippers. Does not tipper when up against ledge. Tippers when charged 3-8 frames."
        },
        electricNairDgf: {
            lowest: 16,
            consistentLow: 26,
            fullHopMax: 52,
            shortHopMax: 54,
            onlyFullHopAtLowest: VALUES.no
        },
        electricOnBlock: {
            advantage: 2,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.no,
            twoFrames: VALUES.yes,
            notes: "Only 2-frames tether.  Can trade/go through Up-B."
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.yes,
            armorsUntil: 247,
            notes: null
        }
    },
    "richter": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.no,
            utilt: VALUES.no,
            notes: null
        },
        cjab: {
            ewgf: VALUES.yes,
            notes: null
        },
        tsunami: {
            ewgf: VALUES.yes,
            notes: null
        },
        dgf: {
            hits: VALUES.depends,
            tippers: VALUES.depends,
            notes: "Only hits when it tippers. Does not tipper when up against ledge. Tippers when charged 3-8 frames."
        },
        electricNairDgf: {
            lowest: 16,
            consistentLow: 26,
            fullHopMax: 52,
            shortHopMax: 54,
            onlyFullHopAtLowest: VALUES.no
        },
        electricOnBlock: {
            advantage: 2,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.no,
            twoFrames: VALUES.yes,
            notes: "Only 2-frames tether.  Can trade/go through Up-B."
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.yes,
            armorsUntil: 247,
            notes: null
        }
    },
    "king_k_rool": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            notes: null
        },
        cjab: {
            ewgf: VALUES.yes,
            notes: null
        },
        tsunami: {
            ewgf: VALUES.yes,
            notes: null
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.no,
            notes: null
        },
        electricNairDgf: {
            lowest: 22,
            consistentLow: 32,
            fullHopMax: 62,
            shortHopMax: 64,
            onlyFullHopAtLowest: VALUES.no
        },
        electricOnBlock: {
            advantage: -1,
            canTrip: VALUES.yes
        },
        dragonUpperOnLedge: {
            hits: VALUES.no,
            twoFrames: VALUES.no,
            notes: null
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.no,
            armorsUntil: null,
            notes: null
        }
    },
    "isabelle": {
        dthrow: {
            ewgf: VALUES.no,
            notes: "Too far to hit with buffered electric starting at 6%. Dthrow sends onto the BF plat even at 0."
        },
        nair: {
            ewgf: VALUES.depends,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: "Electric whiffs if Isabelle lands facing in"
        },
        trip: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            notes: null
        },
        cjab: {
            ewgf: VALUES.depends,
            notes: "Does not work if they face away when they land"
        },
        tsunami: {
            ewgf: VALUES.depends,
            notes: "Can SDI in and air dodge away/down and away. Possible to hit with specific spacing."
        },
        dgf: {
            hits: VALUES.depends,
            tippers: VALUES.no,
            notes: "Only hits when up against a ledge"
        },
        electricNairDgf: {
            lowest: 12,
            consistentLow: 22,
            fullHopMax: 44,
            shortHopMax: 46,
            onlyFullHopAtLowest: VALUES.no
        },
        electricOnBlock: {
            advantage: 4,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.yes,
            twoFrames: VALUES.no,
            notes: null
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.no,
            armorsUntil: null,
            notes: null
        }
    },
    "incineroar": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.yes,
            utilt: VALUES.no,
            notes: null
        },
        cjab: {
            ewgf: VALUES.yes,
            notes: null
        },
        tsunami: {
            ewgf: VALUES.yes,
            notes: null
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.depends,
            notes: "Tippers when charged 4-5 frames on the left side and 3-4 frames on the right side"
        },
        electricNairDgf: {
            lowest: 18,
            consistentLow: 28,
            fullHopMax: 56,
            shortHopMax: 57,
            onlyFullHopAtLowest: VALUES.no
        },
        electricOnBlock: {
            advantage: 1,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.no,
            twoFrames: VALUES.depends,
            notes: "Only 2-frames Side-B at an ultra specific height value only while doing the move super close to ledge. More likely to hit Side-B outright. Maybe possible to hit ledge hang."
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.no,
            armorsUntil: null,
            notes: null
        }
    },
    "piranha_plant": {
        dthrow: {
            ewgf: VALUES.no,
            notes: "Dthrow sends onto the BF plat starting at 11%."
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            notes: null
        },
        cjab: {
            ewgf: VALUES.yes,
            notes: null
        },
        tsunami: {
            ewgf: VALUES.yes,
            notes: null
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.yes,
            notes: "Tippers when charged 0-1 frames"
        },
        electricNairDgf: {
            lowest: 17,
            consistentLow: 27,
            fullHopMax: 54,
            shortHopMax: 56,
            onlyFullHopAtLowest: VALUES.no
        },
        electricOnBlock: {
            advantage: 1,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.yes,
            twoFrames: VALUES.yes,
            notes: null
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.yes,
            armorsUntil: 236,
            notes: null
        }
    },
    "joker": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.no,
            utilt: VALUES.no,
            notes: null
        },
        cjab: {
            ewgf: VALUES.yes,
            notes: null
        },
        tsunami: {
            ewgf: VALUES.depends,
            notes: "Can SDI in and air dodge away/down and away. Possible to hit with specific spacing."
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.no,
            notes: null
        },
        electricNairDgf: {
            lowest: 18,
            consistentLow: 28,
            fullHopMax: 46,
            shortHopMax: 48,
            onlyFullHopAtLowest: VALUES.yes
        },
        electricOnBlock: {
            advantage: 3,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.depends,
            twoFrames: VALUES.depends,
            notes: "Only hits ledge hang during Joker's pullup animation.  Can only 2-frame Arsene Up-B and can't if Arsene flies straight up."
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.no,
            armorsUntil: null,
            notes: null
        }
    },
    "hero": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.no,
            utilt: VALUES.no,
            notes: null
        },
        cjab: {
            ewgf: VALUES.yes,
            notes: null
        },
        tsunami: {
            ewgf: VALUES.yes,
            notes: null
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.no,
            notes: null
        },
        electricNairDgf: {
            lowest: 19,
            consistentLow: 29,
            fullHopMax: 50,
            shortHopMax: 51,
            onlyFullHopAtLowest: VALUES.yes
        },
        electricOnBlock: {
            advantage: 2,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.yes,
            twoFrames: VALUES.no,
            notes: "Small chance to whiff vs ledge hang if you're too close. Animation specific."
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.no,
            armorsUntil: null,
            notes: null
        }
    },
    "banjo": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.yes,
            utilt: VALUES.no,
            notes: null
        },
        cjab: {
            ewgf: VALUES.yes,
            notes: null
        },
        tsunami: {
            ewgf: VALUES.yes,
            notes: "Up-b technically comes out Frame 1, but does not affect conversion"
        },
        dgf: {
            hits: VALUES.depends,
            tippers: VALUES.depends,
            notes: "Only hits when it tippers. Does not tipper when up against ledge. Tippers when charged 4-9 frames."
        },
        electricNairDgf: {
            lowest: 16,
            consistentLow: 26,
            fullHopMax: 52,
            shortHopMax: 53,
            onlyFullHopAtLowest: VALUES.no
        },
        electricOnBlock: {
            advantage: 2,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.depends,
            twoFrames: VALUES.yes,
            notes: "Only hits ledge hang at the top of Banjo's pullup. Wonderwing only gets 2-framed if Banjo smacks the wall before grabbing the ledge."
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.yes,
            armorsUntil: 5,
            notes: null
        }
    },
    "terry": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.no,
            utilt: VALUES.no,
            notes: null
        },
        cjab: {
            ewgf: VALUES.yes,
            notes: null
        },
        tsunami: {
            ewgf: VALUES.yes,
            notes: null
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.no,
            notes: null
        },
        electricNairDgf: {
            lowest: 16,
            consistentLow: 26,
            fullHopMax: 52,
            shortHopMax: 54,
            onlyFullHopAtLowest: VALUES.no
        },
        electricOnBlock: {
            advantage: 2,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.yes,
            twoFrames: VALUES.no,
            notes: "Although none of his specials directly snap ledge from below, they'll all lose out to dragon uppercut, barring moves with intangibility frames."
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.no,
            armorsUntil: null,
            notes: null
        }
    },
    "byleth": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.no,
            utilt: VALUES.no,
            notes: null
        },
        cjab: {
            ewgf: VALUES.yes,
            notes: null
        },
        tsunami: {
            ewgf: VALUES.yes,
            notes: null
        },
        dgf: {
            hits: VALUES.depends,
            tippers: VALUES.no,
            notes: "Only hits when charged 2-5 frames or 0-9 frames when up against a ledge"
        },
        electricNairDgf: {
            lowest: 14,
            consistentLow: 24,
            fullHopMax: 48,
            shortHopMax: 50,
            onlyFullHopAtLowest: VALUES.no
        },
        electricOnBlock: {
            advantage: 3,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.no,
            twoFrames: VALUES.no,
            notes: null
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.yes,
            armorsUntil: 7,
            notes: null
        }
    },
    "min_min": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.depends,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.no,
            utilt: VALUES.no,
            notes: null
        },
        cjab: {
            ewgf: VALUES.depends,
            notes: "Does not work if they face away when they land"
        },
        tsunami: {
            ewgf: VALUES.depends,
            notes: "Can SDI in and air dodge away/down and away. Possible to hit with specific spacing."
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.no,
            notes: "Only hits when charged 0-1 frames"
        },
        electricNairDgf: {
            lowest: 15,
            consistentLow: 25,
            fullHopMax: 51,
            shortHopMax: 52,
            onlyFullHopAtLowest: VALUES.no
        },
        electricOnBlock: {
            advantage: 2,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.yes,
            twoFrames: null,
            notes: null
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.yes,
            armorsUntil: null,
            notes: null
        }
    },
    "steve": {
        dthrow: {
            ewgf: VALUES.no,
            notes: "Too far to hit with buffered electric starting at 5%"
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.yes,
            utilt: VALUES.no,
            notes: null
        },
        cjab: {
            ewgf: VALUES.yes,
            notes: null
        },
        tsunami: {
            ewgf: VALUES.depends,
            notes: "Can SDI in and air dodge away/down and away. Possible to hit with specific spacing. "
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.depends,
            notes: "Tippers when charged 1-4 frames on the left side and 0-4 frames on the right side"
        },
        electricNairDgf: {
            lowest: 17,
            consistentLow: 27,
            fullHopMax: 46,
            shortHopMax: 48,
            onlyFullHopAtLowest: VALUES.yes
        },
        electricOnBlock: {
            advantage: 3,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.no,
            twoFrames: VALUES.no,
            notes: null
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.no,
            armorsUntil: null,
            notes: null
        }
    },
    "sephiroth": {
        dthrow: {
            ewgf: VALUES.no,
            notes: "Too far to hit with buffered electric starting at 9%"
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.no,
            utilt: VALUES.no,
            notes: null
        },
        cjab: {
            ewgf: VALUES.yes,
            notes: null
        },
        tsunami: {
            ewgf: VALUES.yes,
            notes: null
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.no,
            notes: null
        },
        electricNairDgf: {
            lowest: 17,
            consistentLow: 27,
            fullHopMax: 41,
            shortHopMax: 43,
            onlyFullHopAtLowest: VALUES.yes
        },
        electricOnBlock: {
            advantage: 5,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.no,
            twoFrames: null,
            notes: null
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.no,
            armorsUntil: null,
            notes: null
        }
    },
    "pyra": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.no,
            utilt: VALUES.no,
            notes: null
        },
        cjab: {
            ewgf: VALUES.yes,
            notes: null
        },
        tsunami: {
            ewgf: VALUES.yes,
            notes: null
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.no,
            notes: null
        },
        electricNairDgf: {
            lowest: 16,
            consistentLow: 26,
            fullHopMax: 48,
            shortHopMax: 50,
            onlyFullHopAtLowest: VALUES.yes
        },
        electricOnBlock: {
            advantage: 3,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.no,
            twoFrames: null,
            notes: null
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.yes,
            armorsUntil: 4,
            notes: null
        }
    },
    "mythra": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.no,
            utilt: VALUES.no,
            notes: null
        },
        cjab: {
            ewgf: VALUES.yes,
            notes: null
        },
        tsunami: {
            ewgf: VALUES.no,
            notes: null
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.no,
            notes: null
        },
        electricNairDgf: {
            lowest: 15,
            consistentLow: 25,
            fullHopMax: 46,
            shortHopMax: 48,
            onlyFullHopAtLowest: VALUES.yes
        },
        electricOnBlock: {
            advantage: 3,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.yes,
            twoFrames: null,
            notes: null
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.yes,
            armorsUntil: 7,
            notes: null
        }
    },
    "kazuya": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.depends,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: "Electric can whiff if Kazuya turns around to face away during hard landing lag"
        },
        trip: {
            ewgf: VALUES.no,
            utilt: VALUES.no,
            notes: null
        },
        cjab: {
            ewgf: VALUES.yes,
            notes: null
        },
        tsunami: {
            ewgf: VALUES.yes,
            notes: null
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.no,
            notes: null
        },
        electricNairDgf: {
            lowest: 17,
            consistentLow: 27,
            fullHopMax: 54,
            shortHopMax: 56,
            onlyFullHopAtLowest: VALUES.no
        },
        electricOnBlock: {
            advantage: 1,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.yes,
            twoFrames: VALUES.yes,
            notes: "Doesn't get 2-framed when grabbing ledge from as far as possible (Both Up- and Side-B)."
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.no,
            armorsUntil: null,
            notes: null
        }
    },
    "sora": {
        dthrow: {
            ewgf: VALUES.yes,
            notes: null
        },
        nair: {
            ewgf: VALUES.yes,
            utilt: VALUES.yes,
            cjab: VALUES.yes,
            notes: null
        },
        trip: {
            ewgf: VALUES.no,
            utilt: VALUES.no,
            notes: null
        },
        cjab: {
            ewgf: VALUES.yes,
            notes: null
        },
        tsunami: {
            ewgf: VALUES.depends,
            notes: "Can SDI in and air dodge away/down and away. Possible to hit with specific spacing. "
        },
        dgf: {
            hits: VALUES.yes,
            tippers: VALUES.no,
            notes: null
        },
        electricNairDgf: {
            lowest: 15,
            consistentLow: 25,
            fullHopMax: 43,
            shortHopMax: 45,
            onlyFullHopAtLowest: VALUES.yes
        },
        electricOnBlock: {
            advantage: 4,
            canTrip: VALUES.no
        },
        dragonUpperOnLedge: {
            hits: VALUES.no,
            twoFrames: null,
            notes: null
        },
        rapidJabArmor: {
            hasRapidJab: VALUES.no,
            armorsUntil: null,
            notes: null
        }
    },
}

export function getValueTypes() {
    return Object.freeze(VALUES);
}

export function getFighterList(value) {
    return FIGHTER_LIST;
}

export function getFighter(fighterId) {
    const filtered = FIGHTER_LIST.filter(f => f.id === fighterId);
    if (filtered.length > 0) {
        return Object.freeze(filtered[0]);
    } else {
        return null;
    }
}

// export function getComboFoodFighters() {
//     const comboFoodFighters = [];
//     for (let i = 0; i < FIGHTER_LIST.length; i++) {
//         let fighterId = FIGHTER_LIST[i].id;
//         const requirements = (
//             (FIGHTER_DETAILS[fighterId]?.dthrow?.ewgf == VALUES.yes)
//             && (FIGHTER_DETAILS[fighterId]?.nair?.ewgf == VALUES.yes)
//             && (FIGHTER_DETAILS[fighterId]?.nair?.utilt == VALUES.yes)
//             && (FIGHTER_DETAILS[fighterId]?.nair?.cjab == VALUES.yes)
//             && (FIGHTER_DETAILS[fighterId]?.cjab?.ewgf == VALUES.yes)
//             && (FIGHTER_DETAILS[fighterId]?.tsunami?.ewgf == VALUES.yes)
//             && (FIGHTER_DETAILS[fighterId]?.dgf?.hits == VALUES.yes)
//         );
//         if (requirements) {
//             comboFoodFighters.push(fighterId);
//         }
//     }
//     console.log(comboFoodFighters);
// }

export function getFighterDetails(fighterId) {
    return Object.freeze(FIGHTER_DETAILS[fighterId]);
}