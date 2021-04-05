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
        
        <li>
        <p>${index+1}</p>
        <p>${nome}</p>
        <button onclick="deleteTask(${index})" type="button" class="done">Delete</button>
        <button onclick="edit(${index})" type="button" class="remove">Edit</button>
        </li>`;

        list.appendChild(item);
         //TROUBLE FOR TO REMOVE
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
note.value = listaItems[index];


};

