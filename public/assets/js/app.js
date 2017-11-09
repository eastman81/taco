// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-devour").on("click", function(event) {
    var id = $(this).data("id");
    var newEat = $(this).data("neweat");

    var newEatState = {
      devoure: newEat
    };

    // Send the PUT request.
    $.ajax("/api/tacos/" + id, {
      type: "PUT",
      data: newEatState
    }).then(
      function() {
        console.log("changed eat to", newEat);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newTaco = {
      name: $("#ta").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/tacos", {
      type: "POST",
      data: newTaco
    }).then(
      function() {
        console.log("created new taco");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
