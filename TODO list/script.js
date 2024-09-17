const colors=["red","blue","white","green","purple","yellow","cyan","aqua"];
const taskInput=document.querySelector(".taskInput");
const btn=document.querySelector(".addBtn");
const tasks=document.querySelector('.tasks');
let count=0;
btn.addEventListener("click",()=>{
   
    const li=document.createElement('li');
    const classOfLi=document.createAttribute('class');
    classOfLi.value="task";
    li.setAttributeNode(classOfLi);
    tasks.appendChild(li);
    count=count+1;
    li.innerHTML=`<span class="indexing">${count}</span> ${taskInput.value}<i class="fa-solid fa-trash-can delete"></i>`;

    const randomColor=Math.floor(Math.random()*colors.length);
    li.style.backgroundColor=`${colors[randomColor]}`;
  
    const deleteBtn=document.querySelector('.delete'); 
    deleteBtn.addEventListener('click', () => {
        li.remove(); 
    })
});
