// "OnPageLoad" code for historical data page

sessionStorage.setItem('BagID', '69887');

var bagId = sessionStorage.getItem("BagID");

if (bagId == null) {
  window.location.replace("https://learning.masterofthings.com/rte.html?project=41104&page=2");
} else {
  var Query = `SELECT * FROM GROUP_${bagId}order by TimeStamp desc limit 1`
  debugger
  ExecuteQueryModified(Query, SearchBag)

  function SearchBag(err, result) {
    if (result.response) {
      debugger
      data = JSON.parse(result.response);

    }

    SetPluginParameterValue('Map 1', 'SQL query statement', data);
  }
}
