$(document).ready( function() {
  $('#rbutton').on('click', function() {
    userChoice = 'rock'
    $('#player_choice').text('You chose: rock')
    console.log('You chose: rock')
  })
  $('#pbutton').on('click', function() {
    userChoice = 'paper'
    $('#player_choice').text('You chose: paper')
    console.log('You chose: paper')
  })
  $('#sbutton').on('click', function () {
    userChoice = 'scissors'
    $('#player_choice').text('You chose: scissors')
    console.log('You chose: ' + userChoice)
  })
  $('.buttons').on('click', function() {
    $('#champ').text(winner)
    $('#computer_choice').text('Computer chose: ' + computerChoice)
  })
})

var computerChoice = Math.random();
if (computerChoice < 0.34) {
  computerChoice = "rock";
} else if (computerChoice <= 0.67) {
  computerChoice = "paper";
} else {
  computerChoice = "scissors";
}
    var winner = function() {
      if (userChoice === computerChoice) {
        $('#champ').text("It's a Tie!")
      }
      if (userChoice === 'rock') {
        if (computerChoice === 'scissors') {
          $('#champ').text("You Win!!!")
          console.log("Win")
        } else {
          $('#champ').text("You Lose!")
          console.log("Lose")
        }
      }
      if (userChoice === 'paper') {
        if (computerChoice === 'rock') {
          $('#champ').text("You Win!!!")
        } else {
          $('#champ').text("You Lose!")
        }
      }
      if (userChoice === 'scissors') {
        if (computerChoice === 'paper') {
          $('#champ').text("You Win!!!")
        } else {
          $('#champ').text("You Lose!")
        }
      }
    }

  


