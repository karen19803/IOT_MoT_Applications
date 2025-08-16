// "OnPageLoad" code for last status page

sessionStorage.setItem('BagID', '69887');
var bagId = sessionStorage.getItem("BagID");

if (bagId == null) {
  window.location.replace("https://learning.masterofthings.com/rte.html?project=41104&page=2");
} else {
  var Query = `SELECT * FROM GROUP_${bagId} ORDER BY TimeStamp DESC LIMIT 1`
  debugger
  ExecuteQueryModified(Query, SearchBag)

  function SearchBag(err, result) {
    if (result.response) {
      debugger
      var data = JSON.parse(result.response);

      if (data[0].R > 100) {
        SetPluginParameterValue('Map 1', 'Border color', 'red');
      } else {
        SetPluginParameterValue('Map 1', 'Border color', 'green');
      }
      if (data[0].currentLuxValue > 10) {
        SetPluginParameterValue('Map 1', 'Marker URL', 'https://cdn-icons-png.flaticon.com/128/5840/5840854.png');

      } else {
        SetPluginParameterValue('Map 1', 'Marker URL', 'https://cdn-icons-png.flaticon.com/128/6935/6935859.png');
      }
    }


    SetPluginParameterValue('Map 1', 'SQL query statement', data);
    DrawPlugin('Map 1');

  }
}
