var $ = require('jquery');
$.mobile = require('jquery-mobile');

jqVersion = $().jquery;

$('#jq-version').text(jqVersion);

$.mobile.loading( "show", {
  text: "foo",
  textVisible: true,
  theme: "z",
  html: ""
});
