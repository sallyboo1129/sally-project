const scrollMoveE1 = document.querySelectorAll("[data-animation-scroll='true']")
console. log(scrollMoveE1);
for(let i=0; i<scrollMoveE1.length; i++){
  scrollMoveE1[i].addEventListener("click", function(e){
    console.log(e.target.datase.target);
  })
}