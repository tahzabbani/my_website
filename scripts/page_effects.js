function displayTime() {
    var d = new Date();

    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var year = d.getFullYear(),
        month = d.getMonth() + 1,
        day = d.getDate(),
        hours = d.getHours(),
        minutes = d.getMinutes(),
        seconds = d.getSeconds();

    var ampm = (hours >= 12) ? "PM" : "AM"

    if (hours >= 12) hours -= 12;
    if (hours == 0) hours = 12;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    var strDay = days[d.getDay()];
    var fullDate = month + "." + day + "." + year;
    var fullTime = hours + ":" + minutes + ":" + seconds;


    $(".date").text(strDay + " " + fullDate);
    $(".time").text(fullTime + " " + ampm);
}

setInterval(displayTime, 1000);
$(window).on("load", function() {
    $(".animate-left-onload").css({
        "margin-left": "0px",
        "opacity": "1"
    });
    // $('animate-left-onload').addClass('animate-change');
    $(".animate-fade-onload").css({
        "opacity": "1"
    });
});

$(window).on("load", function() {
    $(window).scroll(function() {
        var windowTop = $(this).scrollTop();
        $(".animate-fade").each(function() {
            var topOfElem = $(this).offset().top
            if (topOfElem < (windowTop + ($(window).height() * 0.95))) {
                // change something about this??
                if ($(this).css("opacity") == 0) {
                    $(this).fadeTo(100, 1);
                }
            }
        });
    }).scroll();
});