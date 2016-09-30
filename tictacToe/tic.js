var x = 3
var o = 4
var row1c1 = 0
var row1c2 = 0
var row1c3 = 0
var row2c1 = 0
var row2c2 = 0
var row2c3 = 0
var row3c3 = 0
var row3c3 = 0
var row3c3 = 0
function begin() {
      row1c1 = $("#row1c1").val();
      row1c2 = $("#row1c2").val();
      row1c3 = $("#row1c3").val();
      row2c1 = $("#row2c1").val();
      row2c2 = $("#row2c2").val();
      row2c3 = $("#row2c3").val();
      row3c1 = $("#row3c1").val();
      row3c2 = $("#row3c2").val();
      row3c3 = $("#row3c3").val();
}
if (row1c1 + row1c2 + row1c3 == 333){
      setTimeout(xwin, 200);}
   else if (row1c1 + row1c2 + row1c3 == 444){
           setTimeout(owin, 200);}
    
    else if (row2c1 + row2c2 + row2c3 == 333){
        setTimeout(xwin, 200);}
   else if (row2c1 + row2c2 + row2c3 == 444){
           setTimeout(owin, 200);}
   
   else if (row3c1 + row3c2 + row3c3 == 333){
        setTimeout(xwin, 200);}
   else if (row3c1 + row3c2 + row3c3 == 444){
           setTimeout(owin, 200);}
   //cols//
   else if (row1c1 + row2c1 + row3c1 == 333){
        setTimeout(xwin, 200);}
   else if (row1c1 + row2c1 + row3c1 == 444){
          setTimeout(owin, 200);}
    
    else if (row1c2 + row2c2 + row3c2 == 333){
      setTimeout(xwin, 200);}
   else if (row1c2 + row2c2 + row3c2 == 444){
          setTimeout(owin, 200);}
  
   else if (row1c3 + row2c3 + row3c3 == 333){
        setTimeout(xwin, 200);}
   else if (row1c3 + row2c3 + row3c3 == 444){
            setTimeout(owin, 200);}
    // dia//
    else if (row1c1 + row2c2 + row3c3 == 333){
       setTimeout(xwin, 200);}
   else if (row1c1 + row2c2 + row3c3 == 444){
           setTimeout(owin, 200);}
     else if (row1c3 + row2c2 + row3c1 == 333){
        setTimeout(xwin, 200);}
   else if (row1c3 + row2c2 + row3c1 == 444){
            setTimeout(owin, 200);}
            else if (+row1c1 + +row1c2 + +row1c3 + +row2c1 + +row2c2 + +row2c3 + +row3c1 + +row3c2 + +row3c3 == ){
    alert(" The CAT wins");
    startOver();}
console.log(+row1c1 + +row1c2 + +row1c3 + +row2c1 + +row2c2 + +row2c3 + +row3c1 + +row3c2 + +row3c3 );








