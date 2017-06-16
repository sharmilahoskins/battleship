//Model****************************************************



//declare variables
var torpedoesLeft
var board =[[],[],[],[],[],[],[],[],[],[]]
var hits
var shipArray=[]
const ship = 1
const ship5 = 5
const ship4 = 4
const ship3 = 3
const ship2 = 2
var pass

var h2Array = []
var shipsLeft = 8
var h2Count = 0

var proposedCoordinate

//make and place a 5 ship horizontal
function place5(){
  var coordinate1 = Math.floor(Math.random() * 10)
  var coordinate2 = Math.floor(Math.random() * 6)
  console.log("5 ship coordinate is " + coordinate1 + coordinate2)
  //place 55555 ship on board array
  for (i=0; i<5; i++) {
    board[coordinate1][coordinate2 + i]= ship5
    $("#"+ coordinate1 + (coordinate2 + i)).addClass("ship5")
    shipArray.push(coordinate1.toString()+(coordinate2 + i).toString())
    // console.log("at the end of place5, shipArray is: " + shipArray)
  }
}

//make and place a 4 ship vertical
function place4(){
  var coordinate1 = Math.floor(Math.random() * 7)
  var coordinate2 = Math.floor(Math.random() * 10)
  var passed = true;

  shipArray.forEach(function(item, index) {
    if ((coordinate1.toString()+ coordinate2.toString()) === item || ((coordinate1 + 1).toString()+ coordinate2.toString()) === item || ((coordinate1 + 2).toString()+ coordinate2.toString()) === item || ((coordinate1 + 3).toString()+ coordinate2.toString()) === item) {
      passed = false
      console.log("Calling place4 function AGAIN!")
      place4()
    }
  })
    if (passed) {
      for (i=0; i<4; i++) {
        board[coordinate1 + i][coordinate2]= ship4
        $("#"+ (coordinate1 + i) + coordinate2).addClass("ship4")
        shipArray.push((coordinate1 + i).toString()+ coordinate2.toString())
      }
    }
  console.log("4 ship vertical coordinate is " + coordinate1 + coordinate2)
}

//places horizontal 4 ship
function place4Horizontal(){
  // console.log("starting place4Horizontal function")
  var coordinate1 = Math.floor(Math.random() * 10)
  var coordinate2 = Math.floor(Math.random() * 7)
  var passed = true;

  shipArray.forEach(function(item, index) {
    // console.log("starting place4Horizontal shipArray forEach ")
    if ((coordinate1.toString()+ coordinate2.toString()) === item || (coordinate1.toString()+ (coordinate2+1).toString()) === item || (coordinate1.toString()+ (coordinate2+2).toString()) === item || (coordinate1.toString()+ (coordinate2+3).toString()) === item) {
      passed = false
      console.log("Calling place4Horizontal function AGAIN!")
      place4Horizontal()
    }
  })
    if (passed) {
      // console.log("in place4Horizontal if passed section")
      for (i=0; i<4; i++) {
        // console.log("in place4Horizontal for i=0 i<4 i++ section")
        board[coordinate1][coordinate2 + i]= ship4
        $("#"+ coordinate1+ (coordinate2+i)).addClass("ship4")
        shipArray.push(coordinate1.toString()+ (coordinate2+i).toString())
      }
    }
  console.log("4 ship horizontal coordinate is " + coordinate1 + coordinate2)
}


//make and place a 3 ship horizontal
function place3(){
  var coordinate1 = Math.floor(Math.random() * 10)
  var coordinate2 = Math.floor(Math.random() * 8)
  var passed = true

  //place 333 ship on board array
  shipArray.forEach(function(item, index) {
    if ((coordinate1.toString()+ coordinate2.toString()) === item || (coordinate1.toString()+ (coordinate2+1).toString()) === item || (coordinate1.toString()+ (coordinate2+2).toString()) === item ) {
      passed = false
      console.log("Calling place3 function AGAIN!")
      place3()
    }
  })
    if (passed) {
      for (i=0; i<3; i++) {
      board[coordinate1][coordinate2 + i]= ship3
      $("#"+ coordinate1 + (coordinate2 + i)).addClass("ship3")
      shipArray.push(coordinate1.toString()+(coordinate2 + i).toString())
      }
    }
  console.log("3 ship coordinate is " + coordinate1 + coordinate2)
}

//make and place a 3 ship vertical
function place3Vertical(){
  var coordinate1 = Math.floor(Math.random() * 8)
  var coordinate2 = Math.floor(Math.random() * 10)
  var passed = true
  shipArray.forEach(function(item, index) {
    if ((coordinate1.toString()+ coordinate2.toString()) === item || ((coordinate1 + 1).toString()+ coordinate2.toString()) === item || ((coordinate1 + 2).toString()+ coordinate2.toString()) === item) {
    passed = false
     console.log("Calling place3Vertical function AGAIN!")
     place3Vertical()
   }
 }) //closes for each
   if (passed) {
    for (i=0; i<3; i++) {
     board[coordinate1 + i][coordinate2]= ship3
     $("#"+ (coordinate1 + i) + coordinate2).addClass("ship3")
    shipArray.push((coordinate1 + i).toString()+ coordinate2.toString())
    }
    console.log("3 ship vertical coordinate is " + coordinate1 + coordinate2)
  }
} //closes place3Vertical function

//make and place a 2 ship vertical
function place2(){
  var coordinate1 = Math.floor(Math.random() * 9)
  var coordinate2 = Math.floor(Math.random() * 10)
  var passed = true
  shipArray.forEach(function(item, index) {
    if ((coordinate1.toString()+ coordinate2.toString()) === item || ((coordinate1 + 1).toString()+ coordinate2.toString()) === item ) {
    passed = false
     console.log("Calling place2 function AGAIN!")
     place2()
   }
 }) //closes for each
   if (passed) {
    for (i=0; i<2; i++) {
     board[coordinate1 + i][coordinate2]= ship2
     $("#"+ (coordinate1 + i) + coordinate2).addClass("ship2")
    shipArray.push((coordinate1 + i).toString()+ coordinate2.toString())
    }
    console.log("2 ship coordinate is " + coordinate1 + coordinate2)
  }
} //closes place2 vertical function

//make and place a 2 ship horizontal
function place2Horizontal(){
  var coordinate1 = Math.floor(Math.random() * 10)
  var coordinate2 = Math.floor(Math.random() * 9)
  var passed = true

  //place 22 ship on board array
  shipArray.forEach(function(item, index) {
    if ((coordinate1.toString()+ coordinate2.toString()) === item || (coordinate1.toString()+ (coordinate2+1).toString()) === item) {
      passed = false
      console.log("Calling place2 horizontal function AGAIN!")
      place2Horizontal()
    }
  })
    if (passed) {
      for (i=0; i<2; i++) {
      board[coordinate1][coordinate2 + i]= ship3
      $("#"+ coordinate1 + (coordinate2 + i)).addClass("ship2")
      shipArray.push(coordinate1.toString()+(coordinate2 + i).toString())
      h2Array.push(coordinate1.toString()+(coordinate2 + i).toString())

      }
    }
  console.log("2 ship horizontal coordinate is " + coordinate1 + coordinate2)
}

//make and place a 1 block ship
function place1() {
  var coordinate1 = Math.floor(Math.random() * 10)
  var coordinate2 = Math.floor(Math.random() * 10)
  var passed=true

  shipArray.forEach(function(item, index) {
    if ((coordinate1.toString()+ coordinate2.toString()) === item ) {
      passed=false
      console.log("Calling place1 function AGAIN")
      place1();
    }
  })
    if (passed) {
    board[coordinate1][coordinate2]= ship
    $("#"+ coordinate1 + coordinate2).addClass("ship1")
    shipArray.push(coordinate1.toString()+ coordinate2.toString())
    }
  console.log("1 ship coordinate is " + coordinate1 + coordinate2)
} //end of place1 function






//build board for view in html
//eq(i) gets element of position i
function makeTable() {
  for (i = 0; i < 10; i++){
    $("#board").append("<tr>")
    $("tr").eq(i).attr("id", "row" + i) //for tr[i] we add an id="row[i]"
      for (j = 0; j<10; j++){
        $("tr").eq(i).append("<td id=" + i + j + ">") //for each tr we add 10 tds and give tds an id="[i][j]"
      }
  }
}

//show ships function
function showAllShips() {
  if($("td").hasClass("ship5")) {
    console.log("added ship5show")
    $(".ship5").addClass("ship5show")
  }
  if ($("td").hasClass("ship4")) {
    $(".ship4").addClass("ship4show")
  }
  if($("td").hasClass("ship3")) {
    console.log("added ship3show")
    $(".ship3").addClass("ship3show")
  }
  if($("td").hasClass("ship2")) {
    console.log("added ship2show")
    $(".ship2").addClass("ship2show")
  }
  if($("td").hasClass("ship1")) {
    console.log("added ship1show")
    $(".ship1").addClass("ship1show")
  }
  if($("td").hasClass("hit")){
    $(".hit").addClass("hit2")
  }
}

//Controller***********************************************
//***********************************************

$(document).ready(function(){
  //on load you see table
  makeTable() //create board
  $("td").off("click"); //clicking off until start button pressed

  //Once start button clicked all this happens:
  $(".btn").click(function(){

    //make board all light blue: (reset)
    $("td").removeClass("torpedoed");
    $("td").removeClass("hit");
    $("td").removeClass("hit2");
    $("td").removeClass("ship1show");
    $("td").removeClass("ship2show");
    $("td").removeClass("ship3show");
    $("td").removeClass("ship4show");
    $("td").removeClass("ship5show");
    $("td").removeClass("ship1");
    $("td").removeClass("ship2");
    $("td").removeClass("ship3");
    $("td").removeClass("ship4");
    // $("td").removeClass("ship4Horizontal");
    $("td").removeClass("ship5");

    //setting variables to 0/empty
    shipArray=[];
    board = [[],[],[],[],[],[],[],[],[],[]];
    hits=0;
    torpedoesLeft=10;

    //clear text on screen
    $("#hitTracker").text("Hits: " + hits);
    $("#torpedoTracker").text("Torpedoes left: " + torpedoesLeft);
    $("#winLose").text("");

    //hide start button until game over
    $(".btn").hide();

    place5()
    place4()
    place4Horizontal()
    place3()
    place3Vertical()
    place2()
    place2Horizontal()
    place1()
    console.log("shipArray is: " + shipArray)

    //each time user clicks specific square:
    $("td").click(function(){
      var currentTd = $(this).attr("id") //grab id of td clicked
      var dig0 = currentTd[0] //split td, get first digit
      var dig1 = currentTd[1] //split td, get 2nd digit

      //turn square red or blue if ship is hit or not
      if (board[dig0][dig1] === ship || board[dig0][dig1] === ship2 || board[dig0][dig1] === ship3 || board[dig0][dig1] === ship4 || board[dig0][dig1] === ship5 ){
        //turns square red
        $(this).addClass("hit");
        hits ++

      //  if 2hArray contains the coordinate,

      if (h2Array.includes(dig0 + dig1)){
        h2Count++
        console.log("h2Count is: " + h2Count)
        if (h2Count === 2 ){
          shipsLeft--
          console.log("shipsLeft is:" + shipsLeft)
        }
      }


        $("#hitTracker").text("Hits: " + hits)
        if (hits === 5) {
          $("#winLose").text("You Won!!!");
          $("td").off("click");
          console.log("calling showAllShips function because won")
          showAllShips()
          $(".btn").show(); //show start button
        }
      } else { //turns square dark blue (miss)
      $(this).addClass("torpedoed");
      $(this).off("click"); //can't click same square twice
      }
    torpedoesLeft--;
    //update torpedo count on screen
    $("#torpedoTracker").text("Torpedoes left: " + torpedoesLeft);
    //check if used 25 torpedos.  Game over, show start button, turn board click off
    if(torpedoesLeft === 0){
      $("#winLose").text("Game Over.");
      $("td").off("click");
      console.log("callind showAllShips if you lose")
      showAllShips() //after game over, show ships they did not hit
      $(".btn").show();
    }
  })
console.log("game is starting")
})

})







      // if(board[dig0][dig1] === ship5) {
      //   $(this).addClass("hit");
      //   for (i=0; i<10; i++){
      //     if(board[dig0][i] === ship5){
      //       $("#" + dig0 + parseInt(i)).addClass("hit");
      //     }
      //   }
      //   hits ++
      //   $("#hitTracker").text("Hits: " + hits)
      // }
      // if(board[dig0][dig1] === ship4) {
      //   $(this).addClass("hit");
      //   for (i=0; i<10; i++){
      //     if(board[i][dig1] === ship4 || board[dig0][i] === ship4){
      //       $("#" + parseInt(i) + dig1).addClass("hit");
      //     }
      //   }
      //   hits ++
      //   $("#hitTracker").text("Hits: " + hits)
      // }
      // if(board[dig0][dig1] === ship3) {
      //   $(this).addClass("hit");
      //   for (i=0; i<10; i++){
      //     if(board[dig0][i] === ship3){
      //       $("#" + dig0 + parseInt(i)).addClass("hit");
      //     }
      //   }
      //   hits ++
      //   $("#hitTracker").text("Hits: " + hits)
      // }
      // if(board[dig0][dig1] === ship2) {
      //   $(this).addClass("hit");
      //   for (i=0; i<10; i++){
      //     if(board[i][dig1] === ship2){
      //       $("#" + parseInt(i) + dig1).addClass("hit");
      //     }
      //   }
      //   hits ++
      //   $("#hitTracker").text("Hits: " + hits)
      // }

      // $("#" + dig0 + (parseInt(dig1)+1)).addClass("hit");
