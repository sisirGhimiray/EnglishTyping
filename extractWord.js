import spanEle  from "./spanEle.js";
let container=document.querySelector(".container");
let timeOutInterValIdContainer=[];
let barStimulationIntervalIdContainer=[];
const eleFragment=document.createRange().createContextualFragment(spanEle);
const fragmentElement=eleFragment.querySelectorAll("*");
fragmentElement.forEach(function(ele,idx){
   container.insertAdjacentElement("beforeend",ele);

})

 const mainElement=container.querySelectorAll("*");

 const removeSetTimeOut=function(){
   timeOutInterValIdContainer.forEach((el)=>{
      clearTimeout(el);
   })
   b.style.opacity=1;
   let n=0;
   while(timeOutInterValIdContainer[n]!=undefined){
      timeOutInterValIdContainer.pop();
      n++;
   }
}

const removeBarStimulationId=function(){
   barStimulationIntervalIdContainer.forEach((el)=>{
      clearInterval(el);
   });
   document.querySelector(".text_box").querySelector(".text_bar").style.opacity=0;
   let n=0;
   while(barStimulationIntervalIdContainer[n]!=undefined){
      barStimulationIntervalIdContainer.pop();
      n++;
   }
}


let b=document.querySelector(".button");
const barStimulation=function(count){
   let barInterval=setInterval(()=>{
     if(count%2==0){
       document.querySelector(".text_box").querySelector(".text_bar").style.opacity=1;
     }else{
       document.querySelector(".text_box").querySelector(".text_bar").style.opacity=0;
     }
     count++;
   },700);
   barStimulationIntervalIdContainer.push(barInterval);
 }

 const changeStyle=function(ele){
  ele.style.opacity=1;
}
const moveUpInInterval=function(point=0,ele){
  let getRandomIndex=Math.trunc(Math.random()*position.length);
  ele.style.marginLeft=`${position[getRandomIndex]}px`;
  // ele.style.marginBottom="16px";
  ele.style.position="absolute";
 let intervalId= setInterval(function(){
   if(Math.abs(parseInt(ele.style.marginTop))>664){
    ele.style.opacity=0;
    ele.style.marginTop="0px";
    clearInterval(intervalId);
   }
    point-=0.5;
    ele.style.marginTop=`${point}px`;
  },10)
  intervalIdContainer.push(intervalId);
  eleAttachToIntervalIdContainer.push(ele);
}
let easyLevel=document.querySelector("#easy");
let speed=parseInt(easyLevel.value);
let speedMeter=document.querySelectorAll("input[name='choose_level']");
speedMeter.forEach(function(el){
  el.addEventListener("change",function(e){
      speed=parseInt(el.value);
  })
})



b.addEventListener('click',function(e){
   b.style.opacity=0;
   barStimulation(0);
   e.preventDefault();
   for(const [idx,el] of mainElement.entries()){
  let timeOutIntervalId=setTimeout(function(){
   changeStyle(el);
   moveUpInInterval(0,el);
   },idx*speed)
   timeOutInterValIdContainer.push(timeOutIntervalId);
   }

})



// ##########################################################


let score=document.querySelector(".score");
let scoreInQuitModal=document.querySelector(".score_in_quit_modal");
let highScoreInQuitModal=document.querySelector(".highscore_in_quit_modal");
const closeQuitModal=document.querySelector(".close-modal");
const openQuitModal=document.querySelector(".quit");
const quitModal=document.querySelector(".quit_modal");
const noToQuitModal=document.querySelector(".no");
const startAgain=document.querySelector(".start_again");
const customButton=document.querySelector(".customization");
const chooseLevel=document.querySelector(".speed_level_modal");
const yesToQuit=document.querySelector(".yes");

const showLevelModal=function(){
  chooseLevel.classList.remove("hide_speed_level");
  chooseLevel.classList.add("show_speed_level");
}
const removeLevelModal=function(){
  chooseLevel.classList.add("hide_speed_level");
  chooseLevel.classList.remove("show_speed_level");
}

customButton.addEventListener("mouseover",function(e){
  showLevelModal();
  chooseLevel.addEventListener("mouseout",removeLevelModal);
  chooseLevel.addEventListener("mouseover",showLevelModal);
});
customButton.addEventListener("mouseout",removeLevelModal);
let indexEnter=[];
let intervalIdContainer=[];
let eleAttachToIntervalIdContainer=[];
const checkIndex=function(ind,vector){
  for(let i=0;i<vector.length;i++){
    if(ind==vector[i]){
      return 1;
    }
  }
    return 0;
}
let scoreBoard={
  score:0,
  highScore:0,
}

let position=[];
for(let i=144;i<1150;i+=36){
  position.push(i);
}


let t=document.querySelector(".show_text");
t.textContent="";

const backSpace=function(){
  let str=[],i=0;
  while(i<=t.textContent.length-1){
      str.push(t.textContent[i]);
    i++;
  }
  str.pop();
  t.textContent="";
  str.forEach(function(el){
   t.textContent+=el;
  })
}
// TAB,CAPSLOCK,ALTGRAPH,CONTROL,META
// Writing on the text Box;
// character for text box;

window.addEventListener("keydown",function(e){
 e.preventDefault();
  if(e.key==="Backspace"){
    backSpace();
  }
  
  if(e.key.length==1){
   console.log(e.key);
   t.textContent+=e.key;
  }

  for(const [idx,el] of mainElement.entries()){
   if(el.textContent===t.textContent){
     if(Math.abs(parseInt(el.style.marginTop))>0&&Math.abs(parseInt(el.style.marginTop)<662)
     &&checkIndex(idx,indexEnter)==0){
        indexEnter.push(idx);
        el.style.opacity=0;
        el.style.marginTop="0px";
        t.textContent="";
        scoreBoard.score+=1;
        score.textContent=scoreBoard.score;
        if(scoreBoard.score>scoreBoard.highScore){
          scoreBoard.highScore=scoreBoard.score;
        }
   
      }
    }
  }
  
})





//   mainElement.forEach(function(el,idx){
//   if(el.textContent===t.textContent){
//     if(!(Math.abs(parseInt(el.style.marginTop))<117)&&Math.abs(parseInt(el.style.marginTop)<714)
//     &&checkIndex(idx,indexEnter)==0){
//       el.style.opacity=0;
//       el.style.marginTop="0px";
//       t.textContent="";
//       scoreBoard.score+=1;
//       score.textContent=scoreBoard.score;
//       if(scoreBoard.score>scoreBoard.highScore){
//         scoreBoard.highScore=scoreBoard.score;
//       }
//       indexEnter.push(idx);
 
//     }
//     el.style.marginTop="0px";
//   }
//   })
  
 
  


 // quit and customization Button Function



//.hide_quit_modal .show_quit_modal
const showQuitModal=function(){
   quitModal.classList.remove("hide_quit_modal");
   quitModal.classList.add("show_quit_modal");
   scoreInQuitModal.textContent=scoreBoard.score;
   highScoreInQuitModal.textContent=scoreBoard.highScore;
}
const removeQuitModal=function(){
   quitModal.classList.remove("show_quit_modal");
   quitModal.classList.add("hide_quit_modal");
   scoreInQuitModal.textContent=0;
}
const reloadPage=function(){
  document.querySelector(".show_text").textContent="";
  indexEnter=[];
  scoreBoard.score=0;
  score.textContent=0;
  removeSetTimeOut();
  removeBarStimulationId();
   intervalIdContainer.forEach(function(ele){
    clearInterval(ele);
   })
    // eleAttachToIntervalIdContainer.forEach(function(ele){
    //   ele.style.marginTop="0px";
    // })
   removeQuitModal();
   eleAttachToIntervalIdContainer.forEach(function(el){
    el.style.opacity=0;
    el.style.marginTop="0px";
   })
   eleAttachToIntervalIdContainer=[];
   intervalIdContainer=[];
 
};
openQuitModal.addEventListener("click",showQuitModal);
closeQuitModal.addEventListener("click",removeQuitModal);
noToQuitModal.addEventListener("click",removeQuitModal);
startAgain.addEventListener("click",function(e){
e.preventDefault();
reloadPage();
});

yesToQuit.addEventListener("click",function(e){
e.preventDefault();
reloadPage();
})
 
  
    
 