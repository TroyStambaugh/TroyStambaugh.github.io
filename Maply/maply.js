var locationName;
var lat;
var long;
var newMap = 0;




function lookupLatLong_Complete(result) {
    lat = result.results[0].geometry.location.lat;
    long = result.results[0].geometry.location.lng;
    console.log(lat, long);

    locationName = result.results[0].formatted_address;

    generateNewCard();
}


function lookupLatLong(city, state, loc) {
    // Create the address
    var address = "";
    if (loc.length != 0) {
        address = loc.trim();
    }
    else if (city.length != 0 && state != 0) { 
        address = city.trim() + ", " + state;
    }
    else {
        return;
    }

    // Taking valid info from above and sending it to google to get location info
    var googleUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyD0omu4G7k-0bvqMP7QFcpxwUI88YbFEaI";

    var request = {
        url: googleUrl,
        success: lookupLatLong_Complete
    };

    $.ajax(request);
}

function Locationlookup_Click() {
    var loc = $("#Lookup").val();
    lookupLatLong("", "", loc);
}

function newCard() {
    var template =
        $("#templateCard").html(); /* this will get all of the html from the template i created */

    //Now we need to put the real values into the actual div
    template = template.replace("@@CURCTY@@", locationName);
    template = template.replace("@@NEWMAP@@", newMap);
    
   

    return template;
};
function generateNewCard() {

    var card = newCard();
    $("#cards").append(card);
    google.maps.event.trigger(newMap, "resize");
    displayMap();

}
function displayMap() {
                    initMap();
                }

function initMap() {
        var uluru = {lat: lat, lng: long};
        var map = new google.maps.Map(document.getElementById(newMap), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
        newMap++;
        

 
      }

      

$(function () {
    $("#Lookup").focus();
    //This starts the entire process of going through all of the functions to get the data needed
    $("#Locationlookup").on("click", Locationlookup_Click);

    $(document).on('click', '#removeCard', function () {
        $(this).closest('div').remove();
    });
    $(document).on('change', '#map', function () {
        $(this).closest('div').remove();
    });
    
});