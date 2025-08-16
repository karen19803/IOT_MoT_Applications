// Code for login button action

var user_Name = getLoggedInUser().username

var query = `SELECT * FROM APPLICATION_8729 WHERE CustomerUsername = '${user_Name}'`

ExecuteQueryModified(query, Grid_1_callbackFunc);

function Grid_1_callbackFunc(error, xhr) {
  if (xhr.response) {
    Grid_1DataArr = JSON.parse(xhr.response);
    if (Grid_1DataArr.length > 0) {
      sessionStorage.setItem("bag_Id", Grid_1DataArr[0].BagID)
      Success("Logged successfully")
    } else {
      Warning('You have no bags in the system')
    }

  }
}
