GetLatestValueOfSensor(66569, function(res) {
  res = JSON.parse(res);
  console.log("res", res)

  var status = res.currentLuxValue
  if (status > 0 && status <= 10) {
    SetPluginParameterValue('Shape 3', 'Color', 'red');
    DrawPlugin('Shape 3');
  } else if (status > 10 && status <= 50) {
    SetPluginParameterValue('Shape 3', 'Color', 'green');
    DrawPlugin('Shape 3');
  } else if (status > 50) {
    SetPluginParameterValue('Shape 3', 'Color', 'yellow');
    DrawPlugin('Shape 3');
  }
});
