var tabs = document.getElementsByClassName("tab");
let tabsPanel = document.getElementsByClassName("tabPanel");
const openTab = function () {
  this.classList.toggle("active");
  let selected = 0;
  for (let i = 0; i < tabs.length; i++) {
    if(tabs[i] == this) selected = i;
    if (tabs[i] !== this && tabs[i].classList.contains("active")) {
      tabs[i].classList.toggle("active");
    }
  }
  for (let i = 0; i < tabsPanel.length; i++) {
    if(i == selected){
        tabsPanel[i].classList.toggle("active"); 
    }else {
        tabsPanel[i].classList.remove("active");
    }
  }
};
for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", openTab);
}
