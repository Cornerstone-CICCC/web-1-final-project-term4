$.prototype.draggable = function () {
  var t;
  $(this).each(function (i, e) {
    $(e).mousedown(function (e2) {
      e2.preventDefault();
      t = $(e);
      $(e).data({
        down: true,
        x: e2.clientX,
        y: e2.clientY,
        left: $(e).scrollLeft(),
        top: $(e).scrollTop(),
      });
    });
  });
  $(document)
    .mousemove(function (e) {
      if ($(t).data("down")) {
        e.preventDefault();
        $(t).scrollLeft($(t).data("x") + $(t).data("left") - e.clientX);
        $(t).scrollTop($(t).data("y") + $(t).data("top") - e.clientY);
      }
    })
    .mouseup(function () {
      $(t).data("down", false);
    });
};

function enableDraggable() {
  if ($(".slider-container").width() < $(".video-thumbnails").width()) {
    $(".slider-container").addClass("scroll-enabled").draggable();
  } else {
    $(".slider-container").removeClass("scroll-enabled").off("mousedown");
  }
}

$(document).ready(enableDraggable);
$(window).resize(enableDraggable);
