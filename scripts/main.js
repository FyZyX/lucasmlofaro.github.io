function toggleMenuIcon(menuIcon) {
    menuIcon.classList.toggle("change");
}

function resizeImageContent() {
    // Set font size
    var maxWidth = window.screen.width;
    var width = $(window).width();
    var headingSize = scaleToRange(width, maxWidth, 4, 0.1).toString() + "em";
    $(".main_image .intro_content h2").css("font-size", headingSize);
    var textSize = scaleToRange(width, maxWidth, 2, 0.1).toString() + "em";
    var lineHeight = scaleToRange(width, maxWidth, 180, 130).toString() + "%";
    $(".main_image .intro_content p").css("font-size", textSize).css("line-height", lineHeight);

    // Set offset height
    var image = $(".main_image img");
    var introContent = $(".main_image .intro_content");
    var imageHeight = parseFloat(image.height());
    var contentHeight = parseFloat(introContent.outerHeight());
    var top = (imageHeight - contentHeight) / 2;
    introContent.css("top", top);
}

function sigmoid(x, m, a) {
    m = typeof m !== 'undefined' ? m : 0;
    a = typeof a !== 'undefined' ? a : 1;
    var z = (x - m) / a;
    return 1 / (1 + Math.exp(-z))
}

function inverseSigmoid(y, m, a) {
    m = typeof m !== 'undefined' ? m : 0;
    a = typeof a !== 'undefined' ? a : 1;
    return -a*Math.log(1/y - 1) + m
}

function scaleToRange(value, width, max, min) {
    return sigmoid(value, 0.7*width, width/3)*(max - min) + min
}

$(document).ready(function () {
    $("#menu_icon").click(function () {
        var ul = $("nav ul");
        if (ul.css("height") === "0px") {
            ul.animate({height: "150px", opacity: "1"});
        } else {
            ul.animate({height: "0px", opacity: "0"});
        }
    });

    resizeImageContent();

    $(window).resize(function () {
        resizeImageContent()
    });
});
