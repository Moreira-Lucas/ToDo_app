const note = document.querySelector(`input`);
let btnSave = document.querySelector(`button`);
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
    listaItems.map((nome)=>{
        let item = document.createElement('DIV');
        item.innerHTML = `
        <li>
        <button>Remove</button>
        <p>${nome}</p>
        <button>Done</button>
        </li>`;
        list.appendChild(item);
    });
};