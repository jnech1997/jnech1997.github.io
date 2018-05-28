/*$(document).ready(function(){
 $("#header").find("p").html("Welcome to the Website of Joseph Daniel Nechleba");
});*/

/* Important to note: a link to a script file represents that script file
 * executing where that link was placed */
/*d3.select("#svg_div").append("svg")
.attr("width", "200")
.attr("height", "200");*/

$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $(document).height()}, "slow");
        return false;
    });

});
