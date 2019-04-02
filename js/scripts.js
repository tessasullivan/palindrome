$(document).ready(function(){
  $("form#palindrome").submit(function(event){
    event.preventDefault();
    var word = $("input#wordToTest").val();
    console.log(word);
    $("#result").append(word);
  });

});
