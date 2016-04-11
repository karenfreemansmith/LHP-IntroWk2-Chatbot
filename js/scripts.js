$(document).ready(function() {
  //alert("jQuery is working!"); //for texgting jQuery
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Why hello there!</li>");
    $("li").click(function() {
      //$(this).css("background-color","lime");
      $(this).remove();
    });
  });
  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Goodbye!</li>");
    $("ul#webpage").prepend("<li>Goodbye, dear user!</li>");
  });
  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");
  });
  var yourFavorites = [];
  $("button#likes").click(function() {
    var myFavorites = ["cats", "dogs", "ice cream", "toys", "cars", "music", "learning stuff"];
    var yourFavorite = $("input#favorite").val();
    yourFavorites.push(yourFavorite);
    $("ul#user").prepend("<li>I like " + yourFavorite + ".</li>");
    if(myFavorites.includes(yourFavorite)) {
      $("ul#webpage").prepend("<li>I like " + $("input#favorite").val() + " too!</li>");
    } else {
      $("ul#webpage").prepend("<li>I don't really like " + $("input#favorite").val() + " so much.</li>");
    }
    if(yourFavorites.length > 3) {
      var thingsIKnow=[];
      thingsIKnow.push(yourFavorites[1], yourFavorites[0], yourFavorites[2]);
      $("ul#webpage").prepend("<li>I know you really like " + thingsIKnow[0] + ", " + thingsIKnow[1] + ", and " + thingsIKnow[2] + ".</li>");
    }

  });


});
