import $ from "jquery";

var token = "015bcffa7448d38641bc2204b3543971326c85db";

$.ajaxSetup({
  headers: {
    "Authorization": "token " + token
  }
});
