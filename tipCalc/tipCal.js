 var tip=0
 
//sets var ts= tip service, bt= bill total, sb= split bill, tip= the tip amount
    function cal() {
         $("#tf").empty();
        var ts = $("#ts").val();
        var bt = $("#bt").val();
        var sb = $("#sb").val();
        var tip=(bt/sb) *ts;

        //if left blank or text entered then will send alert
    if (bt== "" || bt == null) {
        alert("Enter bill total!");
        return false;}
        if (sb >=2){
            tip = (tip+(bt/sb));
        } 
    //tip field 
$("#tf").append("$"+tip.toFixed(2));    
}
function redo() {
    location.reload();
};
        function isNumberKey(evt) {
  var nk= (evt.which) ? evt.which : event.keyCode;
  if (nk != 46 && nk > 31 && (nk < 48 || nk> 57)) {
      return false;
  } else {
      return true;
  }
        }

