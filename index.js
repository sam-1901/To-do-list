document.querySelector("#push").onclick = function () {
    if (document.querySelector("#newtask input").value.length == 0) {
        alert("Please Enter something")
    }
    else {
        document.querySelector("#tasks").innerHTML
            += `
        <div class="task">
         <span>
         ${document.querySelector('#newtask input').value}
         </span>
         <button class="delete">
           <i class="far fa-trash-alt"></i>
         </button>
         </div>
        `;

        var curr_task = document.querySelectorAll(".delete");
        for (var i = 0; i < curr_task.length; i++) {
            curr_task[i].onclick = function () {
                this.parentNode.remove();
            }
        }

        var tasks = document.querySelectorAll(".task");
        for (var i = 0; i < tasks.length; i++) {
            tasks[i].onclick = function () {
                this.classList.toggle("completed");
            }
        }

        document.querySelector("#newtask input").value = "";

    }
}