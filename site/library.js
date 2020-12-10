$(document).ready(function() {
    $("button").click(function() {
        var favorite = [];
        $.each($("input[name='Book']:checked"), function() {
            favorite.push($(this).val());
        });
        $.empty();
        $.each(favorite, function(index, value) {
                $("#result").append("Books" + ": " + value + '<br>');
            }

        );


    });
});