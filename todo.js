document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskList = document.getElementById("taskList");

  if (taskInput.value === "") {
    alert("You must write something!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskInput.value;
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
    saveTasks();
  });

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.addEventListener("click", () => {
    taskList.removeChild(li);
    saveTasks();
  });

  li.appendChild(removeBtn);
  taskList.appendChild(li);

  taskInput.value = "";
  saveTasks();
}

function saveTasks() {
  const tasks = [];
  document.querySelectorAll("#taskList li").forEach((li) => {
    tasks.push({
      text: li.childNodes[0].textContent,
      completed: li.classList.contains("completed"),
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = task.text;
    if (task.completed) {
      li.classList.add("completed");
    }
    li.addEventListener("click", () => {
      li.classList.toggle("completed");
      saveTasks();
    });

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => {
      document.getElementById("taskList").removeChild(li);
      saveTasks();
    });

    li.appendChild(removeBtn);
    document.getElementById("taskList").appendChild(li);
  });
}
