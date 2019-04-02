function testPalindrome(word){
  // split word at the halfway point
  // reverse 2nd half and compare
  var splitWord = word.split("");
  var firstHalf = splitWord.slice(0, splitWord.length/2);
  var secondHalf = splitWord.reverse().slice(0, splitWord.length/2);

  if (firstHalf.toString() === secondHalf.toString()) {
    return true;

  } else {
    return false;
  }


}


$(document).ready(function(){
  $("form#palindrome").submit(function(event){
    event.preventDefault();
    var word = $("input#wordToTest").val();
    var result = testPalindrome(word);
    if (result) {
      $("#result").empty;
      $("#result").append("This is a palindrome");
    } else {
      $("#result").empty;
      $("#result").append("This is NOT a palindrome");
    }
  });

});
