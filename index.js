let players = [["Kirsty"], ["Giles"], ["Paddy"], ["Beth"], ["Ed"], ["Toby"]];

let teams = [
  [{name: "Germany", group: "A", selected: false},
  {name: "Switzerland", group: "A", selected: false},
  {name: "Hungary", group: "A", selected: false},
  {name: "Scotland", group: "A", selected: false}],
  [{name: "Spain", group: "B", selected: false},
  {name: "Italy", group: "B", selected: false},
  {name: "Albania", group: "B", selected: false},
  {name: "Croatia", group: "B", selected: false}],
  [{name: "England", group: "C", selected: false},
  {name: "Denmark", group: "C", selected: false},
  {name: "Slovenia", group: "C", selected: false},
  {name: "Serbia", group: "C", selected: false}],
  [{name: "Netherlands", group: "D", selected: false},
  {name: "Austria", group: "D", selected: false},
  {name: "France", group: "D", selected: false},
  {name: "Poland", group: "D", selected: false}],
  [{name: "Ukraine", group: "E", selected: false},
  {name: "Slovakia", group: "E", selected: false},
  {name: "Belgium", group: "E", selected: false},
  {name: "Romania", group: "E", selected: false}],
  [{name: "Portugal", group: "F", selected: false},
  {name: "Czechia", group: "F", selected: false},
  {name: "Georgia", group: "F", selected: false},
  {name: "Turkiye", group: "F", selected: false}]
];

let counter = 0;

//! Using the Fisher-Yates shuffly algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  }

function playerAssigner(){
    //first shuffle the list of the players
    shuffleArray(players)
    //map through the now shuffled array 
    players.forEach((player)=>{
    teamAssigner(player)
    })
}
playerAssigner()

function teamAssigner(player){
    let teamIndex = Math.floor(Math.random()*teams.length)
    console.log(teams[teamIndex])
}








// // Function to assign a team to a player
// let teamAssigner = (player) => {
//   let selectedTeamIndex = Math.floor(Math.random() * teams.length);
//   let selectedTeam = teams[selectedTeamIndex];

//   // Check if the team is already selected or the player already has a team from the same group
//   if (selectedTeam.selected || player.some(p => p.group === selectedTeam.group)) {
//     teamAssigner(player); // Recursive call to reassign a team
//   } else {
//     player.push(selectedTeam);
//     selectedTeam.selected = true;
//     counter++;
//     console.log(teams);
//     players.forEach((player) => {
//       console.log(player);
//     });
//     if (counter !== teams.length) {
//       playerSelector(); // Continue assigning teams
//     } else {
//       console.log("The teams are as follows:");
//       console.log("------------------------------");
//       players.forEach(player => console.log(player));
//     }
//   }
// };

// // Function to select a player at random and assign a team
// let playerSelector = () => {
//   let selectedPlayerIndex = Math.floor(Math.random() * players.length);
//   let selectedPlayer = players[selectedPlayerIndex];
  
//   if (selectedPlayer.length <= Math.ceil(counter / players.length) + 1 && selectedPlayer.length < (teamsLength / playerLength) -1) {
//     console.log(selectedPlayer);
//     teamAssigner(selectedPlayer);
//   } else {
//     playerSelector(); // Recursive call to select another player
//   }
// };

// playerSelector();