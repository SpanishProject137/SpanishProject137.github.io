const verbfield = document.getElementById("verbcontainer");
const scrollbar = document.getElementById("scrollbar");
const conjugationMenu = document.getElementById("conjugation_menu");

const start = .3;
let offsetX, lastOffset = start;
setWidths(start);

scrollbar.addEventListener('mousedown', (event) => {
    const windowWidth = window.innerWidth
    event.preventDefault();
    offsetX =  event.clientX / windowWidth - lastOffset;

  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseup', handleMouseUp);
});

function handleMouseMove(event) {
    const windowWidth = window.innerWidth
    lastOffset = event.clientX / windowWidth - offsetX;
    setWidths(lastOffset);
}

function handleMouseUp() {
  document.removeEventListener('mousemove', handleMouseMove);
  document.removeEventListener('mouseup', handleMouseUp);
}

function setWidths(percentage) {
    verbfield.style.width = percentage * 100 + '%';
    conjugationMenu.style.width = (1 - percentage) * 100 + "%";
}