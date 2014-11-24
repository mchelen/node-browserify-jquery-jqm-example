var $ = require('jquery');
$.mobile = require('jquery-mobile');

jqVersion = $().jquery;

$('#jq-version').text(jqVersion);

$(document).ready(function () {   
  setTimeout(function () {$.mobile.changePage('#pagetwo');}, 3000);
});

