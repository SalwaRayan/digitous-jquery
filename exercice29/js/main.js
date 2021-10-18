$(function(){
  $("button").click(function(){
    var inputVal = $("input").val()
    if (inputVal.length > 5) {
      $("input").addClass("is-valid")
      $("input").removeClass("is-invalid")
    } else {
      $("input").addClass("is-invalid")
      $("input").removeClass("is-valid")
    }
  })
})