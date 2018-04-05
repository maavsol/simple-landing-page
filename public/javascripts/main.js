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
    $(".content-form").append(
      "<b class='message'style='margin: 30px 30px 30px 0; color: red'>Email received. We'll get back to you shortly. Thank you</b>"
    );

    setTimeout(()=>{
      $('.message').remove()
    }, 2000)
  });
});
