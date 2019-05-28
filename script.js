prophecies_url = "https://sf-pyw.mosyag.in/m04/api/forecasts"

$("#header").click(function() {
  
  $.getJSON(
    prophecies_url, 
    function(data) {
      advice = data["prophecies"],
      set_content_in_divs(advice)
    }, 
    console.log("True"),
  );
  $(document).ready(function(){
      $("#p-0").hover(
        function() {
          $(this).css("background-color", "#ccffff");
        },
        function(){
          $(this).css("background-color", "white")
        }
      );
      $("#p-1").hover(
        function() {
          $(this).css("background-color", "#ccffff");
        },
        function(){
          $(this).css("background-color", "white")
        }
      );
      $("#p-2").hover(
        function() {
          $(this).css("background-color", "#ccffff");
        },
        function(){
          $(this).css("background-color", "white")
        }
      );
      $("#p-3").hover(
        function() {
          $(this).css("background-color", "#ccffff");
        },
        function(){
          $(this).css("background-color", "white")
        }
      );
      $("#p-4").hover(
        function() {
          $(this).css("background-color", "#ccffff");
        },
        function(){
          $(this).css("background-color", "white")
        }
      );
      $("#p-5").hover(
        function() {
          $(this).css("background-color", "#ccffff");
        },
        function(){
          $(this).css("background-color", "white")
        }
      );
  });
})

function set_content_in_divs(prophecies) {
    $.each(
      prophecies, 
      function(i, d) {
        p = $("#p-" + i)
        p.html("<p>" + d + "</p>")
      }
    ), console.log("True")
}
