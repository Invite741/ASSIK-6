$(document).ready(function() {
    console.log("jQuery is ready!");

    $("#change-text").click(function() {
        $("#target-paragraph").text("Text changed via .text()");
        $(".target-class").html("<b>HTML changed via .html()</b>");
        $("h2").css("color", "blue");
    });

    $("#btn-hide").click(function() { $("#visibility-p").hide(); });
    $("#btn-show").click(function() { $("#visibility-p").show(); });
    $("#btn-toggle").click(function() { $("#visibility-p").toggle(); });

    $("#btn-fadein").click(function() { $("#fade-image").fadeIn(); });
    $("#btn-fadeout").click(function() { $("#fade-image").fadeOut(); });
    $("#btn-fadetoggle").click(function() { $("#fade-image").fadeToggle(); });

    $(".flip").click(function() { $(".panel").slideToggle(); });
    $("#btn-slideup").click(function() { $(".panel").slideUp(); });
    $("#btn-slidedown").click(function() { $(".panel").slideDown(); });

    let itemCount = 1;
    $("#btn-add").click(function() {
        $("#my-list").append("<li>New Item " + itemCount++ + "</li>");
    });
    $("#btn-remove").click(function() {
        $("#my-list li:last").remove();
    });

    $("#btn-change-src").click(function() {
        $("#dynamic-image").attr("src", "https://via.placeholder.com/150/0000FF");
    });
    $("#btn-change-href").click(function() {
        $("#dynamic-link").attr("href", "https://github.com");
        $("#dynamic-link").text("Go to GitHub");
    });

    $("#name-input, #email-input").on("keyup", function() {
        let name = $("#name-input").val();
        let email = $("#email-input").val();
        $("#live-output").text(name + " | " + email);
    });

    $("#btn-animate-basic").click(function() {
        $("#anim-box-1").animate({
            width: "200px",
            height: "200px",
            left: "50px"
        });
    });

    $("#btn-animate-seq").click(function() {
        let box = $("#anim-box-2");
        box.animate({left: '100px'}, "slow")
           .animate({top: '100px'}, "slow")
           .animate({width: '50px', height: '50px'}, "slow")
           .animate({left: '0', top: '0', width: '100px', height: '100px'}, "slow");
    });

    $("#btn-animate-combo").click(function() {
        $("#anim-box-3").animate({
            opacity: 0.5,
            width: "150px",
            left: "100px"
        });
    });

    $(".accordion").click(function() {
        $(this).toggleClass("active");
        $(this).next(".accordion-panel").slideToggle("fast");
    });
});