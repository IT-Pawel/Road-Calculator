function calculateRouteLength(placeA, placeB) {
    var apiKey = "{Key}";
    var directionsUrl = "https://www.mapquestapi.com/directions/v2/route";
    
    $.ajax({
      url: directionsUrl,
      data: {
        key: apiKey,
        from: placeA,
        to: placeB,
        unit: 'k',
      },
      dataType: "json",
      success: function(response) {
        if (response.info.statuscode === 0) {
          var routeLength = response.route.distance;
          console.log("Długość trasy: " + routeLength + " kilometrów");
        } else {
          console.log("Błąd: " + response.info.messages[0]);
        }
      },
      error: function(xhr, status, error) {
        console.log("Błąd: " + error);
      }
    });
  }
  
  // Przykładowe nazwy miejscowości
  var placeA = "Warszawa 00-001";
  var placeB = "Warszawa 36-245";
  
  calculateRouteLength(placeA, placeB);