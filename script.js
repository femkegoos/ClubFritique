function openNav() {
  document.getElementById("mySidepanel").style.width = "100%"; // of 250px, afhankelijk van je ontwerp
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

// Menu links sluiten sidepanel op mobiel
const menuLinks = document.querySelectorAll('.sidepanel a');
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    closeNav();
  });
});
