const divQuesAns=document.querySelectorAll('.div-ques-ans');

divQuesAns.forEach((divQues)=>{
  const btn=divQues.querySelector('.ques');
  btn.addEventListener('click',()=>{
     divQuesAns.forEach(item=>{
       if(item!==divQues){
         item.classList.remove('show-ans');
       }
     });
     divQues.classList.toggle('show-ans');
     console.log(divQues);
  });

})
