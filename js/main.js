$("#search").on("keyup change", function() {
  var $input = $("#search").val.toUpperCase();
  var $col=$(".gallery-item");
  var img;
  for(var i = 0; i < $col.length; i++ ) {
    var img = $col[i]
    if($(img).html().toUpperCase().indexOf($input) > -1) {
      img.show;
    } else {
      img.hide;
    }
  }
});
