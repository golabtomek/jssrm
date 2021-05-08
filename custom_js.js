jQuery(document).ready(function($) {
 $(function () {
        $("body > div.uk-container.uk-container-center.uk-margin-top.uk-margin-large-bottom > nav > ul > li:nth-child(1) > a").html("Session Results");
        $("body > div.uk-container.uk-container-center.uk-margin-top.uk-margin-large-bottom > nav > ul > li:nth-child(2) > a").html("Leaderboards");
        $("body > div.uk-container.uk-container-center.uk-margin-top.uk-margin-large-bottom > nav > ul > li:nth-child(3) > a").html("Championships");
        $("#notes_btn > a").text("Series Info");
        $("#rules_btn > a").text("Point System");
    });
});
