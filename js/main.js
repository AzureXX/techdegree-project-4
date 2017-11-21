$("#search").on("keyup change", function() {
  var $input = $("#search").value.toUpperCase();
  var  $col=$(".gallery-item");
  var img;
  for(var i = 0; i < $col.length; i++ ) {
    var img = $col[i]
    if(img.html().toUpperCase.indexOf($input) > -1) {
      img.style.display = "";
    } else {
      img.style.display = "none";
    }
  }
});
