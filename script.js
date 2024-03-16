function toggleTooltip(index) {
    var tooltip = document.getElementById("tooltip" + index);
    if (tooltip.style.visibility === "visible") {
        tooltip.style.visibility = "hidden";
        tooltip.style.opacity = "0";
    } else {
        tooltip.style.visibility = "visible";
        tooltip.style.opacity = "1";
    }
}
