

function details(){
    var name=document.getElementById("named").value;
    var email = document.getElementById("email").value;

    if(name.trim() == '' || email.trim() == ''){
        alert("Enter email and name");
        return;
    }

}

const maininput  = document.querySelector('#form input');
let fill = JSON.parse(localStorage.getItem('fill')) || []
var listed = document.getElementById("listed")
var list = document.createElement("p")

list.innerHTML = `
<div class="content">
<div class="det">
<h2>${named}</h2>
<p>${email}</p>
</div>
<div class="box">
<button id="remove" onclick="deleteitem(event)">Delete</button>
</div>
</div>`;
listed.appendChild(list);

listed. addEventListener('submit' ,(e) => {
    e.preventDefault()

    const inputvalue = maininput.value ;

    if(inputvalue == ''){
        return;
    }

    const fill= {
        id: new Date().getTime(),
        name:inputvalue,
      email address : inputvalue
    }

   fill.push(fill)
   localStorage.setItem('fill',JSON.stringify(fill))

createTask(fill)
})

