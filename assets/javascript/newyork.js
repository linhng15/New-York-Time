// This is our API key. Add your own API key between the ""
    var APIKey = "5c83be52792b4987abf19bbfa4fb148a";

    // Here we are building the URL we need to query the database
    var queryURL = "https://api.nytimes.com/svc/archive/v1/2016/1.json" + APIKey;

    // We then created an AJAX call
    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
 
    });