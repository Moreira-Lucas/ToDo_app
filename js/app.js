let note = document.querySelector(`input`);
let btnSave = document.querySelector(`.btnSave`);
let list = document.querySelector(`ul`);

let listaItems =  JSON.parse(localStorage.getItem('item'));
if(listaItems){
render();
}else{
  listaItems = [];
}


//listaItems?render():[];  

function save(){
  let noteSaved = note.value;
  if(noteSaved === ''){
    alert('Preencha esta merda!')
  }else{ 
    listaItems.unshift(noteSaved);
    localStorage.setItem('item',JSON.stringify(listaItems));
    list.innerHTML="";
    
    render();
  }
}
function render(){
  listaItems.map((nome, index)=>{
        let item = document.createElement('DIV');
  
        item.innerHTML = `
        
        <li class="collection-item z-depth-1">
        <span>${index+1}</span>
        <p>${nome}</p>
        <button onclick="deleteTask(${index})" type="button" class="btnDeleteTask"><i class="material-icons">delete_forever</i></button>
        <button onclick="edit(${index})" type="button" class="btnEdit"><i class="material-icons">edit</i></button>
        </li>`;

        list.appendChild(item);
         //TROUBLE FOuR TO REMOVE
        /*let btnRemove = document.querySelector(".remove");
        btnRemove.onclick = () =>{
          item.style.display = "none";
        }*/
        
    });


};

function deleteTask(index){
  listaItems.splice(index,1);
  localStorage.setItem('item',JSON.stringify(listaItems));
  list.innerHTML="";
  render();

}

function edit(index){
note.value =  listaItems[index];
let pos = index;
console.log(index)
let btnUpdate = document.querySelector(".btnUpdate");

btnUpdate.style.display = "inline";
btnSave.style.display= "none";
btnUpdate.addEventListener("click", ()=>{
  let edited = listaItems[pos];
  edited = note.value; 
  console.log(edited);
  listaItems[index] = edited;
  localStorage.setItem('item',JSON.stringify(listaItems));
  list.innerHTML="";
  render();

  
})

};

