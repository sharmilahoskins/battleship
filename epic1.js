//Model****************************************************

//Make table:
//Loop to append tds
//Nested loop to append rows
//Added IDs to each row and each td

var torpedoesUsed = 0;
// var board = [tr0[], tr1[], tr2[], tr3[], tr4[], tr5[], tr6[], tr7[], tr8[], tr9[]]
var board = [[],[],[],[],[],[],[],[],[],[]]
var hits = 0
var shipArray = []
const ship = 1


function placeShips(){
  for (i=0; i<5; i++){
    var placement = Math.floor(Math.random() * 100);
    if (placement < 10){
      placement = "0"+placement
    }
    var digit0 = placement.toString()[0];
    var digit1= placement.toString()[1];
    while(board[digit0][digit1] === ship) {
      placement = Math.floor(Math.random() * 100)
    }
    board[digit0][digit1] = ship;
    shipArray.push(digit0.concat(digit1))
    console.log("ship array is: " + shipArray)
    console.log("placement is: " + placement)
  }
}

function makeTable() {
  for (i = 0; i < 10; i++){
    $("#board").append("<tr>")
    $("tr").eq(i).attr("id", "row" + i)
      for (j = 0; j<10; j++){
        $("tr").eq(i).append("<td id=" + i + j + ">")
      }
  }
}

//Controller***********************************************
//***********************************************

$(document).ready(function(){
  makeTable() //create board
  $("td").off("click");

  // placeShips() //places ships

  $(".btn").click(function(){

    //make board all light blue:
    $("td").removeClass("torpedoed");
    $("td").removeClass("hit");
    $("td").removeClass("showShip");

    shipArray=[];
    board = [[],[],[],[],[],[],[],[],[],[]];
    hits=0;
    torpedoesUsed=0;
    $("#hitTracker").text("Hits: " + hits);
    $("#torpedoTracker").text("Torpedoes used: " + torpedoesUsed);
    $("#winLose").text("");

    $(".btn").hide();

    placeShips() //places ships

    $("td").click(function(){
      var currentTd = $(this).attr("id")
      var dig0 = currentTd[0]
      var dig1 = currentTd[1]
      if (board[dig0][dig1] === ship){
        $(this).addClass("hit");
        hits ++
        $("#hitTracker").text("Hits: " + hits)
        if (hits === 5) {
          $("#winLose").text("You Won!!!");
          $("td").off("click");
            $(".btn").show();
        }
      } else {
        $(this).addClass("torpedoed");
      }
      $(this).off("click");
      torpedoesUsed++;
      $("#torpedoTracker").text("Torpedoes used: " + torpedoesUsed);
      if(torpedoesUsed === 25){
        $("#winLose").text("Game Over.");
        $("td").off("click");
        $(".btn").show();


        for (i = 0; i < 5; i++){
          var temp = "#" + shipArray[i]
          if (!($(temp).hasClass("hit"))) {
            $(temp).addClass("showShip")
          }
        }

      }
    })
  console.log("game is starting")
})

  // function to change td color to red if a ship is hit and dark blue if torpedoed but not hit
  //function also counts torpedoes used and turns click off




})
