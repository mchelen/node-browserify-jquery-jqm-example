var $ = require('jquery');
jqVersion = $().jquery;
$('#jq-version').text(jqVersion);

$.mobile.loading( "show", {
  text: "foo",
  textVisible: true,
  theme: "z",
  html: ""
});
