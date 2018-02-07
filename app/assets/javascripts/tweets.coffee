# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
$(document).ready ->
  $("#timeline .timeline--page, #timeline--profile .timeline--page").infiniteScroll
    path: "nav.pagination a[rel=next]" # selector for the NEXT link (to page 2)
    append: ".timeline--page" # selector for all items you'll retrieve

# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
