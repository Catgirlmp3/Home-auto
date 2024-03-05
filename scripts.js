function openNav() {
    document.getElementById("sideNavigation").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}
function closeNav() {
    document.getElementById("sideNavigation").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}


document.addEventListener("DOMContentLoaded", function() {
    const colorWheel = document.getElementById("color-wheel");
    const selectedColor = document.getElementById("selected-color");
  
    colorWheel.addEventListener("mousemove", function(event) {
      const x = event.offsetX / colorWheel.clientWidth;
      const y = event.offsetY / colorWheel.clientHeight;
      const angle = Math.atan2(y - 0.5, x - 0.5) + Math.PI;
      const hue = angle * (180 / Math.PI);
  
      const color = tinycolor({ h: hue, s: 1, l: 0.5 });
      selectedColor.style.backgroundColor = color.toHexString();
    });
  });