let firstForm = document.querySelector(".container-1");
let secondForm = document.querySelector(".container-2");
let thirdForm = document.querySelector(".container-3");
let next = document.querySelectorAll("button");
let first = 0;
let radioInputs = document.querySelectorAll("input[name='step']");
let selectedTopics = [];
let currentStep = document.getElementById("current-step");
let containers = [firstForm, secondForm, thirdForm];

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function showForm(index) {
  currentStep.innerHTML = index + 1;
  let currentForm = containers[index];
  currentForm.style.display = "flex";
  
  for (let i = 0; i < containers.length; i++) {
    if (i !== index) {
      containers[i].style.display = "none";
    }
  }
}

function handleTopicSelection() {
  const topicItems = document.querySelectorAll('.li');
  
  topicItems.forEach(item => {
    // Click event for selection
    item.addEventListener('click', function() {
      const topic = this.getAttribute('data-topic');
      
      if (!selectedTopics.includes(topic)) {
        selectedTopics.push(topic);
        this.style.backgroundColor = '#5425AF';
      }
      
      updateSummaryTopics();
    });
    
    // Double-click event for deselection
    item.addEventListener('dblclick', function() {
      const topic = this.getAttribute('data-topic');
      const index = selectedTopics.indexOf(topic);
      
      if (index > -1) {
        selectedTopics.splice(index, 1);
        this.style.backgroundColor = '#394150';
      }
      
      updateSummaryTopics();
    });
  });
}

function updateSummaryTopics() {
  const topicsList = document.querySelector('.selected-topics');
  topicsList.innerHTML = '';
  
  selectedTopics.forEach(topic => {
    const li = document.createElement('li');
    li.textContent = topic;
    topicsList.appendChild(li);
  });
}

// Step 1 to Step 2
next[0].addEventListener("click", function() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  
  if (!name || !email) {
    alert("Please fill in all fields");
    return;
  }
  
  if (!isValidEmail(email)) {
    alert("Please enter a valid email address");
    return;
  }
  
  document.getElementById("fin-name").textContent = name;
  document.getElementById("fin-email").textContent = email;
  first++;
  showForm(first);
  radioInputs[first].checked = true;
  handleTopicSelection();
});

// Step 2 to Step 3
next[1].addEventListener("click", function() {
  first++;
  showForm(first); 
  radioInputs[first].checked = true;   
});

// Final submission
next[2].addEventListener("click", function() {
  alert("Success");
});