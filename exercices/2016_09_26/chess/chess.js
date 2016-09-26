function chess(size){
  /*  if (size % 2 == 0)*/
  for (var i = size; i >= 0; i--) {
    console.log(" #", i);
    if (i % 2 == 0){
      for (var j = size; j >= 0; j--){
        console.log("# ", j);
      }
    }
  }
}
chess(3);