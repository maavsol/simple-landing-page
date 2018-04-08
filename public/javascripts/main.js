$(document).ready(function() {
  $(".input-phone").on("input", function(event) {
    if ($(this).val()) {
      $(".submit-button").removeClass("blocked");
    }
    else{
      $(".submit-button").addClass("blocked")
    }
  });

  $(".submit-button").on("click", function(event) {
    event.preventDefault();
    var value = $("#email").val();
    $.ajax({
      url: "/sendEmail",
      type: "POST",
      data: { email: value }
    });
    $(".submit-button").html(
      'GRACIAS!'
    );

    setTimeout(()=>{
      $('.submit-button').html('QUIERO SABER MÁS')
    }, 2000)
  });
});
