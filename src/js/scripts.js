let acc = document.getElementsByClassName("accordion");
let dropBtn = document.getElementById('dropbtn');
let menu = document.getElementById('myDropdown');

dropBtn.addEventListener('click', () => {  
  menu.classList.contains('show') ? 
    menu.classList.remove('show') : 
    menu.classList.add('show');  
})

menu.addEventListener('click', () => {  
  menu.classList.contains('show') ? 
    menu.classList.remove('show') : 
    menu.classList.add('show'); 
})

for (const element of acc) {
  element.addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

