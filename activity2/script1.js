// Add task
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `${taskText} <button onclick="removeTask(this)">Remove</button>`;
  taskList.appendChild(li);
  taskInput.value = "";
}

// Remove task
function removeTask(button) {
  button.parentElement.remove();
}

// Add image
function addImage() {
  const imageUrl = document.getElementById("imageUrl").value.trim();
  if (!imageUrl) {
    alert("Please enter an image URL.");
    return;
  }

  const gallery = document.getElementById("gallery");
  const card = document.createElement("div");
  card.className = "image-card";

  const img = document.createElement("img");
  img.src = imageUrl;
  img.alt = "User Image";

  const removeBtn = document.createElement("button");
  removeBtn.innerText = "×";
  removeBtn.onclick = function () {
    card.remove();
  };

  card.appendChild(img);
  card.appendChild(removeBtn);
  gallery.appendChild(card);

  document.getElementById("imageUrl").value = "";
}
