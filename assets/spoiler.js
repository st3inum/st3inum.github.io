$(document).ready(function() {

  var switchesSelector = '.spoiler_block_show,.spoiler_block_hide';
  var contentSelector = '.spoiler_block_content';

  $(document).on('click', switchesSelector, function() {
    var selector = switchesSelector + ',' + contentSelector;
    $(this).parent().children(selector).toggle();
    return false;
  });
});

// function httpGet(theUrl)
// {
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
//     xmlHttp.send( null );
//     return xmlHttp.responseText;
// }