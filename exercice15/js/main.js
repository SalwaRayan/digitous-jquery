$(function(){
  $("button").click(function(){
    $("#text").addClass("float")
    $(".float").attr({
      "class": "float-right"
    })
  })
})