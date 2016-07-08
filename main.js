// Create a constructor that builds objects representing generic playing cards. The playing card should keep track of its suit and value (Ace, 2, 3, ... Jack, Queen, King).
//
function CardConstructor(suit, value) {
    this.suit = suit;
    this.value = value;
}

var newCard = new CardConstructor("heart", 5);
console.log(newCard);

// Create a constructor that builds objects representing a six sided dice. The die should keep track of the current value that it shows (1-6) and have a roll method that will simulate rolling the die. Rolling the die should change the current number.


function DieConstructor() {
    this.value = Math.ceil(Math.random() * 6);
    this.roll = function(){
      this.value = Math.ceil(Math.random() * 6);
      return this.value;
    };
}

var newDie = new DieConstructor();
var newDie2 = new DieConstructor();

// newDie.value;
// newDie2.value;
newDie.roll();
newDie2.roll();



// Create a function called getProbabilities that will simulate rolling two dice 1000 times. The function should return an array that shows the number of times the sum of the two die added up to 2, 3, 4, ... 12. For example:


function getProbabilities(num, times) {
    this.value = Math.ceil(Math.random() * 6);
    this.roll = function(){
      this.value = Math.ceil(Math.random() * 6);
       var sum = $('this.value') + $('this.value');
       console.log(sum);
          this.num = num;
          this.value = value;
          var result = new Array();
          for ( var count = 0; count < num ; count++ ) {
            result[ count ] = Math.round( Math.random() * numSides ) % numSides + 1;
          }
          return result;
        };

      };

    }
