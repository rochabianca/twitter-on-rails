$(document).on "turbolinks:load", ->
  $("#timeline .timeline--page, #timeline__profile .timeline--page").infiniteScroll
    path: "nav.pagination a[rel=next]" # selector for the NEXT link (to page 2)
    append: ".timeline--page" # selector for all items you'll retrieve
    elementScroll: ".timeline__scroll"
    status: '.timeline__status'


