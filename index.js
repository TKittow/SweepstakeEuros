let players = [["Kirsty"], ["Giles"], ["Paddy"], ["Beth"], ["Ed"], ["Toby"]];

let teams = [
  [{ name: "Germany", group: "A", selected: false },
  { name: "Switzerland", group: "A", selected: false },
  { name: "Hungary", group: "A", selected: false },
  { name: "Scotland", group: "A", selected: false }],
  
  [{ name: "Spain", group: "B", selected: false },
  { name: "Italy", group: "B", selected: false },
  { name: "Albania", group: "B", selected: false },
  { name: "Croatia", group: "B", selected: false }],
  
  [{ name: "England", group: "C", selected: false },
  { name: "Denmark", group: "C", selected: false },
  { name: "Slovenia", group: "C", selected: false },
  { name: "Serbia", group: "C", selected: false }],
  
  [{ name: "Netherlands", group: "D", selected: false },
  { name: "Austria", group: "D", selected: false },
  { name: "France", group: "D", selected: false },
  { name: "Poland", group: "D", selected: false }],
  
  [{ name: "Ukraine", group: "E", selected: false },
  { name: "Slovakia", group: "E", selected: false },
  { name: "Belgium", group: "E", selected: false },
  { name: "Romania", group: "E", selected: false }],
  
  [{ name: "Portugal", group: "F", selected: false },
  { name: "Czechia", group: "F", selected: false },
  { name: "Georgia", group: "F", selected: false },
  { name: "Turkiye", group: "F", selected: false }]
];

let counter = 0;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function randomizer(type) {
  if (type === "group") {
    return Math.floor(Math.random() * 6);
  } else if (type === "team") {
    return Math.floor(Math.random() * 4);
  } else {
    return Math.floor(Math.random() * players.length);
  }
}

function playerAssigner() {
  if (counter === 24) return teams;

  shuffleArray(players);

  players.forEach((player) => {
    teamAssigner(player);
  });
}

function teamAssigner(player) {
  let groupIndex = randomizer("group");
  let teamIndex = randomizer("team");
  let thisTeam = teams[groupIndex][teamIndex];

  let groupsAlready = player.some((team) => team.group === thisTeam.group);

  if (thisTeam.selected || groupsAlready) {
    teamAssigner(player);
  } else {
    player.push(thisTeam);
    thisTeam.selected = true;
    counter++;
  }
}

playerAssigner();
console.log(players);
