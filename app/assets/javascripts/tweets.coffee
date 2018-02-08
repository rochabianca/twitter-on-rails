$(document).ready ->
  $("#timeline .timeline--page, #timeline--profile .timeline--page").infiniteScroll
    path: "nav.pagination a[rel=next]" # selector for the NEXT link (to page 2)
    append: ".timeline--page" # selector for all items you'll retrieve

