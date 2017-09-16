function toggleMenuIcon(menuIcon) {
    menuIcon.classList.toggle("change");
}

function setInitialMenuState(nav, ul) {
    nav.css("minHeight", "30px");
    ul.css("display", "none");
    ul.css("pointerEvents", "none");
    ul.css("cursor", "default");
}

function isMenuOpen(ul) {
    return ul.css("display") !== "none"
}

function openMenu(nav, ul) {
    console.log("opening");
    ul.css("display", "flex");
    nav.animate({minHeight: "150px"}, 500);
    ul.animate({ opacity: 1}, 500, function () {
        ul.css("pointerEvents", "auto");
        ul.css("cursor", "auto");
    });
}

function closeMenu(nav, ul) {
    console.log("closing");
    ul.css("pointerEvents", "none");
    ul.css("cursor", "default");
    nav.animate({minHeight: "30px"}, 300);
    ul.animate({opacity: 0}, 300, function () {
        ul.css("display", "none");
    });
}

$(document).ready(function () {
    var nav = $("nav");
    var ul = $("nav ul");

    setInitialMenuState(nav, ul);

    $("#menu_icon").click(function () {
        isMenuOpen(ul) ? closeMenu(nav, ul) : openMenu(nav, ul);
    });
});
