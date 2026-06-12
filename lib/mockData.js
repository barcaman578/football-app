// Placeholder data for the full app mock. No real backend/automation yet —
// every page below reads from here so the UI can be reworked against real
// Supabase data later without touching layout/markup.

export const leaderboardUsers = [
  { username: "tactical_ted", displayName: "Tactical Ted", club: "Arsenal", points: 4820, change: 1 },
  { username: "barcaman578", displayName: "You", club: "Barcelona", points: 4615, change: -1, isCurrentUser: true },
  { username: "klopptimist", displayName: "Klopptimist", club: "Liverpool", points: 4490, change: 2 },
  { username: "xg_queen", displayName: "xG Queen", club: "Man City", points: 4310, change: 0 },
  { username: "ultra_red", displayName: "Ultra Red", club: "Man United", points: 4105, change: -3 },
  { username: "elclasico_eddy", displayName: "El Clasico Eddy", club: "Real Madrid", points: 3980, change: 1 },
  { username: "catenaccio_carl", displayName: "Catenaccio Carl", club: "Juventus", points: 3870, change: 4 },
  { username: "viva_bayern", displayName: "Viva Bayern", club: "Bayern Munich", points: 3755, change: -1 },
  { username: "fpl_failure", displayName: "FPL Failure", club: "Chelsea", points: 3602, change: 0 },
  { username: "park_the_bus", displayName: "Park The Bus", club: "Atletico Madrid", points: 3490, change: 2 },
];

export const privateLeagues = [
  { id: "league-1", name: "Football Twitter Mains", memberCount: 24, yourRank: 3 },
  { id: "league-2", name: "Sunday League Lads", memberCount: 8, yourRank: 1 },
  { id: "league-3", name: "Barca Til I Die", memberCount: 56, yourRank: 12 },
];

export const clubs = [
  { slug: "arsenal", name: "Arsenal", initials: "ARS", fans: 18400, sentiment: { positive: 62, neutral: 24, negative: 14 } },
  { slug: "barcelona", name: "Barcelona", initials: "BAR", fans: 31200, sentiment: { positive: 58, neutral: 20, negative: 22 } },
  { slug: "liverpool", name: "Liverpool", initials: "LIV", fans: 27600, sentiment: { positive: 71, neutral: 18, negative: 11 } },
  { slug: "man-city", name: "Man City", initials: "MCI", fans: 22900, sentiment: { positive: 65, neutral: 22, negative: 13 } },
  { slug: "man-united", name: "Man United", initials: "MUN", fans: 29800, sentiment: { positive: 34, neutral: 28, negative: 38 } },
  { slug: "real-madrid", name: "Real Madrid", initials: "RMA", fans: 33500, sentiment: { positive: 69, neutral: 19, negative: 12 } },
  { slug: "juventus", name: "Juventus", initials: "JUV", fans: 19700, sentiment: { positive: 49, neutral: 27, negative: 24 } },
  { slug: "bayern-munich", name: "Bayern Munich", initials: "BAY", fans: 21300, sentiment: { positive: 66, neutral: 21, negative: 13 } },
  { slug: "atletico-madrid", name: "Atletico Madrid", initials: "ATL", fans: 17800, sentiment: { positive: 55, neutral: 25, negative: 20 } },
  { slug: "chelsea", name: "Chelsea", initials: "CHE", fans: 25400, sentiment: { positive: 38, neutral: 28, negative: 34 } },
  { slug: "spurs", name: "Spurs", initials: "TOT", fans: 23100, sentiment: { positive: 42, neutral: 26, negative: 32 } },
  { slug: "newcastle", name: "Newcastle", initials: "NEW", fans: 14200, sentiment: { positive: 65, neutral: 20, negative: 15 } },
  { slug: "bvb", name: "Dortmund", initials: "BVB", fans: 19600, sentiment: { positive: 72, neutral: 18, negative: 10 } },
  { slug: "psg", name: "PSG", initials: "PSG", fans: 28900, sentiment: { positive: 49, neutral: 22, negative: 29 } },
  { slug: "inter", name: "Inter Milan", initials: "INT", fans: 22300, sentiment: { positive: 58, neutral: 24, negative: 18 } },
  { slug: "ac-milan", name: "AC Milan", initials: "MIL", fans: 20800, sentiment: { positive: 61, neutral: 21, negative: 18 } },
  { slug: "napoli", name: "Napoli", initials: "NAP", fans: 18500, sentiment: { positive: 69, neutral: 19, negative: 12 } },
  { slug: "aston-villa", name: "Aston Villa", initials: "AVL", fans: 11700, sentiment: { positive: 67, neutral: 20, negative: 13 } },
];

export const seasonPredictions = [
  {
    id: "champions-league-winner",
    title: "Champions League Winner",
    points: 60,
    options: ["Real Madrid", "Man City", "Barcelona", "Bayern Munich", "Liverpool", "Arsenal"],
  },
  {
    id: "top-scorer",
    title: "Top Scorer (Top 5 Leagues)",
    points: 50,
    options: ["Erling Haaland", "Kylian Mbappe", "Harry Kane", "Vinicius Jr.", "Lautaro Martinez"],
  },
  {
    id: "top-assister",
    title: "Top Assister (Top 5 Leagues)",
    points: 40,
    options: ["Jude Bellingham", "Bukayo Saka", "Kevin De Bruyne", "Pedri", "Florian Wirtz"],
  },
  {
    id: "golden-glove",
    title: "Golden Glove (Most Clean Sheets)",
    points: 35,
    options: ["Alisson", "Ederson", "Thibaut Courtois", "Marc-Andre ter Stegen", "David Raya"],
  },
  {
    id: "premier-league-winner",
    title: "Premier League Winner",
    points: 50,
    options: ["Man City", "Arsenal", "Liverpool", "Chelsea"],
  },
];

export const mediumTermPredictions = [
  {
    id: "q1-form-team",
    title: "Best Form Team — Aug to Oct",
    points: 25,
    deadline: "Oct 31",
    options: ["Arsenal", "Liverpool", "Real Madrid", "Bayern Munich", "Atletico Madrid"],
  },
  {
    id: "q1-breakout-player",
    title: "Breakout Player — Aug to Oct",
    points: 20,
    deadline: "Oct 31",
    options: ["Lamine Yamal", "Kobbie Mainoo", "Endrick", "Arda Guler", "Warren Zaire-Emery"],
  },
  {
    id: "q1-manager-out",
    title: "First Manager Sacked",
    points: 15,
    deadline: "Oct 31",
    options: ["Erik ten Hag", "Unai Emery", "Vincenzo Italiano", "Thomas Frank"],
  },
];

export const shortTermPredictions = [
  {
    id: "gw12-arsenal-liverpool",
    title: "Arsenal vs Liverpool",
    points: 10,
    deadline: "Sat 15:00",
    options: ["Arsenal Win", "Draw", "Liverpool Win"],
  },
  {
    id: "gw12-clasico",
    title: "Real Madrid vs Barcelona",
    points: 10,
    deadline: "Sat 17:30",
    options: ["Real Madrid Win", "Draw", "Barcelona Win"],
  },
  {
    id: "gw12-derby",
    title: "Man United vs Man City",
    points: 10,
    deadline: "Sun 16:30",
    options: ["Man United Win", "Draw", "Man City Win"],
  },
  {
    id: "gw12-anytime-scorer",
    title: "Anytime Scorer — Bayern vs Dortmund",
    points: 8,
    deadline: "Sun 17:30",
    options: ["Harry Kane", "Jamal Musiala", "Karim Adeyemi", "Serhou Guirassy"],
  },
];

export const playerStockOptions = [
  { name: "Erling Haaland", club: "Man City", category: "Goals" },
  { name: "Jude Bellingham", club: "Real Madrid", category: "Goal Contributions" },
  { name: "Lamine Yamal", club: "Barcelona", category: "Assists" },
  { name: "Florian Wirtz", club: "Bayer Leverkusen", category: "Goal Contributions" },
  { name: "Alisson", club: "Liverpool", category: "Clean Sheets" },
  { name: "Bukayo Saka", club: "Arsenal", category: "Goals + Assists" },
  { name: "Vinicius Jr.", club: "Real Madrid", category: "Goals" },
  { name: "Kobbie Mainoo", club: "Man United", category: "Trophies Won" },
];

export const transferTargets = {
  arsenal: [
    { name: "Viktor Gyokeres", position: "ST", currentClub: "Sporting CP", fee: "€85m" },
    { name: "Joshua Zirkzee", position: "ST", currentClub: "Bologna", fee: "€42m" },
    { name: "Ivan Fresneda", position: "RB", currentClub: "Valladolid", fee: "€18m" },
  ],
  barcelona: [
    { name: "Nico Williams", position: "LW", currentClub: "Athletic Bilbao", fee: "€58m" },
    { name: "Joao Neves", position: "CM", currentClub: "Benfica", fee: "€70m" },
    { name: "Dean Huijsen", position: "CB", currentClub: "Bournemouth", fee: "€35m" },
  ],
  liverpool: [
    { name: "Martin Zubimendi", position: "CDM", currentClub: "Real Sociedad", fee: "€60m" },
    { name: "Bryan Mbeumo", position: "RW", currentClub: "Brentford", fee: "€45m" },
    { name: "Leny Yoro", position: "CB", currentClub: "Lille", fee: "€55m" },
  ],
  "man-city": [
    { name: "Jeremie Frimpong", position: "RB", currentClub: "Bayer Leverkusen", fee: "€40m" },
    { name: "Khvicha Kvaratskhelia", position: "LW", currentClub: "Napoli", fee: "€90m" },
    { name: "Joshua Kimmich", position: "CM", currentClub: "Bayern Munich", fee: "€50m" },
  ],
  "man-united": [
    { name: "Matthijs de Ligt", position: "CB", currentClub: "Bayern Munich", fee: "€40m" },
    { name: "Jonathan Tah", position: "CB", currentClub: "Bayer Leverkusen", fee: "€35m" },
    { name: "Savinho", position: "RW", currentClub: "Man City", fee: "€50m" },
  ],
  "real-madrid": [
    { name: "Alphonso Davies", position: "LB", currentClub: "Bayern Munich", fee: "€20m" },
    { name: "Florian Wirtz", position: "AM", currentClub: "Bayer Leverkusen", fee: "€130m" },
    { name: "Marc Guehi", position: "CB", currentClub: "Crystal Palace", fee: "€45m" },
  ],
  juventus: [
    { name: "Teun Koopmeiners", position: "CM", currentClub: "Atalanta", fee: "€55m" },
    { name: "Albert Gudmundsson", position: "AM", currentClub: "Genoa", fee: "€30m" },
    { name: "Riccardo Calafiori", position: "CB", currentClub: "Bologna", fee: "€38m" },
  ],
  "bayern-munich": [
    { name: "Florian Wirtz", position: "AM", currentClub: "Bayer Leverkusen", fee: "€130m" },
    { name: "Jonathan Tah", position: "CB", currentClub: "Bayer Leverkusen", fee: "€35m" },
    { name: "Nico Williams", position: "LW", currentClub: "Athletic Bilbao", fee: "€58m" },
  ],
  "atletico-madrid": [
    { name: "Goncalo Ramos", position: "ST", currentClub: "PSG", fee: "€55m" },
    { name: "Dani Olmo", position: "AM", currentClub: "RB Leipzig", fee: "€60m" },
    { name: "Marc Pubill", position: "RB", currentClub: "Almeria", fee: "€15m" },
  ],
  chelsea: [
    { name: "Victor Osimhen", position: "ST", currentClub: "Napoli", fee: "€120m" },
    { name: "Alejandro Garnacho", position: "LW", currentClub: "Man United", fee: "€55m" },
    { name: "Leny Yoro", position: "CB", currentClub: "Lille", fee: "€55m" },
  ],
  spurs: [
    { name: "Jarrod Bowen", position: "RW", currentClub: "West Ham", fee: "€40m" },
    { name: "Morgan Gibbs-White", position: "AM", currentClub: "Nottm Forest", fee: "€50m" },
    { name: "Wilson Odobert", position: "LW", currentClub: "Burnley", fee: "€18m" },
  ],
  newcastle: [
    { name: "Marc Guehi", position: "CB", currentClub: "Crystal Palace", fee: "€45m" },
    { name: "Liam Delap", position: "ST", currentClub: "Ipswich", fee: "€18m" },
    { name: "Noni Madueke", position: "RW", currentClub: "Chelsea", fee: "€35m" },
  ],
  bvb: [
    { name: "Xavi Simons", position: "AM", currentClub: "RB Leipzig", fee: "€70m" },
    { name: "Ardon Jashari", position: "CM", currentClub: "Club Brugge", fee: "€25m" },
    { name: "Benjamin Sesko", position: "ST", currentClub: "RB Leipzig", fee: "€65m" },
  ],
  psg: [
    { name: "Mathys Tel", position: "LW", currentClub: "Bayern Munich", fee: "€50m" },
    { name: "Ivan Toney", position: "ST", currentClub: "Brentford", fee: "€40m" },
    { name: "Gabri Veiga", position: "CM", currentClub: "Celta Vigo", fee: "€35m" },
  ],
  inter: [
    { name: "Ademola Lookman", position: "RW", currentClub: "Atalanta", fee: "€45m" },
    { name: "Samuele Ricci", position: "CM", currentClub: "Torino", fee: "€30m" },
    { name: "Strahinja Pavlovic", position: "CB", currentClub: "RB Salzburg", fee: "€18m" },
  ],
  "ac-milan": [
    { name: "Jonathan David", position: "ST", currentClub: "Lille", fee: "€60m" },
    { name: "Zeno Debast", position: "CB", currentClub: "Anderlecht", fee: "€22m" },
    { name: "Joshua Zirkzee", position: "ST", currentClub: "Bologna", fee: "€42m" },
  ],
  napoli: [
    { name: "Romelu Lukaku", position: "ST", currentClub: "Chelsea", fee: "€30m" },
    { name: "Azzedine Ounahi", position: "CM", currentClub: "Angers", fee: "€12m" },
    { name: "Boulaye Dia", position: "ST", currentClub: "Salernitana", fee: "€15m" },
  ],
  "aston-villa": [
    { name: "Liam Delap", position: "ST", currentClub: "Ipswich", fee: "€18m" },
    { name: "James Trafford", position: "GK", currentClub: "Burnley", fee: "€20m" },
    { name: "Tomas Holes", position: "CM", currentClub: "Sparta Prague", fee: "€8m" },
  ],
};

export const friends = [
  { username: "klopptimist", displayName: "Klopptimist", points: 4490, club: "Liverpool" },
  { username: "xg_queen", displayName: "xG Queen", points: 4310, club: "Man City" },
  { username: "catenaccio_carl", displayName: "Catenaccio Carl", points: 3870, club: "Juventus" },
];

export const similarFans = [
  {
    username: "tactical_ted",
    displayName: "Tactical Ted",
    similarity: 92,
    sharedTraits: ["Both rate Pedri over Bellingham", "Both predicted Arsenal top 4 last season", "Same top 5: Messi era picks"],
  },
  {
    username: "elclasico_eddy",
    displayName: "El Clasico Eddy",
    similarity: 87,
    sharedTraits: ["Both Barcelona fans since 2008", "Both backed Yamal for breakout player", "Similar takes on transfer business"],
  },
  {
    username: "viva_bayern",
    displayName: "Viva Bayern",
    similarity: 81,
    sharedTraits: ["Both undervalue Bundesliga defenders", "Both picked Wirtz as a stock", "Agree on Golden Glove pick"],
  },
];

export const hotTakes = [
  { id: "take-1", username: "fpl_failure", club: "Chelsea", text: "Chelsea will finish top 4 this season.", fire: 12, skull: 340 },
  { id: "take-2", username: "ultra_red", club: "Man United", text: "Man United are one striker away from winning the title.", fire: 8, skull: 512 },
  { id: "take-3", username: "tactical_ted", club: "Arsenal", text: "Arsenal's front three is the best in Europe right now.", fire: 289, skull: 41 },
  { id: "take-4", username: "park_the_bus", club: "Atletico Madrid", text: "Simeone's tactics are still ahead of the curve.", fire: 156, skull: 98 },
  { id: "take-5", username: "klopptimist", club: "Liverpool", text: "This Liverpool squad is better than the 2019 Champions League winners.", fire: 64, skull: 203 },
];

export const fanIdentityOptions = {
  clubs: ["Arsenal", "Barcelona", "Liverpool", "Man City", "Man United", "Real Madrid", "Juventus", "Bayern Munich", "Chelsea", "Atletico Madrid"],
  nations: ["England", "Spain", "Brazil", "Argentina", "France", "Germany", "Portugal", "Norway", "Netherlands", "Italy"],
  players: ["Lionel Messi", "Cristiano Ronaldo", "Erling Haaland", "Kylian Mbappe", "Jude Bellingham", "Pedri", "Vinicius Jr.", "Bukayo Saka", "Kevin De Bruyne", "Thierry Henry"],
};
