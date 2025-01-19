document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.getElementsByClassName("tab");
  const tabContent = document.getElementsByClassName("tabContent");

  const handleTabChange = function (event) {
    let selected = 0;
    if(!this.classList.contains("active")){
      for (let i = 0; i < tabs.length; i++) {
        if (this !== tabs[i] && tabs[i].classList.contains("active")) {
          tabs[i].classList.remove("active");
        }else {
          this.classList.add("active")
        }
        if(this === tabs[i]) selected = i
      }
      for(let i=0; i< tabContent.length; i++){
        if(i !== selected){
          if(tabContent[i].classList.contains("active")){
            tabContent[i].classList.remove("active");
          }
        }else{
          tabContent[selected].classList.add("active");
          console.log(i, selected);
        }
      }
    }
  };
  console.log(tabs);
  console.log(tabContent);
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", handleTabChange);
  }
});
