const spanE1 = document.querySelector("main h4 span");
const txtArr = ['a medical student','a front-end developer', 'the multi-talented'];
let index = 0;
let currentTxt = txtArr[index].split('');
console.log(currentTxt);

function writeTxt(){
  spanE1. textContent += currentTxt.shift();
  if(currentTxt.length !==0){
    setTimeout(writeTxt, Math.floor(Math.random()*200));
  }else{
    currentTxt = spanE1. textContent.split("");
    setTimeout(deleteTxt, 1500);
  }
}

function deleteTxt(){
  currentTxt.pop();
  spanE1.textContent = currentTxt.join("");
  if(currentTxt.length !==0){
    setTimeout(deleteTxt, Math.floor(Math.random()*100) );
  }else{
    index = (index + 1)%txtArr.length;
    currentTxt = txtArr[index].split("");
    writeTxt();
  }
}

writeTxt();

const headerE1 = document.querySelector("header");
window. addEventListener("scroll", function(){
  const triggerBlock = document.querySelector("main");
  const triggerPosition = triggerBlock.getBoundingClientRect().bottom;

  if(triggerPosition < 0){
    headerE1.classList.add('active');
  }
  else{
    headerE1.classList.remove('active');
  }
}
)

const scrollMoveE1 = document.querySelectorAll("[data-animation-scroll='true']");
console. log(scrollMoveE1);
for(let i=0; i<scrollMoveE1.length; i++){
  scrollMoveE1[i].addEventListener("click", function(e){
    animationMove(this.dataset.target);
  })
}

const animationMove = function(selector){
  const target = document.querySelector(selector);
  const browserScrollY = window.scrollY;
  const targetScrollY = target.getBoundingClientRect().top + browserScrollY;
  window.scrollTo({top: targetScrollY, behavior:'smooth'});
}