// create a X button to each list
let myNodeList = document.getElementsByTagName("LI");
for (let i = 0; i < myNodeList.length; i++) {
  const span = document.createElement("SPAN");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodeList[i].appendChild(span);
}

// click on X button to hide the current list
let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";
  };
}

// add a "checked" symbol when clicking on a list
let list = document.getElementById('myUL')
list.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// create a new list when the "Add" button clicked
function addTask() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput").value;

  if (inputValue === "") {
    alert("You must write something!");
  } else {
    let a = document.createElement("a");
    a.href = "#";
    a.appendChild(document.createTextNode(inputValue));

    li.appendChild(a);
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    };
  }
}

function searchTask() {
  let searchValue = document.getElementById("mySearch").value.toUpperCase();
  let ul = document.getElementById("myUL");
  let li = ul.getElementsByTagName("li");

  if (searchValue.value === "") {
    alert("You must write something!");
  }

  for (let i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName("a")[0];
    if (a && a.innerHTML.toUpperCase().indexOf(searchValue) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
  document.getElementById("mySearch").value = "";
}