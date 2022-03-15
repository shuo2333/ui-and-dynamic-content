  function add() {
    console.log(inputControl.value);
    if(!inputControl.value){
      alert
      return
    }
    var listUl = document.querySelector(".list-ul");
    // var li = `<li class="list-li">${inputControl.value}</li>`;
    var li = document.createElement("li");
    li.className = "list-li";
    li.innerText = inputControl.value;
    console.log('li: ', li);
    listUl.appendChild(li);    
    inputControl.value = "";
  }
