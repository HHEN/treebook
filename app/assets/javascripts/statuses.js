statusToggler = function() {
    return $('.status').hover(function(event) {
        return $(this).toggleClass("hover");
    });
};
// call statusToggler when the document is ready:
$(statusToggler);
document.addEventListener("page:load", statusToggler);