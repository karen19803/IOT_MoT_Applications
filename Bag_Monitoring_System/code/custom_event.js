// Sends email if bag opens or leaves geofence

event.log('Bag_tracking');

var radius = Sensor.cached.R;
var lux = Sensor.cached.currentLuxValue;
var sensorId = Sensor.profile.SensorId;


event.log("Sensor ID: " + sensorId);

const query = `SELECT * FROM APPLICATION_8729 WHERE BagID = '${sensorId}' LIMIT 1;`

SearchIn(query, function (err, result) {
  if (err) {
    event.error("Query Error: " + err);
    return;
  }

  if (!result || result.length === 0) {
    event.error("Bag not found");
    return;
  }

  var CustomerEmail = result[0].Email;

  const opt = {
    "host": "smtp.gmail.com",
    "port": "587",
    "username": "karenelbardan19@gmail.com",
    "password": "nswb pfxg zpdt evci",
    "to": CustomerEmail,
  };

  if (radius > 100) {
    opt.subject = "Bag has moved";
    opt.body = "The bag has moved out of allowed range.";
    SendEmail(opt);
    event.log("Sent: Bag is Out");
  }

  if (lux > 10) {
    opt.subject = "Bag is Open";
    opt.body = "Caution! Your bag has opened.";
    SendEmail(opt);
    event.log("Sent: Bag is Open");
  }

  event.end();
});
